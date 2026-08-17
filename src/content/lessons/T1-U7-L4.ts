import type { Lesson } from "../schema";

export const T1U7L4: Lesson = {
  id: "T1-U7-L4",
  tier: 1,
  unit: "Indices",
  title: "Half a Power",
  prerequisites: ["T1-U6-L3","T1-U7-L3"],
  estimatedMinutes: 12,
  hook: {
    question: "What number, times itself, gives 2? That's 2^(1/2) — the square root. A half power is a square root wearing a fraction costume.",
    type: "puzzle",
  },
  intuitionBlocks: [
    { widget: "graph-plotter", narrative: "Plot y = x². Where it crosses y = 2, x = √2 ≈ 1.414 = 2^(1/2)." },
  ],
  formalBlocks: [
    { definition: "A fractional index is a root: $a^{1/2} = \\sqrt{a}$, $a^{1/3} = \\sqrt[3]{a}$. Proof: $2^{1/2} \\times 2^{1/2} = 2^1 = 2$.", examples: ["$9^{1/2} = 3$ because 3×3=9.", "$8^{1/3} = 2$ because 2×2×2=8."], pitfall: "√4 = 2, not ±2, by convention. And √2 ≈ 1.414, not 1.", altExplanations: ["GAME: a half-of-a-power is the move-table unlock — $9^{1/2}$ is the number that used twice gets 9, so it's the root 3. Half a doubling is the square root step, the inverse of a full doubling.", "FOOD: half the recipe's cake height means the cube-root of the volume; $a^{1/2}$ is the size that squared makes a. Fractional indices are roots in disguise: cut the multiplication in half."] },
  ],
  gutChecks: [{ prompt: "What is 25^(1/2)?", answer: "5 — 5×5 = 25." }],
  quiz: {
    pool: [
      { id: "U7L4-mcq-1", type: "mcq", category: "procedural", prompt: "9^(1/2) = ?", options: [{ id: "a", text: "3" }, { id: "b", text: "4.5" }, { id: "c", text: "81" }, { id: "d", text: "9" }], correctOptionId: "a", diagnoses: { b: "4.5 is 9÷2, not √9.", c: "81 = 9².", d: "9 is the base." }, explanation: "9^(1/2) = √9 = 3.", hints: ["1/2 exponent means √.", "Half power = square root.", "What squares to 9?"] },
      { id: "U7L4-mcq-2", type: "mcq", category: "conceptual", prompt: "Why is 2^(1/2) × 2^(1/2) = 2?", options: [{ id: "a", text: "Rounded" }, { id: "b", text: "Indices add: 1/2+1/2 = 1" }, { id: "c", text: "Because halves" }, { id: "d", text: "It doesn't" }], correctOptionId: "b", diagnoses: { a: "No rounding — exact.", c: "The real reason is the index law.", d: "It does: 2¹ = 2." }, explanation: "Same base → add indices: 2^(1/2+1/2) = 2¹ = 2.", hints: ["Same base.", "Add indices.", "1/2+1/2 = 1."] },
      { id: "U7L4-mcq-3", type: "mcq", category: "word", prompt: "Square area 16. Side = 16^(1/2) = ?", options: [{ id: "a", text: "256" }, { id: "b", text: "8" }, { id: "c", text: "4" }, { id: "d", text: "2" }], correctOptionId: "c", diagnoses: { b: "8²=64.", a: "256=16².", d: "2²=4." }, explanation: "√16 = 4.", hints: ["Area = side².", "What squares to 16?", "4."] },
      { id: "U7L4-mcq-4", type: "mcq", category: "procedural", prompt: "8^(1/3) = ?", options: [{ id: "a", text: "8/3" }, { id: "b", text: "√8" }, { id: "c", text: "4" }, { id: "d", text: "2" }], correctOptionId: "d", diagnoses: { b: "1/3 is cube root.", c: "3³=27, 4³=64.", a: "Not a root." }, explanation: "8^(1/3) = ∛8 = 2.", hints: ["Denominator 3 = cube root.", "What cubed gives 8?", "2."] },
      { id: "U7L4-mcq-5", type: "mcq", category: "conceptual", prompt: "√25 = ?", options: [{ id: "a", text: "5" }, { id: "b", text: "±5" }, { id: "c", text: "12.5" }, { id: "d", text: "25/2" }], correctOptionId: "a", diagnoses: { b: "School notation → positive root.", c: "12.5² too big.", d: "Not a root." }, explanation: "√25 = 5 (positive root).", hints: ["Positive root.", "5×5=25.", "5."] },
      { id: "U7L4-mcq-6", type: "mcq", category: "word", prompt: "Cube volume 27. Edge = 27^(1/3) = ?", options: [{ id: "a", text: "9" }, { id: "b", text: "3" }, { id: "c", text: "27" }, { id: "d", text: "81" }], correctOptionId: "b", diagnoses: { a: "9³=729.", c: "27 is volume.", d: "81³ huge." }, explanation: "∛27 = 3.", hints: ["Cube root of 27.", "3×3×3.", "3."] },
      { id: "U7L4-num-1", type: "numeric-input", category: "procedural", prompt: "√36", answer: 6, tolerance: 0, explanation: "√36=6.", hints: ["What × itself = 36?", "6×6=36.", "6."] },
      { id: "U7L4-num-2", type: "numeric-input", category: "procedural", prompt: "100^(1/2)", answer: 10, tolerance: 0, explanation: "√100=10.", hints: ["Square root of 100.", "10×10.", "10."] },
      { id: "U7L4-num-3", type: "numeric-input", category: "conceptual", prompt: "√2 to 3 dp", answer: 1.414, tolerance: 0.001, explanation: "√2≈1.414.", hints: ["This is 2^(1/2).", "About 1.4.", "1.414."] },
      { id: "U7L4-num-4", type: "numeric-input", category: "word", prompt: "Square area 81 m². Side?", answer: 9, tolerance: 0, unit: "m", explanation: "√81=9.", hints: ["Side = √area.", "9×9=81.", "9."] },
      { id: "U7L4-frac-1", type: "fraction-input", category: "conceptual", prompt: "√(1/4)", numerator: 1, denominator: 2, acceptEquivalent: true, explanation: "√(1/4)=1/2.", hints: ["What × itself = 1/4?", "1/2 × 1/2.", "1/2."] },
      { id: "U7L4-tf-1", type: "true-false-justify", category: "conceptual", prompt: "4^(1/2) = 2", isTrue: true, explanation: "√4=2.", hints: ["Half power = √.", "2×2=4.", "True."] },
      { id: "U7L4-tf-2", type: "true-false-justify", category: "conceptual", prompt: "2^(1/2) = 1", isTrue: false, explanation: "√2≈1.414≠1.", hints: ["Check: 1×1 = 1, not 2.", "√2 is about 1.414.", "False."] },
      { id: "U7L4-order-1", type: "order-steps", category: "word", prompt: "Find 64^(1/2).", sequence: ["Half power = square root", "Ask: what × itself = 64?", "8 × 8 = 64", "Answer 8"], diagnoses: { "Ask: what × itself = 64?@0": "Root first.", "8 × 8 = 64@0": "Find the pair.", "Answer 8@0": "Final." }, explanation: "√64 = 8.", hints: ["Square root.", "8×8.", "8."] },
      { id: "U7L4-drag-1", type: "drag-match", category: "conceptual", prompt: "Match power to value.", pairs: [{ source: "9^(1/2)", target: "3" }, { source: "27^(1/3)", target: "3" }, { source: "64^(1/2)", target: "8" }], diagnoses: { "9^(1/2)->81": "=3.", "27^(1/3)->9": "∛27=3.", "64^(1/2)->4": "√64=8." }, explanation: "1/2 → √; 1/3 → ∛.", hints: ["√9.", "∛27.", "√64."] },
      { id: "U7L4-graph-1", type: "graph-interact", category: "word", prompt: "Set value to √49.", challenge: "Set to 7.", validate: { value: 7 }, tolerance: 0.01, explanation: "√49=7.", hints: ["Square root of 49.", "7×7=49.", "7."] },
    ],
    selection: { procedural: 2, conceptual: 2, word: 1 },
    passThreshold: 0.8,
  },
  commonMistakes: [
    { wrongPattern: "half power = half of", diagnosis: "9^(1/2)=3, not 4.5.", hint: "1/2 exponent = √." },
    { wrongPattern: "√4 = ±2", diagnosis: "√ means positive root.", hint: "√ alone = positive." },
    { wrongPattern: "1/3 not cube", diagnosis: "8^(1/3)=2, not √8.", hint: "a^(1/3)=∛a." },
  ],
  recallTags: ["indices", "square-root", "fractional-index"],
  discovery: {
    challenges: [
      { instruction: "Plot y=x²; find where y=2.", observe: "x≈1.414 = 2^(1/2)." },
      { instruction: "Find where y=9.", observe: "x=3 = 9^(1/2)." },
    ],
    predict: { prompt: "Predict 4^(1/2).", options: [{ id: "a", text: "2" }, { id: "b", text: "1" }, { id: "c", text: "8" }], reveal: "2 — 2×2=4." },
    sayItYourWay: { prompt: "What does 1/2 exponent ask?", phrasings: [{ id: "a", text: "What × itself = base?", correct: true, why: "Square root question." }, { id: "b", text: "Cut base in half", correct: false, why: "9/2=4.5, but √9=3." }, { id: "c", text: "Double base", correct: false, why: "That's ²." }], formalName: "fractional index (roots)" },
    stretch: "If 2^(1/2) × 2^(1/2) = 2, what is 9^(1/2) × 9^(1/2)?",
  },
};