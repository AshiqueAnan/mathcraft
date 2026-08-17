import type { Lesson } from "../schema";

export const T3U23L4: Lesson = {
  // @meta
  id: "T3-U23-L4",
  tier: 3,
  unit: "Length, area, volume",
  title: "Boxes, Skins, and Space",
  prerequisites: ["T3-U22-L3","T3-U23-L1","T3-U23-L3"],
  estimatedMinutes: 12,
  hook: { question: "Wrap a gift box: the paper covers the outside — that's surface area. Fill it with sand: the space inside is volume. A box 2 by 3 by 4 has a skin of 6 faces to add, but inside it holds just length × width × height = 24 unit cubes. The two measures live on different dimensions.", type: "real-world" },
  intuitionBlocks: [{ widget: "geometry-playground", narrative: "Unfold a cuboid into its net: six rectangles — the skin is the sum of their areas. Then stack unit cubes: layers of length × width, height layers deep. Drag dimensions and watch surface area and volume change at different rates." }],

  // @discovery
  formalBlocks: [{ definition: "A cuboid's SURFACE AREA is the total of its 6 faces: $2(lw + lh + wh)$ — each pair of opposite faces is congruent. Its VOLUME is the count of unit cubes: $V = l \\times w \\times h$. Area lives in square units (two dimensions), volume in cube units (three dimensions). A prism's volume is always base area × height.", examples: ["Cuboid 2 × 3 × 4: surface = 2(6 + 8 + 12) = 52 units²; volume = 2 × 3 × 4 = 24 units³.", "Prism with base area 12 cm², height 5 cm: volume = 12 × 5 = 60 cm³."], pitfall: "Don't confuse the two: surface area adds the face areas (square units), volume multiplies three lengths (cube units). A 10 cm cube has surface 600 cm² but volume 1000 cm³ — different sizes entirely.", altExplanations: ["GAME: a cuboid's surface area is its unfold-net — 6 faces, three pairs of twins: 2(lw + lh + wh). Volume counts the unit cubes that fit: l × w × h. Area is square units (2D faces); volume is cube units (3D space).", "FOOD: wrapping a box needs the total face area (unfold the cardboard), filling it needs the cube count inside. A prism's volume is always base area × height, whether the base is a rectangle or any other slice."] }],
  gutChecks: [{ prompt: "Why is volume measured in cube units?", answer: "It counts how many unit cubes fit inside, and a cube has three dimensions: length × width × height." }],
  quiz: {
    pool: [
      // @q01
      { id: "U23L4-mcq-1", type: "mcq", category: "procedural", prompt: "Cuboid 2 × 3 × 4. Its VOLUME is…", options: [ { id: "a", text: "24 units³" }, { id: "b", text: "52 units²" }, { id: "c", text: "26 units³" }, { id: "d", text: "9 units³" } ], correctOptionId: "a", diagnoses: { b: "52 is the surface area, not volume.", c: "26 is half the surface.", d: "9 adds the side lengths." }, explanation: "V = 2 × 3 × 4 = 24 units³.", hints: ["Multiply all three.", "2 × 3 × 4.", "V = 2 × 3 × 4 = 24 units³."] },
      // @q02
      { id: "U23L4-mcq-2", type: "mcq", category: "conceptual", prompt: "Surface area of a cuboid counts…", options: [ { id: "a", text: "the space inside" }, { id: "b", text: "the 6 faces' areas added" }, { id: "c", text: "the edges' lengths" }, { id: "d", text: "the number of corners" } ], correctOptionId: "b", diagnoses: { a: "That's volume.", c: "Edges are 1-D lengths.", d: "Corners aren't a surface measure." }, explanation: "Unfold to a net: 6 rectangles, add their areas.", hints: ["Unfold the box.", "Six faces.", "Sum of face areas."] },
      // @q03
      { id: "U23L4-mcq-3", type: "mcq", category: "word", prompt: "A fish tank is 40 cm × 25 cm × 30 cm. Water it holds (volume) is…", options: [ { id: "a", text: "7,400 cm²" }, { id: "b", text: "15,000 cm³" }, { id: "c", text: "30,000 cm³" }, { id: "d", text: "95 cm³" } ], correctOptionId: "c", diagnoses: { b: "15,000 halves one dimension.", a: "7,400 is the surface area (paper, not water).", d: "95 adds the lengths." }, explanation: "V = 40 × 25 × 30 = 30,000 cm³.", hints: ["Multiply all three.", "40 × 25 × 30.", "V = 40 × 25 × 30 = 30,000 cm³."] },
      // @q04
      { id: "U23L4-mcq-4", type: "mcq", category: "procedural", prompt: "A cube has side 5 cm. Its volume is…", options: [ { id: "a", text: "250 cm³" }, { id: "b", text: "25 cm³" }, { id: "c", text: "150 cm²" }, { id: "d", text: "125 cm³" } ], correctOptionId: "d", diagnoses: { b: "25 is 5² — one face's area.", c: "150 is the surface area.", a: "250 is 5³ × 2 — wrong factor." }, explanation: "V = 5 × 5 × 5 = 125 cm³.", hints: ["Cube = side³.", "5³.", "V = 5 × 5 × 5 = 125 cm³."] },
      // @q05
      { id: "U23L4-mcq-5", type: "mcq", category: "conceptual", prompt: "Double EVERY side of a cube. Its volume…", options: [ { id: "a", text: "× 8" }, { id: "b", text: "× 2" }, { id: "c", text: "× 4" }, { id: "d", text: "× 6" } ], correctOptionId: "a", diagnoses: { b: "×2 is for a single edge.", c: "×4 is for area scaling.", d: "×6 matches face count, not volume." }, explanation: "(2s)³ = 8s³ — eight times.", hints: ["Three dimensions each ×2.", "2 × 2 × 2.", "(2s)³ = 8s³ — eight times."] },
      // @q06
      { id: "U23L4-mcq-6", type: "mcq", category: "word", prompt: "A box is 3 m × 4 m × 2 m. Wrapping paper for ALL faces needs about…", options: [ { id: "a", text: "24 m³" }, { id: "b", text: "52 m²" }, { id: "c", text: "26 m²" }, { id: "d", text: "12 m²" } ], correctOptionId: "b", diagnoses: { a: "24 m³ is the volume (inside), not paper.", c: "26 m² is half the surface — missing faces.", d: "12 m² is one face only." }, explanation: "2(lw + lh + wh) = 2(12 + 6 + 8) = 52 m².", hints: ["Sum all 6 faces.", "2 × 26.", "2(lw + lh + wh) = 2(12 + 6 + 8) = 52 m²."] },
      // @q07
      { id: "U23L4-num-1", type: "numeric-input", category: "procedural", prompt: "Cuboid 4 cm × 3 cm × 2 cm. Surface area in cm².", answer: 52, tolerance: 0, unit: "cm²", explanation: "2(12 + 8 + 6) = 52 cm².", hints: ["Each pair of faces twice.", "2(12+8+6).", "2(12 + 8 + 6) = 52 cm²."] },
      // @q08
      { id: "U23L4-num-2", type: "numeric-input", category: "procedural", prompt: "Prism: base area 15 cm², height 4 cm. Volume in cm³.", answer: 60, tolerance: 0, unit: "cm³", explanation: "V = base area × height = 15 × 4 = 60 cm³.", hints: ["Base area × height.", "15 × 4.", "V = base area × height = 15 × 4 = 60 cm³."] },
      // @q09
      { id: "U23L4-num-3", type: "numeric-input", category: "conceptual", prompt: "Unit cubes in a 5 × 4 × 3 box.", answer: 60, tolerance: 0, explanation: "5 × 4 × 3 = 60 cubes.", hints: ["Layers times rows.", "5 × 4 × 3.", "5 × 4 × 3 = 60 cubes."] },
      // @q10
      { id: "U23L4-frac-1", type: "fraction-input", category: "conceptual", prompt: "A prism's base area is A and height h. Its volume as a fraction of (A × h) is…", numerator: 1, denominator: 1, acceptEquivalent: true, explanation: "Volume equals base area × height exactly — no halving for prisms (unlike triangles in 2-D).", hints: ["Base × height.", "1/1.", "Volume equals base area × height exactly — no halving for prisms (unlike triangles in 2-D)."] },
      // @q11
      { id: "U23L4-tf-1", type: "true-false-justify", category: "conceptual", prompt: "Volume is measured in square units.", isTrue: false, explanation: "Volume counts unit CUBES — three lengths multiplied — so units are cubed.", hints: ["Cubes or squares?", "Three dimensions.", "False — cube units."] },
      // @q12
      { id: "U23L4-tf-2", type: "true-false-justify", category: "conceptual", prompt: "A prism's volume is base area × height.", isTrue: true, explanation: "Stack the base layer height times — always base area × height.", hints: ["Stack of base layers.", "Base × height.", "Stack the base layer height times — always base area × height."] },
      // @q13
      { id: "U23L4-order-1", type: "order-steps", category: "word", prompt: "Order the steps to find a cuboid's surface area (2 × 3 × 4).", sequence: ["Find each face area: 6, 8, 12", "Sum pairs: 6 + 8 + 12 = 26", "Double: 2 × 26 = 52"], diagnoses: { "Find each face area: 6, 8, 12@1": "Find face areas first.", "Sum pairs: 6 + 8 + 12 = 26@0": "Sum after finding faces.", "Double: 2 × 26 = 52@0": "Double last." }, explanation: "Face areas, sum each opposite pair once, double.", hints: ["6, 8, 12.", "Sum 26.", "Face areas, sum each opposite pair once, double."] },
      // @q14
      { id: "U23L4-drag-1", type: "drag-match", category: "conceptual", prompt: "Match each measure to its unit type.", pairs: [ { source: "Surface area", target: "square units" }, { source: "Volume", target: "cube units" }, { source: "Length", target: "plain units" } ], diagnoses: { "Surface area->cube units": "Surface adds 2-D faces.", "Volume->square units": "Volume fills 3-D space.", "Length->square units": "Length is one dimension." }, explanation: "Dimension count decides the unit: 1 length, 2 area, 3 volume.", hints: ["2-D = squares.", "3-D = cubes.", "Dimension count decides the unit: 1 length, 2 area, 3 volume."] },
      // @q15
      { id: "U23L4-graph-1", type: "graph-interact", category: "word", prompt: "A box is 3 × 4 × 2. Set the slider to its VOLUME (key: value).", challenge: "A box is 3 × 4 × 2. — adjust the values below to match the condition.", validate: { value: 24 }, tolerance: 0.01, explanation: "3 × 4 × 2 = 24.", hints: ["Multiply three sides.", "3 × 4 × 2.", "3 × 4 × 2 = 24."] }
    ],
    selection: { procedural: 2, conceptual: 2, word: 1 },
    passThreshold: 0.8,
  },
  commonMistakes: [
    { wrongPattern: "confuses volume and surface area", diagnosis: "Volume (cube units) fills the inside; surface area (square units) covers the outside.", hint: "Ask: am I filling or wrapping?" },
    { wrongPattern: "counts each face once", diagnosis: "A cuboid has 3 PAIRS of opposite faces — double the sum of the three face areas.", hint: "Opposite faces match." },
    { wrongPattern: "adds instead of multiplying for volume", diagnosis: "Volume stacks length × width × height layers — it multiplies three dimensions.", hint: "Count the unit cubes." },
  ],
  recallTags: ["volume", "surface area", "cuboid", "prism", "cube units"],
  discovery: {
    challenges: [
      { instruction: "Unfold a 2 × 3 × 4 cuboid into its net.", observe: "Six rectangles: areas 6, 6, 8, 8, 12, 12 — sum 52." },
      { instruction: "Count the unit cubes in a 2 × 3 × 4 box.", observe: "24 cubes — 2 × 3 × 4, three dimensions multiplied." },
    ],
    predict: { prompt: "Doubling every side of a cuboid multiplies its volume by…", options: [{ id: "a", text: "8" }, { id: "b", text: "2" }, { id: "c", text: "4" }], reveal: "8 — all three dimensions double, so volume scales by 2 × 2 × 2. That's why a double-sized cube holds 8 times the water." },
    sayItYourWay: { prompt: "What is volume?", phrasings: [{ id: "a", text: "How many unit cubes fit inside", correct: true, why: "Volume counts the 3-D filling." }, { id: "b", text: "How much paper covers the outside", correct: false, why: "That's surface area." }, { id: "c", text: "How long the longest edge is", correct: false, why: "That's a single length." }], formalName: "volume (count of unit cubes) and surface area (sum of face areas) of cuboids and prisms" },
    stretch: "A shape made of two rectangles bolted together — a composite — has no single formula. Next: Frankenstein shapes and the split-or-subtract shortcut.", 
  },
};
