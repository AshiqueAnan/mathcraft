import type { Lesson } from "../schema";

export const T3U22L2: Lesson = {
  // @meta
  id: "T3-U22-L2",
  tier: 3,
  unit: "Construction & symmetry",
  title: "Everywhere That's Allowed",
  prerequisites: ["T3-U21-L4","T3-U22-L1"],
  estimatedMinutes: 12,
  hook: { question: "'Keep 3 m from the pool.' Not one point — a whole ring of places. The set of every allowed spot is a locus, and loci trace beautiful shapes: a fixed distance from a point is a circle; a fixed distance from a line is two parallel paths.", type: "real-world" },
  intuitionBlocks: [{ widget: "geometry-playground", narrative: "Drag a point that must stay a fixed distance from a target. From a point it sweeps a circle; from a line it glides along two parallel rails. The allowed region draws itself." }],

  // @discovery
  formalBlocks: [{ definition: "A locus is the set of ALL points satisfying a condition. Fixed distance from a point → a circle (radius = that distance). Fixed distance from a line → two parallel lines (one each side). Equidistant from two points → the perpendicular bisector.", examples: ["Spot 3 cm from point A: a circle radius 3 cm centred at A.", "Spot 4 cm from line l: two lines parallel to l, 4 cm on each side."], pitfall: "A locus is not ONE answer — it's the whole collection. Miss the second parallel line (the other side of the target line) and you've only found half the locus.", altExplanations: ["GAME: a locus is every spawn point that passes the filter — fixed distance from a point = the whole ring of points at that radius (a circle), not one spot. Fixed distance from a line = TWO parallel strips, one per side, or you've only found half the loot.", "FOOD: a dog tied to a post traces a circle — the locus is the full set of reachable spots at leash length. A dog tethered to a fence rail sweeps two lanes, one each side of the fence."] }],
  gutChecks: [{ prompt: "Describe the locus of points exactly 2 cm from point P.", answer: "The circle centred at P with radius 2 cm." }],
  quiz: {
    pool: [
      // @q01
      { id: "U22L2-mcq-1", type: "mcq", category: "procedural", prompt: "The locus of points 3 cm from point A is…", options: [ { id: "a", text: "A circle centred at A, radius 3 cm" }, { id: "b", text: "A line through A" }, { id: "c", text: "Two parallel lines" }, { id: "d", text: "A square" } ], correctOptionId: "a", diagnoses: { b: "A line would only hit 3 cm at one spot.", c: "Two parallels describe distance from a LINE, not a point.", d: "Squares aren't fixed-distance from a point." }, explanation: "Equal distance from a point sweeps every direction — a circle.", hints: ["All directions.", "Equal radius.", "Circle."] },
      // @q02
      { id: "U22L2-mcq-2", type: "mcq", category: "conceptual", prompt: "Points 5 cm from a LINE form…", options: [ { id: "a", text: "One circle centred on the line" }, { id: "b", text: "Two parallel lines, 5 cm on each side" }, { id: "c", text: "Five points" }, { id: "d", text: "A single line" } ], correctOptionId: "b", diagnoses: { a: "Circles belong to fixed distance from a point.", c: "A locus is continuous, not discrete.", d: "Both sides of the line count." }, explanation: "The line has two sides — glide 5 cm along each side.", hints: ["Both sides.", "Parallel glide.", "Two lines."] },
      // @q03
      { id: "U22L2-mcq-3", type: "mcq", category: "word", prompt: "A dog tied by a 4 m rope to a post traces what locus as it circles?", options: [ { id: "a", text: "Two parallel lines" }, { id: "b", text: "A straight line" }, { id: "c", text: "A circle radius 4 m around the post" }, { id: "d", text: "Nothing" } ], correctOptionId: "c", diagnoses: { b: "The rope lets it move in all directions.", a: "Parallels need a line target.", d: "It moves — a whole circle of places." }, explanation: "Fixed distance from the post → circle radius = rope length.", hints: ["Fixed rope.", "All around post.", "Circle."] },
      // @q04
      { id: "U22L2-mcq-4", type: "mcq", category: "procedural", prompt: "Points equidistant from A and B form…", options: [ { id: "a", text: "Two parallel lines" }, { id: "b", text: "A circle through A and B" }, { id: "c", text: "The segment AB" }, { id: "d", text: "The perpendicular bisector of AB" } ], correctOptionId: "d", diagnoses: { b: "Equal distance to BOTH points means the bisector, not a circle.", c: "The segment is the endpoints' path, not the equidistant set.", a: "Parallels aren't equidistant to two separate points." }, explanation: "Every equidistant point lies on the perpendicular bisector (U22-L1).", hints: ["Equidistant to two.", "Perp bisector.", "The bisector."] },
      // @q05
      { id: "U22L2-mcq-5", type: "mcq", category: "conceptual", prompt: "Why are there TWO lines for 'distance from a line' but only ONE circle for 'distance from a point'?", options: [ { id: "a", text: "A line has two sides; a point has all directions but one distance" }, { id: "b", text: "Circles are bigger" }, { id: "c", text: "Lines are infinite" }, { id: "d", text: "Points can't hold a radius" } ], correctOptionId: "a", diagnoses: { b: "Size isn't the reason.", c: "Both the line AND the parallels are infinite.", d: "The radius works fine from a point." }, explanation: "The line's two faces give two rails; the point's single radius gives one closed loop.", hints: ["Two sides.", "One radius.", "Shape follows."] },
      // @q06
      { id: "U22L2-mcq-6", type: "mcq", category: "word", prompt: "A sprinkler wets a circle of radius 6 m. What is the locus of wetted ground?", options: [ { id: "a", text: "The sprinkler itself" }, { id: "b", text: "A circle radius 6 m around the sprinkler" }, { id: "c", text: "Two parallel lines" }, { id: "d", text: "A hexagon" } ], correctOptionId: "b", diagnoses: { a: "The sprinkler is the centre, not the wet area.", c: "Parallels would mean a line source.", d: "No hexagon here." }, explanation: "Fixed 6 m reach from the sprinkler point → the circle.", hints: ["Reach = radius.", "Around the sprout.", "Circle."] },
      // @q07
      { id: "U22L2-num-1", type: "numeric-input", category: "procedural", prompt: "Points 5 cm from point P: what is the radius?", answer: 5, tolerance: 0, explanation: "Radius = the fixed distance = 5 cm.", hints: ["Fixed distance.", "5 cm.", "5."] },
      // @q08
      { id: "U22L2-num-2", type: "numeric-input", category: "procedural", prompt: "Locus at distance 3 from line l: how many parallel lines?", answer: 2, tolerance: 0, explanation: "One on each side of the line.", hints: ["Two sides.", "2.", "2 lines."] },
      // @q09
      { id: "U22L2-num-3", type: "numeric-input", category: "conceptual", prompt: "A goat's rope is 8 m; the circle's radius is…", answer: 8, tolerance: 0, explanation: "Rope = radius = 8 m.", hints: ["Rope length.", "8.", "8 m."] },
      // @q10
      { id: "U22L2-frac-1", type: "fraction-input", category: "conceptual", prompt: "A point 1/2 cm from point P: write the radius as a fraction.", numerator: 1, denominator: 2, acceptEquivalent: true, explanation: "Radius = 1/2 cm.", hints: ["Fixed distance.", "1/2 cm.", "1/2."] },
      // @q11
      { id: "U22L2-tf-1", type: "true-false-justify", category: "conceptual", prompt: "The locus of points 3 cm from a point is a circle of radius 3 cm.", isTrue: true, explanation: "Fixed distance from a centre traces every direction — the circle.", hints: ["Fixed distance.", "Circle.", "True."] },
      // @q12
      { id: "U22L2-tf-2", type: "true-false-justify", category: "conceptual", prompt: "The locus of points 3 cm from a line is a single line 3 cm away.", isTrue: false, explanation: "Both sides count: two parallel lines, one above and one below.", hints: ["Two sides.", "2 lines.", "False."] },
      // @q13
      { id: "U22L2-order-1", type: "order-steps", category: "word", prompt: "Order the steps to describe the locus at radius r from point P.", sequence: ["Identify the target: the single point P", "Read the fixed distance r", "Sweep r in every direction", "Conclude: the circle centred at P, radius r"], diagnoses: { "Identify the target: the single point P@1": "Target first.", "Read the fixed distance r@0": "Then the distance.", "Conclude: the circle centred at P, radius r@0": "Conclude last." }, explanation: "Target, distance, sweep, name the circle.", hints: ["Target point.", "Distance r.", "Circle it."] },
      // @q14
      { id: "U22L2-drag-1", type: "drag-match", category: "conceptual", prompt: "Match each condition to its locus.", pairs: [ { source: "Fixed distance from a point", target: "Circle" }, { source: "Fixed distance from a line", target: "Two parallel lines" }, { source: "Equidistant from two points", target: "Perpendicular bisector" } ], diagnoses: { "Fixed distance from a point->Two parallel lines": "That's for a line target.", "Fixed distance from a line->Circle": "A line gives parallels, not a circle.", "Equidistant from two points->Circle": "Equidistant to two → the bisector." }, explanation: "The target shape decides the locus.", hints: ["Point → circle.", "Line → parallels.", "Two points → bisector."] },
      // @q15
      { id: "U22L2-graph-1", type: "graph-interact", category: "word", prompt: "A point 4 cm from P draws a circle radius 4. Set the slider to that radius (key: value).", challenge: "Set the slider to 4.", validate: { value: 4 }, tolerance: 0.01, explanation: "Radius = the fixed distance = 4.", hints: ["Fixed distance.", "4.", "4 cm."] }
    ],
    selection: { procedural: 2, conceptual: 2, word: 1 },
    passThreshold: 0.8,
  },
  commonMistakes: [
    { wrongPattern: "forgets the second parallel line", diagnosis: "A line has two sides — the locus is BOTH rails.", hint: "One 3 cm above, one 3 cm below." },
    { wrongPattern: "treats 'equidistant to two points' as a circle", diagnosis: "Equidistant to A and B lies on the perpendicular bisector.", hint: "Recall U22-L1's equal-radius crossings." },
    { wrongPattern: "says a single point", diagnosis: "A locus is the whole allowed set, not one answer.", hint: "Trace every spot that satisfies the rule." },
  ],
  recallTags: ["locus", "loci", "construction", "fixed-distance"],
  discovery: {
    challenges: [
      { instruction: "Drag the allowed point around a fixed target point and watch the trace.", observe: "A perfect circle at the fixed distance — the locus draws itself." },
      { instruction: "Switch the target to a line and slide the point.", observe: "The point rushes along two parallel rails, one on each side." },
    ],
    predict: { prompt: "The locus 3 cm from a point is…", options: [{ id: "a", text: "A circle radius 3 cm" }, { id: "b", text: "A line 3 cm long" }, { id: "c", text: "Two parallel lines" }], reveal: "A circle radius 3 cm — equal distance in every direction from a single centre wraps around to close the loop." },
    sayItYourWay: { prompt: "What is a locus?", phrasings: [{ id: "a", text: "The complete set of points meeting a condition", correct: true, why: "Every allowed spot, traced as one shape." }, { id: "b", text: "One particular point that works", correct: false, why: "A locus collects ALL of them, not one." }, { id: "c", text: "A type of circle", correct: false, why: "Circles are one example; loci come in many shapes." }], formalName: "a locus (plural: loci)" },
    stretch: "Flip, slide, and spin those same shapes: symmetry laws — reflections and rotations — govern which copies of a shape match. That's U22-L3.",
  },
};