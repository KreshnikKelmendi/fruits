'use client';

import React, { useState } from 'react';
import { products, categories } from '../data/product';
import Image from 'next/image';
import Link from 'next/link';

interface ProductsProps {
  showSeeAllButton?: boolean;
}

const Products = ({ showSeeAllButton = false }: ProductsProps) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const productsPerPage = 12;
  
  // Filter products based on selected category
  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(product => product.category === selectedCategory);
  
  // For homepage, show only first 8 products. For products page, show paginated results
  const isHomepage = showSeeAllButton;
  
  // Calculate pagination (only for products page)
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const startIndex = isHomepage ? 0 : (currentPage - 1) * productsPerPage;
  const endIndex = isHomepage ? 8 : startIndex + productsPerPage;
  const currentProducts = filteredProducts.slice(startIndex, endIndex);

  // Reset to first page when category changes (only for products page)
  React.useEffect(() => {
    if (!isHomepage) {
      setCurrentPage(1);
    }
  }, [selectedCategory, isHomepage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // Scroll to top of products section
    const productsSection = document.getElementById('products-section');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCategoryChange = (category: string) => {
    setIsLoading(true);
    setTimeout(() => {
      setSelectedCategory(category);
      setCurrentPage(1);
      setIsLoading(false);
    }, 1500);
  };

  const renderPagination = () => {
    const pages = [];
    
    // Show all pages since we have limited pages
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }

    return (
      <div className="flex justify-center items-center space-x-2 mt-12">
        {/* Previous Button */}
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
            currentPage === 1
              ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
              : 'bg-red-600 text-white hover:bg-red-700 hover:scale-105'
          }`}
        >
          Previous
        </button>

        {/* Page Numbers */}
        {pages.map((page, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(page)}
            className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
              currentPage === page
                ? 'bg-red-600 text-white scale-105'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-105'
            }`}
          >
            {page}
          </button>
        ))}

        {/* Next Button */}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
            currentPage === totalPages
              ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
              : 'bg-red-600 text-white hover:bg-red-700 hover:scale-105'
          }`}
        >
          Next
        </button>
      </div>
    );
  };

  return (
    <section id="products-section" className="py-16 px-4 lg:px-8">
      <div className="container mx-auto">
        {/* Header Text */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Our Fresh Products
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our premium selection of fresh fruits, carefully selected for quality and taste
          </p>
        </div>

        {/* Category Filters - Only show on products page */}
        {!isHomepage && (
          <div className="grid grid-cols-2 sm:flex sm:flex-wrap sm:justify-center gap-4 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                disabled={isLoading}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-red-600 text-white shadow-lg transform scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-105'
                } ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                {isLoading && selectedCategory === category ? (
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Loading...</span>
                  </div>
                ) : (
                  category
                )}
              </button>
            ))}
          </div>
        )}

        {/* Products Grid */}
        <div className="relative">
          {isLoading && (
            <div className="absolute inset-0 bg-white bg-opacity-75 flex items-center justify-center z-10 rounded-lg">
              <div className="flex flex-col items-center space-y-4">
                <div className="w-8 h-8 border-4 border-red-600 border-t-transparent rounded-full animate-spin"></div>
                <p className="text-red-600 font-semibold">Loading products...</p>
              </div>
            </div>
          )}
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 gap-y-12 mb-8">
            {currentProducts.map((product, index) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-500 ease-in-out hover:shadow-xl hover:scale-105"
              style={{ 
                animationDelay: `${index * 100}ms`,
                transition: 'all 0.5s ease-in-out'
              }}
            >
              {/* Product Image Section */}
              <div className="relative h-44 lg:h-[48vh] bg-gray-50 p-6">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-contain"
                  onError={(e) => {
                    // Fallback to a placeholder if image doesn't exist
                    const target = e.target as HTMLImageElement;
                    target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjNmNGY2Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzZiNzI4MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlIG5vdCBmb3VuZDwvdGV4dD48L3N2Zz4=';
                  }}
                />
              </div>

              {/* Product Content Section */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-3 text-center">
                  {product.title}
                </h3>
                <p className="text-sm text-gray-600 text-center mb-4 leading-relaxed">
                  {product.description}
                </p>
                <div className="text-center">
                  <span className="inline-block bg-red-100 text-red-600 px-3 py-1 rounded-full text-xs font-semibold">
                    {product.category}
                  </span>
                </div>
              </div>
            </div>
            ))}
          </div>
        </div>

        {/* Pagination - Only show on products page */}
        {!isHomepage && totalPages > 1 && renderPagination()}

        {/* See All Button - Only show on homepage */}
        {showSeeAllButton && (
          <div className="flex justify-center mt-8">
            <Link 
              href="/products"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              See All Products
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default Products;