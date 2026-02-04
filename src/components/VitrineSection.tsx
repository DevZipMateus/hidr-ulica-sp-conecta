const VitrineSection = () => {
  return (
    <section id="vitrine" className="py-16 bg-secondary">
      <div className="container mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground font-heading mb-4">
            Nossa Vitrine
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Confira nosso catálogo completo de produtos hidráulicos
          </p>
        </div>
        
        <div className="rounded-lg overflow-hidden shadow-lg">
          <iframe 
            src="https://chicodg.egestor.com.br/vitrine/"
            className="w-full border-none"
            style={{ height: '700px' }}
            title="Vitrine de Produtos"
          />
        </div>
      </div>
    </section>
  );
};

export default VitrineSection;
