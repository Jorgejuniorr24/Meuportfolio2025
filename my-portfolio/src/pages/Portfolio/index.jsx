import React from "react";

const Portfolio = () => {
  const projectsTop = [
    { title: "Restaurant Website" },
    { title: "E-Commerce System" },
    { title: "Landing Page" },
    { title: "Personal Finance Application" },
  ];

  const projectsBottom = [
    { title: "RPA (Robotic Process Automation) for Businesses" },
    { title: "Customer Service Bots" },
    { title: "ERP for Medical Clinics" },
    { title: "ERP for Supplies Commerce" },
    { title: "ERP for Beauty Salons & Barbershops" },
    { title: "Micro SaaS" },
  ];

  const renderCard = (project, index) => (
    <div
      key={index}
      className="bg-slate-600 dark:bg-gray-700 rounded-xl p-6 h-32 flex items-center justify-center shadow hover:shadow-lg transition"
    >
      <h2 className="text-white dark:text-gray-200 text-sm font-medium text-center leading-tight">
        {project.title}
      </h2>
    </div>
  );

  return (
    <div className="bg-gray-50 dark:bg-[#0B1120] pt-16 px-8 pb-6 text-gray-900 dark:text-white transition-colors duration-300">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-16 text-center">My Portfolio</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
          {projectsTop.map(renderCard)}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {projectsBottom.map(renderCard)}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
