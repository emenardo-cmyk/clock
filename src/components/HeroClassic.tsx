"use client";

import Image from "next/image";
import { ConstructionLines } from "@/components/ConstructionLines";
import { OrangeTrace } from "@/components/OrangeTrace";
import { site } from "@/lib/content";
import { useI18n } from "@/lib/i18n";

/** Trazo que sigue la voluta izquierda del capitel (viewBox 360×320). */
const VOLUTE_PATH =
  "M 98 152 C 98 128, 116 112, 138 112 C 162 112, 178 130, 178 152 C 178 176, 160 192, 138 192 C 122 192, 112 180, 112 166 C 112 154, 122 146, 134 146 C 144 146, 150 152, 150 160";

export function HeroClassic() {
  const { c, locale } = useI18n();

  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-line/50"
      aria-labelledby="hero-title"
    >
      <div className="site-grid">
        <div className="container-narrow relative grid items-center gap-4 px-[clamp(1.25rem,4vw,3rem)] pt-5 pb-8 md:grid-cols-12 md:gap-6 md:pt-8 md:pb-12">
          <ConstructionLines />

          <div className="relative z-10 order-2 flex flex-col justify-center md:order-1 md:col-span-5">
            <h1
              id="hero-title"
              className="display-title text-[clamp(2.4rem,6.5vw,4.25rem)] text-ink"
            >
              {c.hero.title}
            </h1>
            <p className="mt-2 max-w-md text-base leading-snug text-ink/80 md:text-lg">
              {c.hero.subtitle}
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-4">
              <a href={site.calendly} className="btn-accent no-underline">
                {c.hero.cta}
                <span aria-hidden="true">→</span>
              </a>
              <a
                href={site.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-accent-text underline-offset-4 hover:underline"
              >
                {c.hero.whatsapp}
              </a>
            </div>
          </div>

          <div className="relative z-10 order-1 md:order-2 md:col-span-7">
            <div className="relative mx-auto aspect-[4/3] w-full max-w-xl md:ml-auto md:max-w-2xl">
              <Image
                src="/illustrations/ionic-capital.webp"
                alt={
                  locale === "es"
                    ? "Grabado a lápiz de un capitel jónico romano"
                    : "Pencil engraving of a Roman Ionic capital"
                }
                fill
                priority
                sizes="(max-width: 768px) 100vw, 58vw"
                className="object-contain object-center"
              />
              <OrangeTrace path={VOLUTE_PATH} viewBox="0 0 360 320" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
