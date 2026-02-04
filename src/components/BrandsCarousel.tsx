import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import decaBanner from '@/assets/carousel/deca-banner.jpg';
import kronaBanner from '@/assets/carousel/krona-banner.png';
import hidraulicaBanner from '@/assets/carousel/hidraulica-banner.png';
import produtosBanner from '@/assets/carousel/produtos-banner.png';
import docolBanner from '@/assets/carousel/docol-banner.png';
import kronaParceriaBanner from '@/assets/carousel/krona-parceria-banner.png';

const slides = [
  { src: decaBanner, alt: 'Deca - Produtos de qualidade' },
  { src: kronaBanner, alt: 'Krona - Tubos e Conexões' },
  { src: hidraulicaBanner, alt: 'Hidráulica São Paulo - Especialista em Materiais Hidráulicos' },
  { src: produtosBanner, alt: 'Mais de 10.000 Produtos' },
  { src: docolBanner, alt: 'Docol - Viva a água' },
  { src: kronaParceriaBanner, alt: 'Krona - A Krona é Show' },
];

export default function BrandsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <section className="w-full bg-background">
      <div className="relative w-full overflow-hidden">
        {/* Slides Container */}
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div 
              key={index} 
              className="w-full flex-shrink-0"
            >
              <img 
                src={slide.src} 
                alt={slide.alt}
                className="w-full h-auto object-cover max-h-[50vh] sm:max-h-[60vh] md:max-h-[70vh] lg:max-h-none"
              />
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button 
          onClick={prevSlide}
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-card/80 hover:bg-card p-1.5 sm:p-2 rounded-full shadow-lg transition-colors"
          aria-label="Slide anterior"
        >
          <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-foreground" />
        </button>
        <button 
          onClick={nextSlide}
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-card/80 hover:bg-card p-1.5 sm:p-2 rounded-full shadow-lg transition-colors"
          aria-label="Próximo slide"
        >
          <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-foreground" />
        </button>
      </div>
    </section>
  );
}
