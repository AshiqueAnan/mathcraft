import type { Lesson } from "../schema";

export const T2U14L3: Lesson = {
  // @meta
  id: "T2-U14-L3",
  tier: 2,
  unit: "Solving equations",
  title: "Brackets and Fractions in Equations",
  prerequisites: ["T2-U12-L1","T2-U13-L3","T2-U14-L2"],
  estimatedMinutes: 12,
  hook: {
    question: "2(x + 1) = 6 is hiding x inside a bracket, and x/3 = 4 is hiding it inside a fraction. Both look different, but the balance still rules: EXPAND the bracket, or MULTIPLY BOTH SIDES by the denominator to clear the fraction, then solve as always.",
    type: "puzzle",
  },
  intuitionBlocks: [{ widget: "balance-scale", narrative: "For 2(x + 1) = 6: the 2 multiplies the whole bracket, so expand to 2x + 2 = 6. For x/3 = 4: multiply both pans by 3 → x = 12. The scale shows exactly why you multiply the WHOLE side, never just the x." }],

  // @discovery
  formalBlocks: [
    { definition: "To solve an equation with brackets, first expand the bracket (distribute the outside term). To solve an equation with a fraction, multiply BOTH sides by the denominator to clear it — then continue with the balance. Examples: 2(x + 1) = 6 → 2x + 2 = 6 → 2x = 4 → x = 2. And x/3 = 4 → ×3 both sides → x = 12.", examples: ["3(x − 2) = 9 → 3x − 6 = 9 → 3x = 15 → x = 5.", "x/5 = 8 → ×5 → x = 40."], pitfall: "When clearing a fraction, multiply the WHOLE side by the denominator — for (x + 1)/2 = 4, ×2 gives x + 1 = 8, NOT x = 8 (you must multiply both x and 1). And when expanding, distribute to EVERY term inside the bracket.", altExplanations: ["FOOD: clearing a fraction is multiplying the WHOLE serving bowl — (x+1)/2 = 4 becomes x+1 = 8 by ×2 on both sides; multiplying only x would leave 1 un-doubled. And expanding 2(x+1) feeds the 2 to both pieces.", "GAME: unlocking a locked door — a bracket is a sealed room: expand to open every chest inside, then multiply by the fraction's denominator on BOTH sides to clear the floor. Never unlock just one chest."] },
  ],
  gutChecks: [{ prompt: "Solve 2(x + 1) = 6.", answer: "2x + 2 = 6 → 2x = 4 → x = 2." }],
  quiz: {
    pool: [
      // @q01
      { id: "U14L3-mcq-1", type: "mcq", category: "procedural", prompt: "Solve 2(x + 1) = 6.", options: [ { id: "a", text: "x = 2" }, { id: "b", text: "x = 3" }, { id: "c", text: "x = 4" }, { id: "d", text: "x = 5" } ], correctOptionId: "a", diagnoses: { b: "3(x+1)=6 → x+1=3 → x=2, not 3.", c: "x=4 would make LHS 10.", d: "x=5 would make LHS 12." }, explanation: "Expand: 2x + 2 = 6 → 2x = 4 → x = 2. Check 2(3) = 6 ✓.", hints: ["Expand bracket.", "2x + 2 = 6.", "Expand: 2x + 2 = 6 → 2x = 4 → x = 2."] },
      // @q02
      { id: "U14L3-mcq-2", type: "mcq", category: "conceptual", prompt: "When clearing x/3 = 4, what must you do to BOTH sides?", options: [ { id: "a", text: "Subtract 3" }, { id: "b", text: "Multiply by 3" }, { id: "c", text: "Divide by 3" }, { id: "d", text: "Add 3" } ], correctOptionId: "b", diagnoses: { a: "Subtracting doesn't clear a denominator.", c: "Dividing keeps the fraction.", d: "Adding doesn't help." }, explanation: "Multiply both sides by 3: x = 12.", hints: ["The ÷3 is undone by ×3.", "×3 both sides.", "Multiply both sides by 3: x = 12."] },
      // @q03
      { id: "U14L3-mcq-3", type: "mcq", category: "word", prompt: "Half your savings s is $15: s/2 = 15. What are your savings?", options: [ { id: "a", text: "$7.50" }, { id: "b", text: "$15" }, { id: "c", text: "$30" }, { id: "d", text: "$45" } ], correctOptionId: "c", diagnoses: { b: "15 is half, not the whole.", a: "7.50 = 15/2.", d: "45 is triple." }, explanation: "s/2 = 15 → multiply both by 2 → s = 30.", hints: ["×2 both sides.", "s = 30.", "s/2 = 15 → multiply both by 2 → s = 30."] },
      // @q04
      { id: "U14L3-mcq-4", type: "mcq", category: "procedural", prompt: "Solve 3(x − 2) = 9.", options: [ { id: "a", text: "x = 7" }, { id: "b", text: "x = 1" }, { id: "c", text: "x = 3" }, { id: "d", text: "x = 5" } ], correctOptionId: "d", diagnoses: { b: "1 makes 3(−1) = −3 ≠ 9.", c: "3 makes 3 = 3 ≠ 9.", a: "7 makes 15 = 15? 3(5)=15 ≠ 9." }, explanation: "3x − 6 = 9 → 3x = 15 → x = 5.", hints: ["Expand 3x − 6.", "3x = 15.", "3x − 6 = 9 → 3x = 15 → x = 5."] },
      // @q05
      { id: "U14L3-mcq-5", type: "mcq", category: "conceptual", prompt: "For (x + 1)/2 = 4, why is x = 8 WRONG?", options: [ { id: "a", text: "The ×2 must multiply the whole numerator (x + 1)" }, { id: "b", text: "8 is too big" }, { id: "c", text: "4 is the answer already" }, { id: "d", text: "You should divide by 2" } ], correctOptionId: "a", diagnoses: { b: "Size isn't the reason.", c: "4 is the RHS value, not x.", d: "You clear the denominator by ×2." }, explanation: "×2 both sides: x + 1 = 8 → x = 7. The whole numerator gets multiplied.", hints: ["Multiply x AND 1.", "x + 1 = 8.", "×2 both sides: x + 1 = 8 → x = 7."] },
      // @q06
      { id: "U14L3-mcq-6", type: "mcq", category: "word", prompt: "A car's tank holds x litres. Triple it minus 2 is 13: 3x − 2 = 13. What is x?", options: [ { id: "a", text: "11 L" }, { id: "b", text: "5 L" }, { id: "c", text: "3 L" }, { id: "d", text: "15 L" } ], correctOptionId: "b", diagnoses: { a: "11 = 13−2, incomplete.", c: "3 would give 7.", d: "15 would give 43." }, explanation: "3x − 2 = 13 → 3x = 15 → x = 5.", hints: ["Add 2.", "3x = 15.", "3x − 2 = 13 → 3x = 15 → x = 5."] },
      // @q07
      { id: "U14L3-num-1", type: "numeric-input", category: "procedural", prompt: "Solve 2(x + 1) = 6. Type x.", answer: 2, tolerance: 0, explanation: "2x + 2 = 6 → 2x = 4 → x = 2.", hints: ["Expand.", "2x = 4.", "2x + 2 = 6 → 2x = 4 → x = 2."] },
      // @q08
      { id: "U14L3-num-2", type: "numeric-input", category: "procedural", prompt: "Solve x/3 = 4. Type x.", answer: 12, tolerance: 0, explanation: "Multiply both by 3: x = 12.", hints: ["×3 both.", "x = 12.", "Multiply both by 3: x = 12."] },
      // @q09
      { id: "U14L3-num-3", type: "numeric-input", category: "conceptual", prompt: "Solve 3(x − 2) = 9. Type x.", answer: 5, tolerance: 0, explanation: "3x − 6 = 9 → 3x = 15 → x = 5.", hints: ["Expand.", "3x = 15.", "3x − 6 = 9 → 3x = 15 → x = 5."] },
      // @q10
      { id: "U14L3-frac-1", type: "fraction-input", category: "conceptual", prompt: "Solve x/4 = 2. Write x as a fraction.", numerator: 8, denominator: 1, acceptEquivalent: true, explanation: "×4 both: x = 8.", hints: ["×4 both.", "8.", "×4 both: x = 8."] },
      // @q11
      { id: "U14L3-tf-1", type: "true-false-justify", category: "conceptual", prompt: "(x + 1)/2 = 4 has solution x = 7.", isTrue: true, explanation: "×2: x + 1 = 8 → x = 7.", hints: ["×2 both.", "x + 1 = 8.", "×2: x + 1 = 8 → x = 7."] },
      // @q12
      { id: "U14L3-tf-2", type: "true-false-justify", category: "conceptual", prompt: "x/2 = 5 → subtract 2 from both sides gives x = 3.", isTrue: false, explanation: "Fractions are cleared by MULTIPLYING, not subtracting: ×2 → x = 10.", hints: ["÷2 undone by ×2.", "x = 10.", "Fractions are cleared by MULTIPLYING, not subtracting: ×2 → x = 10."] },
      // @q13
      { id: "U14L3-order-1", type: "order-steps", category: "word", prompt: "Order the steps to solve 2(x + 1) = 6.", sequence: ["Expand: 2x + 2 = 6", "Subtract 2: 2x = 4", "Divide by 2: x = 2"], diagnoses: { "Subtract 2: 2x = 4@0": "Expand the bracket first.", "Divide by 2: x = 2@0": "Subtract before dividing." }, explanation: "Expand the bracket, then solve the two-step equation.", hints: ["Expand first.", "2x + 2 = 6.", "Expand the bracket, then solve the two-step equation."] },
      // @q14
      { id: "U14L3-drag-1", type: "drag-match", category: "conceptual", prompt: "Match each equation to its FIRST move.", pairs: [ { source: "2(x + 1) = 6", target: "Expand the bracket" }, { source: "x/3 = 4", target: "Multiply both sides by 3" }, { source: "(x + 1)/2 = 4", target: "Multiply both sides by 2" } ], diagnoses: { "2(x + 1) = 6->Multiply both sides by 3": "The bracket needs expanding, not ×3.", "x/3 = 4->Expand the bracket": "No bracket here — clear the fraction with ×3.", "(x + 1)/2 = 4->Expand the bracket": "It's a fraction, not a bracket — clear the denominator with ×2." }, explanation: "Brackets expand; fractions clear by multiplying both sides by the denominator.", hints: ["Brackets expand.", "Fractions clear.", "Brackets expand; fractions clear by multiplying both sides by the denominator."] },
      // @q15
      { id: "U14L3-graph-1", type: "graph-interact", category: "word", prompt: "Solve 2(x + 1) = 6. Set the slider to the value of x (key: value).", challenge: "Adjust the values below so they match the condition described in the prompt.", validate: { value: 2 }, tolerance: 0, explanation: "2x + 2 = 6 → 2x = 4 → x = 2.", hints: ["2x + 2 = 6.", "2x = 4.", "2x + 2 = 6 → 2x = 4 → x = 2."] }
    ],
    selection: { procedural: 2, conceptual: 2, word: 1 },
    passThreshold: 0.8,
  },
  commonMistakes: [
    { wrongPattern: "multiplies only the left numerator when clearing a fraction", diagnosis: "For (x + 1)/2 = 4, ×2 gives x + 1 = 8 — BOTH x and 1.", hint: "Multiply the whole fraction's numerator side." },
    { wrongPattern: "expands incompletely", diagnosis: "3(x − 2) = 9 → 3x − 6 = 9, never 3x − 2.", hint: "Distribute to every term inside the bracket." },
    { wrongPattern: "adds a number directly to a fraction term", diagnosis: "x/3 = 4 → solve by ×3, not by subtracting 3.", hint: "Clear the denominator by multiplying." },
  ],
  recallTags: ["equations", "brackets", "fractions", "clear-denominator"],
  discovery: {
    challenges: [
      { instruction: "For 2(x + 1) = 6 on the scale, expand the bracket: what does the left pan become?", observe: "2x + 2 = 6 — the 2 multiplies both x and 1." },
      { instruction: "Now for x/3 = 4, multiply BOTH pans by 3.", observe: "x = 12 — the fraction disappears and the balance holds." },
    ],
    predict: { prompt: "First step for 2(x + 1) = 6?", options: [{ id: "a", text: "Expand to 2x + 2" }, { id: "b", text: "Divide by 2 only the x" }, { id: "c", text: "Subtract 2" }], reveal: "Expand: 2x + 2 = 6 → 2x = 4 → x = 2. The bracket must open first." },
    sayItYourWay: { prompt: "What's the ORDER for brackets-and-fraction equations?", phrasings: [{ id: "a", text: "Clear the fraction/expand the bracket first, then solve", correct: true, why: "This reveals the plain x-shape underneath." }, { id: "b", text: "Solve the bracket part alone then the rest", correct: false, why: "The bracket is part of one side — you must expand it into the full side." }, { id: "c", text: "Skip the fraction and guess", correct: false, why: "Clearing the denominator is the precise move." }], formalName: "clearing denominators and expanding brackets" },
    stretch: "What if an equation has BOTH a bracket AND a fraction, like 2(x − 1) = (x + 1)/2? Multiply by 2 to clear the fraction, then expand — the balance holds the whole way.",
  },
};
