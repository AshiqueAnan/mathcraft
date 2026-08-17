import type { Lesson } from "../schema";

export const T1U1L3: Lesson = {
  id: "T1-U1-L3",
  tier: 1,
  unit: "Number sense",
  title: "Which Is Bigger, Really?",
  prerequisites: ["T1-U1-L1", "T1-U1-L2"],
  estimatedMinutes: 10,
  hook: {
    question: "Two shops sell the same juice. One bottle has 0.7 L, the other has 0.65 L. Which is more? The digits 7 and 65 make most people hesitate — ordering decimals is a trap.",
    type: "puzzle",
  },
  intuitionBlocks: [
    {
      widget: "number-line",
      narrative:
        "Place the point on each value: 0.7, 0.65, 0.75, 0.9. The number line makes the ordering obvious — position beats the length of the digit string.",
    },
  ],
  formalBlocks: [
    {
      definition:
        "To compare decimals, line up the decimal points and compare place by place from the left. $0.7 = 0.70$ — the extra zero doesn't add value (it's the tenths place, not a new digit).",
      examples: [
        "Compare $0.7$ and $0.65$: same ones (0), then tenths — 7 vs 6. $7$ tenths > $6$ tenths, so $0.7 > 0.65$.",
        "Compare $0.29$ and $0.3$: tenths first — 2 vs 3. $0.3 > 0.29$ even though 29 > 3.",
      ],
      pitfall:
        "Longer decimal strings are NOT bigger. 0.65 looks 'larger' than 0.7 because 65 > 7, but place value says tenths dominate — compare from the LEFT, never by digit count.",
      altExplanations: [
        "FOOD: two cake slicers. 0.7 L is 7 of the 10 big slices; 0.65 L is 65 of the 100 smaller slices. The big-slice count decides first: 7 tenths beats 6 tenths before you ever look at hundredths. Shrink the slice size, the value doesn't grow.",
        "SPORTS: comparing sprint times is reversed — a 9.87 s run beats 9.9 s because you compare TENTHS of a second before hundredths. Same idea here: line up decimal points, compare place by place from the left, and the longer-looking string can still lose.",
      ],
    },
  ],
  gutChecks: [
    { prompt: "Which is smaller: 0.4 or 0.39?", answer: "0.39 — compare tenths: 3 < 4." },
  ],
  quiz: {
    pool: [
      {
        id: "U1L3-mcq-1", type: "mcq", category: "procedural",
        prompt: "Which is larger?",
        options: [{ id: "a", text: "0.7" }, { id: "b", text: "0.65" }, { id: "c", text: "Same" }, { id: "d", text: "Cannot tell" }],
        correctOptionId: "a",
        diagnoses: { b: "0.65 = 65 hundredths = 6.5 tenths — less than 7 tenths.", c: "Different values.", d: "Place value decides it." },
        explanation: "0.7 has 7 tenths; 0.65 has 6 tenths (65 hundredths = 6.5 tenths). So 0.7 is bigger.",
        hints: ["Compare tenths first.", "0.7 = 7 tenths.", "0.7 wins."],
      },
      {
        id: "U1L3-mcq-2", type: "mcq", category: "conceptual",
        prompt: "Which is larger?",
        options: [{ id: "a", text: "0.29" }, { id: "b", text: "0.3" }, { id: "c", text: "Same" }, { id: "d", text: "Cannot tell" }],
        correctOptionId: "b",
        diagnoses: { a: "29 > 3 but that's not how decimals work — compare tenths.", c: "0.3 = 0.30, not 0.29.", d: "Compare from the left: 2 tenths vs 3 tenths." },
        explanation: "0.3 = 0.30 = 30 hundredths > 29 hundredths = 0.29.",
        hints: ["Line up the decimal points.", "0.3 = 0.30.", "30 hundredths > 29 hundredths."],
      },
      {
        id: "U1L3-mcq-3", type: "mcq", category: "word",
        prompt: "A runner finishes in 9.8 s; another in 9.75 s. Who is faster?",
        options: [{ id: "a", text: "Same time" }, { id: "b", text: "9.8 s — bigger number" }, { id: "c", text: "9.75 s — smaller time" }, { id: "d", text: "Cannot tell" }],
        correctOptionId: "c",
        diagnoses: { b: "Smaller time = faster in a race.", a: "9.8 = 9.80 > 9.75.", d: "Compare from the left." },
        explanation: "9.8 s = 9.80 s > 9.75 s, so the 9.75 s runner is faster.",
        hints: ["Faster = smaller time.", "Compare 9.80 vs 9.75.", "9.75 s wins."],
      },
      {
        id: "U1L3-mcq-4", type: "mcq", category: "conceptual",
        prompt: "Which is NOT equal to 0.5?",
        options: [{ id: "a", text: "0.50" }, { id: "b", text: "0.500" }, { id: "c", text: "1/2" }, { id: "d", text: "0.05" }],
        correctOptionId: "d",
        diagnoses: { a: "0.50 = 50 hundredths = 0.5.", b: "0.500 = 500 thousandths = 0.5.", c: "1/2 = 0.5 exactly." },
        explanation: "0.05 is five HUNDREDTHS — one tenth of 0.5.",
        hints: ["Trailing zeros don't change value.", "0.05 = 5 hundredths.", "0.5, 0.50, 0.500, 1/2 all match."],
      },
      {
        id: "U1L3-mcq-5", type: "mcq", category: "procedural",
        prompt: "Put 0.45, 0.4, 0.405 in order — which is the SMALLEST?",
        options: [{ id: "a", text: "0.4" }, { id: "b", text: "0.405" }, { id: "c", text: "0.45" }, { id: "d", text: "They are all equal" }],
        correctOptionId: "a",
        diagnoses: { b: "0.405 = 405 thousandths = 0.405 > 0.4.", c: "0.45 = 450 thousandths — biggest.", d: "Write with 3 places: 0.400, 0.405, 0.450." },
        explanation: "0.4 = 0.400 < 0.405 < 0.450 = 0.45, so 0.4 is smallest.",
        hints: ["Fill zeros: 0.400, 0.405, 0.450.", "Compare thousandths.", "0.4 is smallest."],
      },
      {
        id: "U1L3-mcq-6", type: "mcq", category: "word",
        prompt: "A recipe needs 1.25 kg of flour; you have 1.05 kg. How much more do you need?",
        options: [{ id: "a", text: "0.30 kg" }, { id: "b", text: "0.20 kg" }, { id: "c", text: "1.20 kg" }, { id: "d", text: "0.25 kg" }],
        correctOptionId: "b",
        diagnoses: { a: "0.30 would mean you had 0.95 kg.", c: "Subtract, don't add.", d: "0.25 is 1.25 − 1.00." },
        explanation: "1.25 − 1.05 = 0.20 kg.",
        hints: ["Subtract 1.05 from 1.25.", "125 − 105 hundredths.", "0.20 kg."],
      },
      {
        id: "U1L3-num-1", type: "numeric-input", category: "procedural",
        prompt: "Type 0.30 as a simplified fraction.", answer: 3, tolerance: 0, acceptFractions: true,
        explanation: "0.30 = 30/100 = 3/10. (Type 3/10 as a fraction.)",
        hints: ["0.30 = 30 hundredths.", "Simplify.", "3/10."],
      },
      {
        id: "U1L3-num-2", type: "numeric-input", category: "procedural",
        prompt: "0.4 × 10 = ?", answer: 4, tolerance: 0,
        explanation: "0.4 × 10 = 4 — each digit moves one place left.",
        hints: ["×10 shifts left.", "4 tenths × 10 = 4 ones.", "4."],
      },
      {
        id: "U1L3-num-3", type: "numeric-input", category: "conceptual",
        prompt: "What is 0.7 − 0.35?", answer: 0.35, tolerance: 0.001,
        explanation: "0.70 − 0.35 = 0.35.",
        hints: ["Write 0.7 as 0.70.", "Subtract hundredths.", "0.35."],
      },
      {
        id: "U1L3-num-4", type: "numeric-input", category: "word",
        prompt: "You walk 0.6 km, then 0.35 km more. Total distance?", answer: 0.95, tolerance: 0.001, unit: "km",
        explanation: "0.60 + 0.35 = 0.95 km.",
        hints: ["Write 0.6 as 0.60.", "Add.", "0.95."],
      },
      {
        id: "U1L3-frac-1", type: "fraction-input", category: "conceptual",
        prompt: "Write 0.25 as a simplified fraction.",
        numerator: 1, denominator: 4, acceptEquivalent: true,
        explanation: "0.25 = 25/100 = 1/4.",
        hints: ["25 hundredths.", "Divide by 25.", "1/4."],
      },
      {
        id: "U1L3-tf-1", type: "true-false-justify", category: "conceptual",
        prompt: "0.3 is greater than 0.29.",
        isTrue: true,
        explanation: "0.3 = 0.30 > 0.29 (30 hundredths vs 29).",
        hints: ["0.3 = 0.30.", "Compare hundredths.", "True."],
      },
      {
        id: "U1L3-tf-2", type: "true-false-justify", category: "conceptual",
        prompt: "0.750 equals 0.75.",
        isTrue: true,
        explanation: "Trailing zeros don't change the value: 0.750 = 0.75.",
        hints: ["0.750 = 750 thousandths.", "0.75 = 750 thousandths.", "True."],
      },
      {
        id: "U1L3-order-1", type: "order-steps", category: "procedural",
        prompt: "Order from SMALLEST to LARGEST.",
        sequence: ["0.2", "0.25", "0.5", "0.52"],
        diagnoses: {
          "0.2@0": "0.2 = 0.20 — smallest.",
          "0.52@0": "0.52 is biggest.",
          "0.5@0": "0.5 comes third.",
        },
        explanation: "0.20 < 0.25 < 0.50 < 0.52.",
        hints: ["Write two decimal places.", "Compare hundredths.", "0.2, 0.25, 0.5, 0.52."],
      },
      {
        id: "U1L3-drag-1", type: "drag-match", category: "conceptual",
        prompt: "Match each fraction to its decimal.",
        pairs: [
          { source: "1/2", target: "0.5" },
          { source: "1/4", target: "0.25" },
          { source: "3/4", target: "0.75" },
        ],
        diagnoses: {
          "1/2->0.25": "Half is 0.5, not 0.25.",
          "3/4->0.5": "Three quarters is 0.75.",
        },
        explanation: "1/2 = 0.5, 1/4 = 0.25, 3/4 = 0.75.",
        hints: ["1/2 is half.", "1/4 is a quarter.", "3/4 = 0.75."],
      },
      {
        id: "U1L3-graph-1", type: "graph-interact", category: "conceptual",
        prompt: "Move the point to 0.7 (key: value).",
        challenge: "Set the value to 0.7.",
        validate: { value: 0.7 }, tolerance: 0.05,
        explanation: "0.7 is seven tenths on the number line.",
        hints: ["Between 0 and 1.", "Seven tenths.", "0.7."],
      },
    ],
    selection: { procedural: 2, conceptual: 2, word: 1 },
    passThreshold: 0.8,
  },
  commonMistakes: [
    {
      wrongPattern: "compares digit count instead of place value",
      diagnosis: "0.65 is NOT bigger than 0.7 because 65 > 7 — compare from the left, place by place.",
      hint: "Line up the decimal points, then compare tenths first.",
    },
    {
      wrongPattern: "ignores trailing zeros",
      diagnosis: "0.50 and 0.5 are equal; 0.05 is ten times smaller. Trailing zeros after the last digit add nothing.",
      hint: "An extra zero at the END of a decimal doesn't change it.",
    },
    {
      wrongPattern: "subtracts the wrong way with decimals",
      diagnosis: "1.25 − 1.05 = 0.20, not 0.30. Subtract place by place: 125 − 105 hundredths.",
      hint: "Write both as hundredths and subtract.",
    },
  ],
  recallTags: ["decimals", "ordering", "place-value"],
  discovery: {
    challenges: [
      {
        instruction: "Place the point at 0.7, then 0.65. Watch which sits further right.",
        observe: "0.7 sits right of 0.65 — position, not digit length, decides.",
      },
      {
        instruction: "Now compare 0.3 and 0.29 on the line.",
        observe: "0.3 is further right, even though its digit string is shorter.",
      },
    ],
    predict: {
      prompt: "Before you check: is 0.75 bigger or smaller than 0.7?",
      options: [
        { id: "a", text: "Bigger" },
        { id: "b", text: "Smaller" },
        { id: "c", text: "Equal" },
      ],
      reveal: "Bigger — 0.75 = 75 hundredths, 0.7 = 70 hundredths. Five hundredths more.",
    },
    sayItYourWay: {
      prompt: "What is the safest way to compare two decimals?",
      phrasings: [
        { id: "a", text: "Line up decimal points and compare from the left", correct: true, why: "Place-by-place comparison from the left always works." },
        { id: "b", text: "Compare the total number of digits", correct: false, why: "More digits doesn't mean bigger — 0.3 beats 0.29." },
        { id: "c", text: "The shorter one is always bigger", correct: false, why: "0.9 is big but 0.2 isn't — length alone is unreliable." },
      ],
      formalName: "place-value comparison of decimals",
    },
    stretch: "0.75 and 3/4 look different — why are they the same point on the number line?",
  },
};