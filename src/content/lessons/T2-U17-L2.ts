import type { Lesson } from "../schema";

export const T2U17L2: Lesson = {
  // @meta
  id: "T2-U17-L2",
  tier: 2,
  unit: "Sequences",
  title: "Jump Straight to the 100th Term",
  prerequisites: ["T2-U13-L3","T2-U16-L3","T2-U17-L1"],
  estimatedMinutes: 12,
  hook: { question: "3, 6, 9, 12, … — what's the 100th term? Adding 3 ninety-nine times works but is mindless. The trick: term n is built from d and the start in ONE formula. Jump from n = 100 straight to the answer.", type: "puzzle" },
  intuitionBlocks: [{ widget: "number-line", narrative: "Drag the slider to n and watch term n light up on the line. Each step adds d once: term n = start + d × (n − 1). The slider becomes a time machine to the 100th mark." }],

  // @discovery
  formalBlocks: [{ definition: "For an arithmetic sequence with common difference d and first term a, the nth term is T(n) = a + (n − 1)d. To find the 100th term, plug in n = 100 — no listing needed.", examples: ["3, 6, 9, 12, … → a = 3, d = 3: T(100) = 3 + 99 × 3 = 300.", "5, 9, 13, … → a = 5, d = 4: T(50) = 5 + 49 × 4 = 201."], pitfall: "The (n − 1) is easy to drop: term 100 has added d only 99 times, not 100. 3, 6, 9, … has T(1) = 3, so T(100) = 3 + 99 × 3 = 300, not 303.", altExplanations: ["GAME: the nth-term formula is a warp portal — instead of walking 99 steps through the sequence, the formula T(n) = a + (n−1)d teleports you to term n directly. Term 100 of 3,6,9,... is 3 + 99×3 = 300.", "MONEY: a savings ladder — $5 then +$4 each month: month n holds $5 + (n−1)×$4. Jumping to month 50 means 49 raises, not 50 — the (n−1) is the fee for month 1 starting the ladder."] }],
  gutChecks: [{ prompt: "For 10, 15, 20, …, T(11) = ?", answer: "10 + 10 × 5 = 60." }],
  quiz: {
    pool: [
      // @q01
      { id: "U17L2-mcq-1", type: "mcq", category: "procedural", prompt: "3, 6, 9, 12, … What is T(100)?", options: [ { id: "a", text: "300" }, { id: "b", text: "303" }, { id: "c", text: "297" }, { id: "d", text: "100" } ], correctOptionId: "a", diagnoses: { b: "303 = 3 + 100 × 3 — you added d 100 times, but there are only 99 jumps.", c: "297 = 300 − 3 — you started a step late.", d: "That's n, not T(n)." }, explanation: "T(100) = 3 + 99 × 3 = 300.", hints: ["n − 1 = 99 jumps.", "3 + 99 × 3.", "300."] },
      // @q02
      { id: "U17L2-mcq-2", type: "mcq", category: "conceptual", prompt: "Why is the formula a + (n − 1)d and not a + n·d?", options: [ { id: "a", text: "Because d is negative" }, { id: "b", text: "The first term already has d added zero times — term n adds d only n − 1 times" }, { id: "c", text: "Because n can't be big" }, { id: "d", text: "The formula actually is a + n·d" } ], correctOptionId: "b", diagnoses: { a: "The (n − 1) holds for positive and negative d alike.", c: "n can be any size — the formula scales.", d: "For a = 3, d = 3, a + n·d would make T(1) = 6, wrong." }, explanation: "Term 1 = a + 0·d; each step adds d once → term n has n − 1 steps.", hints: ["Term 1 has zero d.", "Term n has n − 1 d's.", "(n − 1)."] },
      // @q03
      { id: "U17L2-mcq-3", type: "mcq", category: "word", prompt: "A ladder: 20 cm rung 1, then +5 cm each: 20, 25, 30, … What's rung 10?", options: [ { id: "a", text: "60 cm" }, { id: "b", text: "70 cm" }, { id: "c", text: "65 cm" }, { id: "d", text: "50 cm" } ], correctOptionId: "c", diagnoses: { b: "70 = 20 + 10 × 5 — should be 9 jumps.", a: "60 = 20 + 8 × 5 — you're one rung short.", d: "50 = 20 + 6 × 5 — count the jumps carefully." }, explanation: "T(10) = 20 + 9 × 5 = 65 cm.", hints: ["9 jumps for rung 10.", "20 + 45.", "65 cm."] },
      // @q04
      { id: "U17L2-mcq-4", type: "mcq", category: "procedural", prompt: "5, 9, 13, … Which is the nth-term formula?", options: [ { id: "a", text: "T(n) = 5n" }, { id: "b", text: "T(n) = 5 + 5(n − 1)" }, { id: "c", text: "T(n) = 9 + 4(n − 1)" }, { id: "d", text: "T(n) = 5 + 4(n − 1)" } ], correctOptionId: "d", diagnoses: { b: "d = 4 (9 − 5), not 5.", c: "a = 5 is the FIRST term, not 9.", a: "5n gives 5, 10, 15 — gaps of 5, not 4." }, explanation: "a = 5 and d = 4 → T(n) = 5 + 4(n − 1).", hints: ["a = 5.", "d = 4.", "5 + 4(n − 1)."] },
      // @q05
      { id: "U17L2-mcq-5", type: "mcq", category: "conceptual", prompt: "What does the nth-term formula buy you?", options: [ { id: "a", text: "Any term directly, without listing the ones before it" }, { id: "b", text: "A guarantee the sequence is infinite" }, { id: "c", text: "The sum of all terms" }, { id: "d", text: "The graph of the sequence" } ], correctOptionId: "a", diagnoses: { b: "Boundedness is separate; the formula just computes terms.", c: "The sum is another question entirely.", d: "A graph needs plotting — the formula gives values." }, explanation: "Plug in n and you're there — T(1000) as fast as T(3).", hints: ["Direct computation.", "Skip the listing.", "Any n directly."] },
      // @q06
      { id: "U17L2-mcq-6", type: "mcq", category: "word", prompt: "Savings $10/week starting at $50: 50, 60, 70, … Week 20 = ?", options: [ { id: "a", text: "$250" }, { id: "b", text: "$240" }, { id: "c", text: "$200" }, { id: "d", text: "$230" } ], correctOptionId: "b", diagnoses: { a: "250 = 50 + 20 × 10 — only 19 jumps to week 20.", c: "200 = 50 + 15 × 10 — miscounted weeks.", d: "230 = 50 + 18 × 10 — one week short." }, explanation: "T(20) = 50 + 19 × 10 = $240.", hints: ["Week 20 → 19 jumps.", "50 + 190.", "$240."] },
      // @q07
      { id: "U17L2-num-1", type: "numeric-input", category: "procedural", prompt: "2, 5, 8, 11, … Type T(10).", answer: 29, tolerance: 0, explanation: "a = 2, d = 3: T(10) = 2 + 9 × 3 = 29.", hints: ["a = 2, d = 3.", "2 + 9 × 3.", "29."] },
      // @q08
      { id: "U17L2-num-2", type: "numeric-input", category: "procedural", prompt: "3, 6, 9, 12, … Type T(100).", answer: 300, tolerance: 0, explanation: "T(100) = 3 + 99 × 3 = 300.", hints: ["99 jumps.", "3 + 297.", "300."] },
      // @q09
      { id: "U17L2-num-3", type: "numeric-input", category: "conceptual", prompt: "100, 90, 80, … Type T(20).", answer: -90, tolerance: 0, explanation: "a = 100, d = −10: T(20) = 100 + 19 × (−10) = −90.", hints: ["d = −10.", "100 − 190.", "−90."] },
      // @q10
      { id: "U17L2-frac-1", type: "fraction-input", category: "conceptual", prompt: "1/2, 1, 3/2, 2, … Type T(5) as a fraction.", numerator: 5, denominator: 2, acceptEquivalent: true, explanation: "a = 1/2, d = 1/2: T(5) = 1/2 + 4 × 1/2 = 5/2.", hints: ["d = 1/2.", "1/2 + 2.", "5/2."] },
      // @q11
      { id: "U17L2-tf-1", type: "true-false-justify", category: "conceptual", prompt: "For 3, 6, 9, …, T(100) = 3 + 99 × 3.", isTrue: true, explanation: "Term 100 adds d 99 times — exactly the formula.", hints: ["99 jumps.", "3 + 99 × 3.", "True."] },
      // @q12
      { id: "U17L2-tf-2", type: "true-false-justify", category: "conceptual", prompt: "For 10, 20, 30, …, T(5) = 10 + 5 × 10.", isTrue: false, explanation: "T(5) = 10 + 4 × 10 = 50 — only 4 jumps to the 5th term.", hints: ["n − 1 = 4.", "10 + 40.", "False."] },
      // @q13
      { id: "U17L2-order-1", type: "order-steps", category: "word", prompt: "Order the steps to find T(100) of 5, 9, 13, …", sequence: ["Identify a = 5 and d = 4", "Use T(n) = a + (n − 1)d", "Substitute n = 100: 5 + 99 × 4", "Simplify: T(100) = 401"], diagnoses: { "Identify a = 5 and d = 4@1": "Identify first.", "Use T(n) = a + (n − 1)d@0": "State the formula before substituting.", "Substitute n = 100: 5 + 99 × 4@1": "Substitute after writing the formula." }, explanation: "Identify, write the formula, plug in n = 100, simplify.", hints: ["Find a and d.", "Write formula.", "Plug in 100."] },
      // @q14
      { id: "U17L2-drag-1", type: "drag-match", category: "conceptual", prompt: "Match each sequence to its nth term.", pairs: [ { source: "3, 6, 9, …", target: "T(n) = 3n" }, { source: "5, 8, 11, …", target: "T(n) = 3n + 2" }, { source: "1, 3, 5, …", target: "T(n) = 2n − 1" } ], diagnoses: { "3, 6, 9, …->T(n) = 3n + 2": "For n=1, 3(1)+2=5 — that's the 5,8,11 row.", "5, 8, 11, …->T(n) = 2n − 1": "n=1 gives 1 — that's the odd numbers.", "1, 3, 5, …->T(n) = 3n": "n=1 gives 3, not 1." }, explanation: "Plug n = 1 into each formula and check it matches the first term.", hints: ["Test n = 1.", "Check d matches.", "Match first term."] },
      // @q15
      { id: "U17L2-graph-1", type: "graph-interact", category: "word", prompt: "3, 6, 9, 12, … reaches 300 at term 100. Set the slider to T(101) (key: value).", challenge: "Set the slider to 303.", validate: { value: 303 }, tolerance: 0.01, explanation: "T(101) = 3 + 100 × 3 = 303.", hints: ["n = 101.", "3 + 100 × 3.", "303."] }
    ],
    selection: { procedural: 2, conceptual: 2, word: 1 },
    passThreshold: 0.8,
  },
  commonMistakes: [
    { wrongPattern: "uses n instead of n − 1", diagnosis: "T(100) adds d only 99 times — a + n·d is one jump too many.", hint: "Ask: how many jumps from term 1 to term n? n − 1." },
    { wrongPattern: "writes the formula as d·n + a·1", diagnosis: "The start is a, plain — not multiplied by n.", hint: "T(n) = a + (n − 1)d, not a·n." },
    { wrongPattern: "ignores negative d", diagnosis: "Shrinking sequences (100, 90, 80) use d = −10 — the formula still works.", hint: "Keep d's sign: 100 − 10(n − 1)." },
  ],
  recallTags: ["sequences", "nth-term", "arithmetic-formula"],
  discovery: {
    challenges: [
      { instruction: "Slide n from 1 to 10 on 3, 6, 9, … and note each term.", observe: "Term n = 3 + 3(n − 1) — each slide adds one more 3." },
      { instruction: "Jump to n = 100 and read the term.", observe: "Only 99 additions happened — the formula counts jumps, not terms." },
    ],
    predict: { prompt: "For 3, 6, 9, 12, …, what is the 100th term?", options: [{ id: "a", text: "300" }, { id: "b", text: "303" }, { id: "c", text: "297" }], reveal: "300 — term 100 adds d only 99 times: 3 + 99 × 3. The (n − 1) is the whole trick." },
    sayItYourWay: { prompt: "What does T(n) = a + (n − 1)d do?", phrasings: [{ id: "a", text: "Computes any term directly from position n", correct: true, why: "One formula replaces 99 steps of listing." }, { id: "b", text: "Plots the sequence on a graph", correct: false, why: "It evaluates terms; graphing is separate." }, { id: "c", text: "Tells you how many terms exist", correct: false, why: "Sequences can be infinite — the formula isn't a counter." }], formalName: "the nth term of an arithmetic sequence" },
    stretch: "2, 4, 8, 16, … grows by ×2 each step, not +d. Its graph curls upward explosively — nothing like a line. That's U17-L3: geometric sequences.",
  },
};
