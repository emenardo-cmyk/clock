"use client";

import Image from "next/image";
import { ArrowRight, WhatsappLogo } from "@phosphor-icons/react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { site } from "@/lib/content";
import { useI18n } from "@/lib/i18n";

export function HeroClassic() {
  const { c, locale } = useI18n();

  return (
    <section id="top" className="relative overflow-hidden pt-28 md:pt-32">
      <div className="container-page grid items-center gap-10 pb-16 md:grid-cols-12 md:gap-8 md:pb-20">
        <ScrollReveal className="relative z-10 md:col-span-5">
          <p className="caption-4 mb-4 text-ink-muted uppercase tracking-[0.14em]">
            {c.hero.proof}
          </p>
          <h1 className="heading-1 max-w-[680px]">
            <span className="block">{c.hero.titleLine1}</span>
            <span className="block">
              {locale === "es" ? (
                <>
                  ya <span className="hero-mark">llegó.</span>
                </>
              ) : (
                <>
                  <span className="hero-mark">is here.</span>
                </>
              )}
            </span>
          </h1>
          <p className="body-3 mt-5 max-w-[680px] text-ink-muted md:mt-6">
            {c.hero.subtitle}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={site.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary button-md"
            >
              <WhatsappLogo size={18} weight="fill" />
              {c.hero.cta}
            </a>
            <a href="#contacto" className="btn-secondary button-md">
              {c.hero.whatsapp}
              <ArrowRight size={16} weight="bold" />
            </a>
          </div>
        </ScrollReveal>

        <ScrollReveal className="md:col-span-7">
          <div className="relative mx-auto aspect-[16/9] w-full overflow-hidden rounded-2xl border border-line bg-surface md:ml-auto">
            <Image
              src="/live/fondo-v3.webp"
              alt={
                locale === "es"
                  ? "Grabado azul de ciudad costera clásica con cohete moderno"
                  : "Blue engraving of a classical coastal city with a modern rocket"
              }
              fill
              priority
              sizes="(max-width: 768px) 100vw, 58vw"
              className="object-cover object-[68%_50%]"
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
