"use client";

import { site } from "@/lib/content";
import { useI18n } from "@/lib/i18n";

export function Footer() {
  const { c } = useI18n();

  return (
    <footer className="border-t border-line/60">
      <div className="container-narrow flex flex-col gap-4 px-[clamp(1.25rem,4vw,3rem)] py-8 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm tracking-[-0.02em]">
            © 2026 {c.footer.rights}
          </p>
          <p className="mt-1 text-xs text-ink/50">{c.footer.tagline}</p>
        </div>
        <div className="flex gap-5 text-sm">
          <a
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="no-underline hover:text-accent"
          >
            LinkedIn
          </a>
          <a
            href={site.x}
            target="_blank"
            rel="noopener noreferrer"
            className="no-underline hover:text-accent"
          >
            X
          </a>
          <a href="/privacidad" className="no-underline hover:text-accent">
            Privacy
          </a>
        </div>
      </div>
    </footer>
  );
}
