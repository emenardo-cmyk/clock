"use client";

import { site } from "@/lib/content";
import { useI18n } from "@/lib/i18n";

export function Footer() {
  const { c } = useI18n();

  return (
    <footer className="border-t border-line/60">
      <div className="container-narrow px-[clamp(1.25rem,4vw,3rem)] py-12 md:py-16">
        <div className="mb-10 max-w-3xl">
          <p className="latin-quote text-[clamp(1.4rem,4vw,2.4rem)] leading-tight text-ink">
            {c.footer.latin}
          </p>
          <p className="mt-3 text-sm text-ink/55">{c.footer.translation}</p>
        </div>

        <div className="mb-10 flex flex-wrap items-center gap-4">
          <a href={site.calendly} className="btn-accent no-underline">
            {c.footer.cta}
            <span aria-hidden="true">→</span>
          </a>
          <a
            href={site.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-accent-text underline-offset-4 hover:underline"
          >
            WhatsApp
          </a>
        </div>

        <div className="flex flex-col gap-4 border-t border-line/50 pt-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm tracking-[-0.02em]">© 2026 {site.name}</p>
            <p className="mt-1 text-xs text-ink/50">{c.footer.tagline}</p>
            <p className="mt-2 text-xs text-ink/45">
              <a href={`mailto:${site.email}`} className="no-underline hover:text-accent-text">
                {site.email}
              </a>
            </p>
          </div>
          <div className="flex gap-5 text-sm">
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="no-underline hover:text-accent-text"
            >
              LinkedIn
            </a>
            <a
              href={site.x}
              target="_blank"
              rel="noopener noreferrer"
              className="no-underline hover:text-accent-text"
            >
              X
            </a>
            <a href="/privacidad" className="no-underline hover:text-accent-text">
              Privacy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
