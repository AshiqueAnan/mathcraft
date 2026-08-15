import type { Lesson } from "../schema";

export const T3U23L1: Lesson = {
  // @meta
  id: "T3-U23-L1",
  tier: 3,
  unit: "Length, area, volume",
  title: "Area Is Counting Squares",
  prerequisites: ["T3-U21-L1","T3-U22-L3"],
  estimatedMinutes: 12,
  hook: { question: "Floor tiling is area in the wild: how many 1 m × 1 m tiles cover this kitchen floor? Count squares, and every shape's area becomes a counting problem with a shortcut. A 3 by 4 rectangle holds 12 unit squares — and the shortcut 3 × 4 never misses.", type: "real-world" },
  intuitionBlocks: [{ widget: "fraction-bars", narrative: "Tile a rectangle with unit squares: the count is rows × columns. Then push a parallelogram's top sideways — the slice moves across and the shape matches a rectangle with the same base and height. Drag the grid and watch the count stay fixed." }],

  // @discovery
  formalBlocks: [{ definition: "Area is the count of unit squares inside a shape. Rectangle: $A = \\text{length} \\times \\text{width}$ (each row holds $w$ squares, $l$ rows). Parallelogram: cut the protruding triangle, slide it across, and it becomes a rectangle — so $A = \\text{base} \\times \\text{height}$ (height at right angles). Triangle: exactly half a parallelogram on the same base and height, so $A = \\tfrac{1}{2} \\times \\text{base} \\times \\text{height}$.", examples: ["Rectangle 5 m by 3 m: 5 × 3 = 15 m² (15 unit squares).", "Parallelogram base 6 cm, height 4 cm: 6 × 4 = 24 cm²; a triangle on that base is 12 cm²."], pitfall: "In a parallelogram or triangle, the height is the PERPENDICULAR distance between the bases — not the slanted side. Using the slant as height over-counts the squares.", altExplanations: ["FOOD: a cake's area counts the square centimetres it covers — a rectangle 5 by 3 covers 15 squares. The parallelogram's slanting side isn't a height: cut the triangle off one end, slide it across, and the lean shape becomes a straight rectangle base × perpendicular height.", "GAME: tile floors — area is the tile count; a parallelogram floor tiles the same as its sheared rectangle. A triangle on the same base and height is exactly half the parallelogram, so half base × height."] }],
  gutChecks: [{ prompt: "Why is a triangle's area half of base × height?", answer: "A triangle is half of a parallelogram built on the same base and height — copy it, rotate 180°, and the pair completes the parallelogram." }],
  quiz: {
    pool: [
      // @q01
      { id: "U23L1-mcq-1", type: "mcq", category: "procedural", prompt: "A rectangle is 7 m by 4 m. Its area is…", options: [ { id: "a", text: "28 m²" }, { id: "b", text: "11 m²" }, { id: "c", text: "22 m²" }, { id: "d", text: "14 m²" } ], correctOptionId: "a", diagnoses: { b: "That's length + width, not ×.", c: "That's the perimeter (2 of each) — area is ×.", d: "That's only twice the width." }, explanation: "7 rows of 4 squares = 28 m².", hints: ["Multiply length × width.", "7 × 4.", "28."] },
      // @q02
      { id: "U23L1-mcq-2", type: "mcq", category: "conceptual", prompt: "Why is area measured in square units?", options: [ { id: "a", text: "We count unit squares inside the shape" }, { id: "b", text: "Squares are prettier than circles" }, { id: "c", text: "Because length × width makes squares" }, { id: "d", text: "It's just a convention" } ], correctOptionId: "a", diagnoses: { b: "Aesthetic choice isn't the reason.", c: "The formula creates a square number, but area was counting squares first.", d: "It is a convention — but with a reason: the squares fill the shape." }, explanation: "The unit square is the measuring tile; area reports how many fit.", hints: ["What fills the shape?", "Unit squares.", "Counting tiles."] },
      // @q03
      { id: "U23L1-mcq-3", type: "mcq", category: "word", prompt: "A rug is 12 ft by 9 ft. How many 1 ft squares cover it?", options: [ { id: "a", text: "108" }, { id: "b", text: "42" }, { id: "c", text: "21" }, { id: "d", text: "96" } ], correctOptionId: "a", diagnoses: { b: "42 is 12 + 9 + 21? No — multiply.", c: "21 is half the sum — wrong move.", d: "96 is (12−4)×12 — not the counts on the rug." }, explanation: "12 × 9 = 108 ft².", hints: ["12 rows of 9.", "12 × 9.", "108."] },
      // @q04
      { id: "U23L1-mcq-4", type: "mcq", category: "procedural", prompt: "A parallelogram has base 10 cm and height 6 cm. Area = …", options: [ { id: "a", text: "60 cm²" }, { id: "b", text: "30 cm²" }, { id: "c", text: "16 cm²" }, { id: "d", text: "120 cm²" } ], correctOptionId: "a", diagnoses: { b: "30 halves it — that's the triangle on this base.", c: "16 is base + height — add, not multiply.", d: "120 doubles it — maybe you used 12 as height." }, explanation: "Slide the slice: base × height = 10 × 6 = 60 cm².", hints: ["Cut and slide to a rectangle.", "10 × 6.", "60."] },
      // @q05
      { id: "U23L1-mcq-5", type: "mcq", category: "conceptual", prompt: "Double the base AND height of a rectangle. Its area…", options: [ { id: "a", text: "quadruples" }, { id: "b", text: "doubles" }, { id: "c", text: "stays the same" }, { id: "d", text: "triples" } ], correctOptionId: "a", diagnoses: { b: "Doubling ONE side doubles area; doubling both gives 2×2.", c: "Scaling both sides always changes area.", d: "3× would need base ×3-ish scale." }, explanation: "2l × 2w = 4(lw): four times as many squares.", hints: ["Both sides ×2.", "2 × 2 = 4.", "Quadruples."] },
      // @q06
      { id: "U23L1-mcq-6", type: "mcq", category: "word", prompt: "A triangular garden has base 8 m and height 5 m. Its area is…", options: [ { id: "a", text: "20 m²" }, { id: "b", text: "40 m²" }, { id: "c", text: "13 m²" }, { id: "d", text: "80 m²" } ], correctOptionId: "a", diagnoses: { b: "40 is the parallelogram WITHOUT halving.", c: "13 is base + height — area multiplies.", d: "80 multiplies but forgets the half." }, explanation: "½ × 8 × 5 = 20 m².", hints: ["Half a parallelogram.", "½ × 8 × 5.", "20."] },
      // @q07
      { id: "U23L1-num-1", type: "numeric-input", category: "procedural", prompt: "Rectangle 9 cm by 6 cm — area in cm².", answer: 54, tolerance: 0, unit: "cm²", explanation: "9 × 6 = 54 cm².", hints: ["Multiply the sides.", "9 × 6.", "54."] },
      // @q08
      { id: "U23L1-num-2", type: "numeric-input", category: "procedural", prompt: "Parallelogram: base 12 m, height 7 m — area in m².", answer: 84, tolerance: 0, unit: "m²", explanation: "Base × height = 12 × 7 = 84 m².", hints: ["Base × perpendicular height.", "12 × 7.", "84."] },
      // @q09
      { id: "U23L1-num-3", type: "numeric-input", category: "conceptual", prompt: "Triangle: base 10 cm, height 8 cm — area in cm².", answer: 40, tolerance: 0, unit: "cm²", explanation: "½ × 10 × 8 = 40 cm².", hints: ["Half the rectangle.", "½ × 10 × 8.", "40."] },
      // @q10
      { id: "U23L1-frac-1", type: "fraction-input", category: "conceptual", prompt: "A triangle sits on a parallelogram's base with the same height. What fraction of the parallelogram's area is the triangle?", numerator: 1, denominator: 2, acceptEquivalent: true, explanation: "The triangle is exactly half the parallelogram.", hints: ["Copy + rotate the triangle.", "Half.", "1/2."] },
      // @q11
      { id: "U23L1-tf-1", type: "true-false-justify", category: "conceptual", prompt: "A parallelogram's area is base × slanted-side length.", isTrue: false, explanation: "The height (perpendicular distance) is what multiplies the base, not the slant.", hints: ["Which length is at right angles?", "Perpendicular height.", "False."] },
      // @q12
      { id: "U23L1-tf-2", type: "true-false-justify", category: "conceptual", prompt: "Triangles with the same base and height share the same area even if their tips slide.", isTrue: true, explanation: "Sliding the tip keeps base × height the same — area doesn't depend on slant.", hints: ["What does the formula need?", "Only base and height.", "True."] },
      // @q13
      { id: "U23L1-order-1", type: "order-steps", category: "word", prompt: "Order the steps to find a triangle's area (base 9 cm, height 8 cm).", sequence: ["Multiply base × height: 9 × 8 = 72", "Halve the product: 72 ÷ 2", "Write the unit: 36 cm²"], diagnoses: { "Multiply base × height: 9 × 8 = 72@1": "Multiply first.", "Halve the product: 72 ÷ 2@0": "Halving comes after multiplying.", "Write the unit: 36 cm²@0": "State the value before the unit." }, explanation: "Base × height, then halve, then attach cm².", hints: ["Multiply first.", "Then halve.", "36 cm²."] },
      // @q14
      { id: "U23L1-drag-1", type: "drag-match", category: "conceptual", prompt: "Match each shape to its area fact.", pairs: [ { source: "Rectangle", target: "length × width" }, { source: "Parallelogram", target: "base × height" }, { source: "Triangle", target: "½ × base × height" } ], diagnoses: { "Rectangle->base × height": "That's the parallelogram's rule.", "Parallelogram->length × width": "Length×width is for rectangles at right angles.", "Triangle->base × height": "Triangle needs the half." }, explanation: "Each area rule is the square-count shortcut for that shape.", hints: ["Rectangle = ×.", "Parallelogram = slide the slice.", "Triangle = half."] },
      // @q15
      { id: "U23L1-graph-1", type: "graph-interact", category: "word", prompt: "A triangle's base is 8 and its height is 5. Set the slider to its area (key: value).", challenge: "Set the slider to 20.", validate: { value: 20 }, tolerance: 0.01, explanation: "½ × 8 × 5 = 20.", hints: ["Half of 40.", "20.", "20."] }
    ],
    selection: { procedural: 2, conceptual: 2, word: 1 },
    passThreshold: 0.8,
  },
  commonMistakes: [
    { wrongPattern: "adds area and perimeter", diagnosis: "Perimeter adds the boundary lengths; area multiplies to count the squares inside.", hint: "Ask: am I measuring the edge or the floor?" },
    { wrongPattern: "uses slanted side as triangle height", diagnosis: "Height must be perpendicular to the base, not the sloping edge.", hint: "Draw the height at right angles." },
    { wrongPattern: "forgets the half in triangle area", diagnosis: "A triangle fills only half the parallelogram, so halve base × height.", hint: "Copy the triangle and rotate 180° to see the double." },
  ],
  recallTags: ["area", "rectangle", "parallelogram", "triangle", "unit squares"],
  discovery: {
    challenges: [
      { instruction: "Tile a 3 × 4 rectangle: how many unit squares?", observe: "12 squares — 3 rows of 4." },
      { instruction: "Push the top of a parallelogram sideways and place the slice.", observe: "It becomes a rectangle with the same base and height — the square count never changes." },
    ],
    predict: { prompt: "A parallelogram's top slides far sideways. Its area…", options: [{ id: "a", text: "stays the same" }, { id: "b", text: "grows" }, { id: "c", text: "shrinks" }], reveal: "It stays the same — only base and perpendicular height matter, the slant doesn't change the count of squares." },
    sayItYourWay: { prompt: "How would you describe a shape's area?", phrasings: [{ id: "a", text: "How many unit squares fit inside", correct: true, why: "Area counts the covering squares." }, { id: "b", text: "How far around the edge", correct: false, why: "That's perimeter." }, { id: "c", text: "How long the longest side is", correct: false, why: "That's a single length, not a covering." }], formalName: "area (count of unit squares) with the rectangle, parallelogram, and triangle formulas" },
    stretch: "Two parallel sides of different lengths — a trapezium — look like a puzzle. Next: a clever compromise averages the bases and finds its area.",
  },
};
