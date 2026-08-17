import type { Lesson } from "../schema";

export const T2U12L1: Lesson = {
  // @meta
  id: "T2-U12-L1",
  tier: 2,
  unit: "Manipulation",
  title: "The Area Model of Brackets",
  prerequisites: ["T2-U11-L3"],
  estimatedMinutes: 12,
  hook: {
    question: "3(x + 4) looks like a mystery code, but it's really a rectangle: 3 rows, each split into an x-part and a 4-part. Draw the rectangle and the 'code' writes itself — no memorized rules needed.",
    type: "puzzle",
  },
  intuitionBlocks: [{ widget: "geometry-playground", narrative: "Build a rectangle of height 3 and width x + 4. Split it: the left strip is 3 × x, the right strip is 3 × 4. Total area = 3x + 12 — which is exactly what expanding 3(x + 4) means. The bracket is just a rectangle's width." }],

  // @discovery
  formalBlocks: [
    { definition: "Expanding a bracket means multiplying everything inside by the term outside: a(b + c) = ab + ac. The area model shows why: a rectangle of height a and width b + c splits into two strips, a × b and a × c. This is the distributive law.", examples: ["3(x + 4) = 3x + 12 — the 3 multiplies both x and 4.", "2(3x + 5) = 6x + 10 — 2 × 3x = 6x and 2 × 5 = 10."], pitfall: "The outside term must multiply EVERY term inside, not just the first. 3(x + 4) = 3x + 12, never 3x + 4.", altExplanations: ["FOOD: a tray 3 rows tall and (x+4) columns wide — its area splits into a 3×x strip plus a 3×4 strip. The outside multiplier 3 touches EVERY column, not just the first.", "GAME: buying 3 bundles where each bundle has x normal cards plus 4 rare cards — total cards = 3x + 12. The 3 multiplies both the normal AND the rare stack."] },
  ],
  gutChecks: [{ prompt: "Expand 4(x + 2).", answer: "4x + 8 — the 4 multiplies both x and 2." }],
  quiz: {
    pool: [
      // @q01
      { id: "U12L1-mcq-1", type: "mcq", category: "procedural", prompt: "Expand 3(x + 4).", options: [ { id: "a", text: "3x + 12" }, { id: "b", text: "3x + 4" }, { id: "c", text: "x + 12" }, { id: "d", text: "3x + 7" } ], correctOptionId: "a", diagnoses: { b: "The 3 must multiply the 4 too.", c: "The 3 must multiply the x too.", d: "7 is 3 + 4 — wrong operation." }, explanation: "3 × x = 3x and 3 × 4 = 12 → 3x + 12.", hints: ["Multiply 3 by x.", "Multiply 3 by 4.", "3 × x = 3x and 3 × 4 = 12 → 3x + 12."] },
      // @q02
      { id: "U12L1-mcq-2", type: "mcq", category: "conceptual", prompt: "Why does 3(x + 4) = 3x + 12?", options: [ { id: "a", text: "3 and 4 add to 7" }, { id: "b", text: "A 3-by-(x+4) rectangle splits into 3x and 12" }, { id: "c", text: "The x disappears" }, { id: "d", text: "Brackets mean subtract" } ], correctOptionId: "b", diagnoses: { a: "Addition of 3+4 isn't what brackets do here.", c: "x stays — it's multiplied by 3.", d: "Brackets mean multiply the outside by the inside." }, explanation: "The area model: height 3, width x + 4 → strips 3x and 12.", hints: ["Think of a rectangle.", "Height 3, width x + 4.", "The area model: height 3, width x + 4 → strips 3x and 12."] },
      // @q03
      { id: "U12L1-mcq-3", type: "mcq", category: "word", prompt: "A garden is 5 m wide and (x + 3) m long. Which gives its area?", options: [ { id: "a", text: "x + 15" }, { id: "b", text: "5x + 3" }, { id: "c", text: "5x + 15" }, { id: "d", text: "5x + 8" } ], correctOptionId: "c", diagnoses: { b: "The 5 must multiply the 3 too.", a: "The 5 must multiply the x too.", d: "8 is 5 + 3 — wrong operation." }, explanation: "Area = 5 × (x + 3) = 5x + 15.", hints: ["Area = width × length.", "5 × (x + 3).", "Area = 5 × (x + 3) = 5x + 15."] },
      // @q04
      { id: "U12L1-mcq-4", type: "mcq", category: "procedural", prompt: "Expand 2(3x + 5).", options: [ { id: "a", text: "3x + 10" }, { id: "b", text: "5x + 7" }, { id: "c", text: "6x + 5" }, { id: "d", text: "6x + 10" } ], correctOptionId: "d", diagnoses: { b: "5x + 7 adds coefficients — wrong.", c: "The 2 must multiply the 5 too.", a: "The 2 must multiply the 3x too." }, explanation: "2 × 3x = 6x and 2 × 5 = 10 → 6x + 10.", hints: ["2 × 3x.", "2 × 5.", "2 × 3x = 6x and 2 × 5 = 10 → 6x + 10."] },
      // @q05
      { id: "U12L1-mcq-5", type: "mcq", category: "conceptual", prompt: "What is the distributive law?", options: [ { id: "a", text: "a(b + c) = ab + ac" }, { id: "b", text: "a(b + c) = ab + c" }, { id: "c", text: "a(b + c) = a + b + c" }, { id: "d", text: "a(b + c) = ab + bc" } ], correctOptionId: "a", diagnoses: { b: "The a must hit the c too.", c: "That's just removing brackets wrongly.", d: "bc would need b outside — only a is outside." }, explanation: "The outside term multiplies every inside term: a(b + c) = ab + ac.", hints: ["a multiplies b.", "a multiplies c.", "The outside term multiplies every inside term: a(b + c) = ab + ac."] },
      // @q06
      { id: "U12L1-mcq-6", type: "mcq", category: "word", prompt: "A wall is 4 m tall and (2x + 1) m wide. Which gives its area?", options: [ { id: "a", text: "8x + 1" }, { id: "b", text: "8x + 4" }, { id: "c", text: "2x + 4" }, { id: "d", text: "6x + 5" } ], correctOptionId: "b", diagnoses: { a: "The 4 must multiply the 1 too.", c: "The 4 must multiply the 2x too.", d: "6x + 5 adds — wrong." }, explanation: "4 × (2x + 1) = 8x + 4.", hints: ["4 × 2x.", "4 × 1.", "4 × (2x + 1) = 8x + 4."] },
      // @q07
      { id: "U12L1-num-1", type: "numeric-input", category: "procedural", prompt: "Expand 5(x + 2). Type the coefficient of x.", answer: 5, tolerance: 0, explanation: "5 × x = 5x, so the coefficient is 5.", hints: ["5 × x.", "5x.", "5 × x = 5x, so the coefficient is 5."] },
      // @q08
      { id: "U12L1-num-2", type: "numeric-input", category: "procedural", prompt: "Expand 4(x + 3). Type the constant term.", answer: 12, tolerance: 0, explanation: "4 × 3 = 12, the constant.", hints: ["4 × 3.", "12.", "4 × 3 = 12, the constant."] },
      // @q09
      { id: "U12L1-num-3", type: "numeric-input", category: "conceptual", prompt: "Expand 3(2x + 4). Type the coefficient of x.", answer: 6, tolerance: 0, explanation: "3 × 2x = 6x, so the coefficient is 6.", hints: ["3 × 2x.", "6x.", "3 × 2x = 6x, so the coefficient is 6."] },
      // @q10
      { id: "U12L1-frac-1", type: "fraction-input", category: "conceptual", prompt: "Expand ½(2x + 4). Write the constant term as a fraction.", numerator: 2, denominator: 1, acceptEquivalent: true, explanation: "½ × 2x = x and ½ × 4 = 2 → x + 2.", hints: ["½ × 2x = x.", "½ × 4 = 2.", "½ × 2x = x and ½ × 4 = 2 → x + 2."] },
      // @q11
      { id: "U12L1-tf-1", type: "true-false-justify", category: "conceptual", prompt: "3(x + 4) = 3x + 12.", isTrue: true, explanation: "The 3 multiplies both x and 4.", hints: ["3 × x.", "3 × 4.", "The 3 multiplies both x and 4."] },
      // @q12
      { id: "U12L1-tf-2", type: "true-false-justify", category: "conceptual", prompt: "2(x + 3) = 2x + 3.", isTrue: false, explanation: "The 2 must multiply the 3 too: 2x + 6.", hints: ["2 × 3.", "2x + 6.", "The 2 must multiply the 3 too: 2x + 6."] },
      // @q13
      { id: "U12L1-order-1", type: "order-steps", category: "word", prompt: "Order the steps to expand 3(x + 4).", sequence: ["Write 3(x + 4)", "Multiply 3 × x = 3x", "Multiply 3 × 4 = 12", "Add: 3x + 12"], diagnoses: { "Multiply 3 × x = 3x@0": "Write the bracket first.", "Add: 3x + 12@0": "Multiply both terms first.", "Multiply 3 × 4 = 12@1": "Multiply the x-term first." }, explanation: "Multiply the outside by each inside term, then add.", hints: ["Write the bracket.", "Multiply each term.", "Add the results."] },
      // @q14
      { id: "U12L1-drag-1", type: "drag-match", category: "conceptual", prompt: "Match each bracket to its expansion.", pairs: [ { source: "2(x + 5)", target: "2x + 10" }, { source: "3(x + 1)", target: "3x + 3" }, { source: "4(x + 2)", target: "4x + 8" } ], diagnoses: { "2(x + 5)->3x + 3": "2 × 5 = 10.", "3(x + 1)->4x + 8": "3 × 1 = 3.", "4(x + 2)->2x + 10": "4 × 2 = 8." }, explanation: "Multiply the outside by each inside term.", hints: ["Multiply the outside by x.", "Then by the number.", "Multiply the outside by each inside term."] },
      // @q15
      { id: "U12L1-graph-1", type: "graph-interact", category: "word", prompt: "Set the slider to the constant term of 3(x + 4) (key: value).", challenge: "Adjust the values below so they match the condition described in the prompt.", validate: { value: 12 }, tolerance: 0, explanation: "3 × 4 = 12.", hints: ["3 × 4.", "12.", "Set slider to 12."] }
    ],
    selection: { procedural: 2, conceptual: 2, word: 1 },
    passThreshold: 0.8,
  },
  commonMistakes: [
    { wrongPattern: "multiplies only the first term", diagnosis: "3(x + 4) = 3x + 12, not 3x + 4 — the 3 hits both terms.", hint: "Draw the rectangle: two strips, both multiplied." },
    { wrongPattern: "forgets the sign", diagnosis: "2(x − 3) = 2x − 6 — the minus travels with the 3.", hint: "Multiply the sign too: 2 × (−3) = −6." },
    { wrongPattern: "adds instead of multiplying", diagnosis: "3(x + 4) is 3 × (x + 4), not 3 + x + 4.", hint: "The bracket means multiply the whole thing." },
  ],
  recallTags: ["expanding", "distributive", "brackets"],
  discovery: {
    challenges: [
      { instruction: "Build a 3 by (x + 4) rectangle and split it at the x/4 boundary.", observe: "Two strips: 3x and 12 — total 3x + 12." },
      { instruction: "Now build 2(3x + 5) the same way.", observe: "Strips of 6x and 10 — total 6x + 10." },
    ],
    predict: { prompt: "What does 3(x + 4) expand to?", options: [{ id: "a", text: "3x + 12" }, { id: "b", text: "3x + 4" }, { id: "c", text: "x + 12" }], reveal: "3x + 12 — the 3 multiplies both the x-strip and the 4-strip." },
    sayItYourWay: { prompt: "What does expanding a bracket do?", phrasings: [{ id: "a", text: "Multiplies the outside term by every inside term", correct: true, why: "3(x + 4) = 3x + 12 — each strip gets multiplied." }, { id: "b", text: "Removes the numbers", correct: false, why: "The numbers stay — they just get distributed." }, { id: "c", text: "Adds the outside to the inside", correct: false, why: "It's multiplication, not addition." }], formalName: "the distributive law (expanding)" },
    stretch: "If 3(x + 4) is a 3-by-(x+4) rectangle, what shape is (x + 2)(x + 3)? Two brackets means two dimensions — the next lesson.",
  },
};
