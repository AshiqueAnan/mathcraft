// new-lesson — emit a valid, compiling lesson skeleton (chunked authoring protocol).
// Usage: node scripts/new-lesson.mjs <ID> "<Title>" --unit "<Unit>" --tier <n> [--widget <type>]
import { writeFileSync } from "node:fs";
const a=process.argv.slice(2);
const get=k=>{const i=a.indexOf(k);return i>=0?a[i+1]:undefined};
const id=a[0]??"T1-U8-L2",title=a[1]??"Untitled",unit=get("--unit")??"Roots & surds",tier=Number(get("--tier")??1),widget=get("--widget")??"number-line";
const cn=id.replace(/-/g,""),px=id.replace(/^T\d-/,"").replace(/-/g,"");
const H={explanation:"STUB",hints:["a","b","c"]};
const mcq=(i,c)=>({...H,id:`${px}-mcq-${i}`,type:"mcq",category:c,prompt:"STUB",options:[{id:"a",text:"STUB"},{id:"b",text:"STUB"},{id:"c",text:"STUB"},{id:"d",text:"STUB"}],correctOptionId:"a",diagnoses:{b:"STUB",c:"STUB",d:"STUB"}});
const stubs=[mcq(1,"procedural"),mcq(2,"conceptual"),mcq(3,"word"),mcq(4,"procedural"),mcq(5,"conceptual"),mcq(6,"word"),
{...H,id:`${px}-num-1`,type:"numeric-input",category:"procedural",prompt:"STUB",answer:0,tolerance:0},
{...H,id:`${px}-num-2`,type:"numeric-input",category:"procedural",prompt:"STUB",answer:0,tolerance:0},
{...H,id:`${px}-num-3`,type:"numeric-input",category:"conceptual",prompt:"STUB",answer:0,tolerance:0},
{...H,id:`${px}-frac-1`,type:"fraction-input",category:"conceptual",prompt:"STUB",numerator:1,denominator:2,acceptEquivalent:true},
{...H,id:`${px}-tf-1`,type:"true-false-justify",category:"conceptual",prompt:"STUB",isTrue:true},
{...H,id:`${px}-tf-2`,type:"true-false-justify",category:"conceptual",prompt:"STUB",isTrue:false},
{...H,id:`${px}-order-1`,type:"order-steps",category:"word",prompt:"STUB",sequence:["a","b","c"],diagnoses:{"a@0":"STUB","b@0":"STUB"}},
{...H,id:`${px}-drag-1`,type:"drag-match",category:"conceptual",prompt:"STUB",pairs:[{source:"a",target:"b"},{source:"c",target:"d"}],diagnoses:{"a->d":"STUB"}},
{...H,id:`${px}-graph-1`,type:"graph-interact",category:"word",prompt:"STUB",challenge:"STUB",validate:{value:0},tolerance:0.01}
].map(JSON.stringify);
const src=`import type { Lesson } from "../schema";

export const ${cn}: Lesson = {
  // @meta
  id: "${id}",
  tier: ${tier},
  unit: "${unit}",
  title: "${title}",
  prerequisites: [],
  estimatedMinutes: 12,
  hook: { question: "STUB", type: "paradox" },
  intuitionBlocks: [{ widget: "${widget}", narrative: "STUB" }],

  // @discovery
  formalBlocks: [{ definition: "STUB", examples: ["STUB", "STUB"], pitfall: "STUB", altExplanations: ["STUB", "STUB"] }],
  gutChecks: [],
  quiz: {
    pool: [
${stubs.map((s,i)=>`      // @q${String(i+1).padStart(2,"0")}
      ${s}`).join(",\n")}
    ],
    selection: { procedural: 2, conceptual: 2, word: 1 },
    passThreshold: 0.8,
  },
  commonMistakes: [
    { wrongPattern: "STUB", diagnosis: "STUB", hint: "STUB" },
    { wrongPattern: "STUB", diagnosis: "STUB", hint: "STUB" },
    { wrongPattern: "STUB", diagnosis: "STUB", hint: "STUB" },
  ],
  recallTags: ["surds"],
  discovery: {
    challenges: [
      { instruction: "STUB", observe: "STUB" },
      { instruction: "STUB", observe: "STUB" },
    ],
    predict: { prompt: "STUB", options: [{ id: "a", text: "STUB" }, { id: "b", text: "STUB" }, { id: "c", text: "STUB" }], reveal: "STUB" },
    sayItYourWay: { prompt: "STUB", phrasings: [{ id: "a", text: "STUB", correct: true, why: "STUB" }, { id: "b", text: "STUB", correct: false, why: "STUB" }, { id: "c", text: "STUB", correct: false, why: "STUB" }], formalName: "STUB" },
    stretch: "STUB",
  },
};
`;
writeFileSync(new URL(`../src/content/lessons/${id}.ts`, import.meta.url), src);
console.log(`Wrote src/content/lessons/${id}.ts skeleton (${src.length} bytes).`);