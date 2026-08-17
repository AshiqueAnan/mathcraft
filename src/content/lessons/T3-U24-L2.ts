import type { Lesson } from "../schema";

export const T3U24L2: Lesson = {
  // @meta
  id: "T3-U24-L2",
  tier: 3,
  unit: "Compound & real problems",
  title: "Slices of a Circle",
  prerequisites: ["T3-U23-L3","T3-U23-L4","T3-U24-L1"],
  estimatedMinutes: 12,
  hook: { question: "A pizza slice with a 60° angle takes 60/360 of the whole pizza. Its curved edge — the arc — is that same fraction of the circumference, and its inside is that fraction of the area. Every slice is the full circle's circumference and area, scaled by angle/360.", type: "real-world" },
  intuitionBlocks: [{ widget: "fraction-circles", narrative: "Spin a radius through an angle and shade the swept sector: it's the same fraction of the circle as the angle is of 360°. Watch the arc length and sector area both scale with that fraction." }],

  // @discovery
  formalBlocks: [{ definition: "A sector is a pizza slice: two radii and the arc between them. The fraction of the full circle is $\\tfrac{\\theta}{360}$. Arc length $= \\tfrac{\\theta}{360} \\times 2\\pi r$; sector area $= \\tfrac{\\theta}{360} \\times \\pi r^2$. A 90° sector is 1/4: arc = ¼ × 2πr, area = ¼ × πr².", examples: ["60° sector, r = 6 cm: fraction 60/360 = 1/6. Arc = 1/6 × 2π(6) = 2π ≈ 6.28 cm; area = 1/6 × π(36) = 6π ≈ 18.85 cm².", "Quarter circle r = 8 m: area = ¼ × π × 64 = 16π ≈ 50.27 m²."], pitfall: "The angle must be in degrees for the /360 fraction. Don't multiply by the angle alone — a 60° sector isn't 60 × something; it's 60/360 of the whole.", altExplanations: ["FOOD: a sector is a pizza slice — the fraction θ/360 of the full circle. Same fraction drives both the crust (arc) and the cheese (area): arc = θ/360 × 2πr, area = θ/360 × πr². A 90° slice is a quarter of both.", "GAME: a sector is a pie-chart segment of a circular map — its share of the rim and of the interior both scale by θ/360. Sweep a 60° segment and both the boundary and the surface take 1/6 of the whole."] }],
  gutChecks: [{ prompt: "Why is the same fraction used for both arc and area?", answer: "Both are proportional shares of the circle: sweep the angle and the rim and the inside each scale by θ/360." }],
  quiz: {
    pool: [
      // @q01
      { id: "U24L2-mcq-1", type: "mcq", category: "procedural", prompt: "A 90° sector is what fraction of its circle?", options: [ { id: "a", text: "1/4" }, { id: "b", text: "1/3" }, { id: "c", text: "1/2" }, { id: "d", text: "1/6" } ], correctOptionId: "a", diagnoses: { b: "1/3 would be 120°.", c: "1/2 is 180°.", d: "1/6 is 60°." }, explanation: "90/360 = 1/4.", hints: ["90 out of 360.", "1/4.", "1/4."] },
      // @q02
      { id: "U24L2-mcq-2", type: "mcq", category: "conceptual", prompt: "A sector's arc length is…", options: [ { id: "a", text: "the fraction θ/360 of the area" }, { id: "b", text: "the fraction θ/360 of the circumference" }, { id: "c", text: "the whole circumference" }, { id: "d", text: "half the diameter" } ], correctOptionId: "b", diagnoses: { a: "Area share is the sector area, not the arc.", c: "Only a 360° sector has the whole rim.", d: "Half the diameter is a radius, not an arc." }, explanation: "The rim share scales with θ/360: arc = θ/360 × 2πr.", hints: ["Rim share.", "θ/360 × circumference.", "That."] },
      // @q03
      { id: "U24L2-mcq-3", type: "mcq", category: "word", prompt: "A 60° pizza slice from a 12-inch pizza (r = 6 in). Arc length ≈ …", options: [ { id: "a", text: "37.7 in" }, { id: "b", text: "12.56 in" }, { id: "c", text: "6.28 in" }, { id: "d", text: "3.14 in" } ], correctOptionId: "c", diagnoses: { b: "12.56 is a semicircle's arc (180°).", a: "37.7 is the FULL circumference.", d: "3.14 is the full circle's diameter-worth, not a 60° arc." }, explanation: "60/360 = 1/6; arc = 1/6 × 2π(6) = 2π ≈ 6.28 in.", hints: ["Fraction = 1/6.", "1/6 × 2π × 6.", "≈ 6.28."] },
      // @q04
      { id: "U24L2-mcq-4", type: "mcq", category: "procedural", prompt: "Quarter circle (90°), r = 8 m. Its sector area is…", options: [ { id: "a", text: "32π m²" }, { id: "b", text: "64π m²" }, { id: "c", text: "4π m²" }, { id: "d", text: "16π m²" } ], correctOptionId: "d", diagnoses: { b: "64π is the FULL circle's area.", c: "4π divides by r instead of using r².", a: "32π is the full area with a wrong share." }, explanation: "¼ × π(64) = 16π m².", hints: ["Quarter = 1/4.", "¼ × π × 64.", "16π."] },
      // @q05
      { id: "U24L2-mcq-5", type: "mcq", category: "conceptual", prompt: "Doubling a sector's radius (same angle) multiplies its area by…", options: [ { id: "a", text: "4" }, { id: "b", text: "2" }, { id: "c", text: "8" }, { id: "d", text: "1" } ], correctOptionId: "a", diagnoses: { b: "×2 would scale the arc, not the area.", c: "×8 is volume-like scaling.", d: "Area always scales with r²." }, explanation: "θ/360 × π(2r)² = 4 × (θ/360 × πr²).", hints: ["r² scales.", "(2r)² = 4r².", "× 4."] },
      // @q06
      { id: "U24L2-mcq-6", type: "mcq", category: "word", prompt: "A 120° sector from a wheel of radius 9 cm. Sector area ≈ …", options: [ { id: "a", text: "254.5 cm²" }, { id: "b", text: "84.8 cm²" }, { id: "c", text: "42.4 cm²" }, { id: "d", text: "28.3 cm²" } ], correctOptionId: "b", diagnoses: { a: "254.5 is the FULL circle's area.", c: "42.4 halves the correct answer.", d: "28.3 is the 120° arc, not the area." }, explanation: "120/360 = 1/3; ⅓ × π × 81 ≈ 84.8 cm².", hints: ["Fraction = 1/3.", "⅓ × π × 81.", "≈ 84.8."] },
      // @q07
      { id: "U24L2-num-1", type: "numeric-input", category: "procedural", prompt: "A 60° sector: its fraction of the circle is 1 out of N equal slices. What is N?", answer: 6, tolerance: 0, explanation: "60/360 = 1/6 — six equal 60° slices fit.", hints: ["360 ÷ 60.", "6 slices.", "6."] },
      // @q08
      { id: "U24L2-num-2", type: "numeric-input", category: "procedural", prompt: "Semicircle (180°) radius 4 m. Arc length in m (use π ≈ 3.14).", answer: 12.56, tolerance: 0.1, unit: "m", explanation: "½ × 2π(4) = 4π ≈ 12.56 m.", hints: ["Half the circumference.", "½ × 2π × 4.", "≈ 12.56."] },
      // @q09
      { id: "U24L2-num-3", type: "numeric-input", category: "conceptual", prompt: "A sector's angle is 30°. What fraction of the circle? (enter as fraction)", answer: 0.0833, tolerance: 0.01, acceptFractions: true, explanation: "30/360 = 1/12 ≈ 0.0833.", hints: ["30 out of 360.", "1/12.", "1/12."] },
      // @q10
      { id: "U24L2-frac-1", type: "fraction-input", category: "conceptual", prompt: "What fraction of a circle is a 90° sector?", numerator: 1, denominator: 4, acceptEquivalent: true, explanation: "90/360 = 1/4.", hints: ["90 over 360.", "¼.", "1/4."] },
      // @q11
      { id: "U24L2-tf-1", type: "true-false-justify", category: "conceptual", prompt: "A sector's arc length is θ/360 of the circumference.", isTrue: true, explanation: "The rim's share scales with the angle's fraction of 360°.", hints: ["Rim share.", "θ/360 of circumference.", "True."] },
      // @q12
      { id: "U24L2-tf-2", type: "true-false-justify", category: "conceptual", prompt: "A 30° sector's area is 30 times the unit area.", isTrue: false, explanation: "It's 30/360 = 1/12 of the full area, not 30 times anything.", hints: ["Divide by 360.", "1/12 share.", "False."] },
      // @q13
      { id: "U24L2-order-1", type: "order-steps", category: "word", prompt: "Order the steps to find a 45° sector's area (r = 8).", sequence: ["Fraction: 45/360 = 1/8", "Full circle area: π × 64", "Apply the share: 1/8 × 64π = 8π"], diagnoses: { "Fraction: 45/360 = 1/8@1": "Find the fraction first.", "Full circle area: π × 64@0": "Then the full area.", "Apply the share: 1/8 × 64π = 8π@0": "Multiply by the share last." }, explanation: "Fraction, full area, shared area.", hints: ["45/360 = 1/8.", "πr² = 64π.", "⅛ × 64π."] },
      // @q14
      { id: "U24L2-drag-1", type: "drag-match", category: "conceptual", prompt: "Match each sector angle to its fraction.", pairs: [ { source: "90°", target: "1/4" }, { source: "120°", target: "1/3" }, { source: "60°", target: "1/6" } ], diagnoses: { "90°->1/3": "90/360 = ¼.", "120°->1/6": "120/360 = ⅓.", "60°->1/4": "60/360 = ⅙." }, explanation: "Divide each angle by 360 and simplify.", hints: ["90/360 = ¼.", "120/360 = ⅓.", "60/360 = ⅙."] },
      // @q15
      { id: "U24L2-graph-1", type: "graph-interact", category: "word", prompt: "A sector is 1/4 of a circle with r = 10. Set the slider to its AREA (key: value).", challenge: "Set the slider to 78.5.", validate: { value: 78.5 }, tolerance: 0.1, explanation: "¼ × π × 100 ≈ 78.5.", hints: ["¼ of πr².", "¼ × 314.", "≈ 78.5."] }
    ],
    selection: { procedural: 2, conceptual: 2, word: 1 },
    passThreshold: 0.8,
  },
  commonMistakes: [
    { wrongPattern: "uses angle without /360", diagnosis: "A sector's share is θ/360 of the whole — never θ × whole.", hint: "Divide the angle by 360 first." },
    { wrongPattern: "applies fraction to wrong measure", diagnosis: "Arc uses the circumference; area uses πr² — keep each share with its own full-circle measure.", hint: "Rim → circumference, inside → πr²." },
    { wrongPattern: "forgets to simplify the fraction", diagnosis: "Simplify θ/360 before multiplying to avoid big mistakes (60/360 = 1/6).", hint: "Reduce first." },
  ],
  recallTags: ["sector", "arc", "circle", "angle", "fraction"],
  discovery: {
    challenges: [
      { instruction: "Spin a radius through 90° and shade the sector.", observe: "It sweeps 1/4 of the rim and 1/4 of the inside." },
      { instruction: "Spin through 30° instead.", observe: "Both the arc and the area shrink to 1/12 of the whole." },
    ],
    predict: { prompt: "A 60° sector's area is what fraction of the full circle?", options: [{ id: "a", text: "1/6" }, { id: "b", text: "1/3" }, { id: "c", text: "1/4" }], reveal: "1/6 — 60/360 = 1/6. The slice's share of the angle is its share of every part of the circle." },
    sayItYourWay: { prompt: "How would you describe a sector's arc?", phrasings: [{ id: "a", text: "The same fraction of the circumference as the angle is of 360°", correct: true, why: "The angle's share scales the rim proportionally." }, { id: "b", text: "The full circle's rim, always", correct: false, why: "Only a full 360° loop has the whole rim." }, { id: "c", text: "The radius doubled", correct: false, why: "That's the diameter, not the curved edge." }], formalName: "sector and arc — share θ/360 of the circle's circumference and area (arc = θ/360 × 2πr, area = θ/360 × πr²)" },
    stretch: "Real problems rarely hand you clean shapes — walls, paint cans, tile packs. Next: unit discipline and estimation in paint, tiles, and fencing.", 
  },
};
