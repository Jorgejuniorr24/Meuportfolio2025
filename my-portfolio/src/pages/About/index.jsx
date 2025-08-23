import React, { useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import {
  ChevronDown,
  Braces,
  Server,
  Palette,
  Cloud,
  Wrench,
} from "lucide-react";
import { useI18n } from "../../contexts/I18nContext";

// Progress bar item for skills
const ProgressItem = ({ label, value, delay = 0 }) => {
  const [animatedValue, setAnimatedValue] = useState(0);

  useEffect(() => {
    const t = setTimeout(() => setAnimatedValue(value), delay);
    return () => clearTimeout(t);
  }, [value, delay]);

  const color = (v) =>
    v >= 90
      ? "bg-emerald-500" // Expert
      : v >= 70
      ? "bg-blue-500" // Advanced
      : v >= 50
      ? "bg-amber-500" // Intermediate
      : "bg-slate-400"; // Learning

  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium text-slate-700 dark:text-slate-200">
          {label}
        </span>
        <span className="text-xs text-slate-500 dark:text-slate-400 font-mono">
          {value}%
        </span>
      </div>
      <div className="h-1.5 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
        <div
          className={`h-full rounded-full transition-all duration-1000 ease-out ${color(
            value
          )}`}
          style={{ width: `${animatedValue}%` }}
        />
      </div>
    </div>
  );
};

ProgressItem.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  delay: PropTypes.number,
};

