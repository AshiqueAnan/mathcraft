import type { Lesson } from "../schema";

export const T2U15L2: Lesson = {
  // @meta
  id: "T2-U15-L2",
  tier: 2,
  unit: "Simultaneous & quadratic equations",
  title: "Elimination and Substitution",
  prerequisites: ["T2-U12-L4","T2-U14-L4","T2-U15-L1"],
  estimatedMinutes: 12,
  hook: { question: "Reading a crossing point off a graph is one way — but when the lines cross at (4.31, 1.97), the graph wobbles. Algebra gives exact answers. Two tools: swap one variable in, or line the two equations up and make one variable vanish.", type: "real-world" },
  intuitionBlocks: [{ widget: "balance-scale", narrative: "Both pans hold the same unknown object. Substitution: take 'y equals this' and place that expression where y sits. Elimination: add or subtract whole balanced equations so one variable cancels — like removing the same weight from both sides." }],

  // @discovery
  formalBlocks: [{ definition: "Substitution: from y = x + 2, replace y in the other equation — x + (x + 2) = 10 — one equation in one unknown. Elimination: line equations up and add/subtract to cancel a variable — x + y = 10 plus x − y = 4 gives 2x = 14. Both end at the same point.", examples: ["Substitution: y = 3x and x + y = 8 → x + 3x = 8 → 4x = 8 → x = 2, y = 6.", "Elimination: x + y = 10 and x − y = 4 → add: 2x = 14 → x = 7, then 7 + y = 10 → y = 3."], pitfall: "In substitution, replace the FULL expression for y and don't lose brackets: if y = 2x + 1, then x + (2x + 1) = 10, not x + 2x + 1 = 10 with the +1 dropped.", altExplanations: ["GAME: substitution is dropping in a known module — y = 3x slots straight into x + y = 8, turning two rules into one. Elimination is combining two stacks to cancel a column — add the lines and the y-column cancels.", "FOOD: substitution replaces an ingredient with its equivalent — if 1 cup = 3 scoops, then x + (3x) = 8. Elimination is pouring two mixtures so the same ingredient cancels before measuring."] }],
  gutChecks: [{ prompt: "With y = 3x and x + y = 8, substitute y and solve.", answer: "x + 3x = 8 → 4x = 8 → x = 2, y = 6." }],
  quiz: {
    pool: [
      // @q01
      { id: "U15L2-mcq-1", type: "mcq", category: "procedural", prompt: "y = 3x and x + y = 8. After substituting y, which equation do you solve?", options: [ { id: "a", text: "x + 3x = 8" }, { id: "b", text: "3x + 8 = x" }, { id: "c", text: "x · 3x = 8" }, { id: "d", text: "x + 3 = 8" } ], correctOptionId: "a", diagnoses: { b: "y is replaced, not the other way round.", c: "That's multiplication, but the equations ADD y.", d: "3x replaces y — keep the x." }, explanation: "x + 3x = 8 → 4x = 8 → x = 2.", hints: ["Replace y with 3x.", "x + 3x = 8.", "x + 3x = 8 → 4x = 8 → x = 2."] },
      // @q02
      { id: "U15L2-mcq-2", type: "mcq", category: "conceptual", prompt: "Why does elimination add x + y = 10 and x − y = 4?", options: [ { id: "a", text: "It makes the numbers smaller" }, { id: "b", text: "The y terms cancel (+y − y = 0), leaving one equation in x" }, { id: "c", text: "You always add two equations" }, { id: "d", text: "It doubles the answers" } ], correctOptionId: "b", diagnoses: { a: "Size isn't the goal — cancellation is.", c: "Sometimes you subtract; you choose the operation that cancels.", d: "Both sides stay equal; the system keeps one solution." }, explanation: "+y − y = 0, so 2x = 14 — one unknown, solvable.", hints: ["Look at the y coefficients.", "+y and −y cancel.", "+y − y = 0, so 2x = 14 — one unknown, solvable."] },
      // @q03
      { id: "U15L2-mcq-3", type: "mcq", category: "word", prompt: "Two numbers: their sum is 12 and their difference is 4. With x + y = 12 and x − y = 4, what are the numbers?", options: [ { id: "a", text: "12 and 0" }, { id: "b", text: "6 and 6" }, { id: "c", text: "8 and 4" }, { id: "d", text: "10 and 2" } ], correctOptionId: "c", diagnoses: { b: "6 and 6 have difference 0, not 4.", a: "12 and 0 have difference 12.", d: "10 − 2 = 8, not 4." }, explanation: "Add: 2x = 16 → x = 8; then y = 4. 8 + 4 = 12 ✓, 8 − 4 = 4 ✓.", hints: ["Eliminate y by adding.", "2x = 16.", "Add: 2x = 16 → x = 8; then y = 4."] },
      // @q04
      { id: "U15L2-mcq-4", type: "mcq", category: "procedural", prompt: "x + y = 10 and x − y = 4. After adding, what is 2x?", options: [ { id: "a", text: "4" }, { id: "b", text: "6" }, { id: "c", text: "10" }, { id: "d", text: "14" } ], correctOptionId: "d", diagnoses: { b: "6 is x − y's side alone — you must add both equations.", c: "That's just the first equation's total.", a: "That's the difference alone." }, explanation: "x + x = 2x and 10 + 4 = 14 → 2x = 14.", hints: ["Add left sides and right sides.", "2x = 14.", "x + x = 2x and 10 + 4 = 14 → 2x = 14."] },
      // @q05
      { id: "U15L2-mcq-5", type: "mcq", category: "conceptual", prompt: "When is substitution the handier choice?", options: [ { id: "a", text: "When one equation is already solved, like y = 2x + 1" }, { id: "b", text: "When both equations have both variables on one side" }, { id: "c", text: "Never — elimination always wins" }, { id: "d", text: "When you dislike fractions" } ], correctOptionId: "a", diagnoses: { b: "Both on one side makes elimination tempting.", c: "Both methods work; solved-form begs substitution.", d: "Fractions can appear either way." }, explanation: "y = 2x + 1 hands you the replacement directly — substitute it in.", hints: ["Look for 'y = …'.", "Plug it in.", "Solved form → substitute."] },
      // @q06
      { id: "U15L2-mcq-6", type: "mcq", category: "word", prompt: "Two tickets: a + b = 35 and a − b = 5 (adult minus child). What are the prices?", options: [ { id: "a", text: "Adult $15, child $20" }, { id: "b", text: "Adult $20, child $15" }, { id: "c", text: "Adult $30, child $5" }, { id: "d", text: "Adult $35, child $5" } ], correctOptionId: "b", diagnoses: { a: "Adult must be MORE: a − b = 5.", c: "30 − 5 = 25, not 5 — and 35 + 5? 30 + 5 = 35 ✓ but difference is 25.", d: "35 + 5 = 40, not 35." }, explanation: "Add: 2a = 40 → a = 20; then b = 15. 20 + 15 = 35 ✓, 20 − 15 = 5 ✓.", hints: ["Eliminate b by adding.", "2a = 40.", "Add: 2a = 40 → a = 20; then b = 15."] },
      // @q07
      { id: "U15L2-num-1", type: "numeric-input", category: "procedural", prompt: "y = 2x and x + y = 9. Type x.", answer: 3, tolerance: 0, explanation: "x + 2x = 9 → 3x = 9 → x = 3.", hints: ["Substitute y = 2x.", "3x = 9.", "x + 2x = 9 → 3x = 9 → x = 3."] },
      // @q08
      { id: "U15L2-num-2", type: "numeric-input", category: "procedural", prompt: "y = 2x and x + y = 9. Type y.", answer: 6, tolerance: 0, explanation: "y = 2x = 2 × 3 = 6.", hints: ["x = 3 from before.", "y = 2x.", "y = 2x = 2 × 3 = 6."] },
      // @q09
      { id: "U15L2-num-3", type: "numeric-input", category: "conceptual", prompt: "x + y = 12 and x − y = 4. Type x.", answer: 8, tolerance: 0, explanation: "Add: 2x = 16 → x = 8.", hints: ["Eliminate y.", "2x = 16.", "Add: 2x = 16 → x = 8."] },
      // @q10
      { id: "U15L2-frac-1", type: "fraction-input", category: "conceptual", prompt: "x + y = 5 and y = x − 1. Write x as a fraction.", numerator: 3, denominator: 1, acceptEquivalent: true, explanation: "x + (x − 1) = 5 → 2x = 6 → x = 3.", hints: ["Substitute y.", "2x − 1 = 5.", "x + (x − 1) = 5 → 2x = 6 → x = 3."] },
      // @q11
      { id: "U15L2-tf-1", type: "true-false-justify", category: "conceptual", prompt: "Substitution and elimination always give the same solution for the same system.", isTrue: true, explanation: "They are different roads to the same crossing point — both solve the same two equations.", hints: ["Same system, same point.", "Same solution.", "They are different roads to the same crossing point — both solve the same two equations."] },
      // @q12
      { id: "U15L2-tf-2", type: "true-false-justify", category: "conceptual", prompt: "When solving by elimination, you may add or subtract the two equations.", isTrue: true, explanation: "Either operation can cancel a variable — add when coefficients are opposites, subtract when they match.", hints: ["Opposite signs → add.", "Same signs → subtract.", "True — both allowed."] },
      // @q13
      { id: "U15L2-order-1", type: "order-steps", category: "word", prompt: "Order the steps to solve x + y = 12 and x − y = 4 by elimination.", sequence: ["Line up the equations: x + y = 12, x − y = 4", "Add: 2x = 16", "Solve: x = 8", "Substitute back: 8 + y = 12 → y = 4"], diagnoses: { "Line up the equations: x + y = 12, x − y = 4@1": "Align first, then add.", "Solve: x = 8@0": "Get 2x = 16 before solving.", "Substitute back: 8 + y = 12 → y = 4@0": "Find x before substituting." }, explanation: "Align, add to eliminate y, solve for x, then back-substitute for y.", hints: ["Align both equations.", "Add to cancel y.", "Then back-substitute."] },
      // @q14
      { id: "U15L2-drag-1", type: "drag-match", category: "conceptual", prompt: "Match each system to its best first move.", pairs: [ { source: "y = 3x; x + y = 8", target: "Substitute 3x for y" }, { source: "x + y = 10; x − y = 4", target: "Add to eliminate y" }, { source: "2x + y = 9; y = x + 3", target: "Substitute x + 3 for y" } ], diagnoses: { "y = 3x; x + y = 8->Add to eliminate y": "y is already isolated — substitute it.", "x + y = 10; x − y = 4->Substitute 3x for y": "There's no 'y = …' here — add instead.", "2x + y = 9; y = x + 3->Add to eliminate y": "y is isolated — substitute x + 3." }, explanation: "Isolated variable → substitute; matching/opposite coefficients → add or subtract.", hints: ["Look for 'y = …'.", "Isolated → substitute.", "Opposites → add."] },
      // @q15
      { id: "U15L2-graph-1", type: "graph-interact", category: "word", prompt: "The system y = 2x and x + y = 9 crosses at x = 3. Set the slider to the crossing's x-value (key: value).", challenge: "Adjust the values below so they match the condition described in the prompt.", validate: { value: 3 }, tolerance: 0.01, explanation: "Substitution: x + 2x = 9 → x = 3, y = 6.", hints: ["x + 2x = 9.", "3x = 9.", "Substitution: x + 2x = 9 → x = 3, y = 6."] }
    ],
    selection: { procedural: 2, conceptual: 2, word: 1 },
    passThreshold: 0.8,
  },
  commonMistakes: [
    { wrongPattern: "forgets the brackets in substitution", diagnosis: "y = 2x + 1 means x + (2x + 1), not x + 2x + 1 — the +1 belongs to y.", hint: "Copy the whole expression for y in brackets." },
    { wrongPattern: "adds when it should subtract", diagnosis: "Elimination picks the operation that cancels — match coefficients to subtract, opposites to add.", hint: "Check the signs of the coefficients first." },
    { wrongPattern: "stops after finding one variable", diagnosis: "A solution is an (x, y) pair — you need both values.", hint: "Back-substitute to find the second variable." },
  ],
  recallTags: ["simultaneous-equations", "substitution", "elimination"],
  discovery: {
    challenges: [
      { instruction: "Solve y = 2x with x + y = 9 by replacing y.", observe: "One variable gone: x + 2x = 9 → x = 3, then y = 6." },
      { instruction: "Now add x + y = 9 and x − y = 3.", observe: "The y's cancel: 2x = 12 → x = 6 — elimination works too." },
    ],
    predict: { prompt: "After substituting, how many unknowns remain in the equation?", options: [{ id: "a", text: "One" }, { id: "b", text: "Two" }, { id: "c", text: "Zero" }], reveal: "Exactly one — that's the whole trick. One equation in one unknown is solvable directly." },
    sayItYourWay: { prompt: "What does elimination do to the system?", phrasings: [{ id: "a", text: "Combines the equations so one variable disappears", correct: true, why: "Adding or subtracting cancels a whole variable -- one less unknown." }, { id: "b", text: "Deletes the harder equation", correct: false, why: "Both equations stay useful; you combine, not delete." }, { id: "c", text: "Guesses a point and checks it", correct: false, why: "Elimination is exact algebra, not guess-and-check." }], formalName: "elimination (the addition/subtraction method)" },
    stretch: "x² − 5x + 6 = 0 looks nothing like a line — yet it still has solutions, found by factoring. Two answers from ONE equation: that's U15-L3.",
  },
};
