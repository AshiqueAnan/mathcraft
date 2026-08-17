import type { Lesson } from "../schema";

export const T2U15L4: Lesson = {
  // @meta
  id: "T2-U15-L4",
  tier: 2,
  unit: "Simultaneous & quadratic equations",
  title: "The Formula That Never Fails",
  prerequisites: ["T2-U12-L4","T2-U14-L4","T2-U15-L3"],
  estimatedMinutes: 12,
  hook: { question: "x² + 2x + 2 = 0 won't factor, and its parabola never touches the x-axis. Yet it has two solutions — they just aren't real numbers. One formula handles every quadratic ever written, factoring or not.", type: "paradox" },
  intuitionBlocks: [{ widget: "graph-plotter", narrative: "Type any a, b, c and watch the parabola slide. The formula's two answers are exactly where it crosses the x-axis — and when it doesn't cross, the formula still answers, using √ of a negative number." }],

  // @discovery
  formalBlocks: [{ definition: "For ax² + bx + c = 0, the solutions are x = (−b ± √(b² − 4ac)) / 2a. The part under the root, b² − 4ac, is the discriminant: positive → two real roots; zero → one; negative → no real roots (two complex).", examples: ["x² − 5x + 6 = 0: a=1, b=−5, c=6 → x = (5 ± √(25 − 24))/2 = (5 ± 1)/2 → x = 3 or 2.", "x² + 2x + 2 = 0: b² − 4ac = 4 − 8 = −4 < 0 → no real solutions; the answers involve √−4."], pitfall: "The formula reads ax² + bx + c — put the equation in that form FIRST and use the sign of b exactly: for x² − 5x + 6, b = −5, so −b = +5.", altExplanations: ["GAME: the quadratic formula is the ultimate unlock code — plug in a, b, c from ax²+bx+c and it always returns the roots. The discriminant b²−4ac is the code's status check: positive = two lives, zero = one, negative = no real spawns.", "MONEY: the formula is a universal receipt-pricer for ax² + bx + c = 0 — x = (−b ± √(b²−4ac))/2a works on every quadratic. Read b with its sign: for x²−5x+6, −b means +5."] }],
  gutChecks: [{ prompt: "For 2x² + 3x + 1 = 0, what is the discriminant b² − 4ac?", answer: "9 − 8 = 1 → two real roots." }],
  quiz: {
    pool: [
      // @q01
      { id: "U15L4-mcq-1", type: "mcq", category: "procedural", prompt: "For x² − 5x + 6 = 0, what are a, b, c?", options: [ { id: "a", text: "a=1, b=−5, c=6" }, { id: "b", text: "a=1, b=5, c=6" }, { id: "c", text: "a=0, b=−5, c=6" }, { id: "d", text: "a=−1, b=5, c=−6" } ], correctOptionId: "a", diagnoses: { b: "b is the coefficient of x INCLUDING its sign: −5.", c: "a is 1 (the x² coefficient), never 0.", d: "Signs of a and c are positive here." }, explanation: "ax² + bx + c so a = 1, b = −5, c = 6.", hints: ["Read off coefficients.", "b includes the minus.", "ax² + bx + c so a = 1, b = −5, c = 6."] },
      // @q02
      { id: "U15L4-mcq-2", type: "mcq", category: "conceptual", prompt: "What does the discriminant tell you?", options: [ { id: "a", text: "The size of c" }, { id: "b", text: "How many real solutions exist" }, { id: "c", text: "Where the vertex is" }, { id: "d", text: "The slope at the vertex" } ], correctOptionId: "b", diagnoses: { a: "c is already visible in the equation.", c: "The vertex uses −b/2a, not the discriminant.", d: "Slopes aren't the discriminant's job." }, explanation: "b² − 4ac > 0 → two real; = 0 → one; < 0 → none (real).", hints: ["Look at b² − 4ac.", "Positive, zero, negative.", "Counts real roots."] },
      // @q03
      { id: "U15L4-mcq-3", type: "mcq", category: "word", prompt: "A rocket: 5t² − 20t + 15 = 0 (height 0 when it lands). Using the formula, when does it land?", options: [ { id: "a", text: "t = 5 and t = 15" }, { id: "b", text: "t = 2 only" }, { id: "c", text: "t = 1 and t = 3" }, { id: "d", text: "t = −1 and t = −3" } ], correctOptionId: "c", diagnoses: { b: "t = 2 is the vertex time, not a root.", a: "5 and 15 are a and c, not roots.", d: "Times can't be negative here." }, explanation: "x = (20 ± √(400 − 300))/10 = (20 ± 10)/10 → t = 3 or 1.", hints: ["a=5, b=−20, c=15.", "Discriminant = 100.", "x = (20 ± √(400 − 300))/10 = (20 ± 10)/10 → t = 3 or 1."] },
      // @q04
      { id: "U15L4-mcq-4", type: "mcq", category: "procedural", prompt: "x² + 2x + 2 = 0. What is b² − 4ac?", options: [ { id: "a", text: "−8" }, { id: "b", text: "4" }, { id: "c", text: "0" }, { id: "d", text: "−4" } ], correctOptionId: "d", diagnoses: { b: "4 is just b² — you forgot −4ac.", c: "0 would mean one root; this has none.", a: "−8 is 2² − 4·1·2? 4 − 8 = −4." }, explanation: "4 − 4(1)(2) = 4 − 8 = −4.", hints: ["b² − 4ac.", "4 − 8.", "4 − 4(1)(2) = 4 − 8 = −4."] },
      // @q05
      { id: "U15L4-mcq-5", type: "mcq", category: "conceptual", prompt: "When the discriminant is negative, the parabola…", options: [ { id: "a", text: "never crosses the x-axis" }, { id: "b", text: "crosses twice" }, { id: "c", text: "touches once" }, { id: "d", text: "is a straight line" } ], correctOptionId: "a", diagnoses: { b: "Two crossings need a positive discriminant.", c: "One touch means discriminant = 0.", d: "It's still a parabola — just above/below the axis." }, explanation: "No real roots → no x-axis meeting.", hints: ["Negative discriminant.", "No real roots.", "No real roots → no x-axis meeting."] },
      // @q06
      { id: "U15L4-mcq-6", type: "mcq", category: "word", prompt: "A ball's path: −2t² + 4t + 6 = 0. What does the formula's larger root mean?", options: [ { id: "a", text: "When it's highest" }, { id: "b", text: "When it lands — the time it returns to height 0" }, { id: "c", text: "When it was thrown" }, { id: "d", text: "How far it travels sideways" } ], correctOptionId: "b", diagnoses: { a: "The peak is the vertex, not a root.", c: "The throw is the smaller root (t = −1, behind you).", d: "Roots are times, not distances." }, explanation: "t = (−4 ± √(16 + 48))/(−4) = (−4 ± 8)/(−4) → t = 3 landing, t = −1 throw time.", hints: ["Roots are where height = 0.", "Larger root = later time.", "t = (−4 ± √(16 + 48))/(−4) = (−4 ± 8)/(−4) → t = 3 landing, t = −1 throw time."] },
      // @q07
      { id: "U15L4-num-1", type: "numeric-input", category: "procedural", prompt: "x² − 5x + 6 = 0. Using the formula, type the SMALLER solution.", answer: 2, tolerance: 0, explanation: "x = (5 ± 1)/2 → 3 or 2.", hints: ["a=1, b=−5, c=6.", "Discriminant = 1.", "x = (5 ± 1)/2 → 3 or 2."] },
      // @q08
      { id: "U15L4-num-2", type: "numeric-input", category: "procedural", prompt: "x² − 5x + 6 = 0. Using the formula, type the LARGER solution.", answer: 3, tolerance: 0, explanation: "(5 + 1)/2 = 3.", hints: ["Use the + sign.", "(5 + 1)/2.", "(5 + 1)/2 = 3."] },
      // @q09
      { id: "U15L4-num-3", type: "numeric-input", category: "conceptual", prompt: "x² + 4x + 4 = 0. The discriminant is 0 — type the single solution.", answer: -2, tolerance: 0, explanation: "x = (−4 ± 0)/2 = −2.", hints: ["b = 4, a = 1.", "x = −4/2.", "x = (−4 ± 0)/2 = −2."] },
      // @q10
      { id: "U15L4-frac-1", type: "fraction-input", category: "conceptual", prompt: "2x² + 3x + 1 = 0. Write one root as a fraction.", numerator: -1, denominator: 2, acceptEquivalent: true, explanation: "x = (−3 ± 1)/4 → −1/2 or −1.", hints: ["a=2, b=3, c=1.", "Discriminant = 1.", "x = (−3 ± 1)/4 → −1/2 or −1."] },
      // @q11
      { id: "U15L4-tf-1", type: "true-false-justify", category: "conceptual", prompt: "The quadratic formula solves ANY quadratic equation, even ones that don't factor.", isTrue: true, explanation: "It's derived from completing the square — universal for ax² + bx + c = 0.", hints: ["Works for all a, b, c.", "Derived generally.", "It's derived from completing the square — universal for ax² + bx + c = 0."] },
      // @q12
      { id: "U15L4-tf-2", type: "true-false-justify", category: "conceptual", prompt: "If the discriminant is negative, the equation has no solutions at all.", isTrue: false, explanation: "It has no REAL solutions — two complex ones exist (using √ of a negative).", hints: ["No real roots.", "Complex roots exist.", "It has no REAL solutions — two complex ones exist (using √ of a negative)."] },
      // @q13
      { id: "U15L4-order-1", type: "order-steps", category: "word", prompt: "Order the steps to solve x² − 5x + 6 = 0 with the formula.", sequence: ["Identify a=1, b=−5, c=6", "Compute b² − 4ac = 1", "Apply x = (−b ± √(b²−4ac))/2a", "Simplify: x = 3 or x = 2"], diagnoses: { "Identify a=1, b=−5, c=6@1": "Identify coefficients first.", "Apply x = (−b ± √(b²−4ac))/2a@0": "Compute the discriminant before applying.", "Simplify: x = 3 or x = 2@0": "Simplify at the end." }, explanation: "Identify, discriminate, substitute, simplify.", hints: ["Read off a, b, c.", "Discriminant next.", "Identify, discriminate, substitute, simplify."] },
      // @q14
      { id: "U15L4-drag-1", type: "drag-match", category: "conceptual", prompt: "Match each discriminant to the root count it predicts.", pairs: [ { source: "b² − 4ac = 16", target: "Two real roots" }, { source: "b² − 4ac = 0", target: "One repeated root" }, { source: "b² − 4ac = −9", target: "No real roots" } ], diagnoses: { "b² − 4ac = 16->No real roots": "16 > 0 means two real roots.", "b² − 4ac = 0->Two real roots": "Zero discriminant means one repeated root.", "b² − 4ac = −9->One repeated root": "Negative means no real roots." }, explanation: "Sign of the discriminant decides the root count.", hints: ["Positive → two.", "Zero → one.", "Negative → none (real)."] },
      // @q15
      { id: "U15L4-graph-1", type: "graph-interact", category: "word", prompt: "y = x² − 5x + 6 crosses the x-axis at 2 and 3. Set the slider to the LARGER crossing (key: value).", challenge: "Adjust the values below so they match the condition described in the prompt.", validate: { value: 3 }, tolerance: 0.01, explanation: "(5 + 1)/2 = 3.", hints: ["Formula gives 2 or 3.", "Larger is 3.", "(5 + 1)/2 = 3."] }
    ],
    selection: { procedural: 2, conceptual: 2, word: 1 },
    passThreshold: 0.8,
  },
  commonMistakes: [
    { wrongPattern: "wrong sign for b", diagnosis: "b includes its sign: for x² − 5x + 6, b = −5 so −b = +5.", hint: "Write b down with its sign before substituting." },
    { wrongPattern: "forgets the 2a denominator", diagnosis: "The whole numerator sits over 2a — don't drop it.", hint: "Divide by 2a, not by 2." },
    { wrongPattern: "says negative discriminant means no solutions", diagnosis: "It means no REAL solutions — complex solutions exist.", hint: "'No real solutions' is the precise phrase." },
  ],
  recallTags: ["quadratic-formula", "discriminant", "roots"],
  discovery: {
    challenges: [
      { instruction: "Apply the formula to x² − 5x + 6 = 0 and watch the graph verify.", observe: "The formula's answers are exactly the two x-axis crossings." },
      { instruction: "Now set a, b, c so the discriminant is 0, then negative.", observe: "Zero → the parabola just touches; negative → it never meets the axis." },
    ],
    predict: { prompt: "The formula gives two answers for x² − 5x + 6 = 0. What do they represent on the graph?", options: [{ id: "a", text: "The two places it crosses the x-axis" }, { id: "b", text: "The highest and lowest points" }, { id: "c", text: "Where the curve starts and ends" }], reveal: "The two x-intercepts — every point where y = 0. The formula is just an exact, reliable way to find those crossings." },
    sayItYourWay: { prompt: "What is the quadratic formula for?", phrasings: [{ id: "a", text: "An exact rule that solves any quadratic equation", correct: true, why: "It works for every ax² + bx + c = 0, no factoring needed." }, { id: "b", text: "A shortcut that only works on nice numbers", correct: false, why: "It's universal — even ugly, non-factoring cases." }, { id: "c", text: "A way to draw parabolas", correct: false, why: "It solves equations; drawing is the graph's job." }], formalName: "the quadratic formula (and the discriminant)" },
    stretch: "Next unit, the equals sign grows teeth: x is allowed to be 'anything less than 5'. Inequalities — U16.",
  },
};
