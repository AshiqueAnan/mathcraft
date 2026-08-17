import type { Lesson } from "../schema";

export const T1U6L1: Lesson = {
  id: "T1-U6-L1",
  tier: 1,
  unit: "Ratio & proportion",
  title: "Recipes and Rescaling",
  prerequisites: ["T1-U3-L3","T1-U4-L2","T1-U5-L4"],
  estimatedMinutes: 12,
  hook: {
    question: "A pancake recipe says '2 cups flour to 1 cup milk'. You want to feed twice as many people. Double both: 4 and 2. But can you also make a smaller batch that still tastes the same? A ratio is the recipe's soul — scale it, don't break it.",
    type: "real-world",
  },
  intuitionBlocks: [
    {
      widget: "ratio-bar",
      narrative: "The RatioBar shows the flour:milk split. Slide to 2:1, then 4:2, then 1:0.5. The bar's shaded fraction stays the same — the ratio 2:1 is one relationship wearing different scale costumes.",
    },
  ],
  formalBlocks: [
    {
      definition: "A ratio $a:b$ compares two amounts. $2:1$ means 'for every 2 of A there is 1 of B'. Ratios scale like fractions: multiplying or dividing both parts by the same number keeps the SAME ratio. So $2:1 = 4:2 = 1:0.5$.",
      examples: [
        "Gear ratio 3:1 means 3 turns of the small gear per 1 turn of the big — or 6:2, same ratio, twice as many turns.",
        "Orange squash at 1 part concentrate : 4 parts water. For 8 parts water you need 2 parts concentrate (×2 both).",
      ],
      pitfall: "$2:1$ is NOT the fraction $\\frac{2}{1}$ of the whole — it's a comparison. The bar split is $\\frac{2}{3}$ and $\\frac{1}{3}$. Don't confuse the ratio parts with the whole.", altExplanations: ["FOOD: squash at 1:4 concentrate-to-water — every 1 measure of concentrate wants 4 measures of water. Double the jug to 2:8, same taste; halve to 0.5:2, same taste. The ratio is the recipe's immune to scaling.", "GAME: a football team plays 2 defenders for every 1 striker — the 2:1 ratio; a backup squad at 4:2 keeps the same shape, just twice the players. Ratio parts compare, they don't split the whole."],
    },
  ],
  gutChecks: [
    { prompt: "Scale the ratio 3:2 by ×3 — what new ratio do you get?", answer: "9:6 — multiply both parts by 3." },
  ],
  quiz: {
    pool: [
      {
        id: "U6L1-mcq-1", type: "mcq", category: "procedural",
        prompt: "Which ratio equals 2:1?",
        options: [{ id: "a", text: "4:2" }, { id: "b", text: "3:2" }, { id: "c", text: "1:2" }, { id: "d", text: "2:2" }],
        correctOptionId: "a",
        diagnoses: { b: "3:2 is not a double of 2:1.", c: "1:2 is the reverse — wrong direction.", d: "2:2 doubles one part only." },
        explanation: "4:2 = (2×2):(1×2) — same ratio, scaled.",
        hints: ["Scale both parts by the same number.", "2:1 × 2.", "4:2 = (2×2):(1×2) — same ratio, scaled."],
      },
      {
        id: "U6L1-mcq-2", type: "mcq", category: "conceptual",
        prompt: "Which is NOT the same ratio as 3:2?",
        options: [{ id: "a", text: "6:4" }, { id: "b", text: "2:3" }, { id: "c", text: "1.5:1" }, { id: "d", text: "9:6" }],
        correctOptionId: "b",
        diagnoses: { a: "6:4 = 3:2 × 2 — same.", d: "9:6 = 3:2 × 3 — same.", c: "1.5:1 = 3:2 ÷ 2 — same." },
        explanation: "2:3 swaps the parts — a different ratio entirely.",
        hints: ["Scale both parts equally.", "2:3 reverses it.", "2:3 is different."],
      },
      {
        id: "U6L1-mcq-3", type: "mcq", category: "word",
        prompt: "A recipe needs 3 eggs per 2 cups flour. For 6 cups flour, how many eggs?",
        options: [{ id: "a", text: "4" }, { id: "b", text: "6" }, { id: "c", text: "9" }, { id: "d", text: "12" }],
        correctOptionId: "c",
        diagnoses: { b: "6 is 2 cups × 3 — but the ratio is 3:2, not 1:1.", a: "4 = 2 × 2 — half the needed eggs.", d: "12 = 3×4 with flour tripled? 6 cups is ×3 flour, so ×3 eggs = 9." },
        explanation: "Flour went 2 → 6 (×3). Eggs also ×3: 9.",
        hints: ["Flour ×3.", "Eggs ×3 too.", "Flour went 2 → 6 (×3)."],
      },
      {
        id: "U6L1-mcq-4", type: "mcq", category: "conceptual",
        prompt: "A ratio 4:3 — what fraction of the whole is the FIRST part?",
        options: [{ id: "a", text: "$\\frac{1}{4}$" }, { id: "b", text: "$\\frac{4}{3}$" }, { id: "c", text: "$\\frac{3}{7}$" }, { id: "d", text: "$\\frac{4}{7}$" }],
        correctOptionId: "d",
        diagnoses: { b: "4/3 is over 1 — a part of a whole can't exceed it.", c: "3/7 is the SECOND part's share.", a: "1/4 confuses the ratio ratio with a quarter." },
        explanation: "Whole = 4 + 3 = 7 parts, so the first part is 4 out of 7.",
        hints: ["Add the parts to get the whole.", "4 out of 7.", "Whole = 4 + 3 = 7 parts, so the first part is 4 out of 7."],
      },
      {
        id: "U6L1-mcq-5", type: "mcq", category: "procedural",
        prompt: "Simplify 10:15.",
        options: [{ id: "a", text: "2:3" }, { id: "b", text: "3:2" }, { id: "c", text: "5:15" }, { id: "d", text: "10:5" }],
        correctOptionId: "a",
        diagnoses: { b: "You reversed it.", c: "You only halved one part.", d: "You swapped and simplified wrongly." },
        explanation: "Divide both by 5: 2:3.",
        hints: ["HCF of 10 and 15.", "5.", "Divide both by 5: 2:3."],
      },
      {
        id: "U6L1-mcq-6", type: "mcq", category: "word",
        prompt: "Paint mixed red:blue = 2:3. You use 12 parts blue. How much red?",
        options: [{ id: "a", text: "18" }, { id: "b", text: "8" }, { id: "c", text: "6" }, { id: "d", text: "12" }],
        correctOptionId: "b",
        diagnoses: { a: "18 = 12 × 1.5 — wrong scale.", c: "6 = 12 ÷ 2 — you scaled blue alone.", d: "12 keeps 1:1, wrong ratio." },
        explanation: "Blue 3 → 12 (×4). Red 2 × 4 = 8.",
        hints: ["Blue ×4.", "Red ×4.", "Blue 3 → 12 (×4)."],
      },
      {
        id: "U6L1-num-1", type: "numeric-input", category: "procedural",
        prompt: "Simplify 8:12 to lowest terms — type the first part.", answer: 2, tolerance: 0,
        explanation: "Divide both by 4: 2:3.",
        hints: ["HCF of 8 and 12.", "4.", "2:3 → first part 2."],
      },
      {
        id: "U6L1-num-2", type: "numeric-input", category: "procedural",
        prompt: "Scale 3:4 by ×3 — type the first part of the new ratio.", answer: 9, tolerance: 0,
        explanation: "3×3 = 9, 4×3 = 12 → 9:12.",
        hints: ["Multiply both by 3.", "3 × 3.", "3×3 = 9, 4×3 = 12 → 9:12."],
      },
      {
        id: "U6L1-num-3", type: "numeric-input", category: "conceptual",
        prompt: "If A:B = 2:5 and B = 20, what is A?", answer: 8, tolerance: 0,
        explanation: "B 5 → 20 (×4). A = 2 × 4 = 8.",
        hints: ["B ×4.", "A ×4.", "B 5 → 20 (×4). A = 2 × 4 = 8."],
      },
      {
        id: "U6L1-num-4", type: "numeric-input", category: "word",
        prompt: "Fruit punch 1 part juice : 3 parts soda. For 9 parts soda, how much juice?", answer: 3, tolerance: 0,
        explanation: "Soda 3 → 9 (×3). Juice 1 × 3 = 3.",
        hints: ["Soda ×3.", "Juice ×3.", "Soda 3 → 9 (×3)."],
      },
      {
        id: "U6L1-frac-1", type: "fraction-input", category: "conceptual",
        prompt: "In the ratio 2:3, the first part is what fraction of the whole (simplified)?",
        numerator: 2, denominator: 5, acceptEquivalent: false,
        explanation: "Whole = 2 + 3 = 5; first part 2/5.",
        hints: ["Add the parts.", "2 out of 5.", "Whole = 2 + 3 = 5; first part 2/5."],
      },
      {
        id: "U6L1-tf-1", type: "true-false-justify", category: "conceptual",
        prompt: "The ratio 6:4 is the same as 3:2.",
        isTrue: true,
        explanation: "Divide both by 2: 3:2.",
        hints: ["HCF 2.", "Divide both.", "Divide both by 2: 3:2."],
      },
      {
        id: "U6L1-tf-2", type: "true-false-justify", category: "conceptual",
        prompt: "In 5:2, the whole has 5 parts total.",
        isTrue: false,
        explanation: "The whole is 5 + 2 = 7 parts, not 5.",
        hints: ["Add the parts.", "5 + 2.", "The whole is 5 + 2 = 7 parts, not 5."],
      },
      {
        id: "U6L1-order-1", type: "order-steps", category: "word",
        prompt: "Order the steps to scale a 2:5 recipe from 5 to 20 of part B.",
        sequence: ["See B went 5 → 20", "That's ×4", "Multiply A by 4: 8", "New ratio 8:20"],
        diagnoses: {
          "That's ×4@0": "Find the scale factor first.",
          "Multiply A by 4: 8@0": "Apply the factor to A.",
          "New ratio 8:20@0": "Write the final ratio.",
        },
        explanation: "Scale both parts by the same factor.",
        hints: ["20 ÷ 5 = 4.", "A × 4.", "Scale both parts by the same factor."],
      },
      {
        id: "U6L1-drag-1", type: "drag-match", category: "conceptual",
        prompt: "Match each scale to the ratio it produces.",
        pairs: [
          { source: "1:2 × 3", target: "3:6" },
          { source: "8:12 ÷ 4", target: "2:3" },
          { source: "5:3 × 0.4", target: "2:1.2" },
        ],
        diagnoses: {
          "1:2 × 3->2:3": "Multiply both parts by 3: 3:6.",
          "8:12 ÷ 4->3:6": "Divide both by 4: 2:3.",
          "5:3 × 0.4->3:6": "5×0.4=2, 3×0.4=1.2 → 2:1.2.",
        },
        explanation: "Same factor on both parts.",
        hints: ["×3 both.", "÷4 both.", "Same factor on both parts."],
      },
      {
        id: "U6L1-graph-1", type: "graph-interact", category: "word",
        prompt: "Slider (key: value): the ratio is 2:1 and part B = 5. Set value to part A.",
        challenge: "Slider : the ratio is 2:1 and part B = 5. — adjust the values below to match the condition.",
        validate: { value: 10 },
        tolerance: 0.01,
        explanation: "A = 2 × 5 = 10.",
        hints: ["A is double B.", "2 × 5.", "A = 2 × 5 = 10."],
      },
    ],
    selection: { procedural: 2, conceptual: 2, word: 1 },
    passThreshold: 0.8,
  },
  commonMistakes: [
    {
      wrongPattern: "scales only one part",
      diagnosis: "Scaling only one side breaks the recipe's balance. Scale BOTH parts by the same factor.",
      hint: "Whatever you multiply one part by, multiply the other too.",
    },
    {
      wrongPattern: "confuses ratio part with fraction of whole",
      diagnosis: "In 2:3, the first part is 2/5 of the whole, not 2/3.",
      hint: "Add both parts to find the whole first.",
    },
    {
      wrongPattern: "reverses the order",
      diagnosis: "2:1 means 2 of A for every 1 of B. 1:2 is the opposite relationship.",
      hint: "Read the ratio in order: 'a to b'.",
    },
  ],
  recallTags: ["ratio", "scaling", "proportion"],
  discovery: {
    challenges: [
      {
        instruction: "Set the RatioBar to 2:1. Now scale to 4:2 and 1:0.5.",
        observe: "The bar's shaded share stays the same — same ratio, new costumes.",
      },
      {
        instruction: "Try 5:3, then scale to 10:6.",
        observe: "10:6 is the same relationship as 5:3, just twice as big.",
      },
    ],
    predict: {
      prompt: "Before you slide: is 4:2 the same ratio as 2:1?",
      options: [
        { id: "a", text: "Yes" },
        { id: "b", text: "No" },
        { id: "c", text: "Only with food" },
      ],
      reveal: "Yes — 4:2 = 2:1, both parts doubled. The relationship is identical.",
    },
    sayItYourWay: {
      prompt: "What does a ratio like 3:1 really mean?",
      phrasings: [
        { id: "a", text: "For every 3 of the first, 1 of the second", correct: true, why: "It compares amounts in fixed proportion — a relationship, not a single number." },
        { id: "b", text: "Exactly 3 total items", correct: false, why: "3:1 has 4 parts total — 3 of A and 1 of B." },
        { id: "c", text: "A fraction of the whole equal to 3/1", correct: false, why: "3:1 means 3/4 of the whole is the first part, not 3 whole things." },
      ],
      formalName: "ratio",
    },
    stretch: "If 2:1 and 4:2 are the same, how many ratios equal 1:1? Guess, then start listing.",
  },
};