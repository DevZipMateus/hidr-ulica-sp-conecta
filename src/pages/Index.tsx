import Header from '@/components/Header';
import Hero from '@/components/Hero';
import BrandsCarousel from '@/components/BrandsCarousel';
import VitrineSection from '@/components/VitrineSection';
import LogosMarquee from '@/components/LogosMarquee';
import WhatsAppButton from '@/components/WhatsAppButton';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <BrandsCarousel />
        <VitrineSection />
        <LogosMarquee />
      </main>
      <WhatsAppButton />
    </div>
  );
};

export default Index;