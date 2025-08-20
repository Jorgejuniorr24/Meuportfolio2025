// src/contexts/I18nContext.jsx
// Contexto para gerenciar idioma
import { createContext, useContext, useEffect, useMemo, useState } from "react";

const I18nContext = createContext(null);

const MESSAGES = {
  pt: {
    brand: "JorgeOliveira",
    nav: {
      home: "Início",
      about: "Sobre",
      portfolio: "Portfólio",
      services: "Serviços",
      contact: "Contato",
    },
    hero: {
      hello: "Olá, sou eu",
      name: "Jorge Oliveira",
      im: "E eu sou ",
      roles: [
        "Desenvolvedor Front-End",
        "Desenvolvedor Back-End",
        "Desenvolvedor FullStack",
      ],
      pitch:
        "Cada aplicação bem construída é uma prova de como a tecnologia pode transformar vidas positivamente.",
      aboutMe: "Sobre mim",
      download: "Baixar Currículo",
    },
    about: {
      methodologiesTitle: "Metodologias & Gestão",
      methodologiesMeta: "Gerenciamento de Projetos & Práticas Ágeis",
      frontendTitle: "Front-End",
      frontendMeta: "Dois anos",
      designTitle: "Designer",
      designMeta: "Dois anos",
      backendTitle: "Back-End",
      backendMeta: "Menos de 1 ano",
      toolsTitle: "Ferramentas & Testes",
      toolsMeta: "Em progresso",
      cloudTitle: "Nuvem & Deploy",
      cloudMeta: "Em progresso",
      methodologiesSkills: {
        scrum: "Scrum",
        kanban: "Kanban",
        agile: "Desenvolvimento Ágil",
      },
    },
    portfolio: {
      pageTitle: "Meu Portfólio",
      buttons: {
        demo: "Demonstração",
        github: "Ver Código",
        caseStudy: "Estudo de Caso",
      },
      projects: {
        fintech: {
          title: "Dashboard FinTech",
          description:
            "Plataforma completa de gestão financeira com análise em tempo real, processamento alto e arquitetura de microsserviços.",
        },
        ecommerce: {
          title: "Plataforma E-commerce",
          description:
            "Marketplace com pagamentos, logística inteligente e painel administrativo.",
        },
        restaurant: {
          title: "Site para Restaurante",
          description:
            "Site responsivo para restaurante com reservas online e cardápio interativo.",
        },
        landing: {
          title: "Landing Page",
          description:
            "Landing page de alta conversão com animações suaves, SEO e performance.",
        },
        finance: {
          title: "App de Finanças Pessoais",
          description:
            "App de finanças pessoais com IA para categorização automática e relatórios.",
        },
        rpa: {
          title: "Suíte de Automação RPA",
          description:
            "Automação robótica de processos para reduzir tempo em tarefas repetitivas.",
        },
        ai: {
          title: "Atendimento com IA",
          description:
            "Chatbots para atendimento com PLN e aprendizado contínuo.",
        },
        medical: {
          title: "ERP para Clínicas",
          description:
            "Gestão para clínicas: agenda, prontuário e faturamento.",
        },
        supply: {
          title: "ERP de Suprimentos",
          description:
            "ERP para suprimentos com estoque inteligente e previsão de demanda.",
        },
        beauty: {
          title: "Gestão para Salões",
          description:
            "Gestão para salões com agendamento online e controle de produtos.",
        },
        saas: {
          title: "Plataforma Micro SaaS",
          description:
            "Criação e deploy de micro SaaS com billing automático e analytics.",
        },
      },
    },
    services: {
      pageTitle: "Como posso ajudar seu projeto",
      pageDescription:
        "Desenvolvimento full-stack com foco em performance, acessibilidade e escala.",
      ariaLabel: "Lista de serviços oferecidos",
      uiDesign: {
        title: "Design de Interface do Usuário",
        subtitle: "Interfaces limpas, acessíveis e intuitivas",
        description:
          "Interfaces no Figma com Design System, tokens e protótipos navegáveis. Hand-off organizado para desenvolvimento, consistência e acessibilidade.",
        skills: ["Figma", "Design System", "Prototipagem", "User Research"],
        experience: "1+ ano",
        projects: "10+ designs",
        deliveryTime: "1–2 semanas",
        features: [
          "Design System",
          "Prototipagem interativa",
          "Tokens de design",
          "Grid e tipografia",
          "Hand-off no Figma",
          "Acessibilidade",
          "Componentes reutilizáveis",
        ],
      },
      fullstack: {
        title: "Desenvolvimento Full-Stack",
        subtitle: "Aplicações web completas que escalam",
        description:
          "Front-end com Angular, React e Next.js; back-end com Node.js/Python. Foco em performance, SEO, acessibilidade (WCAG) e arquitetura escalável. Integração de APIs e bancos de dados, pronto para CI/CD.",
        skills: ["Angular", "React", "Next.js", "TypeScript", "Node.js", "AWS"],
        experience: "2+ anos",
        projects: "27+ projetos",
        deliveryTime: "3–5 semanas",
        features: [
          "Design responsivo e Core Web Vitals",
          "SEO para Next.js/Angular",
          "Acessibilidade (WCAG AA)",
          "Integração REST/GraphQL",
          "Autenticação (JWT/OAuth)",
          "Observabilidade (logs/metrics)",
          "Pipeline CI/CD",
        ],
      },
      backend: {
        title: "Desenvolvimento Back-end",
        subtitle: "APIs rápidas, seguras e bem documentadas",
        description:
          "RESTful APIs em Node.js com PostgreSQL/MongoDB e cache, priorizando segurança, escalabilidade e testes. Documentação OpenAPI/Swagger e monitoramento.",
        skills: ["Node.js", "Python", "PostgreSQL", "JWT"],
        experience: "1+ ano",
        projects: "8+ projetos",
        deliveryTime: "2–4 semanas",
        features: [
          "Modelagem de dados",
          "Autorização por papéis (RBAC)",
          "Validação e rate limit",
          "Swagger/OpenAPI",
          "Cache/filas (Redis)",
          "Workers/automação em Python(RPA)",
          "Testes e tracing",
          "Observabilidade",
        ],
      },
    },
    contact: {
      pageTitle: "Entre em contato",
      pageDescription: "Fale comigo para iniciar seu projeto ou tirar dúvidas.",
      form: {
        name: "Seu nome",
        email: "Seu e-mail",
        message: "Sua mensagem",
        send: "Enviar",
        sending: "Enviando...",
        success: "Mensagem enviada com sucesso!",
        error: "Ocorreu um erro. Tente novamente.",
      },
      social: {
        title: "Minhas redes",
        linkedin: "LinkedIn",
        github: "GitHub",
        whatsapp: "WhatsApp",
        email: "E-mail",
      },
    },
    footer: {
      callToAction: {
        title: "Vamos criar algo incrível juntos?",
        description:
          "Transforme suas ideias em soluções digitais inovadoras que realmente se conectam com seu público e geram resultados excepcionais.",
        button: "Iniciar Projeto",
      },
      social: {
        title: "Conecte-se comigo",
        github: "Visite meu perfil no GitHub",
        linkedin: "Conecte-se comigo no LinkedIn",
      },
      copyright: "Todos os direitos reservados.",
    },
  },
  en: {
    brand: "JorgeOliveira",
    nav: {
      home: "Home",
      about: "About",
      portfolio: "Portfolio",
      services: "Services",
      contact: "Contact",
    },
    hero: {
      hello: "Hello, it's me",
      name: "Jorge Oliveira",
      im: "And I'm a ",
      roles: [
        "Front-End Developer",
        "Back-End Developer",
        "FullStack Developer",
      ],
      pitch:
        "Each well-crafted application is a testament to how technology can positively transform lives.",
      aboutMe: "About Me",
      download: "Download Resume",
    },
    about: {
      methodologiesTitle: "Methodologies & Management",
      methodologiesMeta: "Project Management & Agile Practices",
      frontendTitle: "Front-End",
      frontendMeta: "Two Years",
      designTitle: "Designer",
      designMeta: "Two Years",
      backendTitle: "Back-End",
      backendMeta: "Less than 1 year",
      toolsTitle: "Tools & Tests",
      toolsMeta: "In progress",
      cloudTitle: "Cloud & Deploy",
      cloudMeta: "In progress",
      methodologiesSkills: {
        scrum: "Scrum",
        kanban: "Kanban",
        agile: "Agile Development",
      },
    },
    portfolio: {
      pageTitle: "My Portfolio",
      buttons: {
        demo: "Demo",
        github: "View Code",
        caseStudy: "Case Study",
      },
      projects: {
        fintech: {
          title: "FinTech Dashboard",
          description:
            "Complete financial management platform with real-time analysis, high processing and microservices architecture.",
        },
        ecommerce: {
          title: "E-commerce Platform",
          description:
            "Marketplace with payments, intelligent logistics and administrative panel.",
        },
        restaurant: {
          title: "Restaurant Website",
          description:
            "Responsive restaurant website with online reservations and interactive menu.",
        },
        landing: {
          title: "Landing Page",
          description:
            "High conversion landing page with smooth animations, SEO and performance.",
        },
        finance: {
          title: "Personal Finance App",
          description:
            "Personal finance app with AI for automatic categorization and reports.",
        },
        rpa: {
          title: "RPA Business Suite",
          description:
            "Robotic process automation to reduce time on repetitive tasks.",
        },
        ai: {
          title: "AI Customer Service",
          description:
            "Chatbots for customer service with NLP and continuous learning.",
        },
        medical: {
          title: "Medical Clinic ERP",
          description:
            "Clinic management: schedule, medical records and billing.",
        },
        supply: {
          title: "Supply Chain ERP",
          description:
            "Supply ERP with intelligent inventory and demand forecasting.",
        },
        beauty: {
          title: "Beauty Salon Manager",
          description:
            "Salon management with online scheduling and product control.",
        },
        saas: {
          title: "Micro SaaS Platform",
          description:
            "Creation and deployment of micro SaaS with automatic billing and analytics.",
        },
      },
    },
    services: {
      pageTitle: "How can I help your project",
      pageDescription:
        "Full-stack development focused on performance, accessibility and scale.",
      ariaLabel: "List of services offered",
      uiDesign: {
        title: "User Interface Design",
        subtitle: "Clean, accessible, and intuitive interfaces",
        description:
          "Figma interfaces with Design System, tokens and navigable prototypes. Organized hand-off for development, consistency and accessibility.",
        skills: ["Figma", "Design System", "Prototyping", "User Research"],
        experience: "1+ year",
        projects: "10+ designs",
        deliveryTime: "1–2 weeks",
        features: [
          "Design System",
          "Interactive Prototyping",
          "Design Tokens",
          "Grid and Typography",
          "Figma Hand-off",
          "Accessibility",
          "Reusable Components",
        ],
      },
      fullstack: {
        title: "Full-Stack Development",
        subtitle: "Scalable web applications",
        description:
          "Front-end with Angular, React and Next.js; back-end with Node.js/Python. Focus on performance, SEO, accessibility (WCAG) and scalable architecture. API and database integration, CI/CD ready.",
        skills: ["Angular", "React", "Next.js", "TypeScript", "Node.js", "AWS"],
        experience: "2+ years",
        projects: "27+ projects",
        deliveryTime: "3–5 weeks",
        features: [
          "Responsive design & Core Web Vitals",
          "SEO for Next.js/Angular",
          "Accessibility (WCAG AA)",
          "REST/GraphQL integration",
          "Authentication (JWT/OAuth)",
          "Observability (logs/metrics)",
          "CI/CD pipeline",
        ],
      },
      backend: {
        title: "Back-End Development",
        subtitle: "Fast, secure and well-documented APIs",
        description:
          "RESTful APIs in Node.js with PostgreSQL/MongoDB and caching, prioritizing security, scalability, and testing. OpenAPI/Swagger documentation and monitoring.",
        skills: ["Node.js", "Python", "PostgreSQL", "JWT"],
        experience: "1+ year",
        projects: "8+ projects",
        deliveryTime: "2–4 weeks",
        features: [
          "Data modeling",
          "Role-based access control (RBAC)",
          "Validation & rate limiting",
          "Swagger/OpenAPI",
          "Cache/queues (Redis)",
          "Workers/automation with Python(RPA)",
          "Testing & tracing",
          "Observability",
        ],
      },
    },
    contact: {
      pageTitle: "Get in touch",
      pageDescription: "Contact me to start your project or ask questions.",
      form: {
        name: "Your name",
        email: "Your email",
        message: "Your message",
        send: "Send",
        sending: "Sending...",
        success: "Message sent successfully!",
        error: "An error occurred. Please try again.",
      },
      social: {
        title: "My networks",
        linkedin: "LinkedIn",
        github: "GitHub",
        whatsapp: "WhatsApp",
        email: "Email",
      },
    },
    footer: {
      callToAction: {
        title: "Let's create something amazing together?",
        description:
          "Transform your ideas into innovative digital solutions that truly connect with your audience and generate exceptional results.",
        button: "Start Project",
      },
      social: {
        title: "Connect with me",
        github: "Visit my GitHub profile",
        linkedin: "Connect with me on LinkedIn",
      },
      copyright: "All rights reserved.",
    },
  },
};

import PropTypes from "prop-types";

export function I18nProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    // Tenta ler do localStorage apenas no cliente
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("lang");
      return saved === "en" || saved === "pt" ? saved : "pt";
    }
    return "pt";
  });

  useEffect(() => {
    // Salva no localStorage apenas quando muda
    if (typeof window !== "undefined") {
      localStorage.setItem("lang", language);
    }
  }, [language]);

  const t = useMemo(() => {
    const dict = MESSAGES[language] || MESSAGES.pt;
    return (path) => {
      try {
        const keys = path.split(".");
        let result = dict;

        for (const key of keys) {
          if (result && typeof result === "object" && key in result) {
            result = result[key];
          } else {
            console.warn(`Translation key not found: ${path}`);
            return path; // Retorna a chave se não encontrar a tradução
          }
        }

        return result;
      } catch (error) {
        console.error(`Error translating ${path}:`, error);
        return path;
      }
    };
  }, [language]);

  const value = useMemo(
    () => ({ language, setLanguage, t, messages: MESSAGES[language] }),
    [language, t]
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

I18nProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}
