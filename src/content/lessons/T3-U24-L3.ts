import type { Lesson } from "../schema";

export const T3U24L3: Lesson = {
  // @meta
  id: "T3-U24-L3",
  tier: 3,
  unit: "Compound & real problems",
  title: "Paint, Tiles, and Fencing",
  prerequisites: ["T3-U23-L1","T3-U23-L3","T3-U23-L4","T3-U24-L2"],
  estimatedMinutes: 12,
  hook: { question: "A can of paint covers 10 m², tiles come in 0.25 m² squares, fencing is sold by the metre. The shape is just the start — deciding whether to divide, multiply, round up, and which units to use is what makes real problems work. Paint the wall, tile the floor, fence the boundary: three different measures, one careful plan.", type: "real-world" },
  intuitionBlocks: [{ widget: "geometry-playground", narrative: "Walk a wall plan: find the area to paint, divide by coverage, round UP to whole cans. Tile a floor: area divided by tile area gives the tile count. Fence the edge: that's perimeter, not area. Drag dimensions and watch the answer change with the units." }],

  // @discovery
  formalBlocks: [{ definition: "Real problems chain measures: COVERAGE → amount = area ÷ coverage, rounded UP to whole items. Tiles: count = total area ÷ one tile's area. Fencing: use PERIMETER (edge length), not area. Always keep units consistent — convert metres to centimetres before multiplying if a problem mixes them, or you'll be 100× off.", examples: ["Wall 24 m², can covers 10 m²: 24 ÷ 10 = 2.4 → buy 3 cans.", "Floor 12 m², tile 0.25 m²: 12 ÷ 0.25 = 48 tiles — no rounding needed."], pitfall: "Fencing uses the perimeter, not area. Fencing a 100 m² square garden of side 10 m needs 40 m of fence, not 100 m — don't paint a fence with area logic.", altExplanations: ["GAME: coverage missions — paint cans cover a set area each: cans = wall area ÷ coverage, rounded UP because 2.4 cans means buying 3. Fencing is the perimeter mission: the fence wraps the EDGE, never the area.", "FOOD: tiling a kitchen — tiles needed = floor area ÷ one tile's area, rounded up for spare-broken tiles. Units must match (convert cm to m first). And fencing a garden uses the boundary, not the square footage."] }],
  gutChecks: [{ prompt: "Why do you round UP when buying paint cans?", answer: "You can't buy 2.4 cans — 2 cans wouldn't cover the whole wall, so you round up to the next whole can." }],
  quiz: {
    pool: [
      // @q01
      { id: "U24L3-mcq-1", type: "mcq", category: "procedural", prompt: "A wall is 24 m²; a can covers 10 m². Cans to buy = …", options: [ { id: "a", text: "3" }, { id: "b", text: "2" }, { id: "c", text: "2.4" }, { id: "d", text: "4" } ], correctOptionId: "a", diagnoses: { b: "2 cans cover 20 m² — short by 4 m².", c: "2.4 is the division, but you can't buy partial cans.", d: "4 is over-buying by nearly a can." }, explanation: "24 ÷ 10 = 2.4 → round UP to 3 cans.", hints: ["Divide by coverage.", "Round up.", "24 ÷ 10 = 2.4 → round UP to 3 cans."] },
      // @q02
      { id: "U24L3-mcq-2", type: "mcq", category: "conceptual", prompt: "Fencing a garden needs the…", options: [ { id: "a", text: "area" }, { id: "b", text: "perimeter" }, { id: "c", text: "volume" }, { id: "d", text: "radius" } ], correctOptionId: "b", diagnoses: { a: "Area is for turf or tiling — the fence runs around the edge.", c: "Volume fills 3-D space.", d: "Radius only applies to circles." }, explanation: "Fence length = boundary = perimeter.", hints: ["Around the edge.", "Perimeter.", "Fence length = boundary = perimeter."] },
      // @q03
      { id: "U24L3-mcq-3", type: "mcq", category: "word", prompt: "A 12 m² floor with 0.25 m² tiles needs how many tiles?", options: [ { id: "a", text: "3" }, { id: "b", text: "24" }, { id: "c", text: "48" }, { id: "d", text: "12.25" } ], correctOptionId: "c", diagnoses: { b: "24 is 12 ÷ 0.5 — think tiles per metre, not halves.", a: "3 is 12 ÷ 4 — inverted the tile size.", d: "12.25 just adds the numbers." }, explanation: "12 ÷ 0.25 = 48 tiles.", hints: ["Divide by tile area.", "12 ÷ 0.25.", "12 ÷ 0.25 = 48 tiles."] },
      // @q04
      { id: "U24L3-mcq-4", type: "mcq", category: "procedural", prompt: "A 5 m × 4 m wall needs painting, a can covers 10 m². Cans = …", options: [ { id: "a", text: "2.5" }, { id: "b", text: "20" }, { id: "c", text: "1" }, { id: "d", text: "2" } ], correctOptionId: "d", diagnoses: { b: "20 is the area, not the cans.", c: "1 can covers only 10 m² — wall is 20 m².", a: "2.5 rounds up to 3, but 20 ÷ 10 = 2 exactly." }, explanation: "Area 20 m²; 20 ÷ 10 = 2 cans.", hints: ["Area = 5 × 4 = 20.", "20 ÷ 10.", "Area 20 m²; 20 ÷ 10 = 2 cans."] },
      // @q05
      { id: "U24L3-mcq-5", type: "mcq", category: "conceptual", prompt: "Mixing metres and centimetres, you must first…", options: [ { id: "a", text: "convert to one unit" }, { id: "b", text: "add the numbers" }, { id: "c", text: "ignore the centimetres" }, { id: "d", text: "convert to square metres only" } ], correctOptionId: "a", diagnoses: { b: "Adding mixed units gives nonsense.", c: "Ignoring centimetres drops real information.", d: "Convert everything to ONE consistent unit first." }, explanation: "Consistent units are non-negotiable — 100 cm = 1 m, never mixed in a formula.", hints: ["Same unit everywhere.", "Convert first.", "Consistent units are non-negotiable — 100 cm = 1 m, never mixed in a formula."] },
      // @q06
      { id: "U24L3-mcq-6", type: "mcq", category: "word", prompt: "A square garden, side 10 m, needs fence. Length of fence = …", options: [ { id: "a", text: "100 m" }, { id: "b", text: "40 m" }, { id: "c", text: "10 m" }, { id: "d", text: "20 m" } ], correctOptionId: "b", diagnoses: { a: "100 is the AREA — the fence runs the boundary.", c: "10 is one side only.", d: "20 is two sides." }, explanation: "Perimeter = 4 × 10 = 40 m.", hints: ["Boundary = perimeter.", "4 sides × 10.", "Perimeter = 4 × 10 = 40 m."] },
      // @q07
      { id: "U24L3-num-1", type: "numeric-input", category: "procedural", prompt: "Wall 30 m², can covers 10 m². Cans needed.", answer: 3, tolerance: 0, explanation: "30 ÷ 10 = 3 cans exactly.", hints: ["Divide by coverage.", "30 ÷ 10.", "30 ÷ 10 = 3 cans exactly."] },
      // @q08
      { id: "U24L3-num-2", type: "numeric-input", category: "procedural", prompt: "Floor 15 m², tiles 0.5 m² each. Tiles needed.", answer: 30, tolerance: 0, explanation: "15 ÷ 0.5 = 30 tiles.", hints: ["Divide by tile area.", "15 ÷ 0.5.", "15 ÷ 0.5 = 30 tiles."] },
      // @q09
      { id: "U24L3-num-3", type: "numeric-input", category: "conceptual", prompt: "Garden 8 m × 6 m, fence 2 m high costs per metre of LENGTH. Fence length in m.", answer: 28, tolerance: 0, unit: "m", explanation: "Perimeter = 2(8 + 6) = 28 m.", hints: ["2 × (8 + 6).", "Perimeter.", "Perimeter = 2(8 + 6) = 28 m."] },
      // @q10
      { id: "U24L3-frac-1", type: "fraction-input", category: "conceptual", prompt: "A can covers 10 m² and the wall is 15 m². What fraction of the second can is needed to finish?", numerator: 1, denominator: 2, acceptEquivalent: true, explanation: "First can covers 10 m²; 5 remaining = half a can more.", hints: ["5 of 10.", "1/2.", "First can covers 10 m²; 5 remaining = half a can more."] },
      // @q11
      { id: "U24L3-tf-1", type: "true-false-justify", category: "conceptual", prompt: "Fencing needs the perimeter, not the area.", isTrue: true, explanation: "The fence traces the boundary — perimeter decides the length.", hints: ["Boundary edge.", "Perimeter.", "The fence traces the boundary — perimeter decides the length."] },
      // @q12
      { id: "U24L3-tf-2", type: "true-false-justify", category: "conceptual", prompt: "1 cm and 1 m can be multiplied directly.", isTrue: false, explanation: "Convert to one unit first — 1 m = 100 cm — or the result is off by 100×.", hints: ["Convert first.", "100 cm = 1 m.", "Convert to one unit first — 1 m = 100 cm — or the result is off by 100×."] },
      // @q13
      { id: "U24L3-order-1", type: "order-steps", category: "word", prompt: "Order the steps to buy paint for a 25 m² wall (can covers 10 m²).", sequence: ["Divide: 25 ÷ 10 = 2.5", "Round up: 3 cans", "Check: 3 × 10 = 30 ≥ 25 ✓"], diagnoses: { "Divide: 25 ÷ 10 = 2.5@1": "Divide first.", "Round up: 3 cans@0": "Round after dividing.", "Check: 3 × 10 = 30 ≥ 25 ✓@0": "Check last." }, explanation: "Divide, round up, verify.", hints: ["25 ÷ 10.", "Round up to 3.", "Divide, round up, verify."] },
      // @q14
      { id: "U24L3-drag-1", type: "drag-match", category: "conceptual", prompt: "Match each task to its measure.", pairs: [ { source: "Paint the wall", target: "area ÷ coverage" }, { source: "Tile the floor", target: "area ÷ tile size" }, { source: "Fence the edge", target: "perimeter" } ], diagnoses: { "Paint the wall->perimeter": "Painting covers surface — area.", "Tile the floor->perimeter": "Tiles fill the floor — area.", "Fence the edge->area ÷ coverage": "Fencing is boundary length." }, explanation: "Each task picks its own measure: covering, filling, bounding.", hints: ["Paint = area ÷ coverage.", "Tiles = area ÷ tile size.", "Fence = perimeter."] },
      // @q15
      { id: "U24L3-graph-1", type: "graph-interact", category: "word", prompt: "A wall is 7 m × 3 m with a can covering 5 m². Set the slider to the cans needed (key: value).", challenge: "Adjust the values below so they match the condition described in the prompt.", validate: { value: 5 }, tolerance: 0.01, explanation: "21 m² ÷ 5 = 4.2 → round up to 5 cans.", hints: ["21 ÷ 5 = 4.2.", "Round up.", "21 m² ÷ 5 = 4.2 → round up to 5 cans."] }
    ],
    selection: { procedural: 2, conceptual: 2, word: 1 },
    passThreshold: 0.8,
  },
  commonMistakes: [
    { wrongPattern: "rounds down for paint", diagnosis: "Rounded down leaves wall uncovered — always round UP for whole items that must cover.", hint: "Try 2 cans on a 3-can need." },
    { wrongPattern: "uses area for fencing", diagnosis: "Fencing is boundary length (perimeter); area belongs to filling surfaces.", hint: "Walk the edge, not the grass." },
    { wrongPattern: "mixes units without converting", diagnosis: "1 m ≠ 1 cm in a formula; convert everything to one unit first.", hint: "100 cm = 1 m." },
  ],
  recallTags: ["perimeter", "area", "coverage", "units", "rounding"],
  discovery: {
    challenges: [
      { instruction: "Find a wall's area, then divide by a can's coverage.", observe: "2.4 cans — you can't buy 0.4 of a can, so round up." },
      { instruction: "Walk the boundary of a rectangular garden and measure it.", observe: "The fence length is the perimeter — different from the area." },
    ],
    predict: { prompt: "A 24 m² wall, cans cover 10 m². Cans to buy?", options: [{ id: "a", text: "3" }, { id: "b", text: "2.4" }, { id: "c", text: "2" }], reveal: "3 — the wall needs 2.4 cans, and a can can't be split: round up to guarantee full coverage." },
    sayItYourWay: { prompt: "How do you decide how many paint cans to buy?", phrasings: [{ id: "a", text: "Divide the area by coverage, then round up to whole cans", correct: true, why: "Whole cans must cover the whole surface." }, { id: "b", text: "Use the perimeter and round down", correct: false, why: "Paint covers area, and rounding down under-covers." }, { id: "c", text: "Add the wall's dimensions", correct: false, why: "Area multiplies, it doesn't add." }], formalName: "coverage problems — amount = area ÷ coverage, rounded up, with consistent units; fencing = perimeter" },
    stretch: "From rectangles to right triangles — the next unit wonders: if a triangle's sides are 3, 4, 5, why do the squares on them seem to add up perfectly?", 
  },
};
