import type { Lesson } from "../schema";

export const T1U7L1: Lesson = {
  id: "T1-U7-L1",
  tier: 1,
  unit: "Indices",
  title: "Folding Paper to the Moon",
  prerequisites: ["T1-U1-L1","T1-U3-L1","T1-U6-L3"],
  estimatedMinutes: 12,
  hook: {
    question: "Fold a sheet of paper in half, then again, then again. Each fold DOUBLES its thickness. How many folds to reach the Moon (about 384,000 km)? The answer is shockingly small — powers of 2 explode.",
    type: "paradox",
  },
  intuitionBlocks: [
    {
      widget: "number-line",
      narrative: "Watch 2, 4, 8, 16, 32… as folds accumulate on the line. The jumps get huge fast. This is multiplication in disguise: each fold multiplies the previous thickness by 2.",
    },
  ],
  formalBlocks: [
    {
      definition: "An index (power) counts REPEATED MULTIPLICATION: $a^n$ means $a$ multiplied by itself $n$ times. $2^3 = 2 \\times 2 \\times 2 = 8$. The base $a$ is the number multiplied; the index $n$ says how many times.",
      examples: [
        "$2^4 = 2 \\times 2 \\times 2 \\times 2 = 16$ — four folds double four times.",
        "$10^3 = 10 \\times 10 \\times 10 = 1{,}000$ — three ×10 jumps.",
      ],
      pitfall: "Do NOT multiply the base by the index: $3^2$ is $3 \\times 3 = 9$, NOT $3 \\times 2 = 6$. The index counts how many copies of the base are multiplied together.", altExplanations: ["MONEY: doubling money each day — day 0: $1, day 3: $8 = 2×2×2. The index 3 counts how many doublings, not '3 dollars'. $2^3$ is three rounds of ×2, growing to 8, never 6.", "GAME: a chessboard reward — 2 grains on square 1, 4 on square 2, 8 on square 3: $2^n$ is the grain count from n doublings. The power counts multiplies, and it explodes fast."],
    },
  ],
  gutChecks: [
    { prompt: "What is 2⁴?", answer: "16 — 2×2×2×2. Not 2×4=8." },
  ],
  quiz: {
    pool: [
      {
        id: "U7L1-mcq-1", type: "mcq", category: "procedural",
        prompt: "What is 3²?",
        options: [{ id: "a", text: "9" }, { id: "b", text: "6" }, { id: "c", text: "3" }, { id: "d", text: "12" }],
        correctOptionId: "a",
        diagnoses: { b: "6 = 3×2 — that's multiplication by the index, not powers.", c: "That's 3¹.", d: "12 = 3×4." },
        explanation: "3² = 3 × 3 = 9.",
        hints: ["The 2 counts how many 3s.", "3 × 3.", "9."],
      },
      {
        id: "U7L1-mcq-2", type: "mcq", category: "conceptual",
        prompt: "What does the small 3 in 2³ mean?",
        options: [
          { id: "a", text: "Multiply 2 by itself 3 times" },
          { id: "b", text: "Multiply 2 by 3" },
          { id: "c", text: "Add 3 twos" },
          { id: "d", text: "Divide 2 by 3" },
        ],
        correctOptionId: "a",
        diagnoses: { b: "2×3 = 6, but 2³ = 8 — powers repeat multiplication.", c: "2+2+2 is 6, not 8.", d: "Division is not powers." },
        explanation: "2³ = 2 × 2 × 2 = 8 — the index counts repeated multiplication.",
        hints: ["Write 2 three times with ×.", "2 × 2 × 2.", "8."],
      },
      {
        id: "U7L1-mcq-3", type: "mcq", category: "word",
        prompt: "A bacteria count doubles every hour. Start 1. After 4 hours?",
        options: [{ id: "a", text: "16" }, { id: "b", text: "8" }, { id: "c", text: "4" }, { id: "d", text: "32" }],
        correctOptionId: "a",
        diagnoses: { b: "8 is after 3 hours (2³).", c: "4 is just ×2 each hour twice.", d: "32 = 2⁵ — one extra doubling." },
        explanation: "1 × 2 × 2 × 2 × 2 = 2⁴ = 16.",
        hints: ["Doubling ×4.", "2⁴.", "16."],
      },
      {
        id: "U7L1-mcq-4", type: "mcq", category: "procedural",
        prompt: "5² = ?",
        options: [{ id: "a", text: "25" }, { id: "b", text: "10" }, { id: "c", text: "5" }, { id: "d", text: "125" }],
        correctOptionId: "a",
        diagnoses: { b: "10 = 5 × 2 — wrong operation.", c: "That's 5¹.", d: "125 = 5³." },
        explanation: "5² = 5 × 5 = 25.",
        hints: ["The 2 counts how many 5s.", "5 × 5.", "25."],
      },
      {
        id: "U7L1-mcq-5", type: "mcq", category: "conceptual",
        prompt: "Which is BIGGER: 2⁵ or 5²?",
        options: [{ id: "a", text: "2⁵ = 32" }, { id: "b", text: "5² = 25" }, { id: "c", text: "Equal" }, { id: "d", text: "Cannot tell" }],
        correctOptionId: "a",
        diagnoses: { b: "5² = 25, but 2⁵ = 32.", c: "32 ≠ 25.", d: "Compute both: 2⁵=32, 5²=25." },
        explanation: "2×2×2×2×2 = 32 beats 5×5 = 25.",
        hints: ["Write out both.", "2⁵ = 32.", "32 > 25."],
      },
      {
        id: "U7L1-mcq-6", type: "mcq", category: "word",
        prompt: "You fold a paper 3 times. Each fold doubles thickness. The thickness is 2³ times the original. 2³ = ?",
        options: [{ id: "a", text: "8" }, { id: "b", text: "6" }, { id: "c", text: "3" }, { id: "d", text: "9" }],
        correctOptionId: "a",
        diagnoses: { b: "6 = 2×3.", c: "3 is the fold count, not the multiplier.", d: "9 = 3²." },
        explanation: "2³ = 2 × 2 × 2 = 8.",
        hints: ["Three folds, three 2s.", "2 × 2 × 2.", "8."],
      },
      {
        id: "U7L1-num-1", type: "numeric-input", category: "procedural",
        prompt: "Type the value of 2⁵.", answer: 32, tolerance: 0,
        explanation: "2⁵ = 32.",
        hints: ["2⁴ = 16.", "2⁵ doubles it.", "32."],
      },
      {
        id: "U7L1-num-2", type: "numeric-input", category: "procedural",
        prompt: "Type the value of 10².", answer: 100, tolerance: 0,
        explanation: "10 × 10 = 100.",
        hints: ["The 2 means two 10s.", "10 × 10.", "100."],
      },
      {
        id: "U7L1-num-3", type: "numeric-input", category: "conceptual",
        prompt: "2 raised to what power equals 8? (Type the index.)", answer: 3, tolerance: 0,
        explanation: "2³ = 8.",
        hints: ["2×2×2.", "Three twos.", "3."],
      },
      {
        id: "U7L1-num-4", type: "numeric-input", category: "word",
        prompt: "A population doubles from 1 to 64 in how many doublings (powers of 2)?", answer: 6, tolerance: 0,
        explanation: "2⁶ = 64.",
        hints: ["Count powers: 2,4,8,16,32,64.", "That's 6 doublings.", "6."],
      },
      {
        id: "U7L1-frac-1", type: "fraction-input", category: "conceptual",
        prompt: "After 2 folds, the thickness is 2² = 4× original. Write the thickness as a multiple of the original: 4 over 1.",
        numerator: 4, denominator: 1, acceptEquivalent: true,
        explanation: "2² = 4 → 4/1.",
        hints: ["2².", "4.", "4/1."],
      },
      {
        id: "U7L1-tf-1", type: "true-false-justify", category: "conceptual",
        prompt: "3² means 3 × 3.",
        isTrue: true,
        explanation: "3² = 9 = 3 × 3.",
        hints: ["Index 2 → two 3s.", "3 × 3.", "True."],
      },
      {
        id: "U7L1-tf-2", type: "true-false-justify", category: "conceptual",
        prompt: "2⁴ means 2 × 4.",
        isTrue: false,
        explanation: "2⁴ = 2 × 2 × 2 × 2 = 16, not 8.",
        hints: ["Four twos multiplied.", "16.", "False."],
      },
      {
        id: "U7L1-order-1", type: "order-steps", category: "word",
        prompt: "Order the steps to compute 2⁴.",
        sequence: ["Read: 2 multiplied 4 times", "2 × 2 = 4", "4 × 2 = 8", "8 × 2 = 16"],
        diagnoses: {
          "2 × 2 = 4@0": "Start with the first pair.",
          "4 × 2 = 8@0": "Keep doubling.",
          "8 × 2 = 16@0": "Final doubling.",
        },
        explanation: "Four twos multiply to 16.",
        hints: ["Start with the first pair.", "2×2 = 4.", "Keep doubling to 16."],
      },
      {
        id: "U7L1-drag-1", type: "drag-match", category: "conceptual",
        prompt: "Match each power to its value.",
        pairs: [
          { source: "2³", target: "8" },
          { source: "3²", target: "9" },
          { source: "10³", target: "1000" },
        ],
        diagnoses: {
          "2³->9": "2³ = 2×2×2 = 8, not 9.",
          "3²->8": "3² = 3×3 = 9.",
          "10³->100": "10³ = 1000, not 100.",
        },
        explanation: "Expand each power.",
        hints: ["2×2×2.", "3×3.", "10×10×10."],
      },
      {
        id: "U7L1-graph-1", type: "graph-interact", category: "word",
        prompt: "Slider (key: value): set it to 2⁴.",
        challenge: "Set the slider to 16.",
        validate: { value: 16 },
        tolerance: 0.01,
        explanation: "2⁴ = 16.",
        hints: ["Write four 2s with ×.", "2×2×2×2.", "16."],
      },
    ],
    selection: { procedural: 2, conceptual: 2, word: 1 },
    passThreshold: 0.8,
  },
  commonMistakes: [
    {
      wrongPattern: "multiplies base by index",
      diagnosis: "3² is 3 × 3 = 9, NOT 3 × 2 = 6. The index counts REPEATED copies of the base multiplied.",
      hint: "Expand: write the base 'index times' joined by ×.",
    },
    {
      wrongPattern: "adds instead of multiplying",
      diagnosis: "2³ = 8, not 6. Three twos MULTIPLIED, not added.",
      hint: "Multiplication repeated, not addition.",
    },
    {
      wrongPattern: "gets the doubling steps wrong",
      diagnosis: "Each fold multiplies by 2, so 4 folds = 2⁴ = 16×, not 4×.",
      hint: "Count folds as the exponent.",
    },
  ],
  recallTags: ["powers", "indices", "exponential"],
  discovery: {
    challenges: [
      {
        instruction: "Slide the line from 1 to 2 to 4 to 8. Each movement is ×2.",
        observe: "The multiplier is 2; the step number is the power.",
      },
      {
        instruction: "Go to 16, 32, 64. Notice the gap explosion.",
        observe: "Even one more doubling jumps dramatically — powers grow fast.",
      },
    ],
    predict: {
      prompt: "Before you slide: after 5 doublings from 1, how big?",
      options: [
        { id: "a", text: "32" },
        { id: "b", text: "16" },
        { id: "c", text: "10" },
      ],
      reveal: "32 — 2⁵ = 32, each doubling multiplies by 2.",
    },
    sayItYourWay: {
      prompt: "What does the little number (index) tell you?",
      phrasings: [
        { id: "a", text: "How many times to multiply the base by itself", correct: true, why: "The index counts repeats of multiplication." },
        { id: "b", text: "How many times to add the base", correct: false, why: "Adding gives a sum, not a power." },
        { id: "c", text: "The size of the base", correct: false, why: "The base is the number; the index is the repeat count." },
      ],
      formalName: "index (power)",
    },
    stretch: "If 2⁴ = 16, what do you predict 2⁵ equals? And what about 2⁰ — can you guess before the next lesson?",
  },
};