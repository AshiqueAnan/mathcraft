import type { Lesson } from "../schema";

export const T1U4L1: Lesson = {
  id: "T1-U4-L1",
  tier: 1,
  unit: "Fractions",
  title: "What a Fraction Means",
  prerequisites: ["T1-U3-L4"],
  estimatedMinutes: 10,
  hook: {
    question:
      "Two friends share one pizza equally. You come along and want a fair slice too. Now three people share one pizza — is each person's slice bigger or smaller than before?",
    type: "real-world",
  },
  intuitionBlocks: [
    {
      widget: "fraction-bars",
      narrative:
        "Drag the slider to split the bar into more equal parts. Watch what happens to ONE part as the number of parts grows. That one part is written as $\\frac{1}{n}$ — '1 out of n equal parts'.",
      prediction:
        "Before you slide: if you split a pizza into 8 equal slices, is one slice bigger or smaller than a slice from a pizza split into 4?",
    },
    {
      widget: "fraction-circles",
      narrative:
        "Shade some parts of the circle. The shaded amount compared to the whole is a fraction: $\\frac{\\text{shaded}}{\\text{total parts}}$. Try shading 1 of 2, then 2 of 4. The shaded part looks the same size!",
    },
  ],
  formalBlocks: [
    {
      definition:
        "A fraction $\\frac{a}{b}$ means 'a parts out of b equal parts of a whole'. The bottom number $b$ (the denominator) tells HOW MANY equal parts the whole is cut into. The top number $a$ (the numerator) tells HOW MANY of those parts we take.",
      examples: [
        "$\\frac{3}{4}$ of a chocolate bar means the bar is split into 4 equal rows and you take 3 of them.",
        "$\\frac{2}{5}$ of a class means the class is split into 5 equal groups and you count 2 of those groups.",
      ],
      pitfall:
        "The denominator is NOT 'the number of parts you take' — it is the number of equal parts the whole is cut into. If you take 2 parts of a pizza cut into 5, that is $\\frac{2}{5}$ — the 5 is the total cuts, not the slices you grabbed.", altExplanations: ["FOOD: a pizza cut into 8 equal slices — the denominator 8 is the total slice count, the numerator is how many you take. Eating 3 slices is 3/8; the 8 never means 'the slices you grabbed'.", "GAME: a team of 11 players is the denominator — the whole. If 5 are defenders, 5/11 is the defender fraction; the 11 is the squad size, not the position count."],
    },
  ],
  gutChecks: [
    {
      prompt:
        "Before you scroll: a pizza cut into 6 slices — you eat 2. Which number is the denominator?",
      answer: "6 — the whole was cut into 6 equal parts. You ate 2 of them, so you ate $\\frac{2}{6}$.",
    },
  ],
  quiz: {
    pool: [
      {
        id: "L1-mcq-1",
        type: "mcq",
        category: "procedural",
        prompt: "A pizza is cut into 8 equal slices. You eat 3 slices. What fraction of the pizza did you eat?",
        options: [
          { id: "a", text: "$\\frac{3}{8}$" },
          { id: "b", text: "$\\frac{8}{3}$" },
          { id: "c", text: "$\\frac{3}{11}$" },
          { id: "d", text: "$\\frac{5}{8}$" },
        ],
        correctOptionId: "a",
        diagnoses: {
          b: "You flipped it! The denominator (bottom) is how many equal parts the whole was cut into (8). The numerator (top) is how many you took (3). So it is 3 out of 8, written $\\frac{3}{8}$.",
          c: "You added the parts together. The pizza was only cut into 8 slices — the 'whole' is still 8 slices, even after you eat some. You ate 3 out of 8.",
          d: "5 is how many slices are LEFT, not how many you ate. The fraction is about the parts you took: 3 out of 8.",
        },
        explanation: "The whole pizza was cut into 8 equal parts (denominator = 8). You took 3 of them (numerator = 3). So you ate $\\frac{3}{8}$ of the pizza.",
        hints: [
          "Which number tells how many equal parts the whole is cut into?",
          "The bottom number is the total number of equal slices — that is the denominator. How many slices is that?",
          "You ate 3 slices out of 8 total slices. Write it as 'parts you took / total parts'.",
        ],
      },
      {
        id: "L1-mcq-2",
        type: "mcq",
        category: "conceptual",
        prompt: "Two pizzas are the same size. Pizza A is cut into 4 slices, pizza B into 8 slices. You get one slice of each. Which statement is true?",
        options: [
          { id: "a", text: "Your slice of B is bigger than your slice of A." },
          { id: "b", text: "Your slice of A is bigger than your slice of B." },
          { id: "c", text: "Both slices are the same size." },
          { id: "d", text: "We can't tell without seeing the pizzas." },
        ],
        correctOptionId: "b",
        diagnoses: {
          a: "More slices means smaller slices, not bigger! Cutting A into 4 gives fewer, bigger pieces. Cutting B into 8 gives more, smaller pieces.",
          c: "The number of cuts changes the slice size. 1 out of 4 is a bigger share than 1 out of 8.",
          d: "We can tell — the pizzas are the same size, and 1 of 4 equal parts is larger than 1 of 8 equal parts.",
        },
        explanation: "With the same whole, splitting into FEWER equal parts makes each part BIGGER. A slice from a 4-cut pizza ($\\frac{1}{4}$) is bigger than a slice from an 8-cut pizza ($\\frac{1}{8}$).",
        hints: [
          "Close your eyes and picture cutting a pizza into 4 big slices. Then picture cutting an identical pizza into 8 small slices.",
          "Which cut makes the bigger slices — fewer cuts or more cuts?",
          "More cuts = smaller pieces. So 1 piece from a 4-cut pizza beats 1 piece from an 8-cut pizza.",
        ],
      },
      {
        id: "L1-mcq-3",
        type: "mcq",
        category: "word",
        prompt: "A bar of chocolate has 12 equal squares. Aya eats 5. What fraction of the bar does Aya eat?",
        options: [
          { id: "a", text: "$\\frac{5}{7}$" },
          { id: "b", text: "$\\frac{12}{5}$" },
          { id: "c", text: "$\\frac{5}{12}$" },
          { id: "d", text: "$\\frac{7}{12}$" },
        ],
        correctOptionId: "c",
        diagnoses: {
          b: "12 is the total equal parts of the whole bar — that goes on the bottom. Aya ate 5 of them, so 5 goes on top.",
          a: "7 is how many squares are left — but the fraction is about what Aya ATE, compared to the whole bar (12), not compared to what's left.",
          d: "You found the fraction that is LEFT (7 out of 12). The question asks what Aya ATE — 5 out of 12.",
        },
        explanation: "The whole bar is 12 equal squares. Aya ate 5 of them. Fraction eaten = $\\frac{5}{12}$.",
        hints: [
          "What is the 'whole' here? The whole bar has how many squares?",
          "The denominator is the total equal parts of the whole. Aya ate how many of them?",
          "5 squares out of 12 total squares → $\\frac{5}{12}$.",
        ],
      },
      {
        id: "L1-num-1",
        type: "numeric-input",
        category: "procedural",
        prompt: "A cake is cut into 6 equal slices. You eat 1 slice. Type the number that goes in the DENOMINATOR (bottom) of the fraction for what you ate.",
        answer: 6,
        tolerance: 0,
        explanation: "The denominator is the number of equal parts the whole is cut into — that's 6 slices.",
        hints: [
          "The denominator is the TOTAL number of equal parts.",
          "How many equal slices was the cake cut into?",
          "The cake was cut into 6 slices, so the bottom number is 6.",
        ],
      },
      {
        id: "L1-tf-1",
        type: "true-false-justify",
        category: "conceptual",
        prompt: "$\\frac{1}{2}$ of an apple is always bigger than $\\frac{1}{3}$ of the same apple.",
        isTrue: true,
        explanation: "Same whole apple. Cutting into 2 gives two big halves; cutting into 3 gives three smaller thirds. Half of the same apple is bigger than a third.",
        hints: [
          "Picture the same apple cut two ways: into 2 pieces vs into 3 pieces.",
          "Fewer cuts means bigger pieces.",
          "1 of 2 equal parts is more than 1 of 3 equal parts of the same whole.",
        ],
      },
      {
        id: "L1-mcq-4",
        type: "mcq",
        category: "word",
        prompt: "A rope of length 1 metre is cut into 5 equal pieces. You use 2 pieces to tie a parcel. What fraction of the rope did you use?",
        options: [
          { id: "a", text: "$\\frac{3}{5}$" },
          { id: "b", text: "$\\frac{2}{3}$" },
          { id: "c", text: "$\\frac{5}{2}$" },
          { id: "d", text: "$\\frac{2}{5}$" },
        ],
        correctOptionId: "d",
        diagnoses: {
          b: "3 is how many pieces are left over, not part of the fraction for what you USED. The whole rope was cut into 5 pieces — that is your denominator.",
          c: "You swapped the numbers. You used 2 pieces out of 5 total pieces, so it is $\\frac{2}{5}$, not $\\frac{5}{2}$.",
          a: "You reported the leftover (3 out of 5). The question asks for what you USED — 2 out of 5.",
        },
        explanation: "The whole rope is 5 equal pieces. You used 2 of them: $\\frac{2}{5}$ of the rope.",
        hints: [
          "The whole rope is cut into how many equal pieces?",
          "You used 2 pieces. Out of how many total pieces?",
          "2 pieces out of 5 → $\\frac{2}{5}$.",
        ],
      },
      {
        id: "L1-num-2",
        type: "numeric-input",
        category: "conceptual",
        prompt: "A watermelon is cut into 10 equal slices. Your family eats 7. How many slices are left? (Type just the number.)",
        answer: 3,
        tolerance: 0,
        unit: "slices",
        explanation: "10 slices total − 7 eaten = 3 slices left. The fraction left is $\\frac{3}{10}$.",
        hints: [
          "Total slices minus eaten slices = leftover slices.",
          "10 − 7 = ?",
          "3 slices are left.",
        ],
      },
      {
        id: "L1-mcq-5",
        type: "mcq",
        category: "procedural",
        prompt: "What is the numerator in $\\frac{4}{7}$?",
        options: [
          { id: "a", text: "4" },
          { id: "b", text: "7" },
          { id: "c", text: "11" },
          { id: "d", text: "3" },
        ],
        correctOptionId: "a",
        diagnoses: {
          b: "7 is the denominator — how many equal parts the whole is cut into.",
          c: "11 is the total if you add them — but a fraction isn't a sum.",
          d: "3 isn't in this fraction at all.",
        },
        explanation: "The numerator (top) is 4 — how many parts you take.",
        hints: ["The numerator is on top.", "4 parts are taken.", "4."],
      },
      {
        id: "L1-mcq-6",
        type: "mcq",
        category: "conceptual",
        prompt: "If you eat $\\frac{2}{6}$ of a pizza and your friend eats $\\frac{2}{6}$ too, how much of the pizza is left?",
        options: [
          { id: "a", text: "$\\frac{4}{6}$" },
          { id: "b", text: "$\\frac{2}{6}$" },
          { id: "c", text: "$\\frac{6}{2}$" },
          { id: "d", text: "0" },
        ],
        correctOptionId: "b",
        diagnoses: {
          a: "$\\frac{4}{6}$ is how much was EATEN — the question asks what is LEFT.",
          c: "You flipped it — don't swap the numbers.",
          d: "Two sixths plus two sixths is four sixths, not the whole pizza.",
        },
        explanation: "Eaten = $\\frac{2}{6} + \\frac{2}{6} = \\frac{4}{6}$. Left = $\\frac{6}{6} - \\frac{4}{6} = \\frac{2}{6}$.",
        hints: ["How much was eaten in total?", "The whole pizza is $\\frac{6}{6}$.", "Left = $\\frac{6}{6} - \\frac{4}{6}$."],
      },
      {
        id: "L1-num-3",
        type: "numeric-input",
        category: "procedural",
        prompt: "A cake is cut into 9 equal slices. You eat 4. Type the NUMERATOR of the fraction for what you ate.",
        answer: 4,
        tolerance: 0,
        explanation: "The numerator is how many parts you took — 4.",
        hints: ["Numerator = parts taken.", "You ate 4 slices.", "4."],
      },
      {
        id: "L1-num-4",
        type: "numeric-input",
        category: "conceptual",
        prompt: "Type the denominator of $\\frac{5}{12}$.",
        answer: 12,
        tolerance: 0,
        explanation: "The denominator (bottom) is 12 — the number of equal parts.",
        hints: ["Denominator is on the bottom.", "12 equal parts.", "12."],
      },
      {
        id: "L1-frac-1",
        type: "fraction-input",
        category: "procedural",
        prompt: "A ribbon is cut into 6 equal pieces. You use 5. Write the fraction used.",
        numerator: 5,
        denominator: 6,
        acceptEquivalent: false,
        explanation: "5 pieces used out of 6 total pieces.",
        hints: ["Used = 5.", "Total = 6.", "5/6."],
      },
      {
        id: "L1-frac-2",
        type: "fraction-input",
        category: "conceptual",
        prompt: "A square is divided into 4 equal parts and 1 is shaded. Write the shaded fraction.",
        numerator: 1,
        denominator: 4,
        acceptEquivalent: false,
        explanation: "1 shaded part out of 4 total parts.",
        hints: ["Shaded = 1.", "Total = 4.", "1/4."],
      },
      {
        id: "L1-tf-2",
        type: "true-false-justify",
        category: "conceptual",
        prompt: "$\\frac{4}{4}$ is a whole.",
        isTrue: true,
        explanation: "4 parts out of 4 equal parts is the entire whole — 1.",
        hints: ["4 of 4 parts.", "The whole pizza.", "True."],
      },
      {
        id: "L1-order-1",
        type: "order-steps",
        category: "word",
        prompt: "Order the steps to write the fraction for 3 slices eaten from a pizza cut into 8.",
        sequence: ["Count the total slices: 8", "Count the slices eaten: 3", "Put eaten over total: 3/8", "Check the bottom names the whole"],
        diagnoses: {
          "Count the slices eaten: 3@0": "Count the total (the whole) first.",
          "Put eaten over total: 3/8@0": "You need both counts before writing the fraction.",
          "Check the bottom names the whole@0": "Checking is the last step.",
        },
        explanation: "Denominator = total parts (8), numerator = parts taken (3).",
        hints: ["The whole first.", "Then what you took.", "3/8."],
      },
      {
        id: "L1-drag-1",
        type: "drag-match",
        category: "conceptual",
        prompt: "Match each fraction word to its meaning.",
        pairs: [
          { source: "numerator", target: "parts taken" },
          { source: "denominator", target: "total equal parts" },
          { source: "fraction", target: "part compared to whole" },
        ],
        diagnoses: {
          "numerator->total equal parts": "The numerator is the parts TAKEN, up top.",
          "denominator->parts taken": "The denominator is the total, on the bottom.",
        },
        explanation: "Numerator = parts taken; denominator = total equal parts.",
        hints: ["Top = taken.", "Bottom = total.", "Fraction = part vs whole."],
      },
      {
        id: "L1-graph-1",
        type: "graph-interact",
        category: "word",
        prompt: "Adjust the slider (key: value) so the shaded fraction equals 3/8 as a decimal.",
        challenge: "Set the slider to 0.375.",
        validate: { value: 0.375 },
        tolerance: 0.02,
        explanation: "3 ÷ 8 = 0.375.",
        hints: ["3/8 as a decimal.", "3 ÷ 8.", "0.375."],
      },
    ],
    selection: { procedural: 2, conceptual: 2, word: 1 },
    passThreshold: 0.8,
  },
  commonMistakes: [
    {
      wrongPattern: "flips numerator/denominator",
      diagnosis:
        "You swapped the two numbers. The DENOMINATOR is the total number of equal parts the whole is cut into; the NUMERATOR is how many of those parts you take.",
      hint: "Say it out loud: 'I took [top number] out of [bottom number] total parts.'",
    },
    {
      wrongPattern: "uses leftover as numerator",
      diagnosis:
        "You counted the parts that are LEFT instead of the parts you TOOK. The fraction is about the share you're describing, measured against the whole.",
      hint: "Ask: 'What is the question asking about — the part taken or the part left?'",
    },
    {
      wrongPattern: "adds total and taken",
      diagnosis:
        "You added the parts together. The whole does not grow when you take a share — the denominator stays as the total number of equal parts.",
      hint: "The whole is fixed. Dividing it into more parts doesn't add more pizza.",
    },
  ],
  recallTags: ["fractions", "part-whole"],
  discovery: {
    challenges: [
      {
        instruction: "Split the bar into 2 parts and shade 1. Now split it into 4 parts and shade 2.",
        observe: "The shaded amount looks the same — only the number of pieces changed.",
      },
      {
        instruction: "Split the bar into 8 parts and shade 4.",
        observe: "Still the same amount — now called 4 out of 8.",
      },
    ],
    predict: {
      prompt: "Before you slide: if you split a pizza into 8 equal slices, is one slice bigger or smaller than a slice from a pizza split into 4?",
      options: [
        { id: "a", text: "Bigger" },
        { id: "b", text: "Smaller" },
        { id: "c", text: "Same size" },
      ],
      reveal: "Smaller — more slices means each one is smaller. 1 out of 8 is less than 1 out of 4.",
    },
    sayItYourWay: {
      prompt: "How would you describe what the bottom number of a fraction means?",
      phrasings: [
        { id: "a", text: "How many equal parts the whole is cut into", correct: true, why: "The denominator names the size of the pieces — how many equal parts the whole is split into." },
        { id: "b", text: "How many parts you take", correct: false, why: "That's the top number (numerator). The bottom number is the total number of equal parts." },
        { id: "c", text: "How many parts are left over", correct: false, why: "Leftovers aren't part of the fraction's meaning — the denominator is the total equal parts of the whole." },
      ],
      formalName: "denominator",
    },
    stretch: "If 1 out of 2 is the same amount as 2 out of 4, what do you think 1 out of 2 equals in eighths?",
  },
};
