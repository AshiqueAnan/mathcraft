import type { Lesson } from "../schema";

export const T2U19L2: Lesson = {
  // @meta
  id: "T2-U19-L2",
  tier: 2,
  unit: "Curves",
  title: "New Shapes: Cubics and Reciprocals",
  prerequisites: ["T2-U18-L4","T2-U19-L1"],
  estimatedMinutes: 12,
  hook: { question: "Parabolas have one bend — but the graph family keeps growing. Cube x and the curve SNAKES, rising and dipping. Divide 1 by x and the curve dives toward an invisible wall it can never touch. New equations, new shapes.", type: "paradox" },
  intuitionBlocks: [{ widget: "graph-plotter", narrative: "Switch between y = x³ and y = 1/x in the family selector. The cubic snakes through the origin; the reciprocal splits into two branches that sprint toward the axes but never land on them." }],

  // @discovery
  formalBlocks: [{ definition: "y = x³ is a cubic — an S-shaped curve through the origin. y = 1/x is a reciprocal — two branches in opposite quadrants approaching the axes. The axes it approaches but never touches are asymptotes: y = 1/x never lets x = 0, so there is NO point at x = 0.", examples: ["y = x³: (−2, −8), (−1, −1), (0, 0), (1, 1), (2, 8) — a snake.", "y = 1/x: x = 1 → 1; x = 2 → 0.5; x = 0.1 → 10; as x → 0⁺, y → ∞."], pitfall: "For y = 1/x, x = 0 is undefined — 1/0 has no value. The curve never crosses the y-axis: that's the asymptote, not a gap you can fill in.", altExplanations: ["GAME: family trees of graphs — y = x³ is the S-curve path through the origin; y = 1/x is two branches sprinting to the walls. The asymptote at x = 0 is a wall the curve approaches but can never touch, because 1/0 doesn't exist.", "FOOD: pouring — as a jug empties toward zero, the pour time grows without bound; y = 1/x shows the branch racing up as x approaches 0 from the positive side. Approaching a forbidden value, never reaching it."] }],
  gutChecks: [{ prompt: "For y = 1/x, what happens as x gets closer to 0 (from the positive side)?", answer: "y grows without bound — the curve races up toward the y-axis." }],
  quiz: {
    pool: [
      // @q01
      { id: "U19L2-mcq-1", type: "mcq", category: "procedural", prompt: "y = x³ at x = −2 gives…", options: [ { id: "a", text: "−8" }, { id: "b", text: "8" }, { id: "c", text: "−6" }, { id: "d", text: "6" } ], correctOptionId: "a", diagnoses: { b: "(−2)³ = −8 — the cube keeps the sign.", c: "That's x × 3, not x³.", d: "−2 × −2 × −2 = −8." }, explanation: "(−2)³ = −2 × −2 × −2 = −8.", hints: ["Cube = ×3 times.", "Sign stays.", "(−2)³ = −2 × −2 × −2 = −8."] },
      // @q02
      { id: "U19L2-mcq-2", type: "mcq", category: "conceptual", prompt: "What is an ASYMPTOTE?", options: [ { id: "a", text: "Another name for the vertex" }, { id: "b", text: "A line the curve approaches but never touches" }, { id: "c", text: "The steepest part of a cubic" }, { id: "d", text: "A type of parabola" } ], correctOptionId: "b", diagnoses: { a: "Vertices are turning points, not asymptotes.", c: "Cubics don't have a fixed steepest part.", d: "Asymptotes are invisible guide lines." }, explanation: "The reciprocal races toward an asymptote forever without landing on it.", hints: ["Never touches.", "Invisible wall.", "Approaches forever."] },
      // @q03
      { id: "U19L2-mcq-3", type: "mcq", category: "word", prompt: "Camera shutter: y = 1/x. At x = 0.01 (very close to 0), y is…", options: [ { id: "a", text: "Zero" }, { id: "b", text: "Tiny (0.01)" }, { id: "c", text: "Huge (100)" }, { id: "d", text: "Negative" } ], correctOptionId: "c", diagnoses: { b: "0.01 is x; 1/0.01 = 100.", a: "y = 0 would need an infinitely large x.", d: "Positive x gives positive y." }, explanation: "1 ÷ 0.01 = 100 — y explodes near zero.", hints: ["1 ÷ 0.01.", "= 100.", "1 ÷ 0.01 = 100 — y explodes near zero."] },
      // @q04
      { id: "U19L2-mcq-4", type: "mcq", category: "procedural", prompt: "y = 1/x at x = 4 is…", options: [ { id: "a", text: "−4" }, { id: "b", text: "4" }, { id: "c", text: "1/16" }, { id: "d", text: "1/4" } ], correctOptionId: "d", diagnoses: { b: "4 is x itself; y = 1/4.", c: "That's 1/x².", a: "Positive x → positive y." }, explanation: "y = 1/4 at x = 4.", hints: ["Reciprocal of 4.", "1/4.", "y = 1/4 at x = 4."] },
      // @q05
      { id: "U19L2-mcq-5", type: "mcq", category: "conceptual", prompt: "Why does y = 1/x have NO point at x = 0?", options: [ { id: "a", text: "1 ÷ 0 is undefined — division by zero doesn't exist" }, { id: "b", text: "The graph is broken and needs repair" }, { id: "c", text: "Zero is too small to plot" }, { id: "d", text: "It actually does have a point there" } ], correctOptionId: "a", diagnoses: { b: "It's not broken — the asymptote is the mathematical truth.", c: "Smallness isn't the issue; undefinedness is.", d: "1/0 has no value, so no point exists." }, explanation: "Division by zero is undefined — the asymptote marks the boundary.", hints: ["1/0 = ?", "No value.", "Division by zero is undefined — the asymptote marks the boundary."] },
      // @q06
      { id: "U19L2-mcq-6", type: "mcq", category: "word", prompt: "Speed vs time: t = 60/v (hours). If v doubles from 2 to 4 km/h, the time…", options: [ { id: "a", text: "Stays the same" }, { id: "b", text: "Halves (30 → 15 h)" }, { id: "c", text: "Doubles" }, { id: "d", text: "Quadruples" } ], correctOptionId: "b", diagnoses: { a: "1/x is not constant — it shrinks as x grows.", c: "Doubling v halves t, the reciprocal relationship.", d: "That's inverse-square, not inverse." }, explanation: "t = 60/2 = 30 → 60/4 = 15 — inverse proportion.", hints: ["60 ÷ 2.", "60 ÷ 4.", "t = 60/2 = 30 → 60/4 = 15 — inverse proportion."] },
      // @q07
      { id: "U19L2-num-1", type: "numeric-input", category: "procedural", prompt: "y = x³. Type the value at x = 2.", answer: 8, tolerance: 0, explanation: "2³ = 8.", hints: ["2 × 2 × 2.", "8.", "2³ = 8."] },
      // @q08
      { id: "U19L2-num-2", type: "numeric-input", category: "procedural", prompt: "y = 1/x. Type the value at x = 5.", answer: 0.2, tolerance: 0, explanation: "1/5 = 0.2.", hints: ["Reciprocal of 5.", "0.2.", "1/5 = 0.2."] },
      // @q09
      { id: "U19L2-num-3", type: "numeric-input", category: "conceptual", prompt: "y = 1/x. Type the value at x = 0.001.", answer: 1000, tolerance: 0, explanation: "1 ÷ 0.001 = 1000 — huge near zero.", hints: ["1 ÷ 0.001.", "1000.", "1 ÷ 0.001 = 1000 — huge near zero."] },
      // @q10
      { id: "U19L2-frac-1", type: "fraction-input", category: "conceptual", prompt: "y = 1/x at x = 8. Write y as a fraction.", numerator: 1, denominator: 8, acceptEquivalent: true, explanation: "y = 1/8.", hints: ["Reciprocal of 8.", "1/8.", "y = 1/8."] },
      // @q11
      { id: "U19L2-tf-1", type: "true-false-justify", category: "conceptual", prompt: "y = x³ passes through the origin.", isTrue: true, explanation: "x = 0 → y = 0³ = 0.", hints: ["0³ = 0.", "Passes origin.", "x = 0 → y = 0³ = 0."] },
      // @q12
      { id: "U19L2-tf-2", type: "true-false-justify", category: "conceptual", prompt: "y = 1/x crosses the y-axis.", isTrue: false, explanation: "x = 0 is undefined — the curve never touches the axis (asymptote).", hints: ["x = 0 undefined.", "No crossing.", "x = 0 is undefined — the curve never touches the axis (asymptote)."] },
      // @q13
      { id: "U19L2-order-1", type: "order-steps", category: "word", prompt: "Order the steps to sketch y = 1/x.", sequence: ["Note x = 0 is undefined (asymptote)", "Plot easy points: (1, 1), (2, 0.5), (4, 0.25)", "Plot mirror points in the negative quadrant", "Draw two branches racing toward the axes"], diagnoses: { "Note x = 0 is undefined (asymptote)@1": "Asymptote first.", "Plot easy points: (1, 1), (2, 0.5), (4, 0.25)@0": "Plot points after noting the boundary.", "Draw two branches racing toward the axes@0": "Plot both quadrants before drawing." }, explanation: "Asymptote, points, mirror, branches.", hints: ["Asymptote.", "Points.", "Asymptote, points, mirror, branches."] },
      // @q14
      { id: "U19L2-drag-1", type: "drag-match", category: "conceptual", prompt: "Match each graph to its shape.", pairs: [ { source: "y = x²", target: "One U bend (parabola)" }, { source: "y = x³", target: "One long S (cubic)" }, { source: "y = 1/x", target: "Two branches (reciprocal)" } ], diagnoses: { "y = x²->Two branches (reciprocal)": "Squaring gives a single U, not branches.", "y = x³->One U bend (parabola)": "Cubing snakes — one S curve.", "y = 1/x->One long S (cubic)": "The reciprocal breaks into two branches." }, explanation: "Each power changes the curve's signature.", hints: ["x² → U.", "x³ → S.", "1/x → branches."] },
      // @q15
      { id: "U19L2-graph-1", type: "graph-interact", category: "word", prompt: "y = 1/x near x = 0 shoots upward. Set the slider to a small x where y is huge (key: value).", challenge: "y = 1/x near x = 0 shoots upward. — adjust the values below to match the condition.", validate: { value: 0.1 }, tolerance: 0.01, explanation: "At x = 0.1, y = 10 — steeply climbing.", hints: ["1 ÷ 0.1 = 10.", "x = 0.1.", "At x = 0.1, y = 10 — steeply climbing."] }
    ],
    selection: { procedural: 2, conceptual: 2, word: 1 },
    passThreshold: 0.8,
  },
  commonMistakes: [
    { wrongPattern: "cube of a negative loses the sign", diagnosis: "(−2)³ = −8 — an odd power keeps the sign.", hint: "Count factors: 3 negatives → negative." },
    { wrongPattern: "thinks the reciprocal touches the axes", diagnosis: "1/0 is undefined, so the curve approaches but never lands on the axis.", hint: "The asymptote is a 'never-touch' line." },
    { wrongPattern: "treats 1/x like a straight line", diagnosis: "1/x curves steeply; it halves and quarters, not subtracts.", hint: "Check points: 1, 0.5, 0.25 — not even steps." },
  ],
  recallTags: ["cubic", "reciprocal", "asymptote", "curves"],
  discovery: {
    challenges: [
      { instruction: "Toggle the family selector between x², x³, and 1/x.", observe: "Each family has its own signature: U, S, or two branches." },
      { instruction: "On 1/x, zoom in near x = 0.", observe: "y rockets upward — the closer to 0, the bigger y; the axis is an asymptote." },
    ],
    predict: { prompt: "y = 1/x at x = 0.5 is…", options: [{ id: "a", text: "2" }, { id: "b", text: "0.5" }, { id: "c", text: "Undefined" }], reveal: "2 — 1 ÷ 0.5. The reciprocal is large for small x; it's only undefined exactly AT zero." },
    sayItYourWay: { prompt: "What does y = 1/x look like?", phrasings: [{ id: "a", text: "Two branches that hug the axes without touching", correct: true, why: "The asymptotes guide both branches forever." }, { id: "b", text: "A smooth U like a parabola", correct: false, why: "That's x² — the reciprocal breaks in two." }, { id: "c", text: "A straight downward line", correct: false, why: "It's curved and split — not linear." }], formalName: "a reciprocal curve with asymptotes" },
    stretch: "Graphs tell stories — and their crossings are dialogues. Where two curves meet, the solution to an equation hides. Reading solutions off graphs is the last lesson: U19-L3.",
  },
};
