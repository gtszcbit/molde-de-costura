import React, { useState } from 'react';
import { SITE_CONFIG } from '../config';
import { Check, X, ShieldCheck, ShoppingBag, ArrowRight } from 'lucide-react';
import { UpsellModal } from './UpsellModal';

export const Offer: React.FC = () => {
  const [isUpsellOpen, setIsUpsellOpen] = useState(false);

  const essentialCheckout = SITE_CONFIG.checkoutUrlEssential.startsWith('[') 
    ? '#oferta' 
    : SITE_CONFIG.checkoutUrlEssential;

  const completeCheckout = (SITE_CONFIG.checkoutUrlComplete || SITE_CONFIG.checkoutUrl).startsWith('[') 
    ? '#oferta' 
    : (SITE_CONFIG.checkoutUrlComplete || SITE_CONFIG.checkoutUrl);

  const isCompleteExternal = completeCheckout.startsWith('http');

  const handlePlaceholderClick = (e: React.MouseEvent<HTMLAnchorElement>, url: string) => {
    if (url.startsWith('#') || url.startsWith('[')) {
      e.preventDefault();
      const el = document.getElementById('oferta');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleEssentialClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsUpsellOpen(true);
  };

  const handleProceedEssential = () => {
    setIsUpsellOpen(false);
    if (essentialCheckout.startsWith('http')) {
      window.location.href = essentialCheckout;
    }
  };

  return (
    <section id="oferta" className="bg-[#FAF7F2] py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b border-stone-200/60 scroll-mt-6">
      <div className="max-w-6xl mx-auto">
        {/* Encabezado */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0F172A] tracking-tight leading-tight mb-3">
            Escolha o plano ideal para você
          </h2>
          <p className="text-base sm:text-lg text-[#64748B] leading-relaxed max-w-xl mx-auto">
            Download imediato em PDF de alta resolução, pronto para imprimir, preparar e costurar.
          </p>
        </div>

        {/* Comparativa de Planos: Essencial vs Completo */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch max-w-5xl mx-auto">
          {/* 1. PLANO ESSENCIAL */}
          <div className="border-2 border-dashed border-slate-300 rounded-[28px] bg-white p-7 sm:p-9 flex flex-col justify-between shadow-xs transition-shadow hover:shadow-md">
            <div>
              {/* Título do plano */}
              <div className="mb-2">
                <h3 className="text-2xl sm:text-3xl font-black text-[#0F172A]">
                  Plano Essencial
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Coleção de moldes em PDF versão base
                </p>
              </div>

              {/* Caixa de Preço */}
              <div className="bg-slate-50/90 border border-slate-200/80 rounded-[20px] p-5 text-center my-6">
                <div className="text-xs font-semibold text-slate-400 line-through">
                  De {SITE_CONFIG.oldPriceEssential || 'R$ 29,90'}
                </div>
                <div className="flex items-center justify-center gap-1.5 my-1 text-[#2563EB]">
                  <span className="text-xl sm:text-2xl font-bold">R$</span>
                  <span className="text-4xl sm:text-5xl font-black tracking-tight">10,90</span>
                </div>
                <div className="text-xs text-slate-500 font-medium">
                  Pagamento único no cartão ou Pix
                </div>
              </div>

              {/* Lista de características */}
              <div className="space-y-3.5 mb-8">
                {/* Inclusos */}
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" strokeWidth={3} />
                  </div>
                  <span className="text-sm sm:text-base text-slate-800 leading-snug">
                    Coleção de +1.000 moldes em PDF versão base
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" strokeWidth={3} />
                  </div>
                  <span className="text-sm sm:text-base text-slate-800 leading-snug">
                    Arquivos prontos de alta qualidade para imprimir
                  </span>
                </div>

                {/* Não inclusos */}
                <div className="flex items-start gap-3 opacity-60">
                  <div className="w-5 h-5 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center shrink-0 mt-0.5">
                    <X className="w-3.5 h-3.5" strokeWidth={2.5} />
                  </div>
                  <span className="text-sm sm:text-base text-slate-400 line-through leading-snug">
                    Os 5 bônus adicionais de presente
                  </span>
                </div>

                <div className="flex items-start gap-3 opacity-60">
                  <div className="w-5 h-5 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center shrink-0 mt-0.5">
                    <X className="w-3.5 h-3.5" strokeWidth={2.5} />
                  </div>
                  <span className="text-sm sm:text-base text-slate-400 line-through leading-snug">
                    Acesso aos guias de medidas e ajuste de moldes
                  </span>
                </div>

                <div className="flex items-start gap-3 opacity-60">
                  <div className="w-5 h-5 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center shrink-0 mt-0.5">
                    <X className="w-3.5 h-3.5" strokeWidth={2.5} />
                  </div>
                  <span className="text-sm sm:text-base text-slate-400 line-through leading-snug">
                    Suporte prioritário por WhatsApp
                  </span>
                </div>
              </div>
            </div>

            {/* Botão Plano Essencial */}
            <div className="pt-2">
              <button
                type="button"
                onClick={handleEssentialClick}
                className="w-full inline-flex items-center justify-center border-2 border-[#2563EB] text-[#2563EB] hover:bg-blue-50/80 font-bold text-base sm:text-lg py-3.5 px-6 rounded-2xl text-center transition-all duration-200 cursor-pointer"
              >
                Escolher este
              </button>
              <div className="mt-3.5 flex items-center justify-center gap-1.5 text-xs text-slate-500 font-medium text-center">
                <ShieldCheck className="w-4 h-4 text-slate-400" />
                <span>Pagamento único · Acesso digital imediato</span>
              </div>
            </div>
          </div>

          {/* 2. PLANO COMPLETO VIP */}
          <div className="border-2 border-[#2563EB] rounded-[28px] bg-white p-7 sm:p-9 flex flex-col justify-between shadow-xl relative overflow-hidden ring-1 ring-[#2563EB]/20">
            {/* Badge superior direito */}
            <div className="absolute top-0 right-0 bg-[#2563EB] text-white text-[11px] font-black uppercase tracking-wider px-5 py-2 rounded-bl-2xl shadow-2xs">
              ACESSO COMPLETO
            </div>

            <div>
              {/* Título do plano */}
              <div className="mb-2 pt-1 sm:pt-0">
                <span className="text-[11px] font-extrabold uppercase tracking-widest text-slate-400 block mb-1">
                  COLEÇÃO DIGITAL EM PDF
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-[#0F172A] leading-tight">
                  +1.000 Moldes de Costura
                </h3>
                <div className="text-xs sm:text-sm font-bold text-blue-700 flex items-center gap-1.5 mt-1">
                  <span>⭐ Pacote VIP Tudo Incluso · Maior Economia</span>
                </div>
              </div>

              {/* Caixa de Preço */}
              <div className="bg-slate-50/90 border border-slate-200/80 rounded-[20px] p-5 text-center my-6">
                <div className="text-xs font-semibold text-slate-400 line-through">
                  Preço regular: De {SITE_CONFIG.oldPrice || 'R$ 67,90'}
                </div>
                <div className="flex items-center justify-center gap-1.5 my-1 text-[#2563EB]">
                  <span className="text-xl sm:text-2xl font-bold">R$</span>
                  <span className="text-4xl sm:text-5xl font-black tracking-tight">19,90</span>
                </div>
                <div className="text-xs font-black text-[#2563EB] uppercase tracking-wider">
                  PAGAMENTO ÚNICO
                </div>
              </div>

              {/* Lista de características completas */}
              <div className="space-y-3.5 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" strokeWidth={3} />
                  </div>
                  <span className="text-sm sm:text-base text-slate-800 leading-snug">
                    <strong className="font-bold text-[#0F172A]">Coleção completa:</strong> +1.000 moldes de costura prontos
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" strokeWidth={3} />
                  </div>
                  <span className="text-sm sm:text-base text-slate-800 leading-snug">
                    Vestidos, blusas, calças, saias e moda infantil
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" strokeWidth={3} />
                  </div>
                  <span className="text-sm sm:text-base text-slate-800 leading-snug">
                    PDF de <strong className="font-bold text-[#0F172A]">máxima resolução (300 DPI)</strong> pronto para imprimir
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" strokeWidth={3} />
                  </div>
                  <span className="text-sm sm:text-base text-slate-800 leading-snug">
                    🎁 <strong className="font-bold text-[#0F172A]">Os 5 bônus adicionais</strong> exclusivos de presente
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" strokeWidth={3} />
                  </div>
                  <span className="text-sm sm:text-base text-slate-800 leading-snug">
                    <strong className="font-bold text-[#0F172A]">Acesso aos guias de medidas, tecidos e ajuste de moldes</strong>
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" strokeWidth={3} />
                  </div>
                  <span className="text-sm sm:text-base text-slate-800 leading-snug">
                    <strong className="font-bold text-[#0F172A]">Licença de uso livre:</strong> costure para você ou para vender
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" strokeWidth={3} />
                  </div>
                  <span className="text-sm sm:text-base text-slate-800 leading-snug">
                    <strong className="font-bold text-[#0F172A]">Suporte prioritário por WhatsApp</strong> para suas dúvidas
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" strokeWidth={3} />
                  </div>
                  <span className="text-sm sm:text-base text-slate-800 leading-snug">
                    <strong className="font-bold text-[#0F172A]">Acesso vitalício:</strong> downloads ilimitados e imediatos
                  </span>
                </div>
              </div>
            </div>

            {/* Botão Verde Destacado */}
            <div className="pt-2">
              <a
                href={completeCheckout}
                onClick={(e) => handlePlaceholderClick(e, completeCheckout)}
                target={isCompleteExternal ? '_blank' : '_self'}
                rel={isCompleteExternal ? 'noopener noreferrer' : undefined}
                className="w-full inline-flex items-center justify-center gap-2.5 bg-[#22C55E] hover:bg-[#16A34A] text-white font-black text-base sm:text-lg py-4 px-6 rounded-2xl shadow-lg shadow-emerald-500/25 transition-all duration-200 transform hover:scale-[1.01] active:scale-[0.99] text-center"
              >
                <ShoppingBag className="w-5 h-5 shrink-0" />
                <span>Quero receber o material</span>
                <ArrowRight className="w-5 h-5 shrink-0" />
              </a>
              <div className="mt-3.5 flex items-center justify-center gap-1.5 text-xs text-slate-500 font-medium text-center">
                <ShieldCheck className="w-4 h-4 text-[#22C55E]" />
                <span>Transação criptografada e protegida · Envio digital automático</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pop-up Modal de Oferta Especial com Desconto (R$ 15,90) */}
      <UpsellModal
        isOpen={isUpsellOpen}
        onClose={() => setIsUpsellOpen(false)}
        onProceedEssential={handleProceedEssential}
      />
    </section>
  );
};
