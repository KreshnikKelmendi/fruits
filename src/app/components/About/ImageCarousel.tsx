'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import History from './History';
import Farm from './Farm';

const ImageCarousel = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const imagesPerPage = 4;

  // Sample images - you can replace these with actual images
  const images = [
    {
      id: 1,
      src: '/assets/about/about-1.png',
      alt: 'Fresh Fruits 1',
      title: 'Fresh Apples'
    },
    {
      id: 2,
      src: '/assets/about/about-2.png',
      alt: 'Fresh Fruits 2',
      title: 'Organic Oranges'
    },
    {
      id: 3,
      src: '/assets/about/about-3.png',
      alt: 'Fresh Fruits 3',
      title: 'Sweet Bananas'
    },
    {
      id: 4,
      src: '/assets/about/about-4.png',
      alt: 'Fresh Fruits 4',
      title: 'Juicy Grapes'
    },
    {
      id: 5,
      src: '/assets/about/about-5.jpg',
      alt: 'Fresh Fruits 5',
      title: 'Fresh Strawberries'
    },
    {
        id: 6,
        src: '/assets/about/about-6.png',
        alt: 'Fresh Fruits 3',
        title: 'Sweet Bananas'
      },
      {
        id: 7,
        src: '/assets/about/about-7.jpg',
        alt: 'Fresh Fruits 4',
        title: 'Juicy Grapes'
      },
      {
        id: 8,
        src: '/assets/about/about-8.png',
        alt: 'Fresh Fruits 5',
        title: 'Fresh Strawberries'
      }
  ];

  const totalPages = Math.ceil(images.length / imagesPerPage);
  
  const nextPage = () => {
    setCurrentPage((prevPage) => 
      prevPage === totalPages - 1 ? 0 : prevPage + 1
    );
  };

  const prevPage = () => {
    setCurrentPage((prevPage) => 
      prevPage === 0 ? totalPages - 1 : prevPage - 1
    );
  };

  const goToPage = (page: number) => {
    setCurrentPage(page);
  };

  const getCurrentPageImages = () => {
    const startIndex = currentPage * imagesPerPage;
    const endIndex = startIndex + imagesPerPage;
    return images.slice(startIndex, endIndex);
  };

  return (
    <div className="w-full mx-auto px-4 lg:px-8 pt-4 lg:pt-8">
      {/* Company History Section */}
      <div className="container mx-auto py-8 lg:py-10">
        <div className="bg-red-600 rounded-2xl p-8 md:p-12 relative overflow-hidden shadow-2xl">
          <div className="relative  text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Our <span className="text-yellow-300">Story</span>
            </h2>

            <div className="max-w-4xl mx-auto">
              <p className="text-lg md:text-xl text-white leading-relaxed ">
                Our corporation was founded in <span className="font-bold text-yellow-300">1958</span>, initially starting as a small family business 
                with the main purpose of collecting, cultivating, and exporting fruits and vegetables. 
                What began as a humble family enterprise has grown into a trusted name in the industry, 
                bringing fresh, quality produce from nature to your table.
              </p>
            </div>
            
            <div className="mt-8 flex justify-center">
              <div className="flex items-center space-x-4 text-white">
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-300">65+</div>
                  <div className="text-sm opacity-80">Years</div>
                </div>
                <div className="w-px h-8 bg-white bg-opacity-30"></div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-300">Family</div>
                  <div className="text-sm opacity-80">Business</div>
                </div>
                <div className="w-px h-8 bg-white bg-opacity-30"></div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-300">Fresh</div>
                  <div className="text-sm opacity-80">Quality</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Grid Layout - 4 columns on large screens, 2 on mobile */}
      <div className="relative container  mx-auto pb-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {getCurrentPageImages().map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative overflow-hidden rounded-2xl"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 md:h-80 lg:h-96 object-cover"
              />
            </motion.div>
          ))}
        </div>

        {/* Pagination - Absolute positioned with red-600 background */}
        {totalPages > 1 && (
          <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2">
            <div className="bg-red-600 rounded-full px-4 py-2 shadow-lg">
              <div className="flex items-center space-x-1">
                {/* Previous Button */}
                <button
                  onClick={prevPage}
                  className="p-1 text-white hover:bg-red-700 rounded-full transition-colors duration-200"
                  aria-label="Previous page"
                >
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                {/* Page Numbers */}
                <div className="flex items-center space-x-1">
                  {Array.from({ length: totalPages }, (_, index) => (
                    <button
                      key={index}
                      onClick={() => goToPage(index)}
                      className={`w-6 h-6 rounded-full text-xs font-medium transition-all duration-200 ${
                        currentPage === index
                          ? 'bg-white text-red-600 shadow-md'
                          : 'text-white hover:bg-red-700'
                      }`}
                    >
                      {index + 1}
                    </button>
                  ))}
                </div>

                {/* Next Button */}
                <button
                  onClick={nextPage}
                  className="p-1 text-white hover:bg-red-700 rounded-full transition-colors duration-200"
                  aria-label="Next page"
                >
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      
      {/* History Section */}
      <History />
      
      {/* Farm Section */}
      <Farm />
    </div>
  );
};

export default ImageCarousel;