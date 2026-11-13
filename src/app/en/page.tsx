import type { Metadata } from "next";
import { SiteShell } from "@/components/SiteShell";

export const metadata: Metadata = {
  title: "AI compliance Argentina | Emiliano Menardo",
  description:
    "AI governance consulting, EU AI Act and Argentine Act 25.326 for companies in Argentina.",
  alternates: {
    canonical: "/en",
    languages: {
      "es-AR": "/",
      en: "/en",
    },
  },
};

export default function EnglishHomePage() {
  return <SiteShell initialLocale="en" />;
}
