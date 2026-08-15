import type { Lesson } from "../schema";

export const T2U16L2: Lesson = {
  // @meta
  id: "T2-U16-L2",
  tier: 2,
  unit: "Inequalities",
  title: "Solving Inequalities (and the Flip)",
  prerequisites: ["T2-U14-L2","T2-U15-L4","T2-U16-L1"],
  estimatedMinutes: 12,
  hook: { question: "3x + 1 > 10 solves like an equation — subtract 1, divide by 3 — until you hit −2x > 6. Divide by −2 and the whole inequality flips. Watch on the number line why multiplying by a negative turns everything around.", type: "paradox" },
  intuitionBlocks: [{ widget: "number-line", narrative: "Start with −2 < 3 and multiply both sides by −1. Watch −2 and 3 trade places: −2 < 3 becomes 2 < −3? No — the order REVERSES, and the < must flip to >. The line itself turns around." }],

  // @discovery
  formalBlocks: [{ definition: "Solve inequalities like equations: add/subtract the same to both sides, multiply/divide both sides by the same POSITIVE amount — the direction stays. But multiplying or dividing by a NEGATIVE flips the inequality: −2 < 3 → 2 > −3 after ×(−1).", examples: ["3x + 1 > 10 → 3x > 9 → x > 3 (positive divisor, no flip).", "−2x > 6 → divide by −2: x < −3 (flip!). Check x = −4: −2(−4) = 8 > 6 ✓."], pitfall: "Only exact 'multiply/divide both sides by a negative' flips the direction — adding/subtracting never flips, and multiplying by a positive never flips.", altExplanations: ["GAME: a negative flip reverses the map's direction — −2 < 3, but after ×(−1) the inequality flips: 2 > −3. Multiplying an inequality by a negative mirrors the entire number line, swapping left and right.", "MONEY: debt comparison — owing $2 is better than owing $3 (−2 > −3). But multiplied by −1, those positions swap: $2 is worse than $3? No — flipped: 2 > −3 reverses to −2 < 3. The sign flip always flips the inequality arrow."] }],
  gutChecks: [{ prompt: "Solve −3x > 9.", answer: "x < −3 (flip on dividing by −3)." }],
  quiz: {
    pool: [
      // @q01
      { id: "U16L2-mcq-1", type: "mcq", category: "procedural", prompt: "3x > 9. Divide by 3. Which is correct?", options: [ { id: "a", text: "x > 3" }, { id: "b", text: "x < 3" }, { id: "c", text: "x ≥ 3" }, { id: "d", text: "x = 3" } ], correctOptionId: "a", diagnoses: { b: "No flip — dividing by a POSITIVE keeps the direction.", c: "> stayed >; no 'or equal' introduced.", d: "It's an inequality, not an equation — a whole range." }, explanation: "Positive divisor → direction unchanged: x > 3.", hints: ["3 is positive.", "No flip.", "x > 3."] },
      // @q02
      { id: "U16L2-mcq-2", type: "mcq", category: "conceptual", prompt: "−2 < 3. Multiply both sides by −1. What's true?", options: [ { id: "a", text: "2 > −3 (flip!)" }, { id: "b", text: "2 < −3" }, { id: "c", text: "−2 < 3 stays the same" }, { id: "d", text: "−2 > 3" } ], correctOptionId: "a", diagnoses: { b: "2 > −3 — the order reverses, so the symbol flips.", c: "Multiplying changes the numbers; the direction must flip.", d: "−2 × −1 = 2, not −2." }, explanation: "Multiply by −1 reflects the line: −2 < 3 becomes 2 > −3.", hints: ["Multiply each side.", "Order reverses.", "Flip to >."] },
      // @q03
      { id: "U16L2-mcq-3", type: "mcq", category: "word", prompt: "Budget: −5x > 20 means you lose 5 each round; how many rounds until debt exceeds 20? Solve −5x > 20.", options: [ { id: "a", text: "x < −4" }, { id: "b", text: "x > −4" }, { id: "c", text: "x > 4" }, { id: "d", text: "x < 4" } ], correctOptionId: "a", diagnoses: { b: "Dividing by −5 flips the > to <.", c: "No flip AND the sign of the RHS is wrong.", d: "The ÷(−5) forces a flip: x < −4." }, explanation: "−5x > 20 ÷(−5): x < −4.", hints: ["Divide by −5.", "NEGATIVE → flip.", "x < −4."] },
      // @q04
      { id: "U16L2-mcq-4", type: "mcq", category: "procedural", prompt: "x + 4 < 9. Subtract 4. Which is correct?", options: [ { id: "a", text: "x < 5" }, { id: "b", text: "x > 5" }, { id: "c", text: "x < 13" }, { id: "d", text: "x < −5" } ], correctOptionId: "a", diagnoses: { b: "Subtracting never flips the symbol.", c: "Subtract 4, don't add it.", d: "9 − 4 = 5, not −5." }, explanation: "x + 4 − 4 < 9 − 4 → x < 5. Addition/subtraction: no flip.", hints: ["Do the same to both.", "No flip.", "x < 5."] },
      // @q05
      { id: "U16L2-mcq-5", type: "mcq", category: "conceptual", prompt: "Which operation flips the inequality?", options: [ { id: "a", text: "Multiplying or dividing both sides by a NEGATIVE" }, { id: "b", text: "Adding a negative" }, { id: "c", text: "Subtracting a positive" }, { id: "d", text: "Multiplying by a positive" } ], correctOptionId: "a", diagnoses: { b: "Adding −3 is just adding; no flip.", c: "Subtracting any number: no flip.", d: "Positive multipliers keep the direction." }, explanation: "Only exact × or ÷ by a negative flips.", hints: ["Think of the line reflecting.", "Negative multiplier.", "× or ÷ by negative."] },
      // @q06
      { id: "U16L2-mcq-6", type: "mcq", category: "word", prompt: "You need at least 60 marks: 20 + 2x ≥ 60 (x = correct answers). Solve for x.", options: [ { id: "a", text: "x ≥ 20" }, { id: "b", text: "x > 20" }, { id: "c", text: "x ≥ 40" }, { id: "d", text: "x ≤ 20" } ], correctOptionId: "a", diagnoses: { b: "≥ includes 20 — you don't lose it.", c: "Subtract 20 first: 2x ≥ 40, then x ≥ 20.", d: "Positive divisor keeps ≥ going the same way." }, explanation: "2x ≥ 40 → x ≥ 20 (no flip; positive 2).", hints: ["Subtract 20.", "Divide by 2.", "x ≥ 20."] },
      // @q07
      { id: "U16L2-num-1", type: "numeric-input", category: "procedural", prompt: "−3x > 9. Type the boundary of the solution (the number x compares with).", answer: -3, tolerance: 0, explanation: "÷(−3) → x < −3 — the flip is baked into the answer's direction.", hints: ["Divide by −3.", "9 ÷ −3 = −3.", "x < −3."] },
      // @q08
      { id: "U16L2-num-2", type: "numeric-input", category: "procedural", prompt: "4x < 20. Type the largest whole number solution.", answer: 4, tolerance: 0, explanation: "x < 5, so the largest whole number is 4.", hints: ["x < 5.", "Whole numbers under 5.", "4."] },
      // @q09
      { id: "U16L2-num-3", type: "numeric-input", category: "conceptual", prompt: "x + 5 ≥ 8. Type the smallest whole number solution.", answer: 3, tolerance: 0, explanation: "x ≥ 3 → 3 is included.", hints: ["Subtract 5.", "x ≥ 3.", "3."] },
      // @q10
      { id: "U16L2-frac-1", type: "fraction-input", category: "conceptual", prompt: "2x > 1. Write the boundary value as a fraction.", numerator: 1, denominator: 2, acceptEquivalent: true, explanation: "x > 1/2 — the boundary is 1/2.", hints: ["Divide by 2.", "x > 1/2.", "1/2."] },
      // @q11
      { id: "U16L2-tf-1", type: "true-false-justify", category: "conceptual", prompt: "Multiplying an inequality by a negative number flips its direction.", isTrue: true, explanation: "The number line reflects — every order reverses.", hints: ["Reflect the line.", "Order reverses.", "True."] },
      // @q12
      { id: "U16L2-tf-2", type: "true-false-justify", category: "conceptual", prompt: "x + 2 < 5 solves to x > 3 (subtracting 2 flips the symbol).", isTrue: false, explanation: "Subtracting never flips: x < 3.", hints: ["Add/subtract: no flip.", "x < 3.", "False."] },
      // @q13
      { id: "U16L2-order-1", type: "order-steps", category: "word", prompt: "Order the steps to solve −2x > 6.", sequence: ["Note the coefficient of x is negative (−2)", "Divide both sides by −2", "FLIP the sign: x < −3", "Check: −2(−4) = 8 > 6 ✓"], diagnoses: { "Note the coefficient of x is negative (−2)@1": "Check the coefficient first.", "Divide both sides by −2@0": "Divide before flipping.", "FLIP the sign: x < −3@1": "Flip AFTER dividing by the negative." }, explanation: "Negative coefficient → divide → flip → verify.", hints: ["Check coefficient.", "Divide.", "Then flip."] },
      // @q14
      { id: "U16L2-drag-1", type: "drag-match", category: "conceptual", prompt: "Match each step to whether it flips the symbol.", pairs: [ { source: "Multiply both sides by −2", target: "Flip" }, { source: "Subtract 7 from both sides", target: "No flip" }, { source: "Divide both sides by positive 5", target: "No flip" } ], diagnoses: { "Multiply both sides by −2->No flip": "Negative multiplier ALWAYS flips.", "Subtract 7 from both sides->Flip": "Adding/subtracting never flips.", "Divide both sides by positive 5->Flip": "Positive divisor keeps direction." }, explanation: "Only × or ÷ by a negative flips.", hints: ["Negative multiplier.", "Flip for negative.", "Else no."] },
      // @q15
      { id: "U16L2-graph-1", type: "graph-interact", category: "word", prompt: "−2x > 6 solves to x < −3. Set the slider to −3 (key: value) — the boundary.", challenge: "Set the slider to −3.", validate: { value: -3 }, tolerance: 0.01, explanation: "Boundary is −3; the flip points the ray left.", hints: ["Divide by −2.", "x < −3.", "−3."] }
    ],
    selection: { procedural: 2, conceptual: 2, word: 1 },
    passThreshold: 0.8,
  },
  commonMistakes: [
    { wrongPattern: "forgets the flip on negative division", diagnosis: "× or ÷ by a negative reflects the number line — the symbol must turn around.", hint: "Anytime the multiplier/divisor is negative, flip the sign." },
    { wrongPattern: "flips when adding or subtracting", diagnosis: "Adding/subtracting shifts the line but never reverses order — no flip.", hint: "Flip ONLY for × or ÷ by a negative." },
    { wrongPattern: "writes equality instead of range", diagnosis: "The answer is a whole ray of values, not one number.", hint: "Keep the inequality symbol; the range is the point." },
  ],
  recallTags: ["inequalities", "sign-flip", "solving"],
  discovery: {
    challenges: [
      { instruction: "Place −2 and 3 on the line, note −2 < 3, then multiply both by −1.", observe: "2 and −3 appear — the ORDER has reversed, so the < must become >." },
      { instruction: "Slide both sides of −2x > 6 through division by −2 and watch the ray.", observe: "The ray flips direction at −3: solutions are x < −3, not x > −3." },
    ],
    predict: { prompt: "Start with −2 < 3. Multiply BOTH sides by −1. What happens to the inequality?", options: [{ id: "a", text: "It stays < : 2 < −3" }, { id: "b", text: "It flips to >: 2 > −3" }, { id: "c", text: "Nothing — the numbers just change magnitude" }], reveal: "The order reverses: −2 < 3 becomes 2 > −3 — the < FLIPS to >. Multiplying by −1 reflects the whole number line, turning left into right." },
    sayItYourWay: { prompt: "When solving an inequality, when does the symbol flip?", phrasings: [{ id: "a", text: "When you multiply or divide both sides by a negative number", correct: true, why: "A negative multiplier reflects the line and reverses order." }, { id: "b", text: "Whenever you move a term across the sign", correct: false, why: "Adding and subtracting never flip — only negative ×/÷ does." }, { id: "c", text: "Whenever the answer is negative", correct: false, why: "The answer being negative is irrelevant; the OPERATION decides." }], formalName: "the inequality sign-flip rule (multiplying/dividing by a negative)" },
    stretch: "x > 3.5 is a range of literally every number above — including 4, 5, 10. What if the problem only wants whole numbers? Listing them is U16-L3.",
  },
};
