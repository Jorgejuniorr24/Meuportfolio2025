// src/pages/About/index.jsx
import React, { useState, useEffect } from "react";

const ProgressItem = ({ label, value, selected, onSelect, delay = 0 }) => {
  const [animatedValue, setAnimatedValue] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedValue(value);
    }, delay);
    return () => clearTimeout(timer);
  }, [value, delay]);

  const handleKey = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onSelect?.(label);
    }
  };

  return (
    <div className="group relative overflow-hidden rounded-2xl">
      {/* tapete azul sempre visível com gradiente mais suave */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/8 via-blue-500/6 to-indigo-500/8" />

      {/* anel extra quando selecionado com glow effect */}
      {selected && (
        <>
          <div className="pointer-events-none absolute inset-0 rounded-2xl ring-2 ring-blue-400/40 animate-pulse" />
          <div className="pointer-events-none absolute inset-0 rounded-2xl bg-blue-500/5" />
        </>
      )}

      {/* pill com fundo e borda aprimorada */}
      <div
        role="button"
        tabIndex={0}
        onClick={() => onSelect?.(label)}
        onKeyDown={handleKey}
        className={`relative z-10 flex items-center justify-between px-5 py-4 rounded-2xl transition-all duration-300 cursor-pointer backdrop-blur-sm
          ${
            selected
              ? "bg-[#1e293b]/90 border border-blue-400/40 shadow-lg shadow-blue-500/10"
              : "bg-[#0f172a]/80 border border-white/8 hover:bg-[#1e293b]/60 hover:border-white/12"
          }
        `}
      >
        <span
          className={`text-base font-medium transition-colors duration-300 ${
            selected ? "text-slate-100" : "text-slate-200"
          }`}
        >
          {label}
        </span>

        <div className="flex items-center gap-5 w-3/5 md:w-1/2">
          {/* trilha da barra de progresso */}
          <div
            className={`relative flex-1 h-3 rounded-full overflow-hidden transition-all duration-300 ${
              selected
                ? "bg-slate-800/90 ring-1 ring-blue-500/20"
                : "bg-slate-800/70"
            }`}
          >
            {/* barra de progresso com gradiente aprimorado */}
            <div
              className={`absolute inset-y-0 left-0 rounded-full transition-all duration-1000 ease-out
                          bg-gradient-to-r from-blue-500 via-blue-400 to-indigo-500
                          ${
                            selected
                              ? "brightness-110 saturate-125 shadow-lg shadow-blue-500/30"
                              : "group-hover:brightness-105"
                          }`}
              style={{
                width: `${animatedValue}%`,
                transform: selected ? "scaleY(1.1)" : "scaleY(1)",
              }}
            >
              {/* efeito de brilho animado */}
              <div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent 
                           w-1/3 animate-pulse"
                style={{
                  animationDuration: "2s",
                  animationDelay: `${delay}ms`,
                }}
              />
            </div>

            {/* cap no final da barra */}
            <div
              className={`absolute top-0 h-full w-1.5 bg-slate-900/60 rounded-r-full transition-all duration-300 ${
                selected ? "bg-slate-900/80" : ""
              }`}
              style={{ right: `calc(100% - ${animatedValue}%)` }}
            />
          </div>

          {/* porcentagem com estilo aprimorado */}
          <span
            className={`text-xs font-bold tracking-wide transition-all duration-300 ${
              selected
                ? "text-blue-300 scale-105"
                : "text-blue-400/90 group-hover:text-blue-300"
            }`}
          >
            {value}%
          </span>
        </div>
      </div>
    </div>
  );
};

const CardContainer = ({ children, className = "" }) => (
  <div
    className={`
      relative overflow-hidden
      rounded-2xl bg-[#0f172a] border border-white/5
      shadow-xl shadow-black/40 p-6 md:p-7
      transition-all duration-200 ease-in-out
      ${className}
    `}
  >
    {children}
  </div>
);

