import {
  Database,
  Layers,
  ShieldAlert,
  Terminal,
  TrendingUp,
  Zap,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface NavigationLink {
  readonly id: string;
  readonly label: string;
}

export interface HeroStatusTrigger {
  readonly text: string;
  readonly positionClass: string;
  readonly delay: number;
  readonly duration: number;
}

export interface TestimonialItem {
  readonly name: string;
  readonly metric: string;
  readonly text: string;
  readonly role: string;
}

export interface MethodStep {
  readonly icon: LucideIcon;
  readonly title: string;
  readonly description: string;
  readonly items: readonly string[];
}

export interface SocialLink {
  readonly id: string;
  readonly label: string;
  readonly href: string;
}

export const AGENDAR_URL =
  "https://calcom.oscardev.software/team/kovia-studios/agendar-cita";

export const TICKER_MESSAGE =
  "System Status: Optimized // Manual Latency Eliminator // Amp It Up Methodology v4.0 // Architecture > Marketing";

export const NAVIGATION_LINKS: readonly NavigationLink[] = [
  { id: "caos", label: "01 El Caos" },
  { id: "metodo", label: "02 El Metodo" },
  { id: "social", label: "03 Testimonios" },
];

export const HERO_FLOATING_TRIGGERS: readonly HeroStatusTrigger[] = [
  {
    text: "2 cupos trimestrales",
    positionClass: "top-10 left-10",
    delay: 0,
    duration: 4.2,
  },
  {
    text: "Arquitectura Certificada",
    positionClass: "top-20 right-0",
    delay: 1,
    duration: 5,
  },
  {
    text: "150+ Sistemas Listos",
    positionClass: "bottom-20 left-0",
    delay: 2,
    duration: 4.8,
  },
  {
    text: "Margen perdido x min",
    positionClass: "bottom-10 right-10",
    delay: 3,
    duration: 5.4,
  },
  {
    text: "Diagnostico 100% Gratis",
    positionClass: "top-1/2 left-[-20px]",
    delay: 1.5,
    duration: 4.6,
  },
  {
    text: "Caos vs Margen",
    positionClass: "bottom-1/3 right-[-40px]",
    delay: 2.5,
    duration: 5.2,
  },
];

export const HERO_ORBIT_POSITIONS: readonly number[] = [20, 40, 60];

export const CHAOS_COPY = {
  title: "TU EMPRESA TIENE FUGAS DE DINERO",
  titleHighlight: "FUGAS DE DINERO",
  subtitle: "Sabes cuales son los cuellos de botella en tu negocio?",
  leadCardTitle: "Bandejas Saturadas",
  leadCardDescription:
    "Segun el MIT, responder despues de los 10 minutos reduce tus posibilidades de calificar al lead en un 400%. Nuestro sistema garantiza respuesta inmediata 24/7, capturando el lead cuando el deseo de compra esta en su pico de dopamina.",
  leadTags: ["Leads_Forgotten", "Revenue_Drop_40%"],
  manualTitle: "Caos Manual",
  manualDescription:
    "Realmente te puedes dar el lujo de escalar? Tu sistema esta preparado para duplicar tus ventas sin que la operacion te consuma?",
  dataTitle: "Ceguera de Datos",
  dataDescription:
    "Las empresas que basan sus decisiones en datos tienen 23 veces mas probabilidades de adquirir clientes y 6 veces mas de retenerlos.",
  solutionTitle: "La Solucion Kovia",
  solutionDescription:
    "El talento humano es un acelerador, pero el sistema es el cimiento. Con Kovia, tu empresa escala duplicando su eficiencia, no su personal.",
} as const;

export const TESTIMONIALS: readonly TestimonialItem[] = [
  {
    name: "Epic Bold",
    metric: "40h Libres / Sem",
    text: "Si he notado mejoria en el rendimiento, ya que ahora puedo optimizar mi tiempo y eso me libera de carga y facilita la posibilidad de subir mi presupuesto de pauta (nunca he querido pautar mas porque se que representa mas mensajes y de la forma tradicional seria un caos atender y organizar tantas solicitudes).",
    role: "Milton Borjas",
  },
  {
    name: "Monster Supplements",
    metric: "+ Conversion",
    text: "Darte las gracias por la implementacion del sistema. Ya 3 meses usando el sistema y de verdad me ha facilitado la vida. Tengo mejor organizacion, mejoramos la atencion a cada cliente. Desde la implementacion he aumentado el porcentaje de conversion.",
    role: "Obed Calderon",
  },
  {
    name: "Magnate",
    metric: "2X Facturacion",
    text: "Yo sentia que entre mas publicidad metia, mas me hundia en el desorden. Tenia a dos agentes contestando en WhatsApp todo el dia y aun asi la gente se quejaba de que no contestabamos o los dejabamos en visto. Ahora el sistema contesta al segundo, da precios y solo me pasa los clientes que ya estan listos para pagar. Facturamos casi el doble y sigo con la misma gente.",
    role: "Alessandro Dominguez",
  },
];

export const METHOD_STEPS: readonly MethodStep[] = [
  {
    icon: Terminal,
    title: "01 MAPEO",
    description: "Radiografia quirurgica del flujo actual.",
    items: [
      "Mapeo del proceso de ventas",
      "Diseno del proceso To-Be",
      "Documentacion y playbook",
      "Validacion con el equipo",
    ],
  },
  {
    icon: Database,
    title: "02 CRM",
    description: "Instalacion del cerebro central de tu negocio.",
    items: [
      "Configuracion de Roles, Permisos y Seguridad",
      "Configuracion de Campos y Etiquetas",
      "Integracion Omnicanal (Conexion Base)",
      "Capacitacion al Personal de Ventas",
      "Pruebas de Friccion Manual (Dry-Run)",
    ],
  },
  {
    icon: Zap,
    title: "03 AUTOMATIZACION",
    description: "Automatizamos todos los procesos que podamos.",
    items: [
      "Creacion de Bots",
      "Automatizar Seguimientos",
      "Automatizar Terceros",
      "Previsiones",
      "Creacion de Bases de Datos",
      "Actualizaciones del diagrama",
    ],
  },
  {
    icon: TrendingUp,
    title: "04 DATA",
    description:
      "Ordenamos tu data y te ayudamos a analizarla con dashboards dinamicos.",
    items: [
      "Limpieza de Bases de Datos",
      "Creacion de dashboard BETA",
      "Reunion con cliente explicativa",
      "Finalizacion del proyecto",
    ],
  },
];

export const SOCIAL_LINKS: readonly SocialLink[] = [
  {
    id: "whatsapp",
    label: "WhatsApp",
    href: "https://wa.me/50369735526",
  },
  {
    id: "instagram",
    label: "Instagram",
    href: "https://www.instagram.com/estudio.kovia/",
  },
  {
    id: "facebook",
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61572060099826",
  },
  {
    id: "tiktok",
    label: "TikTok",
    href: "https://www.tiktok.com/@estudio.kovia?lang=en",
  },
];

export const FOOTER_COPY = {
  brand: "ESTUDIO KOVIA",
  slogan: "Engineering for High Growth",
  copyright:
    "© 2026 · ESTUDIO KOVIA · TODOS LOS DERECHOS RESERVADOS",
  systemVersion: "Sistema Operativo v2.4.0",
} as const;

export const HERO_COPY = {
  badge: "Optimizamos tu ROI, CR y productividad",
  titleLine1: "El Metodo",
  titleHighlight: "Kovia.",
  subtitle:
    "Te entregamos un sistema de ventas listo para escalar sin sumar ni un solo empleado.",
  processTitle: "MAS DE 150 PROCESOS",
  processSubtitle: "AUTOMATIZADOS",
} as const;

export const FINAL_CTA_COPY = {
  quoteLine1: "Puedes vender el doble hoy sin colapsar?",
  quoteLine2: "Si no, hay un GRAN problema de arquitectura y sistemas.",
  buttonLabel: "AGENDAR SESION",
} as const;

export const SOCIAL_PROOF_COPY = {
  title: "PRUEBA DE INGENIERIA",
  subtitle: "No nos creas a nosotros. Cree a los margenes brutos.",
} as const;

export const METHOD_COPY = {
  badge: "Engine Core Evolution",
  titleLine1: "EL METODO",
  titleHighlight: "KOVIA.",
} as const;

export const CHAOS_ICON_SET = {
  lead: ShieldAlert,
  manual: Layers,
  solution: TrendingUp,
} as const;
