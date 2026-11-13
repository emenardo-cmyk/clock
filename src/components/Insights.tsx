"use client";

import Link from "next/link";
import { insights } from "@/lib/content";
import { useI18n } from "@/lib/i18n";

function formatDate(date: string, locale: "es" | "en") {
  return new Intl.DateTimeFormat(locale === "es" ? "es-AR" : "en-GB", {
    year: "numeric",
    month: "short",
    day: "2-digit",
  }).format(new Date(date));
}

export function Insights() {
  const { c, locale } = useI18n();

  return (
    <section id="insights" className="section-pad border-b border-line/50">
      <div className="container-narrow">
        <div className="mb-10 max-w-lg">
          <h2 className="display-title mb-4 text-4xl md:text-5xl">
            {c.insights.title}
          </h2>
          <p className="text-ink/70">{c.insights.lead}</p>
        </div>

        <ul className="divide-y divide-line/60 border-y border-line/60">
          {insights.map((item) => {
            const isSample = item.slug === "fundamentos-clasicos";
            const content = (
              <>
                <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 text-xs tracking-[0.08em] text-ink/50 uppercase">
                  <time dateTime={item.date}>{formatDate(item.date, locale)}</time>
                  <span>{item.tag[locale]}</span>
                </div>
                <h3 className="mt-2 text-xl tracking-[-0.03em] md:text-2xl">
                  {item.title[locale]}
                </h3>
                <p className="mt-2 max-w-2xl text-sm text-ink/65">
                  {item.excerpt[locale]}
                </p>
              </>
            );

            return (
              <li key={item.slug}>
                {isSample ? (
                  <Link
                    href={`/insights/${item.slug}`}
                    className="block py-6 no-underline transition-colors duration-500 hover:text-accent"
                  >
                    {content}
                    <span className="mt-3 inline-block text-sm text-accent">
                      {c.insights.read} →
                    </span>
                  </Link>
                ) : (
                  <div className="py-6 opacity-80">{content}</div>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
