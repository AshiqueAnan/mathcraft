import type { Lesson } from "../schema";

export const T2U15L1: Lesson = {
  // @meta
  id: "T2-U15-L1",
  tier: 2,
  unit: "Simultaneous & quadratic equations",
  title: "Two Clues, Two Unknowns",
  prerequisites: ["T2-U13-L3","T2-U14-L4"],
  estimatedMinutes: 12,
  hook: { question: "Two pens and a notebook cost $7; one pen and two notebooks cost $8. What's each price? One clue alone leaves too many answers — two clues together can pin down exactly one pair.", type: "real-world" },
  intuitionBlocks: [{ widget: "graph-plotter", narrative: "Plot each clue as a line: 2p + n = 7 and p + 2n = 8. Every point on a line fits its own clue; only the point where the two lines cross fits BOTH clues at once." }],

  // @discovery
  formalBlocks: [{ definition: "Two equations with two unknowns are simultaneous — true at the same time. The solution must satisfy BOTH. Graph each as a line: every point on line 1 fits clue 1, every point on line 2 fits clue 2, and only the crossing point fits both.", examples: ["Shopping: 2p + n = 7 and p + 2n = 8. Try p = 2: line 1 → n = 3 and line 2 → n = 3 — same n, so (2, 3) is the crossing. Pen $2, notebook $3.", "x + y = 10 and y = x + 2. The lines cross at (4, 6): 4 + 6 = 10 ✓ and 6 = 4 + 2 ✓."], pitfall: "A point that fits only ONE equation is not a solution — verify in both. (2, 5) fits x + y = 7 but not y = x + 1, so it solves nothing.", altExplanations: ["GAME: two clues pin a hidden coordinate — each equation is a player's sight line (a graph line); only their crossing point satisfies both clues. A point on just one line fits one clue, not the mission.", "MONEY: two receipts — '2 pens + 1 notebook = $7' and '1 pen + 2 notebooks = $8'. The one combo that satisfies BOTH receipts is the crossing; any other combo balances one page but mis-totals the other."] }],
  gutChecks: [{ prompt: "Does (3, 4) solve x + y = 7 AND y = 2x − 2 together?", answer: "Yes: 3 + 4 = 7 ✓ and 4 = 2(3) − 2 = 4 ✓." }],
  quiz: {
    pool: [
      // @q01
      { id: "U15L1-mcq-1", type: "mcq", category: "procedural", prompt: "x + y = 10 and y = x + 2. Where do the two lines cross?", options: [ { id: "a", text: "(4, 6)" }, { id: "b", text: "(6, 4)" }, { id: "c", text: "(5, 5)" }, { id: "d", text: "(0, 2)" } ], correctOptionId: "a", diagnoses: { b: "(6, 4) fails y = x + 2 (4 ≠ 8).", c: "(5, 5) fits the sum but not y = x + 2.", d: "(0, 2) fits y = x + 2 but not the sum." }, explanation: "(4, 6): 4 + 6 = 10 ✓ and 6 = 4 + 2 ✓ — both equations true.", hints: ["Try each pair in BOTH equations.", "(4, 6): both check.", "The crossing is (4, 6)."] },
      // @q02
      { id: "U15L1-mcq-2", type: "mcq", category: "conceptual", prompt: "Why is one equation with two unknowns NOT enough to pin down one answer?", options: [ { id: "a", text: "It has infinitely many solution points — a whole line of them" }, { id: "b", text: "Equations are always wrong" }, { id: "c", text: "There isn't a graph to draw" }, { id: "d", text: "The numbers are too big" } ], correctOptionId: "a", diagnoses: { b: "The equation is fine — it's just under-constrained.", c: "One equation IS a graph: a line of solutions.", d: "Size isn't the issue." }, explanation: "x + y = 10 is true for (0,10), (4,6), (9,1)… every point on the line. You need a second clue to cut it down.", hints: ["Pick three pairs that fit.", "All lie on one line.", "Need a second line."] },
      // @q03
      { id: "U15L1-mcq-3", type: "mcq", category: "word", prompt: "2 pens + 1 notebook = $7 and 1 pen + 2 notebooks = $8. If a pen is p and a notebook is n, which system is correct?", options: [ { id: "a", text: "2p + n = 7; p + 2n = 8" }, { id: "b", text: "p + n = 7; p + n = 8" }, { id: "c", text: "2p + n = 8; p + 2n = 7" }, { id: "d", text: "2p + 2n = 7; p + n = 8" } ], correctOptionId: "a", diagnoses: { b: "Counts differ: 2 pens, then 2 notebooks.", c: "First clue is $7, second $8 — not swapped.", d: "Two pens + one notebook, not two of each." }, explanation: "2p + n = 7 and p + 2n = 8 — each sentence becomes one equation.", hints: ["2 pens → 2p.", "1 notebook → n.", "2p + n = 7; p + 2n = 8."] },
      // @q04
      { id: "U15L1-mcq-4", type: "mcq", category: "procedural", prompt: "a + b = 12 and a − b = 4. Which point fits BOTH?", options: [ { id: "a", text: "(8, 4)" }, { id: "b", text: "(4, 8)" }, { id: "c", text: "(6, 6)" }, { id: "d", text: "(12, 0)" } ], correctOptionId: "a", diagnoses: { b: "(4, 8): 4 − 8 = −4, not 4.", c: "(6, 6): 6 − 6 = 0, not 4.", d: "(12, 0): 12 + 0 = 12 but 12 − 0 = 12." }, explanation: "(8, 4): 8 + 4 = 12 ✓ and 8 − 4 = 4 ✓.", hints: ["Check the difference too.", "(8, 4): both check.", "(8, 4)."] },
      // @q05
      { id: "U15L1-mcq-5", type: "mcq", category: "conceptual", prompt: "Two lines are parallel (never cross). What does that mean for the system?", options: [ { id: "a", text: "No pair satisfies both — no solution" }, { id: "b", text: "Every point is a solution" }, { id: "c", text: "One equation is wrong" }, { id: "d", text: "There are exactly two solutions" } ], correctOptionId: "a", diagnoses: { b: "Same line means infinite; parallel means none.", c: "Both equations can be perfectly fine and still never meet.", d: "Two lines cross at most once." }, explanation: "No point lies on both parallel lines, so the system has no solution.", hints: ["Parallel = no crossing.", "No crossing = no shared point.", "No solution."] },
      // @q06
      { id: "U15L1-mcq-6", type: "mcq", category: "word", prompt: "3 apples + 2 bananas cost $11; 1 apple + 2 bananas cost $5. If a = apples and b = bananas, what are the prices?", options: [ { id: "a", text: "Apple $3, banana $1" }, { id: "b", text: "Apple $1, banana $3" }, { id: "c", text: "Apple $2, banana $2" }, { id: "d", text: "Apple $4, banana $1" } ], correctOptionId: "a", diagnoses: { b: "Check: 3(1) + 2(3) = 9, not 11.", c: "3(2) + 2(2) = 10, not 11.", d: "3(4) + 2(1) = 14, not 11." }, explanation: "3(3) + 2(1) = 11 ✓ and 1(3) + 2(1) = 5 ✓ — the crossing point.", hints: ["Test each pair in both clues.", "(3, 1): 9 + 2 = 11 and 3 + 2 = 5.", "Apple $3, banana $1."] },
      // @q07
      { id: "U15L1-num-1", type: "numeric-input", category: "procedural", prompt: "x + y = 10 and y = x + 2. Type the x-coordinate of the crossing.", answer: 4, tolerance: 0, explanation: "x + (x + 2) = 10 → 2x = 8 → x = 4.", hints: ["Substitute y = x + 2.", "2x + 2 = 10.", "x = 4."] },
      // @q08
      { id: "U15L1-num-2", type: "numeric-input", category: "procedural", prompt: "x + y = 10 and y = x + 2. Type the y-coordinate of the crossing.", answer: 6, tolerance: 0, explanation: "y = x + 2 = 4 + 2 = 6.", hints: ["Use x = 4.", "y = x + 2.", "y = 6."] },
      // @q09
      { id: "U15L1-num-3", type: "numeric-input", category: "conceptual", prompt: "2p + n = 7 and p + 2n = 8. Type the price of one pen (p).", answer: 2, tolerance: 0, explanation: "The lines cross at (2, 3): pen $2.", hints: ["Try p in both equations.", "p = 2 gives n = 3 in both.", "$2."] },
      // @q10
      { id: "U15L1-frac-1", type: "fraction-input", category: "conceptual", prompt: "x + y = 5 and y = x + 1. Write the x-coordinate as a fraction.", numerator: 2, denominator: 1, acceptEquivalent: true, explanation: "x + (x + 1) = 5 → 2x = 4 → x = 2.", hints: ["Substitute y.", "2x + 1 = 5.", "2."] },
      // @q11
      { id: "U15L1-tf-1", type: "true-false-justify", category: "conceptual", prompt: "(3, 4) is the solution of x + y = 7 and y = x + 1.", isTrue: true, explanation: "3 + 4 = 7 ✓ and 4 = 3 + 1 ✓ — both equations.", hints: ["Check sum.", "Check y = x + 1.", "True."] },
      // @q12
      { id: "U15L1-tf-2", type: "true-false-justify", category: "conceptual", prompt: "One equation with two unknowns always has exactly one solution.", isTrue: false, explanation: "It has a whole line of solutions — you need two equations (two lines) to pin down a point.", hints: ["One line has many points.", "Crossing needs two lines.", "False."] },
      // @q13
      { id: "U15L1-order-1", type: "order-steps", category: "word", prompt: "Order the steps to solve x + y = 10 and y = x + 2.", sequence: ["Write the second line in place of y: x + (x + 2) = 10", "Solve: 2x + 2 = 10 → x = 4", "Substitute back: y = 4 + 2 = 6", "Check both: 4 + 6 = 10 ✓, 6 = 4 + 2 ✓"], diagnoses: { "Write the second line in place of y: x + (x + 2) = 10@1": "Substitute first, then solve.", "Substitute back: y = 4 + 2 = 6@0": "Get x before finding y.", "Check both: 4 + 6 = 10 ✓, 6 = 4 + 2 ✓@0": "Check at the end." }, explanation: "Substitute, solve for x, then y, then verify both clues.", hints: ["Substitute first.", "Solve for x.", "Then y, then check."] },
      // @q14
      { id: "U15L1-drag-1", type: "drag-match", category: "conceptual", prompt: "Match each clue to the point it says the pair must satisfy.", pairs: [ { source: "x + y = 7", target: "(3, 4) lies on it" }, { source: "y = x + 1", target: "(3, 4) lies on it too" }, { source: "x + y = 9", target: "(3, 4) is NOT on it" } ], diagnoses: { "x + y = 7->(3, 4) is NOT on it": "3 + 4 = 7 — it IS on that line.", "y = x + 1->(3, 4) lies on it too": "4 = 3 + 1 — yes, on it.", "x + y = 9->(3, 4) lies on it": "3 + 4 = 7, not 9." }, explanation: "(3,4) satisfies x + y = 7 and y = x + 1, not x + y = 9.", hints: ["Plug (3, 4) in.", "3 + 4 = 7.", "4 = 3 + 1."] },
      // @q15
      { id: "U15L1-graph-1", type: "graph-interact", category: "word", prompt: "The lines 2p + n = 7 and p + 2n = 8 cross where pen price p is the horizontal value. Set the slider to the pen price (key: value).", challenge: "Set the slider to 2.", validate: { value: 2 }, tolerance: 0.01, explanation: "The crossing is (2, 3) — pen $2, notebook $3.", hints: ["The crossing x-value is p.", "p = 2.", "2."] }
    ],
    selection: { procedural: 2, conceptual: 2, word: 1 },
    passThreshold: 0.8,
  },
  commonMistakes: [
    { wrongPattern: "checks only one equation", diagnosis: "A point on one line isn't the solution — it must satisfy both.", hint: "Verify in BOTH equations before committing." },
    { wrongPattern: "mixes up the two clues", diagnosis: "Each sentence maps to exactly one equation — keep the quantities straight.", hint: "Write the system out, one equation per clue." },
    { wrongPattern: "reads the crossing on the wrong axis", diagnosis: "When reading the graph, x is the horizontal coordinate and y the vertical.", hint: "Read (x, y) in that order." },
  ],
  recallTags: ["simultaneous-equations", "intersection", "graphing"],
  discovery: {
    challenges: [
      { instruction: "Plot x + y = 10 and note all the points that fit.", observe: "Every point on the line fits — one line, infinitely many answers." },
      { instruction: "Add y = x + 2 and slide along until both are true.", observe: "Only one point satisfies both lines at the same time — the crossing." },
    ],
    predict: { prompt: "Two lines always…", options: [{ id: "a", text: "cross at exactly one point" }, { id: "b", text: "cross at one point, are parallel, or are the same line" }, { id: "c", text: "never cross" }], reveal: "Two lines can cross once, never (parallel), or coincide completely — but never cross twice. The interesting case is the single crossing: the shared solution." },
    sayItYourWay: { prompt: "What does the solution of a system of two lines mean?", phrasings: [{ id: "a", text: "The point that satisfies both equations at once", correct: true, why: "It lies on both lines — both clues true together." }, { id: "b", text: "The point that satisfies the bigger equation", correct: false, why: "There is no 'bigger' equation — both matter equally." }, { id: "c", text: "Any point on either line", correct: false, why: "That fits only one clue, not the system." }], formalName: "the intersection point (solution of a simultaneous system)" },
    stretch: "x² − 5x + 6 = 0 needs no second line — a curve can cross the x-axis twice, carrying two answers in one equation. That's U15-L3.",
  },
};
