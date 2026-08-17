import type { Lesson } from "../schema";

export const T2U17L3: Lesson = {
  // @meta
  id: "T2-U17-L3",
  tier: 2,
  unit: "Sequences",
  title: "Doubling Patterns",
  prerequisites: ["T2-U15-L1","T2-U16-L3","T2-U17-L2"],
  estimatedMinutes: 12,
  hook: { question: "A paper doubled 43 times would cross the Moon. Adding grows in a straight line; doubling explodes. The same first few terms disguise it: 1, 2, 3, 4 vs 1, 2, 4, 8 look close — until the graph shows one straight and one rocketing skyward.", type: "paradox" },
  intuitionBlocks: [{ widget: "graph-plotter", narrative: "Plot y = x (each term +1) and y = 2^x (each term ×2) on the same grid by sliding n. The line keeps climbing evenly; the doubling curve takes off. Same start, totally different futures." }],

  // @discovery
  formalBlocks: [{ definition: "A geometric sequence multiplies by a constant ratio r each step: a, ar, ar², ar³, … Term n is a·r^(n−1). Arithmetic adds (linear graph); geometric multiplies (curved, exponential graph). r = 2 doubles; r = 3 triples; r = 1/2 halves.", examples: ["2, 4, 8, 16, … → r = 2, T(10) = 2 × 2⁹ = 1024.", "3, 9, 27, … → r = 3, T(5) = 3 × 3⁴ = 243."], pitfall: "The multiplier is the ratio: 2, 6, 18, 54 has r = 3 (each term ×3), NOT +4. Check by dividing neighbours: 18 ÷ 6 = 3.", altExplanations: ["MONEY: interest compounds — $2 doubling each period is ×2 per step (2, 4, 8, 16), a geometric sequence. Adding $2 per step makes a flat ladder; multiplying makes the curved tower that eventually dwarfs any ladder.", "GAME: enemy HP doubles every wave — the ratio r = 2 is the multiplier connecting neighbours (18 ÷ 6 = 3 for the triple-copy pattern). Geometric sequences multiply a fixed factor; arithmetic sequences add a fixed gap."] }],
  gutChecks: [{ prompt: "For 5, 10, 20, 40, … what is r and T(6)?", answer: "r = 2; T(6) = 5 × 2⁵ = 160." }],
  quiz: {
    pool: [
      // @q01
      { id: "U17L3-mcq-1", type: "mcq", category: "procedural", prompt: "2, 6, 18, 54, … What is r?", options: [ { id: "a", text: "3" }, { id: "b", text: "2" }, { id: "c", text: "4" }, { id: "d", text: "6" } ], correctOptionId: "a", diagnoses: { b: "6 × 2 = 12, not 18.", c: "6 + 4 = 10, not 18 — this isn't +4.", d: "6 is the SECOND term, not the ratio." }, explanation: "6 ÷ 2 = 3 and 18 ÷ 6 = 3 — ratio 3.", hints: ["Divide neighbours.", "6/2 = 3.", "6 ÷ 2 = 3 and 18 ÷ 6 = 3 — ratio 3."] },
      // @q02
      { id: "U17L3-mcq-2", type: "mcq", category: "conceptual", prompt: "What's the key difference between arithmetic and geometric sequences?", options: [ { id: "a", text: "Arithmetic multiplies; geometric adds" }, { id: "b", text: "Arithmetic adds; geometric multiplies" }, { id: "c", text: "They're identical" }, { id: "d", text: "Only geometry uses numbers" } ], correctOptionId: "b", diagnoses: { a: "Reversed — think +d vs ×r.", c: "1, 2, 3 vs 1, 2, 4 diverge quickly.", d: "Both are pure number lists." }, explanation: "+d (linear) versus ×r (curved exponential growth).", hints: ["Think of the gap.", "+d or ×r.", "Add vs multiply."] },
      // @q03
      { id: "U17L3-mcq-3", type: "mcq", category: "word", prompt: "Bacteria double hourly: 100 at hour 0, 200, 400, … Hour 6 = ?", options: [ { id: "a", text: "640" }, { id: "b", text: "1200" }, { id: "c", text: "6400" }, { id: "d", text: "600" } ], correctOptionId: "c", diagnoses: { b: "1200 = 100 + 6×? — that's adding, not doubling.", a: "640 lacks the final doubling step.", d: "600 is adding 100 per hour." }, explanation: "T(7) = 100 × 2⁶ = 6400 (hour 0 is the first term).", hints: ["Hours 0–6 is 6 doublings.", "100 × 2⁶.", "T(7) = 100 × 2⁶ = 6400 (hour 0 is the first term)."] },
      // @q04
      { id: "U17L3-mcq-4", type: "mcq", category: "procedural", prompt: "3, 9, 27, … What is T(5)?", options: [ { id: "a", text: "729" }, { id: "b", text: "81" }, { id: "c", text: "2430" }, { id: "d", text: "243" } ], correctOptionId: "d", diagnoses: { b: "81 is T(4) — one step early.", c: "×10 is not the ratio.", a: "729 = 3 × 3⁵ — too many powers." }, explanation: "T(5) = 3 × 3⁴ = 3 × 81 = 243.", hints: ["r = 3.", "3 × 3⁴.", "T(5) = 3 × 3⁴ = 3 × 81 = 243."] },
      // @q05
      { id: "U17L3-mcq-5", type: "mcq", category: "conceptual", prompt: "Which graph shape signals geometric (exponential) growth?", options: [ { id: "a", text: "A curve bending sharply upward" }, { id: "b", text: "A straight line" }, { id: "c", text: "A flat horizontal line" }, { id: "d", text: "A V shape" } ], correctOptionId: "a", diagnoses: { b: "Straight lines are arithmetic (+d).", c: "Flat means constant — no growth.", d: "V shapes are absolute-value, not exponential." }, explanation: "Repeated multiplication rockets upward — the exponential curve.", hints: ["Doubling curve.", "Bends up.", "Repeated multiplication rockets upward — the exponential curve."] },
      // @q06
      { id: "U17L3-mcq-6", type: "mcq", category: "word", prompt: "A rabbit population triples each year: 10, 30, 90, … Year 4 = ?", options: [ { id: "a", text: "810" }, { id: "b", text: "270" }, { id: "c", text: "120" }, { id: "d", text: "250" } ], correctOptionId: "b", diagnoses: { a: "810 is year 5 (10 × 3⁴).", c: "120 = 10 + 30 + … — that's adding.", d: "10 × 3³ = 270, not 250." }, explanation: "Year 1 = 10 → year 4 = 10 × 3³ = 270.", hints: ["3 jumps to year 4.", "10 × 3³.", "Year 1 = 10 → year 4 = 10 × 3³ = 270."] },
      // @q07
      { id: "U17L3-num-1", type: "numeric-input", category: "procedural", prompt: "2, 4, 8, 16, … Type T(8).", answer: 256, tolerance: 0, explanation: "T(8) = 2 × 2⁷ = 256.", hints: ["r = 2.", "2 × 2⁷.", "T(8) = 2 × 2⁷ = 256."] },
      // @q08
      { id: "U17L3-num-2", type: "numeric-input", category: "procedural", prompt: "5, 10, 20, … Type T(6).", answer: 160, tolerance: 0, explanation: "5 × 2⁵ = 160.", hints: ["r = 2.", "5 × 32.", "5 × 2⁵ = 160."] },
      // @q09
      { id: "U17L3-num-3", type: "numeric-input", category: "conceptual", prompt: "1, 3, 9, 27, … Type T(7).", answer: 729, tolerance: 0, explanation: "r = 3: 1 × 3⁶ = 729.", hints: ["r = 3.", "3⁶ = 729.", "r = 3: 1 × 3⁶ = 729."] },
      // @q10
      { id: "U17L3-frac-1", type: "fraction-input", category: "conceptual", prompt: "100, 50, 25, … Type T(4) as a fraction.", numerator: 25, denominator: 2, acceptEquivalent: true, explanation: "r = 1/2: 100 × (1/2)³ = 25/2.", hints: ["r = 1/2.", "100 ÷ 8.", "r = 1/2: 100 × (1/2)³ = 25/2."] },
      // @q11
      { id: "U17L3-tf-1", type: "true-false-justify", category: "conceptual", prompt: "2, 6, 18, 54, … is geometric with r = 3.", isTrue: true, explanation: "Each term × 3 — ratio 3.", hints: ["Divide neighbours.", "×3 each.", "Each term × 3 — ratio 3."] },
      // @q12
      { id: "U17L3-tf-2", type: "true-false-justify", category: "conceptual", prompt: "2, 4, 6, 8, … is geometric (multiplied by 2).", isTrue: false, explanation: "Gaps are +2 — it's arithmetic, not ×2 (4 × 2 = 8, not 6).", hints: ["Check gaps.", "+2 each.", "Gaps are +2 — it's arithmetic, not ×2 (4 × 2 = 8, not 6)."] },
      // @q13
      { id: "U17L3-order-1", type: "order-steps", category: "word", prompt: "Order the steps to find T(6) of 5, 10, 20, …", sequence: ["Find the ratio: 10 ÷ 5 = 2", "Write T(n) = 5 × 2^(n−1)", "Substitute n = 6: 5 × 2⁵", "Simplify: 5 × 32 = 160"], diagnoses: { "Find the ratio: 10 ÷ 5 = 2@1": "Find r first.", "Write T(n) = 5 × 2^(n−1)@0": "State the formula before substituting.", "Substitute n = 6: 5 × 2⁵@1": "Plug n in after the formula." }, explanation: "Find r, write the formula, substitute, simplify.", hints: ["r = 2.", "Write formula.", "Find r, write the formula, substitute, simplify."] },
      // @q14
      { id: "U17L3-drag-1", type: "drag-match", category: "conceptual", prompt: "Match each sequence to its ratio or difference.", pairs: [ { source: "2, 4, 8, 16", target: "Ratio 2 (geometric)" }, { source: "2, 4, 6, 8", target: "Difference 2 (arithmetic)" }, { source: "3, 9, 27", target: "Ratio 3 (geometric)" } ], diagnoses: { "2, 4, 8, 16->Difference 2 (arithmetic)": "8 − 4 = 4, so the gaps aren't constant — it ×2s.", "2, 4, 6, 8->Ratio 2 (geometric)": "4 × 2 = 8, not 6 — the gaps are +2.", "3, 9, 27->Ratio 2 (geometric)": "9 ÷ 3 = 3, so r = 3." }, explanation: "Divide neighbours for ratio; subtract for difference.", hints: ["Divide for r.", "Subtract for d.", "Divide neighbours for ratio; subtract for difference."] },
      // @q15
      { id: "U17L3-graph-1", type: "graph-interact", category: "word", prompt: "The doubling curve 2, 4, 8, 16, 32 … Set the slider to the SIXTH term (key: value).", challenge: "The doubling curve 2, 4, 8, 16, 32 … — adjust the values below to match the condition.", validate: { value: 64 }, tolerance: 0.01, explanation: "T(6) = 2 × 2⁵ = 64 — six terms, five doublings.", hints: ["6 terms = 5 doublings.", "2 × 2⁵.", "T(6) = 2 × 2⁵ = 64 — six terms, five doublings."] }
    ],
    selection: { procedural: 2, conceptual: 2, word: 1 },
    passThreshold: 0.8,
  },
  commonMistakes: [
    { wrongPattern: "confuses ratio with difference", diagnosis: "2, 4, 8 isn't +2 — divide: 8 ÷ 4 = 2 (ratio).", hint: "Divide neighbours to test for geometric." },
    { wrongPattern: "off-by-one in the power", diagnosis: "T(6) uses r⁵, not r⁶ — the first term is a·r⁰.", hint: "Count jumps: term n has n − 1 multiplications." },
    { wrongPattern: "treats halves as subtraction", diagnosis: "100, 50, 25 halves — that's ×1/2, not −50−25.", hint: "r = 1/2 multiplies down." },
  ],
  recallTags: ["sequences", "geometric", "exponential", "ratio"],
  discovery: {
    challenges: [
      { instruction: "Plot 1, 2, 3, 4 (arith) and 1, 2, 4, 8 (geometric) together.", observe: "The +1 line stays straight; the ×2 curve rockets upward." },
      { instruction: "Share the slider to a big n and compare heights.", observe: "The gap between the two sequences explodes — exponential leaves linear behind." },
    ],
    predict: { prompt: "1, 2, 4, 8, … term 6 is…", options: [{ id: "a", text: "32" }, { id: "b", text: "16" }, { id: "c", text: "12" }], reveal: "32 — 1 × 2⁵. Doubling accumulates faster than students guess; by term 10 it's already 512." },
    sayItYourWay: { prompt: "What makes a sequence geometric?", phrasings: [{ id: "a", text: "Each term multiplies the previous by a constant ratio", correct: true, why: "×r every step — the defining geometric law." }, { id: "b", text: "Each term adds a constant amount", correct: false, why: "That's arithmetic, with +d." }, { id: "c", text: "Terms always get bigger", correct: false, why: "r can be 1/2 (halving) — still geometric." }], formalName: "a geometric sequence (exponential growth)" },
    stretch: "Sequences live on grids as coordinate pictures. The stepping stones from numbers to every graph you'll meet sit in the Cartesian plane — U18 begins there.",
  },
};
