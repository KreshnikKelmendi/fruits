'use client';

import React from 'react';

const Services = () => {
  const services = [
    {
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      title: "Production",
      description: "We produce our own fresh products which are then sold domestically and internationally."
    },
    {
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          <circle cx="12" cy="12" r="10" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 2v4m0 14v4m10-10h-4m-14 0H2" />
        </svg>
      ),
      title: "Collection",
      description: "Besides production, we also collect products from local farmers, helping them certify their products through credible institutions."
    },
    {
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      ),
      title: "Supply",
      description: "We offer supply services to other sales points besides our existing locations."
    }
  ];

  return (
    <section className="relative min-h-screen bg-cover bg-center bg-no-repeat mt-20" 
             style={{ backgroundImage: "url('/assets/services/services-1.png')" }}>
      
      {/* Content positioned absolutely over background */}
      <div className="relative z-10 min-h-screen flex flex-col justify-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main White Panel */}
          <div className="bg-white rounded-3xl shadow-2xl p-12">
            {/* Header */}
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
                Our Services
              </h2>
            </div>

            {/* Services List - Single Column */}
            <div className="space-y-8">
              {services.map((service, index) => (
                <div key={index} className="flex items-start space-x-6">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 border-2 border-red-500 rounded-lg flex items-center justify-center text-red-500">
                      {service.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-black mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-700 text-lg leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
