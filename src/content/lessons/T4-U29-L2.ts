import type { Lesson } from "../schema";

export const T4U29L2: Lesson = {
  // @meta
  id: "T4-U29-L2",
  tier: 4,
  unit: "Probability",
  title: "Theory vs Reality",
  prerequisites: ["T4-U28-L4","T4-U29-L1"],
  estimatedMinutes: 13,
  hook: { question: "Flip a coin 10 times: you might get 7 heads — far from the 'expected' 5. Flip it 1000 times and the proportion of heads settles near 0.5. Probability predicts the LONG RUN; the short run wobbles. The experimental proportion is the relative frequency.", type: "real-world" },
  intuitionBlocks: [{ widget: "graph-plotter", narrative: "Plot the running proportion of heads as flips accumulate. Early on it swings wildly; with more flips it homes in on 0.5 — the law of large numbers. Flip again and watch the wobble shrink each time." }],

  // @discovery
  formalBlocks: [{ definition: "RELATIVE FREQUENCY = times the event happened ÷ total trials. The LAW OF LARGE NUMBERS: as trials grow, relative frequency approaches the theoretical probability. 10 flips can give 7 heads (0.7); 1000 flips almost surely sit near 0.5. Small samples wobble — never judge probability from a tiny run.", examples: ["20 flips, 12 heads → relative frequency 12/20 = 0.6.", "2000 flips → typically 0.48–0.52 — anchored near 0.5."], pitfall: "Don't fall for the gambler's fallacy: a run of 5 tails doesn't make heads 'due'. Each flip is independent — the law of large numbers cares about many flips, not a streak.", altExplanations: ["GAME: coin-flip simulator — 10 flips can wobble to 7 heads (0.7), but 1000 flips cluster near 0.5. The law of large numbers is the wobble-averaging magnet: streaks of 5 tails don't make heads 'due', because each flip is independent.", "FOOD: tasting a new recipe — 20 guests mark it tasty 12 times (relative frequency 0.6); serve it to 2000 and the approval rate steadies near the true preference. Never judge a probability from a tiny sample."] }],
  gutChecks: [{ prompt: "Why does the proportion of heads stabilize with more flips?", answer: "The law of large numbers: random wobbles average out, pulling relative frequency toward the theoretical 0.5." }],
  quiz: {
    pool: [
      // @q01
      { id: "U29L2-mcq-1", type: "mcq", category: "procedural", prompt: "12 heads in 20 flips → relative frequency = …", options: [ { id: "a", text: "0.6" }, { id: "b", text: "0.5" }, { id: "c", text: "1.67" }, { id: "d", text: "12" } ], correctOptionId: "a", diagnoses: { b: "0.5 is the THEORY, not this run's frequency.", c: "1.67 inverts 20/12.", d: "12 is the count, not the ratio." }, explanation: "12 ÷ 20 = 0.6 — the experimental proportion.", hints: ["12 ÷ 20.", "0.6.", "12 ÷ 20 = 0.6 — the experimental proportion."] },
      // @q02
      { id: "U29L2-mcq-2", type: "mcq", category: "conceptual", prompt: "The law of large numbers says…", options: [ { id: "a", text: "fewer trials → better estimates" }, { id: "b", text: "more trials → relative frequency approaches the true probability" }, { id: "c", text: "streaks must balance" }, { id: "d", text: "probability changes over time" } ], correctOptionId: "b", diagnoses: { a: "Fewer trials wobble MORE.", c: "That's the gambler's fallacy.", d: "The true probability is fixed." }, explanation: "The wobble shrinks as the sample grows.", hints: ["Large numbers.", "Converges.", "The wobble shrinks as the sample grows."] },
      // @q03
      { id: "U29L2-mcq-3", type: "mcq", category: "word", prompt: "5 tails in a row. 'Heads is due next' is…", options: [ { id: "a", text: "proven by the law of large numbers" }, { id: "b", text: "correct — streaks must balance" }, { id: "c", text: "the gambler's fallacy — each flip is independent" }, { id: "d", text: "true after 10 tails" } ], correctOptionId: "c", diagnoses: { b: "No balancing mechanic exists.", a: "The law concerns many flips, not the next one.", d: "Independence never expires." }, explanation: "P(heads) = 0.5 on EVERY flip regardless of history.", hints: ["Independent flips.", "No memory.", "Gambler's fallacy."] },
      // @q04
      { id: "U29L2-mcq-4", type: "mcq", category: "procedural", prompt: "2000 flips: heads proportion is MOST likely…", options: [ { id: "a", text: "0.8" }, { id: "b", text: "exactly 0.5" }, { id: "c", text: "0.2" }, { id: "d", text: "between 0.48 and 0.52" } ], correctOptionId: "d", diagnoses: { b: "Exactly 0.5 is possible but not typical at 2000.", c: "0.2 is far from the fair coin.", a: "0.8 would need a biased coin." }, explanation: "Large samples land close to 0.5, rarely on it exactly.", hints: ["Near 0.5.", "0.48–0.52.", "Large samples land close to 0."] },
      // @q05
      { id: "U29L2-mcq-5", type: "mcq", category: "conceptual", prompt: "Relative frequency from 10 flips should be treated as…", options: [ { id: "a", text: "a rough hint, not the true probability" }, { id: "b", text: "the true probability exactly" }, { id: "c", text: "always 0.5" }, { id: "d", text: "meaningless" } ], correctOptionId: "a", diagnoses: { b: "Small samples wobble.", c: "A short run can give 0.7.", d: "It's a noisy estimate, still informative." }, explanation: "Tiny samples miss the long-run value.", hints: ["Small sample.", "Wobbles.", "Tiny samples miss the long-run value."] },
      // @q06
      { id: "U29L2-mcq-6", type: "mcq", category: "word", prompt: "A company says a product fails 1% of the time from 60 tests (no failures observed). The real failure rate is…", options: [ { id: "a", text: "definitely 0%" }, { id: "b", text: "unknown — 60 tests is too small to claim 0%" }, { id: "c", text: "definitely 1%" }, { id: "d", text: "exactly 60%" } ], correctOptionId: "b", diagnoses: { a: "No failures ≠ no failure rate.", c: "The claim is a theory, untested adequately.", d: "60% misreads counting." }, explanation: "Small samples can't confirm a rare 1% rate.", hints: ["Rare event.", "Needs many tests.", "Small samples can't confirm a rare 1% rate."] },
      // @q07
      { id: "U29L2-num-1", type: "numeric-input", category: "procedural", prompt: "8 heads in 10 flips → relative frequency (decimal).", answer: 0.8, tolerance: 0.01, acceptFractions: true, explanation: "8 ÷ 10 = 0.8 — a short-run wobble above 0.5.", hints: ["8 ÷ 10.", "0.8.", "8 ÷ 10 = 0.8 — a short-run wobble above 0.5."] },
      // @q08
      { id: "U29L2-num-2", type: "numeric-input", category: "procedural", prompt: "In 1000 flips, heads lands 515 times. Relative frequency = …", answer: 0.515, tolerance: 0.01, acceptFractions: true, explanation: "515 ÷ 1000 = 0.515 — close to 0.5.", hints: ["515 ÷ 1000.", "0.515.", "515 ÷ 1000 = 0."] },
      // @q09
      { id: "U29L2-num-3", type: "numeric-input", category: "conceptual", prompt: "How many total flips are in the two runs used above (10 + 1000)?", answer: 1010, tolerance: 0, explanation: "10 + 1000 = 1010 flips across both experiments.", hints: ["Add the runs.", "1010.", "10 + 1000 = 1010 flips across both experiments."] },
      // @q10
      { id: "U29L2-frac-1", type: "fraction-input", category: "conceptual", prompt: "A die rolled 60 times shows the number 4 exactly 10 times. Relative frequency of rolling 4 is…", numerator: 1, denominator: 6, acceptEquivalent: true, explanation: "10/60 = 1/6 — matches theory here.", hints: ["10 ÷ 60.", "1/6.", "10/60 = 1/6 — matches theory here."] },
      // @q11
      { id: "U29L2-tf-1", type: "true-false-justify", category: "conceptual", prompt: "The law of large numbers guarantees relative frequency equals the probability exactly.", isTrue: false, explanation: "It approaches it — equality in the limit, rarely exact at any finite sample.", hints: ["Approaches.", "Not exact.", "It approaches it — equality in the limit, rarely exact at any finite sample."] },
      // @q12
      { id: "U29L2-tf-2", type: "true-false-justify", category: "conceptual", prompt: "A roulette wheel has no memory — past reds don't make black due.", isTrue: true, explanation: "Each spin is independent; the gambler's fallacy is false.", hints: ["Independent spins.", "No memory.", "Each spin is independent; the gambler's fallacy is false."] },
      // @q13
      { id: "U29L2-order-1", type: "order-steps", category: "word", prompt: "Order the steps to find relative frequency.", sequence: ["Count the successes", "Count total trials", "Divide successes ÷ total"], diagnoses: { "Count the successes@1": "Count successes first.", "Count total trials@0": "Then total trials.", "Divide successes ÷ total@0": "Divide last." }, explanation: "Successes, total, divide.", hints: ["Successes.", "Total.", "Successes, total, divide."] },
      // @q14
      { id: "U29L2-drag-1", type: "drag-match", category: "conceptual", prompt: "Match each idea to its meaning.", pairs: [ { source: "Relative frequency", target: "observed ÷ trials" }, { source: "Theoretical probability", target: "favourable ÷ total (long run)" }, { source: "Gambler's fallacy", target: "streaks influence next trial" } ], diagnoses: { "Relative frequency->favourable ÷ total (long run)": "Observed runs give relative frequency.", "Theoretical probability->observed ÷ trials": "Theory is the long-run prediction.", "Gambler's fallacy->observed ÷ trials": "The fallacy misuses streaks." }, explanation: "Observed vs predicted — and the false belief that links them wrongly.", hints: ["Observed ÷ trials.", "Theory long-run.", "Observed vs predicted — and the false belief that links them wrongly."] },
      // @q15
      { id: "U29L2-graph-1", type: "graph-interact", category: "word", prompt: "Set the slider to the relative frequency of 40 heads in 80 flips (key: value).", challenge: "Adjust the values below so they match the condition described in the prompt.", validate: { value: 0.5 }, tolerance: 0.01, explanation: "40 ÷ 80 = 0.5 — exactly fair here.", hints: ["40 ÷ 80.", "0.5.", "40 ÷ 80 = 0.5 — exactly fair here."] }
    ],
    selection: { procedural: 2, conceptual: 2, word: 1 },
    passThreshold: 0.8,
  },
  commonMistakes: [
    { wrongPattern: "trusts tiny samples", diagnosis: "Short runs wobble far from the true probability.", hint: "Need many trials." },
    { wrongPattern: "believes streaks must balance", diagnosis: "Independent trials have no memory — the gambler's fallacy.", hint: "Each flip is fresh." },
    { wrongPattern: "confuses observed frequency with theory", diagnosis: "Relative frequency approaches but rarely equals the probability.", hint: "Observed ≈ theory over time." },
  ],
  recallTags: ["relative frequency", "law of large numbers", "sample", "gambler's fallacy", "coin flips"],
  discovery: {
    challenges: [
      { instruction: "Flip and watch the running proportion of heads.", observe: "It swings early, then homes in on 0.5 with more flips." },
      { instruction: "Run a second sequence and compare wobble sizes.", observe: "10-flip runs vary widely; 1000-flip runs cluster near 0.5." },
    ],
    predict: { prompt: "Strength of the wobble after 10 flips vs after 1000 — the 10-flip run will…", options: [{ id: "a", text: "deviate far more from 0.5" }, { id: "b", text: "deviate the same" }, { id: "c", text: "always land exactly on 0.5" }], reveal: "Deviate far more — small samples sway wildly; large samples settle near the true value." },
    sayItYourWay: { prompt: "How does reality relate to probability theory?", phrasings: [{ id: "a", text: "Reality wobbles short-term but averages toward theory long-term", correct: true, why: "The law of large numbers connects them." }, { id: "b", text: "Reality exactly repeats theory every time", correct: false, why: "Short runs deviate." }, { id: "c", text: "Theory is useless after a coin flip", correct: false, why: "Theory describes the long-run behaviour." }], formalName: "relative frequency and the law of large numbers (observed proportion → theoretical probability)" },
    stretch: "One event is simple — but TWO events, like two dice flipped together, open a grid of possibilities. Next: sample spaces and the tree diagram builder.", 
  },
};
