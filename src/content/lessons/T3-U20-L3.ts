import type { Lesson } from "../schema";

export const T3U20L3: Lesson = {
  // @meta
  id: "T3-U20-L3",
  tier: 3,
  unit: "Angle reasoning",
  title: "The Parallel Line Trick",
  prerequisites: ["T2-U19-L3","T3-U20-L2"],
  estimatedMinutes: 12,
  hook: { question: "Slide a ruler across two parallel lines and it cuts both at the SAME angle — that's the trick. The matching angles it makes are twins (corresponding), the zig-zag pair are twins (alternate), and the side-by-side pair add to 180° (co-interior).", type: "puzzle" },
  intuitionBlocks: [{ widget: "geometry-playground", narrative: "Drag the transverse line across the two parallels and watch the angle pairs. Corresponding angles chase each other; alternate angles mirror; co-interior angles always total 180°." }],

  // @discovery
  formalBlocks: [{ definition: "A line crossing two parallel lines creates matched angle pairs: corresponding (same position, equal), alternate (opposite sides of the cross-line, equal), co-interior (between the parallels, same side, sum 180°).", examples: ["Corresponding: the upper-right on the top line and upper-right on the bottom line are equal.", "Alternate: the zig-zag pair inside the parallels are equal; co-interior pair sums to 180°."], pitfall: "Corresponding/alternate angles are EQUAL; co-interior angles SUM TO 180°. The F-shape (corresponding), Z-shape (alternate), C-shape (co-interior) recall which is which.", altExplanations: ["GAME: a teleporter line crosses two parallel rails — corresponding angles share the same slot on each rail (equal), alternate angles zig-zag across (equal), co-interior angles on the same side add to 180. F-shape, Z-shape, C-shape recall which.", "TRAVEL: a bridge crossing parallel train tracks — the same-position angles on both tracks are equal (corresponding); the zig-zag inner pair equal (alternate); the inner same-side pair adds to 180 (co-interior)."] }],
  gutChecks: [{ prompt: "With parallel lines, an alternate angle is 65°. What is its twin?", answer: "65° (alternate angles are equal)." }],
  quiz: {
    pool: [
      // @q01
      { id: "U20L3-mcq-1", type: "mcq", category: "procedural", prompt: "With parallel lines, a corresponding angle is 70°. Its twin is…", options: [ { id: "a", text: "70°" }, { id: "b", text: "110°" }, { id: "c", text: "20°" }, { id: "d", text: "90°" } ], correctOptionId: "a", diagnoses: { b: "110° would be the co-interior partner.", c: "No halving here.", d: "90° is for right angles." }, explanation: "Corresponding angles are equal: 70°.", hints: ["Same position.", "Equal.", "Corresponding angles are equal: 70°."] },
      // @q02
      { id: "U20L3-mcq-2", type: "mcq", category: "conceptual", prompt: "Which pair of angles are ALWAYS equal with parallel lines?", options: [ { id: "a", text: "Co-interior angles" }, { id: "b", text: "Alternate angles (the zig-zag pair)" }, { id: "c", text: "Angles on the same line" }, { id: "d", text: "Any two angles below the line" } ], correctOptionId: "b", diagnoses: { a: "Co-interior sum to 180° — they're not equal.", c: "Same-line angles sum to 180°, not equal.", d: "Position matters, not just being below." }, explanation: "Alternate angles (and corresponding) are equal; co-interior sum to 180°.", hints: ["Z-shape.", "Alternate equal.", "Alternate angles (and corresponding) are equal; co-interior sum to 180°."] },
      // @q03
      { id: "U20L3-mcq-3", type: "mcq", category: "word", prompt: "A staircase rail's parallel bars: an alternate angle is 55°. The other alternate is…", options: [ { id: "a", text: "35°" }, { id: "b", text: "125°" }, { id: "c", text: "55°" }, { id: "d", text: "180°" } ], correctOptionId: "c", diagnoses: { b: "125° is the co-interior neighbour.", a: "35 is 90 − 55, unrelated.", d: "180 is the line total." }, explanation: "Alternate angles are equal: 55°.", hints: ["Alternate equal.", "55°.", "Alternate angles are equal: 55°."] },
      // @q04
      { id: "U20L3-mcq-4", type: "mcq", category: "procedural", prompt: "A co-interior angle is 65°. What is its partner?", options: [ { id: "a", text: "90°" }, { id: "b", text: "65°" }, { id: "c", text: "25°" }, { id: "d", text: "115°" } ], correctOptionId: "d", diagnoses: { b: "Co-interior are NOT equal — they sum to 180°.", c: "25 is 90 − 65, unrelated.", a: "Right angle isn't guaranteed." }, explanation: "Co-interior sum: 180 − 65 = 115°.", hints: ["Co-interior = 180° total.", "180 − 65.", "Co-interior sum: 180 − 65 = 115°."] },
      // @q05
      { id: "U20L3-mcq-5", type: "mcq", category: "conceptual", prompt: "What helps you recognize corresponding angles?", options: [ { id: "a", text: "An F-shape — same corner position on each parallel" }, { id: "b", text: "A Z-shape — zig-zag inside the parallels" }, { id: "c", text: "A C-shape — inside on the same side" }, { id: "d", text: "A straight X" } ], correctOptionId: "a", diagnoses: { b: "Z-shape is alternate.", c: "C-shape is co-interior.", d: "An X alone is just crossing lines." }, explanation: "Corresponding angles form the F-shape (or rotated F).", hints: ["F-shape.", "Same corner.", "Corresponding angles form the F-shape (or rotated F)."] },
      // @q06
      { id: "U20L3-mcq-6", type: "mcq", category: "word", prompt: "Two tram rails parallel; a cable crosses making 120°. The co-interior partner inside is…", options: [ { id: "a", text: "120°" }, { id: "b", text: "60°" }, { id: "c", text: "30°" }, { id: "d", text: "180°" } ], correctOptionId: "b", diagnoses: { a: "120 is the given angle; the co-interior partner differs.", c: "30 is 90 − 60, unrelated.", d: "180 is the sum, not one angle." }, explanation: "Co-interior: 180 − 120 = 60°.", hints: ["Co-interior = 180°.", "180 − 120.", "Co-interior: 180 − 120 = 60°."] },
      // @q07
      { id: "U20L3-num-1", type: "numeric-input", category: "procedural", prompt: "A zig-zag alternate angle is 48°. Type its twin.", answer: 48, tolerance: 0, explanation: "Alternate angles are equal: 48°.", hints: ["Alternate equal.", "48°.", "Alternate angles are equal: 48°."] },
      // @q08
      { id: "U20L3-num-2", type: "numeric-input", category: "procedural", prompt: "A co-interior angle is 110°. Type its partner.", answer: 70, tolerance: 0, explanation: "180 − 110 = 70°.", hints: ["Co-interior = 180°.", "180 − 110.", "180 − 110 = 70°."] },
      // @q09
      { id: "U20L3-num-3", type: "numeric-input", category: "conceptual", prompt: "A corresponding angle is 33°. Type the other corresponding angle.", answer: 33, tolerance: 0, explanation: "Corresponding angles are equal: 33°.", hints: ["Same position.", "Equal.", "Corresponding angles are equal: 33°."] },
      // @q10
      { id: "U20L3-frac-1", type: "fraction-input", category: "conceptual", prompt: "Two co-interior angles are equal. Write each as a fraction of 180°.", numerator: 1, denominator: 2, acceptEquivalent: true, explanation: "Equal co-interior: 90° each = 1/2 of 180°.", hints: ["180 ÷ 2.", "90°.", "Equal co-interior: 90° each = 1/2 of 180°."] },
      // @q11
      { id: "U20L3-tf-1", type: "true-false-justify", category: "conceptual", prompt: "Alternate angles with parallel lines are equal.", isTrue: true, explanation: "The zig-zag pair matches exactly.", hints: ["Z-shape.", "Equal.", "The zig-zag pair matches exactly."] },
      // @q12
      { id: "U20L3-tf-2", type: "true-false-justify", category: "conceptual", prompt: "Co-interior angles with parallel lines are equal.", isTrue: false, explanation: "Co-interior sum to 180° — only equal if both are 90°.", hints: ["C-shape = 180°.", "Not always equal.", "Co-interior sum to 180° — only equal if both are 90°."] },
      // @q13
      { id: "U20L3-order-1", type: "order-steps", category: "word", prompt: "Order the steps to find a missing alternate angle.", sequence: ["Identify the parallel lines", "Find the zig-zag alternate pair", "Note they are equal", "Copy the given angle value"], diagnoses: { "Identify the parallel lines@1": "Parallels first.", "Find the zig-zag alternate pair@0": "Locate the pair.", "Copy the given angle value@0": "Copy after identifying." }, explanation: "Parallels, pair, equality, value.", hints: ["Parallels.", "Zig-zag pair.", "Parallels, pair, equality, value."] },
      // @q14
      { id: "U20L3-drag-1", type: "drag-match", category: "conceptual", prompt: "Match each angle pair to its rule.", pairs: [ { source: "Corresponding", target: "Equal (F-shape)" }, { source: "Alternate", target: "Equal (Z-shape)" }, { source: "Co-interior", target: "Sum 180° (C-shape)" } ], diagnoses: { "Corresponding->Sum 180° (C-shape)": "Corresponding are equal — F-shape.", "Alternate->Sum 180° (C-shape)": "Alternate are equal — Z-shape.", "Co-interior->Equal (F-shape)": "Co-interior sum to 180°." }, explanation: "F and Z equal; C sums to 180°.", hints: ["F = equal.", "Z = equal.", "F and Z equal; C sums to 180°."] },
      // @q15
      { id: "U20L3-graph-1", type: "graph-interact", category: "word", prompt: "A co-interior angle is 115°. Set the slider to its partner (key: value).", challenge: "A co-interior angle is 115°. — adjust the values below to match the condition.", validate: { value: 65 }, tolerance: 0.01, explanation: "180 − 115 = 65°.", hints: ["180 − 115.", "65.", "180 − 115 = 65°."] }
    ],
    selection: { procedural: 2, conceptual: 2, word: 1 },
    passThreshold: 0.8,
  },
  commonMistakes: [
    { wrongPattern: "treats co-interior as equal", diagnosis: "Co-interior sum to 180° — they're not a twin pair.", hint: "C-shape → 180°; only F and Z pairs are equal." },
    { wrongPattern: "mixes corresponding with alternate", diagnosis: "Corresponding sit in the same corner; alternate zig-zag across.", hint: "F-shape vs Z-shape tells them apart." },
    { wrongPattern: "applies the rules without parallel lines", diagnosis: "These equalities need TRUE parallel lines.", hint: "Check the parallels (arrow marks) first." },
  ],
  recallTags: ["parallel-lines", "corresponding", "alternate", "co-interior"],
  discovery: {
    challenges: [
      { instruction: "Drag the transverse line and watch the F-shape pair.", observe: "Corresponding angles stay equal wherever the line slides." },
      { instruction: "Read the zig-zag pair and the C-shape pair.", observe: "Alternate equals; co-interior sums to 180°." },
    ],
    predict: { prompt: "A Z-shape alternate angle is 80°. Its twin is…", options: [{ id: "a", text: "80°" }, { id: "b", text: "100°" }, { id: "c", text: "10°" }], reveal: "80° — alternate angles are equal. The 100° would be its co-interior neighbour." },
    sayItYourWay: { prompt: "What is the 'parallel line trick'?", phrasings: [{ id: "a", text: "One crossing line stamps matching angles onto both parallels", correct: true, why: "The same tilt hits both rails → equal corresponding/alternate pairs." }, { id: "b", text: "Parallel lines always turn into right angles", correct: false, why: "Angles depend on the crossing line, not the rails." }, { id: "c", text: "Lines that bend to avoid crossing", correct: false, why: "Parallel lines are straight and never meet." }], formalName: "angles on parallel lines (corresponding / alternate / co-interior)" },
    stretch: "Three parallel lines + a crossing line = 8 angles, yet only two different sizes. Triangles add a third constraint — every triangle's corners sum to exactly 180°. That's U20-L4.",
  },
};
