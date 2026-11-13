export type Locale = "es" | "en";

export type ServiceItem = {
  id: string;
  title: { es: string; en: string };
  forWhom: { es: string; en: string };
  deliverable: { es: string; en: string };
  timeline: { es: string; en: string };
  keyword: { es: string; en: string };
  image: string;
  imageAlt: { es: string; en: string };
  /** SVG path that follows the illustration geometry */
  tracePath: string;
  labelX: number;
  labelY: number;
};

export type InsightItem = {
  slug: string;
  date: string;
  title: { es: string; en: string };
  tag: { es: string; en: string };
  excerpt: { es: string; en: string };
};

export const site = {
  name: "Emiliano Menardo",
  linkedin: "https://linkedin.com/in/emenardo",
  x: "https://x.com/emenardo",
  email: "hola@emilianomenardo.com",
  /** Reemplazar con tu número real: https://wa.me/54911XXXXXXXX */
  whatsapp: "https://wa.me/5491100000000",
  calendly: "#contacto",
  location: {
    es: "Puerto Madryn · Argentina",
    en: "Puerto Madryn · Argentina",
  },
  matriculado: false,
};

export const services: ServiceItem[] = [
  {
    id: "ia",
    title: {
      es: "Gobernanza y compliance de IA",
      en: "AI governance & compliance",
    },
    forWhom: {
      es: "Para startups y pymes que venden a la UE o usan modelos de IA en producto.",
      en: "For startups and SMEs selling to the EU or shipping AI in product.",
    },
    deliverable: {
      es: "Mapa de riesgos + checklist AI Act aplicable a tu operación.",
      en: "Risk map + AI Act checklist tailored to your operation.",
    },
    timeline: { es: "2–3 semanas", en: "2–3 weeks" },
    keyword: { es: "AI Act", en: "AI Act" },
    image: "/illustrations/ionic-capital.webp",
    imageAlt: {
      es: "Grabado a lápiz de un capitel jónico romano",
      en: "Pencil engraving of a Roman Ionic capital",
    },
    tracePath:
      "M 98 152 C 98 128, 116 112, 138 112 C 162 112, 178 130, 178 152 C 178 176, 160 192, 138 192 C 122 192, 112 180, 112 166 C 112 154, 122 146, 134 146 C 144 146, 150 152, 150 160",
    labelX: 200,
    labelY: 108,
  },
  {
    id: "datos",
    title: {
      es: "Protección de datos personales",
      en: "Personal data protection",
    },
    forWhom: {
      es: "Para equipos de producto y legal que tratan datos de clientes o empleados.",
      en: "For product and legal teams handling customer or employee data.",
    },
    deliverable: {
      es: "Diagnóstico Ley 25.326 + plan de gaps priorizado.",
      en: "Act 25.326 diagnosis + prioritized gap plan.",
    },
    timeline: { es: "2 semanas", en: "2 weeks" },
    keyword: { es: "25.326", en: "25.326" },
    image: "/illustrations/roman-arch.webp",
    imageAlt: {
      es: "Grabado a lápiz de un arco romano",
      en: "Pencil engraving of a Roman arch",
    },
    tracePath: "M 70 210 C 120 120, 180 90, 240 120 C 280 145, 300 180, 310 210",
    labelX: 318,
    labelY: 118,
  },
  {
    id: "rrhh",
    title: {
      es: "IA en RR.HH. y operaciones",
      en: "AI in HR & operations",
    },
    forWhom: {
      es: "Para áreas de personas que usan IA en selección, evaluación o nómina.",
      en: "For people teams using AI in hiring, evaluation, or payroll.",
    },
    deliverable: {
      es: "Política de uso de IA + matriz de riesgos laborales y de datos.",
      en: "AI use policy + labor and data risk matrix.",
    },
    timeline: { es: "1–2 semanas", en: "1–2 weeks" },
    keyword: { es: "RR.HH.", en: "HR" },
    image: "/illustrations/roman-column.webp",
    imageAlt: {
      es: "Grabado a lápiz de una columna romana estriada",
      en: "Pencil engraving of a fluted Roman column",
    },
    tracePath: "M 160 40 L 160 260",
    labelX: 190,
    labelY: 70,
  },
];

export const insights: InsightItem[] = [
  {
    slug: "ai-act-lectura-argentina",
    date: "2026-10-12",
    title: {
      es: "AI Act: una lectura desde Argentina",
      en: "The AI Act: a reading from Argentina",
    },
    tag: { es: "Regulación", en: "Regulation" },
    excerpt: {
      es: "Extraterritorialidad y compliance para equipos locales que operan con la UE.",
      en: "Extraterritorial reach and compliance for local teams working with the EU.",
    },
  },
  {
    slug: "datos-producto",
    date: "2026-09-20",
    title: {
      es: "Datos personales como arquitectura de producto",
      en: "Personal data as product architecture",
    },
    tag: { es: "Datos", en: "Data" },
    excerpt: {
      es: "La Ley 25.326 no es un apéndice: condiciona el diseño desde el día cero.",
      en: "Act 25.326 is not an appendix: it shapes design from day zero.",
    },
  },
];

