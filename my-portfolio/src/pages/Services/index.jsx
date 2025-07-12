import React from 'react';

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-32 px-8 pb-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <h1 className="text-4xl font-bold text-gray-700 mb-16">Services</h1>
        
        {/* Cards Container */}
        <div className="flex flex-wrap gap-10 justify-center">
          {/* UI/UX Designer Card */}
          <div className="bg-gray-700 text-white p-8 rounded-xl w-80 h-64 flex flex-col justify-between transition-all duration-300 hover:bg-gray-600 hover:shadow-lg hover:scale-105 cursor-pointer">
            <h2 className="text-2xl font-semibold text-center">
              UI/UX Designer
            </h2>
            <p className="text-base text-gray-300 text-center leading-relaxed">
              Creating interfaces that prioritize clarity, beauty, and user experience — backed by behavioral insights and design principles.
            </p>
          </div>
          
          {/* Web Development Card */}
          <div className="bg-gray-600 text-white p-8 rounded-xl w-80 h-64 flex flex-col justify-between transition-all duration-300 hover:bg-gray-500 hover:shadow-lg hover:scale-105 cursor-pointer">
            <h2 className="text-2xl font-semibold text-center">
              Web Development
            </h2>
            <p className="text-base text-gray-300 text-center leading-relaxed">
              Building fast, responsive, and scalable websites using modern frameworks and best development practices.
            </p>
          </div>
          
          {/* Back-End Development Card */}
          <div className="bg-gray-700 text-white p-8 rounded-xl w-80 h-64 flex flex-col justify-between transition-all duration-300 hover:bg-gray-600 hover:shadow-lg hover:scale-105 cursor-pointer">
            <h2 className="text-2xl font-semibold text-center">
              Back-End Development
            </h2>
            <p className="text-base text-gray-300 text-center leading-relaxed">
              Architecting robust APIs, managing databases, and delivering secure server-side logic for every solution.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
