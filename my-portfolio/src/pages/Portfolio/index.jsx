import React, { useState, useEffect } from "react";

const Portfolio = () => {
  // Estado para controlar o dark mode
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Função para alternar o dark mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Aplicar classe dark no documento
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  const projects = [
    {
      title: "FinTech Dashboard",
      description:
        "Plataforma completa de gestão financeira com análise em tempo real, processamento alto e arquitetura de microsserviços.",
      technologies: ["React", "Node.js", "PostgreSQL", "AWS", "Docker"],
      hasDemo: true,
      hasGithub: true,
      hasCaseStudy: false,
      gradient: "from-blue-600 to-blue-800",
    },
    {
      title: "E-commerce Platform",
      description:
        "Marketplace com pagamentos, logística inteligente e painel administrativo.",
      technologies: ["Next.js", "TypeScript", "MongoDB", "Stripe", "Vercel"],
      hasDemo: true,
      hasGithub: false,
      hasCaseStudy: true,
      gradient: "from-purple-600 to-purple-800",
    },
    {
      title: "Restaurant Website",
      description:
        "Site responsivo para restaurante com reservas online e cardápio interativo.",
      technologies: ["React", "Firebase", "Tailwind", "Stripe"],
      hasDemo: true,
      hasGithub: true,
      hasCaseStudy: false,
      gradient: "from-orange-600 to-red-600",
    },
    {
      title: "Landing Page",
      description:
        "Landing page de alta conversão com animações suaves, SEO e performance.",
      technologies: ["React", "Framer Motion", "Tailwind", "Next.js"],
      hasDemo: true,
      hasGithub: true,
      hasCaseStudy: false,
      gradient: "from-teal-600 to-cyan-600",
    },
    {
      title: "Personal Finance App",
      description:
        "App de finanças pessoais com IA para categorização automática e relatórios.",
      technologies: ["React Native", "Node.js", "TensorFlow", "SQLite"],
      hasDemo: true,
      hasGithub: true,
      hasCaseStudy: true,
      gradient: "from-green-600 to-teal-600",
    },
    {
      title: "RPA Business Suite",
      description:
        "Automação robótica de processos para reduzir tempo em tarefas repetitivas.",
      technologies: ["Python", "Selenium", "Docker", "Redis", "FastAPI"],
      hasDemo: false,
      hasGithub: true,
      hasCaseStudy: true,
      gradient: "from-indigo-600 to-purple-700",
    },
    {
      title: "AI Customer Service",
      description: "Chatbots para atendimento com PLN e aprendizado contínuo.",
      technologies: ["Python", "OpenAI", "LangChain", "FastAPI", "WebSocket"],
      hasDemo: true,
      hasGithub: false,
      hasCaseStudy: true,
      gradient: "from-cyan-600 to-blue-700",
    },
    {
      title: "Medical Clinic ERP",
      description: "Gestão para clínicas: agenda, prontuário e faturamento.",
      technologies: ["Vue.js", "Laravel", "MySQL", "PHP", "Docker"],
      hasDemo: true,
      hasGithub: false,
      hasCaseStudy: true,
      gradient: "from-emerald-600 to-green-700",
    },
    {
      title: "Supply Chain ERP",
      description:
        "ERP para suprimentos com estoque inteligente e previsão de demanda.",
      technologies: ["Angular", "C#", ".NET", "SQL Server", "Azure"],
      hasDemo: false,
      hasGithub: false,
      hasCaseStudy: true,
      gradient: "from-amber-600 to-orange-700",
    },
    {
      title: "Beauty Salon Manager",
      description:
        "Gestão para salões com agendamento online e controle de produtos.",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
      hasDemo: true,
      hasGithub: true,
      hasCaseStudy: false,
      gradient: "from-pink-600 to-rose-700",
    },
    {
      title: "Micro SaaS Platform",
      description:
        "Criação e deploy de micro SaaS com billing automático e analytics.",
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
      {/* Header colorido mantido */}
      <div
        className={`h-14 sm:h-16 bg-gradient-to-r ${project.gradient} relative flex items-center justify-center`}
      >
        <div className="w-5 h-5 border-2 border-white/50 rounded"></div>
      </div>

      {/* Conteúdo */}
      <div className="p-5">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
          {project.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-3 leading-relaxed">
          {project.description}
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
              🖥️ Demo
            </button>
          )}
          {project.hasGithub && (
            <button className="flex-1 min-w-[110px] bg-gray-600 hover:bg-gray-700 dark:bg-slate-600 dark:hover:bg-slate-700 text-white dark:text-gray-200 text-xs py-2 px-3 rounded-lg transition-colors">
              📁 GitHub
            </button>
          )}
          {project.hasCaseStudy && (
            <button className="flex-1 min-w-[110px] bg-gray-600 hover:bg-gray-700 dark:bg-slate-600 dark:hover:bg-slate-700 text-white dark:text-gray-200 text-xs py-2 px-3 rounded-lg transition-colors">
              📊 Case Study
            </button>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-gray-50 dark:bg-[#0B1120] pt-16 px-6 pb-6 text-gray-900 dark:text-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        {/* Header com botão de dark mode */}
        <div className="text-center mb-12 relative">
          {/* Botão de Dark Mode */}
          <button
            onClick={toggleDarkMode}
            className="absolute top-0 right-0 p-3 rounded-full bg-white dark:bg-slate-800 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-slate-600 group"
            aria-label="Toggle Dark Mode"
          >
            {isDarkMode ? (
              <svg
                className="w-5 h-5 text-yellow-500 group-hover:text-yellow-400 transition-colors"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg
                className="w-5 h-5 text-gray-700 group-hover:text-gray-900 transition-colors"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
            )}
          </button>

          <h1 className="text-3xl md:text-4xl font-bold mb-3">My Portfolio</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {projects.map(renderProjectCard)}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
