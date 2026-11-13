export type Locale = "es" | "en";

export type PracticeItem = {
  id: string;
  title: { es: string; en: string };
  keyword: { es: string; en: string };
  body: { es: string; en: string };
  image: string;
  imageAlt: { es: string; en: string };
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
  location: {
    es: "Puerto Madryn, Chubut · Argentina",
    en: "Puerto Madryn, Chubut · Argentina",
  },
};

export const practices: PracticeItem[] = [
  {
    id: "ia",
    title: {
      es: "Regulación y compliance de IA",
      en: "AI regulation & compliance",
    },
    keyword: { es: "AI Act", en: "AI Act" },
    body: {
      es: "Marcos internacionales y el AI Act europeo para equipos que operan con la UE.",
      en: "International frameworks and the EU AI Act for teams operating with Europe.",
    },
    image: "/illustrations/ionic-capital.jpg",
    imageAlt: {
      es: "Grabado de un capitel jónico",
      en: "Engraving of an Ionic capital",
    },
  },
  {
    id: "datos",
    title: {
      es: "Protección de datos personales",
      en: "Personal data protection",
    },
    keyword: { es: "Ley 25.326", en: "Act 25.326" },
    body: {
      es: "Ley 25.326 y regímenes comparados para productos que tratan datos.",
      en: "Argentine Act 25.326 and comparative regimes for data-driven products.",
    },
    image: "/illustrations/bronze-tablet.jpg",
    imageAlt: {
      es: "Grabado de una tabla con inscripción latina",
      en: "Engraving of a tablet with Latin inscription",
    },
  },
  {
    id: "contratos",
    title: {
      es: "Contratos tecnológicos",
      en: "Technology contracts",
    },
    keyword: { es: "SaaS", en: "SaaS" },
    body: {
      es: "SaaS, licencias de software y acuerdos entre producto, proveedores y clientes.",
      en: "SaaS, software licenses, and agreements across product, vendors, and clients.",
    },
    image: "/illustrations/roman-column.jpg",
    imageAlt: {
      es: "Grabado de una columna romana estriada",
      en: "Engraving of a fluted Roman column",
    },
  },
  {
    id: "pi",
    title: {
      es: "Propiedad intelectual e IA",
      en: "IP and generative AI",
    },
    keyword: { es: "Autoría", en: "Authorship" },
    body: {
      es: "Contenido generado por IA, derechos de autor y límites de uso.",
      en: "AI-generated content, copyright, and usage boundaries.",
    },
    image: "/illustrations/corinthian-fragment.jpg",
    imageAlt: {
      es: "Grabado de un fragmento de capitel corintio",
      en: "Engraving of a Corinthian capital fragment",
    },
  },
  {
    id: "algoritmos",
    title: {
      es: "Responsabilidad algorítmica",
      en: "Algorithmic liability",
    },
    keyword: { es: "Decisión", en: "Decision" },
    body: {
      es: "Riesgos de sistemas automatizados y criterios de atribución de responsabilidad.",
      en: "Risks of automated systems and criteria for attributing liability.",
    },
    image: "/illustrations/roman-arch.jpg",
    imageAlt: {
      es: "Grabado de un arco romano",
      en: "Engraving of a Roman arch",
    },
  },
  {
    id: "espacial",
    title: {
      es: "Legal Tech y Derecho Espacial",
      en: "Legal Tech & Space Law",
    },
    keyword: { es: "Órbita", en: "Orbit" },
    body: {
      es: "Área de interés: herramientas jurídicas digitales y el régimen del espacio ultraterrestre.",
      en: "Area of interest: legal tech tools and the law of outer space.",
    },
    image: "/illustrations/armillary-sphere.jpg",
    imageAlt: {
      es: "Grabado de una esfera armilar",
      en: "Engraving of an armillary sphere",
    },
  },
];

