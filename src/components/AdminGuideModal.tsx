import React, { useState } from 'react';
import { SITE_CONFIG, IMAGES } from '../config';
import { Settings, X, Copy, Check, ExternalLink } from 'lucide-react';

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
    { key: 'hero', name: 'Hero / Cabecera', size: '1200 x 750 px', current: activeImages.hero },
    { key: 'product01', name: 'Bono 1 — Guía de Medidas', size: '1000 x 650 px', current: activeImages.product01 },
    { key: 'product02', name: 'Bono 2 — Guía de Ajuste', size: '1000 x 650 px', current: activeImages.product02 },
    { key: 'product03', name: 'Bono 3 — Guía de Telas', size: '1000 x 650 px', current: activeImages.product03 },
    { key: 'product04', name: 'Bono 4 — Planner de Costura', size: '1000 x 650 px', current: activeImages.product04 },
    { key: 'product05', name: 'Bono 5 — Moldes de Accesorios', size: '1000 x 650 px', current: activeImages.product05 },
    { key: 'mainProduct', name: 'Qué Recibe (Kit Principal)', size: '800 x 800 px', current: activeImages.mainProduct },
    { key: 'bonus01', name: 'Bono 01', size: '800 x 500 px', current: activeImages.bonus01 },
    { key: 'bonus02', name: 'Bono 02', size: '800 x 500 px', current: activeImages.bonus02 },
    { key: 'bonus03', name: 'Bono 03', size: '800 x 500 px', current: activeImages.bonus03 },
    { key: 'bonus04', name: 'Bono 04', size: '800 x 500 px', current: activeImages.bonus04 },
    { key: 'bonus05', name: 'Bono 05', size: '800 x 500 px', current: activeImages.bonus05 },
    { key: 'testimonial01', name: 'Captura Testimonio 01', size: '600 x 800 px', current: activeImages.testimonial01 },
    { key: 'testimonial02', name: 'Captura Testimonio 02', size: '600 x 800 px', current: activeImages.testimonial02 },
    { key: 'testimonial03', name: 'Captura Testimonio 03', size: '600 x 800 px', current: activeImages.testimonial03 }
  ];

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(text);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  return (
    <>
      {/* Botón flotante sutil para el administrador de la página */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 z-40 bg-[#1E3A8A] text-white hover:bg-[#2563EB] shadow-lg rounded-full px-3.5 py-2 text-xs font-semibold flex items-center gap-2 border border-white/20 transition-all duration-200 hover:scale-105 active:scale-95"
        title="Guía de personalización e imágenes"
      >
        <Settings className="w-3.5 h-3.5 animate-spin-slow" />
        <span>Guía de Imágenes</span>
      </button>

      {/* Modal / Panel lateral */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-[24px] max-w-2xl w-full max-h-[90vh] flex flex-col shadow-2xl overflow-hidden border border-slate-200">
            {/* Cabecera */}
            <div className="p-5 sm:p-6 bg-[#1E3A8A] text-white flex items-center justify-between">
              <div>
                <h3 className="text-lg font-bold">
                  Guía para insertar tus imágenes y enlaces
                </h3>
                <p className="text-xs text-blue-200 mt-0.5">
                  Puedes editar directamente el archivo <code className="bg-blue-900/60 px-1 py-0.5 rounded text-amber-300">src/config.ts</code>
                </p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-full hover:bg-white/10 text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Contenido scrolleable */}
            <div className="p-5 sm:p-6 overflow-y-auto space-y-6 text-sm text-[#0F172A]">
              {/* Sección de Checkout y Precios */}
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                <h4 className="font-bold text-sm text-[#1E3A8A] mb-2 flex items-center gap-1.5">
                  <span>💰</span> Configuración de Precios y Enlace de Checkout
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="p-2.5 bg-white rounded-lg border border-slate-200">
                    <div className="font-bold text-[#0F172A] mb-1">Plan Esencial ($55 MXN)</div>
                    <div className="text-[11px] text-slate-500 font-mono truncate mb-1">
                      {SITE_CONFIG.checkoutUrlEssential}
                    </div>
                    <button
                      onClick={() => copyToClipboard(SITE_CONFIG.checkoutUrlEssential)}
                      className="text-[#2563EB] hover:underline flex items-center gap-1 font-semibold text-[11px]"
                    >
                      {copiedKey === SITE_CONFIG.checkoutUrlEssential ? <Check className="w-3 h-3 text-green-600" /> : <Copy className="w-3 h-3" />}
                      Copiar clave
                    </button>
                  </div>
                  <div className="p-2.5 bg-blue-50/60 rounded-lg border border-blue-200">
                    <div className="font-bold text-[#1E3A8A] mb-1">Plan Completo VIP ($140 MXN)</div>
                    <div className="text-[11px] text-slate-500 font-mono truncate mb-1">
                      {SITE_CONFIG.checkoutUrlComplete}
                    </div>
                    <button
                      onClick={() => copyToClipboard(SITE_CONFIG.checkoutUrlComplete)}
                      className="text-[#2563EB] hover:underline flex items-center gap-1 font-semibold text-[11px]"
                    >
                      {copiedKey === SITE_CONFIG.checkoutUrlComplete ? <Check className="w-3 h-3 text-green-600" /> : <Copy className="w-3 h-3" />}
                      Copiar clave
                    </button>
                  </div>
                </div>
              </div>

              {/* Lista de Placeholders de Imágenes */}
              <div>
                <h4 className="font-bold text-sm text-[#0F172A] mb-3 flex items-center justify-between">
                  <span>📸 Claves de imágenes en <code className="text-xs bg-slate-100 px-1 py-0.5 rounded">src/config.ts</code></span>
                  <span className="text-xs text-slate-500 font-normal">Reemplaza con URLs o rutas locales</span>
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
                              {isPlace ? 'Placeholder activo' : 'Imagen personalizada'}
                            </span>
                          </div>
                        </div>

                        {onUpdateImage && (
                          <div className="flex items-center gap-1.5">
                            <input
                              type="text"
                              placeholder="Pegar URL para previsualizar"
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

            {/* Pie del modal */}
            <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
              <span>Este panel es solo informativo para ayudarte a configurar tus archivos.</span>
              <button
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 bg-slate-800 text-white rounded-xl font-medium hover:bg-slate-900 transition-colors"
              >
                Cerrar Guía
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
