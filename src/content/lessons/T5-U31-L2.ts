import type { Lesson } from "../schema";

export const T5U31L2: Lesson = {
  // @meta
  id: "T5-U31-L2",
  tier: 5,
  unit: "Quadratics in depth",
  title: "Vertex Form Tells All",
  prerequisites: ["T5-U30-L3","T5-U31-L1"],
  estimatedMinutes: 14,
  hook: { question: "A thrown ball's height is a quadratic. Its highest point — the vertex — is the whole story: when it peaks and how high. Written as y = (x-h)² + k, the vertex (h, k) is read straight off the page. No factoring, no completing the square in the moment — the form IS the answer.", type: "real-world" },
  intuitionBlocks: [{ widget: "graph-plotter", narrative: "Drag h and k sliders and read the vertex (h, k) directly from the form y = (x-h)² + k. The axis of symmetry is the vertical line through h. Then try a 'max height' word problem: find the vertex and you've answered it." }],

  // @discovery
  formalBlocks: [{ definition: "VERTEX FORM: $y = (x-h)^2 + k$ is a quadratic whose vertex is $(h, k)$ and whose axis of symmetry is $x = h$. The minimum (if the coefficient of the square is positive) or maximum (if negative) is exactly k, occurring at x = h.", examples: ["y = (x-2)² + 5: vertex (2, 5), axis x = 2, minimum 5.", "y = -(x+1)² + 8: vertex (-1, 8), axis x = -1, maximum 8."], pitfall: "Read the vertex's x from INSIDE the bracket with the OPPOSITE sign: (x+1)² means h = -1, not +1. Only the y-coordinate k keeps its sign.", altExplanations: ["GAME: vertex form is a boss's stat readout — y = (x−h)² + k reveals the boss's turn point (h, k) and its mirror line x = h immediately. (x+1)² means h = −1 because the READ is opposite inside the bracket; the outside k keeps its sign.", "FOOD: a parabolic serving bowl — the vertex (h, k) is the bowl's deepest point; the axis x = h is the fold line down its middle. Reading y = (x−4)² + 5: 4 inside means the bowl shifted RIGHT by 4 (opposite sign), 5 outside means it SITS 5 higher."] }],
  gutChecks: [{ prompt: "For y = (x+4)² - 3, what is the vertex?", answer: "(-4, -3) — the +4 inside means h = -4; the -3 outside is k." }],
  quiz: {
    pool: [
      // @q01
      { id: "U31L2-mcq-1", type: "mcq", category: "procedural", prompt: "y = (x-2)² + 5. Vertex = …", options: [ { id: "a", text: "(2, 5)" }, { id: "b", text: "(-2, 5)" }, { id: "c", text: "(2, -5)" }, { id: "d", text: "(-2, -5)" } ], correctOptionId: "a", diagnoses: { b: "The x flips sign from inside the bracket: -2 inside → +2.", c: "k keeps its sign: +5.", d: "Both signs are wrong." }, explanation: "Vertex form says vertex is (h, k) = (2, 5).", hints: ["Inside opposite sign.", "2.", "5."] },
      // @q02
      { id: "U31L2-mcq-2", type: "mcq", category: "conceptual", prompt: "y = (x+3)² + 1. Axis of symmetry is…", options: [ { id: "a", text: "x = 3" }, { id: "b", text: "x = -3" }, { id: "c", text: "y = 1" }, { id: "d", text: "x = 1" } ], correctOptionId: "b", diagnoses: { a: "+3 inside means h = -3, so axis x = -3.", c: "The axis is vertical, not horizontal.", d: "x = 1 is the vertex's y, not the axis." }, explanation: "Axis is x = h; the +3 inside means h = -3.", hints: ["+3 → h = -3.", "Axis: x = h.", "x = -3."] },
      // @q03
      { id: "U31L2-mcq-3", type: "mcq", category: "word", prompt: "A ball's height is h(t) = -(t-2)² + 10. Its maximum height is…", options: [ { id: "a", text: "-2" }, { id: "b", text: "2" }, { id: "c", text: "10" }, { id: "d", text: "14" } ], correctOptionId: "c", diagnoses: { b: "2 is the time of the peak, not the height.", a: "-2 is negative — heights aren't.", d: "14 is 2+10+2 — no." }, explanation: "The k = 10 is the maximum (vertex y-coordinate).", hints: ["Vertex y.", "k = 10.", "10."] },
      // @q04
      { id: "U31L2-mcq-4", type: "mcq", category: "procedural", prompt: "y = -(x-1)² + 4. The vertex is…", options: [ { id: "a", text: "(1, 4) minimum" }, { id: "b", text: "(-1, 4) maximum" }, { id: "c", text: "(1, -4) minimum" }, { id: "d", text: "(1, 4) and it's a maximum" } ], correctOptionId: "d", diagnoses: { b: "(-1, 4) misreads the inside sign.", c: "k is +4, not -4.", a: "The negative in front flips it to a maximum." }, explanation: "Vertex (1, 4); the leading minus makes it a maximum.", hints: ["- in front.", "Downward.", "Maximum at (1, 4)."] },
      // @q05
      { id: "U31L2-mcq-5", type: "mcq", category: "conceptual", prompt: "In y = (x-3)² + 2, why is the minimum exactly 2?", options: [ { id: "a", text: "(x-3)² is at least 0, so the smallest y is 0 + 2" }, { id: "b", text: "3 is the minimum" }, { id: "c", text: "2 is the x-coordinate" }, { id: "d", text: "It's not the minimum" } ], correctOptionId: "a", diagnoses: { b: "3 is the x of the vertex, not the y.", c: "2 is k — the y-coordinate.", d: "It is the minimum." }, explanation: "A square is never negative; its smallest value is 0 at x = 3, giving y = 2.", hints: ["Square ≥ 0.", "Smallest y = 2.", "Minimum 2."] },
      // @q06
      { id: "U31L2-mcq-6", type: "mcq", category: "word", prompt: "A dolphin's jump is h(t) = -(t-1)² + 5. When does it reach its peak?", options: [ { id: "a", text: "at t = 5" }, { id: "b", text: "at t = 1" }, { id: "c", text: "at t = 0" }, { id: "d", text: "never" } ], correctOptionId: "b", diagnoses: { a: "5 is the peak height, not the time.", c: "t = 0 is the start.", d: "It peaks — h = 1 is the time." }, explanation: "h = 1 is the time of the peak (vertex x-coordinate).", hints: ["h = 1.", "Vertex x.", "t = 1."] },
      // @q07
      { id: "U31L2-num-1", type: "numeric-input", category: "procedural", prompt: "y = (x-5)² + 3. Vertex x-coordinate = …", answer: 5, tolerance: 0, explanation: "h = 5 from the bracket (x-5)².", hints: ["x - 5 = 0.", "5.", "5."] },
      // @q08
      { id: "U31L2-num-2", type: "numeric-input", category: "procedural", prompt: "y = (x-5)² + 3. Vertex y-coordinate = …", answer: 3, tolerance: 0, explanation: "k = 3 — the outside constant.", hints: ["Outside +3.", "3.", "3."] },
      // @q09
      { id: "U31L2-num-3", type: "numeric-input", category: "conceptual", prompt: "y = (x+2)² - 6. Vertex x-coordinate = …", answer: -2, tolerance: 0, explanation: "Inside +2 means h = -2 — opposite sign.", hints: ["+2 → -2.", "-2.", "-2."] },
      // @q10
      { id: "U31L2-frac-1", type: "fraction-input", category: "conceptual", prompt: "y = (x - 1/2)² + 3. The vertex x-coordinate is 1/2. Express it as a fraction (numerator/denominator).", numerator: 1, denominator: 2, acceptEquivalent: true, explanation: "Inside (x - 1/2) means h = 1/2.", hints: ["-1/2 inside.", "h = 1/2.", "1/2."] },
      // @q11
      { id: "U31L2-tf-1", type: "true-false-justify", category: "conceptual", prompt: "y = (x+2)² - 5 has vertex at (-2, -5).", isTrue: true, explanation: "+2 inside → h = -2; -5 outside → k = -5.", hints: ["Inside opposite.", "(-2, -5).", "True."] },
      // @q12
      { id: "U31L2-tf-2", type: "true-false-justify", category: "conceptual", prompt: "y = -(x-3)² + 1 has its minimum at (3, 1).", isTrue: false, explanation: "The leading minus flips it — (3, 1) is a MAXIMUM, not a minimum.", hints: ["- in front.", "Maximum.", "False."] },
      // @q13
      { id: "U31L2-order-1", type: "order-steps", category: "word", prompt: "Order the steps to find the min of y = (x-4)² + 9.", sequence: ["Read h = 4", "Read k = 9", "State minimum at (4, 9)"], diagnoses: { "Read h = 4@1": "Read h first.", "Read k = 9@0": "Then k.", "State minimum at (4, 9)@0": "Conclude last." }, explanation: "h then k, then read off the vertex.", hints: ["h.", "k.", "(4, 9)."] },
      // @q14
      { id: "U31L2-drag-1", type: "drag-match", category: "conceptual", prompt: "Match each vertex form to its vertex.", pairs: [ { source: "y = (x-2)² + 5", target: "(2, 5)" }, { source: "y = (x+3)² - 1", target: "(-3, -1)" }, { source: "y = (x-1)² + 4", target: "(1, 4)" } ], diagnoses: { "y = (x-2)² + 5->(-3, -1)": "h = 2, k = 5.", "y = (x+3)² - 1->(2, 5)": "+3 inside → h = -3; k = -1.", "y = (x-1)² + 4->(-3, -1)": "h = 1, k = 4." }, explanation: "h flips sign from inside; k keeps its sign.", hints: ["Opposite inside.", "Keep outside.", "Match."] },
      // @q15
      { id: "U31L2-graph-1", type: "graph-interact", category: "word", prompt: "y = (x-2)² + 1. Set the slider to the vertex y-coordinate (key: value).", challenge: "Set the slider to 1.", validate: { value: 1 }, tolerance: 0.01, explanation: "k = 1 — the outside constant is the vertex y.", hints: ["Outside +1.", "k = 1.", "1."] }
    ],
    selection: { procedural: 2, conceptual: 2, word: 1 },
    passThreshold: 0.8,
  },
  commonMistakes: [
    { wrongPattern: "reads the vertex x with the same sign as inside", diagnosis: "(x+3)² means h = -3 — the inside sign flips.", hint: "Inside flips." },
    { wrongPattern: "confuses max and min", diagnosis: "A leading negative makes the parabola frown — vertex is a maximum.", hint: "- in front = maximum." },
    { wrongPattern: "confuses the vertex with the roots", diagnosis: "The vertex is the turning point (h, k), not where the graph crosses the x-axis.", hint: "Turning point, not crossing." },
  ],
  recallTags: ["vertex form", "vertex", "axis of symmetry", "maximum", "minimum"],
  discovery: {
    challenges: [
      { instruction: "Drag h to 2 in y = (x-h)² + k. What is the vertex's x-coordinate?", observe: "It matches h exactly — (h, k) is the vertex, read straight off the form." },
      { instruction: "Trace the axis of symmetry while h changes.", observe: "The axis is always the vertical line x = h — the parabola mirrors across it." },
    ],
    predict: { prompt: "y = (x-3)² + 7. Where is the vertex?", options: [{ id: "a", text: "(3, 7)" }, { id: "b", text: "(-3, 7)" }, { id: "c", text: "(3, -7)" }], reveal: "(3, 7) — the form y = (x-h)² + k names the vertex directly as (h, k)." },
    sayItYourWay: { prompt: "What does vertex form hand you instantly?", phrasings: [{ id: "a", text: "The vertex (h, k) and the axis x = h", correct: true, why: "They're written right in the form." }, { id: "b", text: "The two roots directly", correct: false, why: "Roots need extra steps; the vertex is the instant read." }, { id: "c", text: "The y-intercept only", correct: false, why: "The vertex is the star; intercept needs substitution." }], formalName: "vertex form y = (x-h)² + k — vertex (h, k), axis of symmetry x = h" },
    stretch: "How many times does a parabola cross the x-axis? The answer lives inside a single number — the discriminant.", 
  },
};
