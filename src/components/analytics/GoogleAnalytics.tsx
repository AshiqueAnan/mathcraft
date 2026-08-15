"use client";

import Script from "next/script";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { GA_ID } from "@/config/site";

/** GA4 — live by default with the baked-in Measurement ID (config/site.ts);
 *  override or disable by setting NEXT_PUBLIC_GA_ID (empty disables). */
export function GoogleAnalytics() {
  const pathname = usePathname();

  useEffect(() => {
    if (GA_ID) window.gtag?.("config", GA_ID, { page_path: pathname });
  }, [pathname]);

  if (!GA_ID) return null;

  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
      <Script id="ga-init" strategy="afterInteractive">
        {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}',{anonymize_ip:true});`}
      </Script>
    </>
  );
}