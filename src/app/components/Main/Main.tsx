'use client';

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

export default function Main() {
  const router = useRouter();

  const handleViewMore = () => {
    router.push('/products');
  };

  const handleLearnMore = () => {
    router.push('/about');
  };

  return (
    <main 
      className="w-full h-screen bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage: "url('/assets/main/main-image-1.png')"
      }}
    >
      {/* Animated Text Overlay */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <motion.h2 
            className="text-7xl md:text-6xl lg:text-9xl font-bold text-white mb-6 hover:scale-110 hover:text-green-300 transition-all duration-1000"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            Fruits
          </motion.h2>
          <motion.p 
            className="text-2xl md:text-3xl text-white/90 font-medium hover:text-white hover:scale-105 transition-all duration-1000 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.5 }}
          >
            <motion.span
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 2, ease: "easeInOut", delay: 1.5 }}
              className="inline-block overflow-hidden whitespace-nowrap"
            >
              From Nature to Your Table
              <motion.span
                className="border-r-2 border-white"
                animate={{ borderColor: ["white", "transparent"] }}
                transition={{ duration: 0.1, delay: 3.5 }}
              />
            </motion.span>
          </motion.p>
          
          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <motion.button
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-12 rounded-2xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 3.8, ease: "easeOut" }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleViewMore}
            >
              View More
            </motion.button>
            
            <motion.button
              className="bg-white hover:bg-gray-100 text-red-600 font-bold py-2 px-12 rounded-2xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 4.0, ease: "easeOut" }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleLearnMore}
            >
              Learn More
            </motion.button>
          </div>
        </div>
      </div>
    </main>
  );
}