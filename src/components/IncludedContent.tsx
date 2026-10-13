import React from 'react';
import { IMAGES } from '../config';
import { ImageSlot } from './ImageSlot';
import { CtaButton } from './CtaButton';
import { Check } from 'lucide-react';

export const IncludedContent: React.FC = () => {
  const inclusions = [
    'Mais de 1.000 moldes de costura prontos para imprimir',
    'Diversos modelos de roupas femininas, masculinas e infantis',
    'Arquivos digitais em PDF de alta resolução (300 DPI)',
    '5 Bônus Exclusivos inclusos sem nenhum custo extra',
    'Guia completo de medidas, tamanhos e ajuste de moldes',
    'Planner de projetos e catálogo de 50 moldes de acessórios',
    'Acesso vitalício aos arquivos com download imediato'
  ];

  return (
    <section className="bg-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b border-slate-100">
      <div className="max-w-5xl mx-auto">
        {/* Encabezado */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="inline-block px-3.5 py-1 rounded-full bg-blue-50 text-[#2563EB] text-xs font-bold tracking-wider uppercase mb-3">
            📦 DENTRO DA COLEÇÃO
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0F172A] tracking-tight leading-tight mb-4">
            Tudo o que você vai receber
          </h2>
          <p className="text-base sm:text-lg text-[#64748B]">
            Um kit completo, organizado e pronto para você baixar, imprimir e começar a costurar.
          </p>
        </div>

        {/* Bloque central: Imagen principal y checklist */}
        <div className="bg-[#FAF7F2] rounded-[28px] border border-stone-200/80 p-6 sm:p-10 lg:p-12 shadow-sm flex flex-col md:flex-row items-center gap-8 md:gap-12">
          {/* Imagen principal del paquete */}
          <div className="w-full md:w-[52%] lg:w-[54%]">
            <div className="relative rounded-[24px] p-2.5 sm:p-3 bg-white border border-stone-200 shadow-lg">
              <ImageSlot
                imageSrc={IMAGES.mainProduct}
                imageKeyName="mainProduct"
                alt="Tudo o que você receberá na coleção de +1.000 moldes"
                aspectRatio="square"
                label="[PRODUCT_MAIN_IMAGE]"
                sublabel="Amostra geral do kit: capa da coleção, pastas em PDF e moldes."
                recommendedSize="800 x 800 px"
                iconType="pdf"
                className="w-full"
              />
            </div>
          </div>

          {/* Checklist */}
          <div className="w-full md:w-[48%] lg:w-[46%] flex flex-col justify-between">
            <div className="space-y-3.5 mb-8">
              {inclusions.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#22C55E]/15 text-[#22C55E] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" strokeWidth={3} />
                  </div>
                  <span className="text-sm sm:text-base font-semibold text-[#0F172A] leading-snug">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="pt-2">
              <CtaButton
                text="SAIBA MAIS"
                subtext="⚡ Acesso imediato logo após a compra"
                size="large"
                fullWidth={true}
                scrollToId="oferta"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
