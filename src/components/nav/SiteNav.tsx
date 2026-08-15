"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { SITE_NAME } from "@/config/site";
import { useTheme } from "@/components/theme/ThemeProvider";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/map", label: "Learning Path" },
  { href: "/about", label: "About" },
  { href: "/certificate", label: "Certificate" },
  { href: "/feedback", label: "Feedback" },
];

export function SiteNav() {
  const pathname = usePathname();
  const { theme, toggle } = useTheme();

  return (
    <nav className="sticky top-0 z-20 border-b border-token bg-[var(--bg)]/90 backdrop-blur" aria-label="Main navigation">
      <div className="mx-auto flex h-16 max-w-5xl items-center gap-2 px-4">
        <Link href="/" className="text-lg font-bold text-primary">
          {SITE_NAME}
        </Link>

        <div className="ml-auto hidden items-center gap-1 sm:flex">
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`rounded-xl px-3 py-2 text-sm ${
                pathname === l.href ? "bg-[var(--bg-panel-raised)] text-[var(--text)]" : "text-muted hover:text-[var(--text)]"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </div>

        <button
          type="button"
          onClick={toggle}
          className="btn btn-ghost ml-1 !min-h-10 !min-w-10 !p-2"
          aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
        >
          {theme === "dark" ? "Light" : "Dark"}
        </button>
      </div>
    </nav>
  );
}