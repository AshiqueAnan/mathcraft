import type { Lesson } from "../schema";

export const T5U33L3: Lesson = {
  // @meta
  id: "T5-U33-L3",
  tier: 5,
  unit: "Polynomials & further trig",
  title: "Two Identities You Already Own",
  prerequisites: ["T3-U25-L2","T3-U26-L1","T5-U32-L3","T5-U33-L2"],
  estimatedMinutes: 14,
  hook: { question: "Draw a right triangle with hypotenuse 1 inside a circle: the opposite side IS sin θ, the adjacent side IS cos θ. Pythagoras then says (sin θ)² + (cos θ)² = 1² — the most famous identity in trig, and you already own the proof. The second: tan θ = opposite/adjacent divides both top and bottom by the hypotenuse, giving sin θ / cos θ. Neither identity is new — they were hiding in Pythagoras and the ratios all along.", type: "paradox" },
  intuitionBlocks: [{ widget: "circle-theorem-explorer", narrative: "Place a point on the unit circle and read its coordinates: the x-coordinate is cos θ, the y-coordinate is sin θ. Drag the point around and watch x² + y² stay exactly 1 — that's sin²θ + cos²θ = 1 living in the circle. Then check the slope of the radius: it's y/x = sin θ / cos θ = tan θ." }],

  // @discovery
  formalBlocks: [{ definition: "THE PYTHAGOREAN IDENTITIES: on the unit circle (radius 1), the point at angle θ is $(\\cos\\theta,\\ \\sin\\theta)$. Pythagoras gives $\\sin^2\\theta + \\cos^2\\theta = 1$. Also $\\tan\\theta = \\tfrac{\\sin\\theta}{\\cos\\theta}$ — divide opposite/adjacent by the hypotenuse and both ratios appear. These are identities: true for EVERY angle θ.", examples: ["At θ = 30°: sin²30° + cos²30° = (1/2)² + (√3/2)² = 1/4 + 3/4 = 1.", "tan 45° = sin45°/cos45° = (√2/2)/(√2/2) = 1."], pitfall: "sin²θ means (sin θ)² — the square applies to the VALUE, not the 'sin' as a word. Also, tan θ is undefined where cos θ = 0 (at 90°, 270°…): dividing by zero breaks it.", altExplanations: ["GAME: the unit-circle radar — a point at angle θ on a radius-1 circle has coordinates (cos θ, sin θ); Pythagoras on that right triangle gives sin²θ + cos²θ = 1 for EVERY angle. And tan θ = sin θ / cos θ divides the two radar readouts.", "MONEY: a $1 unit-price triangle — the horizontal leg is cos θ dollars, the vertical is sin θ; the hypotenuse is the $1 unit radius, so sin² + cos² always equals the whole $1. tan is the rate (vertical per horizontal dollar), undefined the moment the horizontal leg hits zero (cos θ = 0)."] }],
  gutChecks: [{ prompt: "If sin θ = 0.6, what is cos θ (θ acute)?", answer: "cos θ = √(1 - 0.36) = √0.64 = 0.8." }],
  quiz: {
    pool: [
      // @q01
      { id: "U33L3-mcq-1", type: "mcq", category: "procedural", prompt: "sin²30° + cos²30° = …", options: [ { id: "a", text: "1" }, { id: "b", text: "1/2" }, { id: "c", text: "3/4" }, { id: "d", text: "2" } ], correctOptionId: "a", diagnoses: { b: "1/2 is sin 30° alone.", c: "3/4 is cos²30° alone.", d: "The identity always sums to 1." }, explanation: "(1/2)² + (√3/2)² = 1/4 + 3/4 = 1.", hints: ["Pythagorean identity.", "Squares sum to 1.", "1."] },
      // @q02
      { id: "U33L3-mcq-2", type: "mcq", category: "conceptual", prompt: "Where does sin²θ + cos²θ = 1 come from?", options: [ { id: "a", text: "Pythagoras on a hypotenuse-1 triangle" }, { id: "b", text: "it's a guess" }, { id: "c", text: "from the sine rule" }, { id: "d", text: "only for right angles" } ], correctOptionId: "a", diagnoses: { b: "It's proved, not guessed.", c: "The sine rule is unrelated.", d: "It holds for every angle." }, explanation: "Unit circle: x = cos θ, y = sin θ, and x² + y² = 1 is Pythagoras.", hints: ["Hypotenuse 1.", "Legs sin and cos.", "Pythagoras."] },
      // @q03
      { id: "U33L3-mcq-3", type: "mcq", category: "word", prompt: "A ramp's slope at angle θ: tan θ = sin θ / cos θ. If sin θ = 0.6 and cos θ = 0.8, the slope is…", options: [ { id: "a", text: "0.75" }, { id: "b", text: "0.48" }, { id: "c", text: "1.4" }, { id: "d", text: "1" } ], correctOptionId: "a", diagnoses: { b: "0.48 is sin × cos — the ratio divides.", c: "1.4 adds them.", d: "1 is tan 45°." }, explanation: "tan θ = 0.6 / 0.8 = 0.75.", hints: ["0.6 ÷ 0.8.", "0.75.", "0.75."] },
      // @q04
      { id: "U33L3-mcq-4", type: "mcq", category: "procedural", prompt: "tan 45° = …", options: [ { id: "a", text: "1" }, { id: "b", text: "√2/2" }, { id: "c", text: "0" }, { id: "d", text: "2" } ], correctOptionId: "a", diagnoses: { b: "√2/2 is sin or cos 45°.", c: "0 is tan 0°.", d: "tan never needs to be 2 here." }, explanation: "tan 45° = sin45°/cos45° = 1.", hints: ["sin45°/cos45°.", "Both √2/2.", "1."] },
      // @q05
      { id: "U33L3-mcq-5", type: "mcq", category: "conceptual", prompt: "Why is tan θ undefined at 90°?", options: [ { id: "a", text: "cos 90° = 0 — division by zero" }, { id: "b", text: "sin 90° is too big" }, { id: "c", text: "90° isn't an angle" }, { id: "d", text: "tan is only for small angles" } ], correctOptionId: "a", diagnoses: { b: "sin 90° = 1 — no issue.", c: "It's a valid angle.", d: "It's the cos = 0 division that breaks it." }, explanation: "tan θ = sin/cos; at 90°, cos = 0 → undefined.", hints: ["cos 90°.", "= 0.", "Divide by zero."] },
      // @q06
      { id: "U33L3-mcq-6", type: "mcq", category: "word", prompt: "A rope at 60° has sin 60° = √3/2. If cos 60° = 1/2, tan 60° = …", options: [ { id: "a", text: "√3" }, { id: "b", text: "1/2" }, { id: "c", text: "1" }, { id: "d", text: "3" } ], correctOptionId: "a", diagnoses: { b: "1/2 is cos 60°.", c: "1 is tan 45°.", d: "3 is the square of √3." }, explanation: "tan 60° = (√3/2)/(1/2) = √3.", hints: ["Divide the fractions.", "(√3/2) ÷ (1/2).", "√3."] },
      // @q07
      { id: "U33L3-num-1", type: "numeric-input", category: "procedural", prompt: "sin²θ + cos²θ = … (any θ)", answer: 1, tolerance: 0, explanation: "The Pythagorean identity always equals 1.", hints: ["Identity.", "1.", "1."] },
      // @q08
      { id: "U33L3-num-2", type: "numeric-input", category: "procedural", prompt: "If sin θ = 0.6 and θ is acute, cos θ = …", answer: 0.8, tolerance: 0.01, acceptFractions: true, explanation: "cos θ = √(1 - 0.36) = √0.64 = 0.8.", hints: ["1 - 0.36.", "√0.64.", "0.8."] },
      // @q09
      { id: "U33L3-num-3", type: "numeric-input", category: "conceptual", prompt: "sin 45° = √2/2 ≈ 0.7071. And cos 45° = the same value. sin²45° + cos²45° = ?", answer: 1, tolerance: 0, explanation: "2 × (1/2) = 1 — identity holds at 45°.", hints: ["(√2/2)² twice.", "1/2 + 1/2.", "1."] },
      // @q10
      { id: "U33L3-frac-1", type: "fraction-input", category: "conceptual", prompt: "tan θ = sin θ / cos θ. If sin θ = 3/5 and cos θ = 4/5, express tan θ as a fraction.", numerator: 3, denominator: 4, acceptEquivalent: true, explanation: "(3/5) ÷ (4/5) = 3/4.", hints: ["(3/5)(5/4).", "3/4.", "3/4."] },
      // @q11
      { id: "U33L3-tf-1", type: "true-false-justify", category: "conceptual", prompt: "sin²θ + cos²θ = 1 is true for every angle θ.", isTrue: true, explanation: "It's the unit-circle version of Pythagoras — holds for all θ.", hints: ["Unit circle.", "Pythagoras.", "True."] },
      // @q12
      { id: "U33L3-tf-2", type: "true-false-justify", category: "conceptual", prompt: "sin²θ is the same as sin(θ²).", isTrue: false, explanation: "sin²θ = (sin θ)² — square the value, not the angle.", hints: ["(sin θ)².", "Angle not squared.", "False."] },
      // @q13
      { id: "U33L3-order-1", type: "order-steps", category: "word", prompt: "Order the steps to prove sin²θ + cos²θ = 1 on the unit circle.", sequence: ["Place a point at angle θ on radius 1", "Label x = cos θ, y = sin θ", "Apply Pythagoras: x² + y² = 1"], diagnoses: { "Place a point at angle θ on radius 1@1": "Start with the circle.", "Label x = cos θ, y = sin θ@0": "Then the labels.", "Apply Pythagoras: x² + y² = 1@0": "Pythagoras last." }, explanation: "Circle, labels, Pythagoras.", hints: ["Unit circle.", "cos, sin.", "x² + y² = 1."] },
      // @q14
      { id: "U33L3-drag-1", type: "drag-match", category: "conceptual", prompt: "Match each identity to its meaning.", pairs: [ { source: "sin²θ + cos²θ", target: "= 1" }, { source: "tan θ", target: "sin θ / cos θ" }, { source: "point on unit circle", target: "(cos θ, sin θ)" } ], diagnoses: { "sin²θ + cos²θ->sin θ / cos θ": "Squares sum to 1.", "tan θ->= 1": "tan is the ratio.", "point on unit circle->= 1": "Its coordinates are cos and sin." }, explanation: "Identity, ratio, and circle coordinates.", hints: ["Pythagoras.", "Ratio.", "Coordinates."] },
      // @q15
      { id: "U33L3-graph-1", type: "graph-interact", category: "word", prompt: "sin θ = 0.8. Set the slider to cos θ (key: value).", challenge: "Set the slider to 0.6.", validate: { value: 0.6 }, tolerance: 0.01, explanation: "cos θ = √(1 - 0.64) = √0.36 = 0.6.", hints: ["1 - 0.64.", "√0.36.", "0.6."] }
    ],
    selection: { procedural: 2, conceptual: 2, word: 1 },
    passThreshold: 0.8,
  },
  commonMistakes: [
    { wrongPattern: "writes sin²θ as sin(θ²)", diagnosis: "sin²θ means (sin θ)² — the angle stays θ.", hint: "Square the value." },
    { wrongPattern: "forgets tan = sin/cos is undefined at 90°", diagnosis: "cos 90° = 0 makes the ratio undefined there.", hint: "Divide by zero." },
    { wrongPattern: "treats the identity as θ-dependent", diagnosis: "sin²θ + cos²θ = 1 for EVERY angle.", hint: "Always 1." },
  ],
  recallTags: ["identity", "sin²θ", "cos²θ", "tan", "unit circle", "Pythagoras"],
  discovery: {
    challenges: [
      { instruction: "Drag the point around the unit circle and watch x² + y².", observe: "It stays exactly 1 everywhere — every point on the unit circle satisfies x² + y² = 1." },
      { instruction: "At θ = 45°, read the coordinates and their ratio y/x.", observe: "Both sin and cos equal √2/2, so tan 45° = y/x = 1 — the slope of the 45° radius." },
    ],
    predict: { prompt: "On the unit circle at angle θ, what is the point's x-coordinate?", options: [{ id: "a", text: "cos θ" }, { id: "b", text: "sin θ" }, { id: "c", text: "tan θ" }], reveal: "cos θ — the x-coordinate. The y-coordinate is sin θ." },
    sayItYourWay: { prompt: "Where does sin²θ + cos²θ = 1 come from?", phrasings: [{ id: "a", text: "Pythagoras on the unit-circle triangle", correct: true, why: "Hypotenuse 1: legs are sin and cos, squares sum to 1." }, { id: "b", text: "It's a definition we invent", correct: false, why: "It's a proved consequence of Pythagoras." }, { id: "c", text: "Only true for small angles", correct: false, why: "It holds for every angle." }], formalName: "Pythagorean identities — sin²θ + cos²θ = 1 and tan θ = sin θ / cos θ" },
    stretch: "The unit circle opens the door to angles beyond 90° — sin and cos extend to the whole circle, repeating forever.", 
  },
};
