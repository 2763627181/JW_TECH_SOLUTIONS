import { serviceImages } from "@/config/siteContent";
import type { Dictionary } from "./en";

// Spanish: mismo contenido original del sitio. Si falta alguna clave
// respecto a `en.ts`, TypeScript lo marca (tipado como `Dictionary`).
export const es: Dictionary = {
  meta: {
    title: "JW Tech Solutions - Innovación Digital Para Tu Empresa",
    description:
      "Desarrollo web, apps móviles y software personalizado. Transformamos ideas en soluciones tecnológicas que impulsan el crecimiento de tu negocio.",
  },

  language: {
    label: "Cambiar idioma",
  },

  nav: {
    home: "Inicio",
    about: "Nosotros",
    services: "Servicios",
    contact: "Contacto",
    cta: "Cotizar Proyecto",
    openMenu: "Abrir menú",
  },

  home: {
    tagline: "JW TECH SOLUTIONS",
    title: "Innovación Digital Para Tu Empresa",
    subtitle:
      "Desarrollo web, apps móviles, eCommerce y automatización con un enfoque moderno, seguro y escalable.",
    primaryCta: "Cotizar Proyecto",
    secondaryCta: "Ver Servicios",
    bullets: [
      "Diseño moderno y optimizado",
      "Integración con redes sociales y herramientas",
      "Analítica y crecimiento",
      "Automatización y seguridad",
    ],
    slideLabel: "Diapositiva",
    servicesTitle: "Servicios",
    servicesSubtitle:
      "Soluciones modernas con estética premium, animaciones y rendimiento real.",
    viewAll: "Ver todos",
    quote: "Cotizar",
    services: [
      {
        title: "Páginas Web",
        desc: "Webs modernas, rápidas y listas para vender.",
        image: serviceImages.web,
        tags: ["Vite/React", "SEO", "Performance"],
      },
      {
        title: "Apps Móviles",
        desc: "iOS/Android con UI premium y experiencia fluida.",
        image: serviceImages.mobile,
        tags: ["UX", "Notificaciones", "Escalable"],
      },
      {
        title: "eCommerce",
        desc: "Tu tienda online desde cero y automatizada.",
        image: serviceImages.ecommerce,
        tags: ["Pagos", "Inventario", "Automatización"],
      },
      {
        title: "Ciberseguridad",
        desc: "Capas de seguridad y buenas prácticas reales.",
        image: serviceImages.security,
        tags: ["Hardening", "Auditoría", "Protección"],
      },
    ],
  },

  servicesPage: {
    badge: "JW TECH SOLUTIONS",
    title: "💻Tecnología que impulsa tu negocio.",
    subtitle:
      "Diseñamos y desarrollamos soluciones confiables que impulsan tu negocio.⌨️",
    primaryCta: "Cotizar Proyecto",
    secondaryCta: "Ver Servicios",

    filterTitle: "Explora por categoría",
    filterSubtitle: "Elige un enfoque o revisa todo el catálogo.",
    filterLabel: "Filtrar",

    processTitle: "Nuestro Proceso",
    processSubtitle: "Un flujo claro para garantizar calidad, velocidad y resultados.",

    ctaTitle: "¿Listo para transformar tu negocio?",
    ctaSubtitle:
      "Cuéntanos tu idea y te proponemos una solución moderna, escalable y con estética premium.",
    ctaPrimary: "Iniciar Proyecto",

    request: "Solicitar",

    categories: [
      { id: "all", label: "Todos" },
      { id: "Web", label: "Web" },
      { id: "Mobile", label: "Mobile" },
      { id: "Software", label: "Software" },
      { id: "Database", label: "Database" },
      { id: "Security", label: "Security" },
      { id: "Design", label: "Design" },
    ],
  },

  servicesCatalog: [
    {
      category: "Web",
      title: "Desarrollo Web",
      description: "Sitios web modernos, rápidos y responsivos usando las últimas tecnologías.",
      features: ["React/Next.js", "Landing pages", "CMS", "SEO + Performance"],
      price: "Cotización personalizada",
      image: serviceImages.web,
    },
    {
      category: "Mobile",
      title: "Apps Móviles",
      description: "Aplicaciones nativas e híbridas para iOS y Android con UX premium.",
      features: ["React Native", "Flutter", "Publicación en stores", "Push notifications"],
      price: "Cotización personalizada",
      image: serviceImages.mobile,
    },
    {
      category: "Software",
      title: "Software Personalizado",
      description: "Sistemas a medida para automatizar y optimizar procesos empresariales.",
      features: ["ERP/CRM", "APIs REST", "Integraciones", "Arquitectura escalable"],
      price: "Cotización personalizada",
      image: serviceImages.software,
    },
    {
      category: "Database",
      title: "Base de Datos",
      description: "Diseño, optimización y migración de bases de datos robustas y seguras.",
      features: ["MySQL/PostgreSQL", "MongoDB", "Cloud DB", "Backups + monitoreo"],
      price: "Cotización personalizada",
      image: serviceImages.database,
    },
    {
      category: "Security",
      title: "Ciberseguridad",
      description: "Protección integral para tu infraestructura digital y reputación.",
      features: ["Auditorías", "SSL/TLS", "Hardening", "Pentesting básico"],
      price: "Cotización personalizada",
      image: serviceImages.security,
    },
    {
      category: "Design",
      title: "UI/UX Design",
      description: "Diseños intuitivos, atractivos y centrados en conversión.",
      features: ["Wireframes", "Prototipos", "Design systems", "User testing"],
      price: "Cotización personalizada",
      image: serviceImages.design,
    },
  ],

  servicesProcess: [
    {
      step: "01",
      title: "Análisis",
      description:
        "Evaluamos necesidades, metas y entorno para definir el enfoque ideal y el alcance correcto.",
    },
    {
      step: "02",
      title: "Propuesta",
      description:
        "Diseñamos una solución a medida con entregables, tiempos y presupuesto claros desde el inicio.",
    },
    {
      step: "03",
      title: "Desarrollo",
      description:
        "Iteramos con metodología ágil, validando avances y cuidando calidad, rendimiento y seguridad.",
    },
    {
      step: "04",
      title: "Entrega",
      description:
        "Desplegamos, capacitamos y damos soporte para una adopción fluida y mejoras continuas.",
    },
  ],

  clients: {
    badge: "Portafolio de Clientes",
    title: "Empresas que Confían en Nosotros",
    description:
      "Nos enorgullece colaborar con organizaciones líderes que han elegido nuestras soluciones tecnológicas para impulsar su crecimiento digital. A continuación, presentamos una selección de nuestros clientes más destacados.",
    cta: "Iniciar Proyecto",
  },

  about: {
    heroTitle: "Conoce a JW Tech Solutions 🚀:",
    posterAlt: "JW Tech Solutions Poster",
    youtubeSoon: "CANAL DE YOUTUBE PRÓXIMAMENTE..",

    historyTitle: "El Futuro de la Tecnología:",
    historyP1:
      "Vivimos en una era donde todo está conectado, donde una empresa puede operar de forma autónoma desde la palma de una mano. En este contexto, la tecnología no es algo que deba generar miedo ni preocupación, sino una herramienta que, bien comprendida, abre un universo infinito de oportunidades.",
    historyP2:
      "En JW TECH cultivamos una cultura basada en la innovación y el aprendizaje constante. No nos limitamos al desarrollo de software como un fin en sí mismo; aspiramos a ser una de las empresas de soluciones tecnológicas más completas del mercado. Nuestro camino nos lleva más allá, hasta la creación de modelos de inteligencia artificial plenamente funcionales y diseñados a la medida de cada empresa.",
    historyP3:
      "Creamos sistemas personalizados, escalables y seguros que evolucionan con tus necesidades. La tecnología no es un lujo: es una inversión inteligente.",
    historyCaption: "Soluciones digitales listas para escalar.",

    valuesTitle: "Nuestros Valores",
    valuesSubtitle: "Lo que creemos guía lo que creamos.",
    mission: {
      title: "Misión",
      description:
        "Impulsar la transformación digital de las empresas con soluciones innovadoras, eficientes y personalizadas que generen valor real.",
    },
    vision: {
      title: "Visión",
      description:
        "Ser una empresa líder en soluciones tecnológicas, reconocida por excelencia, creatividad e impacto en el crecimiento de nuestros clientes.",
    },
    values: {
      title: "Valores",
      description:
        "Excelencia, innovación, compromiso, integridad y enfoque humano en cada proyecto que construimos.",
    },

    teamTitle: "Nuestro Equipo",
    teamSubtitle:
      "Personas apasionadas, experiencia comprobada y compromiso real con tu crecimiento.",
    team: [
      {
        name: "Jamil Williams",
        role: "CEO & Fundador",
        description:
          "Especialista en desarrollo Full-stack, metodologías ágiles y liderazgo tecnológico.",
      },
      {
        name: "Joshua Williams",
        role: "Lead Developer",
        description: "Especialista en desarrollo full-stack y metodologías ágiles.",
      },
      {
        name: "Genesis Diaz",
        role: "Lead Designer",
        description:
          "Lidera identidades visuales sólidas y coherentes que elevan el valor de cada marca.",
      },
      {
        name: "Carlos Miguel",
        role: "Lead Developer",
        description: "Experto en arquitectura de software y tecnologías emergentes.",
      },
      {
        name: "Kevin Santana",
        role: "COO y Desarrollador Front-End",
        description:
          "Supervisa las operaciones del día a día mientras desarrolla experiencias front-end pulidas y de alto rendimiento.",
      },
    ],
  },

  contact: {
    badge: "CONTACTO",
    heroTitle: "📞 Hablemos de tu proyecto:",
    heroSubtitle: "¿Tienes una idea en mente? Te ayudamos a convertirla en realidad.",
    sendMessage: "Enviar mensaje",
    scheduleCall: "Agendar llamada",
    posterAlt: "JW Tech Solutions Contact Poster",
    posterFooter: "Respuesta rápida · Presupuesto sin compromiso · Soporte",

    info: [
      { title: "Email", value: "jwtechdr@gmail.com", subtitle: "Respuesta en menos de 24 horas" },
      { title: "Teléfono", value: "+1 (890)-761-2875", subtitle: "Soporte 24/7" },
      { title: "Oficina", value: "Santo Domingo, RD", subtitle: "Citas disponibles" },
      { title: "Horarios", value: "Lun - Vie: 24 horas", subtitle: "Sáb: 10:00 AM - 2:00 PM" },
    ],

    form: {
      title: "Envíanos un mensaje",
      subtitle: "Completa el formulario y te respondemos en menos de 24 horas.",
      name: "Nombre completo: *",
      namePlaceholder: "Tu nombre",
      email: "Email: *",
      emailPlaceholder: "tu@email.com",
      phone: "Teléfono:",
      company: "Empresa:",
      companyPlaceholder: "Empresa/Grupo/Personal",
      service: "Servicio de interés: *",
      servicePlaceholder: "Selecciona un servicio",
      message: "Mensaje: *",
      messagePlaceholder: "Cuéntanos sobre tu proyecto…",
      submit: "Enviar mensaje",
      submitting: "Enviando...",
    },

    serviceOptions: [
      { id: "web", label: "Desarrollo Web" },
      { id: "mobile", label: "Aplicaciones Móviles" },
      { id: "software", label: "Software Personalizado" },
      { id: "consulting", label: "Consultoría Técnica" },
      { id: "ecommerce", label: "E-commerce" },
      { id: "other", label: "Otro" },
    ],

    prefillMessage: (service: string) =>
      `Hola, estoy interesado en el servicio de ${service}. Me gustaría recibir más información.`,

    toastSuccessTitle: "¡Mensaje enviado!",
    toastSuccessDescription: "Nos pondremos en contacto contigo pronto.",
    toastErrorTitle: "Ocurrió un error",
    toastErrorDescription: "Intenta de nuevo más tarde o usa otro medio de contacto.",

    whyTitle: "¿Por qué elegirnos?",
    whyItems: [
      "Respuesta rápida en menos de 24 horas.",
      "Presupuestos sin compromiso.",
      "Equipo especializado y certificado.",
      "Soporte técnico 24/7.",
      "Garantía en todos nuestros proyectos.",
    ],
    writeEmail: "Escribir correo",

    finalTitle: "¿Prefieres una llamada directa?",
    finalSubtitle: "Agenda una consulta gratuita de 30 minutos para discutir tu proyecto.",
    finalCta: "Agendar Llamada",
  },

  projects: {
    heroTitle: "🛠️Nuestros Proyectos:",
    heroSubtitle: "Descubre los proyectos exitosos que hemos desarrollado para nuestros clientes:",
    categories: [
      { id: "all", label: "Todos" },
      { id: "web", label: "Web" },
      { id: "mobile", label: "Móvil" },
      { id: "ecommerce", label: "E-commerce" },
      { id: "enterprise", label: "Empresarial" },
    ],
    status: {
      completed: "Completado",
      inDevelopment: "En desarrollo",
    },
    technologies: "Tecnologías:",
    features: "Características:",
    moreFeatures: (n: number) => `+${n} más...`,
    viewProject: "Ver Proyecto",
    items: [
      {
        id: 1,
        title: "E-commerce TechStore",
        description:
          "Plataforma de comercio electrónico completa con gestión de inventario, pagos y analytics en tiempo real.",
        features: ["Carrito de compras", "Pagos seguros", "Panel administrativo", "Analytics"],
      },
      {
        id: 2,
        title: "App Delivery Express",
        description:
          "Aplicación móvil para delivery de comida con tracking en tiempo real y sistema de calificaciones.",
        features: ["Tracking GPS", "Notificaciones", "Calificaciones", "Chat"],
      },
      {
        id: 3,
        title: "Sistema ERP Industrial",
        description:
          "Sistema empresarial para gestión de recursos, inventario, ventas y reportes analíticos.",
        features: ["Gestión inventario", "CRM", "Reportes", "Facturación"],
      },
      {
        id: 4,
        title: "Portal Educativo Online",
        description:
          "Plataforma de educación virtual con cursos, evaluaciones y seguimiento de progreso estudiantil.",
        features: ["Videoconferencias", "Evaluaciones", "Certificados", "Dashboard"],
      },
      {
        id: 5,
        title: "App Fintech Banking",
        description:
          "Aplicación bancaria móvil con transferencias, inversiones y análisis financiero personal.",
        features: ["Transferencias", "Inversiones", "Analytics", "Seguridad"],
      },
      {
        id: 6,
        title: "Marketplace B2B",
        description:
          "Plataforma B2B para conectar proveedores con empresas, con sistema de cotizaciones y contratos.",
        features: ["Cotizaciones", "Contratos", "Marketplace", "Ratings"],
      },
    ],
    stats: {
      completed: "Proyectos Completados",
      satisfaction: "Satisfacción Cliente",
      support: "Soporte Técnico",
      technicians: "Técnicos Profesionales Disponibles",
    },
  },

  notFound: {
    message: "¡Ups! Página no encontrada",
    back: "Volver al inicio",
  },
};
