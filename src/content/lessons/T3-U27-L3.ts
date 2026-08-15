import type { Lesson } from "../schema";

export const T3U27L3: Lesson = {
  // @meta
  id: "T3-U27-L3",
  tier: 3,
  unit: "Transformations & coordinates",
  title: "Distance and Midpoint",
  prerequisites: ["T2-U18-L1","T3-U25-L1","T3-U26-L4","T3-U27-L1","T3-U27-L2"],
  estimatedMinutes: 12,
  hook: { question: "Two points on a grid — how far apart are they, and where's the halfway mark? Drop a vertical and horizontal line between them and you've drawn a right triangle: the distance is the hypotenuse, straight from Pythagoras. The midpoint is just the average of the coordinates — split each gap in half. Two measurements from one picture.", type: "real-world" },
  intuitionBlocks: [{ widget: "geometry-playground", narrative: "Drag two points on the grid: their horizontal and vertical gaps form a right triangle whose hypotenuse is the distance. The midpoint sits at the average of the x's and the average of the y's. Move the points and watch both formulas track the same triangle." }],

  // @discovery
  formalBlocks: [{ definition: "Distance between $(x_1, y_1)$ and $(x_2, y_2)$: the gaps are $\\Delta x = x_2 - x_1$, $\\Delta y = y_2 - y_1$, so by Pythagoras $d = \\sqrt{(\\Delta x)^2 + (\\Delta y)^2}$. Midpoint: $M = \\left(\\tfrac{x_1 + x_2}{2}, \\tfrac{y_1 + y_2}{2}\\right)$ — the average of each coordinate pair. (3, 1) to (6, 5): gaps 3 and 4 → d = 5; midpoint (4.5, 3).", examples: ["(3, 1) to (6, 5): Δx = 3, Δy = 4 → d = √(9 + 16) = 5.", "Midpoint of (1, 2) and (5, 8) = ((1+5)/2, (2+8)/2) = (3, 5)."], pitfall: "The horizontal gap is x₂ − x₁ — the ORDER doesn't matter because it gets squared. But you MUST subtract before squaring: (x₂ − x₁)², never x₂² − x₁².", altExplanations: ["GAME: distance is a hidden Pythagoras — the horizontal and vertical gaps are the two legs of a right triangle; the straight-line segment is the hypotenuse. Midpoint is the average spawn point: ((x₁+x₂)/2, (y₁+y₂)/2).", "MONEY: coordinates are map addresses — the taxi route (Δx + Δy) differs from the crow-fly distance √(Δx² + Δy²). The midpoint is the equal-share split of two locations, averaging each coordinate pair."] }],
  gutChecks: [{ prompt: "Why is the distance formula really Pythagoras?", answer: "The horizontal and vertical gaps are the two legs of a right triangle; the segment between the points is the hypotenuse." }],
  quiz: {
    pool: [
      // @q01
      { id: "U27L3-mcq-1", type: "mcq", category: "procedural", prompt: "Distance between (3, 1) and (6, 5) = …", options: [ { id: "a", text: "5" }, { id: "b", text: "√22" }, { id: "c", text: "7" }, { id: "d", text: "13" } ], correctOptionId: "a", diagnoses: { b: "√22 comes from adding squares of wrong gaps.", c: "7 adds 3 + 4 directly.", d: "13 is 9 + 4 added unrooted." }, explanation: "Δx = 3, Δy = 4 → d = √(9 + 16) = 5.", hints: ["Gaps 3 and 4.", "√25.", "5."] },
      // @q02
      { id: "U27L3-mcq-2", type: "mcq", category: "conceptual", prompt: "The distance formula is really…", options: [ { id: "a", text: "Pythagoras on the gap triangle" }, { id: "b", text: "the average of the points" }, { id: "c", text: "the slope of the line" }, { id: "d", text: "adding coordinates" } ], correctOptionId: "a", diagnoses: { b: "Averaging gives the MIDPOINT.", c: "Slope is rise/run, not length.", d: "Adding loses the geometry." }, explanation: "Δx and Δy are the legs; the segment is the hypotenuse.", hints: ["Right triangle.", "Pythagoras.", "Pythagoras."] },
      // @q03
      { id: "U27L3-mcq-3", type: "mcq", category: "word", prompt: "Two towns at (2, 3) and (7, 15) on a grid. Straight-line distance = …", options: [ { id: "a", text: "13" }, { id: "b", text: "√89" }, { id: "c", text: "17" }, { id: "d", text: "10" } ], correctOptionId: "a", diagnoses: { b: "√89 uses gaps 5 and 8 — that's 25 + 64 = 89, so the root is √89 which isn't 13.", c: "17 adds 5 + 12 without rooting.", d: "10 is just Δy." }, explanation: "Δx = 5, Δy = 12 → d = √(25 + 144) = √169 = 13.", hints: ["Gaps 5 and 12.", "√169.", "13."] },
      // @q04
      { id: "U27L3-mcq-4", type: "mcq", category: "procedural", prompt: "Midpoint of (1, 2) and (5, 8) = …", options: [ { id: "a", text: "(3, 5)" }, { id: "b", text: "(4, 6)" }, { id: "c", text: "(2, 3)" }, { id: "d", text: "(6, 10)" } ], correctOptionId: "a", diagnoses: { b: "(4, 6) adds and divides by 1 — midpoint averages.", c: "(2, 3) subtracts the points.", d: "(6, 10) adds without dividing." }, explanation: "M = ((1+5)/2, (2+8)/2) = (3, 5).", hints: ["Average x's.", "Average y's.", "(3, 5)."] },
      // @q05
      { id: "U27L3-mcq-5", type: "mcq", category: "conceptual", prompt: "Why can you subtract points in either order for distance?", options: [ { id: "a", text: "The gaps get squared, killing the sign" }, { id: "b", text: "Midpoints swap order" }, { id: "c", text: "Slopes ignore order" }, { id: "d", text: "You can't actually" } ], correctOptionId: "a", diagnoses: { b: "Midpoint order doesn't change either, but that's a separate idea.", c: "Slope DOES care about order — rise/run flips sign.", d: "You can; squaring removes the sign." }, explanation: "(−Δx)² = (Δx)², so distance is order-independent.", hints: ["Squared.", "Sign vanishes.", "Squared gaps."] },
      // @q06
      { id: "U27L3-mcq-6", type: "mcq", category: "word", prompt: "A phone mast at (0, 0) has a 10 km radius. Which point is JUST OUT of range?", options: [ { id: "a", text: "(9, 5)" }, { id: "b", text: "(6, 8)" }, { id: "c", text: "(8, 6)" }, { id: "d", text: "(0, 10)" } ], correctOptionId: "a", diagnoses: { b: "√(36+64) = 10 — exactly in range.", c: "√(64+36) = 10 — exactly in range.", d: "√(0+100) = 10 — exactly on the radius." }, explanation: "√(81 + 25) = √106 ≈ 10.3 km — over the 10 km radius.", hints: ["d = √(81+25).", "√106 ≈ 10.3.", "(9, 5)."] },
      // @q07
      { id: "U27L3-num-1", type: "numeric-input", category: "procedural", prompt: "Distance from (1, 1) to (4, 5).", answer: 5, tolerance: 0, explanation: "Δx = 3, Δy = 4 → d = √25 = 5.", hints: ["Gaps 3 and 4.", "√25.", "5."] },
      // @q08
      { id: "U27L3-num-2", type: "numeric-input", category: "procedural", prompt: "Midpoint of (−2, 4) and (6, 8). x-coordinate = …", answer: 2, tolerance: 0, explanation: "x = (−2 + 6)/2 = 2.", hints: ["Average x's.", "4/2.", "2."] },
      // @q09
      { id: "U27L3-num-3", type: "numeric-input", category: "conceptual", prompt: "Distance from (0, 0) to (0, 6): the vertical gap is 6, so d = …", answer: 6, tolerance: 0, explanation: "Vertical-only: d = |Δy| = 6.", hints: ["Straight up.", "6.", "6."] },
      // @q10
      { id: "U27L3-frac-1", type: "fraction-input", category: "conceptual", prompt: "The midpoint of (0, 0) and (3, 1) has coordinates (3/2, 1/2). What fraction of the way from (0,0) is the midpoint?", numerator: 1, denominator: 2, acceptEquivalent: true, explanation: "The midpoint sits exactly halfway — 1/2 the distance.", hints: ["Halfway.", "1/2.", "1/2."] },
      // @q11
      { id: "U27L3-tf-1", type: "true-false-justify", category: "conceptual", prompt: "The midpoint's coordinates are the averages of the endpoints' coordinates.", isTrue: true, explanation: "M = ((x₁+x₂)/2, (y₁+y₂)/2) — each coordinate splits its gap in half.", hints: ["Average each pair.", "M = averages.", "True."] },
      // @q12
      { id: "U27L3-tf-2", type: "true-false-justify", category: "conceptual", prompt: "x₂² − x₁² = (x₂ − x₁)².", isTrue: false, explanation: "Squaring a difference needs the whole gap squared: (x₂ − x₁)² ≠ x₂² − x₁².", hints: ["Subtract FIRST.", "Then square.", "False."] },
      // @q13
      { id: "U27L3-order-1", type: "order-steps", category: "word", prompt: "Order the steps to find the distance from (1, 2) to (4, 6).", sequence: ["Find gaps: Δx = 3, Δy = 4", "Square and add: 9 + 16 = 25", "Root: d = 5"], diagnoses: { "Find gaps: Δx = 3, Δy = 4@1": "Find the gaps first.", "Square and add: 9 + 16 = 25@0": "Then square and add.", "Root: d = 5@0": "Root last." }, explanation: "Gaps, square-sum, root.", hints: ["3 and 4.", "25.", "5."] },
      // @q14
      { id: "U27L3-drag-1", type: "drag-match", category: "conceptual", prompt: "Match each formula to its use.", pairs: [ { source: "Distance", target: "√((Δx)² + (Δy)²)" }, { source: "Midpoint", target: "average coordinates" }, { source: "Both", target: "need two points" } ], diagnoses: { "Distance->average coordinates": "Distance roots the squared gaps.", "Midpoint->√((Δx)² + (Δy)²)": "Midpoint averages, it doesn't root.", "Both->only one point": "Both formulas use two endpoints." }, explanation: "Distance measures the segment; midpoint halves it.", hints: ["Distance = root-sum.", "Midpoint = average.", "Two points."] },
      // @q15
      { id: "U27L3-graph-1", type: "graph-interact", category: "word", prompt: "Distance from (0, 0) to (3, 4). Set the slider to d (key: value).", challenge: "Set the slider to 5.", validate: { value: 5 }, tolerance: 0.01, explanation: "√(9 + 16) = 5.", hints: ["√25.", "5.", "5."] }
    ],
    selection: { procedural: 2, conceptual: 2, word: 1 },
    passThreshold: 0.8,
  },
  commonMistakes: [
    { wrongPattern: "squares each coordinate instead of the gap", diagnosis: "It's (x₂ − x₁)² — subtract first, then square.", hint: "Gap first." },
    { wrongPattern: "forgets to average the midpoint", diagnosis: "Midpoint divides each sum by 2.", hint: "÷ 2 each." },
    { wrongPattern: "drops the root in distance", diagnosis: "Squared gaps give d² — the distance is the root.", hint: "√ at the end." },
  ],
  recallTags: ["distance", "midpoint", "Pythagoras", "coordinates", "average"],
  discovery: {
    challenges: [
      { instruction: "Drag two points and read their gaps.", observe: "The gaps are the legs; the segment is the hypotenuse." },
      { instruction: "Mark the midpoint and check it halves both gaps.", observe: "Its coordinates are the averages of the endpoints." },
    ],
    predict: { prompt: "Distance between (−1, 2) and (3, 5) = …", options: [{ id: "a", text: "5" }, { id: "b", text: "7" }, { id: "c", text: "√20" }], reveal: "5 — Δx = 4, Δy = 3, so √(16 + 9) = 5. The sign of Δx doesn't matter once squared." },
    sayItYourWay: { prompt: "How do you find the distance between two grid points?", phrasings: [{ id: "a", text: "Find the right triangle's legs (the gaps), then use Pythagoras", correct: true, why: "That's the formula's geometry." }, { id: "b", text: "Add the coordinates", correct: false, why: "Adding doesn't measure length." }, { id: "c", text: "Average the points", correct: false, why: "Averaging gives the midpoint." }], formalName: "distance = √((Δx)² + (Δy)²) and midpoint = ((x₁+x₂)/2, (y₁+y₂)/2)" },
    stretch: "From measuring single points to describing whole DATASETS. Next: averages — and the three very different ways to be average.", 
  },
};
