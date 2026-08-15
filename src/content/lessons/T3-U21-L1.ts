import type { Lesson } from "../schema";

export const T3U21L1: Lesson = {
  // @meta
  id: "T3-U21-L1",
  tier: 3,
  unit: "Polygons & circles",
  title: "Chopping Polygons Into Triangles",
  prerequisites: ["T3-U20-L4"],
  estimatedMinutes: 12,
  hook: { question: "A pentagon's angles feel unknowable — five corners, no pattern. But cut it from one vertex to the others and it splits into 3 triangles. Each triangle holds 180°: 3 × 180 = 540°. Every polygon's angle sum hides in its triangles.", type: "puzzle" },
  intuitionBlocks: [{ widget: "geometry-playground", narrative: "Split a polygon into triangles from one vertex and count. A quadrilateral → 2 triangles, pentagon → 3, hexagon → 4. The count is always sides − 2, so the interior sum is (sides − 2) × 180°." }],

  // @discovery
  formalBlocks: [{ definition: "An n-sided polygon splits into n − 2 triangles from a single vertex. Interior angle sum = (n − 2) × 180°. For a regular n-gon (all angles equal), each interior angle = (n − 2) × 180° / n.", examples: ["Quadrilateral: (4 − 2) × 180 = 360°.", "Pentagon: (5 − 2) × 180 = 540°."], pitfall: "The triangle count is n − 2, not n. A pentagon makes 3 triangles — counting 5 would give 900°, which is wrong.", altExplanations: ["FOOD: chopping an n-sided pizza polygon — from one corner you can cut n−2 non-overlapping triangles inside it (a pentagon gives 3). Each triangle is 180°, so the interior sum is (n−2)×180.", "GAME: wireframe maps — any polygon's interior can be triangulated from a single vertex into n−2 triangle zones. A hexagon opens into 4 triangles: 4×180 = 720° interior."] }],
  gutChecks: [{ prompt: "Interior angle sum of a hexagon?", answer: "(6 − 2) × 180 = 720°." }],
  quiz: {
    pool: [
      // @q01
      { id: "U21L1-mcq-1", type: "mcq", category: "procedural", prompt: "A quadrilateral splits into how many triangles from one vertex?", options: [ { id: "a", text: "2" }, { id: "b", text: "4" }, { id: "c", text: "3" }, { id: "d", text: "1" } ], correctOptionId: "a", diagnoses: { b: "4 is the side count; triangles are sides − 2.", c: "3 triangles is a pentagon.", d: "One triangle can't tile a quadrilateral." }, explanation: "n − 2 = 4 − 2 = 2 triangles.", hints: ["n = 4 sides.", "n − 2.", "2."] },
      // @q02
      { id: "U21L1-mcq-2", type: "mcq", category: "conceptual", prompt: "Why does the triangle count use n − 2?", options: [ { id: "a", text: "Two sides of the polygon become the 'ends', so only n − 2 triangles fit between the rays" }, { id: "b", text: "You always remove 2 sides when cutting" }, { id: "c", text: "Because triangles have 3 sides" }, { id: "d", text: "It's an approximation" } ], correctOptionId: "a", diagnoses: { b: "It's about geometry of the fan, not removing sides.", c: "The 3-side fact doesn't give n − 2 by itself.", d: "It's exact, not approximate." }, explanation: "A fan from one vertex uses the two adjacent sides as the outer triangle edges — leaving n − 2 triangles.", hints: ["Fan from a vertex.", "n − 2 triangles.", "Exact."] },
      // @q03
      { id: "U21L1-mcq-3", type: "mcq", category: "word", prompt: "A honeycomb cell is a regular hexagon. Its interior angle sum is…", options: [ { id: "a", text: "720°" }, { id: "b", text: "360°" }, { id: "c", text: "540°" }, { id: "d", text: "1080°" } ], correctOptionId: "a", diagnoses: { b: "360° is a quadrilateral.", c: "540° is a pentagon.", d: "1080° would be an octagon." }, explanation: "(6 − 2) × 180 = 720°.", hints: ["6 sides.", "(4) × 180.", "720°."] },
      // @q04
      { id: "U21L1-mcq-4", type: "mcq", category: "procedural", prompt: "Interior angle sum of an OCTAGON?", options: [ { id: "a", text: "1080°" }, { id: "b", text: "720°" }, { id: "c", text: "1440°" }, { id: "d", text: "360°" } ], correctOptionId: "a", diagnoses: { b: "720° is a hexagon.", c: "1440° is n × 180 without subtracting 2.", d: "360° is a quadrilateral." }, explanation: "(8 − 2) × 180 = 6 × 180 = 1080°.", hints: ["n = 8.", "6 × 180.", "1080°."] },
      // @q05
      { id: "U21L1-mcq-5", type: "mcq", category: "conceptual", prompt: "Regular decagon — the sum is 1440°. Each interior angle is…", options: [ { id: "a", text: "144°" }, { id: "b", text: "160°" }, { id: "c", text: "140°" }, { id: "d", text: "180°" } ], correctOptionId: "a", diagnoses: { b: "160° would be an 18-gon's angle.", c: "140° would need sum 1400.", d: "180° is a straight line, not one angle." }, explanation: "1440 ÷ 10 = 144° per angle.", hints: ["Divide by 10.", "144", "144°."] },
      // @q06
      { id: "U21L1-mcq-6", type: "mcq", category: "word", prompt: "A stop sign is a regular octagon. Each interior angle is…", options: [ { id: "a", text: "135°" }, { id: "b", text: "120°" }, { id: "c", text: "108°" }, { id: "d", text: "150°" } ], correctOptionId: "a", diagnoses: { b: "120° is a hexagon's angle.", c: "108° is a pentagon's.", d: "150° is a dodecagon's." }, explanation: "1080 ÷ 8 = 135°.", hints: ["Sum 1080°.", "÷ 8.", "135°."] },
      // @q07
      { id: "U21L1-num-1", type: "numeric-input", category: "procedural", prompt: "Interior angle sum of a PENTAGON?", answer: 540, tolerance: 0, explanation: "(5 − 2) × 180 = 540°.", hints: ["5 − 2 = 3.", "3 × 180.", "540°."] },
      // @q08
      { id: "U21L1-num-2", type: "numeric-input", category: "procedural", prompt: "A polygon's sum is 900°. How many sides?", answer: 7, tolerance: 0, explanation: "900 ÷ 180 = 5 → n − 2 = 5 → n = 7.", hints: ["900 ÷ 180.", "5 + 2.", "7 sides."] },
      // @q09
      { id: "U21L1-num-3", type: "numeric-input", category: "conceptual", prompt: "A regular hexagon — each interior angle?", answer: 120, tolerance: 0, explanation: "720 ÷ 6 = 120°.", hints: ["Sum 720°.", "÷ 6.", "120°."] },
      // @q10
      { id: "U21L1-frac-1", type: "fraction-input", category: "conceptual", prompt: "A triangle's share of a quadrilateral's 360° sum — write it as a fraction of the whole for ONE triangle.", numerator: 1, denominator: 2, acceptEquivalent: true, explanation: "Quadrilateral = 2 triangles; each holds 180° = 1/2 of 360°.", hints: ["2 triangles.", "1/2.", "1/2."] },
      // @q11
      { id: "U21L1-tf-1", type: "true-false-justify", category: "conceptual", prompt: "Every quadrilateral has interior sum 360°.", isTrue: true, explanation: "2 triangles × 180° = 360° — the formula (4 − 2) × 180.", hints: ["n − 2 = 2.", "2 × 180.", "True."] },
      // @q12
      { id: "U21L1-tf-2", type: "true-false-justify", category: "conceptual", prompt: "The interior sum formula uses (n − 1) × 180°.", isTrue: false, explanation: "It's (n − 2) × 180° — a quadrilateral is 360°, not 540°.", hints: ["n − 2.", "Quad = 360°.", "False."] },
      // @q13
      { id: "U21L1-order-1", type: "order-steps", category: "word", prompt: "Order the steps to find the sum for a hexagon.", sequence: ["Count sides: n = 6", "Triangles from one vertex: n − 2 = 4", "Multiply: 4 × 180° = 720°", "State: sum = 720°"], diagnoses: { "Count sides: n = 6@1": "Count first.", "Triangles from one vertex: n − 2 = 4@0": "Find triangles before multiplying.", "State: sum = 720°@0": "State last." }, explanation: "Count, subtract 2, multiply by 180, state.", hints: ["n = 6.", "n − 2 = 4.", "720°."] },
      // @q14
      { id: "U21L1-drag-1", type: "drag-match", category: "conceptual", prompt: "Match each polygon to its interior sum.", pairs: [ { source: "Triangle", target: "180°" }, { source: "Quadrilateral", target: "360°" }, { source: "Pentagon", target: "540°" } ], diagnoses: { "Triangle->360°": "Triangle is just 180°.", "Quadrilateral->540°": "Quad = 360°.", "Pentagon->180°": "Pentagon = 540°." }, explanation: "(n − 2) × 180 for each.", hints: ["n − 2.", "× 180.", "Match."] },
      // @q15
      { id: "U21L1-graph-1", type: "graph-interact", category: "word", prompt: "A regular pentagon's each-angle is 108°. Set the slider to the SUM of all five (key: value).", challenge: "Set the slider to 540.", validate: { value: 540 }, tolerance: 0.01, explanation: "5 × 108 = 540° — or (5 − 2) × 180.", hints: ["5 × 108.", "540.", "540°."] }
    ],
    selection: { procedural: 2, conceptual: 2, word: 1 },
    passThreshold: 0.8,
  },
  commonMistakes: [
    { wrongPattern: "counts n triangles instead of n − 2", diagnosis: "The fan from one vertex leaves n − 2 triangles.", hint: "Draw the fan: the sides adjacent to the vertex frame the first and last triangles." },
    { wrongPattern: "forgets to divide for regular angles", diagnosis: "Sum ÷ n gives each angle in a regular polygon.", hint: "Equal angles → divide the sum by the side count." },
    { wrongPattern: "uses 360° as the base", diagnosis: "360° is a quadrilateral's sum, not the general form.", hint: "Base is 180° × (n − 2)." },
  ],
  recallTags: ["polygons", "interior-sum", "triangulation", "regular"],
  discovery: {
    challenges: [
      { instruction: "Split a pentagon from one vertex and count the triangles.", observe: "Exactly 3 triangles appear — sides minus 2." },
      { instruction: "Do the same for a hexagon and read each triangle count.", observe: "4 triangles → 4 × 180 = 720°, matching the formula." },
    ],
    predict: { prompt: "A DECAGON's interior sum is…", options: [{ id: "a", text: "1440°" }, { id: "b", text: "1800°" }, { id: "c", text: "1080°" }], reveal: "1440° — ten sides make 8 triangles: 8 × 180. The fan-from-a-vertex idea scales to any polygon." },
    sayItYourWay: { prompt: "What is 'triangulating' a polygon?", phrasings: [{ id: "a", text: "Splitting it into triangles from a vertex to find its angle sum", correct: true, why: "Each triangle is 180°, and counting them gives (n − 2) × 180." }, { id: "b", text: "Making it into one giant triangle", correct: false, why: "Polygons keep their shape; the triangles stay inside." }, { id: "c", text: "Measuring its side lengths", correct: false, why: "Triangulation is about cutting, not measuring." }], formalName: "triangulation and the polygon interior-sum formula" },
    stretch: "Walk around any polygon and count your turns — every exterior turn adds to 360°, no matter the shape. The exterior walk is U21-L2.",
  },
};