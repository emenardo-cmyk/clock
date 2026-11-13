import type { Metadata } from "next";
import { SiteShell } from "@/components/SiteShell";

export const metadata: Metadata = {
  title: "Emiliano Menardo — Law & Technology",
  description:
    "Guidance on Artificial Intelligence law, data, and technology. Classical foundations, new problems. Puerto Madryn · Argentina.",
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
