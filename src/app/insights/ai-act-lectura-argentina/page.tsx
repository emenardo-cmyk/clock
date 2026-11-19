import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI Act: una lectura desde Argentina",
  description:
    "Extraterritorialidad y compliance del AI Act europeo para equipos argentinos.",
  openGraph: {
    title: "AI Act: una lectura desde Argentina",
    images: ["/og/capitel.webp"],
  },
};

export default function AiActArticlePage() {
  return (
    <article className="min-h-screen">
      <div className="container-narrow px-[clamp(1.25rem,4vw,3rem)] py-16 md:py-24">
        <p className="mb-4 text-xs tracking-[0.12em] text-ink/50 uppercase">
          <Link href="/#insights" className="no-underline hover:text-accent-text">
            ← Insights
          </Link>
          <span className="mx-3 text-line">/</span>
          <time dateTime="2026-10-12">12 oct 2026</time>
        </p>
        <h1 className="display-title max-w-3xl text-4xl md:text-6xl">
          AI Act: una lectura desde Argentina
        </h1>
        <div className="mt-10 max-w-2xl space-y-5 text-[1.05rem] leading-relaxed text-ink/85">
          <p>
            Si tu producto trata usuarios europeos —o un cliente de la UE te
            pide garantías— el AI Act deja de ser “norma ajena”.
          </p>
          <p>
            La pregunta útil no es si estás en Bruselas. Es qué sistema usás,
            qué riesgo clasifica y qué evidencia podés mostrar en un due
            diligence.
          </p>
          <p>
            Empezá por inventariar: modelos, proveedores, datos de
            entrenamiento y decisiones automatizadas. Después, priorizá lo que
            frena un contrato.
          </p>
        </div>
        <div className="mt-14">
          <Link href="/#contacto" className="btn-accent no-underline">
            Agendá 20 minutos sin costo →
          </Link>
        </div>
      </div>
    </article>
  );
}
