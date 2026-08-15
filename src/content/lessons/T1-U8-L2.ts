import type { Lesson } from "../schema";

export const T1U8L2: Lesson = {
  // @meta
  id: "T1-U8-L2",
  tier: 1,
  unit: "Roots & surds",
  title: "Tidying Surds",
  prerequisites: ["T1-U7-L4","T1-U8-L1"],
  estimatedMinutes: 12,
  hook: {
    question: "A carpenter needs a length of exactly √12 m, but every ruler is marked in whole numbers. A colleague hands her √12 as 2√3 and says 'same length, tidier.' How can two different-looking surds be the very same number?",
    type: "paradox",
  },
  intuitionBlocks: [{ widget: "tree-diagram-builder", narrative: "Split 12 into its prime fingerprint: 12 = 2 × 2 × 3. Watch the 2 × 2 pair up into a square — 4. The square root of a square is whole: √4 = 2, and it walks out of the root as a 2, leaving 2√3 behind." }],

  // @discovery
  formalBlocks: [
    { definition: "A surd is fully simplified when the number under the root has no perfect-square factor (other than 1). To simplify √n, write n as (square number) × (rest), then bring the square's root out front: √12 = √(4 × 3) = 2√3.", examples: ["√18 = √(9 × 2) = 3√2 — the square factor 9 leaves the root as a 3.", "√50 = √(25 × 2) = 5√2 — √25 = 5, and the leftover 2 is square-free."], pitfall: "Do not stop at √12 = √(4 × 3) and then 'simplify' the 3 — √3 has no square factor, so 2√3 IS the tidy end state. And never write 2√3 as √(2 × 3): the 2 outside multiplies the whole √3.", altExplanations: ["GAME: item-stack tidying — √12 is a messy pile of 12; pull out the perfect-square stack of 4 (which unpacks as 2×2, so 2 leaves the root) and you get 2√3. Only square-block stacks can be pulled out whole.", "FOOD: parcelling — √18 packs as √(9×2): the 9-slice pack unwraps to 3, so 3√2 leaves the root. Look for the biggest square factor hiding inside before you stop."] },
  ],
  gutChecks: [{ prompt: "What is √32 in fully simplified surd form?", answer: "4√2 — because √32 = √(16 × 2) = 4√2." }],
  quiz: {
    pool: [
      // @q01
      { id: "U8L2-mcq-1", type: "mcq", category: "procedural", prompt: "Simplify √12.", options: [ { id: "a", text: "2√3" }, { id: "b", text: "3√2" }, { id: "c", text: "√12 stays" }, { id: "d", text: "√6" } ], correctOptionId: "a", diagnoses: { b: "3√2 = √18, not √12.", c: "12 has the square factor 4 — it can be tidied.", d: "√6 is √12 halved — wrong value." }, explanation: "12 = 4 × 3, so √12 = √4 × √3 = 2√3.", hints: ["Look for the biggest square factor of 12.", "12 = 4 × 3.", "2√3."] },
      // @q02
      { id: "U8L2-mcq-2", type: "mcq", category: "conceptual", prompt: "Which shows √20 in fully simplified form?", options: [ { id: "a", text: "2√5" }, { id: "b", text: "5√2" }, { id: "c", text: "2√10" }, { id: "d", text: "√4 × √5" } ], correctOptionId: "a", diagnoses: { b: "5√2 = √50, not √20.", c: "√10 has no square factor, but 20 = 4 × 5 — you missed the 4.", d: "Correct thinking, but √4 × √5 isn't simplified — the 2 must come out." }, explanation: "20 = 4 × 5, so √20 = √4 × √5 = 2√5.", hints: ["Largest square factor of 20?", "20 = 4 × 5.", "2√5."] },
      // @q03
      { id: "U8L2-mcq-3", type: "mcq", category: "word", prompt: "A square patch of garden has area 48 m². Which expression is the exact side length, simplified?", options: [ { id: "a", text: "4√3 m" }, { id: "b", text: "3√4 m" }, { id: "c", text: "2√12 m" }, { id: "d", text: "√48 m" } ], correctOptionId: "a", diagnoses: { b: "√4 = 2, so 3√4 = 6 — not the side of area 48.", c: "√48 simplifies further: √48 = 4√3, not 2√12.", d: "√48 is exact but not yet simplified — tidy it." }, explanation: "side = √48 = √(16 × 3) = 4√3 m.", hints: ["side² = area.", "48 = 16 × 3.", "4√3 m."] },
      // @q04
      { id: "U8L2-mcq-4", type: "mcq", category: "procedural", prompt: "Simplify √72.", options: [ { id: "a", text: "6√2" }, { id: "b", text: "2√18" }, { id: "c", text: "8√9" }, { id: "d", text: "√36 × √2" } ], correctOptionId: "a", diagnoses: { b: "2√18 still has a square factor — √18 = 3√2, so this becomes 6√2.", c: "√9 = 3, so 8√9 = 24 — way too big.", d: "Right split, not simplified — pull the 6 out." }, explanation: "72 = 36 × 2, so √72 = 6√2.", hints: ["Largest square factor of 72?", "72 = 36 × 2.", "6√2."] },
      // @q05
      { id: "U8L2-mcq-5", type: "mcq", category: "conceptual", prompt: "Which surd is ALREADY fully simplified?", options: [ { id: "a", text: "√21" }, { id: "b", text: "√8" }, { id: "c", text: "√12" }, { id: "d", text: "√27" } ], correctOptionId: "a", diagnoses: { b: "√8 = 2√2 — 4 is a square factor.", c: "√12 = 2√3 — 4 is a square factor.", d: "√27 = 3√3 — 9 is a square factor." }, explanation: "21 = 3 × 7 has no square factor, so √21 stays as is.", hints: ["Which radicand has a square factor?", "21 = 3 × 7 — no square.", "√21."] },
      // @q06
      { id: "U8L2-mcq-6", type: "mcq", category: "word", prompt: "A tile is a square with side √50 cm. What is its area (exact)?", options: [ { id: "a", text: "50 cm²" }, { id: "b", text: "25 cm²" }, { id: "c", text: "5√2 cm²" }, { id: "d", text: "100 cm²" } ], correctOptionId: "a", diagnoses: { b: "25 is half the radicand — squaring isn't halving.", c: "5√2 is the simplified SIDE, not the area.", d: "That would be a side of 10 cm." }, explanation: "Area = (√50)² = 50 cm² — squaring a surd removes the root.", hints: ["Area = side × side.", "(√50)² = 50.", "50 cm²."] },
      // @q07
      { id: "U8L2-num-1", type: "numeric-input", category: "procedural", prompt: "Simplify √75. Type the number OUTSIDE the root.", answer: 5, tolerance: 0, explanation: "75 = 25 × 3, so √75 = 5√3 — the 5 walks out.", hints: ["Largest square factor of 75?", "75 = 25 × 3.", "√25 = 5."] },
      // @q08
      { id: "U8L2-num-2", type: "numeric-input", category: "procedural", prompt: "Simplify √98. Type the number OUTSIDE the root.", answer: 7, tolerance: 0, explanation: "98 = 49 × 2, so √98 = 7√2 — the 7 walks out.", hints: ["Largest square factor of 98?", "98 = 49 × 2.", "√49 = 7."] },
      // @q09
      { id: "U8L2-num-3", type: "numeric-input", category: "conceptual", prompt: "Simplify √80. Type the number OUTSIDE the root.", answer: 4, tolerance: 0, explanation: "80 = 16 × 5, so √80 = 4√5 — the 4 walks out.", hints: ["Largest square factor of 80?", "80 = 16 × 5.", "√16 = 4."] },
      // @q10
      { id: "U8L2-frac-1", type: "fraction-input", category: "conceptual", prompt: "Simplify √(4/9). Write the answer as a fraction.", numerator: 2, denominator: 3, acceptEquivalent: true, explanation: "√(4/9) = √4 / √9 = 2/3.", hints: ["Root top and bottom separately.", "√4 = 2, √9 = 3.", "2/3."] },
      // @q11
      { id: "U8L2-tf-1", type: "true-false-justify", category: "conceptual", prompt: "√18 = 3√2.", isTrue: true, explanation: "18 = 9 × 2, so √18 = √9 × √2 = 3√2 — true.", hints: ["Largest square factor of 18?", "18 = 9 × 2.", "True — 3√2."] },
      // @q12
      { id: "U8L2-tf-2", type: "true-false-justify", category: "conceptual", prompt: "√50 is already fully simplified.", isTrue: false, explanation: "50 = 25 × 2, so √50 = 5√2 — it was not simplified.", hints: ["Does 50 have a square factor?", "50 = 25 × 2.", "False — 5√2."] },
      // @q13
      { id: "U8L2-order-1", type: "order-steps", category: "word", prompt: "Put the steps to simplify √72 in order.", sequence: ["Split 72 = 36 × 2", "Write √72 = √36 × √2", "√36 = 6 comes out", "Answer: 6√2"], diagnoses: { "Split 72 = 36 × 2@1": "Split first.", "Write √72 = √36 × √2@0": "Split before writing the root split.", "Answer: 6√2@0": "Build up to the answer." }, explanation: "Split the square factor out, root it, write the tidy answer.", hints: ["Start with the split.", "Then write the root of each factor.", "Finish with 6√2."] },
      // @q14
      { id: "U8L2-drag-1", type: "drag-match", category: "conceptual", prompt: "Match each surd to its simplified form.", pairs: [ { source: "√8", target: "2√2" }, { source: "√12", target: "2√3" }, { source: "√45", target: "3√5" } ], diagnoses: { "√8->2√3": "√8 = 2√2 — the square factor is 4.", "√12->3√5": "√12 = 2√3 — the square factor is 4.", "√45->2√2": "√45 = 3√5 — the square factor is 9." }, explanation: "√8 = √(4×2) = 2√2 · √12 = √(4×3) = 2√3 · √45 = √(9×5) = 3√5.", hints: ["Find each radicand's square factor.", "8→4×2, 12→4×3, 45→9×5.", "Pair them up."] },
      // @q15
      { id: "U8L2-graph-1", type: "graph-interact", category: "word", prompt: "This number line marks the value of √12 ≈ 3.46. Set the point to the value of 2√3 (key: value).", challenge: "Set the slider to 3.46.", validate: { value: 3.46 }, tolerance: 0.01, explanation: "2√3 ≈ 3.46 — exactly the same value as √12.", hints: ["2√3 ≈ 2 × 1.732.", "3.46.", "Set the slider to 3.46."] }
    ],
    selection: { procedural: 2, conceptual: 2, word: 1 },
    passThreshold: 0.8,
  },
  commonMistakes: [
    { wrongPattern: "√12 = 2 × 2 × √3", diagnosis: "Only ONE pair of 2s leaves the root. √12 = √(4 × 3) = 2√3, not 2 × 2 × √3.", hint: "Each matching prime pair exits as a single copy outside." },
    { wrongPattern: "√20 = 2√10", diagnosis: "20 = 4 × 5, and only the perfect square 4 may leave: √20 = 2√5. 10 is not a square factor.", hint: "Split into a perfect square × the square-free rest." },
    { wrongPattern: "thinks simplifying makes the number smaller", diagnosis: "√12 and 2√3 are exactly the same number — simplifying only changes the costume, never the value.", hint: "Check: (2√3)² = 4 × 3 = 12, matching (√12)²." },
  ],
  recallTags: ["surds", "prime-factorization", "square-factors"],
  discovery: {
    challenges: [
      { instruction: "Split 12 into a factor tree until every branch is prime.", observe: "You always end with 2 × 2 × 3 — the same atoms no matter how you split." },
      { instruction: "Now pair up identical primes: 2 × 2. Think of √(2 × 2 × 3) as √(4 × 3).", observe: "√4 is a whole 2, and it comes out of the root as a multiplier: √12 = 2√3." },
    ],
    predict: { prompt: "Before you reveal: is √12 exactly equal to 2√3?", options: [{ id: "a", text: "Yes — they are the same number" }, { id: "b", text: "No — 2√3 is smaller" }, { id: "c", text: "No — 2√3 is bigger" }], reveal: "Yes. Square both: (2√3)² = 4 × 3 = 12, so 2√3 is exactly √12 wearing a tidier costume." },
    sayItYourWay: { prompt: "What does it mean to 'simplify' a surd?", phrasings: [{ id: "a", text: "Pull any square factor out of the root", correct: true, why: "√(4×3) = 2√3 — the square's root walks out as a whole number." }, { id: "b", text: "Round it to a decimal", correct: false, why: "Decimals lose the exact value; a simplified surd stays exact." }, { id: "c", text: "Make the number under the root smaller", correct: false, why: "√12 → √3 would change the value — you only move square FACTORS out, not the whole amount." }], formalName: "simplifying a surd" },
    stretch: "You can tidy √8 = 2√2. But what about 1/√2 sitting in a fraction's denominator? Is THAT tidy? A very different kind of tidying awaits in the next lesson.",
  },
};
