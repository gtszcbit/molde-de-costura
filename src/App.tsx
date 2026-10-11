import React, { useState } from 'react';
import { IMAGES as DEFAULT_IMAGES } from './config';
import { TopBar } from './components/TopBar';
import { Hero } from './components/Hero';
import { Benefits } from './components/Benefits';
import { IncludedContent } from './components/IncludedContent';
import { SocialProof } from './components/SocialProof';
import { Bonuses } from './components/Bonuses';
import { Offer } from './components/Offer';
import { Guarantee } from './components/Guarantee';
import { FAQ } from './components/FAQ';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { AdminGuideModal } from './components/AdminGuideModal';

export const App: React.FC = () => {
  const [activeImages, setActiveImages] = useState(DEFAULT_IMAGES);

  const handleUpdateImage = (key: keyof typeof DEFAULT_IMAGES, value: string) => {
    setActiveImages((prev) => ({
      ...prev,
      [key]: value
    }));
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-[#0F172A] selection:bg-[#2563EB]/20 selection:text-[#1E3A8A]">
      {/* 1. BARRA DE OFERTA */}
      <TopBar />

      {/* 2. HERO PRINCIPAL */}
      <Hero />

      {/* 3. BENEFICIOS */}
      <Benefits />

      {/* 4. QUÉ RECIBE */}
      <IncludedContent />

      {/* 7. GARANTÍA DE 7 DÍAS */}
      <Guarantee />

      {/* 8. PRUEBA SOCIAL (Controlado por showTestimonials) */}
      <SocialProof />

      {/* 9. BONOS */}
      <Bonuses />

      {/* 10. OFERTA */}
      <Offer />

      {/* 13. PREGUNTAS FRECUENTES (FAQ) */}
      <FAQ />

      {/* 14. CTA FINAL */}
      <FinalCTA />

      {/* 15. FOOTER */}
      <Footer />

      {/* Guía interactiva para reemplazar imágenes y enlaces fácilmente */}
      <AdminGuideModal
        onUpdateImage={handleUpdateImage}
        activeImages={activeImages}
      />
    </div>
  );
};

export default App;
