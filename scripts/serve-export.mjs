/**
 * Serve the static export (out/) exactly like GitHub Pages:
 * the site is published under /mathcraft/, so we strip that prefix
 * and serve from out/ (mirrors Pages' mount of the repo at /mathcraft/).
 */
import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import { extname, join, normalize } from "node:path";
import { fileURLToPath } from "node:url";

const PORT = Number(process.env.PORT || 3210);
const PREFIX = "/mathcraft";
const OUT = fileURLToPath(new URL("../out/", import.meta.url));

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript",
  ".mjs": "text/javascript",
  ".css": "text/css",
  ".svg": "image/svg+xml",
  ".json": "application/json",
  ".webmanifest": "application/manifest+json",
  ".txt": "text/plain",
  ".ico": "image/x-icon",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".woff2": "font/woff2",
  ".woff": "font/woff",
  ".ttf": "font/ttf",
  ".map": "application/json",
};

createServer(async (req, res) => {
  try {
    let pathname = decodeURIComponent(new URL(req.url, "http://localhost").pathname);
    if (!pathname.startsWith(PREFIX)) {
      if (req.url === "/favicon.ico") {
        pathname = "/icon.svg";
      } else {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("Not found");
        return;
      }
    } else {
      pathname = pathname.slice(PREFIX.length) || "/";
    }

    // Directory requests → index.html (trailingSlash behavior).
    let file = normalize(join(OUT, pathname));
    if (pathname.endsWith("/") || !extname(file)) file = join(file, "index.html");

    const body = await readFile(file);
    res.writeHead(200, { "Content-Type": MIME[extname(file)] ?? "application/octet-stream" });
    if (req.method === "HEAD") res.end();
    else res.end(body);
  } catch (err) {
    // 404 fallback page (SOP for static hosts).
    console.error("404:", req.url);
    try {
      const body = await readFile(join(OUT, "404.html"));
      res.writeHead(404, { "Content-Type": "text/html; charset=utf-8" });
      if (req.method === "HEAD") res.end();
      else res.end(body);
    } catch {
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("Not found");
    }
  }
}).listen(PORT, () => {
  console.log(`Serving out/ at http://localhost:${PORT}${PREFIX}/ (Pages-equivalent)`);
});
