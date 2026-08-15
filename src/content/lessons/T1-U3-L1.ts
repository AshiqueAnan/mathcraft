import type { Lesson } from "../schema";

export const T1U3L1: Lesson = {
  id: "T1-U3-L1",
  tier: 1,
  unit: "Primes & factorization",
  title: "The Atoms of Numbers",
  prerequisites: ["T1-U2-L3"],
  estimatedMinutes: 10,
  hook: {
    question: "Every whole number is built from smaller ones — except a few stubborn ones that refuse to split. A number that only divides by 1 and itself is like an atom: the building block you can't cut further.",
    type: "puzzle",
  },
  intuitionBlocks: [
    {
      widget: "venn-diagram",
      narrative: "Tap A for 'even numbers', B for 'multiples of 3'. The overlap is multiples of 6. Now try: which numbers are in NEITHER circle below 10? 5 and 7 — they sit outside every natural grid — those are the atoms.",
    },
  ],
  formalBlocks: [
    {
      definition: "A prime number is a whole number greater than 1 whose only positive divisors are 1 and itself. A composite number has more divisors. 1 is neither prime nor composite.",
      examples: [
        "7 is prime: only 1 × 7 = 7. 8 is composite: 1 × 8, 2 × 4.",
        "The primes below 20: 2, 3, 5, 7, 11, 13, 17, 19. Note 2 is the only even prime.",
      ],
      pitfall: "1 is NOT prime. And 2 is prime — it only divides by 1 and 2. Do not let evenness fool you.", altExplanations: ["GAME: prime numbers are like indivisible lego bricks — a prime brick cannot be snapped into two equal-faced smaller bricks. 7 is one solid brick; 8 is two 4-bricks. 1 is the 'no-brick' case, so it is excluded from the game.", "FOOD: a prime number is a tray with no fair split: 7 biscuits cannot be shared equally between 2 or 3 or 4 people — only 1 person or 7 people take a whole tray. A composite like 12 can be split evenly in many ways. And 1 is a single biscuit with no sharing story at all."],
    },
  ],
  gutChecks: [
    { prompt: "Is 15 prime or composite?", answer: "Composite — 3 × 5 = 15." },
  ],
  quiz: {
    pool: [
      {
        id: "U3L1-mcq-1", type: "mcq", category: "procedural",
        prompt: "Which number is prime?",
        options: [{ id: "a", text: "13" }, { id: "b", text: "15" }, { id: "c", text: "21" }, { id: "d", text: "27" }],
        correctOptionId: "a",
        diagnoses: { b: "15 = 3 × 5.", c: "21 = 3 × 7.", d: "27 = 3 × 9." },
        explanation: "13 only divides by 1 and 13.",
        hints: ["Try dividing by small primes.", "13 has no divisors but 1 and 13.", "13."],
      },
      {
        id: "U3L1-mcq-2", type: "mcq", category: "conceptual",
        prompt: "Which is the only even prime?",
        options: [{ id: "a", text: "2" }, { id: "b", text: "4" }, { id: "c", text: "6" }, { id: "d", text: "8" }],
        correctOptionId: "a",
        diagnoses: { b: "4 = 2×2.", c: "6 = 2×3.", d: "8 = 2×4." },
        explanation: "Every other even number divides by 2, so 2 alone is the even prime.",
        hints: ["Even numbers divide by 2.", "Only one has no other divisor.", "2."],
      },
      {
        id: "U3L1-mcq-3", type: "mcq", category: "procedural",
        prompt: "Is 1 a prime number?",
        options: [{ id: "a", text: "No" }, { id: "b", text: "Yes" }, { id: "c", text: "Sometimes" }, { id: "d", text: "Only when odd" }],
        correctOptionId: "a",
        diagnoses: { b: "1 has only one divisor, not two distinct ones.", c: "Definition is fixed.", d: "No special odd rule." },
        explanation: "Primes need exactly two divisors. 1 has only one divisor (itself).",
        hints: ["Count 1's divisors.", "Primes need exactly two.", "No."],
      },
      {
        id: "U3L1-mcq-4", type: "mcq", category: "conceptual",
        prompt: "A number that has more than two divisors is called...",
        options: [{ id: "a", text: "Composite" }, { id: "b", text: "Prime" }, { id: "c", text: "Odd" }, { id: "d", text: "Atom" }],
        correctOptionId: "a",
        diagnoses: { b: "Prime means exactly two divisors.", c: "Odd says nothing about divisors.", d: "Atoms are the primes." },
        explanation: "Composite numbers have more than two divisors.",
        hints: ["Prime = exactly 2 divisors.", "The opposite is composite.", "Composite."],
      },
      {
        id: "U3L1-mcq-5", type: "mcq", category: "word",
        prompt: "A baker makes trays of 11 cupcakes (prime) and trays of 9 (composite). Which statement is true?",
        options: [{ id: "a", text: "11 can't split into equal smaller trays; 9 can" }, { id: "b", text: "9 can't split; 11 can" }, { id: "c", text: "Both split equally" }, { id: "d", text: "Neither can split" }],
        correctOptionId: "a",
        diagnoses: { b: "9 = 3×3, so it splits into 3s.", c: "11 doesn't split into equal smaller groups.", d: "9 splits into 3 × 3." },
        explanation: "Prime 11 resists splitting; composite 9 = 3 × 3.",
        hints: ["List ways to split each.", "11 only 1×11.", "9 = 3×3."],
      },
      {
        id: "U3L1-mcq-6", type: "mcq", category: "procedural",
        prompt: "Which of these is composite?",
        options: [{ id: "a", text: "49" }, { id: "b", text: "17" }, { id: "c", text: "19" }, { id: "d", text: "23" }],
        correctOptionId: "a",
        diagnoses: { b: "17 is prime.", c: "19 is prime.", d: "23 is prime." },
        explanation: "49 = 7 × 7; the rest are prime.",
        hints: ["Check 7 × 7.", "49 = 49?", "49 = 7²."],
      },
      {
        id: "U3L1-num-1", type: "numeric-input", category: "procedural",
        prompt: "Count the primes between 10 and 20 (inclusive).", answer: 4, tolerance: 0,
        explanation: "11, 13, 17, 19 → 4 primes.",
        hints: ["List 10–20.", "11, 13, 17, 19.", "4."],
      },
      {
        id: "U3L1-num-2", type: "numeric-input", category: "procedural",
        prompt: "What is the smallest prime number? Type it.", answer: 2, tolerance: 0,
        explanation: "2 is the smallest prime (and only even prime).",
        hints: ["Start at 2.", "2 only divides by 1 and 2.", "2."],
      },
      {
        id: "U3L1-num-3", type: "numeric-input", category: "conceptual",
        prompt: "How many divisors does a prime number have (counting 1 and itself)?", answer: 2, tolerance: 0,
        explanation: "Prime has exactly 2 divisors.",
        hints: ["1 and itself.", "Just two.", "2."],
      },
      {
        id: "U3L1-num-4", type: "numeric-input", category: "word",
        prompt: "You can pack an even number of tiles into 2 equal rows. How many primes below 12 CAN'T be packed evenly at all? (They're the 'atoms'.)", answer: 5, tolerance: 0,
        explanation: "Primes below 12: 2, 3, 5, 7, 11 → 5.",
        hints: ["List primes below 12.", "2, 3, 5, 7, 11.", "5."],
      },
      {
        id: "U3L1-frac-1", type: "fraction-input", category: "conceptual",
        prompt: "Out of the numbers 2 to 10, write the fraction that are prime (simplified).",
        numerator: 4, denominator: 9, acceptEquivalent: true,
        explanation: "2–10 = 9 numbers; primes 2, 3, 5, 7 = 4; so 4/9.",
        hints: ["List 2 to 10.", "Primes: 2, 3, 5, 7.", "4/9."],
      },
      {
        id: "U3L1-tf-1", type: "true-false-justify", category: "conceptual",
        prompt: "All prime numbers are odd.",
        isTrue: false,
        explanation: "2 is prime and even.",
        hints: ["Check the smallest prime.", "2 is even.", "False."],
      },
      {
        id: "U3L1-tf-2", type: "true-false-justify", category: "conceptual",
        prompt: "9 is composite because 9 = 3 × 3.",
        isTrue: true,
        explanation: "9 has divisors beyond 1 and 9, so composite.",
        hints: ["9 = 3 × 3.", "More than two divisors.", "True."],
      },
      {
        id: "U3L1-order-1", type: "order-steps", category: "word",
        prompt: "Order the steps to test if 29 is prime.",
        sequence: ["Try dividing by 2", "Try 3", "Try 5, check up to √29", "Found no divisors — 29 is prime"],
        diagnoses: {
          "Try dividing by 2@0": "Start with the smallest prime.",
          "Try 5, check up to √29@0": "Check small primes first.",
          "Found no divisors — 29 is prime@0": "Only after checking all small divisors.",
        },
        explanation: "Test primes up to √29 ≈ 5.4: 2, 3, 5 — none divide 29.",
        hints: ["Smallest prime first.", "Then 3, then 5.", "No divisors → prime."],
      },
      {
        id: "U3L1-drag-1", type: "drag-match", category: "conceptual",
        prompt: "Match each number to prime or composite.",
        pairs: [
          { source: "11", target: "prime" },
          { source: "12", target: "composite" },
          { source: "23", target: "prime" },
        ],
        diagnoses: {
          "11->composite": "11 only divides by 1 and 11.",
          "12->prime": "12 = 2×6 = 3×4 — composite.",
          "23->composite": "23 only divides by 1 and 23.",
        },
        explanation: "11 and 23 are prime; 12 is composite.",
        hints: ["11: only 1×11.", "12: many factors.", "23: only 1×23."],
      },
      {
        id: "U3L1-graph-1", type: "graph-interact", category: "word",
        prompt: "Slider 'value': set it to the smallest prime.",
        challenge: "Set value to 2.",
        validate: { value: 2 }, tolerance: 0,
        explanation: "2 is the smallest prime.",
        hints: ["Smallest prime.", "Only even prime.", "2."],
      },
    ],
    selection: { procedural: 2, conceptual: 2, word: 1 },
    passThreshold: 0.8,
  },
  commonMistakes: [
    {
      wrongPattern: "calls 1 a prime",
      diagnosis: "1 has only one divisor (itself). Primes need exactly two.",
      hint: "Primes = exactly two divisors. Count 1's.",
    },
    {
      wrongPattern: "thinks evens can't be prime",
      diagnosis: "2 is prime (and even). Only 2 — every other even divides by 2.",
      hint: "Check 2 specially.",
    },
    {
      wrongPattern: "forgets to check up to the square root",
      diagnosis: "You only need to test prime divisors up to √n. If none divide, it's prime.",
      hint: "e.g. for 29 test 2, 3, 5 only.",
    },
  ],
  recallTags: ["primes", "factors", "divisibility"],
  discovery: {
    challenges: [
      {
        instruction: "Shade multiples of 2, then 3, then 5 in the Venn diagram. What numbers remain unshaded below 10?",
        observe: "5 and 7 stay outside every natural grid — they resist all division.",
      },
      {
        instruction: "Now check 11 and 13: do they belong to any small-prime circle?",
        observe: "They keep escaping — the atoms never fit the grids.",
      },
    ],
    predict: {
      prompt: "Before we check: how many primes are there below 100 — about 10, 25, or 50?",
      options: [
        { id: "a", text: "About 25" },
        { id: "b", text: "About 10" },
        { id: "c", text: "About 50" },
      ],
      reveal: "About 25 — primes get rarer but never run out.",
    },
    sayItYourWay: {
      prompt: "What makes a number an 'atom'?",
      phrasings: [
        { id: "a", text: "It can't be split into equal smaller parts", correct: true, why: "Only 1 and itself divide it — it resists splitting." },
        { id: "b", text: "It's the biggest number", correct: false, why: "Size doesn't matter; 2 is the smallest prime." },
        { id: "c", text: "It's odd", correct: false, why: "2 is prime and even — oddness isn't it." },
      ],
      formalName: "prime number",
    },
    stretch: "If primes are atoms, can two different atoms ever build the same number? Try 2×3 and 6 — think about what that means.",
  },
};