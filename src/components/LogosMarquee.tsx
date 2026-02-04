import lorenzetti from '@/assets/brands/lorenzetti.png';
import alpha from '@/assets/brands/alpha.jpg';
import hydra from '@/assets/brands/hydra.png';
import blukit from '@/assets/brands/blukit.png';
import astra from '@/assets/brands/astra.png';
import higiban from '@/assets/brands/higiban.png';
import garden from '@/assets/brands/garden.png';
import apolo from '@/assets/brands/apolo.jpg';
import censi from '@/assets/brands/censi.png';
import docol from '@/assets/brands/docol.png';
import krona from '@/assets/brands/krona.png';
import deca from '@/assets/brands/deca.jpg';
import pulvitec from '@/assets/brands/pulvitec.jpg';

const leftLogos = [
  { src: lorenzetti, alt: 'Lorenzetti' },
  { src: alpha, alt: 'Alpha Hidrometais' },
  { src: hydra, alt: 'Hydra' },
  { src: blukit, alt: 'Blukit' },
  { src: astra, alt: 'Astra' },
  { src: higiban, alt: 'Higiban' },
  { src: garden, alt: 'Garden' },
];

const rightLogos = [
  { src: apolo, alt: 'Apolo Tubos e Equipamentos' },
  { src: censi, alt: 'Censi' },
  { src: docol, alt: 'Docol Metais Sanitários' },
  { src: krona, alt: 'Krona Tubos e Conexões' },
  { src: deca, alt: 'Deca' },
  { src: pulvitec, alt: 'Pulvitec' },
];

export default function LogosMarquee() {
  return (
    <section className="py-8 sm:py-10 md:py-12 bg-secondary overflow-hidden">
      <div className="container mx-auto px-4 mb-6 sm:mb-8">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center text-foreground font-heading">
          Nossas Marcas Parceiras
        </h2>
      </div>

      {/* Left scrolling row */}
      <div className="relative mb-4 sm:mb-6 md:mb-8">
        <div className="flex animate-scroll-left">
          {/* First set */}
          {leftLogos.map((logo, index) => (
            <div 
              key={`left-1-${index}`} 
              className="flex-shrink-0 mx-3 sm:mx-5 md:mx-8 flex items-center justify-center"
            >
              <img 
                src={logo.src} 
                alt={logo.alt} 
                className="h-12 sm:h-14 md:h-16 lg:h-20 w-auto object-contain bg-white p-2 sm:p-3 rounded-lg shadow-sm"
              />
            </div>
          ))}
          {/* Duplicate set for seamless loop */}
          {leftLogos.map((logo, index) => (
            <div 
              key={`left-2-${index}`} 
              className="flex-shrink-0 mx-3 sm:mx-5 md:mx-8 flex items-center justify-center"
            >
              <img 
                src={logo.src} 
                alt={logo.alt} 
                className="h-12 sm:h-14 md:h-16 lg:h-20 w-auto object-contain bg-white p-2 sm:p-3 rounded-lg shadow-sm"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Right scrolling row */}
      <div className="relative">
        <div className="flex animate-scroll-right">
          {/* First set */}
          {rightLogos.map((logo, index) => (
            <div 
              key={`right-1-${index}`} 
              className="flex-shrink-0 mx-3 sm:mx-5 md:mx-8 flex items-center justify-center"
            >
              <img 
                src={logo.src} 
                alt={logo.alt} 
                className="h-12 sm:h-14 md:h-16 lg:h-20 w-auto object-contain bg-white p-2 sm:p-3 rounded-lg shadow-sm"
              />
            </div>
          ))}
          {/* Duplicate sets for seamless loop */}
          {rightLogos.map((logo, index) => (
            <div 
              key={`right-2-${index}`} 
              className="flex-shrink-0 mx-3 sm:mx-5 md:mx-8 flex items-center justify-center"
            >
              <img 
                src={logo.src} 
                alt={logo.alt} 
                className="h-12 sm:h-14 md:h-16 lg:h-20 w-auto object-contain bg-white p-2 sm:p-3 rounded-lg shadow-sm"
              />
            </div>
          ))}
          {rightLogos.map((logo, index) => (
            <div 
              key={`right-3-${index}`} 
              className="flex-shrink-0 mx-3 sm:mx-5 md:mx-8 flex items-center justify-center"
            >
              <img 
                src={logo.src} 
                alt={logo.alt} 
                className="h-12 sm:h-14 md:h-16 lg:h-20 w-auto object-contain bg-white p-2 sm:p-3 rounded-lg shadow-sm"
              />
            </div>
          ))}
          {rightLogos.map((logo, index) => (
            <div 
              key={`right-4-${index}`} 
              className="flex-shrink-0 mx-3 sm:mx-5 md:mx-8 flex items-center justify-center"
            >
              <img 
                src={logo.src} 
                alt={logo.alt} 
                className="h-12 sm:h-14 md:h-16 lg:h-20 w-auto object-contain bg-white p-2 sm:p-3 rounded-lg shadow-sm"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
