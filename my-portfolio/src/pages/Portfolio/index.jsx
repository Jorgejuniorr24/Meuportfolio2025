import React from "react";
import { useI18n } from "../../contexts/I18nContext";

const Portfolio = () => {
  const { t } = useI18n();

  const projects = [
    {
      titleKey: "portfolio.projects.fintech.title",
      descriptionKey: "portfolio.projects.fintech.description",
      technologies: ["React", "Node.js", "PostgreSQL", "AWS", "Docker"],
      hasDemo: true,
      hasGithub: true,
      hasCaseStudy: false,
      gradient: "from-blue-600 to-blue-800",
    },
    {
      titleKey: "portfolio.projects.ecommerce.title",
      descriptionKey: "portfolio.projects.ecommerce.description",
      technologies: ["Next.js", "TypeScript", "MongoDB", "Stripe", "Vercel"],
      hasDemo: true,
      hasGithub: false,
      hasCaseStudy: true,
      gradient: "from-purple-600 to-purple-800",
    },
    {
      titleKey: "portfolio.projects.restaurant.title",
      descriptionKey: "portfolio.projects.restaurant.description",
      technologies: ["React", "Firebase", "Tailwind", "Stripe"],
      hasDemo: true,
      hasGithub: true,
      hasCaseStudy: false,
      gradient: "from-orange-600 to-red-600",
    },
    {
      titleKey: "portfolio.projects.landing.title",
      descriptionKey: "portfolio.projects.landing.description",
      technologies: ["React", "Framer Motion", "Tailwind", "Next.js"],
      hasDemo: true,
      hasGithub: true,
      hasCaseStudy: false,
      gradient: "from-teal-600 to-cyan-600",
    },
    {
      titleKey: "portfolio.projects.finance.title",
      descriptionKey: "portfolio.projects.finance.description",
      technologies: ["React Native", "Node.js", "TensorFlow", "SQLite"],
      hasDemo: true,
      hasGithub: true,
      hasCaseStudy: true,
      gradient: "from-green-600 to-teal-600",
    },
    {
      titleKey: "portfolio.projects.rpa.title",
      descriptionKey: "portfolio.projects.rpa.description",
      technologies: ["Python", "Selenium", "Docker", "Redis", "FastAPI"],
      hasDemo: false,
      hasGithub: true,
      hasCaseStudy: true,
      gradient: "from-indigo-600 to-purple-700",
    },
    {
      titleKey: "portfolio.projects.ai.title",
      descriptionKey: "portfolio.projects.ai.description",
      technologies: ["Python", "OpenAI", "LangChain", "FastAPI", "WebSocket"],
      hasDemo: true,
      hasGithub: false,
      hasCaseStudy: true,
      gradient: "from-cyan-600 to-blue-700",
    },
    {
      titleKey: "portfolio.projects.medical.title",
      descriptionKey: "portfolio.projects.medical.description",
      technologies: ["Vue.js", "Laravel", "MySQL", "PHP", "Docker"],
      hasDemo: true,
      hasGithub: false,
      hasCaseStudy: true,
      gradient: "from-emerald-600 to-green-700",
    },
    {
      titleKey: "portfolio.projects.supply.title",
      descriptionKey: "portfolio.projects.supply.description",
      technologies: ["Angular", "C#", ".NET", "SQL Server", "Azure"],
      hasDemo: false,
      hasGithub: false,
      hasCaseStudy: true,
      gradient: "from-amber-600 to-orange-700",
    },
    {
      titleKey: "portfolio.projects.beauty.title",
      descriptionKey: "portfolio.projects.beauty.description",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
      hasDemo: true,
      hasGithub: true,
      hasCaseStudy: false,
      gradient: "from-pink-600 to-rose-700",
    },
    {
      titleKey: "portfolio.projects.saas.title",
      descriptionKey: "portfolio.projects.saas.description",
      technologies: ["Next.js", "Supabase", "Prisma", "Stripe", "Vercel"],
      hasDemo: true,
      hasGithub: true,
      hasCaseStudy: true,
      gradient: "from-violet-600 to-purple-700",
    },
  ];

  const renderProjectCard = (project, index) => (
    <div
      key={index}
      className="bg-[#F9FAFB] dark:bg-slate-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-200 dark:border-slate-700"
    >
      {/* Header colorido */}
      <div
        className={`h-14 sm:h-16 bg-gradient-to-r ${project.gradient} relative flex items-center justify-center`}
      >
        <div className="w-5 h-5 border-2 border-white/50 rounded"></div>
      </div>

      {/* Conteúdo */}
      <div className="p-5">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
          {t(project.titleKey)}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-3 leading-relaxed">
          {t(project.descriptionKey)}
        </p>

        {/* Tecnologias */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.map((tech, techIndex) => (
              <span
                key={techIndex}
                className="px-2 py-0.5 bg-gray-200 dark:bg-slate-700 text-gray-700 dark:text-gray-300 text-[11px] rounded-md"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Botões */}
        <div className="flex flex-wrap gap-2">
          {project.hasDemo && (
            <button className="flex-1 min-w-[110px] bg-blue-600 hover:bg-blue-700 text-white text-xs py-2 px-3 rounded-lg transition-colors">
              🖥️ {t("portfolio.buttons.demo")}
            </button>
          )}
          {project.hasGithub && (
            <button className="flex-1 min-w-[110px] bg-gray-600 hover:bg-gray-700 dark:bg-slate-600 dark:hover:bg-slate-700 text-white dark:text-gray-200 text-xs py-2 px-3 rounded-lg transition-colors">
              📁 {t("portfolio.buttons.github")}
            </button>
          )}
          {project.hasCaseStudy && (
            <button className="flex-1 min-w-[110px] bg-gray-600 hover:bg-gray-700 dark:bg-slate-600 dark:hover:bg-slate-700 text-white dark:text-gray-200 text-xs py-2 px-3 rounded-lg transition-colors">
              📊 {t("portfolio.buttons.caseStudy")}
            </button>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-gray-50 dark:bg-[#0B1120] pt-16 px-6 pb-6 text-gray-900 dark:text-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        {/* Título */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">
            {t("portfolio.pageTitle")}
          </h1>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {projects.map(renderProjectCard)}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
