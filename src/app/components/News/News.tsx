'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface NewsItem {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
  category: string;
}

const newsData: NewsItem[] = [
  {
    id: 1,
    title: "Fresh Harvest Season Begins",
    excerpt: "Our farm is excited to announce the start of the fresh harvest season with premium quality fruits.",
    content: "This season brings us the finest selection of organic fruits, carefully cultivated using sustainable farming practices. We're proud to offer our customers the freshest produce available.",
    image: "/assets/products/product-1.png",
    date: "2024-01-15",
    category: "Harvest"
  },
  {
    id: 2,
    title: "New Organic Certification",
    excerpt: "We're proud to announce our official organic certification for all our fruit varieties.",
    content: "After months of rigorous testing and compliance with organic standards, our farm has received official organic certification. This ensures our customers receive the highest quality, chemical-free fruits.",
    image: "/assets/products/product-2.png",
    date: "2024-01-10",
    category: "Certification"
  },
  {
    id: 3,
    title: "Sustainable Farming Practices",
    excerpt: "Learn about our commitment to sustainable farming and environmental protection.",
    content: "Our farm implements cutting-edge sustainable farming techniques that protect the environment while producing exceptional fruits. We use renewable energy, water conservation methods, and natural pest control.",
    image: "/assets/products/product-3.png",
    date: "2024-01-05",
    category: "Sustainability"
  },
  {
    id: 4,
    title: "Community Partnership Program",
    excerpt: "We're launching a new program to support local communities and farmers.",
    content: "Our community partnership program aims to support local farmers and communities by providing training, resources, and fair trade opportunities. Together, we're building a stronger agricultural community.",
    image: "/assets/products/product-4.png",
    date: "2024-01-01",
    category: "Community"
  },
  {
    id: 5,
    title: "Winter Fruit Varieties Available",
    excerpt: "Discover our special winter fruit collection featuring seasonal favorites.",
    content: "Winter brings unique fruit varieties that thrive in cooler temperatures. Our winter collection includes citrus fruits, apples, and other seasonal specialties that are perfect for the colder months.",
    image: "/assets/products/product-5.png",
    date: "2023-12-28",
    category: "Seasonal"
  },
  {
    id: 6,
    title: "Farm-to-Table Initiative",
    excerpt: "Our new farm-to-table program ensures the freshest fruits reach your table.",
    content: "The farm-to-table initiative reduces the time between harvest and delivery, ensuring maximum freshness and nutritional value. Our fruits are picked at peak ripeness and delivered within 24 hours.",
    image: "/assets/products/product-1.png",
    date: "2023-12-20",
    category: "Quality"
  },
  {
    id: 7,
    title: "Seasonal Fruit Calendar",
    excerpt: "Discover our comprehensive seasonal fruit calendar for year-round freshness.",
    content: "Our seasonal fruit calendar helps you plan your fruit purchases throughout the year. Each season brings unique flavors and nutritional benefits from our carefully selected fruit varieties.",
    image: "/assets/products/product-2.png",
    date: "2023-12-15",
    category: "Seasonal"
  },
  {
    id: 8,
    title: "Nutritional Benefits Guide",
    excerpt: "Learn about the amazing nutritional benefits of our fresh fruits.",
    content: "Our fruits are packed with essential vitamins, minerals, and antioxidants. Each variety offers unique health benefits that contribute to a balanced and nutritious diet.",
    image: "/assets/products/product-3.png",
    date: "2023-12-10",
    category: "Health"
  },
  {
    id: 9,
    title: "Farm Tours Available",
    excerpt: "Book a guided tour of our farm to see our sustainable practices firsthand.",
    content: "Experience our farm through guided tours where you can see our sustainable farming methods, meet our team, and learn about the journey from seed to harvest.",
    image: "/assets/products/product-4.png",
    date: "2023-12-05",
    category: "Tours"
  },
  {
    id: 10,
    title: "Winter Storage Tips",
    excerpt: "Expert tips for storing fruits during winter months.",
    content: "Proper storage techniques ensure your fruits maintain their freshness and nutritional value throughout the winter months. Learn our expert tips for optimal fruit storage.",
    image: "/assets/products/product-5.png",
    date: "2023-11-28",
    category: "Tips"
  },
  {
    id: 11,
    title: "New Fruit Varieties",
    excerpt: "Introducing exciting new fruit varieties to our collection.",
    content: "We're excited to introduce new fruit varieties that bring unique flavors and textures to our collection. These carefully selected additions expand our diverse fruit offerings.",
    image: "/assets/products/product-1.png",
    date: "2023-11-20",
    category: "New"
  },
  {
    id: 12,
    title: "Holiday Fruit Gifts",
    excerpt: "Perfect fruit gift baskets for the holiday season.",
    content: "Our specially curated fruit gift baskets make perfect presents for the holidays. Each basket is carefully assembled with our finest seasonal fruits and beautifully packaged.",
    image: "/assets/products/product-2.png",
    date: "2023-11-15",
    category: "Gifts"
  }
];

