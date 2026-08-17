import type { Lesson } from "../schema";

export const T2U14L2: Lesson = {
  // @meta
  id: "T2-U14-L2",
  tier: 2,
  unit: "Solving equations",
  title: "Unknowns on Both Sides",
  prerequisites: ["T2-U13-L3","T2-U14-L1"],
  estimatedMinutes: 12,
  hook: {
    question: "2x is on one pan and 3x − 5 is on the other — the scale balances. The unknown sits on BOTH sides, so no single 'undo' isolates it. The trick: knock one of the x-piles off each pan first, then solve as before. It's just a two-round balance.",
    type: "puzzle",
  },
  intuitionBlocks: [{ widget: "balance-scale", narrative: "For 3x + 2 = x + 10, remove one x from BOTH pans: 2x + 2 = 10. Now it's the familiar one-unknown shape. Removing the same number of x's keeps the balance and shrinks the problem." }],

  // @discovery
  formalBlocks: [
    { definition: "When x appears on both sides, collect the x-terms first: subtract the smaller x-term from BOTH sides so one x remains. Then continue with the balance (add/subtract constants, then divide by the coefficient). Example: 3x + 2 = x + 10 → subtract x both sides → 2x + 2 = 10 → subtract 2 → 2x = 8 → x = 4. Always check: 3(4)+2 = 14 and 4+10 = 14 ✓.", examples: ["2x − 3 = x + 5 → subtract x → x − 3 = 5 → x = 8; check 16−3 = 13 and 8+5 = 13 ✓.", "5x + 4 = 2x + 13 → subtract 2x → 3x + 4 = 13 → 3x = 9 → x = 3."], pitfall: "Do the same x-subtraction to both sides. 3x + 2 = x + 10 → 2x + 2 = 10 (subtract x), never 3x + 2 = 10 (subtracting x only on the right breaks the scale).", altExplanations: ["GAME: x is a shared mob spawning on both sides — 3x + 2 = x + 10: remove one x-mob from both sides so only 2x remain on the left. Whatever you despawn on one side, despawn identical on the other.", "MONEY: both pockets hold x-dollar bills — 3x + 2 = x + 10: pull one x-bill from each pocket, leaving 2x + 2 = 10. The balance survives identical removals."] },
  ],
  gutChecks: [{ prompt: "Solve 4x − 2 = 2x + 6.", answer: "Subtract 2x → 2x − 2 = 6 → 2x = 8 → x = 4." }],
  quiz: {
    pool: [
      // @q01
      { id: "U14L2-mcq-1", type: "mcq", category: "procedural", prompt: "Solve 3x + 2 = x + 10.", options: [ { id: "a", text: "x = 4" }, { id: "b", text: "x = 8" }, { id: "c", text: "x = 3" }, { id: "d", text: "x = 5" } ], correctOptionId: "a", diagnoses: { b: "x = 8 = 10−2 without collecting x.", c: "x = 3 gives 11 vs 13 — no.", d: "x = 5 gives 17 vs 15 — no." }, explanation: "Subtract x: 2x + 2 = 10; subtract 2: 2x = 8; x = 4. Check: 14 = 14 ✓.", hints: ["Collect x's first.", "2x = 8.", "x = 4."] },
      // @q02
      { id: "U14L2-mcq-2", type: "mcq", category: "conceptual", prompt: "What's the FIRST move for 5x + 4 = 2x + 13?", options: [ { id: "a", text: "Subtract 4 only" }, { id: "b", text: "Subtract 2x from both sides" }, { id: "c", text: "Divide by 5" }, { id: "d", text: "Add 2x" } ], correctOptionId: "b", diagnoses: { a: "Subtracting 4 from one side breaks balance.", c: "Can't divide while x is on both sides.", d: "Adding 2x increases x-count." }, explanation: "Subtract 2x → 3x + 4 = 13, then 3x = 9, x = 3.", hints: ["Collect x-terms.", "Subtract 2x.", "3x = 9."] },
      // @q03
      { id: "U14L2-mcq-3", type: "mcq", category: "word", prompt: "A fruit stall: 3 kg apples cost $2 more than 1 kg apples cost $10. The equation 3x + 2 = x + 10 models it. What is x (price per kg)?", options: [ { id: "a", text: "$3" }, { id: "b", text: "$8" }, { id: "c", text: "$4" }, { id: "d", text: "$12" } ], correctOptionId: "c", diagnoses: { b: "That's 10−2, wrong.", a: "That solves a different equation.", d: "That's 10+2." }, explanation: "3x + 2 = x + 10 → 2x + 2 = 10 → x = 4.", hints: ["Solve the equation.", "2x = 8.", "$4."] },
      // @q04
      { id: "U14L2-mcq-4", type: "mcq", category: "procedural", prompt: "Solve 4x − 2 = 2x + 6.", options: [ { id: "a", text: "x = 1" }, { id: "b", text: "x = 2" }, { id: "c", text: "x = 8" }, { id: "d", text: "x = 4" } ], correctOptionId: "d", diagnoses: { b: "2 gives 6 vs 10 — no.", c: "8 gives 30 vs 22 — no.", a: "1 gives 2 vs 8 — no." }, explanation: "Subtract 2x: 2x − 2 = 6; add 2: 2x = 8; x = 4. Check 14 = 14 ✓.", hints: ["Collect x's.", "2x − 2 = 6.", "x = 4."] },
      // @q05
      { id: "U14L2-mcq-5", type: "mcq", category: "conceptual", prompt: "After collecting, why can you subtract the constant BEFORE dividing?", options: [ { id: "a", text: "Because + and − undo before × and ÷ act" }, { id: "b", text: "Because the constant is always on the left" }, { id: "c", text: "Because x is always alone already" }, { id: "d", text: "Because constants never matter" } ], correctOptionId: "a", diagnoses: { b: "The constant's side doesn't decide order.", c: "x is not alone until you finish.", d: "Constants matter — they're part of the balance." }, explanation: "Reverse the operations: the +/− on the x-term comes off before the ×(coefficient) does.", hints: ["Order of operations reversed.", "Undo +/− first.", "Then ÷."] },
      // @q06
      { id: "U14L2-mcq-6", type: "mcq", category: "word", prompt: "Two plans: Plan A charges 5x + 4, Plan B charges 2x + 13 and they cost the same. What is x?", options: [ { id: "a", text: "9" }, { id: "b", text: "3" }, { id: "c", text: "6" }, { id: "d", text: "17" } ], correctOptionId: "b", diagnoses: { a: "9 = 13 − 4, not the full solve.", c: "6 = 9 − 3, wrong.", d: "17 = 9 + 8, wrong." }, explanation: "5x + 4 = 2x + 13 → 3x + 4 = 13 → 3x = 9 → x = 3.", hints: ["Subtract 2x.", "3x = 9.", "x = 3."] },
      // @q07
      { id: "U14L2-num-1", type: "numeric-input", category: "procedural", prompt: "Solve 3x + 2 = x + 10. Type x.", answer: 4, tolerance: 0, explanation: "Subtract x: 2x + 2 = 10; x = 4.", hints: ["Subtract x.", "2x = 8.", "4."] },
      // @q08
      { id: "U14L2-num-2", type: "numeric-input", category: "procedural", prompt: "Solve 5x + 4 = 2x + 13. Type x.", answer: 3, tolerance: 0, explanation: "Subtract 2x: 3x + 4 = 13; 3x = 9; x = 3.", hints: ["Subtract 2x.", "3x = 9.", "3."] },
      // @q09
      { id: "U14L2-num-3", type: "numeric-input", category: "conceptual", prompt: "Solve 4x − 2 = 2x + 6. Type x.", answer: 4, tolerance: 0, explanation: "Subtract 2x: 2x − 2 = 6; 2x = 8; x = 4.", hints: ["Collect x's.", "2x = 8.", "4."] },
      // @q10
      { id: "U14L2-frac-1", type: "fraction-input", category: "conceptual", prompt: "Solve 2x + 2 = 2x + 3. Has no solution; if you got one, it's wrong. What's the RIGHT first move to see the contradiction? (Type the coefficient you end up with after subtracting 2x.)", numerator: 0, denominator: 1, acceptEquivalent: true, explanation: "2 = 3 is a contradiction — no solution.", hints: ["Subtract 2x both sides.", "2 = 3.", "Impossible."] },
      // @q11
      { id: "U14L2-tf-1", type: "true-false-justify", category: "conceptual", prompt: "x = 4 solves 3x + 2 = x + 10.", isTrue: true, explanation: "3(4)+2 = 14 and 4+10 = 14 ✓.", hints: ["Plug in 4.", "14 = 14.", "True."] },
      // @q12
      { id: "U14L2-tf-2", type: "true-false-justify", category: "conceptual", prompt: "To solve 3x + 2 = x + 10 you can subtract x from ONLY the right side.", isTrue: false, explanation: "That breaks the balance — subtract x from BOTH sides.", hints: ["Balance rule.", "Both sides.", "False."] },
      // @q13
      { id: "U14L2-order-1", type: "order-steps", category: "word", prompt: "Order the steps to solve 3x + 2 = x + 10.", sequence: ["Subtract x: 2x + 2 = 10", "Subtract 2: 2x = 8", "Divide by 2: x = 4", "Check: 14 = 14"], diagnoses: { "Subtract 2: 2x = 8@0": "Collect x's first.", "Check: 14 = 14@0": "Check at the end.", "Divide by 2: x = 4@1": "Isolate the x-term, then divide." }, explanation: "Collect, isolate, divide, check.", hints: ["Collect the x's.", "Isolate.", "Check."] },
      // @q14
      { id: "U14L2-drag-1", type: "drag-match", category: "conceptual", prompt: "Match each equation to its solution.", pairs: [ { source: "3x + 2 = x + 10", target: "x = 4" }, { source: "2x − 3 = x + 5", target: "x = 8" }, { source: "5x + 4 = 2x + 13", target: "x = 3" } ], diagnoses: { "3x + 2 = x + 10->x = 8": "Subtract x: 2x = 8.", "2x − 3 = x + 5->x = 4": "x − 3 = 5 → x = 8.", "5x + 4 = 2x + 13->x = 4": "3x = 9 → x = 3." }, explanation: "Collect x, solve, check.", hints: ["Collect the x's.", "Solve each.", "Match."] },
      // @q15
      { id: "U14L2-graph-1", type: "graph-interact", category: "word", prompt: "Set the slider to x so 3x − 2 = x + 4 (key: value).", challenge: "Set the slider to 3.", validate: { value: 3 }, tolerance: 0, explanation: "Subtract x: 2x − 2 = 4 → 2x = 6 → x = 3.", hints: ["Subtract x.", "2x = 6.", "3."] }
    ],
    selection: { procedural: 2, conceptual: 2, word: 1 },
    passThreshold: 0.8,
  },
  commonMistakes: [
    { wrongPattern: "subtracts x from only one side", diagnosis: "3x + 2 = x + 10 → subtract x from BOTH: 2x + 2 = 10.", hint: "Same x-removal on both pans." },
    { wrongPattern: "adds the wrong constant", diagnosis: "2x + 2 = 10 → subtract 2 → 2x = 8, then divide: x = 4.", hint: "First isolate the x-term, then divide." },
    { wrongPattern: "skips the check", diagnosis: "Verify with the original: 3(4)+2 = 14 and 4+10 = 14 ✓.", hint: "Substitute back into the original." },
  ],
  recallTags: ["equations", "balance", "collecting-terms"],
  discovery: {
    challenges: [
      { instruction: "Show 3x + 2 = x + 10 on the scale and remove one x from EACH pan.", observe: "2x + 2 = 10 — one x remains; the balance held." },
      { instruction: "Now finish it: subtract 2, then divide by 2.", observe: "2x = 8 → x = 4, and checking 14 = 14 confirms it." },
    ],
    predict: { prompt: "What should you do FIRST to solve 3x + 2 = x + 10?", options: [{ id: "a", text: "Subtract x from both sides" }, { id: "b", text: "Add x to both sides" }, { id: "c", text: "Divide by 3 immediately" }], reveal: "Subtract x from both sides → 2x + 2 = 10; then it's a one-variable problem." },
    sayItYourWay: { prompt: "How do you handle x on BOTH sides?", phrasings: [{ id: "a", text: "Collect the x-terms onto one side first", correct: true, why: "This leaves one x to solve via the balance." }, { id: "b", text: "Subtract every x you see one by one", correct: false, why: "Anything you do to one x must hit both sides — that IS collecting." }, { id: "c", text: "Ignore the x on the right", correct: false, why: "Both sides matter — the scale must stay level." }], formalName: "unknowns on both sides" },
    stretch: "Now that x can live on both sides, what about an equation with x in brackets AND a fraction, like 2(x + 1) = (x − 3)/2? Clearing the denominator and expanding — both come next.",
  },
};
