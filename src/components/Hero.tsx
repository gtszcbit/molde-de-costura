import React from 'react';
import { IMAGES } from '../config';
import { ImageSlot } from './ImageSlot';
import { CtaButton } from './CtaButton';
import { Check } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#1E3A8A] via-[#1E3A8A] to-[#2563EB] text-white pt-10 sm:pt-16 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8">
      {/* Sutil patrón de líneas de corte y costura en el fondo */}
      <div className="absolute inset-0 pattern-sewing-dots opacity-15 pointer-events-none" />
      
      {/* Líneas decorativas sutiles tipo molde de costura */}
      <svg
        className="absolute inset-0 w-full h-full opacity-10 pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 800"
        fill="none"
        preserveAspectRatio="none"
      >
        <path
          d="M0,150 Q300,50 600,200 T1200,100"
          stroke="white"
          strokeWidth="2"
          strokeDasharray="6 6"
        />
        <path
          d="M0,650 Q400,750 800,600 T1200,700"
          stroke="white"
          strokeWidth="1.5"
          strokeDasharray="8 8"
        />
        <circle cx="300" cy="50" r="4" fill="white" />
        <circle cx="600" cy="200" r="4" fill="white" />
        <circle cx="800" cy="600" r="4" fill="white" />
      </svg>

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center">
        {/* Etiqueta superior */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs sm:text-sm font-semibold tracking-wider uppercase mb-6 shadow-xs text-blue-100">
          <span>✂️</span>
          <span>COLECCIÓN DIGITAL DE COSTURA</span>
        </div>

        {/* Headline principal */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-black tracking-tight leading-[1.15] max-w-3xl mb-6">
          Más de <span className="text-[#FBBF24] underline decoration-dashed decoration-[#FBBF24]/50 underline-offset-8">+1.000</span> Moldes de Costura{' '}
          <span className="block mt-1 sm:mt-2 text-white font-extrabold">
            <span className="bg-gradient-to-r from-white via-blue-50 to-amber-200 bg-clip-text text-transparent">listos para imprimir</span>
          </span>
        </h1>

        {/* Subheadlines */}
        <div className="max-w-2xl text-blue-100/90 text-base sm:text-lg md:text-xl font-normal leading-relaxed space-y-2 mb-8 sm:mb-10">
          <p>
            Una colección digital con cientos de moldes para ayudarte a crear diferentes proyectos de costura desde casa.
          </p>
          <p className="font-semibold text-white">
            Descarga los archivos, imprime los moldes y comienza a crear.
          </p>
        </div>

        {/* Imagen del producto Hero (menor y vertical) */}
        <div className="w-full max-w-[340px] sm:max-w-[380px] mb-8 mx-auto">
          <div className="relative rounded-[22px] p-2 sm:p-2.5 bg-white/10 backdrop-blur-md border border-white/25 shadow-2xl">
            <ImageSlot
              imageSrc={IMAGES.hero}
              imageKeyName="hero"
              alt="Colección de +300 Moldes de Costura listos para imprimir en ateliê de costura"
              aspectRatio="portrait"
              label="[HERO_PRODUCT_IMAGE]"
              sublabel="Espacio para la imagen principal del producto: mockup de la colección, carpetas PDF o muestra de moldes."
              recommendedSize="800 x 1060 px"
              iconType="scissors"
              rounded="rounded-[18px]"
              className="w-full aspect-[3/4] max-h-[480px]"
            />
            
            {/* Pequeño badge flotante decorativo */}
            <div className="absolute -bottom-3 right-3 sm:right-6 bg-[#111827] text-white px-3 py-1.5 rounded-full text-[11px] sm:text-xs font-bold border border-white/20 shadow-lg flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#22C55E] animate-pulse" />
              <span>Formato PDF Digital</span>
            </div>
          </div>
        </div>

        {/* Microbeneficios */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-sm sm:text-base font-semibold text-blue-100 mb-8 sm:mb-10">
          <div className="flex items-center gap-2 bg-white/10 px-3.5 py-1.5 rounded-full border border-white/15">
            <Check className="w-4 h-4 text-[#22C55E]" strokeWidth={3} />
            <span>Más de 1.000 moldes</span>
          </div>
          <div className="flex items-center gap-2 bg-white/10 px-3.5 py-1.5 rounded-full border border-white/15">
            <Check className="w-4 h-4 text-[#22C55E]" strokeWidth={3} />
            <span>Archivos digitales</span>
          </div>
          <div className="flex items-center gap-2 bg-white/10 px-3.5 py-1.5 rounded-full border border-white/15">
            <Check className="w-4 h-4 text-[#22C55E]" strokeWidth={3} />
            <span>Listos para imprimir</span>
          </div>
        </div>

        {/* CTA */}
        <div className="w-full sm:w-auto">
          <CtaButton
            text="Quiero acceder a los +1.000 moldes"
            subtext="⚡ Acceso digital después de la compra"
            size="large"
            scrollToId="oferta"
          />
        </div>
      </div>
    </section>
  );
};
