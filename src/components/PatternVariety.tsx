import React from 'react';
import { IMAGES } from '../config';
import { ImageSlot } from './ImageSlot';

export const PatternVariety: React.FC = () => {
  const varietyCards = [
    {
      imageSrc: IMAGES.clothingExample01,
      imageKey: 'clothingExample01' as const,
      imageTag: '[CLOTHING_EXAMPLE_01]',
      title: 'Modelos variados',
      description: 'Diferentes opciones para ampliar tus posibilidades de creación.'
    },
    {
      imageSrc: IMAGES.clothingExample02,
      imageKey: 'clothingExample02' as const,
      imageTag: '[CLOTHING_EXAMPLE_02]',
      title: 'Nuevas ideas para coser',
      description: 'Ten siempre nuevos modelos disponibles para consultar.'
    },
    {
      imageSrc: IMAGES.clothingExample03,
      imageKey: 'clothingExample03' as const,
      imageTag: '[CLOTHING_EXAMPLE_03]',
      title: 'Todo organizado digitalmente',
      description: 'Accede a tu colección y elige qué molde deseas preparar.'
    }
  ];

  return (
    <section className="bg-[#FAF7F2] py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b border-stone-200/60">
      <div className="max-w-5xl mx-auto">
        {/* Encabezado */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="inline-block px-3.5 py-1 rounded-full bg-pink-100 text-pink-700 text-xs font-bold tracking-wider uppercase mb-3">
            👗 MUCHOS MODELOS PARA EXPLORAR
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0F172A] tracking-tight leading-tight mb-4">
            Una colección, muchas posibilidades
          </h2>
          <p className="text-base sm:text-lg text-[#64748B] leading-relaxed">
            Explora diferentes estilos y encuentra inspiración para tus próximos proyectos.
          </p>
        </div>

        {/* 3 Grandes Cards Visuales */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {varietyCards.map((card, idx) => (
            <div
              key={idx}
              className="bg-white rounded-[20px] border border-slate-200/80 overflow-hidden shadow-xs hover:shadow-lg transition-all duration-200 flex flex-col group"
            >
              <div className="p-3 bg-stone-50/50">
                <ImageSlot
                  imageSrc={card.imageSrc}
                  imageKeyName={card.imageKey}
                  alt={card.title}
                  aspectRatio="square"
                  label={card.imageTag}
                  sublabel="Foto de muestra del modelo terminado o piezas del patrón."
                  recommendedSize="600 x 600 px"
                  iconType="shirt"
                  rounded="rounded-[16px]"
                  className="w-full"
                />
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#0F172A] mb-2 group-hover:text-[#2563EB] transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-sm text-[#64748B] leading-relaxed">
                    {card.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-[#2563EB] font-semibold">
                  <span>Colección digital</span>
                  <span className="text-slate-400">PDF listo</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
