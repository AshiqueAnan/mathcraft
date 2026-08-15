import type { Lesson } from "../schema";

export const T2U13L1: Lesson = {
  // @meta
  id: "T2-U13-L1",
  tier: 2,
  unit: "Formulas",
  title: "Formulas Are Sentences",
  prerequisites: ["T2-U11-L2","T2-U12-L4"],
  estimatedMinutes: 12,
  hook: {
    question: "v = u + at looks like a code, but read it as a sentence: 'the final speed is the starting speed plus the acceleration applied for t seconds.' Every formula is a recipe — and substitution is just cooking with the ingredients you're given.",
    type: "real-world",
  },
  intuitionBlocks: [{ widget: "graph-plotter", narrative: "Plot v = u + at as a line: fix u = 2 and a = 3, then slide t. Each t gives a v — the formula is a machine that eats time and outputs speed. Swap the letters for numbers (substitute) and the 'sentence' computes." }],

  // @discovery
  formalBlocks: [
    { definition: "A formula is a rule written with letters that shows how quantities relate. To use it, substitute the known values into the letters and evaluate, keeping units consistent. For v = u + at with u = 2 m/s, a = 3 m/s², t = 4 s: v = 2 + 3 × 4 = 14 m/s — the × is done BEFORE the + (order of operations still applies).", examples: ["Substitute into A = lw with l = 5, w = 3: A = 5 × 3 = 15 square units.", "Substitute into E = mc² with m = 2, c = 3: E = 2 × 9 = 18."], pitfall: "Do the arithmetic in the right order: in v = u + at, compute a × t first, then add u. And keep units consistent — never mix metres and kilometres without converting.", altExplanations: ["TRAVEL: v = u + at is a car's speed story — start at u, gain a per second for t seconds. Units are the characters in the story; mixing km and m scrambles the plot.", "GAME: v = u + at is a character's velocity stat — base speed u, plus acceleration a each of t ticks. Substituting the known stat values and evaluating keeps the equation's rule intact."] },
  ],
  gutChecks: [{ prompt: "Use v = u + at with u = 5, a = 2, t = 10.", answer: "v = 5 + 2×10 = 25 — multiply a×t first." }],
  quiz: {
    pool: [
      // @q01
      { id: "U13L1-mcq-1", type: "mcq", category: "procedural", prompt: "Use v = u + at with u = 2, a = 3, t = 4. What is v?", options: [ { id: "a", text: "14" }, { id: "b", text: "20" }, { id: "c", text: "9" }, { id: "d", text: "24" } ], correctOptionId: "a", diagnoses: { b: "20 = 2+3×4 — added before multiplying.", c: "9 = 2+3+4.", d: "24 = 2×3×4." }, explanation: "v = 2 + 3×4 = 2 + 12 = 14.", hints: ["Multiply a×t first.", "3 × 4 = 12.", "2 + 12 = 14."] },
      // @q02
      { id: "U13L1-mcq-2", type: "mcq", category: "conceptual", prompt: "In A = lw, what operation does the formula use?", options: [ { id: "a", text: "Multiply length by width" }, { id: "b", text: "Add length and width" }, { id: "c", text: "Divide length by width" }, { id: "d", text: "Square the length" } ], correctOptionId: "a", diagnoses: { b: "A = lw is l × w.", c: "No division here.", d: "lw isn't l²." }, explanation: "Adjacent letters mean multiply: lw = l × w.", hints: ["Adjacent letters multiply.", "l × w.", "Multiply."] },
      // @q03
      { id: "U13L1-mcq-3", type: "mcq", category: "word", prompt: "Pizza price P = 2n + 3 for n toppings. Find P when n = 4.", options: [ { id: "a", text: "11" }, { id: "b", text: "9" }, { id: "c", text: "24" }, { id: "d", text: "7" } ], correctOptionId: "a", diagnoses: { b: "9 = 2+4+3 — 2n is 2×n.", c: "24 = 2×4×3.", d: "7 = 4+3, dropped the 2n." }, explanation: "P = 2×4 + 3 = 8 + 3 = 11.", hints: ["2n = 2×4.", "8 + 3.", "11."] },
      // @q04
      { id: "U13L1-mcq-4", type: "mcq", category: "procedural", prompt: "Evaluate E = mc² for m = 2, c = 3.", options: [ { id: "a", text: "18" }, { id: "b", text: "36" }, { id: "c", text: "12" }, { id: "d", text: "6" } ], correctOptionId: "a", diagnoses: { b: "36 = 2×3×6 — mis-squared.", c: "12 = 2×3×2 — mis-squared.", d: "6 = 2×3 — missed the square." }, explanation: "c² = 9, so E = 2 × 9 = 18.", hints: ["c² = 3² = 9.", "2 × 9.", "18."] },
      // @q05
      { id: "U13L1-mcq-5", type: "mcq", category: "conceptual", prompt: "Why do units matter in a formula?", options: [ { id: "a", text: "Mixing units makes the answer meaningless" }, { id: "b", text: "Units are never used in formulas" }, { id: "c", text: "Numbers become smaller" }, { id: "d", text: "Units change the formula" } ], correctOptionId: "a", diagnoses: { b: "Every quantity carries units.", c: "Units don't change the numbers' size.", d: "Units don't change the rule — they must just match." }, explanation: "Mixing m/s with km/h breaks the answer; convert first.", hints: ["Can 2 m + 3 km be added?", "Convert first.", "Units must match."] },
      // @q06
      { id: "U13L1-mcq-6", type: "mcq", category: "word", prompt: "Taxi fare F = 2d + 5 for d km. Find F for 10 km.", options: [ { id: "a", text: "25" }, { id: "b", text: "70" }, { id: "c", text: "12" }, { id: "d", text: "15" } ], correctOptionId: "a", diagnoses: { b: "70 = 2×10×5 — the +5 adds.", c: "12 = 10+2 — dropped the 5.", d: "15 = 10+5 — dropped the ×2." }, explanation: "F = 2×10 + 5 = 20 + 5 = 25.", hints: ["2×10 = 20.", "Then +5.", "25."] },
      // @q07
      { id: "U13L1-num-1", type: "numeric-input", category: "procedural", prompt: "v = u + at, u = 4, a = 2, t = 5. Type v.", answer: 14, tolerance: 0, explanation: "4 + 2×5 = 4 + 10 = 14.", hints: ["2×5 = 10.", "4 + 10.", "14."] },
      // @q08
      { id: "U13L1-num-2", type: "numeric-input", category: "procedural", prompt: "A = lw with l = 7, w = 3. Type A.", answer: 21, tolerance: 0, explanation: "7 × 3 = 21.", hints: ["l × w.", "7 × 3.", "21."] },
      // @q09
      { id: "U13L1-num-3", type: "numeric-input", category: "conceptual", prompt: "P = 2l + 2w with l = 5, w = 3. Type P.", answer: 16, tolerance: 0, explanation: "2×5 + 2×3 = 10 + 6 = 16.", hints: ["2×5 = 10.", "2×3 = 6.", "16."] },
      // @q10
      { id: "U13L1-frac-1", type: "fraction-input", category: "conceptual", prompt: "v = u + at with u = 1, a = 1, t = 1/2. Write v as a fraction.", numerator: 3, denominator: 2, acceptEquivalent: true, explanation: "1 + 1×(1/2) = 1 + 1/2 = 3/2.", hints: ["1 × 1/2 = 1/2.", "1 + 1/2.", "3/2."] },
      // @q11
      { id: "U13L1-tf-1", type: "true-false-justify", category: "conceptual", prompt: "In A = lw, substituting l = 4, w = 5 gives A = 20.", isTrue: true, explanation: "4 × 5 = 20.", hints: ["l × w.", "4 × 5.", "True."] },
      // @q12
      { id: "U13L1-tf-2", type: "true-false-justify", category: "conceptual", prompt: "v = u + at with u = 2, a = 3, t = 4 gives v = 20.", isTrue: false, explanation: "v = 2 + 3×4 = 14. The 20 comes from adding before multiplying.", hints: ["Multiply a×t first.", "3×4 = 12.", "v = 14, not 20."] },
      // @q13
      { id: "U13L1-order-1", type: "order-steps", category: "word", prompt: "Order the steps to evaluate v = u + at with u = 2, a = 3, t = 4.", sequence: ["Write v = u + at", "Substitute: 2 + 3×4", "Multiply: 3×4 = 12", "Add: 2 + 12 = 14"], diagnoses: { "Substitute: 2 + 3×4@0": "Write the formula first.", "Add: 2 + 12 = 14@0": "Compute in order.", "Multiply: 3×4 = 12@3": "Multiply before adding." }, explanation: "Substitute, multiply, then add — order of operations.", hints: ["Write the formula.", "Plug in the values.", "Multiply first, then add."] },
      // @q14
      { id: "U13L1-drag-1", type: "drag-match", category: "conceptual", prompt: "Match each formula to its meaning.", pairs: [ { source: "A = lw", target: "area = length × width" }, { source: "v = u + at", target: "final speed = start + accel × time" }, { source: "P = l + w + l + w", target: "perimeter = sum of sides" } ], diagnoses: { "A = lw->perimeter = sum of sides": "Area multiplies length × width.", "v = u + at->area = length × width": "That's motion, not area.", "P = l + w + l + w->final speed": "Perimeter adds the sides." }, explanation: "Each formula is a sentence about its quantities.", hints: ["Read each as a sentence.", "Match the meaning.", "Pair them."] },
      // @q15
      { id: "U13L1-graph-1", type: "graph-interact", category: "word", prompt: "Set the slider to v when u = 2, a = 3, t = 4 (key: value).", challenge: "Set the slider to 14.", validate: { value: 14 }, tolerance: 0, explanation: "v = 2 + 3×4 = 14.", hints: ["3×4 = 12.", "2 + 12.", "14."] }
    ],
    selection: { procedural: 2, conceptual: 2, word: 1 },
    passThreshold: 0.8,
  },
  commonMistakes: [
    { wrongPattern: "adds before multiplying", diagnosis: "v = u + at with u=2,a=3,t=4: 2 + 3×4 = 14, NOT 20 (you must not do 2+3 first).", hint: "Multiply a×t before adding u." },
    { wrongPattern: "ignores units", diagnosis: "Mixing m/s and km/h without converting gives nonsense.", hint: "Convert to consistent units before substituting." },
    { wrongPattern: "misreads the formula's letters", diagnosis: "In A = lw, l and w multiply; in v = u + at, at multiplies then adds to u.", hint: "Read the formula as a sentence first, then compute." },
  ],
  recallTags: ["formulas", "substitution", "units"],
  discovery: {
    challenges: [
      { instruction: "Plot v = 2 + 3t on the graph and read off v when t = 4.", observe: "v = 14 — the line shows the formula's output at each input." },
      { instruction: "Now substitute u = 2, a = 3, t = 4 into v = u + at by hand.", observe: "2 + 3×4 = 14 — the graph and the algebra agree." },
    ],
    predict: { prompt: "For v = u + at with u = 1, a = 2, t = 3, what is v?", numeric: { answer: 7, tolerance: 0 }, reveal: "v = 1 + 2×3 = 7 — multiply the acceleration by time first." },
    sayItYourWay: { prompt: "What is a formula, really?", phrasings: [{ id: "a", text: "A rule that links quantities using letters", correct: true, why: "v = u + at tells how v relates to u, a, and t." }, { id: "b", text: "A random collection of letters", correct: false, why: "Each letter has a meaning and the rule always computes." }, { id: "c", text: "A number you always memorize", correct: false, why: "Formulas are read and used, not just memorized." }], formalName: "formula and substitution" },
    stretch: "If v = u + at is great when acceleration is steady, what happens when the rate of change itself changes? That's where calculus lives — far in your future, but worth knowing it exists.",
  },
};
