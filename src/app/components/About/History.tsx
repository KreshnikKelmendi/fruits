'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const History = () => {
  return (
    <div className="py-16">
      <div className="container mx-auto">
        <motion.div 
          className="rounded-2xl  overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="grid lg:grid-cols-2 min-h-[600px]">
            {/* Image Section */}
            <motion.div 
              className="relative order-2 lg:order-1"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Image
                src="/assets/main/main-image-1.png"
                alt="Company History"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-red-600/20 to-transparent"></div>
              
              {/* Floating Stats */}
              <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold text-red-600">1958</div>
                  <div className="text-xs text-gray-600">Founded</div>
                </div>
              </div>
            </motion.div>

            {/* Text Section */}
            <motion.div 
              className="order-1 lg:order-2 p-8 lg:p-12 flex flex-col justify-center"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="space-y-8">
                {/* Header */}
                <div>
                  <div className="inline-flex items-center bg-red-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Since 1958
                  </div>
                  <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
                    Our <span className="text-red-600">Heritage</span>
                  </h2>
                  <div className="w-20 h-1 bg-gradient-to-r from-red-600 to-green-600 rounded-full"></div>
                </div>

                {/* Content */}
                <div className="space-y-6 text-gray-600">
                  <p className="text-lg leading-relaxed">
                    For over six decades, we've been cultivating excellence in every harvest, 
                    bringing nature's finest to your table with unwavering dedication.
                  </p>
                  
                  <p className="text-lg leading-relaxed">
                    Our journey began as a humble family farm, rooted in traditional values 
                    and a deep respect for the land. Today, we continue to honor that legacy 
                    while embracing sustainable farming practices.
                  </p>
                </div>

                {/* Achievement Cards */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gradient-to-br from-red-600 to-red-700 text-white p-6 rounded-2xl">
                    <div className="text-3xl font-bold mb-2">65+</div>
                    <div className="text-sm opacity-90">Years of Excellence</div>
                  </div>
                  <div className="bg-gradient-to-br from-green-600 to-green-700 text-white p-6 rounded-2xl">
                    <div className="text-3xl font-bold mb-2">100%</div>
                    <div className="text-sm opacity-90">Quality Guaranteed</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default History;