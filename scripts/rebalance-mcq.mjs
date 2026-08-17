#!/usr/bin/env node
/**
 * rebalance-mcq — Issue 1b of the fix pass.
 *
 * Redistributes the correct option across letters ("a"/"b"/"c"/"d") for every
 * MCQ in the 116 lessons by SWAPPING WHOLE OPTION OBJECTS. It uses the real
 * TypeScript AST (token-exact ranges) instead of regex/brace heuristics, so the
 * edit never touches the wrong span — no corrupt output.
 *
 * Each option object carries its own id + text; distractor diagnoses live in the
 * question's `diagnoses` keyed by option id. The swap relabels the objects AND
 * remaps the diagnoses key so every diagnosis stays attached to the same text.
 *
 * Usage:
 *   node scripts/rebalance-mcq.mjs --check   # validate invariants (no writes)
 *   node scripts/rebalance-mcq.mjs --dry     # report planned changes (no writes)
 *   node scripts/rebalance-mcq.mjs           # apply the rebalance
 */
import { readFileSync, writeFileSync, readdirSync } from "node:fs";
import { join } from "node:path";
import ts from "typescript";

const ROOT = process.cwd();
const DIR = join(ROOT, "src", "content", "lessons");
const DRY = process.argv.includes("--dry");
const CHECK = process.argv.includes("--check");
const TARGETS = ["a", "b", "c", "d"];

const stats = { files: 0, mcqs: 0, swaps: 0, skipped: 0, problems: [] };

/** String value of a PropertyAssignment's StringLiteral/NoSubstitutionTemplateLiteral. */
function stringValue(prop) {
  const init = prop?.initializer;
  if (init && ts.isStringLiteralLike(init)) return init.text;
  return undefined;
}

/** The `id: "X"` property value of an object literal. */
function objectId(obj) {
  if (!ts.isObjectLiteralExpression(obj)) return undefined;
  const idProp = obj.properties.find(
    (p) => ts.isPropertyAssignment(p) && ts.isIdentifier(p.name) && p.name.text === "id"
  );
  return stringValue(idProp);
}

/** The `type: "mcq"` property value of an object literal. */
function objectType(obj) {
  if (!ts.isObjectLiteralExpression(obj)) return undefined;
  const typeProp = obj.properties.find(
    (p) => ts.isPropertyAssignment(p) && ts.isIdentifier(p.name) && p.name.text === "type"
  );
  return stringValue(typeProp);
}

/** Numeric literal value of a PropertyAssignment (for option arrays / correctOptionId). */
function literalText(prop) {
  const init = prop?.initializer;
  return init ? init.getText() : undefined;
}

/** Find the PropertyAssignment named `name` inside an object literal. */
function findProp(obj, name) {
  if (!ts.isObjectLiteralExpression(obj)) return undefined;
  return obj.properties.find(
    (p) => ts.isPropertyAssignment(p) && ts.isIdentifier(p.name) && p.name.text === name
  );
}

/** Collect every MCQ ObjectLiteralExpression in the file (quiz.pool elements). */
function collectMcqs(sf) {
  const mcqs = [];
  function visit(node) {
    if (ts.isObjectLiteralExpression(node)) {
      const idProp = findProp(node, "id");
      const typeProp = findProp(node, "type");
      const id = idProp ? stringValue(idProp) : undefined;
      const type = typeProp ? stringValue(typeProp) : undefined;
      if (type === "mcq" && id && id.includes("-mcq-")) mcqs.push(node);
    }
    ts.forEachChild(node, visit);
  }
  visit(sf);
  return mcqs;
}

