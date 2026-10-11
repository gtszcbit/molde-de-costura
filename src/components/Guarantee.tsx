import React from 'react';
import { ShieldCheck, Lock, Sparkles, RefreshCw } from 'lucide-react';

export const Guarantee: React.FC = () => {
  return (
    <section className="bg-white py-14 sm:py-20 px-4 sm:px-6 lg:px-8 border-b border-slate-100">
      <div className="max-w-3xl mx-auto">
        <div className="relative overflow-hidden bg-gradient-to-br from-[#F0FDF4] via-[#ECFDF5] to-[#E6FBF0] border-2 border-[#86EFAC] rounded-[26px] p-6 sm:p-10 text-center shadow-md">
          {/* Sello de seguridad */}
          <div className="inline-flex items-center justify-center w-18 h-18 rounded-2xl bg-white shadow-sm border border-[#86EFAC] text-emerald-600 mb-5 mx-auto">
            <ShieldCheck className="w-10 h-10 text-emerald-600" />
          </div>

          {/* Badge */}
          <div className="mb-3">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-100/90 text-emerald-900 text-xs font-extrabold tracking-wider uppercase">
              <Sparkles className="w-3.5 h-3.5 text-emerald-700" />
              7 Días de Garantía Incondicional
            </span>
          </div>

          {/* Título */}
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#064E3B] tracking-tight mb-4">
            Pruébalo durante 7 días sin ningún riesgo
          </h2>

          {/* Texto explicativo */}
          <p className="text-sm sm:text-base text-[#047857] leading-relaxed max-w-xl mx-auto mb-6">
            Queremos que te sientas 100% segura con tu decisión. Descarga los moldes, revisa los 5 bonos exclusivos y empieza a explorar tus proyectos. Si por cualquier motivo sientes que esta colección no es para ti dentro de los primeros 7 días, puedes solicitar el reembolso total de tu dinero.
          </p>

          {/* Chips de confianza */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-5 border-t border-emerald-200/60 max-w-lg mx-auto">
            <div className="flex items-center justify-center gap-2 py-2 px-3 bg-white/90 rounded-xl border border-emerald-200/80 text-xs font-bold text-emerald-900 shadow-2xs">
              <Lock className="w-4 h-4 text-emerald-600" />
              Compra 100% Segura
            </div>
            <div className="flex items-center justify-center gap-2 py-2 px-3 bg-white/90 rounded-xl border border-emerald-200/80 text-xs font-bold text-emerald-900 shadow-2xs">
              <RefreshCw className="w-4 h-4 text-emerald-600" />
              Devolución Fácil
            </div>
            <div className="flex items-center justify-center gap-2 py-2 px-3 bg-white/90 rounded-xl border border-emerald-200/80 text-xs font-bold text-emerald-900 shadow-2xs">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              Riesgo Cero
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
