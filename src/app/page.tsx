import Header from './components/Header/Header';
import Main from './components/Main/Main';
import About from './components/About/About';
import Services from './components/Services/Services';
import Products from './components/Products/Products';
import Footer from './components/Footer/Footer';

export default function Home() {
  return (
    <div>
      <Header />
      <Main />
      <About />
      <Services />
      <Products showSeeAllButton={true} />
      <Footer />
    </div>
  );
}