function processFile(file) {
  const path = join(DIR, file);
  const text = readFileSync(path, "utf8");
  const sf = ts.createSourceFile(file, text, ts.ScriptTarget.Latest, true, ts.ScriptKind.TS);
  const mcqs = collectMcqs(sf);
  if (mcqs.length === 0) return;
  stats.files++;

  const edits = [];
  let mcqIndex = 0;

  for (const mcqObj of mcqs) {
    const idProp = findProp(mcqObj, "id");
    const qid = stringValue(idProp);
    const optionsProp = findProp(mcqObj, "options");
    const correctProp = findProp(mcqObj, "correctOptionId");
    const diagnosesProp = findProp(mcqObj, "diagnoses");
    if (!optionsProp || !ts.isArrayLiteralExpression(optionsProp.initializer)) {
      stats.problems.push(`${file}: ${qid} options array not found`);
      continue;
    }
    const optionsArr = optionsProp.initializer;
    if (!correctProp) {
      stats.problems.push(`${file}: ${qid} correctOptionId not found`);
      continue;
    }
    const cur = stringValue(correctProp);

    // Option objects = array elements that are object literals with an id.
    const optionObjs = optionsArr.elements.map((e) => objectId(e));
    const optionLetters = optionObjs.filter((x) => x !== undefined);
    if (!optionLetters.includes(cur)) {
      stats.problems.push(`${file}: ${qid} correctOptionId "${cur}" not among options [${optionLetters}]`);
      continue;
    }

    stats.mcqs++;
    // Choose the display slot for the correct answer by rotating through ALL
    // option letters present (a→b→c→d… across each lesson's MCQs). If the
    // rotation lands on the current letter the correct already sits at its
    // target — a no-op keep — which is exactly what yields an ~even spread
    // across a/b/c/d (the defense-in-depth goal, independent of 1a's shuffle).
    const available = TARGETS.filter((t) => optionLetters.includes(t));
    if (available.length === 0) {
      stats.problems.push(`${file}: ${qid} no option letters`);
      continue;
    }
    const target = available[mcqIndex % available.length];
    if (target === cur) {
      stats.skipped++;
      mcqIndex++;
      continue;
    }

    const objCur = optionsArr.elements.find((e) => objectId(e) === cur);
    const objTarget = optionsArr.elements.find((e) => objectId(e) === target);
    if (!objCur || !objTarget) {
      stats.problems.push(`${file}: ${qid} option objects ${cur}/${target} not found`);
      continue;
    }

    // --- exact source ranges from the AST (safe: all from one parse) ---
    const startCur = objCur.getStart(sf);
    const endCur = objCur.end; // exclusive
    const startTgt = objTarget.getStart(sf);
    const endTgt = objTarget.end;

    const curText = text.slice(startCur, endCur);
    const tgtText = text.slice(startTgt, endTgt);

    // Retag id inside each object span (scoped regex, only first match).
    const movedCorrect = curText.replace(new RegExp(`id\\s*:\\s*"${cur}"`), `id: "${target}"`);
    const movedDistractor = tgtText.replace(new RegExp(`id\\s*:\\s*"${target}"`), `id: "${cur}"`);

    edits.push({ start: startCur, end: endCur, text: movedDistractor });
    edits.push({ start: startTgt, end: endTgt, text: movedCorrect });

    // correctOptionId: replace just the string literal token.
    const corrToken = correctProp.initializer;
    edits.push({ start: corrToken.getStart(sf), end: corrToken.end, text: `"${target}"` });

    // diagnoses: option feedback moves with its object, so retag BOTH keys —
    // `cur`'s diagnosis follows the correct object to `target`, and `target`'s
    // diagnosis follows the distractor object to `cur`. (A question may include
    // a diagnosis for the correct option too — e.g. "Correct — …" — so the swap
    // must be bidirectional to avoid duplicate keys.)
    if (diagnosesProp && ts.isObjectLiteralExpression(diagnosesProp.initializer)) {
      const diagObj = diagnosesProp.initializer;
      const keyOf = (letter) =>
        diagObj.properties.find(
          (p) =>
            (ts.isIdentifier(p.name) && p.name.text === letter) ||
            (ts.isStringLiteral(p.name) && p.name.text === letter)
        );
      const keyCur = keyOf(cur);
      const keyTarget = keyOf(target);
      if (keyCur) {
        edits.push({ start: keyCur.name.getStart(sf), end: keyCur.name.end, text: target });
      }
      if (keyTarget) {
        edits.push({ start: keyTarget.name.getStart(sf), end: keyTarget.name.end, text: cur });
      }
      if (!keyCur && !keyTarget) {
        stats.problems.push(`${file}: ${qid} neither diagnoses key "${cur}" nor "${target}" found`);
      }
    }

    stats.swaps++;
    mcqIndex++;
  }

  if (edits.length === 0) return;

  // Apply last→first (ranges are from the original parse — all disjoint).
  edits.sort((a, b) => b.start - a.start);
  let out = text;
  for (const e of edits) {
    out = out.slice(0, e.start) + e.text + out.slice(e.end);
  }

  // Self-validate: the transformed text must re-parse cleanly and preserve every
  // MCQ invariant. Any violation aborts the whole run — nothing is written.
  const outSf = ts.createSourceFile(file, out, ts.ScriptTarget.Latest, true, ts.ScriptKind.TS);
  const syntaxErrors = outSf.parseDiagnostics.length;
  const inv = verifyMcqs(outSf);
  if (syntaxErrors > 0 || inv.broken > 0) {
    throw new Error(
      `${file}: validation failed (syntaxErrors=${syntaxErrors}, brokenMcqs=${inv.broken}) — aborting, nothing written. ` +
      `Run 'git checkout -- src/content/lessons' if a prior partial write occurred.`
    );
  }

  if (DRY) {
    console.log(`[dry] ${file}: ${edits.length} edits planned`);
  } else {
    writeFileSync(path, out);
    console.log(`[ok] ${file}: applied ${edits.length} edits`);
  }
}

