"use client";

import { useState } from "react";
import Link from "next/link";
import type { Lesson, Question } from "@/content/schema";
import {
  buildInitialSession,
  buildQuizSession,
  advance,
  checkAnswer,
  recordAnswer,
  isQuizComplete,
  quizScore,
  quizPassed,
  type QuizSession,
} from "@/lib/quiz-engine";
import { useProgressStore } from "@/lib/progress-store";
import { lessonTitle } from "@/content/lessons";
import { RichText } from "@/components/math/Math";
import { StuckHelp } from "@/components/tutor/StuckHelp";
import { LiveGraphPlot } from "@/components/quiz/LiveGraphPlot";

interface QuizProps {
  lesson: Lesson;
}

export function Quiz({ lesson }: QuizProps) {
  // Deterministic first attempt (SSR-safe). Retakes are randomized.
  const [session, setSession] = useState<QuizSession>(() => buildInitialSession(lesson.quiz));
  const [selected, setSelected] = useState<string | null>(null);
  const [numericValue, setNumericValue] = useState("");
  const [dragMap, setDragMap] = useState<Record<string, string>>({});
  const [pendingSource, setPendingSource] = useState<string | null>(null);
  const [orderList, setOrderList] = useState<string[]>([]);
  const [graphState, setGraphState] = useState<Record<string, number>>({});
  const [showFeedback, setShowFeedback] = useState(false);
  const [lastResult, setLastResult] = useState<{ correct: boolean; diagnosis?: string } | null>(null);
  const [wrongIds, setWrongIds] = useState<string[]>([]);
  const [answeredSession, setAnsweredSession] = useState<QuizSession | null>(null);
  const [completed, setCompleted] = useState(false);
  const recordQuiz = useProgressStore((s) => s.recordQuiz);
  const weakestPrerequisite = useProgressStore((s) => s.weakestPrerequisite);
  const sendToRemediation = useProgressStore((s) => s.sendToRemediation);

  const question: Question | undefined = session.questionIds[session.currentIndex]
    ? lesson.quiz.pool.find((q) => q.id === session.questionIds[session.currentIndex])
    : undefined;

  function submit() {
    if (!question) return;
    let answer: number | string | string[];
    if (question.type === "mcq") {
      if (!selected) return;
      answer = selected;
    } else if (question.type === "numeric-input") {
      if (numericValue.trim() === "") return;
      answer = numericValue;
    } else if (question.type === "fraction-input") {
      if (numericValue.trim() === "") return;
      answer = numericValue;
    } else if (question.type === "true-false-justify") {
      if (!selected) return;
      answer = selected;
    } else if (question.type === "drag-match") {
      if (Object.keys(dragMap).length !== question.pairs.length) return;
      answer = JSON.stringify(dragMap);
    } else if (question.type === "order-steps") {
      if (orderList.length !== question.sequence.length) return;
      answer = orderList;
    } else if (question.type === "graph-interact") {
      if (Object.keys(graphState).length === 0) return;
      answer = JSON.stringify(graphState);
    } else {
      if (!selected) return;
      answer = selected;
    }

    const res = checkAnswer(question, answer);
    setLastResult(res);
    setShowFeedback(true);

    // Record the answer into the session so scoring is accurate.
    const nextSession = recordAnswer(session, question, answer);
    setAnsweredSession(nextSession);
    if (!res.correct) {
      setWrongIds((w) => [...w, question.id]);
    }
  }

  function next() {
    setShowFeedback(false);
    setSelected(null);
    setNumericValue("");
    setDragMap({});
    setPendingSource(null);
    setOrderList([]);
    setGraphState({});
    setLastResult(null);
    const base = answeredSession ?? session;
    const nextSession = advance(base);
    setAnsweredSession(null);
    if (isQuizComplete(nextSession)) {
      const score = quizScore(nextSession);
      const passed = quizPassed(nextSession, lesson.quiz);
      recordQuiz(lesson.id, score, wrongIds);
      setCompleted(true);
      setSession(nextSession);
    } else {
      setSession(nextSession);
    }
  }

  function retake() {
    setSession(buildQuizSession(lesson.quiz));
    setCompleted(false);
    setWrongIds([]);
    setSelected(null);
    setNumericValue("");
    setDragMap({});
    setPendingSource(null);
    setOrderList([]);
    setGraphState({});
    setShowFeedback(false);
  }

  if (completed) {
    const score = quizScore(session);
    const passed = score >= lesson.quiz.passThreshold;
    const weakest = weakestPrerequisite(lesson.id);
    return (
      <div className="panel text-center" data-testid="quiz-results">
        <h3 className={`heading ${passed ? "text-success" : "text-[var(--text)]"}`}>
          {passed ? "✓ Lesson mastered!" : "· Almost there!"}
        </h3>
        <p className="mt-2 text-muted">
          You got {session.correctCount} out of {session.questionIds.length} correct (
          {Math.round(score * 100)}%).
          {passed ? " Great job — the bridge to the next lesson is open." : " 80% is the pass mark. You can do it!"}
        </p>
        {!passed && (
          <div className="mx-auto mt-4 max-w-md rounded-xl border border-token bg-[var(--bg-panel-raised)] p-4 text-left">
            <p className="font-semibold text-warn">Let's strengthen the foundation first.</p>
            <p className="mt-1 text-sm text-muted">
              {wrongIds.length > 0
                ? "Your answers show which idea needs another look. Re-read the lesson section above, then retry the quiz."
                : "Review the 'watch out' boxes above, then retry the quiz."}
            </p>
            {weakest && (
              <>
                <Link
                  href={`/lesson/${weakest}`}
                  onClick={() => sendToRemediation(lesson.id)}
                  className="mt-3 inline-block rounded-xl border border-token px-4 py-2 text-sm font-semibold text-[var(--primary)] hover:border-[var(--primary)]"
                  data-testid="remediation-link"
                >
                  Strengthen first: {lessonTitle(weakest)} →
                </Link>
                <p className="mt-2 text-xs text-muted">
                  Refreshing this prerequisite rebuilds the foundation this lesson builds on.
                </p>
              </>
            )}
          </div>
        )}
        {!passed && (
          <button type="button" className="btn btn-primary mt-6" onClick={retake}>
            Retry quiz
          </button>
        )}
      </div>
    );
  }

  if (!question) return null;

  return (
    <div className="panel" data-testid="quiz">
      <div className="mb-2 flex items-center justify-between text-sm text-muted">
        <span>
          Question {session.currentIndex + 1} of {session.questionIds.length}
        </span>
        <span>{session.correctCount} correct so far</span>
      </div>

      <p className="text-lg font-semibold" data-testid="quiz-prompt" data-question-id={question.id}>
        <RichText text={question.prompt} />
      </p>

      <div className="mt-4 space-y-2">
        {question.type === "mcq" && (
          <div className="space-y-2">
            {question.options.map((opt) => (
              <button
                key={opt.id}
                type="button"
                data-option-id={opt.id}
                onClick={() => setSelected(opt.id)}
                className={`block w-full rounded-xl border-2 p-3 text-left transition-colors ${
                  selected === opt.id ? "border-primary bg-[var(--bg-panel-raised)]" : "border-token hover:border-primary"
                }`}
                aria-pressed={selected === opt.id}
              >
                <RichText text={opt.text} />
              </button>
            ))}
          </div>
        )}

        {question.type === "true-false-justify" && (
          <div className="grid grid-cols-2 gap-2">
            {[
              { id: "true", label: "True" },
              { id: "false", label: "False" },
            ].map((o) => (
              <button
                key={o.id}
                type="button"
                data-option-id={o.id}
                onClick={() => setSelected(o.id)}
                className={`rounded-xl border-2 p-3 ${
                  selected === o.id ? "border-primary bg-[var(--bg-panel-raised)]" : "border-token hover:border-primary"
                }`}
                aria-pressed={selected === o.id}
              >
                {o.label}
              </button>
            ))}
          </div>
        )}

        {(question.type === "numeric-input" || question.type === "fraction-input") && (
          <div className="flex items-center gap-3">
            <input
              type="text"
              inputMode="decimal"
              value={numericValue}
              onChange={(e) => setNumericValue(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && submit()}
              placeholder={question.type === "fraction-input" ? "a/b" : "Type a number"}
              className="w-40 rounded-xl border-2 border-token bg-[var(--bg-panel)] p-3 text-lg focus:border-primary focus:outline-none"
              aria-label="Your answer"
            />
            {question.type === "numeric-input" && question.unit && (
              <span className="text-muted">{question.unit}</span>
            )}
          </div>
        )}

        {question.type === "drag-match" && (
          <div className="space-y-4" data-question-type="drag-match">
            <p className="meta">Tap a term, then tap its meaning to link them.</p>
            <div className="grid gap-4 sm:grid-cols-[1fr_auto_1fr] sm:items-center">
              {/* Sources */}
              <div className="space-y-2">
                {question.pairs.map((p) => {
                  const chosen = dragMap[p.source];
                  return (
                    <button
                      key={p.source}
                      type="button"
                      data-source={p.source}
                      onClick={() => setPendingSource(p.source)}
                      className={`block w-full rounded-[12px] border px-3 py-2 text-left text-sm ${
                        pendingSource === p.source
                          ? "border-[var(--primary)] bg-[var(--bg-panel-raised)]"
                          : chosen
                            ? "border-[var(--primary)] opacity-70"
                            : "border-token hover:border-[var(--primary)]"
                      }`}
                    >
                      <RichText text={p.source} />
                      {chosen && (
                        <span className="mt-0.5 block text-xs text-[var(--primary)]">→ {chosen}</span>
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Targets (available targets only) */}
              <div className="space-y-2 sm:order-none order-last sm:col-start-3">
                {question.pairs.map((p) => {
                  const used = Object.values(dragMap).includes(p.target);
                  const available = !used || dragMap[pendingSource ?? ""] === p.target;
                  return (
                    <button
                      key={p.target}
                      type="button"
                      data-target={p.target}
                      disabled={!pendingSource || !available}
                      onClick={() => {
                        if (!pendingSource) return;
                        setDragMap((m) => ({ ...m, [pendingSource]: p.target }));
                        setPendingSource(null);
                      }}
                      className={`block w-full rounded-[12px] border px-3 py-2 text-left text-sm ${
                        !pendingSource || !available
                          ? "border-token opacity-40"
                          : "border-token hover:border-[var(--primary)]"
                      }`}
                    >
                      <RichText text={p.target} />
                    </button>
                  );
                })}
              </div>
            </div>
            <p className="meta">Matched: {Object.keys(dragMap).length} / {question.pairs.length}</p>
          </div>
        )}

        {question.type === "order-steps" && (
          <div className="space-y-4" data-question-type="order-steps">
            <p className="meta">Tap the steps in the correct order. Tap a chosen step to undo.</p>
            <div className="flex flex-wrap gap-2">
              {question.sequence.map((step) => {
                const alreadyChosen = orderList.includes(step);
                return (
                  <button
                    key={step}
                    type="button"
                    data-step={step}
                    disabled={alreadyChosen}
                    onClick={() => setOrderList((o) => [...o, step])}
                    className={`rounded-[12px] border px-3 py-2 text-sm ${
                      alreadyChosen ? "border-token opacity-40" : "border-token hover:border-[var(--primary)]"
                    }`}
                  >
                    {step}
                  </button>
                );
              })}
            </div>
            {orderList.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {orderList.map((step, i) => (
                  <button
                    key={step}
                    type="button"
                    data-chosen={step}
                    onClick={() => setOrderList((o) => o.filter((_, idx) => idx !== i))}
                    className="rounded-[12px] border border-[var(--primary)] bg-[var(--bg-panel-raised)] px-3 py-2 text-sm"
                    aria-label={`Step ${i + 1}: ${step}. Tap to undo.`}
                  >
                    {i + 1}. {step}
                  </button>
                ))}
              </div>
            )}
          </div>
        )}

        {question.type === "graph-interact" && (
          <div className="space-y-4" data-question-type="graph-interact">
            <LiveGraphPlot params={graphState} keys={Object.keys(question.validate)} />
            <p className="meta">Adjust the values below to satisfy the condition.</p>
            {Object.keys(question.validate).map((key) => (
              <label key={key} className="flex items-center gap-3 text-sm">
                <span className="w-8 font-mono">{key}</span>
                <input
                  type="range"
                  min={-10}
                  max={10}
                  step={0.1}
                  value={graphState[key] ?? 0}
                  onChange={(e) => setGraphState((s) => ({ ...s, [key]: Number(e.target.value) }))}
                  className="flex-1 accent-[var(--primary)]"
                  aria-label={key}
                />
                <span className="w-12 text-right font-mono">{((graphState[key] ?? 0)).toFixed(1)}</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {showFeedback && lastResult && (
        <div
          className={`mt-4 rounded-xl border p-4 ${
            lastResult.correct ? "border-success bg-[rgba(34,197,94,0.08)]" : "border-error bg-[rgba(239,68,68,0.08)]"
          }`}
          data-testid="quiz-feedback"
        >
          <p className={`font-semibold ${lastResult.correct ? "text-success" : "text-error"}`}>
            {lastResult.correct ? "Correct — well done." : "Not quite."}
          </p>
          {!lastResult.correct && lastResult.diagnosis && <p className="mt-1 text-sm">{lastResult.diagnosis}</p>}
          <p className="mt-2 text-sm text-muted">Why: {question.explanation}</p>
        </div>
      )}

      <div className="mt-6 flex flex-wrap items-center gap-3">
        {!showFeedback ? (
          <button type="button" className="btn btn-primary" onClick={submit}>
            Check answer
          </button>
        ) : (
          <button type="button" className="btn btn-primary" onClick={next}>
            {session.currentIndex + 1 >= session.questionIds.length ? "See results" : "Next question"}
          </button>
        )}
      </div>

      {!showFeedback && <StuckHelp lesson={lesson} question={question} />}
    </div>
  );
}