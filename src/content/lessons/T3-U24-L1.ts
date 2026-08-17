import type { Lesson } from "../schema";

export const T3U24L1: Lesson = {
  // @meta
  id: "T3-U24-L1",
  tier: 3,
  unit: "Compound & real problems",
  title: "Frankenstein Shapes",
  prerequisites: ["T3-U23-L1","T3-U23-L3","T3-U23-L4"],
  estimatedMinutes: 12,
  hook: { question: "A floor plan isn't one rectangle — it's L-shapes, notches, and balconies bolted together. Frankenstein shapes have no single formula, but they always break apart: split the monster into clean rectangles, or draw the big rectangle and SUBTRACT the missing piece. Both roads reach the same area.", type: "real-world" },
  intuitionBlocks: [{ widget: "fraction-bars", narrative: "Split an L-shaped floor into two rectangles and total their squares, or frame it with a big rectangle and take away the cut-out. Drag the split line to see both decompositions give the same count." }],

  // @discovery
  formalBlocks: [{ definition: "A compound (composite) shape's area is found by DECOMPOSITION. Split: cut it into rectangles/triangles whose dimensions you know and ADD their areas. Subtract: surround it with one big rectangle, find that area, then REMOVE the empty cut-out. Both strategies must agree — a great self-check.", examples: ["L-shape: two rectangles 3×4 and 5×2 → 12 + 10 = 22 units². Subtract: 8×4 − 5×2 = 32 − 10 = 22 units².", "Notched square 6×6 with a 2×3 corner removed → 36 − 6 = 30 units²."], pitfall: "Splitting needs dimensions you actually know. If a side length is missing, derive it from the overall dimensions before multiplying — don't guess the split.", altExplanations: ["GAME: composite shapes are loot-maps — split an L-shaped room into two rectangles you can measure, or surround it with one big rectangle and subtract the empty cut-out. Both routes count the same tiles, so they must agree: a built-in self-check.", "FOOD: an L-shaped cake pan — measure it as two rectangular pans added, or as a big rectangular pan minus the missing corner. Either way the same amount of batter; deriving the same number proves you didn't double count."] }],
  gutChecks: [{ prompt: "Why do split and subtract give the same answer?", answer: "Both count the same squares — the shape's area doesn't change just because you partition it differently." }],
  quiz: {
    pool: [
      // @q01
      { id: "U24L1-mcq-1", type: "mcq", category: "procedural", prompt: "An L-shape splits into 3×4 and 5×2 rectangles. Total area = …", options: [ { id: "a", text: "22 units²" }, { id: "b", text: "14 units²" }, { id: "c", text: "24 units²" }, { id: "d", text: "20 units²" } ], correctOptionId: "a", diagnoses: { b: "14 is 3+4+5+2 — should multiply each rectangle.", c: "24 is 3×4 + 8+? — the two rectangles add to 22.", d: "20 is one rectangle only." }, explanation: "12 + 10 = 22 units².", hints: ["Area of each rectangle.", "12 + 10.", "12 + 10 = 22 units²."] },
      // @q02
      { id: "U24L1-mcq-2", type: "mcq", category: "conceptual", prompt: "Why do split and subtract strategies give the same area?", options: [ { id: "a", text: "Subtract is more accurate" }, { id: "b", text: "Both count the same squares inside the shape" }, { id: "c", text: "Split only works for rectangles" }, { id: "d", text: "They're different answers" } ], correctOptionId: "b", diagnoses: { a: "Both are exact for straight-edged shapes.", c: "Split works for any compound of simple shapes.", d: "They must agree — great self-check." }, explanation: "Partitioning changes the counting, not the shape's area.", hints: ["Same shape inside.", "Same squares.", "Partitioning changes the counting, not the shape's area."] },
      // @q03
      { id: "U24L1-mcq-3", type: "mcq", category: "word", prompt: "A 6×6 patio has a 2×3 planter in one corner. Patio area (subtract) = …", options: [ { id: "a", text: "24 units²" }, { id: "b", text: "36 units²" }, { id: "c", text: "30 units²" }, { id: "d", text: "12 units²" } ], correctOptionId: "c", diagnoses: { b: "36 is the full square without removing the planter.", a: "24 is 6×4, not a proper subtract.", d: "12 is just the planter's area." }, explanation: "36 − 6 = 30 units².", hints: ["Big square minus cut-out.", "36 − 6.", "36 − 6 = 30 units²."] },
      // @q04
      { id: "U24L1-mcq-4", type: "mcq", category: "procedural", prompt: "Notched rectangle 8×5 with 3×2 removed. Area = …", options: [ { id: "a", text: "16 units²" }, { id: "b", text: "40 units²" }, { id: "c", text: "28 units²" }, { id: "d", text: "34 units²" } ], correctOptionId: "d", diagnoses: { b: "40 is the full rectangle before removing.", c: "28 is 8×5 − 12 — wrong removal size.", a: "16 halves something groundlessly." }, explanation: "40 − 6 = 34 units².", hints: ["8 × 5 = 40.", "Remove 3 × 2 = 6.", "40 − 6 = 34 units²."] },
      // @q05
      { id: "U24L1-mcq-5", type: "mcq", category: "conceptual", prompt: "Splitting a compound shape requires…", options: [ { id: "a", text: "pieces with known dimensions" }, { id: "b", text: "all pieces the same size" }, { id: "c", text: "at least three pieces" }, { id: "d", text: "only squares" } ], correctOptionId: "a", diagnoses: { b: "Pieces can differ.", c: "Two pieces often suffice.", d: "Rectangles and triangles work too." }, explanation: "You can add areas only when you know each piece's dimensions.", hints: ["What does area need?", "Known dimensions.", "You can add areas only when you know each piece's dimensions."] },
      // @q06
      { id: "U24L1-mcq-6", type: "mcq", category: "word", prompt: "A room is 7 m × 5 m with a 2 m × 2 m wardrobe. Carpet area (subtract) = …", options: [ { id: "a", text: "35 m²" }, { id: "b", text: "31 m²" }, { id: "c", text: "33 m²" }, { id: "d", text: "14 m²" } ], correctOptionId: "b", diagnoses: { a: "35 m² is the full floor — the wardrobe isn't carpeted.", c: "33 removes only 2 m² — the wardrobe is 4 m².", d: "14 is half the floor." }, explanation: "35 − 4 = 31 m².", hints: ["7 × 5 = 35.", "Remove 2 × 2 = 4.", "35 − 4 = 31 m²."] },
      // @q07
      { id: "U24L1-num-1", type: "numeric-input", category: "procedural", prompt: "L-shape: rectangles 4×3 and 6×2. Area in units².", answer: 24, tolerance: 0, unit: "units²", explanation: "12 + 12 = 24 units².", hints: ["Each rectangle's area.", "12 + 12.", "12 + 12 = 24 units²."] },
      // @q08
      { id: "U24L1-num-2", type: "numeric-input", category: "procedural", prompt: "10 × 8 rectangle with a 4 × 3 corner cut out. Area in units².", answer: 68, tolerance: 0, unit: "units²", explanation: "80 − 12 = 68 units².", hints: ["Full rectangle first.", "80 − 12.", "80 − 12 = 68 units²."] },
      // @q09
      { id: "U24L1-num-3", type: "numeric-input", category: "conceptual", prompt: "9 × 9 square with a 3 × 3 square removed from a corner. Remaining area.", answer: 72, tolerance: 0, explanation: "81 − 9 = 72 units².", hints: ["Big square minus small.", "81 − 9.", "81 − 9 = 72 units²."] },
      // @q10
      { id: "U24L1-frac-1", type: "fraction-input", category: "conceptual", prompt: "A 2×2 planter sits inside a 6×6 garden. What fraction of the garden is the planter?", numerator: 1, denominator: 9, acceptEquivalent: true, explanation: "Planter 4, garden 36: 4/36 = 1/9.", hints: ["4 out of 36.", "1/9.", "Planter 4, garden 36: 4/36 = 1/9."] },
      // @q11
      { id: "U24L1-tf-1", type: "true-false-justify", category: "conceptual", prompt: "Split and subtract strategies must agree on the same area.", isTrue: true, explanation: "Both partition the same shape — different counting, same total.", hints: ["Same shape.", "Same squares.", "Both partition the same shape — different counting, same total."] },
      // @q12
      { id: "U24L1-tf-2", type: "true-false-justify", category: "conceptual", prompt: "A compound shape always has a single formula for its area.", isTrue: false, explanation: "No single formula — decompose into known shapes and add/subtract.", hints: ["Break it apart.", "Add the pieces.", "No single formula — decompose into known shapes and add/subtract."] },
      // @q13
      { id: "U24L1-order-1", type: "order-steps", category: "word", prompt: "Order the steps to subtract a cut-out's area.", sequence: ["Find the big rectangle's area", "Find the cut-out's area", "Subtract: big − cut-out"], diagnoses: { "Find the big rectangle's area@1": "Start with the big shape.", "Find the cut-out's area@0": "Then the cut-out.", "Subtract: big − cut-out@0": "Subtract last." }, explanation: "Big area, small area, subtract.", hints: ["Big shape first.", "Then the hole.", "Big area, small area, subtract."] },
      // @q14
      { id: "U24L1-drag-1", type: "drag-match", category: "conceptual", prompt: "Match each strategy to its action.", pairs: [ { source: "Split", target: "add pieces" }, { source: "Subtract", target: "remove a hole" }, { source: "Check", target: "both agree" } ], diagnoses: { "Split->remove a hole": "Split adds pieces together.", "Subtract->add pieces": "Subtract removes an empty region.", "Check->add pieces": "The check compares the two totals." }, explanation: "Split adds, subtract removes, check compares.", hints: ["Add for split.", "Remove for subtract.", "Compare to check."] },
      // @q15
      { id: "U24L1-graph-1", type: "graph-interact", category: "word", prompt: "A 10×6 rectangle has a 4×3 piece removed. Set the slider to the remaining area (key: value).", challenge: "A 10×6 rectangle has a 4×3 piece removed. — adjust the values below to match the condition.", validate: { value: 48 }, tolerance: 0.01, explanation: "60 − 12 = 48.", hints: ["10 × 6 = 60.", "60 − 12.", "60 − 12 = 48."] }
    ],
    selection: { procedural: 2, conceptual: 2, word: 1 },
    passThreshold: 0.8,
  },
  commonMistakes: [
    { wrongPattern: "adds overlapping pieces", diagnosis: "Split pieces must NOT overlap — you'd count their shared squares twice.", hint: "Draw clean cuts at right angles." },
    { wrongPattern: "uses unlabelled side lengths", diagnosis: "Every piece needs a known dimension; derive missing ones from the overall shape.", hint: "Subtract to find the missing side." },
    { wrongPattern: "forgets to remove in subtract strategy", diagnosis: "Subtract means big rectangle minus the hole, not stop at the big area.", hint: "Remove the empty cut-out." },
  ],
  recallTags: ["compound shape", "composite", "split", "subtract", "area"],
  discovery: {
    challenges: [
      { instruction: "Split the L-shape two ways and add each pair of rectangles.", observe: "Both pairs sum to the same area — the partition doesn't matter." },
      { instruction: "Frame the L-shape with a big rectangle and subtract the missing corner.", observe: "Same total again — subtract agrees with split." },
    ],
    predict: { prompt: "A 5×8 rectangle with a 4×2 corner removed — its area is…", options: [{ id: "a", text: "32" }, { id: "b", text: "40" }, { id: "c", text: "24" }], reveal: "32 — 40 − 8. The big rectangle is 5 × 8 = 40 and the cut-out is 4 × 2 = 8." },
    sayItYourWay: { prompt: "How do you find a Frankenstein shape's area?", phrasings: [{ id: "a", text: "Break it into known shapes and add or subtract", correct: true, why: "Decomposition turns monsters into rectangles and triangles." }, { id: "b", text: "Use one overall formula for the whole outline", correct: false, why: "Irregular compounds have no single formula." }, { id: "c", text: "Estimate by eye and round up", correct: false, why: "Split/subtract give exact answers." }], formalName: "decomposition (split-and-add or frame-and-subtract) for compound shapes" },
    stretch: "Combining circles with rectangles gets trickier — the pizza-slice shapes. Next: arcs and sectors as fractions of the whole circle.", 
  },
};
