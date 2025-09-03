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
import { useI18n } from "../../contexts/I18nContext";

/* =========================
   DATA (ORDENADO)
========================= */

const getServices = (t, language) => [
  {
    id: "ui-design",
    title: t("services.uiDesign.title"),
    subtitle: t("services.uiDesign.subtitle"),
    description: t("services.uiDesign.description"),
    icon: Palette,
    color: "purple",
    skills: t("services.uiDesign.skills", { returnObjects: true }),
    experience: t("services.uiDesign.experience"),
    projects: t("services.uiDesign.projects"),
    deliveryTime: t("services.uiDesign.deliveryTime"),
    features: t("services.uiDesign.features", { returnObjects: true }),
  },
  {
    id: "fullstack-development",
    title: t("services.fullstack.title"),
    subtitle: t("services.fullstack.subtitle"),
    description: t("services.fullstack.description"),
    icon: Code2,
    color: "blue",
    skills: t("services.fullstack.skills", { returnObjects: true }),
    experience: t("services.fullstack.experience"),
    projects: t("services.fullstack.projects"),
    deliveryTime: t("services.fullstack.deliveryTime"),
    features: t("services.fullstack.features", { returnObjects: true }),
  },
  {
    id: "backend-development",
    title: t("services.backend.title"),
    subtitle: t("services.backend.subtitle"),
    description: t("services.backend.description"),
    icon: Server,
    color: "green",
    skills: t("services.backend.skills", { returnObjects: true }),
    experience: t("services.backend.experience"),
    projects: t("services.backend.projects"),
    deliveryTime: t("services.backend.deliveryTime"),
    features: t("services.backend.features", { returnObjects: true }),
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
      <div
        key={i}
        className="flex items-center gap-2 text-[#374151] dark:text-[#CBD5E1]"
      >
        <CheckCircle2 className="w-4 h-4 flex-shrink-0 text-green-500 stroke-[1.5]" />
        <span className="text-sm leading-relaxed">{feature}</span>
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
      className={`h-full flex flex-col relative p-6 rounded-xl border-2 bg-white dark:bg-gray-800
        transition-all duration-300 group cursor-pointer
        ${theme.border} ${theme.bg}
        ${
          isActive
            ? "transform -translate-y-2 shadow-xl scale-[1.02]"
            : "shadow-md hover:shadow-lg"
        }
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2
      `}
      style={{ transitionDelay: `${index * 100}ms` }}
      tabIndex="0"
      role="button"
      aria-label={`Serviço: ${service.title}`}
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
        <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-200 mb-3 uppercase tracking-wide">
          Incluído:
        </h4>
        <FeatureList features={service.features} />
      </div>

      {/* Skills */}
      <div className="mt-auto">
        <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-200 mb-3 uppercase tracking-wide">
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
  const { t, language } = useI18n();

  const handleServiceHover = useCallback(
    (serviceId) => {
      setHoveredService(serviceId);
      trackServiceView(serviceId);
    },
    [trackServiceView]
  );

  const handleServiceLeave = useCallback(() => setHoveredService(null), []);

  const servicesOrdered = useMemo(
    () => getServices(t, language),
    [t, language]
  );

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
              {t("services.pageTitle") || "Como posso ajudar seu projeto"}
            </span>
          </h1>

          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            {t("services.pageDescription") ||
              "Desenvolvimento full-stack com foco em performance, acessibilidade e escala."}
          </p>
        </header>

        <section
          className="grid grid-cols-1 lg:grid-cols-3 auto-rows-fr gap-8"
          role="region"
          aria-label={t("services.ariaLabel") || "Lista de serviços oferecidos"}
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
