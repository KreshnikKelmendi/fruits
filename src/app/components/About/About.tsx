'use client';

import { motion } from 'framer-motion';
import CountUpText from './CountUpText';
import CompanyFeatures from './CompanyFeatures';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8
      }
    }
  };

  return (
    <>
      <motion.section 
        className="py-16 lg:py-24"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <motion.div 
            className="text-center mb-16"
            variants={itemVariants}
          >
            <motion.h2 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6"
              whileInView={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, ease: "easeInOut" }}
            >
              About <span className="text-red-600">Fruits</span>
            </motion.h2>
            <motion.div 
              className="w-24 h-1 bg-gradient-to-r from-red-600 to-green-600 mx-auto mb-8 rounded-full"
              whileInView={{ width: ["0%", "100%"] }}
              transition={{ duration: 1.5, delay: 0.5 }}
            />
            <motion.p 
              className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              variants={itemVariants}
            >
              We are passionate about bringing you the freshest, highest-quality fruits and vegetables 
              directly from our farms. Our commitment to sustainable farming and customer satisfaction 
              has made us a trusted name in the industry for over 15 years.
            </motion.p>
          </motion.div>

          {/* Mission & Vision */}
          <motion.div 
            className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-16"
            variants={itemVariants}
          >
            {/* Mission */}
            <motion.div 
              className="bg-gradient-to-br from-red-600 to-red-700 rounded-3xl p-8 lg:p-12 text-white relative overflow-hidden"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-white bg-opacity-10 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white bg-opacity-10 rounded-full translate-y-12 -translate-x-12"></div>
              <div className="relative z-10">
                <div className="text-5xl mb-6">🎯</div>
                <h3 className="text-2xl lg:text-3xl font-bold mb-6">Our Mission</h3>
                <p className="text-lg leading-relaxed opacity-90">
                  To provide fresh, organic, and nutritious fruits and vegetables to every household, 
                  promoting healthy living while supporting sustainable farming practices and local communities.
                </p>
              </div>
            </motion.div>

            {/* Vision */}
            <motion.div 
              className="bg-gradient-to-br from-green-600 to-green-700 rounded-3xl p-8 lg:p-12 text-white relative overflow-hidden"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute top-0 left-0 w-32 h-32 bg-white bg-opacity-10 rounded-full -translate-y-16 -translate-x-16"></div>
              <div className="absolute bottom-0 right-0 w-24 h-24 bg-white bg-opacity-10 rounded-full translate-y-12 translate-x-12"></div>
              <div className="relative z-10">
                <div className="text-5xl mb-6">🌟</div>
                <h3 className="text-2xl lg:text-3xl font-bold mb-6">Our Vision</h3>
                <p className="text-lg leading-relaxed opacity-90">
                  To become the leading provider of fresh produce, creating a healthier world through 
                  innovative farming techniques, exceptional customer service, and environmental responsibility.
                </p>
              </div>
            </motion.div>
          </motion.div>

         
        </div>
         {/* Counter Section */}
         <div className="pt-4 lg:pt-16">
            <CountUpText />
          </div>
      </motion.section>
      
      {/* Company Features Section */}
      <CompanyFeatures />
    </>
  );
};

export default About;