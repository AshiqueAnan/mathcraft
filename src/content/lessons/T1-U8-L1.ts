import type { Lesson } from "../schema";

export const T1U8L1: Lesson = {
  id: "T1-U8-L1",
  tier: 1,
  unit: "Roots & surds",
  title: "The Side of a Square of Area 2",
  prerequisites: ["T1-U7-L4"],
  estimatedMinutes: 12,
  hook: {
    question: "A square has area 2. Its side is √2 ≈ 1.414… — the decimals never end or repeat, yet the square clearly exists. Irrational numbers are real, just not writable as a tidy decimal.",
    type: "paradox",
  },
  intuitionBlocks: [
    { widget: "geometry-playground", narrative: "Drag the shape: a square of area 2 has a side of exactly √2. Surds stay exact — decimals only approximate." },
  ],
  formalBlocks: [
    { definition: "√2 is IRRATIONAL: no fraction equals it and its decimal never terminates or repeats. A root left exact like √8 is called a SURD. We keep surds exact; converting to decimal loses the exact value.", examples: ["√2 ≈ 1.41421356… never repeats.", "(√2)² = 2 — squaring the surd recovers the exact area."], pitfall: "√2 is NOT 1.4 exactly: 1.4² = 1.96. Decimals approximate; the surd is the exact number.", altExplanations: ["MONEY: √2 is an amount that no coin or bill combination names exactly — 1.41 dollars is close but not exact; squaring it never lands on 2 exactly. The surd √2 is the precise receipt; the decimal is the rounded change.", "FOOD: a square cake of area 2 m² must have a side of √2 m — a real, measurable length even though its decimal never ends. Think of √2 as a number you can build at full size with a ruler and compass."] },
  ],
  gutChecks: [{ prompt: "What number squared gives 7? (Write as a surd.)", answer: "√7 — the exact square root." }],
  quiz: { pool: [
    { id: "U8L1-mcq-1", type: "mcq", category: "procedural", prompt: "√49 = ?", options: [{ id: "a", text: "7" }, { id: "b", text: "49" }, { id: "c", text: "24.5" }, { id: "d", text: "√24.5" }], correctOptionId: "a", diagnoses: { b: "49 is the base.", c: "24.5 = 49/2.", d: "Not the root." }, explanation: "√49 = 7.", hints: ["7×7=49.", "Positive root.", "7."] },
    { id: "U8L1-mcq-2", type: "mcq", category: "conceptual", prompt: "Why is √2 NOT rational?", options: [{ id: "a", text: "It's negative" }, { id: "b", text: "Its decimal never terminates or repeats" }, { id: "c", text: "It's too big" }, { id: "d", text: "It is rational" }], correctOptionId: "b", diagnoses: { a: "√2 ≈ 1.4 > 0.", c: "Size is irrelevant.", d: "No fraction equals √2." }, explanation: "√2 can't be a fraction; its decimal goes on forever without repeating.", hints: ["Try a fraction a/b.", "1.4142135…", "Never repeats — irrational."] },
    { id: "U8L1-mcq-3", type: "mcq", category: "word", prompt: "Square area 10 m². Side (exact)?", options: [{ id: "a", text: "100 m" }, { id: "b", text: "5 m" }, { id: "c", text: "√10 m" }, { id: "d", text: "10 m" }], correctOptionId: "c", diagnoses: { b: "5 = 10÷2.", a: "100 = 10².", d: "10 is the area." }, explanation: "side = √10 m.", hints: ["side² = area.", "√10.", "√10 m."] },
    { id: "U8L1-mcq-4", type: "mcq", category: "procedural", prompt: "(√5)² = ?", options: [{ id: "a", text: "√25" }, { id: "b", text: "√5" }, { id: "c", text: "25" }, { id: "d", text: "5" }], correctOptionId: "d", diagnoses: { b: "That's √5 once.", c: "25 = (√5)⁴.", a: "√25 = 5, same value but 5 is simpler." }, explanation: "(√a)² = a — squaring undoes the root.", hints: ["Root then square.", "Net effect: 5.", "5."] },
    { id: "U8L1-mcq-5", type: "mcq", category: "conceptual", prompt: "Which is a surd?", options: [{ id: "a", text: "√8" }, { id: "b", text: "√9" }, { id: "c", text: "√16" }, { id: "d", text: "√25" }], correctOptionId: "a", diagnoses: { b: "√9 = 3 exact.", c: "√16 = 4 exact.", d: "√25 = 5 exact." }, explanation: "A surd stays a root — √8 isn't a perfect square.", hints: ["Which isn't a perfect square?", "√8 stays a root.", "√8."] },
    { id: "U8L1-mcq-6", type: "mcq", category: "word", prompt: "Unit square diagonal = √2 ≈ ? (1 dp)", options: [{ id: "a", text: "1.3" }, { id: "b", text: "1.4" }, { id: "c", text: "1.5" }, { id: "d", text: "2.0" }], correctOptionId: "b", diagnoses: { a: "1.3² = 1.69.", c: "1.5² = 2.25.", d: "2.0 too big." }, explanation: "√2 ≈ 1.414 ≈ 1.4.", hints: ["√2 ≈ 1.414.", "1 dp: 1.4.", "The second decimal is 1, so it rounds to 1.4, not 1.5."] },
    { id: "U8L1-num-1", type: "numeric-input", category: "procedural", prompt: "√25", answer: 5, tolerance: 0, explanation: "√25 = 5.", hints: ["5×5=25.", "5.", "The positive square root of 25 is 5."] },
    { id: "U8L1-num-2", type: "numeric-input", category: "procedural", prompt: "√121", answer: 11, tolerance: 0, explanation: "√121 = 11.", hints: ["11×11=121.", "11.", "The positive square root of 121 is 11."] },
    { id: "U8L1-num-3", type: "numeric-input", category: "conceptual", prompt: "√2 to 2 dp", answer: 1.41, tolerance: 0.005, explanation: "√2 ≈ 1.41.", hints: ["1.414…", "2 dp: 1.41.", "The third decimal is 4, so 1.41 stays as 1.41."] },
    { id: "U8L1-num-4", type: "numeric-input", category: "word", prompt: "Square area 18. Side as surd √n — type n.", answer: 18, tolerance: 0, explanation: "side = √18.", hints: ["side² = 18.", "√18.", "The radicand n is exactly the area, 18."] },
    { id: "U8L1-frac-1", type: "fraction-input", category: "conceptual", prompt: "√(1/9)", numerator: 1, denominator: 3, acceptEquivalent: true, explanation: "= 1/3.", hints: ["√1 = 1, √9 = 3.", "1/3.", "Root the top and bottom separately."] },
    { id: "U8L1-tf-1", type: "true-false-justify", category: "conceptual", prompt: "√16 is rational.", isTrue: true, explanation: "√16 = 4, whole → rational.", hints: ["√16 = 4.", "Rational.", "A whole number is rational — it can be written as 4/1."] },
    { id: "U8L1-tf-2", type: "true-false-justify", category: "conceptual", prompt: "√2 = 1.41 exactly.", isTrue: false, explanation: "1.41² = 1.9881 ≠ 2.", hints: ["Square 1.41.", "Not 2.", "False."] },
    { id: "U8L1-order-1", type: "order-steps", category: "word", prompt: "Side of square area 7.", sequence: ["Write side² = 7", "Side = √7", "√7 is exact (surd)", "Leave as √7"], diagnoses: { "Side = √7@0": "Start with the equation.", "√7 is exact (surd)@0": "Root it.", "Leave as √7@0": "Keep exact." }, explanation: "side = √7.", hints: ["Root the area.", "√7.", "7 isn't a perfect square, so keep it exact."] },
    { id: "U8L1-drag-1", type: "drag-match", category: "conceptual", prompt: "Match to value.", pairs: [{ source: "√9", target: "3" }, { source: "√5", target: "surd" }, { source: "√36", target: "6" }], diagnoses: { "√9->surd": "=3.", "√5->3": "Stays surd.", "√36->surd": "=6." }, explanation: "Perfect squares simplify; others stay surds.", hints: ["9, 36 perfect.", "5 isn't.", "Perfect squares are exact; √5 stays a root."] },
    { id: "U8L1-graph-1", type: "graph-interact", category: "word", prompt: "Set value to √4.", challenge: "Set to 2.", validate: { value: 2 }, tolerance: 0.01, explanation: "√4=2.", hints: ["2×2=4.", "2.", "The slider should land on 2, since √4 = 2."] },
  ], selection: { procedural: 2, conceptual: 2, word: 1 }, passThreshold: 0.8 },
  commonMistakes: [
    { wrongPattern: "√2 = 1.41 exact", diagnosis: "1.41² ≠ 2. Keep surds exact.", hint: "Leave √2." },
    { wrongPattern: "surd vs exact", diagnosis: "√9 = 3; √8 stays surd.", hint: "Perfect square simplifies." },
    { wrongPattern: "decimal forever = broken", diagnosis: "The surd IS the exact answer.", hint: "Write √2, not rounded." },
  ],
  recallTags: ["surds", "square-root", "irrational"],
  discovery: {
    challenges: [
      { instruction: "Drag the square to area 2.", observe: "Side = √2, a real length." },
      { instruction: "Square √2.", observe: "Exactly 2 back." },
    ],
    predict: { prompt: "Do √2's decimals ever end?", options: [{ id: "a", text: "Never" }, { id: "b", text: "After 1.41" }, { id: "c", text: "Repeats 414" }], reveal: "Never — no terminate, no repeat." },
    sayItYourWay: { prompt: "What is a surd?", phrasings: [{ id: "a", text: "An exact root not simplifying to a whole", correct: true, why: "√8 stays exact." }, { id: "b", text: "A rounded decimal", correct: false, why: "Rounded loses exactness." }, { id: "c", text: "A negative number", correct: false, why: "Surds ≈ exact, not sign." }], formalName: "surd" },
    stretch: "Area-8 square's side: can you simplify √8?",
  },
};