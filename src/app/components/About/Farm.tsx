'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const Farm = () => {
  return (
    <div className="pb-10 lg:py-16">
      <div className="container mx-auto">
        {/* Header Section */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800"
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            whileInView={{ 
              opacity: 1, 
              y: 0, 
              scale: 1,
              transition: {
                duration: 1.2,
                ease: "easeOut",
                delay: 0.2
              }
            }}
            viewport={{ once: true }}
          >
            When farmers succeed, everyone benefits
          </motion.h1>
        </motion.div>

        {/* Main Content Section */}
        <motion.div 
          className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {/* Text Content - Left Panel */}
          <motion.div 
            className="order-2 lg:order-1 bg-gradient-to-br from-red-600 to-red-700 text-white p-8 lg:p-12 rounded-2xl shadow-lg"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Protecting Your Potential
              </h2>
              
              <div className="space-y-4 text-white">
                <p className="text-lg leading-relaxed">
                  Doni Fruits also produces products through the farmers it collaborates with. 
                  In addition to the production partnership, Doni Fruits also supports farmers 
                  to be certified by the relevant institutions.
                </p>
                
                <p className="text-lg leading-relaxed">
                  We believe that the success of our farmers is the success of our company. 
                  Therefore, we provide full support for skill development and professional certification.
                </p>
              </div>

              {/* Feature Points */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-6">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-white font-medium">Production Partnership</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-white font-medium">Professional Certification</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-white font-medium">Technical Support</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-white font-medium">Sustainable Development</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Image Content - Right Panel */}
          <motion.div 
            className="order-1 lg:order-2 relative"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <Image
                src="/assets/main/main-image-1.png"
                alt="Farm Partnership - John Deere tractor working in field"
                width={600}
                height={400}
                className="w-full h-64 md:h-80 lg:h-96 object-cover"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              
              {/* Overlay Badge */}
              <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                <div className="text-center">
                  <div className="text-lg font-bold text-red-600">Partnership</div>
                  <div className="text-sm text-gray-600">with Farmers</div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Farm;
