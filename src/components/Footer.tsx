import React from 'react';
import { SITE_CONFIG } from '../config';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#111827] text-slate-300 py-12 sm:py-16 px-4 sm:px-6 lg:px-8 border-t border-slate-800">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        {/* Nome do produto */}
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xl">🧵</span>
          <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            {SITE_CONFIG.productName}
          </h3>
        </div>

        {/* Descrição */}
        <p className="text-sm text-slate-400 max-w-md leading-relaxed mb-8">
          Coleção digital de moldes para quem adora criar e confeccionar novos projetos de costura.
        </p>

        {/* Badges de confiança */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs sm:text-sm font-semibold text-slate-300 mb-8 pb-8 border-b border-slate-800/80 w-full">
          <div className="flex items-center gap-2 bg-slate-800/60 px-3.5 py-1.5 rounded-full border border-slate-700/60">
            <span>🔒</span>
            <span>Compra segura</span>
          </div>
          <div className="flex items-center gap-2 bg-slate-800/60 px-3.5 py-1.5 rounded-full border border-slate-700/60">
            <span>⚡</span>
            <span>Produto 100% digital</span>
          </div>
          <div className="flex items-center gap-2 bg-slate-800/60 px-3.5 py-1.5 rounded-full border border-slate-700/60">
            <span>🛡️</span>
            <span>Garantia de 7 dias</span>
          </div>
        </div>

        {/* Links legais */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-slate-400 font-medium mb-8">
          <a
            href={SITE_CONFIG.privacyUrl}
            className="hover:text-white transition-colors duration-200 hover:underline"
          >
            Política de Privacidade
          </a>
          <span className="text-slate-600">•</span>
          <a
            href={SITE_CONFIG.termsUrl}
            className="hover:text-white transition-colors duration-200 hover:underline"
          >
            Termos de Uso
          </a>
          <span className="text-slate-600">•</span>
          <a
            href={SITE_CONFIG.contactUrl}
            className="hover:text-white transition-colors duration-200 hover:underline"
          >
            Contato
          </a>
        </div>

        {/* Copyright */}
        <div className="text-xs text-slate-500 font-medium">
          © 2026 — Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};
