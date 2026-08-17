import type { Lesson } from "../schema";

export const T2U19L1: Lesson = {
  // @meta
  id: "T2-U19-L1",
  tier: 2,
  unit: "Curves",
  title: "The Parabola's Signature",
  prerequisites: ["T2-U15-L3","T2-U18-L3","T2-U18-L4"],
  estimatedMinutes: 12,
  hook: { question: "Throw a ball and it traces a graceful arc — a parabola. Squaring x bends the straight line into a U shape. The parabola has a signature: where it turns (vertex), which way it opens (a), where it crosses (roots). One curve, three fingerprints.", type: "real-world" },
  intuitionBlocks: [{ widget: "graph-plotter", narrative: "Slide a and watch the parabola's shape respond. a > 0 opens a smile; a < 0 opens a frown; bigger |a| makes it narrower. The vertex is where it turns around — its lowest or highest point." }],

  // @discovery
  formalBlocks: [{ definition: "y = ax² (+ bx + c) is a parabola. a decides opening (positive = up, negative = down) and width (bigger |a| = narrower). The vertex is the turning point; the axis of symmetry is the vertical line through it. Roots are where the curve crosses the x-axis (y = 0).", examples: ["y = x² − 4: vertex at (0, −4), roots at x = ±2.", "y = −x² + 2: a = −1 opens down, vertex (0, 2), roots ±√2."], pitfall: "The vertex is NOT the y-intercept generally: y = x² − 4x + 3 crosses at (0, 3) but turns at (2, −1). Find the vertex by symmetry or by reading the graph — don't assume c is the turning point.", altExplanations: ["GAME: a = warp opening — positive a opens the parabola up like a cup, negative flips it down like a hill; bigger |a| narrows the cup. The vertex is the turn point; the axis of symmetry is the vertical mirror line through it.", "FOOD: a satellite dish's curvature — the vertex is the dish's deepest point, and the parabola's arms open around the axis. y = x² − 4 opens up with its lowest point at (0, −4), crossing x = ±2."] }],
  gutChecks: [{ prompt: "For y = 2x², does the parabola open up or down, and is it wider or narrower than y = x²?", answer: "Opens up, narrower (a = 2 > 1)." }],
  quiz: {
    pool: [
      // @q01
      { id: "U19L1-mcq-1", type: "mcq", category: "procedural", prompt: "y = −3x² opens how?", options: [ { id: "a", text: "Down (a < 0)" }, { id: "b", text: "Up (a > 0)" }, { id: "c", text: "It stays flat" }, { id: "d", text: "Sideways" } ], correctOptionId: "a", diagnoses: { b: "Negative a means a frown.", c: "Only a = 0 gives a line.", d: "Parabolas open vertically, not sideways." }, explanation: "a = −3 < 0 → opens down.", hints: ["Sign of a.", "Negative → down.", "a = −3 < 0 → opens down."] },
      // @q02
      { id: "U19L1-mcq-2", type: "mcq", category: "conceptual", prompt: "What does the VERTEX of a parabola represent?", options: [ { id: "a", text: "Where it crosses the y-axis" }, { id: "b", text: "The turning point — max or min" }, { id: "c", text: "Where it crosses the x-axis" }, { id: "d", text: "The steepest straight part" } ], correctOptionId: "b", diagnoses: { a: "That's the y-intercept.", c: "Those are the roots.", d: "Parabolas aren't straight." }, explanation: "The vertex is the curve's turning point, its highest or lowest.", hints: ["Turning point.", "Max or min.", "The vertex is the curve's turning point, its highest or lowest."] },
      // @q03
      { id: "U19L1-mcq-3", type: "mcq", category: "word", prompt: "A ball: h = −5t² + 20t. Opens down because…", options: [ { id: "a", text: "20 is big" }, { id: "b", text: "t is squared" }, { id: "c", text: "a = −5, the ball rises then falls" }, { id: "d", text: "It's a line" } ], correctOptionId: "c", diagnoses: { b: "Squaring alone isn't the cause — the sign of a is.", a: "Size doesn't set direction.", d: "The squared term bends it into a curve." }, explanation: "a = −5 < 0 → the arc arcs downward: rise then fall.", hints: ["a = −5.", "Negative a.", "Rise then fall."] },
      // @q04
      { id: "U19L1-mcq-4", type: "mcq", category: "procedural", prompt: "y = 2x² vs y = x²: which is narrower?", options: [ { id: "a", text: "Neither is a parabola" }, { id: "b", text: "y = x²" }, { id: "c", text: "Same width" }, { id: "d", text: "y = 2x² (bigger |a|)" } ], correctOptionId: "d", diagnoses: { b: "Smaller |a| spreads wider.", c: "a changes the width.", a: "Both are parabolas." }, explanation: "|2| > |1| → steeper sides → narrower U.", hints: ["Compare |a|.", "2 > 1.", "|2| > |1| → steeper sides → narrower U."] },
      // @q05
      { id: "U19L1-mcq-5", type: "mcq", category: "conceptual", prompt: "What are the ROOTS of a parabola?", options: [ { id: "a", text: "Where the curve crosses the x-axis" }, { id: "b", text: "The vertex" }, { id: "c", text: "The y-intercept" }, { id: "d", text: "The axis of symmetry" } ], correctOptionId: "a", diagnoses: { b: "The vertex is the turning point.", c: "The y-intercept is where x = 0.", d: "The axis is a line of symmetry." }, explanation: "Roots = x-intercepts = where y = 0.", hints: ["y = 0.", "x-axis.", "Roots = x-intercepts = where y = 0."] },
      // @q06
      { id: "U19L1-mcq-6", type: "mcq", category: "word", prompt: "Arch of a bridge: y = −0.5x² + 8. What is the highest point of the arch?", options: [ { id: "a", text: "y = 0 at the base" }, { id: "b", text: "y = 8 at the vertex (0, 8)" }, { id: "c", text: "y = −8" }, { id: "d", text: "At the roots" } ], correctOptionId: "b", diagnoses: { a: "The BASE is the roots; the arch's peak is the vertex.", c: "Negative y is below ground.", d: "Roots are where the arch meets the ground." }, explanation: "The vertex at (0, 8) is the arch's peak.", hints: ["Vertex.", "Symmetry at x = 0.", "The vertex at (0, 8) is the arch's peak."] },
      // @q07
      { id: "U19L1-num-1", type: "numeric-input", category: "procedural", prompt: "y = x² − 4. Type the y-coordinate of the vertex.", answer: -4, tolerance: 0, explanation: "Vertex at (0, −4) for y = x² − 4.", hints: ["Symmetric at x = 0.", "y = 0² − 4.", "Vertex at (0, −4) for y = x² − 4."] },
      // @q08
      { id: "U19L1-num-2", type: "numeric-input", category: "procedural", prompt: "y = x² − 4. Type the POSITIVE root.", answer: 2, tolerance: 0, explanation: "x² − 4 = 0 → x = ±2.", hints: ["x² = 4.", "x = ±2.", "x² − 4 = 0 → x = ±2."] },
      // @q09
      { id: "U19L1-num-3", type: "numeric-input", category: "conceptual", prompt: "A ball: h = −5t² + 20. Type the maximum height (vertex y).", answer: 20, tolerance: 0, explanation: "Vertex at t = 0 → h = 20.", hints: ["Vertex at t = 0.", "h = 20.", "Vertex at t = 0 → h = 20."] },
      // @q10
      { id: "U19L1-frac-1", type: "fraction-input", category: "conceptual", prompt: "y = (1/2)x². Write a (the coefficient) as the fraction it is.", numerator: 1, denominator: 2, acceptEquivalent: true, explanation: "a = 1/2 — wider than y = x².", hints: ["a is the x² coefficient.", "1/2.", "a = 1/2 — wider than y = x²."] },
      // @q11
      { id: "U19L1-tf-1", type: "true-false-justify", category: "conceptual", prompt: "y = −x² opens downward.", isTrue: true, explanation: "a = −1 < 0 → frown.", hints: ["a < 0.", "Down.", "a = −1 < 0 → frown."] },
      // @q12
      { id: "U19L1-tf-2", type: "true-false-justify", category: "conceptual", prompt: "The vertex of y = x² − 4x + 3 is at (0, 3).", isTrue: false, explanation: "(0, 3) is the y-intercept; the vertex turns at (2, −1).", hints: ["(0, 3) is the intercept.", "Symmetry → x = 2.", "(0, 3) is the y-intercept; the vertex turns at (2, −1)."] },
      // @q13
      { id: "U19L1-order-1", type: "order-steps", category: "word", prompt: "Order the steps to sketch y = x² − 4.", sequence: ["Recognise a = 1 (opens up)", "Find the vertex (0, −4)", "Solve x² − 4 = 0 for roots ±2", "Draw the U through vertex and roots"], diagnoses: { "Recognise a = 1 (opens up)@1": "Start with a's sign.", "Find the vertex (0, −4)@0": "Vertex before roots.", "Draw the U through vertex and roots@0": "Plot the key points first." }, explanation: "Sign, vertex, roots, then draw.", hints: ["a first.", "Vertex next.", "Roots then curve."] },
      // @q14
      { id: "U19L1-drag-1", type: "drag-match", category: "conceptual", prompt: "Match each curve to its features.", pairs: [ { source: "y = 3x²", target: "Narrow, opens up" }, { source: "y = −2x²", target: "Narrow, opens down" }, { source: "y = 0.5x²", target: "Wide, opens up" } ], diagnoses: { "y = 3x²->Narrow, opens down": "a = 3 positive opens up.", "y = −2x²->Wide, opens up": "a = −2 narrow and down.", "y = 0.5x²->Narrow, opens up": "|a| = 0.5 spreads wide." }, explanation: "Sign of a sets direction; |a| sets width.", hints: ["Sign of a.", "|a| size.", "Sign of a sets direction; |a| sets width."] },
      // @q15
      { id: "U19L1-graph-1", type: "graph-interact", category: "word", prompt: "y = x² − 4 crosses the x-axis at ±2. Set the slider to the positive root (key: value).", challenge: "Adjust the values below so they match the condition described in the prompt.", validate: { value: 2 }, tolerance: 0.01, explanation: "Roots at ±2; positive root is 2.", hints: ["x² = 4.", "x = 2.", "Roots at ±2; positive root is 2."] }
    ],
    selection: { procedural: 2, conceptual: 2, word: 1 },
    passThreshold: 0.8,
  },
  commonMistakes: [
    { wrongPattern: "thinks c is always the vertex", diagnosis: "c is the y-intercept; the vertex needs symmetry or the graph.", hint: "Read the turning point off the curve, not off c." },
    { wrongPattern: "ignores the sign of a", diagnosis: "a < 0 opens down — a throw, a fountain, an arch.", hint: "Check the sign of the x² coefficient first." },
    { wrongPattern: "confuses roots with intercept", diagnosis: "Roots are x-intercepts (y = 0); the y-intercept is where x = 0.", hint: "Roots: y = 0. Intercept: x = 0." },
  ],
  recallTags: ["parabola", "vertex", "roots", "quadratic-graphs"],
  discovery: {
    challenges: [
      { instruction: "Slide a through negative and positive values.", observe: "Sign flips the opening; bigger |a| narrows the U." },
      { instruction: "Set y = x² − 4 and read vertex and roots.", observe: "Vertex (0, −4), roots ±2 — the curve's fingerprints." },
    ],
    predict: { prompt: "y = −2x² compared to y = x²:", options: [{ id: "a", text: "Opens down and narrower" }, { id: "b", text: "Opens up and wider" }, { id: "c", text: "Identical shape" }], reveal: "Opens down (negative a) and narrower (|−2| > 1). Both the sign and the size of a reshape the curve." },
    sayItYourWay: { prompt: "What does a do to the parabola?", phrasings: [{ id: "a", text: "Controls direction and width", correct: true, why: "Sign = which way; size |a| = how narrow." }, { id: "b", text: "Sets where it crosses the y-axis", correct: false, why: "That's the constant term's job." }, { id: "c", text: "Moves it left and right", correct: false, why: "Horizontal shift comes from inside the square." }], formalName: "the leading coefficient a (parabola opening and width)" },
    stretch: "Parabolas are one family — but curves come in many shapes: cubics snake, reciprocals dive off to infinity. Meeting the new shapes is U19-L2.",
  },
};
