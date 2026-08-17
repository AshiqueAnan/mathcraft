import type { Lesson } from "../schema";

export const T5U31L3: Lesson = {
  // @meta
  id: "T5-U31-L3",
  tier: 5,
  unit: "Quadratics in depth",
  title: "The Discriminant's Crystal Ball",
  prerequisites: ["T2-U15-L4","T5-U30-L3","T5-U31-L2"],
  estimatedMinutes: 14,
  hook: { question: "Before solving a quadratic, you can peek: how many answers will it have? Two, one, or none. The magic number is b² - 4ac — the discriminant. Positive means two crossings, zero means one (the vertex touches), negative means the parabola never reaches the x-axis. Solving isn't even needed to know the count.", type: "puzzle" },
  intuitionBlocks: [{ widget: "graph-plotter", narrative: "Drag sliders to morph the parabola while the discriminant readout updates live. Watch b² - 4ac drive the story: positive → two x-crossings, zero → the vertex sits on the axis, negative → no crossings at all. Predict the count before dragging, then check." }],

  // @discovery
  formalBlocks: [{ definition: "THE DISCRIMINANT of $ax^2 + bx + c = 0$ is $\\Delta = b^2 - 4ac$. It counts the real roots WITHOUT solving: $\\Delta > 0$ → two distinct roots; $\\Delta = 0$ → one repeated root; $\\Delta < 0$ → no real roots (the parabola misses the x-axis).", examples: ["$x^2 - 4x + 3$: Δ = 16 - 12 = 4 > 0 → two roots (indeed x = 1, 3).", "$x^2 + 2x + 5$: Δ = 4 - 20 = -16 < 0 → no real roots."], pitfall: "The discriminant counts solutions — it does NOT give them. A discriminant of 4 doesn't mean the roots are 2 and -2; it means there are two real roots to then find with the formula or factoring.", altExplanations: ["GAME: the discriminant is a root-detector readout — plug a, b, c and the sign tells you the crossing count on the x-axis: Δ > 0 = two real crossings, Δ = 0 = one glancing touch, Δ < 0 = the parabola floats clear. It counts solutions, it doesn't hand them to you.", "FOOD: a radar for airborne arcs — 3x² − 2x + 1 gives Δ = −8 < 0, so the parabola never lands on the x-axis. Think of Δ as the fuel gauge for real roots: positive means enough fuel to land twice."] }],
  gutChecks: [{ prompt: "For 3x² - 2x + 1, evaluate the discriminant's sign.", answer: "4 - 12 = -8 < 0 → no real roots." }],
  quiz: {
    pool: [
      // @q01
      { id: "U31L3-mcq-1", type: "mcq", category: "procedural", prompt: "x² - 4x + 3. The discriminant is…", options: [ { id: "a", text: "4" }, { id: "b", text: "-4" }, { id: "c", text: "16" }, { id: "d", text: "12" } ], correctOptionId: "a", diagnoses: { b: "-4 is 2b, not b² - 4ac.", c: "16 is just b² — subtract 4ac.", d: "12 is 4ac — you need b² minus it." }, explanation: "(-4)² - 4(1)(3) = 16 - 12 = 4.", hints: ["b² = 16.", "4ac = 12.", "4."] },
      // @q02
      { id: "U31L3-mcq-2", type: "mcq", category: "conceptual", prompt: "A discriminant of -7 means the quadratic has…", options: [ { id: "a", text: "two real roots" }, { id: "b", text: "no real roots" }, { id: "c", text: "one real root" }, { id: "d", text: "infinitely many roots" } ], correctOptionId: "b", diagnoses: { a: "Two roots need a POSITIVE discriminant.", c: "One root needs zero.", d: "Quadratics never have infinitely many roots." }, explanation: "Negative discriminant → the graph never crosses the x-axis.", hints: ["Negative.", "No crossings.", "No real roots."] },
      // @q03
      { id: "U31L3-mcq-3", type: "mcq", category: "word", prompt: "A ball's height h(t) = -5t² + 20t + 1. To check if it ever reaches 30 m, you set h(t) = 30 and check the discriminant's sign. Setup: 5t² - 20t + 29 = 0. Its discriminant is…", options: [ { id: "a", text: "20² - 4·5·29 = 0 (touches)" }, { id: "b", text: "400 + 580 (so yes)" }, { id: "c", text: "400 - 580 = -180 (so no)" }, { id: "d", text: "can't tell" } ], correctOptionId: "c", diagnoses: { b: "4ac is subtracted, not added.", a: "20² - 4(5)(29) = 400 - 580, not 0.", d: "The discriminant answers it." }, explanation: "Δ = 400 - 580 = -180 < 0 → never reaches 30 m.", hints: ["b² - 4ac.", "400 - 580.", "Neg = no."] },
      // @q04
      { id: "U31L3-mcq-4", type: "mcq", category: "procedural", prompt: "x² + 6x + 9. The discriminant is…", options: [ { id: "a", text: "-72" }, { id: "b", text: "36" }, { id: "c", text: "72" }, { id: "d", text: "0" } ], correctOptionId: "d", diagnoses: { b: "36 is just b² — subtract 4ac.", c: "72 is (b²+4ac) — wrong sign.", a: "Negative is impossible here." }, explanation: "36 - 4(1)(9) = 36 - 36 = 0 → one repeated root (x = -3).", hints: ["6² = 36.", "4ac = 36.", "0."] },
      // @q05
      { id: "U31L3-mcq-5", type: "mcq", category: "conceptual", prompt: "A zero discriminant means the parabola…", options: [ { id: "a", text: "touches the x-axis at exactly one point" }, { id: "b", text: "crosses twice" }, { id: "c", text: "never touches the x-axis" }, { id: "d", text: "is a straight line" } ], correctOptionId: "a", diagnoses: { b: "Two crossings need a positive discriminant.", c: "No touch needs a negative one.", d: "It's still a parabola." }, explanation: "Δ = 0 → the vertex sits on the x-axis — one repeated root.", hints: ["Vertex on axis.", "One point.", "Touches once."] },
      // @q06
      { id: "U31L3-mcq-6", type: "mcq", category: "word", prompt: "A company's profit is P(x) = -x² + 100x - 200. To check if profit can hit 3000, you solve -x² + 100x - 3200 = 0. The discriminant is…", options: [ { id: "a", text: "10000 + 12800 (possible)" }, { id: "b", text: "10000 - 12800 = -2800 (impossible)" }, { id: "c", text: "0 (barely possible)" }, { id: "d", text: "12800" } ], correctOptionId: "b", diagnoses: { a: "4ac is subtracted — 4(-1)(-3200) = 12800.", c: "10000 - 12800 is negative, not zero.", d: "12800 is just 4ac." }, explanation: "Δ = 10000 - 4(-1)(-3200) = 10000 - 12800 < 0 → profit can't reach 3000.", hints: ["b² - 4ac.", "10000 - 12800.", "Neg = no."] },
      // @q07
      { id: "U31L3-num-1", type: "numeric-input", category: "procedural", prompt: "x² - 2x - 3. The discriminant Δ = …", answer: 16, tolerance: 0, explanation: "4 - 4(1)(-3) = 4 + 12 = 16.", hints: ["b² = 4.", "4ac = -12.", "4 - (-12) = 16."] },
      // @q08
      { id: "U31L3-num-2", type: "numeric-input", category: "procedural", prompt: "2x² - 4x + 5. The discriminant Δ = …", answer: -24, tolerance: 0, explanation: "16 - 4(2)(5) = 16 - 40 = -24.", hints: ["b² = 16.", "4ac = 40.", "16 - 40."] },
      // @q09
      { id: "U31L3-num-3", type: "numeric-input", category: "conceptual", prompt: "How many real roots does x² - 2x - 3 have? (Δ = 16 > 0)", answer: 2, tolerance: 0, explanation: "Positive discriminant → two distinct real roots.", hints: ["Positive Δ.", "Two crossings.", "2."] },
      // @q10
      { id: "U31L3-frac-1", type: "fraction-input", category: "conceptual", prompt: "x² + x + 1. The discriminant is 1 - 4 = -3. Express the magnitude 3 as a fraction over 1.", numerator: 3, denominator: 1, acceptEquivalent: true, explanation: "|Δ| = 3 → the quadratic has no real roots.", hints: ["-3 magnitude.", "3/1.", "3/1."] },
      // @q11
      { id: "U31L3-tf-1", type: "true-false-justify", category: "conceptual", prompt: "A quadratic with Δ = 0 has exactly one real root (repeated).", isTrue: true, explanation: "The vertex touches the x-axis — one repeated solution.", hints: ["Touches once.", "Repeated root.", "True."] },
      // @q12
      { id: "U31L3-tf-2", type: "true-false-justify", category: "conceptual", prompt: "A negative discriminant means the parabola crosses the x-axis twice.", isTrue: false, explanation: "Negative Δ means NO real crossings at all.", hints: ["Negative.", "No crossings.", "False."] },
      // @q13
      { id: "U31L3-order-1", type: "order-steps", category: "word", prompt: "Order the steps to classify x² + 4x + 5.", sequence: ["Identify a=1, b=4, c=5", "Compute b² - 4ac = 16 - 20", "Conclude: -4 < 0, no real roots"], diagnoses: { "Identify a=1, b=4, c=5@1": "Identify coefficients first.", "Compute b² - 4ac = 16 - 20@0": "Then compute.", "Conclude: -4 < 0, no real roots@0": "Conclude last." }, explanation: "Coefficients, compute Δ, read the sign.", hints: ["a, b, c.", "16 - 20.", "-4 → none."] },
      // @q14
      { id: "U31L3-drag-1", type: "drag-match", category: "conceptual", prompt: "Match each discriminant to its meaning.", pairs: [ { source: "Δ = 9", target: "two real roots" }, { source: "Δ = 0", target: "one repeated root" }, { source: "Δ = -5", target: "no real roots" } ], diagnoses: { "Δ = 9->one repeated root": "Positive → two roots.", "Δ = 0->no real roots": "Zero → one repeated root.", "Δ = -5->two real roots": "Negative → no roots." }, explanation: "Sign of Δ tells the count.", hints: ["Positive.", "Zero.", "Negative."] },
      // @q15
      { id: "U31L3-graph-1", type: "graph-interact", category: "word", prompt: "x² - 6x + 9 has Δ = 0. Set the slider to Δ (key: value).", challenge: "Set the slider to 0.", validate: { value: 0 }, tolerance: 0.01, explanation: "36 - 36 = 0 — one repeated root.", hints: ["36 - 36.", "0.", "0."] }
    ],
    selection: { procedural: 2, conceptual: 2, word: 1 },
    passThreshold: 0.8,
  },
  commonMistakes: [
    { wrongPattern: "computes b² + 4ac instead of minus", diagnosis: "The discriminant subtracts 4ac: b² - 4ac.", hint: "Minus 4ac." },
    { wrongPattern: "thinks a negative Δ means one root", diagnosis: "Negative = NO real roots; zero = one.", hint: "Neg = none." },
    { wrongPattern: "uses the discriminant as the answer itself", diagnosis: "It counts roots — you still need the formula to get them.", hint: "Count, then solve." },
  ],
  recallTags: ["discriminant", "roots", "b² - 4ac", "quadratic", "crossings"],
  discovery: {
    challenges: [
      { instruction: "Drag the sliders until b² - 4ac is positive. Count the x-crossings.", observe: "Positive discriminant → the parabola crosses the x-axis twice — two real roots." },
      { instruction: "Morph the parabola until b² - 4ac = 0 exactly.", observe: "The vertex just touches the axis — one repeated root. And negative? No crossings at all." },
    ],
    predict: { prompt: "For x² - 4x + 3, the discriminant is 16 - 12 = 4 (positive). How many roots?", options: [{ id: "a", text: "2" }, { id: "b", text: "1" }, { id: "c", text: "0" }], reveal: "2 — a positive discriminant means two distinct real roots." },
    sayItYourWay: { prompt: "What does the discriminant's sign tell you?", phrasings: [{ id: "a", text: "Positive = two roots, zero = one, negative = none", correct: true, why: "That's the full sign ↔ crossing-count dictionary." }, { id: "b", text: "Positive = the vertex is above the axis", correct: false, why: "The sign counts crossings, not the vertex's height." }, { id: "c", text: "It gives the actual roots directly", correct: false, why: "It counts roots; the formula extracts them." }], formalName: "the discriminant b² - 4ac — sign tells the number of real roots of ax² + bx + c" },
    stretch: "The same 'question-answering' idea powers logarithms: aˣ = b needs a way to ask what exponent works. Next: growth and its undo-button.", 
  },
};
