"use client";

import Image from "next/image";
import { ArrowRight, LinkedinLogo, XLogo } from "@phosphor-icons/react";
import { BrandMark } from "@/components/BrandMark";
import { site, services } from "@/lib/content";
import { useI18n } from "@/lib/i18n";

export function Footer() {
  const { c, locale } = useI18n();

  const navLinks = [
    { href: "#servicios", label: c.nav.servicios },
    { href: "#sobre", label: c.nav.sobre },
    { href: "#insights", label: c.nav.insights },
    { href: "#faq", label: c.nav.faq },
    { href: "#contacto", label: c.nav.contacto },
  ];

  const resourceLinks = [
    {
      href: "/insights/ai-act-lectura-argentina",
      label: locale === "es" ? "AI Act desde Argentina" : "AI Act from Argentina",
    },
    {
      href: "/insights/datos-producto",
      label: locale === "es" ? "Datos como arquitectura" : "Data as architecture",
    },
    { href: "/privacidad", label: locale === "es" ? "Privacidad" : "Privacy" },
  ];

  return (
    <footer className="etching-footer border-t border-line/80">
      <Image
        src="/illustrations/metricra-etching.webp"
        alt=""
        width={1920}
        height={1080}
        className="etching-footer__art"
        aria-hidden
      />
      <div className="etching-footer__fade" aria-hidden />

      <div className="etching-footer__content">
        <div className="container-page pt-16 pb-10 md:pt-20">
          <div className="mb-12 max-w-2xl">
            <p className="heading-4 tracking-[-0.02em]">{c.footer.latin}</p>
            <p className="body-6 mt-3 text-ink-muted">{c.footer.translation}</p>
            <a
              href={site.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary button-md mt-8 inline-flex"
            >
              {c.footer.cta}
              <ArrowRight size={16} weight="bold" />
            </a>
          </div>

          <div className="grid gap-10 border-t border-line/70 pt-10 md:grid-cols-12">
            <div className="md:col-span-3">
              <BrandMark />
              <p className="caption-2 mt-3 text-ink-muted">{c.footer.tagline}</p>
              <div className="mt-6 flex flex-col gap-3">
                <a
                  href={site.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="text-ink-muted transition-colors duration-300 hover:text-ink"
                >
                  <LinkedinLogo size={18} />
                </a>
                <a
                  href={site.x}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="X"
                  className="text-ink-muted transition-colors duration-300 hover:text-ink"
                >
                  <XLogo size={18} />
                </a>
              </div>
            </div>

            <div className="md:col-span-2">
              <p className="title-4 mb-4">{c.footer.columns.nav}</p>
              <ul className="space-y-2">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} className="body-6 text-ink-muted hover:text-ink">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="md:col-span-3">
              <p className="title-4 mb-4">{c.footer.columns.services}</p>
              <ul className="space-y-2">
                {services.map((item) => (
                  <li key={item.id}>
                    <a href="#servicios" className="body-6 text-ink-muted hover:text-ink">
                      {item.title[locale]}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="md:col-span-2">
              <p className="title-4 mb-4">{c.footer.columns.resources}</p>
              <ul className="space-y-2">
                {resourceLinks.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} className="body-6 text-ink-muted hover:text-ink">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="md:col-span-2">
              <p className="title-4 mb-4">{c.footer.columns.company}</p>
              <ul className="space-y-2">
                <li>
                  <a
                    href={`mailto:${site.email}`}
                    className="body-6 text-ink-muted hover:text-ink"
                  >
                    {site.email}
                  </a>
                </li>
                <li>
                  <a href="/privacidad" className="body-6 text-ink-muted hover:text-ink">
                    {locale === "es" ? "Aviso de privacidad" : "Privacy notice"}
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <p className="caption-5 mt-12 pb-8 text-ink-muted">
            © 2026 {site.name}
          </p>
        </div>
      </div>
    </footer>
  );
}
