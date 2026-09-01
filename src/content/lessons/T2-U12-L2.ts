import type { Lesson } from "../schema";

export const T2U12L2: Lesson = {
  // @meta
  id: "T2-U12-L2",
  tier: 2,
  unit: "Manipulation",
  title: "Double Brackets, Four Areas",
  prerequisites: ["T2-U11-L3","T2-U12-L1"],
  estimatedMinutes: 12,
  hook: {
    question: "Last lesson you expanded one bracket: 3(x + 4). But what about (x + 2)(x + 3)? Two brackets means two dimensions — the area splits into FOUR rectangles, and adding them reveals a clean rule that writes itself.",
    type: "puzzle",
  },
  intuitionBlocks: [{ widget: "animated-proof", props: { proof: "expansion", a: 2, b: 3 }, narrative: "Build a rectangle that is (x + 2) tall and (x + 3) wide. Split it into four smaller rectangles: x·x, x·3, 2·x, 2·3. Add them: x² + 3x + 2x + 6 = x² + 5x + 6. Each term in the first bracket multiplies each term in the second — the area model makes the 'FOIL' order obvious." }],

  // @discovery
  formalBlocks: [
    { definition: "To expand (x + a)(x + b), multiply every term in the first bracket by every term in the second — four products. The area model shows this as four rectangles. In order: First (x·x = x²), Outer (x·b), Inner (a·x), Last (a·b). Combine the two middle terms: (x + 2)(x + 3) = x² + 3x + 2x + 6 = x² + 5x + 6.", examples: ["(x + 1)(x + 4) = x² + x + 4x + 4 = x² + 5x + 4.", "(x − 3)(x + 2) = x² + 2x − 3x − 6 = x² − x − 6."], pitfall: "Don't forget the four products or a sign. (x + 2)(x + 3) is NOT x² + 6 — the two middle terms (3x + 2x = 5x) must be included, and signs travel with each term.", altExplanations: ["GAME: a 4-zone loot grid — (x+2)(x+3) breaks into four cells: x×x, x×3, 2×x, 2×3. All four products must drop; missing the middle cells loses the cross-terms.", "FOOD: a (x+2) by (x+3) cake pan — the area is four sub-rectangles: the big square, two edge strips, and the corner. The middle strips (3x + 2x = 5x) are the part people forget."] },
  ],
  gutChecks: [{ prompt: "Expand (x + 1)(x + 2).", answer: "x² + 3x + 2 — x², 2x, x, 2 combined = x² + 3x + 2." }],
  quiz: {
    pool: [
      // @q01
      { id: "U12L2-mcq-1", type: "mcq", category: "procedural", prompt: "Expand (x + 2)(x + 3).", options: [ { id: "a", text: "x² + 5x + 6" }, { id: "b", text: "x² + 6" }, { id: "c", text: "x² + 5x + 5" }, { id: "d", text: "2x² + 6" } ], correctOptionId: "a", diagnoses: { b: "Missing the middle terms 3x + 2x.", c: "Last: 2 × 3 = 6, not 5.", d: "x·x = x², not 2x²." }, explanation: "x² + 2x + 3x + 6 = x² + 5x + 6.", hints: ["Four products.", "3x + 2x = 5x.", "x² + 2x + 3x + 6 = x² + 5x + 6."] },
      // @q02
      { id: "U12L2-mcq-2", type: "mcq", category: "conceptual", prompt: "How many products come from expanding (x + a)(x + b)?", options: [ { id: "a", text: "Two" }, { id: "b", text: "Four" }, { id: "c", text: "Three" }, { id: "d", text: "Six" } ], correctOptionId: "b", diagnoses: { a: "Each term hits each term — 2 × 2.", c: "There are two middle terms but four total products.", d: "Too many." }, explanation: "2 terms × 2 terms = 4 products (First, Outer, Inner, Last).", hints: ["2 × 2.", "Four products.", "2 terms × 2 terms = 4 products (First, Outer, Inner, Last)."] },
      // @q03
      { id: "U12L2-mcq-3", type: "mcq", category: "word", prompt: "A rectangle is (x + 5) by (x + 2). Its area expands to?", options: [ { id: "a", text: "x² + 7x" }, { id: "b", text: "x² + 10" }, { id: "c", text: "x² + 7x + 10" }, { id: "d", text: "10x + 7" } ], correctOptionId: "c", diagnoses: { b: "Missing the middle terms.", a: "Missing the constant 10.", d: "Wrong shape entirely." }, explanation: "x² + 2x + 5x + 10 = x² + 7x + 10.", hints: ["Four products.", "2x + 5x = 7x.", "x² + 2x + 5x + 10 = x² + 7x + 10."] },
      // @q04
      { id: "U12L2-mcq-4", type: "mcq", category: "procedural", prompt: "Expand (x − 2)(x + 3).", options: [ { id: "a", text: "x² + 5x − 6" }, { id: "b", text: "x² − 6" }, { id: "c", text: "x² − x + 6" }, { id: "d", text: "x² + x − 6" } ], correctOptionId: "d", diagnoses: { b: "Missing the middle terms.", c: "Signs wrong: +3x − 2x = x, and (−2)(3) = −6.", a: "5x is wrong; the terms are 3x and −2x." }, explanation: "x² + 3x − 2x − 6 = x² + x − 6.", hints: ["(−2)(x) = −2x.", "3x − 2x = x.", "x² + 3x − 2x − 6 = x² + x − 6."] },
      // @q05
      { id: "U12L2-mcq-5", type: "mcq", category: "conceptual", prompt: "What does FOIL stand for?", options: [ { id: "a", text: "First, Outer, Inner, Last" }, { id: "b", text: "Four, Outside, Inside, Length" }, { id: "c", text: "First, Only, Inner, Larger" }, { id: "d", text: "Four, Order, Index, Last" } ], correctOptionId: "a", diagnoses: { b: "FOIL orders the four products of expansion.", c: "FOIL orders the four products of expansion.", d: "FOIL orders the four products of expansion." }, explanation: "F × F, O × O, I × I, L × L — the four products of two brackets.", hints: ["F.O.I.L.", "First, Outer, Inner, Last.", "F × F, O × O, I × I, L × L — the four products of two brackets."] },
      // @q06
      { id: "U12L2-mcq-6", type: "mcq", category: "word", prompt: "A photo is (x + 4) cm by (x + 1) cm. Which is its area?", options: [ { id: "a", text: "x² + 4" }, { id: "b", text: "x² + 5x + 4" }, { id: "c", text: "x² + 5x" }, { id: "d", text: "5x + 4" } ], correctOptionId: "b", diagnoses: { a: "Missing middle terms.", c: "Missing the constant 4.", d: "Missing x²." }, explanation: "x² + x + 4x + 4 = x² + 5x + 4.", hints: ["Four products.", "x + 4x = 5x.", "x² + x + 4x + 4 = x² + 5x + 4."] },
      // @q07
      { id: "U12L2-num-1", type: "numeric-input", category: "procedural", prompt: "Expand (x + 2)(x + 3). Type the coefficient of x.", answer: 5, tolerance: 0, explanation: "3x + 2x = 5x.", hints: ["Middle terms: 3x and 2x.", "3 + 2.", "3x + 2x = 5x."] },
      // @q08
      { id: "U12L2-num-2", type: "numeric-input", category: "procedural", prompt: "Expand (x + 1)(x + 4). Type the constant term.", answer: 4, tolerance: 0, explanation: "1 × 4 = 4.", hints: ["Last × Last.", "1 × 4.", "1 × 4 = 4."] },
      // @q09
      { id: "U12L2-num-3", type: "numeric-input", category: "conceptual", prompt: "Expand (x + 5)(x + 2). Type the coefficient of x.", answer: 7, tolerance: 0, explanation: "2x + 5x = 7x.", hints: ["Middle: 2x and 5x.", "2 + 5.", "2x + 5x = 7x."] },
      // @q10
      { id: "U12L2-frac-1", type: "fraction-input", category: "conceptual", prompt: "Expand (x + 1)(x − 1). Write the constant term as a fraction (whole over 1).", numerator: -1, denominator: 1, acceptEquivalent: true, explanation: "x² + x − x − 1 = x² − 1 — middles cancel.", hints: ["Middle terms cancel.", "x − x = 0.", "x² + x − x − 1 = x² − 1 — middles cancel."] },
      // @q11
      { id: "U12L2-tf-1", type: "true-false-justify", category: "conceptual", prompt: "(x + 2)(x + 3) = x² + 5x + 6.", isTrue: true, explanation: "x² + 2x + 3x + 6 = x² + 5x + 6.", hints: ["Four products.", "3x + 2x.", "x² + 2x + 3x + 6 = x² + 5x + 6."] },
      // @q12
      { id: "U12L2-tf-2", type: "true-false-justify", category: "conceptual", prompt: "(x + 1)(x + 1) expands to x² + 2x + 2.", isTrue: false, explanation: "x² + x + x + 1 = x² + 2x + 1, not +2. The Last product is 1×1 = 1.", hints: ["Last: 1 × 1 = 1.", "Middle: x + x = 2x.", "False — x² + 2x + 1."] },
      // @q13
      { id: "U12L2-order-1", type: "order-steps", category: "word", prompt: "Order the steps to expand (x + 2)(x + 3).", sequence: ["Write the four products: x², 3x, 2x, 6", "Combine middles: 3x + 2x = 5x", "Write x² + 5x + 6"], diagnoses: { "Combine middles: 3x + 2x = 5x@0": "Write the four products first.", "Write x² + 5x + 6@0": "Combine the middle terms first." }, explanation: "Multiply all pairs, combine the x terms, write the answer.", hints: ["Four products first.", "Combine the middles.", "Write the answer."] },
      // @q14
      { id: "U12L2-drag-1", type: "drag-match", category: "conceptual", prompt: "Match each expansion to its bracket pair.", pairs: [ { source: "x² + 5x + 6", target: "(x + 2)(x + 3)" }, { source: "x² + 3x + 2", target: "(x + 1)(x + 2)" }, { source: "x² − 1", target: "(x − 1)(x + 1)" } ], diagnoses: { "x² + 5x + 6->(x + 1)(x + 2)": "Middle 5 needs 2 + 3.", "x² − 1->(x + 2)(x + 3)": "That's the difference of squares.", "x² + 3x + 2->(x − 1)(x + 1)": "Middle 3 needs 1 + 2." }, explanation: "Match middle and constant: 5&6→2&3, 3&2→1&2, 0&−1→1&−1.", hints: ["Check middle coefficient.", "Check constant.", "Match middle and constant: 5&6→2&3, 3&2→1&2, 0&−1→1&−1."] },
      // @q15
      { id: "U12L2-graph-1", type: "graph-interact", category: "word", prompt: "Set the slider to the constant term of (x + 2)(x + 5) (key: value).", challenge: "Adjust the values below so they match the condition described in the prompt.", validate: { value: 10 }, tolerance: 0, explanation: "2 × 5 = 10.", hints: ["Last × Last.", "2 × 5.", "2 × 5 = 10."] }
    ],
    selection: { procedural: 2, conceptual: 2, word: 1 },
    passThreshold: 0.8,
  },
  commonMistakes: [
    { wrongPattern: "misses the middle terms", diagnosis: "(x + 2)(x + 3) = x² + 5x + 6, not x² + 6 — the 3x and 2x must be added in.", hint: "Draw the four rectangles — all four must be included." },
    { wrongPattern: "combines unlike powers", diagnosis: "x² and x are different kinds — keep them separate in the answer x² + 5x + 6.", hint: "Collect x² terms, then x terms, then constants." },
    { wrongPattern: "loses a sign", diagnosis: "(x − 2)(x + 3) = x² + 3x − 2x − 6 = x² + x − 6 — the −2 multiplies both x and 3.", hint: "Multiply signs too: (−2)(x) = −2x and (−2)(3) = −6." },
  ],
  recallTags: ["expanding", "quadratics", "area-model", "foil"],
  discovery: {
    challenges: [
      { instruction: "Build an (x + 2) by (x + 3) rectangle and split it into four small rectangles.", observe: "The areas are x², 3x, 2x, and 6 — four products from four corners." },
      { instruction: "Now add the two middle rectangles (3x and 2x) together.", observe: "3x + 2x = 5x — the two middle terms combine into one." },
    ],
    predict: { prompt: "What is the x² + ?x + ? expansion of (x + 2)(x + 3)? Type the coefficient of x.", numeric: { answer: 5, tolerance: 0 }, reveal: "5x — from 3x + 2x combining. The full expansion is x² + 5x + 6." },
    sayItYourWay: { prompt: "What's the reliable way to expand two brackets?", phrasings: [{ id: "a", text: "Multiply each term in the first by each term in the second", correct: true, why: "Four products: First, Outer, Inner, Last — every corner of the rectangle." }, { id: "b", text: "Multiply only the first and last terms", correct: false, why: "That misses the two middle terms — the rectangle has four corners, not two." }, { id: "c", text: "Add the brackets together", correct: false, why: "Two brackets mean multiplication, not addition." }], formalName: "expanding double brackets" },
    stretch: "If (x + 2)(x + 3) = x² + 5x + 6, can you predict (x + 5)(x + 4)? What pattern do the coefficients follow?",
  },
};