const News = () => {
  const [visibleArticles, setVisibleArticles] = useState(4);
  const [isLoading, setIsLoading] = useState(false);

  const handleLoadMore = () => {
    setIsLoading(true);
    setTimeout(() => {
      setVisibleArticles(prev => Math.min(prev + 4, newsData.length));
      setIsLoading(false);
    }, 1000);
  };

  const handleLoadLess = () => {
    setIsLoading(true);
    setTimeout(() => {
      setVisibleArticles(prev => Math.max(prev - 4, 4));
      setIsLoading(false);
    }, 1000);
  };

  const displayedArticles = newsData.slice(0, visibleArticles);
  const hasMoreArticles = visibleArticles < newsData.length;
  const hasLessArticles = visibleArticles > 4;

  return (
    <section className="py-16 px-4 lg:px-8">
      <div className="container mx-auto">
        {/* Header Text */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Latest News & Updates
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Stay updated with our latest news, farming practices, and community initiatives
          </p>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {displayedArticles.map((newsItem, index) => (
            <article
              key={newsItem.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
              style={{ 
                animationDelay: `${index * 100}ms`,
                transition: 'all 0.5s ease-in-out'
              }}
            >
              <div className="flex flex-col lg:flex-row">
                {/* News Image - Left side on large screens */}
                <div className="relative h-48 lg:h-64 lg:w-1/2">
                  <Image
                    src={newsItem.image}
                    alt={newsItem.title}
                    fill
                    className="object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjNmNGY2Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzZiNzI4MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlIG5vdCBmb3VuZDwvdGV4dD48L3N2Zz4=';
                    }}
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {newsItem.category}
                    </span>
                  </div>
                </div>

                {/* News Content - Right side on large screens */}
                <div className="p-6 lg:w-1/2 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {new Date(newsItem.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </div>
                    
                    <h3 className="text-lg font-bold text-gray-800 mb-3 line-clamp-2">
                      {newsItem.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 line-clamp-3 text-sm">
                      {newsItem.excerpt}
                    </p>
                  </div>
                  
                  <div className="flex justify-center">
                    <Link 
                      href={`/news/${newsItem.id}`}
                      className="bg-red-600 hover:bg-red-700 text-white font-semibold px-4 py-2 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer flex items-center w-full justify-center"
                    >
                      Read More
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Load More/Less Buttons */}
        <div className="text-center mt-12 flex justify-center gap-4">
          {hasMoreArticles && (
            <button 
              onClick={handleLoadMore}
              disabled={isLoading}
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
            >
              {isLoading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-3"></div>
                  Loading...
                </>
              ) : (
                <>
                  Load More News
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </>
              )}
            </button>
          )}
          
          {hasLessArticles && (
            <button 
              onClick={handleLoadLess}
              disabled={isLoading}
              className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
            >
              {isLoading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-3"></div>
                  Loading...
                </>
              ) : (
                <>
                  Load Less News
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                  </svg>
                </>
              )}
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default News;
