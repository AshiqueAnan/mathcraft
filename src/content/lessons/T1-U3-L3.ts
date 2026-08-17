import type { Lesson } from "../schema";

export const T1U3L3: Lesson = {
  id: "T1-U3-L3",
  tier: 1,
  unit: "Primes & factorization",
  title: "HCF: The Biggest Shared Brick",
  prerequisites: ["T1-U2-L3","T1-U3-L2"],
  estimatedMinutes: 10,
  hook: {
    question: "Two builders each need blocks. One has 12 blocks, the other 18. What's the biggest block size they can both stack evenly? The shared prime fingerprint holds the answer.",
    type: "real-world",
  },
  intuitionBlocks: [
    {
      widget: "venn-diagram",
      narrative: "Put the prime factors of 12 in circle A: {2, 2, 3}. Put 18's in circle B: {2, 3, 3}. The overlap {2, 3} MULTIPLIED (2×3 = 6) is the highest common factor.",
    },
  ],
  formalBlocks: [
    {
      definition: "The Highest Common Factor (HCF) is the largest number that divides two or more numbers. From the prime fingerprints, take the shared primes — the overlap — and multiply them.",
      examples: [
        "12 = 2 × 2 × 3, 18 = 2 × 3 × 3. Overlap: 2 × 3 = 6. HCF(12, 18) = 6.",
        "HCF(15, 25): 15 = 3×5, 25 = 5×5. Overlap: 5. HCF = 5.",
      ],
      pitfall: "Shared primes must appear with the LOWEST exponent of the two. 12 has 2², 18 has 2¹ → take just one 2.", altExplanations: ["MONEY: HCF is the biggest bill that divides two totals exactly. 12 and 18 can both be paid with $6 bills (two and three bills) — no bigger bill works. Shared prime fingerprints (2×3 = 6) are the bill denominations both totals have in common.", "FOOD: cutting two cakes into equal same-size slices — the largest slice size that divides both cakes exactly. A 12-serving cake and an 18-serving cake both slice into 6 equal portions, because 2 and 3 are the common prime factors of both."],
    },
  ],
  gutChecks: [
    { prompt: "What is the HCF of 8 and 12?", answer: "4 — 8 = 2³, 12 = 2²×3; shared is 2² = 4." },
  ],
  quiz: {
    pool: [
      {
        id: "U3L3-mcq-1", type: "mcq", category: "procedural",
        prompt: "What is the HCF of 12 and 18?",
        options: [{ id: "a", text: "6" }, { id: "b", text: "3" }, { id: "c", text: "36" }, { id: "d", text: "2" }],
        correctOptionId: "a",
        diagnoses: { b: "3 is a factor but not the HIGHEST.", c: "36 is the LCM, not HCF.", d: "2 is a factor but smaller than 6." },
        explanation: "12 = 2²×3, 18 = 2×3². Overlap: 2×3 = 6.",
        hints: ["List factors of each.", "Shared: 1, 2, 3, 6.", "Biggest shared: 6."],
      },
      {
        id: "U3L3-mcq-2", type: "mcq", category: "conceptual",
        prompt: "The HCF of two numbers is found from their prime fingerprints by...",
        options: [{ id: "a", text: "Adding all primes" }, { id: "b", text: "Multiplying the shared primes" }, { id: "c", text: "Taking the biggest prime only" }, { id: "d", text: "Multiplying all primes" }],
        correctOptionId: "b",
        diagnoses: { a: "Adding primes isn't a product.", c: "The biggest prime alone misses shared smaller ones.", d: "Multiplying ALL primes gives the LCM or more." },
        explanation: "The overlap (shared primes) multiplies to the HCF.",
        hints: ["What's in both circles?", "That overlap is the HCF.", "Multiply the overlap."],
      },
      {
        id: "U3L3-mcq-3", type: "mcq", category: "word",
        prompt: "You have 24 pens and 36 pencils. You want identical gift packs using all of both. How many packs can you make?",
        options: [{ id: "a", text: "24" }, { id: "b", text: "6" }, { id: "c", text: "12" }, { id: "d", text: "72" }],
        correctOptionId: "c",
        diagnoses: { b: "6 packs is a factor option but not the maximum.", a: "24 packs would need 1.5 pencils each — not whole.", d: "72 is the LCM." },
        explanation: "HCF(24, 36) = 12. Each pack: 2 pens, 3 pencils.",
        hints: ["Find HCF(24, 36).", "24 = 2³×3; 36 = 2²×3².", "Overlap 2²×3 = 12."],
      },
      {
        id: "U3L3-mcq-4", type: "mcq", category: "procedural",
        prompt: "HCF(15, 25) = ?",
        options: [{ id: "a", text: "15" }, { id: "b", text: "75" }, { id: "c", text: "3" }, { id: "d", text: "5" }],
        correctOptionId: "d",
        diagnoses: { b: "75 is the LCM.", c: "3 divides 15 but not 25.", a: "15 doesn't divide 25." },
        explanation: "15 = 3×5, 25 = 5². Overlap: 5.",
        hints: ["Fingerprints: 3·5 and 5·5.", "Shared prime: 5.", "HCF = 5."],
      },
      {
        id: "U3L3-mcq-5", type: "mcq", category: "conceptual",
        prompt: "If a number is prime, its only factor pair is...",
        options: [{ id: "a", text: "1 and itself" }, { id: "b", text: "1 and 2" }, { id: "c", text: "Itself and 0" }, { id: "d", text: "It has none" }],
        correctOptionId: "a",
        diagnoses: { b: "Only for the number 2.", c: "0 doesn't divide a positive number.", d: "Every number has 1 and itself." },
        explanation: "Primes have exactly two divisors: 1 and itself.",
        hints: ["Recall prime definition.", "Two divisors.", "1 and itself."],
      },
      {
        id: "U3L3-mcq-6", type: "mcq", category: "word",
        prompt: "A room is 24 m long and 16 m wide. You want the largest square tiles that fit exactly. Tile side length?",
        options: [{ id: "a", text: "4 m" }, { id: "b", text: "8 m" }, { id: "c", text: "16 m" }, { id: "d", text: "12 m" }],
        correctOptionId: "b",
        diagnoses: { a: "4 works but isn't the largest.", c: "16 doesn't divide 24.", d: "12 doesn't divide 16." },
        explanation: "HCF(24, 16) = 8.",
        hints: ["Largest square = HCF.", "24 = 2³×3, 16 = 2⁴.", "Overlap 2³ = 8."],
      },
      {
        id: "U3L3-num-1", type: "numeric-input", category: "procedural",
        prompt: "Type HCF(10, 15).", answer: 5, tolerance: 0,
        explanation: "10 = 2×5, 15 = 3×5. Shared: 5.",
        hints: ["Factor 10 and 15.", "10 = 2·5, 15 = 3·5.", "Shared 5."],
      },
      {
        id: "U3L3-num-2", type: "numeric-input", category: "procedural",
        prompt: "Type HCF(14, 21).", answer: 7, tolerance: 0,
        explanation: "14 = 2×7, 21 = 3×7. Shared: 7.",
        hints: ["Factor both.", "Both have 7.", "HCF = 7."],
      },
      {
        id: "U3L3-num-3", type: "numeric-input", category: "conceptual",
        prompt: "Type HCF(16, 40).", answer: 8, tolerance: 0,
        explanation: "16 = 2⁴, 40 = 2³×5. Shared: 2³ = 8.",
        hints: ["Fingerprints.", "16 = 2⁴.", "40 = 2³·5 → 8."],
      },
      {
        id: "U3L3-num-4", type: "numeric-input", category: "word",
        prompt: "You have 18 apples and 24 oranges to bag equally. Largest number of bags?", answer: 6, tolerance: 0,
        explanation: "HCF(18, 24) = 2×3 = 6.",
        hints: ["18 = 2·3², 24 = 2³·3.", "Overlap 2·3.", "6."],
      },
      {
        id: "U3L3-frac-1", type: "fraction-input", category: "conceptual",
        prompt: "The HCF of two numbers is 6, equal to the overlap 2×3. Write the HCF as a fraction of 18 (simplified).",
        numerator: 1, denominator: 3, acceptEquivalent: true,
        explanation: "6/18 = 1/3.",
        hints: ["6 out of 18.", "Simplify.", "1/3."],
      },
      {
        id: "U3L3-tf-1", type: "true-false-justify", category: "conceptual",
        prompt: "The HCF of 8 and 12 is 4.",
        isTrue: true,
        explanation: "8 = 2³, 12 = 2²×3. Shared 2² = 4.",
        hints: ["8 = 2³.", "12 = 2²·3.", "Overlap 2² = 4."],
      },
      {
        id: "U3L3-tf-2", type: "true-false-justify", category: "conceptual",
        prompt: "The HCF is always bigger than the LCM.",
        isTrue: false,
        explanation: "The LCM is at least as big as each number; the HCF is at most the smaller. Usually HCF < LCM.",
        hints: ["HCF(12,18) = 6.", "LCM(12,18) = 36.", "HCF is smaller."],
      },
      {
        id: "U3L3-order-1", type: "order-steps", category: "word",
        prompt: "Order the steps to find HCF(20, 30).",
        sequence: ["Factor: 20 = 2²×5, 30 = 2×3×5", "Find the shared primes", "Shared: 2 × 5", "HCF = 10"],
        diagnoses: {
          "Find the shared primes@0": "Factor first.",
          "HCF = 10@0": "10 is the final answer.",
          "Shared: 2 × 5@0": "Multiply after finding overlap.",
        },
        explanation: "Shared primes 2 and 5 give HCF = 10.",
        hints: ["Factor both.", "Overlap.", "2 × 5 = 10."],
      },
      {
        id: "U3L3-drag-1", type: "drag-match", category: "conceptual",
        prompt: "Match each pair to its HCF.",
        pairs: [
          { source: "HCF(12, 18)", target: "6" },
          { source: "HCF(9, 15)", target: "3" },
          { source: "HCF(14, 20)", target: "2" },
        ],
        diagnoses: {
          "HCF(12, 18)->3": "The biggest shared factor is 6, not 3.",
          "HCF(9, 15)->6": "9 and 15 share only 3.",
          "HCF(14, 20)->3": "14 and 20 share only 2.",
        },
        explanation: "12&18 → 6; 9&15 → 3; 14&20 → 2.",
        hints: ["12=2²·3, 18=2·3².", "9=3², 15=3·5.", "14=2·7, 20=2²·5."],
      },
      {
        id: "U3L3-graph-1", type: "graph-interact", category: "word",
        prompt: "Slider 'value': set it to HCF(20, 30).",
        challenge: "Set value to 10.",
        validate: { value: 10 }, tolerance: 0,
        explanation: "HCF(20, 30) = 10.",
        hints: ["Shared primes 2 and 5.", "2 × 5.", "10."],
      },
    ],
    selection: { procedural: 2, conceptual: 2, word: 1 },
    passThreshold: 0.8,
  },
  commonMistakes: [
    {
      wrongPattern: "confuses HCF with LCM",
      diagnosis: "HCF(12, 18) = 6, not 36. HCF is the biggest factor; LCM is the smallest common multiple.",
      hint: "HCF ≤ smaller number; LCM ≥ bigger number.",
    },
    {
      wrongPattern: "uses the highest exponent in the overlap",
      diagnosis: "For the overlap, use the LOWEST exponent of each shared prime. 12 has 2², 18 has 2¹ → take 2¹.",
      hint: "Shared primes get the smaller exponent.",
    },
    {
      wrongPattern: "ignores that 1 is always a factor",
      diagnosis: "Every pair shares at least 1, so HCF ≥ 1. If the only overlap is nothing, HCF = 1.",
      hint: "HCF is never below 1.",
    },
  ],
  recallTags: ["hcf", "prime-factorization", "factors"],
  discovery: {
    challenges: [
      {
        instruction: "Place 12's prime factors in circle A and 18's in circle B. Watch which primes fall in the overlap.",
        observe: "Both circles share 2 and 3 — the overlap is the shared brick.",
      },
      {
        instruction: "Now multiply just the overlap: 2 × 3.",
        observe: "6 — the biggest number dividing both 12 and 18.",
      },
    ],
    predict: {
      prompt: "Before you multiply the overlap: will HCF(12,18) be bigger or smaller than 12?",
      options: [
        { id: "a", text: "Smaller than 12" },
        { id: "b", text: "Bigger than 12" },
        { id: "c", text: "Equal to 12" },
      ],
      reveal: "Smaller — the HCF divides into 12, so it can't be bigger than 12. It's 6.",
    },
    sayItYourWay: {
      prompt: "What does the HCF represent?",
      phrasings: [
        { id: "a", text: "The biggest brick that divides both numbers", correct: true, why: "It's the largest shared factor." },
        { id: "b", text: "The smallest common multiple", correct: false, why: "That's the LCM." },
        { id: "c", text: "The product of the two numbers", correct: false, why: "That's way too big — a multiple, not a factor." },
      ],
      formalName: "Highest Common Factor (HCF)",
    },
    stretch: "If HCF(12, 18) = 6 and LCM(12, 18) = 36, what do you notice about 6 × 36 vs 12 × 18?",
  },
};