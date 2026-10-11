import React from 'react';

export const Benefits: React.FC = () => {
  const benefitsList = [
    {
      icon: '✂️',
      title: '+1.000 moldes',
      description: 'Una amplia colección con diferentes modelos para explorar nuevos proyectos de costura.'
    },
    {
      icon: '🖨️',
      title: 'Listos para imprimir',
      description: 'Recibe los archivos digitalmente y prepara los moldes necesarios para tu próximo proyecto.'
    },
    {
      icon: '👗',
      title: 'Diferentes estilos',
      description: 'Encuentra inspiración para confeccionar diferentes tipos y estilos de prendas.'
    }
  ];

  return (
    <section className="bg-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b border-slate-100">
      <div className="max-w-5xl mx-auto">
        {/* Encabezado de la sección */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="inline-block px-3.5 py-1 rounded-full bg-blue-50 text-[#2563EB] text-xs font-bold tracking-wider uppercase mb-3">
            ✦ TODO EN UN SOLO LUGAR
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0F172A] tracking-tight leading-tight mb-4">
            Una colección para quienes aman crear con sus propias manos
          </h2>
          <p className="text-base sm:text-lg text-[#64748B] leading-relaxed">
            Ten diferentes moldes organizados en formato digital para consultar, imprimir y utilizar en tus proyectos.
          </p>
        </div>

        {/* 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {benefitsList.map((benefit, index) => (
            <div
              key={index}
              className="bg-[#FFF9F0] border border-amber-200/50 rounded-[18px] p-8 sm:p-9 text-center shadow-xs hover:shadow-md transition duration-200 flex flex-col items-center relative overflow-hidden group"
            >
              {/* Sutil línea punteada decorativa en la parte superior */}
              <div className="w-12 h-1 border-t-2 border-dashed border-amber-400/40 mb-4" />

              <div className="w-16 h-16 rounded-2xl bg-white shadow-xs border border-amber-200/60 flex items-center justify-center text-3xl mb-6 group-hover:scale-105 transition-transform duration-200">
                {benefit.icon}
              </div>

              <h3 className="text-xl font-bold text-[#0F172A] mb-3">
                {benefit.title}
              </h3>

              <p className="text-[#64748B] text-sm sm:text-base leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
