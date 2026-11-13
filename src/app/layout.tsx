import type { Metadata } from "next";
import { Cormorant_Garamond, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://emilianomenardo.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Compliance de IA Argentina | Emiliano Menardo",
    template: "%s · Emiliano Menardo",
  },
  description:
    "Consultoría en gobernanza y compliance de IA, AI Act europeo y protección de datos Ley 25.326 para empresas argentinas.",
  keywords: [
    "compliance de IA Argentina",
    "AI Act Argentina",
    "protección de datos Ley 25.326",
    "gobernanza de IA",
    "consultoría datos personales",
  ],
  openGraph: {
    type: "website",
    locale: "es_AR",
    alternateLocale: ["en_US"],
    title: "Compliance de IA Argentina | Emiliano Menardo",
    description:
      "Gobernanza de IA, AI Act y Ley 25.326 para startups y pymes argentinas.",
    images: [
      {
        url: "/og/capitel.webp",
        width: 1152,
        height: 864,
        alt: "Capitel jónico — Emiliano Menardo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Compliance de IA Argentina | Emiliano Menardo",
    description:
      "Gobernanza de IA, AI Act y Ley 25.326 para startups y pymes argentinas.",
    images: ["/og/capitel.webp"],
  },
  robots: { index: true, follow: true },
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
    jobTitle: "AI & data governance consultant",
    description:
      "Consultoría en gobernanza de IA, AI Act y protección de datos (Ley 25.326) para empresas argentinas.",
    url: siteUrl,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Puerto Madryn",
      addressRegion: "Chubut",
      addressCountry: "AR",
    },
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Universidad de Palermo",
    },
    sameAs: ["https://linkedin.com/in/emenardo", "https://x.com/emenardo"],
    knowsAbout: [
      "AI Act",
      "AI compliance",
      "Ley 25.326",
      "Data protection",
      "HR technology",
    ],
  };

  return (
    <html
      lang="es-AR"
      translate="no"
      className={`${geistSans.variable} ${geistMono.variable} ${cormorant.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-paper text-ink">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        {children}
      </body>
    </html>
  );
}
