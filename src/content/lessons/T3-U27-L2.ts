import type { Lesson } from "../schema";

export const T3U27L2: Lesson = {
  // @meta
  id: "T3-U27-L2",
  tier: 3,
  unit: "Transformations & coordinates",
  title: "Enlargements From a Center",
  prerequisites: ["T3-U26-L4","T3-U27-L1"],
  estimatedMinutes: 13,
  hook: { question: "A projector blows an image up: every point travels OUT along a straight ray from the projector bulb. The bulb is the centre of enlargement, the ×2 (or ×0.5) is the scale factor. Doubling the side lengths doesn't double the area — it quadruples it. Scale factor 2 × 2 = 4 hides the real surprise.", type: "real-world" },
  intuitionBlocks: [{ widget: "graph-plotter", narrative: "Place a centre and drag the scale factor slider: each vertex moves k times farther from the centre along the same ray. k = 2 makes side lengths 2× and area 4×; k = 0.5 shrinks both. Negative k flips to the opposite side — a bigger, flipped copy." }],

  // @discovery
  formalBlocks: [{ definition: "An ENLARGEMENT from centre O with scale factor k sends every point P to P' on ray OP with OP' = k × OP. k > 1 enlarges, 0 < k < 1 shrinks, k < 0 sends P to the opposite side (rotating 180° about O). Side lengths scale by k; AREA scales by $k^2$; angles stay the same. From the origin, a point (x, y) maps to (kx, ky).", examples: ["Centre (0,0), k = 2: (3, 4) → (6, 8); a base-3 height-4 triangle's area goes from 6 to 24 (×4).", "Centre (0,0), k = −1: (3, 4) → (−3, −4) — the origin-side mirror."], pitfall: "Don't forget the CENTRE: enlarging from (0,0) with k doubles coordinates, but from another centre you must measure distances FROM that centre first, then multiply, then shift back. Area always scales by k², never k.", altExplanations: ["GAME: scaling a boss arena from centre O — every point flies along the ray OP to k× its distance; k > 1 zooms in, 0 < k < 1 zooms out, negative k flips 180° through O. Side lengths ×k, AREA ×k²: doubling a 3-by-4 triangle makes its area four times bigger, never twice.", "FOOD: enlarging a recipe card photo — a 300% scale factor multiplies every length by 3, but the photo's paper area grows by 3×3 = 9. Measure distances FROM the print centre first, multiply, then shift back; area always scales by k²."] }],
  gutChecks: [{ prompt: "How does area change under a scale factor k?", answer: "Side lengths scale by k, so area (two dimensions) scales by k × k = k² — quadrupling for k = 2." }],
  quiz: {
    pool: [
      // @q01
      { id: "U27L2-mcq-1", type: "mcq", category: "procedural", prompt: "Enlarge (2, 5) by k = 3 about the origin. New point = …", options: [ { id: "a", text: "(6, 15)" }, { id: "b", text: "(5, 8)" }, { id: "c", text: "(23, 53)" }, { id: "d", text: "(-6, -15)" } ], correctOptionId: "a", diagnoses: { b: "(5, 8) adds 3 — enlarge multiplies.", c: "(23, 53) string-concatenates the 3.", d: "(-6, -15) uses k = -3." }, explanation: "(2×3, 5×3) = (6, 15).", hints: ["Multiply by k.", "× 3 each.", "(6, 15)."] },
      // @q02
      { id: "U27L2-mcq-2", type: "mcq", category: "conceptual", prompt: "k = 0.5 from the origin sends a side of length 8 to…", options: [ { id: "a", text: "16" }, { id: "b", text: "4" }, { id: "c", text: "8" }, { id: "d", text: "0.5" } ], correctOptionId: "b", diagnoses: { a: "16 multiplies by 2, not 0.5.", c: "8 is unchanged — k = 1.", d: "0.5 is the factor, not the side." }, explanation: "8 × 0.5 = 4.", hints: ["× 0.5.", "4.", "4."] },
      // @q03
      { id: "U27L2-mcq-3", type: "mcq", category: "word", prompt: "A photo enlarged by k = 2. Its area becomes…", options: [ { id: "a", text: "8× the original" }, { id: "b", text: "2× the original" }, { id: "c", text: "4× the original" }, { id: "d", text: "the same" } ], correctOptionId: "c", diagnoses: { b: "2× is the LINEAR scale, area squares it.", a: "8× would need 3-D scaling.", d: "Scaling changes area unless k = 1." }, explanation: "Area scales by k² = 2² = 4.", hints: ["k² = 4.", "Area × 4.", "4×."] },
      // @q04
      { id: "U27L2-mcq-4", type: "mcq", category: "procedural", prompt: "Enlarge (3, −2) by k = −1 about the origin. New point = …", options: [ { id: "a", text: "(0, 0)" }, { id: "b", text: "(3, 2)" }, { id: "c", text: "(−3, −2)" }, { id: "d", text: "(−3, 2)" } ], correctOptionId: "d", diagnoses: { b: "(3, 2) reflects across the x-axis only.", c: "(−3, −2) is the k = 1 point unchanged.", a: "(0, 0) would be the centre itself." }, explanation: "k = −1 sends each point to the origin-side opposite: (−3, 2).", hints: ["Negate both.", "(−3, 2).", "(−3, 2)."] },
      // @q05
      { id: "U27L2-mcq-5", type: "mcq", category: "conceptual", prompt: "Under enlargement, angles…", options: [ { id: "a", text: "stay the same" }, { id: "b", text: "multiply by k" }, { id: "c", text: "halve" }, { id: "d", text: "flip sign" } ], correctOptionId: "a", diagnoses: { b: "Angles don't scale — the shape just resizes.", c: "Halving isn't part of enlargement.", d: "Only k < 0 flips orientation, not angle sizes." }, explanation: "Enlargement is a similar-copy transformation — angles are preserved.", hints: ["Similar shapes.", "Angles unchanged.", "Stay the same."] },
      // @q06
      { id: "U27L2-mcq-6", type: "mcq", category: "word", prompt: "A poster printed at 150% (k = 1.5). Its area is about…", options: [ { id: "a", text: "1.5× the original" }, { id: "b", text: "2.25× the original" }, { id: "c", text: "3× the original" }, { id: "d", text: "the same" } ], correctOptionId: "b", diagnoses: { a: "1.5× is the linear scale; area squares it.", c: "3× doubles 1.5 — not the area rule.", d: "Any k ≠ 1 changes area." }, explanation: "Area scales by k² = 1.5² = 2.25.", hints: ["1.5².", "2.25×.", "2.25×."] },
      // @q07
      { id: "U27L2-num-1", type: "numeric-input", category: "procedural", prompt: "Enlarge (4, −3) by k = 2 about the origin. New x-coordinate = …", answer: 8, tolerance: 0, explanation: "4 × 2 = 8.", hints: ["× 2.", "8.", "8."] },
      // @q08
      { id: "U27L2-num-2", type: "numeric-input", category: "procedural", prompt: "A square of side 3 is enlarged by k = 3. New side length = …", answer: 9, tolerance: 0, explanation: "3 × 3 = 9.", hints: ["× 3.", "9.", "9."] },
      // @q09
      { id: "U27L2-num-3", type: "numeric-input", category: "conceptual", prompt: "A triangle's area is 5 cm², enlarged by k = 2. New area in cm².", answer: 20, tolerance: 0, unit: "cm²", explanation: "5 × 2² = 20 cm².", hints: ["× k² = 4.", "5 × 4.", "20."] },
      // @q10
      { id: "U27L2-frac-1", type: "fraction-input", category: "conceptual", prompt: "An enlargement by k = 0.5: the image's area is what fraction of the original?", numerator: 1, denominator: 4, acceptEquivalent: true, explanation: "k² = 0.5² = 0.25 = 1/4.", hints: ["0.5² = 0.25.", "1/4.", "1/4."] },
      // @q11
      { id: "U27L2-tf-1", type: "true-false-justify", category: "conceptual", prompt: "k = −2 enlarges AND flips the shape to the opposite side of the centre.", isTrue: true, explanation: "Negative k mirrors through the centre while scaling by 2.", hints: ["Sign = flip.", "2 = scale.", "True."] },
      // @q12
      { id: "U27L2-tf-2", type: "true-false-justify", category: "conceptual", prompt: "Area scales by k, not k².", isTrue: false, explanation: "Two dimensions each scale by k, so area scales by k × k = k².", hints: ["Length × width.", "k × k.", "False — k²."] },
      // @q13
      { id: "U27L2-order-1", type: "order-steps", category: "word", prompt: "Order the steps to enlarge (3, 4) by k = 2 about the origin.", sequence: ["Measure from centre: (3, 4)", "Multiply each coordinate by 2", "Image: (6, 8)"], diagnoses: { "Measure from centre: (3, 4)@1": "Measure from the centre first.", "Multiply each coordinate by 2@0": "Then multiply.", "Image: (6, 8)@0": "State the image last." }, explanation: "Measure, multiply, report.", hints: ["(3, 4).", "× 2.", "(6, 8)."] },
      // @q14
      { id: "U27L2-drag-1", type: "drag-match", category: "conceptual", prompt: "Match each change to its scaling rule.", pairs: [ { source: "Side length", target: "× k" }, { source: "Area", target: "× k²" }, { source: "Angle", target: "unchanged" } ], diagnoses: { "Side length->× k²": "Length scales linearly by k.", "Area->× k": "Area squares the factor.", "Angle->× k": "Angles are preserved." }, explanation: "Length × k, area × k², angles unchanged.", hints: ["Length k.", "Area k².", "Angles same."] },
      // @q15
      { id: "U27L2-graph-1", type: "graph-interact", category: "word", prompt: "Enlarge (2, 3) by k = 4 about the origin. Set the slider to the NEW X-coordinate (key: value).", challenge: "Set the slider to 8.", validate: { value: 8 }, tolerance: 0.01, explanation: "2 × 4 = 8.", hints: ["× 4.", "8.", "8."] }
    ],
    selection: { procedural: 2, conceptual: 2, word: 1 },
    passThreshold: 0.8,
  },
  commonMistakes: [
    { wrongPattern: "adds instead of multiplying for k", diagnosis: "Enlargement multiplies coordinates by k — adding shifts instead.", hint: "× k, not + k." },
    { wrongPattern: "scales area by k not k²", diagnosis: "Two dimensions scale independently, so area multiplies by k².", hint: "k × k." },
    { wrongPattern: "ignores the centre for non-origin enlargements", diagnosis: "Measure FROM the centre first, multiply, then shift back.", hint: "Centre first." },
  ],
  recallTags: ["enlargement", "scale factor", "centre", "area scaling", "similar"],
  discovery: {
    challenges: [
      { instruction: "Enlarge a unit square by k = 2 and count the new area.", observe: "The 4-unit square shows 16 little squares — 4× the original 4." },
      { instruction: "Enlarge by k = 0.5 instead.", observe: "Lengths halve; area quarters to 1/4 — k² again." },
    ],
    predict: { prompt: "Enlarging a triangle by k = 3 multiplies its AREA by…", options: [{ id: "a", text: "9" }, { id: "b", text: "3" }, { id: "c", text: "6" }], reveal: "9 — k² = 3² = 9. Doubling dimensions quadruples area; tripling nonuples it." },
    sayItYourWay: { prompt: "What is an enlargement?", phrasings: [{ id: "a", text: "Moving every point k times farther from a fixed centre along a ray", correct: true, why: "The centre and scale factor pin the copy." }, { id: "b", text: "Just making a shape bigger", correct: false, why: "k < 1 shrinks, and you need a centre." }, { id: "c", text: "Adding k to every coordinate", correct: false, why: "That's a translation, not scaling." }], formalName: "enlargement — OP' = k × OP from centre O; area scales by k²" },
    stretch: "Coordinates can also MEASURE: the distance between two points is Pythagoras in disguise, and the midpoint is just an average. Next: distance and midpoint formulas.", 
  },
};
