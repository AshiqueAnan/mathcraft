import type { Lesson } from "../schema";

export const T1U2L1: Lesson = {
  id: "T1-U2-L1",
  tier: 1,
  unit: "Arithmetic fluency",
  title: "Why Multiplication Goes First",
  prerequisites: ["T1-U1-L3"],
  estimatedMinutes: 10,
  hook: {
    question: "A bakery tray holds 4 rows of 6 buns. You add 5 loose buns. If you just read left to right you'd get a different answer than everyone else. Who decides the order?",
    type: "real-world",
  },
  intuitionBlocks: [
    {
      widget: "balance-scale",
      narrative: "Think of the tray as one block: 4 × 6 buns. Adding 5 to the tray's block is different from adding 5 before multiplying. Move the chips and watch the total change.",
    },
  ],
  formalBlocks: [
    {
      definition: "Order of operations: brackets first, then × and ÷ (left to right), then + and − (left to right). Multiplication 'glues' into a single block because × groups amounts before + joins them.",
      examples: [
        "$3 + 4 \\times 2 = 3 + 8 = 11$ — the 4×2 is one block of 8, then add 3.",
        "$(3 + 4) \\times 2 = 7 \\times 2 = 14$ — the bracket changes which block comes first.",
      ],
      pitfall: "Do not run left-to-right blindly: $2 + 3 \\times 4 = 14$ (not 20). Multiplication is done as its own block before the addition.", altExplanations: ["FOOD: a bakery packs 4 trays of 6 buns — the multiplication is one bundle of 24. Adding 3 loose buns joins AFTER the bundle, but repacking as 3 trays of (6 + 2) changes what is inside each bundle.", "GAME: 3 older stacks of 4 football cards form one block of 12. Dropping 2 loose cards beside it gives 14. Regrouping into 3 stacks of (4 + 2) makes 3 stacks of 6 = 18 — the grouping, not the order you read, decides the total."],
    },
  ],
  gutChecks: [
    { prompt: "What is 2 + 3 × 4?", answer: "14 — 3×4 = 12, then 2 + 12." },
  ],
  quiz: {
    pool: [
      {
        id: "U2L1-mcq-1", type: "mcq", category: "procedural",
        prompt: "3 + 4 × 2 = ?",
        options: [{ id: "a", text: "11" }, { id: "b", text: "14" }, { id: "c", text: "10" }, { id: "d", text: "24" }],
        correctOptionId: "a",
        diagnoses: { b: "That's (3+4)×2.", c: "4×2 = 8, not 7.", d: "You multiplied everything together." },
        explanation: "4 × 2 = 8, then 3 + 8 = 11.",
        hints: ["Multiply first.", "4 × 2 = ?", "3 + 8 = 11."],
      },
      {
        id: "U2L1-mcq-2", type: "mcq", category: "conceptual",
        prompt: "Why does 2 + 3 × 4 equal 14 and not 20?",
        options: [
          { id: "a", text: "× creates one block before + joins" },
          { id: "b", text: "Because + is always last" },
          { id: "c", text: "Because 3×4 is bigger than 2+3" },
          { id: "d", text: "It doesn't — it's 20" },
        ],
        correctOptionId: "a",
        diagnoses: { b: "+ isn't 'always last' — but × groups first here.", c: "Size isn't the reason.", d: "It is 14." },
        explanation: "Multiplication forms a single block (12), then addition joins it: 2 + 12 = 14.",
        hints: ["What groups first?", "× forms the block.", "Then add."],
      },
      {
        id: "U2L1-mcq-3", type: "mcq", category: "procedural",
        prompt: "(3 + 4) × 2 = ?",
        options: [{ id: "a", text: "14" }, { id: "b", text: "11" }, { id: "c", text: "10" }, { id: "d", text: "24" }],
        correctOptionId: "a",
        diagnoses: { b: "11 skips the ×2 after the bracket.", c: "That's 3 + 4×2.", d: "24 multiplies everything." },
        explanation: "Bracket first: 3 + 4 = 7, then 7 × 2 = 14.",
        hints: ["Brackets first.", "7 × 2.", "14."],
      },
      {
        id: "U2L1-mcq-4", type: "mcq", category: "word",
        prompt: "A tray has 4 rows of 6 buns; you add 5 loose buns. Total?",
        options: [{ id: "a", text: "29" }, { id: "b", text: "26" }, { id: "c", text: "54" }, { id: "d", text: "30" }],
        correctOptionId: "a",
        diagnoses: { b: "26 is 4 × 6 + 5 with a mistake: 4×6=24, +5=29.", c: "54 multiplies the 5 too.", d: "30 forgets the 5." },
        explanation: "4 × 6 + 5 = 24 + 5 = 29 (taking 4×6 as the block).",
        hints: ["Tray block = 4 × 6.", "24 + 5.", "29."],
      },
      {
        id: "U2L1-mcq-5", type: "mcq", category: "conceptual",
        prompt: "10 − 2 × 3 = ?",
        options: [{ id: "a", text: "4" }, { id: "b", text: "24" }, { id: "c", text: "0" }, { id: "d", text: "30" }],
        correctOptionId: "a",
        diagnoses: { b: "Left-to-right gives 24, which is wrong.", c: "0 would be 10 − 2 then ×3.", d: "30 multiplies everything." },
        explanation: "2 × 3 = 6, then 10 − 6 = 4.",
        hints: ["Multiply first.", "10 − 6.", "4."],
      },
      {
        id: "U2L1-mcq-6", type: "mcq", category: "word",
        prompt: "3 packs of 7 stickers, plus 4 singles. How many stickers?",
        options: [{ id: "a", text: "25" }, { id: "b", text: "21" }, { id: "c", text: "28" }, { id: "d", text: "34" }],
        correctOptionId: "a",
        diagnoses: { b: "21 ignores the 4 singles.", c: "28 is 4×7.", d: "34 is 3+4×7." },
        explanation: "3 × 7 + 4 = 21 + 4 = 25.",
        hints: ["Pack block = 3 × 7.", "21 + 4.", "25."],
      },
      {
        id: "U2L1-num-1", type: "numeric-input", category: "procedural",
        prompt: "Type the answer: 5 + 2 × 6.", answer: 17, tolerance: 0,
        explanation: "2 × 6 = 12, so 5 + 12 = 17.",
        hints: ["× first.", "12.", "17."],
      },
      {
        id: "U2L1-num-2", type: "numeric-input", category: "procedural",
        prompt: "Type the answer: (5 + 2) × 6.", answer: 42, tolerance: 0,
        explanation: "Bracket: 7 × 6 = 42.",
        hints: ["Brackets first.", "7 × 6.", "42."],
      },
      {
        id: "U2L1-num-3", type: "numeric-input", category: "procedural",
        prompt: "Type the answer: 18 − 6 ÷ 2.", answer: 15, tolerance: 0,
        explanation: "6 ÷ 2 = 3, so 18 − 3 = 15.",
        hints: ["÷ shares same priority as ×.", "18 − 3.", "15."],
      },
      {
        id: "U2L1-num-4", type: "numeric-input", category: "conceptual",
        prompt: "Insert one pair of brackets so 2 + 3 × 4 becomes 20: type the value of the new expression.", answer: 20, tolerance: 0,
        explanation: "(2 + 3) × 4 = 5 × 4 = 20.",
        hints: ["Bracket the addition.", "(2+3).", "20."],
      },
      {
        id: "U2L1-frac-1", type: "fraction-input", category: "conceptual",
        prompt: "A cake is split into 2 blocks of 4 slices; 2 slices are eaten. What fraction of the cake is left? Write left over as a fraction of the whole cake.",
        numerator: 3, denominator: 4, acceptEquivalent: true,
        explanation: "8 slices total; 6 left = 6/8 = 3/4.",
        hints: ["Total slices = 2 × 4.", "Left = 8 − 2.", "6/8 = 3/4."],
      },
      {
        id: "U2L1-tf-1", type: "true-false-justify", category: "conceptual",
        prompt: "2 + 3 × 4 = 20.",
        isTrue: false,
        explanation: "× first: 2 + 12 = 14, not 20.",
        hints: ["Multiply first.", "2 + 12.", "False."],
      },
      {
        id: "U2L1-tf-2", type: "true-false-justify", category: "conceptual",
        prompt: "(2 + 3) × 4 = 2 + (3 × 4).",
        isTrue: false,
        explanation: "20 ≠ 14, so the brackets change the answer.",
        hints: ["Left side = 20.", "Right side = 14.", "Not equal."],
      },
      {
        id: "U2L1-order-1", type: "order-steps", category: "word",
        prompt: "Order the steps to evaluate 8 ÷ 2 + 1.",
        sequence: ["Divide 8 by 2", "Get 4", "Add 1", "Answer is 5"],
        diagnoses: {
          "Divide 8 by 2@0": "÷ first, like ×.",
          "Add 1@0": "Adding first would be wrong because ÷ comes before +.",
          "Answer is 5@0": "5 is the answer, not the first step.",
        },
        explanation: "8 ÷ 2 = 4, then 4 + 1 = 5.",
        hints: ["÷ and × come before + and −.", "8 ÷ 2 first.", "4 + 1 = 5."],
      },
      {
        id: "U2L1-drag-1", type: "drag-match", category: "conceptual",
        prompt: "Match each expression to its value.",
        pairs: [
          { source: "3 + 4 × 2", target: "11" },
          { source: "(3 + 4) × 2", target: "14" },
          { source: "2 × 3 + 4", target: "10" },
        ],
        diagnoses: {
          "3 + 4 × 2->14": "Brackets would give 14; here × goes first, 11.",
          "(3 + 4) × 2->11": "The bracket forces 7 × 2 = 14.",
          "2 × 3 + 4->14": "2 × 3 = 6, then + 4 = 10.",
        },
        explanation: "Only the bracket changes the grouping: 11, 14, 10.",
        hints: ["3 + 8.", "7 × 2.", "6 + 4."],
      },
      {
        id: "U2L1-graph-1", type: "graph-interact", category: "conceptual",
        prompt: "Slider key 'value': set it to 2 + 3 × 4 (the correct order-of-operations answer).",
        challenge: "Set value to 14.",
        validate: { value: 14 }, tolerance: 0,
        explanation: "2 + 12 = 14.",
        hints: ["Multiply first.", "2 + 12.", "14."],
      },
    ],
    selection: { procedural: 2, conceptual: 2, word: 1 },
    passThreshold: 0.8,
  },
  commonMistakes: [
    {
      wrongPattern: "left to right blindly",
      diagnosis: "2 + 3 × 4 is not (2+3)×4. Multiplication forms one block before addition joins.",
      hint: "Find the ×block first, then add.",
    },
    {
      wrongPattern: "forgets ÷ shares × priority",
      diagnosis: "18 − 6 ÷ 2 = 15, not 6. Division is done with × before + and −.",
      hint: "Treat ÷ and × as one rank, done before + and −.",
    },
    {
      wrongPattern: "drops the bracket's role",
      diagnosis: "(2 + 3) × 4 = 20, not 14. Brackets override the usual order.",
      hint: "Brackets always go first — they are the top-priority instruction.",
    },
  ],
  recallTags: ["order-of-operations", "brackets", "arithmetic"],
  discovery: {
    challenges: [
      {
        instruction: "Put 4×6 on one pan and 5 on the other. Now swap the 5 onto the multiplied block's pan — does the total change?",
        observe: "4×6 + 5 groups the multiplication: 24 + 5. Where you place each chip changes the value (4×6+5 vs (4+5)×6).",
      },
      {
        instruction: "Try (4+5)×6 by building it with chips.",
        observe: "Brackets force addition first, changing the whole block.",
      },
    ],
    predict: {
      prompt: "Before you compute: which is bigger, 3 + 4 × 2 or (3 + 4) × 2?",
      options: [
        { id: "a", text: "The bracketed one" },
        { id: "b", text: "The unbracketed one" },
        { id: "c", text: "They are equal" },
      ],
      reveal: "The bracketed one: 14 beats 11 because the bracket multiplied the whole (7×2) instead of just the 4 (3+8).",
    },
    sayItYourWay: {
      prompt: "What does a bracket actually do?",
      phrasings: [
        { id: "a", text: "It groups things into one block that goes first", correct: true, why: "Brackets make the inside a single unit, evaluated before anything else." },
        { id: "b", text: "It makes numbers bigger", correct: false, why: "Brackets change grouping, not size." },
        { id: "c", text: "It means multiply", correct: false, why: "A bracket isn't an operation — it's a container." },
      ],
      formalName: "brackets (grouping)",
    },
    stretch: "What would 2 + 3 × 4 ÷ 2 equal? Guess, then check why ÷ runs with ×.",
  },
};