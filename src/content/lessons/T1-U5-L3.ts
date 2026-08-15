import type { Lesson } from "../schema";

export const T1U5L3: Lesson = {
  id: "T1-U5-L3",
  tier: 1,
  unit: "Decimals & percentages",
  title: "Growing and Shrinking by Percent",
  prerequisites: ["T1-U4-L6","T1-U5-L2"],
  estimatedMinutes: 12,
  hook: {
    question: "A shirt costs $100. The store raises the price by 20%. Later it drops the price by 20%. Is the shirt back to $100? Most people say yes. They're wrong — here's the trap.",
    type: "paradox",
  },
  intuitionBlocks: [
    {
      widget: "ratio-bar",
      narrative: "Slide the multiplier up and down. Watch the bar: a 20% increase on $100 makes $120, but a 20% decrease on $120 makes $96 — not $100. The second percent acts on a different (bigger) whole.",
    },
  ],
  formalBlocks: [
    {
      definition: "A percent increase of p% is multiply by $1 + \\frac{p}{100}$. A percent decrease of p% is multiply by $1 - \\frac{p}{100}$. These are called MULTIPLIERS. Increase then decrease does NOT return to start — the order and the changing base matter.",
      examples: [
        "+20% on 100: $100 \\times 1.2 = 120$.",
        "Then −20% on 120: $120 \\times 0.8 = 96$. Not 100!",
      ],
      pitfall: "Never add +20% and −20% to 'cancel'. The −20% subtracts from the NEW larger amount, so it removes more than the +20% added. Percentages act on the current value, not the original.", altExplanations: ["MONEY: your salary rises 20% to 120, then is cut 20% to 96 — not back to 100. The 20% cut bites into the BIGGER new salary, so it removes more than the raise added. Percentages chase the current value.", "GAME: a character's health +20% then −20% — 100 → 120 → 96. Healing and damage are multipliers on the CURRENT total, so the order of the two bonuses matters for the final number."],
    },
  ],
  gutChecks: [
    { prompt: "What number do you multiply by for a 10% increase?", answer: "1.1 — 100% + 10% = 110% = 1.1." },
  ],
  quiz: {
    pool: [
      {
        id: "U5L3-mcq-1", type: "mcq", category: "procedural",
        prompt: "What multiplier represents a 15% increase?",
        options: [{ id: "a", text: "1.15" }, { id: "b", text: "0.15" }, { id: "c", text: "0.85" }, { id: "d", text: "15" }],
        correctOptionId: "a",
        diagnoses: { b: "0.15 is just the increase amount, not the multiplier.", c: "0.85 is a 15% DECREASE.", d: "15 means ×15, far too big." },
        explanation: "100% + 15% = 115% = 1.15.",
        hints: ["100% + 15%.", "115% as a decimal.", "1.15."],
      },
      {
        id: "U5L3-mcq-2", type: "mcq", category: "conceptual",
        prompt: "A price rises 20% then falls 20%. Final price vs original?",
        options: [{ id: "a", text: "Lower" }, { id: "b", text: "Same" }, { id: "c", text: "Higher" }, { id: "d", text: "Cannot tell" }],
        correctOptionId: "a",
        diagnoses: { b: "The 20% off applies to the BIGGER amount, so it removes more than it added.", c: "Rise then same-rate fall can't end higher — try $100→$120→$96.", d: "We can tell: $100 × 1.2 × 0.8 = $96." },
        explanation: "$100 × 1.2 = 120$; $120 × 0.8 = 96$. Lower than 100.",
        hints: ["Compute on $100.", "1.2 then 0.8.", "96 < 100."],
      },
      {
        id: "U5L3-mcq-3", type: "mcq", category: "word",
        prompt: "A $50 jacket is on 30% off. What's the sale price?",
        options: [{ id: "a", text: "$35" }, { id: "b", text: "$15" }, { id: "c", text: "$30" }, { id: "d", text: "$65" }],
        correctOptionId: "a",
        diagnoses: { b: "$15 is the discount, not the price.", c: "$30 would be 40% off.", d: "$65 is a 30% increase." },
        explanation: "Pay 70%: 0.7 × 50 = $35.",
        hints: ["30% off means you pay 70%.", "0.7 × 50.", "$35."],
      },
      {
        id: "U5L3-mcq-4", type: "mcq", category: "conceptual",
        prompt: "Which multiplier is a 25% discount?",
        options: [{ id: "a", text: "0.75" }, { id: "b", text: "0.25" }, { id: "c", text: "1.25" }, { id: "d", text: "0.025" }],
        correctOptionId: "a",
        diagnoses: { b: "0.25 is the amount OFF, not what you pay.", c: "1.25 is a 25% increase.", d: "0.025 is 2.5%." },
        explanation: "100% − 25% = 75% = 0.75.",
        hints: ["100% − 25%.", "Pay 75%.", "0.75."],
      },
      {
        id: "U5L3-mcq-5", type: "mcq", category: "procedural",
        prompt: "A population of 800 grows by 10% in a year. New population?",
        options: [{ id: "a", text: "880" }, { id: "b", text: "810" }, { id: "c", text: "800" }, { id: "d", text: "960" }],
        correctOptionId: "a",
        diagnoses: { b: "810 = 800 + 10. Increase is 10% of 800 = 80, so 880.", c: "No growth?", d: "960 = 20% growth." },
        explanation: "800 × 1.1 = 880.",
        hints: ["10% of 800 = 80.", "800 + 80.", "880."],
      },
      {
        id: "U5L3-mcq-6", type: "mcq", category: "word",
        prompt: "A phone drops from $300 to $270. What percent decrease?",
        options: [{ id: "a", text: "10%" }, { id: "b", text: "9%" }, { id: "c", text: "11%" }, { id: "d", text: "30%" }],
        correctOptionId: "a",
        diagnoses: { b: "30/300 = 0.1 = 10%, not 9%.", c: "30/270 would misapply the base.", d: "30% of 300 = 90, way too much." },
        explanation: "Drop = 30. 30 ÷ 300 = 0.1 = 10%.",
        hints: ["Amount of change.", "30 ÷ 300.", "0.1 = 10%."],
      },
      {
        id: "U5L3-num-1", type: "numeric-input", category: "procedural",
        prompt: "Type the multiplier for a 12% increase.", answer: 1.12, tolerance: 0.001,
        explanation: "100% + 12% = 112% = 1.12.",
        hints: ["100% + 12%.", "112%.", "1.12."],
      },
      {
        id: "U5L3-num-2", type: "numeric-input", category: "procedural",
        prompt: "Type the multiplier for a 40% discount.", answer: 0.6, tolerance: 0.001,
        explanation: "100% − 40% = 60% = 0.6.",
        hints: ["100% − 40% = 60%.", "Pay 60% of the original.", "0.6."],
      },
      {
        id: "U5L3-num-3", type: "numeric-input", category: "conceptual",
        prompt: "$60 grows by 25%. New value?", answer: 75, tolerance: 0,
        explanation: "60 × 1.25 = 75.",
        hints: ["25% of 60 = 15.", "60 + 15.", "75."],
      },
      {
        id: "U5L3-num-4", type: "numeric-input", category: "word",
        prompt: "A $90 bike is 20% off. How much do you pay?", answer: 72, tolerance: 0, unit: "$",
        explanation: "0.8 × 90 = $72.",
        hints: ["Pay 80%.", "0.8 × 90.", "$72."],
      },
      {
        id: "U5L3-frac-1", type: "fraction-input", category: "conceptual",
        prompt: "A 5% increase on 400 adds 20. Write 20 as a fraction of the original 400 (simplified).",
        numerator: 1, denominator: 20, acceptEquivalent: true,
        explanation: "5% = 5/100 = 1/20.",
        hints: ["5% = 5/100.", "Simplify.", "1/20."],
      },
      {
        id: "U5L3-tf-1", type: "true-false-justify", category: "conceptual",
        prompt: "Raising 40 by 25% then lowering by 25% returns to 40.",
        isTrue: false,
        explanation: "40 × 1.25 = 50; 50 × 0.75 = 37.5 — not 40.",
        hints: ["40 × 1.25.", "50 × 0.75.", "37.5 — false."],
      },
      {
        id: "U5L3-tf-2", type: "true-false-justify", category: "conceptual",
        prompt: "A 10% increase can be done by multiplying by 1.1.",
        isTrue: true,
        explanation: "100% + 10% = 110% = 1.1.",
        hints: ["100% + 10%.", "110%.", "1.1 — true."],
      },
      {
        id: "U5L3-order-1", type: "order-steps", category: "word",
        prompt: "Order the steps to apply a 20% increase then 20% decrease to 100.",
        sequence: ["Multiply 100 by 1.2 = 120", "The price is now 120", "Multiply 120 by 0.8 = 96", "Final price 96 (less than 100)"],
        diagnoses: {
          "The price is now 120@0": "Compute the increase first.",
          "Multiply 120 by 0.8 = 96@0": "Decrease applies to the new amount.",
          "Final price 96 (less than 100)@0": "96 is the conclusion.",
        },
        explanation: "Increase then decrease with changing base lands below the start.",
        hints: ["×1.2.", "×0.8.", "96."],
      },
      {
        id: "U5L3-drag-1", type: "drag-match", category: "conceptual",
        prompt: "Match each change to its multiplier.",
        pairs: [
          { source: "20% increase", target: "1.2" },
          { source: "20% decrease", target: "0.8" },
          { source: "5% decrease", target: "0.95" },
        ],
        diagnoses: {
          "20% increase->0.8": "Increase uses 1.2.",
          "20% decrease->1.2": "Decrease uses 0.8.",
          "5% decrease->0.05": "Pay 95%, so 0.95.",
        },
        explanation: "Increase p% → 1 + p/100; decrease p% → 1 − p/100.",
        hints: ["+20% = 1.2.", "−20% = 0.8.", "−5% = 0.95."],
      },
      {
        id: "U5L3-graph-1", type: "graph-interact", category: "word",
        prompt: "Slider (key: value): set it to 100 after a 20% increase.",
        challenge: "Set the slider to 120.",
        validate: { value: 120 },
        tolerance: 0.01,
        explanation: "100 × 1.2 = 120.",
        hints: ["20% increase means ×1.2.", "Multiply by 1.2.", "120."],
      },
    ],
    selection: { procedural: 2, conceptual: 2, word: 1 },
    passThreshold: 0.8,
  },
  commonMistakes: [
    {
      wrongPattern: "thinks +p% then −p% cancels",
      diagnosis: "The decrease acts on the increased amount. $100 → 120 → 96$, not 100.",
      hint: "Multiply step-by-step with multipliers.",
    },
    {
      wrongPattern: "uses 0.15 for a 15% increase",
      diagnosis: "0.15 alone is just the extra. The full multiplier is 1.15 (keep the original 100%).",
      hint: "Increase p% → 1 + p/100.",
    },
    {
      wrongPattern: "computes discount as final price",
      diagnosis: "The discount amount is NOT what you pay. Subtract it (or use 1 − p/100).",
      hint: "Pay = original × (1 − p/100).",
    },
  ],
  recallTags: ["percent-change", "multipliers", "growth"],
  discovery: {
    challenges: [
      {
        instruction: "Set the bar to 100. Apply a 20% increase (×1.2). Then apply 20% decrease (×0.8).",
        observe: "120 → 96. The second 20% ate more because it acted on 120.",
      },
      {
        instruction: "Try +50% then −50% on 100.",
        observe: "150 → 75 — even worse! The bigger the intermediate, the bigger the loss.",
      },
    ],
    predict: {
      prompt: "Before you apply: after +20% then −20%, will the result be above, below, or equal to 100?",
      options: [
        { id: "a", text: "Below 100" },
        { id: "b", text: "Equal to 100" },
        { id: "c", text: "Above 100" },
      ],
      reveal: "Below — 100 × 1.2 = 120, then 120 × 0.8 = 96.",
    },
    sayItYourWay: {
      prompt: "Why does +20% then −20% not bring you back?",
      phrasings: [
        { id: "a", text: "The second percent acts on the new larger total", correct: true, why: "Percentages act on the current value, and the current value changed." },
        { id: "b", text: "Percentages add and subtract like whole numbers", correct: false, why: "+20% −20% would be 0 as rates, but each applies to a different amount." },
        { id: "c", text: "Percentages are always bigger than numbers", correct: false, why: "It's not size — it's the changing base that breaks the cancellation." },
      ],
      formalName: "percentage multipliers",
    },
    stretch: "If a 25% discount brought a price to $60, what was the original price? Run the machine backwards.",
  },
};