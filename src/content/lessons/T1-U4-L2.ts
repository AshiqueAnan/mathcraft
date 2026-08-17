import type { Lesson } from "../schema";

export const T1U4L2: Lesson = {
  id: "T1-U4-L2",
  tier: 1,
  unit: "Fractions",
  title: "Equivalent Fractions: Same Amount, Different Names",
  prerequisites: ["T1-U3-L4","T1-U4-L1"],
  estimatedMinutes: 12,
  hook: {
    question:
      "You cut a pizza into 2 halves and give your friend one huge half. Another pizza gets cut into 8 slices and your friend gets 4 slices. Did your friend get the same amount of pizza both times?",
    type: "puzzle",
  },
  intuitionBlocks: [
    {
      widget: "fraction-bars",
      narrative:
        "Build $\\frac{1}{2}$ with 2 parts. Then split EVERY part into 2 — now the bar has 4 parts and the same shaded area is $\\frac{2}{4}$. Split again: it becomes $\\frac{4}{8}$. Same shaded amount, different names!",
      prediction: "Before you build: how many eighths equal one half?",
    },
  ],
  formalBlocks: [
    {
      definition:
        "Two fractions are EQUIVALENT when they name the same amount. To make an equivalent fraction, multiply (or divide) the top AND the bottom by the SAME number. This is just cutting every existing part into the same number of smaller pieces — the amount doesn't change.",
      examples: [
        "$\\frac{1}{2} = \\frac{1 \\times 4}{2 \\times 4} = \\frac{4}{8}$ — one half is the same amount as 4 eighths.",
        "$\\frac{6}{9} = \\frac{6 \\div 3}{9 \\div 3} = \\frac{2}{3}$ — dividing top and bottom by the same number simplifies the name without changing the amount.",
      ],
      pitfall:
        "Never add or subtract a number to top and bottom. $\\frac{1}{2}$ is NOT $\\frac{1+1}{2+1} = \\frac{2}{3}$. Adding changes the amount; only multiplying or dividing by the same number keeps it the same.", altExplanations: ["FOOD: cutting every slice of a cake into 2 halves never changes the cake's size — 1/2 becomes 2/4, then 4/8. Same amount, finer score lines.", "MONEY: $50 is the same value as 5000 cents — rename the currency unit finer (dollars into cents), the amount doesn't change. Equivalent fractions are the same value in different coin sizes."],
    },
  ],
  gutChecks: [
    {
      prompt: "Before you scroll: is $\\frac{2}{4}$ the same amount as $\\frac{1}{2}$?",
      answer: "Yes — $\\frac{2}{4}$ is just $\\frac{1}{2}$ with every part cut in half again. Same amount, different name.",
    },
  ],
  quiz: {
    pool: [
      {
        id: "L2-mcq-1",
        type: "mcq",
        category: "procedural",
        prompt: "Which fraction is equivalent to $\\frac{1}{3}$?",
        options: [
          { id: "a", text: "$\\frac{2}{6}$" },
          { id: "b", text: "$\\frac{2}{3}$" },
          { id: "c", text: "$\\frac{1}{6}$" },
          { id: "d", text: "$\\frac{3}{3}$" },
        ],
        correctOptionId: "a",
        diagnoses: {
          b: "You multiplied the top by 2 but left the bottom alone. Both numbers must change by the same multiplier: $\\frac{1 \\times 2}{3 \\times 2} = \\frac{2}{6}$.",
          c: "You multiplied the bottom by 2 but not the top. The amount changes. Multiply both by the same number: 1×2 and 3×2.",
          d: "$\\frac{3}{3}$ is a whole 1, not a third. To keep $\\frac{1}{3}$, multiply both 1 and 3 by the same number.",
        },
        explanation: "Multiply top and bottom by 2: $\\frac{1 \\times 2}{3 \\times 2} = \\frac{2}{6}$. Same amount, different name.",
        hints: [
          "Multiply the top AND the bottom of $\\frac{1}{3}$ by the same number.",
          "Try multiplying by 2: what is 1×2 over 3×2?",
          "1×2 = 2 and 3×2 = 6, so you get $\\frac{2}{6}$.",
        ],
      },
      {
        id: "L2-mcq-2",
        type: "mcq",
        category: "conceptual",
        prompt: "Why does $\\frac{2}{4}$ show the same amount as $\\frac{1}{2}$?",
        options: [
          { id: "a", text: "Because 4 is double 2." },
          { id: "b", text: "Because the bar was cut into more pieces but the shaded amount is unchanged." },
          { id: "c", text: "Because 2 is bigger than 1." },
          { id: "d", text: "Because both have even numbers." },
        ],
        correctOptionId: "b",
        diagnoses: {
          a: "Four being double two isn't the reason — $\\frac{2}{3}$ and $\\frac{1}{2}$ have related numbers but aren't equal. The real reason is the amount stays the same when every part is split equally.",
          c: "Bigger numerator doesn't mean bigger fraction — the denominator also changed. Compare amounts, not the top number.",
          d: "Even numbers don't make fractions equal. Compare the shaded amount, not whether the digits are even.",
        },
        explanation: "When you cut every half into 2 smaller pieces, the SAME amount is now described by a new name: 2 parts out of 4. The amount didn't change — only the measuring unit did.",
        hints: [
          "Picture a bar half shaded. Now draw one line splitting each half into 2 equal parts.",
          "How many parts is the bar in now? How many are still shaded?",
          "The shaded region didn't move — it's just now called 2 out of 4 parts.",
        ],
      },
      {
        id: "L2-mcq-3",
        type: "mcq",
        category: "word",
        prompt: "A cake recipe needs $\\frac{1}{4}$ cup of sugar. Your measuring cup only has eighths marked. How many eighths do you need?",
        options: [
          { id: "a", text: "3 eighths" },
          { id: "b", text: "4 eighths" },
          { id: "c", text: "2 eighths" },
          { id: "d", text: "8 eighths" },
        ],
        correctOptionId: "c",
        diagnoses: {
          b: "4 eighths is $\\frac{4}{8} = \\frac{1}{2}$, which is double what you need. You need $\\frac{1 \\times 2}{4 \\times 2} = \\frac{2}{8}$.",
          a: "$\\frac{3}{8}$ is between a quarter and a half — too much. Multiply 1 and 4 by 2: you need 2 out of 8.",
          d: "8 eighths is a WHOLE cup. You need a quarter — $\\frac{2}{8}$.",
        },
        explanation: "$\\frac{1}{4} = \\frac{1 \\times 2}{4 \\times 2} = \\frac{2}{8}$. You need 2 eighths of a cup.",
        hints: [
          "You need to rename $\\frac{1}{4}$ with eighths on the bottom.",
          "Multiply the top and bottom of $\\frac{1}{4}$ by the same number to get 8 on the bottom.",
          "4 × 2 = 8, so 1 × 2 = 2. Answer: 2 eighths.",
        ],
      },
      {
        id: "L2-frac-1",
        type: "fraction-input",
        category: "procedural",
        prompt: "Write an equivalent fraction to $\\frac{2}{5}$ by multiplying top and bottom by 3.",
        numerator: 6,
        denominator: 15,
        acceptEquivalent: true,
        explanation: "$\\frac{2 \\times 3}{5 \\times 3} = \\frac{6}{15}$. The amount stays the same.",
        hints: [
          "Multiply the numerator 2 by 3.",
          "Multiply the denominator 5 by 3.",
          "2×3 = 6 on top, 5×3 = 15 on bottom → $\\frac{6}{15}$.",
        ],
      },
      {
        id: "L2-mcq-4",
        type: "mcq",
        category: "conceptual",
        prompt: "Is $\\frac{8}{12}$ equivalent to $\\frac{2}{3}$?",
        options: [
          { id: "a", text: "No, because 12 ÷ 3 ≠ 8." },
          { id: "b", text: "No, because 8 is bigger than 2." },
          { id: "c", text: "Yes, because 8 + 4 = 12 and 2 + 1 = 3." },
          { id: "d", text: "Yes, because 8 ÷ 4 = 2 and 12 ÷ 4 = 3." },
        ],
        correctOptionId: "d",
        diagnoses: {
          b: "Bigger numbers can still name the same amount. $\\frac{8}{12}$ is just $\\frac{2}{3}$ with each part cut into 4 smaller pieces.",
          c: "Adding doesn't keep equivalence. Division does: 8 and 12 both divide by 4.",
          a: "Check division: 8 ÷ 4 = 2 and 12 ÷ 4 = 3 — both divide by the same number, so they ARE equivalent.",
        },
        explanation: "Divide both 8 and 12 by the same number 4: $\\frac{8 \\div 4}{12 \\div 4} = \\frac{2}{3}$. Equivalent!",
        hints: [
          "Can you divide both 8 and 12 by the same number?",
          "What number divides evenly into both 8 and 12?",
          "8 ÷ 4 = 2 and 12 ÷ 4 = 3 → $\\frac{2}{3}$.",
        ],
      },
      {
        id: "L2-mcq-5",
        type: "mcq",
        category: "word",
        prompt: "Three friends each get $\\frac{1}{3}$ of the same-sized different pizzas: Aya gets 1 of 3 slices, Ben gets 2 of 6 slices, Cal gets 3 of 9 slices. Who gets the most pizza?",
        options: [
          { id: "a", text: "All get the same amount." },
          { id: "b", text: "Ben" },
          { id: "c", text: "Cal" },
          { id: "d", text: "Aya" },
        ],
        correctOptionId: "a",
        diagnoses: {
          d: "All three pizzas are the same size, and each person's share is $\\frac{1}{3}$. $\\frac{2}{6}$ and $\\frac{3}{9}$ are just different names for the same third.",
          b: "2 of 6 slices is the same amount as 1 of 3 — the slices are just cut smaller.",
          c: "3 of 9 is still exactly one third of the pizza, same as everyone else.",
        },
        explanation: "$\\frac{2}{6}$ and $\\frac{3}{9}$ are equivalent to $\\frac{1}{3}$ (multiply top and bottom by 2 or 3). Everyone gets exactly one third.",
        hints: [
          "Rewrite each share as a fraction: Aya $\\frac{1}{3}$, Ben $\\frac{2}{6}$, Cal $\\frac{3}{9}$.",
          "Can you simplify $\\frac{2}{6}$ and $\\frac{3}{9}$?",
          "Both simplify to $\\frac{1}{3}$ — everyone gets the same.",
        ],
      },
      {
        id: "L2-num-1",
        type: "numeric-input",
        category: "procedural",
        prompt: "$\\frac{3}{4} = \\frac{?}{12}$. What number goes in the blank?",
        answer: 9,
        tolerance: 0,
        explanation: "4 × 3 = 12, so do the same to the top: 3 × 3 = 9.",
        hints: [
          "What do you multiply the bottom 4 by to get 12?",
          "4 × 3 = 12.",
          "Multiply the top 3 by the same 3: 9.",
        ],
      },
      {
        id: "L2-num-2",
        type: "numeric-input",
        category: "conceptual",
        prompt: "Simplify $\\frac{10}{15}$ to its simplest form. What is the numerator?",
        answer: 2,
        tolerance: 0,
        explanation: "Divide both by 5: $\\frac{10 \\div 5}{15 \\div 5} = \\frac{2}{3}$. The numerator is 2.",
        hints: [
          "What number divides evenly into both 10 and 15?",
          "The HCF of 10 and 15 is 5.",
          "10 ÷ 5 = 2 and 15 ÷ 5 = 3 → $\\frac{2}{3}$, so the numerator is 2.",
        ],
      },
      {
        id: "L2-mcq-6",
        type: "mcq",
        category: "procedural",
        prompt: "Which fraction is equivalent to $\\frac{3}{4}$?",
        options: [
          { id: "a", text: "$\\frac{4}{3}$" },
          { id: "b", text: "$\\frac{6}{8}$" },
          { id: "c", text: "$\\frac{6}{4}$" },
          { id: "d", text: "$\\frac{3}{8}$" },
        ],
        correctOptionId: "b",
        diagnoses: {
          a: "$\\frac{4}{3}$ is more than 1, while $\\frac{3}{4}$ is less than 1.",
          c: "You swapped the numbers — $\\frac{6}{4}$ is one and a half.",
          d: "You multiplied only the bottom by 2; multiply BOTH by 2: $\\frac{6}{8}$.",
        },
        explanation: "Multiply top and bottom by 2: $\\frac{3 \\times 2}{4 \\times 2} = \\frac{6}{8}$.",
        hints: ["Multiply 3 and 4 by the same number.", "Try 2: 3×2 and 4×2.", "3×2 = 6, 4×2 = 8 → $\\frac{6}{8}$."],
      },
      {
        id: "L2-num-3",
        type: "numeric-input",
        category: "procedural",
        prompt: "$\\frac{5}{6} = \\frac{?}{18}$. What number goes in the blank?",
        answer: 15,
        tolerance: 0,
        explanation: "6 × 3 = 18, so 5 × 3 = 15.",
        hints: ["What do you multiply 6 by to get 18?", "6 × 3 = 18.", "5 × 3 = 15."],
      },
      {
        id: "L2-tf-1",
        type: "true-false-justify",
        category: "conceptual",
        prompt: "$\\frac{4}{10}$ is equivalent to $\\frac{2}{5}$.",
        isTrue: true,
        explanation: "Divide both 4 and 10 by 2: $\\frac{4 \\div 2}{10 \\div 2} = \\frac{2}{5}$. Same amount.",
        hints: ["Can both divide by the same number?", "4 ÷ 2 = 2, 10 ÷ 2 = 5.", "Yes — $\\frac{2}{5}$."],
      },
      {
        id: "L2-tf-2",
        type: "true-false-justify",
        category: "conceptual",
        prompt: "Adding 2 to the top and bottom of $\\frac{3}{5}$ keeps the amount the same.",
        isTrue: false,
        explanation: "Adding changes the amount. Only multiplying or dividing both numbers by the same value preserves equivalence.",
        hints: ["Try $\\frac{3+2}{5+2} = \\frac{5}{7}$ — is that a similar share?", "$\\frac{3}{5}$ is 0.6; $\\frac{5}{7}$ is ≈0.714.", "Not the same — false."],
      },
      {
        id: "L2-order-1",
        type: "order-steps",
        category: "word",
        prompt: "Order the steps to check whether $\\frac{6}{9}$ equals $\\frac{2}{3}$.",
        sequence: ["Write $\\frac{6}{9}$", "Find a common divisor: 3", "Divide both: 6÷3=2, 9÷3=3", "Get $\\frac{2}{3}$ — they match"],
        diagnoses: {
          "Find a common divisor: 3@0": "Write the fraction first.",
          "Divide both: 6÷3=2, 9÷3=3@0": "Find the divisor before dividing.",
          "Get $\\frac{2}{3}$ — they match@0": "The match is the conclusion.",
        },
        explanation: "Simplify $\\frac{6}{9}$ by dividing both numbers by 3 to get $\\frac{2}{3}$.",
        hints: ["Write the fraction.", "What divides 6 and 9?", "Divide both → match."],
      },
      {
        id: "L2-drag-1",
        type: "drag-match",
        category: "conceptual",
        prompt: "Match each fraction to its simplified form.",
        pairs: [
          { source: "$\\frac{4}{8}$", target: "$\\frac{1}{2}$" },
          { source: "$\\frac{9}{12}$", target: "$\\frac{3}{4}$" },
          { source: "$\\frac{6}{15}$", target: "$\\frac{2}{5}$" },
        ],
        diagnoses: {
          "$\\frac{4}{8}$->$\\frac{3}{4}$": "4 ÷ 4 = 1 and 8 ÷ 4 = 2 → $\\frac{1}{2}$.",
          "$\\frac{9}{12}$->$\\frac{1}{2}$": "9 ÷ 3 = 3 and 12 ÷ 3 = 4 → $\\frac{3}{4}$.",
          "$\\frac{6}{15}$->$\\frac{3}{4}$": "6 ÷ 3 = 2 and 15 ÷ 3 = 5 → $\\frac{2}{5}$.",
        },
        explanation: "Divide each by its HCF: 4/8→1/2, 9/12→3/4, 6/15→2/5.",
        hints: ["HCF of 4 and 8 is 4.", "HCF of 9 and 12 is 3.", "HCF of 6 and 15 is 3."],
      },
      {
        id: "L2-graph-1",
        type: "graph-interact",
        category: "word",
        prompt: "Adjust the slider (key: value) so the shaded fraction equals $\\frac{1}{2}$ as a decimal.",
        challenge: "Set the slider to 0.5.",
        validate: { value: 0.5 },
        tolerance: 0.05,
        explanation: "$\\frac{1}{2}$ = 0.5 as a decimal.",
        hints: ["Half as a decimal.", "0.5.", "Set the slider to 0.5."],
      },
    ],
    selection: { procedural: 2, conceptual: 2, word: 1 },
    passThreshold: 0.8,
  },
  commonMistakes: [
    {
      wrongPattern: "adds to numerator and denominator",
      diagnosis:
        "Adding a number to both top and bottom changes the size of the fraction — it no longer represents the same amount.",
      hint: "Equivalent fractions only come from multiplying or dividing BOTH numbers by the same value.",
    },
    {
      wrongPattern: "multiplies numerator only",
      diagnosis:
        "Changing only the top changes the amount you take. You must multiply or divide BOTH the top and the bottom by the same number.",
      hint: "Whatever you do to the numerator, do the same to the denominator.",
    },
    {
      wrongPattern: "wrong multiplier",
      diagnosis:
        "To turn 2 into 8 you multiply by 4 — so the numerator must also be multiplied by 4, not by 2 or 3.",
      hint: "Find what you multiplied the bottom by, then apply the same to the top.",
    },
  ],
  recallTags: ["fractions", "equivalence"],
  discovery: {
    challenges: [
      { instruction: "Build $\\frac{1}{2}$. Split every part into 2 more pieces.", observe: "The same shaded amount is now 2 out of 4 ($\\frac{2}{4}$)." },
      { instruction: "Split it again — now how many eighths?", observe: "4 eighths, still the same amount. Multiplying both numbers keeps the amount." },
    ],
    predict: {
      prompt: "Before you build: how many eighths equal one half?",
      options: [
        { id: "a", text: "4" },
        { id: "b", text: "2" },
        { id: "c", text: "8" },
      ],
      reveal: "4 — half of the bar is 4 eighths, because $\\frac{1 \\times 4}{2 \\times 4} = \\frac{4}{8}$.",
    },
    sayItYourWay: {
      prompt: "What does it mean for two fractions to be equivalent?",
      phrasings: [
        { id: "a", text: "They name the same amount", correct: true, why: "Equivalent fractions describe the same part of the whole — just with different-sized pieces." },
        { id: "b", text: "They have the same denominator", correct: false, why: "Equivalent fractions often have different denominators — the amount is what matches, not the bottom number." },
        { id: "c", text: "One is bigger than the other", correct: false, why: "Equivalent means EQUAL amounts, not bigger or smaller." },
      ],
      formalName: "equivalent fractions",
    },
    stretch: "If $\\frac{3}{4}$ is the same as $\\frac{6}{8}$, can you spot a rule about the numbers?",
  },
};
