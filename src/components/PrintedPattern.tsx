import React from 'react';
import { IMAGES } from '../config';
import { ImageSlot } from './ImageSlot';
import { FileCheck, Scissors, Layers } from 'lucide-react';

export const PrintedPattern: React.FC = () => {
  return (
    <section className="bg-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b border-slate-100">
      <div className="max-w-4xl mx-auto">
        {/* Encabezado */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <span className="inline-block px-3.5 py-1 rounded-full bg-blue-50 text-[#2563EB] text-xs font-bold tracking-wider uppercase mb-3">
            🖨️ DEL PDF AL PAPEL
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0F172A] tracking-tight leading-tight mb-4">
            Imprime y prepara tu molde
          </h2>
          <p className="text-base sm:text-lg text-[#64748B] leading-relaxed">
            Los archivos digitales están pensados para que puedas llevar el molde del PDF al papel y utilizarlo en tu proyecto.
          </p>
        </div>

        {/* Card visual de demostración de impresión */}
        <div className="bg-[#FAF7F2] border border-stone-200/80 rounded-[22px] p-4 sm:p-7 shadow-sm">
          <div className="relative overflow-hidden rounded-[18px]">
            <ImageSlot
              imageSrc={IMAGES.printedPattern}
              imageKeyName="printedPattern"
              alt="Molde impreso sobre mesa de costura en hojas de papel"
              aspectRatio="video"
              label="[PRINTED_PATTERN_IMAGE]"
              sublabel="Espacio para foto real: hojas A4 impresas, piezas recortadas, tijeras y cinta métrica sobre mesa de trabajo."
              recommendedSize="1200 x 750 px"
              iconType="printer"
              className="w-full"
            />
          </div>

          {/* Tres detalles visuales de valor sobre la impresión */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6 pt-5 border-t border-stone-200/60">
            <div className="flex items-start gap-3 p-2">
              <div className="p-2 rounded-xl bg-white shadow-xs border border-stone-200 text-[#2563EB]">
                <FileCheck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#0F172A]">Hojas estándar</h4>
                <p className="text-xs text-[#64748B] mt-0.5">Compatible con impresoras domésticas comunes.</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-2">
              <div className="p-2 rounded-xl bg-white shadow-xs border border-stone-200 text-[#2563EB]">
                <Scissors className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#0F172A]">Líneas de unión</h4>
                <p className="text-xs text-[#64748B] mt-0.5">Referencias para ensamblar las hojas impresas.</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-2">
              <div className="p-2 rounded-xl bg-white shadow-xs border border-stone-200 text-[#2563EB]">
                <Layers className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#0F172A]">Piezas del patrón</h4>
                <p className="text-xs text-[#64748B] mt-0.5">Listas para transferir a tu tela de confección.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Observación requerida */}
        <div className="mt-5 text-center">
          <p className="text-xs sm:text-sm text-[#64748B] bg-slate-50 border border-slate-200/80 rounded-xl py-3 px-4 max-w-2xl mx-auto italic">
            Los resultados de impresión pueden variar según la configuración de la impresora, el papel y el archivo utilizado.
          </p>
        </div>
      </div>
    </section>
  );
};
