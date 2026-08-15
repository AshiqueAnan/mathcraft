import type { Lesson } from "../schema";

export const T1U7L2: Lesson = {
  id: "T1-U7-L2",
  tier: 1,
  unit: "Indices",
  title: "The Laws Write Themselves",
  prerequisites: ["T1-U6-L3","T1-U7-L1"],
  estimatedMinutes: 12,
  hook: {
    question: "What is 2³ × 2⁴? If you just expand: (2×2×2)×(2×2×2×2) that's SEVEN twos — no rule memorized, the definition wrote the answer. The index laws aren't magic — they're just expanded multiplication counted once.",
    type: "puzzle",
  },
  intuitionBlocks: [
    {
      widget: "number-line",
      narrative: "Watch 2³ then ×2⁴. Expanding is just stacking 3 twos with 4 twos = 7 twos = 2⁷. The law of adding indices (3+4=7) is just counting the stacks without writing every 2.",
    },
  ],
  formalBlocks: [
    {
      definition: "Index laws come from expanding: $a^m \\times a^n = a^{m+n}$ (multiply → add indices); $\\frac{a^m}{a^n} = a^{m-n}$ (divide → subtract indices); $(a^m)^n = a^{m \\times n}$ (power of a power → multiply indices).",
      examples: [
        "$2^3 \\times 2^4 = 2^{3+4} = 2^7 = 128$ — count the twos.",
        "$\\frac{5^6}{5^2} = 5^{6-2} = 5^4 = 625$ — cancel two of the six fives.",
      ],
      pitfall: "You can ONLY combine indices with the SAME base: $2^3 \\times 3^4$ can't be $6^7$ — different bases must stay separate.", altExplanations: ["GAME: stacking combo multipliers — a ×2 buff then a ×3 buff is ×6 total; each buff ADDS to the combo counter (2+1? no, ×). Index form: $2^3$ then $2^4$ joins as $2^{3+4}$ — count the total 2s multiplied.", "FOOD: 3 batches of 4 trays of buns — total trays is 3×4=12, and each tray has 2 buns: $2^{12}$ counts the buns when you chain 12 doublings. Same factor, indices add across a chain."],
    },
  ],
  gutChecks: [
    { prompt: "Simplify 4³ × 4² using the law.", answer: "4⁵ — add the indices: 3 + 2 = 5." },
  ],
  quiz: {
    pool: [
      {
        id: "U7L2-mcq-1", type: "mcq", category: "procedural",
        prompt: "Which is 2³ × 2⁴ simplified?",
        options: [{ id: "a", text: "2⁷" }, { id: "b", text: "2¹²" }, { id: "c", text: "4⁷" }, { id: "d", text: "6⁷" }],
        correctOptionId: "a",
        diagnoses: { b: "2¹² would be (2³)⁴ — power of a power, not product.", c: "4⁷ adds bases AND indices — wrong.", d: "6⁷ adds the bases — bases stay the same." },
        explanation: "Same base → add indices: 2^(3+4) = 2⁷.",
        hints: ["Same base 2.", "Add the indices.", "2⁷."],
      },
      {
        id: "U7L2-mcq-2", type: "mcq", category: "conceptual",
        prompt: "Why can 2³ × 2⁴ become 2⁷?",
        options: [
          { id: "a", text: "Both are stacks of the SAME base 2, so we count all twos" },
          { id: "b", text: "Because 3 × 4 = 12" },
          { id: "c", text: "Because indices always add" },
          { id: "d", text: "It can't" },
        ],
        correctOptionId: "a",
        diagnoses: { b: "3×4 = 12 would be power-of-a-power if (2³)⁴, not the product.", c: "Indices add only for same bases.", d: "Expanding (2×2×2)(2×2×2×2) = 7 twos, so it CAN." },
        explanation: "The expanded stacks share the base 2 — counting all twos adds their counts.",
        hints: ["Expand both.", "Count the 2s.", "7 twos = 2⁷."],
      },
      {
        id: "U7L2-mcq-3", type: "mcq", category: "word",
        prompt: "A colony doubles every hour. After 3 h it's 2³, after another 4 h it's 2⁴. After 7 h total it's 2³ × 2⁴ = ?",
        options: [{ id: "a", text: "2⁷ = 128" }, { id: "b", text: "2³ + 2⁴ = 24" }, { id: "c", text: "2¹² = 4096" }, { id: "d", text: "2 × 7 = 14" }],
        correctOptionId: "a",
        diagnoses: { b: "Powers multiply, not add, when combining doublings.", c: "2¹² would be (2³)⁴.", d: "Don't multiply base by total hours." },
        explanation: "2³ × 2⁴ = 2⁷ = 128.",
        hints: ["Add indices.", "2⁷.", "128."],
      },
      {
        id: "U7L2-mcq-4", type: "mcq", category: "procedural",
        prompt: "Simplify 5⁶ ÷ 5².",
        options: [{ id: "a", text: "5⁴" }, { id: "b", text: "5³" }, { id: "c", text: "5¹²" }, { id: "d", text: "5⁸" }],
        correctOptionId: "a",
        diagnoses: { b: "6 ÷ 2 = 3 is wrong — indices SUBTRACT on division.", c: "5¹² adds indices, but division subtracts.", d: "5⁸ adds the indices." },
        explanation: "Divide → subtract indices: 5^(6−2) = 5⁴.",
        hints: ["Expand: cancel two 5s.", "6 − 2.", "5⁴."],
      },
      {
        id: "U7L2-mcq-5", type: "mcq", category: "conceptual",
        prompt: "Which expressions CAN'T be combined by the product law?",
        options: [
          { id: "a", text: "2³ × 3⁴" },
          { id: "b", text: "2³ × 2⁴" },
          { id: "c", text: "5² × 5³" },
          { id: "d", text: "7¹ × 7⁵" },
        ],
        correctOptionId: "a",
        diagnoses: { b: "Same base 2 — combine.", c: "Same base 5 — combine.", d: "Same base 7 — combine." },
        explanation: "The product law needs the SAME base; 2³ × 3⁴ has different bases.",
        hints: ["Same base required.", "2 vs 3.", "Different bases — no combining."],
      },
      {
        id: "U7L2-mcq-6", type: "mcq", category: "word",
        prompt: "A cube's side is 2² cm. Its volume is (2²)³ cm³. Simplify:",
        options: [{ id: "a", text: "2⁶ = 64" }, { id: "b", text: "2⁵ = 32" }, { id: "c", text: "2⁸ = 256" }, { id: "d", text: "6² = 36" }],
        correctOptionId: "a",
        diagnoses: { b: "2⁵ adds indices — power of a power MULTIPLIES.", c: "2⁸ = 2^(2+2+2+2)? No — multiply 2×3 = 6.", d: "6² treats the 2 and 3 as a new base — wrong." },
        explanation: "(a^m)^n = a^(m×n): (2²)³ = 2⁶ = 64.",
        hints: ["Power of a power.", "Multiply indices 2 × 3.", "2⁶ = 64."],
      },
      {
        id: "U7L2-num-1", type: "numeric-input", category: "procedural",
        prompt: "Simplify 3² × 3³ — type the exponent (index) of the result.", answer: 5, tolerance: 0,
        explanation: "Add indices: 2 + 3 = 5 → 3⁵.",
        hints: ["Same base 3.", "Add 2 + 3.", "5."],
      },
      {
        id: "U7L2-num-2", type: "numeric-input", category: "procedural",
        prompt: "Simplify 10⁷ ÷ 10⁴ — type the exponent.", answer: 3, tolerance: 0,
        explanation: "Subtract indices: 7 − 4 = 3 → 10³.",
        hints: ["Same base 10.", "Subtract 7 − 4.", "3."],
      },
      {
        id: "U7L2-num-3", type: "numeric-input", category: "conceptual",
        prompt: "What is (4²)³ — type the value.", answer: 4096, tolerance: 0,
        explanation: "(4²)³ = 4⁶ = 4096.",
        hints: ["Multiply indices: 6.", "4⁶.", "4096."],
      },
      {
        id: "U7L2-num-4", type: "numeric-input", category: "word",
        prompt: "2³ × 2⁴ = 2^n. Type n.", answer: 7, tolerance: 0,
        explanation: "3 + 4 = 7.",
        hints: ["Add the indices.", "3 + 4.", "7."],
      },
      {
        id: "U7L2-frac-1", type: "fraction-input", category: "conceptual",
        prompt: "Simplify 2⁵ ÷ 2³ — write the result as a fraction with denominator 1.",
        numerator: 4, denominator: 1, acceptEquivalent: true,
        explanation: "2⁵÷2³ = 2² = 4 → 4/1.",
        hints: ["Subtract indices: 2.", "2² = 4.", "4/1."],
      },
      {
        id: "U7L2-tf-1", type: "true-false-justify", category: "conceptual",
        prompt: "2³ × 2⁵ = 2⁸.",
        isTrue: true,
        explanation: "3 + 5 = 8 → same base, add indices.",
        hints: ["Same base 2.", "Add 3 + 5.", "True."],
      },
      {
        id: "U7L2-tf-2", type: "true-false-justify", category: "conceptual",
        prompt: "5² × 6² = 30⁴.",
        isTrue: false,
        explanation: "Different bases: 5² × 6² = 25 × 36 = 900, but 30⁴ = 810,000. Bases must match to combine exponents.",
        hints: ["Different bases 5 and 6.", "Can't add exponents.", "False."],
      },
      {
        id: "U7L2-order-1", type: "order-steps", category: "word",
        prompt: "Order the steps to simplify 2³ × 2⁴.",
        sequence: ["Notice both bases are 2", "Add the indices: 3+4", "Write 2⁷", "Expand to check: 128"],
        diagnoses: {
          "Add the indices: 3+4@0": "Check the bases match first.",
          "Write 2⁷@0": "Write the combined power after adding.",
          "Expand to check: 128@0": "Checking is final.",
        },
        explanation: "Same base → add indices.",
        hints: ["Same base?", "Add indices.", "2⁷."],
      },
      {
        id: "U7L2-drag-1", type: "drag-match", category: "conceptual",
        prompt: "Match each simplification to its law.",
        pairs: [
          { source: "2³ × 2⁴", target: "add indices" },
          { source: "2⁷ ÷ 2³", target: "subtract indices" },
          { source: "(2³)²", target: "multiply indices" },
        ],
        diagnoses: {
          "2³ × 2⁴->multiply indices": "Product adds indices.",
          "2⁷ ÷ 2³->multiply indices": "Division subtracts.",
          "(2³)²->add indices": "Power of a power multiplies.",
        },
        explanation: "Product → add; quotient → subtract; power of power → multiply.",
        hints: ["× adds.", "÷ subtracts.", "outer power multiplies."],
      },
      {
        id: "U7L2-graph-1", type: "graph-interact", category: "word",
        prompt: "Slider (key: value): set it to 5² × 5³ (as a power of 5's value).",
        challenge: "Set the slider to 3125.",
        validate: { value: 3125 },
        tolerance: 0.01,
        explanation: "5² × 5³ = 5⁵ = 3125.",
        hints: ["Add indices: 5.", "5⁵.", "3125."],
      },
    ],
    selection: { procedural: 2, conceptual: 2, word: 1 },
    passThreshold: 0.8,
  },
  commonMistakes: [
    {
      wrongPattern: "adds indices but also adds bases",
      diagnosis: "2³ × 2⁴ = 2⁷, not 4⁷ or 6⁷. The base stays 2 — only the index changes.",
      hint: "Same base stays; only exponents add.",
    },
    {
      wrongPattern: "multiplies indices on a product",
      diagnosis: "2³ × 2⁴ adds indices (7), not multiplies (12). Multiplying is for (2³)⁴.",
      hint: "× in a product → ADD; outer bracket → MULTIPLY.",
    },
    {
      wrongPattern: "divides by subtracting the base",
      diagnosis: "5⁶ ÷ 5² = 5⁴, not 3⁴. Bases stay; indices subtract.",
      hint: "Keep the base, subtract exponents.",
    },
  ],
  recallTags: ["indices", "laws", "exponents"],
  discovery: {
    challenges: [
      {
        instruction: "Expand 2³ × 2⁴ on the line (write all seven 2s). Count them.",
        observe: "Seven twos = 2⁷ — the counts add because they stack on the same base.",
      },
      {
        instruction: "Now expand (2³)²: (2×2×2)×(2×2×2).",
        observe: "Six twos = 2⁶ — the outer 2 multiplied the inner index 3.",
      },
    ],
    predict: {
      prompt: "Before you expand: what is 3³ × 3² using the pattern?",
      options: [
        { id: "a", text: "3⁵" },
        { id: "b", text: "3⁶" },
        { id: "c", text: "9⁶" },
      ],
      reveal: "3⁵ — add the indices 3 + 2 = 5, same base 3.",
    },
    sayItYourWay: {
      prompt: "What does the product law actually DO?",
      phrasings: [
        { id: "a", text: "Counts all the repeated factors of the same base", correct: true, why: "2³ × 2⁴ = seven twos — the indices add because we count the stack." },
        { id: "b", text: "Multiplies the bases together", correct: false, why: "The base stays the same; only the exponents combine." },
        { id: "c", text: "Creates a brand new number", correct: false, why: "No new base — it's still powers of the same number." },
      ],
      formalName: "the index (exponent) laws",
    },
    stretch: "What do you predict 2⁰ equals, watching the pattern 2⁴, 2³, 2², 2¹… divide by 2 each step?",
  },
};