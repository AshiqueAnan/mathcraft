/**
 * gen-sw — generate public/sw.js from public/sw.template.js.
 * Injects a per-build cache ID (build timestamp) so every deploy cleanly
 * invalidates the previous service-worker cache via the activate handler.
 * Run as part of `npm run build` (before `next build`).
 */
import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";

const ROOT = fileURLToPath(new URL("..", import.meta.url));
const BUILD_ID = new Date().toISOString().replace(/[-:TZ]/g, "").slice(0, 14); // YYYYMMDDHHMMSS
const src = readFileSync(`${ROOT}public/sw.template.js`, "utf8");
const out = src.replace("__BUILD_ID__", BUILD_ID);
writeFileSync(`${ROOT}public/sw.js`, out);
console.log(`[gen-sw] wrote public/sw.js (cache ID mathcraft-cache-${BUILD_ID})`);