'use client';

import { useEffect } from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Contact from '../components/Contact/Contact';

export default function ContactPage() {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div>
      <Header />
      <main className="min-h-screen pt-24">
        <div className="mx-auto">
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
}
