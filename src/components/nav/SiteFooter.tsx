import Link from "next/link";
import {
  SITE_NAME,
  CREATOR_NAME,
  CREATOR_PORTFOLIO,
  CONTACT_EMAIL,
} from "@/config/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-token bg-[var(--bg-panel)]/40">
      <div className="mx-auto max-w-5xl px-4 py-10">
        <div className="grid gap-8 sm:grid-cols-3">
          <div>
            <p className="font-bold text-primary">{SITE_NAME}</p>
            <p className="mt-2 text-sm text-muted">
              Interactive lessons for the math concepts behind the O Level curriculum —
              taught intuition-first, open to every willing learner.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold text-muted">Explore</p>
            <div className="mt-2 flex flex-col gap-1 text-sm">
              <Link href="/map" className="hover:text-primary">Learning Path</Link>
              <Link href="/about" className="hover:text-primary">About this project</Link>
              <Link href="/certificate" className="hover:text-primary">Your certificate</Link>
              <Link href="/feedback" className="hover:text-primary">Send feedback</Link>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold text-muted">Creator</p>
            <p className="mt-2 text-sm">
              Built with care by{" "}
              <a href={CREATOR_PORTFOLIO} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                {CREATOR_NAME}
              </a>
            </p>
            <a href={`mailto:${CONTACT_EMAIL}`} className="mt-1 block text-sm text-muted hover:text-primary">
              {CONTACT_EMAIL}
            </a>
          </div>
        </div>

        <p className="mt-8 text-center text-xs text-muted">
          © {new Date().getFullYear()} {SITE_NAME} — free for every student, forever.
        </p>
      </div>
    </footer>
  );
}