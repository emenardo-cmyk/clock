"use client";

import Image from "next/image";
import { ScrollReveal } from "@/components/ScrollReveal";
import { site } from "@/lib/content";
import { useI18n } from "@/lib/i18n";

export function About() {
  const { c, locale } = useI18n();

  return (
    <section id="sobre" className="section-y border-t border-line/80">
      <div className="container-page grid items-start gap-10 md:grid-cols-12">
        <ScrollReveal className="md:col-span-5">
          <div className="relative aspect-[3/4] w-full max-w-sm overflow-hidden rounded-2xl border border-line bg-surface">
            <Image
              src="/illustrations/marcus-aurelius.webp"
              alt={
                locale === "es"
                  ? "Grabado a lápiz del busto de Marco Aurelio"
                  : "Pencil engraving of the bust of Marcus Aurelius"
              }
              fill
              sizes="(max-width: 768px) 90vw, 35vw"
              className="object-cover object-top"
            />
          </div>
        </ScrollReveal>

        <ScrollReveal className="md:col-span-6 md:col-start-7">
          <h2 className="heading-2">{c.about.title}</h2>
          <p className="body-3 mt-5 max-w-xl text-ink-muted">{c.about.bio}</p>
          <p className="caption-2 mt-4 text-ink-muted">{site.location[locale]}</p>

          <h3 className="title-4 mt-10 text-ink-muted uppercase tracking-[0.12em]">
            {c.about.trustTitle}
          </h3>
          <ul className="mt-4 space-y-4">
            {c.about.testimonials.map((item) => (
              <li
                key={item.role}
                className="rounded-2xl border border-line bg-surface p-5"
              >
                <p className="body-5 text-ink-muted">{item.quote}</p>
                <p className="caption-4 mt-3 text-ink-muted">{item.role}</p>
              </li>
            ))}
          </ul>
          <p className="caption-5 mt-6 max-w-xl text-ink-muted">{c.about.disclaimer}</p>
        </ScrollReveal>
      </div>
    </section>
  );
}
