"use client";

import Image from "next/image";
import { ArrowRight } from "@phosphor-icons/react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { site } from "@/lib/content";
import { useI18n } from "@/lib/i18n";

export function HeroClassic() {
  const { c, locale } = useI18n();

  return (
    <section id="top" className="relative overflow-hidden pt-28 md:pt-32">
      <div className="container-page grid items-center gap-10 pb-16 md:grid-cols-12 md:gap-8 md:pb-24">
        <ScrollReveal className="md:col-span-6">
          <p className="caption-4 mb-4 text-cobalt uppercase tracking-[0.14em]">
            {c.hero.proof}
          </p>
          <h1 className="heading-1 hero-gradient max-w-[680px]">
            <span className="block">{c.hero.titleLine1}</span>
            <span className="block">{c.hero.titleLine2}</span>
          </h1>
          <p className="body-3 mt-4 max-w-[680px] text-ink-muted md:mt-6">
            {c.hero.subtitle}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href={site.calendly} className="btn-primary button-md">
              {c.hero.cta}
              <ArrowRight size={16} weight="bold" />
            </a>
            <a
              href={site.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary button-md"
            >
              {c.hero.whatsapp}
            </a>
          </div>
        </ScrollReveal>

        <ScrollReveal className="md:col-span-6">
          <div className="relative mx-auto aspect-[4/3] w-full max-w-xl overflow-hidden rounded-2xl border border-line bg-surface md:ml-auto">
            <Image
              src="/illustrations/ionic-capital.webp"
              alt={
                locale === "es"
                  ? "Grabado a lápiz de un capitel jónico romano"
                  : "Pencil engraving of a Roman Ionic capital"
              }
              fill
              priority
              sizes="(max-width: 768px) 100vw, 48vw"
              className="object-cover object-center"
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
