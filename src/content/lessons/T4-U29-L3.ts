import type { Lesson } from "../schema";

export const T4U29L3: Lesson = {
  // @meta
  id: "T4-U29-L3",
  tier: 4,
  unit: "Probability",
  title: "Two Things Happening",
  prerequisites: ["T4-U28-L4","T4-U29-L1","T4-U29-L2"],
  estimatedMinutes: 14,
  hook: { question: "Flip a coin twice: the possibilities branch — first heads or tails, then heads or tails again. That's 4 paths: HH, HT, TH, TT. A tree diagram draws those branches, and multiplying along a branch gives the probability of that whole path.", type: "puzzle" },
  intuitionBlocks: [{ widget: "tree-diagram-builder", narrative: "Start at the trunk with two branches for the first coin. Each branch splits again for the second coin. Fill in each branch's probability and the tree multiplies along the paths — two heads is ½ × ½ = ¼. Tap leaves to see the outcomes." }],

  // @discovery
  formalBlocks: [{ definition: "A TREE DIAGRAM maps a sequence of events: each branching multiplies the paths. The probability of a path = product of the branch probabilities along it. The sum of all final leaves = 1. Two coin flips: $\\tfrac{1}{2} \\times \\tfrac{1}{2} = \\tfrac{1}{4}$ for HH. The SAMPLE SPACE lists every outcome: HH, HT, TH, TT.", examples: ["Two coins: P(HH) = ½ × ½ = ¼; P(one head) = ¼ + ¼ = ½.", "Roll a die then flip a coin: 6 × 2 = 12 paths in the sample space."], pitfall: "Don't count 'HT' and 'TH' as the same path — they're DIFFERENT outcomes. The tree treats coin 1 and coin 2 separately, so both paths must be counted (and both added for 'one head').", altExplanations: ["GAME: a tree diagram is a branching quest log — each branch is a fraction of the remaining paths; the path probability is the product along its branches. Coin then coin: 1/2 × 1/2 = 1/4 for HH, and HT vs TH are DIFFERENT paths, each counted separately.", "FOOD: a two-course menu tree — starter choice branches into dessert choices; the chance of one specific two-course meal multiplies along the branches. Order matters: chicken-then-cake and cake-then-chicken are distinct paths."] }],
  gutChecks: [{ prompt: "Why multiply along a tree's branch?", answer: "Each branch is a fraction of the remaining possibilities; the path's share is the repeated product — both events must happen." }],
  quiz: {
    pool: [
      // @q01
      { id: "U29L3-mcq-1", type: "mcq", category: "procedural", prompt: "Two fair coins flipped. P(HH) = …", options: [ { id: "a", text: "1/4" }, { id: "b", text: "1/2" }, { id: "c", text: "1/8" }, { id: "d", text: "2/4" } ], correctOptionId: "a", diagnoses: { b: "1/2 is P(first flip heads).", c: "1/8 would need three coins.", d: "2/4 counts two paths, not HH." }, explanation: "Along the tree: ½ × ½ = ¼.", hints: ["Multiply branches.", "½ × ½.", "1/4."] },
      // @q02
      { id: "U29L3-mcq-2", type: "mcq", category: "conceptual", prompt: "Why are HT and TH counted as DIFFERENT outcomes?", options: [ { id: "a", text: "The tree orders coin 1 then coin 2" }, { id: "b", text: "They're identical" }, { id: "c", text: "Heads is always first" }, { id: "d", text: "Order never matters" } ], correctOptionId: "a", diagnoses: { b: "They're distinct paths in the sample space.", c: "Heads can be on either coin.", d: "Order matters here — that's the point." }, explanation: "Coin 1 H/coin 2 T is a separate path from coin 1 T/coin 2 H.", hints: ["First vs second coin.", "Two paths.", "Different outcomes."] },
      // @q03
      { id: "U29L3-mcq-3", type: "mcq", category: "word", prompt: "A spinner (2 equal halves: A, B) spun TWICE. P(AA) = …", options: [ { id: "a", text: "1/4" }, { id: "b", text: "1/2" }, { id: "c", text: "1/3" }, { id: "d", text: "2/4" } ], correctOptionId: "a", diagnoses: { b: "1/2 is one spin landing A.", c: "1/3 isn't from equally likely halves.", d: "2/4 would be P(A on either spin)." }, explanation: "Branch ½ then ½ → ¼ — the tree model applies to any two-stage trial.", hints: ["½ × ½.", "¼.", "1/4."] },
      // @q04
      { id: "U29L3-mcq-4", type: "mcq", category: "procedural", prompt: "Roll a die, then flip a coin. Number of paths in the sample space = …", options: [ { id: "a", text: "12" }, { id: "b", text: "8" }, { id: "c", text: "6" }, { id: "d", text: "2" } ], correctOptionId: "a", diagnoses: { b: "8 is 2³ — wrong multiplier.", c: "6 ignores the coin.", d: "2 ignores the die." }, explanation: "6 die outcomes × 2 coin outcomes = 12 paths.", hints: ["6 × 2.", "12.", "12."] },
      // @q05
      { id: "U29L3-mcq-5", type: "mcq", category: "conceptual", prompt: "The sum of all leaf probabilities on a tree equals…", options: [ { id: "a", text: "1" }, { id: "b", text: "0.5" }, { id: "c", text: "2" }, { id: "d", text: "the number of leaves" } ], correctOptionId: "a", diagnoses: { b: "0.5 is one flipped coin's branch sum.", c: "2 has no probabilistic meaning.", d: "Leaves count, but their probs sum to 1." }, explanation: "Every possible outcome is covered — the full sample space totals 1.", hints: ["All outcomes.", "Certainty.", "1."] },
      // @q06
      { id: "U29L3-mcq-6", type: "mcq", category: "word", prompt: "Two coins: P(exactly one head) = …", options: [ { id: "a", text: "1/2" }, { id: "b", text: "1/4" }, { id: "c", text: "3/4" }, { id: "d", text: "1" } ], correctOptionId: "a", diagnoses: { b: "1/4 is P(HH) alone.", c: "3/4 is P(at least one head).", d: "1 is certainty." }, explanation: "P(HT) + P(TH) = ¼ + ¼ = ½ — ADD the two distinct paths.", hints: ["HT + TH.", "¼ + ¼.", "1/2."] },
      // @q07
      { id: "U29L3-num-1", type: "numeric-input", category: "procedural", prompt: "Two fair coins: P(TT) as a fraction (denominator).", answer: 4, tolerance: 0, explanation: "¼ — denominators: 4 paths.", hints: ["½ × ½.", "¼.", "denominator 4."] },
      // @q08
      { id: "U29L3-num-2", type: "numeric-input", category: "procedural", prompt: "Two fair coins: P(exactly one tail) as a decimal.", answer: 0.5, tolerance: 0.01, acceptFractions: true, explanation: "P(HT) + P(TH) = ¼ + ¼ = ½.", hints: ["Two paths.", "¼ + ¼ = ½.", "0.5."] },
      // @q09
      { id: "U29L3-num-3", type: "numeric-input", category: "conceptual", prompt: "A die, then a coin: how many branches would a tree draw for the die?", answer: 6, tolerance: 0, explanation: "Six first-stage branches, one per die face.", hints: ["Die faces.", "6.", "6."] },
      // @q10
      { id: "U29L3-frac-1", type: "fraction-input", category: "conceptual", prompt: "Two coins: P(at least one head). All leaves except TT.", numerator: 3, denominator: 4, acceptEquivalent: true, explanation: "HH, HT, TH are 3 of 4 leaves — 3/4.", hints: ["3 of 4 leaves.", "3/4.", "3/4."] },
      // @q11
      { id: "U29L3-tf-1", type: "true-false-justify", category: "conceptual", prompt: "A tree multiplies along branches and adds across alternative paths.", isTrue: true, explanation: "Multiplying joins stages; adding joins distinct favourable paths.", hints: ["× along, + across.", "True.", "True."] },
      // @q12
      { id: "U29L3-tf-2", type: "true-false-justify", category: "conceptual", prompt: "P(HH) equals P(HT) for two fair coins — both are 1/4.", isTrue: true, explanation: "Each ordered path has the same ½ × ½ product.", hints: ["Ordered paths.", "Both ¼.", "True."] },
      // @q13
      { id: "U29L3-order-1", type: "order-steps", category: "word", prompt: "Order the steps to find P(HH) with two coins via a tree.", sequence: ["Draw coin-1 branches: H, T (each ½)", "Split each into coin-2 branches", "Multiplying: HH = ½ × ½ = ¼"], diagnoses: { "Draw coin-1 branches: H, T (each ½)@1": "Start with the first stage.", "Split each into coin-2 branches@0": "Then the second stage.", "Multiplying: HH = ½ × ½ = ¼@0": "Multiply last." }, explanation: "First stage, second stage, multiply the path.", hints: ["Coin 1.", "Coin 2.", "½ × ½."] },
      // @q14
      { id: "U29L3-drag-1", type: "drag-match", category: "conceptual", prompt: "Match each event to its two-coin probability.", pairs: [ { source: "HH", target: "1/4" }, { source: "Exactly one head", target: "1/2" }, { source: "At least one head", target: "3/4" } ], diagnoses: { "HH->1/2": "HH is one path: 1/4.", "Exactly one head->3/4": "HT + TH = 1/2.", "At least one head->1/4": "Three of four leaves: 3/4." }, explanation: "Each event gathers specific leaves.", hints: ["HH = ¼.", "One head = ½.", "Not TT = ¾."] },
      // @q15
      { id: "U29L3-graph-1", type: "graph-interact", category: "word", prompt: "Two coins: set the slider to P(HT or TH) (key: value).", challenge: "Set the slider to 0.5.", validate: { value: 0.5 }, tolerance: 0.01, explanation: "¼ + ¼ = 0.5.", hints: ["Two paths.", "¼ + ¼.", "0.5."] }
    ],
    selection: { procedural: 2, conceptual: 2, word: 1 },
    passThreshold: 0.8,
  },
  commonMistakes: [
    { wrongPattern: "counts HT and TH as one outcome", diagnosis: "Ordered paths are distinct — the tree separates them.", hint: "Coin 1 then coin 2." },
    { wrongPattern: "adds instead of multiplying along a branch", diagnosis: "Sequential events multiply; only alternative paths add.", hint: "× along, + across." },
    { wrongPattern: "forgets the sum of leaves is 1", diagnosis: "The full tree covers every outcome — sanity-check the total.", hint: "Leaves sum to 1." },
  ],
  recallTags: ["tree diagram", "sample space", "branch", "multiply", "two events"],
  discovery: {
    challenges: [
      { instruction: "Build a two-coin tree and fill each branch ½.", observe: "Four leaves appear; each equals ¼ — the paths multiply." },
      { instruction: "Add the leaves that give exactly one head.", observe: "Two leaves (HT, TH) sum to ½ — adding across alternatives." },
    ],
    predict: { prompt: "Three fair coins: P(HHH) = …", options: [{ id: "a", text: "1/8" }, { id: "b", text: "1/4" }, { id: "c", text: "1/2" }], reveal: "1/8 — the tree grows a third stage: ½ × ½ × ½. Each extra coin halves the path." },
    sayItYourWay: { prompt: "What does a tree diagram do?", phrasings: [{ id: "a", text: "Maps every sequence of outcomes and multiplies branch probabilities", correct: true, why: "It's the full visual sample space with path products." }, { id: "b", text: "Finds the average of two events", correct: false, why: "Trees multiply paths, not average outcomes." }, { id: "c", text: "Always gives the same answer as guessing", correct: false, why: "Trees make the counting exact and visible." }], formalName: "tree diagrams and sample space — path probability = product of branch probabilities" },
    stretch: "Drawing the branch from a bag WITHOUT replacement changes the numbers: the second draw's probabilities shift. Next: independent or not?", 
  },
};
