'use client';

import { useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Image from 'next/image';

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
    content: "This season brings us the finest selection of organic fruits, carefully cultivated using sustainable farming practices. We&apos;re proud to offer our customers the freshest produce available. Our harvest season typically runs from early spring through late fall, ensuring a continuous supply of high-quality fruits throughout the year. Each fruit is hand-picked at the perfect moment of ripeness to guarantee maximum flavor and nutritional value. We work closely with local agricultural experts to maintain the highest standards of quality and freshness.",
    image: "/assets/products/product-1.png",
    date: "2024-01-15",
    category: "Harvest"
  },
  {
    id: 2,
    title: "New Organic Certification",
    excerpt: "We&apos;re proud to announce our official organic certification for all our fruit varieties.",
    content: "After months of rigorous testing and compliance with organic standards, our farm has received official organic certification. This ensures our customers receive the highest quality, chemical-free fruits. The certification process involved comprehensive soil testing, water quality analysis, and strict adherence to organic farming practices. We&apos;ve eliminated all synthetic pesticides and fertilizers, replacing them with natural alternatives that promote soil health and biodiversity. This certification represents our commitment to sustainable agriculture and environmental stewardship.",
    image: "/assets/products/product-2.png",
    date: "2024-01-10",
    category: "Certification"
  },
  {
    id: 3,
    title: "Sustainable Farming Practices",
    excerpt: "Learn about our commitment to sustainable farming and environmental protection.",
    content: "Our farm implements cutting-edge sustainable farming techniques that protect the environment while producing exceptional fruits. We use renewable energy, water conservation methods, and natural pest control. Our sustainable practices include crop rotation, cover cropping, and integrated pest management. We&apos;ve installed solar panels to power our operations and implemented drip irrigation systems to minimize water usage. Our commitment to sustainability extends beyond farming to include packaging, transportation, and waste management practices that minimize our environmental footprint.",
    image: "/assets/products/product-3.png",
    date: "2024-01-05",
    category: "Sustainability"
  },
  {
    id: 4,
    title: "Community Partnership Program",
    excerpt: "We&apos;re launching a new program to support local communities and farmers.",
    content: "Our community partnership program aims to support local farmers and communities by providing training, resources, and fair trade opportunities. Together, we&apos;re building a stronger agricultural community. The program includes educational workshops, mentorship opportunities, and access to our distribution network. We&apos;re committed to fair pricing and transparent business practices that benefit all stakeholders in our supply chain. This initiative has already helped over 50 local farmers improve their yields and market access.",
    image: "/assets/products/product-4.png",
    date: "2024-01-01",
    category: "Community"
  },
  {
    id: 5,
    title: "Winter Fruit Varieties Available",
    excerpt: "Discover our special winter fruit collection featuring seasonal favorites.",
    content: "Winter brings unique fruit varieties that thrive in cooler temperatures. Our winter collection includes citrus fruits, apples, and other seasonal specialties that are perfect for the colder months. These fruits are carefully selected for their ability to maintain quality and flavor during winter storage. Our winter varieties include crisp apples, juicy oranges, and sweet pears that provide essential vitamins and nutrients during the colder months. Each fruit is stored in climate-controlled facilities to ensure optimal freshness.",
    image: "/assets/products/product-5.png",
    date: "2023-12-28",
    category: "Seasonal"
  },
  {
    id: 6,
    title: "Farm-to-Table Initiative",
    excerpt: "Our new farm-to-table program ensures the freshest fruits reach your table.",
    content: "The farm-to-table initiative reduces the time between harvest and delivery, ensuring maximum freshness and nutritional value. Our fruits are picked at peak ripeness and delivered within 24 hours. This program eliminates unnecessary middlemen and reduces transportation time, resulting in fresher, more nutritious fruits. We&apos;ve partnered with local restaurants and grocery stores to provide direct delivery services. The initiative has reduced our carbon footprint by 30% while improving fruit quality and customer satisfaction.",
    image: "/assets/products/product-1.png",
    date: "2023-12-20",
    category: "Quality"
  },
  {
    id: 7,
    title: "Seasonal Fruit Calendar",
    excerpt: "Discover our comprehensive seasonal fruit calendar for year-round freshness.",
    content: "Our seasonal fruit calendar helps you plan your fruit purchases throughout the year. Each season brings unique flavors and nutritional benefits from our carefully selected fruit varieties. The calendar includes detailed information about peak seasons, nutritional benefits, and storage recommendations for each fruit type. Spring brings fresh berries and stone fruits, summer offers tropical varieties, fall provides apples and pears, and winter features citrus and stored fruits. This planning tool helps customers make informed decisions about their fruit purchases.",
    image: "/assets/products/product-2.png",
    date: "2023-12-15",
    category: "Seasonal"
  },
  {
    id: 8,
    title: "Nutritional Benefits Guide",
    excerpt: "Learn about the amazing nutritional benefits of our fresh fruits.",
    content: "Our fruits are packed with essential vitamins, minerals, and antioxidants. Each variety offers unique health benefits that contribute to a balanced and nutritious diet. Apples provide fiber and vitamin C, berries are rich in antioxidants, citrus fruits offer vitamin C and folate, and stone fruits provide potassium and vitamin A. Regular consumption of our fresh fruits can help boost immunity, improve digestion, and support overall health. We provide detailed nutritional information for each fruit variety to help customers make healthy choices.",
    image: "/assets/products/product-3.png",
    date: "2023-12-10",
    category: "Health"
  },
  {
    id: 9,
    title: "Farm Tours Available",
    excerpt: "Book a guided tour of our farm to see our sustainable practices firsthand.",
    content: "Experience our farm through guided tours where you can see our sustainable farming methods, meet our team, and learn about the journey from seed to harvest. Tours are available year-round and include visits to our orchards, greenhouses, and processing facilities. Visitors can learn about organic farming techniques, taste fresh fruits, and participate in hands-on activities. Group tours are available for schools, organizations, and families. All tours are led by experienced farmers who share their knowledge and passion for sustainable agriculture.",
    image: "/assets/products/product-4.png",
    date: "2023-12-05",
    category: "Tours"
  },
  {
    id: 10,
    title: "Winter Storage Tips",
    excerpt: "Expert tips for storing fruits during winter months.",
    content: "Proper storage techniques ensure your fruits maintain their freshness and nutritional value throughout the winter months. Learn our expert tips for optimal fruit storage. Different fruits require different storage conditions - some prefer cool, dry places while others need refrigeration. Apples should be stored in a cool, dark place with good ventilation. Citrus fruits can be stored at room temperature for up to a week or refrigerated for longer storage. Proper storage can extend the shelf life of fruits by 2-3 times while maintaining their quality and nutritional value.",
    image: "/assets/products/product-5.png",
    date: "2023-11-28",
    category: "Tips"
  },
  {
    id: 11,
    title: "New Fruit Varieties",
    excerpt: "Introducing exciting new fruit varieties to our collection.",
    content: "We&apos;re excited to introduce new fruit varieties that bring unique flavors and textures to our collection. These carefully selected additions expand our diverse fruit offerings. The new varieties include exotic fruits from different regions, hybrid varieties with enhanced flavor profiles, and heirloom varieties that preserve traditional tastes. Each new variety undergoes extensive testing to ensure it meets our quality standards and customer expectations. We&apos;re constantly exploring new opportunities to expand our fruit collection and provide customers with exciting new options.",
    image: "/assets/products/product-1.png",
    date: "2023-11-20",
    category: "New"
  },
  {
    id: 12,
    title: "Holiday Fruit Gifts",
    excerpt: "Perfect fruit gift baskets for the holiday season.",
    content: "Our specially curated fruit gift baskets make perfect presents for the holidays. Each basket is carefully assembled with our finest seasonal fruits and beautifully packaged. The gift baskets include a variety of fruits selected for their quality, appearance, and flavor. Each basket comes with a personalized message and is packaged in eco-friendly materials. We offer different sizes and themes to suit various occasions and preferences. Our holiday gift baskets have become a popular choice for corporate gifts, family presents, and special occasions.",
    image: "/assets/products/product-2.png",
    date: "2023-11-15",
    category: "Gifts"
  }
];

