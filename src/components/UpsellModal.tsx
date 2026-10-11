import React from 'react';
import { SITE_CONFIG } from '../config';
import { X, AlertTriangle, Flame, ShieldCheck } from 'lucide-react';

interface UpsellModalProps {
  isOpen: boolean;
  onClose: () => void;
  onProceedEssential: () => void;
}

export const UpsellModal: React.FC<UpsellModalProps> = ({
  isOpen,
  onClose,
  onProceedEssential
}) => {
  if (!isOpen) return null;

  const discountCheckout = (SITE_CONFIG.checkoutUrlDiscountVIP || SITE_CONFIG.checkoutUrlComplete || SITE_CONFIG.checkoutUrl);
  const isDiscountExternal = discountCheckout.startsWith('http');

  const handleDiscountClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (discountCheckout.startsWith('[') || discountCheckout.startsWith('#')) {
      e.preventDefault();
      onClose();
      const offerSection = document.getElementById('oferta');
      if (offerSection) {
        offerSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="upsell-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/70 backdrop-blur-sm animate-in fade-in duration-200"
    >
      {/* Backdrop click listener */}
      <div 
        className="fixed inset-0 -z-10" 
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Card com Borda Amarela Ouro idêntico à imagem anexada */}
      <div className="relative w-full max-w-lg bg-white rounded-[32px] border-4 border-amber-400 p-6 sm:p-9 shadow-2xl text-center overflow-hidden animate-in zoom-in-95 duration-200">
        {/* Botão de Fechar */}
        <button
          onClick={onClose}
          aria-label="Cerrar ventana"
          className="absolute top-4 right-4 sm:top-5 sm:right-5 p-2 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Badge: OPORTUNIDAD ÚNICA */}
        <div className="flex justify-center mb-4 pt-1">
          <span className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-black tracking-wider uppercase shadow-2xs">
            <AlertTriangle className="w-3.5 h-3.5 text-amber-600" />
            OPORTUNIDAD ÚNICA
          </span>
        </div>

        {/* Título Principal */}
        <h3
          id="upsell-modal-title"
          className="text-2xl sm:text-3xl font-black text-[#0F172A] tracking-tight leading-tight mb-3"
        >
          ¡Espera! ¿Qué tal llevarte TODO con bonos y descuento?
        </h3>

        {/* Texto Explicativo */}
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-md mx-auto mb-6">
          Elegiste la versión simple de <strong className="text-slate-800 font-bold">$9.900,00 COP</strong>. Pero solo por ahora, puedes conseguir el <strong className="text-[#0F172A] font-bold">Plan VIP Premium</strong> (con los 5 bonos de apoyo + actualizaciones + soporte) por solo:
        </p>

        {/* Caja de Precio Verde Destacada */}
        <div className="bg-[#ECFDF5] border-2 border-emerald-400 rounded-[22px] p-5 sm:p-6 text-center my-6 shadow-xs">
          <div className="text-xs sm:text-sm font-semibold text-slate-500 line-through decoration-slate-400 mb-1">
            De $25.900,00 COP por solo
          </div>

          <div className="flex items-center justify-center gap-1.5 text-emerald-600 my-1">
            <span className="text-2xl sm:text-3xl font-bold">$</span>
            <span className="text-4xl sm:text-5xl font-black tracking-tight">16.900,00</span>
            <span className="text-lg sm:text-xl font-bold ml-1">COP</span>
          </div>

          <div className="text-xs sm:text-sm font-black text-emerald-700 tracking-wide mt-1">
            ¡Ahorra en grande al instante!
          </div>
        </div>

        {/* Botón Principal (Verde com Fogo) */}
        <a
          href={discountCheckout.startsWith('[') ? '#oferta' : discountCheckout}
          onClick={handleDiscountClick}
          target={isDiscountExternal ? '_blank' : '_self'}
          rel={isDiscountExternal ? 'noopener noreferrer' : undefined}
          className="w-full inline-flex items-center justify-center gap-2 bg-[#22C55E] hover:bg-[#16A34A] text-white font-black text-base sm:text-lg py-4 px-6 rounded-2xl shadow-lg shadow-emerald-500/25 transition-all transform hover:scale-[1.01] active:scale-[0.99] text-center mb-3"
        >
          <Flame className="w-5 h-5 text-amber-300 fill-amber-300 shrink-0" />
          <span>Sí, la quiero por $16.900,00 COP</span>
        </a>

        {/* Botão Secundário (Continuar com o plano de $9.900) */}
        <button
          onClick={onProceedEssential}
          className="w-full bg-blue-50/70 hover:bg-blue-100/70 border border-blue-200 text-[#2563EB] font-bold text-xs sm:text-sm py-3.5 px-6 rounded-2xl text-center transition-all"
        >
          No, gracias. Quiero continuar con el plan de $9.900,00 COP →
        </button>

        {/* Rodapé do Modal */}
        <div className="mt-4 flex items-center justify-center gap-1.5 text-[11px] text-slate-400">
          <ShieldCheck className="w-3.5 h-3.5 text-slate-400" />
          <span>Garantía de 7 días · Entrega digital inmediata</span>
        </div>
      </div>
    </div>
  );
};
