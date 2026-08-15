import "@testing-library/jest-dom/vitest";

/**
 * Minimal localStorage shim — some Node runtimes ship a broken jsdom
 * localStorage (Node 25 + jsdom incompatibility). Keeping this here makes
 * the progress-store persistence tests deterministic on any runtime.
 */
const store = new Map<string, string>();
Object.defineProperty(globalThis, "localStorage", {
  value: {
    getItem: (k: string) => store.get(k) ?? null,
    setItem: (k: string, v: string) => void store.set(k, String(v)),
    removeItem: (k: string) => void store.delete(k),
    clear: () => store.clear(),
    key: (i: number) => [...store.keys()][i] ?? null,
    get length() {
      return store.size;
    },
  },
  configurable: true,
});
