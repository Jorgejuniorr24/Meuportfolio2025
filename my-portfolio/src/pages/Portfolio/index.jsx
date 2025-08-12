import React from "react";

const Portfolio = () => {
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
      {/* Header colorido */}
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
        {/* Título */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">My Portfolio</h1>
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
