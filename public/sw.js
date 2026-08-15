/* Mathcraft — offline service worker (generated from sw.template.js).
 * Base-path aware: resolves the site root from the SW scope.
 * Network-first for navigations (always serve the latest deploy when online;
 * cache fallback offline). Cache-first for static assets (content-hashed by
 * Next). CACHE_NAME carries a per-build ID so every deploy cleanly invalidates
 * the previous cache via the activate handler below.
 */
const CACHE_NAME = "mathcraft-cache-20260814204625";

// Resolve the site root dynamically so this works on any host/base path.
let BASE = "/";
if (self.registration && self.registration.scope) {
  BASE = self.registration.scope;
}

self.addEventListener("install", (event) => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

// Same-origin GET-only guard.
function shouldHandle(request) {
  if (request.method !== "GET") return false;
  const url = new URL(request.url);
  return url.origin === self.location.origin;
}

self.addEventListener("fetch", (event) => {
  const { request } = event;
  if (!shouldHandle(request)) return;

  // Navigations: network-first, fall back to the cached root when offline.
  if (request.mode === "navigate") {
    event.respondWith(
      fetch(request)
        .then((response) => {
          if (response.ok) {
            const clone = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(request, clone));
          }
          return response;
        })
        .catch(() =>
          caches.match(request).then((cached) => cached || caches.match(BASE) || caches.match("/"))
        )
    );
    return;
  }

  // Static assets (JS/CSS/fonts/icons/images): cache-first with network fallback.
  event.respondWith(
    caches.match(request).then((cached) => {
      if (cached) return cached;
      return fetch(request)
        .then((response) => {
          if (response.ok) {
            const clone = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(request, clone));
          }
          return response;
        })
        .catch(() => new Response("Offline", { status: 503, statusText: "Offline" }));
    })
  );
});