// Accordion component for showing categories
const AccordionItem = ({
  id,
  icon: Icon,
  title,
  meta,
  children,
  defaultOpen = false,
}) => {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="rounded-xl border border-slate-200 bg-white shadow-sm transition dark:bg-white/5 dark:border-slate-700/40">
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between gap-4 px-5 py-4"
        aria-expanded={open}
        aria-controls={`panel-${id}`}
      >
        <div className="flex items-center gap-4">
          {Icon && (
            <span className="grid place-items-center w-8 h-8 rounded-lg bg-rose-100 text-rose-500 dark:bg-rose-500/10 dark:text-rose-300">
              <Icon className="w-5 h-5" />
            </span>
          )}
          <div className="text-left">
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
              {title}
            </h3>
            {meta && (
              <p className="text-sm text-slate-500 dark:text-slate-400">
                {meta}
              </p>
            )}
          </div>
        </div>

        <ChevronDown
          className={`w-5 h-5 text-rose-500 transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      <div
        id={`panel-${id}`}
        className={`px-5 pb-5 overflow-hidden transition-[max-height,opacity] duration-300 ${
          open ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        {children}
      </div>
    </div>
  );
};

AccordionItem.propTypes = {
  id: PropTypes.string.isRequired,
  icon: PropTypes.elementType,
  title: PropTypes.string.isRequired,
  meta: PropTypes.string,
  children: PropTypes.node,
  defaultOpen: PropTypes.bool,
};

const AboutMe = () => {
  const { t, language } = useI18n();

  // helper de tradução com fallback
  const tr = useCallback(
    (key, fallback) => {
      const val = t(key);
      return val === key ? fallback : val;
    },
    [t]
  );

  // Textos completos por idioma
  const aboutTexts = {
    pt: `Sou Jorge Oliveira, desenvolvedor full-stack de Salvador, Bahia, Brasil, apaixonado por criar soluções web modernas e de alta performance que entregam experiências excepcionais aos usuários. Possuo formação em Engenharia de Produção e Análise e Desenvolvimento de Sistemas, além de MBA em Gerenciamento de Projetos. Tenho sólida experiência no front-end com HTML, CSS, JavaScript/TypeScript, Angular, React, Next.js, TailwindCSS e Bootstrap, desenvolvendo interfaces responsivas, acessíveis e visualmente atraentes. No back-end, possuo conhecimento prático em Python, Node.js, SQL e integração de APIs RESTful, e estou em constante aprimoramento para projetar arquiteturas limpas, seguras e escaláveis. Aplico Jest e Cypress para garantir qualidade e confiabilidade do código, enquanto estudo AWS e ganho experiência prática com implantação de aplicações web e pipelines CI/CD. Sou proficiente em Git e GitHub para controle de versão, e uso Figma para desenhar interfaces intuitivas. Meu objetivo é transformar ideias em soluções digitais eficientes e bem estruturadas que cresçam junto com o negócio, combinando expertise técnica, atenção aos detalhes e forte compromisso com a excelência.`,
    en: `I'm Jorge Oliveira, a full-stack developer from Salvador, Bahia, Brazil, passionate about building modern, high-performance web solutions that deliver exceptional user experiences. I hold degrees in Production Engineering and Systems Analysis and Development, as well as an MBA in Project Management. I have solid experience on the front-end with HTML, CSS, JavaScript/TypeScript, Angular, React, Next.js, TailwindCSS, and Bootstrap, crafting responsive, accessible, and visually engaging interfaces. On the back-end, I have working knowledge of Python, Node.js, SQL, and RESTful API integration, and I'm continuously improving my skills to design clean, secure, and scalable architectures. I apply Jest and Cypress to ensure code quality and reliability, while actively studying AWS and gaining hands-on experience with web application deployment and CI/CD pipelines. I'm proficient in Git and GitHub for version control, and use Figma to design intuitive user interfaces. My goal is to turn ideas into efficient, well-structured digital solutions that grow alongside the business, combining technical expertise, attention to detail, and a strong commitment to excellence.`,
  };

  // Categorias de habilidades
  const categories = [
    {
      id: "frontend",
      icon: Braces,
      title: tr(
        "about.frontendTitle",
        language === "pt" ? "Front-End" : "Front-End"
      ),
      meta: tr(
        "about.frontendMeta",
        language === "pt" ? "Dois anos" : "Two Years"
      ),
      skills: [
        { label: "HTML5", value: 90 },
        { label: "CSS3", value: 90 },
        { label: "JavaScript", value: 60 },
        { label: "TypeScript", value: 40 },
        { label: "React", value: 70 },
        { label: "Next.js", value: 20 },
        { label: "Angular", value: 40 },
      ],
    },
    {
      id: "backend",
      icon: Server,
      title: tr(
        "about.backendTitle",
        language === "pt" ? "Back-End" : "Back-End"
      ),
      meta: tr(
        "about.backendMeta",
        language === "pt" ? "Menos de 1 ano" : "Less than 1 year"
      ),
      skills: [
        { label: "Node.js", value: 10 },
        { label: "PostgreSQL", value: 10 },
        { label: "Python", value: 10 },
        { label: "REST APIs", value: 50 },
      ],
    },
    {
      id: "design",
      icon: Palette,
      title: tr(
        "about.designTitle",
        language === "pt" ? "Designer" : "Designer"
      ),
      meta: tr(
        "about.designMeta",
        language === "pt" ? "Dois anos" : "Two Years"
      ),
      skills: [
        { label: "Figma", value: 90 },
        { label: "Tailwind CSS", value: 70 },
        { label: "Bootstrap", value: 50 },
        { label: "Responsive Design", value: 100 },
      ],
    },
    {
      id: "methodologies",
      icon: Wrench,
      title: tr(
        "about.methodologiesTitle",
        language === "pt"
          ? "Metodologias & Gestão"
          : "Methodologies & Management"
      ),
      meta: tr(
        "about.methodologiesMeta",
        language === "pt"
          ? "Gerenciamento de Projetos & Práticas Ágeis"
          : "Project Management & Agile Practices"
      ),
      skills: [
        { label: tr("about.methodologiesSkills.scrum", "Scrum"), value: 90 },
        { label: tr("about.methodologiesSkills.kanban", "Kanban"), value: 90 },
        {
          label: tr(
            "about.methodologiesSkills.agile",
            language === "pt" ? "Desenvolvimento Ágil" : "Agile Development"
          ),
          value: 90,
        },
      ],
      defaultOpen: false,
    },
    {
      id: "tools",
      icon: Wrench,
      title: tr(
        "about.toolsTitle",
        language === "pt" ? "Ferramentas & Testes" : "Tools & Tests"
      ),
      meta: tr(
        "about.toolsMeta",
        language === "pt" ? "Em progresso" : "In progress"
      ),
      skills: [
        { label: "Git", value: 70 },
        { label: "GitHub", value: 70 },
        { label: "Jest", value: 10 },
        { label: "Cypress", value: 10 },
      ],
    },
    {
      id: "cloud",
      icon: Cloud,
      title: tr(
        "about.cloudTitle",
        language === "pt" ? "Nuvem & Deploy" : "Cloud & Deploy"
      ),
      meta: tr(
        "about.cloudMeta",
        language === "pt" ? "Em progresso" : "In progress"
      ),
      skills: [
        { label: "AWS", value: 10 },
        { label: "Vercel", value: 10 },
        { label: "CI/CD", value: 10 },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[#F9FAFB] dark:bg-[#0B1120] py-16 px-4 text-slate-800 dark:text-slate-100 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        {/* About Me (texto completo) */}
        <section className="mb-14">
          <h1 className="text-4xl font-bold mb-8 text-center text-slate-900 dark:text-white">
            {tr("hero.aboutMe", language === "pt" ? "Sobre mim" : "About Me")}
          </h1>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm dark:bg-white/5 dark:border-slate-700/40">
              <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300 whitespace-pre-line">
                {aboutTexts[language]}
              </p>
            </div>
          </div>
        </section>

        {/* Accordion de Skills */}
        <section>
          <div className="space-y-4">
            {categories.map((cat) => (
              <AccordionItem
                key={cat.id}
                id={cat.id}
                icon={cat.icon}
                title={cat.title}
                meta={cat.meta}
                defaultOpen={Boolean(cat.defaultOpen)}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {cat.skills
                    .sort((a, b) => a.value - b.value) // Ordena do menor para o maior valor
                    .map((s, i) => (
                      <ProgressItem
                        key={s.label}
                        label={s.label}
                        value={s.value}
                        delay={i * 120}
                      />
                    ))}
                </div>
              </AccordionItem>
            ))}
          </div>

          {/* Legend - Reordenada do menor para o maior */}
          <div className="mt-8 text-center">
            <div className="inline-flex items-center gap-6 text-sm text-slate-600 dark:text-slate-400">
              <div className="flex items-center gap-2">
                <div className="w-4 h-2 rounded-full bg-slate-400"></div>
                <span>{language === "pt" ? "Aprendendo" : "Learning"}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-2 rounded-full bg-amber-500"></div>
                <span>
                  {language === "pt"
                    ? "Intermediário (50%+)"
                    : "Intermediate (50%+)"}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-2 rounded-full bg-blue-500"></div>
                <span>
                  {language === "pt" ? "Avançado (70%+)" : "Advanced (70%+)"}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-2 rounded-full bg-emerald-500"></div>
                <span>
                  {language === "pt" ? "Especialista (90%+)" : "Expert (90%+)"}
                </span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutMe;
