import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import ImageCarousel from '../components/About/ImageCarousel';

export default function AboutPage() {
  return (
    <div>
      <Header />
      <main className="min-h-screen pt-24">
        <div className=" mx-auto ">
          <ImageCarousel />
        </div>
      </main>
      <Footer />
    </div>
  );
}
