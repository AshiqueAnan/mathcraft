import type { Question, QuizSpec, Lesson, CommonMistake } from "@/content/schema";

export interface QuizSession {
  questionIds: string[];
  currentIndex: number;
  correctCount: number;
  answered: boolean[];
  /** wrongPattern keys matched from answers, for remediation. */
  mistakes: string[];
  /**
   * Per-sitting display shuffle, keyed by question id. What each value orders:
   * - mcq: option ids in display order
   * - drag-match: target strings in display order
   * - order-steps: sequence steps in display order
   * A missing key means "render authored order" (the SSR/hydration-safe default).
   * Scoring stays ID/content-based, so display order never affects correctness.
   */
  orderMap: Record<string, string[]>;
}

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/**
 * Build the per-question display-shuffle map for a sitting.
 * Only shuffle choice questions (mcq options, drag-match targets, order-steps).
 * This is what kills the "correct answer is always first" bias — options are
 * re-ordered for display while their stable ids/contents keep scoring correct.
 */
export function buildDisplayOrders(pool: Question[], questionIds: string[]): Record<string, string[]> {
  const map: Record<string, string[]> = {};
  for (const qid of questionIds) {
    const q = pool.find((p) => p.id === qid);
    if (!q) continue;
    if (q.type === "mcq") map[qid] = shuffle(q.options.map((o) => o.id));
    else if (q.type === "drag-match") map[qid] = shuffle(q.pairs.map((p) => p.target));
    else if (q.type === "order-steps") map[qid] = shuffle([...q.sequence]);
  }
  return map;
}

/** Attach display shuffles to an existing session (used post-hydration). */
export function withDisplayOrders(session: QuizSession, pool: Question[]): QuizSession {
  return { ...session, orderMap: buildDisplayOrders(pool, session.questionIds) };
}

/**
 * Build the FIRST attempt of a quiz deterministically (pool order, no shuffle).
 * This guarantees identical server and client output during SSR — preventing
 * hydration mismatches. Retakes use buildQuizSession (randomized).
 */
export function buildInitialSession(spec: QuizSpec): QuizSession {
  const { procedural, conceptual, word } = spec.selection;
  const byCat = (cat: "procedural" | "conceptual" | "word") => spec.pool.filter((q) => q.category === cat);
  const questions = [
    ...byCat("procedural").slice(0, procedural),
    ...byCat("conceptual").slice(0, conceptual),
    ...byCat("word").slice(0, word),
  ];

  return {
    questionIds: questions.map((q) => q.id),
    currentIndex: 0,
    correctCount: 0,
    answered: questions.map(() => false),
    mistakes: [],
    orderMap: {},
  };
}

/** Select a quiz: fixed composition (procedural/conceptual/word) sampled from the pool. */
export function buildQuizSession(spec: QuizSpec): QuizSession {
  const { procedural, conceptual, word } = spec.selection;
  const pick = (cat: "procedural" | "conceptual" | "word", n: number) =>
    shuffle(spec.pool.filter((q) => q.category === cat)).slice(0, n);

  const questions = [...pick("procedural", procedural), ...pick("conceptual", conceptual), ...pick("word", word)];
  // Re-shuffle so the fixed categories are interleaved.
  const ordered = shuffle(questions);
  const questionIds = ordered.map((q) => q.id);

  return {
    questionIds,
    currentIndex: 0,
    correctCount: 0,
    answered: ordered.map(() => false),
    mistakes: [],
    // Retakes get fresh display shuffles too — options land in new spots each try.
    orderMap: buildDisplayOrders(spec.pool, questionIds),
  };
}

