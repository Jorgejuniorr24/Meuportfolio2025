import React, {
  useState,
  useCallback,
  useMemo,
  memo,
  useRef,
  useEffect,
} from "react";
import {
  Code2,
  Palette,
  ArrowUpRight,
  CheckCircle2,
  Server,
} from "lucide-react";
import PropTypes from "prop-types";

/* =========================
   DATA (ordem desejada)
========================= */

const SERVICES = [
  {
    id: "ui-design",
    title: "Design de Interface do Usuário",
    subtitle: "Interfaces limpas, acessíveis e intuitivas",
    description:
      "Interfaces no Figma com Design System, tokens e protótipos navegáveis. Hand-off organizado para desenvolvimento, consistência e acessibilidade.",
    icon: Palette,
    color: "purple",
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
  {
    id: "fullstack-development",
    title: "Desenvolvimento Full-Stack",
    subtitle: "Aplicações web completas que escalam",
    description:
      "Front-end com Angular, React e Next.js; back-end com Node.js/Python. Foco em performance, SEO, acessibilidade (WCAG) e arquitetura escalável. Integração de APIs e bancos de dados, pronto para CI/CD.",
    icon: Code2,
    color: "blue",
    skills: ["Angular", "React", "Next.js", "TypeScript", "Node.js", "AWS"], // 6 itens (AWS incluído)
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
  {
    id: "backend-development",
    title: "Desenvolvimento Back-end",
    subtitle: "APIs rápidas, seguras e bem documentadas",
    description:
      "RESTful APIs em Node.js com PostgreSQL/MongoDB e cache, priorizando segurança, escalabilidade e testes. Documentação OpenAPI/Swagger e monitoramento.",
    icon: Server,
    color: "green",
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
];

/* =========================
   THEMES
========================= */

const COLOR_THEMES = {
  blue: {
    border:
      "border-blue-200 hover:border-blue-400 dark:border-blue-800 dark:hover:border-blue-600",
    bg: "hover:bg-blue-50/50 dark:hover:bg-blue-950/20",
    icon: "text-blue-600 dark:text-blue-400",
    iconBg: "bg-blue-50 dark:bg-blue-950/30",
    gradient: "from-blue-500 to-blue-600",
  },
  green: {
    border:
      "border-green-200 hover:border-green-400 dark:border-green-800 dark:hover:border-green-600",
    bg: "hover:bg-green-50/50 dark:hover:bg-green-950/20",
    icon: "text-green-600 dark:text-green-400",
    iconBg: "bg-green-50 dark:bg-green-950/30",
    gradient: "from-green-500 to-green-600",
  },
  purple: {
    border:
      "border-purple-200 hover:border-purple-400 dark:border-purple-800 dark:hover:border-purple-600",
    bg: "hover:bg-purple-50/50 dark:hover:bg-purple-950/20",
    icon: "text-purple-600 dark:text-purple-400",
    iconBg: "bg-purple-50 dark:bg-purple-950/30",
    gradient: "from-purple-500 to-purple-600",
  },
};

/* =========================
   HOOKS
========================= */

const useIntersectionObserver = (options = {}) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setIsIntersecting(entry.isIntersecting),
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px", ...options }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [options]);

  return [ref, isIntersecting];
};

const useServiceAnalytics = () => {
  const trackServiceView = useCallback((serviceId) => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "service_view", {
        service_id: serviceId,
        event_category: "services",
      });
    }
  }, []);
  return { trackServiceView };
};

/* =========================
   UI PRIMITIVES
========================= */

const Badge = memo(({ children, variant = "default", size = "sm" }) => {
  const variants = {
    default: "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300",
    success:
      "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300",
    warning:
      "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300",
  };
  const sizes = { sm: "px-2 py-1 text-xs", md: "px-3 py-1.5 text-sm" };
  return (
    <span
      className={`inline-flex items-center rounded-full font-medium ${variants[variant]} ${sizes[size]}`}
    >
      {children}
    </span>
  );
});
Badge.displayName = "Badge";
Badge.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(["default", "success", "warning"]),
  size: PropTypes.oneOf(["sm", "md"]),
};

