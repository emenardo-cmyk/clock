"use client";

import Image from "next/image";
import { site } from "@/lib/content";
import { useI18n } from "@/lib/i18n";

export function About() {
  const { c, locale } = useI18n();

  return (
    <section id="sobre" className="section-pad border-b border-line/50">
      <div className="container-narrow grid items-start gap-10 md:grid-cols-12">
        <div className="relative aspect-[3/4] w-full max-w-sm md:col-span-5">
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

        <div className="md:col-span-6 md:col-start-7">
          <h2 className="display-title mb-5 text-4xl md:text-5xl">{c.about.title}</h2>
          <p className="mb-4 max-w-xl text-lg leading-snug text-ink/85">{c.about.bio}</p>
          <p className="mb-8 text-sm text-ink/50">{site.location[locale]}</p>

          <h3 className="mb-4 text-xs tracking-[0.14em] text-ink/55 uppercase">
            {c.about.trustTitle}
          </h3>
          <ul className="mb-8 space-y-5">
            {c.about.testimonials.map((item) => (
              <li key={item.role} className="border-l border-accent pl-4">
                <p className="text-sm text-ink/80">{item.quote}</p>
                <p className="mt-2 text-xs text-ink/45">{item.role}</p>
              </li>
            ))}
          </ul>

          <p className="max-w-xl text-xs leading-relaxed text-ink/50">
            {c.about.disclaimer}
          </p>
        </div>
      </div>
    </section>
  );
}
