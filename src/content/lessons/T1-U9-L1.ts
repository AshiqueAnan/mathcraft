import type { Lesson } from "../schema";

export const T1U9L1: Lesson = {
  // @meta
  id: "T1-U9-L1",
  tier: 1,
  unit: "Standard form & accuracy",
  title: "Writing the Unwritable",
  prerequisites: ["T1-U1-L1","T1-U7-L2","T1-U8-L3"],
  estimatedMinutes: 12,
  hook: {
    question: "The Milky Way is about 1,000,000,000,000,000,000,000 km wide — a 1 with 21 zeros. A hydrogen atom is 0.0000000001 m wide — a 1 ten places after the point. Both fit in one line if we count the zero-steps in shorthand. How?",
    type: "paradox",
  },
  intuitionBlocks: [{ widget: "number-line", narrative: "Zoom the number line out by ten each time: 1, 10, 100, 1000… Each zoom is one more ×10 step, so the exponent counts the zooms. The same trick counts tiny numbers by zooming IN — the exponent goes negative. Standard form is just 'first digit × 10 to the count of zooms'." }],

  // @discovery
  formalBlocks: [
    { definition: "Standard form (scientific notation) writes a number as $a \\times 10^n$ where $1 \\le a < 10$ and $n$ is an integer. The $n$ counts how many places the digits shift from the '1' position — positive for big numbers, negative for tiny ones.", examples: ["3,200 = 3.2 × 10³ — the digits shift 3 places left of the ones.", "0.0047 = 4.7 × 10⁻³ — the digits shift 3 places right of the point."], pitfall: "The mantissa must be between 1 and 10. 32 × 10² is NOT standard form (32 is too big) — nor is 0.5 × 10³ (0.5 is too small).", altExplanations: ["MONEY: 3,200 as a $3.2 thousand bill — scientific notation is the big-count bill for enormous and tiny numbers: 3.2 × 10³ is the same money as 3,200 but written with the zero-count on the label, not rolled out.", "GAME: health bars and sci-fi stats — a boss at 4.7 × 10⁶ HP is 4,700,000; the exponent is the number of zeros the display hides. Mantissa between 1 and 10 keeps the readout honest."] },
  ],
  gutChecks: [{ prompt: "Write 60,000 in standard form.", answer: "6 × 10⁴ — the 6 sits 4 places left of the ones position." }],
  quiz: {
    pool: [
      // @q01
      { id: "U9L1-mcq-1", type: "mcq", category: "procedural", prompt: "Write 4,500 in standard form.", options: [ { id: "a", text: "4.5 × 10³" }, { id: "b", text: "45 × 10²" }, { id: "c", text: "4.5 × 10⁴" }, { id: "d", text: "450 × 10¹" } ], correctOptionId: "a", diagnoses: { b: "45 is bigger than 10 — that's not standard form.", c: "4.5 × 10⁴ = 45,000 — ten times too big.", d: "450 is way outside the 1–10 range." }, explanation: "4,500 has the 4 four places from the ones → 4.5 × 10³ = 4,500.", hints: ["Only one digit before the point.", "4,500 = 4.5 × 1,000.", "4.5 × 10³."] },
      // @q02
      { id: "U9L1-mcq-2", type: "mcq", category: "conceptual", prompt: "Which of these is in correct standard form?", options: [ { id: "a", text: "5.2 × 10⁴" }, { id: "b", text: "52 × 10³" }, { id: "c", text: "0.52 × 10⁵" }, { id: "d", text: "520 × 10²" } ], correctOptionId: "a", diagnoses: { b: "52 is not between 1 and 10.", c: "0.52 is smaller than 1 — not allowed.", d: "520 is far too big for the mantissa." }, explanation: "Standard form needs 1 ≤ mantissa < 10. Only 5.2 qualifies.", hints: ["Mantissa between 1 and 10.", "5.2 is the only one there.", "5.2 × 10⁴."] },
      // @q03
      { id: "U9L1-mcq-3", type: "mcq", category: "word", prompt: "The distance to a star is 950,000,000,000,000 km. In standard form this is:", options: [ { id: "a", text: "9.5 × 10¹⁴" }, { id: "b", text: "95 × 10¹³" }, { id: "c", text: "9.5 × 10¹³" }, { id: "d", text: "0.95 × 10¹⁵" } ], correctOptionId: "a", diagnoses: { b: "95 is outside 1–10.", c: "9.5 × 10¹³ = 95,000,000,000,000 — ten times too small.", d: "0.95 is smaller than 1." }, explanation: "Count 14 place-shifts: 9.5 moved 14 places left of the ones.", hints: ["How many places does 9.5 shift?", "14.", "9.5 × 10¹⁴."] },
      // @q04
      { id: "U9L1-mcq-4", type: "mcq", category: "procedural", prompt: "Write 0.0007 in standard form.", options: [ { id: "a", text: "7 × 10⁻⁴" }, { id: "b", text: "7 × 10⁴" }, { id: "c", text: "0.7 × 10⁻³" }, { id: "d", text: "700 × 10⁻⁶" } ], correctOptionId: "a", diagnoses: { b: "Positive exponent makes it big, but 0.0007 is tiny.", c: "0.7 is smaller than 1 — not allowed.", d: "700 is too big for the mantissa." }, explanation: "The 7 sits 4 places right of the point → 7 × 10⁻⁴.", hints: ["Tiny number → negative power.", "Move the 7 right of the point: 4 places.", "7 × 10⁻⁴."] },
      // @q05
      { id: "U9L1-mcq-5", type: "mcq", category: "conceptual", prompt: "Which is the LARGEST number?", options: [ { id: "a", text: "4 × 10⁶" }, { id: "b", text: "9 × 10⁵" }, { id: "c", text: "3.9 × 10⁶" }, { id: "d", text: "999,999" } ], correctOptionId: "a", diagnoses: { b: "9 × 10⁵ = 900,000 — one power of ten smaller.", c: "3.9 million < 4 million.", d: "999,999 is under a million." }, explanation: "Compare powers first: 10⁶ beats 10⁵, and within 10⁶, 4 > 3.9.", hints: ["Larger exponent first.", "4 vs 3.9 on 10⁶.", "4 × 10⁶."] },
      // @q06
      { id: "U9L1-mcq-6", type: "mcq", category: "word", prompt: "A virus is 1.2 × 10⁻⁷ m wide. How wide is it in ordinary decimals?", options: [ { id: "a", text: "0.00000012 m" }, { id: "b", text: "0.0000012 m" }, { id: "c", text: "120,000,000 m" }, { id: "d", text: "0.12 m" } ], correctOptionId: "a", diagnoses: { b: "10⁻⁷ has SEVEN shifts — six zeros then the 1.", c: "Positive power would make it hundreds of millions.", d: "0.12 is 1.2 × 10⁻¹ — wrong shift count." }, explanation: "1.2 × 10⁻⁷ shifts the point 7 left: 0.00000012.", hints: ["Negative 7 → 7 shifts left.", "Count the zeros before the 1.", "0.00000012."] },
      // @q07
      { id: "U9L1-num-1", type: "numeric-input", category: "procedural", prompt: "Write 32,000 in standard form. Type the EXPONENT of 10 (the n in a×10ⁿ, given a = 3.2).", answer: 4, tolerance: 0, explanation: "3.2 × 10⁴ = 32,000 — the 3 shifts 4 places left.", hints: ["32,000 = 3.2 × 10,000.", "10⁴.", "4."] },
      // @q08
      { id: "U9L1-num-2", type: "numeric-input", category: "procedural", prompt: "Write 0.00009 in standard form 9 × 10ⁿ. Type the exponent n.", answer: -5, tolerance: 0, explanation: "The 9 sits 5 places right of the point → 9 × 10⁻⁵.", hints: ["Tiny number → negative exponent.", "Count the zeros after the point.", "−5."] },
      // @q09
      { id: "U9L1-num-3", type: "numeric-input", category: "conceptual", prompt: "Which is bigger: 3 × 10⁵ or 9 × 10⁴? Type the exponent of the BIGGER one.", answer: 5, tolerance: 0, explanation: "10⁵ = 100,000 beats 9 × 10⁴ = 90,000 — the higher power wins.", hints: ["Compare the powers of ten first.", "10⁵ vs 10⁴.", "5."] },
      // @q10
      { id: "U9L1-frac-1", type: "fraction-input", category: "conceptual", prompt: "0.0001 as a fraction is 1 over what power of 10? Write it as a fraction (simplified).", numerator: 1, denominator: 10000, acceptEquivalent: true, explanation: "0.0001 = 1/10,000 = 10⁻⁴.", hints: ["Count the decimal places: 4.", "1 over 10⁴.", "1/10000."] },
      // @q11
      { id: "U9L1-tf-1", type: "true-false-justify", category: "conceptual", prompt: "6.3 × 10² is exactly 630.", isTrue: true, explanation: "6.3 × 100 = 630 — correct standard form.", hints: ["10² = 100.", "6.3 × 100.", "True — 630."] },
      // @q12
      { id: "U9L1-tf-2", type: "true-false-justify", category: "conceptual", prompt: "0.0056 in standard form is 5.6 × 10³.", isTrue: false, explanation: "0.0056 is tiny → the power is negative: 5.6 × 10⁻³.", hints: ["Tiny numbers use negative powers.", "Three shifts right of the point.", "False — 10⁻³."] },
      // @q13
      { id: "U9L1-order-1", type: "order-steps", category: "word", prompt: "Put the steps to write 7,200,000 in standard form in order.", sequence: ["Find the first digit: 7", "Place the point: 7.2", "Count shifts from the ones: 6", "Write 7.2 × 10⁶"], diagnoses: { "Place the point: 7.2@0": "Find the leading digit first.", "Count shifts from the ones: 6@0": "Write the mantissa before counting.", "Write 7.2 × 10⁶@0": "The writing comes last." }, explanation: "7,200,000 = 7.2 × 10⁶ — the 7 shifts 6 places left.", hints: ["Start with the leading digit.", "Count the shifts.", "End with 7.2 × 10⁶."] },
      // @q14
      { id: "U9L1-drag-1", type: "drag-match", category: "conceptual", prompt: "Match each ordinary number to its standard form.", pairs: [ { source: "800", target: "8 × 10²" }, { source: "8,000", target: "8 × 10³" }, { source: "80,000", target: "8 × 10⁴" } ], diagnoses: { "800->8 × 10³": "800 = 8 × 10² — two zeros.", "8,000->8 × 10²": "8,000 = 8 × 10³ — three zeros.", "80,000->8 × 10³": "80,000 = 8 × 10⁴ — four zeros." }, explanation: "Count the place-shifts of the 8: 800→2, 8,000→3, 80,000→4.", hints: ["Count zeros after the 8.", "800 has two, 8,000 three, 80,000 four.", "Match them."] },
      // @q15
      { id: "U9L1-graph-1", type: "graph-interact", category: "word", prompt: "This slider counts thousands. Set it to 6 × 10³ (key: value).", challenge: "Set the slider to 6000.", validate: { value: 6000 }, tolerance: 0, explanation: "6 × 10³ = 6,000.", hints: ["10³ = 1,000.", "6 × 1,000.", "6000."] }
    ],
    selection: { procedural: 2, conceptual: 2, word: 1 },
    passThreshold: 0.8,
  },
  commonMistakes: [
    { wrongPattern: "mantissa outside 1–10", diagnosis: "350 × 10² is a valid value but not standard form — rewrite as 3.5 × 10⁴.", hint: "Move the point until only one digit is left of it." },
    { wrongPattern: "wrong sign on the power", diagnosis: "0.0006 is TINY — the digits shift right of the point, so the power is −4, not +4.", hint: "Tiny numbers → negative exponent; big numbers → positive." },
    { wrongPattern: "counts zeros, not place-shifts", diagnosis: "6,000 = 6 × 10³, not 10⁴ — count the shifts of the leading digit, not every zero you see.", hint: "Count how many places the 6 travels from the ones column." },
  ],
  recallTags: ["standard-form", "powers-of-ten", "scientific-notation"],
  discovery: {
    challenges: [
      { instruction: "Start at 1. Zoom out: how many ×10 steps to reach 1,000?", observe: "Exactly 3 steps — so 1,000 = 10³. The power counts the zooms." },
      { instruction: "Now zoom in on 0.001 (one thousandth).", observe: "You zoomed IN 3 steps, so this is 10⁻³ — the negative exponent counts steps below 1." },
    ],
    predict: { prompt: "How many ×10 steps is it from 1 to a million (1,000,000)?", numeric: { answer: 6, tolerance: 0 }, reveal: "Six zooms: 10, 100, 1,000, 10,000, 100,000, 1,000,000 — so a million = 10⁶." },
    sayItYourWay: { prompt: "What is the '10 to a power' notation really counting?", phrasings: [{ id: "a", text: "How many ×10 steps from 1", correct: true, why: "The exponent counts multiplications by 10 — positive up, negative down." }, { id: "b", text: "How many digits the number has", correct: false, why: "Digits aren't the count — 100 has 3 digits but equals 10² = 2 steps." }, { id: "c", text: "How big the digits look", correct: false, why: "Size of digits is irrelevant; only the place-steps matter." }], formalName: "powers of ten and standard form" },
    stretch: "A galaxy is 10²¹ km wide and an atom is 10⁻¹⁰ m. One number counts steps UP from 1, the other steps DOWN. What happens if you multiply them?",
  },
};
