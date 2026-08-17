import type { Lesson } from "../schema";

export const T5U30L3: Lesson = {
  // @meta
  id: "T5-U30-L3",
  tier: 5,
  unit: "Functions",
  title: "Moving Graphs Around",
  prerequisites: ["T2-U19-L1","T4-U29-L4","T5-U30-L1","T5-U30-L2"],
  estimatedMinutes: 14,
  hook: { question: "Take the graph of y = x². Add 2 to every output and the whole parabola lifts up 2. But add 2 to the input — y = (x+2)² — and the parabola slides LEFT, the opposite way you'd guess. Simple changes to the formula are precise instructions for moving the whole graph. Learn to read them.", type: "puzzle" },
  intuitionBlocks: [{ widget: "graph-plotter", narrative: "Drag sliders for a, h, k and watch the parabola move: y = (x-h)² + k shifts RIGHT by h and UP by k. y = af(x) stretches or flips vertically. Predict before each drag, then see the graph obey." }],

  // @discovery
  formalBlocks: [{ definition: "GRAPH TRANSLATIONS: $y = f(x-h) + k$ shifts the graph of $y=f(x)$ right by h and up by k. Adding INSIDE the brackets moves horizontally (opposite sign); adding OUTSIDE moves vertically (same sign). $y = af(x)$ stretches vertically by a (or reflects if a is negative).", examples: ["y = (x-3)²: y = x² shifted right 3.", "y = 2x² - 1: y = x² stretched by 2, then down 1."], pitfall: "y = (x+2)² shifts LEFT (not right): the +2 inside the bracket is the opposite direction. Only outside the brackets does the sign match the direction.", altExplanations: ["GAME: graph moves are sprite offsets — y = (x−3)² slides the parabola RIGHT 3 (the −3 inside moves opposite its sign); y = 2x² − 1 stretches it tall by 2 then drops it down 1. Inside the brackets shifts X; outside shifts Y and scales.", "MAPS: y = f(x−h) + k is a map pan and zoom — h shifts the image sideways, k shifts it up/down, the multiplier a zooms the vertical scale (or flips it upside-down when negative). The sign trick: inside moves opposite, outside moves with."] }],
  gutChecks: [{ prompt: "Which way does y = (x+1)² shift?", answer: "Left 1 — a plus inside the brackets moves the graph opposite the sign." }],
  quiz: {
    pool: [
      // @q01
      { id: "U30L3-mcq-1", type: "mcq", category: "procedural", prompt: "y = (x-2)² shifts y = x²…", options: [ { id: "a", text: "right 2" }, { id: "b", text: "left 2" }, { id: "c", text: "up 2" }, { id: "d", text: "down 2" } ], correctOptionId: "a", diagnoses: { b: "Minus inside shifts RIGHT, not left.", c: "Vertical shift comes from outside.", d: "Down is an outside minus." }, explanation: "-2 inside the bracket = shift right 2.", hints: ["Inside = horizontal.", "Minus = right.", "Right 2."] },
      // @q02
      { id: "U30L3-mcq-2", type: "mcq", category: "conceptual", prompt: "y = x² + 3 shifts y = x²…", options: [ { id: "a", text: "right 3" }, { id: "b", text: "up 3" }, { id: "c", text: "down 3" }, { id: "d", text: "left 3" } ], correctOptionId: "b", diagnoses: { a: "Right is a change inside the brackets.", c: "Down would be x² - 3.", d: "Left is inside brackets." }, explanation: "+3 outside = shift up 3.", hints: ["Outside = vertical.", "+ = up.", "Up 3."] },
      // @q03
      { id: "U30L3-mcq-3", type: "mcq", category: "word", prompt: "A ball's height is h(t) = -t² + 4t. Which graph is h(t) + 2?", options: [ { id: "a", text: "same graph flipped" }, { id: "b", text: "same graph shifted right 2" }, { id: "c", text: "same graph shifted up 2 (peak 2 higher)" }, { id: "d", text: "a straight line" } ], correctOptionId: "c", diagnoses: { b: "Right would change the input.", a: "Flip comes from a negative in front.", d: "It stays a parabola." }, explanation: "Adding 2 outside shifts the whole curve up 2.", hints: ["Outside shift.", "Up.", "Peak +2."] },
      // @q04
      { id: "U30L3-mcq-4", type: "mcq", category: "procedural", prompt: "y = (x+2)² shifts y = x²…", options: [ { id: "a", text: "down 2" }, { id: "b", text: "right 2" }, { id: "c", text: "up 2" }, { id: "d", text: "left 2" } ], correctOptionId: "d", diagnoses: { b: "Plus inside shifts LEFT, not right.", c: "Up is an outside change.", a: "Down is an outside minus." }, explanation: "+2 inside = shift left 2 — opposite the sign.", hints: ["Inside = horizontal.", "Plus = left.", "Left 2."] },
      // @q05
      { id: "U30L3-mcq-5", type: "mcq", category: "conceptual", prompt: "y = 3x² compared to y = x² is…", options: [ { id: "a", text: "stretched vertically by 3" }, { id: "b", text: "shifted right 3" }, { id: "c", text: "shifted up 3" }, { id: "d", text: "compressed by 3" } ], correctOptionId: "a", diagnoses: { b: "Right is an inside change.", c: "Up is an added constant.", d: "3 multiplies the output — it stretches." }, explanation: "The 3 multiplies every output, stretching vertically.", hints: ["Multiplies outputs.", "Vertical stretch.", "Stretched ×3."] },
      // @q06
      { id: "U30L3-mcq-6", type: "mcq", category: "word", prompt: "A satellite dish's cross-section is y = x². To raise the dish 5 units you use…", options: [ { id: "a", text: "y = (x-5)²" }, { id: "b", text: "y = x² + 5" }, { id: "c", text: "y = (x+5)²" }, { id: "d", text: "y = 5x²" } ], correctOptionId: "b", diagnoses: { a: "(x-5)² shifts right, not up.", c: "(x+5)² shifts left.", d: "5x² stretches, not lifts." }, explanation: "Lifting up 5 adds 5 outside the brackets.", hints: ["Up = outside.", "+5 outside.", "x² + 5."] },
      // @q07
      { id: "U30L3-num-1", type: "numeric-input", category: "procedural", prompt: "y = (x-3)² + 2. The vertex of this parabola is at x = …", answer: 3, tolerance: 0, explanation: "The bracket (x-3)² tells us the shift right 3 — vertex at x = 3.", hints: ["x - 3 = 0.", "x = 3.", "3."] },
      // @q08
      { id: "U30L3-num-2", type: "numeric-input", category: "procedural", prompt: "y = (x-3)² + 2. The vertex y-coordinate is …", answer: 2, tolerance: 0, explanation: "The +2 outside is the vertical shift — vertex y = 2.", hints: ["Outside constant.", "Up 2.", "2."] },
      // @q09
      { id: "U30L3-num-3", type: "numeric-input", category: "conceptual", prompt: "y = x² + 7. When x = 0, what is y?", answer: 7, tolerance: 0, explanation: "0² + 7 = 7 — the graph is lifted 7.", hints: ["x = 0.", "0 + 7.", "7."] },
      // @q10
      { id: "U30L3-frac-1", type: "fraction-input", category: "conceptual", prompt: "y = (1/2)x² compared to y = x²: the graph is compressed. Express the compression as a fraction.", numerator: 1, denominator: 2, acceptEquivalent: true, explanation: "Every output is halved — a vertical compression by 1/2.", hints: ["Halved outputs.", "1/2.", "1/2."] },
      // @q11
      { id: "U30L3-tf-1", type: "true-false-justify", category: "conceptual", prompt: "y = (x+3)² is y = x² shifted LEFT 3.", isTrue: true, explanation: "Plus inside the brackets shifts left — opposite the sign.", hints: ["Inside = horizontal.", "+ = left.", "True."] },
      // @q12
      { id: "U30L3-tf-2", type: "true-false-justify", category: "conceptual", prompt: "y = x² - 4 is y = x² shifted UP 4.", isTrue: false, explanation: "-4 outside shifts DOWN 4, not up.", hints: ["Outside minus.", "Down.", "False."] },
      // @q13
      { id: "U30L3-order-1", type: "order-steps", category: "word", prompt: "Order the steps to sketch y = (x-1)² + 2.", sequence: ["Start with y = x²", "Shift right 1", "Shift up 2"], diagnoses: { "Start with y = x²@1": "Begin with the base graph.", "Shift right 1@0": "Inside shift first.", "Shift up 2@0": "Outside shift last." }, explanation: "Base parabola, right 1 inside, up 2 outside.", hints: ["x².", "Right 1.", "Up 2."] },
      // @q14
      { id: "U30L3-drag-1", type: "drag-match", category: "conceptual", prompt: "Match each formula to its shift from y = x².", pairs: [ { source: "y = (x-2)²", target: "right 2" }, { source: "y = x² + 3", target: "up 3" }, { source: "y = (x+1)²", target: "left 1" } ], diagnoses: { "y = (x-2)²->up 3": "Inside shifts horizontally.", "y = x² + 3->right 2": "Outside shifts vertically.", "y = (x+1)²->right 2": "Plus inside shifts left." }, explanation: "Inside minus = right, outside plus = up, inside plus = left.", hints: ["Inside minus.", "Outside plus.", "Inside plus."] },
      // @q15
      { id: "U30L3-graph-1", type: "graph-interact", category: "word", prompt: "y = (x-2)² + 1. Set the slider to the vertex y-coordinate (key: value).", challenge: "Set the slider to 1.", validate: { value: 1 }, tolerance: 0.01, explanation: "The +1 outside is the vertical shift — vertex at y = 1.", hints: ["Outside +1.", "Up 1.", "1."] }
    ],
    selection: { procedural: 2, conceptual: 2, word: 1 },
    passThreshold: 0.8,
  },
  commonMistakes: [
    { wrongPattern: "shifts the wrong way for inside changes", diagnosis: "A plus inside the bracket shifts LEFT; minus shifts right.", hint: "Inside = opposite sign." },
    { wrongPattern: "confuses vertical and horizontal shifts", diagnosis: "Inside the brackets changes x (horizontal); outside changes y (vertical).", hint: "Inside = x, outside = y." },
    { wrongPattern: "thinks a multiplier shifts instead of stretches", diagnosis: "Multiplying outputs stretches or compresses; only added constants shift.", hint: "× stretches, + shifts." },
  ],
  recallTags: ["translation", "shift", "stretch", "vertex", "parabola"],
  discovery: {
    challenges: [
      { instruction: "Drag h from 0 to 3 in y = (x-h)².", observe: "The parabola slides RIGHT by 3 — a minus in the brackets means a right shift." },
      { instruction: "Drag k from 0 to -2 in y = x² + k.", observe: "The whole graph drops down 2 — outside the brackets means vertical." },
    ],
    predict: { prompt: "y = (x-1)² + 3 moves y = x² how?", options: [{ id: "a", text: "right 1, up 3" }, { id: "b", text: "left 1, up 3" }, { id: "c", text: "right 1, down 3" }], reveal: "Right 1, up 3 — minus in brackets shifts right; plus outside shifts up." },
    sayItYourWay: { prompt: "How do you read y = (x-h)² + k?", phrasings: [{ id: "a", text: "Shift right h and up k from y = x²", correct: true, why: "Minus inside = right; plus outside = up." }, { id: "b", text: "Shift left h and down k", correct: false, why: "The signs are opposite of the shift." }, { id: "c", text: "It stretches the parabola", correct: false, why: "That's the role of the leading a." }], formalName: "graph-translation rules: y = f(x-h) + k shifts right h, up k; y = af(x) scales/reflects" },
    stretch: "Graphs of quadratics end up in the form (x-h)² + k for a reason — completing the square finds h and k. That's next.", 
  },
};
