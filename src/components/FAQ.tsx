import React, { useState } from 'react';
import { FAQ_DATA } from '../config';
import { ChevronDown } from 'lucide-react';

export const FAQ: React.FC = () => {
  // Inicialmente abrimos la primera pregunta como buena práctica de UX
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#FAF7F2] py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b border-stone-200/60">
      <div className="max-w-3xl mx-auto">
        {/* Encabezado */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="inline-block px-3.5 py-1 rounded-full bg-blue-100 text-[#1E3A8A] text-xs font-bold tracking-wider uppercase mb-3">
            ❓ PERGUNTAS FREQUENTES
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0F172A] tracking-tight leading-tight mb-4">
            Tire suas dúvidas
          </h2>
          <p className="text-base sm:text-lg text-[#64748B]">
            Tudo o que você precisa saber antes de acessar a coleção de moldes.
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-3.5">
          {FAQ_DATA.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="bg-white rounded-[16px] border border-slate-200/90 overflow-hidden shadow-2xs transition-colors duration-200 hover:border-slate-300"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  className="w-full text-left py-4 sm:py-5 px-5 sm:px-6 flex items-center justify-between gap-4 font-bold text-base sm:text-lg text-[#0F172A] focus:outline-hidden"
                  aria-expanded={isOpen}
                >
                  <span className="leading-snug">{item.question}</span>
                  <div
                    className={`w-8 h-8 rounded-full bg-slate-100 text-[#1E3A8A] flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-blue-50 text-[#2563EB]' : ''
                    }`}
                  >
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 sm:pb-6 text-sm sm:text-base text-[#64748B] leading-relaxed border-t border-slate-100 pt-3">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