/** Check a single answer; returns correct/incorrect + diagnosis + explanation. */
export function checkAnswer(question: Question, answer: number | string | string[]): { correct: boolean; diagnosis?: string; explanation: string } {
  switch (question.type) {
    case "mcq": {
      const selected = String(answer);
      if (selected === question.correctOptionId) {
        return { correct: true, explanation: question.explanation };
      }
      const diagnosis = question.diagnoses[selected] ?? "Take another look — what does each part of the fraction name?";
      return { correct: false, diagnosis, explanation: question.explanation };
    }
    case "numeric-input": {
      const num = Number(answer);
      const tolerance = question.tolerance ?? 0;
      const correct = Math.abs(num - question.answer) <= tolerance;
      return {
        correct,
        ...(correct ? {} : { diagnosis: `The correct answer is ${question.answer}${question.unit ? ` ${question.unit}` : ""}.` }),
        explanation: question.explanation,
      };
    }
    case "fraction-input": {
      if (typeof answer !== "string" || !answer.includes("/")) {
        return { correct: false, diagnosis: "Enter your answer as a fraction like 3/4.", explanation: question.explanation };
      }
      const [n, d] = answer.split("/").map(Number);
      const correct =
        question.acceptEquivalent
          ? n * question.denominator === d * question.numerator
          : n === question.numerator && d === question.denominator;
      return {
        correct,
        ...(correct ? {} : { diagnosis: "Check your simplified fraction. Compare it with the correct amount." }),
        explanation: question.explanation,
      };
    }
    case "true-false-justify": {
      const selected = String(answer) === "true";
      return {
        correct: selected === question.isTrue,
        ...(selected === question.isTrue ? {} : { diagnosis: "Re-read the statement. What does it claim about the amount?" }),
        explanation: question.explanation,
      };
    }
    case "drag-match": {
      // answer = JSON string of {source: target} map.
      const mapping = typeof answer === "string" ? safeParse<Record<string, string>>(answer, {}) : {};
      const correct = question.pairs.every((p) => mapping[p.source] === p.target);
      if (correct) return { correct: true, explanation: question.explanation };
      const bad = question.pairs.find((p) => mapping[p.source] && mapping[p.source] !== p.target);
      return {
        correct: false,
        diagnosis: bad
          ? question.diagnoses[`${bad.source}->${mapping[bad.source]}`] ?? "One of the pairs is matched to the wrong meaning."
          : "Every term must be matched to its correct meaning.",
        explanation: question.explanation,
      };
    }
    case "order-steps": {
      const order = Array.isArray(answer) ? answer : [];
      const correct = order.length === question.sequence.length && order.every((s, i) => s === question.sequence[i]);
      if (correct) return { correct: true, explanation: question.explanation };
      const wrongIdx = order.findIndex((s, i) => s !== question.sequence[i]);
      return {
        correct: false,
        diagnosis:
          wrongIdx >= 0 && order[wrongIdx]
            ? question.diagnoses[`${order[wrongIdx]}@${wrongIdx}`] ?? "The steps are in the wrong order — think about what has to happen first."
            : "Use every step, in the right order.",
        explanation: question.explanation,
      };
    }
    case "graph-interact": {
      // answer = JSON string of {param: value} state.
      const state = typeof answer === "string" ? safeParse<Record<string, number>>(answer, {}) : {};
      const tol = question.tolerance ?? 0.05;
      const keys = Object.keys(question.validate);
      const correct = keys.length > 0 && keys.every((k) => Math.abs((state[k] ?? Infinity) - question.validate[k]) <= tol);
      return {
        correct,
        ...(correct ? {} : { diagnosis: "Your graph doesn't match the condition yet — check the sliders and the point position." }),
        explanation: question.explanation,
      };
    }
  }
}

function safeParse<T>(value: string, fallback: T): T {
  try {
    return JSON.parse(value) as T;
  } catch {
    return fallback;
  }
}

/** Record an answer in the session; returns index of next question or -1 when done. */
export function recordAnswer(session: QuizSession, question: Question, answer: number | string | string[]): QuizSession {
  const { correct } = checkAnswer(question, answer);
  const next = { ...session };
  next.answered[next.currentIndex] = true;
  if (correct) next.correctCount += 1;
  return next;
}

export function advance(session: QuizSession): QuizSession {
  return { ...session, currentIndex: session.currentIndex + 1 };
}

export function isQuizComplete(session: QuizSession): boolean {
  return session.currentIndex >= session.questionIds.length || session.answered.every(Boolean);
}

export function quizScore(session: QuizSession): number {
  if (session.questionIds.length === 0) return 0;
  return session.correctCount / session.questionIds.length;
}

export function quizPassed(session: QuizSession, spec: QuizSpec): boolean {
  return quizScore(session) >= spec.passThreshold;
}

/** Match wrong answers against the lesson's commonMistakes patterns to drive remediation. */
export function diagnoseMistakes(lesson: Lesson, session: QuizSession, wrongQuestionIds: string[]): CommonMistake[] {
  // For Phase 1, the diagnosis engine checks known MCQ distractors.
  const hits = new Map<string, CommonMistake>();
  for (const qid of wrongQuestionIds) {
    const q = lesson.quiz.pool.find((p) => p.id === qid);
    if (!q || q.type !== "mcq") continue;
    for (const option of q.options) {
      if (option.id === q.correctOptionId) continue;
      const diag = q.diagnoses[option.id] ?? "";
      const match = lesson.commonMistakes.find((m) =>
        diag.toLowerCase().includes(m.wrongPattern.toLowerCase().split("/")[0].trim())
      );
      if (match) hits.set(match.wrongPattern, match);
    }
  }
  return [...hits.values()];
}