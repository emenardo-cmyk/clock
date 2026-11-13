"use client";

import { useState, type FormEvent } from "react";
import { site } from "@/lib/content";
import { useI18n } from "@/lib/i18n";

export function Contact() {
  const { c, locale } = useI18n();
  const [sent, setSent] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    const subject =
      locale === "es" ? `Consulta web — ${name}` : `Website inquiry — ${name}`;
    const body = `${message}\n\n— ${name}\n${email}`;
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <section id="contacto" className="section-pad border-b border-line/50">
      <div className="container-narrow grid gap-12 md:grid-cols-12">
        <div className="md:col-span-5">
          <h2 className="display-title mb-4 text-4xl md:text-5xl">{c.contact.title}</h2>
          <p className="mb-6 max-w-sm text-ink/70">{c.contact.lead}</p>
          <a
            href={site.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-accent-text underline-offset-4 hover:underline"
          >
            {c.contact.whatsapp} →
          </a>
        </div>

        <form onSubmit={onSubmit} className="space-y-6 md:col-span-6 md:col-start-7" noValidate>
          <label className="block">
            <span className="mb-1 block text-xs tracking-[0.1em] text-ink/50 uppercase">
              {c.contact.name}
            </span>
            <input className="input-field" name="name" type="text" autoComplete="name" required />
          </label>
          <label className="block">
            <span className="mb-1 block text-xs tracking-[0.1em] text-ink/50 uppercase">
              {c.contact.email}
            </span>
            <input
              className="input-field"
              name="email"
              type="email"
              autoComplete="email"
              required
            />
          </label>
          <label className="block">
            <span className="mb-1 block text-xs tracking-[0.1em] text-ink/50 uppercase">
              {c.contact.message}
            </span>
            <textarea className="input-field min-h-28 resize-y" name="message" required />
          </label>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button type="submit" className="btn-accent">
              {c.contact.submit}
            </button>
            {sent ? (
              <span className="text-sm text-accent-text" role="status">
                {locale === "es" ? "Abriendo tu correo…" : "Opening your mail…"}
              </span>
            ) : null}
          </div>

          <p className="text-xs text-ink/50">
            {c.contact.privacy}{" "}
            <a href="/privacidad" className="underline">
              {c.contact.privacyLink}
            </a>
            .
          </p>
        </form>
      </div>
    </section>
  );
}
