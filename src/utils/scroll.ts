/**
 * Função de scroll suave inteligente para a seção de ofertas
 * - No desktop/computador: rola para o início da seção de oferta normalmente (os 2 planos já aparecem lado a lado).
 * - No celular/mobile: rola um pouco mais para baixo, parando num "meio termo" perfeito
 *   onde o usuário dá de cara no plano VIP de R$ 19,90 com destaque,
 *   enquanto ainda enxerga perfeitamente o plano de R$ 10,90 ao mesmo tempo.
 */
export const scrollToOffer = () => {
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 1024;
  
  if (!isMobile) {
    const offerSection = document.getElementById('oferta');
    if (offerSection) {
      offerSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    return;
  }

  // Comportamento especial para celular
  const card19 = document.getElementById('plano-completo');
  const card10 = document.getElementById('plano-essencial');
  
  if (card19 && card10) {
    const rect19 = card19.getBoundingClientRect();
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    // Deixa o topo do plano de 19,90 a cerca de 38% a 40% da altura da tela.
    // Dessa forma, a parte superior exibe o plano de 10,90 e a parte inferior
    // dá de cara no plano de 19,90, permitindo ver os dois ao mesmo tempo na tela.
    const visibleOffset = window.innerHeight * 0.40;
    const targetY = scrollTop + rect19.top - visibleOffset;
    
    window.scrollTo({
      top: Math.max(0, targetY),
      behavior: 'smooth'
    });
  } else {
    const offerSection = document.getElementById('oferta');
    if (offerSection) {
      offerSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
};
