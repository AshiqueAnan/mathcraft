/**
 * check-manifest — PWA base-path regression guard.
 * Asserts every absolute path in public/manifest.webmanifest is prefixed with
 * the GitHub Pages base path (/mathcraft), so an installed PWA never 404s.
 * Exit code 0 = pass; 1 = violation found.
 */
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";

const ROOT = fileURLToPath(new URL("..", import.meta.url));
const BASE_PATH = "/mathcraft";
const manifest = JSON.parse(readFileSync(`${ROOT}public/manifest.webmanifest`, "utf8"));

const absolutePaths = [manifest.start_url, manifest.scope];
for (const icon of manifest.icons ?? []) absolutePaths.push(icon.src);
for (const sc of manifest.shortcuts ?? []) absolutePaths.push(sc.url, sc.icons?.[0]?.src);

const bad = absolutePaths.filter((p) => p && p.startsWith("/") && !p.startsWith(`${BASE_PATH}/`) && p !== `${BASE_PATH}/`);
if (bad.length > 0) {
  console.error(`[check-manifest] FAIL — absolute paths missing base path ${BASE_PATH}:`);
  for (const p of bad) console.error(`  ${p}`);
  process.exit(1);
}
console.log(`[check-manifest] OK — all ${absolutePaths.filter(Boolean).length} manifest paths base-prefixed with ${BASE_PATH}`);