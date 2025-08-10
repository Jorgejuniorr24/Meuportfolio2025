import React, { useState, useEffect } from "react";
import {
  ChevronDown,
  Braces,
  Server,
  Palette,
  Cloud,
  Wrench,
} from "lucide-react";

/* ------------ Progress bar ------------ */
const ProgressItem = ({ label, value, delay = 0 }) => {
  const [animatedValue, setAnimatedValue] = useState(0);

  useEffect(() => {
    const t = setTimeout(() => setAnimatedValue(value), delay);
    return () => clearTimeout(t);
  }, [value, delay]);

  const color = (v) =>
    v >= 80
      ? "bg-emerald-500"
      : v >= 60
      ? "bg-blue-500"
      : v >= 40
      ? "bg-amber-500"
      : "bg-slate-400";

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

/* ------------ Accordion ------------ */
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

/* ------------ AboutMe ------------ */
const AboutMe = () => {
  // seu texto completo de apresentação (de volta!)
  const aboutText = `
I'm Jorge Oliveira, a full-stack developer from Salvador, Bahia, Brazil, passionate about building modern, high-performance web solutions that deliver exceptional user experiences. I hold degrees in Production Engineering and Systems Analysis and Development, as well as an MBA in Project Management. I have solid experience on the front-end with HTML, CSS, JavaScript/TypeScript, Angular, React, Next.js, TailwindCSS, and Bootstrap, crafting responsive, accessible, and visually engaging interfaces. On the back-end, I have working knowledge of Python, Node.js, SQL, and RESTful API integration, and I'm continuously improving my skills to design clean, secure, and scalable architectures. I apply Jest and Cypress to ensure code quality and reliability, while actively studying AWS and gaining hands-on experience with web application deployment and CI/CD pipelines. I'm proficient in Git and GitHub for version control, and use Figma to design intuitive user interfaces. My goal is to turn ideas into efficient, well-structured digital solutions that grow alongside the business, combining technical expertise, attention to detail, and a strong commitment to excellence.
`.trim();

  const categories = [
    {
      id: "frontend",
      icon: Braces,
      title: "Front-End",
      meta: " 2 anos",
      skills: [
        { label: "HTML5", value: 95 },
        { label: "CSS3", value: 100 },
        { label: "JavaScript", value: 95 },
        { label: "TypeScript", value: 70 },
        { label: "React", value: 80 },
        { label: "Next.js", value: 65 },
        { label: "Angular", value: 60 },
      ],
      defaultOpen: true,
    },
    {
      id: "design",
      icon: Palette,
      title: "Designer",
      meta: "2 anos",
      skills: [
        { label: "Figma", value: 90 },
        { label: "Tailwind CSS", value: 85 },
        { label: "Bootstrap", value: 80 },
        { label: "Responsive Design", value: 95 },
      ],
    },

    {
      id: "backend",
      icon: Server,
      title: "Back-End",
      meta: "Menos que 1 ano",
      skills: [
        { label: "Node.js", value: 35 },
        { label: "PostgreSQL", value: 30 },
        { label: "Python", value: 25 },
        { label: "REST APIs", value: 60 },
      ],
    },
    {
      id: "tools",
      icon: Wrench,
      title: "Ferramentas",
      meta: "Em evolução",
      skills: [
        { label: "Git", value: 85 },
        { label: "GitHub", value: 85 },
        { label: "Jest", value: 30 },
        { label: "Cypress", value: 25 },
      ],
    },
    {
      id: "cloud",
      icon: Cloud,
      title: "Cloud & Deploy",
      meta: "Em evolução",
      skills: [
        { label: "AWS", value: 20 },
        { label: "Vercel", value: 70 },
        { label: "CI/CD", value: 25 },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[#F9FAFB] dark:bg-[#0B1120] py-16 px-4 text-slate-800 dark:text-slate-100 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        {/* About Me (texto completo) */}
        <section className="mb-14">
          <h1 className="text-4xl font-bold mb-8 text-center text-slate-900 dark:text-white">
            About Me
          </h1>
          <div className="max-w-4xl mx-auto">
            <div
              className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm
                            dark:bg-white/5 dark:border-slate-700/40"
            >
              <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300 whitespace-pre-line">
                {aboutText}
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
                  {cat.skills.map((s, i) => (
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

          {/* Legend */}
          <div className="mt-8 text-center">
            <div className="inline-flex items-center gap-6 text-xs text-slate-600 dark:text-slate-400">
              <div className="flex items-center gap-2">
                <div className="w-3 h-1 rounded-full bg-emerald-500"></div>
                <span>Expert (80%+)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-1 rounded-full bg-blue-500"></div>
                <span>Advanced (60%+)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-1 rounded-full bg-amber-500"></div>
                <span>Intermediate (40%+)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-1 rounded-full bg-slate-400"></div>
                <span>Learning</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutMe;
