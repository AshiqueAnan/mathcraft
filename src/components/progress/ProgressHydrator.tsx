"use client";

import { useEffect } from "react";
import { hydrateAndCompute } from "@/lib/progress-store";

/** One-time client mount: recompute lock states from the prerequisite chain
 *  after Zustand rehydrates from localStorage. Keeps the map/landing honest. */
export function ProgressHydrator() {
  useEffect(() => {
    hydrateAndCompute();
  }, []);
  return null;
}