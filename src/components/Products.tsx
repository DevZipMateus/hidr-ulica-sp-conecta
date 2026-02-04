import { Wrench, Droplets, Bath, ShowerHead, CircleDot, Layers } from 'lucide-react';
import { Button } from '@/components/ui/button';

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
    <section id="produtos" className="py-20 lg:py-28 section-alt">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-3">
            Produtos
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-heading">
            Materiais hidráulicos de qualidade
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Trabalhamos com as principais marcas do mercado: Krona, Docol, Deca, Amanco, Blukit e Alpha Metais.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {products.map((product, index) => (
            <div 
              key={product.title} 
              className="bg-card p-6 rounded-xl card-shadow card-hover animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-5">
                <product.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-3 font-heading">{product.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">{product.description}</p>
              <div className="flex flex-wrap gap-2">
                {product.brands.map((brand) => (
                  <span 
                    key={brand} 
                    className="text-xs font-medium bg-secondary text-secondary-foreground px-3 py-1 rounded-full"
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
          <p className="text-muted-foreground mb-6">
            Precisa de um produto específico? Entre em contato conosco!
          </p>
          <Button asChild size="lg">
            <a href="https://wa.me/551143241179" target="_blank" rel="noopener noreferrer">
              Solicitar orçamento
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}