import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? "https://emilianomenardo.com";
  const updated = new Date("2026-11-13");
  return [
    { url: `${base}/`, lastModified: updated, changeFrequency: "monthly", priority: 1 },
    { url: `${base}/en`, lastModified: updated, changeFrequency: "monthly", priority: 0.9 },
    {
      url: `${base}/insights/ai-act-lectura-argentina`,
      lastModified: new Date("2026-10-12"),
      changeFrequency: "yearly",
      priority: 0.7,
    },
    {
      url: `${base}/insights/datos-producto`,
      lastModified: new Date("2026-09-20"),
      changeFrequency: "yearly",
      priority: 0.7,
    },
    {
      url: `${base}/privacidad`,
      lastModified: updated,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
