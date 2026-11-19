"use client";

import { CaretDown } from "@phosphor-icons/react";
import { useState } from "react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { useI18n } from "@/lib/i18n";

export function FAQ() {
  const { c } = useI18n();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: c.faq.items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  return (
    <section id="faq" className="section-y border-t border-line/80">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="container-page grid gap-10 md:grid-cols-12">
        <ScrollReveal className="md:col-span-4">
          <h2 className="heading-2">{c.faq.title}</h2>
        </ScrollReveal>
        <div className="md:col-span-8">
          <ul className="divide-y divide-line border-y border-line">
            {c.faq.items.map((item, index) => {
              const open = openIndex === index;
              return (
                <li key={item.q}>
                  <button
                    type="button"
                    className="flex w-full items-start justify-between gap-4 py-5 text-left"
                    aria-expanded={open}
                    onClick={() => setOpenIndex(open ? null : index)}
                  >
                    <span className="title-2">{item.q}</span>
                    <CaretDown
                      size={18}
                      className={`mt-1 shrink-0 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                        open ? "rotate-180" : ""
                      }`}
                      aria-hidden
                    />
                  </button>
                  {open ? (
                    <p className="body-6 pb-5 text-ink-muted">{item.a}</p>
                  ) : null}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
