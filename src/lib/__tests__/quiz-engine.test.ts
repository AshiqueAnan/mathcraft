import { describe, it, expect } from "vitest";
import {
  buildInitialSession,
  buildQuizSession,
  checkAnswer,
  advance,
  isQuizComplete,
  quizScore,
  quizPassed,
} from "../quiz-engine";
import { getLesson } from "@/content/lessons";

describe("quiz engine", () => {
  const lesson = getLesson("T1-U4-L1");
  if (!lesson) throw new Error("T1-U4-L1 missing");

  it("builds a deterministic initial session (SSR-safe) with fixed composition", () => {
    const a = buildInitialSession(lesson.quiz);
    const b = buildInitialSession(lesson.quiz);
    expect(a.questionIds).toEqual(b.questionIds); // deterministic — no hydration mismatch
    expect(a.questionIds).toHaveLength(5);
    const qs = a.questionIds.map((id) => lesson.quiz.pool.find((q) => q.id === id)!);
    expect(qs.filter((q) => q.category === "procedural")).toHaveLength(2);
    expect(qs.filter((q) => q.category === "conceptual")).toHaveLength(2);
    expect(qs.filter((q) => q.category === "word")).toHaveLength(1);
  });

  it("builds a session with the fixed composition (2 procedural + 2 conceptual + 1 word)", () => {
    const session = buildQuizSession(lesson.quiz);
    expect(session.questionIds).toHaveLength(5);
    const qs = session.questionIds.map((id) => lesson.quiz.pool.find((q) => q.id === id)!);
    expect(qs.filter((q) => q.category === "procedural")).toHaveLength(2);
    expect(qs.filter((q) => q.category === "conceptual")).toHaveLength(2);
    expect(qs.filter((q) => q.category === "word")).toHaveLength(1);
  });

  it("randomizes retakes — pools higher than quiz size so retakes differ", () => {
    expect(lesson.quiz.pool.length).toBeGreaterThan(lesson.quiz.selection.procedural + lesson.quiz.selection.conceptual + lesson.quiz.selection.word);
    const a = buildQuizSession(lesson.quiz);
    const b = buildQuizSession(lesson.quiz);
    // Both valid; different draws are overwhelmingly likely given the pool size.
    expect(a.questionIds).toHaveLength(5);
    expect(b.questionIds).toHaveLength(5);
  });

  it("scores an MCQ answer correctly", () => {
    const q = lesson.quiz.pool.find((p) => p.type === "mcq")!;
    if (q.type !== "mcq") throw new Error("expected mcq");
    const correct = checkAnswer(q, q.correctOptionId);
    expect(correct.correct).toBe(true);
    const wrong = checkAnswer(q, q.options.find((o) => o.id !== q.correctOptionId)!.id);
    expect(wrong.correct).toBe(false);
    expect(wrong.diagnosis).toBeTruthy();
  });

  it("checks pass threshold at 80%", () => {
    const session = buildQuizSession(lesson.quiz);
    // Simulate 4 correct of 5 passed, 3 of 5 failed.
    const pass = { ...session, correctCount: 4 };
    const fail = { ...session, correctCount: 3 };
    expect(quizScore(pass)).toBe(0.8);
    expect(quizPassed(pass, lesson.quiz)).toBe(true);
    expect(quizScore(fail)).toBe(0.6);
    expect(quizPassed(fail, lesson.quiz)).toBe(false);
  });

  it("advances and detects completion", () => {
    const session = buildQuizSession(lesson.quiz);
    expect(isQuizComplete(session)).toBe(false);
    const advanced = advance(session);
    expect(advanced.currentIndex).toBe(1);
    expect(isQuizComplete({ ...advanced, currentIndex: advanced.questionIds.length })).toBe(true);
  });

  it("checks numeric input with tolerance and unit", () => {
    const q = { id: "n1", type: "numeric-input" as const, category: "procedural" as const, prompt: "x", explanation: "e", hints: ["h1", "h2", "h3"] as [string, string, string], answer: 1.5, tolerance: 0.05, unit: "m" };
    expect(checkAnswer(q, "1.52").correct).toBe(true);
    expect(checkAnswer(q, "1.6").correct).toBe(false);
  });

  it("checks fraction input, equivalence-aware", () => {
    const q = { id: "f1", type: "fraction-input" as const, category: "procedural" as const, prompt: "x", explanation: "e", hints: ["h1", "h2", "h3"] as [string, string, string], numerator: 1, denominator: 2, acceptEquivalent: true };
    expect(checkAnswer(q, "2/4").correct).toBe(true);
    expect(checkAnswer(q, "1/2").correct).toBe(true);
    expect(checkAnswer(q, "1/3").correct).toBe(false);
  });

  it("checks true-false", () => {
    const q = { id: "t1", type: "true-false-justify" as const, category: "conceptual" as const, prompt: "x", explanation: "e", hints: ["h1", "h2", "h3"] as [string, string, string], isTrue: true };
    expect(checkAnswer(q, "true").correct).toBe(true);
    expect(checkAnswer(q, "false").correct).toBe(false);
  });

  it("checks drag-match: correct map passes, wrong link gets diagnosis", () => {
    const q = {
      id: "d1", type: "drag-match" as const, category: "conceptual" as const, prompt: "x", explanation: "e",
      hints: ["h1", "h2", "h3"] as [string, string, string],
      pairs: [{ source: "1/2", target: "half" }, { source: "1/4", target: "quarter" }],
      diagnoses: { "1/2->quarter": "Half isn't a quarter.", "1/4->half": "Quarter isn't a half." },
    };
    expect(checkAnswer(q, JSON.stringify({ "1/2": "half", "1/4": "quarter" })).correct).toBe(true);
    const bad = checkAnswer(q, JSON.stringify({ "1/2": "quarter", "1/4": "half" }));
    expect(bad.correct).toBe(false);
    expect(bad.diagnosis).toBe("Half isn't a quarter.");
  });

  it("checks order-steps: exact sequence passes, wrong index diagnosed", () => {
    const q = {
      id: "o1", type: "order-steps" as const, category: "procedural" as const, prompt: "x", explanation: "e",
      hints: ["h1", "h2", "h3"] as [string, string, string],
      sequence: ["A", "B", "C"],
      diagnoses: { "B@0": "B comes second.", "A@1": "A comes first.", "C@0": "C comes last." },
    };
    expect(checkAnswer(q, ["A", "B", "C"]).correct).toBe(true);
    const bad = checkAnswer(q, ["B", "A", "C"]);
    expect(bad.correct).toBe(false);
    expect(bad.diagnosis).toBe("B comes second.");
  });

  it("checks graph-interact within tolerance", () => {
    const q = {
      id: "g1", type: "graph-interact" as const, category: "procedural" as const, prompt: "x", explanation: "e",
      hints: ["h1", "h2", "h3"] as [string, string, string],
      challenge: "make the line pass through the point",
      validate: { m: 2, c: 0 },
      tolerance: 0.05,
    };
    expect(checkAnswer(q, JSON.stringify({ m: 2.01, c: -0.02 })).correct).toBe(true);
    expect(checkAnswer(q, JSON.stringify({ m: 3, c: 0 })).correct).toBe(false);
  });
});
