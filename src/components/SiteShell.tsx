"use client";

import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { HeroClassic } from "@/components/HeroClassic";
import { Insights } from "@/components/Insights";
import { Method } from "@/components/Method";
import { PracticeAreas } from "@/components/PracticeAreas";
import { Quote } from "@/components/Quote";
import { I18nProvider } from "@/lib/i18n";
import type { Locale } from "@/lib/content";

export function SiteShell({ initialLocale = "es" }: { initialLocale?: Locale }) {
  return (
    <I18nProvider initialLocale={initialLocale}>
      <Header />
      <main>
        <HeroClassic />
        <PracticeAreas />
        <Method />
        <About />
        <Insights />
        <Quote />
        <Contact />
      </main>
      <Footer />
    </I18nProvider>
  );
}
