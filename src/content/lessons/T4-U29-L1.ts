import type { Lesson } from "../schema";

export const T4U29L1: Lesson = {
  // @meta
  id: "T4-U29-L1",
  tier: 4,
  unit: "Probability",
  title: "The Chance Line",
  prerequisites: ["T1-U4-L3","T4-U28-L4"],
  estimatedMinutes: 12,
  hook: { question: "Probability is a line from 0 to 1: impossible at 0, certain at 1, and everything else in between — a coin landing heads is 0.5, the sun rising tomorrow is 1. For equally likely outcomes, probability = favourable ÷ total. Place events on the line before betting on them.", type: "puzzle" },
  intuitionBlocks: [{ widget: "number-line", props: { mode: "markers", min: 0, max: 1, markers: [{ value: 0, label: "Impossible" }, { value: 1 / 6, label: "Roll a six" }, { value: 0.5, label: "Even chance" }, { value: 1, label: "Certain" }] }, narrative: "Slide events onto a 0–1 line: a dice roll, a coin flip, tomorrow's sunrise. Each lands somewhere between impossible (0) and certain (1). Then roll a fair die and count: favourable outcomes divided by the 6 total outcomes gives the probability." }],

  // @discovery
  formalBlocks: [{ definition: "Probability $P$ satisfies $0 \\le P \\le 1$. For EQUALLY LIKELY outcomes, $P(\\text{event}) = \\dfrac{\\text{favourable outcomes}}{\\text{total outcomes}}$. A fair die: $P(3) = 1/6$; $P(\\text{even}) = 3/6 = 0.5$. Impossible = 0, certain = 1. All probabilities of a full set of outcomes sum to 1.", examples: ["Fair coin: P(heads) = 1 favourable ÷ 2 total = 0.5.", "Fair die: P(even) = 3 ÷ 6 = 0.5."], pitfall: "The formula needs EQUALLY LIKELY outcomes — a weighted coin isn't 1/2. Always check fairness before dividing.", altExplanations: ["GAME: probability is a chance meter from 0 (never drops) to 1 (always drops) — a fair die shows face 3 with 1 of 6 equally likely faces (1/6); an even face with 3 of 6 (0.5). The count formula only works when every outcome is equally likely.", "FOOD: a pizza roulette — with 6 equal slices, 'the slice with pepperoni' is 1/6; 'a slice with cheese' is 6/6 = certain = 1. Weighted choices (a rigged spinner) break the equal-slice rule before you divide."] }],
  gutChecks: [{ prompt: "Why does P(even on a die) = 0.5?", answer: "Three even faces (2, 4, 6) out of six total equally likely faces → 3/6 = 0.5." }],
  quiz: {
    pool: [
      // @q01
      { id: "U29L1-mcq-1", type: "mcq", category: "procedural", prompt: "P(getting a 4 on a fair die) = …", options: [ { id: "a", text: "1/6 ≈ 0.167" }, { id: "b", text: "1/4 = 0.25" }, { id: "c", text: "4/6 ≈ 0.667" }, { id: "d", text: "1" } ], correctOptionId: "a", diagnoses: { b: "1/4 confuses faces with total 6.", c: "4/6 is P(4 or more), not P(4).", d: "1 is certainty — impossible for one face." }, explanation: "1 favourable face out of 6 equally likely faces.", hints: ["Favourable ÷ total.", "1 ÷ 6.", "1 favourable face out of 6 equally likely faces."] },
      // @q02
      { id: "U29L1-mcq-2", type: "mcq", category: "conceptual", prompt: "An impossible event has probability…", options: [ { id: "a", text: "1" }, { id: "b", text: "0" }, { id: "c", text: "0.5" }, { id: "d", text: "negative" } ], correctOptionId: "b", diagnoses: { a: "1 is certainty.", c: "0.5 is a fair coin flip.", d: "Probabilities are never negative." }, explanation: "No favourable outcomes → P = 0.", hints: ["Never happens.", "0.", "No favourable outcomes → P = 0."] },
      // @q03
      { id: "U29L1-mcq-3", type: "mcq", category: "word", prompt: "A fair spinner has 4 equal colours. P(red) = …", options: [ { id: "a", text: "4" }, { id: "b", text: "1/3" }, { id: "c", text: "1/4 = 0.25" }, { id: "d", text: "0.75" } ], correctOptionId: "c", diagnoses: { b: "1/3 would need 3 total outcomes.", a: "4 is the total count.", d: "0.75 is P(not red)." }, explanation: "1 red section out of 4 equal sections.", hints: ["1 of 4.", "1/4.", "1 red section out of 4 equal sections."] },
      // @q04
      { id: "U29L1-mcq-4", type: "mcq", category: "procedural", prompt: "P(even) on a fair die is…", options: [ { id: "a", text: "1/6" }, { id: "b", text: "2/6 = 0.33" }, { id: "c", text: "6/6 = 1" }, { id: "d", text: "3/6 = 0.5" } ], correctOptionId: "d", diagnoses: { b: "2/6 is P(one pair of faces).", c: "1 is certainty.", a: "1/6 is P(single face)." }, explanation: "Faces 2, 4, 6 = 3 favourable out of 6.", hints: ["2, 4, 6.", "3 ÷ 6.", "Faces 2, 4, 6 = 3 favourable out of 6."] },
      // @q05
      { id: "U29L1-mcq-5", type: "mcq", category: "conceptual", prompt: "Why can't P be greater than 1?", options: [ { id: "a", text: "Favourable outcomes can't exceed total outcomes" }, { id: "b", text: "Because 1 is the highest number" }, { id: "c", text: "Because dice only roll to 6" }, { id: "d", text: "It can — events can exceed 1" } ], correctOptionId: "a", diagnoses: { b: "That's circular — the real reason is counting.", c: "Probability applies beyond dice.", d: "Favourable ≤ total always." }, explanation: "You can't have MORE favourable outcomes than outcomes exist.", hints: ["Favourable ≤ total.", "Max = 1.", "Can't exceed total."] },
      // @q06
      { id: "U29L1-mcq-6", type: "mcq", category: "word", prompt: "A bag has 3 red, 2 blue, 5 green marbles. P(blue) = …", options: [ { id: "a", text: "2/5 = 0.4" }, { id: "b", text: "2/10 = 0.2" }, { id: "c", text: "5/10 = 0.5" }, { id: "d", text: "1/3" } ], correctOptionId: "b", diagnoses: { a: "2/5 ignores green marbles in the total.", c: "5/10 is P(green).", d: "1/3 isn't the split." }, explanation: "2 blue out of 10 total marbles.", hints: ["Total = 10.", "2 ÷ 10.", "2 blue out of 10 total marbles."] },
      // @q07
      { id: "U29L1-num-1", type: "numeric-input", category: "procedural", prompt: "P(rolling a 6 on a fair die) as a fraction.", answer: 6, tolerance: 0, explanation: "1 favourable face out of 6 → 1/6, denominator 6.", hints: ["1 of 6.", "1/6.", "1 favourable face out of 6 → 1/6, denominator 6."] },
      // @q08
      { id: "U29L1-num-2", type: "numeric-input", category: "procedural", prompt: "A fair coin flipped once. P(tails) = … (decimal)", answer: 0.5, tolerance: 0.01, acceptFractions: true, explanation: "1 of 2 equally likely outcomes.", hints: ["1 ÷ 2.", "0.5.", "1 of 2 equally likely outcomes."] },
      // @q09
      { id: "U29L1-num-3", type: "numeric-input", category: "conceptual", prompt: "P(sun rises tomorrow morning) is closest to…", answer: 1, tolerance: 0.01, acceptFractions: true, explanation: "Effectively certain — probability 1.", hints: ["Certain.", "1.", "Effectively certain — probability 1."] },
      // @q10
      { id: "U29L1-frac-1", type: "fraction-input", category: "conceptual", prompt: "A bag: 3 red, 2 blue, 5 green. P(red OR blue) as a fraction of the total.", numerator: 5, denominator: 10, acceptEquivalent: true, explanation: "5 favourable (3 red + 2 blue) out of 10 → 1/2.", hints: ["3 + 2 = 5.", "5/10.", "5 favourable (3 red + 2 blue) out of 10 → 1/2."] },
      // @q11
      { id: "U29L1-tf-1", type: "true-false-justify", category: "conceptual", prompt: "All probabilities of the possible outcomes sum to 1.", isTrue: true, explanation: "Heads + tails = 1; all six die faces sum to 1; the full set is certainty.", hints: ["Full set = certain.", "Sum = 1.", "Heads + tails = 1; all six die faces sum to 1; the full set is certainty."] },
      // @q12
      { id: "U29L1-tf-2", type: "true-false-justify", category: "conceptual", prompt: "A weighted coin where heads comes up more often still has P(heads) = 0.5.", isTrue: false, explanation: "Unequal outcomes break the equally-likely assumption.", hints: ["Not equally likely.", "No 1/2.", "Unequal outcomes break the equally-likely assumption."] },
      // @q13
      { id: "U29L1-order-1", type: "order-steps", category: "word", prompt: "Order the steps to find P(even) on a fair die.", sequence: ["Count total outcomes: 6", "Count favourable: 2, 4, 6 → 3", "Divide: 3 ÷ 6 = 0.5"], diagnoses: { "Count total outcomes: 6@1": "Total first.", "Count favourable: 2, 4, 6 → 3@0": "Then favourable.", "Divide: 3 ÷ 6 = 0.5@0": "Divide last." }, explanation: "Total, favourable, divide.", hints: ["6 faces.", "3 evens.", "Total, favourable, divide."] },
      // @q14
      { id: "U29L1-drag-1", type: "drag-match", category: "conceptual", prompt: "Match each event to its probability.", pairs: [ { source: "Heads on fair coin", target: "0.5" }, { source: "Rolling 7 on a standard die", target: "0" }, { source: "Sun rising tomorrow", target: "1" } ], diagnoses: { "Heads on fair coin->0": "A fair coin is 0.5.", "Rolling 7 on a standard die->0.5": "No 7 face → 0.", "Sun rising tomorrow->0": "Certain → 1." }, explanation: "Each event sits at its spot on the 0–1 line.", hints: ["Coin = 0.5.", "7 = 0.", "Each event sits at its spot on the 0–1 line."] },
      // @q15
      { id: "U29L1-graph-1", type: "graph-interact", category: "word", prompt: "A fair die: set the slider to P(rolling a 5) (key: value).", challenge: "A fair die: — adjust the values below to match the condition.", validate: { value: 0.17 }, tolerance: 0.02, explanation: "1/6 ≈ 0.167.", hints: ["1 ÷ 6.", "≈ 0.167.", "1/6 ≈ 0.167."] }
    ],
    selection: { procedural: 2, conceptual: 2, word: 1 },
    passThreshold: 0.8,
  },
  commonMistakes: [
    { wrongPattern: "uses total = only favourable groups", diagnosis: "The denominator is ALL outcomes — including unfavourable ones.", hint: "Count everything." },
    { wrongPattern: "assumes equal likelihood without checking", diagnosis: "Weighted coins and biased spinners break the formula.", hint: "Check fairness." },
    { wrongPattern: "says probabilities can exceed 1", diagnosis: "Favourable ≤ total, so P ≤ 1 always.", hint: "Max is 1." },
  ],
  recallTags: ["probability", "chance", "outcomes", "equally likely", "fraction"],
  discovery: {
    challenges: [
      { instruction: "Place events on the 0–1 number line.", observe: "Impossible at 0, certain at 1, everything else between." },
      { instruction: "Roll a fair die and count favourable over total.", observe: "P(4) = 1/6 and P(even) = 3/6 each land exactly where the count predicts." },
    ],
    predict: { prompt: "Rolling a fair die, P(at least 4) meaning 4, 5, or 6 — is…", options: [{ id: "a", text: "0.5" }, { id: "b", text: "0.33" }, { id: "c", text: "0.67" }], reveal: "0.5 — three favourable faces (4, 5, 6) of six total. Half the faces." },
    sayItYourWay: { prompt: "What is probability?", phrasings: [{ id: "a", text: "A number from 0 to 1 telling how likely a fair-outcome event is", correct: true, why: "It's the chance line with equal-likelihood counting." }, { id: "b", text: "How many times something happened", correct: false, why: "That's a frequency count, not a probability." }, { id: "c", text: "Always a whole number", correct: false, why: "Probabilities are fractions/decimals in 0–1." }], formalName: "probability — P(event) = favourable ÷ total for equally likely outcomes; P ∈ [0, 1]" },
    stretch: "Formulas predict, but reality wobbles: flip a coin 100 times and you might not get exactly 50 heads. Next: theory vs reality — relative frequency.", 
  },
};
