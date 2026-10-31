import { useState } from 'react';
import About from '@/components/About';
import Credentials from '@/components/Credentials';
import DocumentModal from '@/components/DocumentModal';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import Recognitions from '@/components/Recognitions';
import SiteFooter from '@/components/SiteFooter';
import TechnoloChicas from '@/components/TechnoloChicas';
import type { PortfolioDocument } from '@/data/portfolio';

function App() {
  const [activeDocument, setActiveDocument] = useState<PortfolioDocument | null>(null);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <TechnoloChicas />
        <Recognitions onOpen={setActiveDocument} />
        <Credentials onOpen={setActiveDocument} />
      </main>
      <SiteFooter />
      <DocumentModal document={activeDocument} onClose={() => setActiveDocument(null)} />
    </div>
  );
}

export default App;
