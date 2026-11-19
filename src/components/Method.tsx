"use client";

import { ScrollReveal } from "@/components/ScrollReveal";
import { useI18n } from "@/lib/i18n";

export function Method() {
  const { c } = useI18n();

  return (
    <section id="metodo" className="section-y border-t border-line/80">
      <div className="container-page">
        <ScrollReveal>
          <h2 className="heading-2">{c.method.title}</h2>
        </ScrollReveal>
        <ol className="relative mt-12 grid gap-8 md:grid-cols-3 md:gap-6">
          <li
            aria-hidden="true"
            className="pointer-events-none absolute top-5 right-0 left-0 hidden h-px bg-line md:block"
          />
          {c.method.steps.map((step, index) => (
            <ScrollReveal key={step.name}>
              <li className="relative">
                <span className="relative z-10 inline-flex h-10 w-10 items-center justify-center rounded-full border border-line bg-paper title-4">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="heading-6 mt-5">{step.name}</h3>
                <p className="body-6 mt-3 max-w-xs text-ink-muted">{step.text}</p>
              </li>
            </ScrollReveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
