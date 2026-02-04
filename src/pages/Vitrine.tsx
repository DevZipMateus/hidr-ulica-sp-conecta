import Header from '@/components/Header';

const Vitrine = () => {
  return (
    <div className="h-screen w-full overflow-hidden flex flex-col">
      <Header />
      
      {/* Main Content - iframe */}
      <main className="flex-1 pt-20" style={{ height: 'calc(100vh - 80px - 63px)' }}>
        <iframe 
          src="https://chicodg.egestor.com.br/vitrine/"
          className="w-full h-full border-none"
          title="Demonstração de Vitrine"
        />
      </main>
    </div>
  );
};

export default Vitrine;
