import type { Lesson } from "../schema";

export const T4U29L4: Lesson = {
  // @meta
  id: "T4-U29-L4",
  tier: 4,
  unit: "Probability",
  title: "Independent or Not?",
  prerequisites: ["T4-U28-L4","T4-U29-L1","T4-U29-L3"],
  estimatedMinutes: 13,
  hook: { question: "Flip a coin, then draw from a bag: does the second result care about the first? With replacement, each draw starts fresh — independent, multiply the probabilities. Without replacement, the bag SHIFTS — the second draw's odds change. Independence decides whether to multiply or adapt.", type: "paradox" },
  intuitionBlocks: [{ widget: "venn-diagram", narrative: "Shade two overlapping circles: A and B. The overlap is A AND B. Independent events multiply their probabilities; dependent events shrink the overlap because one outcome changes the other's chance. Toggle 'replace or not' and watch the overlap change." }],

  // @discovery
  formalBlocks: [{ definition: "EVENTS ARE INDEPENDENT when one doesn't affect the other's probability: $P(A \\text{ and } B) = P(A) \\times P(B)$. WITH replacement keeps independence; WITHOUT replacement creates dependence — $P(B\\mid A)$ shifts. MUTUALLY EXCLUSIVE events can't both happen ($P(A \\cap B) = 0$); independent events can. OR adds: $P(A \\text{ or } B) = P(A) + P(B) - P(A \\cap B)$ (subtract the double-counted overlap).", examples: ["Two coin flips (independent): P(H and H) = ½ × ½ = ¼.", "Bag: 2 red, 3 blue. Without replacement: P(red then red) = 2/5 × 1/4 = 1/10."], pitfall: "Don't confuse independent with mutually exclusive. Independent events CAN both happen (plus the overlap); mutually exclusive ones can't. With the venn diagram, independent = multiply the circles; mutually exclusive = circles never overlap.", altExplanations: ["GAME: independent events don't share memory — drawing WITH replacement resets the deck (2/5 × 2/5); WITHOUT replacement changes the odds (2/5 × 1/4). Independent events CAN both happen; mutually exclusive ones can't. Venn: independent multiplies the circles, exclusive circles never overlap.", "FOOD: grabbing two candies from a jar — put the first back and the odds stay independent; eat it and the jar changes. Mutually exclusive = two flavours can't both be in your hand at once; independent = each draw ignores the other."] }],
  gutChecks: [{ prompt: "Why does 'without replacement' break independence?", answer: "Removing the first item changes the bag's contents, so the second draw's probabilities shift — the outcomes are dependent." }],
  quiz: {
    pool: [
      // @q01
      { id: "U29L4-mcq-1", type: "mcq", category: "procedural", prompt: "Flip a coin twice (independent). P(H then H) = …", options: [ { id: "a", text: "1/4" }, { id: "b", text: "1/2" }, { id: "c", text: "1" }, { id: "d", text: "0" } ], correctOptionId: "a", diagnoses: { b: "1/2 is one flip.", c: "1 is certainty.", d: "0 is impossible." }, explanation: "Independent → multiply: ½ × ½ = ¼.", hints: ["Multiply.", "½ × ½.", "1/4."] },
      // @q02
      { id: "U29L4-mcq-2", type: "mcq", category: "conceptual", prompt: "Independent events satisfy…", options: [ { id: "a", text: "P(A and B) = 0 always" }, { id: "b", text: "P(A and B) = P(A) × P(B)" }, { id: "c", text: "P(A and B) = P(A) + P(B)" }, { id: "d", text: "P(B) changes after A" } ], correctOptionId: "b", diagnoses: { a: "That's mutually exclusive.", c: "Addition is for OR with overlap.", d: "Independence means no change." }, explanation: "One outcome doesn't influence the other — the product rule applies.", hints: ["No influence.", "Multiply.", "P(A) × P(B)."] },
      // @q03
      { id: "U29L4-mcq-3", type: "mcq", category: "word", prompt: "Bag: 2 red, 3 blue. WITHOUT replacement, P(red then red) = …", options: [ { id: "a", text: "2/5 + 1/4" }, { id: "b", text: "2/5 × 2/5 = 4/25" }, { id: "c", text: "2/5 × 1/4 = 1/10" }, { id: "d", text: "1/2" } ], correctOptionId: "c", diagnoses: { b: "4/25 assumes replacement — the bag changed.", a: "Would need OR logic, not AND.", d: "1/2 isn't this product." }, explanation: "First red 2/5; one red removed leaves 1 red of 4 → multiply 2/5 × 1/4.", hints: ["Bag shrinks.", "2/5 then 1/4.", "1/10."] },
      // @q04
      { id: "U29L4-mcq-4", type: "mcq", category: "procedural", prompt: "P(A) = 0.4, P(B) = 0.5, independent. P(A and B) = …", options: [ { id: "a", text: "0.45" }, { id: "b", text: "0.9" }, { id: "c", text: "0.1" }, { id: "d", text: "0.2" } ], correctOptionId: "d", diagnoses: { b: "0.9 is P(A or B) without subtracting overlap.", c: "0.1 subtracts — wrong operation.", a: "0.45 averages." }, explanation: "0.4 × 0.5 = 0.2.", hints: ["Multiply.", "0.4 × 0.5.", "0.2."] },
      // @q05
      { id: "U29L4-mcq-5", type: "mcq", category: "conceptual", prompt: "Mutually exclusive events can…", options: [ { id: "a", text: "never both happen" }, { id: "b", text: "always both happen" }, { id: "c", text: "affect each other's probabilities" }, { id: "d", text: "are always independent" } ], correctOptionId: "a", diagnoses: { b: "Both happening is impossible by definition.", c: "That's dependence — a separate idea.", d: "Exclusive ≠ independent; in fact P(A∩B)=0 contradicts the product for positive events." }, explanation: "The venn circles never overlap — P(A ∩ B) = 0.", hints: ["No overlap.", "Can't both.", "Mutually exclusive."] },
      // @q06
      { id: "U29L4-mcq-6", type: "mcq", category: "word", prompt: "P(A) = 0.5, P(B) = 0.3, P(A and B) = 0.15. P(A or B) = …", options: [ { id: "a", text: "0.8" }, { id: "b", text: "0.65" }, { id: "c", text: "0.5" }, { id: "d", text: "0.35" } ], correctOptionId: "b", diagnoses: { a: "0.8 adds without subtracting the overlap.", c: "0.5 is just P(A).", d: "0.35 subtracts everything." }, explanation: "0.5 + 0.3 − 0.15 = 0.65 — subtract the double-counted overlap.", hints: ["Add, subtract overlap.", "0.8 − 0.15.", "0.65."] },
      // @q07
      { id: "U29L4-num-1", type: "numeric-input", category: "procedural", prompt: "P(A) = 0.6, P(B) = 0.5, independent. P(A and B) (decimal).", answer: 0.3, tolerance: 0.01, acceptFractions: true, explanation: "0.6 × 0.5 = 0.3.", hints: ["Multiply.", "0.3.", "0.3."] },
      // @q08
      { id: "U29L4-num-2", type: "numeric-input", category: "procedural", prompt: "Bag: 1 red, 2 blue. WITH replacement, P(red then red) as a fraction of 9ths (denominator).", answer: 9, tolerance: 0, explanation: "1/3 × 1/3 = 1/9 — denominator 9.", hints: ["1/3 × 1/3.", "1/9.", "denominator 9."] },
      // @q09
      { id: "U29L4-num-3", type: "numeric-input", category: "conceptual", prompt: "P(A or B) when A and B are mutually exclusive with P(A)=0.4, P(B)=0.35.", answer: 0.75, tolerance: 0.01, acceptFractions: true, explanation: "No overlap → just add: 0.4 + 0.35 = 0.75.", hints: ["No overlap to subtract.", "0.4 + 0.35.", "0.75."] },
      // @q10
      { id: "U29L4-frac-1", type: "fraction-input", category: "conceptual", prompt: "Bag: 3 red, 1 blue, WITHOUT replacement. P(blue then blue) = 1/4 × 0 = 0. What fraction of the first draw was blue?", numerator: 1, denominator: 4, acceptEquivalent: true, explanation: "1 blue of 4 marbles → 1/4.", hints: ["1 of 4.", "1/4.", "1/4."] },
      // @q11
      { id: "U29L4-tf-1", type: "true-false-justify", category: "conceptual", prompt: "Independent events can still both happen.", isTrue: true, explanation: "Independence ≠ exclusivity — coin flips both can land heads.", hints: ["Both possible.", "Product rule.", "True."] },
      // @q12
      { id: "U29L4-tf-2", type: "true-false-justify", category: "conceptual", prompt: "Without replacement, the second draw is independent of the first.", isTrue: false, explanation: "The bag changes → the probabilities shift → dependence.", hints: ["Bag shifts.", "Dependent.", "False."] },
      // @q13
      { id: "U29L4-order-1", type: "order-steps", category: "word", prompt: "Order the steps for P(red then red) without replacement (2 red, 3 blue).", sequence: ["First draw: 2/5 red", "Second: 1 red left of 4 → 1/4", "Multiply: 2/5 × 1/4 = 1/10"], diagnoses: { "First draw: 2/5 red@1": "First draw first.", "Second: 1 red left of 4 → 1/4@0": "Then the changed bag.", "Multiply: 2/5 × 1/4 = 1/10@0": "Multiply last." }, explanation: "First, changed second, multiply.", hints: ["2/5.", "1/4.", "1/10."] },
      // @q14
      { id: "U29L4-drag-1", type: "drag-match", category: "conceptual", prompt: "Match each situation to its probability link.", pairs: [ { source: "With replacement", target: "independent" }, { source: "Without replacement", target: "dependent" }, { source: "Coin flips", target: "independent" } ], diagnoses: { "With replacement->dependent": "Replacement resets the state — independent.", "Without replacement->independent": "The bag changes — dependent.", "Coin flips->dependent": "Coins don't remember — independent." }, explanation: "Whether the state resets decides independence.", hints: ["Replace = reset.", "No replace = shift.", "Coins fresh."] },
      // @q15
      { id: "U29L4-graph-1", type: "graph-interact", category: "word", prompt: "Bag: 2 red, 2 blue. WITHOUT replacement, set the slider to P(red then red) (key: value).", challenge: "Set the slider to 0.17.", validate: { value: 0.17 }, tolerance: 0.02, explanation: "2/4 × 1/3 = 1/6 ≈ 0.167.", hints: ["2/4 × 1/3.", "1/6.", "≈ 0.17."] }
    ],
    selection: { procedural: 2, conceptual: 2, word: 1 },
    passThreshold: 0.8,
  },
  commonMistakes: [
    { wrongPattern: "multiplies without checking independence", diagnosis: "The product rule needs independence; without replacement it breaks.", hint: "Does the bag change?" },
    { wrongPattern: "confuses independent with mutually exclusive", diagnosis: "Independent events can both happen; exclusive can't.", hint: "Overlap vs no overlap." },
    { wrongPattern: "forgets to subtract the overlap for OR", diagnosis: "P(A or B) needs − P(A and B) or you double-count.", hint: "Subtract the overlap." },
  ],
  recallTags: ["independent", "dependent", "mutually exclusive", "replacement", "overlap"],
  discovery: {
    challenges: [
      { instruction: "Shade two venn circles and note the overlap.", observe: "The overlap is P(A and B) — the double-counted region for OR." },
      { instruction: "Toggle replacement on the bag draws.", observe: "With replacement the odds reset (independent); without, they shift (dependent)." },
    ],
    predict: { prompt: "Bag 1 red, 1 blue; draw twice WITHOUT replacement. P(red then blue) = …", options: [{ id: "a", text: "1/2" }, { id: "b", text: "1/4" }, { id: "c", text: "1/3" }], reveal: "1/2 — first red 1/2, then blue is now 1 of 1 → 1/2 × 1 = 1/2. The removed marble makes the second certain." },
    sayItYourWay: { prompt: "What makes events independent?", phrasings: [{ id: "a", text: "One happening doesn't change the other's probability", correct: true, why: "That's the exact definition — the product rule follows." }, { id: "b", text: "They never happen together", correct: false, why: "That's mutually exclusive — a different idea." }, { id: "c", text: "They always happen together", correct: false, why: "That would be certainty, not independence." }], formalName: "independence (P(A∩B) = P(A)P(B)), mutual exclusivity, and OR = add minus overlap" },
    stretch: "Phase E ends with the tree and the venn — the two great probability pictures. Carry both forward: trees organize sequences, venns organize overlaps.",
  },
};
