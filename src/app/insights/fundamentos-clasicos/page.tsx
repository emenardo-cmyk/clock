import type { Metadata } from "next";
import Link from "next/link";
import { ConstructionLines } from "@/components/ConstructionLines";

export const metadata: Metadata = {
  title: "Fundamentos clásicos, problemas nuevos",
  description:
    "Por qué el Derecho Romano sigue siendo útil para pensar IA, datos y responsabilidad.",
  openGraph: {
    title: "Fundamentos clásicos, problemas nuevos",
    description:
      "Por qué el Derecho Romano sigue siendo útil para pensar IA, datos y responsabilidad.",
    images: ["/og/capitel.jpg"],
  },
};

export default function ArticlePage() {
  return (
    <article className="min-h-screen">
      <header className="relative overflow-hidden border-b border-line/50">
        <div className="container-narrow relative px-[clamp(1.25rem,4vw,3rem)] py-16 md:py-24">
          <ConstructionLines variant="section" />
          <div className="relative z-10 max-w-2xl">
            <p className="mb-4 text-xs tracking-[0.12em] text-ink/50 uppercase">
              <Link href="/#insights" className="no-underline hover:text-accent">
                ← Insights
              </Link>
              <span className="mx-3 text-line">/</span>
              <time dateTime="2026-11-01">1 nov 2026</time>
              <span className="mx-3 text-line">/</span>
              Ensayo
            </p>
            <h1 className="display-title text-4xl md:text-6xl">
              Fundamentos clásicos, problemas nuevos
            </h1>
            <p className="mt-6 max-w-xl text-lg text-ink/70">
              El derecho es arquitectura. Las columnas siguen en pie; lo que
              cambia es la carga.
            </p>
          </div>
        </div>
      </header>

      <div className="container-narrow px-[clamp(1.25rem,4vw,3rem)] py-14 md:py-20">
        <div className="mx-auto max-w-2xl space-y-6 text-[1.05rem] leading-relaxed text-ink/85">
          <p>
            Cuando aparece un sistema de IA, la pregunta jurídica no empieza en
            el modelo. Empieza en la relación: quién decide, sobre quién, con
            qué datos, y qué remedio existe si algo falla.
          </p>
          <p>
            El Derecho Romano no resuelve el AI Act. Sí ofrece una gramática:
            persona, cosa, obligación, daño, culpa. Esa gramática sigue siendo
            útil cuando el lenguaje técnico se vuelve ruido.
          </p>
          <p>
            Pensar un producto de IA como un edificio obliga a mirar
            cimientos. Consentimiento, finalidad, trazabilidad, límites de uso.
            Sin eso, el contrato es decoración.
          </p>
          <p className="border-l border-accent pl-4 text-ink">
            Ubi societas, ibi ius. Donde hay sociedad —también digital— hay
            derecho. El trabajo es hacerlo legible.
          </p>
          <p>
            Esta nota abre una serie editorial breve. Sin promesas de resultado.
            Solo método.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl border-t border-line/60 pt-8">
          <Link href="/#contacto" className="btn-accent no-underline">
            Conversemos
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </article>
  );
}
