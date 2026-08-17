import type { Lesson } from "../schema";

export const T2U14L1: Lesson = {
  // @meta
  id: "T2-U14-L1",
  tier: 2,
  unit: "Solving equations",
  title: "The Sacred Balance",
  prerequisites: ["T2-U11-L1","T2-U13-L1","T2-U13-L3"],
  estimatedMinutes: 12,
  hook: {
    question: "A bridge with a weight on each side stays level only when both sides weigh the same. An equation is that bridge: the '=' is the balance point. Add the same weight to both pans and it stays level — remove the same and it stays level. That simple truth solves EVERY equation.",
    type: "real-world",
  },
  intuitionBlocks: [{ widget: "balance-scale", narrative: "Play with the scale: put x + 3 on one pan and 11 on the other. It balances. Now remove 3 from BOTH pans — still balanced, and x alone faces 8. The scale is the whole of solving: whatever you do to one side, you must do to the other." }],

  // @discovery
  formalBlocks: [
    { definition: "An equation is a statement that two expressions are equal — like a balanced scale. Solving means finding the value of x that keeps the scale level. The golden rule: whatever you do to one side, do to the other, and the scale stays balanced. To solve x + 3 = 11, subtract 3 from both sides: x = 8. Check by substituting back: 8 + 3 = 11 ✓.", examples: ["x + 5 = 12 → subtract 5: x = 7, and 7 + 5 = 12 ✓.", "x − 4 = 9 → add 4: x = 13, and 13 − 4 = 9 ✓."], pitfall: "Never perform an operation on only one side — that tips the scale and destroys the equation. Whatever you do to one pan, do to the other.", altExplanations: ["GAME: an equation is a perfectly balanced boss scale — doing anything to one pan (adding damage, removing blocks) must copy to the other, or the scale tips and the boss enrages. x + 3 = 11: remove 3 from both pans to expose x = 8.", "FOOD: two identical balance bowls — if you remove 5 biscuits from the left bowl, you must remove 5 from the right to keep them level. Solving x + 5 = 12 is clearing the same garnish off both bowls."] },
  ],
  gutChecks: [{ prompt: "Solve x + 7 = 15.", answer: "x = 8 — subtract 7 from both sides: 15 − 7 = 8." }],
  quiz: {
    pool: [
      // @q01
      { id: "U14L1-mcq-1", type: "mcq", category: "procedural", prompt: "Solve x + 3 = 11.", options: [ { id: "a", text: "x = 8" }, { id: "b", text: "x = 14" }, { id: "c", text: "x = 3" }, { id: "d", text: "x = 11" } ], correctOptionId: "a", diagnoses: { b: "14 = 11 + 3, added instead of subtracting.", c: "3 is the number to remove, not x.", d: "x is the answer, not the total." }, explanation: "Subtract 3 from both sides: x = 8.", hints: ["Subtract 3 both sides.", "11 − 3.", "Subtract 3 from both sides: x = 8."] },
      // @q02
      { id: "U14L1-mcq-2", type: "mcq", category: "conceptual", prompt: "Why can't you subtract 3 from only one side of x + 3 = 11?", options: [ { id: "a", text: "3 is a negative number" }, { id: "b", text: "The scale would tip — both sides must stay equal" }, { id: "c", text: "Only the left side has x" }, { id: "d", text: "The right side is bigger" } ], correctOptionId: "b", diagnoses: { a: "3 is positive here.", c: "That's fine — but operations must hit both sides.", d: "Size isn't relevant to correctness." }, explanation: "An equation is a balance: changing one side breaks the equality.", hints: ["What does '=' demand?", "Balance.", "Same to both sides."] },
      // @q03
      { id: "U14L1-mcq-3", type: "mcq", category: "word", prompt: "Your balance at a cash machine is b dollars. You buy a $4 snack; the new balance is b − 4 = 20. What was b?", options: [ { id: "a", text: "20" }, { id: "b", text: "16" }, { id: "c", text: "24" }, { id: "d", text: "5" } ], correctOptionId: "c", diagnoses: { b: "16 = 20 − 4 — added the wrong side.", a: "20 is the new balance.", d: "5 is 20 ÷ 4, wrong." }, explanation: "Add 4 to both sides: b = 24.", hints: ["Add 4 both sides.", "20 + 4.", "Add 4 to both sides: b = 24."] },
      // @q04
      { id: "U14L1-mcq-4", type: "mcq", category: "procedural", prompt: "Solve x − 4 = 9.", options: [ { id: "a", text: "x = 36" }, { id: "b", text: "x = 5" }, { id: "c", text: "x = 9" }, { id: "d", text: "x = 13" } ], correctOptionId: "d", diagnoses: { b: "5 = 9 − 4 — you subtracted instead of adding.", c: "9 is the right side, not x.", a: "36 = 9 × 4 — wrong operation." }, explanation: "Add 4 to both sides: x = 13.", hints: ["Add 4 both sides.", "9 + 4.", "Add 4 to both sides: x = 13."] },
      // @q05
      { id: "U14L1-mcq-5", type: "mcq", category: "conceptual", prompt: "How do you check x = 13 solves x − 4 = 9?", options: [ { id: "a", text: "Substitute 13 for x: 13 − 4 = 9" }, { id: "b", text: "See if 13 is big enough" }, { id: "c", text: "Add 13 and 4" }, { id: "d", text: "Guess another number" } ], correctOptionId: "a", diagnoses: { b: "Size isn't the test.", c: "Adding 13 and 4 isn't the equation.", d: "Guessing isn't verifying." }, explanation: "Plug x = 13 back in: 13 − 4 = 9 ✓.", hints: ["Plug the answer in.", "13 − 4.", "Plug x = 13 back in: 13 − 4 = 9 ✓."] },
      // @q06
      { id: "U14L1-mcq-6", type: "mcq", category: "word", prompt: "A ladder's top is 8 + x rungs from the ground, reaching 15 rungs high. Solve for x.", options: [ { id: "a", text: "x = 23" }, { id: "b", text: "x = 7" }, { id: "c", text: "x = 15" }, { id: "d", text: "x = 8" } ], correctOptionId: "b", diagnoses: { a: "23 = 8 + 15 — added.", c: "15 is the total.", d: "8 is the constant." }, explanation: "8 + x = 15 → subtract 8: x = 7.", hints: ["8 + x = 15.", "Subtract 8.", "8 + x = 15 → subtract 8: x = 7."] },
      // @q07
      { id: "U14L1-num-1", type: "numeric-input", category: "procedural", prompt: "Solve x + 5 = 12. Type x.", answer: 7, tolerance: 0, explanation: "Subtract 5 from both sides: x = 7.", hints: ["Subtract 5.", "12 − 5.", "Subtract 5 from both sides: x = 7."] },
      // @q08
      { id: "U14L1-num-2", type: "numeric-input", category: "procedural", prompt: "Solve x − 6 = 10. Type x.", answer: 16, tolerance: 0, explanation: "Add 6 to both sides: x = 16.", hints: ["Add 6.", "10 + 6.", "Add 6 to both sides: x = 16."] },
      // @q09
      { id: "U14L1-num-3", type: "numeric-input", category: "conceptual", prompt: "Fill the gap: x + 9 = 20. Type x.", answer: 11, tolerance: 0, explanation: "20 − 9 = 11.", hints: ["Undo +9.", "20 − 9.", "20 − 9 = 11."] },
      // @q10
      { id: "U14L1-frac-1", type: "fraction-input", category: "conceptual", prompt: "Solve x + 1/2 = 1. Write x as a fraction.", numerator: 1, denominator: 2, acceptEquivalent: true, explanation: "x = 1 − 1/2 = 1/2.", hints: ["Subtract 1/2.", "1 − 1/2.", "x = 1 − 1/2 = 1/2."] },
      // @q11
      { id: "U14L1-tf-1", type: "true-false-justify", category: "conceptual", prompt: "x = 4 solves x + 7 = 11.", isTrue: true, explanation: "4 + 7 = 11 ✓.", hints: ["Plug in 4.", "4 + 7.", "4 + 7 = 11 ✓."] },
      // @q12
      { id: "U14L1-tf-2", type: "true-false-justify", category: "conceptual", prompt: "Subtracting 5 from only the left side of x + 5 = 12 gives a valid equation.", isTrue: false, explanation: "Only one side changed breaks the balance — both sides must get the same treatment.", hints: ["Balance rule.", "Both sides.", "Only one side changed breaks the balance — both sides must get the same treatment."] },
      // @q13
      { id: "U14L1-order-1", type: "order-steps", category: "word", prompt: "Order the steps to solve x + 3 = 11.", sequence: ["Write x + 3 = 11", "Subtract 3 from both sides", "x = 8", "Check: 8 + 3 = 11"], diagnoses: { "Subtract 3 from both sides@0": "Write the equation first.", "Check: 8 + 3 = 11@0": "Check at the end.", "x = 8@1": "Subtract before writing the answer." }, explanation: "Subtract 3 both sides, then verify.", hints: ["Write the equation.", "Undo the +3.", "Subtract 3 both sides, then verify."] },
      // @q14
      { id: "U14L1-drag-1", type: "drag-match", category: "conceptual", prompt: "Match each equation to its solution.", pairs: [ { source: "x + 2 = 7", target: "x = 5" }, { source: "x − 3 = 8", target: "x = 11" }, { source: "x + 10 = 10", target: "x = 0" } ], diagnoses: { "x + 2 = 7->x = 11": "7 − 2 = 5.", "x − 3 = 8->x = 0": "8 + 3 = 11.", "x + 10 = 10->x = 5": "10 − 10 = 0." }, explanation: "Undo the addition/subtraction on each.", hints: ["Undo + or −.", "Solve each.", "Undo the addition/subtraction on each."] },
      // @q15
      { id: "U14L1-graph-1", type: "graph-interact", category: "word", prompt: "Set the slider to x so x + 4 = 9 (key: value).", challenge: "Adjust the values below so they match the condition described in the prompt.", validate: { value: 5 }, tolerance: 0, explanation: "x = 9 − 4 = 5.", hints: ["Undo +4.", "9 − 4.", "x = 9 − 4 = 5."] }
    ],
    selection: { procedural: 2, conceptual: 2, word: 1 },
    passThreshold: 0.8,
  },
  commonMistakes: [
    { wrongPattern: "changes only one side", diagnosis: "x + 3 = 11 → x = 11 breaks the scale; you must subtract 3 from BOTH sides.", hint: "Same operation, both sides." },
    { wrongPattern: "forgets to check the answer", diagnosis: "Always substitute back: if x = 8, then 8 + 3 must equal 11.", hint: "Verify by plugging in." },
    { wrongPattern: "applies the inverse to the WRONG side", diagnosis: "For x − 4 = 9, add 4 to both sides (not multiply): x = 13.", hint: "Use the opposite operation (inverse)." },
  ],
  recallTags: ["equations", "balance", "solving"],
  discovery: {
    challenges: [
      { instruction: "Place x + 3 on one pan and 11 on the other. Since it balances, remove 3 from BOTH pans.", observe: "x alone now faces 8 — removal from both sides keeps the scale level." },
      { instruction: "Now set up x − 4 = 9 and add 4 to both pans.", observe: "x faces 13 — adding to both sides also keeps the balance." },
    ],
    predict: { prompt: "If x + 3 = 11, what is x?", numeric: { answer: 8, tolerance: 0 }, reveal: "x = 8 — subtract 3 from both sides and the scale shows x balanced against 8." },
    sayItYourWay: { prompt: "What does the '=' sign mean when solving?", phrasings: [{ id: "a", text: "Both sides weigh the same — keep it that way", correct: true, why: "The golden rule preserves the balance." }, { id: "b", text: "A signal to guess", correct: false, why: "There's a precise method, not guessing." }, { id: "c", text: "The answer is on the right", correct: false, why: "Either side can hold the answer." }], formalName: "maintaining the balance to solve equations" },
    stretch: "x + 3 = 11 is easy because x is alone on one side. But what if the equation is 3x = 12, or x appears twice? The next lessons extend the balance one step at a time.",
  },
};
