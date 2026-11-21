"use client";

import { ScrollReveal } from "@/components/ScrollReveal";
import { useI18n } from "@/lib/i18n";

export function Problem() {
  const { c } = useI18n();

  return (
    <section id="problema" className="section-y border-t border-line/80">
      <div className="container-page">
        <ScrollReveal>
          <h2 className="heading-2 max-w-[680px]">{c.problem.title}</h2>
          <p className="body-3 mt-4 max-w-xl text-ink-muted">{c.problem.lead}</p>
        </ScrollReveal>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {c.problem.items.map((item, index) => (
            <ScrollReveal key={item.title}>
              <article className="h-full rounded-2xl border border-line bg-surface p-6">
                <p className="caption-4 text-cobalt">{String(index + 1).padStart(2, "0")}</p>
                <h3 className="heading-6 mt-4">{item.title}</h3>
                <p className="body-6 mt-3 text-ink-muted">{item.text}</p>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