export default function NewsArticlePage() {
  const params = useParams();
  const router = useRouter();
  const articleId = parseInt(params.id as string);
  
  const article = newsData.find(item => item.id === articleId);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  if (!article) {
    return (
      <div>
        <Header />
        <main className="min-h-screen pt-24 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Article Not Found</h1>
            <p className="text-lg text-gray-600 mb-8">The article you&apos;re looking for doesn&apos;t exist.</p>
            <button 
              onClick={() => router.push('/news')}
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 hover:scale-105"
            >
              Back to News
            </button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div>
      <Header />
      <main className="min-h-screen pt-24">
        <div className="container mx-auto px-4 lg:px-8 py-16">
          {/* Back Button */}
          <div className="mb-8">
            <button 
              onClick={() => router.back()}
              className="flex items-center text-gray-600 hover:text-red-600 transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to News
            </button>
          </div>

          {/* Article Header */}
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <div className="flex items-center text-sm text-gray-500 mb-4">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                {new Date(article.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
                <span className="mx-2">•</span>
                <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {article.category}
                </span>
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6 leading-tight">
                {article.title}
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                {article.excerpt}
              </p>
            </div>

            {/* Article Image */}
            <div className="relative h-64 lg:h-96 mb-12 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src={article.image}
                alt={article.title}
                fill
                className="object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjNmNGY2Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzZiNzI4MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlIG5vdCBmb3VuZDwvdGV4dD48L3N2Zz4=';
                }}
              />
            </div>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
              <div className="text-gray-700 leading-relaxed text-lg space-y-6">
                {article.content.split('. ').map((sentence, index) => (
                  <p key={index} className="mb-4">
                    {sentence.trim()}{sentence.trim().endsWith('.') ? '' : '.'}
                  </p>
                ))}
              </div>
            </div>

          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
