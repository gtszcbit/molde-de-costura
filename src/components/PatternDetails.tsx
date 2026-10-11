import React from 'react';
import { IMAGES } from '../config';
import { ImageSlot } from './ImageSlot';

export const PatternDetails: React.FC = () => {
  const miniItems = [
    {
      icon: '✂️',
      title: 'Líneas visuales claras',
      desc: 'Trazos definidos para identificar contornos de cada pieza.'
    },
    {
      icon: '🖨️',
      title: 'Preparados para impresión',
      desc: 'Archivos optimizados para llevar a hojas físicas de trabajo.'
    },
    {
      icon: '📄',
      title: 'Formato digital práctico',
      desc: 'Archivos PDF organizados listos para consultar en computadora o tablet.'
    }
  ];

  return (
    <section className="bg-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b border-slate-100">
      <div className="max-w-4xl mx-auto">
        {/* Encabezado */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="inline-block px-3.5 py-1 rounded-full bg-blue-50 text-[#2563EB] text-xs font-bold tracking-wider uppercase mb-3">
            🔍 VE LOS DETALLES
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0F172A] tracking-tight leading-tight mb-4">
            Diseñados para llevar del papel a tu proyecto
          </h2>
          <p className="text-base sm:text-lg text-[#64748B]">
            Cada archivo debe mostrar claramente las piezas y las indicaciones correspondientes al molde.
          </p>
        </div>

        {/* Contenido: Imagen de detalle + Mini items */}
        <div className="bg-[#FAF7F2] rounded-[24px] border border-stone-200/80 p-6 sm:p-9 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Imagen del detalle */}
            <div className="md:col-span-7">
              <div className="rounded-[18px] p-2 bg-white border border-stone-200 shadow-sm">
                <ImageSlot
                  imageSrc={IMAGES.patternDetail}
                  imageKeyName="patternDetail"
                  alt="Detalle de las líneas y trazados del molde de costura"
                  aspectRatio="video"
                  label="[PATTERN_DETAIL_IMAGE]"
                  sublabel="Acercamiento a las líneas de corte, marcas de costura o distribución de piezas en hoja."
                  recommendedSize="900 x 600 px"
                  iconType="detail"
                  rounded="rounded-[14px]"
                  className="w-full"
                />
              </div>
            </div>

            {/* Tres mini items */}
            <div className="md:col-span-5 space-y-4">
              {miniItems.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white p-4.5 rounded-[16px] border border-stone-200/90 shadow-2xs flex items-start gap-3.5"
                >
                  <span className="text-2xl shrink-0 p-2 bg-stone-50 rounded-xl border border-stone-100">
                    {item.icon}
                  </span>
                  <div>
                    <h4 className="font-bold text-sm sm:text-base text-[#0F172A]">
                      {item.title}
                    </h4>
                    <p className="text-xs text-[#64748B] mt-0.5 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
