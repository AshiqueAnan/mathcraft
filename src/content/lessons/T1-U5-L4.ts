import type { Lesson } from "../schema";

export const T1U5L4: Lesson = {
  id: "T1-U5-L4",
  tier: 1,
  unit: "Decimals & percentages",
  title: "Back to the Original",
  prerequisites: ["T1-U4-L6","T1-U5-L3"],
  estimatedMinutes: 12,
  hook: {
    question: "A jacket is on sale for $60 after a 25% discount. What was the original price? Your first instinct — add 25% of 60 — is wrong. The discount was 25% OF THE ORIGINAL, not 25% off the sale price.",
    type: "puzzle",
  },
  intuitionBlocks: [
    {
      widget: "balance-scale",
      narrative: "Balance the original price against the sale. If the sale is 75% of the original, the original is the sale DIVIDED by 0.75. Move chips to see: you undo a ×0.75 by dividing by 0.75.",
    },
  ],
  formalBlocks: [
    {
      definition: "To find the original after a change, run the multiplier BACKWARDS: original = new value ÷ multiplier. If price rose 20%, new = original × 1.2, so original = new ÷ 1.2. If price fell 25%, new = original × 0.75, so original = new ÷ 0.75.",
      examples: [
        "Sale $60 after 25% off: original = 60 ÷ 0.75 = $80. Check: 80 × 0.75 = 60 ✓.",
        "Price rose 20% to $120: original = 120 ÷ 1.2 = $100. Check: 100 × 1.2 = 120 ✓.",
      ],
      pitfall: "Do NOT subtract the same percent you added. A 25% discount to $60 means original = 60 ÷ 0.75 = $80, NOT 60 + 15 = $75. '25% off' multiplies the original by 0.75 — undo that multiplication by dividing.", altExplanations: ["MONEY: a $60 jacket was '25% off' — you don't add 25% of 60 back (that would be $75, wrong). The tag price was multiplied by 0.75 to make 60, so divide: 60 ÷ 0.75 = $80. Undo the multiplication, don't rewind the percent.", "GAME: a level's XP was boosted 20% to 120 XP. Reverse the buff by dividing by 1.2: 120 ÷ 1.2 = 100 XP was the original. Subtracting 20% of the boosted number lands on the wrong base."],
    },
  ],
  gutChecks: [
    { prompt: "An item costs $45 after a 10% discount. Original price?", answer: "45 ÷ 0.9 = $50 — check: 50 × 0.9 = 45." },
  ],
  quiz: {
    pool: [
      {
        id: "U5L4-mcq-1", type: "mcq", category: "procedural",
        prompt: "A price rose 20% to $120. Original price?",
        options: [{ id: "a", text: "$100" }, { id: "b", text: "$96" }, { id: "c", text: "$144" }, { id: "d", text: "$120" }],
        correctOptionId: "a",
        diagnoses: { b: "96 is 120 × 0.8 — the wrong direction. Undo ×1.2 by dividing: 120 ÷ 1.2 = 100.", c: "144 is 120 × 1.2 — forward again.", d: "120 is the new price, not the original." },
        explanation: "New = original × 1.2. Original = 120 ÷ 1.2 = 100.",
        hints: ["Undo ×1.2.", "120 ÷ 1.2.", "100."],
      },
      {
        id: "U5L4-mcq-2", type: "mcq", category: "conceptual",
        prompt: "After a 60% discount, an item is $40. What was the original?",
        options: [{ id: "a", text: "$64" }, { id: "b", text: "$100" }, { id: "c", text: "$24" }, { id: "d", text: "$40" }],
        correctOptionId: "b",
        diagnoses: { a: "64 = 40 × 1.6 — adding 60% of 40, but the 60% was of the ORIGINAL.", c: "24 = 40 × 0.6 — you paid 40%, so divide by 0.4, not 0.6.", d: "40 is what you pay, not the original." },
        explanation: "You pay 40% of the original: original = 40 ÷ 0.4 = 100.",
        hints: ["Paying 40% means ×0.4.", "40 ÷ 0.4.", "100."],
      },
      {
        id: "U5L4-mcq-3", type: "mcq", category: "word",
        prompt: "A jacket costs $63 after a 30% discount. Original price?",
        options: [{ id: "a", text: "$44.10" }, { id: "b", text: "$81.90" }, { id: "c", text: "$90" }, { id: "d", text: "$63" }],
        correctOptionId: "c",
        diagnoses: { b: "81.90 = 63 × 1.3 — adding 30% of sale price, wrong base.", a: "44.10 = 63 × 0.7 — the sale is 70%, so divide by 0.7.", d: "63 is the sale price." },
        explanation: "Pay 70%: original = 63 ÷ 0.7 = 90.",
        hints: ["Pay 70% = ×0.7.", "63 ÷ 0.7.", "90."],
      },
      {
        id: "U5L4-mcq-4", type: "mcq", category: "conceptual",
        prompt: "Why can't you 'just add 30% back' after a 30% discount?",
        options: [
          { id: "a", text: "You can always just add it back" },
          { id: "b", text: "Percentages can't be reversed" },
          { id: "c", text: "30% is too small" },
          { id: "d", text: "The 30% was taken from the original, not from the sale price" },
        ],
        correctOptionId: "d",
        diagnoses: { b: "They can be reversed — divide by the MULTIPLIER (0.7), not add the percent.", c: "Size doesn't matter; the base does.", a: "Test it: 100 → 70 → add 21 = 91 ≠ 100." },
        explanation: "A 30% discount multiplies the ORIGINAL by 0.7. To reverse, divide by 0.7 — adding 30% of the smaller number is weaker than the original 30%.",
        hints: ["What was multiplied?", "Undo multiplication with division.", "÷0.7, not +30%."],
      },
      {
        id: "U5L4-mcq-5", type: "mcq", category: "procedural",
        prompt: "A salary rose 10% to $550. Original salary?",
        options: [{ id: "a", text: "$500" }, { id: "b", text: "$495" }, { id: "c", text: "$605" }, { id: "d", text: "$550" }],
        correctOptionId: "a",
        diagnoses: { b: "495 = 550 × 0.9 — wrong direction.", c: "605 = 550 × 1.1 — forward again.", d: "550 is the new salary." },
        explanation: "550 ÷ 1.1 = 500.",
        hints: ["Undo ×1.1.", "550 ÷ 1.1.", "500."],
      },
      {
        id: "U5L4-mcq-6", type: "mcq", category: "word",
        prompt: "A phone costs $204 after a 15% discount. Original price?",
        options: [{ id: "a", text: "$234.60" }, { id: "b", text: "$240" }, { id: "c", text: "$173.40" }, { id: "d", text: "$204" }],
        correctOptionId: "b",
        diagnoses: { a: "234.60 = 204 × 1.15 — wrong base.", c: "173.40 = 204 × 0.85 — divide by 0.85 instead.", d: "204 is the sale price." },
        explanation: "Pay 85%: original = 204 ÷ 0.85 = 240.",
        hints: ["Pay 85% = ×0.85.", "204 ÷ 0.85.", "240."],
      },
      {
        id: "U5L4-num-1", type: "numeric-input", category: "procedural",
        prompt: "An item is $50 after a 50% discount. Original price?", answer: 100, tolerance: 0, unit: "$",
        explanation: "Pay 50% = ×0.5. Original = 50 ÷ 0.5 = 100.",
        hints: ["×0.5.", "50 ÷ 0.5.", "100."],
      },
      {
        id: "U5L4-num-2", type: "numeric-input", category: "procedural",
        prompt: "A price rose 25% to $25. Original?", answer: 20, tolerance: 0, unit: "$",
        explanation: "25 ÷ 1.25 = 20.",
        hints: ["×1.25.", "25 ÷ 1.25.", "20."],
      },
      {
        id: "U5L4-num-3", type: "numeric-input", category: "conceptual",
        prompt: "You pay $21 for a book after a 30% discount. Original?", answer: 30, tolerance: 0, unit: "$",
        explanation: "Pay 70%: 21 ÷ 0.7 = 30.",
        hints: ["Pay 70%.", "21 ÷ 0.7.", "30."],
      },
      {
        id: "U5L4-num-4", type: "numeric-input", category: "word",
        prompt: "After a 20% price increase, a ticket costs $96. Original?", answer: 80, tolerance: 0, unit: "$",
        explanation: "96 ÷ 1.2 = 80.",
        hints: ["Undo ×1.2.", "96 ÷ 1.2.", "80."],
      },
      {
        id: "U5L4-frac-1", type: "fraction-input", category: "conceptual",
        prompt: "An item is $20 after a 20% discount. Write the original price $25 as a fraction of $20 (the sale price) — simplified.",
        numerator: 5, denominator: 4, acceptEquivalent: true,
        explanation: "25/20 = 5/4 — original is 1.25 times the sale price.",
        hints: ["Original divided by sale price.", "25 ÷ 20.", "5/4."],
      },
      {
        id: "U5L4-tf-1", type: "true-false-justify", category: "conceptual",
        prompt: "To reverse a 10% increase, divide by 1.1.",
        isTrue: true,
        explanation: "New = original × 1.1, so original = new ÷ 1.1.",
        hints: ["Undo multiplication.", "÷1.1.", "True."],
      },
      {
        id: "U5L4-tf-2", type: "true-false-justify", category: "conceptual",
        prompt: "A 50% discount on $40 means the original was $60.",
        isTrue: false,
        explanation: "Pay 50%: original = 40 ÷ 0.5 = $80, not $60.",
        hints: ["40 ÷ 0.5.", "80.", "False."],
      },
      {
        id: "U5L4-order-1", type: "order-steps", category: "word",
        prompt: "Order the steps to find the original after a 20% discount to $48.",
        sequence: ["Identify the multiplier: 0.8", "Divide: 48 ÷ 0.8", "48 ÷ 0.8 = 60", "Check: 60 × 0.8 = 48"],
        diagnoses: {
          "Divide: 48 ÷ 0.8@0": "Identify the multiplier first.",
          "48 ÷ 0.8 = 60@0": "Do the division.",
          "Check: 60 × 0.8 = 48@0": "Check last.",
        },
        explanation: "Pay 80% → multiplier 0.8 → divide → verify.",
        hints: ["Pay 80%.", "48 ÷ 0.8.", "60."],
      },
      {
        id: "U5L4-drag-1", type: "drag-match", category: "conceptual",
        prompt: "Match each reverse problem to the multiplier you divide by.",
        pairs: [
          { source: "20% discount", target: "0.8" },
          { source: "25% increase", target: "1.25" },
          { source: "15% discount", target: "0.85" },
        ],
        diagnoses: {
          "20% discount->0.2": "You divide by 0.8 (what you pay), not 0.2.",
          "25% increase->0.25": "Increase uses 1.25.",
          "15% discount->1.15": "A discount uses 0.85, not 1.15.",
        },
        explanation: "Discount p% → divide by (1 − p/100); increase p% → divide by (1 + p/100).",
        hints: ["Pay 80%.", "×1.25 reversed.", "Pay 85%."],
      },
      {
        id: "U5L4-graph-1", type: "graph-interact", category: "word",
        prompt: "Slider (key: value): set it to the original price if a 20% discount leaves $40.",
        challenge: "Set the slider to 50.",
        validate: { value: 50 },
        tolerance: 0.01,
        explanation: "40 ÷ 0.8 = 50.",
        hints: ["Pay 80%.", "40 ÷ 0.8.", "50."],
      },
    ],
    selection: { procedural: 2, conceptual: 2, word: 1 },
    passThreshold: 0.8,
  },
  commonMistakes: [
    {
      wrongPattern: "adds the percent back instead of dividing",
      diagnosis: "A 25% discount to $60 → original = 60 ÷ 0.75 = $80. Adding 25% of 60 gives $75 — wrong base.",
      hint: "Undo the multiplication by dividing by the multiplier.",
    },
    {
      wrongPattern: "uses the wrong multiplier (0.25 not 0.75)",
      diagnosis: "After a 25% discount you pay 75% = 0.75. Divide by 0.75, not 0.25.",
      hint: "What do you PAY? That's the multiplier.",
    },
    {
      wrongPattern: "multiplies instead of dividing",
      diagnosis: "40 after 20% off: 40 × 1.2 = 48 is wrong. The forward move was ×0.8; the reverse is ÷0.8 = 50.",
      hint: "Forward ×0.8 → backward ÷0.8.",
    },
  ],
  recallTags: ["reverse-percentages", "original-value", "multipliers"],
  discovery: {
    challenges: [
      {
        instruction: "Balance $100 on the left. Apply ×0.75 (25% off) → $75. Now try to return to 100.",
        observe: "Adding 25% of 75 gives 93.75, not 100. Only dividing 75 by 0.75 restores 100 exactly.",
      },
      {
        instruction: "Try ×1.2 then reverse.",
        observe: "×1.2 forward, ÷1.2 backward — perfect round trip.",
      },
    ],
    predict: {
      prompt: "Before you balance: a 20% discount left $80. Is the original $96 or $100?",
      options: [
        { id: "a", text: "$100" },
        { id: "b", text: "$96" },
        { id: "c", text: "$80" },
      ],
      reveal: "$100 — because 20% off means ×0.8, and 80 ÷ 0.8 = 100.",
    },
    sayItYourWay: {
      prompt: "How do you undo a percentage change?",
      phrasings: [
        { id: "a", text: "Divide by the same multiplier that was used forward", correct: true, why: "The forward move multiplies; reversing divides by the same multiplier." },
        { id: "b", text: "Subtract the same percent again", correct: false, why: "That acts on the wrong base and never returns to the start." },
        { id: "c", text: "Add the same percent to the new value", correct: false, why: "The percent was of the ORIGINAL, not the new value." },
      ],
      formalName: "reverse percentage",
    },
    stretch: "If a price rose 20% and then fell 20% to $96, what was the ORIGINAL price? Combine both steps.",
  },
};