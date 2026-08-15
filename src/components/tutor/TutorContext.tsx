"use client";

import { createContext, useCallback, useContext, useMemo } from "react";
import type { ReactNode } from "react";

/** Optional LLM layer (§7 of the completion plan).
 *  Off by default: if either env key is absent the site is 100% functional
 *  using the authored altExplanations + 3-level hint trees instead. */
export const LLM_ENDPOINT = process.env.NEXT_PUBLIC_LLM_ENDPOINT ?? "";
export const LLM_KEY = process.env.NEXT_PUBLIC_LLM_KEY ?? "";
export const llmEnabled = Boolean(LLM_ENDPOINT && LLM_KEY);

/** Fixed Socratic persona — verbatim from the product spec §7. */
export const TUTOR_PERSONA =
  "You are a patient Socratic math tutor for a 12–14 year old. Never give a full solution first. Ask a guiding question or give the smallest useful hint. Use the lesson context provided. After 3 stuck attempts, break the problem into micro-steps and walk through the first, then hand control back. Warm, short, simple messages. Honest when unsure.";

export interface TutorMsg {
  role: "user" | "assistant";
  content: string;
}

interface AskOpts {
  /** Compact lesson context: id, title, unit, definition, mistakes. */
  context: string;
  /** The question/topic the learner is stuck on. */
  subject: string;
  /** Recent chat turns (max ~6 kept by the caller). */
  history: TutorMsg[];
  /** How many times the learner has already asked for help. */
  stuckCount: number;
}

interface TutorContextValue {
  llmEnabled: boolean;
  askLlm: (opts: AskOpts) => Promise<string>;
}

const TutorContext = createContext<TutorContextValue | null>(null);

export function TutorProvider({ children }: { children: ReactNode }) {
  const askLlm = useCallback(async ({ context, subject, history, stuckCount }: AskOpts) => {
    if (!llmEnabled) throw new Error("LLM tutor is not configured.");
    const messages = [
      { role: "system" as const, content: TUTOR_PERSONA },
      { role: "user" as const, content: `LESSON CONTEXT:\n${context}\n\nCURRENT TOPIC: ${subject}\n\nThe learner has asked for help ${stuckCount} time(s) so far in this topic.` },
      ...history,
    ];
    const res = await fetch(`${LLM_ENDPOINT}/chat/completions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${LLM_KEY}`,
      },
      body: JSON.stringify({ model: "gpt-4o-mini", messages, temperature: 0.4, max_tokens: 300 }),
    });
    if (!res.ok) {
      throw new Error(`LLM request failed (${res.status}).`);
    }
    const data = (await res.json()) as { choices?: { message?: { content?: string } }[] };
    const text = data.choices?.[0]?.message?.content?.trim();
    if (!text) throw new Error("LLM returned an empty reply.");
    return text;
  }, []);

  const value = useMemo<TutorContextValue>(() => ({ llmEnabled, askLlm }), [askLlm]);
  return <TutorContext.Provider value={value}>{children}</TutorContext.Provider>;
}

export function useTutor(): TutorContextValue {
  const ctx = useContext(TutorContext);
  if (!ctx) throw new Error("useTutor must be used inside <TutorProvider>.");
  return ctx;
}