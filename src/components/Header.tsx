"use client";

import { List, X } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import { BrandMark } from "@/components/BrandMark";
import { useI18n } from "@/lib/i18n";

export function Header() {
  const { locale, toggleLocale, c } = useI18n();
  const [open, setOpen] = useState(false);

  const links = [
    { href: "#servicios", label: c.nav.servicios },
    { href: "#sobre", label: c.nav.sobre },
    { href: "#insights", label: c.nav.insights },
    { href: "#faq", label: c.nav.faq },
  ];

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <a href="#main" className="skip-link button-sm">
        Skip to content
      </a>
      <header className="pointer-events-none fixed inset-x-0 top-0 z-50 px-4 pt-4">
        <div className="nav-pill pointer-events-auto max-w-[calc(100vw-2rem)]">
          <BrandMark className="shrink-0" />
          <nav aria-label="Principal" className="hidden items-center gap-1 md:flex">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="title-4 rounded-full px-3 py-2 text-ink-muted transition-colors duration-300 hover:text-ink"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={toggleLocale}
              className="title-5 rounded-full border border-line px-2.5 py-1.5 uppercase transition-colors duration-300 hover:border-ink"
              aria-label={locale === "es" ? "Switch to English" : "Cambiar a español"}
            >
              {locale === "es" ? "EN" : "ES"}
            </button>
            <a href="#contacto" className="btn-primary button-sm hidden sm:inline-flex">
              {c.nav.contacto}
            </a>
            <button
              type="button"
              className="inline-flex rounded-full border border-line p-2 md:hidden"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Cerrar menú" : "Abrir menú"}
              onClick={() => setOpen((value) => !value)}
            >
              {open ? <X size={18} /> : <List size={18} />}
            </button>
          </div>
        </div>
      </header>

      {open ? (
        <div
          id="mobile-menu"
          className="fixed inset-0 z-40 bg-paper/95 backdrop-blur-xl md:hidden"
        >
          <div className="flex h-full flex-col px-6 pt-24 pb-10">
            <nav className="flex flex-col gap-2" aria-label="Mobile">
              {links.map((link, index) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="menu-item-enter heading-5 border-b border-line py-4"
                  style={{ animationDelay: `${index * 60}ms` }}
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <a
              href="#contacto"
              onClick={() => setOpen(false)}
              className="btn-primary button-md mt-8 w-full"
            >
              {c.nav.contacto}
            </a>
          </div>
        </div>
      ) : null}
    </>
  );
}
