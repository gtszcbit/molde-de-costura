import React, { useState } from 'react';
import { SITE_CONFIG, IMAGES } from '../config';
import { Settings, X, Copy, Check } from 'lucide-react';

interface AdminGuideModalProps {
  onUpdateImage?: (key: keyof typeof IMAGES, value: string) => void;
  activeImages?: typeof IMAGES;
}

export const AdminGuideModal: React.FC<AdminGuideModalProps> = ({
  onUpdateImage,
  activeImages = IMAGES
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const imageDefinitions = [
    { key: 'hero', name: 'Hero / Cabeçalho', size: '1200 x 750 px', current: activeImages.hero },
    { key: 'mainProduct', name: 'O que Recebe (Kit Principal)', size: '800 x 800 px', current: activeImages.mainProduct },
    { key: 'bonusBundle', name: 'Kit 5 Bônus Exclusivos', size: '800 x 800 px', current: (activeImages as any).bonusBundle || activeImages.mainProduct },
    { key: 'bonus01', name: 'Bônus 01: Guia de Medidas', size: '600 x 800 px', current: activeImages.bonus01 },
    { key: 'bonus02', name: 'Bônus 02: Guia de Ajuste', size: '600 x 800 px', current: activeImages.bonus02 },
    { key: 'bonus03', name: 'Bônus 03: Guia de Tecidos', size: '600 x 800 px', current: activeImages.bonus03 },
    { key: 'bonus04', name: 'Bônus 04: Planner de Costura', size: '600 x 800 px', current: activeImages.bonus04 },
    { key: 'bonus05', name: 'Bônus 05: 50 Moldes de Acessórios', size: '600 x 800 px', current: activeImages.bonus05 }
  ];

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(text);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  return (
    <>
      {/* Botão flutuante sutil para o administrador da página */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 z-40 bg-[#1E3A8A] text-white hover:bg-[#2563EB] shadow-lg rounded-full px-3.5 py-2 text-xs font-semibold flex items-center gap-2 border border-white/20 transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer"
        title="Guia de personalização e imagens"
      >
        <Settings className="w-3.5 h-3.5" />
        <span>Guia de Imagens</span>
      </button>

      {/* Modal / Painel lateral */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-[24px] max-w-2xl w-full max-h-[90vh] flex flex-col shadow-2xl overflow-hidden border border-slate-200">
            {/* Cabeçalho */}
            <div className="p-5 sm:p-6 bg-[#1E3A8A] text-white flex items-center justify-between">
              <div>
                <h3 className="text-lg font-bold">
                  Guia para inserir imagens e links
                </h3>
                <p className="text-xs text-blue-200 mt-0.5">
                  Você pode editar diretamente o arquivo <code className="bg-blue-900/60 px-1 py-0.5 rounded text-amber-300">src/config.ts</code>
                </p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-full hover:bg-white/10 text-white transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Conteúdo rolável */}
            <div className="p-5 sm:p-6 overflow-y-auto space-y-6 text-sm text-[#0F172A]">
              {/* Seção de Checkout e Preços */}
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                <h4 className="font-bold text-sm text-[#1E3A8A] mb-2 flex items-center gap-1.5">
                  <span>💰</span> Configuração de Preços e Links de Checkout
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="p-2.5 bg-white rounded-lg border border-slate-200">
                    <div className="font-bold text-[#0F172A] mb-1">Plano Essencial ({SITE_CONFIG.priceEssential})</div>
                    <div className="text-[11px] text-slate-500 font-mono truncate mb-1">
                      {SITE_CONFIG.checkoutUrlEssential}
                    </div>
                    <button
                      onClick={() => copyToClipboard(SITE_CONFIG.checkoutUrlEssential)}
                      className="text-[#2563EB] hover:underline flex items-center gap-1 font-semibold text-[11px] cursor-pointer"
                    >
                      {copiedKey === SITE_CONFIG.checkoutUrlEssential ? <Check className="w-3 h-3 text-green-600" /> : <Copy className="w-3 h-3" />}
                      Copiar link
                    </button>
                  </div>
                  <div className="p-2.5 bg-blue-50/60 rounded-lg border border-blue-200">
                    <div className="font-bold text-[#1E3A8A] mb-1">Plano Completo VIP ({SITE_CONFIG.price})</div>
                    <div className="text-[11px] text-slate-500 font-mono truncate mb-1">
                      {SITE_CONFIG.checkoutUrlComplete}
                    </div>
                    <button
                      onClick={() => copyToClipboard(SITE_CONFIG.checkoutUrlComplete)}
                      className="text-[#2563EB] hover:underline flex items-center gap-1 font-semibold text-[11px] cursor-pointer"
                    >
                      {copiedKey === SITE_CONFIG.checkoutUrlComplete ? <Check className="w-3 h-3 text-green-600" /> : <Copy className="w-3 h-3" />}
                      Copiar link
                    </button>
                  </div>
                  <div className="p-2.5 bg-emerald-50/60 rounded-lg border border-emerald-200 sm:col-span-2">
                    <div className="font-bold text-emerald-800 mb-1">Oferta Pop-up VIP com Desconto ({SITE_CONFIG.priceDiscountVIP})</div>
                    <div className="text-[11px] text-slate-500 font-mono truncate mb-1">
                      {SITE_CONFIG.checkoutUrlDiscountVIP}
                    </div>
                    <button
                      onClick={() => copyToClipboard(SITE_CONFIG.checkoutUrlDiscountVIP)}
                      className="text-emerald-700 hover:underline flex items-center gap-1 font-semibold text-[11px] cursor-pointer"
                    >
                      {copiedKey === SITE_CONFIG.checkoutUrlDiscountVIP ? <Check className="w-3 h-3 text-green-600" /> : <Copy className="w-3 h-3" />}
                      Copiar link
                    </button>
                  </div>
                </div>
              </div>

              {/* Lista de Imagens */}
              <div>
                <h4 className="font-bold text-sm text-[#0F172A] mb-3 flex items-center justify-between">
                  <span>📸 Chaves de imagens em <code className="text-xs bg-slate-100 px-1 py-0.5 rounded">src/config.ts</code></span>
                  <span className="text-xs text-slate-500 font-normal">Substitua por URLs ou caminhos locais</span>
                </h4>

                <div className="space-y-2.5 max-h-[320px] overflow-y-auto pr-1">
                  {imageDefinitions.map((item) => {
                    const isPlace = item.current.startsWith('[');
                    return (
                      <div
                        key={item.key}
                        className="p-3 bg-white border border-slate-200 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-2 hover:border-blue-200 transition-colors"
                      >
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-xs text-[#0F172A]">{item.name}</span>
                            <span className="text-[10px] bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded font-mono">
                              {item.key}
                            </span>
                          </div>
                          <div className="text-[11px] text-slate-500 mt-0.5 flex items-center gap-2">
                            <span>Sugerido: {item.size}</span>
                            <span className="text-slate-300">•</span>
                            <span className={isPlace ? 'text-amber-600' : 'text-emerald-600 font-medium'}>
                              {isPlace ? 'Placeholder ativo' : 'Imagem configurada'}
                            </span>
                          </div>
                        </div>

                        {onUpdateImage && (
                          <div className="flex items-center gap-1.5">
                            <input
                              type="text"
                              placeholder="Colar URL para pré-visualizar"
                              defaultValue={isPlace ? '' : item.current}
                              onBlur={(e) => {
                                if (e.target.value.trim()) {
                                  onUpdateImage(item.key as keyof typeof IMAGES, e.target.value.trim());
                                }
                              }}
                              className="text-xs px-2.5 py-1.5 border border-slate-200 rounded-lg w-44 focus:outline-hidden focus:border-[#2563EB]"
                            />
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Rodapé do modal */}
            <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
              <span>Este painel é apenas informativo para ajudar a gerenciar a página.</span>
              <button
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 bg-slate-800 text-white rounded-xl font-medium hover:bg-slate-900 transition-colors cursor-pointer"
              >
                Fechar Guia
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
