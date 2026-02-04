import { ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroBg from '@/assets/hero-bg.jpg';

const benefits = [
  'Entrega em todo Brasil',
  'Atendimento especializado',
  'Melhores marcas do mercado',
];

export default function Hero() {
  return (
    <section 
      id="inicio" 
      className="relative min-h-[100svh] flex items-center pt-20 pb-16 md:pb-0 overflow-hidden"
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      {/* Dark Overlay for contrast */}
      <div className="absolute inset-0 bg-primary/85" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Content */}
          <div className="max-w-xl mx-auto lg:mx-0 text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-4 sm:mb-6 animate-fade-in">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              <span className="text-xs sm:text-sm text-primary-foreground/90">Desde 2019 no mercado</span>
            </div>

            {/* H1 - Nome da empresa */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold text-primary-foreground mb-4 sm:mb-6 font-heading animate-fade-in" style={{ animationDelay: '0.1s' }}>
              Hidráulica São Paulo
            </h1>

            {/* H2 - Descrição */}
            <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl text-primary-foreground/90 mb-6 sm:mb-8 leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Sua fonte confiável para produtos e materiais hidráulicos. Distribuidora atacadista especializada em soluções completas para construção civil e infraestrutura.
            </h2>

            {/* Benefits */}
            <div className="flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start gap-2 sm:gap-4 mb-8 sm:mb-10 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-center justify-center lg:justify-start gap-2 text-primary-foreground/90">
                  <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-accent flex-shrink-0" />
                  <span className="text-xs sm:text-sm font-medium">{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <Button asChild size="lg" variant="secondary" className="text-primary font-semibold w-full sm:w-auto">
                <a href="https://wa.me/551143241179" target="_blank" rel="noopener noreferrer">
                  Solicitar orçamento
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground bg-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/30 hover:text-primary-foreground font-semibold w-full sm:w-auto">
                <a href="#produtos">
                  Nossos produtos
                </a>
              </Button>
            </div>
          </div>

          {/* Right Column - Logo */}
          <div className="hidden lg:flex justify-center items-center animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="bg-white rounded-2xl p-6 xl:p-8 shadow-2xl">
              <img 
                src="/logo.png" 
                alt="Logo Hidráulica São Paulo" 
                className="w-full max-w-xs xl:max-w-sm h-auto"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto" preserveAspectRatio="none">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="hsl(210 20% 98%)"/>
        </svg>
      </div>
    </section>
  );
}