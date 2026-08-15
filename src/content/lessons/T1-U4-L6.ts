import type { Lesson } from "../schema";

export const T1U4L6: Lesson = {
  id: "T1-U4-L6",
  tier: 1,
  unit: "Fractions",
  title: "Dividing Fractions: Why 'Flip and Multiply' Works",
  prerequisites: ["T1-U3-L4","T1-U4-L5"],
  estimatedMinutes: 14,
  hook: {
    question:
      "You have $\\frac{1}{2}$ a pizza. How many $\\frac{1}{4}$-pizza slices can you make? Draw it: the answer is 2. But dividing $\\frac{1}{2} \\div \\frac{1}{4}$ by 'turning it upside down' gives $\\frac{1}{2} \\times \\frac{4}{1} = 2$. Why does flipping work?",
    type: "paradox",
  },
  intuitionBlocks: [
    {
      widget: "fraction-bars",
      narrative:
        "Division asks 'How many of THIS fit into THAT?' Put a $\\frac{1}{2}$ bar. Then count how many $\\frac{1}{4}$ bars fit along it — exactly 2. Now try $\\frac{3}{4} \\div \\frac{1}{8}$: count how many eighths fill three quarters — 6 of them! You are counting how many of the small piece fit.",
      prediction: "Before you count: how many eighths fit into $\\frac{3}{4}$?",
    },
  ],
  formalBlocks: [
    {
      definition:
        "To divide by a fraction, multiply by its RECIPROCAL (the flipped-over fraction): $\\frac{a}{b} \\div \\frac{c}{d} = \\frac{a}{b} \\times \\frac{d}{c}$. WHY: dividing by $\\frac{1}{2}$ asks 'how many halves fit in?' — that's the same as multiplying by 2. Dividing by $\\frac{1}{4}$ is the same as multiplying by 4. In general, dividing by $\\frac{c}{d}$ is the same as multiplying by $\\frac{d}{c}$ because $\\frac{c}{d} \\times \\frac{d}{c} = 1$.",
      examples: [
        "$\\frac{1}{2} \\div \\frac{1}{4} = \\frac{1}{2} \\times \\frac{4}{1} = \\frac{4}{2} = 2$. Indeed 2 quarter-slices fit in a half-pizza.",
        "$\\frac{3}{4} \\div \\frac{1}{8} = \\frac{3}{4} \\times \\frac{8}{1} = \\frac{24}{4} = 6$. Six eighths fill three quarters.",
      ],
      pitfall:
        "Only the SECOND fraction flips — the one you're dividing BY. $\\frac{1}{2} \\div \\frac{1}{4}$ flips $\\frac{1}{4}$, NOT $\\frac{1}{2}$. Flipping the wrong one gives $\\frac{1}{4}$ instead of 2 — a big difference!", altExplanations: ["FOOD: 1/2 a pizza ÷ 1/4 asks 'how many quarter-slices fit in a half?' Two — same as ×4/1. Flipping the divisor counts the smaller slices that fill the bigger piece.", "GAME: a 3/4-full bottle ÷ 1/8 asks how many 1/8 measures fill it: six. Flip only the second fraction — the one you're dividing BY — to count the smaller units."],
    },
  ],
  gutChecks: [
    {
      prompt: "Before you scroll: $\\frac{1}{3} \\div \\frac{1}{6}$ — will the answer be bigger or smaller than $\\frac{1}{3}$?",
      answer: "Bigger — dividing by a fraction less than 1 asks how many fit in, and 2 sixths fit into a third, so the answer is 2.",
    },
  ],
  quiz: {
    pool: [
      {
        id: "L6-mcq-1",
        type: "mcq",
        category: "procedural",
        prompt: "What is $\\frac{1}{2} \\div \\frac{1}{4}$?",
        options: [
          { id: "a", text: "2" },
          { id: "b", text: "$\\frac{1}{8}$" },
          { id: "c", text: "$\\frac{1}{2}$" },
          { id: "d", text: "4" },
        ],
        correctOptionId: "a",
        diagnoses: {
          b: "You multiplied without flipping: $\\frac{1}{2} \\times \\frac{1}{4} = \\frac{1}{8}$. That's multiplication, not division. Flip the second fraction: $\\frac{1}{2} \\times \\frac{4}{1} = 2$.",
          c: "You flipped the wrong fraction — the first one. Only the fraction AFTER ÷ flips.",
          d: "Four quarters would fill a whole pizza, but you only have half a pizza. 2 quarter-slices fit.",
        },
        explanation: "$\\frac{1}{2} \\div \\frac{1}{4} = \\frac{1}{2} \\times \\frac{4}{1} = \\frac{4}{2} = 2$. Two quarters fit in a half.",
        hints: [
          "Flip the second fraction ($\\frac{1}{4}$ becomes $\\frac{4}{1}$).",
          "Now multiply: $\\frac{1}{2} \\times \\frac{4}{1}$.",
          "4/2 = 2.",
        ],
      },
      {
        id: "L6-mcq-2",
        type: "mcq",
        category: "conceptual",
        prompt: "Why is $\\frac{1}{2} \\div \\frac{1}{4} = 2$?",
        options: [
          { id: "a", text: "Because 2 is double 1." },
          { id: "b", text: "Because we count how many quarters fit inside a half — and 2 do." },
          { id: "c", text: "Because $\\frac{1}{4}$ is smaller than $\\frac{1}{2}$." },
          { id: "d", text: "Because we multiply the numerators only." },
        ],
        correctOptionId: "b",
        diagnoses: {
          a: "Doubling isn't the reason — the reason is counting how many $\\frac{1}{4}$ pieces fit into $\\frac{1}{2}$.",
          c: "Being smaller matters, but the exact answer comes from COUNTING how many quarters fill the half: exactly 2.",
          d: "You multiply numerators AND denominators after flipping.",
        },
        explanation: "Division asks 'how many of the second fit into the first?' Two quarter-pieces exactly fill a half-piece, so the answer is 2.",
        hints: [
          "What does division of fractions ask?",
          "How many $\\frac{1}{4}$ bars fit along a $\\frac{1}{2}$ bar?",
          "Exactly 2 fit.",
        ],
      },
      {
        id: "L6-mcq-3",
        type: "mcq",
        category: "word",
        prompt: "Aya has $\\frac{3}{4}$ litre of juice. She pours it into cups that hold $\\frac{1}{8}$ litre. How many cups can she fill?",
        options: [
          { id: "a", text: "6 cups" },
          { id: "b", text: "3 cups" },
          { id: "c", text: "8 cups" },
          { id: "d", text: "$\\frac{3}{32}$ cups" },
        ],
        correctOptionId: "a",
        diagnoses: {
          b: "3 cups would be $\\frac{3}{8}$ litre — only half of what she has. $\\frac{3}{4} \\div \\frac{1}{8} = \\frac{3}{4} \\times 8 = 6$.",
          c: "8 eighths fill a whole litre, but she has only $\\frac{3}{4}$ of a litre — 6 eighths fit.",
          d: "That's $\\frac{3}{4} \\times \\frac{1}{8}$ (multiplying without flipping). Divide instead: flip the eighth: $\\frac{3}{4} \\times 8 = 6$.",
        },
        explanation: "$\\frac{3}{4} \\div \\frac{1}{8} = \\frac{3}{4} \\times \\frac{8}{1} = \\frac{24}{4} = 6$ cups.",
        hints: [
          "How many eighths fit into $\\frac{3}{4}$?",
          "$\\frac{3}{4} \\div \\frac{1}{8}$ — flip the eighth.",
          "$\\frac{3}{4} \\times 8 = 6$.",
        ],
      },
      {
        id: "L6-mcq-4",
        type: "mcq",
        category: "procedural",
        prompt: "What is $\\frac{2}{3} \\div \\frac{4}{5}$?",
        options: [
          { id: "a", text: "$\\frac{10}{12}$" },
          { id: "b", text: "$\\frac{5}{6}$" },
          { id: "c", text: "$\\frac{8}{15}$" },
          { id: "d", text: "$\\frac{1}{2}$" },
        ],
        correctOptionId: "b",
        diagnoses: {
          a: "$\\frac{10}{12}$ is $\\frac{2}{3} \\times \\frac{5}{4}$? Yes! But simplify: 10/12 = 5/6.",
          c: "You multiplied without flipping: $\\frac{2}{3} \\times \\frac{4}{5}$. Flip the second: $\\frac{2}{3} \\times \\frac{5}{4} = \\frac{10}{12} = \\frac{5}{6}$.",
          d: "Check: $\\frac{2}{3} \\times \\frac{5}{4} = \\frac{10}{12} = \\frac{5}{6}$, not $\\frac{1}{2}$.",
        },
        explanation: "$\\frac{2}{3} \\div \\frac{4}{5} = \\frac{2}{3} \\times \\frac{5}{4} = \\frac{10}{12} = \\frac{5}{6}$.",
        hints: [
          "Flip the second fraction.",
          "$\\frac{2}{3} \\times \\frac{5}{4}$.",
          "10/12 simplifies to 5/6.",
        ],
      },
      {
        id: "L6-mcq-5",
        type: "mcq",
        category: "conceptual",
        prompt: "What is $5 \\div \\frac{1}{2}$?",
        options: [
          { id: "a", text: "$\\frac{5}{2}$" },
          { id: "b", text: "10" },
          { id: "c", text: "$\\frac{1}{10}$" },
          { id: "d", text: "5" },
        ],
        correctOptionId: "b",
        diagnoses: {
          a: "That's $5 \\times \\frac{1}{2}$ (you flipped 5 instead of the half). Dividing by $\\frac{1}{2}$ is doubling: $5 \\div \\frac{1}{2} = 5 \\times 2 = 10$.",
          c: "You flipped the wrong fraction and also inverted 5. $5 = \\frac{5}{1}$, so $\\frac{5}{1} \\div \\frac{1}{2} = \\frac{5}{1} \\times \\frac{2}{1} = 10$.",
          d: "Dividing by a half DOUBLES the count — how many halves fit in 5 wholes? 10.",
        },
        explanation: "How many halves fit in 5 wholes? 10. $5 \\div \\frac{1}{2} = \\frac{5}{1} \\times \\frac{2}{1} = 10$.",
        hints: [
          "Write 5 as $\\frac{5}{1}$.",
          "Flip the $\\frac{1}{2}$ and multiply.",
          "$\\frac{5}{1} \\times \\frac{2}{1} = 10$.",
        ],
      },
      {
        id: "L6-mcq-6",
        type: "mcq",
        category: "word",
        prompt: "A ribbon of length $\\frac{5}{6}$ m is cut into pieces of length $\\frac{1}{6}$ m. How many pieces?",
        options: [
          { id: "a", text: "5 pieces" },
          { id: "b", text: "6 pieces" },
          { id: "c", text: "$\\frac{5}{6}$ pieces" },
          { id: "d", text: "1 piece" },
        ],
        correctOptionId: "a",
        diagnoses: {
          b: "6 sixths make a whole metre. You have only $\\frac{5}{6}$ m, so you get 5 pieces.",
          c: "That's $\\frac{5}{6} \\times \\frac{1}{6}$ — you multiplied instead of dividing. $\\frac{5}{6} \\div \\frac{1}{6} = \\frac{5}{6} \\times 6 = 5$.",
          d: "You cut into sixths, so more than one piece. Count: 5 sixth-pieces fit.",
        },
        explanation: "$\\frac{5}{6} \\div \\frac{1}{6} = \\frac{5}{6} \\times \\frac{6}{1} = 5$ pieces.",
        hints: [
          "How many sixth-metre pieces fit in $\\frac{5}{6}$ m?",
          "$\\frac{5}{6} \\div \\frac{1}{6}$ — flip the sixth.",
          "$\\frac{5}{6} \\times 6 = 5$.",
        ],
      },
      {
        id: "L6-frac-1",
        type: "fraction-input",
        category: "procedural",
        prompt: "Compute $\\frac{3}{8} \\div \\frac{3}{4}$. Write the answer as a fraction.",
        numerator: 1,
        denominator: 2,
        acceptEquivalent: false,
        explanation: "$\\frac{3}{8} \\div \\frac{3}{4} = \\frac{3}{8} \\times \\frac{4}{3} = \\frac{12}{24} = \\frac{1}{2}$.",
        hints: [
          "Flip the second fraction: $\\frac{4}{3}$.",
          "$\\frac{3}{8} \\times \\frac{4}{3} = \\frac{12}{24}$.",
          "Simplify: $\\frac{1}{2}$.",
        ],
      },
      {
        id: "L6-num-1",
        type: "numeric-input",
        category: "procedural",
        prompt: "What is $\\frac{3}{4} \\div \\frac{1}{2}$? Give your answer as a whole number.",
        answer: 1.5,
        tolerance: 0.05,
        acceptFractions: true,
        explanation: "$\\frac{3}{4} \\div \\frac{1}{2} = \\frac{3}{4} \\times \\frac{2}{1} = \\frac{6}{4} = \\frac{3}{2} = 1.5$. One and a half halves fit in three quarters.",
        hints: [
          "Flip the half and multiply.",
          "$\\frac{3}{4} \\times \\frac{2}{1} = \\frac{6}{4}$.",
          "$\\frac{6}{4} = \\frac{3}{2} = 1.5$.",
        ],
      },
      {
        id: "L6-mcq-7",
        type: "mcq",
        category: "conceptual",
        prompt: "What does $\\frac{3}{4} \\div \\frac{1}{8}$ ask you to find?",
        options: [
          { id: "a", text: "How many eighths fit in three quarters" },
          { id: "b", text: "How many quarters fit in eight" },
          { id: "c", text: "The product of the two fractions" },
          { id: "d", text: "The sum of the two fractions" },
        ],
        correctOptionId: "a",
        diagnoses: {
          b: "Division asks how many of the SECOND fit into the FIRST — eighths into three quarters.",
          c: "That's multiplication, not division.",
          d: "That's addition, not division.",
        },
        explanation: "Division of fractions asks how many of the divisor fit into the dividend.",
        hints: ["What is '÷' asking?", "How many 1/8 slices in 3/4?", "'How many... fit in...'"],
      },
      {
        id: "L6-num-2",
        type: "numeric-input",
        category: "procedural",
        prompt: "Type the answer to $\\frac{1}{3} \\div \\frac{1}{9}$.", answer: 3, tolerance: 0,
        explanation: "$\\frac{1}{3} \\times \\frac{9}{1} = \\frac{9}{3} = 3$ — three ninths fit in a third.",
        hints: ["Flip the ninth.", "1/3 × 9/1.", "9/3 = 3."],
      },
      {
        id: "L6-num-3",
        type: "numeric-input",
        category: "conceptual",
        prompt: "How many $\\frac{1}{5}$-pieces fit into $\\frac{4}{5}$?", answer: 4, tolerance: 0,
        explanation: "$\\frac{4}{5} \\div \\frac{1}{5} = \\frac{4}{5} \\times \\frac{5}{1} = \\frac{20}{5} = 4$.",
        hints: ["Same denominator.", "4 fifths ÷ 1 fifth.", "4."],
      },
      {
        id: "L6-tf-1",
        type: "true-false-justify",
        category: "conceptual",
        prompt: "$\\frac{2}{3} \\div \\frac{2}{3} = 1$",
        isTrue: true,
        explanation: "Anything divided by itself equals 1. $\\frac{2}{3} \\times \\frac{3}{2} = \\frac{6}{6} = 1$.",
        hints: ["Dividing by a number cancels it.", "Anything ÷ itself = 1.", "True."],
      },
      {
        id: "L6-tf-2",
        type: "true-false-justify",
        category: "conceptual",
        prompt: "$\\frac{1}{4} \\div 2 = \\frac{1}{8}$",
        isTrue: true,
        explanation: "$\\frac{1}{4} \\div \\frac{2}{1} = \\frac{1}{4} \\times \\frac{1}{2} = \\frac{1}{8}$ — splitting a quarter in half.",
        hints: ["Write 2 as 2/1.", "Flip it: 1/2.", "1/8 — true."],
      },
      {
        id: "L6-order-1",
        type: "order-steps",
        category: "word",
        prompt: "Order the steps to compute $\\frac{3}{5} \\div \\frac{2}{7}$.",
        sequence: ["Write 3/5", "Flip the divisor: 7/2", "Multiply: (3×7)/(5×2)", "Get 21/10"],
        diagnoses: {
          "Flip the divisor: 7/2@0": "Write the dividend first.",
          "Multiply: (3×7)/(5×2)@0": "Multiply only after flipping.",
          "Get 21/10@0": "21/10 is the final result.",
        },
        explanation: "Flip the second fraction, then multiply straight across.",
        hints: ["Dividend.", "Flip divisor.", "Multiply."],
      },
      {
        id: "L6-drag-1",
        type: "drag-match",
        category: "conceptual",
        prompt: "Match each division to its answer.",
        pairs: [
          { source: "$\\frac{1}{2} \\div \\frac{1}{4}$", target: "2" },
          { source: "$\\frac{2}{3} \\div \\frac{1}{3}$", target: "2" },
          { source: "$\\frac{3}{4} \\div \\frac{1}{8}$", target: "6" },
        ],
        diagnoses: {
          "$\\frac{1}{2} \\div \\frac{1}{4}$->6": "Two quarters fit in a half — answer 2.",
          "$\\frac{2}{3} \\div \\frac{1}{3}$->6": "Two thirds divided by a third = 2.",
          "$\\frac{3}{4} \\div \\frac{1}{8}$->2": "3/4 × 8 = 6, not 2.",
        },
        explanation: "Each flips the divisor and multiplies: 2, 2, 6.",
        hints: ["1/2 × 4.", "2/3 × 3.", "3/4 × 8."],
      },
      {
        id: "L6-graph-1",
        type: "graph-interact",
        category: "word",
        prompt: "Slider (key: value): set it to the decimal value of $\\frac{1}{2} \\div \\frac{1}{4}$.",
        challenge: "Set the slider to 2.",
        validate: { value: 2 },
        tolerance: 0.01,
        explanation: "1/2 ÷ 1/4 = 2.",
        hints: ["How many quarters in a half?", "2.", "Set the slider to 2."],
      },
    ],
    selection: { procedural: 2, conceptual: 2, word: 1 },
    passThreshold: 0.8,
  },
  commonMistakes: [
    {
      wrongPattern: "flips the wrong fraction",
      diagnosis:
        "You flipped the fraction you STARTED with instead of the fraction you divide BY. $\\frac{a}{b} \\div \\frac{c}{d} = \\frac{a}{b} \\times \\frac{d}{c}$ — only the second one flips.",
      hint: "The fraction AFTER the ÷ is the one that flips. Say: 'Flip the divisor, multiply.'",
    },
    {
      wrongPattern: "forgets to flip at all",
      diagnosis:
        "Dividing is not the same as multiplying. $\\frac{1}{2} \\div \\frac{1}{4}$ is 2, not $\\frac{1}{8}$. Flip the second fraction and multiply.",
      hint: "Flip the divisor (second fraction), then multiply straight across.",
    },
    {
      wrongPattern: "divides numerators and denominators separately",
      diagnosis:
        "Dividing across the top and bottom doesn't give the same meaning as division of amounts. Flip and multiply instead.",
      hint: "Use flip-and-multiply: $\\frac{a}{b} \\times \\frac{d}{c}$.",
    },
  ],
  recallTags: ["fractions", "division", "reciprocal"],
  discovery: {
    challenges: [
      { instruction: "Put a $\\frac{1}{2}$ bar. Count how many $\\frac{1}{4}$ bars fit along it.", observe: "Exactly 2 quarters fit in a half — so $\\frac{1}{2} \\div \\frac{1}{4} = 2$." },
      { instruction: "Now count how many $\\frac{1}{8}$ bars fit inside $\\frac{3}{4}$.", observe: "Six eighths fill three quarters — $\\frac{3}{4} \\div \\frac{1}{8} = 6$." },
    ],
    predict: {
      prompt: "Before you count: how many eighths fit into $\\frac{3}{4}$?",
      options: [
        { id: "a", text: "6" },
        { id: "b", text: "4" },
        { id: "c", text: "8" },
      ],
      reveal: "6 — because $\\frac{3}{4}$ is the same as $\\frac{6}{8}$, so six eighths fill it.",
    },
    sayItYourWay: {
      prompt: "Why can you 'flip and multiply' when dividing by a fraction?",
      phrasings: [
        { id: "a", text: "Because dividing asks how many of the divisor fit — flipping turns that into a multiplied count", correct: true, why: "Dividing by $\\frac{c}{d}$ is the same as multiplying by $\\frac{d}{c}$, because $\\frac{c}{d} \\times \\frac{d}{c} = 1$." },
        { id: "b", text: "Because the first fraction also always flips", correct: false, why: "Only the divisor (the fraction you divide BY) flips. The first fraction stays as-is." },
        { id: "c", text: "Because swap is just how division works", correct: false, why: "There's a real reason — count how many fit, and the reciprocal comes naturally." },
      ],
      formalName: "reciprocal",
    },
    stretch: "If $\\frac{1}{3} \\div \\frac{1}{6}$ needs sixth-pieces, what do you predict for $\\frac{2}{3} \\div \\frac{1}{6}$?",
  },
};
