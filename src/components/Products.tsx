import { Wrench, Droplets, Bath, ShowerHead, CircleDot, Layers } from 'lucide-react';
import { Button } from '@/components/ui/button';
import productsBg from '@/assets/backgrounds/products-bg.jpg';

const products = [
  {
    icon: Layers,
    title: 'Tubos e conexões PVC',
    description: 'Linha completa de tubos e conexões em PVC para água fria, esgoto e infraestrutura.',
    brands: ['Amanco', 'Krona'],
  },
  {
    icon: Bath,
    title: 'Louças sanitárias',
    description: 'Vasos sanitários, pias, tanques e cubas das melhores marcas do mercado.',
    brands: ['Deca', 'Docol'],
  },
  {
    icon: ShowerHead,
    title: 'Metais sanitários',
    description: 'Torneiras, chuveiros, duchas e acessórios com qualidade e durabilidade.',
    brands: ['Docol', 'Deca', 'Alpha Metais'],
  },
  {
    icon: CircleDot,
    title: 'Registros e válvulas',
    description: 'Registros de gaveta, pressão, esfera e válvulas para diversos usos.',
    brands: ['Blukit', 'Docol'],
  },
  {
    icon: Droplets,
    title: 'Sifões e ralos',
    description: 'Sifões, ralos e acessórios para instalações hidráulicas completas.',
    brands: ['Blukit', 'Krona'],
  },
  {
    icon: Wrench,
    title: 'Miudezas em geral',
    description: 'Vedantes, fitas, abraçadeiras e materiais complementares para sua obra.',
    brands: ['Diversas marcas'],
  },
];

export default function Products() {
  return (
    <section id="produtos" className="py-12 sm:py-16 md:py-20 lg:py-28 relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-8"
        style={{ backgroundImage: `url(${productsBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-secondary via-secondary/98 to-secondary/95" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <span className="inline-block text-xs sm:text-sm font-semibold text-accent uppercase tracking-wider mb-2 sm:mb-3">
            Produtos
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4 font-heading">
            Materiais hidráulicos de qualidade
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Trabalhamos com as principais marcas do mercado: Krona, Docol, Deca, Amanco, Blukit e Alpha Metais.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 mb-8 sm:mb-10 md:mb-12">
          {products.map((product, index) => (
            <div 
              key={product.title} 
              className="bg-card p-4 sm:p-5 md:p-6 rounded-xl card-shadow card-hover animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-11 h-11 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-primary/10 rounded-lg sm:rounded-xl flex items-center justify-center mb-4 sm:mb-5">
                <product.icon className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 text-primary" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-foreground mb-2 sm:mb-3 font-heading">{product.title}</h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-3 sm:mb-4">{product.description}</p>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {product.brands.map((brand) => (
                  <span 
                    key={brand} 
                    className="text-[10px] sm:text-xs font-medium bg-secondary text-secondary-foreground px-2 sm:px-3 py-0.5 sm:py-1 rounded-full"
                  >
                    {brand}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 px-4">
            Precisa de um produto específico? Entre em contato conosco!
          </p>
          <Button asChild size="lg" className="w-full sm:w-auto">
            <a href="https://wa.me/551143241179" target="_blank" rel="noopener noreferrer">
              Solicitar orçamento
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}