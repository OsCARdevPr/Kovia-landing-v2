import { motion } from "motion/react";
import { CHAOS_COPY, CHAOS_ICON_SET } from "../../data/mockData";
import { fadeInMotion } from "./animationPresets";

interface ChaosSectionProps {}

export function ChaosSection({}: Readonly<ChaosSectionProps>) {
  return (
    <section id="caos" className="py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div {...fadeInMotion} className="text-center mb-12">
          <h2 className="font-brand text-3xl md:text-5xl font-black text-white uppercase tracking-tighter mb-4">
            TU EMPRESA TIENE{" "}
            <span className="text-kovia-red underline decoration-kovia-red/30">
              {CHAOS_COPY.titleHighlight}
            </span>
          </h2>
          <p className="text-slate-500 font-mono text-base uppercase tracking-widest leading-relaxed font-bold">
            {CHAOS_COPY.subtitle}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-6">
          <motion.div
            {...fadeInMotion}
            className="lg:col-span-8 glass-pane p-10 neon-border-red rounded-3xl min-h-[350px] flex flex-col justify-end group transition-all duration-500"
          >
            <div className="absolute top-10 right-10 text-kovia-red/20 rotate-12 group-hover:text-kovia-red/40 transition-colors">
              <CHAOS_ICON_SET.lead size={120} />
            </div>
            <h3 className="font-brand font-bold text-2xl text-white mb-4 uppercase tracking-widest group-hover:text-kovia-red transition-colors">
              {CHAOS_COPY.leadCardTitle}
            </h3>
            <p className="text-slate-500 font-mono text-sm leading-relaxed max-w-xl">
              {CHAOS_COPY.leadCardDescription}
            </p>
            <div className="mt-8 flex gap-3 text-[10px] font-mono font-bold uppercase text-kovia-red">
              <span>{CHAOS_COPY.leadTags[0]}</span>
              <span>//</span>
              <span>{CHAOS_COPY.leadTags[1]}</span>
            </div>
          </motion.div>

          <motion.div
            {...fadeInMotion}
            transition={{ delay: 0.2 }}
            className="lg:col-span-4 glass-pane p-10 border-white/10 rounded-3xl flex flex-col justify-center group transition-all duration-500 hover:border-kovia-red/30"
          >
            <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-6 text-slate-300 group-hover:text-kovia-red transition-colors">
              <CHAOS_ICON_SET.manual size={32} />
            </div>
            <h3 className="font-brand font-bold text-2xl text-white mb-4 uppercase tracking-widest group-hover:text-kovia-red transition-colors">
              {CHAOS_COPY.manualTitle}
            </h3>
            <p className="text-slate-500 font-mono text-sm leading-relaxed">
              {CHAOS_COPY.manualDescription}
            </p>
          </motion.div>

          <motion.div
            {...fadeInMotion}
            transition={{ delay: 0.3 }}
            className="lg:col-span-4 glass-pane p-10 border-white/10 rounded-3xl flex flex-col justify-center group transition-all duration-500 hover:border-kovia-red/30"
          >
            <h3 className="font-brand font-bold text-2xl text-white mb-4 uppercase tracking-widest group-hover:text-kovia-red transition-colors">
              {CHAOS_COPY.dataTitle}
            </h3>
            <p className="text-slate-500 font-mono text-sm leading-relaxed">
              {CHAOS_COPY.dataDescription}
            </p>
          </motion.div>

          <motion.div
            {...fadeInMotion}
            transition={{ delay: 0.4 }}
            className="lg:col-span-8 glass-pane p-10 neon-border-red border-kovia-red/20 rounded-3xl flex items-center gap-12 group overflow-hidden"
          >
            <div className="flex-grow">
              <h3 className="font-brand font-bold text-2xl text-white mb-4 uppercase tracking-widest group-hover:text-kovia-red transition-colors">
                {CHAOS_COPY.solutionTitle}
              </h3>
              <p className="text-slate-500 font-mono text-sm leading-relaxed max-w-md">
                {CHAOS_COPY.solutionDescription}
              </p>
            </div>
            <div className="hidden md:flex w-32 h-32 glass-pane rounded-2xl items-center justify-center border-kovia-red/40">
              <CHAOS_ICON_SET.solution className="text-kovia-red" size={48} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