const SectionHeader = ({ title }) => (
  <div className="flex items-center gap-4 mb-6">
    <div className="w-3 h-3 rounded-sm bg-blue-500/80" />
    <h3 className="text-xl md:text-2xl font-semibold text-slate-100">
      {title}
    </h3>
  </div>
);

const AboutMe = () => {
  const [selected, setSelected] = useState(null);

  const handleSelect = (label) => {
    setSelected((cur) => (cur === label ? null : label));
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#0B1120] py-16 px-4 text-gray-900 dark:text-white transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        {/* About Me */}
        <section className="mb-20">
          <h1 className="text-4xl font-bold mb-16 text-center">About Me</h1>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg leading-relaxed font-normal">
              My name is <strong>Jorge Oliveira</strong>, and I am from
              Salvador, BA, Brazil. I hold a degree in Production Engineering
              and Systems Analysis and Development, with an MBA in Project
              Management. I have experience in front-end development using
              technologies such as Angular, React, HTML, CSS, and JavaScript to
              create modern and dynamic interfaces. In the back-end, I have
              knowledge of Python, Node.js, SQL, and integration with RESTful
              APIs, always striving to deliver efficient and scalable solutions.
              Additionally, I am familiar with version control tools such as Git
              and GitHub, I have experience with web application deployment,
              ensuring continuous and high-quality delivery of projects.
            </p>
          </div>
        </section>

        {/* Hard Skills */}
        <section className="mt-10">
          <h2 className="text-4xl font-bold mb-10 text-center">Hard Skills</h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-7">
            {/* Frontend */}
            <CardContainer>
              <SectionHeader title="Frontend" />
              <div className="space-y-4">
                {[
                  { label: "HTML5", value: 100 },
                  { label: "CSS3", value: 100 },
                  { label: "JavaScript", value: 100 },
                  { label: "TypeScript", value: 50 },
                  { label: "React", value: 70 },
                  { label: "Angular", value: 50 },
                  { label: "Next.js", value: 50 },
                  { label: "Tailwind", value: 50 },
                  { label: "Bootstrap", value: 50 },
                ].map((skill, index) => (
                  <ProgressItem
                    key={skill.label}
                    label={skill.label}
                    value={skill.value}
                    selected={selected === skill.label}
                    onSelect={handleSelect}
                    delay={index * 100}
                  />
                ))}
              </div>
            </CardContainer>

            {/* Ferramentas & Testing + Back End */}
            <CardContainer>
              <SectionHeader title="Ferramentas & Testing - Estudo em andamento" />
              <div className="space-y-3">
                {[
                  { label: "Jest", value: 10 },
                  { label: "Cypress", value: 10 },
                  { label: "Git", value: 80 },
                  { label: "Figma", value: 90 },
                ].map((skill, index) => (
                  <ProgressItem
                    key={skill.label}
                    label={skill.label}
                    value={skill.value}
                    selected={selected === skill.label}
                    onSelect={handleSelect}
                    delay={index * 100}
                  />
                ))}
              </div>

              <div className="my-7 h-px bg-white/10" />

              <SectionHeader title="Back End — Estudo em andamento" />
              <div className="space-y-4">
                {[
                  { label: "Node.js", value: 10 },
                  { label: "PostgreSQL", value: 10 },
                  { label: "Python", value: 10 },
                ].map((skill, index) => (
                  <ProgressItem
                    key={skill.label}
                    label={skill.label}
                    value={skill.value}
                    selected={selected === skill.label}
                    onSelect={handleSelect}
                    delay={index * 100}
                  />
                ))}
              </div>
            </CardContainer>

            {/* DevOps */}
            <CardContainer>
              <SectionHeader title="DevOps & Cloud — Estudo em andamento" />
              <div className="space-y-4">
                <ProgressItem
                  label="AWS"
                  value={10}
                  selected={selected === "AWS"}
                  onSelect={handleSelect}
                  delay={0}
                />
              </div>
            </CardContainer>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutMe;
