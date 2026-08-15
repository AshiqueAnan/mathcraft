import type { Lesson } from "../schema";

export const T5U30L1: Lesson = {
  // @meta
  id: "T5-U30-L1",
  tier: 5,
  unit: "Functions",
  title: "The Machine Called f",
  prerequisites: ["T2-U11-L1","T4-U29-L4"],
  estimatedMinutes: 14,
  hook: { question: "A vending machine takes a coin and gives a snack. A function is the same idea: it takes a number in, does one thing to it, and gives exactly one number out. Feed 3 into the machine 'double it' and out comes 6. Feed 3 into 'square it' and out comes 9. Same input, different machine, different output — the machine IS the rule.", type: "real-world" },
  intuitionBlocks: [{ widget: "balance-scale", narrative: "Think of the balance as a function machine: the input number sits on one pan, the rule transforms it, and the output lands on the other. Put 2 in the 'times 3' machine and the balance tips to 6. Change the input to 5 and watch the output change to 15 — every input gives exactly one output, never two." }],

  // @discovery
  formalBlocks: [{ definition: "A FUNCTION is a rule that takes an input and gives exactly one output. We write $f(x)$ for 'the output of f when the input is x'. The set of allowed inputs is the DOMAIN; the outputs that actually appear are the RANGE. Example: $f(x) = 2x + 1$ — feed 3, get 7.", examples: ["$f(x) = x^2$: f(3) = 9, f(-3) = 9 — two inputs, same output, still a function.", "$g(x) = x + 2$: g(10) = 12, g(0) = 2 — each input maps to one output."], pitfall: "A function is NOT a function if one input gives two different outputs. The rule 'the number's square root' is NOT a function of a single number, because 4 would give both 2 and -2. A function must pick one.", altExplanations: ["MACHINE: f(x) = 2x + 1 is a vending machine — feed 3, get 7; feed 10, get 21. The domain is the list of coins it accepts; the range is every drink that actually comes out. If one coin ever produced two different drinks, the machine isn't a function.", "GAME: f is a crafting recipe — input 3 iron gives 7 items; input −3 also gives 7 (squaring recipe), so two inputs can share an output and still be a function — one input may never split into two outputs. That rule is the function's non-negotiable contract."] }],
  gutChecks: [{ prompt: "Is 'the number's square root' a function? Why not?", answer: "No — 4 would give both 2 and -2, so one input splits into two outputs." }],
  quiz: {
    pool: [
      // @q01
      { id: "U30L1-mcq-1", type: "mcq", category: "procedural", prompt: "f(x) = 2x + 1. f(3) = …", options: [ { id: "a", text: "7" }, { id: "b", text: "6" }, { id: "c", text: "9" }, { id: "d", text: "5" } ], correctOptionId: "a", diagnoses: { b: "6 is 2×3 without the +1.", c: "9 is 3² — wrong rule.", d: "5 is 3 + 2 — wrong order." }, explanation: "2(3) + 1 = 7.", hints: ["2 × 3.", "+ 1.", "7."] },
      // @q02
      { id: "U30L1-mcq-2", type: "mcq", category: "conceptual", prompt: "Which rule is NOT a function?", options: [ { id: "a", text: "the number's square root (both signs)" }, { id: "b", text: "double the number" }, { id: "c", text: "add 3" }, { id: "d", text: "square the number" } ], correctOptionId: "a", diagnoses: { b: "Doubling gives one output.", c: "Adding gives one output.", d: "Squaring gives one output." }, explanation: "Square root of 4 is both 2 and -2 — one input, two outputs.", hints: ["One input, two outputs?", "√4 = ±2.", "Not a function."] },
      // @q03
      { id: "U30L1-mcq-3", type: "mcq", category: "word", prompt: "A taxi charges $3 plus $2 per km. Distance d km → cost f(d). f(5) = …", options: [ { id: "a", text: "13" }, { id: "b", text: "10" }, { id: "c", text: "15" }, { id: "d", text: "8" } ], correctOptionId: "a", diagnoses: { b: "10 is 2×5 without the $3 base.", c: "15 is 3×5 — wrong rule.", d: "8 is 3 + 5 — forgot to double." }, explanation: "f(d) = 2d + 3, so f(5) = 10 + 3 = 13.", hints: ["2 × 5.", "+ 3.", "13."] },
      // @q04
      { id: "U30L1-mcq-4", type: "mcq", category: "procedural", prompt: "g(x) = x². g(-4) = …", options: [ { id: "a", text: "16" }, { id: "b", text: "-16" }, { id: "c", text: "8" }, { id: "d", text: "-8" } ], correctOptionId: "a", diagnoses: { b: "-16 keeps the negative — squaring makes it positive.", c: "8 is 2×4 — wrong rule.", d: "-8 is -2×4 — wrong rule." }, explanation: "(-4)² = 16 — squaring always gives a non-negative result.", hints: ["(-4) × (-4).", "Positive.", "16."] },
      // @q05
      { id: "U30L1-mcq-5", type: "mcq", category: "conceptual", prompt: "The domain of f(x) = 1/x is…", options: [ { id: "a", text: "all numbers except 0" }, { id: "b", text: "all numbers" }, { id: "c", text: "only positive numbers" }, { id: "d", text: "only 0" } ], correctOptionId: "a", diagnoses: { b: "1/0 is undefined — 0 can't be an input.", c: "Negative inputs work fine: 1/(-2) = -0.5.", d: "0 is the ONE input that fails." }, explanation: "Division by zero is undefined, so 0 is excluded from the domain.", hints: ["1/0 = ?", "Undefined.", "Except 0."] },
      // @q06
      { id: "U30L1-mcq-6", type: "mcq", category: "word", prompt: "A plant grows 2 cm per day from a 5 cm start. Height h(t) after t days. h(7) = …", options: [ { id: "a", text: "19" }, { id: "b", text: "14" }, { id: "c", text: "12" }, { id: "d", text: "35" } ], correctOptionId: "a", diagnoses: { b: "14 is 2×7 without the 5 cm start.", c: "12 is 5 + 7 — forgot to double.", d: "35 is 5×7 — wrong rule." }, explanation: "h(t) = 2t + 5, so h(7) = 14 + 5 = 19.", hints: ["2 × 7.", "+ 5.", "19."] },
      // @q07
      { id: "U30L1-num-1", type: "numeric-input", category: "procedural", prompt: "f(x) = 3x - 2. f(4) = …", answer: 10, tolerance: 0, explanation: "3(4) - 2 = 12 - 2 = 10.", hints: ["3 × 4.", "12 - 2.", "10."] },
      // @q08
      { id: "U30L1-num-2", type: "numeric-input", category: "procedural", prompt: "g(x) = x² + 1. g(5) = …", answer: 26, tolerance: 0, explanation: "25 + 1 = 26.", hints: ["5².", "25 + 1.", "26."] },
      // @q09
      { id: "U30L1-num-3", type: "numeric-input", category: "conceptual", prompt: "f(x) = 2x. What input gives output 14?", answer: 7, tolerance: 0, explanation: "2x = 14 → x = 7.", hints: ["2x = 14.", "Divide by 2.", "7."] },
      // @q10
      { id: "U30L1-frac-1", type: "fraction-input", category: "conceptual", prompt: "f(x) = 1/x. f(2) as a fraction.", numerator: 1, denominator: 2, acceptEquivalent: true, explanation: "1/2 — the reciprocal of 2.", hints: ["1 ÷ 2.", "1/2.", "1/2."] },
      // @q11
      { id: "U30L1-tf-1", type: "true-false-justify", category: "conceptual", prompt: "f(x) = x² is a function even though f(3) = f(-3) = 9.", isTrue: true, explanation: "Different inputs sharing an output is fine — the rule still gives each input exactly one output.", hints: ["One input, one output.", "Sharing is OK.", "True."] },
      // @q12
      { id: "U30L1-tf-2", type: "true-false-justify", category: "conceptual", prompt: "The rule 'the number's square root' is a function.", isTrue: false, explanation: "4 would give both 2 and -2 — one input, two outputs, so it's not a function.", hints: ["√4 = ?", "±2.", "False."] },
      // @q13
      { id: "U30L1-order-1", type: "order-steps", category: "word", prompt: "Order the steps to evaluate f(3) for f(x) = 2x + 1.", sequence: ["Substitute x = 3", "Multiply 2 × 3", "Add 1"], diagnoses: { "Substitute x = 3@1": "Start by substituting.", "Multiply 2 × 3@0": "Then multiply.", "Add 1@0": "Add last." }, explanation: "Substitute, multiply, then add — order matters.", hints: ["Plug in 3.", "2 × 3.", "+ 1."] },
      // @q14
      { id: "U30L1-drag-1", type: "drag-match", category: "conceptual", prompt: "Match each term to its meaning.", pairs: [ { source: "Domain", target: "allowed inputs" }, { source: "Range", target: "outputs that appear" }, { source: "f(x)", target: "output for input x" } ], diagnoses: { "Domain->outputs that appear": "Domain is the inputs.", "Range->allowed inputs": "Range is the outputs.", "f(x)->allowed inputs": "f(x) is the output." }, explanation: "Domain = inputs, range = outputs, f(x) = the output value.", hints: ["Inputs.", "Outputs.", "Output value."] },
      // @q15
      { id: "U30L1-graph-1", type: "graph-interact", category: "word", prompt: "f(x) = 2x + 1. Set the slider to f(4) (key: value).", challenge: "Set the slider to 9.", validate: { value: 9 }, tolerance: 0.01, explanation: "2(4) + 1 = 9.", hints: ["2 × 4.", "+ 1.", "9."] }
    ],
    selection: { procedural: 2, conceptual: 2, word: 1 },
    passThreshold: 0.8,
  },
  commonMistakes: [
    { wrongPattern: "confuses domain and range", diagnosis: "Domain is what goes in; range is what comes out.", hint: "Inputs vs outputs." },
    { wrongPattern: "thinks square root is a function", diagnosis: "One input (4) gives two outputs (±2) — that breaks the rule.", hint: "One input, one output." },
    { wrongPattern: "forgets order of operations in f(x)", diagnosis: "Multiply before adding — f(3) for 2x+1 is 7, not 9.", hint: "Substitute, multiply, add." },
  ],
  recallTags: ["function", "domain", "range", "f(x)", "machine"],
  discovery: {
    challenges: [
      { instruction: "Feed 2, then 5, then 10 into the 'times 3' machine.", observe: "Each input gives exactly one output: 6, 15, 30. No input ever gives two different outputs." },
      { instruction: "Try the 'square' machine on 3 and on -3.", observe: "Both give 9 — different inputs can share an output, but one input never splits into two outputs." },
    ],
    predict: { prompt: "Feed 4 into the machine 'add 5, then double'. What comes out?", options: [{ id: "a", text: "18" }, { id: "b", text: "13" }, { id: "c", text: "9" }], reveal: "18 — 4 + 5 = 9, then double to 18. The machine does its steps in order, one output at the end." },
    sayItYourWay: { prompt: "What makes a rule a function?", phrasings: [{ id: "a", text: "Every input gives exactly one output", correct: true, why: "That's the defining property — no input splits." }, { id: "b", text: "Every output comes from exactly one input", correct: false, why: "Outputs can repeat; inputs can't split." }, { id: "c", text: "The rule must use multiplication", correct: false, why: "Any rule counts — add, square, whatever." }], formalName: "function — a rule that assigns each input exactly one output (notation f(x))" },
    stretch: "What if you feed the output of one machine into another? Chaining machines is the next idea — composite functions.", 
  },
};
