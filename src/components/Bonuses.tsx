import React from 'react';
import { SITE_CONFIG, IMAGES } from '../config';
import { Gift, Check, ArrowRight } from 'lucide-react';

export const Bonuses: React.FC = () => {
  if (!SITE_CONFIG.showBonuses) return null;

  const bonusItems = [
    { name: 'Guía de Medidas y Tallas', oldPrice: '$20.000 COP', price: '$0' },
    { name: 'Guía de Ajuste de Moldes', oldPrice: '$20.000 COP', price: '$0' },
    { name: 'Guía de Telas, Hilos y Agujas', oldPrice: '$20.000 COP', price: '$0' },
    { name: 'Planner de Proyectos de Costura', oldPrice: '$20.000 COP', price: '$0' },
    { name: 'Pack Extra de 50 Moldes de Accesorios', oldPrice: '$20.000 COP', price: '$0' }
  ];

  const handleCtaClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const offerSection = document.getElementById('oferta');
    if (offerSection) {
      offerSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b border-slate-100">
      <div className="max-w-4xl mx-auto">
        {/* Encabezado */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-pink-100 text-pink-700 text-xs font-bold tracking-wider uppercase mb-3">
            <Gift className="w-3.5 h-3.5 text-pink-600" />
            <span>5 BONOS DE REGALO</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0F172A] tracking-tight leading-tight mb-3">
            Más para crear. Sin pagar más.
          </h2>

          <p className="text-base sm:text-lg text-[#64748B] leading-relaxed max-w-xl mx-auto">
            Elige el Plan Completo de $25.900,00 COP y recibe los cinco bonos como regalo, sin costo extra.
          </p>
        </div>

        {/* Card Principal con Borde Amarillo/Ámbar */}
        <div className="max-w-2xl mx-auto bg-[#FFFDF9] border border-amber-300/80 rounded-[30px] p-6 sm:p-9 shadow-sm">
          {/* Imagen de los 5 Bonos Exclusivos */}
          <div className="rounded-[22px] overflow-hidden border border-stone-200/90 shadow-xs mb-8 bg-white p-1">
            <img
              src={IMAGES.mainProduct}
              alt="5 Bonos Exclusivos de Costura incluidos en el plan premium"
              className="w-full h-auto rounded-[18px] object-cover"
            />
          </div>

          {/* Subtítulo: INCLUIDOS EN EL PLAN COMPLETO */}
          <div className="mb-5">
            <span className="text-xs font-black text-emerald-700 tracking-wider uppercase">
              INCLUIDOS EN EL PLAN COMPLETO
            </span>
          </div>

          {/* Lista de los 5 Bonos con precio tachado $70 MXN a $0 */}
          <div className="space-y-4 mb-7">
            {bonusItems.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between pb-3.5 border-b border-amber-200/60 last:border-b-0"
              >
                <div className="flex items-center gap-3">
                  <span className="text-emerald-600 font-extrabold text-base">
                    ✓
                  </span>
                  <span className="text-sm sm:text-base font-bold text-[#0F172A]">
                    {item.name}
                  </span>
                </div>

                <div className="text-right shrink-0 ml-3">
                  <div className="text-xs text-rose-500 font-semibold line-through decoration-rose-500">
                    {item.oldPrice}
                  </div>
                  <div className="text-lg font-black text-emerald-600 leading-tight">
                    {item.price}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Caja Destacada: PRODUCTO BASE + LOS 5 BONOS */}
          <div className="border-2 border-emerald-500 rounded-[22px] p-5 sm:p-6 text-center bg-white my-6 shadow-xs">
            <div className="text-[11px] font-black text-emerald-800 tracking-wider uppercase mb-1">
              PRODUCTO BASE + LOS 5 BONOS
            </div>

            <div className="text-xs text-slate-400 font-medium line-through mb-1">
              En lugar de pagar $65.000,00 COP
            </div>

            <div className="text-2xl sm:text-3xl md:text-4xl font-black text-emerald-800 tracking-tight mb-3">
              Pagas solo $25.900,00 COP
            </div>

            <div className="bg-emerald-100/70 rounded-xl py-2.5 px-4 text-xs sm:text-sm font-bold text-emerald-900 inline-block w-full">
              Recibes más de 1.000 moldes de costura y todos los bonos de regalo.
            </div>
          </div>

          {/* Microcopy inferior */}
          <p className="text-xs text-slate-500 text-center mb-5">
            Todo incluido en el <strong className="text-slate-700">Plan Completo de $25.900,00 COP</strong>. El Plan Esencial no incluye estos extras.
          </p>

          {/* Botón Verde: Elegir el Plan Completo */}
          <a
            href="#oferta"
            onClick={handleCtaClick}
            className="w-full bg-[#22C55E] hover:bg-[#16A34A] text-white font-black text-base sm:text-lg py-4 px-6 rounded-2xl shadow-lg shadow-emerald-500/25 flex items-center justify-center gap-2 transition-all transform hover:scale-[1.01] active:scale-[0.99] text-center"
          >
            <span>Elegir el Plan Completo</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};
