import type { Lesson } from "../schema";

export const T1U1L1: Lesson = {
  id: "T1-U1-L1",
  tier: 1,
  unit: "Number sense",
  title: "How Big Is a Million?",
  prerequisites: [],
  estimatedMinutes: 10,
  hook: {
    question:
      "One grain of rice is nothing. A handful is nothing. But if you kept doubling a pile of rice for just 40 steps, your pile would be taller than Mount Everest. Where do small numbers turn into giants?",
    type: "paradox",
  },
  intuitionBlocks: [
    {
      widget: "number-line",
      narrative:
        "Slide from 1 to 10 to 100 to 1000. Each time you zoom out by ten, the digits you see don't rewrite themselves — they just shift left, and a new place is born on the right.",
    },
  ],
  formalBlocks: [
    {
      definition:
        "Our number system is decimal (base 10): every place is worth ten times the place to its right. The digit in a place tells how many of that power of ten you have — ones ($10^0$), tens ($10^1$), hundreds ($10^2$), thousands ($10^3$) and so on.",
      examples: [
        "$5\\,234 = 5$ thousands $+ 2$ hundreds $+ 3$ tens $+ 4$ ones $= 5\\times10^3 + 2\\times10^2 + 3\\times10 + 4$.",
        "Moving the digit 7 one place left multiplies it by 10: $70 \\to 700 \\to 7\\,000$ — the digit never changes, only its place.",
      ],
      pitfall:
        "Writing $4\\,000\\,000$ as $400\\,000$ is not 'almost the same' — it's ten times smaller. Each zero to the right is a ×10 step, and losing one zero loses one whole power of ten.",
      altExplanations: [
        "MONEY: digits are coins of different denominations. A '3' coin spends as 3,000; slide it one place left and it becomes a 30,000 coin — same engraving, worth ten times more. Each place left is a ten-times-bigger coin.",
        "ODOMETER: the digits never rewrite themselves, they shift like a car's trip meter. The 1 that reads 1 km becomes 10 km then 100 km — the same '1' digit, but its window (place) decides whether it counts kilometres, tens, or hundreds.",
      ],
    },
  ],
  gutChecks: [
    { prompt: "How many tens are in the number 5,230?", answer: "523 — the tens digit is 3, but the whole number contains 523 groups of ten." },
  ],
  quiz: {
    pool: [
      {
        id: "U1L1-mcq-1", type: "mcq", category: "procedural",
        prompt: "Which number is ten times bigger than 4,200?",
        options: [
          { id: "a", text: "42,000" }, { id: "b", text: "4,210" }, { id: "c", text: "420" }, { id: "d", text: "42" },
        ],
        correctOptionId: "a",
        diagnoses: {
          b: "Adding 10 is NOT the same as ×10.", c: "÷10 makes it smaller.", d: "÷100, far too small.",
        },
        explanation: "×10 moves every digit one place left: 4,200 × 10 = 42,000.",
        hints: ["Each place to the left is 10× the value.", "4,200 × 10 = what?", "420 × 10 = 4,200, so 4,200 × 10 = 42,000."],
      },
      {
        id: "U1L1-mcq-2", type: "mcq", category: "conceptual",
        prompt: "Writing 3 in the THOUSANDS place makes 3 what?",
        options: [
          { id: "a", text: "300" }, { id: "b", text: "3,000" }, { id: "c", text: "30" }, { id: "d", text: "3" },
        ],
        correctOptionId: "b",
        diagnoses: { a: "That's the hundreds place.", c: "That's the tens place.", d: "That's the ones place." },
        explanation: "The thousands place is worth 1,000, so the digit 3 there means 3 × 1,000 = 3,000.",
        hints: ["What is the thousands place worth?", "3 thousands = 3 × 1,000.", "3,000."],
      },
      {
        id: "U1L1-mcq-3", type: "mcq", category: "procedural",
        prompt: "How many zeros does one million (10⁶) have?",
        options: [
          { id: "a", text: "7" }, { id: "b", text: "5" }, { id: "c", text: "6" }, { id: "d", text: "9" },
        ],
        correctOptionId: "c",
        diagnoses: { b: "10⁵ = 100,000 has five zeros — one less.", a: "10⁷ = ten million has seven.", d: "10⁹ is a billion." },
        explanation: "1,000,000 = 10⁶ = 1 followed by six zeros.",
        hints: ["10¹ = 10 (one zero).", "Each power adds one zero.", "10⁶ has six zeros."],
      },
      {
        id: "U1L1-mcq-4", type: "mcq", category: "word",
        prompt: "A stadium holds 90,000 people. About how many stadiums fill a million people?",
        options: [
          { id: "a", text: "About 900" }, { id: "b", text: "About 100" }, { id: "c", text: "About 9" }, { id: "d", text: "About 11" },
        ],
        correctOptionId: "d",
        diagnoses: { b: "That would hold 9 million.", c: "Nine stadiums hold 810,000 — nearly a million but short.", a: "Way too many." },
        explanation: "1,000,000 ÷ 90,000 ≈ 11.1, so about 11 stadiums hold a million people.",
        hints: ["How many 90,000s fit in 1,000,000?", "90,000 × 10 = 900,000.", "Just over 11."],
      },
      {
        id: "U1L1-mcq-5", type: "mcq", category: "conceptual",
        prompt: "Which is the largest?",
        options: [
          { id: "a", text: "1,500,000" }, { id: "b", text: "1,050,000" }, { id: "c", text: "1,000,500" }, { id: "d", text: "150,000" },
        ],
        correctOptionId: "a",
        diagnoses: { b: "1.05 million is less than 1.5 million.", c: "1.0005 million — smaller still.", d: "150 thousand, a factor of 10 less." },
        explanation: "Compare the leading digits: 1.5 million beats 1.05 and 1.0005 million; 150,000 is only 0.15 million.",
        hints: ["Compare the millions digit first.", "1.5 > 1.05 > 1.0005 > 0.15.", "1,500,000."],
      },
      {
        id: "U1L1-mcq-6", type: "mcq", category: "word",
        prompt: "A text message costs 2 cents. About how many messages are 1,000,000 cents ($10,000)?",
        options: [
          { id: "a", text: "50,000" }, { id: "b", text: "500,000" }, { id: "c", text: "5,000" }, { id: "d", text: "2,000" },
        ],
        correctOptionId: "b",
        diagnoses: { a: "That pays for 100,000 cents' worth — ten times too few.", c: "That's only 10,000 cents.", d: "That's just 4,000 cents." },
        explanation: "1,000,000 ÷ 2 = 500,000 messages.",
        hints: ["Split the million cents into 2-cent pieces.", "Half of a million.", "500,000."],
      },
      {
        id: "U1L1-num-1", type: "numeric-input", category: "procedural",
        prompt: "Type the number: eight thousand, four hundred.", answer: 8400, tolerance: 0,
        explanation: "8 thousands + 4 hundreds = 8,400.",
        hints: ["Thousands first.", "8,000 + 400.", "8,400."],
      },
      {
        id: "U1L1-num-2", type: "numeric-input", category: "procedural",
        prompt: "Type 10 × 3,500.", answer: 35000, tolerance: 0,
        explanation: "3,500 × 10 = 35,000 — every digit shifts one place left.",
        hints: ["×10 adds one zero.", "3,500 with a zero on the end.", "35,000."],
      },
      {
        id: "U1L1-num-3", type: "numeric-input", category: "conceptual",
        prompt: "What place is the 7 in when you write 7,200? (Type the value of the place, e.g. 10 for tens.)", answer: 1000, tolerance: 0,
        explanation: "The 7 is the leading digit: it sits in the thousands place, worth 1,000.",
        hints: ["Read the number: seven thousand.", "Seven THOUSAND.", "1,000."],
      },
      {
        id: "U1L1-num-4", type: "numeric-input", category: "word",
        prompt: "A school of 800 students each need 3 notebooks. Roughly how many notebooks is that? (Type the nearest thousand.)", answer: 2000, tolerance: 0, unit: "notebooks",
        explanation: "800 × 3 = 2,400, which rounds to about 2,000.",
        hints: ["800 × 3.", "2,400.", "Round 2,400 to the nearest thousand."],
      },
      {
        id: "U1L1-frac-1", type: "fraction-input", category: "conceptual",
        prompt: "One tenth of 5,000 is a certain number. Write it as a fraction of 50,000 (simplified).",
        numerator: 1, denominator: 10, acceptEquivalent: true,
        explanation: "5,000 is 1/10 of 50,000.",
        hints: ["5,000 × 10 = 50,000.", "So 5,000 is one part out of ten.", "1/10."],
      },
      {
        id: "U1L1-tf-1", type: "true-false-justify", category: "conceptual",
        prompt: "1,000,000 is ten times bigger than 100,000.",
        isTrue: true,
        explanation: "1,000,000 ÷ 100,000 = 10, so yes — a million is ten times a hundred thousand.",
        hints: ["How many 100,000s in 1,000,000?", "100,000 × 10 = 1,000,000.", "True."],
      },
      {
        id: "U1L1-tf-2", type: "true-false-justify", category: "conceptual",
        prompt: "Adding one zero to the end of 2,500 makes it exactly 10 times bigger.",
        isTrue: true,
        explanation: "25,000 = 2,500 × 10, so yes.",
        hints: ["2,500 with a zero appended.", "25,000 is ten times 2,500.", "True."],
      },
      {
        id: "U1L1-order-1", type: "order-steps", category: "procedural",
        prompt: "Put these in order from SMALLEST to LARGEST.",
        sequence: ["900", "9,000", "90,000", "900,000"],
        diagnoses: {
          "900@0": "900 is the smallest of the four.",
          "900,000@0": "900,000 is the largest, not the smallest.",
          "90,000@0": "90,000 comes third, not first.",
        },
        explanation: "Each step up is ×10: 900 < 9,000 < 90,000 < 900,000.",
        hints: ["Smallest has the fewest digits.", "Compare digit counts first.", "900, 9,000, 90,000, 900,000."],
      },
      {
        id: "U1L1-drag-1", type: "drag-match", category: "word",
        prompt: "Match each quantity to its name.",
        pairs: [
          { source: "1,000", target: "thousand" },
          { source: "1,000,000", target: "million" },
          { source: "1,000,000,000", target: "billion" },
        ],
        diagnoses: {
          "1,000->million": "A million has six zeros.",
          "1,000,000->billion": "A billion has nine zeros.",
          "1,000,000,000->million": "A million has six zeros, not nine.",
        },
        explanation: "thousand = 10³, million = 10⁶, billion = 10⁹.",
        hints: ["Thousand: 3 zeros.", "Million: 6 zeros.", "Billion: 9 zeros."],
      },
      {
        id: "U1L1-graph-1", type: "graph-interact", category: "word",
        prompt: "Slide the value so the expression equals 6,000 (key: value).",
        challenge: "Set the slider value to 6000.",
        validate: { value: 6000 }, tolerance: 0,
        explanation: "6,000 is six thousand.",
        hints: ["You want six thousand.", "Set the slider to 6000.", "6000."],
      },
    ],
    selection: { procedural: 2, conceptual: 2, word: 1 },
    passThreshold: 0.8,
  },
  commonMistakes: [
    {
      wrongPattern: "drops a zero when multiplying by 10",
      diagnosis: "Multiplying by 10 moves every digit one place left and adds one zero. Losing a zero makes the number ten times too small.",
      hint: "Say it: '×10 shifts, it never shrinks.'",
    },
    {
      wrongPattern: "confuses place names",
      diagnosis: "The thousands place is four places from the right, not three. 7 in 7,200 is seven THOUSAND, not seven hundred.",
      hint: "Count places from the right: ones, tens, hundreds, thousands.",
    },
    {
      wrongPattern: "thinks more digits always means bigger gaps than 10",
      diagnosis: "Each extra place is exactly a ×10 step. 99,999 is ten times smaller than 999,990 — the digit count difference is 'just' one power of ten, but that is still a huge jump.",
      hint: "Compare by places, then by leading digit.",
    },
  ],
  recallTags: ["place-value", "decimal-system", "magnitude"],
  discovery: {
    challenges: [
      {
        instruction: "Place the point at 1, then at 10, then at 100. What happens to the digit 1 each time you move right?",
        observe: "The 1 stays a 1 — it just gains a zero behind it as each new place appears.",
      },
      {
        instruction: "Now find 1,000 and 10,000. Count the zeros as you go.",
        observe: "Each ×10 leap adds exactly one zero — the pattern never breaks.",
      },
    ],
    predict: {
      prompt: "Before you zoom again: from 10,000 to 100,000, does the digit 1 change, or only its place?",
      options: [
        { id: "a", text: "The 1 changes" },
        { id: "b", text: "Only the place changes" },
        { id: "c", text: "The 1 disappears" },
      ],
      reveal: "Only the place changes — 1 becomes ten-thousand, then hundred-thousand. The digit itself never rewrites.",
    },
    sayItYourWay: {
      prompt: "What makes a digit worth more on a number line?",
      phrasings: [
        { id: "a", text: "Its position (place) decides its value", correct: true, why: "The same digit is worth 10× more each place you move left — that's place value." },
        { id: "b", text: "The digit decides its own value", correct: false, why: "The digit's face value stays the same; the place does the multiplying." },
        { id: "c", text: "Its size on the screen", correct: false, why: "Physical size has nothing to do with it — position on the place-value grid does." },
      ],
      formalName: "place value",
    },
    stretch: "If each zoom is ×10, how many zooms does it take to climb from 1 to a billion? Start counting.",
  },
};