import type { Lesson } from "../schema";

export const T3U21L4: Lesson = {
  // @meta
  id: "T3-U21-L4",
  tier: 3,
  unit: "Polygons & circles",
  title: "The Circle's Hidden Laws",
  prerequisites: ["T3-U20-L4","T3-U21-L2","T3-U21-L3"],
  estimatedMinutes: 12,
  hook: { question: "Fix two points on a circle, then slide a third point around the rim. The angle at the sliding point never changes — even though the triangle reshapes constantly. The circle locks angles: the hidden laws of geometry's most perfect shape.", type: "paradox" },
  intuitionBlocks: [{ widget: "circle-theorem-explorer", narrative: "Drag the point on the circumference while two others stay fixed — the angle at the moving point stays the same size. Then drag one end onto a diameter: when the two fixed points span a diameter, that angle snaps to exactly 90°." }],

  // @discovery
  formalBlocks: [{ definition: "Circle theorems: (1) angles in the same segment are equal — two points on the circumference create the same angle at any third point on the same arc; (2) the angle in a semicircle is 90° — when the two fixed points are opposite ends of a diameter, the angle at any other point on the circle is a right angle.", examples: ["Points A and B on the circle: ∠AXB is the same for any X on the same arc AB.", "AB a diameter: ∠AXB = 90° for every X on the circle."], pitfall: "These equal-angle laws hold only when all three points are ON the circumference — a point inside the circle changes the angle.", altExplanations: ["GAME: any third point on the same arc sees the same angle (same-segment rule) — three players on the rim aiming at the same two goals always measure the same shot angle. If the two goals are opposite ends of a diameter, that angle is a locked 90°.", "FOOD: a circular table — two people on the rim see the same slice angle from any seat on the same arc; sit diametrically opposite and every other seat sees your pair at exactly 90°. The points must all be ON the rim."] }],
  gutChecks: [{ prompt: "If AB is a diameter, what is ∠AXB for any X on the circle?", answer: "90° — the angle in a semicircle." }],
  quiz: {
    pool: [
      // @q01
      { id: "U21L4-mcq-1", type: "mcq", category: "procedural", prompt: "AB is a diameter. For any point X on the circle, ∠AXB = …", options: [ { id: "a", text: "90°" }, { id: "b", text: "180°" }, { id: "c", text: "45°" }, { id: "d", text: "60°" } ], correctOptionId: "a", diagnoses: { b: "180° would mean X lies on the line AB, not on the circle's arc.", c: "45° only happens for special chords.", d: "60° needs particular positions." }, explanation: "The angle in a semicircle is always 90°.", hints: ["Diameter end-to-end.", "Semicircle law.", "90°."] },
      // @q02
      { id: "U21L4-mcq-2", type: "mcq", category: "conceptual", prompt: "Why do the angles in the same segment stay equal as X slides?", options: [ { id: "a", text: "Both subtend the same chord AB — the circle geometry locks them" }, { id: "b", text: "The centre moves to keep them equal" }, { id: "c", text: "It's an optical illusion" }, { id: "d", text: "Only when the radius is 1" } ], correctOptionId: "a", diagnoses: { b: "The circle is fixed; the invariance comes from the chord.", c: "It persists and is measurable — not illusion.", d: "Radius size is irrelevant." }, explanation: "Every point on the arc sees the same chord AB under the same angle.", hints: ["Same chord.", "Same arc.", "Equal angles."] },
      // @q03
      { id: "U21L4-mcq-3", type: "mcq", category: "word", prompt: "A fan's two blades touch a circular hub at fixed spots A and B. You move the spoke tip X along the rim — the angle ∠AXB …", options: [ { id: "a", text: "stays the same while X stays on the same arc" }, { id: "b", text: "changes every time X moves" }, { id: "c", text: "always equals the radius" }, { id: "d", text: "doubles" } ], correctOptionId: "a", diagnoses: { b: "Sliding on the SAME arc keeps the subtended angle fixed.", c: "Angles aren't lengths.", d: "Nothing doubles in this law." }, explanation: "Angles in the same segment are equal — the spoke angle is locked.", hints: ["Same arc.", "Fixed angle.", "Stays equal."] },
      // @q04
      { id: "U21L4-mcq-4", type: "mcq", category: "procedural", prompt: "A(3,0), B(−3,0) on a circle centred at origin. X any point on the circle. ∠AXB = …", options: [ { id: "a", text: "90°" }, { id: "b", text: "180°" }, { id: "c", text: "45°" }, { id: "d", text: "Depends on X" } ], correctOptionId: "a", diagnoses: { b: "180 would be a straight line through the centre.", c: "45 appears only for special X.", d: "The semicircle law makes it fixed despite X." }, explanation: "A and B are opposite ends of a diameter → angle in semicircle is 90°.", hints: ["Diameter.", "Semicircle.", "90°."] },
      // @q05
      { id: "U21L4-mcq-5", type: "mcq", category: "conceptual", prompt: "Which statement captures 'same segment'?", options: [ { id: "a", text: "Points on the same side of chord AB give equal angles" }, { id: "b", text: "Points on opposite sides also give equal angles" }, { id: "c", text: "Only the endpoints count" }, { id: "d", text: "The centre must be on the chord" } ], correctOptionId: "a", diagnoses: { b: "Crossing to the other side gives the SUPPLEMENT, not the same angle.", c: "Any point on the arc counts, not just endpoints.", d: "The centre sits on the perpendicular bisector, not the chord." }, explanation: "Same arc side → equal subtended angles; opposite side gives the supplement.", hints: ["Same side of chord.", "Same arc.", "Equal."] },
      // @q06
      { id: "U21L4-mcq-6", type: "mcq", category: "word", prompt: "An archway: two feet A and B on the ground, top point X sliding along the circular arch. The engineer cares that ∠AXB stays 90° — that means AB is…", options: [ { id: "a", text: "a diameter of the arch's circle" }, { id: "b", text: "the radius" }, { id: "c", text: "a tangent" }, { id: "d", text: "half a diameter" } ], correctOptionId: "a", diagnoses: { b: "Radius is from centre to rim, not between feet.", c: "Tangents touch the circle at one point.", d: "Half a diameter is a radius." }, explanation: "Constantly 90° at the moving top implies A and B span a diameter.", hints: ["90° always.", "Diameter.", "AB is a diameter."] },
      // @q07
      { id: "U21L4-num-1", type: "numeric-input", category: "procedural", prompt: "AB a diameter, ∠AXB with X on the circle. Type the angle.", answer: 90, tolerance: 0, explanation: "Angle in a semicircle = 90°.", hints: ["Diameter.", "90.", "90°."] },
      // @q08
      { id: "U21L4-num-2", type: "numeric-input", category: "procedural", prompt: "∠AXB is the same as ∠AYB = 55°. Type ∠AXB.", answer: 55, tolerance: 0, explanation: "Same segment → equal angles.", hints: ["Same segment.", "55.", "55°."] },
      // @q09
      { id: "U21L4-num-3", type: "numeric-input", category: "conceptual", prompt: "X slides from one side of chord AB to the other. If the original angle was 50°, the angle on the other side is 180 − 50. Type it.", answer: 130, tolerance: 0, explanation: "Opposite segments supplement: 180 − 50 = 130°.", hints: ["Opposite side.", "Supplement.", "130°."] },
      // @q10
      { id: "U21L4-frac-1", type: "fraction-input", category: "conceptual", prompt: "An angle in a semicircle compared to a right angle — write it as a fraction of 90°.", numerator: 1, denominator: 1, acceptEquivalent: true, explanation: "90°/90° = 1 — exactly one right angle.", hints: ["90° total.", "1 whole right angle.", "1."] },
      // @q11
      { id: "U21L4-tf-1", type: "true-false-justify", category: "conceptual", prompt: "The angle in a semicircle is always 90°, wherever the point sits on the arc.", isTrue: true, explanation: "Any point on the circle sees a diameter under a right angle.", hints: ["Semicircle law.", "Always.", "True."] },
      // @q12
      { id: "U21L4-tf-2", type: "true-false-justify", category: "conceptual", prompt: "Angles in opposite segments of a chord are equal.", isTrue: false, explanation: "Opposite-segment angles are supplementary (sum 180°), not equal.", hints: ["Opposite sides.", "Supplement.", "False."] },
      // @q13
      { id: "U21L4-order-1", type: "order-steps", category: "word", prompt: "Order the steps to find ∠AXB when you know ∠AYB on the same arc.", sequence: ["Check both X and Y lie on the same arc AB", "Note both subtend chord AB", "Equal: ∠AXB = ∠AYB", "Copy the known angle"], diagnoses: { "Check both X and Y lie on the same arc AB@1": "Check the arc first.", "Note both subtend chord AB@0": "Note the shared chord.", "Copy the known angle@0": "Copy at the end." }, explanation: "Arc check, shared chord, equality, copy.", hints: ["Same arc.", "Same chord.", "Copy angle."] },
      // @q14
      { id: "U21L4-drag-1", type: "drag-match", category: "conceptual", prompt: "Match each setup to its result.", pairs: [ { source: "AB a diameter", target: "∠AXB = 90°" }, { source: "X, Y on same arc AB", target: "∠AXB = ∠AYB" }, { source: "X, Y on opposite arcs", target: "Angles sum to 180°" } ], diagnoses: { "AB a diameter->∠AXB = ∠AYB": "Diameter gives the 90° semicircle law.", "X, Y on same arc AB->Angles sum to 180°": "Same arc means equal.", "X, Y on opposite arcs->∠AXB = 90°": "Opposite arcs supplement." }, explanation: "Diameter → 90°; same arc → equal; opposite arcs → supplement.", hints: ["Diameter.", "Same arc.", "Opposite arcs."] },
      // @q15
      { id: "U21L4-graph-1", type: "graph-interact", category: "word", prompt: "∠AXB is 40°. X stays on the same arc. Set the slider to ∠AYB (key: value).", challenge: "Set the slider to 40.", validate: { value: 40 }, tolerance: 0.01, explanation: "Same-segment angles are equal: 40°.", hints: ["Same segment.", "Equal.", "40°."] }
    ],
    selection: { procedural: 2, conceptual: 2, word: 1 },
    passThreshold: 0.8,
  },
  commonMistakes: [
    { wrongPattern: "applies equal-angles across opposite arcs", diagnosis: "Same arc → equal; opposite arcs → supplementary.", hint: "Check which side of the chord X sits on." },
    { wrongPattern: "forgets the semicircle law needs a diameter", diagnosis: "90° only when the chord IS a diameter.", hint: "Does the chord pass through the centre?" },
    { wrongPattern: "uses endpoints as third points", diagnosis: "The equal-angle law needs X on the circumference, not the chord's endpoints.", hint: "X is the moving point on the rim." },
  ],
  recallTags: ["circle-theorems", "angle-in-semicircle", "same-segment", "chord"],
  discovery: {
    challenges: [
      { instruction: "Slide X along the circle with A, B fixed and watch ∠AXB.", observe: "The angle stays constant while X moves on the same arc." },
      { instruction: "Drag A until AB becomes a diameter.", observe: "∠AXB snaps to exactly 90° everywhere on the circle." },
    ],
    predict: { prompt: "AB is a diameter. ∠AXB for any X is…", options: [{ id: "a", text: "90°" }, { id: "b", text: "60°" }, { id: "c", text: "45°" }], reveal: "90° — the angle in a semicircle never wavers." },
    sayItYourWay: { prompt: "What do 'angles in the same segment' mean?", phrasings: [{ id: "a", text: "Points on the same side of a chord see it under equal angles", correct: true, why: "The chord subtends the same angle across that whole arc." }, { id: "b", text: "Any two angles inside the circle are equal", correct: false, why: "Only same-arc points share the equality." }, { id: "c", text: "Angles at the centre", correct: false, why: "Central angles differ from circumferential ones." }], formalName: "angles in the same segment, and the angle in a semicircle" },
    stretch: "Circles hide one more power: how long is the rim itself? Rolling a wheel shows the circumference is π × diameter — and π lives at the centre of area too. That's U23-L3.",
  },
};
