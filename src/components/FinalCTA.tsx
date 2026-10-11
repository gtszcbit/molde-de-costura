import React from 'react';
import { CtaButton } from './CtaButton';

export const FinalCTA: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-[#1E3A8A] text-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8 text-center">
      {/* Sutiles líneas y patrón de costura en el fondo */}
      <div className="absolute inset-0 pattern-sewing-dots opacity-15 pointer-events-none" />

      {/* Trazado decorativo sutil en SVG */}
      <svg
        className="absolute inset-0 w-full h-full opacity-10 pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1000 400"
        fill="none"
        preserveAspectRatio="none"
      >
        <path
          d="M0,200 Q250,50 500,200 T1000,200"
          stroke="white"
          strokeWidth="2"
          strokeDasharray="8 8"
        />
      </svg>

      <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
        {/* H2 */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight leading-tight mb-4">
          Tu próximo proyecto puede comenzar con un buen molde ✂️
        </h2>

        {/* Texto */}
        <p className="text-base sm:text-lg text-blue-100/90 leading-relaxed max-w-2xl mb-8 sm:mb-10">
          Accede a una colección con más de 300 moldes y ten nuevas opciones disponibles para tus proyectos de costura.
        </p>

        {/* Botón verde */}
        <CtaButton
          text="Quiero acceder a los +300 moldes"
          subtext="⚡ Acceso inmediato • Archivos en formato PDF"
          size="large"
        />
      </div>
    </section>
  );
};
