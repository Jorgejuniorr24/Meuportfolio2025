// src/pages/Portfolio/index.jsx
import React, { useState, useEffect, useCallback, useMemo } from "react";
import { useI18n } from "../../contexts/I18nContext";

// SVG Icons como componentes
const ChevronLeft = ({ size = 24 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="15,18 9,12 15,6"></polyline>
  </svg>
);

const ChevronRight = ({ size = 24 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="9,18 15,12 9,6"></polyline>
  </svg>
);

const ExternalLink = ({ size = 16 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
    <polyline points="15,3 21,3 21,9"></polyline>
    <line x1="10" y1="14" x2="21" y2="3"></line>
  </svg>
);

const Github = ({ size = 16 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

const FileText = ({ size = 16 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2Z"></path>
    <polyline points="14,2 14,8 20,8"></polyline>
    <line x1="16" y1="13" x2="8" y2="13"></line>
    <line x1="16" y1="17" x2="8" y2="17"></line>
    <polyline points="10,9 9,9 8,9"></polyline>
  </svg>
);

const Portfolio = () => {
  const { t } = useI18n();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);

  const projects = [
    {
      titleKey: "portfolio.projects.fintech.title",
      descriptionKey: "portfolio.projects.fintech.description",
      technologies: ["React", "Node.js", "PostgreSQL", "AWS", "Docker"],
      hasDemo: true,
      hasGithub: true,
      hasCaseStudy: false,
      gradient: "from-blue-600 to-blue-800",
      category: "fullstack",
    },
    {
      titleKey: "portfolio.projects.ecommerce.title",
      descriptionKey: "portfolio.projects.ecommerce.description",
      technologies: ["Next.js", "TypeScript", "MongoDB", "Stripe", "Vercel"],
      hasDemo: true,
      hasGithub: false,
      hasCaseStudy: true,
      gradient: "from-purple-600 to-purple-800",
      category: "fullstack",
    },
    {
      titleKey: "portfolio.projects.restaurant.title",
      descriptionKey: "portfolio.projects.restaurant.description",
      technologies: ["React", "Firebase", "Tailwind", "Stripe"],
      hasDemo: true,
      hasGithub: true,
      hasCaseStudy: false,
      gradient: "from-orange-600 to-red-600",
      category: "frontend",
    },
    {
      titleKey: "portfolio.projects.landing.title",
      descriptionKey: "portfolio.projects.landing.description",
      technologies: ["React", "Framer Motion", "Tailwind", "Next.js"],
      hasDemo: true,
      hasGithub: true,
      hasCaseStudy: false,
      gradient: "from-teal-600 to-cyan-600",
      category: "frontend",
    },
    {
      titleKey: "portfolio.projects.finance.title",
      descriptionKey: "portfolio.projects.finance.description",
      technologies: ["React Native", "Node.js", "TensorFlow", "SQLite"],
      hasDemo: true,
      hasGithub: true,
      hasCaseStudy: true,
      gradient: "from-green-600 to-teal-600",
      category: "fullstack",
    },
    {
      titleKey: "portfolio.projects.rpa.title",
      descriptionKey: "portfolio.projects.rpa.description",
      technologies: ["Python", "Selenium", "Docker", "Redis", "FastAPI"],
      hasDemo: false,
      hasGithub: true,
      hasCaseStudy: true,
      gradient: "from-indigo-600 to-purple-700",
      category: "backend",
    },
    {
      titleKey: "portfolio.projects.ai.title",
      descriptionKey: "portfolio.projects.ai.description",
      technologies: ["Python", "OpenAI", "LangChain", "FastAPI", "WebSocket"],
      hasDemo: true,
      hasGithub: false,
      hasCaseStudy: true,
      gradient: "from-cyan-600 to-blue-700",
      category: "backend",
    },
    {
      titleKey: "portfolio.projects.medical.title",
      descriptionKey: "portfolio.projects.medical.description",
      technologies: ["Vue.js", "Laravel", "MySQL", "PHP", "Docker"],
      hasDemo: true,
      hasGithub: false,
      hasCaseStudy: true,
      gradient: "from-emerald-600 to-green-700",
      category: "fullstack",
    },
    {
      titleKey: "portfolio.projects.supply.title",
      descriptionKey: "portfolio.projects.supply.description",
      technologies: ["Angular", "C#", ".NET", "SQL Server", "Azure"],
      hasDemo: false,
      hasGithub: false,
      hasCaseStudy: true,
      gradient: "from-amber-600 to-orange-700",
      category: "fullstack",
    },
    {
      titleKey: "portfolio.projects.beauty.title",
      descriptionKey: "portfolio.projects.beauty.description",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
      hasDemo: true,
      hasGithub: true,
      hasCaseStudy: false,
      gradient: "from-pink-600 to-rose-700",
      category: "fullstack",
    },
    {
      titleKey: "portfolio.projects.saas.title",
      descriptionKey: "portfolio.projects.saas.description",
      technologies: ["Next.js", "Supabase", "Prisma", "Stripe", "Vercel"],
      hasDemo: true,
      hasGithub: true,
      hasCaseStudy: true,
      gradient: "from-violet-600 to-purple-700",
      category: "fullstack",
    },
  ];

  // Responsividade otimizada
  const updateItemsPerView = useCallback(() => {
    const width = window.innerWidth;
    if (width >= 1200) setItemsPerView(3);
    else if (width >= 768) setItemsPerView(2);
    else setItemsPerView(1);
  }, []);

  useEffect(() => {
    updateItemsPerView();
    window.addEventListener("resize", updateItemsPerView);
    return () => window.removeEventListener("resize", updateItemsPerView);
  }, [updateItemsPerView]);

  const maxIndex = useMemo(
    () => Math.max(0, projects.length - itemsPerView),
    [projects.length, itemsPerView]
  );

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  const goToSlide = useCallback(
    (index) => {
      setCurrentIndex(Math.min(index, maxIndex));
    },
    [maxIndex]
  );

  // Componente de botão reutilizável
  const ActionButton = ({
    onClick,
    icon: Icon,
    children,
    variant = "primary",
    disabled = false,
  }) => {
    const baseClasses =
      "inline-flex items-center gap-2 px-5 py-4 rounded-xl font-medium text-sm transition-all duration-200 transform hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none";

    const variants = {
      primary:
        "bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg hover:shadow-xl",
      secondary:
        "bg-white dark:bg-slate-700 border-2 border-gray-200 dark:border-slate-600 text-gray-700 dark:text-gray-200 hover:border-gray-300 dark:hover:border-slate-500 shadow-md hover:shadow-lg",
      tertiary:
        "bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white shadow-lg hover:shadow-xl",
    };

    return (
      <button
        onClick={onClick}
        disabled={disabled}
        className={`${baseClasses} ${variants[variant]}`}
      >
        <Icon size={16} />
        {children}
      </button>
    );
  };

  const ProjectCard = React.memo(({ project, index }) => (
    <div
      key={`project-${index}`}
      className="group bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 dark:border-slate-700 flex flex-col"
      style={{
        width: `calc(${100 / itemsPerView}% - ${
          ((itemsPerView - 1) * 24) / itemsPerView
        }px)`,
        flexShrink: 0,
        minHeight: "480px",
        height: "480px",
      }}
    >
      {/* Header com gradiente mais sofisticado */}
      <div
        className={`relative h-48 bg-gradient-to-br ${project.gradient} overflow-hidden`}
      >
        {/* Pattern decorativo */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-4 left-4 w-16 h-16 border border-white/30 rounded-lg rotate-12"></div>
          <div className="absolute top-8 right-8 w-8 h-8 bg-white/20 rounded-full"></div>
          <div className="absolute bottom-6 left-8 w-12 h-12 border-2 border-white/30 rounded-full"></div>
          <div className="absolute bottom-4 right-4 w-6 h-6 bg-white/30 rounded rotate-45"></div>
        </div>

        {/* Ícone central */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/20 group-hover:scale-110 transition-transform duration-300">
            <div className="w-8 h-8 bg-white/30 rounded-lg"></div>
          </div>
        </div>
      </div>

      {/* Conteúdo principal */}
      <div className="flex-1 flex flex-col p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {t(project.titleKey)}
        </h3>

        <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-6 flex-1">
          {t(project.descriptionKey)}
        </p>

        {/* Tags de tecnologia melhoradas */}
        <div className="mb-6">
          <div className="flex flex-wrap gap-2">
            {project.technologies.slice(0, 4).map((tech, techIndex) => (
              <span
                key={techIndex}
                className="px-3 py-1 bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-gray-300 text-xs font-medium rounded-full border border-gray-200 dark:border-slate-600 hover:border-blue-300 dark:hover:border-blue-500 transition-colors"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-medium rounded-full border border-blue-200 dark:border-blue-700">
                +{project.technologies.length - 4}
              </span>
            )}
          </div>
        </div>

        {/* Botões de ação */}
        <div className="flex gap-2 pt-2 flex-wrap">
          {project.hasDemo && (
            <ActionButton
              icon={ExternalLink}
              variant="primary"
              onClick={() => console.log(`Demo: ${t(project.titleKey)}`)}
            >
              {t("portfolio.buttons.demo")}
            </ActionButton>
          )}
          {project.hasGithub && (
            <ActionButton
              icon={Github}
              variant="secondary"
              onClick={() => console.log(`GitHub: ${t(project.titleKey)}`)}
            >
              {t("portfolio.buttons.github")}
            </ActionButton>
          )}
          {project.hasCaseStudy && (
            <ActionButton
              icon={FileText}
              variant="tertiary"
              onClick={() => console.log(`Case Study: ${t(project.titleKey)}`)}
            >
              {t("portfolio.buttons.caseStudy")}
            </ActionButton>
          )}
        </div>
      </div>
    </div>
  ));

  return (
    <div className="min-h-screen py-20 px-4 bg-[#F9FAFB] dark:bg-[#0B1120] transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        {/* Header da seção apenas com título */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-6 text-black dark:text-white">
            {t("portfolio.pageTitle")}
          </h1>
        </div>

        {/* Container do carrossel */}
        <div className="relative">
          {/* Navegação */}
          {maxIndex > 0 && (
            <>
              <button
                onClick={prevSlide}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 z-20 bg-white dark:bg-slate-800 text-gray-700 dark:text-gray-300 rounded-full p-4 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 border border-gray-200 dark:border-slate-700 backdrop-blur-sm"
                aria-label={t("common.previous")}
              >
                <ChevronLeft size={24} />
              </button>

              <button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 z-20 bg-white dark:bg-slate-800 text-gray-700 dark:text-gray-300 rounded-full p-4 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 border border-gray-200 dark:border-slate-700 backdrop-blur-sm"
                aria-label={t("common.next")}
              >
                <ChevronRight size={24} />
              </button>
            </>
          )}

          {/* Container dos cards */}
          <div className="overflow-hidden">
            {projects.length > 0 ? (
              <div
                className="flex gap-6 transition-transform duration-700 ease-out"
                style={{
                  transform: `translateX(-${
                    currentIndex * (100 / itemsPerView + 24 / itemsPerView)
                  }%)`,
                }}
              >
                {projects.map((project, index) => (
                  <ProjectCard key={index} project={project} index={index} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="text-gray-500 dark:text-gray-400 text-lg">
                  {t("common.loading")}...
                </p>
              </div>
            )}
          </div>

          {/* Indicadores */}
          {maxIndex > 0 && (
            <div className="flex justify-center mt-12 gap-3">
              {Array.from({ length: maxIndex + 1 }, (_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`transition-all duration-300 ${
                    currentIndex === index
                      ? "w-8 h-3 bg-blue-600 dark:bg-blue-500 rounded-full"
                      : "w-3 h-3 bg-gray-300 dark:bg-slate-600 hover:bg-blue-400 dark:hover:bg-blue-500 rounded-full"
                  }`}
                  aria-label={`Slide ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
