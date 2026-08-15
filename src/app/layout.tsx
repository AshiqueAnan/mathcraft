import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "katex/dist/katex.min.css";
import "./globals.css";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import { ServiceWorkerRegister } from "@/components/offline/ServiceWorkerRegister";
import { ProgressHydrator } from "@/components/progress/ProgressHydrator";
import { GoogleAnalytics } from "@/components/analytics/GoogleAnalytics";
import { SiteNav } from "@/components/nav/SiteNav";
import { SiteFooter } from "@/components/nav/SiteFooter";
import { SITE_NAME, SITE_TAGLINE, LIVE_URL, BASE_PATH } from "@/config/site";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  metadataBase: new URL(LIVE_URL),
  title: {
    default: `${SITE_NAME} — ${SITE_TAGLINE}`,
    template: `%s — ${SITE_NAME}`,
  },
  description:
    "Interactive lessons that teach the math concepts behind the O Level curriculum — intuition first, then practice. Built for students 2–3 years from their O Levels (and anyone who wants to really understand math). No exam tricks — a solid bedrock.",
  applicationName: SITE_NAME,
  manifest: `${BASE_PATH}/manifest.webmanifest`,
  icons: {
    icon: `${BASE_PATH}/icon.svg`,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    title: `${SITE_NAME} — ${SITE_TAGLINE}`,
    description:
      "Interactive O Level math lessons taught intuition-first: explore, predict, name the idea yourself, then check with a gentle quiz. Free, forever.",
    url: LIVE_URL,
  },
  twitter: {
    card: "summary",
    title: `${SITE_NAME} — ${SITE_TAGLINE}`,
    description: "Interactive lessons for the math concepts behind the O Level curriculum.",
  },
};

export const viewport: Viewport = {
  themeColor: "#0B0F14",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans`}>
        <ThemeProvider>
          <SiteNav />
          {children}
          <SiteFooter />
        </ThemeProvider>
        <ServiceWorkerRegister />
        <ProgressHydrator />
        <GoogleAnalytics />
      </body>
    </html>
  );
}
