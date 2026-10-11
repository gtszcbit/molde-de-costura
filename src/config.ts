/**
 * CONFIGURACIÓN CENTRAL DE LA LANDING PAGE
 * Modifica aquí los precios, enlaces, imágenes y textos clave de la oferta.
 */

export const SITE_CONFIG = {
  productName: "+300 Moldes de Costura",
  currency: "MXN",
  // Plan Completo (Recomendado)
  price: "$140 MXN",
  oldPrice: "$250 MXN",
  checkoutUrl: "[CHECKOUT_URL_COMPLETO]",
  checkoutUrlComplete: "[CHECKOUT_URL_COMPLETO]",
  // Plan Esencial (Básico)
  priceEssential: "$55 MXN",
  oldPriceEssential: "$100 MXN",
  checkoutUrlEssential: "[CHECKOUT_URL_ESENCIAL]",
  privacyUrl: "#politica-de-privacidad",
  termsUrl: "#terminos-de-uso",
  contactUrl: "mailto:soporte@moldesdecostura.com",
  showTestimonials: true,
  showBonuses: true,
  showUrgencyBar: true
};

export const IMAGES = {
  hero: "/src/assets/images/regenerated_image_1791682406884.png",
  product01: "/src/assets/images/regenerated_image_1791683322136.png",
  product02: "/src/assets/images/regenerated_image_1791683862910.png",
  product03: "/src/assets/images/regenerated_image_1791684539078.png",
  product04: "/src/assets/images/bono4_planner_costura_1791684610833.jpg",
  product05: "/src/assets/images/regenerated_image_1791685695916.png",
  printedPattern: "[PRINTED_PATTERN_IMAGE]",
  patternDetail: "[PATTERN_DETAIL_IMAGE]",
  clothingExample01: "[CLOTHING_EXAMPLE_01]",
  clothingExample02: "[CLOTHING_EXAMPLE_02]",
  clothingExample03: "[CLOTHING_EXAMPLE_03]",
  mainProduct: "/src/assets/images/regenerated_image_1791686843023.png",
  bonus01: "/src/assets/images/regenerated_image_1791683322136.png",
  bonus02: "/src/assets/images/regenerated_image_1791683862910.png",
  bonus03: "/src/assets/images/regenerated_image_1791684539078.png",
  bonus04: "/src/assets/images/bono4_planner_costura_1791684610833.jpg",
  bonus05: "/src/assets/images/regenerated_image_1791685695916.png",
  testimonial01: "[TESTIMONIAL_IMAGE_01]",
  testimonial02: "[TESTIMONIAL_IMAGE_02]",
  testimonial03: "[TESTIMONIAL_IMAGE_03]"
};

export const BONUSES_DATA = [
  {
    id: "bonus01",
    imageKey: "bonus01" as keyof typeof IMAGES,
    tag: "Bono Especial #1",
    name: "Guía de Medidas y Tallas",
    description: "Aprende a tomar tus medidas correctamente con tablas prácticas, puntos anatómicos de referencia y fichas imprimibles.",
    originalPrice: "$70",
    currentPrice: "$0"
  },
  {
    id: "bonus02",
    imageKey: "bonus02" as keyof typeof IMAGES,
    tag: "Bono Especial #2",
    name: "Guía de Ajuste de Moldes",
    description: "Aprende a adaptar y ajustar piezas de patrones a diferentes siluetas y necesidades de confección.",
    originalPrice: "$70",
    currentPrice: "$0"
  },
  {
    id: "bonus03",
    imageKey: "bonus03" as keyof typeof IMAGES,
    tag: "Bono Especial #3",
    name: "Guía de Telas, Hilos y Agujas",
    description: "Aprende a elegir mejor los materiales para cada proyecto con muestras de telas, tipos de hilos, agujas y recomendaciones prácticas.",
    originalPrice: "$70",
    currentPrice: "$0"
  },
  {
    id: "bonus04",
    imageKey: "bonus04" as keyof typeof IMAGES,
    tag: "Bono Especial #4",
    name: "Planner de Proyectos de Costura",
    description: "Organiza tus ideas, medidas y materiales en un solo lugar con fichas de proyectos, listas de materiales y planificadores semanales.",
    originalPrice: "$70",
    currentPrice: "$0"
  },
  {
    id: "bonus05",
    imageKey: "bonus05" as keyof typeof IMAGES,
    tag: "Bono Especial #5",
    name: "Pack Extra de 50 Moldes de Accesorios",
    description: "Amplía tus opciones con moldes extra para crear bolsos, tote bags, neceseres, scrunchies, diademas, delantales y organizadores.",
    originalPrice: "$70",
    currentPrice: "$0"
  }
];

export const FAQ_DATA = [
  {
    question: "¿Qué voy a recibir?",
    answer: "Recibirás acceso digital a una colección con más de 300 moldes de costura en archivos PDF."
  },
  {
    question: "¿Es un producto físico?",
    answer: "No. Es un producto digital. No se envían moldes impresos ni prendas físicas."
  },
  {
    question: "¿Cómo recibo los moldes?",
    answer: "Después de completar la compra recibirás las instrucciones para acceder al material digital."
  },
  {
    question: "¿Necesito imprimir los archivos?",
    answer: "Para utilizar un molde físicamente en tu proyecto necesitarás imprimir las páginas correspondientes siguiendo las indicaciones del archivo."
  },
  {
    question: "¿Necesito saber coser?",
    answer: "Los moldes sirven como apoyo para proyectos de costura. La experiencia necesaria puede variar según la prenda y el proyecto elegido."
  },
  {
    question: "¿Puedo imprimirlos en casa?",
    answer: "Puedes utilizar una impresora compatible con el formato indicado en cada archivo o recurrir a un servicio de impresión."
  },
  {
    question: "¿Cuántos moldes recibo?",
    answer: "La colección incluye más de 300 moldes de costura."
  },
  {
    question: "¿En qué formato recibo el material?",
    answer: "El material se entrega digitalmente en formato PDF."
  },
  {
    question: "¿Cómo funciona la garantía?",
    answer: "La oferta cuenta con un período de garantía de 7 días. Consulta las condiciones indicadas en la página de compra."
  }
];
