"use client";

import { useI18n } from "@/lib/i18n";

export function Quote() {
  const { c } = useI18n();

  return (
    <section
      className="relative flex min-h-[70vh] items-center justify-center border-b border-line/50 px-[clamp(1.25rem,4vw,3rem)] py-24"
      aria-label="Latin quote"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-[8%] top-[18%] bottom-[18%] border border-line/40"
      />
      <figure className="relative z-10 max-w-4xl text-center">
        <blockquote>
          <p className="latin-quote text-[clamp(1.8rem,6vw,4.5rem)] leading-[1.15] text-ink">
            {c.quote.latin}
          </p>
        </blockquote>
        <figcaption className="mt-6 text-sm tracking-[-0.01em] text-ink/55">
          {c.quote.translation}
        </figcaption>
      </figure>
    </section>
  );
}
