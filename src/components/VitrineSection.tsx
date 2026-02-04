const VitrineSection = () => {
  return (
    <section id="vitrine" className="py-8 sm:py-12 md:py-16 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground font-heading mb-2 sm:mb-4">
            Nossa Vitrine
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto px-4">
            Confira nosso catálogo completo de produtos hidráulicos
          </p>
        </div>
        
        <div className="rounded-lg overflow-hidden shadow-lg -mx-4 sm:mx-0">
          <iframe 
            src="https://chicodg.egestor.com.br/vitrine/"
            className="w-full border-none"
            style={{ height: 'clamp(500px, 80vh, 850px)' }}
            title="Vitrine de Produtos"
          />
        </div>
      </div>
    </section>
  );
};

export default VitrineSection;
