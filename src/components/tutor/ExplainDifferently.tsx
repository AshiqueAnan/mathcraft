"use client";

import { useState } from "react";
import type { Lesson } from "@/content/schema";
import { RichText } from "@/components/math/Math";
import { useTutor } from "./TutorContext";

/** "Explain differently" — §7. Re-serves a formal block with authored
 *  analogy variants first; the optional LLM layer generates more on demand
 *  when configured. Fully functional offline (LLM off). */
export function ExplainDifferently({ lesson, blockIndex }: { lesson: Lesson; blockIndex: number }) {
  const block = lesson.formalBlocks[blockIndex];
  const { llmEnabled, askLlm } = useTutor();
  const [view, setView] = useState<"hidden" | "authored" | "llm">("hidden");
  const [pick, setPick] = useState(0);
  const [llmText, setLlmText] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [stuck, setStuck] = useState(0);

  if (!block) return null;
  const alts = block.altExplanations ?? [];

  async function askLlmTutor() {
    setBusy(true);
    setError(null);
    try {
      const text = await askLlm({
        context: `${lesson.id} — ${lesson.title}. Definition: ${block.definition}`,
        subject: "Explain this differently with a fresh analogy",
        history: [],
        stuckCount: stuck,
      });
      setLlmText(text);
      setView("llm");
      setStuck((s) => s + 1);
    } catch (e) {
      setError(e instanceof Error ? e.message : "The tutor could not reply.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="mt-6">
      <button
        type="button"
        onClick={() => {
          if (view === "authored") {
            setPick((p) => (p + 1) % Math.max(1, alts.length));
          } else {
            setView("authored");
            setPick(0);
          }
        }}
        className="btn btn-ghost"
        aria-expanded={view !== "hidden"}
      >
        Explain differently
      </button>

      {view === "authored" && alts.length > 0 && (
        <div className="accent-line mt-3">
          <p className="meta mb-1">Try it this way — analogy {pick + 1} of {alts.length}</p>
          <p className="body">
            <RichText text={alts[pick]} />
          </p>
          {alts.length > 1 && (
            <button type="button" className="meta mt-2 text-[var(--primary)] hover:underline" onClick={() => setPick((p) => (p + 1) % alts.length)}>
              Another analogy
            </button>
          )}
        </div>
      )}

      {llmEnabled && view !== "llm" && (
        <button type="button" className="meta mt-2 text-[var(--primary)] hover:underline" onClick={askLlmTutor} disabled={busy}>
          {busy ? "Asking the tutor…" : "Still stuck? Ask the AI tutor"}
        </button>
      )}

      {view === "llm" && llmText && (
        <div className="accent-line mt-3">
          <p className="meta mb-1">AI tutor</p>
          <p className="body">{llmText}</p>
        </div>
      )}

      {error && <p className="meta mt-2 text-[var(--error)]">{error}</p>}
    </div>
  );
}