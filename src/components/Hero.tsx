import { ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const benefits = [
  'Entrega em todo Brasil',
  'Atendimento especializado',
  'Melhores marcas do mercado',
];

export default function Hero() {
  return (
    <section 
      id="inicio" 
      className="relative min-h-screen flex items-center pt-20 hero-gradient overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.4%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')]" />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="max-w-xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-full px-4 py-2 mb-6 animate-fade-in">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              <span className="text-sm text-primary-foreground/90">Desde 2019 no mercado</span>
            </div>

            {/* H1 - Nome da empresa */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 font-heading animate-fade-in" style={{ animationDelay: '0.1s' }}>
              Hidráulica São Paulo
            </h1>

            {/* H2 - Descrição */}
            <h2 className="text-xl md:text-2xl text-primary-foreground/90 mb-8 leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Sua fonte confiável para produtos e materiais hidráulicos. Distribuidora atacadista especializada em soluções completas para construção civil e infraestrutura.
            </h2>

            {/* Benefits */}
            <div className="flex flex-wrap gap-4 mb-10 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-center gap-2 text-primary-foreground/90">
                  <CheckCircle className="h-5 w-5 text-accent" />
                  <span className="text-sm font-medium">{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <Button asChild size="lg" variant="secondary" className="text-primary font-semibold">
                <a href="https://wa.me/551143241179" target="_blank" rel="noopener noreferrer">
                  Solicitar orçamento
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
                <a href="#produtos">
                  Nossos produtos
                </a>
              </Button>
            </div>
          </div>

          {/* Right Column - Logo */}
          <div className="hidden lg:flex justify-center items-center animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <img 
              src="/logo.png" 
              alt="Logo Hidráulica São Paulo" 
              className="w-full max-w-md h-auto drop-shadow-2xl"
            />
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="hsl(210 20% 98%)"/>
        </svg>
      </div>
    </section>
  );
}