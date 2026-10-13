import React from 'react';
import { SITE_CONFIG, IMAGES } from '../config';
import { Gift, ArrowRight } from 'lucide-react';

import { scrollToOffer } from '../utils/scroll';

export const Bonuses: React.FC = () => {
  if (!SITE_CONFIG.showBonuses) return null;

  const bonusItems = [
    { name: 'Guia de Medidas e Tamanhos', oldPrice: 'R$ 37,00', price: 'R$ 0' },
    { name: 'Guia de Ajuste de Moldes', oldPrice: 'R$ 37,00', price: 'R$ 0' },
    { name: 'Guia de Tecidos, Linhas e Agulhas', oldPrice: 'R$ 37,00', price: 'R$ 0' },
    { name: 'Planner de Projetos de Costura', oldPrice: 'R$ 37,00', price: 'R$ 0' },
    { name: 'Pack Extra de 50 Moldes de Acessórios', oldPrice: 'R$ 37,00', price: 'R$ 0' }
  ];

  const handleCtaClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    scrollToOffer();
  };

  return (
    <section className="bg-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b border-slate-100">
      <div className="max-w-4xl mx-auto">
        {/* Encabezado */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-pink-100 text-pink-700 text-xs font-bold tracking-wider uppercase mb-3">
            <Gift className="w-3.5 h-3.5 text-pink-600" />
            <span>5 BÔNUS DE PRESENTE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0F172A] tracking-tight leading-tight mb-3">
            Mais para criar. Sem pagar a mais.
          </h2>

          <p className="text-base sm:text-lg text-[#64748B] leading-relaxed max-w-xl mx-auto">
            Escolha o Plano Completo de R$ 19,90 e receba os cinco bônus de presente, sem nenhum custo extra.
          </p>
        </div>

        {/* Card Principal com Borda Amarela/Ámbar */}
        <div className="max-w-3xl mx-auto bg-[#FFFDF9] border border-amber-300/80 rounded-[30px] p-6 sm:p-10 shadow-md">
          {/* Imagem dos 5 Bônus */}
          <div className="rounded-[24px] overflow-hidden border border-stone-200/90 shadow-sm mb-8 bg-white p-1.5 sm:p-2">
            <img
              src={IMAGES.bonusBundle || IMAGES.mainProduct}
              alt="5 Bônus Exclusivos de Costura inclusos no plano premium"
              referrerPolicy="no-referrer"
              className="w-full h-auto rounded-[20px] object-cover transition-transform duration-300 hover:scale-[1.01]"
            />
          </div>

          {/* Subtítulo: INCLUSOS NO PLANO COMPLETO */}
          <div className="mb-5">
            <span className="text-xs font-black text-emerald-700 tracking-wider uppercase">
              INCLUSOS NO PLANO COMPLETO
            </span>
          </div>

          {/* Lista dos 5 Bônus */}
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

          {/* Caixa Destacada */}
          <div className="border-2 border-emerald-500 rounded-[22px] p-5 sm:p-6 text-center bg-white my-6 shadow-xs">
            <div className="text-[11px] font-black text-emerald-800 tracking-wider uppercase mb-1">
              PRODUTO BASE + OS 5 BÔNUS
            </div>

            <div className="text-xs text-slate-400 font-medium line-through mb-1">
              Em vez de pagar R$ 67,90
            </div>

            <div className="text-2xl sm:text-3xl md:text-4xl font-black text-emerald-800 tracking-tight mb-3">
              Pague apenas R$ 19,90
            </div>

            <div className="bg-emerald-100/70 rounded-xl py-2.5 px-4 text-xs sm:text-sm font-bold text-emerald-900 inline-block w-full">
              Você recebe mais de 1.000 moldes de costura e todos os bônus de presente.
            </div>
          </div>

          {/* Microcopy inferior */}
          <p className="text-xs text-slate-500 text-center mb-5">
            Tudo incluso no <strong className="text-slate-700">Plano Completo de R$ 19,90</strong>. O Plano Essencial não inclui esses extras.
          </p>

          {/* Botão Verde */}
          <a
            href="#oferta"
            onClick={handleCtaClick}
            className="w-full bg-[#22C55E] hover:bg-[#16A34A] text-white font-black text-base sm:text-lg py-4 px-6 rounded-2xl shadow-lg shadow-emerald-500/25 flex items-center justify-center gap-2 transition-all transform hover:scale-[1.01] active:scale-[0.99] text-center"
          >
            <span>SAIBA MAIS</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};
