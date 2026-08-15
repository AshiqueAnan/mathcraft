import { describe, it, expect } from "vitest";
import { BUILT_LESSONS } from "@/content/lessons";
import type { Lesson } from "@/content/schema";

function issues(L: Lesson): string[] {
  const out: string[] = [];
  const fail = (m: string) => out.push(`[${L.id}] ${m}`);
  if (!L.hook?.question?.trim()) fail("hook.question required");
  if (!["puzzle","paradox","real-world"].includes(L.hook?.type ?? "")) fail("hook.type invalid");
  if ((L.intuitionBlocks ?? []).filter((b) => b.widget).length < 1) fail("needs >=1 widget");
  const d = L.discovery;
  if (!d) { fail("discovery required"); return out; }
  if (!Array.isArray(d.challenges) || d.challenges.length < 2) fail("challenges >=2");
  (d.challenges ?? []).forEach((c, i) => { if (!c?.instruction?.trim() || !c?.observe?.trim()) fail(`challenges[${i}] instruction+observe`); });
  if (!d.predict?.prompt?.trim() || !d.predict?.reveal?.trim()) fail("predict prompt+reveal");
  if (!d.sayItYourWay?.phrasings || d.sayItYourWay.phrasings.length !== 3) fail("sayItYourWay needs 3 phrasings");
  else {
    if (d.sayItYourWay.phrasings.filter((p) => p.correct).length !== 1) fail("sayItYourWay exactly 1 correct");
    d.sayItYourWay.phrasings.forEach((p, i) => { if (!p?.text?.trim() || !p?.why?.trim()) fail(`phrasings[${i}] text+why`); });
  }
  if (!d.sayItYourWay?.formalName?.trim()) fail("formalName required");
  if (!d.stretch?.trim()) fail("stretch required");
  const f = L.formalBlocks ?? [];
  if (f.length < 1) fail("formalBlock required");
  f.forEach((b, i) => {
    if (!b?.definition?.trim()) fail(`formal[${i}].definition`);
    if (!Array.isArray(b.examples) || b.examples.length < 2) fail(`formal[${i}] 2 examples`);
    if (!b?.pitfall?.trim()) fail(`formal[${i}].pitfall`);
    if (!Array.isArray(b.altExplanations) || b.altExplanations.length !== 2 || b.altExplanations.some((a) => !a?.trim())) fail(`formal[${i}] 2 altExplanations`);
  });
  const pool = L.quiz?.pool ?? [];
  const sitting = (L.quiz?.selection?.procedural ?? 0) + (L.quiz?.selection?.conceptual ?? 0) + (L.quiz?.selection?.word ?? 0);
  // Pool ≥ 15 (Phase C hard requirement — CI fails the build on any shallow pool).
  if (pool.length < Math.max(15, sitting * 3)) {
    fail(`pool >= 15 required (Phase C); found ${pool.length}`);
  }
  pool.forEach((q) => {
    if (!q?.explanation?.trim()) fail(`${q?.id}: explanation`);
    if (!Array.isArray(q.hints) || q.hints.length !== 3 || q.hints.some((h) => !h?.trim())) fail(`${q?.id}: 3 hints`);
    if (q.type === "mcq" && (!q.options?.length || q.options.length < 2 || !Object.values(q.diagnoses ?? {}).length)) fail(`${q.id}: mcq options+diagnoses`);
    if (q.type === "numeric-input" && typeof q.answer !== "number") fail(`${q.id}: numeric answer`);
    if (q.type === "fraction-input" && (typeof q.numerator !== "number" || typeof q.denominator !== "number" || q.denominator === 0)) fail(`${q.id}: fraction nums`);
    if (q.type === "true-false-justify" && typeof q.isTrue !== "boolean") fail(`${q.id}: isTrue`);
    if (q.type === "drag-match" && (!q.pairs?.length || Object.values(q.diagnoses ?? {}).length < 1)) fail(`${q.id}: drag-match pairs+diagnoses`);
    if (q.type === "order-steps" && (!q.sequence?.length || Object.values(q.diagnoses ?? {}).length < 1)) fail(`${q.id}: order-steps sequence+diagnoses`);
    if (q.type === "graph-interact" && (!q.challenge?.trim() || !Object.keys(q.validate ?? {}).length)) fail(`${q.id}: graph-interact challenge+validate`);
  });
  if ((L.commonMistakes ?? []).length < 3) fail("commonMistakes >=3");
  if ((L.recallTags ?? []).length < 1) fail("recallTags >=1");
  return out;
}

describe("lesson quality lint (the MathCraft bar)", () => {
  it("every built lesson meets the spec", () => {
    const all = BUILT_LESSONS.flatMap(issues);
    expect(all).toEqual([]);
  });
});