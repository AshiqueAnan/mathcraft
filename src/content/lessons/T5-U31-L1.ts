import type { Lesson } from "../schema";

export const T5U31L1: Lesson = {
  // @meta
  id: "T5-U31-L1",
  tier: 5,
  unit: "Quadratics in depth",
  title: "Completing the Square, Literally",
  prerequisites: ["T2-U12-L4", "T5-U30-L3"],
  estimatedMinutes: 15,
  hook: { question: "x² + 6x is an L-shaped piece of area — a square of side x with a 6-wide strip on the right. It's NOT a square yet. But cut the strip in half, move one piece to the bottom, and you've made a square of side x + 3 — missing only a 3×3 corner. Adding that corner 'completes the square'. That's not a metaphor: it's literally cutting and gluing area.", type: "puzzle" },
  intuitionBlocks: [{ widget: "animated-proof", narrative: "Step through the geometric completion: x² + 6x is a square plus a strip. Split the strip in two, rotate one half to the bottom, and the L becomes a square of side x + 3 with one 3×3 corner missing. Add the corner (that's the +9) and the whole square is (x+3)². Watch each move, then do it for x² + 8x yourself." }],

  // @discovery
  formalBlocks: [{ definition: "COMPLETING THE SQUARE rebuilds $x^2 + bx$ as a square: split the bx strip in half, rearrange into an L, and the missing corner is $(b/2)^2$. So $x^2 + bx = (x + b/2)^2 - (b/2)^2$. Adding and subtracting the same corner keeps the expression EQUAL — we're only reshaping it.", examples: ["$x^2 + 6x$: half of 6 is 3, corner is 9 → $(x+3)^2 - 9$.", "$x^2 - 8x$: half of -8 is -4, corner is 16 → $(x-4)^2 - 16$."], pitfall: "The corner you ADD must also be SUBTRACTED afterwards, or you've changed the expression. $(x+3)^2$ alone is 9 bigger than $x^2 + 6x$ — write $(x+3)^2 - 9$ to stay equal.", altExplanations: ["MONEY: x² + 6x is a land plot — a square of side x plus a 6-wide strip. Cut the strip in half, slide one half to the bottom, and the L becomes a square of side x+3 missing a 3×3 corner. Adding that 9 and subtracting it right back (keeping value equal) completes the square without changing the lot's worth.", "GAME: a crafting grid — x² + 6x is a square tile plus a 6-unit strip. Reorganize the strip halves into an L, and the pattern is a perfect square missing one 3×3 corner block. Craft the corner (9), then stow 9 to your inventory: (x+3)² − 9, value unchanged."] }],
  gutChecks: [{ prompt: "Why is x² + 6x = (x+3)² - 9 and not just (x+3)²?", answer: "Adding the 3×3 corner (9) grows the area; subtracting 9 keeps the value equal." }],
  quiz: {
    pool: [
      // @q01
      { id: "U31L1-mcq-1", type: "mcq", category: "procedural", prompt: "Complete the square: x² + 6x = (x + _)² - _", options: [ { id: "a", text: "3, 9" }, { id: "b", text: "6, 36" }, { id: "c", text: "3, 6" }, { id: "d", text: "6, 12" } ], correctOptionId: "a", diagnoses: { b: "6 is the full coefficient, not half — the corner is (6/2)² = 9.", c: "The corner is 3² = 9, not 6.", d: "Half is 3, and its square is 9." }, explanation: "Half of 6 is 3; 3² = 9 → (x+3)² - 9.", hints: ["6 ÷ 2.", "3².", "3, 9."] },
      // @q02
      { id: "U31L1-mcq-2", type: "mcq", category: "conceptual", prompt: "Why must we subtract the corner we add?", options: [ { id: "a", text: "To make the square smaller" }, { id: "b", text: "To keep the expression equal to the original" }, { id: "c", text: "To change the coefficient" }, { id: "d", text: "We don't — adding is enough" } ], correctOptionId: "b", diagnoses: { a: "We reshape, not shrink.", c: "The coefficient x stays 1.", d: "(x+3)² alone is 9 too big." }, explanation: "Adding 9 and subtracting 9 keeps the value identical.", hints: ["Equal value.", "Add AND subtract.", "Keeps it equal."] },
      // @q03
      { id: "U31L1-mcq-3", type: "mcq", category: "word", prompt: "A photo is x cm wide and (x + 6) cm tall. The area is x² + 6x. To frame it as a square of side x + 3, you add a corner of area…", options: [ { id: "a", text: "36" }, { id: "b", text: "6" }, { id: "c", text: "9" }, { id: "d", text: "3" } ], correctOptionId: "c", diagnoses: { b: "6 is the strip width, not the corner area.", a: "36 is 6² — that's the strip squared, not half.", d: "3 is the corner's side, not its area." }, explanation: "The missing corner is 3×3 = 9.", hints: ["Half of 6.", "3 × 3.", "9."] },
      // @q04
      { id: "U31L1-mcq-4", type: "mcq", category: "procedural", prompt: "Complete the square: x² - 10x = (x - _)² - _", options: [ { id: "a", text: "-5, 25" }, { id: "b", text: "10, 100" }, { id: "c", text: "5, 10" }, { id: "d", text: "5, 25" } ], correctOptionId: "d", diagnoses: { b: "10 is the full coefficient — take half.", c: "The corner is 5², not 10.", a: "Inside is (x-5)², the '-5' isn't written separately." }, explanation: "Half of -10 is -5; (-5)² = 25 → (x-5)² - 25.", hints: ["-10 ÷ 2.", "(-5)².", "5, 25."] },
      // @q05
      { id: "U31L1-mcq-5", type: "mcq", category: "conceptual", prompt: "x² + bx always completes to (x + b/2)² minus…", options: [ { id: "a", text: "(b/2)²" }, { id: "b", text: "b²" }, { id: "c", text: "b" }, { id: "d", text: "2b" } ], correctOptionId: "a", diagnoses: { b: "b² would be the full square, not the corner.", c: "b is the strip, not the corner area.", d: "2b is the perimeter idea — no." }, explanation: "The missing corner is half the coefficient, squared: (b/2)².", hints: ["Half of b.", "Squared.", "(b/2)²."] },
      // @q06
      { id: "U31L1-mcq-6", type: "mcq", category: "word", prompt: "A plot is x m by (x + 12) m (area x² + 12x). Completing the square gives a square of side (x + 6) — what corner area is added and subtracted?", options: [ { id: "a", text: "12" }, { id: "b", text: "36" }, { id: "c", text: "144" }, { id: "d", text: "6" } ], correctOptionId: "b", diagnoses: { a: "12 is the strip width.", c: "144 is 12² — the strip squared, not half.", d: "6 is the side, not the area." }, explanation: "(12/2)² = 6² = 36.", hints: ["12 ÷ 2.", "6².", "36."] },
      // @q07
      { id: "U31L1-num-1", type: "numeric-input", category: "procedural", prompt: "Complete the square for x² + 4x: what number do you add and subtract?", answer: 4, tolerance: 0, explanation: "(4/2)² = 2² = 4 → (x+2)² - 4.", hints: ["4 ÷ 2.", "2².", "4."] },
      // @q08
      { id: "U31L1-num-2", type: "numeric-input", category: "procedural", prompt: "Complete the square for x² + 2x: inside the bracket is (x + _). What is the blank?", answer: 1, tolerance: 0, explanation: "Half of 2 is 1 → (x+1)² - 1.", hints: ["2 ÷ 2.", "1.", "1."] },
      // @q09
      { id: "U31L1-num-3", type: "numeric-input", category: "conceptual", prompt: "x² + 6x = (x+3)² - N. What is N?", answer: 9, tolerance: 0, explanation: "3² = 9 — the corner you add and subtract.", hints: ["3².", "9.", "9."] },
      // @q10
      { id: "U31L1-frac-1", type: "fraction-input", category: "conceptual", prompt: "Complete the square for x² + x: the corner added is (1/2)² = …", numerator: 1, denominator: 4, acceptEquivalent: true, explanation: "(1/2)² = 1/4 → (x + 1/2)² - 1/4.", hints: ["1/2 squared.", "1/4.", "1/4."] },
      // @q11
      { id: "U31L1-tf-1", type: "true-false-justify", category: "conceptual", prompt: "x² + 8x = (x+4)² - 16 is correct.", isTrue: true, explanation: "Half of 8 is 4; 4² = 16 → (x+4)² - 16.", hints: ["(8/2)².", "16.", "True."] },
      // @q12
      { id: "U31L1-tf-2", type: "true-false-justify", category: "conceptual", prompt: "x² + 6x equals (x+3)² with no adjustment.", isTrue: false, explanation: "(x+3)² = x² + 6x + 9 — it's 9 too big; you must subtract 9.", hints: ["(x+3)² = x²+6x+9.", "Subtract 9.", "False."] },
      // @q13
      { id: "U31L1-order-1", type: "order-steps", category: "word", prompt: "Order the steps to complete the square for x² + 6x.", sequence: ["Take half of 6 (that's 3)", "Square it (9)", "Write (x+3)² - 9"], diagnoses: { "Take half of 6 (that's 3)@1": "Halve first.", "Square it (9)@0": "Then square.", "Write (x+3)² - 9@0": "Write last." }, explanation: "Halve, square, write in vertex form.", hints: ["6 ÷ 2.", "3².", "(x+3)² - 9."] },
      // @q14
      { id: "U31L1-drag-1", type: "drag-match", category: "conceptual", prompt: "Match each quadratic to its completed-square form.", pairs: [ { source: "x² + 6x", target: "(x+3)² - 9" }, { source: "x² - 4x", target: "(x-2)² - 4" }, { source: "x² + 10x", target: "(x+5)² - 25" } ], diagnoses: { "x² + 6x->(x-2)² - 4": "Half of 6 is +3, not -2.", "x² - 4x->(x+3)² - 9": "Half of -4 is -2.", "x² + 10x->(x+3)² - 9": "Half of 10 is 5, square 25." }, explanation: "Each is (x + b/2)² - (b/2)².", hints: ["Half of 6.", "Half of -4.", "Half of 10."] },
      // @q15
      { id: "U31L1-graph-1", type: "graph-interact", category: "word", prompt: "x² + 4x completes to (x+2)² - N. Set the slider to N (key: value).", challenge: "Set the slider to 4.", validate: { value: 4 }, tolerance: 0.01, explanation: "(4/2)² = 4.", hints: ["2².", "4.", "4."] }
    ],
    selection: { procedural: 2, conceptual: 2, word: 1 },
    passThreshold: 0.8,
  },
  commonMistakes: [
    { wrongPattern: "uses the full coefficient instead of half", diagnosis: "The square's side is x + b/2, so the corner is (b/2)² — always halve first.", hint: "Halve the coefficient." },
    { wrongPattern: "forgets to subtract the corner", diagnosis: "(x+3)² alone is 9 bigger than x²+6x; the -9 keeps them equal.", hint: "Add AND subtract." },
    { wrongPattern: "adds b² instead of (b/2)²", diagnosis: "The b-strip splits in half first — the corner area is (b/2)², not b².", hint: "Half, then square." },
  ],
  recallTags: ["completing the square", "vertex form", "perfect square", "corner", "AnimatedProof"],
  discovery: {
    challenges: [
      { instruction: "Step the animation: what piece is missing from the L to make a full square?", observe: "A corner of side 3 (area 9) — half of the 6-strip squared, i.e. (6/2)²." },
      { instruction: "Run the proof for x² + 8x: split the 8-strip in half (4 and 4) and complete.", observe: "The missing corner is 4×4 = 16 = (8/2)² — the number you add is half the coefficient, squared." },
    ],
    predict: { prompt: "To complete the square for x² + 10x, what number do you add?", options: [{ id: "a", text: "25" }, { id: "b", text: "10" }, { id: "c", text: "100" }], reveal: "25 — half of 10 is 5, and 5² = 25. That's the corner's area." },
    sayItYourWay: { prompt: "What does 'complete the square' do?", phrasings: [{ id: "a", text: "Adds exactly one corner to turn x² + bx into a perfect square", correct: true, why: "The missing corner is (b/2)²." }, { id: "b", text: "Multiplies the whole expression by 4", correct: false, why: "No scaling — just adding one square corner." }, { id: "c", text: "Finds the roots by guessing", correct: false, why: "It's a geometry-guided rewrite, not guessing." }], formalName: "completing the square — x² + bx = (x + b/2)² − (b/2)²" },
    stretch: "Once a quadratic is (x-h)² + k, its vertex and symmetry are instant to read. That's next: vertex form tells all.", 
  },
};
