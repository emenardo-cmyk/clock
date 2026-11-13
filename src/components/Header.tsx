"use client";

import { site } from "@/lib/content";
import { useI18n } from "@/lib/i18n";

export function Header() {
  const { locale, toggleLocale, c } = useI18n();

  const links = [
    { href: "#areas", label: c.nav.areas },
    { href: "#metodo", label: c.nav.metodo },
    { href: "#sobre", label: c.nav.sobre },
    { href: "#insights", label: c.nav.insights },
    { href: "#contacto", label: c.nav.contacto },
  ];

  return (
    <header className="relative z-20 border-b border-line/60">
      <div className="container-narrow flex items-center justify-between gap-4 px-[clamp(1.25rem,4vw,3rem)] py-4">
        <a href="#top" className="text-sm tracking-[-0.02em] no-underline">
          {site.name}
        </a>
        <nav aria-label="Primary" className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-ink/70 no-underline transition-colors duration-500 hover:text-accent"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <button
          type="button"
          onClick={toggleLocale}
          className="border border-line px-2.5 py-1 text-xs tracking-[0.08em] uppercase transition-colors duration-500 hover:border-accent hover:text-accent"
          aria-label={locale === "es" ? "Switch to English" : "Cambiar a español"}
        >
          {locale === "es" ? "EN" : "ES"}
        </button>
      </div>
    </header>
  );
}
