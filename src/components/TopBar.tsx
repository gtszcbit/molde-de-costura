import React from 'react';
import { SITE_CONFIG } from '../config';

export const TopBar: React.FC = () => {
  if (!SITE_CONFIG.showUrgencyBar) return null;

  return (
    <aside 
      aria-label="Aviso de oferta especial"
      className="bg-[#1E3A8A] text-white py-2.5 px-4 text-center text-xs sm:text-sm font-semibold tracking-wide border-b border-blue-900/40 relative z-20 shadow-xs"
    >
      <div className="max-w-6xl mx-auto flex items-center justify-center gap-1.5 sm:gap-2">
        <span aria-hidden="true" className="select-none">🧵</span>
        <span>Oferta especial disponible por tiempo limitado</span>
        <span aria-hidden="true" className="select-none">✂️</span>
      </div>
    </aside>
  );
};
