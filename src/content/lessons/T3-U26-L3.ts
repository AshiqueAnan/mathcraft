import type { Lesson } from "../schema";

export const T3U26L3: Lesson = {
  // @meta
  id: "T3-U26-L3",
  tier: 3,
  unit: "Trigonometry fundamentals",
  title: "Finding Sides, Finding Angles",
  prerequisites: ["T3-U25-L4","T3-U26-L1","T3-U26-L2"],
  estimatedMinutes: 13,
  hook: { question: "A surveyor sees a 30° angle of elevation to a tree 20 m away. How tall is it? tan 30° = height ÷ distance → height = 0.577 × 20 ≈ 11.5 m. The ratios point both ways: given an angle, multiply to find a side; given two sides, divide to get a ratio and reverse-lookup the angle. Trig solves triangles from two known pieces.", type: "real-world" },
  intuitionBlocks: [{ widget: "geometry-playground", narrative: "Drag the sides of a right triangle: the angle readout shows how each ratio maps. Given an angle and one side, multiply the ratio to find the other side. Given two sides, compute the ratio and read the matching angle. The triangle answers to either direction." }],

  // @discovery
  formalBlocks: [{ definition: "FORWARD: given an angle and one side, multiply — e.g. opposite = sin θ × hypotenuse. BACKWARD: given two sides, find the ratio and use its INVERSE: $\\theta = \\sin^{-1}(\\tfrac{\\text{opp}}{\\text{hyp}})$ (also $\\cos^{-1}$, $\\tan^{-1}$). A 3-4-5 triangle: tan θ = 3/4 = 0.75, so θ = tan⁻¹(0.75) ≈ 36.87°. Elevation/depression angles are measured from the horizontal.", examples: ["Angle 40°, hypotenuse 10: opposite = sin 40° × 10 ≈ 6.43.", "Opposite 3, adjacent 4: θ = tan⁻¹(0.75) ≈ 36.9°."], pitfall: "CALCULATORS MUST BE IN DEGREE MODE for these problems — radian mode would return nonsense angles. Also pick the ratio that uses the two sides you KNOW + the one you want; don't use sine when you only have opposite and adjacent.", altExplanations: ["GAME: trig is a two-way lookup — given an angle and a side, multiply (sine × hypotenuse for the opposite). Given two sides, compute the ratio and run it BACKWARD through sin⁻¹/tan⁻¹ to recover the angle. Calculator must be in DEGREE mode or the readout lies.", "TRAVEL: an elevation angle is measured from flat ground — a 40° ladder against a 10 m wall: opposite = sin 40° × 10. Height and shadow give tan θ = 3/4, so θ = tan⁻¹(0.75) ≈ 36.9° — always reverse-lookup the ratio when hunting an angle."] }],
  gutChecks: [{ prompt: "When do you use the inverse (sin⁻¹ / tan⁻¹) of a ratio?", answer: "When you know two sides and want the angle — compute the ratio, then reverse-lookup it." }],
  quiz: {
    pool: [
      // @q01
      { id: "U26L3-mcq-1", type: "mcq", category: "procedural", prompt: "sin 40° ≈ 0.643, hypotenuse 10. The opposite side is about…", options: [ { id: "a", text: "6.43" }, { id: "b", text: "0.643" }, { id: "c", text: "15.6" }, { id: "d", text: "10" } ], correctOptionId: "a", diagnoses: { b: "0.643 is the ratio, not the side.", c: "15.6 divides instead of multiplying.", d: "10 is the hypotenuse itself." }, explanation: "opposite = sin 40° × 10 ≈ 6.43.", hints: ["Multiply by hypotenuse.", "0.643 × 10.", "≈ 6.43."] },
      // @q02
      { id: "U26L3-mcq-2", type: "mcq", category: "conceptual", prompt: "To find an ANGLE from two sides you use…", options: [ { id: "a", text: "the inverse ratio (sin⁻¹ / tan⁻¹)" }, { id: "b", text: "the ratio itself" }, { id: "c", text: "the hypotenuse only" }, { id: "d", text: "multiplication by 360" } ], correctOptionId: "a", diagnoses: { b: "The ratio gives a decimal — the inverse turns it back into degrees.", c: "You need both sides, not one.", d: "360° has nothing to do with it." }, explanation: "Compute the ratio, then apply its inverse to recover θ in degrees.", hints: ["Ratio → inverse.", "sin⁻¹ or tan⁻¹.", "Inverse."] },
      // @q03
      { id: "U26L3-mcq-3", type: "mcq", category: "word", prompt: "A tree casts a 20 m shadow; the sun is at 30°. Height = tan 30° × 20 ≈ …", options: [ { id: "a", text: "11.5 m" }, { id: "b", text: "20 m" }, { id: "c", text: "34.6 m" }, { id: "d", text: "5.8 m" } ], correctOptionId: "a", diagnoses: { b: "20 m is the shadow (adjacent), not the height.", c: "34.6 divides by tan — inverted.", d: "5.8 multiplies by sin instead of tan." }, explanation: "height = tan 30° × 20 ≈ 0.577 × 20 ≈ 11.5 m.", hints: ["tan 30° ≈ 0.577.", "0.577 × 20.", "≈ 11.5 m."] },
      // @q04
      { id: "U26L3-mcq-4", type: "mcq", category: "procedural", prompt: "Opposite 3, hypotenuse 5. θ = sin⁻¹(0.6) ≈ …", options: [ { id: "a", text: "36.9°" }, { id: "b", text: "53.1°" }, { id: "c", text: "30°" }, { id: "d", text: "60°" } ], correctOptionId: "a", diagnoses: { b: "53.1° is the OTHER acute angle (cos⁻¹ of 0.6).", c: "30° has sine 0.5, not 0.6.", d: "60° has sine ≈ 0.866." }, explanation: "sin⁻¹(0.6) ≈ 36.9°.", hints: ["sin⁻¹ 0.6.", "≈ 36.9°.", "36.9°."] },
      // @q05
      { id: "U26L3-mcq-5", type: "mcq", category: "conceptual", prompt: "Elevation and depression angles are measured from…", options: [ { id: "a", text: "the horizontal" }, { id: "b", text: "the vertical" }, { id: "c", text: "the hypotenuse" }, { id: "d", text: "the ground level of the far object" } ], correctOptionId: "a", diagnoses: { b: "They tilt up or down FROM horizontal.", c: "The hypotenuse is a side, not a reference line.", d: "Reference is the observer's horizontal line." }, explanation: "Angle of elevation looks up from horizontal; depression looks down from it.", hints: ["Sight line vs horizontal.", "From the horizontal.", "Horizontal."] },
      // @q06
      { id: "U26L3-mcq-6", type: "mcq", category: "word", prompt: "A 5 m ladder makes a 60° angle with the ground. Height reached = …", options: [ { id: "a", text: "≈ 4.33 m" }, { id: "b", text: "≈ 2.5 m" }, { id: "c", text: "≈ 8.66 m" }, { id: "d", text: "5 m" } ], correctOptionId: "a", diagnoses: { b: "2.5 uses sin 30° — wrong angle.", c: "8.66 divides by sin — inverted.", d: "5 m is the ladder (hypotenuse)." }, explanation: "height = sin 60° × 5 ≈ 0.866 × 5 ≈ 4.33 m.", hints: ["sin 60° × 5.", "0.866 × 5.", "≈ 4.33 m."] },
      // @q07
      { id: "U26L3-num-1", type: "numeric-input", category: "procedural", prompt: "cos 60° = 0.5, hypotenuse 12. The adjacent side is…", answer: 6, tolerance: 0, explanation: "adjacent = 0.5 × 12 = 6.", hints: ["cos × hypotenuse.", "0.5 × 12.", "6."] },
      // @q08
      { id: "U26L3-num-2", type: "numeric-input", category: "procedural", prompt: "tan 30° ≈ 0.577, height = 5. The adjacent (ground distance) is about…", answer: 8.66, tolerance: 0.2, explanation: "adjacent = height ÷ tan = 5 ÷ 0.577 ≈ 8.66.", hints: ["Divide by tan.", "5 ÷ 0.577.", "≈ 8.66."] },
      // @q09
      { id: "U26L3-num-3", type: "numeric-input", category: "conceptual", prompt: "A 3-4-5 triangle: tan θ = 3/4 = 0.75. θ ≈ … (degrees, 1 dp)", answer: 36.9, tolerance: 0.2, unit: "°", explanation: "tan⁻¹(0.75) ≈ 36.87° ≈ 36.9°.", hints: ["tan⁻¹ 0.75.", "≈ 36.9°.", "36.9."] },
      // @q10
      { id: "U26L3-frac-1", type: "fraction-input", category: "conceptual", prompt: "cos θ = 0.8 with hypotenuse 10. What FRACTION is the adjacent side of the hypotenuse?", numerator: 8, denominator: 10, acceptEquivalent: true, explanation: "adjacent = 8, hypotenuse = 10 → 8/10 = 0.8.", hints: ["Adjacent over hypotenuse.", "8/10.", "4/5."] },
      // @q11
      { id: "U26L3-tf-1", type: "true-false-justify", category: "conceptual", prompt: "Calculator degree mode is essential for inverse trig angles.", isTrue: true, explanation: "Radian mode would output different numbers — these problems are in degrees.", hints: ["Degrees vs radians.", "Use degree mode.", "True."] },
      // @q12
      { id: "U26L3-tf-2", type: "true-false-justify", category: "conceptual", prompt: "Given an angle and the adjacent side, tangent can find the opposite side.", isTrue: true, explanation: "opposite = tan θ × adjacent — forward use of tangent.", hints: ["tan = o/a.", "o = tan × a.", "True."] },
      // @q13
      { id: "U26L3-order-1", type: "order-steps", category: "word", prompt: "Order the steps to find angle θ from opposite 3, adjacent 4.", sequence: ["Compute ratio: 3 ÷ 4 = 0.75", "Identify as tan θ", "Apply inverse: θ = tan⁻¹(0.75)"], diagnoses: { "Compute ratio: 3 ÷ 4 = 0.75@1": "Compute the ratio first.", "Identify as tan θ@0": "Then name the ratio.", "Apply inverse: θ = tan⁻¹(0.75)@0": "Apply inverse last." }, explanation: "Ratio, identify, inverse.", hints: ["3 ÷ 4.", "tan.", "tan⁻¹."] },
      // @q14
      { id: "U26L3-drag-1", type: "drag-match", category: "conceptual", prompt: "Match each known pair to the ratio you'd use.", pairs: [ { source: "opposite + hypotenuse", target: "sine (or inverse)" }, { source: "adjacent + hypotenuse", target: "cosine (or inverse)" }, { source: "opposite + adjacent", target: "tangent (or inverse)" } ], diagnoses: { "opposite + hypotenuse->cosine (or inverse)": "Sine pairs opposite with hypotenuse.", "adjacent + hypotenuse->tangent (or inverse)": "Cosine pairs adjacent with hypotenuse.", "opposite + adjacent->sine (or inverse)": "Tangent pairs the two legs." }, explanation: "Pick the ratio built from your two known sides.", hints: ["O,H → sin.", "A,H → cos.", "O,A → tan."] },
      // @q15
      { id: "U26L3-graph-1", type: "graph-interact", category: "word", prompt: "sin 30° = 0.5 with hypotenuse 10. Set the slider to the OPPOSITE side (key: value).", challenge: "Set the slider to 5.", validate: { value: 5 }, tolerance: 0.01, explanation: "opposite = 0.5 × 10 = 5.", hints: ["0.5 × 10.", "5.", "5."] }
    ],
    selection: { procedural: 2, conceptual: 2, word: 1 },
    passThreshold: 0.8,
  },
  commonMistakes: [
    { wrongPattern: "uses the wrong ratio for the given sides", diagnosis: "Pick the ratio containing exactly the two sides you know + the target.", hint: "List known sides, match SOH-CAH-TOA." },
    { wrongPattern: "forgets degree mode", diagnosis: "Inverse trig returns radians on some calculators — set degrees.", hint: "Check the DEG/RAD indicator." },
    { wrongPattern: "inverts the division for the reverse lookup", diagnosis: "θ = inverse(known ratio); don't divide sides the wrong way round.", hint: "Ratio first, then inverse." },
  ],
  recallTags: ["inverse trig", "elevation", "depression", "solving", "degree mode"],
  discovery: {
    challenges: [
      { instruction: "Drag a right triangle and read an angle from two sides.", observe: "The inverse ratio recovers the angle exactly." },
      { instruction: "Set an angle and one side; compute the other side forward.", observe: "Forward trig gives the side; inverse gives back the angle." },
    ],
    predict: { prompt: "A 3-4-5 triangle's smallest angle ≈ …", options: [{ id: "a", text: "36.9°" }, { id: "b", text: "30°" }, { id: "c", text: "53.1°" }], reveal: "36.9° — tan⁻¹(3/4). The other acute angle is 53.1° (90° − 36.9°)." },
    sayItYourWay: { prompt: "How does trig solve a triangle?", phrasings: [{ id: "a", text: "Choose the ratio from your known sides, then multiply or reverse-lookup", correct: true, why: "Two known pieces → third via ratio." }, { id: "b", text: "Always multiply every side by sin", correct: false, why: "The ratio choice depends on which sides you have." }, { id: "c", text: "Guess the angle from a picture", correct: false, why: "Inverse trig makes it exact." }], formalName: "solving right triangles — forward: side = ratio × known side; backward: θ = inverse(ratio)" },
    stretch: "Some angles have EXACT ratios you can write without a calculator. Next: the special 30°, 45°, 60° triangle values, proudly by hand.", 
  },
};
