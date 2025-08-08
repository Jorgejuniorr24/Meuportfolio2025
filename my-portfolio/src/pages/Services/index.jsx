import React from "react";
import { Code, Palette, Server } from "lucide-react";

const servicesData = [
  {
    id: "ui-ux-designer",
    title: "UI/UX Designer",
    description:
      "Creating interfaces that prioritize clarity, beauty, and user experience — backed by behavioral insights and design principles.",
    icon: <Palette className="w-8 h-8" />,
    iconColor: "text-blue-400",
  },
  {
    id: "web-development",
    title: "Web Development",
    description:
      "Building fast, responsive, and scalable websites using modern frameworks and best development practices.",
    icon: <Code className="w-8 h-8" />,
    iconColor: "text-green-400",
  },
  {
    id: "backend-development",
    title: "Back-End Development",
    description:
      "Architecting robust APIs, managing databases, and delivering secure server-side logic for every solution.",
    icon: <Server className="w-8 h-8" />,
    iconColor: "text-purple-400",
  },
];

const ServiceCard = ({ service, onCardClick }) => {
  const { id, title, description, icon, iconColor } = service;

  return (
    <div
      onClick={() => onCardClick(id)}
      className="
        bg-gray-100 dark:bg-gray-800 
        hover:bg-gray-200 dark:hover:bg-gray-700 
        text-gray-900 dark:text-white
        p-8 rounded-xl w-[21.6rem] h-[18rem] 
        flex flex-col justify-between
        transition-all duration-300 
        hover:shadow-lg hover:scale-105 
        cursor-pointer
        border border-gray-300 dark:border-gray-700 
        hover:border-gray-400 dark:hover:border-gray-500
      "
      role="button"
      tabIndex={0}
      aria-label={`Learn more about ${title}`}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          onCardClick(id);
        }
      }}
    >
      <div className="flex flex-col items-center gap-4">
        <div
          className={`${iconColor} p-2 rounded-lg bg-white/10 dark:bg-black/20`}
        >
          {icon}
        </div>
        <h2 className="text-2xl font-semibold text-center">{title}</h2>
      </div>

      <p className="text-base text-gray-600 dark:text-gray-300 text-center leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default function ServicesPage() {
  const handleCardClick = (serviceId) => {
    console.log(`Service clicked: ${serviceId}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#0B1120] pt-32 px-8 pb-20 transition-colors duration-300 border-none">
      <div className="max-w-7xl mx-auto">
        <header className="mb-16 text-center">
          <h1 className="text-4xl font-bold text-gray-700 dark:text-white mb-4">
            Services
          </h1>
        </header>

        <section>
          <div className="flex flex-wrap gap-10 justify-center">
            {servicesData.map((service) => (
              <ServiceCard
                key={service.id}
                service={service}
                onCardClick={handleCardClick}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
