"use client";

import { useI18n } from "@/lib/i18n";

export function Method() {
  const { c } = useI18n();

  return (
    <section id="metodo" className="section-pad border-b border-line/50">
      <div className="container-narrow">
        <h2 className="display-title mb-10 text-4xl md:text-5xl">{c.method.title}</h2>
        <ol className="relative grid gap-10 md:grid-cols-3 md:gap-6">
          <li
            aria-hidden="true"
            className="pointer-events-none absolute top-[1.15rem] right-0 left-0 hidden h-px bg-line md:block"
          />
          {c.method.steps.map((step, index) => (
            <li key={step.name} className="relative">
              <div className="mb-5 flex items-center gap-3">
                <span className="relative z-10 flex h-9 w-9 items-center justify-center border border-line bg-paper text-xs tracking-[0.08em]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                {index < c.method.steps.length - 1 ? (
                  <span aria-hidden="true" className="h-px flex-1 bg-line md:hidden" />
                ) : null}
              </div>
              <h3 className="mb-3 text-xl tracking-[-0.03em]">{step.name}</h3>
              <p className="max-w-xs text-sm text-ink/70">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