/** AST-based invariant check on a (possibly transformed) source file. */
function verifyMcqs(sf) {
  let mcqs = 0;
  let broken = 0;
  function visit(node) {
    if (ts.isObjectLiteralExpression(node)) {
      const idProp = findProp(node, "id");
      const typeProp = findProp(node, "type");
      if (stringValue(typeProp) === "mcq" && stringValue(idProp)?.includes("-mcq-")) {
        mcqs++;
        const o = findProp(node, "options");
        const c = findProp(node, "correctOptionId");
        const d = findProp(node, "diagnoses");
        const ids = ts.isArrayLiteralExpression(o?.initializer)
          ? o.initializer.elements.map((e) => objectId(e))
          : [];
        const cur = stringValue(c);
        const keys = d && ts.isObjectLiteralExpression(d.initializer)
          ? d.initializer.properties.map((p) =>
              ts.isIdentifier(p.name) ? p.name.text : ts.isStringLiteral(p.name) ? p.name.text : undefined
            )
          : [];
        const unique = (arr) => new Set(arr).size === arr.length;
        const ok =
          cur !== undefined &&
          ids.includes(cur) &&
          unique(ids) &&
          unique(keys) &&
          // every diagnosis key must be a real option id (no orphans)
          keys.every((k) => k !== undefined && ids.includes(k)) &&
          // every distractor option must have a diagnosis
          ids.filter((i) => i !== undefined && i !== cur).every((i) => keys.includes(i));
        if (!ok) broken++;
      }
    }
    ts.forEachChild(node, visit);
  }
  visit(sf);
  return { mcqs, broken };
}

/** Verify every MCQ: correctOptionId ∈ options ids + diagnoses keys = distractors (AST-based). */
function checkFile(file) {
  const path = join(DIR, file);
  const text = readFileSync(path, "utf8");
  const sf = ts.createSourceFile(file, text, ts.ScriptTarget.Latest, true, ts.ScriptKind.TS);
  const mcqs = collectMcqs(sf);
  let local = { mcqs: mcqs.length, bad: 0 };
  for (const mcqObj of mcqs) {
    const qid = stringValue(findProp(mcqObj, "id"));
    const optionsProp = findProp(mcqObj, "options");
    const correctProp = findProp(mcqObj, "correctOptionId");
    const diagnosesProp = findProp(mcqObj, "diagnoses");
    const problems = [];
    if (!optionsProp || !ts.isArrayLiteralExpression(optionsProp.initializer)) {
      problems.push("missing options array");
    } else {
      const ids = optionsProp.initializer.elements.map((e) => objectId(e));
      const cur = correctProp ? stringValue(correctProp) : undefined;
      if (!cur) problems.push("missing correctOptionId");
      else if (!ids.includes(cur)) problems.push(`correctOptionId "${cur}" not in options [${ids}]`);
      if (diagnosesProp && ts.isObjectLiteralExpression(diagnosesProp.initializer)) {
        const keys = diagnosesProp.initializer.properties.map((p) =>
          ts.isIdentifier(p.name) ? p.name.text : ts.isStringLiteral(p.name) ? p.name.text : undefined
        );
        const unique = (arr) => new Set(arr).size === arr.length;
        const orphans = keys.filter((k) => k !== undefined && !ids.includes(k));
        if (orphans.length) problems.push(`diagnoses orphan keys ${orphans}`);
        if (!unique(keys)) problems.push("diagnoses duplicate keys");
        const expected = cur ? ids.filter((i) => i !== cur) : [];
        const missing = expected.filter((e) => !keys.includes(e));
        if (missing.length) problems.push(`diagnoses missing keys ${missing}`);
      }
    }
    if (problems.length) {
      local.bad++;
      console.log(`  !! ${file} ${qid}: ${problems.join("; ")}`);
      stats.problems.push(`${file} ${qid}: ${problems.join("; ")}`);
    }
  }
  return local;
}

const files = readdirSync(DIR).filter((f) => f.endsWith(".ts") && f !== "index.ts").sort();

if (CHECK) {
  let mcqs = 0;
  let badFiles = 0;
  for (const f of files) {
    const r = checkFile(f);
    mcqs += r.mcqs;
    if (r.bad) badFiles++;
  }
  console.log(`\n[check] ${mcqs} MCQs across ${files.length} files; ${badFiles} files with violations`);
  if (stats.problems.length) {
    for (const p of stats.problems) console.log("  " + p);
    process.exit(1);
  }
  console.log("[check] ALL INVARIANTS OK");
  process.exit(0);
}

for (const f of files) processFile(f);

console.log(
  `\n[summary] files=${stats.files} mcqs=${stats.mcqs} swaps=${stats.swaps} skipped=${stats.skipped} problems=${stats.problems.length}`
);
if (DRY) console.log("(dry run — nothing written. Re-run without --dry to apply.)");
if (stats.problems.length) {
  console.log("\nProblems:");
  for (const p of stats.problems) console.log("  " + p);
}