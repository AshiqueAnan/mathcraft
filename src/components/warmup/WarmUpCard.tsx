"use client";

import { useMemo, useState } from "react";
import { useProgressStore } from "@/lib/progress-store";
import { getLesson } from "@/content/lessons";
import { checkAnswer } from "@/lib/quiz-engine";
import { RichText } from "@/components/math/Math";
import type { Question } from "@/content/schema";

const DAY_MS = 24 * 60 * 60 * 1000;
// Warm-up uses compact question types only (drag-match/order/graph need the
// full quiz canvas — those stay on lesson pages).
const SIMPLE_TYPES: Question["type"][] = ["mcq", "true-false-justify", "numeric-input", "fraction-input"];

interface WarmUpItem {
  lessonId: string;
  question: Question;
}

export function WarmUpCard() {
  const lastSessionAt = useProgressStore((s) => s.lastSessionAt);
  const selectWarmUps = useProgressStore((s) => s.selectWarmUps);
  const recordRecall = useProgressStore((s) => s.recordRecall);
  const touchSession = useProgressStore((s) => s.touchSession);

  const [dismissed, setDismissed] = useState(false);
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [numericValue, setNumericValue] = useState("");
  const [feedback, setFeedback] = useState<{ correct: boolean; diagnosis?: string; explanation: string } | null>(null);
  const [finished, setFinished] = useState(false);

  // Snapshot the warm-up set ONCE at mount. A wrong answer demotes the lesson
  // (recordRecall → selectWarmUps loses it), which would otherwise unmount the
  // card mid-flow before the feedback is shown. Zustand has already rehydrated
  // by the time this dynamic component mounts, so the first snapshot is correct.
  const items = useMemo<WarmUpItem[]>(() => {
    const out: WarmUpItem[] = [];
    for (const id of selectWarmUps(3)) {
      const lesson = getLesson(id);
      if (!lesson) continue;
      const q = lesson.quiz.pool.find((qq) => SIMPLE_TYPES.includes(qq.type));
      if (q) out.push({ lessonId: id, question: q });
    }
    return out;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const isNewDay = lastSessionAt === null || Date.now() - lastSessionAt >= DAY_MS;
  if (dismissed || finished || !isNewDay || items.length === 0) return null;

  const item = items[index]!;
  const question = item.question;

  function submit() {
    let answer: string | number | string[];
    if (question.type === "true-false-justify") {
      if (!selected) return;
      answer = selected;
    } else if (question.type === "mcq") {
      if (!selected) return;
      answer = selected;
    } else if (question.type === "numeric-input" || question.type === "fraction-input") {
      if (numericValue.trim() === "") return;
      answer = numericValue;
    } else {
      return;
    }
    const res = checkAnswer(question, answer);
    setFeedback(res);
    recordRecall(item.lessonId, res.correct);
  }

  function next() {
    setFeedback(null);
    setSelected(null);
    setNumericValue("");
    if (index + 1 >= items.length) {
      setFinished(true);
      touchSession();
    } else {
      setIndex((i) => i + 1);
    }
  }

  function skip() {
    touchSession();
    setDismissed(true);
  }

  return (
    <section
      className="rounded-2xl border border-token bg-[var(--bg-panel-raised)] p-5 text-left"
      data-testid="warmup-card"
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">Warm-up</p>
          <p className="mt-1 text-muted">
            A quick recall from your mastered lessons — keeps the ideas fresh.
          </p>
        </div>
        <button type="button" onClick={skip} className="meta text-muted hover:text-[var(--text)]">
          Skip
        </button>
      </div>

      <div className="mt-4 space-y-4">
        <p className="body" data-testid="warmup-question" data-question-id={question.id}>
          <span className="mr-2 font-mono text-sm text-muted">
            {index + 1}/{items.length}
          </span>
          <RichText text={question.prompt} />
        </p>

        {question.type === "mcq" && (
          <div className="space-y-2">
            {question.options.map((o) => (
              <button
                key={o.id}
                type="button"
                disabled={!!feedback}
                onClick={() => setSelected(o.id)}
                data-option-id={o.id}
                className={`block w-full rounded-xl border-2 p-3 text-left ${
                  selected === o.id ? "border-primary bg-[var(--bg-panel)]" : "border-token hover:border-primary"
                }`}
              >
                <RichText text={o.text} />
              </button>
            ))}
          </div>
        )}

        {question.type === "true-false-justify" && (
          <div className="flex gap-3">
            {(["true", "false"] as const).map((v) => (
              <button
                key={v}
                type="button"
                disabled={!!feedback}
                onClick={() => setSelected(v)}
                data-option-id={v}
                className={`flex-1 rounded-xl border-2 p-3 ${
                  selected === v ? "border-primary bg-[var(--bg-panel)]" : "border-token hover:border-primary"
                }`}
              >
                {v === "true" ? "True" : "False"}
              </button>
            ))}
          </div>
        )}

        {(question.type === "numeric-input" || question.type === "fraction-input") && (
          <div className="flex items-center gap-3">
            <input
              type="text"
              inputMode="decimal"
              disabled={!!feedback}
              value={numericValue}
              onChange={(e) => setNumericValue(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && submit()}
              placeholder={question.type === "fraction-input" ? "a/b" : "Type a number"}
              aria-label="Your answer"
              className="w-40 rounded-xl border-2 border-token bg-[var(--bg-panel)] p-3 text-lg focus:border-primary focus:outline-none"
            />
            {question.type === "numeric-input" && question.unit && (
              <span className="text-muted">{question.unit}</span>
            )}
          </div>
        )}

        {feedback && (
          <div
            className={`rounded-xl border p-3 ${
              feedback.correct ? "border-success bg-[rgba(34,197,94,0.08)]" : "border-error bg-[rgba(239,68,68,0.08)]"
            }`}
            data-testid="warmup-feedback"
          >
            <p className={`font-semibold ${feedback.correct ? "text-success" : "text-error"}`}>
              {feedback.correct ? "Correct — nice recall." : "Not quite — it's queued for another check."}
            </p>
            {!feedback.correct && feedback.diagnosis && <p className="mt-1 text-sm">{feedback.diagnosis}</p>}
            <p className="mt-1 text-sm text-muted">Why: {feedback.explanation}</p>
          </div>
        )}
      </div>

      <div className="mt-4 flex items-center gap-3">
        {!feedback ? (
          <button type="button" className="btn btn-primary" onClick={submit}>
            Check answer
          </button>
        ) : (
          <button type="button" className="btn btn-primary" onClick={next}>
            {index + 1 >= items.length ? "Done" : "Next question"}
          </button>
        )}
        <button type="button" onClick={skip} className="meta text-muted hover:text-[var(--text)]">
          Skip to my lesson
        </button>
      </div>
    </section>
  );
}