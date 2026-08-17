import type { Lesson } from "../schema";

export const T1U6L3: Lesson = {
  id: "T1-U6-L3",
  tier: 1,
  unit: "Ratio & proportion",
  title: "Double the Recipe, Double the Time?",
  prerequisites: ["T1-U5-L2","T1-U5-L4","T1-U6-L1","T1-U6-L2"],
  estimatedMinutes: 12,
  hook: {
    question: "Double the cake recipe → double the flour. But double the bakers → HALF the baking time? One doubles-with-doubling, the other halves-when-doubling. Same word 'double', opposite worlds — direct vs inverse proportion.",
    type: "paradox",
  },
  intuitionBlocks: [
    {
      widget: "ratio-bar",
      narrative: "Watch one bar: in DIRECT proportion, doubling the input doubles the output (2 servings → 4 servings of flour). Now think about bakers: 2 bakers finish in 3 hours, 4 bakers finish in 1.5 hours. Input doubles, output HALVES — that's a different kind of pairing.",
    },
  ],
  formalBlocks: [
    {
      definition: "Two quantities are DIRECTLY proportional if one = k × the other (double one, double the other). They are INVERSELY proportional if one = k ÷ the other (double one, HALVE the other — their PRODUCT stays constant).",
      examples: [
        "Direct: 3 apples cost $6, so 6 apples cost $12 — ×2 the quantity, ×2 the cost.",
        "Inverse: 2 painters paint a wall in 6 h; with 4 painters it takes 3 h — the product painters × hours = 12 stays constant.",
      ],
      pitfall: "Don't assume everything is direct. Ask: 'if this doubles, does that double (direct) or halve (inverse)?' Speed → time is inverse; speed → distance is direct.", altExplanations: ["GAME: doubling your run distance doubles your XP (direct), but doubling your running speed halves your finish time (inverse) — the distance-speed-time trio shows which pairs are direct and which are inverse.", "FOOD: doubling a recipe doubles the servings (direct). But two cooks baking the same cake don't halve the oven time — ovens are shared constants, so 'time per cook' isn't always inverse. Check the product."],
    },
  ],
  gutChecks: [
    { prompt: "If 2 machines pack 100 boxes in 1 hour, how long for 4 machines (same rate)?", answer: "30 minutes — inverse: 4 machines halve the time." },
  ],
  quiz: {
    pool: [
      {
        id: "U6L3-mcq-1", type: "mcq", category: "procedural",
        prompt: "5 litres of paint cover 20 m². How much for 10 litres (same rate)?",
        options: [{ id: "a", text: "40 m²" }, { id: "b", text: "10 m²" }, { id: "c", text: "20 m²" }, { id: "d", text: "25 m²" }],
        correctOptionId: "a",
        diagnoses: { b: "10 m² would mean DOUBLE paint covers HALF — inverse, wrong here.", c: "Doubling paint must double coverage.", d: "25 doubles one quantity only." },
        explanation: "Direct: litres ×2 → area ×2 = 40 m².",
        hints: ["Is it direct or inverse?", "Doubling paint → doubling area.", "40 m²."],
      },
      {
        id: "U6L3-mcq-2", type: "mcq", category: "conceptual",
        prompt: "Tripling the number of workers (same task) usually...",
        options: [{ id: "a", text: "Triples the time" }, { id: "b", text: "Thirds the time" }, { id: "c", text: "Keeps time the same" }, { id: "d", text: "Doubles the time" }],
        correctOptionId: "b",
        diagnoses: { b: "Correct — workers and time are inverse (assuming shared task).", a: "That's 'more workers, more time' — usually false.", c: "More people should speed it up, not hold it.", d: "Workers and time move opposite ways." },
        explanation: "More workers → less time: inverse. Tripling workers divides time by 3.",
        hints: ["Double the bakers?", "Time goes DOWN.", "Divide by 3."],
      },
      {
        id: "U6L3-mcq-3", type: "mcq", category: "word",
        prompt: "A car at 60 km/h travels 120 km in 2 h. At 120 km/h, how long for the same 120 km?",
        options: [{ id: "a", text: "4 hours" }, { id: "b", text: "2 hours" }, { id: "c", text: "1 hour" }, { id: "d", text: "30 minutes" }],
        correctOptionId: "c",
        diagnoses: { b: "Doubling speed doesn't keep time the same — it halves it.", a: "4 hours would be HALF the speed.", d: "That's ×4 the speed, wrong." },
        explanation: "Speed and time are inverse for fixed distance: speed ×2 → time ÷2 = 1 h.",
        hints: ["Speed doubled.", "Time halves.", "1 hour."],
      },
      {
        id: "U6L3-mcq-4", type: "mcq", category: "conceptual",
        prompt: "Which pair is DIRECTLY proportional?",
        options: [
          { id: "a", text: "Machines and hours at a fixed job" },
          { id: "b", text: "Bakers and time to bake one cake" },
          { id: "c", text: "Speed and time over a fixed distance" },
          { id: "d", text: "Slices of pizza and total cost at a fixed price per slice" },
        ],
        correctOptionId: "d",
        diagnoses: { b: "More bakers → less time: inverse.", c: "Faster → quicker: inverse.", a: "More machines → fewer hours: inverse." },
        explanation: "More slices, proportionally more cost — both grow together at a constant rate.",
        hints: ["Which Grows together?", "Slices → cost.", "Direct."],
      },
      {
        id: "U6L3-mcq-5", type: "mcq", category: "procedural",
        prompt: "2 kg of apples cost $6. How much for 5 kg?",
        options: [{ id: "a", text: "$15" }, { id: "b", text: "$12" }, { id: "c", text: "$10" }, { id: "d", text: "$18" }],
        correctOptionId: "a",
        diagnoses: { b: "That's 4 kg's worth.", c: "That's $2/kg × 5 = $10 — wrong rate ($3/kg).", d: "$18 is 6 kg." },
        explanation: "Rate = $3/kg. 5 kg = $15. Direct.",
        hints: ["$6 ÷ 2 kg = $3/kg.", "5 × 3.", "$15."],
      },
      {
        id: "U6L3-mcq-6", type: "mcq", category: "word",
        prompt: "4 workers dig a trench in 6 hours. How long for 3 workers (same rate)?",
        options: [{ id: "a", text: "4.5 hours" }, { id: "b", text: "8 hours" }, { id: "c", text: "6 hours" }, { id: "d", text: "2 hours" }],
        correctOptionId: "b",
        diagnoses: { a: "4.5 would assume direct ratio (3/4 of 6), but workers are inverse.", c: "Only if 1 worker were added/removed symmetrically.", d: "Fewer workers → more time, not less." },
        explanation: "Workers × hours = 24 (constant). 3 workers → 24 ÷ 3 = 8 h.",
        hints: ["Workers × time = constant.", "4 × 6 = 24.", "24 ÷ 3 = 8."],
      },
      {
        id: "U6L3-num-1", type: "numeric-input", category: "procedural",
        prompt: "5 pens cost $10. Cost of 8 pens (same rate)?", answer: 16, tolerance: 0, unit: "$",
        explanation: "Rate $2/pen. 8 × 2 = $16. Direct.",
        hints: ["$10 ÷ 5 = $2.", "8 × 2.", "$16."],
      },
      {
        id: "U6L3-num-2", type: "numeric-input", category: "procedural",
        prompt: "2 pumps empty a tank in 3 h. How long for 6 pumps (same rate) in hours?", answer: 1, tolerance: 0, unit: "h",
        explanation: "Inverse: pumps × hours = 6. 6 pumps → 6 ÷ 6 = 1 h.",
        hints: ["Pumps × time = 6.", "6 ÷ 6.", "1 h."],
      },
      {
        id: "U6L3-num-3", type: "numeric-input", category: "conceptual",
        prompt: "A runner at 8 km/h covers a route in 3 h. At 12 km/h, same route — how many hours?", answer: 2, tolerance: 0, unit: "h",
        explanation: "Distance = 8 × 3 = 24 km. 24 ÷ 12 = 2 h. Inverse.",
        hints: ["Route = speed × time.", "8 × 3 = 24 km.", "24 ÷ 12 = 2."],
      },
      {
        id: "U6L3-num-4", type: "numeric-input", category: "word",
        prompt: "3 machines make 150 parts in 1 hour. How many parts in 1 hour with 5 machines?", answer: 250, tolerance: 0,
        explanation: "Direct: 3 → 150, so 5 → 150 × (5/3) = 250.",
        hints: ["50 parts per machine.", "5 × 50.", "250."],
      },
      {
        id: "U6L3-frac-1", type: "fraction-input", category: "conceptual",
        prompt: "If 4 workers take 3 h (inverse), what fraction of the job does ONE worker do in 3 h? Write it as a fraction of the whole.",
        numerator: 1, denominator: 4, acceptEquivalent: true,
        explanation: "4 workers split the job: one does 1/4 of it in that time.",
        hints: ["4 equal workers.", "Each does 1 part.", "1/4."],
      },
      {
        id: "U6L3-tf-1", type: "true-false-justify", category: "conceptual",
        prompt: "Distance and time at constant speed are directly proportional.",
        isTrue: true,
        explanation: "Double the time at the same speed → double the distance.",
        hints: ["Speed constant.", "More time → further.", "True."],
      },
      {
        id: "U6L3-tf-2", type: "true-false-justify", category: "conceptual",
        prompt: "Doubling the workers always halves the time regardless of context.",
        isTrue: false,
        explanation: "Only in ideal inverse contexts (shared, parallel tasks). Real-world constraints (space, coordination) can change it.",
        hints: ["Can 100 bakers bake a loaf instantly?", "Context matters.", "False in general."],
      },
      {
        id: "U6L3-order-1", type: "order-steps", category: "word",
        prompt: "Order the steps to solve: 3 painters take 6 h; how long for 2?",
        sequence: ["Find the constant: 3 × 6 = 18", "Divide by new workers: 18 ÷ 2", "18 ÷ 2 = 9", "Answer: 9 hours"],
        diagnoses: {
          "Divide by new workers: 18 ÷ 2@0": "Compute the constant first.",
          "18 ÷ 2 = 9@0": "Do the division.",
          "Answer: 9 hours@0": "9 h is the answer.",
        },
        explanation: "Inverse: painters × hours constant → divide by new count.",
        hints: ["3 × 6 = 18.", "18 ÷ 2.", "9 h."],
      },
      {
        id: "U6L3-drag-1", type: "drag-match", category: "conceptual",
        prompt: "Match each situation to direct or inverse.",
        pairs: [
          { source: "kg of sugar and price", target: "direct" },
          { source: "speed and time for same trip", target: "inverse" },
          { source: "number of tap and fill time", target: "inverse" },
        ],
        diagnoses: {
          "kg of sugar and price->inverse": "More sugar costs MORE, not less.",
          "speed and time for same trip->direct": "Faster means LESS time — inverse.",
          "number of tap and fill time->direct": "More taps fill FASTER — inverse.",
        },
        explanation: "Look at direction: both grow (direct) or opposite (inverse).",
        hints: ["Sugar price grows.", "Speed cuts time.", "Taps cut time."],
      },
      {
        id: "U6L3-graph-1", type: "graph-interact", category: "word",
        prompt: "Slider (key: hours): 4 workers take 6 h. Set hours for 3 workers (inverse, constant 24).",
        challenge: "Set hours to 8.",
        validate: { hours: 8 },
        tolerance: 0.1,
        explanation: "4 × 6 = 24; 24 ÷ 3 = 8 h.",
        hints: ["Workers × hours = 24.", "24 ÷ 3.", "8."],
      },
    ],
    selection: { procedural: 2, conceptual: 2, word: 1 },
    passThreshold: 0.8,
  },
  commonMistakes: [
    {
      wrongPattern: "assumes every ratio is direct",
      diagnosis: "Workers/time, speed/time, taps/time are INVERSE — doubling one halves the other. Check direction before scaling.",
      hint: "Ask: 'does doubling this double or halve that?'",
    },
    {
      wrongPattern: "multiplies when it should divide (inverse)",
      diagnosis: "In inverse problems, multiply to find the constant, then DIVIDE by the new quantity.",
      hint: "Product stays constant — divide, don't multiply, at the final step.",
    },
    {
      wrongPattern: "mixes up the constant",
      diagnosis: "For 3 workers × 6 h = 18 worker-hours. That's the total job; use it to compare.",
      hint: "worker × hours = total work.",
    },
  ],
  recallTags: ["proportion", "direct", "inverse"],
  discovery: {
    challenges: [
      {
        instruction: "Trace the food bar: 1 slice costs $2, 2 cost $4, 3 cost $6. Notice the direction: both climb.",
        observe: "Direct — the ratio of cost to slices stays 2 the whole time.",
      },
      {
        instruction: "Now picture the bakers bar in hours: 2 bakers → 6 h, 4 bakers → 3 h, 8 bakers → 1.5 h.",
        observe: "Inverse — the bakers × hours product stays 12.",
      },
    ],
    predict: {
      prompt: "Before you decide: is 'more workers, more time' direct or inverse?",
      options: [
        { id: "a", text: "Inverse" },
        { id: "b", text: "Direct" },
        { id: "c", text: "No relationship" },
      ],
      reveal: "Inverse — more workers on the same job finishes faster, so time shrinks as workers grow.",
    },
    sayItYourWay: {
      prompt: "How can you tell if two things are inversely proportional?",
      phrasings: [
        { id: "a", text: "When one doubles, the other halves — their product stays constant", correct: true, why: "The inverse signature: one up means the other down, product fixed." },
        { id: "b", text: "When both grow together", correct: false, why: "That's direct — both climb together." },
        { id: "c", text: "When one is always twice the other", correct: false, why: "That's direct — the ratio (not the product) is fixed." },
      ],
      formalName: "inverse proportion",
    },
    stretch: "If 2 taps fill a pool in 5 h, how long for 5 taps? Guess, then use the worker-hours trick on taps.",
  },
};