import type { Lesson } from "../schema";

export const T1U2L2: Lesson = {
  id: "T1-U2-L2",
  tier: 1,
  unit: "Arithmetic fluency",
  title: "Brackets Are Instructions",
  prerequisites: ["T1-U1-L3","T1-U2-L1"],
  estimatedMinutes: 10,
  hook: {
    question: "Two friends write the same numbers but different brackets: 3 + 4 × 2 and (3 + 4) × 2. One gets 11, the other 14. Same digits, different answers — the brackets are the boss.",
    type: "puzzle",
  },
  intuitionBlocks: [
    {
      widget: "number-line",
      narrative: "Watch the point jump for each expression. Without brackets, the × block lands first at 8, then +3 takes you to 11. With brackets, 3+4 jumps to 7 first, then ×2 doubles it to 14.",
    },
  ],
  formalBlocks: [
    {
      definition: "Brackets ( ) are instructions that say: 'do everything inside me FIRST, as one group.' They override the usual order of operations.",
      examples: [
        "$7 + 2 \\times 3 = 13$ but $(7 + 2) \\times 3 = 27$ — the bracket grabbed the 7 and 2 before the multiplication ran.",
        "$20 − (4 + 6) = 20 − 10 = 10$ — remember to change signs correctly when removing the brackets.",
      ],
      pitfall: "When removing brackets with a minus in front, every sign inside flips: $10 - (3 + 2) = 10 - 3 - 2$. Forgetting this is the classic bracket bug.", altExplanations: ["GAME: a video game quest groups its tasks in parentheses — 'defeat 3 goblins then open the chest' differs from 'open the chest after fighting 3 goblins'. The bracket is the quest grouping; minus means 'undo the whole group', flipping each task inside.", "FOOD: a recipe reads '8 servings minus (2 + 1) servings'. You don't subtract 2, then add 1 back — you take away the whole 3-servings bundle, so 8 − 3. The bracket holds the amount you remove all at once."],
    },
  ],
  gutChecks: [
    { prompt: "Which is bigger: 5 × (2 + 1) or (5 × 2) + 1?", answer: "5 × (2+1) = 15; (5×2)+1 = 11. The first is bigger." },
  ],
  quiz: {
    pool: [
      {
        id: "U2L2-mcq-1", type: "mcq", category: "procedural",
        prompt: "10 − (3 + 2) = ?",
        options: [{ id: "a", text: "5" }, { id: "b", text: "9" }, { id: "c", text: "11" }, { id: "d", text: "15" }],
        correctOptionId: "a",
        diagnoses: { b: "You forgot to flip signs: 10 − 3 + 2 = 9 is wrong.", c: "Signs inside the bracket flip when removing it.", d: "This is 10 + 3 + 2." },
        explanation: "Bracket first: 3+2=5, then 10−5=5.",
        hints: ["Do the bracket first.", "3 + 2 = 5.", "10 − 5 = 5."],
      },
      {
        id: "U2L2-mcq-2", type: "mcq", category: "conceptual",
        prompt: "Which expression is biggest?",
        options: [{ id: "a", text: "2 + 3 × 4" }, { id: "b", text: "(2 + 3) × 4" }, { id: "c", text: "2 × (3 + 4)" }, { id: "d", text: "2 × 3 + 4" }],
        correctOptionId: "b",
        diagnoses: { a: "14 — lower than 20.", c: "14 — the bracket holds 3+4=7, times 2.", d: "10 — smallest of the group." },
        explanation: "(2+3)×4 = 20, the largest.",
        hints: ["Compute each.", "(2+3)×4 = 20.", "Others are 14, 14, 10."],
      },
      {
        id: "U2L2-mcq-3", type: "mcq", category: "word",
        prompt: "Buy 3 boxes of 6 eggs, but 2 eggs are cracked. How many good eggs?",
        options: [{ id: "a", text: "18" }, { id: "b", text: "12" }, { id: "c", text: "16" }, { id: "d", text: "22" }],
        correctOptionId: "c",
        diagnoses: { b: "You forgot to subtract the 2 cracked.", a: "That's counting cracked eggs too.", d: "You added instead of subtracting." },
        explanation: "3 × 6 − 2 = 18 − 2 = 16.",
        hints: ["Good = total − 2.", "18 − 2.", "16."],
      },
      {
        id: "U2L2-mcq-4", type: "mcq", category: "procedural",
        prompt: "6 × (4 + 1) = ?",
        options: [{ id: "a", text: "24" }, { id: "b", text: "25" }, { id: "c", text: "28" }, { id: "d", text: "30" }],
        correctOptionId: "d",
        diagnoses: { b: "25 = (6×4)+1, ignoring the bracket's ×5.", c: "28 = 6×4 + 4.", a: "24 = 6×4, missing +1 inside." },
        explanation: "Bracket: 4+1=5, then 6×5=30.",
        hints: ["Inside first.", "4 + 1 = 5.", "6 × 5 = 30."],
      },
      {
        id: "U2L2-mcq-5", type: "mcq", category: "conceptual",
        prompt: "12 − (5 − 2) equals...",
        options: [{ id: "a", text: "9" }, { id: "b", text: "15" }, { id: "c", text: "5" }, { id: "d", text: "7" }],
        correctOptionId: "a",
        diagnoses: { b: "15 = 12 + 5 − 2, signs flipped wrong.", c: "5 is just the bracket value, you forgot to subtract from 12.", d: "7 = 12 − 5, ignoring the +2 inside." },
        explanation: "5 − 2 = 3, so 12 − 3 = 9.",
        hints: ["Inside first: 5 − 2 = 3.", "12 − 3.", "9."],
      },
      {
        id: "U2L2-mcq-6", type: "mcq", category: "word",
        prompt: "A ride costs $4 per km for the first 3 km, and $2 for each km after. With 5 km, how much?",
        options: [{ id: "a", text: "$20" }, { id: "b", text: "$16" }, { id: "c", text: "$14" }, { id: "d", text: "$18" }],
        correctOptionId: "b",
        diagnoses: { a: "That's $4 × 5, ignoring the $2 rate for km 4-5.", c: "$14 = $4×3 + $2, missing one km.", d: "$18 = $4×3 + $2×3." },
        explanation: "(3×$4) + (2×$2) = $12 + $4 = $16.",
        hints: ["First 3 km at $4.", "Next 2 km at $2.", "12 + 4 = 16."],
      },
      {
        id: "U2L2-num-1", type: "numeric-input", category: "procedural",
        prompt: "Type the answer: 8 + (3 × 2).", answer: 14, tolerance: 0,
        explanation: "3×2 = 6, then 8+6 = 14.",
        hints: ["Bracket first.", "8 + 6.", "14."],
      },
      {
        id: "U2L2-num-2", type: "numeric-input", category: "procedural",
        prompt: "Type the answer: (8 + 3) × 2.", answer: 22, tolerance: 0,
        explanation: "8+3 = 11, then 11×2 = 22.",
        hints: ["Inside first.", "11 × 2.", "22."],
      },
      {
        id: "U2L2-num-3", type: "numeric-input", category: "procedural",
        prompt: "Type the answer: 20 − (4 + 6).", answer: 10, tolerance: 0,
        explanation: "4+6 = 10, then 20−10 = 10.",
        hints: ["Bracket first.", "20 − 10.", "10."],
      },
      {
        id: "U2L2-num-4", type: "numeric-input", category: "conceptual",
        prompt: "Insert brackets to make 2 + 3 × 5 = 25. Type the value.", answer: 25, tolerance: 0,
        explanation: "(2+3)×5 = 5×5 = 25.",
        hints: ["Group the 2+3.", "5 × 5.", "25."],
      },
      {
        id: "U2L2-frac-1", type: "fraction-input", category: "conceptual",
        prompt: "You eat 3 slices from a pizza cut into 8. What fraction is left?",
        numerator: 5, denominator: 8, acceptEquivalent: true,
        explanation: "8 − 3 = 5, so 5/8 remains.",
        hints: ["Left = 8 − 3.", "5 slices of 8.", "5/8."],
      },
      {
        id: "U2L2-tf-1", type: "true-false-justify", category: "conceptual",
        prompt: "15 − (5 − 3) = 13.",
        isTrue: true,
        explanation: "5 − 3 = 2, so 15 − 2 = 13.",
        hints: ["Inside first.", "15 − 2.", "13 — true."],
      },
      {
        id: "U2L2-tf-2", type: "true-false-justify", category: "conceptual",
        prompt: "(4 + 2) × 3 = 4 + 2 × 3.",
        isTrue: false,
        explanation: "18 ≠ 10 — brackets change the grouping.",
        hints: ["Left: 6×3 = 18.", "Right: 4 + 6 = 10.", "Not equal."],
      },
      {
        id: "U2L2-order-1", type: "order-steps", category: "word",
        prompt: "Order the steps to solve 12 − (3 + 2).",
        sequence: ["Add 3 and 2", "Get 5", "Subtract from 12", "Answer is 7"],
        diagnoses: {
          "Get 5@0": "Add inside the bracket first.",
          "Subtract from 12@0": "Only after the bracket simplifies.",
          "Answer is 7@0": "7 is the final answer, not a step.",
        },
        explanation: "Bracket: 3+2=5, then 12−5=7.",
        hints: ["Inside first.", "5.", "12 − 5 = 7."],
      },
      {
        id: "U2L2-drag-1", type: "drag-match", category: "conceptual",
        prompt: "Match each bracket placement to its value.",
        pairs: [
          { source: "2 + 3 × 4", target: "14" },
          { source: "(2 + 3) × 4", target: "20" },
          { source: "2 × (3 + 4)", target: "14" },
        ],
        diagnoses: {
          "2 + 3 × 4->20": "Without brackets, × runs first: 2+12 = 14.",
          "(2 + 3) × 4->14": "The bracket forces 5 × 4 = 20.",
          "2 × (3 + 4)->20": "2 × 7 = 14, not 20.",
        },
        explanation: "Brackets decide: 14, 20, 14.",
        hints: ["2 + 12.", "5 × 4.", "2 × 7."],
      },
      {
        id: "U2L2-graph-1", type: "graph-interact", category: "conceptual",
        prompt: "Slider 'value': set it to (2+3)×4.",
        challenge: "Set value to 20.",
        validate: { value: 20 }, tolerance: 0,
        explanation: "(2+3)×4 = 20.",
        hints: ["What is inside the bracket?", "5 × 4.", "20."],
      },
    ],
    selection: { procedural: 2, conceptual: 2, word: 1 },
    passThreshold: 0.8,
  },
  commonMistakes: [
    {
      wrongPattern: "forgets sign flip when removing minus bracket",
      diagnosis: "15 − (5 − 3) is 13, not 17. The minus flips both inside signs when you remove the bracket.",
      hint: "Rewrite 15 − (5 − 3) as 15 − 5 + 3.",
    },
    {
      wrongPattern: "ignores the bracket entirely",
      diagnosis: "(4+2)×3 is 18, not 4+2×3 = 10. The bracket holds the + until it's done.",
      hint: "Always complete the inside before the outside operator.",
    },
    {
      wrongPattern: "removes the bracket but keeps only part",
      diagnosis: "6 × (4+1) is 30, not 6×4+1 = 25. The × multiplies the WHOLE bracket.",
      hint: "×6 applies to the whole grouped amount.",
    },
  ],
  recallTags: ["brackets", "order-of-operations"],
  discovery: {
    challenges: [
      {
        instruction: "Set the point for 3+4×2 = 11. Now compute (3+4)×2 = 14. Watch the jump differ.",
        observe: "Same digits, different destinations — only the brackets changed.",
      },
      {
        instruction: "Try 5×(2+1) and (5×2)+1. Compare the points.",
        observe: "15 vs 11 — where the bracket sits shifts the whole result.",
      },
    ],
    predict: {
      prompt: "Before you compute 20 − (4 + 6): is the answer negative?",
      options: [
        { id: "a", text: "No, it's 10" },
        { id: "b", text: "Yes, it's −10" },
        { id: "c", text: "Yes, it's −2" },
      ],
      reveal: "No — 4+6 = 10, and 20−10 = 10. Positive.",
    },
    sayItYourWay: {
      prompt: "What do brackets really tell you to do?",
      phrasings: [
        { id: "a", text: "Handle the inside first", correct: true, why: "Brackets are the top priority instruction." },
        { id: "b", text: "Multiply everything", correct: false, why: "Brackets group, they don't multiply." },
        { id: "c", text: "Ignore the outside", correct: false, why: "The outside operator still acts on the whole group." },
      ],
      formalName: "grouping symbols",
    },
    stretch: "What would 6 ÷ (2 + 1) equal? Guess first, then check using the number line.",
  },
};