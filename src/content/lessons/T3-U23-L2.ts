import type { Lesson } from "../schema";

export const T3U23L2: Lesson = {
  // @meta
  id: "T3-U23-L2",
  tier: 3,
  unit: "Length, area, volume",
  title: "The Trapezium Compromise",
  prerequisites: ["T3-U22-L3","T3-U23-L1"],
  estimatedMinutes: 12,
  hook: { question: "A tabletop is 90 cm wide at one end and 110 cm at the other — its sides are parallel but unequal. What single width would honestly stand for it? Average the two: (90 + 110) ÷ 2 = 100 cm, and that compromise width is the key to the area.", type: "real-world" },
  intuitionBlocks: [{ widget: "geometry-playground", narrative: "Drag the trapezium's top base. Copy it, flip it upside down, and the two copies fit together as a parallelogram — the trapezium is exactly half of that. Watch the averaged width (a + b) ÷ 2 times height appear." }],

  // @discovery
  formalBlocks: [{ definition: "A trapezium has one pair of parallel sides (bases a and b) with perpendicular height h. Copy the trapezium, rotate it 180°, and pair it with the original: together they form a parallelogram of base (a + b). The trapezium is half of that, so its area is $A = \\tfrac{1}{2}(a + b) \\times h$ — the AVERAGE of the parallel sides times the height.", examples: ["Bases 8 cm and 12 cm, height 5 cm: ½(8 + 12) × 5 = ½ × 20 × 5 = 50 cm².", "Bases 6 cm and 10 cm, height 7 cm: ½ × 16 × 7 = 56 cm²."], pitfall: "The height is the perpendicular distance between the bases — NOT the slanted side length. Averaging the slants instead over-counts.", altExplanations: ["GAME: a trapezium is a broken rectangle — copy it, rotate 180°, and fit the two copies into one clean parallelogram of base (a+b). Half of (a+b)×h is the trapezium's area: the average of the parallel sides times the height.", "FOOD: two stacked bread loaves of different widths — the average width × the stack height gives the loaf-pair's area. Copying, flipping, and pairing turns trapezium area into rectangle arithmetic."] }],
  gutChecks: [{ prompt: "Why does copying and flipping a trapezium help find its area?", answer: "Two copies make a parallelogram with base = a + b, so one trapezium is half of (a + b) × h." }],
  quiz: {
    pool: [
      // @q01
      { id: "U23L2-mcq-1", type: "mcq", category: "procedural", prompt: "Trapezium with bases 5 cm and 9 cm, height 6 cm. Area = …", options: [ { id: "a", text: "42 cm²" }, { id: "b", text: "84 cm²" }, { id: "c", text: "21 cm²" }, { id: "d", text: "54 cm²" } ], correctOptionId: "a", diagnoses: { b: "84 forgot to halve (a + b) × h.", c: "21 halved the height instead of averaging the bases.", d: "54 is 9 × 6 — it ignored the other base." }, explanation: "½(5 + 9) × 6 = ½ × 14 × 6 = 42 cm².", hints: ["Average 5 and 9 first.", "½ × 14 × 6.", "42."] },
      // @q02
      { id: "U23L2-mcq-2", type: "mcq", category: "conceptual", prompt: "Why does the trapezium formula use the AVERAGE of the bases?", options: [ { id: "a", text: "Because trapeziums are always symmetric" }, { id: "b", text: "Copy + flip: the pair forms a parallelogram with base a+b; one copy is half" }, { id: "c", text: "Because width matters more than height" }, { id: "d", text: "To match the rectangle formula" } ], correctOptionId: "b", diagnoses: { a: "Trapeziums need not be symmetric.", c: "Height still matters — it multiplies the average.", d: "The rectangle has equal bases; the average reduces to them." }, explanation: "Two flipped copies tile a parallelogram of base a + b; each trapezium is half.", hints: ["Copy + rotate 180°.", "Pair = parallelogram base a+b.", "Half of that."] },
      // @q03
      { id: "U23L2-mcq-3", type: "mcq", category: "word", prompt: "A ramp is trapezoidal: parallel edges 2 m and 4 m, gap 3 m. Its area is…", options: [ { id: "a", text: "6 m²" }, { id: "b", text: "18 m²" }, { id: "c", text: "9 m²" }, { id: "d", text: "12 m²" } ], correctOptionId: "c", diagnoses: { b: "18 forgot the half.", a: "6 is (4−2)×3 — wrong move.", d: "12 is 4 × 3 without the average." }, explanation: "½(2 + 4) × 3 = ½ × 6 × 3 = 9 m².", hints: ["Average the edges.", "½ × 6 × 3.", "9."] },
      // @q04
      { id: "U23L2-mcq-4", type: "mcq", category: "procedural", prompt: "Bases 10 cm and 6 cm, height 8 cm. Trapezium area = …", options: [ { id: "a", text: "80 cm²" }, { id: "b", text: "128 cm²" }, { id: "c", text: "32 cm²" }, { id: "d", text: "64 cm²" } ], correctOptionId: "d", diagnoses: { b: "128 didn't halve.", c: "32 halved the height — wrong side to halve.", a: "80 is 10 × 8, ignoring base 6." }, explanation: "½(10 + 6) × 8 = ½ × 16 × 8 = 64 cm².", hints: ["Sum then average the bases.", "8 × 8.", "64."] },
      // @q05
      { id: "U23L2-mcq-5", type: "mcq", category: "conceptual", prompt: "A trapezium's bases are EQUAL (a = b). What does the formula become?", options: [ { id: "a", text: "b × h — a rectangle/parallelogram" }, { id: "b", text: "It breaks completely" }, { id: "c", text: "2 × b × h" }, { id: "d", text: "b + h" } ], correctOptionId: "a", diagnoses: { b: "It works fine — the shape just becomes a parallelogram.", c: "½(a+b) with a=b gives b, not 2b.", d: "That's addition, no area." }, explanation: "½(a + b) with a = b becomes b, so A = b × h — the parallelogram case.", hints: ["a = b.", "½(2b) = b.", "b × h."] },
      // @q06
      { id: "U23L2-mcq-6", type: "mcq", category: "word", prompt: "A garden bed has parallel sides 12 m and 8 m, with 5 m between them. Area = …", options: [ { id: "a", text: "100 m²" }, { id: "b", text: "50 m²" }, { id: "c", text: "25 m²" }, { id: "d", text: "60 m²" } ], correctOptionId: "b", diagnoses: { a: "100 forgot to halve.", c: "25 halved 50 m — the height isn't the value to halve.", d: "60 is 12 × 5, ignoring the other base." }, explanation: "½(12 + 8) × 5 = ½ × 20 × 5 = 50 m².", hints: ["Average the parallel sides.", "10 × 5.", "50."] },
      // @q07
      { id: "U23L2-num-1", type: "numeric-input", category: "procedural", prompt: "Trapezium: bases 7 cm and 11 cm, height 9 cm. Area in cm².", answer: 81, tolerance: 0, unit: "cm²", explanation: "½(7 + 11) × 9 = ½ × 18 × 9 = 81 cm².", hints: ["Average 7 and 11 = 9.", "9 × 9.", "81."] },
      // @q08
      { id: "U23L2-num-2", type: "numeric-input", category: "procedural", prompt: "Bases 14 m and 6 m, height 10 m. Area in m².", answer: 100, tolerance: 0, unit: "m²", explanation: "½(14 + 6) × 10 = ½ × 20 × 10 = 100 m².", hints: ["Average = 10.", "10 × 10.", "100."] },
      // @q09
      { id: "U23L2-num-3", type: "numeric-input", category: "conceptual", prompt: "A trapezium has bases 5 m and 5 m, height 4 m. What's its area in m² (rectangle case)?", answer: 20, tolerance: 0, unit: "m²", explanation: "Equal bases: 5 × 4 = 20 m².", hints: ["Equal bases = parallelogram.", "5 × 4.", "20."] },
      // @q10
      { id: "U23L2-frac-1", type: "fraction-input", category: "conceptual", prompt: "In ½(a + b) × h, what fraction of the paired parallelogram (base a + b) is one trapezium?", numerator: 1, denominator: 2, acceptEquivalent: true, explanation: "Two copies make the parallelogram, so one copy is 1/2.", hints: ["How many copies tile it?", "Two.", "1/2."] },
      // @q11
      { id: "U23L2-tf-1", type: "true-false-justify", category: "conceptual", prompt: "A trapezium with equal bases is a parallelogram.", isTrue: true, explanation: "Equal parallel sides make the shape a parallelogram; the formula becomes b × h.", hints: ["What if a = b?", "Parallelogram.", "True."] },
      // @q12
      { id: "U23L2-tf-2", type: "true-false-justify", category: "conceptual", prompt: "The slanting side of a trapezium is its height.", isTrue: false, explanation: "Height is the perpendicular distance between the parallel bases, not the slant.", hints: ["Perpendicular, not slanted.", "Height is at right angles.", "False."] },
      // @q13
      { id: "U23L2-order-1", type: "order-steps", category: "word", prompt: "Order the steps to find a trapezium's area (bases 6 and 10, height 4).", sequence: ["Add the bases: 6 + 10 = 16", "Average: 16 ÷ 2 = 8", "Multiply by height: 8 × 4 = 32"], diagnoses: { "Add the bases: 6 + 10 = 16@1": "Add the bases first.", "Average: 16 ÷ 2 = 8@0": "Average after adding.", "Multiply by height: 8 × 4 = 32@0": "Multiply last." }, explanation: "Add, average, then multiply by height.", hints: ["Add 6 and 10.", "Average to 8.", "8 × 4 = 32."] },
      // @q14
      { id: "U23L2-drag-1", type: "drag-match", category: "conceptual", prompt: "Match each shape to its area rule.", pairs: [ { source: "Trapezium", target: "½(a + b) × h" }, { source: "Triangle", target: "½ × base × height" }, { source: "Parallelogram", target: "base × height" } ], diagnoses: { "Trapezium->base × height": "Trapezium needs the average of two bases.", "Triangle->½(a + b) × h": "Triangle has one base, not two.", "Parallelogram->½ × base × height": "Parallelogram isn't halved." }, explanation: "Each formula matches its shape's square-count shortcut.", hints: ["Trapezium averages.", "Triangle halves.", "Parallelogram doesn't halve."] },
      // @q15
      { id: "U23L2-graph-1", type: "graph-interact", category: "word", prompt: "A trapezium has bases 7 and 13 with height 4. Set the slider to its area (key: value).", challenge: "Set the slider to 40.", validate: { value: 40 }, tolerance: 0.01, explanation: "½(7 + 13) × 4 = ½ × 20 × 4 = 40.", hints: ["Average is 10.", "10 × 4.", "40."] }
    ],
    selection: { procedural: 2, conceptual: 2, word: 1 },
    passThreshold: 0.8,
  },
  commonMistakes: [
    { wrongPattern: "forgets to halve the average", diagnosis: "(a + b) × h gives the paired parallelogram — the trapezium is half of it.", hint: "Copy and flip to see the double." },
    { wrongPattern: "uses the slanting side as height", diagnosis: "Height is the perpendicular gap between the bases.", hint: "Draw the right-angled height." },
    { wrongPattern: "averages the wrong pair", diagnosis: "Average only the PARALLEL bases, never the slanted sides.", hint: "Which sides are parallel?" },
  ],
  recallTags: ["trapezium", "area", "average", "parallelogram"],
  discovery: {
    challenges: [
      { instruction: "Copy the trapezium, flip it 180°, and nest it against the original.", observe: "The pair forms a parallelogram whose base is a + b and height is h." },
      { instruction: "Count how many trapeziums fill that parallelogram.", observe: "Exactly two — so one is half of (a + b) × h." },
    ],
    predict: { prompt: "Bases 4 and 10, height 6. The trapezium's area is…", options: [{ id: "a", text: "42" }, { id: "b", text: "84" }, { id: "c", text: "21" }], reveal: "42 — ½(4 + 10) × 6 = ½ × 14 × 6. The average base is 7, times height 6." },
    sayItYourWay: { prompt: "How would you describe the trapezium area rule?", phrasings: [{ id: "a", text: "The average of the parallel sides, times the height", correct: true, why: "The average base stands for both unequal bases." }, { id: "b", text: "One base times the height, doubled", correct: false, why: "Both bases matter, not just one." }, { id: "c", text: "The slanting side times the height", correct: false, why: "The slant isn't part of the rule." }], formalName: "trapezium area $A = \\tfrac{1}{2}(a + b)h$ (average of bases × height)" },
    stretch: "A circle is a shape with no corners at all — so how do we count its squares? Next: π, the number that turns circumference into perimeter and slices the circle into a parallelogram.", 
  },
};
