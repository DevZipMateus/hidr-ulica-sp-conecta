import { Instagram, Facebook, Linkedin, Phone, Mail, MapPin } from 'lucide-react';

const socialLinks = [
  { icon: Instagram, href: 'https://www.instagram.com/hidraulicasp/', label: 'Instagram' },
  { icon: Facebook, href: 'https://www.facebook.com/hidraulicasaopaulo/', label: 'Facebook' },
  { icon: Linkedin, href: 'https://www.linkedin.com/company/14782463/', label: 'LinkedIn' },
];

const quickLinks = [
  { href: '#inicio', label: 'Início' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#produtos', label: 'Produtos' },
  { href: '#depoimentos', label: 'Depoimentos' },
  { href: '#contato', label: 'Contato' },
];

export default function Footer() {
  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const headerHeight = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - headerHeight,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Logo e descrição */}
          <div className="lg:col-span-2">
            <img 
              src="/logo.png" 
              alt="Logo Hidráulica São Paulo" 
              className="h-16 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-primary-foreground/80 leading-relaxed max-w-md">
              Sua fonte confiável para produtos e materiais hidráulicos. Distribuidora atacadista especializada em soluções completas para construção civil e infraestrutura.
            </p>
            <div className="flex gap-3 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links rápidos */}
          <div>
            <h3 className="font-bold text-lg mb-4 font-heading">Links rápidos</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="font-bold text-lg mb-4 font-heading">Contato</h3>
            <ul className="space-y-4">
              <li>
                <a href="tel:1143241179" className="flex items-center gap-3 text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  <Phone className="h-4 w-4" />
                  (11) 4324-1179
                </a>
              </li>
              <li>
                <a href="mailto:atendimento@hidraulicasp.com.br" className="flex items-center gap-3 text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  <Mail className="h-4 w-4" />
                  atendimento@hidraulicasp.com.br
                </a>
              </li>
              <li>
                <a 
                  href="https://maps.app.goo.gl/UvGN3ALpM1JaRHGn6" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  <MapPin className="h-4 w-4 shrink-0 mt-0.5" />
                  <span>Rua Guarapuã, 315 - Jd. França<br />São Paulo - SP, 02337-030</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/60 text-sm">
              © {new Date().getFullYear()} Hidráulica São Paulo. Todos os direitos reservados.
            </p>
            <p className="text-primary-foreground/60 text-sm">
              CNPJ: 33.603.719/0001-76
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}