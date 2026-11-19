"use client";

import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { insights } from "@/lib/content";
import { useI18n } from "@/lib/i18n";

function formatDate(date: string, locale: "es" | "en") {
  return new Intl.DateTimeFormat(locale === "es" ? "es-AR" : "en-GB", {
    year: "numeric",
    month: "short",
    day: "2-digit",
  }).format(new Date(`${date}T12:00:00`));
}

export function Insights() {
  const { c, locale } = useI18n();

  return (
    <section id="insights" className="section-y border-t border-line/80">
      <div className="container-page">
        <ScrollReveal>
          <h2 className="heading-2">{c.insights.title}</h2>
        </ScrollReveal>
        <ul className="mt-10 divide-y divide-line border-y border-line">
          {insights.map((item) => (
            <li key={item.slug}>
              <ScrollReveal>
                <Link
                  href={`/insights/${item.slug}`}
                  className="group flex flex-col gap-3 py-6 transition-opacity duration-300 hover:opacity-80 md:flex-row md:items-baseline md:justify-between"
                >
                  <div>
                    <div className="flex flex-wrap gap-x-4 gap-y-1 caption-4 text-ink-muted uppercase tracking-[0.08em]">
                      <time dateTime={item.date}>{formatDate(item.date, locale)}</time>
                      <span>{item.tag[locale]}</span>
                    </div>
                    <h3 className="heading-6 mt-2">{item.title[locale]}</h3>
                    <p className="body-6 mt-2 max-w-2xl text-ink-muted">
                      {item.excerpt[locale]}
                    </p>
                  </div>
                  <span className="button-sm inline-flex items-center gap-2 text-cobalt">
                    {c.insights.read}
                    <ArrowRight size={14} weight="bold" />
                  </span>
                </Link>
              </ScrollReveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
