import type { Lesson } from "../schema";

export const T2U19L3: Lesson = {
  // @meta
  id: "T2-U19-L3",
  tier: 2,
  unit: "Curves",
  title: "Solving with Graphs",
  prerequisites: ["T2-U15-L3","T2-U18-L4","T2-U19-L2"],
  estimatedMinutes: 12,
  hook: { question: "An equation is a question: when are these two expressions equal? The graph answers visually — wherever two curves meet, the x there satisfies BOTH at once. Read the crossing point and the solution is free.", type: "puzzle" },
  intuitionBlocks: [{ widget: "graph-plotter", narrative: "Plot a line and a curve on the same grid. Where they cross, both y-values match — that x solves both equations at once. Drag the line and watch the solution move." }],

  // @discovery
  formalBlocks: [{ definition: "To solve equations graphically: plot both sides as y = ..., and read the x-coordinate(s) where the graphs meet. Each crossing x is a solution. The estimate is as good as the graph's resolution — exact values need algebra.", examples: ["Solve x² = 4: plot y = x² and y = 4 — they cross at x = 2 and x = −2.", "Solve x² = x + 2: the parabola crosses the line at x = 2 and x = −1."], pitfall: "The crossing x-coordinate is the solution — don't copy y. If two curves meet at (3, 9), the solution is x = 3, not y = 9.", altExplanations: ["GAME: solving graphically reads where player paths cross — plot y = x² and y = 4; their crossover x-coordinates (2 and −2) are the solutions. The x at the crossing is the answer, not the y.", "MONEY: break-even charts — the parabola y = x² and the cost line y = x + 2 cross at x = 2 and x = −1; those crossing x-values are the break-even points. Don't read the y profits as the solution."] }],
  gutChecks: [{ prompt: "y = x² and y = 9 cross where?", answer: "At x = 3 and x = −3 (y = 9 both times)." }],
  quiz: {
    pool: [
      // @q01
      { id: "U19L3-mcq-1", type: "mcq", category: "procedural", prompt: "y = x² and y = 4 cross at x = 2 and x = −2. The solution of x² = 4 is…", options: [ { id: "a", text: "x = ±2" }, { id: "b", text: "y = 4" }, { id: "c", text: "x = 4" }, { id: "d", text: "x = 2 only" } ], correctOptionId: "a", diagnoses: { b: "4 is y — the solution is the x of the crossings.", c: "4 is the y-value, not x.", d: "Both crossings count: +2 AND −2." }, explanation: "Both x-values where the curves meet solve x² = 4.", hints: ["Crossing x's.", "±2.", "Both x-values where the curves meet solve x² = 4."] },
      // @q02
      { id: "U19L3-mcq-2", type: "mcq", category: "conceptual", prompt: "When two graphs cross at (3, 9), what is the solution?", options: [ { id: "a", text: "y = 9" }, { id: "b", text: "x = 3 (read the x-coordinate)" }, { id: "c", text: "x = 9" }, { id: "d", text: "Both x = 3 and y = 9 are solutions" } ], correctOptionId: "b", diagnoses: { a: "9 is what the two expressions equal — the answer, not x.", c: "x is the first coordinate.", d: "The solution of the equation is its x-value." }, explanation: "The x-coordinate of the meeting point is the solution.", hints: ["x first.", "Read x.", "The x-coordinate of the meeting point is the solution."] },
      // @q03
      { id: "U19L3-mcq-3", type: "mcq", category: "word", prompt: "Profit: P = x² − 5x + 6 = 0. Reading the graph, where does it cross the axis?", options: [ { id: "a", text: "x = 6" }, { id: "b", text: "y = 6" }, { id: "c", text: "x = 2 and x = 3" }, { id: "d", text: "x = 0 only" } ], correctOptionId: "c", diagnoses: { b: "6 is the y-intercept, not a root.", a: "6 is a constant, not a crossing.", d: "The curve crosses twice, not once." }, explanation: "Roots at x = 2 and x = 3 — the axis crossings.", hints: ["Where y = 0.", "Two crossings.", "Roots at x = 2 and x = 3 — the axis crossings."] },
      // @q04
      { id: "U19L3-mcq-4", type: "mcq", category: "procedural", prompt: "Solve x² = x + 2 graphically. Where do the graphs meet?", options: [ { id: "a", text: "x = 4" }, { id: "b", text: "x = 1 and x = −2" }, { id: "c", text: "x = 2 only" }, { id: "d", text: "x = 2 and x = −1" } ], correctOptionId: "d", diagnoses: { b: "Check: (−1)² = 1 and −1 + 2 = 1 ✓; (2)² = 4, 2 + 2 = 4 ✓ — it's 2 and −1.", c: "x = −1 also fits.", a: "4 is a y-value, not x." }, explanation: "The parabola and line cross at x = 2 and x = −1.", hints: ["Test each x.", "(2)² = 4 = 2 + 2.", "The parabola and line cross at x = 2 and x = −1."] },
      // @q05
      { id: "U19L3-mcq-5", type: "mcq", category: "conceptual", prompt: "Why is a graph solution only an ESTIMATE sometimes?", options: [ { id: "a", text: "The crossing may fall between grid marks we can't read exactly" }, { id: "b", text: "Graphs are always wrong" }, { id: "c", text: "Curves can't be plotted" }, { id: "d", text: "The grid has no numbers" } ], correctOptionId: "a", diagnoses: { b: "The graph is accurate — our reading of a messy spot is approximate.", c: "Curves plot fine.", d: "Grids have marks; precision is the limit." }, explanation: "A crossing at 2.37 is read as 'about 2.4' — algebra gets exact.", hints: ["Between marks.", "Reading limit.", "A crossing at 2."] },
      // @q06
      { id: "U19L3-mcq-6", type: "mcq", category: "word", prompt: "Two cables cross on a graph at x = 7. What does the crossing mean in the real world?", options: [ { id: "a", text: "Cable A is broken at 7" }, { id: "b", text: "At input 7, both outputs are equal" }, { id: "c", text: "The graph ends at 7" }, { id: "d", text: "7 is the y-intercept" } ], correctOptionId: "b", diagnoses: { a: "A crossing is equality, not damage.", c: "Graphs extend beyond single points.", d: "7 is an x-value, not the intercept." }, explanation: "The meeting x makes both formulas give the same output.", hints: ["Same y at that x.", "Equal outputs.", "The meeting x makes both formulas give the same output."] },
      // @q07
      { id: "U19L3-num-1", type: "numeric-input", category: "procedural", prompt: "y = x² and y = 9 cross at ±3. Type the POSITIVE solution of x² = 9.", answer: 3, tolerance: 0, explanation: "The crossing at x = 3 solves x² = 9.", hints: ["√9.", "+3.", "The crossing at x = 3 solves x² = 9."] },
      // @q08
      { id: "U19L3-num-2", type: "numeric-input", category: "procedural", prompt: "y = x² and y = x + 2 cross at x = 2 and x = −1. Type the LARGER solution.", answer: 2, tolerance: 0, explanation: "Larger of 2 and −1 is 2.", hints: ["2 > −1.", "2.", "Larger of 2 and −1 is 2."] },
      // @q09
      { id: "U19L3-num-3", type: "numeric-input", category: "conceptual", prompt: "Two graphs meet at (4, 7). Type the solution x.", answer: 4, tolerance: 0, explanation: "The x-coordinate 4 is the solution.", hints: ["Read x.", "4.", "The x-coordinate 4 is the solution."] },
      // @q10
      { id: "U19L3-frac-1", type: "fraction-input", category: "conceptual", prompt: "y = 1/x and y = 2 cross at x = 1/2. Write the solution as a fraction.", numerator: 1, denominator: 2, acceptEquivalent: true, explanation: "The crossing x is 1/2.", hints: ["Where they meet.", "x = 1/2.", "The crossing x is 1/2."] },
      // @q11
      { id: "U19L3-tf-1", type: "true-false-justify", category: "conceptual", prompt: "To solve x² = 4 graphically, you read the x-coordinate of the crossings.", isTrue: true, explanation: "Crossings at (±2, 4) give solutions x = ±2.", hints: ["x-coordinate.", "±2.", "Crossings at (±2, 4) give solutions x = ±2."] },
      // @q12
      { id: "U19L3-tf-2", type: "true-false-justify", category: "conceptual", prompt: "If two graphs never cross, the equation has exactly one solution.", isTrue: false, explanation: "No crossing = no shared x = no solution.", hints: ["No meeting.", "No solution.", "No crossing = no shared x = no solution."] },
      // @q13
      { id: "U19L3-order-1", type: "order-steps", category: "word", prompt: "Order the steps to solve x² = x + 2 graphically.", sequence: ["Plot y = x² (curve) and y = x + 2 (line)", "Find where the two graphs meet", "Read the x-coordinates of the crossings", "State solutions: x = 2, x = −1"], diagnoses: { "Plot y = x² (curve) and y = x + 2 (line)@1": "Plot both first.", "Find where the two graphs meet@0": "Locate meetings before reading.", "Read the x-coordinates of the crossings@1": "Read x of each crossing." }, explanation: "Plot, locate, read x, list solutions.", hints: ["Plot both.", "Find meetings.", "Plot, locate, read x, list solutions."] },
      // @q14
      { id: "U19L3-drag-1", type: "drag-match", category: "conceptual", prompt: "Match each crossing to its solution.", pairs: [ { source: "y = x² meets y = 4 at x = ±2", target: "x² = 4 → ±2" }, { source: "y = x² meets y = x + 2 at x = 2, −1", target: "x² = x + 2 → 2, −1" }, { source: "y = 1/x meets y = 2 at x = 1/2", target: "1/x = 2 → 1/2" } ], diagnoses: { "y = x² meets y = 4 at x = ±2->1/x = 2 → 1/2": "That crossing is for x² = 4.", "y = x² meets y = x + 2 at x = 2, −1->x² = 4 → ±2": "x² = x + 2 gives 2 and −1.", "y = 1/x meets y = 2 at x = 1/2->x² = x + 2 → 2, −1": "1/x = 2 solves to 1/2." }, explanation: "The crossing x solves the equation formed by setting the sides equal.", hints: ["Set the y's equal.", "Read crossing x.", "The crossing x solves the equation formed by setting the sides equal."] },
      // @q15
      { id: "U19L3-graph-1", type: "graph-interact", category: "word", prompt: "y = x² and y = x + 2 meet at x = 2. Set the slider to that solution (key: value).", challenge: "Adjust the values below so they match the condition described in the prompt.", validate: { value: 2 }, tolerance: 0.01, explanation: "The crossing at x = 2 solves x² = x + 2.", hints: ["Crossing x.", "2.", "The crossing at x = 2 solves x² = x + 2."] }
    ],
    selection: { procedural: 2, conceptual: 2, word: 1 },
    passThreshold: 0.8,
  },
  commonMistakes: [
    { wrongPattern: "reads y instead of x at the crossing", diagnosis: "The solution is the x-coordinate where the graphs meet.", hint: "Look at the horizontal axis value of the crossing." },
    { wrongPattern: "stops at one crossing", diagnosis: "Curve and line can cross twice — report every solution.", hint: "Scan the whole grid for all meeting points." },
    { wrongPattern: "trusts a shaky reading blindly", diagnosis: "Crossings between grid marks are estimates — refine with algebra.", hint: "Check your read by substituting the value back." },
  ],
  recallTags: ["graphical-solutions", "intersections", "crossings", "equations"],
  discovery: {
    challenges: [
      { instruction: "Plot y = x² and y = 4 together and trace the meetings.", observe: "Two crossings at x = ±2 — both solve x² = 4." },
      { instruction: "Drag the horizontal line up to y = 9.", observe: "Crossings move to ±3 — the solutions track the graph." },
    ],
    predict: { prompt: "y = x² and y = x + 2 cross at x = 2 and x = −1. The equation x² = x + 2 has…", options: [{ id: "a", text: "Two solutions: 2 and −1" }, { id: "b", text: "One solution: 2" }, { id: "c", text: "No solutions" }], reveal: "Two solutions — each crossing x solves the equation. A curve crossing a line can solve at both meetings." },
    sayItYourWay: { prompt: "What does a graph crossing tell you about an equation?", phrasings: [{ id: "a", text: "The x there solves the equality of the two equations", correct: true, why: "Both sides match — that x is the solution." }, { id: "b", text: "The y there is the answer", correct: false, why: "The solution is the x-coordinate, not y." }, { id: "c", text: "The graphs are broken there", correct: false, why: "A crossing is a meeting, not a break." }], formalName: "solving equations graphically (reading intersection x-values)" },
    stretch: "From balance scales to parabolas, every tool has taught the same truth: two things equal. The whole algebra journey — variables, equations, inequalities, graphs — is now in your hands. What's next: geometry, probability, and the rest of the map.",
  },
};
