"use client";

import { About } from "@/components/About";
import { Benefits } from "@/components/Benefits";
import { Contact } from "@/components/Contact";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { HeroClassic } from "@/components/HeroClassic";
import { Insights } from "@/components/Insights";
import { Method } from "@/components/Method";
import { PracticeAreas } from "@/components/PracticeAreas";
import { Problem } from "@/components/Problem";
import { TaglineReveal } from "@/components/TaglineReveal";
import { I18nProvider } from "@/lib/i18n";
import type { Locale } from "@/lib/content";

export function SiteShell({ initialLocale = "es" }: { initialLocale?: Locale }) {
  return (
    <I18nProvider initialLocale={initialLocale}>
      <Header />
      <main id="main">
        <HeroClassic />
        <Problem />
        <Benefits />
        <TaglineReveal />
        <Method />
        <PracticeAreas />
        <About />
        <Insights />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </I18nProvider>
  );
}
