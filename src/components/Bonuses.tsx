import React from 'react';
import { SITE_CONFIG, BONUSES_DATA, IMAGES } from '../config';
import { ImageSlot } from './ImageSlot';
import { Gift, Sparkles } from 'lucide-react';

export const Bonuses: React.FC = () => {
  if (!SITE_CONFIG.showBonuses) return null;

  return (
    <section className="bg-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b border-slate-100">
      <div className="max-w-6xl mx-auto">
        {/* Encabezado */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-pink-100 text-pink-700 text-xs font-bold tracking-wider uppercase mb-3">
            <Gift className="w-3.5 h-3.5 text-pink-600" />
            5 Bonos Especiales Exclusivos
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0F172A] tracking-tight leading-tight mb-4">
            Lleva todavía más material
          </h2>
          <p className="text-base sm:text-lg text-[#64748B]">
            Recursos adicionales valorados individualmente, incluidos 100% gratis con tu acceso.
          </p>
        </div>

        {/* 5 Espacios de Bonos con Valor tachado de $70 a $0 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {BONUSES_DATA.map((bonus, idx) => (
            <div
              key={bonus.id}
              className="bg-[#FFF9F0] rounded-[22px] border border-amber-200/70 p-5 sm:p-6 shadow-xs flex flex-col justify-between relative group hover:shadow-md transition-shadow"
            >
              <div>
                {/* Badge del bono */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 text-amber-900 text-xs font-bold">
                    <Gift className="w-3.5 h-3.5 text-amber-600" />
                    {bonus.tag}
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs font-extrabold text-[#22C55E] uppercase tracking-wider bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                    <Sparkles className="w-3 h-3 text-emerald-600" />
                    Incluido
                  </span>
                </div>

                {/* Imagen del bono */}
                <div className="mb-5 rounded-[16px] overflow-hidden bg-white p-1 border border-amber-200/50 shadow-2xs">
                  <ImageSlot
                    imageSrc={IMAGES[bonus.imageKey]}
                    imageKeyName={bonus.imageKey}
                    alt={bonus.name}
                    aspectRatio="portrait"
                    label={`[BONUS_IMAGE_0${idx + 1}]`}
                    sublabel="Portada de guía, planner o catálogo del bono."
                    recommendedSize="600 x 800 px"
                    iconType="pdf"
                    rounded="rounded-[12px]"
                  />
                </div>

                {/* Título y descripción */}
                <h3 className="text-lg font-bold text-[#0F172A] mb-2 leading-snug">
                  {bonus.name}
                </h3>
                <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                  {bonus.description}
                </p>
              </div>

              {/* Precio individual: $70 riscado e $0 GRATIS */}
              <div className="mt-5 pt-4 border-t border-amber-200/60 flex items-center justify-between">
                <div>
                  <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block">
                    Valor individual:
                  </span>
                  <div className="flex items-baseline gap-2 mt-0.5">
                    <span className="text-base font-bold text-slate-400 line-through decoration-red-500 decoration-2">
                      {bonus.originalPrice || '$70'}
                    </span>
                    <span className="text-xl font-black text-emerald-600">
                      {bonus.currentPrice || '$0'}
                    </span>
                  </div>
                </div>
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-black uppercase tracking-wider shadow-2xs">
                  ¡100% Gratis!
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
