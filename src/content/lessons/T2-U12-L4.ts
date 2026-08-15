import type { Lesson } from "../schema";

export const T2U12L4: Lesson = {
  // @meta
  id: "T2-U12-L4",
  tier: 2,
  unit: "Manipulation",
  title: "Cracking x²+bx+c",
  prerequisites: ["T2-U11-L3","T2-U12-L2","T2-U12-L3"],
  estimatedMinutes: 12,
  hook: {
    question: "You expanded (x + 2)(x + 3) into x² + 5x + 6. Now reverse it: given x² + 5x + 6, find the two brackets. The 5 and 6 hold a clue — 2 and 3 add to 5 AND multiply to 6. Find the pair, and the brackets write themselves.",
    type: "puzzle",
  },
  intuitionBlocks: [{ widget: "tree-diagram-builder", narrative: "Think of the constant 6 as a tree of factor pairs: 1×6, 2×3. Which pair ADDS to the x-coefficient 5? 2 + 3 = 5. So x² + 5x + 6 = (x + 2)(x + 3). The tree makes the pair-hunt visual: split the constant, check the sum." }],

  // @discovery
  formalBlocks: [
    { definition: "To factorize x² + bx + c, find two numbers that MULTIPLY to c and ADD to b. Then x² + bx + c = (x + p)(x + q) where p + q = b and p × q = c. This is the reverse of expanding double brackets: the middle coefficient is p + q, the constant is p × q.", examples: ["x² + 7x + 12: pairs of 12 → 3 and 4 add to 7, so (x + 3)(x + 4).", "x² − 5x + 6: pairs of 6 → −2 and −3 multiply to 6 and add to −5, so (x − 2)(x − 3)."], pitfall: "Both conditions must hold: numbers must multiply to c AND add to b. For x² + 7x + 12, 2 and 6 multiply to 12 but add to 8 — the right pair is 3 and 4. With negative b, both numbers are usually negative.", altExplanations: ["GAME: pairing item stats — x²+7x+12 asks for TWO numbers that multiply to 12 and add to 7: the 3 and 4 combo unlocks (x+3)(x+4). 2 and 6 multiply right but sum wrong.", "MONEY: two savings numbers — their product is the constant (12) and their sum is the middle (7). Find the pair that satisfies both conditions; one condition alone isn't enough."] },
  ],
  gutChecks: [{ prompt: "Factorize x² + 5x + 6.", answer: "(x + 2)(x + 3) — 2 × 3 = 6 and 2 + 3 = 5." }],
  quiz: {
    pool: [
      // @q01
      { id: "U12L4-mcq-1", type: "mcq", category: "procedural", prompt: "Factorize x² + 5x + 6.", options: [ { id: "a", text: "(x + 2)(x + 3)" }, { id: "b", text: "(x + 1)(x + 6)" }, { id: "c", text: "(x + 2)(x + 4)" }, { id: "d", text: "(x + 5)(x + 6)" } ], correctOptionId: "a", diagnoses: { b: "1 + 6 = 7, not 5.", c: "2 + 4 = 6, not 5.", d: "5 + 6 is way off the pair-hunt." }, explanation: "Pair of 6 adding to 5: 2 and 3 → (x + 2)(x + 3).", hints: ["Pairs of 6: 1×6, 2×3.", "Which adds to 5?", "2 and 3."] },
      // @q02
      { id: "U12L4-mcq-2", type: "mcq", category: "conceptual", prompt: "In x² + bx + c, what must the two numbers do?", options: [ { id: "a", text: "Multiply to c and add to b" }, { id: "b", text: "Multiply to b and add to c" }, { id: "c", text: "Both multiply to b" }, { id: "d", text: "Both add to c" } ], correctOptionId: "a", diagnoses: { b: "Reversed — product is c, sum is b.", c: "Only one condition used.", d: "Only one condition used." }, explanation: "The brackets' constants multiply to c and add to the x-coefficient b.", hints: ["Product = constant c.", "Sum = middle b.", "Multiply to c, add to b."] },
      // @q03
      { id: "U12L4-mcq-3", type: "mcq", category: "word", prompt: "A rectangle's area is x² + 7x + 12. Factorize it to find its sides.", options: [ { id: "a", text: "(x + 3)(x + 4)" }, { id: "b", text: "(x + 2)(x + 6)" }, { id: "c", text: "(x + 1)(x + 12)" }, { id: "d", text: "(x + 7)(x + 12)" } ], correctOptionId: "a", diagnoses: { b: "2 + 6 = 8, not 7.", c: "1 + 12 = 13, not 7.", d: "7 + 12 isn't a pair product." }, explanation: "Pair of 12 adding to 7: 3 and 4 → (x + 3)(x + 4).", hints: ["Pairs of 12.", "Sum to 7.", "3 and 4."] },
      // @q04
      { id: "U12L4-mcq-4", type: "mcq", category: "procedural", prompt: "Factorize x² − 5x + 6.", options: [ { id: "a", text: "(x − 2)(x − 3)" }, { id: "b", text: "(x + 2)(x − 3)" }, { id: "c", text: "(x − 2)(x + 3)" }, { id: "d", text: "(x + 2)(x + 3)" } ], correctOptionId: "a", diagnoses: { b: "2 − 3 = −1, and 2 × −3 = −6 (wrong product sign).", c: "−2 + 3 = 1, not −5.", d: "Product +6 but sum +5, not −5." }, explanation: "Need product +6 and sum −5: both −2 and −3.", hints: ["Sum −5, product +6 → both negative.", "−2 − 3 = −5.", "(x − 2)(x − 3)."] },
      // @q05
      { id: "U12L4-mcq-5", type: "mcq", category: "conceptual", prompt: "How can you check a factorization is correct?", options: [ { id: "a", text: "Expand the brackets back" }, { id: "b", text: "Check the numbers are small" }, { id: "c", text: "Guess the pair again" }, { id: "d", text: "Make sure there are two x's" } ], correctOptionId: "a", diagnoses: { b: "Size is irrelevant — correctness comes from reversing.", c: "Guessing isn't verifying.", d: "The x's come from the structure, not the check." }, explanation: "Expand the answer: (x + 2)(x + 3) = x² + 5x + 6 ✓.", hints: ["What's the reverse of factoring?", "Expanding.", "Expand back."] },
      // @q06
      { id: "U12L4-mcq-6", type: "mcq", category: "word", prompt: "A photo's area is x² + 8x + 15 cm². Find its factored sides.", options: [ { id: "a", text: "(x + 3)(x + 5)" }, { id: "b", text: "(x + 1)(x + 15)" }, { id: "c", text: "(x + 2)(x + 7)" }, { id: "d", text: "(x + 4)(x + 11)" } ], correctOptionId: "a", diagnoses: { b: "1 + 15 = 16, not 8.", c: "2 + 7 = 9, not 8.", d: "4 + 11 = 15, not 8." }, explanation: "Pair of 15 adding to 8: 3 and 5 → (x + 3)(x + 5).", hints: ["Pairs of 15.", "Sum to 8.", "3 and 5."] },
      // @q07
      { id: "U12L4-num-1", type: "numeric-input", category: "procedural", prompt: "Factorize x² + 7x + 12. Type the SMALLER of the two bracket numbers.", answer: 3, tolerance: 0, explanation: "Pairs of 12: 3 and 4 add to 7 → (x + 3)(x + 4).", hints: ["Pairs of 12.", "Sum to 7.", "3 and 4 — smaller is 3."] },
      // @q08
      { id: "U12L4-num-2", type: "numeric-input", category: "procedural", prompt: "Factorize x² − 7x + 10. Type the LESS NEGATIVE constant (e.g. type −2 if the pair is −2, −5).", answer: -2, tolerance: 0, explanation: "Pairs of 10: −2 and −5 multiply to 10 and add to −7.", hints: ["Product +10, sum −7.", "Both negative.", "−2 and −5."] },
      // @q09
      { id: "U12L4-num-3", type: "numeric-input", category: "conceptual", prompt: "Factorize x² + 4x + 4. Type the repeated bracket number.", answer: 2, tolerance: 0, explanation: "Pairs of 4: 2 and 2 add to 4 → (x + 2)(x + 2) = (x + 2)².", hints: ["Pairs of 4.", "Both add to 4.", "2 and 2."] },
      // @q10
      { id: "U12L4-frac-1", type: "fraction-input", category: "conceptual", prompt: "Factorize x² + x + 1/4. Write the fraction inside the bracket (repeated).", numerator: 1, denominator: 2, acceptEquivalent: true, explanation: "Pairs of 1/4: 1/2 and 1/2 add to 1 → (x + 1/2)².", hints: ["Square root of 1/4.", "1/2.", "1/2."] },
      // @q11
      { id: "U12L4-tf-1", type: "true-false-justify", category: "conceptual", prompt: "x² − 4 factors into (x − 2)(x + 2).", isTrue: true, explanation: "The pair 2 and −2 multiply to −4 and add to 0 → difference of squares.", hints: ["Pairs of −4: 2 and −2.", "They add to 0.", "True — (x − 2)(x + 2)."] },
      // @q12
      { id: "U12L4-tf-2", type: "true-false-justify", category: "conceptual", prompt: "x² + 7x + 12 = (x + 2)(x + 6).", isTrue: false, explanation: "2 × 6 = 12 but 2 + 6 = 8 ≠ 7 — the pair must add to the middle coefficient.", hints: ["2 + 6 = 8.", "Need 7.", "False — (x + 3)(x + 4)."] },
      // @q13
      { id: "U12L4-order-1", type: "order-steps", category: "word", prompt: "Order the steps to factorize x² + 7x + 12.", sequence: ["List factor pairs of 12: 1×12, 2×6, 3×4", "Find the pair summing to 7: 3 + 4", "Write (x + 3)(x + 4)"], diagnoses: { "Find the pair summing to 7: 3 + 4@0": "List the pairs first.", "Write (x + 3)(x + 4)@0": "Find the pair first." }, explanation: "List pairs, check the sum, write the brackets.", hints: ["List the pairs.", "Check the sum.", "Write the brackets."] },
      // @q14
      { id: "U12L4-drag-1", type: "drag-match", category: "conceptual", prompt: "Match each quadratic to its factorization.", pairs: [ { source: "x² + 5x + 6", target: "(x + 2)(x + 3)" }, { source: "x² + 7x + 12", target: "(x + 3)(x + 4)" }, { source: "x² − 5x + 6", target: "(x − 2)(x − 3)" } ], diagnoses: { "x² + 5x + 6->(x + 3)(x + 4)": "Middle 5 → 2 + 3.", "x² − 5x + 6->(x + 2)(x + 3)": "Negative middle, positive 6 → both negative.", "x² + 7x + 12->(x + 2)(x + 3)": "Middle 7 → 3 + 4." }, explanation: "Pairs: 2+3=5, 3+4=7, −2−3=−5.", hints: ["Match middle sum.", "Match constants.", "Pair them up."] },
      // @q15
      { id: "U12L4-graph-1", type: "graph-interact", category: "word", prompt: "For x² + 8x + 12, set the slider to the SMALLER of the two bracket numbers (key: value).", challenge: "Set the slider to 2.", validate: { value: 2 }, tolerance: 0, explanation: "Pairs of 12: 2 and 6 add to 8 → (x + 2)(x + 6).", hints: ["Pairs of 12.", "2 + 6 = 8.", "Smaller is 2."] }
    ],
    selection: { procedural: 2, conceptual: 2, word: 1 },
    passThreshold: 0.8,
  },
  commonMistakes: [
    { wrongPattern: "picks a pair that multiplies but doesn't add", diagnosis: "x² + 7x + 12: 2 and 6 multiply to 12 but add to 8 — the right pair is 3 and 4.", hint: "Check BOTH conditions: multiply to c AND add to b." },
    { wrongPattern: "wrong signs when b is negative", diagnosis: "x² − 5x + 6 needs −2 and −3: they multiply to +6 and add to −5.", hint: "Negative sum with positive product → both numbers negative." },
    { wrongPattern: "forgets to check by expanding", diagnosis: "Always expand the answer back: (x + 3)(x + 4) = x² + 7x + 12 ✓.", hint: "Expand to verify your factorization." },
  ],
  recallTags: ["factorize", "quadratics", "pair-hunting"],
  discovery: {
    challenges: [
      { instruction: "List the factor pairs of 6: 1×6, 2×3, 3×2, 6×1.", observe: "Which pair adds to 5? 2 + 3 = 5 — that's the pair for x² + 5x + 6." },
      { instruction: "Now list the pairs of 12 for x² + 7x + 12.", observe: "3 and 4 multiply to 12 and add to 7 → (x + 3)(x + 4)." },
    ],
    predict: { prompt: "For x² + 5x + 6, which pair multiplies to 6 and adds to 5?", options: [{ id: "a", text: "2 and 3" }, { id: "b", text: "1 and 6" }, { id: "c", text: "2 and 4" }], reveal: "2 and 3 — 2 × 3 = 6 and 2 + 3 = 5, so (x + 2)(x + 3)." },
    sayItYourWay: { prompt: "How do you find the numbers for x² + bx + c?", phrasings: [{ id: "a", text: "Find the pair that multiplies to c and adds to b", correct: true, why: "The constant c is the product; the middle b is the sum." }, { id: "b", text: "Find the pair that adds to c and multiplies to b", correct: false, why: "It's reversed: product is c, sum is b." }, { id: "c", text: "Just use the numbers you can see", correct: false, why: "The numbers are encoded — you must hunt the pair." }], formalName: "factorizing x² + bx + c" },
    stretch: "What about x² − 4? There's no x term (b = 0). Can you still pair-hunt? This special 'difference of squares' case unravels next.",
  },
};
