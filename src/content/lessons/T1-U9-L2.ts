import type { Lesson } from "../schema";

export const T1U9L2: Lesson = {
  // @meta
  id: "T1-U9-L2",
  tier: 1,
  unit: "Standard form & accuracy",
  title: "How Honest Is This Number?",
  prerequisites: ["T1-U8-L3","T1-U9-L1"],
  estimatedMinutes: 12,
  hook: {
    question: "A road sign says the next town is 6.0 km away. Another says 6.00 km. Same number? The extra zeros whisper a secret: 'I know this distance far more precisely than 6 does.' Can writing more digits ever mean MORE honesty?",
    type: "paradox",
  },
  intuitionBlocks: [{ widget: "ratio-bar", narrative: "The RatioBar shows the same bar split into different numbers of parts. 6, 6.0, and 6.00 all point to the same spot on the bar — but each claims a different confidence: 6 could be 5.6 rounded up, while 6.0 was measured to the nearest tenth. Significant figures are the digits that carry that honesty." }],

  // @discovery
  formalBlocks: [
    { definition: "Significant figures are the digits that carry real information about a measured or rounded value. Rules: non-zero digits are always significant; zeros between digits are significant; trailing zeros AFTER the decimal point are significant; leading zeros (like 0.002) are just placeholders and never count. When rounding to n significant figures, keep n digits and round from the first non-zero digit.", examples: ["0.00304 has THREE significant figures: 3, 0 (between), 4 — the leading zeros don't count.", "7,200 to 2 sig figs is 7,200 → 7.2 × 10³; to 3 sig figs it's 7.20 × 10³ — the standard-form trip tells you honesty is kept."], pitfall: "8,000 is ambiguous: 1, 2, 3, or 4 sig figs? Write 8.00 × 10³ for three, or 8 × 10³ for one — standard form removes the guesswork.", altExplanations: ["GAME: leaderboard precision — a score of 7,200 could mean 'about seven thousand' or 'exactly 7,200'; trailing digits are the uncertainty. Significant figures say exactly how many digits the score really claims.", "MONEY: a bill of $0.00304 — the leading zeros are just placeholder cents columns; the real info is in 3, 0, 4. Leading zeros never count as significant figures — they only park the number in place."] },
  ],
  gutChecks: [{ prompt: "How many significant figures are in 0.0405?", answer: "Three (4, 0 between, 5) — the leading zero is only a placeholder." }],
  quiz: {
    pool: [
      // @q01
      { id: "U9L2-mcq-1", type: "mcq", category: "procedural", prompt: "How many significant figures does 0.00304 have?", options: [ { id: "a", text: "Three" }, { id: "b", text: "Five" }, { id: "c", text: "Four" }, { id: "d", text: "Two" } ], correctOptionId: "a", diagnoses: { b: "Leading zeros don't count — they only set the scale.", c: "Check which zeros sit BETWEEN digits.", d: "The 0 between 3 and 4 IS significant." }, explanation: "3, 0 (between), and 4 are significant — leading zeros never count.", hints: ["Leading zeros are placeholders.", "Count from the first non-zero.", "Three."] },
      // @q02
      { id: "U9L2-mcq-2", type: "mcq", category: "conceptual", prompt: "Which number claims the MOST precision (most sig figs)?", options: [ { id: "a", text: "5.60" }, { id: "b", text: "5.6" }, { id: "c", text: "5.600" }, { id: "d", text: "5" } ], correctOptionId: "c", diagnoses: { a: "5.60 has three sig figs — good, but not the most here.", b: "5.6 has two sig figs.", d: "5 has just one sig fig." }, explanation: "5.600 has FOUR sig figs — every trailing zero after the point counts.", hints: ["Count trailing zeros after the decimal point.", "5.600 keeps all of them.", "5.600."] },
      // @q03
      { id: "U9L2-mcq-3", type: "mcq", category: "word", prompt: "A sign says the lake is 12.0 km away. What does the '.0' honestly claim?", options: [ { id: "a", text: "Measured to the nearest tenth of a km" }, { id: "b", text: "It is exactly 12 km" }, { id: "c", text: "The lake is a tenth of a km wide" }, { id: "d", text: "Nothing — zeros are decorations" } ], correctOptionId: "a", diagnoses: { b: "It's rounded to a tenth — could really be 11.96 or 12.04.", c: "Location, not size.", d: "The zero after the point IS significant — it narrows the range." }, explanation: "12.0 is rounded to the nearest tenth, so the true distance sits between 11.95 and 12.05 km.", hints: ["What place does the digit after the point mark?", "Tenths.", "Nearest tenth of a km."] },
      // @q04
      { id: "U9L2-mcq-4", type: "mcq", category: "procedural", prompt: "Round 4,652 to TWO significant figures.", options: [ { id: "a", text: "4,700" }, { id: "b", text: "4,600" }, { id: "c", text: "4,650" }, { id: "d", text: "5,000" } ], correctOptionId: "a", diagnoses: { b: "You truncated instead of rounding — 5 makes 6 go up.", c: "That's 3–4 sig figs, and still truncating the 5.", d: "Too aggressive — rounding to one sig fig." }, explanation: "4,652 → keep 4,6; the next digit 5 rounds 6 up to 7 → 4,700.", hints: ["Two sig figs means keep 4 and 6.", "Check the third digit: 5 rounds up.", "4,700."] },
      // @q05
      { id: "U9L2-mcq-5", type: "mcq", category: "conceptual", prompt: "How does standard form remove 8,000's ambiguity?", options: [ { id: "a", text: "It shows exactly which digits count" }, { id: "b", text: "It makes the number smaller" }, { id: "c", text: "It removes all zeros" }, { id: "d", text: "It rounds the number" } ], correctOptionId: "a", diagnoses: { b: "Standard form never changes the value.", c: "The exponential notation still holds the zeros as a power of ten.", d: "Value stays exact; only the honesty is clarified." }, explanation: "8 × 10³ says ONE sig fig; 8.00 × 10³ says THREE — the mantissa carries the honesty.", hints: ["Look at the mantissa in a×10ⁿ.", "More mantissa digits = more sig figs.", "It shows which digits count."] },
      // @q06
      { id: "U9L2-mcq-6", type: "mcq", category: "word", prompt: "A lab scale reads 25.40 g. The measurement is honest to how many significant figures?", options: [ { id: "a", text: "Four" }, { id: "b", text: "Three" }, { id: "c", text: "Five" }, { id: "d", text: "Two" } ], correctOptionId: "a", diagnoses: { b: "The final 0 was measured too — 25.40 is to hundredths.", c: "The 2,5,4,0 = 4; there is no fifth digit.", d: "Under-counting the measured zeros." }, explanation: "2, 5, 4, and the trailing 0 after the point are all significant → four sig figs.", hints: ["Trailing zeros after the point count.", "Count 2, 5, 4, 0.", "Four."] },
      // @q07
      { id: "U9L2-num-1", type: "numeric-input", category: "procedural", prompt: "How many significant figures are in 12.30? Type the count.", answer: 4, tolerance: 0, explanation: "1, 2, 3, and the trailing 0 after the point → four sig figs.", hints: ["Trailing zeros after the decimal point count.", "1, 2, 3, 0.", "4."] },
      // @q08
      { id: "U9L2-num-2", type: "numeric-input", category: "procedural", prompt: "Round 8,420 to TWO significant figures. Type the rounded value.", answer: 8400, tolerance: 0, explanation: "Keep 8 and 4; third digit 2 → no change → 8,400.", hints: ["Keep the first two digits.", "2 is below 5 — no rounding up.", "8400."] },
      // @q09
      { id: "U9L2-num-3", type: "numeric-input", category: "conceptual", prompt: "Round 0.00749 to TWO significant figures. Type the power of ten in your answer (n in a×10ⁿ).", answer: -3, tolerance: 0, explanation: "0.00749 → 7.5 × 10⁻³ — keep 7 and 4; the next digit 9 rounds the 4 up to 5 → 7.5.", hints: ["First non-zero digit: 7.", "Keep 7.4, then the 9 rounds the 4 up.", "10⁻³."] },
      // @q10
      { id: "U9L2-frac-1", type: "fraction-input", category: "conceptual", prompt: "0.1250 measured to four sig figs: write the value as a simplified fraction.", numerator: 1, denominator: 8, acceptEquivalent: true, explanation: "0.1250 = 125/1000 = 1/8 — the trailing zero means four sig figs.", hints: ["0.125 = 125/1000.", "Simplify.", "1/8."] },
      // @q11
      { id: "U9L2-tf-1", type: "true-false-justify", category: "conceptual", prompt: "0.0020 has two significant figures.", isTrue: true, explanation: "The leading zeros don't count; the 2 and the trailing 0 after the point do → two.", hints: ["Leading zeros are placeholders.", "2 and the final 0 count.", "True."] },
      // @q12
      { id: "U9L2-tf-2", type: "true-false-justify", category: "conceptual", prompt: "4,900 written plainly is definitely two significant figures.", isTrue: false, explanation: "The zeros left of the point are ambiguous — 4,900 could be 2, 3, or 4 sig figs. Use standard form to be sure.", hints: ["Where is the decimal point?", "Trailing zeros left of it are unclear.", "False — ambiguous."] },
      // @q13
      { id: "U9L2-order-1", type: "order-steps", category: "word", prompt: "Put the steps to round 2,653 to two sig figs in order.", sequence: ["Find the first two significant digits: 2, 6", "Look at the third digit: 5", "5 rounds the 6 up to 7", "Answer: 2,700"], diagnoses: { "Look at the third digit: 5@0": "Identify the digits you keep first.", "Answer: 2,700@0": "Round before writing the answer.", "Find the first two significant digits: 2, 6@1": "This comes first." }, explanation: "Keep 2 and 6; the third digit 5 rounds the 6 up → 2,700.", hints: ["Start by keeping the first two digits.", "Check the next digit.", "2,700."] },
      // @q14
      { id: "U9L2-drag-1", type: "drag-match", category: "conceptual", prompt: "Match each number to its number of significant figures.", pairs: [ { source: "0.0304", target: "3" }, { source: "3.040", target: "4" }, { source: "304", target: "3" } ], diagnoses: { "0.0304->4": "Leading zeros don't count — 3, 0 (between), 4 = 3.", "3.040->3": "The trailing 0 after the point counts → 4.", "304->4": "304 has three sig figs." }, explanation: "0.0304 → 3; 3.040 → 4; 304 → 3.", hints: ["Leading zeros never count.", "Trailing zeros after the point do.", "Match by counting."] },
      // @q15
      { id: "U9L2-graph-1", type: "graph-interact", category: "word", prompt: "This slider reads to the nearest hundred. Set it to the value of 4,700 (which has 2 sig figs) (key: value).", challenge: "Set the slider to 4700.", validate: { value: 4700 }, tolerance: 0, explanation: "4,700 = two sig figs, marked to the nearest hundred.", hints: ["Two sig figs = nearest hundred.", "4700.", "4700."] }
    ],
    selection: { procedural: 2, conceptual: 2, word: 1 },
    passThreshold: 0.8,
  },
  commonMistakes: [
    { wrongPattern: "counts leading zeros", diagnosis: "0.0021 has TWO sig figs, not five — leading zeros only set the scale.", hint: "Start counting at the first non-zero digit." },
    { wrongPattern: "trailing zeros left of the point always count", diagnosis: "3,000 could be one sig fig — without a point or standard form you can't tell.", hint: "Use standard form to make trailing zeros honest." },
    { wrongPattern: "trailing zeros after the point ignored", diagnosis: "5.60 has THREE sig figs — the zero after the point was measured, so it counts.", hint: "If the zero was measured, it's significant." },
  ],
  recallTags: ["significant-figures", "rounding", "precision"],
  discovery: {
    challenges: [
      { instruction: "Slide the bar to 50, then back to 50.0, then 50.00. Watch the marked position.", observe: "The position never moves — but the ruler's noise does: each extra digit narrows the band of 'maybe'." },
      { instruction: "Now think: 8,000 vs 8,000.0. Which one claims more precision?", observe: "8,000.0 has FIVE significant figures (the .0 counts); plain 8,000 might be rounded to the nearest thousand." },
    ],
    predict: { prompt: "Which has more significant figures: 3.20 or 3.2?", options: [{ id: "a", text: "3.20 — three sig figs" }, { id: "b", text: "3.2 — two sig figs" }, { id: "c", text: "They are the same" }], reveal: "3.20 has THREE significant figures — the trailing zero after the decimal point is significant. Trailing zeros LEFT of the point (like in 8,000) are the slippery ones." },
    sayItYourWay: { prompt: "When is a zero 'significant'?", phrasings: [{ id: "a", text: "When it lies between digits or after a decimal point", correct: true, why: "Zeros in 1.05 and 3.20 carry exact information; leading zeros and some trailing ones don't." }, { id: "b", text: "Every zero in the number", correct: false, why: "8,000's zeros may just be placeholders for rounding." }, { id: "c", text: "Only zeros at the very start", correct: false, why: "Leading zeros like in 0.002 are never significant — they set scale, not precision." }], formalName: "significant figures" },
    stretch: "If a scale reads 5.2 kg to one decimal, the true mass could be 5.15 or 5.24. So what are the biggest and smallest possible actual masses? Bounds are coming next.",
  },
};
