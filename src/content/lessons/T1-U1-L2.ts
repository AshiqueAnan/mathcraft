import type { Lesson } from "../schema";

export const T1U1L2: Lesson = {
  id: "T1-U1-L2",
  tier: 1,
  unit: "Number sense",
  title: "Below Zero",
  prerequisites: ["T1-U1-L1"],
  estimatedMinutes: 10,
  hook: {
    question:
      "Last night the thermometer read −5°C. This morning it reads −1°C. Did it get warmer or colder? Most people's first guess is wrong.",
    type: "real-world",
  },
  intuitionBlocks: [
    {
      widget: "number-line",
      narrative:
        "This number line runs below zero. Slide the point: −1, −3, −5. Watch the number fall as the temperature drops — even though the digits 1, 3, 5 are getting bigger, the temperature is getting colder.",
    },
  ],
  formalBlocks: [
    {
      definition:
        "A negative number is a position below zero on the number line. The bigger the absolute value (the digits after the minus sign), the farTHER below zero the number sits — so $−5$ is smaller than $−3$.",
      examples: [
        "On the number line, −3 is to the RIGHT of −5, and right means bigger. So $−3 > −5$.",
        "A drop from 4°C to −2°C is a fall of 6°C: from 4 down to 0 (that's 4), then 0 down to −2 (that's 2 more). Total 6.",
      ],
      pitfall:
        "Do not compare negatives like positives. 5 is bigger than 3, but −5 is SMALLER than −3. Think of the number line: smaller is further left, and −5 is further left than −3.",
      altExplanations: [
        "BANK BALANCE: negative is owing. −$5 means you owe $5; −$3 means you owe $3. Owing $5 is worse than owing $3, so −5 < −3. Paying off debt climbs you toward 0 — the bigger the debt, the further below zero.",
        "ELEVATOR FLOORS: floors below ground are negative. −5 is a deeper basement than −3 — you ride FURTHER down to reach it. Rising from −5 to −3 is only two floors up, while rising to +4 crosses the whole ground floor: 5 floors up to 0, then 4 more.",
      ],
    },
  ],
  gutChecks: [
    { prompt: "Which is colder: −7°C or −2°C?", answer: "−7°C is colder — it is further below zero." },
  ],
  quiz: {
    pool: [
      {
        id: "U1L2-mcq-1", type: "mcq", category: "procedural",
        prompt: "Which is the SMALLEST number?",
        options: [{ id: "a", text: "−4" }, { id: "b", text: "−1" }, { id: "c", text: "0" }, { id: "d", text: "3" }],
        correctOptionId: "a",
        diagnoses: { b: "−1 is only just below zero — bigger than −4.", c: "Zero is above all negatives.", d: "3 is positive, the biggest here." },
        explanation: "Lowest means furthest LEFT: −4 is left of −1, 0, and 3.",
        hints: ["Smallest = furthest left on the number line.", "Which is further left: −4 or −1?", "−4."],
      },
      {
        id: "U1L2-mcq-2", type: "mcq", category: "conceptual",
        prompt: "At midnight it was −6°C. By noon it was 4°C. How many degrees did it rise?",
        options: [{ id: "a", text: "10" }, { id: "b", text: "2" }, { id: "c", text: "6" }, { id: "d", text: "−10" }],
        correctOptionId: "a",
        diagnoses: { b: "2 is 4 − 6, but you can't just subtract — you cross zero.", c: "6 only counts the below-zero part.", d: "It rose, so the change is positive." },
        explanation: "From −6 to 0 is 6 degrees, then 0 to 4 is 4 more: 10 degrees total.",
        hints: ["Count from −6 up to 0.", "Then from 0 up to 4.", "6 + 4 = 10."],
      },
      {
        id: "U1L2-mcq-3", type: "mcq", category: "word",
        prompt: "A submarine is 120 m below sea level, then dives another 40 m. How far below sea level is it now?",
        options: [{ id: "a", text: "−160 m" }, { id: "b", text: "−80 m" }, { id: "c", text: "80 m" }, { id: "d", text: "160 m" }],
        correctOptionId: "a",
        diagnoses: { b: "You subtracted; diving deeper ADDS distance below.", c: "Sign error — below sea level is negative.", d: "Right size, wrong sign — below is negative." },
        explanation: "−120 − 40 = −160: it is now 160 m below sea level.",
        hints: ["Below sea level is negative.", "Diving deeper makes it more negative.", "−120 − 40 = −160."],
      },
      {
        id: "U1L2-mcq-4", type: "mcq", category: "conceptual",
        prompt: "The statement −7 > −2 is...",
        options: [{ id: "a", text: "False — −7 is further left, so smaller" }, { id: "b", text: "True — 7 is bigger than 2" }, { id: "c", text: "True — minus makes everything equal" }, { id: "d", text: "False — they are equal" }],
        correctOptionId: "a",
        diagnoses: { b: "For positives 7 > 2 works, but the minus flips it.", c: "The minus doesn't make them equal.", d: "Different sizes entirely." },
        explanation: "−7 sits left of −2, so −7 < −2. The statement is false.",
        hints: ["Draw the number line.", "Left is smaller.", "−7 is left of −2."],
      },
      {
        id: "U1L2-mcq-5", type: "mcq", category: "procedural",
        prompt: "−3 + (−4) equals...",
        options: [{ id: "a", text: "−7" }, { id: "b", text: "7" }, { id: "c", text: "−1" }, { id: "d", text: "1" }],
        correctOptionId: "a",
        diagnoses: { b: "Two negatives don't make a positive here — they stack.", c: "−1 is 3 − 4, that's mixing signs wrong.", d: "Positive result wrong for two negatives." },
        explanation: "Both moves go left: 3 below zero, then 4 more below = 7 below zero.",
        hints: ["Start at −3.", "Move 4 more left.", "−7."],
      },
      {
        id: "U1L2-mcq-6", type: "mcq", category: "word",
        prompt: "A bank balance is −$50. You deposit $80. What is the new balance?",
        options: [{ id: "a", text: "$30" }, { id: "b", text: "$130" }, { id: "c", text: "−$30" }, { id: "d", text: "−$130" }],
        correctOptionId: "a",
        diagnoses: { b: "Deposits fill the hole first; you double counted.", c: "The deposit was bigger than the debt, so you're out of the hole.", d: "Sign wrong — depositing moves you UP." },
        explanation: "−50 + 80 = 30: the $80 fills the $50 hole and leaves $30.",
        hints: ["From −50, count up 80.", "−50 + 50 = 0, then 30 more.", "$30."],
      },
      {
        id: "U1L2-num-1", type: "numeric-input", category: "procedural",
        prompt: "Type the answer: 5 − 9.", answer: -4, tolerance: 0,
        explanation: "From 5, move 9 left: 0 after 5 steps, then 4 more below = −4.",
        hints: ["5 minus 5 is 0.", "Four more to remove.", "−4."],
      },
      {
        id: "U1L2-num-2", type: "numeric-input", category: "procedural",
        prompt: "Type the missing number: −6 + ___ = −1.", answer: 5, tolerance: 0,
        explanation: "From −6, moving right 5 lands on −1.",
        hints: ["What adds to −6 to reach −1?", "−6 + 5 = −1.", "5."],
      },
      {
        id: "U1L2-num-3", type: "numeric-input", category: "conceptual",
        prompt: "How many degrees warmer is 12°C than −5°C?", answer: 17, tolerance: 0, unit: "°",
        explanation: "From −5 to 0 is 5, then 0 to 12 is 12: 17 degrees.",
        hints: ["Crossing zero adds the parts.", "5 + 12.", "17."],
      },
      {
        id: "U1L2-num-4", type: "numeric-input", category: "word",
        prompt: "A lift starts at floor 8 and goes down 12 floors. Which floor does it stop on? (Type the number, with − if below ground.)", answer: -4, tolerance: 0,
        explanation: "8 − 12 = −4: four floors below ground level.",
        hints: ["8 down to 0 is 8 floors.", "4 more floors below.", "−4."],
      },
      {
        id: "U1L2-frac-1", type: "fraction-input", category: "conceptual",
        prompt: "The point halfway between −1 and 0 on the number line is what fraction?",
        numerator: 1, denominator: 2, acceptEquivalent: false,
        explanation: "Halfway below zero between −1 and 0 is −1/2; the fraction's size is 1/2.",
        hints: ["Halfway between 0 and 1 is 1/2.", "Below zero it's the same size, negative.", "1/2."],
      },
      {
        id: "U1L2-tf-1", type: "true-false-justify", category: "conceptual",
        prompt: "−10 is less than −2.",
        isTrue: true,
        explanation: "−10 is further left on the number line, so it is smaller.",
        hints: ["Left means smaller.", "−10 is left of −2.", "True."],
      },
      {
        id: "U1L2-tf-2", type: "true-false-justify", category: "conceptual",
        prompt: "Zero is a negative number.",
        isTrue: false,
        explanation: "Zero is neither negative nor positive — it's the boundary.",
        hints: ["What sits right of zero?", "Negatives sit LEFT of zero.", "Zero is the boundary, not negative."],
      },
      {
        id: "U1L2-order-1", type: "order-steps", category: "procedural",
        prompt: "Order these from SMALLEST to LARGEST.",
        sequence: ["−8", "−2", "0", "4"],
        diagnoses: {
          "−8@0": "−8 is furthest left — smallest.",
          "4@0": "4 is largest, not first.",
          "0@0": "Zero comes third, after the negatives.",
        },
        explanation: "Left to right: −8, −2, 0, 4.",
        hints: ["Negatives first, smallest first.", "Then zero.", "Then positives."],
      },
      {
        id: "U1L2-drag-1", type: "drag-match", category: "word",
        prompt: "Match each temperature change to its meaning.",
        pairs: [
          { source: "goes up 5°", target: "warmer" },
          { source: "goes down 5°", target: "colder" },
          { source: "stays the same", target: "unchanged" },
        ],
        diagnoses: {
          "goes up 5°->colder": "Up means warmer.",
          "goes down 5°->warmer": "Down means colder.",
        },
        explanation: "Rising temperature = warmer; falling = colder.",
        hints: ["Up is warmer.", "Down is colder.", "Same is unchanged."],
      },
      {
        id: "U1L2-graph-1", type: "graph-interact", category: "conceptual",
        prompt: "Move the point to minus three (key: value).",
        challenge: "Place the point at −3.",
        validate: { value: -3 }, tolerance: 0,
        explanation: "−3 is three steps left of zero.",
        hints: ["Left of zero.", "Three steps left.", "−3."],
      },
    ],
    selection: { procedural: 2, conceptual: 2, word: 1 },
    passThreshold: 0.8,
  },
  commonMistakes: [
    {
      wrongPattern: "compares negatives like positives",
      diagnosis: "−5 is NOT bigger than −3 because 5 > 3. The minus sign puts both left of zero; the one further left is smaller.",
      hint: "Draw the number line and read left to right.",
    },
    {
      wrongPattern: "subtracts when crossing zero",
      diagnosis: "From −6 to 4 you must cross zero: 6 up to 0, then 4 more. You add the distances.",
      hint: "Split the journey: to zero, then from zero.",
    },
    {
      wrongPattern: "thinks − and − make + in addition",
      diagnosis: "−3 + (−4) means go left twice. Both steps go left, so the answer is −7, not +7.",
      hint: "Act it out on the number line.",
    },
  ],
  recallTags: ["negatives", "number-line", "temperature"],
  discovery: {
    challenges: [
      {
        instruction: "Slide the point from 0 to −1 to −3 to −5. Watch the readout as the position drops.",
        observe: "The digits get bigger but the number gets smaller — position left of zero is what matters.",
      },
      {
        instruction: "Now slide from −5 back toward 0 and past it to 3.",
        observe: "Crossing zero feels different from the rest — that's the warm zone.",
      },
    ],
    predict: {
      prompt: "Before you slide: is −3 greater than or less than −5?",
      options: [
        { id: "a", text: "Greater than" },
        { id: "b", text: "Less than" },
        { id: "c", text: "Equal" },
      ],
      reveal: "−3 is greater (warmer) than −5 — it sits two steps further right.",
    },
    sayItYourWay: {
      prompt: "How would you compare two negative numbers?",
      phrasings: [
        { id: "a", text: "The one further left on the number line is smaller", correct: true, why: "The number line always runs small→big left→right, negatives included." },
        { id: "b", text: "The one with bigger digits is bigger", correct: false, why: "Bigger digits mean further BELOW zero, so smaller." },
        { id: "c", text: "Minus signs cancel out when comparing", correct: false, why: "The minus sign is the whole point — it flips the ordering." },
      ],
      formalName: "negative numbers and the number line",
    },
    stretch: "If −3 > −5, what do you think −1/2 compares to −3/4? Guess before you check on the number line.",
  },
};