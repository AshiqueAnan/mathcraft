import type { Lesson } from "../schema";

export const T3U20L1: Lesson = {
  // @meta
  id: "T3-U20-L1",
  tier: 3,
  unit: "Angle reasoning",
  title: "Angles Around a Point",
  prerequisites: ["T2-U18-L1","T2-U19-L3"],
  estimatedMinutes: 12,
  hook: { question: "A wheel turns once and it's back where it started — that full turn is 360°. Half a turn is 180°, a quarter is 90°. Angles are just turns, and turns stack: sweep one way, sweep another, and the pieces always add up to the whole.", type: "real-world" },
  intuitionBlocks: [{ widget: "geometry-playground", narrative: "Sweep a ray around the point and watch the angle grow. Split the full circle with more rays: the angles between them always add back to 360°. Drag, split, and the totals never waver." }],

  // @discovery
  formalBlocks: [{ definition: "A full turn is 360°; a straight line is 180°; a right angle is 90°. Angles around a point add to 360°: they tile the whole turn with no gaps and no overlaps. Angles on a straight line add to 180°; angles in a right angle add to 90°.", examples: ["Two angles around a point, 110° and 250°: 110 + 250 = 360 ✓.", "40° on a straight line with an unknown x: x = 180 − 40 = 140°."], pitfall: "Angles around a point are measured in degrees and add to 360 — not 180. The 'straight line = 180' rule is only for angles that lie along one straight line.", altExplanations: ["GAME: a full spin of a wheel is 360° — every full turn is one complete revolution. Angles around a point tile the whole spin with no gaps, so they always add to 360; a straight edge is half a spin (180).", "FOOD: cutting a pizza into four angles around the centre — the four vertex angles always pile up to a full 360° circle. A straight-line pizza edge is half, 180°."] }],
  gutChecks: [{ prompt: "Angles 120°, 150°, and x meet around a point. What is x?", answer: "360 − 120 − 150 = 90°." }],
  quiz: {
    pool: [
      // @q01
      { id: "U20L1-mcq-1", type: "mcq", category: "procedural", prompt: "Angles of 110° and 250° meet at a point. What's the total around the point?", options: [ { id: "a", text: "360°" }, { id: "b", text: "180°" }, { id: "c", text: "90°" }, { id: "d", text: "140°" } ], correctOptionId: "a", diagnoses: { b: "Two angles filling a point add to a full turn: 360°.", c: "90° is a quarter turn.", d: "140 is 360 − 220, not the total." }, explanation: "110 + 250 = 360 — the angles tile a full turn.", hints: ["Full turn.", "360°.", "360°."] },
      // @q02
      { id: "U20L1-mcq-2", type: "mcq", category: "conceptual", prompt: "Why do angles around a point always add to 360°?", options: [ { id: "a", text: "They tile the whole turn — no gaps, no overlaps" }, { id: "b", text: "Because rays are long" }, { id: "c", text: "By definition of a right angle" }, { id: "d", text: "They add to 180 by accident" } ], correctOptionId: "a", diagnoses: { b: "Ray length is irrelevant to the angle sum.", c: "Right angles are 90° — a different fact.", d: "The 360 is about tiling a full turn." }, explanation: "Angles around a point exactly cover one full 360° rotation.", hints: ["Full rotation.", "Tile the turn.", "360°."] },
      // @q03
      { id: "U20L1-mcq-3", type: "mcq", category: "word", prompt: "A windmill's blades split a point into 120° each. How many blades?", options: [ { id: "a", text: "3" }, { id: "b", text: "4" }, { id: "c", text: "2" }, { id: "d", text: "6" } ], correctOptionId: "a", diagnoses: { b: "4 blades would be 90° each.", c: "2 blades make 180° each.", d: "6 blades would be 60° each." }, explanation: "360 ÷ 120 = 3 blades.", hints: ["360 ÷ 120.", "3.", "3."] },
      // @q04
      { id: "U20L1-mcq-4", type: "mcq", category: "procedural", prompt: "A straight line is split into 40° and x. What is x?", options: [ { id: "a", text: "140°" }, { id: "b", text: "40°" }, { id: "c", text: "180°" }, { id: "d", text: "90°" } ], correctOptionId: "a", diagnoses: { b: "x is the rest of the straight line, not the given angle.", c: "180 is the whole straight line.", d: "Right angle is 90°, not half of 180 here." }, explanation: "180 − 40 = 140° on a straight line.", hints: ["Straight line = 180°.", "180 − 40.", "140°."] },
      // @q05
      { id: "U20L1-mcq-5", type: "mcq", category: "conceptual", prompt: "What is a 'full turn' in degrees?", options: [ { id: "a", text: "360°" }, { id: "b", text: "180°" }, { id: "c", text: "90°" }, { id: "d", text: "100°" } ], correctOptionId: "a", diagnoses: { b: "Half a turn is 180°.", c: "A quarter turn is 90°.", d: "100° isn't a standard turn." }, explanation: "One full rotation = 360°.", hints: ["One rotation.", "360°.", "360°."] },
      // @q06
      { id: "U20L1-mcq-6", type: "mcq", category: "word", prompt: "A pizza is cut into 6 equal slices. What angle does each slice occupy at the centre?", options: [ { id: "a", text: "60°" }, { id: "b", text: "30°" }, { id: "c", text: "45°" }, { id: "d", text: "90°" } ], correctOptionId: "a", diagnoses: { b: "30° would need 12 slices.", c: "45° would need 8 slices.", d: "90° would give 4 slices." }, explanation: "360 ÷ 6 = 60° per slice.", hints: ["360 ÷ 6.", "60°.", "60°."] },
      // @q07
      { id: "U20L1-num-1", type: "numeric-input", category: "procedural", prompt: "Angles of 120° and 150° meet at a point. Type the missing angle x.", answer: 90, tolerance: 0, explanation: "x = 360 − 120 − 150 = 90°.", hints: ["360 − 120 − 150.", "90.", "90°."] },
      // @q08
      { id: "U20L1-num-2", type: "numeric-input", category: "procedural", prompt: "Angles on a straight line: 70° and x. Type x.", answer: 110, tolerance: 0, explanation: "x = 180 − 70 = 110°.", hints: ["Straight line = 180°.", "180 − 70.", "110°."] },
      // @q09
      { id: "U20L1-num-3", type: "numeric-input", category: "conceptual", prompt: "A right angle is split into 35° and x. Type x.", answer: 55, tolerance: 0, explanation: "x = 90 − 35 = 55°.", hints: ["Right angle = 90°.", "90 − 35.", "55°."] },
      // @q10
      { id: "U20L1-frac-1", type: "fraction-input", category: "conceptual", prompt: "A clock turns from 12 to 3 — what fraction of a full turn is that? Write as a fraction.", numerator: 1, denominator: 4, acceptEquivalent: true, explanation: "12 to 3 is a quarter turn = 1/4.", hints: ["12 → 3 is 3 hours of 12.", "1/4 turn.", "1/4."] },
      // @q11
      { id: "U20L1-tf-1", type: "true-false-justify", category: "conceptual", prompt: "Three angles around a point, 60° each, add to 180°.", isTrue: false, explanation: "60 × 3 = 180, but around a point the total must be 360° — three angles can't tile a full turn with only 180°.", hints: ["Full turn = 360°.", "180 is only half.", "False."] },
      // @q12
      { id: "U20L1-tf-2", type: "true-false-justify", category: "conceptual", prompt: "Angles on a straight line add to 180°.", isTrue: true, explanation: "Half a turn is 180° — angles along a line share that straight angle.", hints: ["Straight = 180°.", "Half turn.", "True."] },
      // @q13
      { id: "U20L1-order-1", type: "order-steps", category: "word", prompt: "Order the steps to find x: angles 100°, 130°, and x meet at a point.", sequence: ["Write: 100 + 130 + x = 360", "Add the known angles: 230", "Subtract: x = 360 − 230", "State: x = 130°"], diagnoses: { "Write: 100 + 130 + x = 360@1": "Write the equation first.", "Add the known angles: 230@0": "Add known angles before subtracting.", "Subtract: x = 360 − 230@1": "Subtract after adding." }, explanation: "Equation, add knowns, subtract, state x.", hints: ["Equation first.", "Add knowns.", "Subtract from 360."] },
      // @q14
      { id: "U20L1-drag-1", type: "drag-match", category: "conceptual", prompt: "Match each turn to its angle.", pairs: [ { source: "Full turn", target: "360°" }, { source: "Half turn", target: "180°" }, { source: "Quarter turn", target: "90°" } ], diagnoses: { "Full turn->180°": "Full turn is 360°.", "Half turn->90°": "Half is 180°, quarter is 90°.", "Quarter turn->360°": "Quarter is 90°." }, explanation: "Full = 360°, half = 180°, quarter = 90°.", hints: ["Whole rotation.", "Half.", "Quarter."] },
      // @q15
      { id: "U20L1-graph-1", type: "graph-interact", category: "word", prompt: "Two angles around a point are 220° and 140°. Set the slider to their total (key: value).", challenge: "Set the slider to 360.", validate: { value: 360 }, tolerance: 0.01, explanation: "220 + 140 = 360 — the full turn.", hints: ["220 + 140.", "360.", "360°."] }
    ],
    selection: { procedural: 2, conceptual: 2, word: 1 },
    passThreshold: 0.8,
  },
  commonMistakes: [
    { wrongPattern: "adds around a point to 180", diagnosis: "Angles around a point tile a FULL turn — 360°, not 180°.", hint: "Imagine sweeping one rotation around the point." },
    { wrongPattern: "uses 90 for straight-line gaps", diagnosis: "On a straight line the total is 180°; subtract from 180, not 90.", hint: "Half a turn is 180°." },
    { wrongPattern: "forgets degrees units", diagnosis: "Angles are measured in degrees — write the ° and state the unit.", hint: "Always attach ° to your answer." },
  ],
  recallTags: ["angles", "full-turn", "degrees", "point"],
  discovery: {
    challenges: [
      { instruction: "Sweep a ray around the point and note the reading at quarter, half, and full turn.", observe: "90°, 180°, 360° — the turns grow by fixed landmarks." },
      { instruction: "Split the point with two rays and read all three angles.", observe: "Whatever the split, the three angles always sum to 360°." },
    ],
    predict: { prompt: "Two angles 110° and 130° meet at a point with a third x. What is x?", options: [{ id: "a", text: "120°" }, { id: "b", text: "60°" }, { id: "c", text: "240°" }], reveal: "x = 360 − 110 − 130 = 120°. The unseen angle is whatever completes the full turn." },
    sayItYourWay: { prompt: "What does 'angles around a point add to 360°' mean?", phrasings: [{ id: "a", text: "The angles fit together to make one complete rotation", correct: true, why: "No gaps, no overlap — they tile the full turn." }, { id: "b", text: "The rays must all be the same length", correct: false, why: "Length never affects angle measure." }, { id: "c", text: "Each angle must be exactly 90°", correct: false, why: "Any sizes work as long as they sum to 360°." }], formalName: "angles at a point (sum = 360°)" },
    stretch: "Two lines crossing create four angles — and two of them are secretly twins. The next lesson pulls that hidden equality out: vertically opposite angles.",
  },
};