export const insights: InsightItem[] = [
  {
    slug: "fundamentos-clasicos",
    date: "2026-11-01",
    title: {
      es: "Fundamentos clásicos, problemas nuevos",
      en: "Classical foundations, new problems",
    },
    tag: { es: "Ensayo", en: "Essay" },
    excerpt: {
      es: "Por qué el Derecho Romano sigue siendo útil para pensar IA, datos y responsabilidad.",
      en: "Why Roman law still helps us think about AI, data, and liability.",
    },
  },
  {
    slug: "ai-act-lectura-argentina",
    date: "2026-10-12",
    title: {
      es: "AI Act: una lectura desde Argentina",
      en: "The AI Act: a reading from Argentina",
    },
    tag: { es: "Regulación", en: "Regulation" },
    excerpt: {
      es: "Notas breves sobre extraterritorialidad y compliance para equipos locales.",
      en: "Short notes on extraterritorial reach and compliance for local teams.",
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
      areas: "Áreas",
      metodo: "Método",
      sobre: "Sobre mí",
      insights: "Insights",
      contacto: "Contacto",
    },
    hero: {
      wordTop: "Derecho",
      wordBottom: "inteligente",
      subtitle:
        "Orientación legal en Inteligencia Artificial, datos y tecnología.",
      cta: "Conversemos",
      note: "Fundamentos clásicos, problemas nuevos.",
    },
    areas: {
      title: "Áreas",
      lead: "Cada tema con su elemento romano. El trazo naranja marca la palabra clave.",
    },
    method: {
      title: "Método",
      lead: "Tres pasos. Línea clara.",
      steps: [
        {
          name: "Diagnóstico",
          text: "Mapear el riesgo real del producto, el dato o el contrato.",
        },
        {
          name: "Estrategia",
          text: "Definir el marco aplicable y las decisiones que importan.",
        },
        {
          name: "Implementación",
          text: "Bajar a cláusulas, procesos y documentación usable.",
        },
      ],
    },
    about: {
      title: "Sobre mí",
      bio: "Soy Emiliano Menardo. Cursando Abogacía en la Universidad de Palermo, desde Puerto Madryn, Chubut. Me interesa el cruce entre Derecho Romano, tecnología e Inteligencia Artificial — y, como área de exploración, el Derecho Espacial.",
      formation: "Formación",
      formationItems: [
        "Abogacía — Universidad de Palermo",
        "Enfoque en Derecho y Tecnología / IA",
        "Interés en Legal Tech y Derecho Espacial",
      ],
      context:
        "Experiencia profesional previa en operaciones de HR y sistemas de nómina (contexto laboral, no servicio jurídico).",
      disclaimer:
        "Aún no hay matrícula profesional publicada. Este sitio no ofrece representación letrada ni constituye publicidad de estudio jurídico.",
    },
    insights: {
      title: "Publicaciones",
      lead: "Notas editoriales. Poca frecuencia, texto corto.",
      read: "Leer",
    },
    quote: {
      latin: "Ubi societas, ibi ius",
      translation: "Donde hay sociedad, hay derecho.",
    },
    contact: {
      title: "Contacto",
      lead: "Nombre, email y una consulta breve.",
      name: "Nombre",
      email: "Email",
      message: "Consulta",
      submit: "Enviar",
      privacy: "Al enviar, aceptás el aviso de privacidad.",
      privacyLink: "Aviso de privacidad",
      social: "También en",
    },
    footer: {
      rights: "Emiliano Menardo",
      tagline: "Derecho · Tecnología · IA",
    },
    article: {
      back: "Volver",
      published: "Publicado",
    },
  },
  en: {
    nav: {
      areas: "Areas",
      metodo: "Method",
      sobre: "About",
      insights: "Insights",
      contacto: "Contact",
    },
    hero: {
      wordTop: "Smart",
      wordBottom: "law",
      subtitle: "Legal guidance on Artificial Intelligence, data, and technology.",
      cta: "Let’s talk",
      note: "Classical foundations, new problems.",
    },
    areas: {
      title: "Areas",
      lead: "Each topic with its Roman element. The orange stroke marks the keyword.",
    },
    method: {
      title: "Method",
      lead: "Three steps. A clean line.",
      steps: [
        {
          name: "Diagnosis",
          text: "Map the real risk in the product, the data, or the contract.",
        },
        {
          name: "Strategy",
          text: "Define the applicable frame and the decisions that matter.",
        },
        {
          name: "Implementation",
          text: "Translate into clauses, processes, and usable documentation.",
        },
      ],
    },
    about: {
      title: "About",
      bio: "I’m Emiliano Menardo. Studying Law at Universidad de Palermo, based in Puerto Madryn, Chubut. I work at the intersection of Roman law, technology, and Artificial Intelligence — with Space Law as an area of interest.",
      formation: "Background",
      formationItems: [
        "Law degree in progress — Universidad de Palermo",
        "Focus on Law & Technology / AI",
        "Interest in Legal Tech and Space Law",
      ],
      context:
        "Prior professional experience in HR operations and payroll systems (professional context, not a legal service).",
      disclaimer:
        "No professional bar registration is published yet. This site does not offer legal representation or advertise a law firm.",
    },
    insights: {
      title: "Insights",
      lead: "Editorial notes. Low frequency, short text.",
      read: "Read",
    },
    quote: {
      latin: "Ubi societas, ibi ius",
      translation: "Where there is society, there is law.",
    },
    contact: {
      title: "Contact",
      lead: "Name, email, and a short note.",
      name: "Name",
      email: "Email",
      message: "Message",
      submit: "Send",
      privacy: "By sending, you accept the privacy notice.",
      privacyLink: "Privacy notice",
      social: "Also on",
    },
    footer: {
      rights: "Emiliano Menardo",
      tagline: "Law · Technology · AI",
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
