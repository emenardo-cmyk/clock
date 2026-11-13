"use client";

import { site } from "@/lib/content";
import { useI18n } from "@/lib/i18n";

export function Header() {
  const { locale, toggleLocale, c } = useI18n();

  const links = [
    { href: "#servicios", label: c.nav.servicios },
    { href: "#sobre", label: c.nav.sobre },
    { href: "#insights", label: c.nav.insights },
  ];

  return (
    <header className="relative z-20 border-b border-line/60">
      <div className="container-narrow flex items-center justify-between gap-4 px-[clamp(1.25rem,4vw,3rem)] py-3 md:py-4">
        <a href="#top" className="text-sm tracking-[-0.02em] no-underline">
          {site.name}
        </a>
        <div className="flex items-center gap-4 md:gap-6">
          <nav aria-label="Principal" className="hidden items-center gap-6 md:flex">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-ink/70 no-underline transition-colors duration-500 hover:text-accent-text"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <a href="#contacto" className="btn-accent no-underline !px-3 !py-1.5 text-sm">
            {c.nav.contacto}
          </a>
          <button
            type="button"
            onClick={toggleLocale}
            className="border border-line px-2.5 py-1 text-xs tracking-[0.08em] uppercase transition-colors duration-500 hover:border-accent hover:text-accent-text"
            aria-label={locale === "es" ? "Switch to English" : "Cambiar a español"}
          >
            {locale === "es" ? "EN" : "ES"}
          </button>
        </div>
      </div>
    </header>
  );
}
