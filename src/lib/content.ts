export type Locale = "es" | "en";

export type ServiceItem = {
  id: string;
  title: { es: string; en: string };
  forWhom: { es: string; en: string };
  deliverable: { es: string; en: string };
  timeline: { es: string; en: string };
  keyword: { es: string; en: string };
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
  x: "https://x.com/menardiando",
  email: "e@menardo.com.ar",
  whatsapp:
    "https://wa.me/5492805035947?text=Hola%20Emiliano%2C%20te%20escribo%20desde%20tu%20web.",
  calendly: "#contacto",
  cv: "/live/Emiliano_Menardo_CV.pdf",
  location: {
    es: "Puerto Madryn, Argentina",
    en: "Puerto Madryn, Argentina",
  },
  matriculado: false,
  beta: true,
};

export const services: ServiceItem[] = [
  {
    id: "ia",
    title: {
      es: "Gobernanza y compliance de IA",
      en: "AI governance and compliance",
    },
    forWhom: {
      es: "Startups y pymes que venden a la UE o usan modelos de IA en producto.",
      en: "Startups and SMEs selling to the EU or shipping AI in product.",
    },
    deliverable: {
      es: "Mapa de riesgos y checklist AI Act aplicable a tu operación.",
      en: "Risk map and AI Act checklist tailored to your operation.",
    },
    timeline: { es: "2 a 3 semanas", en: "2 to 3 weeks" },
    keyword: { es: "AI Act", en: "AI Act" },
  },
  {
    id: "datos",
    title: {
      es: "Protección de datos personales",
      en: "Personal data protection",
    },
    forWhom: {
      es: "Equipos de producto y legal que tratan datos de clientes o empleados.",
      en: "Product and legal teams handling customer or employee data.",
    },
    deliverable: {
      es: "Diagnóstico Ley 25.326 y plan de gaps priorizado.",
      en: "Act 25.326 diagnosis and prioritized gap plan.",
    },
    timeline: { es: "2 semanas", en: "2 weeks" },
    keyword: { es: "Ley 25.326", en: "Act 25.326" },
  },
  {
    id: "rrhh",
    title: {
      es: "IA en RR.HH. y operaciones",
      en: "AI in HR and operations",
    },
    forWhom: {
      es: "Áreas de personas que usan IA en selección, evaluación o nómina.",
      en: "People teams using AI in hiring, evaluation, or payroll.",
    },
    deliverable: {
      es: "Política de uso de IA y matriz de riesgos laborales y de datos.",
      en: "AI use policy and labor and data risk matrix.",
    },
    timeline: { es: "1 a 2 semanas", en: "1 to 2 weeks" },
    keyword: { es: "RR.HH.", en: "HR" },
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
      metodo: "Método",
      sobre: "Sobre mí",
      insights: "Insights",
      faq: "FAQ",
      contacto: "Contacto",
    },
    hero: {
      titleLine1: "La inteligencia artificial",
      titleLine2: "ya llegó.",
      subtitle:
        "Ayudo a startups y pymes argentinas a convivir con IA, datos y gestión: AI Act, Ley 25.326 y criterios claros en 20 minutos.",
      cta: "Escribime por WhatsApp",
      whatsapp: "O dejá tu consulta",
      proof: "IA, datos y gestión · Puerto Madryn",
      beta: "Beta",
    },
    problem: {
      title: "El riesgo ya está en tu operación",
      lead: "Tres frenos concretos cuando la IA o los datos avanzan sin un marco.",
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
    benefits: {
      title: "Qué obtenés",
      items: [
        {
          title: "Un mapa legible",
          text: "Sabés qué sistemas, datos y decisiones disparan riesgo real.",
        },
        {
          title: "Prioridades accionables",
          text: "Qué frenar esta semana, qué documentar y qué dejar para después.",
        },
        {
          title: "Entregables usables",
          text: "Checklists, políticas y cláusulas que el equipo puede aplicar.",
        },
        {
          title: "Primera conversación sin costo",
          text: "Empezamos por WhatsApp o una llamada corta. El patrocinio jurídico lo cubren abogados matriculados.",
        },
      ],
    },
    tagline: {
      line1: "Fundamentos clásicos.",
      line2: "Problemas nuevos.",
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
    services: {
      title: "Servicios",
      forWhom: "Para quién",
      deliverable: "Entregable",
      timeline: "Plazo",
    },
    about: {
      title: "Sobre mí",
      bio: "Hace más de veinte años trabajo donde se cruzan tecnología, personas, datos y derecho, con formación de abogado y en ciencias económicas. Acompaño a empresas a incorporar inteligencia artificial, ordenar sus datos y mejorar su gestión.",
      trustTitle: "Confianza",
      testimonials: [
        {
          quote:
            "{{testimonial}} “Emiliano ordenó el uso de IA en nuestro proceso de selección en dos semanas.”",
          role: "{{role}} Head of People, startup SaaS",
        },
        {
          quote:
            "{{testimonial}} “Nos dejó un checklist AI Act usable para el equipo de producto.”",
          role: "{{role}} COO, pyme que exporta a la UE",
        },
      ],
      disclaimer:
        "No estoy matriculado como estudio jurídico. Ofrezco consultoría en gobernanza de IA y datos. El patrocinio jurídico lo brindan abogados matriculados.",
    },
    insights: {
      title: "Insights",
      read: "Leer",
    },
    faq: {
      title: "Preguntas frecuentes",
      items: [
        {
          q: "¿Ofrecés representación letrada?",
          a: "No. Ofrezco consultoría en gobernanza de IA y datos. El patrocinio jurídico lo brindan abogados matriculados.",
        },
        {
          q: "¿Para quién es esto?",
          a: "Startups y pymes argentinas que usan IA, tratan datos personales o venden a la UE.",
        },
        {
          q: "¿Qué pasa en la primera conversación?",
          a: "Mapeamos tu stack, el tipo de dato o modelo, y si el AI Act o la Ley 25.326 aplican. Salís con prioridades claras.",
        },
        {
          q: "¿Trabajás con equipos de RR.HH.?",
          a: "Sí. Especialmente cuando hay IA en selección, evaluación o sistemas de nómina.",
        },
        {
          q: "¿Cuánto tarda un diagnóstico?",
          a: "Entre una y tres semanas según el alcance. Lo acordamos en la primera llamada.",
        },
        {
          q: "¿Cómo se factura?",
          a: "Por proyecto acotado. Te paso alcance y plazo por escrito antes de empezar.",
        },
      ],
    },
    contact: {
      title: "Hablemos",
      lead: "Contame en una línea qué IA o datos están en juego.",
      name: "Nombre",
      email: "Email",
      message: "Consulta",
      submit: "Enviar consulta",
      privacy: "Al enviar, aceptás el",
      privacyLink: "aviso de privacidad",
      whatsapp: "O escribinos por WhatsApp",
      errorRequired: "Completá este campo.",
      errorEmail: "Ingresá un email válido.",
    },
    footer: {
      latin: "Ubi societas, ibi ius",
      translation: "Donde hay sociedad, hay derecho.",
      cta: "Escribime por WhatsApp",
      tagline: "Gobernanza de IA y datos",
      columns: {
        nav: "Navegación",
        services: "Servicios",
        resources: "Recursos",
        company: "Empresa",
      },
    },
  },
  en: {
    nav: {
      servicios: "Services",
      metodo: "Method",
      sobre: "About",
      insights: "Insights",
      faq: "FAQ",
      contacto: "Contact",
    },
    hero: {
      titleLine1: "Artificial intelligence",
      titleLine2: "is here.",
      subtitle:
        "I help Argentine startups and SMEs live with AI, data, and management: AI Act, Act 25.326, and clear criteria in 20 minutes.",
      cta: "Message me on WhatsApp",
      whatsapp: "Or leave a note",
      proof: "AI, data and management · Puerto Madryn",
      beta: "Beta",
    },
    problem: {
      title: "The risk is already in your ops",
      lead: "Three concrete blockers when AI or data move without a frame.",
      items: [
        {
          title: "Fines and commercial friction",
          text: "Handling data without a clear Act 25.326 frame.",
        },
        {
          title: "Contracts with EU clients",
          text: "The AI Act already reaches non EU providers.",
        },
        {
          title: "AI in HR",
          text: "Automated hiring or evaluation without documented criteria.",
        },
      ],
    },
    benefits: {
      title: "What you get",
      items: [
        {
          title: "A readable map",
          text: "You know which systems, data, and decisions create real risk.",
        },
        {
          title: "Actionable priorities",
          text: "What to stop this week, what to document, and what to defer.",
        },
        {
          title: "Usable deliverables",
          text: "Checklists, policies, and clauses your team can apply.",
        },
        {
          title: "First conversation free",
          text: "We start on WhatsApp or a short call. Licensed attorneys handle formal legal sponsorship.",
        },
      ],
    },
    tagline: {
      line1: "Classical foundations.",
      line2: "New problems.",
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
    services: {
      title: "Services",
      forWhom: "For whom",
      deliverable: "Deliverable",
      timeline: "Timeline",
    },
    about: {
      title: "About",
      bio: "For more than twenty years I have worked where technology, people, data, and law meet, drawing on a background in law and in business and economics. I help companies adopt artificial intelligence, organize their data, and improve management.",
      trustTitle: "Trust",
      testimonials: [
        {
          quote:
            "{{testimonial}} “Emiliano sorted AI use in our hiring process in two weeks.”",
          role: "{{role}} Head of People, SaaS startup",
        },
        {
          quote:
            "{{testimonial}} “He left us an AI Act checklist our product team can use.”",
          role: "{{role}} COO, SME exporting to the EU",
        },
      ],
      disclaimer:
        "I am not a licensed law firm. I offer AI and data governance consulting. Licensed attorneys provide formal legal sponsorship.",
    },
    insights: {
      title: "Insights",
      read: "Read",
    },
    faq: {
      title: "FAQ",
      items: [
        {
          q: "Do you offer legal representation?",
          a: "No. I offer AI and data governance consulting. Licensed attorneys provide formal legal sponsorship.",
        },
        {
          q: "Who is this for?",
          a: "Argentine startups and SMEs using AI, handling personal data, or selling to the EU.",
        },
        {
          q: "What happens in the first conversation?",
          a: "We map your stack, the data or model in play, and whether the AI Act or Act 25.326 apply. You leave with clear priorities.",
        },
        {
          q: "Do you work with HR teams?",
          a: "Yes. Especially when AI is used in hiring, evaluation, or payroll systems.",
        },
        {
          q: "How long does a diagnosis take?",
          a: "Between one and three weeks depending on scope. We agree in the first call.",
        },
        {
          q: "How do you bill?",
          a: "Scoped projects. You get written scope and timeline before we start.",
        },
      ],
    },
    contact: {
      title: "Let’s talk",
      lead: "Tell me in one line which AI or data is at stake.",
      name: "Name",
      email: "Email",
      message: "Message",
      submit: "Send message",
      privacy: "By sending, you accept the",
      privacyLink: "privacy notice",
      whatsapp: "Or message on WhatsApp",
      errorRequired: "Please complete this field.",
      errorEmail: "Enter a valid email.",
    },
    footer: {
      latin: "Ubi societas, ibi ius",
      translation: "Where there is society, there is law.",
      cta: "Message me on WhatsApp",
      tagline: "AI and data governance",
      columns: {
        nav: "Navigation",
        services: "Services",
        resources: "Resources",
        company: "Company",
      },
    },
  },
} as const;

export function t(locale: Locale) {
  return copy[locale];
}
