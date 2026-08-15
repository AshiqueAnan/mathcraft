"use client";

import { useState } from "react";
import type { Lesson, Question } from "@/content/schema";
import { useTutor } from "./TutorContext";

/** "I'm stuck" — §7. Reveals the 3-level hint tree one level at a time;
 *  the optional LLM layer adds a Socratic nudge with lesson + question
 *  context when configured. Fully functional offline (LLM off). */
export function StuckHelp({ lesson, question }: { lesson: Lesson; question: Question }) {
  const { llmEnabled, askLlm } = useTutor();
  const [level, setLevel] = useState(0);
  const [llmText, setLlmText] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [stuckCount, setStuckCount] = useState(0);

  const hints = question.hints;
  const revealed = level;

  async function askLlmTutor() {
    setBusy(true);
    setError(null);
    try {
      const text = await askLlm({
        context: `${lesson.id} — ${lesson.title}. Definition: ${lesson.formalBlocks[0]?.definition ?? ""}`,
        subject: `Question: ${question.prompt}`,
        history: [],
        stuckCount,
      });
      setLlmText(text);
      setStuckCount((s) => s + 1);
    } catch (e) {
      setError(e instanceof Error ? e.message : "The tutor could not reply.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="mt-4">
      <button
        type="button"
        className="btn btn-ghost"
        onClick={() => setLevel((l) => Math.min(hints.length, l + 1))}
        aria-expanded={revealed > 0}
      >
        I'm stuck
      </button>

      {revealed > 0 && (
        <div className="accent-line mt-3">
          {hints.slice(0, revealed).map((h, i) => (
            <p key={i} className="body">
              <span className="font-semibold text-[var(--primary)]">Hint {i + 1}:</span> {h}
            </p>
          ))}
          {revealed < hints.length && (
            <button type="button" className="meta mt-2 text-[var(--primary)] hover:underline" onClick={() => setLevel((l) => l + 1)}>
              Another hint
            </button>
          )}
        </div>
      )}

      {llmEnabled && !llmText && (
        <button type="button" className="meta mt-2 block text-[var(--primary)] hover:underline" onClick={askLlmTutor} disabled={busy}>
          {busy ? "Asking the tutor…" : "Still stuck? Ask the AI tutor"}
        </button>
      )}

      {llmText && (
        <div className="accent-line mt-3">
          <p className="meta mb-1">AI tutor</p>
          <p className="body">{llmText}</p>
        </div>
      )}

      {error && <p className="meta mt-2 text-[var(--error)]">{error}</p>}
    </div>
  );
}