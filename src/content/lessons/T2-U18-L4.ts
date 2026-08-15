import type { Lesson } from "../schema";

export const T2U18L4: Lesson = {
  // @meta
  id: "T2-U18-L4",
  tier: 2,
  unit: "Coordinates & straight lines",
  title: "Lines from Clues",
  prerequisites: ["T2-U15-L2","T2-U17-L3","T2-U18-L3"],
  estimatedMinutes: 12,
  hook: { question: "Detectives rebuild identities from two clues. A line is the same: give me a gradient and one point — or just two points — and the whole y = mx + c equation emerges. Every line's secret, decoded from clues.", type: "puzzle" },
  intuitionBlocks: [{ widget: "graph-plotter", narrative: "Drop two points on the grid and watch the line rebuild itself between them. The gradient comes from their rise/run; the intercept where the rebuilt line meets the y-axis. Clues in, equation out." }],

  // @discovery
  formalBlocks: [{ definition: "To find a line's equation: (1) gradient m from two points — rise/run; (2) substitute one point into y = mx + c to solve for c; (3) write y = mx + c. With gradient + one point, skip straight to step 2.", examples: ["Through (1, 3) and (3, 7): m = (7−3)/(3−1) = 2; 3 = 2(1) + c → c = 1; y = 2x + 1.", "Gradient −1 through (2, 4): 4 = −1(2) + c → c = 6; y = −x + 6."], pitfall: "Use the point's x AND y in the substitution: for (1, 3) with m = 2, write 3 = 2(1) + c — not 1 = 2(3) + c. x goes beside m, and y stands alone on the left.", altExplanations: ["GAME: finding a line's equation is crafting its stat card — measure gradient m from two spawn points (rise/run), then slot one point into y = mx + c to solve the intercept c. Gradient + one point skips straight to the intercept step.", "MONEY: two known receipts (1,3) and (3,7) reveal the line's cost curve — slope m = (7−3)/(3−1) = 2, then one receipt fixes c: 3 = 2(1) + c → c = 1, so y = 2x + 1."] }],
  gutChecks: [{ prompt: "Find the equation through (0, 2) with gradient 3.", answer: "c = 2 (point is on the y-axis), so y = 3x + 2." }],
  quiz: {
    pool: [
      // @q01
      { id: "U18L4-mcq-1", type: "mcq", category: "procedural", prompt: "Line through (1, 3) and (3, 7). What is m?", options: [ { id: "a", text: "2" }, { id: "b", text: "4" }, { id: "c", text: "1/2" }, { id: "d", text: "3" } ], correctOptionId: "a", diagnoses: { b: "4 is the rise alone — ÷ run 2.", c: "That's run ÷ rise.", d: "3 is a y-coordinate." }, explanation: "m = (7−3)/(3−1) = 4/2 = 2.", hints: ["rise 4.", "run 2.", "m = 2."] },
      // @q02
      { id: "U18L4-mcq-2", type: "mcq", category: "conceptual", prompt: "With m = 2 and point (1, 3), how do you find c?", options: [ { id: "a", text: "Substitute: 3 = 2(1) + c → c = 1" }, { id: "b", text: "Substitute: 1 = 2(3) + c → c = −5" }, { id: "c", text: "c = m × 3" }, { id: "d", text: "c = the y-coordinate always" } ], correctOptionId: "a", diagnoses: { b: "x goes beside m; y stands alone: 3 = 2(1) + c.", c: "c comes from the point, not m times y.", d: "c is y only when x = 0." }, explanation: "y = mx + c → 3 = 2(1) + c → c = 1.", hints: ["y = mx + c.", "Plug (1, 3).", "c = 1."] },
      // @q03
      { id: "U18L4-mcq-3", type: "mcq", category: "word", prompt: "A plant grows 3 cm/week from 5 cm: the line passes (0, 5) with m = 3. Equation?", options: [ { id: "a", text: "y = 3x + 5" }, { id: "b", text: "y = 5x + 3" }, { id: "c", text: "y = 3x" }, { id: "d", text: "y = 8x" } ], correctOptionId: "a", diagnoses: { b: "m = 3, c = 5 — swapped.", c: "It ignores the starting 5 cm.", d: "8 is the height at week 1, not the gradient." }, explanation: "m = growth rate 3; c = starting height 5 → y = 3x + 5.", hints: ["m = 3/week.", "c = 5 start.", "y = 3x + 5."] },
      // @q04
      { id: "U18L4-mcq-4", type: "mcq", category: "procedural", prompt: "m = −1 through (2, 4). What is c?", options: [ { id: "a", text: "6" }, { id: "b", text: "2" }, { id: "c", text: "−6" }, { id: "d", text: "−2" } ], correctOptionId: "a", diagnoses: { b: "2 is the x; 4 = −2 + c → c = 6.", c: "Sign: 4 + 2 = 6, positive.", d: "Substitute correctly: c = 4 + 2 = 6." }, explanation: "4 = −1(2) + c → c = 6.", hints: ["4 = −2 + c.", "c = 6.", "6."] },
      // @q05
      { id: "U18L4-mcq-5", type: "mcq", category: "conceptual", prompt: "Why do TWO points determine a line uniquely?", options: [ { id: "a", text: "They fix both the tilt (m) and the height (c)" }, { id: "b", text: "Lines need at least three points" }, { id: "c", text: "One point is enough" }, { id: "d", text: "Points don't determine lines" } ], correctOptionId: "a", diagnoses: { b: "Two points are sufficient for a straight line.", c: "One point allows many tilts through it.", d: "Two points pin m and c together." }, explanation: "Two points give rise/run (m) and a substitution (c).", hints: ["Rise/run needs two.", "Then solve c.", "Both fixed."] },
      // @q06
      { id: "U18L4-mcq-6", type: "mcq", category: "word", prompt: "Cooling: 40° at t = 0, 30° at t = 2 (linear). Equation T = mt + c?", options: [ { id: "a", text: "T = −5t + 40" }, { id: "b", text: "T = 5t + 40" }, { id: "c", text: "T = −10t + 30" }, { id: "d", text: "T = 40t + 30" } ], correctOptionId: "a", diagnoses: { b: "It cools — m is negative.", c: "m = (30−40)/2 = −5, and c = 40.", d: "40 is c, not the rate." }, explanation: "m = (30−40)/2 = −5; c = 40 → T = −5t + 40.", hints: ["m = −10/2.", "c = 40.", "T = −5t + 40."] },
      // @q07
      { id: "U18L4-num-1", type: "numeric-input", category: "procedural", prompt: "Through (1, 3) and (3, 7). Type c.", answer: 1, tolerance: 0, explanation: "m = 2; 3 = 2(1) + c → c = 1.", hints: ["m = 2.", "3 = 2 + c.", "c = 1."] },
      // @q08
      { id: "U18L4-num-2", type: "numeric-input", category: "procedural", prompt: "Through (0, 2) with gradient 3. Type c.", answer: 2, tolerance: 0, explanation: "x = 0, so y = c = 2.", hints: ["On the y-axis.", "c = 2.", "2."] },
      // @q09
      { id: "U18L4-num-3", type: "numeric-input", category: "conceptual", prompt: "m = 2 through (2, 6). Type c.", answer: 2, tolerance: 0, explanation: "6 = 2(2) + c → c = 2.", hints: ["6 = 4 + c.", "c = 2.", "2."] },
      // @q10
      { id: "U18L4-frac-1", type: "fraction-input", category: "conceptual", prompt: "Through (1, 2) and (3, 3). Write m as a fraction.", numerator: 1, denominator: 2, acceptEquivalent: true, explanation: "m = (3−2)/(3−1) = 1/2.", hints: ["rise 1.", "run 2.", "1/2."] },
      // @q11
      { id: "U18L4-tf-1", type: "true-false-justify", category: "conceptual", prompt: "Two points always pin down one unique straight line.", isTrue: true, explanation: "They fix m from rise/run and c from substitution.", hints: ["One pair of points.", "One line through both.", "True."] },
      // @q12
      { id: "U18L4-tf-2", type: "true-false-justify", category: "conceptual", prompt: "A line through (1, 1) and (2, 2) has equation y = x.", isTrue: true, explanation: "m = 1, and through (0, 0): c = 0 → y = x.", hints: ["m = 1.", "Crosses origin.", "y = x."] },
      // @q13
      { id: "U18L4-order-1", type: "order-steps", category: "word", prompt: "Order the steps to find the line through (1, 3) and (3, 7).", sequence: ["Gradient: m = (7−3)/(3−1) = 2", "Substitute: 3 = 2(1) + c", "Solve: c = 1", "Write: y = 2x + 1"], diagnoses: { "Gradient: m = (7−3)/(3−1) = 2@1": "Find m first.", "Substitute: 3 = 2(1) + c@0": "Substitute after finding m.", "Write: y = 2x + 1@0": "Write the equation last." }, explanation: "m, substitution, c, then the equation.", hints: ["Find m.", "Substitute a point.", "Solve c, then write."] },
      // @q14
      { id: "U18L4-drag-1", type: "drag-match", category: "conceptual", prompt: "Match each line to its equation.", pairs: [ { source: "Through (0, 1), m = 2", target: "y = 2x + 1" }, { source: "Through (1, 3), m = 1", target: "y = x + 2" }, { source: "Through (0, −2), m = −1", target: "y = −x − 2" } ], diagnoses: { "Through (0, 1), m = 2->y = x + 2": "c = 1 and m = 2 → y = 2x + 1.", "Through (1, 3), m = 1->y = 2x + 1": "3 = 1(1) + c → c = 2 → y = x + 2.", "Through (0, −2), m = −1->y = 2x + 1": "c = −2, m = −1 → y = −x − 2." }, explanation: "Substitute the point into y = mx + c to solve for c.", hints: ["c = y when x = 0.", "Plug the point in.", "Solve c."] },
      // @q15
      { id: "U18L4-graph-1", type: "graph-interact", category: "word", prompt: "Make the line pass through (2, 6) with gradient 2. Set the slider to the gradient m first (key: value).", challenge: "Set the gradient m to 2.", validate: { value: 2 }, tolerance: 0.01, explanation: "m = 2; through (2, 6) → c = 2, so y = 2x + 2 is the whole line.", hints: ["Gradient from the clue.", "m = 2.", "2."] }
    ],
    selection: { procedural: 2, conceptual: 2, word: 1 },
    passThreshold: 0.8,
  },
  commonMistakes: [
    { wrongPattern: "swaps the point into the wrong slots", diagnosis: "y goes alone on the left; x goes beside m: (2, 6) with m = 2 → 6 = 2(2) + c.", hint: "Write y = mx + c, then substitute the point's y and x in the right places." },
    { wrongPattern: "stops after finding m", diagnosis: "The equation needs c too — substitute one point to finish.", hint: "Always solve for c and write y = mx + c." },
    { wrongPattern: "uses points from different lines", diagnosis: "Both clues must come from the SAME line.", hint: "Label both points as being on one line before using them." },
  ],
  recallTags: ["straight-lines", "equation-of-a-line", "gradient-intercept"],
  discovery: {
    challenges: [
      { instruction: "Place (1, 3) and (3, 7) and read the rebuilt line.", observe: "The line's gradient is 2 and it crosses at (0, 1) — y = 2x + 1." },
      { instruction: "Slide one point and watch the equation update.", observe: "Every move rewrites m and c — the clues fully determine the line." },
    ],
    predict: { prompt: "A line with gradient 2 passing through (2, 6) — what is c?", options: [{ id: "a", text: "2" }, { id: "b", text: "6" }, { id: "c", text: "4" }], reveal: "c = 2: 6 = 2(2) + c. The equation y = 2x + 2 passes through (2, 6) — exactly the clue." },
    sayItYourWay: { prompt: "What does it mean to 'find the equation of a line'?", phrasings: [{ id: "a", text: "Determining its m and c from the clues given", correct: true, why: "Two clues fix the tilt and height — then the line is fully known." }, { id: "b", text: "Drawing the longest line possible", correct: false, why: "Lines are infinite in both directions; drawing isn't the equation." }, { id: "c", text: "Finding its area", correct: false, why: "Lines have no area — they're one-dimensional paths." }], formalName: "determining the gradient–intercept equation of a line" },
    stretch: "Straight lines are the first graphs. Parabolas bend — and their signatures hide in the squared term. Curves are U19.",
  },
};
