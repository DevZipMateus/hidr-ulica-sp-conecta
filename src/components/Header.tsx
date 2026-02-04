import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navLinks = [
  { href: '/', label: 'Início', isRoute: true },
  { href: '/sobre#sobre', label: 'Sobre', isRoute: true },
  { href: '/sobre#produtos', label: 'Produtos', isRoute: true },
  { href: '/sobre#depoimentos', label: 'Depoimentos', isRoute: true },
  { href: '/sobre#contato', label: 'Contato', isRoute: true },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const handleNavClick = (href: string, isRoute: boolean) => {
    setIsMenuOpen(false);
    
    if (isRoute) {
      const [path, hash] = href.split('#');
      
      if (location.pathname === path || (path === '/' && location.pathname === '/')) {
        if (hash) {
          const element = document.getElementById(hash);
          if (element) {
            const headerHeight = 80;
            const elementPosition = element.getBoundingClientRect().top + window.scrollY;
            window.scrollTo({
              top: elementPosition - headerHeight,
              behavior: 'smooth'
            });
          }
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      } else {
        navigate(href);
        if (hash) {
          setTimeout(() => {
            const element = document.getElementById(hash);
            if (element) {
              const headerHeight = 80;
              const elementPosition = element.getBoundingClientRect().top + window.scrollY;
              window.scrollTo({
                top: elementPosition - headerHeight,
                behavior: 'smooth'
              });
            }
          }, 100);
        }
      }
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 bg-card transition-all duration-300 ${isScrolled ? 'shadow-md' : 'shadow-sm'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18 md:h-20">
          {/* Logo */}
          <a 
            href="/" 
            className="flex items-center gap-2 sm:gap-3" 
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('/', true);
            }}
          >
            <img 
              src="/logo-icon.png" 
              alt="Logo Hidráulica São Paulo - Materiais Hidráulicos" 
              className="h-10 sm:h-11 md:h-12 w-auto" 
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-4 xl:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href, link.isRoute);
                }}
                className="text-sm font-medium text-foreground transition-colors hover:text-primary whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-2 xl:gap-4">
            <a href="tel:1143241179" className="flex items-center gap-1.5 xl:gap-2 text-xs xl:text-sm font-medium text-primary whitespace-nowrap">
              <Phone className="h-3.5 w-3.5 xl:h-4 xl:w-4" />
              (11) 4324-1179
            </a>
            <Button asChild variant="default" size="sm" className="text-xs xl:text-sm">
              <a href="https://wa.me/551143241179" target="_blank" rel="noopener noreferrer">
                Solicitar orçamento
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden bg-card border-t border-border py-4 animate-fade-in">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href, link.isRoute);
                  }}
                  className="px-4 py-3 text-sm font-medium text-foreground hover:bg-secondary rounded-lg transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="px-4 pt-4 border-t border-border mt-2">
                <Button asChild className="w-full" size="sm">
                  <a href="https://wa.me/551143241179" target="_blank" rel="noopener noreferrer">
                    Solicitar orçamento
                  </a>
                </Button>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
