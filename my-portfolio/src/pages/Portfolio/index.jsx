import React from "react";

const Portfolio = () => {
  const projects = [
    {
      title: "FinTech Dashboard",
      description:
        "Plataforma completa de gestão financeira com análise em tempo real, processamento de 2M+ transações diárias e arquitetura microsserviços.",
      technologies: ["React", "Node.js", "PostgreSQL", "AWS", "Docker"],
      metrics: [
        { label: "Transações/dia", value: "2M+", color: "text-blue-400" },
        { label: "Uptime", value: "99.9%", color: "text-green-400" },
        { label: "Performance", value: "40%↑", color: "text-purple-400" },
      ],
      hasDemo: true,
      hasGithub: true,
      hasCaseStudy: false,
      gradient: "from-blue-600 to-blue-800",
    },
    {
      title: "E-commerce Platform",
      description:
        "Marketplace completo com sistema de pagamentos, logística inteligente e painel administrativo. Processou R$ 50M+ em vendas no primeiro ano.",
      technologies: ["Next.js", "TypeScript", "MongoDB", "Stripe", "Vercel"],
      metrics: [
        { label: "R$ em vendas", value: "50M+", color: "text-green-400" },
        { label: "Usuários ativos", value: "100k+", color: "text-blue-400" },
        { label: "Rating App", value: "4.8", color: "text-yellow-400" },
      ],
      hasDemo: true,
      hasGithub: false,
      hasCaseStudy: true,
      gradient: "from-purple-600 to-purple-800",
    },
    {
      title: "Restaurant Website",
      description:
        "Site responsivo para restaurante com sistema de reservas online, cardápio interativo e integração com delivery.",
      technologies: ["React", "Firebase", "Tailwind", "Stripe"],
      metrics: [
        { label: "Reservas/mês", value: "500+", color: "text-orange-400" },
        { label: "Performance", value: "95", color: "text-green-400" },
        { label: "Conversão", value: "12%", color: "text-blue-400" },
      ],
      hasDemo: true,
      hasGithub: true,
      hasCaseStudy: false,
      gradient: "from-orange-600 to-red-600",
    },
    {
      title: "Landing Page",
      description:
        "Landing page de alta conversão para startup de tecnologia com animações suaves, otimizada para SEO e performance.",
      technologies: ["React", "Framer Motion", "Tailwind", "Next.js"],
      metrics: [
        { label: "Conversão", value: "18%", color: "text-green-400" },
        { label: "Performance", value: "98", color: "text-blue-400" },
        {
          label: "Tempo carregamento",
          value: "1.2s",
          color: "text-purple-400",
        },
      ],
      hasDemo: true,
      hasGithub: true,
      hasCaseStudy: false,
      gradient: "from-teal-600 to-cyan-600",
    },
    {
      title: "Personal Finance App",
      description:
        "Aplicativo de controle financeiro pessoal com IA para categorização automática de gastos e relatórios inteligentes.",
      technologies: ["React Native", "Node.js", "TensorFlow", "SQLite"],
      metrics: [
        { label: "Usuários", value: "25k+", color: "text-green-400" },
        { label: "Economia média", value: "R$ 800", color: "text-blue-400" },
        { label: "Satisfação", value: "4.7★", color: "text-yellow-400" },
      ],
      hasDemo: true,
      hasGithub: true,
      hasCaseStudy: true,
      gradient: "from-green-600 to-teal-600",
    },
    {
      title: "RPA Business Suite",
      description:
        "Solução de automação robótica de processos para empresas, reduzindo 80% do tempo em tarefas repetitivas.",
      technologies: ["Python", "Selenium", "Docker", "Redis", "FastAPI"],
      metrics: [
        { label: "Economia tempo", value: "80%", color: "text-purple-400" },
        { label: "Processos/hora", value: "1000+", color: "text-blue-400" },
        { label: "ROI médio", value: "300%", color: "text-green-400" },
      ],
      hasDemo: false,
      hasGithub: true,
      hasCaseStudy: true,
      gradient: "from-indigo-600 to-purple-700",
    },
    {
      title: "AI Customer Service",
      description:
        "Chatbots inteligentes para atendimento ao cliente com processamento de linguagem natural e aprendizado contínuo.",
      technologies: ["Python", "OpenAI", "LangChain", "FastAPI", "WebSocket"],
      metrics: [
        { label: "Resoluções", value: "85%", color: "text-green-400" },
        { label: "Tempo resposta", value: "2s", color: "text-blue-400" },
        { label: "Satisfação", value: "4.6★", color: "text-yellow-400" },
      ],
      hasDemo: true,
      hasGithub: false,
      hasCaseStudy: true,
      gradient: "from-cyan-600 to-blue-700",
    },
    {
      title: "Medical Clinic ERP",
      description:
        "Sistema completo de gestão para clínicas médicas com agendamento, prontuário eletrônico e faturamento.",
      technologies: ["Vue.js", "Laravel", "MySQL", "PHP", "Docker"],
      metrics: [
        { label: "Clínicas ativas", value: "150+", color: "text-green-400" },
        { label: "Consultas/dia", value: "5k+", color: "text-blue-400" },
        { label: "Uptime", value: "99.8%", color: "text-purple-400" },
      ],
      hasDemo: true,
      hasGithub: false,
      hasCaseStudy: true,
      gradient: "from-emerald-600 to-green-700",
    },
    {
      title: "Supply Chain ERP",
      description:
        "ERP especializado para comércio de suprimentos com controle de estoque inteligente e previsão de demanda.",
      technologies: ["Angular", "C#", ".NET", "SQL Server", "Azure"],
      metrics: [
        { label: "Redução estoque", value: "35%", color: "text-orange-400" },
        { label: "Precisão previsão", value: "92%", color: "text-green-400" },
        { label: "Empresas", value: "80+", color: "text-blue-400" },
      ],
      hasDemo: false,
      hasGithub: false,
      hasCaseStudy: true,
      gradient: "from-amber-600 to-orange-700",
    },
    {
      title: "Beauty Salon Manager",
      description:
        "Sistema de gestão para salões de beleza e barbearias com agendamento online, controle de produtos e comissões.",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
      metrics: [
        { label: "Salões ativos", value: "200+", color: "text-pink-400" },
        { label: "Agendamentos/mês", value: "15k+", color: "text-purple-400" },
        { label: "Receita↑", value: "45%", color: "text-green-400" },
      ],
      hasDemo: true,
      hasGithub: true,
      hasCaseStudy: false,
      gradient: "from-pink-600 to-rose-700",
    },
    {
      title: "Micro SaaS Platform",
      description:
        "Plataforma para criação e deploy de micro SaaS com sistema de billing automático e analytics avançado.",
      technologies: ["Next.js", "Supabase", "Prisma", "Stripe", "Vercel"],
      metrics: [
        { label: "SaaS criados", value: "1k+", color: "text-cyan-400" },
        { label: "ARR total", value: "$500k", color: "text-green-400" },
        { label: "Tempo deploy", value: "5min", color: "text-blue-400" },
      ],
      hasDemo: true,
      hasGithub: true,
      hasCaseStudy: true,
      gradient: "from-violet-600 to-purple-700",
    },
  ];

  const renderProjectCard = (project, index) => (
    <div
      key={index}
      className="bg-slate-800 dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
    >
      {/* Header com gradiente */}
      <div
        className={`h-24 bg-gradient-to-r ${project.gradient} relative flex items-center justify-center`}
      >
        <div className="w-6 h-6 border-2 border-white/50 rounded"></div>
      </div>

      {/* Conteúdo */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
        <p className="text-gray-300 text-sm mb-4 leading-relaxed">
          {project.description}
        </p>

        {/* Tecnologias */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, techIndex) => (
              <span
                key={techIndex}
                className="px-2 py-1 bg-slate-700 text-gray-300 text-xs rounded-md"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Métricas */}
        <div className="grid grid-cols-3 gap-4 mb-6 p-3 bg-slate-700/50 rounded-lg">
          {project.metrics.map((metric, metricIndex) => (
            <div key={metricIndex} className="text-center">
              <div className={`text-lg font-bold ${metric.color}`}>
                {metric.value}
              </div>
              <div className="text-gray-400 text-xs">{metric.label}</div>
            </div>
          ))}
        </div>

        {/* Botões de ação */}
        <div className="flex gap-2">
          {project.hasDemo && (
            <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-sm py-2 px-4 rounded-lg transition-colors">
              🖥️ Demo
            </button>
          )}
          {project.hasGithub && (
            <button className="flex-1 bg-slate-600 hover:bg-slate-700 text-gray-300 text-sm py-2 px-4 rounded-lg transition-colors">
              📁 GitHub
            </button>
          )}
          {project.hasCaseStudy && (
            <button className="flex-1 bg-slate-600 hover:bg-slate-700 text-gray-300 text-sm py-2 px-4 rounded-lg transition-colors">
              📊 Case Study
            </button>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-gray-50 dark:bg-[#0B1120] pt-16 px-8 pb-6 text-gray-900 dark:text-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">My Portfolio</h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Explore meus projetos mais recentes, desde plataformas fintech até
            soluções de automação empresarial. Cada projeto representa uma
            solução única e inovadora.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {projects.map(renderProjectCard)}
        </div>

        {/* Estatísticas gerais */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-slate-800 dark:bg-gray-800 rounded-xl">
            <div className="text-3xl font-bold text-blue-400 mb-2">10+</div>
            <div className="text-gray-400">Projetos Concluídos</div>
          </div>
          <div className="text-center p-6 bg-slate-800 dark:bg-gray-800 rounded-xl">
            <div className="text-3xl font-bold text-green-400 mb-2">
              R$ 50M+
            </div>
            <div className="text-gray-400">Volume Processado</div>
          </div>
          <div className="text-center p-6 bg-slate-800 dark:bg-gray-800 rounded-xl">
            <div className="text-3xl font-bold text-purple-400 mb-2">500k+</div>
            <div className="text-gray-400">Usuários Impactados</div>
          </div>
          <div className="text-center p-6 bg-slate-800 dark:bg-gray-800 rounded-xl">
            <div className="text-3xl font-bold text-yellow-400 mb-2">99.8%</div>
            <div className="text-gray-400">Uptime Médio</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
