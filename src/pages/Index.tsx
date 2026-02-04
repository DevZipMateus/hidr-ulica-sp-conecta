import Header from '@/components/Header';
import Hero from '@/components/Hero';
import VitrineSection from '@/components/VitrineSection';
import WhatsAppButton from '@/components/WhatsAppButton';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <VitrineSection />
      </main>
      <WhatsAppButton />
    </div>
  );
};

export default Index;