import React from 'react';
import { SITE_CONFIG } from '../config';
import { Star, Check, Heart } from 'lucide-react';

interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  avatarText: string;
  avatarBg: string;
  date: string;
  title: string;
  text: string;
  tag: string;
}

export const SocialProof: React.FC = () => {
  if (!SITE_CONFIG.showTestimonials) {
    return null;
  }

  const testimonials: TestimonialItem[] = [
    {
      id: '1',
      name: 'Maria Gonçalves',
      role: 'Costureira por paixão',
      avatarText: 'MG',
      avatarBg: 'bg-[#E11D48]',
      date: '08/10/2026',
      title: '“Uma coleção super prática para os meus projetos!”',
      text: 'Adorei ter tantos moldes organizados em um só lugar. Posso escolher o modelo que quero, imprimir em folhas comuns e costurar sem complicação. Já fiz dois vestidos e uma blusa. Os traços são perfeitos!',
      tag: 'Projetos pessoais'
    },
    {
      id: '2',
      name: 'Luciana Pereira',
      role: 'Empreendedora de costura',
      avatarText: 'LP',
      avatarBg: 'bg-[#2563EB]',
      date: '09/10/2026',
      title: '“Mais ideias e opções para o meu ateliê”',
      text: 'O que mais gostei foi da variedade da coleção. Ter os arquivos em formato digital me ajuda a consultar os moldes e escolher novos modelos para minhas clientes. Os 5 bônus são um complemento incrível.',
      tag: 'Projetos de ateliê'
    },
    {
      id: '3',
      name: 'Ana Ramirez',
      role: 'Aficionada por costura criativa',
      avatarText: 'AR',
      avatarBg: 'bg-[#059669]',
      date: '10/10/2026',
      title: '“Uma grande fonte de inspiração para criar!”',
      text: 'Gosto muito de costurar e essa coleção me deu dezenas de ideias novas. É super prático guardar os arquivos e imprimir apenas o molde que vou usar. Uma opção excelente para soltar a criatividade.',
      tag: 'Costura criativa'
    }
  ];

  return (
    <section className="bg-[#FAF7F2] py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b border-stone-200/60">
      <div className="max-w-6xl mx-auto">
        {/* Encabezado Principal */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0F172A] tracking-tight leading-tight mb-4">
            O que dizem quem já utiliza os{' '}
            <span className="text-[#2563EB] block sm:inline">
              +1.000 Moldes de Costura
            </span>
          </h2>
          <p className="text-base sm:text-lg text-[#64748B] leading-relaxed max-w-2xl mx-auto">
            Veja a experiência de quem já recebeu e está usando nossa coleção para criar lindas peças de costura.
          </p>
        </div>

        {/* Tarjeta Superior de Resumo de Calificação */}
        <div className="bg-white rounded-[26px] border border-stone-200/80 p-6 sm:p-8 mb-10 shadow-xs">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            {/* Columna Izquierda: Puntuación 4.9 / 5.0 */}
            <div className="md:col-span-3 flex flex-col items-center md:items-start justify-center border-b md:border-b-0 md:border-r border-stone-200/70 pb-5 md:pb-0 md:pr-6">
              <div className="flex items-baseline gap-1.5">
                <span className="text-4xl sm:text-5xl font-black text-[#0F172A] tracking-tight">
                  4.9
                </span>
                <span className="text-lg font-bold text-slate-400">
                  / 5.0
                </span>
              </div>
              <div className="flex items-center gap-1 mt-2 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
            </div>

            {/* Columna Central: Puntos clave de valor */}
            <div className="md:col-span-5 space-y-3 px-0 md:px-4">
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5" strokeWidth={3} />
                </div>
                <span className="text-xs sm:text-sm text-slate-700 font-medium">
                  <strong className="font-bold text-slate-900">Arquivos digitais</strong> fáceis de consultar e baixar
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5" strokeWidth={3} />
                </div>
                <span className="text-xs sm:text-sm text-slate-700 font-medium">
                  <strong className="font-bold text-slate-900">Grande variedade de moldes</strong> para diversos projetos
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5" strokeWidth={3} />
                </div>
                <span className="text-xs sm:text-sm text-slate-700 font-medium">
                  <strong className="font-bold text-slate-900">Acesso digital imediato</strong> logo após a compra
                </span>
              </div>
            </div>

            {/* Columna Derecha: Tarjeta Recomendado con Corazón */}
            <div className="md:col-span-4 bg-[#FAF7F2]/70 rounded-[20px] border border-stone-200/80 p-5 text-center flex flex-col items-center justify-center">
              <Heart className="w-5 h-5 text-emerald-600 fill-emerald-600 mb-1.5" />
              <span className="text-xs font-black text-[#0F172A] tracking-wider uppercase mb-1">
                RECOMENDADO
              </span>
              <p className="text-xs text-slate-500 leading-relaxed max-w-xs">
                Para quem ama costurar e quer ter moldes testados e aprovados sempre à disposição.
              </p>
            </div>
          </div>
        </div>

        {/* Grid de 3 Testemunhos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-[24px] border border-stone-200/90 p-6 sm:p-7 flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow"
            >
              <div>
                {/* Estrelas e Data */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-0.5 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-xs text-slate-400 font-medium">
                    {item.date}
                  </span>
                </div>

                {/* Título da avaliação */}
                <h3 className="text-base sm:text-lg font-bold text-[#0F172A] mb-3 leading-snug">
                  {item.title}
                </h3>

                {/* Texto do depoimento */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.text}
                </p>
              </div>

              {/* Perfil */}
              <div className="mt-6 pt-5 border-t border-slate-100">
                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-10 h-10 rounded-full ${item.avatarBg} text-white font-bold text-sm flex items-center justify-center shrink-0 shadow-2xs`}>
                    {item.avatarText}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#0F172A] leading-tight">
                      {item.name}
                    </h4>
                    <span className="text-xs text-slate-400 mt-0.5 block">
                      {item.role}
                    </span>
                  </div>
                </div>

                {/* Tag pill inferior */}
                <span className="inline-block px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-[11px] font-medium">
                  {item.tag}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
