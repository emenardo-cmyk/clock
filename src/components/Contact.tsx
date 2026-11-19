"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight } from "@phosphor-icons/react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { site } from "@/lib/content";
import { useI18n } from "@/lib/i18n";

type Errors = {
  name?: string;
  email?: string;
  message?: string;
};

export function Contact() {
  const { c, locale } = useI18n();
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    const next: Errors = {};
    if (!name) next.name = c.contact.errorRequired;
    if (!email) next.email = c.contact.errorRequired;
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = c.contact.errorEmail;
    if (!message) next.message = c.contact.errorRequired;
    setErrors(next);
    if (Object.keys(next).length > 0) return;

    const subject =
      locale === "es" ? `Consulta web: ${name}` : `Website inquiry: ${name}`;
    const body = `${message}\n\n— ${name}\n${email}`;
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <section id="contacto" className="section-y border-t border-line/80">
      <div className="container-page grid gap-12 md:grid-cols-12">
        <ScrollReveal className="md:col-span-5">
          <h2 className="heading-2">{c.contact.title}</h2>
          <p className="body-3 mt-4 max-w-sm text-ink-muted">{c.contact.lead}</p>
          <a
            href={site.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="button-sm mt-6 inline-flex items-center gap-2 text-cobalt"
          >
            {c.contact.whatsapp}
            <ArrowRight size={14} weight="bold" />
          </a>
        </ScrollReveal>

        <ScrollReveal className="md:col-span-6 md:col-start-7">
          <form onSubmit={onSubmit} className="space-y-4" noValidate>
            <label className="block">
              <span className="caption-4 text-ink-muted uppercase tracking-[0.08em]">
                {c.contact.name}
              </span>
              <input className="input-field mt-2" name="name" type="text" autoComplete="name" />
              {errors.name ? (
                <span className="caption-5 mt-1 block text-cobalt">{errors.name}</span>
              ) : null}
            </label>
            <label className="block">
              <span className="caption-4 text-ink-muted uppercase tracking-[0.08em]">
                {c.contact.email}
              </span>
              <input
                className="input-field mt-2"
                name="email"
                type="email"
                autoComplete="email"
              />
              {errors.email ? (
                <span className="caption-5 mt-1 block text-cobalt">{errors.email}</span>
              ) : null}
            </label>
            <label className="block">
              <span className="caption-4 text-ink-muted uppercase tracking-[0.08em]">
                {c.contact.message}
              </span>
              <textarea className="input-field mt-2 min-h-28 resize-y" name="message" />
              {errors.message ? (
                <span className="caption-5 mt-1 block text-cobalt">{errors.message}</span>
              ) : null}
            </label>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button type="submit" className="btn-primary button-md">
                {c.contact.submit}
                <ArrowRight size={16} weight="bold" />
              </button>
              {sent ? (
                <span className="caption-2 text-ink-muted" role="status">
                  {locale === "es" ? "Abriendo tu correo…" : "Opening your mail…"}
                </span>
              ) : null}
            </div>

            <p className="caption-5 text-ink-muted">
              {c.contact.privacy}{" "}
              <a href="/privacidad" className="underline underline-offset-2">
                {c.contact.privacyLink}
              </a>
              .
            </p>
          </form>
        </ScrollReveal>
      </div>
    </section>
  );
}
