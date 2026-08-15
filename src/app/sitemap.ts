import type { MetadataRoute } from "next";
import { LIVE_URL } from "@/config/site";
import { BUILT_LESSON_IDS } from "@/content/lessons";

export const dynamic = "force-static";

const BASE = LIVE_URL.replace(/\/$/, "");

/** Basic SEO — a plain, honest sitemap for the static export. */
export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/map", "/about", "/certificate", "/feedback"];
  const lessonRoutes = BUILT_LESSON_IDS.map((id) => `/lesson/${id}`);

  return [...staticRoutes, ...lessonRoutes].map((route) => ({
    url: `${BASE}${route === "" ? "" : route}/`,
    lastModified: new Date(),
    changeFrequency: route.startsWith("/lesson/") ? "monthly" : "weekly",
    priority: route === "" ? 1 : route === "/map" ? 0.8 : 0.6,
  }));
}