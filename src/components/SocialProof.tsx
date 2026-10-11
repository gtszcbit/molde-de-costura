import React from 'react';
import { SITE_CONFIG, IMAGES } from '../config';
import { ImageSlot } from './ImageSlot';

export const SocialProof: React.FC = () => {
  // Si showTestimonials es false, ocultar completamente la sección como se especificó
  if (!SITE_CONFIG.showTestimonials) {
    return null;
  }

  const testimonialList = [
    {
      src: IMAGES.testimonial01,
      key: 'testimonial01' as const,
      label: '[TESTIMONIAL_IMAGE_01]'
    },
    {
      src: IMAGES.testimonial02,
      key: 'testimonial02' as const,
      label: '[TESTIMONIAL_IMAGE_02]'
    },
    {
      src: IMAGES.testimonial03,
      key: 'testimonial03' as const,
      label: '[TESTIMONIAL_IMAGE_03]'
    }
  ];

  return (
    <section className="bg-[#FAF7F2] py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b border-stone-200/60">
      <div className="max-w-4xl mx-auto">
        {/* Encabezado */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="inline-block px-3.5 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-bold tracking-wider uppercase mb-3">
            ⭐ OPINIONES
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0F172A] tracking-tight leading-tight mb-4">
            Lo que dicen quienes ya recibieron el material
          </h2>
          <p className="text-base sm:text-lg text-[#64748B]">
            Comentarios y experiencias compartidas sobre el uso de los moldes.
          </p>
        </div>

        {/* Galería de capturas de testimonios reales */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonialList.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-[20px] p-4 border border-slate-200/80 shadow-xs"
            >
              <ImageSlot
                imageSrc={item.src}
                imageKeyName={item.key}
                alt={`Testimonio real ${idx + 1}`}
                aspectRatio="portrait"
                label={item.label}
                sublabel="Inserta aquí la captura o foto del comentario real enviado por quien compró."
                recommendedSize="600 x 800 px"
                iconType="default"
                rounded="rounded-[14px]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
