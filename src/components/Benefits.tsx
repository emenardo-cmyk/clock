"use client";

import { CheckCircle } from "@phosphor-icons/react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { useI18n } from "@/lib/i18n";

export function Benefits() {
  const { c } = useI18n();

  return (
    <section id="beneficios" className="section-y">
      <div className="container-page">
        <ScrollReveal>
          <h2 className="heading-2 max-w-[680px]">{c.benefits.title}</h2>
        </ScrollReveal>
        <ul className="mt-12 grid gap-4 md:grid-cols-2">
          {c.benefits.items.map((item) => (
            <ScrollReveal key={item.title}>
              <li className="flex gap-4 rounded-2xl border border-line bg-surface p-6">
                <CheckCircle
                  size={24}
                  weight="duotone"
                  className="mt-0.5 shrink-0 text-cobalt"
                  aria-hidden
                />
                <div>
                  <h3 className="title-1">{item.title}</h3>
                  <p className="body-6 mt-2 text-ink-muted">{item.text}</p>
                </div>
              </li>
            </ScrollReveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
