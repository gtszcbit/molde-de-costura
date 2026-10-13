import React from 'react';
import { IMAGES } from '../config';
import { ImageSlot } from './ImageSlot';
import { CtaButton } from './CtaButton';
import { Check } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#1E3A8A] via-[#1E3A8A] to-[#2563EB] text-white pt-10 sm:pt-16 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8">
      {/* Padrão sutil de corte e costura no fundo */}
      <div className="absolute inset-0 pattern-sewing-dots opacity-15 pointer-events-none" />
      
      {/* Linhas decorativas sutis de molde */}
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
          <span>COLEÇÃO DIGITAL DE COSTURA</span>
        </div>

        {/* Headline principal */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-black tracking-tight leading-[1.15] max-w-3xl mb-6">
          Mais de <span className="text-[#FBBF24] underline decoration-dashed decoration-[#FBBF24]/50 underline-offset-8">+1.000</span> Moldes de Costura{' '}
          <span className="block mt-1 sm:mt-2 text-white font-extrabold">
            <span className="bg-gradient-to-r from-white via-blue-50 to-amber-200 bg-clip-text text-transparent">prontos para imprimir</span>
          </span>
        </h1>

        {/* Subheadlines */}
        <div className="max-w-2xl text-blue-100/90 text-base sm:text-lg md:text-xl font-normal leading-relaxed space-y-2 mb-8 sm:mb-10">
          <p>
            Uma coleção digital com centenas de moldes para você criar diferentes peças de costura na sua casa.
          </p>
          <p className="font-semibold text-white">
            Baixe os arquivos, imprima os moldes e comece a costurar hoje mesmo.
          </p>
        </div>

        {/* Imagem do produto Hero */}
        <div className="w-full max-w-[340px] sm:max-w-[380px] mb-8 mx-auto">
          <div className="relative rounded-[22px] p-2 sm:p-2.5 bg-white/10 backdrop-blur-md border border-white/25 shadow-2xl">
            <ImageSlot
              imageSrc={IMAGES.hero}
              imageKeyName="hero"
              alt="Coleção de +1.000 Moldes de Costura prontos para imprimir"
              aspectRatio="portrait"
              label="[HERO_PRODUCT_IMAGE]"
              sublabel="Mockup principal da coleção de moldes de costura."
              recommendedSize="800 x 1060 px"
              iconType="scissors"
              rounded="rounded-[18px]"
              className="w-full aspect-[3/4] max-h-[480px]"
            />
            
            {/* Badge flutuante */}
            <div className="absolute -bottom-3 right-3 sm:right-6 bg-[#111827] text-white px-3 py-1.5 rounded-full text-[11px] sm:text-xs font-bold border border-white/20 shadow-lg flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#22C55E] animate-pulse" />
              <span>Formato PDF Digital</span>
            </div>
          </div>
        </div>

        {/* Microbenefícios */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-sm sm:text-base font-semibold text-blue-100 mb-8 sm:mb-10">
          <div className="flex items-center gap-2 bg-white/10 px-3.5 py-1.5 rounded-full border border-white/15">
            <Check className="w-4 h-4 text-[#22C55E]" strokeWidth={3} />
            <span>Mais de 1.000 moldes</span>
          </div>
          <div className="flex items-center gap-2 bg-white/10 px-3.5 py-1.5 rounded-full border border-white/15">
            <Check className="w-4 h-4 text-[#22C55E]" strokeWidth={3} />
            <span>Arquivos digitais</span>
          </div>
          <div className="flex items-center gap-2 bg-white/10 px-3.5 py-1.5 rounded-full border border-white/15">
            <Check className="w-4 h-4 text-[#22C55E]" strokeWidth={3} />
            <span>Prontos para imprimir</span>
          </div>
        </div>

        {/* CTA */}
        <div className="w-full sm:w-auto">
          <CtaButton
            text="Quero acessar os +1.000 moldes"
            subtext="⚡ Acesso digital imediato após a compra"
            subtextStyle={{
              color: '#ffffff',
              fontWeight: 'bold',
              fontSize: '16px'
            }}
            subtextClassName="!text-white !font-bold !text-[16px]"
            size="large"
            scrollToId="oferta"
          />
        </div>
      </div>
    </section>
  );
};
