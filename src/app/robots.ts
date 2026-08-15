import type { MetadataRoute } from "next";
import { LIVE_URL } from "@/config/site";

export const dynamic = "force-static";

/** Basic SEO — allow crawling, point to the sitemap. */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${LIVE_URL.replace(/\/$/, "")}/sitemap.xml`,
  };
}