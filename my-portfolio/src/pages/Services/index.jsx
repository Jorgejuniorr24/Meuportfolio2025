import React from 'react';

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-8 px-8 pb-16">

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <h1 className="text-4xl font-bold text-gray-700 mb-12">Services</h1>
        
        {/* Cards Container */}
        <div className="flex gap-6 justify-center">
          {/* UI/UX Designer Card */}
          <div className="bg-gray-700 text-white p-6 rounded w-80 h-40 flex flex-col transition-all duration-300 hover:bg-gray-600 hover:shadow-lg hover:scale-105 cursor-pointer">
            <h2 className="text-xl font-semibold mb-4 text-center">
              UI/UX<br />Designer
            </h2>
            <p className="text-sm text-gray-300 text-center leading-relaxed">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
            </p>
          </div>
          
          {/* Web Development Card */}
          <div className="bg-gray-600 text-white p-6 rounded w-80 h-40 flex flex-col transition-all duration-300 hover:bg-gray-500 hover:shadow-lg hover:scale-105 cursor-pointer">
            <h2 className="text-xl font-semibold mb-4 text-center">
              Web Development
            </h2>
            <p className="text-sm text-gray-300 text-center leading-relaxed">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
            </p>
          </div>
          
          {/* Back-End Development Card */}
          <div className="bg-gray-700 text-white p-6 rounded w-80 h-40 flex flex-col transition-all duration-300 hover:bg-gray-600 hover:shadow-lg hover:scale-105 cursor-pointer">
            <h2 className="text-xl font-semibold mb-4 text-center">
              Back-End Development
            </h2>
            <p className="text-sm text-gray-300 text-center leading-relaxed">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}