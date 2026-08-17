import type { Lesson } from "../schema";

export const T3U22L1: Lesson = {
  // @meta
  id: "T3-U22-L1",
  tier: 3,
  unit: "Construction & symmetry",
  title: "Compass Logic",
  prerequisites: ["T3-U20-L2","T3-U21-L4"],
  estimatedMinutes: 12,
  hook: { question: "A compass draws circles — but two overlapping compass arcs can 'lock' a perfect midpoint, or split an angle exactly in half. Ancient builders used nothing else to construct right angles. The arcs work because every point on a circle is equidistant from its centre.", type: "real-world" },
  intuitionBlocks: [{ widget: "geometry-playground", narrative: "Draw two circles with equal radii from the two endpoints of a segment. Their crossings are exactly equidistant from both ends — the line through them bisects the segment. Same logic, an angle's sides as 'centres', bisects the angle." }],

  // @discovery
  formalBlocks: [{ definition: "Perpendicular bisector of a segment: two equal-radius circles from the endpoints cross at two points; each crossing is equidistant from both ends, so the line through the crossings cuts the segment in half at 90°. Angle bisector: draw an arc from the vertex, then equal arcs from where it meets the sides — their crossing lies on the bisector. Both rely on ONE property: a compass makes points at a fixed distance from a centre.", examples: ["Bisect AB = 6 cm: draw circles radius 5 cm from A and B; crossings meet at the perpendicular bisector, splitting AB into 3 cm and 3 cm.", "Bisect a 74° angle: the bisector makes two 37° angles."], pitfall: "A single arc from each end isn't enough — you need BOTH crossings (or careful equal radii) so the constructed line is uniquely defined and truly perpendicular.", altExplanations: ["GAME: compass logic is radius-locked crafting — from each endpoint, draw equal-radius arcs; their crossings are the points exactly as far from both ends, so the line through them cuts the segment in half at 90°. The circles do the measuring for you.", "FOOD: a compass is a fixed-reach string — a point at radius r from A AND radius r from B is the crossing of two equal circles; that crossing is equidistant from A and B, which is exactly what the perpendicular bisector means."] }],
  gutChecks: [{ prompt: "Why is the perpendicular-bisector crossing equidistant from A and B?", answer: "It lies on a circle centred at A AND a circle centred at B with equal radii — so AX = BX." }],
  quiz: {
    pool: [
      // @q01
      { id: "U22L1-mcq-1", type: "mcq", category: "procedural", prompt: "To bisect a segment AB, you draw equal circles from A and B. Where do their crossings meet?", options: [ { id: "a", text: "On the perpendicular bisector of AB" }, { id: "b", text: "On the segment AB itself" }, { id: "c", text: "At the centre of the circles only" }, { id: "d", text: "Nowhere in particular" } ], correctOptionId: "a", diagnoses: { b: "The crossings are ABOVE and BELOW the segment, not on it.", c: "The circles share no single 'centre' here.", d: "The two crossings pin the bisector exactly." }, explanation: "Each crossing is equidistant from A and B, so both lie on the perpendicular bisector.", hints: ["Equal distance from ends.", "The bisector.", "Crossings → bisector line."] },
      // @q02
      { id: "U22L1-mcq-2", type: "mcq", category: "conceptual", prompt: "Why does a compass arc work for construction?", options: [ { id: "a", text: "It draws straight lines perfectly" }, { id: "b", text: "Every point on it is the same distance from the centre" }, { id: "c", text: "It measures angles automatically" }, { id: "d", text: "It shrinks the drawing" } ], correctOptionId: "b", diagnoses: { a: "Straight lines come from rulers; the compass makes circles.", c: "Angles are constructed, not measured, by compass logic.", d: "Size isn't the point of the arcs." }, explanation: "A fixed radius guarantees equal distances — the core of every construction.", hints: ["Fixed distance.", "Equidistant points.", "Why the arcs work."] },
      // @q03
      { id: "U22L1-mcq-3", type: "mcq", category: "word", prompt: "A builder bisects a 10 m rafter from a blueprint: the perpendicular bisector cuts it into…", options: [ { id: "a", text: "6 m and 4 m" }, { id: "b", text: "10 m and 0 m" }, { id: "c", text: "5 m and 5 m" }, { id: "d", text: "Any two pieces" } ], correctOptionId: "c", diagnoses: { b: "That wouldn't bisect at all.", a: "The bisector splits it exactly in half.", d: "Bisect means precisely two equal halves." }, explanation: "Bisect = divide into two equal parts: 10/2 = 5 m each.", hints: ["Bisect = half.", "10 ÷ 2.", "5 m and 5 m."] },
      // @q04
      { id: "U22L1-mcq-4", type: "mcq", category: "procedural", prompt: "An angle bisector of 74° creates two angles of…", options: [ { id: "a", text: "180°" }, { id: "b", text: "74°" }, { id: "c", text: "148°" }, { id: "d", text: "37°" } ], correctOptionId: "d", diagnoses: { b: "That's the original angle, not each half.", c: "148° is the double, not the halves.", a: "180° is a straight line." }, explanation: "74 ÷ 2 = 37° per half.", hints: ["Bisect = halve.", "74 ÷ 2.", "37°."] },
      // @q05
      { id: "U22L1-mcq-5", type: "mcq", category: "conceptual", prompt: "What does the perpendicular bisector do to AB?", options: [ { id: "a", text: "Cuts it in half at a right angle" }, { id: "b", text: "Extends it twice as long" }, { id: "c", text: "Turns it into an angle" }, { id: "d", text: "Finds its centre circle" } ], correctOptionId: "a", diagnoses: { b: "It cuts, never extends.", c: "It stays a segment, just bisected.", d: "The 'centre' idea applies to the arcs, not the segment." }, explanation: "Perpendicular (90°) + bisector (halves) = midpoint at a right angle.", hints: ["Perpendicular = 90°.", "Bisector = halves.", "Both."] },
      // @q06
      { id: "U22L1-mcq-6", type: "mcq", category: "word", prompt: "Fence posts at A and B; you need the point exactly midway but can't measure. The compass method gives…", options: [ { id: "a", text: "A completely random point" }, { id: "b", text: "The perpendicular bisector crossing AB at the midpoint" }, { id: "c", text: "The longer half only" }, { id: "d", text: "The centre of the earth" } ], correctOptionId: "b", diagnoses: { a: "The construction is exact, not random.", c: "Both halves are equal by construction.", d: "Nothing about the earth is needed." }, explanation: "The constructed crossing line meets AB at its exact midpoint.", hints: ["Equal radii.", "Midpoint.", "Exact."] },
      // @q07
      { id: "U22L1-num-1", type: "numeric-input", category: "procedural", prompt: "Bisect a 10 cm segment. Type each half's length.", answer: 5, tolerance: 0, explanation: "10 ÷ 2 = 5 cm each.", hints: ["Bisect = half.", "10 ÷ 2.", "5."] },
      // @q08
      { id: "U22L1-num-2", type: "numeric-input", category: "procedural", prompt: "Bisect a 96° angle. Type each angle.", answer: 48, tolerance: 0, explanation: "96 ÷ 2 = 48° each.", hints: ["Halve the angle.", "96 ÷ 2.", "48."] },
      // @q09
      { id: "U22L1-num-3", type: "numeric-input", category: "conceptual", prompt: "Perpendicular bisector of AB makes a 90° angle. Type it.", answer: 90, tolerance: 0, explanation: "Perpendicular = 90°.", hints: ["Perpendicular.", "90.", "90°."] },
      // @q10
      { id: "U22L1-frac-1", type: "fraction-input", category: "conceptual", prompt: "The angle bisector divides an angle into how many equal parts? Write as a fraction.", numerator: 1, denominator: 2, acceptEquivalent: true, explanation: "Bisector = two equal halves.", hints: ["Bisect = two.", "1/2 each part.", "1/2."] },
      // @q11
      { id: "U22L1-tf-1", type: "true-false-justify", category: "conceptual", prompt: "The perpendicular bisector crosses the segment at right angles at its midpoint.", isTrue: true, explanation: "Perpendicular = 90°, bisector = midpoint — both features at once.", hints: ["Perpendicular.", "Bisector.", "True."] },
      // @q12
      { id: "U22L1-tf-2", type: "true-false-justify", category: "conceptual", prompt: "The angle bisector splits the angle into three equal parts.", isTrue: false, explanation: "Bisect means TWO equal parts.", hints: ["Bisect = two.", "Not three.", "False."] },
      // @q13
      { id: "U22L1-order-1", type: "order-steps", category: "word", prompt: "Order the steps to construct the perpendicular bisector of AB.", sequence: ["Draw a circle centred at A", "Draw an equal circle centred at B", "Mark the two crossings", "Draw the line through both crossings"], diagnoses: { "Draw a circle centred at A@1": "First circle first.", "Draw an equal circle centred at B@0": "Then the equal second circle.", "Draw the line through both crossings@0": "Line last." }, explanation: "Equal circles, crossings, bisector line.", hints: ["Circle at A.", "Equal circle at B.", "Crossings → line."] },
      // @q14
      { id: "U22L1-drag-1", type: "drag-match", category: "conceptual", prompt: "Match each construction to its result.", pairs: [ { source: "Equal circles at A and B", target: "Perpendicular bisector" }, { source: "Arc from vertex, equal arcs on sides", target: "Angle bisector" }, { source: "Bisect a 6 cm segment", target: "3 cm and 3 cm" } ], diagnoses: { "Equal circles at A and B->Angle bisector": "Those circles give the segment bisector.", "Arc from vertex, equal arcs on sides->Perpendicular bisector": "That's the angle bisector recipe.", "Bisect a 6 cm segment->Perpendicular bisector": "6 ÷ 2 = 3 each." }, explanation: "Each recipe produces its named bisector.", hints: ["Equal circles.", "Vertex arcs.", "Halves."] },
      // @q15
      { id: "U22L1-graph-1", type: "graph-interact", category: "word", prompt: "Perpendicular bisector of a 14 cm segment. Set the slider to each half (key: value).", challenge: "Set the slider to 7.", validate: { value: 7 }, tolerance: 0.01, explanation: "14 ÷ 2 = 7 cm each.", hints: ["14 ÷ 2.", "7.", "7 cm."] }
    ],
    selection: { procedural: 2, conceptual: 2, word: 1 },
    passThreshold: 0.8,
  },
  commonMistakes: [
    { wrongPattern: "draws one circle only", diagnosis: "You need equal circles from BOTH ends to pin two crossings.", hint: "Second circle centred at the other end." },
    { wrongPattern: "confuses bisector with trisector", diagnosis: "Bisect = two equal parts, not three.", hint: "'Bi-' = two." },
    { wrongPattern: "forgets perpendicular is 90°", diagnosis: "Perpendicular means the crossing is at a right angle.", hint: "Right angle at the midpoint." },
  ],
  recallTags: ["construction", "perpendicular-bisector", "angle-bisector", "compass"],
  discovery: {
    challenges: [
      { instruction: "Draw equal circles from A and B and mark crossings.", observe: "Both crossings sit on the perpendicular bisector — the midpoint is guaranteed." },
      { instruction: "Bisect a 74° angle with vertex arcs.", observe: "The constructed line makes two 37° halves." },
    ],
    predict: { prompt: "Equal circles from A and B cross at two points. The line through them…", options: [{ id: "a", text: "Is the perpendicular bisector of AB" }, { id: "b", text: "Is a random line" }, { id: "c", text: "Only touches one point" }], reveal: "The perpendicular bisector — each crossing is equidistant from A and B, so the line cuts AB in half at 90°." },
    sayItYourWay: { prompt: "What is a 'perpendicular bisector'?", phrasings: [{ id: "a", text: "A line that cuts a segment in half at a right angle", correct: true, why: "Perpendicular (90°) + bisector (midpoint)." }, { id: "b", text: "A line that extends the segment", correct: false, why: "It crosses the midpoint; it doesn't extend." }, { id: "c", text: "An angle split into two halves", correct: false, why: "That's an angle bisector." }], formalName: "the perpendicular bisector of a segment" },
    stretch: "The same 'fixed distance from a centre' logic traces whole LOCI: a point that must stay 3 cm from a line sweeps out a pair of parallel paths. That's U22-L2.",
  },
};
