import React from 'react';
import { Download, Printer, Scissors, Sparkles } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: '1',
      icon: <Download className="w-5 h-5 text-[#2563EB]" />,
      title: 'Descarga',
      description: 'Después de completar tu compra, accede a los archivos digitales de la colección.'
    },
    {
      number: '2',
      icon: <Printer className="w-5 h-5 text-[#2563EB]" />,
      title: 'Selecciona e imprime',
      description: 'Escoge el molde que deseas utilizar y sigue las indicaciones de impresión incluidas en el archivo correspondiente.'
    },
    {
      number: '3',
      icon: <Scissors className="w-5 h-5 text-[#2563EB]" />,
      title: 'Prepara el molde',
      description: 'Recorta y prepara las piezas siguiendo las indicaciones presentes en el material.'
    },
    {
      number: '4',
      icon: <Sparkles className="w-5 h-5 text-[#2563EB]" />,
      title: 'Comienza tu proyecto',
      description: 'Utiliza el molde preparado como apoyo para confeccionar la prenda correspondiente.'
    }
  ];

  return (
    <section className="bg-[#FAF7F2] py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b border-stone-200/60">
      <div className="max-w-3xl mx-auto">
        {/* Encabezado */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="inline-block px-3.5 py-1 rounded-full bg-blue-50 text-[#2563EB] text-xs font-bold tracking-wider uppercase mb-3">
            🧵 PASO A PASO
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0F172A] tracking-tight leading-tight mb-4">
            Descarga, imprime y comienza a crear
          </h2>
          <p className="text-base sm:text-lg text-[#64748B] leading-relaxed">
            Un proceso sencillo para llevar tus moldes del archivo digital a tu proyecto de costura.
          </p>
        </div>

        {/* Timeline vertical con costura punteada */}
        <div className="relative">
          {/* Línea vertical punteada simulando costura */}
          <div className="absolute left-6 sm:left-8 top-6 bottom-6 w-0.5 border-l-2 border-dashed border-[#2563EB]/40 z-0" />

          <div className="space-y-8 sm:space-y-10 relative z-10">
            {steps.map((step, idx) => (
              <div key={idx} className="flex items-start gap-4 sm:gap-6 group">
                {/* Número circular grande simulando ojal / botón de costura */}
                <div className="w-12 h-12 sm:w-16 sm:h-16 shrink-0 rounded-2xl bg-white border-2 border-[#2563EB]/40 shadow-sm flex flex-col items-center justify-center font-black text-xl sm:text-2xl text-[#1E3A8A] group-hover:border-[#2563EB] group-hover:scale-105 transition duration-200 relative">
                  <span>{step.number}</span>
                  {/* Pequeños puntos decorativos simulando hilo en botón */}
                  <div className="absolute top-1.5 w-1 h-1 rounded-full bg-[#2563EB]/40" />
                  <div className="absolute bottom-1.5 w-1 h-1 rounded-full bg-[#2563EB]/40" />
                </div>

                {/* Contenido del paso */}
                <div className="bg-white rounded-[18px] p-5 sm:p-7 border border-slate-200/80 shadow-xs flex-1 group-hover:shadow-md transition duration-200">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="p-1.5 bg-blue-50 rounded-lg">
                      {step.icon}
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-[#0F172A]">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-sm sm:text-base text-[#64748B] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
