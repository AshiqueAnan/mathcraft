import type { Lesson } from "../schema";

export const T1U4L3: Lesson = {
  id: "T1-U4-L3",
  tier: 1,
  unit: "Fractions",
  title: "Comparing Fractions: Which Is Bigger?",
  prerequisites: ["T1-U3-L4","T1-U4-L2"],
  estimatedMinutes: 12,
  hook: {
    question:
      "You and your cousin each eat from equal pizzas. You eat $\\frac{2}{5}$ of yours. Your cousin eats $\\frac{3}{8}$ of theirs. Who ate more? (Guess before you compute!)",
    type: "puzzle",
  },
  intuitionBlocks: [
    {
      widget: "fraction-bars",
      narrative:
        "Build two fractions as bars, side by side, and look at the shaded amounts. When the denominators are the same, compare the tops. When they are different, rename both with the SAME bottom number, then compare.",
      prediction: "Before you build: which do you think is bigger — $\\frac{1}{2}$ or $\\frac{2}{3}$?",
    },
  ],
  formalBlocks: [
    {
      definition:
        "To compare fractions: (1) If the denominators are the same, the one with the bigger NUMERATOR is bigger. (2) If not, rename both using a COMMON denominator (a shared bottom number — the LCM of the two bottoms), then compare the numerators.",
      examples: [
        "$\\frac{3}{7} < \\frac{5}{7}$ — same sevenths, so 3 of them is less than 5 of them.",
        "Compare $\\frac{2}{3}$ and $\\frac{3}{5}$: rename as tenths? No — common denominator 15: $\\frac{2}{3} = \\frac{10}{15}$ and $\\frac{3}{5} = \\frac{9}{15}$. Since 10 > 9, $\\frac{2}{3} > \\frac{3}{5}$.",
      ],
      pitfall:
        "Never compare just the top numbers when the bottoms differ. $\\frac{5}{8}$ and $\\frac{4}{6}$: 5 > 4 but $\\frac{4}{6} = \\frac{2}{3} = \\frac{16}{24}$ and $\\frac{5}{8} = \\frac{15}{24}$, so $\\frac{4}{6}$ is actually bigger! Rename first.", altExplanations: ["FOOD: comparing 3/7 and 5/7 is choosing between cake slices of the same size — more slices, more cake. Different sizes (3/5 vs 2/3) must be re-cut into equal slices first: common denominator 15.", "SPORTS: times on the same track (same denominator) compare directly; different tracks need converting to the same distance. Rename to a common unit before judging."],
    },
  ],
  gutChecks: [
    {
      prompt: "Before you scroll: which is bigger — $\\frac{2}{5}$ or $\\frac{3}{5}$?",
      answer: "$\\frac{3}{5}$ — same fifths, and 3 of them is more than 2 of them.",
    },
  ],
  quiz: {
    pool: [
      {
        id: "L3-mcq-1",
        type: "mcq",
        category: "procedural",
        prompt: "Which is bigger: $\\frac{5}{9}$ or $\\frac{2}{9}$?",
        options: [
          { id: "a", text: "$\\frac{5}{9}$" },
          { id: "b", text: "$\\frac{2}{9}$" },
          { id: "c", text: "They are equal." },
          { id: "d", text: "It depends on the whole." },
        ],
        correctOptionId: "a",
        diagnoses: {
          b: "Both are ninths — same size parts. 5 of them is more than 2 of them.",
          c: "Same denominator means compare numerators: 5 vs 2. They are different amounts.",
          d: "For the SAME whole, ninths are the same size, so we can compare directly.",
        },
        explanation: "Same denominator (ninths), so the bigger numerator wins: 5 > 2, so $\\frac{5}{9} > \\frac{2}{9}$.",
        hints: [
          "Are the denominators the same?",
          "The parts are both ninths — same size slices.",
          "How many ninths does each have? 5 is more than 2.",
        ],
      },
      {
        id: "L3-mcq-2",
        type: "mcq",
        category: "conceptual",
        prompt: "Why can't you compare $\\frac{2}{3}$ and $\\frac{4}{5}$ by just looking at the numerators?",
        options: [
          { id: "a", text: "Because 4 is bigger than 2." },
          { id: "b", text: "Because the parts (thirds vs fifths) are different sizes." },
          { id: "c", text: "Because the denominators are both odd." },
          { id: "d", text: "You can — numerators are all that matter." },
        ],
        correctOptionId: "b",
        diagnoses: {
          a: "4 IS bigger than 2, but the parts being counted are different sizes — a fifth is smaller than a third. You must rename to the same part size first.",
          c: "Odd denominators don't block comparison. The real issue is different-sized parts.",
          d: "Numerators only compare directly when the denominators are the same.",
        },
        explanation: "Thirds and fifths are different-sized slices. $\\frac{2}{3}$ means 2 big thirds; $\\frac{4}{5}$ means 4 small fifths. Rename both (common denominator 15) to compare fairly.",
        hints: [
          "What size are the parts in $\\frac{2}{3}$? What size in $\\frac{4}{5}$?",
          "Are thirds and fifths the same size?",
          "Different-sized parts need renaming to a common denominator before comparing.",
        ],
      },
      {
        id: "L3-mcq-3",
        type: "mcq",
        category: "word",
        prompt: "Aya runs $\\frac{3}{4}$ km. Ben runs $\\frac{2}{3}$ km. Who runs farther?",
        options: [
          { id: "a", text: "Same distance" },
          { id: "b", text: "Ben" },
          { id: "c", text: "Aya" },
          { id: "d", text: "Cannot tell" },
        ],
        correctOptionId: "c",
        diagnoses: {
          b: "Rename both: $\\frac{3}{4} = \\frac{9}{12}$ and $\\frac{2}{3} = \\frac{8}{12}$. Since 9 > 8, Aya ran farther.",
          a: "$\\frac{3}{4}$ and $\\frac{2}{3}$ are not equal: $\\frac{9}{12}$ vs $\\frac{8}{12}$.",
          d: "We can tell — same unit (km), common denominator 12: Aya has 9 twelfths, Ben has 8.",
        },
        explanation: "Common denominator 12: $\\frac{3}{4} = \\frac{9}{12}$ and $\\frac{2}{3} = \\frac{8}{12}$. 9 > 8, so Aya ran farther.",
        hints: [
          "Can you rename both with a common denominator?",
          "What is the LCM of 4 and 3?",
          "$\\frac{3}{4} = \\frac{9}{12}$ vs $\\frac{2}{3} = \\frac{8}{12}$ — Aya wins.",
        ],
      },
      {
        id: "L3-mcq-4",
        type: "mcq",
        category: "conceptual",
        prompt: "Which of these is the LARGEST?",
        options: [
          { id: "a", text: "$\\frac{2}{5}$" },
          { id: "b", text: "Can't tell without renaming" },
          { id: "c", text: "$\\frac{3}{7}$" },
          { id: "d", text: "$\\frac{1}{2}$" },
        ],
        correctOptionId: "d",
        diagnoses: {
          a: "Rename to common denominator 70: $\\frac{2}{5} = \\frac{28}{70}$, $\\frac{1}{2} = \\frac{35}{70}$, $\\frac{3}{7} = \\frac{30}{70}$. $\\frac{1}{2}$ is largest.",
          c: "$\\frac{3}{7} = \\frac{30}{70}$, but $\\frac{1}{2} = \\frac{35}{70}$ — half is more.",
          b: "We CAN tell — a common denominator settles it: halves win.",
        },
        explanation: "Rename: $\\frac{2}{5} = \\frac{28}{70}$, $\\frac{1}{2} = \\frac{35}{70}$, $\\frac{3}{7} = \\frac{30}{70}$. Largest is $\\frac{1}{2}$.",
        hints: [
          "Pick a common denominator for 5, 2, and 7.",
          "Their LCM is 70.",
          "Compare 28, 35, 30 seventieths — the biggest is 35, which is $\\frac{1}{2}$.",
        ],
      },
      {
        id: "L3-mcq-5",
        type: "mcq",
        category: "word",
        prompt: "A juice bottle is $\\frac{1}{4}$ full. A second identical bottle is $\\frac{3}{8}$ full. Which has more juice?",
        options: [
          { id: "a", text: "The $\\frac{3}{8}$ bottle" },
          { id: "b", text: "The $\\frac{1}{4}$ bottle" },
          { id: "c", text: "Same amount" },
          { id: "d", text: "Depends on the bottle size" },
        ],
        correctOptionId: "a",
        diagnoses: {
          b: "Rename: $\\frac{1}{4} = \\frac{2}{8}$, and $\\frac{3}{8}$ is more than $\\frac{2}{8}$.",
          c: "$\\frac{1}{4} = \\frac{2}{8}$, not $\\frac{3}{8}$. The $\\frac{3}{8}$ bottle has 1 more eighth.",
          d: "Both bottles are identical, so the bigger fraction means more juice.",
        },
        explanation: "$\\frac{1}{4} = \\frac{2}{8}$. Compare $\\frac{2}{8}$ vs $\\frac{3}{8}$: the $\\frac{3}{8}$ bottle has more juice.",
        hints: [
          "Rename the quarter to eighths.",
          "$\\frac{1}{4}$ is how many eighths?",
          "2 eighths vs 3 eighths — which is more?",
        ],
      },
      {
        id: "L3-num-1",
        type: "numeric-input",
        category: "procedural",
        prompt: "Compare $\\frac{2}{3}$ and $\\frac{5}{6}$. After renaming both with a common denominator, what is the numerator of $\\frac{2}{3}$?",
        answer: 4,
        tolerance: 0,
        explanation: "$\\frac{2}{3} = \\frac{2 \\times 2}{3 \\times 2} = \\frac{4}{6}$ — so the renamed numerator is 4 (and 4 < 5, so $\\frac{5}{6}$ is bigger).",
        hints: [
          "What common denominator works for 3 and 6?",
          "6 is the LCM. Multiply top and bottom of $\\frac{2}{3}$ by 2.",
          "2×2 = 4.",
        ],
      },
      {
        id: "L3-tf-1",
        type: "true-false-justify",
        category: "conceptual",
        prompt: "$\\frac{7}{8}$ is bigger than $\\frac{3}{4}$.",
        isTrue: true,
        explanation: "$\\frac{3}{4} = \\frac{6}{8}$. Comparing $\\frac{7}{8}$ and $\\frac{6}{8}$: 7 > 6, so yes, $\\frac{7}{8}$ is bigger.",
        hints: [
          "Rename $\\frac{3}{4}$ with denominator 8.",
          "$\\frac{3}{4} = \\frac{6}{8}$.",
          "7 eighths > 6 eighths → true.",
        ],
      },
      {
        id: "L3-mcq-6",
        type: "mcq",
        category: "procedural",
        prompt: "Which is the SMALLEST?",
        options: [
          { id: "a", text: "$\\frac{1}{2}$" },
          { id: "b", text: "$\\frac{2}{5}$" },
          { id: "c", text: "$\\frac{3}{10}$" },
        ],
        correctOptionId: "c",
        diagnoses: {
          b: "Rename to tenths: $\\frac{2}{5} = \\frac{4}{10}$. Compare 3, 4, 5 tenths — $\\frac{3}{10}$ is smallest.",
          a: "$\\frac{1}{2} = \\frac{5}{10}$ — that's the largest, not the smallest.",
        },
        explanation: "Rename to tenths: $\\frac{3}{10}$, $\\frac{2}{5} = \\frac{4}{10}$, $\\frac{1}{2} = \\frac{5}{10}$. Smallest is $\\frac{3}{10}$.",
        hints: [
          "Give all three a common denominator of 10.",
          "$\\frac{2}{5}$ and $\\frac{1}{2}$ become 4 and 5 tenths.",
          "3 tenths is the smallest.",
        ],
      },
      {
        id: "L3-mcq-7",
        type: "mcq",
        category: "conceptual",
        prompt: "Which is bigger, $\\frac{5}{9}$ or $\\frac{4}{7}$?",
        options: [
          { id: "a", text: "Equal" },
          { id: "b", text: "$\\frac{5}{9}$" },
          { id: "c", text: "$\\frac{4}{7}$" },
          { id: "d", text: "Cannot tell" },
        ],
        correctOptionId: "c",
        diagnoses: {
          b: "Rename: LCM 63. $\\frac{5}{9} = \\frac{35}{63}$, $\\frac{4}{7} = \\frac{36}{63}$ — 36 > 35, so $\\frac{4}{7}$ wins.",
          a: "Different fractions rename differently — check with a common denominator.",
          d: "A common denominator always settles comparisons.",
        },
        explanation: "$\\frac{5}{9} = \\frac{35}{63}$ and $\\frac{4}{7} = \\frac{36}{63}$. 36 > 35, so $\\frac{4}{7}$ is bigger.",
        hints: [
          "Find a common denominator: 63.",
          "5×7 = 35; 4×9 = 36.",
          "36/63 wins — $\\frac{4}{7}$.",
        ],
      },
      {
        id: "L3-num-2",
        type: "numeric-input",
        category: "procedural",
        prompt: "Compare $\\frac{3}{5}$ and $\\frac{7}{10}$. What is the numerator of $\\frac{3}{5}$ after renaming to tenths?",
        answer: 6,
        tolerance: 0,
        explanation: "$\\frac{3}{5} = \\frac{3 \\times 2}{5 \\times 2} = \\frac{6}{10}$ — so 6 (and 6 < 7, so $\\frac{7}{10}$ is bigger).",
        hints: ["Rename 3/5 into tenths.", "5 × 2 = 10, 3 × 2 = 6.", "6."],
      },
      {
        id: "L3-num-3",
        type: "numeric-input",
        category: "conceptual",
        prompt: "How many eighths are equal to $\\frac{1}{2}$?",
        answer: 4,
        tolerance: 0,
        explanation: "$\\frac{1}{2} = \\frac{4}{8}$ — four eighths.",
        hints: ["Half of the eighths line.", "1×4 / 2×4.", "4."],
      },
      {
        id: "L3-tf-2",
        type: "true-false-justify",
        category: "conceptual",
        prompt: "$\\frac{5}{6}$ is greater than $\\frac{2}{3}$.",
        isTrue: true,
        explanation: "$\\frac{2}{3} = \\frac{4}{6}$; 5 > 4, so yes.",
        hints: ["Rename 2/3 to sixths.", "4/6 vs 5/6.", "True."],
      },
      {
        id: "L3-frac-1",
        type: "fraction-input",
        category: "conceptual",
        prompt: "Which is larger: $\\frac{2}{3}$ or $\\frac{3}{4}$? Type the larger as a fraction with denominator 12.",
        numerator: 9,
        denominator: 12,
        acceptEquivalent: true,
        explanation: "$\\frac{3}{4} = \\frac{9}{12}$ is larger than $\\frac{2}{3} = \\frac{8}{12}$.",
        hints: ["Rename both to twelfths.", "8/12 vs 9/12.", "9/12."],
      },
      {
        id: "L3-order-1",
        type: "order-steps",
        category: "word",
        prompt: "Order the steps to compare $\\frac{3}{4}$ and $\\frac{5}{6}$.",
        sequence: ["Find LCM of 4 and 6: 12", "Rename 3/4 to 9/12", "Rename 5/6 to 10/12", "Compare 9/12 < 10/12"],
        diagnoses: {
          "Rename 3/4 to 9/12@0": "Find the common denominator first.",
          "Rename 5/6 to 10/12@0": "Rename the other fraction too.",
          "Compare 9/12 < 10/12@0": "Comparing is the final step.",
        },
        explanation: "Common denominator 12 settles 9/12 < 10/12.",
        hints: ["Least common multiple of 4 and 6.", "Rename both.", "Compare numerators."],
      },
      {
        id: "L3-drag-1",
        type: "drag-match",
        category: "conceptual",
        prompt: "Match each fraction to its equivalent form.",
        pairs: [
          { source: "$\\frac{1}{2}$", target: "$\\frac{4}{8}$" },
          { source: "$\\frac{2}{3}$", target: "$\\frac{8}{12}$" },
          { source: "$\\frac{3}{4}$", target: "$\\frac{9}{12}$" },
        ],
        diagnoses: {
          "$\\frac{1}{2}$->$\\frac{8}{12}$": "Half is 4/8, not 8/12.",
          "$\\frac{2}{3}$->$\\frac{4}{8}$": "2/3 is 8/12, not 4/8.",
          "$\\frac{3}{4}$->$\\frac{8}{12}$": "3/4 = 9/12.",
        },
        explanation: "1/2 = 4/8; 2/3 = 8/12; 3/4 = 9/12.",
        hints: ["Double a half to quarters.", "Scale 2/3 up by 4.", "Scale 3/4 up by 3."],
      },
      {
        id: "L3-graph-1",
        type: "graph-interact",
        category: "word",
        prompt: "Slider (key: value): set it to the value of the LARGER of $\\frac{3}{4}$ and $\\frac{5}{6}$ as a decimal.",
        challenge: "Set the slider to 0.833.",
        validate: { value: 0.833 },
        tolerance: 0.02,
        explanation: "5/6 ≈ 0.833 is larger than 3/4 = 0.75.",
        hints: ["5/6 as a decimal.", "0.833.", "Set the slider there."],
      },
    ],
    selection: { procedural: 2, conceptual: 2, word: 1 },
    passThreshold: 0.8,
  },
  commonMistakes: [
    {
      wrongPattern: "compares numerators without common denominator",
      diagnosis:
        "Bigger top number only means bigger fraction when the bottoms are the SAME. With different denominators, you must rename both first.",
      hint: "Give both fractions the same bottom number (common denominator), then compare the tops.",
    },
    {
      wrongPattern: "compares denominators instead",
      diagnosis:
        "Smaller denominator doesn't always mean bigger fraction. $\\frac{3}{4}$ beats $\\frac{5}{6}$? Let's see: $\\frac{9}{12}$ vs $\\frac{10}{12}$ — no, $\\frac{5}{6}$ wins. Rename and compare the TOPS.",
      hint: "After renaming to a common denominator, compare numerators — not denominators.",
    },
    {
      wrongPattern: "wrong common denominator",
      diagnosis:
        "The common denominator must be a number BOTH bottoms divide into evenly. Using a random big number like 30 for thirds and fifths is fine, but 20 is NOT a multiple of 3.",
      hint: "Use the LCM of the two denominators, or any common multiple — but it must be a multiple of BOTH.",
    },
  ],
  recallTags: ["fractions", "comparing"],
  discovery: {
    challenges: [
      { instruction: "Build $\\frac{1}{2}$ and $\\frac{2}{3}$ as two bars side by side.", observe: "The halves and thirds don't line up — different-sized pieces." },
      { instruction: "Rename both as sixths.", observe: "$\\frac{3}{6}$ vs $\\frac{4}{6}$ — now the comparison is just 3 against 4." },
    ],
    predict: {
      prompt: "Which do you think is bigger: $\\frac{1}{2}$ or $\\frac{2}{3}$?",
      options: [
        { id: "a", text: "$\\frac{1}{2}$" },
        { id: "b", text: "$\\frac{2}{3}$" },
      ],
      reveal: "$\\frac{2}{3}$ — as sixths it's $\\frac{4}{6}$, which beats $\\frac{3}{6}$ (one half).",
    },
    sayItYourWay: {
      prompt: "When can you compare two fractions by just looking at the top numbers?",
      phrasings: [
        { id: "a", text: "When the bottom numbers are the same", correct: true, why: "Same-size pieces mean you just count: the bigger top number wins." },
        { id: "b", text: "When the top numbers are bigger than the bottom", correct: false, why: "The size of the pieces (denominator) is what must match, not whether the fraction is improper." },
        { id: "c", text: "Whenever the fractions are similar", correct: false, why: "Similar-looking doesn't matter — only a common denominator lets you compare tops directly." },
      ],
      formalName: "common denominator",
    },
    stretch: "If $\\frac{2}{3}$ beats $\\frac{1}{2}$, what about $\\frac{3}{4}$ vs $\\frac{2}{3}$? Can you rank all three?",
  },
};
