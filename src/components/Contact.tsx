import { Phone, Mail, MapPin, Clock, Instagram, Facebook, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const contactInfo = [
  {
    icon: Phone,
    title: 'Telefone',
    value: '(11) 4324-1179',
    href: 'tel:1143241179',
  },
  {
    icon: Mail,
    title: 'E-mail',
    value: 'atendimento@hidraulicasp.com.br',
    href: 'mailto:atendimento@hidraulicasp.com.br',
  },
  {
    icon: MapPin,
    title: 'Endereço',
    value: 'Rua Guarapuã, 315 - Jd. França, São Paulo - SP, CEP 02337-030',
    href: 'https://maps.app.goo.gl/UvGN3ALpM1JaRHGn6',
  },
  {
    icon: Clock,
    title: 'Horário',
    value: 'Segunda a sexta, das 08:00 às 18:00',
  },
];

const socialLinks = [
  {
    icon: Instagram,
    href: 'https://www.instagram.com/hidraulicasp/',
    label: 'Instagram',
  },
  {
    icon: Facebook,
    href: 'https://www.facebook.com/hidraulicasaopaulo/',
    label: 'Facebook',
  },
  {
    icon: Linkedin,
    href: 'https://www.linkedin.com/company/14782463/',
    label: 'LinkedIn',
  },
];

export default function Contact() {
  return (
    <section id="contato" className="py-20 lg:py-28 section-alt">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-3">
            Contato
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-heading">
            Fale conosco
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Entre em contato para solicitar orçamentos ou tirar suas dúvidas.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <div 
                key={info.title} 
                className="flex items-start gap-4 animate-slide-in-left"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                  <info.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{info.title}</h3>
                  {info.href ? (
                    <a 
                      href={info.href} 
                      target={info.href.startsWith('http') ? '_blank' : undefined}
                      rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-muted-foreground">{info.value}</p>
                  )}
                </div>
              </div>
            ))}

            {/* Social Links */}
            <div className="pt-6 border-t border-border">
              <h3 className="font-semibold text-foreground mb-4">Siga-nos nas redes sociais</h3>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="pt-6">
              <Button asChild size="lg" className="w-full sm:w-auto">
                <a href="https://wa.me/551143241179" target="_blank" rel="noopener noreferrer">
                  Falar no WhatsApp
                </a>
              </Button>
            </div>
          </div>

          {/* Map */}
          <div className="animate-slide-in-right">
            <div className="bg-card rounded-xl overflow-hidden card-shadow h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.1234567890123!2d-46.6234567!3d-23.4934567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cef8a0a0a0a0a0%3A0x0!2sRua%20Guarapu%C3%A3%2C%20315%20-%20Jardim%20Fran%C3%A7a%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1234567890123"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Hidráulica São Paulo"
              />
            </div>
            <p className="text-sm text-muted-foreground mt-3 text-center">
              <a 
                href="https://maps.app.goo.gl/UvGN3ALpM1JaRHGn6" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                Abrir no Google Maps →
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}