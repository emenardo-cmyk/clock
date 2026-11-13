import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Aviso de privacidad",
  description:
    "Información sobre el tratamiento de datos en el sitio de Emiliano Menardo.",
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen">
      <div className="container-narrow px-[clamp(1.25rem,4vw,3rem)] py-16 md:py-24">
        <p className="mb-6 text-sm">
          <Link href="/" className="no-underline hover:text-accent">
            ← Emiliano Menardo
          </Link>
        </p>
        <h1 className="display-title mb-8 text-4xl md:text-5xl">
          Aviso de privacidad
        </h1>

        <div className="max-w-2xl space-y-5 text-ink/80">
          <p>
            Este sitio recoge, a través del formulario de contacto, el nombre,
            el email y el mensaje que envíes. Esos datos se usan únicamente para
            responder la consulta.
          </p>
          <p>
            No se venden ni se ceden a terceros con fines comerciales. El
            envío abre tu cliente de correo; el mensaje viaja por el canal que
            elijas al confirmar el email.
          </p>
          <p>
            Base normativa de referencia en Argentina: Ley 25.326 de Protección
            de los Datos Personales. Podés solicitar acceso, rectificación o
            eliminación escribiendo a{" "}
            <a href="mailto:hola@emilianomenardo.com">
              hola@emilianomenardo.com
            </a>
            .
          </p>
          <p className="text-sm text-ink/55">
            Privacy (EN): contact form data (name, email, message) is used only
            to reply. No sale of data. Reference framework: Argentine Act
            25.326. Requests: hola@emilianomenardo.com.
          </p>
          <p className="text-xs text-ink/45">Última actualización: noviembre 2026.</p>
        </div>
      </div>
    </main>
  );
}
