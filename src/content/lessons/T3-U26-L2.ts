import type { Lesson } from "../schema";

export const T3U26L2: Lesson = {
  // @meta
  id: "T3-U26-L2",
  tier: 3,
  unit: "Trigonometry fundamentals",
  title: "Meeting Cosine and Tangent",
  prerequisites: ["T3-U25-L4","T3-U26-L1"],
  estimatedMinutes: 12,
  hook: { question: "Sine paired the opposite side with the hypotenuse. But an angle touches two sides: the adjacent side and the opposite. Each pairing is a fixed ratio too — cosine uses adjacent/hypotenuse, tangent uses opposite/adjacent. Three ratios, one family, each a fingerprint of the angle.", type: "puzzle" },
  intuitionBlocks: [{ widget: "ratio-bar", narrative: "Drag a ratio slider and watch a right triangle's sides repartition: sine splits opposite/hypotenuse, cosine adjacent/hypotenuse, tangent opposite/adjacent. For a fixed angle all three stay constant — the bar just re-labels the same triangle." }],

  // @discovery
  formalBlocks: [{ definition: "For an acute angle $\\theta$: $\\cos \\theta = \\dfrac{\\text{adjacent}}{\\text{hypotenuse}}$ (the side touching $\\theta$ that isn't the hypotenuse) and $\\tan \\theta = \\dfrac{\\text{opposite}}{\\text{adjacent}}$. So $30°$: $\\cos 30° \\approx 0.866$, $\\tan 30° \\approx 0.577$; $45°$: $\\cos 45° \\approx 0.707$, $\\tan 45° = 1$; $60°$: $\\cos 60° = 0.5$, $\\tan 60° \\approx 1.732$. The mnemonic SOH-CAH-TOA is just a memory hook — the ratios came first.", examples: ["A 45° right triangle: both legs equal, so tan 45° = opposite/adjacent = 1.", "A 30° triangle: adjacent ≈ 0.866 × hypotenuse, so cos 30° ≈ 0.866."], pitfall: "Mixing which side is 'adjacent' — it's the side TOUCHING the angle (and not the hypotenuse). If the angle moves, the adjacent side relabels. Always re-scan the triangle for the angle in question.", altExplanations: ["GAME: three stat ratios — sine reads opposite/hypotenuse, cosine reads adjacent/hypotenuse, tangent reads opposite/adjacent. Re-label 'adjacent' when the angle moves: it's always the leg touching the angle that isn't the hypotenuse.", "FOOD: cutting a wedge — cosine is the shadow the wedge casts (the side touching the angle), sine is the edge lifting up, tangent is the steepness (up vs along). SOH-CAH-TOA is just a mnemonic to recall which two sides each ratio reads."] }],
  gutChecks: [{ prompt: "Which side is adjacent to an angle in a right triangle?", answer: "The side that touches the angle and is NOT the hypotenuse — the other leg." }],
  quiz: {
    pool: [
      // @q01
      { id: "U26L2-mcq-1", type: "mcq", category: "procedural", prompt: "Right triangle: adjacent = 4, hypotenuse = 5. cos θ = …", options: [ { id: "a", text: "4/5 = 0.8" }, { id: "b", text: "3/5 = 0.6" }, { id: "c", text: "5/4 = 1.25" }, { id: "d", text: "4 − 5 = −1" } ], correctOptionId: "a", diagnoses: { b: "0.6 is sine — the opposite/hypotenuse ratio for the 3 side.", c: "That's hypotenuse/adjacent, inverted.", d: "Cosine divides, it doesn't subtract." }, explanation: "cos θ = adjacent/hypotenuse = 4/5 = 0.8.", hints: ["Adjacent over hypotenuse.", "4 ÷ 5.", "cos θ = adjacent/hypotenuse = 4/5 = 0."] },
      // @q02
      { id: "U26L2-mcq-2", type: "mcq", category: "conceptual", prompt: "The 'adjacent' side to angle θ is…", options: [ { id: "a", text: "the side opposite θ" }, { id: "b", text: "the leg touching θ that isn't the hypotenuse" }, { id: "c", text: "always the longest side" }, { id: "d", text: "the hypotenuse" } ], correctOptionId: "b", diagnoses: { a: "That's the opposite side.", c: "The longest is the hypotenuse.", d: "Adjacent is a leg, never the hypotenuse." }, explanation: "Adjacent touches the angle along one ray and is NOT the hypotenuse.", hints: ["Touches θ.", "Not the hypotenuse.", "Adjacent touches the angle along one ray and is NOT the hypotenuse."] },
      // @q03
      { id: "U26L2-mcq-3", type: "mcq", category: "word", prompt: "tan 45° = 1 because…", options: [ { id: "a", text: "the hypotenuse equals a leg" }, { id: "b", text: "45° is half of 90°" }, { id: "c", text: "a 45° right triangle's legs are equal" }, { id: "d", text: "sine and cosine are 0.707, so they cancel" } ], correctOptionId: "c", diagnoses: { b: "Halving explains angles, not the ratio's value.", a: "The hypotenuse is longer than either leg.", d: "That's why tan = sin/cos = 1, and it works BECAUSE the legs are equal." }, explanation: "Opposite and adjacent are both the same length in a 45-45-90 triangle → ratio 1.", hints: ["Isosceles right triangle.", "Legs equal.", "Opposite and adjacent are both the same length in a 45-45-90 triangle → ratio 1."] },
      // @q04
      { id: "U26L2-mcq-4", type: "mcq", category: "procedural", prompt: "Opposite = 3, adjacent = 4. tan θ = …", options: [ { id: "a", text: "0.5" }, { id: "b", text: "4/3 ≈ 1.33" }, { id: "c", text: "5/4 = 1.25" }, { id: "d", text: "3/4 = 0.75" } ], correctOptionId: "d", diagnoses: { b: "That's adjacent/opposite — inverted.", c: "5/4 uses the hypotenuse in tangent — wrong sides.", a: "0.5 is a 30° sine, not this tangent." }, explanation: "tan θ = opposite/adjacent = 3/4 = 0.75.", hints: ["Opposite over adjacent.", "3 ÷ 4.", "tan θ = opposite/adjacent = 3/4 = 0."] },
      // @q05
      { id: "U26L2-mcq-5", type: "mcq", category: "conceptual", prompt: "cos 30° ≈ 0.866. This means the adjacent side is…", options: [ { id: "a", text: "≈ 0.866 × the hypotenuse" }, { id: "b", text: "≈ 0.866 × the opposite" }, { id: "c", text: "the hypotenuse ÷ 0.866" }, { id: "d", text: "never related to the hypotenuse" } ], correctOptionId: "a", diagnoses: { b: "Cosine pairs adjacent with the hypotenuse, not opposite.", c: "That's the hypotenuse formula, wrong direction.", d: "The ratio precisely relates them." }, explanation: "cos = adjacent/hypotenuse → adjacent = cos × hypotenuse.", hints: ["adjacent ÷ hypotenuse = cos.", "Multiply ratio × hyp.", "cos = adjacent/hypotenuse → adjacent = cos × hypotenuse."] },
      // @q06
      { id: "U26L2-mcq-6", type: "mcq", category: "word", prompt: "A 30° ladder: the wall height (opposite) is 3 m. tan 30° ≈ 0.577 relates height to the ground distance (adjacent). The adjacent is about…", options: [ { id: "a", text: "1.73 m" }, { id: "b", text: "5.2 m" }, { id: "c", text: "3 m" }, { id: "d", text: "6 m" } ], correctOptionId: "b", diagnoses: { a: "1.73 m is height × tan — inverted the ratio.", c: "3 m is the opposite itself.", d: "6 m doubles the height." }, explanation: "adjacent = opposite ÷ tan = 3 ÷ 0.577 ≈ 5.2 m.", hints: ["adjacent = opp ÷ tan.", "3 ÷ 0.577.", "adjacent = opposite ÷ tan = 3 ÷ 0."] },
      // @q07
      { id: "U26L2-num-1", type: "numeric-input", category: "procedural", prompt: "cos θ = 0.6 and hypotenuse = 10. The adjacent side is…", answer: 6, tolerance: 0, explanation: "adjacent = 0.6 × 10 = 6.", hints: ["Multiply ratio × hyp.", "0.6 × 10.", "adjacent = 0.6 × 10 = 6."] },
      // @q08
      { id: "U26L2-num-2", type: "numeric-input", category: "procedural", prompt: "tan θ = 1.5 and adjacent = 4. The opposite side is…", answer: 6, tolerance: 0, explanation: "opposite = tan × adjacent = 1.5 × 4 = 6.", hints: ["Multiply by adjacent.", "1.5 × 4.", "opposite = tan × adjacent = 1."] },
      // @q09
      { id: "U26L2-num-3", type: "numeric-input", category: "conceptual", prompt: "cos 45° ≈ 0.707 with hypotenuse 10. The adjacent side is about…", answer: 7.07, tolerance: 0.1, explanation: "adjacent = 0.707 × 10 ≈ 7.07.", hints: ["0.707 × 10.", "≈ 7.07.", "adjacent = 0.707 × 10 ≈ 7.07."] },
      // @q10
      { id: "U26L2-frac-1", type: "fraction-input", category: "conceptual", prompt: "In a 3-4-5 right triangle, tan θ with opposite 3 (adjacent 4) is 3/4. What fraction is tan θ?", numerator: 3, denominator: 4, acceptEquivalent: true, explanation: "tan = opposite/adjacent = 3/4.", hints: ["3 ÷ 4.", "3/4.", "tan = opposite/adjacent = 3/4."] },
      // @q11
      { id: "U26L2-tf-1", type: "true-false-justify", category: "conceptual", prompt: "cos θ uses the adjacent side and the hypotenuse.", isTrue: true, explanation: "cos = adjacent/hypotenuse — always the touching leg over the hypotenuse.", hints: ["CAH.", "Adjacent/hypotenuse.", "cos = adjacent/hypotenuse — always the touching leg over the hypotenuse."] },
      // @q12
      { id: "U26L2-tf-2", type: "true-false-justify", category: "conceptual", prompt: "tan θ = opposite/adjacent, and tan 45° = 1.", isTrue: true, explanation: "Both legs equal in a 45° right triangle → ratio 1.", hints: ["Equal legs.", "1.", "Both legs equal in a 45° right triangle → ratio 1."] },
      // @q13
      { id: "U26L2-order-1", type: "order-steps", category: "word", prompt: "Order the steps to find tan θ.", sequence: ["Label opposite and adjacent for θ", "Identify which leg touches θ (not hyp)", "Divide: opposite ÷ adjacent"], diagnoses: { "Label opposite and adjacent for θ@1": "Label the sides first.", "Identify which leg touches θ (not hyp)@0": "Then the adjacent leg.", "Divide: opposite ÷ adjacent@0": "Divide last." }, explanation: "Label, find adjacent, divide.", hints: ["Opposite & adjacent.", "Touching leg.", "Label, find adjacent, divide."] },
      // @q14
      { id: "U26L2-drag-1", type: "drag-match", category: "conceptual", prompt: "Match each ratio to its formula.", pairs: [ { source: "Sine", target: "opposite/hypotenuse" }, { source: "Cosine", target: "adjacent/hypotenuse" }, { source: "Tangent", target: "opposite/adjacent" } ], diagnoses: { "Sine->adjacent/hypotenuse": "Sine uses opposite and hypotenuse.", "Cosine->opposite/adjacent": "Cosine pairs adjacent with hypotenuse.", "Tangent->opposite/hypotenuse": "Tangent uses the two legs." }, explanation: "SOH-CAH-TOA organizes all three.", hints: ["SOH.", "CAH.", "SOH-CAH-TOA organizes all three."] },
      // @q15
      { id: "U26L2-graph-1", type: "graph-interact", category: "word", prompt: "cos θ = 0.8 with hypotenuse 10. Set the slider to the ADJACENT side (key: value).", challenge: "cos θ = 0.8 with hypotenuse 10. — adjust the values below to match the condition.", validate: { value: 8 }, tolerance: 0.01, explanation: "adjacent = 0.8 × 10 = 8.", hints: ["0.8 × 10.", "8.", "adjacent = 0.8 × 10 = 8."] }
    ],
    selection: { procedural: 2, conceptual: 2, word: 1 },
    passThreshold: 0.8,
  },
  commonMistakes: [
    { wrongPattern: "uses hypotenuse in tangent", diagnosis: "tan = opposite/adjacent — the hypotenuse is NOT in tangent.", hint: "TOA: only the two legs." },
    { wrongPattern: "picks the wrong leg as adjacent", diagnosis: "Adjacent TOUCHES the angle; the other leg is opposite.", hint: "Trace the angle's rays." },
    { wrongPattern: "inverts cosine", diagnosis: "cos = adjacent/hypotenuse, never hypotenuse/adjacent.", hint: "CAH: adjacent over hypotenuse." },
  ],
  recallTags: ["cosine", "tangent", "adjacent", "SOH-CAH-TOA", "ratio"],
  discovery: {
    challenges: [
      { instruction: "Draw a right triangle and label all three sides for angle θ.", observe: "The adjacent side touches θ; the opposite faces it; the hypotenuse is longest." },
      { instruction: "Compute all three ratios for θ = 45°.", observe: "sin ≈ cos ≈ 0.707 and tan = 1 — each ratio owns the same angle." },
    ],
    predict: { prompt: "For a triangle with opposite 3 and adjacent 4, tan θ = …", options: [{ id: "a", text: "0.75" }, { id: "b", text: "1.33" }, { id: "c", text: "0.6" }], reveal: "0.75 — opposite/adjacent = 3/4. The third leg being 5 gives sin = 0.6 and cos = 0.8 instead." },
    sayItYourWay: { prompt: "What are cosine and tangent, in your own words?", phrasings: [{ id: "a", text: "Two more fixed side ratios for the same angle: adjacent/hypotenuse and opposite/adjacent", correct: true, why: "They complete the family of ratios owned by an angle." }, { id: "b", text: "Alternate names for sine", correct: false, why: "Each ratio is distinct." }, { id: "c", text: "The lengths of the two legs", correct: false, why: "They're ratios, not raw lengths." }], formalName: "cosine = adjacent/hypotenuse and tangent = opposite/adjacent (with sine = opposite/hypotenuse)" },
    stretch: "Given an angle and one side, a ratio finds the others — and given two sides, the inverse finds the angle. Next: forwarding and reversing the trio.", 
  },
};
