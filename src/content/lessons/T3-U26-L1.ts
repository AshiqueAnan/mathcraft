import type { Lesson } from "../schema";

export const T3U26L1: Lesson = {
  // @meta
  id: "T3-U26-L1",
  tier: 3,
  unit: "Trigonometry fundamentals",
  title: "The Ratio That Only Cares About the Angle",
  prerequisites: ["T3-U21-L3","T3-U25-L1","T3-U25-L4"],
  estimatedMinutes: 13,
  hook: { question: "Draw a 30° ladder angle to a wall — then draw it again bigger. The opposite-over-hypotenuse ratio comes out the same both times, because enlarging keeps the angle. The number 0.5 belongs to the ANGLE, not to any particular triangle. That fixed ratio is the seed of all of trigonometry.", type: "paradox" },
  intuitionBlocks: [{ widget: "geometry-playground", narrative: "Draw nested right triangles sharing the same acute angle. Measure opposite/hypotenuse in each: the ratio is identical because the triangles are similar. Now change the angle and watch the ratio move — it depends only on the angle, never on the size." }],

  // @discovery
  formalBlocks: [{ definition: "In a right triangle with an acute angle $\\theta$, every copy enlarged or shrunk is similar, so the ratio $\\dfrac{\\text{opposite}}{\\text{hypotenuse}}$ depends ONLY on $\\theta$ — not on the triangle's size. That ratio is called $\\sin \\theta$ (sine). A 30° angle always gives $\\sin 30° = 0.5$; a 45° angle gives $\\sin 45° \\approx 0.707$; a 60° gives $\\sin 60° \\approx 0.866$.", examples: ["Nested 30° triangles: opposite/hypotenuse is 0.5 at every scale.", "Nested 45° triangles: opposite/hypotenuse ≈ 0.707 always."], pitfall: "The ratio is opposite OVER hypotenuse — NOT opposite minus hypotenuse. Ratios divide; they shrink or grow with the angle, and a bigger angle up to 90° means a bigger sine.", altExplanations: ["GAME: a screenshot zoom — three nested right triangles from the same 30° angle are the same shape at different scales; splitting the shortest side by the longest side gives 0.5 every time. The ratio is locked to the angle, not to the triangle's size: that's why it earns the name sine.", "FOOD: a giant and a miniature copy of the same wedge slice — opposite/hypotenuse matches exactly because both are scaled by the same factor. The sine ratio depends only on the angle you look through, never on how big the sandwich is."] }],
  gutChecks: [{ prompt: "Why does the sine ratio stay fixed when a triangle is enlarged?", answer: "Enlarging multiplies all sides by the same scale factor, so opposite/hypotenuse keeps its value — the sides stay in proportion." }],
  quiz: {
    pool: [
      // @q01
      { id: "U26L1-mcq-1", type: "mcq", category: "procedural", prompt: "In a right triangle, opposite = 3, hypotenuse = 5. sin θ = …", options: [ { id: "a", text: "3/5 = 0.6" }, { id: "b", text: "5/3 ≈ 1.67" }, { id: "c", text: "3 − 5 = −2" }, { id: "d", text: "3 × 5 = 15" } ], correctOptionId: "a", diagnoses: { b: "That's hypotenuse/opposite — inverted.", c: "Sine is a ratio (divide), not a difference.", d: "Sine divides, it doesn't multiply." }, explanation: "sin = opposite/hypotenuse = 3/5 = 0.6.", hints: ["Opposite over hypotenuse.", "3 ÷ 5.", "sin = opposite/hypotenuse = 3/5 = 0."] },
      // @q02
      { id: "U26L1-mcq-2", type: "mcq", category: "conceptual", prompt: "Why is sin θ the same in two similar triangles?", options: [ { id: "a", text: "They have different angles" }, { id: "b", text: "They're scaled copies, so side ratios match" }, { id: "c", text: "Bigger triangles have bigger sines" }, { id: "d", text: "sin grows with size" } ], correctOptionId: "b", diagnoses: { a: "Similar triangles SHARE all angles.", c: "Size doesn't affect the ratio.", d: "Enlarging scales all sides equally; the ratio stays." }, explanation: "Scaling multiplies opposite AND hypotenuse by the same factor, cancelling in the ratio.", hints: ["Similar = same angles.", "Sides scale together.", "Ratio unchanged."] },
      // @q03
      { id: "U26L1-mcq-3", type: "mcq", category: "word", prompt: "A 30° ladder makes sin 30° = 0.5. A LARGER 30° ladder gives sin 30° = …", options: [ { id: "a", text: "smaller than 0.5" }, { id: "b", text: "bigger than 0.5" }, { id: "c", text: "0.5 — the ratio doesn't change" }, { id: "d", text: "unknown without numbers" } ], correctOptionId: "c", diagnoses: { b: "Size scales sides equally; ratio fixed.", a: "Same angle → same ratio.", d: "The angle fully determines sin." }, explanation: "sin 30° = 0.5 for EVERY 30° right triangle, any size.", hints: ["Angle decides sine.", "30° always 0.5.", "sin 30° = 0.5 for EVERY 30° right triangle, any size."] },
      // @q04
      { id: "U26L1-mcq-4", type: "mcq", category: "procedural", prompt: "sin 45° ≈ 0.707. If a hypotenuse is 10, the opposite side is about…", options: [ { id: "a", text: "10" }, { id: "b", text: "0.707" }, { id: "c", text: "14.14" }, { id: "d", text: "7.07" } ], correctOptionId: "d", diagnoses: { b: "0.707 is the RATIO, not the side.", c: "14.14 multiplies by 1/sin — inverted.", a: "10 is the hypotenuse itself." }, explanation: "opposite = sin θ × hypotenuse = 0.707 × 10 ≈ 7.07.", hints: ["Multiply by hypotenuse.", "0.707 × 10.", "opposite = sin θ × hypotenuse = 0."] },
      // @q05
      { id: "U26L1-mcq-5", type: "mcq", category: "conceptual", prompt: "As θ grows from 0° to 90°, sin θ…", options: [ { id: "a", text: "grows from 0 toward 1" }, { id: "b", text: "shrinks from 1 to 0" }, { id: "c", text: "stays at 0.5" }, { id: "d", text: "flips sign" } ], correctOptionId: "a", diagnoses: { b: "That's 90° down to 0°, backwards.", c: "0.5 belongs only to 30°.", d: "All ratios here are positive." }, explanation: "Taller opposite → bigger ratio, ending at 1 for 90°.", hints: ["Opposite lengthens.", "Ratio 0 → 1.", "Taller opposite → bigger ratio, ending at 1 for 90°."] },
      // @q06
      { id: "U26L1-mcq-6", type: "mcq", category: "word", prompt: "A ramp rises 3 m over a 5 m hypotenuse. sin of the ramp's angle = …", options: [ { id: "a", text: "1.67" }, { id: "b", text: "0.6" }, { id: "c", text: "0.4" }, { id: "d", text: "8" } ], correctOptionId: "b", diagnoses: { a: "That's hypotenuse/opposite.", c: "0.4 is 2/5 — the horizontal run over hypotenuse (cosine, next lesson).", d: "8 adds them." }, explanation: "sin = opposite/hypotenuse = 3/5 = 0.6.", hints: ["3 ÷ 5.", "0.6.", "sin = opposite/hypotenuse = 3/5 = 0."] },
      // @q07
      { id: "U26L1-num-1", type: "numeric-input", category: "procedural", prompt: "Opposite 4, hypotenuse 10. sin θ (as a decimal).", answer: 0.4, tolerance: 0.01, acceptFractions: true, explanation: "4/10 = 0.4.", hints: ["4 ÷ 10.", "0.4.", "4/10 = 0.4."] },
      // @q08
      { id: "U26L1-num-2", type: "numeric-input", category: "procedural", prompt: "sin θ = 0.5 and hypotenuse = 12. The opposite side is…", answer: 6, tolerance: 0, explanation: "opposite = 0.5 × 12 = 6.", hints: ["Multiply ratio × hypotenuse.", "0.5 × 12.", "opposite = 0.5 × 12 = 6."] },
      // @q09
      { id: "U26L1-num-3", type: "numeric-input", category: "conceptual", prompt: "sin 30° = 0.5 exactly. What is the hypotenuse when the opposite side is 4?", answer: 8, tolerance: 0, explanation: "hypotenuse = opposite ÷ sin = 4 ÷ 0.5 = 8.", hints: ["Divide by the ratio.", "4 ÷ 0.5.", "hypotenuse = opposite ÷ sin = 4 ÷ 0."] },
      // @q10
      { id: "U26L1-frac-1", type: "fraction-input", category: "conceptual", prompt: "The ratio scale for sin 30° is 1/2. For an opposite of 1 unit, what's the hypotenuse in the same units?", numerator: 2, denominator: 1, acceptEquivalent: true, explanation: "opposite/hypotenuse = 1/2, so hypotenuse = 2 when opposite = 1.", hints: ["Ratio 1:2.", "Hypotenuse 2.", "opposite/hypotenuse = 1/2, so hypotenuse = 2 when opposite = 1."] },
      // @q11
      { id: "U26L1-tf-1", type: "true-false-justify", category: "conceptual", prompt: "sin θ stays the same if you enlarge the triangle.", isTrue: true, explanation: "Similar triangles share angles; scaling cancels in the ratio.", hints: ["Similar shapes.", "Ratios match.", "Similar triangles share angles; scaling cancels in the ratio."] },
      // @q12
      { id: "U26L1-tf-2", type: "true-false-justify", category: "conceptual", prompt: "sin θ = opposite × hypotenuse.", isTrue: false, explanation: "Sine DIVIDES opposite by hypotenuse — it's a ratio, not a product.", hints: ["Ratio means divide.", "opposite ÷ hypotenuse.", "Sine DIVIDES opposite by hypotenuse — it's a ratio, not a product."] },
      // @q13
      { id: "U26L1-order-1", type: "order-steps", category: "word", prompt: "Order the steps to find sin θ.", sequence: ["Locate the side opposite θ", "Locate the hypotenuse", "Divide: opposite ÷ hypotenuse"], diagnoses: { "Locate the side opposite θ@1": "Find opposite first.", "Locate the hypotenuse@0": "Then the hypotenuse.", "Divide: opposite ÷ hypotenuse@0": "Divide last." }, explanation: "Opposite, hypotenuse, divide.", hints: ["Opposite side.", "Hypotenuse.", "Opposite, hypotenuse, divide."] },
      // @q14
      { id: "U26L1-drag-1", type: "drag-match", category: "conceptual", prompt: "Match each angle to its sine.", pairs: [ { source: "30°", target: "0.5" }, { source: "45°", target: "≈ 0.707" }, { source: "60°", target: "≈ 0.866" } ], diagnoses: { "30°->≈ 0.707": "30° has sine 0.5.", "45°->0.5": "45° sine is ≈ 0.707.", "60°->0.5": "60° sine is ≈ 0.866." }, explanation: "Each angle owns a fixed ratio.", hints: ["30° → 0.5.", "45° → ≈ 0.707.", "Each angle owns a fixed ratio."] },
      // @q15
      { id: "U26L1-graph-1", type: "graph-interact", category: "word", prompt: "sin 30° = 0.5 with hypotenuse 10. Set the slider to the OPPOSITE side (key: value).", challenge: "sin 30° = 0.5 with hypotenuse 10. — adjust the values below to match the condition.", validate: { value: 5 }, tolerance: 0.01, explanation: "opposite = 0.5 × 10 = 5.", hints: ["0.5 × 10.", "5.", "opposite = 0.5 × 10 = 5."] }
    ],
    selection: { procedural: 2, conceptual: 2, word: 1 },
    passThreshold: 0.8,
  },
  commonMistakes: [
    { wrongPattern: "inverts the sine ratio", diagnosis: "sin = opposite/hypotenuse, not hypotenuse/opposite.", hint: "Opposite first, hypotenuse below." },
    { wrongPattern: "thinks bigger triangles change sine", diagnosis: "Enlarging scales both sides equally — the ratio is untouched.", hint: "Similar triangles share angles." },
    { wrongPattern: "subtracts instead of dividing", diagnosis: "Sine is a RATIO — divide the side lengths.", hint: "Ratio means ÷." },
  ],
  recallTags: ["sine", "ratio", "opposite", "hypotenuse", "similar triangles"],
  discovery: {
    challenges: [
      { instruction: "Draw two nested 30° right triangles and measure opposite/hypotenuse.", observe: "Both give 0.5 — the ratio doesn't move with size." },
      { instruction: "Change the angle to 45° and remeasure.", observe: "The ratio jumps to ≈ 0.707 — it belongs to the angle." },
    ],
    predict: { prompt: "A 60° angle's sine is closest to…", options: [{ id: "a", text: "0.866" }, { id: "b", text: "0.5" }, { id: "c", text: "1.5" }], reveal: "0.866 — larger angle, taller opposite, bigger ratio. 60° beats 30°'s 0.5." },
    sayItYourWay: { prompt: "What is sine, in your own words?", phrasings: [{ id: "a", text: "The fixed fraction of the hypotenuse that the opposite side occupies", correct: true, why: "It's a size-independent ratio for a given angle." }, { id: "b", text: "The length of the opposite side", correct: false, why: "Sine is a ratio; the side's length depends on size." }, { id: "c", text: "The angle itself", correct: false, why: "Sine is a number attached to the angle, not the angle." }], formalName: "sine — sin θ = opposite/hypotenuse, constant for a given angle" },
    stretch: "Opposite and hypotenuse are one pairing — but there are two more: the adjacent side pairs with each. Next: cosine and tangent complete the trio.", 
  },
};
