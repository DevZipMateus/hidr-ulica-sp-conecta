import Header from '@/components/Header';
import About from '@/components/About';
import Products from '@/components/Products';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const Sobre = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <About />
        <Products />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Sobre;
