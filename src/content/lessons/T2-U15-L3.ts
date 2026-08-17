import type { Lesson } from "../schema";

export const T2U15L3: Lesson = {
  // @meta
  id: "T2-U15-L3",
  tier: 2,
  unit: "Simultaneous & quadratic equations",
  title: "When Graphs Cross at Two Places",
  prerequisites: ["T2-U12-L4","T2-U14-L4","T2-U15-L1","T2-U15-L2"],
  estimatedMinutes: 12,
  hook: { question: "A ball's height h = 20t − 5t². Is it ever at 15 m? A line would say 'once' or 'never' — but a curve can answer twice: going up and coming down. One equation, two solutions.", type: "real-world" },
  intuitionBlocks: [{ widget: "graph-plotter", narrative: "Drag the slider to change how high the parabola sits. Watch where it cuts the horizontal line: with enough height it crosses twice, touching when it just grazes, and never when it stays below — the three lives of a quadratic equation." }],

  // @discovery
  formalBlocks: [{ definition: "A quadratic equation ax² + bx + c = 0 is solved by its x-intercepts: where y = ax² + bx + c meets the x-axis. Factor into (x − p)(x − q) = 0; then x = p or x = q. One factor zero makes the product zero — the zero-product property.", examples: ["x² − 5x + 6 = 0 → (x − 2)(x − 3) = 0 → x = 2 or x = 3. The parabola y = x² − 5x + 6 cuts the x-axis at (2,0) and (3,0).", "x² − 9 = 0 → (x − 3)(x + 3) = 0 → x = 3 or x = −3 (difference of squares)."], pitfall: "Setting each factor to zero works ONLY when the product equals zero. x(x − 2) = 3 does NOT give x = 3 — the product must be 0 to use the property.", altExplanations: ["GAME: solving a quadratic is finding the level's spawn points — the parabola's x-intercepts are where the height hits zero. (x−2)(x−3) = 0 means either factor can trigger: x = 2 OR x = 3.", "MONEY: zero is the only 'force the product to vanish' rule — x(x−2) = 3 cannot set either factor to 3; the product must equal 0 first. Only when the total is 0 does each factor get a chance."] }],
  gutChecks: [{ prompt: "Solve (x − 4)(x + 1) = 0.", answer: "x = 4 or x = −1 (either factor zero)." }],
  quiz: {
    pool: [
      // @q01
      { id: "U15L3-mcq-1", type: "mcq", category: "procedural", prompt: "x² − 5x + 6 = 0 factors to (x − 2)(x − 3) = 0. What are the solutions?", options: [ { id: "a", text: "x = 2 and x = 3" }, { id: "b", text: "x = −2 and x = −3" }, { id: "c", text: "x = 5 and x = 6" }, { id: "d", text: "x = 2 only" } ], correctOptionId: "a", diagnoses: { b: "(x + 2)(x + 3) would give those; signs are wrong.", c: "5 and 6 are the constant terms' factors, not the roots.", d: "Both factors can be zero — there are two answers." }, explanation: "x − 2 = 0 → x = 2; x − 3 = 0 → x = 3.", hints: ["Solve x − 2 = 0.", "Solve x − 3 = 0.", "2 and 3."] },
      // @q02
      { id: "U15L3-mcq-2", type: "mcq", category: "conceptual", prompt: "Why does (x − 2)(x − 3) = 0 give TWO solutions?", options: [ { id: "a", text: "Because 2 and 3 are the only numbers" }, { id: "b", text: "Each factor can be zero — and either makes the product 0" }, { id: "c", text: "Parabolas always have two roots" }, { id: "d", text: "You add the factors, then divide" } ], correctOptionId: "b", diagnoses: { a: "Other quadratics have different roots — the property is general.", c: "Sometimes there's one root (touching) or none.", d: "The factors multiply to zero; each can be zero." }, explanation: "The zero-product property: ab = 0 forces a = 0 or b = 0.", hints: ["Think of the product.", "0 × anything = 0.", "Either factor zero."] },
      // @q03
      { id: "U15L3-mcq-3", type: "mcq", category: "word", prompt: "A stone: h = 6t − t². When is its height 0 (hits the ground)?", options: [ { id: "a", text: "t = 6 only" }, { id: "b", text: "t = 1 and t = 6" }, { id: "c", text: "t = 0 and t = 6" }, { id: "d", text: "t = −6" } ], correctOptionId: "c", diagnoses: { b: "t = 1 gives h = 5, not 0.", a: "It starts on the ground at t = 0 too.", d: "Time t = −6 is before the throw." }, explanation: "t(6 − t) = 0 → t = 0 (release) or t = 6 (landing).", hints: ["Factor t out.", "t(6 − t) = 0.", "t = 0 or 6."] },
      // @q04
      { id: "U15L3-mcq-4", type: "mcq", category: "procedural", prompt: "x² − 9 = 0. Which factorization solves it?", options: [ { id: "a", text: "x² = 9 → x = 3 only" }, { id: "b", text: "(x − 9)(x + 1) = 0 → x = 9, −1" }, { id: "c", text: "(x − 3)² = 0 → x = 3" }, { id: "d", text: "(x − 3)(x + 3) = 0 → x = 3, −3" } ], correctOptionId: "d", diagnoses: { b: "Expanding gives x² − 8x − 9, not x² − 9.", c: "Expanding gives x² − 6x + 9.", a: "x² = 9 also allows x = −3." }, explanation: "Difference of squares: x² − 9 = (x − 3)(x + 3).", hints: ["Difference of two squares.", "(x − 3)(x + 3).", "x = ±3."] },
      // @q05
      { id: "U15L3-mcq-5", type: "mcq", category: "conceptual", prompt: "A parabola never touches the x-axis. Its equation = 0 has…", options: [ { id: "a", text: "No real solutions" }, { id: "b", text: "One solution" }, { id: "c", text: "Two solutions" }, { id: "d", text: "Infinite solutions" } ], correctOptionId: "a", diagnoses: { b: "Touching once means one; here it never touches.", c: "Two solutions need two crossings.", d: "A quadratic has at most two roots." }, explanation: "No x-axis meeting means no x makes y = 0 — no real solutions.", hints: ["Solutions = crossings.", "No crossing yet.", "None."] },
      // @q06
      { id: "U15L3-mcq-6", type: "mcq", category: "word", prompt: "Area of a rectangle is x(x − 2) = 15 m². Why can't you jump to 'x = 15'?", options: [ { id: "a", text: "Because rectangles are big" }, { id: "b", text: "The product is 15, NOT 0 — the zero-product property doesn't apply" }, { id: "c", text: "You always divide by x first" }, { id: "d", text: "x must stay inside the brackets" } ], correctOptionId: "b", diagnoses: { a: "Size is irrelevant.", c: "Dividing loses the x − 2 factor.", d: "x can move — it's the zero condition that matters." }, explanation: "x(x − 2) = 15 → x² − 2x − 15 = 0 → (x − 5)(x + 3) = 0 → x = 5 (positive).", hints: ["Rewrite as = 0.", "x² − 2x − 15 = 0.", "x = 5."] },
      // @q07
      { id: "U15L3-num-1", type: "numeric-input", category: "procedural", prompt: "(x − 4)(x + 1) = 0. Type the LARGER solution.", answer: 4, tolerance: 0, explanation: "x − 4 = 0 → 4; x + 1 = 0 → −1. Larger is 4.", hints: ["Solve each factor.", "4 or −1.", "4."] },
      // @q08
      { id: "U15L3-num-2", type: "numeric-input", category: "procedural", prompt: "x² − 5x + 6 = 0. Type the SMALLER solution.", answer: 2, tolerance: 0, explanation: "(x − 2)(x − 3) = 0 → x = 2 or 3.", hints: ["Factor it.", "(x − 2)(x − 3).", "2."] },
      // @q09
      { id: "U15L3-num-3", type: "numeric-input", category: "conceptual", prompt: "x² − 4 = 0. Type the positive solution.", answer: 2, tolerance: 0, explanation: "(x − 2)(x + 2) = 0 → x = ±2; positive is 2.", hints: ["Difference of squares.", "x = ±2.", "2."] },
      // @q10
      { id: "U15L3-frac-1", type: "fraction-input", category: "conceptual", prompt: "(2x − 1)(x + 1) = 0. Write the solution from 2x − 1 = 0 as a fraction.", numerator: 1, denominator: 2, acceptEquivalent: true, explanation: "2x − 1 = 0 → 2x = 1 → x = 1/2.", hints: ["Solve 2x − 1 = 0.", "2x = 1.", "1/2."] },
      // @q11
      { id: "U15L3-tf-1", type: "true-false-justify", category: "conceptual", prompt: "x(x − 2) = 0 has solutions x = 0 and x = 2.", isTrue: true, explanation: "x = 0 or x − 2 = 0 — the zero-product property.", hints: ["Factor is x.", "x = 0 or x = 2.", "True."] },
      // @q12
      { id: "U15L3-tf-2", type: "true-false-justify", category: "conceptual", prompt: "x(x − 2) = 3 has solution x = 3.", isTrue: false, explanation: "The product is 3, not 0 — you must expand to x² − 2x − 3 = 0 first.", hints: ["Product must be 0.", "(x − 3)(x + 1) = 0.", "x = 3 or −1."] },
      // @q13
      { id: "U15L3-order-1", type: "order-steps", category: "word", prompt: "Order the steps to solve x² − 5x + 6 = 0.", sequence: ["Factor: (x − 2)(x − 3) = 0", "Use zero-product: x − 2 = 0 or x − 3 = 0", "Solve each: x = 2 or x = 3", "Check both in the original"], diagnoses: { "Factor: (x − 2)(x − 3) = 0@1": "Factor before applying zero-product.", "Solve each: x = 2 or x = 3@0": "Set the factors to zero first.", "Check both in the original@0": "Check at the end." }, explanation: "Factor, set each factor to zero, solve, then verify.", hints: ["Factor first.", "Zero-product next.", "Then solve and check."] },
      // @q14
      { id: "U15L3-drag-1", type: "drag-match", category: "conceptual", prompt: "Match each equation to its solutions.", pairs: [ { source: "(x − 1)(x − 2) = 0", target: "x = 1, 2" }, { source: "x² − 16 = 0", target: "x = 4, −4" }, { source: "x(x + 5) = 0", target: "x = 0, −5" } ], diagnoses: { "(x − 1)(x − 2) = 0->x = 4, −4": "Those are the ±4 roots of x² − 16.", "x² − 16 = 0->x = 0, −5": "That's x(x + 5) = 0, not difference of squares.", "x(x + 5) = 0->x = 1, 2": "Factors are x and x + 5." }, explanation: "Each factorization yields its roots directly.", hints: ["Solve each factor.", "Zero-product.", "Read roots off."] },
      // @q15
      { id: "U15L3-graph-1", type: "graph-interact", category: "word", prompt: "The parabola y = x² − 5x + 6 crosses the x-axis at 2 and 3. Set the slider to the SMALLER crossing (key: value).", challenge: "Set the slider to 2.", validate: { value: 2 }, tolerance: 0.01, explanation: "(x − 2)(x − 3) = 0 → x = 2 or 3; smaller is 2.", hints: ["Factor the quadratic.", "x = 2 or 3.", "2."] }
    ],
    selection: { procedural: 2, conceptual: 2, word: 1 },
    passThreshold: 0.8,
  },
  commonMistakes: [
    { wrongPattern: "wrong signs in factoring", diagnosis: "(x − a)(x − b) expands to x² − (a+b)x + ab — negative constant means one factor is positive, one negative.", hint: "Expand your factor pair back to check." },
    { wrongPattern: "applies zero-product to non-zero product", diagnosis: "x(x − 2) = 3 isn't ready — the product must be 0 first.", hint: "Move everything to one side, then factor." },
    { wrongPattern: "drops one of the two roots", diagnosis: "Both factors can be zero — the parabola crosses twice.", hint: "Solve each factor, write both answers." },
  ],
  recallTags: ["quadratics", "factorization", "roots", "zero-product"],
  discovery: {
    challenges: [
      { instruction: "Plot y = x² − 5x + 6 and trace both x-axis crossings.", observe: "Two crossings at x = 2 and x = 3 — both make y = 0." },
      { instruction: "Raise the parabola so it just grazes the axis, then above it.", observe: "Grazing = one solution; above = none. The equation's answers live at the crossings." },
    ],
    predict: { prompt: "How many solutions can x² − 5x + 6 = 0 have?", options: [{ id: "a", text: "At most two" }, { id: "b", text: "Exactly one" }, { id: "c", text: "Always three" }], reveal: "At most two — a parabola can cross twice, touch once, or miss entirely. The crossing pattern tells you the solution count." },
    sayItYourWay: { prompt: "What does solving a quadratic equation mean graphically?", phrasings: [{ id: "a", text: "Finding where the curve meets the x-axis", correct: true, why: "y = 0 at the x-axis, exactly the solutions." }, { id: "b", text: "Finding where the curve is tallest", correct: false, why: "The vertex is highest/lowest, not where y = 0." }, { id: "c", text: "Finding where the curve starts", correct: false, why: "Curves don't 'start' — the x-intercepts are the answer." }], formalName: "the roots (x-intercepts) of a quadratic equation" },
    stretch: "x² + 2x + 2 = 0 won't factor and never touches the axis — yet it STILL has solutions, just not real ones. The formula that never fails is next: U15-L4.",
  },
};
