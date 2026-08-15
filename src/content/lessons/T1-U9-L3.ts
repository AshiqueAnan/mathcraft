import type { Lesson } from "../schema";

export const T1U9L3: Lesson = {
  // @meta
  id: "T1-U9-L3",
  tier: 1,
  unit: "Standard form & accuracy",
  title: "Estimate First, Calculate Second",
  prerequisites: ["T1-U8-L3","T1-U9-L2"],
  estimatedMinutes: 12,
  hook: {
    question: "A builder measures a wall as 5.2 m to one decimal place, then multiplies by 3.7 m. The calculator says 19.24 — but is the answer really that precise? The wall might be 5.16 or 5.24. Estimating first reveals what the measurement actually lets you claim.",
    type: "real-world",
  },
  intuitionBlocks: [{ widget: "graph-plotter", narrative: "Plot y = 5.2x and watch it skim the points. Now drag a point that could really be 5.16 or 5.24 — the answer band is wide. Seeing the band on the graph beats trusting a row of calculator digits. A quick estimate (5 × 4 = 20) tells you 19.24 is 'about right', but the true area hides inside an interval." }],

  // @discovery
  formalBlocks: [
    { definition: "Estimation rounds every input to one significant figure and calculates quickly: $5.2 \\times 3.7 \\approx 5 \\times 4 = 20$. A measured number like 5.2 (to 1 dp) genuinely hides an interval: $5.2 = 5.15$–$5.24$ in the true value. The multiplication inherits this uncertainty, so the final answer should be quoted to a sensible precision — often by re-rounding to the least-precise input.", examples: ["47.9 × 8.2 ≈ 50 × 8 = 400 — and 47.9 × 8.2 = 392.78, which is sensibly quoted as 390 (2 sig figs).", "0.0061 × 24.7 ≈ 0.006 × 20 = 0.12 — the true product 0.15067 → quote 0.15 (2 sig figs)."], pitfall: "Never quote a calculator's full display like 392.78 from rough measurements — the inputs only honestly support about two significant figures. Estimate first, and quote the answer at the precision of the least-precise input.", altExplanations: ["FOOD: a recipe measuring 5.2 cups hides a true value anywhere from 5.15 to 5.24 — the recipe's answer can only be honestly quoted to about two figures. Estimate first; quote at the precision your measuring cup actually supports.", "GAME: hit points display 5.2 but the real damage is an interval — 5.2 is really '5.15 to 5.24'. Multiplying such lazy measurements and quoting the full calculator string would overclaim precision your inputs never had."] },
  ],
  gutChecks: [{ prompt: "Estimate 31 × 4.9 in your head.", answer: "30 × 5 = 150 — and the exact answer 151.9 is close, so the estimate passes." }],
  quiz: {
    pool: [
      // @q01
      { id: "U9L3-mcq-1", type: "mcq", category: "procedural", prompt: "Estimate 4.8 × 7.3 by rounding each to one significant figure.", options: [ { id: "a", text: "5 × 7 = 35" }, { id: "b", text: "4 × 7 = 28" }, { id: "c", text: "5 × 7 = 35, then ×4" }, { id: "d", text: "4 × 8 = 32" } ], correctOptionId: "a", diagnoses: { b: "4.8 rounds to 5, not 4.", c: "Don't keep the decimals after rounding.", d: "7.3 rounds to 7, not 8." }, explanation: "4.8 ≈ 5 and 7.3 ≈ 7, so the estimate is 5 × 7 = 35.", hints: ["Round each factor to one sig fig.", "4.8 is closer to 5; 7.3 to 7.", "35."] },
      // @q02
      { id: "U9L3-mcq-2", type: "mcq", category: "conceptual", prompt: "Why estimate BEFORE reaching for the calculator?", options: [ { id: "a", text: "To know what answer makes sense" }, { id: "b", text: "To avoid ever multiplying" }, { id: "c", text: "The estimate is the final answer" }, { id: "d", text: "To make the numbers exact" } ], correctOptionId: "a", diagnoses: { b: "You still calculate — the estimate checks the result.", c: "Estimates are sanity checks, not finals.", d: "Rounding makes things less exact, intentionally." }, explanation: "A rounded estimate anchors your expectation, so a typo like pressing 4.8 × 7.3 wrong becomes obvious.", hints: ["What is the estimate FOR?", "A sanity check.", "To know what makes sense."] },
      // @q03
      { id: "U9L3-mcq-3", type: "mcq", category: "word", prompt: "A field is 12.6 m × 8.3 m. Which is the best quick estimate of its area?", options: [ { id: "a", text: "104 m²" }, { id: "b", text: "100 m²" }, { id: "c", text: "96 m²" }, { id: "d", text: "120 m²" } ], correctOptionId: "a", diagnoses: { b: "100 is too rough — round 12.6→13 and 8.3→8 gives 104.", c: "10 × 9.6 isn't from rounding to whole 12.6→13, 8.3→8.", d: "Only one factor rounded up — loses accuracy." }, explanation: "13 × 8 = 104 m² is the rounded estimate.", hints: ["Round to whole numbers: 12.6→13, 8.3→8.", "13 × 8.", "104."] },
      // @q04
      { id: "U9L3-mcq-4", type: "mcq", category: "procedural", prompt: "A calculator gives 8.21 × 4.97 = 40.8037. Estimate to check this.", options: [ { id: "a", text: "8 × 5 = 40 — correct" }, { id: "b", text: "8 × 4 = 32 — close but off" }, { id: "c", text: "9 × 5 = 45 — correct" }, { id: "d", text: "8.2 × 5.0 = 41 — correct" } ], correctOptionId: "a", diagnoses: { b: "4.97 rounds to 5, not 4.", c: "8.21 rounds to 8, not 9.", d: "That's a fine check too, but the one-sig-fig rule says round 8.21→8." }, explanation: "8.21 ≈ 8 and 4.97 ≈ 5 → 40, matching the calculator.", hints: ["Round 8.21 to 8, 4.97 to 5.", "8 × 5.", "40."] },
      // @q05
      { id: "U9L3-mcq-5", type: "mcq", category: "conceptual", prompt: "A width measured '6.4 m to 1 dp' could really be which values?", options: [ { id: "a", text: "6.35–6.44 m" }, { id: "b", text: "6.0–6.4 m" }, { id: "c", text: "Exactly 6.4 m" }, { id: "d", text: "6.39–6.41 m" } ], correctOptionId: "a", diagnoses: { b: "6.0 and 6.4 aren't the rounding band — 6.44 rounds to 6.4 too.", c: "Measured values are never exact.", d: "Too narrow — 6.40 to 6.44 m also rounds to 6.4." }, explanation: "Anything from 6.35 up to just under 6.45 rounds to 6.4 at 1 dp.", hints: ["Half the step below: 6.35.", "Half the step above: under 6.45.", "6.35–6.44."] },
      // @q06
      { id: "U9L3-mcq-6", type: "mcq", category: "word", prompt: "A recipe's flour bag says 1.2 kg (± 0.05). Why is the exact 1.2000 kg misleading?", options: [ { id: "a", text: "The true mass hides in a range" }, { id: "b", text: "The bag is always exactly 1.2" }, { id: "c", text: "1.2000 shows too few zeros" }, { id: "d", text: "Kitchen scales round up only" } ], correctOptionId: "a", diagnoses: { b: "±0.05 means 1.15–1.25 kg.", c: "It shows TOO many digits — overclaiming precision.", d: "Rounding is symmetric, not one-way." }, explanation: "±0.05 kg means the true mass is anywhere from 1.15 to 1.25 kg — quote honestly.", hints: ["What does ±0.05 mean?", "A range around 1.2.", "1.15–1.25."] },
      // @q07
      { id: "U9L3-num-1", type: "numeric-input", category: "procedural", prompt: "Estimate 9.6 × 3.1. Type the estimate (rounded whole number).", answer: 30, tolerance: 0, explanation: "10 × 3 = 30 — rounding 9.6→10 and 3.1→3.", hints: ["9.6 rounds to 10.", "3.1 rounds to 3.", "30."] },
      // @q08
      { id: "U9L3-num-2", type: "numeric-input", category: "procedural", prompt: "Estimate 0.052 × 6.4. Type the estimate.", answer: 0.3, tolerance: 0, explanation: "0.05 × 6 = 0.3 — rounding to one sig fig each.", hints: ["0.052 ≈ 0.05.", "6.4 ≈ 6.", "0.3."] },
      // @q09
      { id: "U9L3-num-3", type: "numeric-input", category: "conceptual", prompt: "A plank '2.8 m to 1 dp' — what is the smallest possible true length? (Type it.)", answer: 2.75, tolerance: 0.01, unit: "m", explanation: "2.75 is the smallest value that still rounds to 2.8 at one decimal place.", hints: ["Half the step below 2.8.", "2.8 − 0.05.", "2.75 m."] },
      // @q10
      { id: "U9L3-frac-1", type: "fraction-input", category: "conceptual", prompt: "Estimate 0.49 × 2.05 and write the result as a fraction (simplified).", numerator: 1, denominator: 1, acceptEquivalent: true, explanation: "0.5 × 2 = 1 — the estimate is a whole 1.", hints: ["0.49 ≈ 0.5.", "2.05 ≈ 2.", "1 = 1/1."] },
      // @q11
      { id: "U9L3-tf-1", type: "true-false-justify", category: "conceptual", prompt: "Estimating 3.9 × 5.1 as 20 is a useful sanity check.", isTrue: true, explanation: "4 × 5 = 20 matches the true 19.89 — confirming the calculation.", hints: ["Round 3.9→4 and 5.1→5.", "4 × 5 = 20.", "True."] },
      // @q12
      { id: "U9L3-tf-2", type: "true-false-justify", category: "conceptual", prompt: "If a length is 12.6 m to 3 sig figs, the true length could be 12.55 m.", isTrue: true, explanation: "To 3 sig figs, 12.6 covers 12.55–12.64 — so 12.55 is a possible true length.", hints: ["What range rounds to 12.6 at 1 dp?", "12.55 up to just under 12.65.", "True — 12.55 fits."] },
      // @q13
      { id: "U9L3-order-1", type: "order-steps", category: "word", prompt: "Order the estimation routine for 3.7 × 1.9.", sequence: ["Round 3.7 → 4", "Round 1.9 → 2", "Multiply: 4 × 2", "Quote the answer: about 8"], diagnoses: { "Round 1.9 → 2@0": "Round the first factor first.", "Multiply: 4 × 2@0": "Round both before multiplying.", "Quote the answer: about 8@0": "Multiply before quoting." }, explanation: "Round each to one sig fig, multiply, then quote.", hints: ["Start by rounding the factors.", "Then multiply.", "About 8."] },
      // @q14
      { id: "U9L3-drag-1", type: "drag-match", category: "conceptual", prompt: "Match each product to its best one-sig-fig estimate.", pairs: [ { source: "3.1 × 4.9", target: "3 × 5 = 15" }, { source: "7.8 × 2.1", target: "8 × 2 = 16" }, { source: "9.2 × 1.1", target: "9 × 1 = 9" } ], diagnoses: { "3.1 × 4.9->8 × 2 = 16": "3.1 rounds to 3, not 8.", "7.8 × 2.1->9 × 1 = 9": "7.8 rounds to 8, 2.1 to 2.", "9.2 × 1.1->3 × 5 = 15": "9.2 rounds to 9, 1.1 to 1." }, explanation: "Round each factor to one sig fig and multiply: 3×5, 8×2, 9×1.", hints: ["One sig fig per factor.", "3.1→3, 7.8→8, 9.2→9.", "Match the rounded products."] },
      // @q15
      { id: "U9L3-graph-1", type: "graph-interact", category: "word", prompt: "This slider measures a plank. Set it to the LARGEST value that still rounds to 2.8 m at 1 dp (key: value).", challenge: "Set the slider to 2.85.", validate: { value: 2.85 }, tolerance: 0.01, explanation: "Just under 2.85 rounds to 2.8 — the top of the band.", hints: ["Half the step above 2.8.", "2.8 + 0.05.", "2.85."] }
    ],
    selection: { procedural: 2, conceptual: 2, word: 1 },
    passThreshold: 0.8,
  },
  commonMistakes: [
    { wrongPattern: "quotes full calculator display", diagnosis: "292.786 from rough inputs overclaims precision — quote ~290 (2 sig figs).", hint: "Round the answer to the least-precise input's sig figs." },
    { wrongPattern: "rounds inputs then forgets the band", diagnosis: "Estimate 5×4=20 is just a check; the true area could be 19.06–19.39 — a band, not a single point.", hint: "Estimate for sanity, then honor the interval." },
    { wrongPattern: "trusts exact digits on measured numbers", diagnosis: "A ruler to 1 dp can't support 4 decimal digits in the product.", hint: "The measurement's precision limits the answer's honesty." },
  ],
  recallTags: ["estimation", "bounds", "sanity-check", "rounding"],
  discovery: {
    challenges: [
      { instruction: "Estimate 5.2 × 3.7 by rounding both to whole numbers first.", observe: "5 × 4 = 20 — the calculator's 19.24 is close to 20, so 19.24 passes the sanity check." },
      { instruction: "Now think about 5.2 measured to 1 dp: the true width is anywhere from 5.15 to 5.24.", observe: "5.15 × 3.7 ≈ 19.06 and 5.24 × 3.7 ≈ 19.39 — the 'true' area hides in a band, and 19.24 is just one possible value." },
    ],
    predict: { prompt: "Is 19.24 guaranteed to be within the true area's possible range?", options: [{ id: "a", text: "Yes — the calculator is always exact here" }, { id: "b", text: "No — 5.24 max gives about 19.39, and 19.24 fits" }, { id: "c", text: "It could be outside the range" }], reveal: "19.24 fits inside the 19.06–19.39 band — but the point is the band itself. The measurement only promises an interval; the multiplication inherits the uncertainty." },
    sayItYourWay: { prompt: "What does a good estimate give you before you calculate?", phrasings: [{ id: "a", text: "A sanity check the calculator can't supply", correct: true, why: "Rounded facts like 5×4=20 flag typos and sneak by errors — 19.24 passes." }, { id: "b", text: "The exact answer in advance", correct: false, why: "Estimates never replace the calculation; they check it." }, { id: "c", text: "A way to skip the calculation entirely", correct: false, why: "For real answers you still calculate — but you interpret them against the estimate." }], formalName: "estimation and bounds" },
    stretch: "If 5.2 only promises 5.15–5.24, what are the smallest and largest values the area 5.2 × 3.7 could really take? The next lesson hunts those bounds exactly.",
  },
};
