import React from 'react';
import { IMAGES } from '../config';
import { ImageSlot } from './ImageSlot';
import { CtaButton } from './CtaButton';
import { Check } from 'lucide-react';

export const IncludedContent: React.FC = () => {
  const inclusions = [
    'Más de 300 moldes de costura listos para imprimir',
    'Diferentes modelos de prendas y siluetas',
    'Archivos digitales en PDF de alta definición',
    '5 Bonos Exclusivos incluidos sin costo extra',
    'Guía de medidas, tallas y ajuste de moldes',
    'Planner de proyectos y pack de accesorios',
    'Acceso digital de por vida y descarga inmediata'
  ];

  return (
    <section className="bg-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b border-slate-100">
      <div className="max-w-4xl mx-auto">
        {/* Encabezado */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="inline-block px-3.5 py-1 rounded-full bg-blue-50 text-[#2563EB] text-xs font-bold tracking-wider uppercase mb-3">
            📦 DENTRO DE LA COLECCIÓN
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0F172A] tracking-tight leading-tight mb-4">
            Todo lo que recibirás
          </h2>
          <p className="text-base sm:text-lg text-[#64748B]">
            Un paquete completo y organizado con más de 300 moldes listos para descargar y preparar.
          </p>
        </div>

        {/* Bloque central: Imagen principal y checklist */}
        <div className="bg-[#FAF7F2] rounded-[24px] border border-stone-200/80 p-6 sm:p-10 shadow-sm flex flex-col md:flex-row items-center gap-8 md:gap-10">
          {/* Imagen principal del paquete */}
          <div className="w-full md:w-1/2">
            <div className="relative rounded-[20px] p-2 bg-white border border-stone-200 shadow-md">
              <ImageSlot
                imageSrc={IMAGES.mainProduct}
                imageKeyName="mainProduct"
                alt="Todo lo que recibirás en la colección de +300 moldes"
                aspectRatio="square"
                label="[PRODUCT_MAIN_IMAGE]"
                sublabel="Muestra general del kit: portada de la colección, carpetas PDF y piezas de patrones."
                recommendedSize="800 x 800 px"
                iconType="pdf"
                className="w-full"
              />
            </div>
          </div>

          {/* Checklist */}
          <div className="w-full md:w-1/2 flex flex-col justify-between">
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
                text="Quiero acceder a la colección"
                subtext="⚡ Acceso inmediato tras completar la compra"
                size="large"
                fullWidth={true}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