const FeatureList = memo(({ features }) => (
  <div className="space-y-2">
    {features.map((feature, i) => (
      <div key={i} className="flex items-center gap-2">
        <CheckCircle2 className="w-3 h-3 text-green-500 flex-shrink-0" />
        <span className="text-xs text-gray-600 dark:text-gray-400">
          {feature}
        </span>
      </div>
    ))}
  </div>
));
FeatureList.displayName = "FeatureList";
FeatureList.propTypes = {
  features: PropTypes.arrayOf(PropTypes.string).isRequired,
};

/* =========================
   CARD
========================= */

const ServiceCard = memo(({ service, isActive, onHover, onLeave, index }) => {
  const [cardRef, isVisible] = useIntersectionObserver();
  const theme = COLOR_THEMES[service.color];
  const IconComponent = service.icon;

  return (
    <article
      ref={cardRef}
      onMouseEnter={() => onHover(service.id)}
      onMouseLeave={onLeave}
      className={`
        h-full flex flex-col
        relative p-6 rounded-xl border-2 bg-white dark:bg-gray-800
        transition-all duration-300 group
        ${theme.border} ${theme.bg}
        ${
          isActive
            ? "transform -translate-y-2 shadow-xl scale-[1.02]"
            : "shadow-md hover:shadow-lg"
        }
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
        focus:outline-none
      `}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Header */}
      <header className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div
            className={`p-3 rounded-lg ${theme.iconBg} ${theme.icon} group-hover:scale-110 transition-transform duration-200`}
          >
            <IconComponent className="w-6 h-6" aria-hidden="true" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white text-lg">
              {service.title}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {service.subtitle}
            </p>
          </div>
        </div>
        <ArrowUpRight
          className="w-5 h-5 text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-200"
          aria-hidden="true"
        />
      </header>

      {/* Description */}
      <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-6">
        {service.description}
      </p>

      {/* Features */}
      <div className="mb-6">
        <h4 className="text-xs font-medium text-gray-500 dark:text-gray-400 mb-3 uppercase tracking-wide">
          Incluído:
        </h4>
        <FeatureList features={service.features} />
      </div>

      {/* Skills */}
      <div className="mt-auto">
        <h4 className="text-xs font-medium text-gray-500 dark:text-gray-400 mb-3 uppercase tracking-wide">
          Tecnologias:
        </h4>
        <div className="flex flex-wrap gap-2">
          {service.skills.slice(0, 6).map((skill, i) => (
            <Badge key={i} size="sm">
              {skill}
            </Badge>
          ))}
          {service.skills.length > 6 && (
            <Badge size="sm">+{service.skills.length - 6}</Badge>
          )}
        </div>
      </div>
    </article>
  );
});
ServiceCard.displayName = "ServiceCard";
ServiceCard.propTypes = {
  service: PropTypes.object.isRequired,
  isActive: PropTypes.bool.isRequired,
  onHover: PropTypes.func.isRequired,
  onLeave: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
};

/* =========================
   PAGE
========================= */

const Services = memo(() => {
  const [hoveredService, setHoveredService] = useState(null);
  const [headerRef, isHeaderVisible] = useIntersectionObserver();
  const { trackServiceView } = useServiceAnalytics();

  const handleServiceHover = useCallback(
    (serviceId) => {
      setHoveredService(serviceId);
      trackServiceView(serviceId);
    },
    [trackServiceView]
  );

  const handleServiceLeave = useCallback(() => setHoveredService(null), []);

  // Mantém a ordem do array
  const servicesOrdered = useMemo(() => SERVICES, []);

  return (
    <div className="bg-gray-50 dark:bg-[#0B1120] min-h-screen pt-20 pb-16 px-4 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <header
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-700 ${
            isHeaderVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Como posso ajudar seu projeto
            </span>
          </h1>

          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Desenvolvimento full-stack com foco em performance, acessibilidade e
            escala.
          </p>
        </header>

        <section
          className="grid grid-cols-1 lg:grid-cols-3 auto-rows-fr gap-8"
          role="region"
          aria-label="Lista de serviços oferecidos"
        >
          {servicesOrdered.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              index={index}
              isActive={hoveredService === service.id}
              onHover={handleServiceHover}
              onLeave={handleServiceLeave}
            />
          ))}
        </section>
      </div>
    </div>
  );
});
Services.displayName = "Services";

export default Services;
