import React from 'react';

const Portfolio = () => {
  const projects = [
    { title: 'Restaurant Website', color: 'bg-slate-600' },
    { title: 'E-Commerce System', color: 'bg-slate-600' },
    { title: 'Landing Page', color: 'bg-slate-600' },
    { title: 'Personal Finance Application', color: 'bg-slate-600' },
    { title: 'RPA (Robotic Process Automation) for Businesses', color: 'bg-gray-300', textColor: 'text-black' },
    { title: 'Customer Service Bots', color: 'bg-slate-600' },
    { title: 'ERP System', color: 'bg-slate-600' }
  ];

  return (
    <div className="bg-gray-50 pt-16 px-8 pb-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl font-bold text-gray-800 mb-12 text-left">My Portfolio</h1>

        <div className="grid grid-cols-4 gap-4 mb-4">
          {projects.slice(0, 4).map((project, index) => (
            <div key={index} className={`${project.color} rounded-xl p-6 h-32 flex items-center justify-center`}>
              <h2 className="text-white text-sm font-medium text-center leading-tight">
                {project.title}
              </h2>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-3 gap-4">
          {projects.slice(4).map((project, index) => (
            <div key={index} className={`${project.color} rounded-xl p-6 h-32 flex items-center justify-center`}>
              <h2 className={`${project.textColor || 'text-white'} text-sm font-medium text-center leading-tight`}>
                {project.title}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
