import { Target, Eye, Heart, Building2, Truck, Users } from 'lucide-react';
import aboutBg from '@/assets/backgrounds/about-bg.jpg';

const values = [
  {
    icon: Building2,
    title: 'Comprometimento B2B',
    description: 'Foco total no cronograma e nas necessidades específicas do cliente corporativo.',
  },
  {
    icon: Users,
    title: 'Expertise técnica',
    description: 'Profundo conhecimento dos produtos para oferecer o melhor custo-benefício em cada projeto.',
  },
  {
    icon: Truck,
    title: 'Agilidade logística',
    description: 'Rapidez na cotação e pontualidade na entrega, respeitando o ritmo das obras.',
  },
];

export default function About() {
  return (
    <section id="sobre" className="py-20 lg:py-28 relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-5"
        style={{ backgroundImage: `url(${aboutBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      
      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-3">
            Sobre nós
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-heading">
            Conheça a Hidráulica São Paulo
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Desde 2019 fornecendo soluções completas em materiais hidráulicos para todo o Brasil.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          {/* History */}
          <div className="space-y-6 animate-slide-in-left">
            <h3 className="text-2xl font-bold text-foreground font-heading">Nossa história</h3>
            <p className="text-muted-foreground leading-relaxed">
              A empresa iniciou suas atividades em 2019 como Hidráulica São Paulo Ltda, estabelecendo-se no setor de comércio atacadista e varejista de materiais hidráulicos em geral.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Desde sua origem, especializou-se na distribuição de itens essenciais para infraestrutura e reparos, como tubos e conexões em PVC, registros, válvulas e metais sanitários. A empresa atende tanto o consumidor final quanto o setor de serviços e licitações, fornecendo componentes para sistemas prediais, industriais e comerciais.
            </p>
            <p className="text-muted-foreground leading-relaxed font-medium">
              Entregamos em todo território nacional.
            </p>
          </div>

          {/* Mission, Vision */}
          <div className="space-y-6 animate-slide-in-right">
            <div className="bg-card p-6 rounded-xl card-shadow card-hover">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2 font-heading">Missão</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Prover soluções completas em materiais hidráulicos para o setor da construção civil, garantindo eficiência logística e suporte técnico especializado para viabilizar projetos de engenharia e obras de infraestrutura com máxima confiança e pontualidade.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card p-6 rounded-xl card-shadow card-hover">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center shrink-0">
                  <Eye className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2 font-heading">Visão</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Ser a principal parceira estratégica de construtoras e empresas de engenharia no Brasil, reconhecida pela excelência no atendimento consultivo e pela capacidade de entrega em grandes volumes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div>
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-3">
              <Heart className="h-5 w-5 text-primary" />
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">Nossos valores</span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div 
                key={value.title} 
                className="text-center p-8 bg-card rounded-xl card-shadow card-hover animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-5">
                  <value.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3 font-heading">{value.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}