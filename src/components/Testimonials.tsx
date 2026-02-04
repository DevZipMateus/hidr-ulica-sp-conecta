import { Star, Quote } from 'lucide-react';
import testimonialsBg from '@/assets/backgrounds/testimonials-bg.jpg';

const testimonials = [
  {
    name: 'Rogério Lanera',
    text: 'Excelente atendimento, entrega no prazo e preços justos!!!',
    rating: 5,
    date: '9 de dez. de 2023',
  },
  {
    name: 'Carlos Vinicius Nascimento',
    text: 'Ótima experiência de compra, produtos de qualidade e entrega rápida.',
    rating: 5,
    date: '10 de jan. de 2022',
  },
  {
    name: 'Kátia Cilene',
    text: 'Atendimento rápido e pessoal atencioso. Agilidade e bom preço.',
    rating: 5,
    date: '23 de nov. de 2019',
  },
  {
    name: 'Daniela Góes',
    text: 'Amei... Atendimento e produtos com excelência!!!!!',
    rating: 5,
    date: '23 de nov. de 2019',
  },
  {
    name: 'Vanessa Goes Platero',
    text: 'Conhece os produtos e sabe oferecer o que é necessário para a obra, atende prontamente, tem qualidade nos produtos e cumpre o prazo de entrega.',
    rating: 5,
    date: '23 de nov. de 2019',
  },
  {
    name: 'Marcelo de Lima',
    text: 'Excelente atendimento e variedade de produtos. Recomendo!',
    rating: 5,
    date: '23 de nov. de 2019',
  },
];

export default function Testimonials() {
  return (
    <section id="depoimentos" className="py-20 lg:py-28 relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-15"
        style={{ backgroundImage: `url(${testimonialsBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/90 to-background/95" />
      
      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-3">
            Depoimentos
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-heading">
            O que nossos clientes dizem
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A satisfação dos nossos clientes é o nosso maior reconhecimento.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.name} 
              className="bg-card p-6 rounded-xl card-shadow card-hover relative animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Quote Icon */}
              <Quote className="absolute top-4 right-4 h-8 w-8 text-primary/10" />
              
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-gold text-gold" />
                ))}
              </div>

              {/* Text */}
              <p className="text-foreground leading-relaxed mb-4">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">Cliente Google</p>
                </div>
                <span className="text-xs text-muted-foreground">{testimonial.date}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Google Reviews Badge */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 bg-card px-6 py-3 rounded-full card-shadow">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-gold text-gold" />
              ))}
            </div>
            <span className="text-sm font-medium text-foreground">5.0 no Google</span>
          </div>
        </div>
      </div>
    </section>
  );
}