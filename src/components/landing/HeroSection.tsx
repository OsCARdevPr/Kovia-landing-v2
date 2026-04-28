import { useEffect, useState } from "react";
import { Bot, MessageCircle, Play, Settings } from "lucide-react";
import { motion } from "framer-motion";
import { KoviaBtn } from "../ui/KoviaBtn";
import {
  HERO_COPY,
  HERO_FLOATING_TRIGGERS,
  HERO_ORBIT_POSITIONS,
} from "../../data/mockData";
import koviImage from "../../img/kovi.webp";

const OPEN_FORM_EVENT = "kovia:open-lead-form";

export function HeroSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // SSR y primer render del cliente son idénticos (mounted=false).
  // Ignoramos prefers-reduced-motion: las animaciones de esta landing son decorativas
  // y el cliente decide explícitamente mostrarlas.
  const shouldAnimateEntrance = mounted;
  const shouldAnimateLoops = mounted;

  const FLOAT_VARIANTS = [
    { x: [0, 6, 0],  y: [0, -12, 0], rotate: [0,  1.5, 0]  },
    { x: [0, -5, 0], y: [0, -10, 0], rotate: [0, -1,   0]  },
    { x: [0, 7, 0],  y: [0,  12, 0], rotate: [0,  1,   0]  },
    { x: [0, -6, 0], y: [0, -14, 0], rotate: [0, -1.5, 0]  },
    { x: [0, 5, 0],  y: [0,  10, 0], rotate: [0,  1,   0]  },
    { x: [0, -4, 0], y: [0, -11, 0], rotate: [0, -1,   0]  },
  ];

  const openQualificationForm = () => {
    window.dispatchEvent(
      new CustomEvent(OPEN_FORM_EVENT, {
        detail: {
          cta_location: "hero",
          cta_text: HERO_COPY.ctaLabel,
        },
      })
    );
  };

  return (
    <section className="relative pt-44 pb-16 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={shouldAnimateEntrance ? { opacity: 1, x: 0 } : { opacity: 0, x: -28 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: shouldAnimateEntrance ? 0.01 : 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-3 mb-8 px-4 py-1.5 glass-pane rounded-full border-kovia-red/30">
            <span className="flex h-2 w-2 rounded-full bg-kovia-red animate-ping" />
            <span className="text-white text-[9px] font-bold uppercase tracking-[0.4em]">
              {HERO_COPY.badge}
            </span>
          </div>

          <h1 className="font-brand text-5xl md:text-8xl font-black text-white mb-8 leading-[0.9] tracking-tighter uppercase">
            {HERO_COPY.titleLine1} <br />
            <span className="text-kovia-red text-glow-red italic">{HERO_COPY.titleHighlight}</span>
          </h1>

          <p className="max-w-xl text-slate-400 text-base md:text-xl mb-12 font-mono font-light leading-relaxed border-l-2 border-kovia-red/20 pl-6">
            {HERO_COPY.subtitle}
          </p>

          <motion.div
            className="flex flex-col sm:flex-row gap-8 items-center"
            initial={shouldAnimateEntrance ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: shouldAnimateEntrance ? 0.01 : 0.7, ease: "easeOut", delay: shouldAnimateEntrance ? 0 : 0.2 }}
          >
            <div className="flex items-center">
              <KoviaBtn onClick={openQualificationForm}>
                <Play size={16} fill="currentColor" /> {HERO_COPY.ctaLabel}
              </KoviaBtn>
            </div>
            <div className="flex items-center gap-4 px-6 py-3.5 glass-pane rounded-xl border-white/5 h-full">
              <div className="flex -space-x-2.5">
                <div className="w-9 h-9 rounded-full border border-kovia-red/30 bg-kovia-dark flex items-center justify-center text-kovia-red shadow-[0_0_15px_rgba(177,43,36,0.2)] relative z-30">
                  <MessageCircle size={16} strokeWidth={2.5} />
                </div>
                <div className="w-9 h-9 rounded-full border border-white/10 bg-kovia-dark flex items-center justify-center text-slate-200 relative z-20">
                  <Bot size={16} />
                </div>
                <div className="w-9 h-9 rounded-full border border-white/10 bg-kovia-dark flex items-center justify-center text-slate-500 relative z-10">
                  <Settings size={16} />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-white text-[10px] font-bold leading-none uppercase tracking-wider">
                  {HERO_COPY.processTitle}
                </span>
                <span className="text-slate-500 text-[8px] font-mono leading-none mt-1 uppercase tracking-tight font-medium">
                  {HERO_COPY.processSubtitle}
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <div
          className="relative lg:h-[450px] hidden lg:flex items-center justify-center p-8"
        >
          <div className="absolute w-[115%] h-[115%] bg-kovia-red/10 blur-[108px] rounded-full kv-hero-glow" />

          <motion.div
            className="relative z-30 w-full max-w-md"
            animate={
              shouldAnimateLoops
                ? { y: [0, -20, 0], rotate: [-1.5, 1.5, -1.5] }
                : { y: 0, rotate: 0 }
            }
            transition={
              shouldAnimateLoops
                ? { duration: 5, ease: "easeInOut", repeat: Infinity }
                : { duration: 0.25 }
            }
            style={{ willChange: shouldAnimateLoops ? "transform" : "auto" }}
          >
            <motion.div
              className="absolute -bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-kovia-red/40 blur-xl"
              animate={
                shouldAnimateLoops
                  ? { scaleX: [1, 0.75, 1], opacity: [0.5, 0.25, 0.5] }
                  : {}
              }
              transition={
                shouldAnimateLoops
                  ? { duration: 5, ease: "easeInOut", repeat: Infinity }
                  : {}
              }
              style={{ width: "55%", height: "14px" }}
            />
            <img
              src={koviImage.src}
              alt="El Fantasma Rojo de Kovia"
              className="w-full h-auto object-contain relative z-10"
              loading="eager"
              decoding="async"
              fetchPriority="high"
              style={{ filter: "drop-shadow(0 0 55px rgba(177,43,36,0.55))" }}
            />
          </motion.div>

          <div className="absolute inset-0 pointer-events-none">
            {HERO_FLOATING_TRIGGERS.map((trigger, index) => (
              <motion.div
                key={trigger.text}
                className={`absolute ${trigger.positionClass} z-20`}
                initial={shouldAnimateEntrance ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: shouldAnimateEntrance ? 0.01 : 0.45,
                  delay: shouldAnimateEntrance ? 0 : index * 0.12,
                  ease: "easeOut",
                }}
              >
                <motion.div
                  className="glass-pane px-4 py-3 rounded-2xl neon-border-red border-kovia-red/20 backdrop-blur-md"
                  animate={
                    shouldAnimateLoops
                      ? FLOAT_VARIANTS[index % FLOAT_VARIANTS.length]
                      : { x: 0, y: 0, rotate: 0 }
                  }
                  transition={
                    shouldAnimateLoops
                      ? {
                          duration: trigger.duration,
                          delay: trigger.delay,
                          ease: "easeInOut",
                          repeat: Infinity,
                        }
                      : { duration: 0.2 }
                  }
                  style={{ willChange: shouldAnimateLoops ? "transform" : "auto" }}
                >
                  <span className="text-white text-[10px] font-brand font-medium whitespace-nowrap">
                    {trigger.text}
                  </span>
                  <div className="absolute -top-1 -right-1 w-2 h-2 bg-kovia-red rounded-full animate-ping opacity-50" />
                </motion.div>
              </motion.div>
            ))}
          </div>

          {HERO_ORBIT_POSITIONS.map((position, index) => (
            <motion.div
              key={position}
              className="absolute w-full h-full"
              animate={shouldAnimateLoops ? { rotate: 360 } : { rotate: 0 }}
              transition={
                shouldAnimateLoops
                  ? {
                      duration: 18 + index * 5,
                      ease: "linear",
                      repeat: Infinity,
                    }
                  : { duration: 0.2 }
              }
              style={{ willChange: shouldAnimateLoops ? "transform" : "auto" }}
            >
              <div
                className="absolute w-1 h-1 bg-kovia-red rounded-full shadow-[0_0_10px_#b12b24]"
                style={{ top: `${position}%`, left: "50%" }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
