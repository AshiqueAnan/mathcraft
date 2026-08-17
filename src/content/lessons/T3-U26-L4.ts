import type { Lesson } from "../schema";

export const T3U26L4: Lesson = {
  // @meta
  id: "T3-U26-L4",
  tier: 3,
  unit: "Trigonometry fundamentals",
  title: "The Special Three",
  prerequisites: ["T3-U25-L4","T3-U26-L1","T3-U26-L2","T3-U26-L3"],
  estimatedMinutes: 13,
  hook: { question: "No calculator needed: cut an equilateral triangle in half — the 30-60-90 triangle's sides come from Pythagoras on 2-1-√3. Cut a square on its diagonal — the 45-45-90 triangle is 1-1-√2. From those two shapes, the exact sines, cosines, and tangents of 30°, 45°, and 60° write themselves, proudly by hand.", type: "puzzle" },
  intuitionBlocks: [{ widget: "graph-plotter", narrative: "Inspect the half-equilateral: sides 2, 1, √3 give sin 30° = ½, cos 30° = √3/2, tan 30° = 1/√3. The half-square 1-1-√2 gives the 45° values. Drag the special triangles and the exact ratios stay locked — only the scale changes." }],

  // @discovery
  formalBlocks: [{ definition: "The special triangles: 30-60-90 (half an equilateral, sides $2, 1, \\sqrt{3}$) and 45-45-90 (half a square, sides $1, 1, \\sqrt{2}$). Exact values: $\\sin 30° = \\frac{1}{2}$, $\\cos 30° = \\frac{\\sqrt{3}}{2}$, $\\tan 30° = \\frac{1}{\\sqrt{3}}$; $\\sin 45° = \\cos 45° = \\frac{\\sqrt{2}}{2} \\approx 0.707$, $\\tan 45° = 1$; $\\sin 60° = \\frac{\\sqrt{3}}{2}$, $\\cos 60° = \\frac{1}{2}$, $\\tan 60° = \\sqrt{3}$.", examples: ["30-60-90: sin 30° = opposite/hypotenuse = 1/2.", "45-45-90: sin 45° = 1/√2 = √2/2."], pitfall: "Don't match the wrong sides: 1 is OPPOSITE the 30°, √3 is OPPOSITE the 60°. Swapping them flips sin and cos for 30°/60°.", altExplanations: ["GAME: the two special triangles are crafted blueprints — cut an equilateral triangle of side 2 in half (30-60-90) and read sin 30° = 1/2 straight off sides 1, √3, 2; cut a unit square diagonally (45-45-90) and read sin 45° = 1/√2. No calculator needed.", "FOOD: folding an equilateral wrap in half — the fold reveals a 30-60-90 triangle with sides 2, 1, √3, so the exact ratios fall out. A square napkin folded corner-to-corner gives the 45-45-90 with sides 1, 1, √2."] }],
  gutChecks: [{ prompt: "Where do the 30° and 60° exact values come from?", answer: "Halving an equilateral triangle of side 2 gives a 30-60-90 with sides 2, 1, √3 — the ratios read straight off." }],
  quiz: {
    pool: [
      // @q01
      { id: "U26L4-mcq-1", type: "mcq", category: "procedural", prompt: "sin 30° = …", options: [ { id: "a", text: "1/2" }, { id: "b", text: "√3/2" }, { id: "c", text: "√2/2" }, { id: "d", text: "1/√3" } ], correctOptionId: "a", diagnoses: { b: "√3/2 is cos 30° (or sin 60°).", c: "√2/2 is for 45°.", d: "1/√3 is tan 30°." }, explanation: "Half-equilateral: opposite 1 over hypotenuse 2.", hints: ["1 over 2.", "1/2.", "Half-equilateral: opposite 1 over hypotenuse 2."] },
      // @q02
      { id: "U26L4-mcq-2", type: "mcq", category: "conceptual", prompt: "Where does tan 45° = 1 come from?", options: [ { id: "a", text: "The hypotenuse is 1" }, { id: "b", text: "The 45-45-90 triangle has equal legs" }, { id: "c", text: "sin 45° is larger than cos 45°" }, { id: "d", text: "45° is half of 90°" } ], correctOptionId: "b", diagnoses: { a: "Legs being equal is the reason, not the hypotenuse's length.", c: "sin 45° = cos 45°, so their quotient is 1.", d: "Halving an angle isn't the ratio's source." }, explanation: "Half a square: both legs are the same length → opposite/adjacent = 1.", hints: ["Equal legs.", "Ratio 1.", "Half a square: both legs are the same length → opposite/adjacent = 1."] },
      // @q03
      { id: "U26L4-mcq-3", type: "mcq", category: "word", prompt: "A 30° ramp has a 2 m hypotenuse. Its height (sin 30° = ½) is…", options: [ { id: "a", text: "√3 m ≈ 1.73 m" }, { id: "b", text: "2 m" }, { id: "c", text: "1 m" }, { id: "d", text: "0.5 m" } ], correctOptionId: "c", diagnoses: { b: "2 m is the hypotenuse.", a: "√3 is the adjacent for a side-2 hypotenuse.", d: "0.5 is the ratio, not the height." }, explanation: "height = sin 30° × 2 = ½ × 2 = 1 m.", hints: ["½ × 2.", "1 m.", "height = sin 30° × 2 = ½ × 2 = 1 m."] },
      // @q04
      { id: "U26L4-mcq-4", type: "mcq", category: "procedural", prompt: "cos 60° = …", options: [ { id: "a", text: "1/√3" }, { id: "b", text: "√3/2" }, { id: "c", text: "√3" }, { id: "d", text: "1/2" } ], correctOptionId: "d", diagnoses: { b: "√3/2 is sin 60° (or cos 30°).", c: "√3 is tan 60°.", a: "1/√3 is tan 30°." }, explanation: "In a 30-60-90, the side adjacent to 60° (the short leg) is 1 over hypotenuse 2.", hints: ["Short leg over 2.", "1/2.", "In a 30-60-90, the side adjacent to 60° (the short leg) is 1 over hypotenuse 2."] },
      // @q05
      { id: "U26L4-mcq-5", type: "mcq", category: "conceptual", prompt: "The 1 in a 30-60-90 triangle (hypotenuse 2) sits opposite which angle?", options: [ { id: "a", text: "30°" }, { id: "b", text: "60°" }, { id: "c", text: "90°" }, { id: "d", text: "45°" } ], correctOptionId: "a", diagnoses: { b: "√3 sits opposite the 60°.", c: "The hypotenuse 2 faces the 90°.", d: "45° appears only in the half-square." }, explanation: "The shortest side faces the smallest angle: 1 is opposite 30°.", hints: ["Short side, small angle.", "30°.", "The shortest side faces the smallest angle: 1 is opposite 30°."] },
      // @q06
      { id: "U26L4-mcq-6", type: "mcq", category: "word", prompt: "A 60° ramp, hypotenuse 4 m. It rises (sin 60° = √3/2) by…", options: [ { id: "a", text: "2 m" }, { id: "b", text: "2√3 m ≈ 3.46 m" }, { id: "c", text: "4√3 m" }, { id: "d", text: "√3 m ≈ 1.73 m" } ], correctOptionId: "b", diagnoses: { a: "2 m is for sin 30° with this hypotenuse.", c: "4√3 uses the hypotenuse as the ratio — inverted.", d: "√3 is for hypotenuse 2, not 4." }, explanation: "height = sin 60° × 4 = (√3/2) × 4 = 2√3 ≈ 3.46 m.", hints: ["√3/2 × 4.", "2√3.", "height = sin 60° × 4 = (√3/2) × 4 = 2√3 ≈ 3."] },
      // @q07
      { id: "U26L4-num-1", type: "numeric-input", category: "procedural", prompt: "cos 30° = √3/2 ≈ 0.866. With hypotenuse 10, the adjacent side is about…", answer: 8.66, tolerance: 0.1, explanation: "adjacent = cos 30° × 10 ≈ 8.66.", hints: ["0.866 × 10.", "≈ 8.66.", "adjacent = cos 30° × 10 ≈ 8."] },
      // @q08
      { id: "U26L4-num-2", type: "numeric-input", category: "procedural", prompt: "tan 60° = √3 ≈ 1.732. Opposite = √3 × adjacent; if adjacent = 5, opposite ≈ …", answer: 8.66, tolerance: 0.1, explanation: "opposite = √3 × 5 ≈ 8.66.", hints: ["1.732 × 5.", "≈ 8.66.", "opposite = √3 × 5 ≈ 8."] },
      // @q09
      { id: "U26L4-num-3", type: "numeric-input", category: "conceptual", prompt: "A 45-45-90 triangle has hypotenuse 4. Each leg = 4/√2 ≈ …", answer: 2.83, tolerance: 0.1, explanation: "leg = hyp/√2 = 4/1.414 ≈ 2.83.", hints: ["4 ÷ √2.", "≈ 2.83.", "leg = hyp/√2 = 4/1."] },
      // @q10
      { id: "U26L4-frac-1", type: "fraction-input", category: "conceptual", prompt: "In a 30-60-90 triangle (sides 2, 1, √3), what fraction of the hypotenuse is the short leg?", numerator: 1, denominator: 2, acceptEquivalent: true, explanation: "Short leg 1 over hypotenuse 2 → 1/2 (that's sin 30°).", hints: ["1 ÷ 2.", "1/2.", "Short leg 1 over hypotenuse 2 → 1/2 (that's sin 30°)."] },
      // @q11
      { id: "U26L4-tf-1", type: "true-false-justify", category: "conceptual", prompt: "sin 30° = cos 60° = 1/2.", isTrue: true, explanation: "The short leg is opposite 30° AND adjacent to 60° — both ratios give 1/2.", hints: ["Same leg, two labels.", "Both = 1/2.", "The short leg is opposite 30° AND adjacent to 60° — both ratios give 1/2."] },
      // @q12
      { id: "U26L4-tf-2", type: "true-false-justify", category: "conceptual", prompt: "tan 45° = 0.707.", isTrue: false, explanation: "tan 45° = 1; 0.707 is sin/cos 45°.", hints: ["Equal legs.", "tan 45° = 1.", "tan 45° = 1; 0."] },
      // @q13
      { id: "U26L4-order-1", type: "order-steps", category: "word", prompt: "Order the steps to derive sin 30° from an equilateral triangle of side 2.", sequence: ["Halve it: sides 2, 1, √3", "Label the 30° angle", "sin 30° = opposite/hypotenuse = 1/2"], diagnoses: { "Halve it: sides 2, 1, √3@1": "Halve the triangle first.", "Label the 30° angle@0": "Then find the 30° corner.", "sin 30° = opposite/hypotenuse = 1/2@0": "Read the ratio last." }, explanation: "Halve the equilateral, label, read the ratio.", hints: ["2, 1, √3.", "30° at one end.", "Halve the equilateral, label, read the ratio."] },
      // @q14
      { id: "U26L4-drag-1", type: "drag-match", category: "conceptual", prompt: "Match each angle to its exact sine.", pairs: [ { source: "30°", target: "1/2" }, { source: "45°", target: "√2/2" }, { source: "60°", target: "√3/2" } ], diagnoses: { "30°->√2/2": "30° sine is 1/2.", "45°->√3/2": "45° sine is √2/2.", "60°->1/2": "60° sine is √3/2." }, explanation: "Each special angle owns its exact fraction.", hints: ["30 → 1/2.", "45 → √2/2.", "Each special angle owns its exact fraction."] },
      // @q15
      { id: "U26L4-graph-1", type: "graph-interact", category: "word", prompt: "sin 30° = 1/2 with hypotenuse 6. Set the slider to the OPPOSITE side (key: value).", challenge: "sin 30° = 1/2 with hypotenuse 6. — adjust the values below to match the condition.", validate: { value: 3 }, tolerance: 0.01, explanation: "opposite = ½ × 6 = 3.", hints: ["½ × 6.", "3.", "opposite = ½ × 6 = 3."] }
    ],
    selection: { procedural: 2, conceptual: 2, word: 1 },
    passThreshold: 0.8,
  },
  commonMistakes: [
    { wrongPattern: "confuses sin 30° and sin 60°", diagnosis: "1 is opposite 30°, √3 opposite 60° — keep the labels straight.", hint: "Short leg = 30°, long leg = 60°." },
    { wrongPattern: "thinks tan 45° is irrational", diagnosis: "Equal legs give tan 45° = 1 exactly.", hint: "Half a square." },
    { wrongPattern: "drops the √ in exact values", diagnosis: "The √2 and √3 come from the diagonal/hypotenuse — keep them exact.", hint: "Don't decimalize unless asked." },
  ],
  recallTags: ["special angles", "30-60-90", "45-45-90", "exact values", "surds"],
  discovery: {
    challenges: [
      { instruction: "Halve an equilateral of side 2 and label all three sides.", observe: "Sides 2, 1, √3 fall straight from Pythagoras." },
      { instruction: "Cut a square on its diagonal and compare the legs.", observe: "Both legs equal → tan 45° = 1 and sin/cos = 1/√2." },
    ],
    predict: { prompt: "sin 60° is greatest of the special sines. Its value is…", options: [{ id: "a", text: "√3/2 ≈ 0.866" }, { id: "b", text: "1/2" }, { id: "c", text: "√2/2 ≈ 0.707" }], reveal: "√3/2 ≈ 0.866 — the biggest angle (60°) has the tallest opposite ratio among the three specials." },
    sayItYourWay: { prompt: "Why can you find 30°, 45°, and 60° trig without a calculator?", phrasings: [{ id: "a", text: "They come from two simple shapes — half an equilateral and half a square", correct: true, why: "Pythagoras fixes their sides exactly." }, { id: "b", text: "They're lucky decimals you memorize", correct: false, why: "Each exact value is derived, not stumbled on." }, { id: "c", text: "Only multiples of 45° qualify", correct: false, why: "30° and 60° come from the half-equilateral." }], formalName: "exact trig values for 30°, 45°, 60° from the 30-60-90 and 45-45-90 triangles" },
    stretch: "From angles in triangles to moving shapes on a grid. Next: slide, flip, turn, grow — the four transformations that describe every move.", 
  },
};
