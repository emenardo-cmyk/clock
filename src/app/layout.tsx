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
    default: "Emiliano Menardo — Derecho y Tecnología",
    template: "%s · Emiliano Menardo",
  },
  description:
    "Orientación en Derecho e Inteligencia Artificial, datos y tecnología. Fundamentos clásicos, problemas nuevos. Puerto Madryn · Argentina.",
  openGraph: {
    type: "website",
    locale: "es_AR",
    alternateLocale: ["en_US"],
    title: "Emiliano Menardo — Derecho y Tecnología",
    description:
      "Orientación en Derecho e Inteligencia Artificial, datos y tecnología.",
    images: [
      {
        url: "/og/capitel.jpg",
        width: 1152,
        height: 864,
        alt: "Capitel jónico — Emiliano Menardo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Emiliano Menardo — Derecho y Tecnología",
    description:
      "Orientación en Derecho e Inteligencia Artificial, datos y tecnología.",
    images: ["/og/capitel.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
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
    jobTitle: "Law student · Technology & AI law focus",
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
    sameAs: [
      "https://linkedin.com/in/emenardo",
      "https://x.com/emenardo",
    ],
    knowsAbout: [
      "Artificial Intelligence law",
      "Data protection",
      "Technology contracts",
      "Space law",
    ],
  };

  return (
    <html
      lang="es"
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
