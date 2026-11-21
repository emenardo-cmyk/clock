import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://menardo.com.ar";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Gobernanza de IA y datos | Emiliano Menardo",
    template: "%s · Emiliano Menardo",
  },
  description:
    "Consultoría en gobernanza de IA, AI Act y protección de datos Ley 25.326 para startups y pymes argentinas. Primera conversación por WhatsApp.",
  keywords: [
    "gobernanza de IA Argentina",
    "AI Act Argentina",
    "Ley 25.326",
    "compliance de IA",
    "Emiliano Menardo",
  ],
  openGraph: {
    type: "website",
    locale: "es_AR",
    alternateLocale: ["en_US"],
    title: "Gobernanza de IA y datos | Emiliano Menardo",
    description:
      "IA, datos y gestión para empresas argentinas. Criterios claros en 20 minutos.",
    images: [
      {
        url: "/live/fondo-v3.jpg",
        width: 1536,
        height: 864,
        alt: "Emiliano Menardo — IA, datos y gestión",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gobernanza de IA y datos | Emiliano Menardo",
    description:
      "IA, datos y gestión para empresas argentinas. Criterios claros en 20 minutos.",
    images: ["/live/fondo-v3.jpg"],
  },
  robots: { index: false, follow: false },
  alternates: {
    languages: {
      "es-AR": "/",
      en: "/en",
    },
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Emiliano Menardo",
    jobTitle: "AI and data governance consultant",
    email: "e@menardo.com.ar",
    url: siteUrl,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Puerto Madryn",
      addressRegion: "Chubut",
      addressCountry: "AR",
    },
    sameAs: ["https://linkedin.com/in/emenardo", "https://x.com/menardiando"],
    knowsAbout: ["AI Act", "Ley 25.326", "AI governance", "Data protection"],
  };

  return (
    <html
      lang="es-AR"
      translate="no"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-paper text-ink font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        {children}
      </body>
    </html>
  );
}
