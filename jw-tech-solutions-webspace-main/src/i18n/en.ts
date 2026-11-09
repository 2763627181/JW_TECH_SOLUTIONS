import { serviceImages } from "@/config/siteContent";

// English is the default language of the site and defines the shape
// (`Dictionary`) that every other language must follow.
export const en = {
  meta: {
    title: "JW Tech Solutions - Digital Innovation For Your Business",
    description:
      "Web development, mobile apps and custom software. We turn ideas into technology solutions that drive your business growth.",
  },

  language: {
    label: "Change language",
  },

  nav: {
    home: "Home",
    about: "About Us",
    services: "Services",
    contact: "Contact",
    cta: "Get a Quote",
    openMenu: "Open menu",
  },

  home: {
    tagline: "JW TECH SOLUTIONS",
    title: "Digital Innovation For Your Business",
    subtitle:
      "Web development, mobile apps, eCommerce and automation with a modern, secure and scalable approach.",
    primaryCta: "Get a Quote",
    secondaryCta: "View Services",
    bullets: [
      "Modern, optimized design",
      "Social media and tools integration",
      "Analytics and growth",
      "Automation and security",
    ],
    slideLabel: "Slide",
    servicesTitle: "Services",
    servicesSubtitle:
      "Modern solutions with premium aesthetics, animations and real performance.",
    viewAll: "View all",
    quote: "Get Quote",
    services: [
      {
        title: "Websites",
        desc: "Modern, fast websites ready to sell.",
        image: serviceImages.web,
        tags: ["Vite/React", "SEO", "Performance"],
      },
      {
        title: "Mobile Apps",
        desc: "iOS/Android with premium UI and a smooth experience.",
        image: serviceImages.mobile,
        tags: ["UX", "Notifications", "Scalable"],
      },
      {
        title: "eCommerce",
        desc: "Your online store built from scratch and automated.",
        image: serviceImages.ecommerce,
        tags: ["Payments", "Inventory", "Automation"],
      },
      {
        title: "Cybersecurity",
        desc: "Security layers and real best practices.",
        image: serviceImages.security,
        tags: ["Hardening", "Audit", "Protection"],
      },
    ],
  },

  servicesPage: {
    badge: "JW TECH SOLUTIONS",
    title: "💻Technology that drives your business.",
    subtitle: "We design and build reliable solutions that drive your business.⌨️",
    primaryCta: "Get a Quote",
    secondaryCta: "View Services",

    filterTitle: "Explore by category",
    filterSubtitle: "Pick a focus or browse the full catalog.",
    filterLabel: "Filter",

    processTitle: "Our Process",
    processSubtitle: "A clear workflow that guarantees quality, speed and results.",

    ctaTitle: "Ready to transform your business?",
    ctaSubtitle:
      "Tell us your idea and we'll propose a modern, scalable solution with a premium look and feel.",
    ctaPrimary: "Start Project",

    request: "Request",

    // `id` is language-independent (used for filtering/icons); `label` is what the user sees.
    categories: [
      { id: "all", label: "All" },
      { id: "Web", label: "Web" },
      { id: "Mobile", label: "Mobile" },
      { id: "Software", label: "Software" },
      { id: "Database", label: "Database" },
      { id: "Security", label: "Security" },
      { id: "Design", label: "Design" },
    ],
  },

  // `category` doubles as the service id (one service per category).
  servicesCatalog: [
    {
      category: "Web",
      title: "Web Development",
      description: "Modern, fast and responsive websites built with the latest technologies.",
      features: ["React/Next.js", "Landing pages", "CMS", "SEO + Performance"],
      price: "Custom quote",
      image: serviceImages.web,
    },
    {
      category: "Mobile",
      title: "Mobile Apps",
      description: "Native and hybrid iOS and Android applications with premium UX.",
      features: ["React Native", "Flutter", "Store publishing", "Push notifications"],
      price: "Custom quote",
      image: serviceImages.mobile,
    },
    {
      category: "Software",
      title: "Custom Software",
      description: "Tailor-made systems to automate and optimize business processes.",
      features: ["ERP/CRM", "REST APIs", "Integrations", "Scalable architecture"],
      price: "Custom quote",
      image: serviceImages.software,
    },
    {
      category: "Database",
      title: "Databases",
      description: "Design, optimization and migration of robust, secure databases.",
      features: ["MySQL/PostgreSQL", "MongoDB", "Cloud DB", "Backups + monitoring"],
      price: "Custom quote",
      image: serviceImages.database,
    },
    {
      category: "Security",
      title: "Cybersecurity",
      description: "Comprehensive protection for your digital infrastructure and reputation.",
      features: ["Audits", "SSL/TLS", "Hardening", "Basic pentesting"],
      price: "Custom quote",
      image: serviceImages.security,
    },
    {
      category: "Design",
      title: "UI/UX Design",
      description: "Intuitive, attractive and conversion-focused designs.",
      features: ["Wireframes", "Prototypes", "Design systems", "User testing"],
      price: "Custom quote",
      image: serviceImages.design,
    },
  ],

  servicesProcess: [
    {
      step: "01",
      title: "Analysis",
      description:
        "We assess needs, goals and environment to define the ideal approach and the right scope.",
    },
    {
      step: "02",
      title: "Proposal",
      description:
        "We design a tailored solution with clear deliverables, timelines and budget from the start.",
    },
    {
      step: "03",
      title: "Development",
      description:
        "We iterate with an agile methodology, validating progress and safeguarding quality, performance and security.",
    },
    {
      step: "04",
      title: "Delivery",
      description:
        "We deploy, train and support you for smooth adoption and continuous improvement.",
    },
  ],

  clients: {
    badge: "Client Portfolio",
    title: "Companies That Trust Us",
    description:
      "We're proud to work with leading organizations that have chosen our technology solutions to drive their digital growth. Below is a selection of our most notable clients.",
    cta: "Start Project",
  },

  about: {
    heroTitle: "Meet JW Tech Solutions 🚀:",
    posterAlt: "JW Tech Solutions Poster",
    youtubeSoon: "YOUTUBE CHANNEL COMING SOON..",

    historyTitle: "The Future of Technology:",
    historyP1:
      "We live in an era where everything is connected, where a company can operate autonomously from the palm of a hand. In this context, technology is not something to fear or worry about, but a tool that, when well understood, opens up an infinite universe of opportunities.",
    historyP2:
      "At JW TECH we cultivate a culture based on innovation and constant learning. We don't limit ourselves to software development as an end in itself; we aspire to be one of the most complete technology solutions companies on the market. Our path takes us further, all the way to creating fully functional artificial intelligence models tailored to each business.",
    historyP3:
      "We build custom, scalable and secure systems that evolve with your needs. Technology is not a luxury: it's a smart investment.",
    historyCaption: "Digital solutions ready to scale.",

    valuesTitle: "Our Values",
    valuesSubtitle: "What we believe guides what we create.",
    mission: {
      title: "Mission",
      description:
        "To drive the digital transformation of businesses with innovative, efficient and customized solutions that create real value.",
    },
    vision: {
      title: "Vision",
      description:
        "To be a leading technology solutions company, recognized for excellence, creativity and impact on our clients' growth.",
    },
    values: {
      title: "Values",
      description:
        "Excellence, innovation, commitment, integrity and a human focus in every project we build.",
    },

    teamTitle: "Our Team",
    teamSubtitle: "Passionate people, proven experience and a real commitment to your growth.",
    team: [
      {
        name: "Jamil Williams",
        role: "CEO & Founder",
        description:
          "Specialist in full-stack development, agile methodologies and technology leadership.",
      },
      {
        name: "Joshua Williams",
        role: "Lead Developer",
        description: "Specialist in full-stack development and agile methodologies.",
      },
      {
        name: "Genesis Diaz",
        role: "Lead Designer",
        description:
          "Leads solid, consistent visual identities that elevate the value of every brand.",
      },
      {
        name: "Carlos Miguel",
        role: "Lead Developer",
        description: "Expert in software architecture and emerging technologies.",
      },
      {
        name: "Kevin Santana",
        role: "COO & Front-End Developer",
        description:
          "Oversees day-to-day operations while crafting polished, high-performance front-end experiences.",
      },
    ],
  },

  contact: {
    badge: "CONTACT",
    heroTitle: "📞 Let's talk about your project:",
    heroSubtitle: "Have an idea in mind? We'll help you turn it into reality.",
    sendMessage: "Send message",
    scheduleCall: "Schedule a call",
    posterAlt: "JW Tech Solutions Contact Poster",
    posterFooter: "Fast response · No-obligation quote · Support",

    info: [
      { title: "Email", value: "jwtechdr@gmail.com", subtitle: "Response in under 24 hours" },
      { title: "Phone", value: "+1 (890)-761-2875", subtitle: "24/7 support" },
      { title: "Office", value: "Santo Domingo, DR", subtitle: "Appointments available" },
      { title: "Hours", value: "Mon - Fri: 24 hours", subtitle: "Sat: 10:00 AM - 2:00 PM" },
    ],

    form: {
      title: "Send us a message",
      subtitle: "Fill out the form and we'll reply within 24 hours.",
      name: "Full name: *",
      namePlaceholder: "Your name",
      email: "Email: *",
      emailPlaceholder: "you@email.com",
      phone: "Phone:",
      company: "Company:",
      companyPlaceholder: "Company/Group/Personal",
      service: "Service of interest: *",
      servicePlaceholder: "Select a service",
      message: "Message: *",
      messagePlaceholder: "Tell us about your project…",
      submit: "Send message",
      submitting: "Sending...",
    },

    // `id` is language-independent so the selection survives a language switch.
    serviceOptions: [
      { id: "web", label: "Web Development" },
      { id: "mobile", label: "Mobile Applications" },
      { id: "software", label: "Custom Software" },
      { id: "consulting", label: "Technical Consulting" },
      { id: "ecommerce", label: "E-commerce" },
      { id: "other", label: "Other" },
    ],

    prefillMessage: (service: string) =>
      `Hi, I'm interested in the ${service} service. I'd like to receive more information.`,

    toastSuccessTitle: "Message sent!",
    toastSuccessDescription: "We'll get in touch with you soon.",
    toastErrorTitle: "Something went wrong",
    toastErrorDescription: "Please try again later or use another way to contact us.",

    whyTitle: "Why choose us?",
    whyItems: [
      "Fast response in under 24 hours.",
      "No-obligation quotes.",
      "Specialized and certified team.",
      "24/7 technical support.",
      "Guarantee on all our projects.",
    ],
    writeEmail: "Write an email",

    finalTitle: "Prefer a direct call?",
    finalSubtitle: "Schedule a free 30-minute consultation to discuss your project.",
    finalCta: "Schedule Call",
  },

  projects: {
    heroTitle: "🛠️Our Projects:",
    heroSubtitle: "Discover the successful projects we've developed for our clients:",
    categories: [
      { id: "all", label: "All" },
      { id: "web", label: "Web" },
      { id: "mobile", label: "Mobile" },
      { id: "ecommerce", label: "E-commerce" },
      { id: "enterprise", label: "Enterprise" },
    ],
    status: {
      completed: "Completed",
      inDevelopment: "In development",
    },
    technologies: "Technologies:",
    features: "Features:",
    moreFeatures: (n: number) => `+${n} more...`,
    viewProject: "View Project",
    // Joined by `id` with the language-independent data in Projects.tsx
    items: [
      {
        id: 1,
        title: "E-commerce TechStore",
        description:
          "Complete e-commerce platform with inventory management, payments and real-time analytics.",
        features: ["Shopping cart", "Secure payments", "Admin panel", "Analytics"],
      },
      {
        id: 2,
        title: "App Delivery Express",
        description:
          "Mobile app for food delivery with real-time tracking and a rating system.",
        features: ["GPS tracking", "Notifications", "Ratings", "Chat"],
      },
      {
        id: 3,
        title: "Industrial ERP System",
        description:
          "Enterprise system for resource management, inventory, sales and analytical reporting.",
        features: ["Inventory management", "CRM", "Reports", "Invoicing"],
      },
      {
        id: 4,
        title: "Online Education Portal",
        description:
          "Virtual education platform with courses, assessments and student progress tracking.",
        features: ["Video conferencing", "Assessments", "Certificates", "Dashboard"],
      },
      {
        id: 5,
        title: "App Fintech Banking",
        description:
          "Mobile banking app with transfers, investments and personal financial analysis.",
        features: ["Transfers", "Investments", "Analytics", "Security"],
      },
      {
        id: 6,
        title: "Marketplace B2B",
        description:
          "B2B platform connecting suppliers with companies, with a quotation and contract system.",
        features: ["Quotes", "Contracts", "Marketplace", "Ratings"],
      },
    ],
    stats: {
      completed: "Completed Projects",
      satisfaction: "Client Satisfaction",
      support: "Technical Support",
      technicians: "Professional Technicians Available",
    },
  },

  notFound: {
    message: "Oops! Page not found",
    back: "Return to Home",
  },
};

export type Dictionary = typeof en;
