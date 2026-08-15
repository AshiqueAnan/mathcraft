import type { Lesson } from "../schema";

export const T1U2L3: Lesson = {
  id: "T1-U2-L3",
  tier: 1,
  unit: "Arithmetic fluency",
  title: "Undoing Things",
  prerequisites: ["T1-U1-L3","T1-U2-L1","T1-U2-L2"],
  estimatedMinutes: 10,
  hook: {
    question: "I think of a number, add 5, and get 12. What was my number? You just did algebra — you just didn't call it that. The trick is learning to run a machine backwards.",
    type: "puzzle",
  },
  intuitionBlocks: [
    {
      widget: "balance-scale",
      narrative: "Start with a number hidden on the left. Add 5 to both pans keeps it balanced. Move chips to 'undo' the +5 and reveal the original — whatever you remove from one side, remove from the other.",
    },
  ],
  formalBlocks: [
    {
      definition: "Inverse operations undo each other: add ↔ subtract, multiply ↔ divide. To find an unknown, apply the inverse operation to BOTH sides of the balance.",
      examples: [
        "$x + 5 = 12$ → subtract 5 from both sides: $x = 12 - 5 = 7$.",
        "$3x = 21$ → divide both sides by 3: $x = 21 \\div 3 = 7$.",
      ],
      pitfall: "Always do the SAME thing to both sides. Removing a chip from only one pan tips the balance and breaks the equation.", altExplanations: ["MACHINE: a machine adds 5 then spits out 12. To recover the input you run the machine BACKWARDS: undo the +5 with −5, getting 7. Every forward step has a reverse step that exactly cancels it — that pair is the inverse.", "GAME: a treasure map says a number was multiplied by 3 and hid 21. Undo the ×3 by dividing by 3 — the map's last clue is inverted first. Whatever the machine did forward, the inverse does backward, on both sides of the equals sign."],
    },
  ],
  gutChecks: [
    { prompt: "What is the inverse of 'multiply by 4'?", answer: "Divide by 4 — they undo each other." },
  ],
  quiz: {
    pool: [
      {
        id: "U2L3-mcq-1", type: "mcq", category: "procedural",
        prompt: "x + 7 = 15. What is x?",
        options: [{ id: "a", text: "8" }, { id: "b", text: "22" }, { id: "c", text: "15" }, { id: "d", text: "7" }],
        correctOptionId: "a",
        diagnoses: { b: "22 is x + 7 + 7 — you added, not subtracted.", c: "That's just the result.", d: "That's the add-on, not the original." },
        explanation: "Subtract 7 from both sides: x = 8.",
        hints: ["Undo +7.", "15 − 7.", "8."],
      },
      {
        id: "U2L3-mcq-2", type: "mcq", category: "conceptual",
        prompt: "Which operation undoes '× 3'?",
        options: [{ id: "a", text: "÷ 3" }, { id: "b", text: "+ 3" }, { id: "c", text: "− 3" }, { id: "d", text: "× 3" }],
        correctOptionId: "a",
        diagnoses: { b: "+ is the inverse of −, not ×.", c: "− is the inverse of +.", d: "×3 then ×3 makes it 9 times." },
        explanation: "× and ÷ are inverse pairs.",
        hints: ["What cancels a triple?", "Split into 3 equal parts.", "÷3."],
      },
      {
        id: "U2L3-mcq-3", type: "mcq", category: "word",
        prompt: "A number is multiplied by 6 and the result is 54. What was the number?",
        options: [{ id: "a", text: "9" }, { id: "b", text: "48" }, { id: "c", text: "60" }, { id: "d", text: "324" }],
        correctOptionId: "a",
        diagnoses: { b: "48 = 54 − 6, but × needs ÷ to undo.", c: "60 = 54 + 6.", d: "324 = 54 × 6." },
        explanation: "Undo ×6 with ÷6: 54 ÷ 6 = 9.",
        hints: ["Undo multiply with divide.", "54 ÷ 6.", "9."],
      },
      {
        id: "U2L3-mcq-4", type: "mcq", category: "procedural",
        prompt: "y − 4 = 9. What is y?",
        options: [{ id: "a", text: "13" }, { id: "b", text: "5" }, { id: "c", text: "9" }, { id: "d", text: "36" }],
        correctOptionId: "a",
        diagnoses: { b: "5 = 9 − 4, but you need to UNDO the −4 by adding.", c: "That's the result.", d: "36 = 9 × 4." },
        explanation: "Undo −4 by adding 4: y = 9 + 4 = 13.",
        hints: ["Undo minus with plus.", "9 + 4.", "13."],
      },
      {
        id: "U2L3-mcq-5", type: "mcq", category: "conceptual",
        prompt: "To solve x ÷ 5 = 8, you should...",
        options: [{ id: "a", text: "Multiply both sides by 5" }, { id: "b", text: "Divide both sides by 5" }, { id: "c", text: "Add 5" }, { id: "d", text: "Subtract 5" }],
        correctOptionId: "a",
        diagnoses: { b: "Dividing by 5 again makes it 1/25 of the way.", c: "÷ isn't undone by +.", d: "÷ isn't undone by −." },
        explanation: "x ÷ 5 = 8, so ×5 both sides: x = 40.",
        hints: ["÷ and × are inverses.", "Multiply both sides by 5.", "x = 40."],
      },
      {
        id: "U2L3-mcq-6", type: "mcq", category: "word",
        prompt: "You spent $12 and have $28 left. How much did you start with?",
        options: [{ id: "a", text: "$40" }, { id: "b", text: "$16" }, { id: "c", text: "$28" }, { id: "d", text: "$336" }],
        correctOptionId: "a",
        diagnoses: { b: "16 = 28 − 12; you need to ADD back what you spent.", c: "That's what's left.", d: "336 = 28 × 12." },
        explanation: "Start = 28 + 12 = 40.",
        hints: ["Spending subtracts…", "…so to find the start, add back.", "40."],
      },
      {
        id: "U2L3-num-1", type: "numeric-input", category: "procedural",
        prompt: "Type x: x + 8 = 20.", answer: 12, tolerance: 0,
        explanation: "x = 20 − 8 = 12.",
        hints: ["Undo +8.", "20 − 8.", "12."],
      },
      {
        id: "U2L3-num-2", type: "numeric-input", category: "procedural",
        prompt: "Type x: 4x = 28.", answer: 7, tolerance: 0,
        explanation: "x = 28 ÷ 4 = 7.",
        hints: ["Undo ×4 with ÷4.", "28 ÷ 4.", "7."],
      },
      {
        id: "U2L3-num-3", type: "numeric-input", category: "procedural",
        prompt: "Type x: x ÷ 3 = 9.", answer: 27, tolerance: 0,
        explanation: "x = 9 × 3 = 27.",
        hints: ["Undo ÷3 with ×3.", "9 × 3.", "27."],
      },
      {
        id: "U2L3-num-4", type: "numeric-input", category: "word",
        prompt: "A number, halved, gives 13. What is the number?", answer: 26, tolerance: 0,
        explanation: "×2 both sides: 13 × 2 = 26.",
        hints: ["Halving is ÷2.", "Undo with ×2.", "26."],
      },
      {
        id: "U2L3-frac-1", type: "fraction-input", category: "conceptual",
        prompt: "Dividing a number by 4 is the same as multiplying by what fraction?",
        numerator: 1, denominator: 4, acceptEquivalent: false,
        explanation: "÷4 ≡ ×(1/4).",
        hints: ["Division is multiplication by the reciprocal.", "Reciprocal of 4 is 1/4.", "1/4."],
      },
      {
        id: "U2L3-tf-1", type: "true-false-justify", category: "conceptual",
        prompt: "Adding 6 then subtracting 6 brings you back to the start.",
        isTrue: true,
        explanation: "+ and − are inverse pairs; they cancel.",
        hints: ["What do +6 and −6 do together?", "They cancel.", "True."],
      },
      {
        id: "U2L3-tf-2", type: "true-false-justify", category: "conceptual",
        prompt: "Multiplying by 5 and multiplying by 5 again undoes itself.",
        isTrue: false,
        explanation: "×5 twice makes ×25. The inverse of ×5 is ÷5, not another ×5.",
        hints: ["Do ×5 twice to 2.", "2 → 10 → 50, not back to 2.", "False."],
      },
      {
        id: "U2L3-order-1", type: "order-steps", category: "word",
        prompt: "Order the steps to solve x + 3 = 10.",
        sequence: ["Write the equation", "Subtract 3 from both sides", "x = 7", "Check: 7 + 3 = 10"],
        diagnoses: {
          "Subtract 3 from both sides@0": "Start by writing the equation.",
          "Check: 7 + 3 = 10@0": "Checking is the final step.",
          "x = 7@0": "x = 7 is the solved result.",
        },
        explanation: "Undo +3 to isolate x, then verify.",
        hints: ["First, write the equation.", "Undo the +3.", "Then check."],
      },
      {
        id: "U2L3-drag-1", type: "drag-match", category: "conceptual",
        prompt: "Match each equation to its inverse operation.",
        pairs: [
          { source: "x + 5 = 12", target: "subtract 5" },
          { source: "x − 5 = 12", target: "add 5" },
          { source: "3x = 12", target: "divide by 3" },
        ],
        diagnoses: {
          "x + 5 = 12->add 5": "+5 is undone by −5.",
          "3x = 12->add 5": "× is undone by ÷.",
        },
        explanation: "The inverse operation isolates x.",
        hints: ["+ pairs with −.", "− pairs with +.", "× pairs with ÷."],
      },
      {
        id: "U2L3-graph-1", type: "graph-interact", category: "conceptual",
        prompt: "Set the slider value so x + 3 = 10 reads x = 7 (key: value).",
        challenge: "Set value to 7.",
        validate: { value: 7 }, tolerance: 0,
        explanation: "x = 7 is the solution.",
        hints: ["Undo +3.", "10 − 3.", "7."],
      },
    ],
    selection: { procedural: 2, conceptual: 2, word: 1 },
    passThreshold: 0.8,
  },
  commonMistakes: [
    {
      wrongPattern: "does the same operation instead of the inverse",
      diagnosis: "To undo +7 you SUBTRACT 7, not add 7 more. Inverse means opposite.",
      hint: "Ask: what operation cancels this one?",
    },
    {
      wrongPattern: "only changes one side",
      diagnosis: "The balance stays true only if you do the same to BOTH sides. Moving a chip on one pan alone breaks it.",
      hint: "Whatever you do, do it to both pans.",
    },
    {
      wrongPattern: "mixes up × and + inverses",
      diagnosis: "Undoing ×4 uses ÷4, not −4. Each operation has its own partner.",
      hint: "Learn the pairs: +↔−, ×↔÷.",
    },
  ],
  recallTags: ["inverse-operations", "equations", "balance"],
  discovery: {
    challenges: [
      {
        instruction: "Put 6 chips on the left and add 2 to both pans. Now remove 2 from both — what happens?",
        observe: "Adding then removing the same amount returns both pans to start — that's undoing.",
      },
      {
        instruction: "Double both pans, then halve both pans.",
        observe: "×2 then ÷2 returns to the original balance.",
      },
    ],
    predict: {
      prompt: "Before you move: if you add 5 to one pan only, does the balance stay level?",
      options: [
        { id: "a", text: "No, it tips" },
        { id: "b", text: "Yes, it stays level" },
        { id: "c", text: "It depends" },
      ],
      reveal: "No — changing only one side tips the balance. That's why equations demand the same move on both sides.",
    },
    sayItYourWay: {
      prompt: "What does it mean to 'solve' x + 5 = 12?",
      phrasings: [
        { id: "a", text: "Isolate x by undoing with inverse operations", correct: true, why: "Solving means getting the unknown alone on one side, using the inverse." },
        { id: "b", text: "Guess the answer faster than a friend", correct: false, why: "Solving is a systematic method, not a speed game." },
        { id: "c", text: "Make every number bigger", correct: false, why: "Solving balances both sides; size isn't the goal." },
      ],
      formalName: "solving an equation (isolating the unknown)",
    },
    stretch: "If x + 5 = 12 and 12 ÷ 3 = 4, can you use one result to check the other?",
  },
};