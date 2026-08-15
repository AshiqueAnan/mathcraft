import type { Lesson } from "../schema";

export const T1U3L4: Lesson = {
  id: "T1-U3-L4",
  tier: 1,
  unit: "Primes & factorization",
  title: "LCM: When Do the Cycles Meet?",
  prerequisites: ["T1-U2-L3","T1-U3-L2","T1-U3-L3"],
  estimatedMinutes: 10,
  hook: {
    question: "The red lighthouse blinks every 4 seconds. The blue one every 6 seconds. Right now they blink together. How long before they blink together AGAIN? This is a meeting-time problem.",
    type: "real-world",
  },
  intuitionBlocks: [
    {
      widget: "number-line",
      narrative: "Put markers at 4, 8, 12, 16… then at 6, 12, 18…. Watch the first marker they share: 12. That's the smallest common meeting point — the LCM.",
    },
  ],
  formalBlocks: [
    {
      definition: "The Lowest Common Multiple (LCM) is the smallest number that is a multiple of two or more numbers. Using prime fingerprints: take every prime with its HIGHEST exponent.",
      examples: [
        "12 = 2² × 3, 18 = 2 × 3². Take the highest powers: 2² × 3² = 36. LCM(12, 18) = 36.",
        "LCM(4, 6): 4 = 2², 6 = 2 × 3. Highest powers: 2² × 3 = 12.",
      ],
      pitfall: "LCM uses the BIGGEST exponent (unlike HCF's smallest). 4 and 6 share 2¹ but LCM takes 2² because 4 needs it.", altExplanations: ["GAME: two blinking lights — one every 4 seconds, one every 6 seconds. Both flash together at 12 seconds: 12 is a multiple of both, and nothing smaller works. LCM is the first time both patterns realign.", "TRAVEL: two buses leave the depot — one every 12 minutes, one every 18 minutes. They meet at the stop together every 36 minutes: the LCM of 12 and 18. Bus schedules realign exactly when both cycles complete."],
    },
  ],
  gutChecks: [
    { prompt: "What is the LCM of 3 and 4?", answer: "12 — multiples of 3: 3,6,9,12…; of 4: 4,8,12…" },
  ],
  quiz: {
    pool: [
      {
        id: "U3L4-mcq-1", type: "mcq", category: "procedural",
        prompt: "What is the LCM of 4 and 6?",
        options: [{ id: "a", text: "12" }, { id: "b", text: "2" }, { id: "c", text: "24" }, { id: "d", text: "6" }],
        correctOptionId: "a",
        diagnoses: { b: "2 is the HCF, not the LCM.", c: "24 is a common multiple but not the LOWEST.", d: "6 isn't a multiple of 4." },
        explanation: "Multiples of 4: 4, 8, 12. Of 6: 6, 12. First shared: 12.",
        hints: ["List multiples of 4.", "List multiples of 6.", "First match: 12."],
      },
      {
        id: "U3L4-mcq-2", type: "mcq", category: "conceptual",
        prompt: "To find the LCM from prime fingerprints, you take...",
        options: [{ id: "a", text: "Every prime with its highest exponent" }, { id: "b", text: "Only the shared primes with lowest exponent" }, { id: "c", text: "The biggest number" }, { id: "d", text: "The smallest prime" }],
        correctOptionId: "a",
        diagnoses: { b: "Lowest exponent is the HCF rule.", c: "The numbers may be bigger than one input.", d: "Just one prime misses the others." },
        explanation: "LCM needs every prime present, at full strength (highest exponent).",
        hints: ["What does 12 need that 18 lacks?", "2² and 3².", "Both at max exponent."],
      },
      {
        id: "U3L4-mcq-3", type: "mcq", category: "word",
        prompt: "Bus A comes every 8 minutes, bus B every 12 minutes. They leave together at 9:00. When is the next time they leave together?",
        options: [{ id: "a", text: "9:24" }, { id: "b", text: "9:20" }, { id: "c", text: "9:16" }, { id: "d", text: "9:48" }],
        correctOptionId: "a",
        diagnoses: { b: "20 isn't a multiple of 12.", c: "16 isn't a multiple of 12.", d: "48 is a common multiple but not the first after 9:00." },
        explanation: "LCM(8, 12) = 24 min → 9:24.",
        hints: ["Multiples of 8: 8, 16, 24.", "Multiples of 12: 12, 24.", "24 minutes later."],
      },
      {
        id: "U3L4-mcq-4", type: "mcq", category: "conceptual",
        prompt: "LCM(6, 8) = ?",
        options: [{ id: "a", text: "24" }, { id: "b", text: "2" }, { id: "c", text: "48" }, { id: "d", text: "14" }],
        correctOptionId: "a",
        diagnoses: { b: "HCF is 2.", c: "48 is a common multiple but twice too big.", d: "14 is just 6 + 8." },
        explanation: "6 = 2×3, 8 = 2³. Highest: 2³×3 = 24.",
        hints: ["6 = 2·3.", "8 = 2³.", "2³ × 3 = 24."],
      },
      {
        id: "U3L4-mcq-5", type: "mcq", category: "procedural",
        prompt: "LCM(5, 7) = ?",
        options: [{ id: "a", text: "35" }, { id: "b", text: "12" }, { id: "c", text: "5" }, { id: "d", text: "7" }],
        correctOptionId: "a",
        diagnoses: { b: "12 is 5 + 7.", c: "5 isn't divisible by 7.", d: "7 isn't divisible by 5." },
        explanation: "5 and 7 are prime and distinct → nothing shared → LCM = 5 × 7 = 35.",
        hints: ["Both prime.", "No shared factors.", "Multiply: 35."],
      },
      {
        id: "U3L4-mcq-6", type: "mcq", category: "word",
        prompt: "Choir sings every 3 days, band every 5 days. They practice together today. Next joint practice?",
        options: [{ id: "a", text: "In 15 days" }, { id: "b", text: "In 8 days" }, { id: "c", text: "In 5 days" }, { id: "d", text: "In 3 days" }],
        correctOptionId: "a",
        diagnoses: { b: "8 is 3 + 5, not a common multiple.", c: "5 isn't a multiple of 3.", d: "3 isn't a multiple of 5." },
        explanation: "LCM(3, 5) = 15 days.",
        hints: ["Multiples of 3 & 5.", "First match.", "15."],
      },
      {
        id: "U3L4-num-1", type: "numeric-input", category: "procedural",
        prompt: "Type LCM(3, 4).", answer: 12, tolerance: 0,
        explanation: "Multiples: 3,6,9,12; 4,8,12. First shared: 12.",
        hints: ["List 3s.", "List 4s.", "First match: 12."],
      },
      {
        id: "U3L4-num-2", type: "numeric-input", category: "procedural",
        prompt: "Type LCM(6, 9).", answer: 18, tolerance: 0,
        explanation: "6 = 2×3, 9 = 3². Highest: 2×3² = 18.",
        hints: ["6 = 2·3.", "9 = 3².", "2 × 9."],
      },
      {
        id: "U3L4-num-3", type: "numeric-input", category: "conceptual",
        prompt: "Two wheels have 6 and 10 teeth. Smallest number of teeth that aligns both starting marks again?", answer: 30, tolerance: 0,
        explanation: "LCM(6, 10) = 2×3×5 = 30.",
        hints: ["6 = 2·3.", "10 = 2·5.", "Highest: 2·3·5 = 30."],
      },
      {
        id: "U3L4-num-4", type: "numeric-input", category: "word",
        prompt: "One bell rings every 4 min, another every 7 min. They ring together at noon — how many minutes until they ring together again?", answer: 28, tolerance: 0, unit: "min",
        explanation: "LCM(4, 7) = 28 (4 and 7 share nothing).",
        hints: ["LCM(4, 7).", "No shared factors.", "4 × 7 = 28."],
      },
      {
        id: "U3L4-frac-1", type: "fraction-input", category: "conceptual",
        prompt: "LCM(4, 6) = 12. Write 12 as a fraction of the product 4 × 6 = 24 (simplified).",
        numerator: 1, denominator: 2, acceptEquivalent: true,
        explanation: "12/24 = 1/2.",
        hints: ["12 out of 24.", "Simplify.", "1/2."],
      },
      {
        id: "U3L4-tf-1", type: "true-false-justify", category: "conceptual",
        prompt: "The LCM of two numbers is always a multiple of the HCF.",
        isTrue: true,
        explanation: "LCM/HCF relation: LCM = (a × b) / HCF, a whole number.",
        hints: ["Try 12 and 18.", "HCF 6, LCM 36.", "36 is a multiple of 6."],
      },
      {
        id: "U3L4-tf-2", type: "true-false-justify", category: "conceptual",
        prompt: "LCM(4, 6) = 24.",
        isTrue: false,
        explanation: "24 is a common multiple, but 12 is smaller — so LCM = 12.",
        hints: ["Check 12 and 18 as multiples of both.", "12 < 24 and works.", "False."],
      },
      {
        id: "U3L4-order-1", type: "order-steps", category: "word",
        prompt: "Order the steps to find LCM(6, 8).",
        sequence: ["Factor: 6 = 2×3, 8 = 2³", "Take each prime with highest exponent", "2³ × 3", "LCM = 24"],
        diagnoses: {
          "Take each prime with highest exponent@0": "Factor first.",
          "LCM = 24@0": "24 is the final answer.",
          "2³ × 3@0": "Write the product before evaluating.",
        },
        explanation: "Highest powers 2³ and 3 give 24.",
        hints: ["Factor 6 and 8.", "Max exponents.", "8 × 3 = 24."],
      },
      {
        id: "U3L4-drag-1", type: "drag-match", category: "conceptual",
        prompt: "Match each pair to its LCM.",
        pairs: [
          { source: "LCM(4, 6)", target: "12" },
          { source: "LCM(3, 5)", target: "15" },
          { source: "LCM(8, 12)", target: "24" },
        ],
        diagnoses: {
          "LCM(4, 6)->24": "12 is smaller and still common.",
          "LCM(3, 5)->15": "15 is the product / LCM (they're prime).",
          "LCM(8, 12)->12": "8 doesn't divide 12; LCM is 24.",
        },
        explanation: "12, 15, 24 respectively.",
        hints: ["4×6/2.", "3×5.", "8×12/4."],
      },
      {
        id: "U3L4-graph-1", type: "graph-interact", category: "word",
        prompt: "Slider 'value': set it to LCM(4, 6).",
        challenge: "Set value to 12.",
        validate: { value: 12 }, tolerance: 0,
        explanation: "LCM(4, 6) = 12.",
        hints: ["First shared multiple of 4 and 6.", "Multiples: 4,8,12 and 6,12.", "12."],
      },
    ],
    selection: { procedural: 2, conceptual: 2, word: 1 },
    passThreshold: 0.8,
  },
  commonMistakes: [
    {
      wrongPattern: "confuses LCM with HCF",
      diagnosis: "LCM(4,6) = 12, not 2. LCM is the smallest MEETING, HCF the biggest SHARED factor.",
      hint: "Ask: 'meeting time' (LCM) or 'biggest equal split' (HCF)?",
    },
    {
      wrongPattern: "uses lowest exponent for LCM",
      diagnosis: "LCM takes the HIGHEST exponent of each prime; HCF takes the lowest.",
      hint: "For 4=2² and 6=2·3, LCM needs 2² (4's full power) + 3.",
    },
    {
      wrongPattern: "stops at any common multiple",
      diagnosis: "24 is common for 4 and 6 but 12 is smaller — always hunt for the FIRST overlap.",
      hint: "List multiples in order until you meet.",
    },
  ],
  recallTags: ["lcm", "multiples", "cycles"],
  discovery: {
    challenges: [
      {
        instruction: "Mark the 4-times table on the line: 4, 8, 12, 16, 20… then add the 6-times table on top.",
        observe: "The first marker they share is 12 — the meeting point.",
      },
      {
        instruction: "Now add a third cycle: 8s. Does 12 get marked? What's the first triple meeting?",
        observe: "12 isn't a multiple of 8; the triple meeting is at 24 (LCM of 4, 6, 8).",
      },
    ],
    predict: {
      prompt: "Before you plot: will 4s and 6s meet at 12, 18, or 24 first?",
      options: [
        { id: "a", text: "12" },
        { id: "b", text: "18" },
        { id: "c", text: "24" },
      ],
      reveal: "12 — the first number on both the 4 and 6 times tables.",
    },
    sayItYourWay: {
      prompt: "What does the LCM answer in real life?",
      phrasings: [
        { id: "a", text: "When two cycles first synchronize", correct: true, why: "Bus schedules, blinks, gears, bells — all are meeting-time questions." },
        { id: "b", text: "The most a pair can share as a factor", correct: false, why: "That's HCF, a splitting question." },
        { id: "c", text: "The average of the two numbers", correct: false, why: "Averages don't sync cycles." },
      ],
      formalName: "Lowest Common Multiple (LCM)",
    },
    stretch: "If LCM(6, 9) = 18 and HCF(6, 9) = 3, what is 18 × 3? Compare to 6 × 9 — the trick survives.",
  },
};