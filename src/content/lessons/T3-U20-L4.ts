import type { Lesson } from "../schema";

export const T3U20L4: Lesson = {
  // @meta
  id: "T3-U20-L4",
  tier: 3,
  unit: "Angle reasoning",
  title: "Every Triangle Holds 180°",
  prerequisites: ["T2-U19-L3","T3-U20-L2","T3-U20-L3"],
  estimatedMinutes: 12,
  hook: { question: "Draw any triangle — skinny, fat, giant, tiny — and tear the corners off. Laid flat they form a straight line: 180°, every single time. The triangle's three corners refuse to be anything else.", type: "puzzle" },
  intuitionBlocks: [{ widget: "geometry-playground", narrative: "Drag the triangle's corners and watch the three angles. The sum stays locked at 180° no matter how you stretch it. Tear the corners in your head and lay them end to end — a straight line." }],

  // @discovery
  formalBlocks: [{ definition: "The interior angles of ANY triangle add to 180°. Proof by parallel line: draw a line through one vertex parallel to the opposite side — alternate angles copy two corners to the straight line, so the three corners tile 180°. Exterior angle = the sum of the two opposite interior angles.", examples: ["Angles 40°, 60°, 80°: 40 + 60 + 80 = 180 ✓.", "Two angles 55° and 65°: third = 180 − 120 = 60°."], pitfall: "The 180° is the INTERIOR sum. An exterior angle is NOT counted in the 180 — it equals the two remote interior angles added together.", altExplanations: ["GAME: a triangle's three corners, when teleported to one straight line by a parallel slide, tile exactly 180°. The exterior angle is the leftover turn — it equals the sum of the two far interior corners, never part of the 180.", "FOOD: tearing three corners off a paper triangle and lining them on a straight table edge shows them filling 180° exactly. An exterior angle is the outside spare turn, equal to the sum of the two inner opposite angles."] }],
  gutChecks: [{ prompt: "A triangle has angles 70° and 50°. Find the third.", answer: "180 − 70 − 50 = 60°." }],
  quiz: {
    pool: [
      // @q01
      { id: "U20L4-mcq-1", type: "mcq", category: "procedural", prompt: "Angles 40° and 60° in a triangle. The third is…", options: [ { id: "a", text: "80°" }, { id: "b", text: "100°" }, { id: "c", text: "60°" }, { id: "d", text: "20°" } ], correctOptionId: "a", diagnoses: { b: "100 leaves a 20 remainder, not 180 − 100 = 80.", c: "60 is one of the given angles.", d: "20 is 60 − 40, unrelated." }, explanation: "180 − 40 − 60 = 80°.", hints: ["180 total.", "180 − 100.", "180 − 40 − 60 = 80°."] },
      // @q02
      { id: "U20L4-mcq-2", type: "mcq", category: "conceptual", prompt: "Why does ANY triangle's angle sum hit exactly 180°?", options: [ { id: "a", text: "Triangles are half of a square" }, { id: "b", text: "Alternate angles move two corners onto one straight line" }, { id: "c", text: "It's a coincidence for small triangles" }, { id: "d", text: "Vertically opposite angles force it" } ], correctOptionId: "b", diagnoses: { a: "Not every triangle is half a square.", c: "It holds for ALL sizes — proven, not luck.", d: "Vertically opposite matters at crossings, not here." }, explanation: "A parallel line through a vertex copies two corners via alternate angles onto a 180° straight line.", hints: ["Parallel through vertex.", "Alternate angles.", "Straight line = 180°."] },
      // @q03
      { id: "U20L4-mcq-3", type: "mcq", category: "word", prompt: "A roof truss triangle has 35° and 85°. Find the third corner.", options: [ { id: "a", text: "70°" }, { id: "b", text: "50°" }, { id: "c", text: "60°" }, { id: "d", text: "145°" } ], correctOptionId: "c", diagnoses: { b: "50 = 85 − 35 — use 180 − sum.", a: "70 is the exterior, not the third interior.", d: "145 is 180 − 35, forgetting the 85." }, explanation: "180 − 35 − 85 = 60°.", hints: ["180 − 120.", "60°.", "180 − 35 − 85 = 60°."] },
      // @q04
      { id: "U20L4-mcq-4", type: "mcq", category: "procedural", prompt: "A triangle's exterior angle is 120°. The two opposite interiors are…", options: [ { id: "a", text: "Both 60° always" }, { id: "b", text: "60° and 60°" }, { id: "c", text: "120° and 60°" }, { id: "d", text: "Any pair summing to 120°" } ], correctOptionId: "d", diagnoses: { b: "60+60 sums to 120 but isn't forced.", c: "One of them must be less; only the sum is fixed.", a: "Only the SUM is fixed at 120°." }, explanation: "Exterior = sum of the two remote interiors; many pairs work.", hints: ["Exterior = remote sum.", "Pair sums to 120°.", "Exterior = sum of the two remote interiors; many pairs work."] },
      // @q05
      { id: "U20L4-mcq-5", type: "mcq", category: "conceptual", prompt: "Why can't a triangle have angles 90°, 90°, and 0°?", options: [ { id: "a", text: "Two right angles already total 180°, leaving nothing" }, { id: "b", text: "Angles must be positive whole numbers" }, { id: "c", text: "Triangles can't contain 90° angles" }, { id: "d", text: "0° angles aren't allowed in shapes" } ], correctOptionId: "a", diagnoses: { b: "Fractions and decimals are fine — the sum is the constraint.", c: "Right triangles exist everywhere.", d: "The real reason is the sum rule." }, explanation: "90 + 90 = 180 already; a third angle would need 0, which collapses the triangle.", hints: ["90 + 90 = 180.", "Nothing left.", "90 + 90 = 180 already; a third angle would need 0, which collapses the triangle."] },
      // @q06
      { id: "U20L4-mcq-6", type: "mcq", category: "word", prompt: "A kite's tail forms a triangle with angles 50° and 70°. The third angle is…", options: [ { id: "a", text: "80°" }, { id: "b", text: "60°" }, { id: "c", text: "90°" }, { id: "d", text: "130°" } ], correctOptionId: "b", diagnoses: { a: "80 = 50 + 30, not from the sum rule.", c: "90 is only for right triangles.", d: "130 is 180 − 50, missing the 70." }, explanation: "180 − 50 − 70 = 60°.", hints: ["180 − 120.", "60°.", "180 − 50 − 70 = 60°."] },
      // @q07
      { id: "U20L4-num-1", type: "numeric-input", category: "procedural", prompt: "Angles 70° and 50°. Type the third angle.", answer: 60, tolerance: 0, explanation: "180 − 70 − 50 = 60°.", hints: ["180 − 120.", "60.", "180 − 70 − 50 = 60°."] },
      // @q08
      { id: "U20L4-num-2", type: "numeric-input", category: "procedural", prompt: "An exterior angle is 100°. Type the sum of its remote interiors.", answer: 100, tolerance: 0, explanation: "Exterior = sum of the two remote interiors.", hints: ["Remote sum.", "100.", "Exterior = sum of the two remote interiors."] },
      // @q09
      { id: "U20L4-num-3", type: "numeric-input", category: "conceptual", prompt: "Two angles are 90° and 45°. Type the third.", answer: 45, tolerance: 0, explanation: "180 − 90 − 45 = 45°.", hints: ["180 − 135.", "45.", "180 − 90 − 45 = 45°."] },
      // @q10
      { id: "U20L4-frac-1", type: "fraction-input", category: "conceptual", prompt: "A triangle's angles are equal. Write each angle as a fraction of 180°.", numerator: 1, denominator: 3, acceptEquivalent: true, explanation: "180 ÷ 3 = 60° = 1/3 of 180°.", hints: ["180 ÷ 3.", "1/3.", "180 ÷ 3 = 60° = 1/3 of 180°."] },
      // @q11
      { id: "U20L4-tf-1", type: "true-false-justify", category: "conceptual", prompt: "A triangle can have two 90° angles.", isTrue: false, explanation: "Two 90° already sum to 180°, leaving nothing for the third.", hints: ["90 + 90 = 180.", "Nothing left.", "Two 90° already sum to 180°, leaving nothing for the third."] },
      // @q12
      { id: "U20L4-tf-2", type: "true-false-justify", category: "conceptual", prompt: "An exterior angle equals the sum of the two opposite interior angles.", isTrue: true, explanation: "Each exterior shares a straight line with its interior neighbour; the rest follows from 180°.", hints: ["Straight line.", "Remote interiors.", "Each exterior shares a straight line with its interior neighbour; the rest follows from 180°."] },
      // @q13
      { id: "U20L4-order-1", type: "order-steps", category: "word", prompt: "Order the steps to find the third angle given 30° and 100°.", sequence: ["Write: 30 + 100 + x = 180", "Add the knowns: 130", "Subtract: x = 180 − 130", "State: x = 50°"], diagnoses: { "Write: 30 + 100 + x = 180@1": "Write the equation first.", "Add the knowns: 130@0": "Add knowns before subtracting.", "State: x = 50°@0": "State after computing." }, explanation: "Equation, add, subtract, state.", hints: ["180 total.", "Add knowns.", "Equation, add, subtract, state."] },
      // @q14
      { id: "U20L4-drag-1", type: "drag-match", category: "conceptual", prompt: "Match each triangle to its missing angle.", pairs: [ { source: "Angles 80°, 60°", target: "Third = 40°" }, { source: "Angles 45°, 45°", target: "Third = 90°" }, { source: "Angles 30°, 110°", target: "Third = 40° too" } ], diagnoses: { "Angles 80°, 60°->Third = 90°": "180 − 140 = 40°, not 90°.", "Angles 45°, 45°->Third = 40°": "180 − 90 = 90°, not 40°.", "Angles 30°, 110°->Third = 90°": "180 − 140 = 40° as well." }, explanation: "Subtract both knowns from 180°.", hints: ["180 − sum.", "Check each.", "Subtract both knowns from 180°."] },
      // @q15
      { id: "U20L4-graph-1", type: "graph-interact", category: "word", prompt: "A triangle has angles 65° and 75°. Set the slider to the third angle (key: value).", challenge: "A triangle has angles 65° and 75°. — adjust the values below to match the condition.", validate: { value: 40 }, tolerance: 0.01, explanation: "180 − 65 − 75 = 40°.", hints: ["180 − 140.", "40.", "180 − 65 − 75 = 40°."] }
    ],
    selection: { procedural: 2, conceptual: 2, word: 1 },
    passThreshold: 0.8,
  },
  commonMistakes: [
    { wrongPattern: "assumes right angle", diagnosis: "Only right triangles have a 90° corner — don't invent one.", hint: "Use 180°, not 90°." },
    { wrongPattern: "counts exterior in the sum", diagnosis: "Exterior angles sit outside; the 180° is for the three interiors.", hint: "Interior only." },
    { wrongPattern: "forgets the exterior rule", diagnosis: "Exterior = sum of the two OPPOSITE interior, not the adjacent one.", hint: "Two remote corners." },
  ],
  recallTags: ["triangle", "angle-sum", "180", "exterior-angle"],
  discovery: {
    challenges: [
      { instruction: "Drag the corners wildly and read the three angles.", observe: "Whatever the shape, the three angle readings sum to 180°." },
      { instruction: "Extend one side and read the exterior angle.", observe: "It equals the two opposite interior angles added." },
    ],
    predict: { prompt: "Angles 60° and 80° in a triangle — the third is…", options: [{ id: "a", text: "40°" }, { id: "b", text: "120°" }, { id: "c", text: "20°" }], reveal: "40° — 180 − 60 − 80. The triangle's corners always balance to exactly 180°." },
    sayItYourWay: { prompt: "What does 'triangle = 180°' mean?", phrasings: [{ id: "a", text: "The three interior corners always add to 180°", correct: true, why: "Tear them off and they form a straight line." }, { id: "b", text: "Every angle in a triangle is 180°", correct: false, why: "That would need three lines to overlap — impossible." }, { id: "c", text: "Triangles always contain a right angle", correct: false, why: "Right angles are one special family only." }], formalName: "the angle sum of a triangle (180°) and the exterior angle rule" },
    stretch: "Chop a quadrilateral along a diagonal and you get TWO triangles — 2 × 180 = 360°. Every polygon's angle sum hides in its triangles. That's U21-L1.",
  },
};