export const copy = {
  es: {
    nav: {
      servicios: "Servicios",
      sobre: "Sobre mí",
      insights: "Insights",
      contacto: "Contacto",
    },
    hero: {
      title: "Compliance de IA, sin rodeos",
      subtitle:
        "Para startups y pymes argentinas que usan IA o venden a la UE. Claridad en 20 minutos.",
      cta: "Agendá 20 minutos sin costo",
      whatsapp: "WhatsApp",
    },
    problem: {
      title: "El riesgo ya está en tu operación",
      items: [
        {
          title: "Multas y frenos comerciales",
          text: "Tratar datos sin marco claro bajo la Ley 25.326.",
        },
        {
          title: "Contratos con clientes de la UE",
          text: "El AI Act ya condiciona a proveedores fuera de Europa.",
        },
        {
          title: "IA en RR.HH.",
          text: "Selección o evaluación automatizada sin criterios documentados.",
        },
      ],
    },
    services: {
      title: "Servicios",
      forWhom: "Para quién",
      deliverable: "Entregable",
      timeline: "Plazo",
    },
    method: {
      title: "Cómo trabajo",
      steps: [
        {
          name: "Diagnóstico",
          text: "Reviso tu stack, contratos y flujos de datos. En una llamada sabés el mapa.",
        },
        {
          name: "Plan",
          text: "Priorizo gaps: qué frenar, qué documentar, qué dejar para después.",
        },
        {
          name: "Implementación",
          text: "Bajo a políticas, checklists y cláusulas. El patrocinio jurídico lo cubren abogados matriculados.",
        },
      ],
    },
    about: {
      title: "Sobre mí",
      bio: "Estudiante avanzado de Abogacía (Universidad de Palermo). Experiencia en operaciones globales de RR.HH. en una multinacional y trabajo en un estudio jurídico. Cruce entre Derecho, personas y tecnología.",
      trustTitle: "Confianza",
      testimonials: [
        {
          quote:
            "[COMPLETAR] “Emiliano ordenó el uso de IA en nuestro proceso de selección en dos semanas.”",
          role: "[COMPLETAR] — Head of People, startup SaaS",
        },
        {
          quote:
            "[COMPLETAR] “Nos dejó un checklist AI Act usable para el equipo de producto.”",
          role: "[COMPLETAR] — COO, pyme que exporta a la UE",
        },
      ],
      disclaimer:
        "No estoy matriculado. Ofrezco consultoría en gobernanza de IA y datos. El patrocinio jurídico lo brindan abogados matriculados.",
    },
    insights: {
      title: "Insights",
      read: "Leer",
    },
    contact: {
      title: "Hablemos",
      lead: "Contame en una línea qué IA o datos están en juego.",
      name: "Nombre",
      email: "Email",
      message: "Consulta",
      submit: "Enviar",
      privacy: "Al enviar, aceptás el",
      privacyLink: "aviso de privacidad",
      whatsapp: "O escribinos por WhatsApp",
    },
    footer: {
      latin: "Ubi societas, ibi ius",
      translation: "Donde hay sociedad, hay derecho.",
      cta: "Agendá 20 minutos sin costo",
      tagline: "Gobernanza de IA y datos · Argentina",
    },
    article: {
      back: "Volver",
      published: "Publicado",
    },
  },
  en: {
    nav: {
      servicios: "Services",
      sobre: "About",
      insights: "Insights",
      contacto: "Contact",
    },
    hero: {
      title: "AI compliance, no fluff",
      subtitle:
        "For Argentine startups and SMEs using AI or selling to the EU. Clarity in 20 minutes.",
      cta: "Book 20 free minutes",
      whatsapp: "WhatsApp",
    },
    problem: {
      title: "The risk is already in your ops",
      items: [
        {
          title: "Fines and commercial friction",
          text: "Handling data without a clear Act 25.326 frame.",
        },
        {
          title: "Contracts with EU clients",
          text: "The AI Act already reaches non-EU providers.",
        },
        {
          title: "AI in HR",
          text: "Automated hiring or evaluation without documented criteria.",
        },
      ],
    },
    services: {
      title: "Services",
      forWhom: "For whom",
      deliverable: "Deliverable",
      timeline: "Timeline",
    },
    method: {
      title: "How I work",
      steps: [
        {
          name: "Diagnosis",
          text: "I review your stack, contracts, and data flows. One call maps the risk.",
        },
        {
          name: "Plan",
          text: "I prioritize gaps: what to stop, document, or defer.",
        },
        {
          name: "Implementation",
          text: "Policies, checklists, and clauses. Licensed attorneys handle formal legal sponsorship.",
        },
      ],
    },
    about: {
      title: "About",
      bio: "Advanced Law student (Universidad de Palermo). Background in global HR ops at a multinational and work at a law firm. The intersection of law, people, and technology.",
      trustTitle: "Trust",
      testimonials: [
        {
          quote:
            "[TO COMPLETE] “Emiliano sorted AI use in our hiring process in two weeks.”",
          role: "[TO COMPLETE] — Head of People, SaaS startup",
        },
        {
          quote:
            "[TO COMPLETE] “He left us an AI Act checklist our product team can use.”",
          role: "[TO COMPLETE] — COO, SME exporting to the EU",
        },
      ],
      disclaimer:
        "I am not a licensed attorney. I offer AI and data governance consulting. Licensed attorneys provide formal legal sponsorship.",
    },
    insights: {
      title: "Insights",
      read: "Read",
    },
    contact: {
      title: "Let’s talk",
      lead: "Tell me in one line which AI or data is at stake.",
      name: "Name",
      email: "Email",
      message: "Message",
      submit: "Send",
      privacy: "By sending, you accept the",
      privacyLink: "privacy notice",
      whatsapp: "Or message on WhatsApp",
    },
    footer: {
      latin: "Ubi societas, ibi ius",
      translation: "Where there is society, there is law.",
      cta: "Book 20 free minutes",
      tagline: "AI & data governance · Argentina",
    },
    article: {
      back: "Back",
      published: "Published",
    },
  },
} as const;

export function t(locale: Locale) {
  return copy[locale];
}
