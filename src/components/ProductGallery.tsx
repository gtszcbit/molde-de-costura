import React, { useState, useRef } from 'react';
import { IMAGES } from '../config';
import { ImageSlot } from './ImageSlot';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export const ProductGallery: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const galleryItems = [
    {
      key: 'product01' as const,
      src: IMAGES.product01,
      tag: 'Bono 1',
      title: 'Bono 1 — Guía de Medidas y Tallas',
      desc: 'Aprende a tomar tus medidas correctamente con tablas prácticas, puntos anatómicos de referencia y fichas imprimibles.'
    },
    {
      key: 'product02' as const,
      src: IMAGES.product02,
      tag: 'Bono 2',
      title: 'Bono 2 — Guía de Ajuste de Moldes',
      desc: 'Aprende a adaptar y ajustar piezas de patrones a diferentes siluetas y necesidades de confección.'
    },
    {
      key: 'product03' as const,
      src: IMAGES.product03,
      tag: 'Bono 3',
      title: 'Bono 3 — Guía de Telas, Hilos y Agujas',
      desc: 'Aprende a elegir mejor los materiales para cada proyecto con muestras de telas, tipos de hilos, agujas y recomendaciones prácticas.'
    },
    {
      key: 'product04' as const,
      src: IMAGES.product04,
      tag: 'Bono 4',
      title: 'Bono 4 — Planner de Proyectos de Costura',
      desc: 'Organiza tus ideas, medidas y materiales en un solo lugar con fichas de proyectos, listas de materiales y planificadores semanales.'
    },
    {
      key: 'product05' as const,
      src: IMAGES.product05,
      tag: 'Bono 5',
      title: 'Bono 5 — Pack Extra de 50 Moldes de Accesorios',
      desc: 'Amplía tus opciones con moldes extra para crear bolsos, tote bags, neceseres, scrunchies, diademas, delantales y organizadores.'
    }
  ];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % galleryItems.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + galleryItems.length) % galleryItems.length);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 45;

    if (distance > minSwipeDistance) {
      handleNext();
    } else if (distance < -minSwipeDistance) {
      handlePrev();
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  const currentItem = galleryItems[currentIndex];

  return (
    <section className="bg-[#FAF7F2] py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b border-stone-200/60">
      <div className="max-w-4xl mx-auto">
        {/* Encabezado */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <span className="inline-block px-3.5 py-1 rounded-full bg-amber-100/70 text-amber-800 text-xs font-bold tracking-wider uppercase mb-3">
            👀 MIRA EL MATERIAL
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0F172A] tracking-tight leading-tight mb-4">
            Mira algunos de los moldes incluidos
          </h2>
          <p className="text-base sm:text-lg text-[#64748B] leading-relaxed">
            Explora ejemplos reales de los archivos que podrás recibir e imprimir.
          </p>
        </div>

        {/* Carrusel */}
        <div className="relative">
          {/* Main Slide Card */}
          <div
            className="bg-white rounded-[22px] border border-slate-200/80 shadow-md p-4 sm:p-6 transition-all duration-300"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div className="relative overflow-hidden rounded-[16px]">
              <ImageSlot
                imageSrc={currentItem.src}
                imageKeyName={currentItem.key}
                alt={`${currentItem.title} - ${currentItem.tag}`}
                aspectRatio="auto"
                label={currentItem.tag}
                sublabel={currentItem.desc}
                recommendedSize="1000 x 650 px"
                iconType="pdf"
                className="w-full aspect-[4/3] sm:aspect-[16/10] max-h-[520px]"
              />
            </div>

            {/* Slide Info */}
            <div className="mt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-t border-slate-100 pt-3">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#2563EB]">
                  Archivo {currentIndex + 1} de {galleryItems.length}
                </span>
                <h4 className="text-base font-bold text-[#0F172A]">
                  {currentItem.title}
                </h4>
              </div>
              <span className="text-xs text-slate-500 italic">
                Formato PDF Digital de alta definición
              </span>
            </div>
          </div>

          {/* Flechas de navegación en Desktop */}
          <button
            onClick={handlePrev}
            aria-label="Ver molde anterior"
            className="hidden md:flex absolute -left-5 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white text-[#0F172A] shadow-lg border border-slate-200 items-center justify-center hover:bg-slate-50 hover:scale-105 active:scale-95 transition-all duration-200 z-10"
          >
            <ChevronLeft className="w-6 h-6 text-[#1E3A8A]" />
          </button>

          <button
            onClick={handleNext}
            aria-label="Ver siguiente molde"
            className="hidden md:flex absolute -right-5 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white text-[#0F172A] shadow-lg border border-slate-200 items-center justify-center hover:bg-slate-50 hover:scale-105 active:scale-95 transition-all duration-200 z-10"
          >
            <ChevronRight className="w-6 h-6 text-[#1E3A8A]" />
          </button>
        </div>

        {/* Indicadores inferiores */}
        <div className="flex items-center justify-center gap-2 mt-6">
          {galleryItems.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Ir al molde ${idx + 1}`}
              className={`h-2.5 rounded-full transition-all duration-200 ${
                currentIndex === idx
                  ? 'w-8 bg-[#2563EB]'
                  : 'w-2.5 bg-slate-300 hover:bg-slate-400'
              }`}
            />
          ))}
        </div>

        {/* Texto indicador de swipe */}
        <div className="text-center mt-4">
          <p className="text-xs sm:text-sm font-medium text-[#64748B]">
            Desliza para descubrir más →
          </p>
        </div>
      </div>
    </section>
  );
};
