import type { Lesson } from "../schema";

export const T3U20L2: Lesson = {
  // @meta
  id: "T3-U20-L2",
  tier: 3,
  unit: "Angle reasoning",
  title: "When Lines Cross",
  prerequisites: ["T2-U19-L3","T3-U20-L1"],
  estimatedMinutes: 12,
  hook: { question: "Two roads cross in an X. The angle on the upper-left opens to exactly the same size as the angle on the lower-right — drag the roads all around and the twins stay locked. It looks like luck, but it's geometry refusing to budge.", type: "puzzle" },
  intuitionBlocks: [{ widget: "geometry-playground", narrative: "Drag the two crossing lines and watch the four angles. The opposite pairs always match: swing one line and its twin swings with it. Turn the X all ways — the equal pairs never break." }],

  // @discovery
  formalBlocks: [{ definition: "When two lines cross they make four angles: two pairs of vertically opposite angles (equal), and adjacent angles that add to 180° on a straight line. If one angle is a°, its opposite is a°, and each neighbour is 180° − a°.", examples: ["Angle 40° crossing → opposite is 40°, neighbours are 140° each.", "One angle 110° → the other three are 70°, 110°, 70°."], pitfall: "Vertically opposite means the angles ACROSS the X, not side by side. Side-by-side angles on the same line add to 180° — mixing the two gives wrong answers fast.", altExplanations: ["GAME: two crossing laser beams make an X — opposite angles across the X are equal (vertically opposite), neighbours along the same beam add to 180. A 40° crossing gives 40°, 140°, 40°, 140° around the X.", "FOOD: two crossed skewers — the angle facing across the crossing equals its mirror; the side-by-side angles on one skewer are a straight line, so they add to 180. Never mix 'across' (equal) with 'beside' (adds to 180)."] }],
  gutChecks: [{ prompt: "Two lines cross making a 65° angle. What is its vertically opposite angle?", answer: "65° (opposite angles are equal)." }],
  quiz: {
    pool: [
      // @q01
      { id: "U20L2-mcq-1", type: "mcq", category: "procedural", prompt: "Two lines cross forming a 40° angle. Its vertically opposite angle is…", options: [ { id: "a", text: "40°" }, { id: "b", text: "140°" }, { id: "c", text: "20°" }, { id: "d", text: "90°" } ], correctOptionId: "a", diagnoses: { b: "140° is the ADJACENT angle on the same line, not the opposite.", c: "No halving rule exists here.", d: "90 is for right angles only." }, explanation: "Vertically opposite angles are equal: 40°.", hints: ["Across the X.", "Equal.", "Vertically opposite angles are equal: 40°."] },
      // @q02
      { id: "U20L2-mcq-2", type: "mcq", category: "conceptual", prompt: "Why must vertically opposite angles be equal?", options: [ { id: "a", text: "Because lines are straight" }, { id: "b", text: "Both are 180° minus the same neighbouring angle" }, { id: "c", text: "They always look the same size" }, { id: "d", text: "It's just a rule to memorize" } ], correctOptionId: "b", diagnoses: { a: "Straight lines give 180° adds, but the equality needs a reason.", c: "Looking similar isn't a proof.", d: "It's derivable — and that's the power." }, explanation: "Opposite angle = 180° − neighbour = its twin; the shared neighbour forces equality.", hints: ["Same neighbour.", "180 − same.", "Opposite angle = 180° − neighbour = its twin; the shared neighbour forces equality."] },
      // @q03
      { id: "U20L2-mcq-3", type: "mcq", category: "word", prompt: "Two roads cross, making a 35° corner. The opposite corner is…", options: [ { id: "a", text: "70°" }, { id: "b", text: "145°" }, { id: "c", text: "35°" }, { id: "d", text: "55°" } ], correctOptionId: "c", diagnoses: { b: "145° is the neighbouring corner on the same road.", a: "Opposite angles are equal, not double.", d: "55 is 90 − 35, not the opposite." }, explanation: "Road-crossing corners are vertically opposite: 35°.", hints: ["Opposite corner.", "Equal.", "Road-crossing corners are vertically opposite: 35°."] },
      // @q04
      { id: "U20L2-mcq-4", type: "mcq", category: "procedural", prompt: "One angle at a crossing is 110°. What are the other three?", options: [ { id: "a", text: "180°, 110°, 70°" }, { id: "b", text: "110°, 110°, 110°" }, { id: "c", text: "70°, 70°, 70°" }, { id: "d", text: "70°, 110°, 70°" } ], correctOptionId: "d", diagnoses: { b: "Only one angle can be 110° (its twin); the neighbours are 70°.", c: "The opposites are 110° and 110° — not all the same.", a: "180° is the line total, not an angle in the X." }, explanation: "Opposite = 110°; neighbours = 180 − 110 = 70° each.", hints: ["Opposite = 110°.", "Neighbours = 70°.", "Opposite = 110°; neighbours = 180 − 110 = 70° each."] },
      // @q05
      { id: "U20L2-mcq-5", type: "mcq", category: "conceptual", prompt: "Which angles are 'vertically opposite'?", options: [ { id: "a", text: "The pair across the X — the upper-left and lower-right" }, { id: "b", text: "The pair side by side on one line" }, { id: "c", text: "Any two angles at the crossing" }, { id: "d", text: "The two largest angles" } ], correctOptionId: "a", diagnoses: { b: "Side-by-side add to 180°; they're not the equal pair.", c: "Only the opposite pairs are equal.", d: "Oppositeness is positional, not about size." }, explanation: "Vertically opposite = across the X from each other.", hints: ["Across the X.", "Upper-left & lower-right.", "Opposite pairs."] },
      // @q06
      { id: "U20L2-mcq-6", type: "mcq", category: "word", prompt: "Scissors' blades cross: one angle measures 75°. The opposite angle is…", options: [ { id: "a", text: "105°" }, { id: "b", text: "75°" }, { id: "c", text: "15°" }, { id: "d", text: "90°" } ], correctOptionId: "b", diagnoses: { a: "105° is the adjacent angle on the straight edge.", c: "15 is 90 − 75, unrelated here.", d: "Scissors don't guarantee right angles." }, explanation: "The scissors' opposite blades make vertically opposite angles: 75°.", hints: ["Opposite blades.", "Equal.", "The scissors' opposite blades make vertically opposite angles: 75°."] },
      // @q07
      { id: "U20L2-num-1", type: "numeric-input", category: "procedural", prompt: "A crossing has one angle 65°. Type its vertically opposite angle.", answer: 65, tolerance: 0, explanation: "Opposite angles are equal: 65°.", hints: ["Opposite.", "Equal.", "Opposite angles are equal: 65°."] },
      // @q08
      { id: "U20L2-num-2", type: "numeric-input", category: "procedural", prompt: "A crossing has one angle 125°. Type each adjacent angle.", answer: 55, tolerance: 0, explanation: "Adjacent on a straight line: 180 − 125 = 55°.", hints: ["Straight line = 180°.", "180 − 125.", "Adjacent on a straight line: 180 − 125 = 55°."] },
      // @q09
      { id: "U20L2-num-3", type: "numeric-input", category: "conceptual", prompt: "One angle is 80°, its neighbour is x. Type x.", answer: 100, tolerance: 0, explanation: "x = 180 − 80 = 100°.", hints: ["Neighbour on a line.", "180 − 80.", "x = 180 − 80 = 100°."] },
      // @q10
      { id: "U20L2-frac-1", type: "fraction-input", category: "conceptual", prompt: "Crossing angles are 90° and 90°. Write 90 as a fraction of 180.", numerator: 1, denominator: 2, acceptEquivalent: true, explanation: "90/180 = 1/2 — a right angle is half a straight line.", hints: ["90 ÷ 180.", "1/2.", "90/180 = 1/2 — a right angle is half a straight line."] },
      // @q11
      { id: "U20L2-tf-1", type: "true-false-justify", category: "conceptual", prompt: "Vertically opposite angles are always equal.", isTrue: true, explanation: "They share the same neighbour, so both equal 180° minus that neighbour.", hints: ["Shared neighbour.", "Equal.", "They share the same neighbour, so both equal 180° minus that neighbour."] },
      // @q12
      { id: "U20L2-tf-2", type: "true-false-justify", category: "conceptual", prompt: "Adjacent angles at a crossing always add to 90°.", isTrue: false, explanation: "Adjacent angles lie on a straight line and add to 180°.", hints: ["Same line.", "180°.", "Adjacent angles lie on a straight line and add to 180°."] },
      // @q13
      { id: "U20L2-order-1", type: "order-steps", category: "word", prompt: "Order the steps to find all angles at a crossing with one angle 40°.", sequence: ["Note the opposite: 40°", "Find a neighbour: 180 − 40 = 140°", "The other neighbour is also 140°", "Check: 40 + 140 + 40 + 140 = 360°"], diagnoses: { "Note the opposite: 40°@1": "Opposite first.", "Find a neighbour: 180 − 40 = 140°@0": "Then the neighbour.", "Check: 40 + 140 + 40 + 140 = 360°@0": "Check at the end." }, explanation: "Opposite, neighbours, verify the full turn.", hints: ["Opposite.", "Neighbour.", "Opposite, neighbours, verify the full turn."] },
      // @q14
      { id: "U20L2-drag-1", type: "drag-match", category: "conceptual", prompt: "Match each angle pair at a crossing with one angle 50°.", pairs: [ { source: "Vertically opposite to 50°", target: "50°" }, { source: "Adjacent to 50°", target: "130°" }, { source: "Both neighbours together", target: "260°" } ], diagnoses: { "Vertically opposite to 50°->130°": "Opposite is EQUAL: 50°.", "Adjacent to 50°->50°": "Adjacent adds to 180: 130°.", "Both neighbours together->50°": "130 + 130 = 260°." }, explanation: "Opposite = 50°, neighbours = 130° each.", hints: ["Opposite equal.", "Neighbour 130°.", "Opposite = 50°, neighbours = 130° each."] },
      // @q15
      { id: "U20L2-graph-1", type: "graph-interact", category: "word", prompt: "A crossing has opposite angles 60° and 60°. Set the slider to each adjacent angle (key: value).", challenge: "A crossing has opposite angles 60° and 60°. — adjust the values below to match the condition.", validate: { value: 120 }, tolerance: 0.01, explanation: "180 − 60 = 120° for each adjacent angle.", hints: ["180 − 60.", "120.", "180 − 60 = 120° for each adjacent angle."] }
    ],
    selection: { procedural: 2, conceptual: 2, word: 1 },
    passThreshold: 0.8,
  },
  commonMistakes: [
    { wrongPattern: "confuses opposite with adjacent", diagnosis: "Opposite = equal across the X; adjacent = on the same line, summing to 180°.", hint: "Trace across the crossing for opposite; along the line for adjacent." },
    { wrongPattern: "adds adjacent angles to 90", diagnosis: "Adjacent angles sit on a straight line — total 180°, not 90°.", hint: "Half a turn is 180°." },
    { wrongPattern: "forgets to check the full 360", diagnosis: "All four crossing angles must sum to 360° — a quick check catches slips.", hint: "Add all four and compare to 360°." },
  ],
  recallTags: ["angles", "vertically-opposite", "crossing-lines"],
  discovery: {
    challenges: [
      { instruction: "Drag the crossing lines and watch the opposite pair.", observe: "The opposite angles stay locked equal no matter the tilt." },
      { instruction: "Read the two adjacent angles and add them.", observe: "They always sum to 180° — they share one straight line." },
    ],
    predict: { prompt: "Two lines cross at 60°. Its vertically opposite angle is…", options: [{ id: "a", text: "60°" }, { id: "b", text: "120°" }, { id: "c", text: "180°" }], reveal: "60° — opposite angles are always equal. The 120° values are the adjacent angles on the straight lines." },
    sayItYourWay: { prompt: "What are vertically opposite angles?", phrasings: [{ id: "a", text: "The equal pair across an X of crossing lines", correct: true, why: "They face each other across the crossing and stay equal." }, { id: "b", text: "The angles on the same straight line", correct: false, why: "Those are adjacent and sum to 180°." }, { id: "c", text: "Any two angles that add to 90°", correct: false, why: "That's complementary; the opposite pair is equal, not summed." }], formalName: "vertically opposite angles (equal)" },
    stretch: "Cross that X with two MORE parallel lines and the equal pairs multiply — alternate, corresponding, co-interior. That's the parallel-line trick next.",
  },
};
