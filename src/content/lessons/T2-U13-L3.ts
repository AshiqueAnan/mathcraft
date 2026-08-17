import type { Lesson } from "../schema";

export const T2U13L3: Lesson = {
  // @meta
  id: "T2-U13-L3",
  tier: 2,
  unit: "Formulas",
  title: "Rearrange with Confidence",
  prerequisites: ["T2-U12-L1","T2-U12-L4","T2-U13-L2"],
  estimatedMinutes: 12,
  hook: {
    question: "Last lesson you made x the subject of y = 2x + 3. Now the hard cases: x on both sides, or trapped in a denominator. Same two rules — keep the scales balanced and undo in reverse order — but you need a few extra moves to collect the x's.",
    type: "real-world",
  },
  intuitionBlocks: [{ widget: "balance-scale", narrative: "When x appears on both sides, gather all the x-terms onto one pan first — subtract the smaller x-term from both sides. Then proceed exactly like before: this is the moment the balance metaphor pays off." }],

  // @discovery
  formalBlocks: [
    { definition: "Harder rearrangements need two extra moves: (1) when the subject letter appears on both sides, collect the like terms first — move all x-terms to one side and constants to the other; (2) when x sits inside a denominator, multiply through by that denominator to clear it, THEN rearrange. The golden rule never changes: every operation applies to the WHOLE of both sides.", examples: ["Make x the subject of y = 3x + 2: subtract 2 (y − 2 = 3x), divide by 3 (x = (y − 2)/3).", "Solve 5/x = 2: multiply by x (5 = 2x), divide by 2 (x = 5/2)."], pitfall: "Never divide only one term of a side. To solve 3x + 2 = 5x − 4, first move the 3x (or 5x) so x's are together: 2 + 4 = 5x − 3x → 6 = 2x → x = 3. Dividing only part of one side breaks the balance.", altExplanations: ["GAME: harder rearranges are multi-step spellcraft — when x appears on both screens, gather the x-terms onto one side first, then multiply through denominators that trap x. Every step casts on the WHOLE line.", "MONEY: two accounts hold x — moving all x's to one side is like consolidating balances: y = 3x + 2 → y−2 = 3x, then divide both pots by 3. Dividing just one term is skimming one account and breaking the balance."] },
  ],
  gutChecks: [{ prompt: "Make x the subject of y = 5/x.", answer: "Multiply by x: yx = 5, divide by y: x = 5/y." }],
  quiz: {
    pool: [
      // @q01
      { id: "U13L3-mcq-1", type: "mcq", category: "procedural", prompt: "Solve 3x + 2 = 5x − 4 for x.", options: [ { id: "a", text: "x = 3" }, { id: "b", text: "x = 1" }, { id: "c", text: "x = −3" }, { id: "d", text: "x = 6" } ], correctOptionId: "a", diagnoses: { b: "1 = (5−4)? Check: 3(1)+2 = 5, 5(1)−4 = 1 — not equal.", c: "Sign slip moving the x's.", d: "6 = 2x, then divide by 2 → x = 3." }, explanation: "Subtract 3x: 2 = 2x − 4; add 4: 6 = 2x; ÷2: x = 3.", hints: ["Collect x terms.", "2 = 2x − 4.", "6 = 2x → x = 3."] },
      // @q02
      { id: "U13L3-mcq-2", type: "mcq", category: "conceptual", prompt: "When x appears on BOTH sides, what should you do first?", options: [ { id: "a", text: "Divide by x immediately" }, { id: "b", text: "Collect the x-terms onto one side" }, { id: "c", text: "Square both sides" }, { id: "d", text: "Move the constants first" } ], correctOptionId: "b", diagnoses: { a: "Only if x is a factor of everything — rare.", c: "Squaring can create fake answers.", d: "Constants move after the x's are gathered." }, explanation: "Strike the x on one side first: gather all x-terms together so one 'x' remains.", hints: ["Both sides have x.", "Get them on one side.", "Strike the x on one side first: gather all x-terms together so one 'x' remains."] },
      // @q03
      { id: "U13L3-mcq-3", type: "mcq", category: "word", prompt: "Making x the subject of y = 3/x gives?", options: [ { id: "a", text: "x = y − 3" }, { id: "b", text: "x = y/3" }, { id: "c", text: "x = 3/y" }, { id: "d", text: "x = 3y" } ], correctOptionId: "c", diagnoses: { b: "y/3 would be x = y ÷ 3, wrong operation.", a: "No subtraction involved.", d: "Multiply by x: yx = 3, then divide by y." }, explanation: "Multiply both sides by x (yx = 3), then divide by y: x = 3/y.", hints: ["x is in the denominator.", "Multiply by x first.", "Multiply both sides by x (yx = 3), then divide by y: x = 3/y."] },
      // @q04
      { id: "U13L3-mcq-4", type: "mcq", category: "procedural", prompt: "Make x the subject of y = (x + 2)/3.", options: [ { id: "a", text: "x = y − 6" }, { id: "b", text: "x = y/3 − 2" }, { id: "c", text: "x = 3y + 2" }, { id: "d", text: "x = 3y − 2" } ], correctOptionId: "d", diagnoses: { b: "The ÷3 hits the whole (x + 2), so undo it by ×3 first.", c: "Undo the +2 by subtracting, not adding.", a: "y − 6 = (y − 2×3)? No — (x+2)/3 = y means 3y = x+2." }, explanation: "Multiply by 3: 3y = x + 2, then subtract 2: x = 3y − 2.", hints: ["x is inside a fraction.", "Multiply by 3 first.", "Multiply by 3: 3y = x + 2, then subtract 2: x = 3y − 2."] },
      // @q05
      { id: "U13L3-mcq-5", type: "mcq", category: "conceptual", prompt: "Why can't you just 'move' the 3 in y = (x + 2)/3?", options: [ { id: "a", text: "The 3 divides the WHOLE bracket, so you must multiply the whole side by 3" }, { id: "b", text: "3 isn't a number" }, { id: "c", text: "Moving always works" }, { id: "d", text: "Because x is squared" } ], correctOptionId: "a", diagnoses: { b: "3 is a perfectly normal number.", c: "Moving only works when it keeps the equation true — here multiply first.", d: "No square here." }, explanation: "To undo /3, multiply BOTH sides by 3: 3y = x + 2 — the whole bracket, not just x.", hints: ["The /3 belongs to the bracket.", "Multiply both sides.", "To undo /3, multiply BOTH sides by 3: 3y = x + 2 — the whole bracket, not just x."] },
      // @q06
      { id: "U13L3-mcq-6", type: "mcq", category: "word", prompt: "A scale's equilibrium is F = kx. Make x the subject.", options: [ { id: "a", text: "x = kF" }, { id: "b", text: "x = F/k" }, { id: "c", text: "x = F + k" }, { id: "d", text: "x = k/F" } ], correctOptionId: "b", diagnoses: { a: "Undo ×k by dividing.", c: "No addition here.", d: "Divide by k, not k/F." }, explanation: "x is multiplied by k: divide both sides by k → x = F/k.", hints: ["Undo ×k.", "Divide by k.", "x is multiplied by k: divide both sides by k → x = F/k."] },
      // @q07
      { id: "U13L3-num-1", type: "numeric-input", category: "procedural", prompt: "Solve 4x + 3 = 11. Type x.", answer: 2, tolerance: 0, explanation: "4x = 8, x = 2.", hints: ["Subtract 3: 4x = 8.", "Divide by 4.", "4x = 8, x = 2."] },
      // @q08
      { id: "U13L3-num-2", type: "numeric-input", category: "procedural", prompt: "Solve 2x + 5 = 11 − x. Type x.", answer: 2, tolerance: 0, explanation: "Add x: 3x + 5 = 11; subtract 5: 3x = 6; x = 2.", hints: ["Collect x's.", "3x = 6.", "Add x: 3x + 5 = 11; subtract 5: 3x = 6; x = 2."] },
      // @q09
      { id: "U13L3-num-3", type: "numeric-input", category: "conceptual", prompt: "Solve 6/x = 3. Type x.", answer: 2, tolerance: 0, explanation: "Multiply by x: 6 = 3x → x = 2.", hints: ["x in denominator.", "Multiply both sides by x.", "Multiply by x: 6 = 3x → x = 2."] },
      // @q10
      { id: "U13L3-frac-1", type: "fraction-input", category: "conceptual", prompt: "Solve 4/x = 2. Write x as a fraction.", numerator: 2, denominator: 1, acceptEquivalent: true, explanation: "4 = 2x → x = 2.", hints: ["Multiply by x.", "4 = 2x.", "4 = 2x → x = 2."] },
      // @q11
      { id: "U13L3-tf-1", type: "true-false-justify", category: "conceptual", prompt: "3x + 2 = 5x − 4 has solution x = 3.", isTrue: true, explanation: "3(3)+2 = 11 and 5(3)−4 = 11 — checks.", hints: ["Collect x's.", "6 = 2x.", "3(3)+2 = 11 and 5(3)−4 = 11 — checks."] },
      // @q12
      { id: "U13L3-tf-2", type: "true-false-justify", category: "conceptual", prompt: "To solve 6/x = 2, you should first subtract x from both sides.", isTrue: false, explanation: "With x in the denominator, multiply both sides by x first: 6 = 2x → x = 3.", hints: ["x is in the denominator.", "Multiply by x.", "False — multiply first."] },
      // @q13
      { id: "U13L3-order-1", type: "order-steps", category: "word", prompt: "Order the steps to solve 3x + 2 = 5x − 4.", sequence: ["Subtract 3x: 2 = 2x − 4", "Add 4: 6 = 2x", "Divide by 2: x = 3"], diagnoses: { "Add 4: 6 = 2x@0": "Collect the x's first.", "Divide by 2: x = 3@0": "Then solve." }, explanation: "Collect x-terms, then isolate.", hints: ["First, gather x's.", "Then add/subtract constants.", "Finally divide."] },
      // @q14
      { id: "U13L3-drag-1", type: "drag-match", category: "conceptual", prompt: "Match each equation to its solution.", pairs: [ { source: "5/x = 5", target: "x = 1" }, { source: "2x + 1 = 7", target: "x = 3" }, { source: "3x = 9", target: "x = 3" } ], diagnoses: { "5/x = 5->x = 3": "5/x = 5 → 5 = 5x → x = 1.", "3x = 9->x = 1": "x = 9/3 = 3.", "2x + 1 = 7->x = 1": "2x = 6 → x = 3." }, explanation: "Solve each: x = 1, 3, 3.", hints: ["Undo operations.", "Solve each.", "Solve each: x = 1, 3, 3."] },
      // @q15
      { id: "U13L3-graph-1", type: "graph-interact", category: "word", prompt: "Set the slider to x in 2x + 3 = 9 (key: value).", challenge: "Adjust the values below so they match the condition described in the prompt.", validate: { value: 3 }, tolerance: 0, explanation: "2x = 6 → x = 3.", hints: ["2x = 6.", "x = 3.", "2x = 6 → x = 3."] }
    ],
    selection: { procedural: 2, conceptual: 2, word: 1 },
    passThreshold: 0.8,
  },
  commonMistakes: [
    { wrongPattern: "forgets to move ALL x terms", diagnosis: "Solve 3x + 2 = 5x − 4 by subtracting 3x from BOTH sides: 2 = 2x − 4, then 6 = 2x, x = 3.", hint: "Collect the x's onto one side before anything else." },
    { wrongPattern: "divides only part of one side", diagnosis: "3x = 6 → x = 2 is dividing the whole side; don't divide only the leading term.", hint: "Divide the entire side as one unit." },
    { wrongPattern: "tries to subtract across a denominator", diagnosis: "Clearing 5/x = 2 means multiplying BOTH sides by x, not moving the x.", hint: "When x is in the denominator, multiply through by it." },
  ],
  recallTags: ["rearrange", "subject", "collecting-terms", "denominator"],
  discovery: {
    challenges: [
      { instruction: "Use the scale to solve 3x + 2 = 5x − 4: gather the x-terms together first.", observe: "Subtracting 3x from both sides gives 2 = 2x − 4, then 6 = 2x → x = 3." },
      { instruction: "Now try y = 5/x: what does multiplying both sides by x do?", observe: "y·x = 5 → x = 5/y — the denominator clears and x is alone." },
    ],
    predict: { prompt: "To solve 5/x = 2, what's the first move?", options: [{ id: "a", text: "Multiply both sides by x" }, { id: "b", text: "Subtract x from both sides" }, { id: "c", text: "Divide both sides by 5" }], reveal: "Multiply both sides by x gives 5 = 2x, then x = 5/2." },
    sayItYourWay: { prompt: "What's the golden rule for ANY rearrangement?", phrasings: [{ id: "a", text: "Do the same to both sides, undo in reverse order", correct: true, why: "Whether x is on one side or both, the balance rules." }, { id: "b", text: "Move terms by changing their sign", correct: false, why: "'Moving' is just shorthand for doing the same to both sides." }, { id: "c", text: "Multiply everything first", correct: false, why: "Order matters: undo + and − before × and ÷, unless a denominator holds x." }], formalName: "solving harder equations by balance" },
    stretch: "Now that you can untangle x from any rearrangement, what about THREE letters at once — like making x the subject of y = (x + a)/(x − b)? The x appears twice AND in a denominator. The next unit (U14) is where this becomes routine.",
  },
};
