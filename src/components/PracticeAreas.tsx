"use client";

import { ScrollReveal } from "@/components/ScrollReveal";
import { services } from "@/lib/content";
import { useI18n } from "@/lib/i18n";

export function PracticeAreas() {
  const { c, locale } = useI18n();

  return (
    <section id="servicios" className="section-y border-t border-line/80">
      <div className="container-page">
        <ScrollReveal>
          <h2 className="heading-2">{c.services.title}</h2>
        </ScrollReveal>
        <div className="mt-12 space-y-4">
          {services.map((item, index) => (
            <ScrollReveal key={item.id}>
              <article className="grid gap-6 rounded-2xl border border-line bg-surface p-6 md:grid-cols-12 md:p-8">
                <div className="md:col-span-5">
                  <p className="caption-4 text-cobalt">
                    {String(index + 1).padStart(2, "0")} · {item.keyword[locale]}
                  </p>
                  <h3 className="heading-5 mt-3">{item.title[locale]}</h3>
                </div>
                <dl className="grid gap-4 md:col-span-7 md:grid-cols-3">
                  <div>
                    <dt className="caption-4 text-ink-muted uppercase tracking-[0.08em]">
                      {c.services.forWhom}
                    </dt>
                    <dd className="body-6 mt-2 text-ink-muted">{item.forWhom[locale]}</dd>
                  </div>
                  <div>
                    <dt className="caption-4 text-ink-muted uppercase tracking-[0.08em]">
                      {c.services.deliverable}
                    </dt>
                    <dd className="body-6 mt-2 text-ink-muted">
                      {item.deliverable[locale]}
                    </dd>
                  </div>
                  <div>
                    <dt className="caption-4 text-ink-muted uppercase tracking-[0.08em]">
                      {c.services.timeline}
                    </dt>
                    <dd className="body-5 mt-2 text-cobalt">{item.timeline[locale]}</dd>
                  </div>
                </dl>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
