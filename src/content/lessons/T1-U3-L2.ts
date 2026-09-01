import type { Lesson } from "../schema";

export const T1U3L2: Lesson = {
  id: "T1-U3-L2",
  tier: 1,
  unit: "Primes & factorization",
  title: "Every Number Has a Fingerprint",
  prerequisites: ["T1-U2-L3","T1-U3-L1"],
  estimatedMinutes: 10,
  hook: {
    question: "Build 60 with blocks: 6 × 10, or 2 × 30, or 3 × 20. However you split it, you always land on the same prime atoms: 2 × 2 × 3 × 5. Every number has ONE unique prime fingerprint.",
    type: "paradox",
  },
  intuitionBlocks: [
    {
      widget: "tree-diagram-builder",
      props: { variant: "factor", target: 60 },
      narrative: "Tap to build a factor tree for 60. Try splitting 60 = 6 × 10, then split each again. Keep going until every branch ends in a prime — you'll always collect 2, 2, 3, 5.",
    },
  ],
  formalBlocks: [
    {
      definition: "Prime factorization writes a number as a product of primes. The Fundamental Theorem of Arithmetic says this is UNIQUE — the same primes appear no matter how you build the tree. Write primes in order with powers: $60 = 2^2 \\times 3 \\times 5$.",
      examples: [
        "48: 48 = 2 × 24 = 2 × 2 × 12 = 2 × 2 × 2 × 6 = 2³ × 2 × 3 → $48 = 2^4 \\times 3$.",
        "90: 90 = 9 × 10 = 3×3 × 2×5 → $90 = 2 \\times 3^2 \\times 5$.",
      ],
      pitfall: "Keep splitting until every branch is a PRIME. Stopping at 6 (in 60) is not finished — 6 = 2 × 3 still has a composite branch.", altExplanations: ["FOOD: every number is a recipe made only from prime ingredients. 60 is always 2×2×3×5, whether you prep the 12 first (2×2×3 then ×5) or the 30 first (2×3×5 then ×2). The recipe card lists the same primes — the fundamental theorem says the kitchen never changes the ingredients.", "MONEY: think of prime factorization as the unique coin combination for a value, using only prime-denomination coins. 60 coins always sort into 2, 2, 3, 5 — swap coins in hand order but the multiset is fixed. Two people cashing the same amount end with identical prime piles."],
    },
  ],
  gutChecks: [
    { prompt: "Factor 12 completely: what primes multiply to 12?", answer: "2 × 2 × 3 (12 = 2² × 3)." },
  ],
  quiz: {
    pool: [
      {
        id: "U3L2-mcq-1", type: "mcq", category: "procedural",
        prompt: "Which is the prime factorization of 30?",
        options: [{ id: "a", text: "2 × 3 × 5" }, { id: "b", text: "5 × 6" }, { id: "c", text: "2 × 15" }, { id: "d", text: "3 × 10" }],
        correctOptionId: "a",
        diagnoses: { b: "6 isn't a prime — keep splitting it.", c: "15 isn't prime.", d: "10 isn't prime." },
        explanation: "30 = 2 × 3 × 5 — all primes.",
        hints: ["Split 30 into 3 × 10.", "Then split 10.", "30 = 2 × 3 × 5 — all primes."],
      },
      {
        id: "U3L2-mcq-2", type: "mcq", category: "conceptual",
        prompt: "Which factorization means the SAME number as 2 × 3 × 7?",
        options: [{ id: "a", text: "27" }, { id: "b", text: "42" }, { id: "c", text: "62" }, { id: "d", text: "21" }],
        correctOptionId: "b",
        diagnoses: { a: "27 = 3³.", c: "62 = 2 × 31.", d: "21 = 3 × 7 (missing the 2)." },
        explanation: "2 × 3 × 7 = 42.",
        hints: ["Multiply 2 × 3 first.", "6 × 7.", "2 × 3 × 7 = 42."],
      },
      {
        id: "U3L2-mcq-3", type: "mcq", category: "procedural",
        prompt: "Write 18 as a product of primes.",
        options: [{ id: "a", text: "3 × 6" }, { id: "b", text: "2 × 9" }, { id: "c", text: "2 × 3²" }, { id: "d", text: "9 × 2" }],
        correctOptionId: "c",
        diagnoses: { b: "9 isn't prime.", a: "6 isn't prime.", d: "9 isn't prime." },
        explanation: "18 = 2 × 9 = 2 × 3 × 3 = 2 × 3².",
        hints: ["Split 18 = 2 × 9.", "Split 9.", "18 = 2 × 9 = 2 × 3 × 3 = 2 × 3²."],
      },
      {
        id: "U3L2-mcq-4", type: "mcq", category: "conceptual",
        prompt: "Why is 2 × 2 × 3 the ONLY prime factorization of 12?",
        options: [
          { id: "a", text: "It isn't unique" },
          { id: "b", text: "Because 12 is small" },
          { id: "c", text: "There are other factorizations like 2×6" },
          { id: "d", text: "Because the primes are unique for every number" },
        ],
        correctOptionId: "d",
        diagnoses: { b: "Size doesn't matter — uniqueness holds for all numbers.", c: "2×6 is not prime factorization (6 isn't prime).", a: "Wait until you find a counterexample — you won't." },
        explanation: "The Fundamental Theorem guarantees one prime fingerprint per number.",
        hints: ["Split 12 any way → same primes.", "Prime factorization is a fingerprint.", "The Fundamental Theorem guarantees one prime fingerprint per number."],
      },
      {
        id: "U3L2-mcq-5", type: "mcq", category: "word",
        prompt: "A locker code is the prime factorization of 72 written with exponents. What is it?",
        options: [{ id: "a", text: "2³ × 3²" }, { id: "b", text: "2² × 3³" }, { id: "c", text: "2 × 3⁴" }, { id: "d", text: "2⁴ × 3" }],
        correctOptionId: "a",
        diagnoses: { b: "2²×3³ = 4×27 = 108, not 72.", c: "2×3⁴ = 2×81 = 162.", d: "2⁴×3 = 48." },
        explanation: "72 = 8 × 9 = 2³ × 3².",
        hints: ["72 = 8 × 9.", "8 = 2³, 9 = 3².", "72 = 8 × 9 = 2³ × 3²."],
      },
      {
        id: "U3L2-mcq-6", type: "mcq", category: "conceptual",
        prompt: "The prime factorization of a number is 2 × 5². The number is...",
        options: [{ id: "a", text: "25" }, { id: "b", text: "50" }, { id: "c", text: "20" }, { id: "d", text: "100" }],
        correctOptionId: "b",
        diagnoses: { a: "25 = 5² alone, missing ×2.", c: "20 = 2² × 5.", d: "100 = 2² × 5²." },
        explanation: "2 × 25 = 50.",
        hints: ["5² = 25.", "2 × 25.", "2 × 25 = 50."],
      },
      {
        id: "U3L2-num-1", type: "numeric-input", category: "procedural",
        prompt: "Complete: 2 × 3 × 5 = ?", answer: 30, tolerance: 0,
        explanation: "2 × 3 = 6, 6 × 5 = 30.",
        hints: ["2 × 3 first.", "6 × 5.", "2 × 3 = 6, 6 × 5 = 30."],
      },
      {
        id: "U3L2-num-2", type: "numeric-input", category: "procedural",
        prompt: "Type the missing prime: 2 × ___ × 7 = 42.", answer: 3, tolerance: 0,
        explanation: "42 ÷ 14 = 3, so 2 × 3 × 7.",
        hints: ["42 ÷ 2 = 21.", "21 ÷ 7 = 3.", "42 ÷ 14 = 3, so 2 × 3 × 7."],
      },
      {
        id: "U3L2-num-3", type: "numeric-input", category: "conceptual",
        prompt: "How many times does 2 appear in the prime factorization of 32? (Type the exponent.)", answer: 5, tolerance: 0,
        explanation: "32 = 2⁵.",
        hints: ["Keep halving 32.", "32 → 16 → 8 → 4 → 2 → 1.", "32 = 2⁵."],
      },
      {
        id: "U3L2-num-4", type: "numeric-input", category: "word",
        prompt: "A chocolate bar has 36 squares. Split it as 6×6. Fully factorize 36 into primes: type the exponent of 2 plus the exponent of 3 (e.g. for 2²×3¹ type 21).", answer: 22, tolerance: 0,
        explanation: "36 = 6×6 = 2·3 × 2·3 = 2²×3² → exponent sum 2 and 2 → 22.",
        hints: ["36 = 6 × 6.", "Each 6 = 2 × 3.", "36 = 6×6 = 2·3 × 2·3 = 2²×3² → exponent sum 2 and 2 → 22."],
      },
      {
        id: "U3L2-frac-1", type: "fraction-input", category: "conceptual",
        prompt: "The prime factors of 100 are 2 and 5. Write the fraction of 100 that is 2² × 5² (simplified: 2²×5² over 100).",
        numerator: 1, denominator: 1, acceptEquivalent: true,
        explanation: "2²×5² = 100, so 100/100 = 1/1.",
        hints: ["2² = 4, 5² = 25.", "4 × 25.", "2²×5² = 100, so 100/100 = 1/1."],
      },
      {
        id: "U3L2-tf-1", type: "true-false-justify", category: "conceptual",
        prompt: "6 × 10 and 2 × 3 × 2 × 5 are two different prime factorizations of 60.",
        isTrue: false,
        explanation: "6×10 isn't prime factorization (6 and 10 aren't prime). The only prime one is 2²×3×5.",
        hints: ["Prime factorization needs primes.", "6 and 10 aren't prime.", "6×10 isn't prime factorization (6 and 10 aren't prime)."],
      },
      {
        id: "U3L2-tf-2", type: "true-false-justify", category: "conceptual",
        prompt: "The prime factorization of 24 is 2³ × 3.",
        isTrue: true,
        explanation: "24 = 8 × 3 = 2³ × 3.",
        hints: ["24 = 8 × 3.", "8 = 2³.", "24 = 8 × 3 = 2³ × 3."],
      },
      {
        id: "U3L2-order-1", type: "order-steps", category: "word",
        prompt: "Order the steps to fully factorize 60.",
        sequence: ["Write 60 = 6 × 10", "Split 6 = 2 × 3", "Split 10 = 2 × 5", "Collect primes: 2 × 2 × 3 × 5"],
        diagnoses: {
          "Split 6 = 2 × 3@0": "Start with the top-level split.",
          "Collect primes: 2 × 2 × 3 × 5@0": "Collecting comes last.",
          "Split 10 = 2 × 5@0": "Split 6 before or alongside 10.",
        },
        explanation: "Split until every leaf is prime, then collect.",
        hints: ["Top-level split.", "Split each composite.", "Collect the primes."],
      },
      {
        id: "U3L2-drag-1", type: "drag-match", category: "conceptual",
        prompt: "Match each number to its prime fingerprint.",
        pairs: [
          { source: "12", target: "2² × 3" },
          { source: "30", target: "2 × 3 × 5" },
          { source: "28", target: "2² × 7" },
        ],
        diagnoses: {
          "12->2 × 3 × 5": "12 = 2²×3, no 5.",
          "30->2² × 3": "30 = 2×3×5, not 2².",
          "28->2 × 3 × 5": "28 = 2²×7.",
        },
        explanation: "Each fingerprint is unique.",
        hints: ["12 = 4×3.", "30 = 2×15.", "Each fingerprint is unique."],
      },
      {
        id: "U3L2-graph-1", type: "graph-interact", category: "word",
        prompt: "Slider 'value': set it to 2² × 3.",
        challenge: "Slider 'value': — adjust the values below to match the condition.",
        validate: { value: 12 }, tolerance: 0,
        explanation: "2² × 3 = 12.",
        hints: ["2² = 4.", "4 × 3.", "2² × 3 = 12."],
      },
    ],
    selection: { procedural: 2, conceptual: 2, word: 1 },
    passThreshold: 0.8,
  },
  commonMistakes: [
    {
      wrongPattern: "stops at a composite branch",
      diagnosis: "6 isn't prime. Keep splitting until EVERY leaf is prime.",
      hint: "Ask each leaf: 'can I split this further?'",
    },
    {
      wrongPattern: "uses 1 in the factorization",
      diagnosis: "1 isn't a prime and multiplying by it doesn't change anything — leave it out.",
      hint: "Primes start at 2.",
    },
    {
      wrongPattern: "thinks order matters",
      diagnosis: "2 × 3 × 5 is the same fingerprint as 5 × 3 × 2. Order doesn't matter — the SET of primes does.",
      hint: "Re-sort multiplication any way; same atoms.",
    },
  ],
  recallTags: ["prime-factorization", "factor-trees", "uniqueness"],
  discovery: {
    challenges: [
      {
        instruction: "Build a tree for 60 starting with 6 × 10, then split until all leaves are prime.",
        observe: "You collect 2, 2, 3, 5 — a full fingerprint.",
      },
      {
        instruction: "Now build 60 a DIFFERENT way, like 3 × 20. Compare the leaves you collect.",
        observe: "Same primes every time — 2, 2, 3, 5. The fingerprint never changes.",
      },
    ],
    predict: {
      prompt: "Before you build the second tree: will the set of prime leaves change?",
      options: [
        { id: "a", text: "No — same primes" },
        { id: "b", text: "Yes — different primes" },
        { id: "c", text: "Sometimes" },
      ],
      reveal: "No — every route to 60 delivers exactly the atoms 2, 2, 3, 5. That's the fingerprint.",
    },
    sayItYourWay: {
      prompt: "What is a prime factorization like?",
      phrasings: [
        { id: "a", text: "A unique fingerprint of prime building blocks", correct: true, why: "One number, one set of primes — unique." },
        { id: "b", text: "One of many possible answers", correct: false, why: "The factorization of primes is unique, even if factor trees differ." },
        { id: "c", text: "The biggest way to write the number", correct: false, why: "It's about primes, not size." },
      ],
      formalName: "prime factorization (Fundamental Theorem of Arithmetic)",
    },
    stretch: "If 60's fingerprint is 2²×3×5, what fingerprint would a number with the atoms 2×2×2×3 have? Build it.",
  },
};