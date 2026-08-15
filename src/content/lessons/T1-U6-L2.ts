import type { Lesson } from "../schema";

export const T1U6L2: Lesson = {
  id: "T1-U6-L2",
  tier: 1,
  unit: "Ratio & proportion",
  title: "Sharing Fairly (On Purpose Unequally)",
  prerequisites: ["T1-U5-L4","T1-U6-L1"],
  estimatedMinutes: 12,
  hook: {
    question: "Two friends invest in a lemonade stand: Aya puts in $3, Ben puts in $5. They make $40 profit. Is it fair to split $20 each? The ratio 3:5 says no — Aya gets 3 parts, Ben gets 5 parts. Dividing in a ratio is sharing 'fairly' by contribution, not equally.",
    type: "real-world",
  },
  intuitionBlocks: [
    {
      widget: "ratio-bar",
      narrative: "The RatioBar splits the whole into 3:5. Slide it and watch: total parts = 3 + 5 = 8. One part = total ÷ 8. Aya's share = 3 parts, Ben's = 5. Each part is the same size — the ratio tells you HOW MANY parts each person gets.",
    },
  ],
  formalBlocks: [
    {
      definition: "To divide a total in the ratio $a:b$: (1) add the parts to get the total number of parts $a+b$; (2) find one part = total ÷ ($a+b$); (3) multiply by $a$ and by $b$ for each share.",
      examples: [
        "Split $40 in ratio 3:5 → 8 parts total, one part = $40 ÷ 8 = $5. Aya = 3×5 = $15, Ben = 5×5 = $25. Check: 15 + 25 = 40 ✓.",
        "Split 60 cm in ratio 1:2 → 3 parts, one part = 20 cm. First = 20 cm, second = 40 cm.",
      ],
      pitfall: "Never split by just taking the ratio numbers — $40 in 3:5 isn't 'give 3 and 5'. The ratio counts PARTS; the total money is spread across ALL 8 parts first.", altExplanations: ["MONEY: splitting $40 with 3:5 — the '3' and '5' are share-sticks, not dollars. There are 8 sticks total; each stick holds $5, so 3 sticks give $15. Never hand '3 and 5' dollars.", "FOOD: dividing 60 cm of ribbon in ratio 1:2 — 3 equal-length pieces first (20 cm each), then one share takes 1 piece, the other takes 2. The ratio counts pieces, not direct lengths."],
    },
  ],
  gutChecks: [
    { prompt: "Split 30 in ratio 1:2 — what are the two shares?", answer: "3 parts → one part = 10; shares 10 and 20." },
  ],
  quiz: {
    pool: [
      {
        id: "U6L2-mcq-1", type: "mcq", category: "procedural",
        prompt: "Split 40 in ratio 3:5. What is Aya's share (3 parts)?",
        options: [{ id: "a", text: "$15" }, { id: "b", text: "$25" }, { id: "c", text: "$3" }, { id: "d", text: "$24" }],
        correctOptionId: "a",
        diagnoses: { b: "25 is Ben's share (5 parts).", c: "3 is the number of parts, not dollars.", d: "24 = 40 × 0.6 — wrong method." },
        explanation: "8 parts, one part = 5. Aya = 3 × 5 = 15.",
        hints: ["Total parts = 3 + 5.", "40 ÷ 8 = 5 per part.", "3 × 5 = 15."],
      },
      {
        id: "U6L2-mcq-2", type: "mcq", category: "conceptual",
        prompt: "Why do you add the ratio numbers (a + b) first?",
        options: [
          { id: "a", text: "To find how many equal parts the whole breaks into" },
          { id: "b", text: "To make the numbers bigger" },
          { id: "c", text: "To find the biggest share" },
          { id: "d", text: "You don't add them" },
        ],
        correctOptionId: "a",
        diagnoses: { b: "Adding isn't for size — it counts the total slices.", c: "You add first, then each share is found after.", d: "The ratio's parts always add to the whole's slice count." },
        explanation: "The ratio tells how many slices SHAPE the whole. a + b parts split the total evenly; each person gets their part-count of slices.",
        hints: ["How many slices total?", "3 + 5 = 8 slices.", "Divide the total by that."],
      },
      {
        id: "U6L2-mcq-3", type: "mcq", category: "word",
        prompt: "2 partners invest 1:4 and share $100 profit. What does the larger share get?",
        options: [{ id: "a", text: "$80" }, { id: "b", text: "$20" }, { id: "c", text: "$25" }, { id: "d", text: "$40" }],
        correctOptionId: "a",
        diagnoses: { b: "20 is the SMALLER share (1 part).", c: "25 = 100 ÷ 4 — wrong part count.", d: "40 ignores the 5 parts." },
        explanation: "5 parts, one part = 20. Larger (4 parts) = 80.",
        hints: ["1 + 4 = 5 parts.", "100 ÷ 5 = 20.", "4 × 20 = 80."],
      },
      {
        id: "U6L2-mcq-4", type: "mcq", category: "procedural",
        prompt: "Split 60 in ratio 2:3. What is the smaller share?",
        options: [{ id: "a", text: "24" }, { id: "b", text: "36" }, { id: "c", text: "20" }, { id: "d", text: "30" }],
        correctOptionId: "a",
        diagnoses: { b: "36 is the larger share (3 parts).", c: "20 = 60 ÷ 3 — wrong part count.", d: "30 = 60 ÷ 2." },
        explanation: "5 parts, one part = 12. Smaller (2) = 24.",
        hints: ["2 + 3 = 5 parts.", "60 ÷ 5 = 12.", "2 × 12 = 24."],
      },
      {
        id: "U6L2-mcq-5", type: "mcq", category: "conceptual",
        prompt: "A 1:1 split of $50 — how much each?",
        options: [{ id: "a", text: "$25 each" }, { id: "b", text: "$1 and $50" }, { id: "c", text: "$50 each" }, { id: "d", text: "$10 each" }],
        correctOptionId: "a",
        diagnoses: { b: "1:1 means equal parts, one part each — not $1.", c: "That sums to $100.", d: "10 each sums to 20." },
        explanation: "2 parts, one part = 25, each gets 1 part = 25.",
        hints: ["1 + 1 = 2 parts.", "50 ÷ 2.", "25 each."],
      },
      {
        id: "U6L2-mcq-6", type: "mcq", category: "word",
        prompt: "A wire 48 cm is cut in ratio 1:3. Shorter piece?",
        options: [{ id: "a", text: "12 cm" }, { id: "b", text: "36 cm" }, { id: "c", text: "16 cm" }, { id: "d", text: "24 cm" }],
        correctOptionId: "a",
        diagnoses: { b: "36 is the longer piece.", c: "16 = 48 ÷ 3.", d: "24 = 48 ÷ 2." },
        explanation: "4 parts, one part = 12. Shorter (1 part) = 12 cm.",
        hints: ["1 + 3 = 4 parts.", "48 ÷ 4 = 12.", "12 cm."],
      },
      {
        id: "U6L2-num-1", type: "numeric-input", category: "procedural",
        prompt: "Split 40 in ratio 1:3. Type the larger share.", answer: 30, tolerance: 0,
        explanation: "4 parts, one part = 10. Larger (3) = 30.",
        hints: ["4 parts total.", "40 ÷ 4 = 10.", "3 × 10 = 30."],
      },
      {
        id: "U6L2-num-2", type: "numeric-input", category: "procedural",
        prompt: "Split 90 in ratio 2:3. Type the smaller share.", answer: 36, tolerance: 0,
        explanation: "5 parts, one part = 18. Smaller (2) = 36.",
        hints: ["5 parts.", "90 ÷ 5 = 18.", "2 × 18 = 36."],
      },
      {
        id: "U6L2-num-3", type: "numeric-input", category: "conceptual",
        prompt: "How many parts in a 4:5 split?", answer: 9, tolerance: 0,
        explanation: "4 + 5 = 9 parts.",
        hints: ["Add the ratio.", "4 + 5.", "9."],
      },
      {
        id: "U6L2-num-4", type: "numeric-input", category: "word",
        prompt: "$120 shared in ratio 5:3, larger share is how much?", answer: 75, tolerance: 0, unit: "$",
        explanation: "8 parts, one part = 15. Larger (5) = 75.",
        hints: ["8 parts.", "120 ÷ 8 = 15.", "5 × 15 = 75."],
      },
      {
        id: "U6L2-frac-1", type: "fraction-input", category: "conceptual",
        prompt: "In a 3:5 split, the smaller (3) share is what fraction of the whole (simplified)?",
        numerator: 3, denominator: 8, acceptEquivalent: false,
        explanation: "Whole = 8 parts; 3/8.",
        hints: ["3 + 5 = 8.", "3 out of 8.", "3/8."],
      },
      {
        id: "U6L2-tf-1", type: "true-false-justify", category: "conceptual",
        prompt: "Dividing $50 in ratio 1:1 is the same as splitting equally.",
        isTrue: true,
        explanation: "1:1 means one part each — exactly equal shares ($25 each).",
        hints: ["One part each.", "Equal share.", "True."],
      },
      {
        id: "U6L2-tf-2", type: "true-false-justify", category: "conceptual",
        prompt: "In a 2:5 split of 70, the 5-part share is 25.",
        isTrue: false,
        explanation: "7 parts, one part = 10. The 5-part share = 50, not 25.",
        hints: ["2 + 5 = 7.", "70 ÷ 7 = 10.", "5 × 10 = 50 — false."],
      },
      {
        id: "U6L2-order-1", type: "order-steps", category: "word",
        prompt: "Order the steps to split 30 in ratio 2:1.",
        sequence: ["Add parts: 2+1 = 3", "One part = 30 ÷ 3 = 10", "Shares: 2×10 and 1×10", "Check: 20 + 10 = 30"],
        diagnoses: {
          "One part = 30 ÷ 3 = 10@0": "Add the parts first.",
          "Shares: 2×10 and 1×10@0": "Multiply each part-count.",
          "Check: 20 + 10 = 30@0": "Check last.",
        },
        explanation: "Find one part, then scale by each ratio number.",
        hints: ["Total parts 3.", "One part 10.", "20 and 10."],
      },
      {
        id: "U6L2-drag-1", type: "drag-match", category: "conceptual",
        prompt: "Match each split to its two shares.",
        pairs: [
          { source: "30 in 1:2", target: "10, 20" },
          { source: "40 in 3:1", target: "30, 10" },
          { source: "50 in 2:3", target: "20, 30" },
        ],
        diagnoses: {
          "30 in 1:2->20, 10": "Order matters — first share is the 1 part = 10.",
          "40 in 3:1->10, 30": "First is 3 parts = 30.",
          "50 in 2:3->30, 20": "First is 2 parts = 20.",
        },
        explanation: "One part × each part-count gives the ordered shares.",
        hints: ["One part of 30 is 10.", "One part of 40 is 10.", "One part of 50 is 10."],
      },
      {
        id: "U6L2-graph-1", type: "graph-interact", category: "word",
        prompt: "Slider (key: value): set it to the SMALLER share when 60 is split 2:3.",
        challenge: "Set the slider to 24.",
        validate: { value: 24 },
        tolerance: 0.01,
        explanation: "5 parts, one part = 12, smaller (2) = 24.",
        hints: ["2 + 3 = 5 parts.", "60 ÷ 5 = 12.", "2 × 12 = 24."],
      },
    ],
    selection: { procedural: 2, conceptual: 2, word: 1 },
    passThreshold: 0.8,
  },
  commonMistakes: [
    {
      wrongPattern: "takes the ratio numbers as the shares",
      diagnosis: "A 3:5 split of $40 is not '$3 and $5'. Total parts first (8), then divide the price per part.",
      hint: "Step 1 is always: add the parts.",
    },
    {
      wrongPattern: "divides total by the wrong number",
      diagnosis: "For 3:5, one part = total ÷ 8, not total ÷ 3 or total ÷ 5.",
      hint: "The divisor is the SUM of the ratio numbers.",
    },
    {
      wrongPattern: "swaps which person gets which share",
      diagnosis: "The first ratio number always belongs to the first named person/thing. Read in order.",
      hint: "Ratios are ordered — first to first.",
    },
  ],
  recallTags: ["ratio", "dividing-in-a-ratio", "shares"],
  discovery: {
    challenges: [
      {
        instruction: "Set the RatioBar to 3:5 and make the total 40. Count the parts: 3 + 5 = 8. What is one part worth?",
        observe: "One part = 40 ÷ 8 = 5. Each part slider unit is a slice of the same size.",
      },
      {
        instruction: "Now change the ratio to 1:4 with total 50.",
        observe: "5 parts, one part = 10 — the slices are bigger because fewer slices share the same total.",
      },
    ],
    predict: {
      prompt: "Before you divide: splitting 30 in ratio 1:2 — is the bigger share more or less than 20?",
      options: [
        { id: "a", text: "Exactly 20" },
        { id: "b", text: "More than 20" },
        { id: "c", text: "Less than 20" },
      ],
      reveal: "Exactly 20 — 3 parts total, one part = 10, the 2-part share = 20.",
    },
    sayItYourWay: {
      prompt: "What is the first step when splitting in a ratio?",
      phrasings: [
        { id: "a", text: "Add the parts to count total slices", correct: true, why: "The ratio numbers count slices; the whole divides across all of them." },
        { id: "b", text: "Multiply the parts together", correct: false, why: "Multiplying gives a combined count that isn't the slice total (3×5=15 ≠ 8)." },
        { id: "c", text: "Divide by the bigger part", correct: false, why: "The whole splits across ALL parts, not just the biggest one." },
      ],
      formalName: "dividing in a ratio",
    },
    stretch: "If A gets 3 parts and B gets 5 parts of $80, how much more does B get than A? Can you answer without finding the shares first?",
  },
};