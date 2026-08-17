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

  // Fix-pass guard 1c-1: no letter may dominate the correct position.
  // With ≥4 MCQs, more than 50% sharing one correctOptionId is a bias signal.
  const mcqCorrect = pool.filter((q) => q.type === "mcq").map((q) => (q.type === "mcq" ? q.correctOptionId : ""));
  if (mcqCorrect.length >= 4) {
    const counts = new Map<string, number>();
    for (const c of mcqCorrect) counts.set(c, (counts.get(c) ?? 0) + 1);
    const maxShare = Math.max(...counts.values()) / mcqCorrect.length;
    if (maxShare > 0.5) {
      const letter = [...counts.entries()].sort((a, b) => b[1] - a[1])[0][0];
      fail(`MCQ bias: correctOptionId "${letter}" on ${[...counts.values()].sort((a, b) => b - a)[0]}/${mcqCorrect.length} MCQs (>50%)`);
    }
  }

  pool.forEach((q) => {
    if (!q?.explanation?.trim()) fail(`${q?.id}: explanation`);
    if (!Array.isArray(q.hints) || q.hints.length !== 3 || q.hints.some((h) => !h?.trim())) fail(`${q?.id}: 3 hints`);

    // Fix-pass guard 1c-2: hint #3 must be a worked micro-step, not a bare answer.
    const h3 = q.hints[2]?.trim() ?? "";
    const h2 = q.hints[1]?.trim() ?? "";
    if (h3.length > 0 && h3.length < 15) fail(`${q?.id}: hint 3 too short (${h3.length} chars) — needs a worked step`);
    else {
      const bareNumber = /^[+-]?[\d.,%²³√]+$/.test(h3);
      const singleWord = /^[A-Za-zÀ-ÿ][A-Za-zÀ-ÿ'’-]*\.?$/.test(h3) && !h3.includes(" ");
      const yesNo = /^(yes|no|true|false)\.?$/i.test(h3);
      const equalsH2 = h3 === h2;
      let equalsCorrectText = false;
      if (q.type === "mcq" && q.type === "mcq") {
        const correct = q.options.find((o) => o.id === q.correctOptionId);
        if (correct && h3.replace(/\.$/, "") === correct.text.replace(/\.$/, "")) equalsCorrectText = true;
      }
      if (bareNumber || singleWord || yesNo || equalsH2 || equalsCorrectText) {
        fail(`${q?.id}: hint 3 is a bare answer ("${h3.slice(0, 40)}") — rewrite as a worked micro-step`);
      }
    }

    if (q.type === "mcq" && (!q.options?.length || q.options.length < 2 || !Object.values(q.diagnoses ?? {}).length)) fail(`${q.id}: mcq options+diagnoses`);
    if (q.type === "numeric-input" && typeof q.answer !== "number") fail(`${q.id}: numeric answer`);
    if (q.type === "fraction-input" && (typeof q.numerator !== "number" || typeof q.denominator !== "number" || q.denominator === 0)) fail(`${q.id}: fraction nums`);
    if (q.type === "true-false-justify" && typeof q.isTrue !== "boolean") fail(`${q.id}: isTrue`);
    if (q.type === "drag-match" && (!q.pairs?.length || Object.values(q.diagnoses ?? {}).length < 1)) fail(`${q.id}: drag-match pairs+diagnoses`);
    if (q.type === "order-steps" && (!q.sequence?.length || Object.values(q.diagnoses ?? {}).length < 1)) fail(`${q.id}: order-steps sequence+diagnoses`);
    if (q.type === "graph-interact" && (!q.challenge?.trim() || !Object.keys(q.validate ?? {}).length)) fail(`${q.id}: graph-interact challenge+validate`);

    // Fix-pass guard 1c-3: graph-interact challenge must state the CONDITION,
    // not the numeric answer (numbers belong in `validate` / explanation / hints).
    if (q.type === "graph-interact") {
      const nums = (q.challenge.match(/-?\d+(?:\.\d+)?/g) ?? []).map(Number);
      const validateValues = Object.values(q.validate ?? {}).map(Number);
      const leak = validateValues.filter((v) => nums.includes(v));
      if (leak.length > 0) {
        // Allow the number if the challenge is about an angle in degrees (e.g. "30°")
        // where the target genuinely is the angle — but the md says the challenge
        // should describe the condition; a raw "Set X to 8." always leaks.
        const rawSet = /set .*?\bto\b/i.test(q.challenge);
        if (rawSet) fail(`${q.id}: graph-interact challenge reveals the answer (${leak.join(", ")}) — describe the condition instead`);
      }
    }
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