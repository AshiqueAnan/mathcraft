"use client";

import { useEffect } from "react";
import { BASE_PATH } from "@/config/site";

/** Register the offline service worker (progressive enhancement; never a dependency). */
export function ServiceWorkerRegister() {
  useEffect(() => {
    if ("serviceWorker" in navigator && process.env.NODE_ENV === "production") {
      // Absolute-from-root path (base-path aware) so it works from any route.
      navigator.serviceWorker.register(`${BASE_PATH}/sw.js`).catch(() => {
        // Offline support is an enhancement — fail silently.
      });
    }
  }, []);

  return null;
}