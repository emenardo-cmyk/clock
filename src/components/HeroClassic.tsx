"use client";

import Image from "next/image";
import { ConstructionLines } from "@/components/ConstructionLines";
import { OrangeTrace } from "@/components/OrangeTrace";
import { useI18n } from "@/lib/i18n";

export function HeroClassic() {
  const { c } = useI18n();

  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-line/50"
      aria-labelledby="hero-title"
    >
      <div className="site-grid">
        <div className="container-narrow relative grid min-h-[88vh] items-center gap-8 px-[clamp(1.25rem,4vw,3rem)] py-12 md:grid-cols-12 md:gap-6 md:py-16">
          <ConstructionLines />

          <div className="relative z-10 order-2 flex flex-col justify-between gap-10 md:order-1 md:col-span-5 md:min-h-[28rem]">
            <div>
              <p className="mb-6 text-xs tracking-[0.14em] text-ink/55 uppercase">
                {c.hero.note}
              </p>
              <h1 id="hero-title" className="sr-only">
                {c.hero.wordTop} {c.hero.wordBottom}
              </h1>
              <p
                aria-hidden="true"
                className="display-title text-[clamp(3.4rem,9vw,6.5rem)] text-ink"
              >
                {c.hero.wordTop}
              </p>
            </div>

            <div className="max-w-sm space-y-6">
              <p className="text-base text-ink/80 md:text-lg">{c.hero.subtitle}</p>
              <a href="#contacto" className="btn-accent no-underline">
                {c.hero.cta}
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>

          <div className="relative z-10 order-1 md:order-2 md:col-span-7">
            <div className="relative mx-auto aspect-[4/3] w-full max-w-2xl md:ml-auto">
              <Image
                src="/illustrations/ionic-capital.jpg"
                alt=""
                fill
                priority
                sizes="(max-width: 768px) 100vw, 58vw"
                className="object-contain object-center"
              />
              <OrangeTrace
                path="M 70 210 C 120 100, 190 70, 250 110 C 300 145, 280 210, 220 245 C 175 275, 130 255, 115 220 L 290 80"
                labelX={300}
                labelY={68}
              />
              <p
                aria-hidden="true"
                className="pointer-events-none absolute right-2 bottom-2 display-title text-[clamp(2.4rem,6vw,4.5rem)] md:right-6 md:bottom-4"
              >
                <span className="keyword-lit">{c.hero.wordBottom}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
