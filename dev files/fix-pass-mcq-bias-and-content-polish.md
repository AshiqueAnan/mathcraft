# Fix Pass: MCQ Option Bias (reported bug) + Deferred Content Polish

Three issues, bundled into one pass since all three touch quiz/lesson content. Work in the order below — each has its own verification, but do one final full-suite pass at the end.

---

## Issue 1 (P0 — real user bug): MCQ top-option bias

**Bug:** Ayus (real user) found that the top option is almost always the correct answer. Confirmed: nearly every MCQ across the 116 lessons has `correctOptionId: "a"`, and options render in authored order with no shuffling.

### Fix

**1a. Engine fix (the real fix) — shuffle display order, keep IDs stable**
In `src/components/quiz/Quiz.tsx` (or wherever fits the architecture — `quiz-engine.ts` session build is also reasonable):
- Render MCQ options (and `drag-match` target column) in **shuffled order** per question, per sitting.
- **Hydration safety**: do not shuffle during SSR — render authored order server-side, shuffle client-side after mount (reuse the existing `mounted` flag pattern from `LessonClient.tsx`). A one-frame flash is fine; a hydration mismatch error is not.
- Reshuffle on quiz retake.
- Scoring must remain ID-based (verify `checkAnswer` compares option `id`, never position — confirm, don't assume).
- Check `order-steps`: if the initial step list renders in authored `sequence` order, that's the same bug class — shuffle it too, same hydration-safe approach.

**1b. Content fix (defense in depth) — rebalance authored positions**
Write `scripts/rebalance-mcq.mjs`: for every lesson, redistribute MCQ `correctOptionId`s evenly across a/b/c/d by **swapping whole option objects** (never just flipping `correctOptionId` — each option carries its own `diagnoses` text, which must move with it). Run once over all 116 lessons.

**1c. Lint guard** — add to `scripts/lint-lessons.mjs`: fail if a lesson has ≥4 MCQs and more than 50% share the same `correctOptionId`.

**1d. Tests**
- Unit test with a mocked/seeded RNG: a lesson whose authored MCQs are all `correctOptionId: "a"` must render at least one question with the correct option NOT first after mount.
- Confirm existing Playwright specs click by `data-option-id` (order-independent) — fix any that click by position.

---

## Issue 2 (P1 — deferred polish): Hint level 3 is a bare answer, not a walkthrough

**Problem:** Across sampled lessons, hint #3 in the 3-level tree degraded into the literal answer with no reasoning shown (e.g. `["Compare squares.", "289 = 17².", "Yes."]`). A student who taps "I'm stuck" three times learns nothing about *how* to get there — just the final word.

### Fix
- Rewrite **only hint #3** on every question across all 116 lessons to be a short **worked micro-step**, not a bare answer. E.g. for the sample above: `"3² + 4² = 9 + 16 = 25, and 5² = 25 — so yes, it's right-angled."` Keep hints #1 and #2 as-is (they're fine — nudge and strategy).
- Style rule for hint #3: it must show the calculation or reasoning step, not just state the final value/choice. One sentence, plain language, matches existing voice.
- **Lint guard**: add to `lint-lessons.mjs` — fail if any question's `hints[2]` (third hint) is under ~15 characters OR is identical to the `explanation` field's final clause OR matches common bare-answer patterns (pure number, single word like "Yes."/"No.", or exactly the correct option's text). Tune the heuristic conservatively — a false positive (flagging a legitimately short-but-complete hint) is safer than missing real cases, but don't over-fail.
- Process note for the agent: this is ~116 lessons × up to 15 questions = up to ~1,700 hints to touch. Use the chunked-writing discipline from earlier phases (small edits, verify often) — do not attempt this in a handful of giant file rewrites.

---

## Issue 3 (P1 — deferred polish): `graph-interact` challenge text reveals the answer

**Problem:** Challenge text states the computed answer directly (e.g. *"Set the slider to 5."*) instead of stating the condition to satisfy, so the learner never computes anything — they just copy a number.

### Fix
- Rewrite every `graph-interact` question's `challenge` field to state the **condition**, not the numeric answer. E.g. change `"Set the slider to 5."` → `"Make the triangle show sin 30° with hypotenuse 10."` The correct value stays only in `validate` (already used for scoring) and in `explanation`/hints (where showing the computed value is correct and expected).
- **Lint guard**: add to `lint-lessons.mjs` — fail if a `graph-interact` question's `challenge` string contains the same numeric value as its `validate` object's target value (simple heuristic: extract numbers from `challenge`, compare against `validate` values; flag exact matches).

---

## Execution order

1. Issue 1a (engine shuffle) — highest impact, fixes the live bug immediately once deployed.
2. Issue 1b + 1c (content rebalance + lint guard).
3. Issue 3 (graph-interact wording) — smaller scope (~15 questions across the curriculum), do before Issue 2.
4. Issue 2 (hint-3 rewrite) — largest scope, do last, in chunked batches per unit.

## Final verification (all four must be green)
```
npm run typecheck
npm run lint:lessons
npm test
npm run build
npm run test:e2e
```
Manual checks:
- Open any lesson's quiz twice — option order differs, correct answers land in different positions across attempts.
- Tap "I'm stuck" through all 3 hints on 3–4 sampled questions across different units — hint 3 shows real reasoning, not a bare answer.
- Open 2–3 `graph-interact` questions — challenge text describes a condition, not a number to copy.

## Deploy
Commit → push → GitHub Actions redeploys. Network-first service worker means returning users get all fixes on next online visit, no cache purge needed.

## Report back
List: lessons touched, total hints rewritten, total graph-interact challenges rewritten, lint guard results (before/after counts of violations caught), and full verification suite output.
