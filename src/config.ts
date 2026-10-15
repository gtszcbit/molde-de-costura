/**
 * CONFIGURAÇÃO CENTRAL DA LANDING PAGE
 * Modifique aqui os preços, links, imagens e textos principais da oferta.
 */

import heroImg from './assets/images/regenerated_image_1791682406884.png';
import bono1Img from './assets/images/regenerated_image_1791683322136.png';
import bono2Img from './assets/images/regenerated_image_1791683862910.png';
import bono3Img from './assets/images/regenerated_image_1791684539078.png';
import bono4Img from './assets/images/bono4_planner_costura_1791684610833.jpg';
import bono5Img from './assets/images/regenerated_image_1791685695916.png';
import mainProductImg from './assets/images/regenerated_image_1791918044092.png';
import bonusBundleImg from './assets/images/regenerated_image_1791918046250.png';

export const SITE_CONFIG = {
  productName: "+1.000 Moldes de Costura",
  currency: "BRL",
  // Plano Completo VIP (Recomendado)
  price: "R$ 19,90",
  oldPrice: "R$ 67,90",
  checkoutUrl: "https://pay.cakto.com.br/38xqqa4_1198747",
  checkoutUrlComplete: "https://pay.cakto.com.br/38xqqa4_1198747",
  // Plano Essencial (Básico)
  priceEssential: "R$ 12,90",
  oldPriceEssential: "R$ 29,90",
  checkoutUrlEssential: "https://pay.cakto.com.br/fqhzyvq",
  // Oferta Especial Pop-up (Desconto VIP quando clica no Essencial)
  priceDiscountVIP: "R$ 15,90",
  checkoutUrlDiscountVIP: "https://pay.cakto.com.br/ze2vogh",
  privacyUrl: "#politica-de-privacidade",
  termsUrl: "#termos-de-uso",
  contactUrl: "mailto:suporte@moldesdecostura.com",
  showTestimonials: true,
  showBonuses: true,
  showUrgencyBar: true
};

export const IMAGES = {
  hero: heroImg,
  product01: bono1Img,
  product02: bono2Img,
  product03: bono3Img,
  product04: bono4Img,
  product05: bono5Img,
  printedPattern: "[PRINTED_PATTERN_IMAGE]",
  patternDetail: "[PATTERN_DETAIL_IMAGE]",
  clothingExample01: "[CLOTHING_EXAMPLE_01]",
  clothingExample02: "[CLOTHING_EXAMPLE_02]",
  clothingExample03: "[CLOTHING_EXAMPLE_03]",
  mainProduct: mainProductImg,
  bonusBundle: bonusBundleImg,
  bonus01: bono1Img,
  bonus02: bono2Img,
  bonus03: bono3Img,
  bonus04: bono4Img,
  bonus05: bono5Img,
  testimonial01: "[TESTIMONIAL_IMAGE_01]",
  testimonial02: "[TESTIMONIAL_IMAGE_02]",
  testimonial03: "[TESTIMONIAL_IMAGE_03]"
};

export const BONUSES_DATA = [
  {
    id: "bonus01",
    imageKey: "bonus01" as keyof typeof IMAGES,
    tag: "Bônus Especial #1",
    name: "Guia de Medidas e Tamanhos",
    description: "Aprenda a tirar suas medidas corretamente com tabelas práticas, pontos anatômicos de referência e fichas imprimíveis.",
    originalPrice: "R$ 37,00",
    currentPrice: "R$ 0"
  },
  {
    id: "bonus02",
    imageKey: "bonus02" as keyof typeof IMAGES,
    tag: "Bônus Especial #2",
    name: "Guia de Ajuste de Moldes",
    description: "Aprenda a adaptar e ajustar peças de moldes para diferentes silhuetas e necessidades de costura.",
    originalPrice: "R$ 37,00",
    currentPrice: "R$ 0"
  },
  {
    id: "bonus03",
    imageKey: "bonus03" as keyof typeof IMAGES,
    tag: "Bônus Especial #3",
    name: "Guia de Tecidos, Linhas e Agulhas",
    description: "Aprenda a escolher os melhores materiais para cada projeto com recomendações de tecidos, tipos de linhas e agulhas.",
    originalPrice: "R$ 37,00",
    currentPrice: "R$ 0"
  },
  {
    id: "bonus04",
    imageKey: "bonus04" as keyof typeof IMAGES,
    tag: "Bônus Especial #4",
    name: "Planner de Projetos de Costura",
    description: "Organize suas ideias, medidas e materiais em um só lugar com fichas de projetos, listas de materiais e planejadores semanais.",
    originalPrice: "R$ 37,00",
    currentPrice: "R$ 0"
  },
  {
    id: "bonus05",
    imageKey: "bonus05" as keyof typeof IMAGES,
    tag: "Bônus Especial #5",
    name: "Pack Extra de 50 Moldes de Acessórios",
    description: "Amplie suas opções com moldes extras para criar bolsas, tote bags, nécessaires, scrunchies, tiaras, aventais e organizadores.",
    originalPrice: "R$ 37,00",
    currentPrice: "R$ 0"
  }
];

export const FAQ_DATA = [
  {
    question: "O que vou receber?",
    answer: "Você receberá acesso digital imediato a uma coleção com mais de 1.000 moldes de costura em arquivos PDF prontos para imprimir e usar."
  },
  {
    question: "É um produto físico?",
    answer: "Não. É um produto 100% digital. Você não precisa esperar pelos Correios: o acesso é enviado imediatamente ao seu e-mail após a compra."
  },
  {
    question: "Como recebo os moldes?",
    answer: "Assim que seu pagamento for aprovado, você recebe um e-mail com o link de acesso exclusivo para baixar todos os moldes e os 5 bônus."
  },
  {
    question: "Preciso imprimir os arquivos?",
    answer: "Para utilizar o molde no tecido, basta imprimir apenas o modelo que for costurar em folhas comuns A4 ou levar a uma gráfica rápida."
  },
  {
    question: "Preciso ter muita experiência para costurar?",
    answer: "Não! Os moldes atendem desde iniciantes até costureiras experientes. Todas as peças contam com linhas e indicações nítidas de montagem."
  },
  {
    question: "Posso imprimir na minha impressora comum de casa?",
    answer: "Sim! Todos os moldes vêm configurados para impressão fácil em folhas sulfite A4 comuns, com marcas de encaixe perfeitas."
  },
  {
    question: "Quantos moldes estão inclusos?",
    answer: "A coleção inclui mais de 1.000 moldes organizados por categorias (vestidos, blusas, calças, saias, infantil, etc.) além dos 5 bônus especiais."
  },
  {
    question: "Em qual formato recebo o material?",
    answer: "Todo o material é entregue em formato PDF de alta resolução (300 DPI), podendo ser acessado pelo celular, tablet ou computador."
  },
  {
    question: "Como funciona a garantia de 7 dias?",
    answer: "Você tem 7 dias de garantia incondicional. Se não gostar do conteúdo por qualquer motivo, devolvemos 100% do seu dinheiro sem burocracia."
  }
];
