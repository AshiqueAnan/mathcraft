import type { Lesson } from "../schema";

export const T3U23L3: Lesson = {
  // @meta
  id: "T3-U23-L3",
  tier: 3,
  unit: "Length, area, volume",
  title: "π Lives Here",
  prerequisites: ["T3-U22-L3","T3-U23-L1","T3-U23-L2"],
  estimatedMinutes: 12,
  hook: { question: "Roll a wheel one full turn and it travels exactly one circumference. Measure any circle and its round-the-edge length is always about 3.14 times its width across. That magic scale factor — π — appears in BOTH the rim and the inside of every circle.", type: "real-world" },
  intuitionBlocks: [{ widget: "number-line", narrative: "Mark a wheel's circumference on the number line: one diameter reaches 1, two diameters 2, and the rim lands just past 3 — at about 3.14159. Then slice a circle like a pizza and rearrange the wedges: they pack into a parallelogram whose base is the circumference half." }],

  // @discovery
  formalBlocks: [{ definition: "Every circle's circumference is $\\pi$ times its diameter: $C = \\pi d = 2\\pi r$ (diameter measure about 3.14 diameters around the rim). Slice a circle into wedges and reassemble them into a parallelogram: its base is half the circumference (πr) and its height is the radius (r), so area $A = \\pi r \\times r = \\pi r^2$.", examples: ["Circle radius 5 cm: C = 2 × π × 5 ≈ 31.4 cm; A = π × 25 ≈ 78.5 cm².", "Wheel diameter 0.7 m: one turn travels π × 0.7 ≈ 2.2 m."], pitfall: "Don't swap the formulas: diameter for circumference uses d, radius for area uses r². A common slip is using radius in C = πd (half) or diameter in A = πr² (four times too big).", altExplanations: ["MONEY: π is the currency exchange between diameter and rim — a 0.7 m wheel rolls π × 0.7 ≈ 2.2 m per turn. Slice a circle into wedges and restack them into a parallelogram: base = half the rim (πr), height = r, area = πr².", "FOOD: a pizza's crust length is π times its diameter — roll the wheel: about 3.14 diameters around the rim. Re-slice the pizza into thin wedges and lay them as a parallelogram: πr by r gives the round area."] }],
  gutChecks: [{ prompt: "Why does a circle's area look like a parallelogram's area after slicing?", answer: "Wedges reassemble so the base is πr (half the circumference) and height is r; base × height = πr × r = πr²." }],
  quiz: {
    pool: [
      // @q01
      { id: "U23L3-mcq-1", type: "mcq", category: "procedural", prompt: "A circle's diameter is 10 cm. Its circumference is closest to…", options: [ { id: "a", text: "31.4 cm" }, { id: "b", text: "15.7 cm" }, { id: "c", text: "78.5 cm" }, { id: "d", text: "62.8 cm" } ], correctOptionId: "a", diagnoses: { b: "15.7 uses the radius in πd — half the diameter.", c: "78.5 is the AREA, not the rim.", d: "62.8 is π × 2d." }, explanation: "C = πd ≈ 3.14 × 10 = 31.4 cm.", hints: ["Circumference = πd.", "3.14 × 10.", "C = πd ≈ 3.14 × 10 = 31.4 cm."] },
      // @q02
      { id: "U23L3-mcq-2", type: "mcq", category: "conceptual", prompt: "Roll a wheel: one full turn covers one…", options: [ { id: "a", text: "diameter" }, { id: "b", text: "circumference" }, { id: "c", text: "radius" }, { id: "d", text: "area" } ], correctOptionId: "b", diagnoses: { a: "A diameter is only part of the rim.", c: "Radius is half the width.", d: "Area is the inside, not the travel." }, explanation: "Every full turn rolls out exactly the circumference.", hints: ["Full turn = rim", "Circumference.", "Every full turn rolls out exactly the circumference."] },
      // @q03
      { id: "U23L3-mcq-3", type: "mcq", category: "word", prompt: "A bicycle wheel is 0.7 m across. One turn covers about…", options: [ { id: "a", text: "0.35 m" }, { id: "b", text: "1.4 m" }, { id: "c", text: "2.2 m" }, { id: "d", text: "4.4 m" } ], correctOptionId: "c", diagnoses: { b: "1.4 is the diameter doubled, not π times it.", a: "0.35 is the radius.", d: "4.4 is 2 × π × diameter." }, explanation: "C = πd ≈ 3.14 × 0.7 ≈ 2.2 m.", hints: ["π × diameter.", "3.14 × 0.7.", "C = πd ≈ 3.14 × 0.7 ≈ 2.2 m."] },
      // @q04
      { id: "U23L3-mcq-4", type: "mcq", category: "procedural", prompt: "Circle radius 4 cm. Its area is closest to…", options: [ { id: "a", text: "100.48 cm²" }, { id: "b", text: "25.12 cm²" }, { id: "c", text: "12.56 cm²" }, { id: "d", text: "50.24 cm²" } ], correctOptionId: "d", diagnoses: { b: "25.12 is circumference (2πr), not area.", c: "12.56 is πr with r = 4 — missing the square.", a: "100.48 uses diameter 8 in πr²." }, explanation: "A = πr² = π × 16 ≈ 50.24 cm².", hints: ["Square the radius.", "π × 16.", "A = πr² = π × 16 ≈ 50."] },
      // @q05
      { id: "U23L3-mcq-5", type: "mcq", category: "conceptual", prompt: "Double a circle's radius. Its area…", options: [ { id: "a", text: "quadruples" }, { id: "b", text: "doubles" }, { id: "c", text: "stays the same" }, { id: "d", text: "triples" } ], correctOptionId: "a", diagnoses: { b: "Doubling r doubles the circumference, not area.", c: "Scaling the radius always changes area.", d: "3× would need a ×√3 scale." }, explanation: "π(2r)² = 4πr² — four times.", hints: ["r² scales.", "(2r)² = 4r².", "π(2r)² = 4πr² — four times."] },
      // @q06
      { id: "U23L3-mcq-6", type: "mcq", category: "word", prompt: "A circular pond is 6 m wide. Fencing around it needs about…", options: [ { id: "a", text: "37.7 m" }, { id: "b", text: "18.8 m" }, { id: "c", text: "28.3 m" }, { id: "d", text: "9.4 m" } ], correctOptionId: "b", diagnoses: { a: "37.7 is 2πd — wrong formula.", c: "28.3 is the area, not the fence line.", d: "9.4 is πr — missing the doubling." }, explanation: "C = πd ≈ 3.14 × 6 ≈ 18.8 m.", hints: ["Diameter = 6.", "π × 6.", "C = πd ≈ 3.14 × 6 ≈ 18.8 m."] },
      // @q07
      { id: "U23L3-num-1", type: "numeric-input", category: "procedural", prompt: "Circle radius 3 m. Circumference in m (use π ≈ 3.14).", answer: 18.84, tolerance: 0.1, unit: "m", explanation: "C = 2πr = 2 × 3.14 × 3 ≈ 18.84 m.", hints: ["2πr.", "2 × 3.14 × 3.", "C = 2πr = 2 × 3."] },
      // @q08
      { id: "U23L3-num-2", type: "numeric-input", category: "procedural", prompt: "Circle radius 5 cm. Area in cm² (use π ≈ 3.14).", answer: 78.5, tolerance: 0.1, unit: "cm²", explanation: "A = πr² = 3.14 × 25 = 78.5 cm².", hints: ["Square the radius.", "3.14 × 25.", "A = πr² = 3.14 × 25 = 78.5 cm²."] },
      // @q09
      { id: "U23L3-num-3", type: "numeric-input", category: "conceptual", prompt: "A wheel diameter 1 m rolls 6.28 m. How many full turns?", answer: 2, tolerance: 0, explanation: "One turn = πd ≈ 3.14 m; 6.28 ÷ 3.14 = 2 turns.", hints: ["One turn ≈ 3.14 m.", "6.28 ÷ 3.14.", "One turn = πd ≈ 3."] },
      // @q10
      { id: "U23L3-frac-1", type: "fraction-input", category: "conceptual", prompt: "A semicircle is what fraction of its full circle?", numerator: 1, denominator: 2, acceptEquivalent: true, explanation: "Half the circumference and half the area.", hints: ["Half a circle.", "1/2.", "Half the circumference and half the area."] },
      // @q11
      { id: "U23L3-tf-1", type: "true-false-justify", category: "conceptual", prompt: "A circle's area is πr², but its circumference is 2πr.", isTrue: true, explanation: "Area squares the radius; circumference is the rim's length — different formulas, both use π.", hints: ["One squares, one multiplies.", "Both true.", "Area squares the radius; circumference is the rim's length — different formulas, both use π."] },
      // @q12
      { id: "U23L3-tf-2", type: "true-false-justify", category: "conceptual", prompt: "The circumference of a circle is 2π times its radius.", isTrue: true, explanation: "C = 2πr is the rim length; π times the diameter is the same.", hints: ["C = πd and d = 2r.", "2πr.", "C = 2πr is the rim length; π times the diameter is the same."] },
      // @q13
      { id: "U23L3-order-1", type: "order-steps", category: "word", prompt: "Order the steps to find a circle's area (radius 4).", sequence: ["Square the radius: 4² = 16", "Multiply by π: 16π", "Approximate: 16 × 3.14 = 50.24"], diagnoses: { "Square the radius: 4² = 16@1": "Square first.", "Multiply by π: 16π@0": "Then multiply by π.", "Approximate: 16 × 3.14 = 50.24@0": "Approximate last." }, explanation: "Square, multiply by π, then approximate.", hints: ["r².", "× π.", "Square, multiply by π, then approximate."] },
      // @q14
      { id: "U23L3-drag-1", type: "drag-match", category: "conceptual", prompt: "Match each measure to its formula.", pairs: [ { source: "Circumference", target: "πd" }, { source: "Circle area", target: "πr²" }, { source: "Diameter from radius", target: "2r" } ], diagnoses: { "Circumference->πr²": "πr² is for the inside.", "Circle area->πd": "πd is the rim.", "Diameter from radius->πd": "Diameter is just two radii." }, explanation: "Each measure has its own π-based rule.", hints: ["Rim = πd.", "Inside = πr².", "Twice the radius."] },
      // @q15
      { id: "U23L3-graph-1", type: "graph-interact", category: "word", prompt: "A circle's radius is 5. Set the slider to its AREA (key: value).", challenge: "A circle's radius is 5. — adjust the values below to match the condition.", validate: { value: 78.5 }, tolerance: 0.1, explanation: "A = π × 25 ≈ 78.5.", hints: ["π × 5².", "≈ 78.5.", "A = π × 25 ≈ 78."] }
    ],
    selection: { procedural: 2, conceptual: 2, word: 1 },
    passThreshold: 0.8,
  },
  commonMistakes: [
    { wrongPattern: "uses radius in circumference formula", diagnosis: "C = πd uses the diameter; if you only have r, double it first or use 2πr.", hint: "Diameter is two radii." },
    { wrongPattern: "confuses area and circumference", diagnosis: "Area (πr²) fills the inside; circumference (2πr) traces the rim.", hint: "Ask: inside or around?" },
    { wrongPattern: "squares the diameter instead of radius", diagnosis: "A = πr² must halve the diameter before squaring, else four times too big.", hint: "Halve to radius first." },
  ],
  recallTags: ["pi", "circle", "circumference", "area", "radius"],
  discovery: {
    challenges: [
      { instruction: "Roll a wheel and mark its circumference along the number line.", observe: "The rim spans about 3.14 diameters — always just past 3." },
      { instruction: "Slice the circle into wedges and reassemble them.", observe: "The wedge shape becomes a parallelogram with base πr and height r." },
    ],
    predict: { prompt: "A wheel is 1 m across. How far does one turn roll?", options: [{ id: "a", text: "About 3.14 m" }, { id: "b", text: "About 1.57 m" }, { id: "c", text: "About 6.28 m" }], reveal: "About 3.14 m — one circumference. Roll more wheels and π keeps showing up at 3.14159…" },
    sayItYourWay: { prompt: "How would you describe π?", phrasings: [{ id: "a", text: "How many diameters fit around the rim of any circle", correct: true, why: "It's the constant scale linking rim to diameter." }, { id: "b", text: "The area of a unit circle", correct: false, why: "That's a consequence, not the meaning." }, { id: "c", text: "A number that changes size with the circle", correct: false, why: "π is the same for every circle." }], formalName: "π (pi) — the ratio of circumference to diameter; C = 2πr and A = πr²" },
    stretch: "Circle slices are arcs and sectors — fractions of the full circle. Next: how to measure a pizza slice's edge and its area from the angle at the centre.", 
  },
};
