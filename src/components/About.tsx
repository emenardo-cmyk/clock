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
            src="/illustrations/portrait-engraving.jpg"
            alt={
              locale === "es"
                ? "Retrato tratado como grabado de Emiliano Menardo"
                : "Engraving-style portrait of Emiliano Menardo"
            }
            fill
            sizes="(max-width: 768px) 90vw, 35vw"
            className="object-cover object-top grayscale"
          />
        </div>

        <div className="md:col-span-6 md:col-start-7">
          <h2 className="display-title mb-6 text-4xl md:text-5xl">{c.about.title}</h2>
          <p className="mb-6 max-w-xl text-lg text-ink/85">{c.about.bio}</p>
          <p className="mb-8 text-sm text-ink/55">{site.location[locale]}</p>

          <h3 className="mb-3 text-xs tracking-[0.14em] text-ink/55 uppercase">
            {c.about.formation}
          </h3>
          <ul className="mb-8 space-y-2 border-l border-line pl-4">
            {c.about.formationItems.map((item) => (
              <li key={item} className="text-sm text-ink/80">
                {item}
              </li>
            ))}
          </ul>

          <p className="mb-4 max-w-xl text-sm text-ink/65">{c.about.context}</p>
          <p className="max-w-xl text-xs leading-relaxed text-ink/50">
            {c.about.disclaimer}
          </p>
        </div>
      </div>
    </section>
  );
}
