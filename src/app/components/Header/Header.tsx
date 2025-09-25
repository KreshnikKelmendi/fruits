'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    let lastScrollY = 0;
    
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Always show header at the very top
      if (currentScrollY < 10) {
        setIsHeaderVisible(true);
      }
      // Show header when scrolling up
      else if (currentScrollY < lastScrollY) {
        setIsHeaderVisible(true);
      } 
      // Hide header when scrolling down
      else if (currentScrollY > lastScrollY) {
        setIsHeaderVisible(false);
      }
      
      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.div 
      className="absolute top-0 left-0 w-full z-10"
      initial={{ y: 0 }}
      animate={{ y: isHeaderVisible ? 0 : -100 }}
      transition={{ 
        type: "spring", 
        damping: 25, 
        stiffness: 200,
        duration: 0.3
      }}
    >

      {/* Top Information Bar */}
      <div className="relative z-10 pt-2 sm:pt-4 ">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center text-black text-xs sm:text-sm">
            {/* Left side - "From Nature to Life" */}
            <div className="font-medium">
              From Nature to Life
            </div>
            
            {/* Center - Social media links */}
            <div className="hidden sm:flex items-center space-x-3">
              <span className="font-medium">Follow us</span>
              <a href="#" className="hover:opacity-80 transition-opacity">
                <div className="w-5 h-5 bg-white rounded flex items-center justify-center">
                  <span className="text-blue-600 font-bold text-xs">f</span>
                </div>
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity">
                <div className="w-5 h-5 bg-white rounded flex items-center justify-center">
                  <i className="fab fa-instagram text-blue-600 text-xs"></i>
                </div>
              </a>
            </div>
            
            {/* Right side - Phone number */}
            <div className="flex items-center space-x-2">
              <i className="fas fa-phone text-sm"></i>
              <span className="font-medium text-xs sm:text-sm">+ 383 (0)49 970100</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-8 mt-4 ">
        <div className="container mx-auto">
          <nav className="bg-red-600 rounded-2xl px-4 sm:px-6 py-4 lg:py-6 shadow-lg relative">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
                <div className="relative">
                  <span className="text-white font-bold text-lg sm:text-xl">Fruits</span>
                </div>
                <div className="w-3 h-3 bg-white rounded-full flex items-center justify-center">
                  <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
                </div>
              </Link>

              {/* Navigation Links - Desktop */}
              <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
                <Link href="/" className={`text-white font-bold hover:text-gray-200 transition-colors relative group ${
                  pathname === '/' ? 'text-gray-200' : ''
                }`}>
                  Home
                  <span className={`absolute bottom-0 left-0 h-0.5 bg-white transition-all ${
                    pathname === '/' ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}></span>
                </Link>
                <Link href="/about" className={`text-white font-bold hover:text-gray-200 transition-colors relative group ${
                  pathname === '/about' ? 'text-gray-200' : ''
                }`}>
                  About Us
                  <span className={`absolute bottom-0 left-0 h-0.5 bg-white transition-all ${
                    pathname === '/about' ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}></span>
                </Link>
                <Link href="/products" className={`text-white font-bold hover:text-gray-200 transition-colors relative group ${
                  pathname === '/products' ? 'text-gray-200' : ''
                }`}>
                  Products
                  <span className={`absolute bottom-0 left-0 h-0.5 bg-white transition-all ${
                    pathname === '/products' ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}></span>
                </Link>
                <Link href="/news" className={`text-white font-bold hover:text-gray-200 transition-colors relative group ${
                  pathname === '/news' ? 'text-gray-200' : ''
                }`}>
                  News
                  <span className={`absolute bottom-0 left-0 h-0.5 bg-white transition-all ${
                    pathname === '/news' ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}></span>
                </Link>
                <Link href="/contact" className={`text-white font-bold hover:text-gray-200 transition-colors relative group ${
                  pathname === '/contact' ? 'text-gray-200' : ''
                }`}>
                  Contact
                  <span className={`absolute bottom-0 left-0 h-0.5 bg-white transition-all ${
                    pathname === '/contact' ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}></span>
                </Link>
              </div>

              {/* Hamburger Menu Button */}
              <button
                onClick={toggleMenu}
                className="lg:hidden text-white hover:text-gray-200 transition-colors p-2 relative z-50"
                aria-label="Toggle menu"
              >
                <div className="w-6 h-6 flex items-center justify-center">
                  {!isMenuOpen ? (
                    // Hamburger lines
                    <div className="flex flex-col space-y-1">
                      <div className="w-5 h-0.5 bg-white rounded-full"></div>
                      <div className="w-5 h-0.5 bg-white rounded-full"></div>
                      <div className="w-5 h-0.5 bg-white rounded-full"></div>
                    </div>
                  ) : (
                    // X icon
                    <div className="relative w-5 h-5">
                      <div className="absolute top-1/2 left-0 w-full h-0.5 bg-white rounded-full transform rotate-45 -translate-y-1/2"></div>
                      <div className="absolute top-1/2 left-0 w-full h-0.5 bg-white rounded-full transform -rotate-45 -translate-y-1/2"></div>
                    </div>
                  )}
                </div>
              </button>
            </div>

            {/* Mobile Menu - Always Visible Dropdown */}
            <AnimatePresence>
              {isMenuOpen && (
                <motion.div 
                  className="lg:hidden absolute top-full left-0 right-0 mt-4 w-full bg-red-600 rounded-2xl shadow-2xl z-[9999]"
                  initial={{ opacity: 0, y: -20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -20, scale: 0.95 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  <div className="p-6">
                    {/* Header */}
                    <div className="text-center mb-6">
                      <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-3">
                        <span className="text-red-600 font-bold text-lg">F</span>
                      </div>
                      <h3 className="text-white font-bold text-lg mb-1">Fruits</h3>
                      <p className="text-red-200 text-sm">From Nature to Life</p>
                    </div>

                    {/* Navigation Links */}
                    <div className="space-y-3">
                      {[
                        { name: "Home", href: "/", isActive: pathname === '/' },
                        { name: "About Us", href: "/about", isActive: pathname === '/about' },
                        { name: "Products", href: "/products", isActive: pathname === '/products' },
                        { name: "News", href: "/news", isActive: pathname === '/news' },
                        { name: "Contact", href: "/contact", isActive: pathname === '/contact' }
                      ].map((item) => (
                        <Link 
                          key={item.name}
                          href={item.href} 
                          className={`block text-white font-medium py-3 px-4 transition-all duration-300 ${
                            item.isActive 
                              ? 'border-b-2 border-white' 
                              : 'hover:bg-white hover:bg-opacity-15 rounded-lg'
                          }`}
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>

                    {/* Social Links */}
                    <div className="mt-6 pt-4 border-t border-red-500">
                      <p className="text-red-200 text-sm text-center mb-3">Follow us</p>
                      <div className="flex justify-center space-x-4">
                        <a href="#" className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center text-black hover:bg-opacity-30 transition-colors">
                          <i className="fab fa-facebook-f text-sm"></i>
                        </a>
                        <a href="#" className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center text-black hover:bg-opacity-30 transition-colors">
                          <i className="fab fa-instagram text-sm"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </nav>
        </div>
      </div>
    </motion.div>
  );
};

export default Header;