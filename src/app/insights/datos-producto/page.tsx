import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Datos personales como arquitectura de producto",
  description:
    "La Ley 25.326 condiciona el diseño de producto desde el día cero.",
  openGraph: {
    title: "Datos personales como arquitectura de producto",
    images: ["/og/capitel.webp"],
  },
};

export default function DatosProductoArticlePage() {
  return (
    <article className="min-h-screen">
      <div className="container-narrow px-[clamp(1.25rem,4vw,3rem)] py-16 md:py-24">
        <p className="mb-4 text-xs tracking-[0.12em] text-ink/50 uppercase">
          <Link href="/#insights" className="no-underline hover:text-accent-text">
            ← Insights
          </Link>
          <span className="mx-3 text-line">/</span>
          <time dateTime="2026-09-20">20 sept 2026</time>
        </p>
        <h1 className="display-title max-w-3xl text-4xl md:text-6xl">
          Datos personales como arquitectura de producto
        </h1>
        <div className="mt-10 max-w-2xl space-y-5 text-[1.05rem] leading-relaxed text-ink/85">
          <p>
            La Ley 25.326 no es un apéndice legal. Si el dato entra mal al
            sistema, el contrato y la política solo maquillan el problema.
          </p>
          <p>
            Finalidad, minimización y acceso: tres decisiones de producto que
            después se vuelven cláusulas. Mejor tomarlas antes del launch.
          </p>
          <p>
            Un diagnóstico corto suele alcanzar para ver si el riesgo está en
            el formulario, en el proveedor de IA o en el flujo de RR.HH.
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
