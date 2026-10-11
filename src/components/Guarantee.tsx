import React from 'react';
import { ShieldCheck, Lock, Sparkles, RefreshCw } from 'lucide-react';

export const Guarantee: React.FC = () => {
  return (
    <section className="bg-white py-8 sm:py-12 px-4 sm:px-6 lg:px-8 border-b border-slate-100">
      <div className="max-w-xl mx-auto">
        <div className="relative overflow-hidden bg-gradient-to-br from-[#F0FDF4] via-[#ECFDF5] to-[#E6FBF0] border border-[#86EFAC] rounded-[22px] p-5 sm:p-7 text-center shadow-xs">
          {/* Sello de seguridad compacto */}
          <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-white shadow-2xs border border-[#86EFAC] text-emerald-600 mb-3 mx-auto">
            <ShieldCheck className="w-6 h-6 text-emerald-600" />
          </div>

          {/* Badge */}
          <div className="mb-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-emerald-100/90 text-emerald-900 text-[11px] font-extrabold tracking-wider uppercase">
              <Sparkles className="w-3 h-3 text-emerald-700" />
              7 Días de Garantía Incondicional
            </span>
          </div>

          {/* Título */}
          <h2 className="text-lg sm:text-xl md:text-2xl font-black text-[#064E3B] tracking-tight mb-2">
            Pruébalo durante 7 días sin ningún riesgo
          </h2>

          {/* Texto explicativo */}
          <p className="text-xs sm:text-sm text-[#047857] leading-relaxed max-w-md mx-auto mb-4">
            Queremos que te sientas 100% segura con tu decisión. Descarga los moldes, revisa los 5 bonos y explora tus proyectos. Si sientes que esta colección no es para ti, solicita el reembolso total de tu dinero dentro de los primeros 7 días.
          </p>

          {/* Chips de confianza compactos */}
          <div className="grid grid-cols-3 gap-2 pt-3.5 border-t border-emerald-200/60 max-w-md mx-auto">
            <div className="flex items-center justify-center gap-1.5 py-1.5 px-2 bg-white/90 rounded-lg border border-emerald-200/80 text-[11px] font-bold text-emerald-900 shadow-2xs">
              <Lock className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span className="truncate">100% Segura</span>
            </div>
            <div className="flex items-center justify-center gap-1.5 py-1.5 px-2 bg-white/90 rounded-lg border border-emerald-200/80 text-[11px] font-bold text-emerald-900 shadow-2xs">
              <RefreshCw className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span className="truncate">Devolución Fácil</span>
            </div>
            <div className="flex items-center justify-center gap-1.5 py-1.5 px-2 bg-white/90 rounded-lg border border-emerald-200/80 text-[11px] font-bold text-emerald-900 shadow-2xs">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span className="truncate">Riesgo Cero</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
