import { motion } from "motion/react";
import FugaScanner from "../FugaScanner";
import { METHOD_COPY, METHOD_STEPS } from "../../data/mockData";
import { fadeInMotion } from "./animationPresets";

interface MethodSectionProps {}

export function MethodSection({}: Readonly<MethodSectionProps>) {
  return (
    <section id="metodo" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div {...fadeInMotion}>
            <span className="text-kovia-red font-mono text-[10px] font-black tracking-[0.6em] uppercase mb-4 block">
              {METHOD_COPY.badge}
            </span>
            <h2 className="font-brand text-4xl md:text-6xl font-black text-white uppercase leading-[0.9] mb-12">
              {METHOD_COPY.titleLine1} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-kovia-red to-white">
                {METHOD_COPY.titleHighlight}
              </span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-12">
              {METHOD_STEPS.map((step, index) => {
                const StepIcon = step.icon;

                return (
                  <div key={step.title} className="relative group/card">
                    <motion.div
                      whileHover={{ scale: 1.03, y: -4 }}
                      className="h-full flex flex-col gap-4 p-5 glass-pane rounded-2xl border-white/5 hover:border-kovia-red/40 hover:shadow-[0_0_30px_rgba(177,43,36,0.1)] transition-all cursor-crosshair relative z-10"
                    >
                      <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-kovia-red group-hover/card:bg-kovia-red group-hover/card:text-white transition-all shrink-0">
                        <StepIcon size={18} />
                      </div>
                      <div>
                        <h4 className="text-white font-brand font-bold text-sm uppercase tracking-widest mb-1">
                          {step.title}
                        </h4>
                        <p className="text-slate-500 text-[10px] font-mono leading-tight">
                          {step.description}
                        </p>
                      </div>
                    </motion.div>

                    <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 pointer-events-none opacity-0 group-hover/card:opacity-100 group-hover/card:pointer-events-auto transition-all duration-300 z-50 transform translate-y-2 group-hover/card:translate-y-0 w-64 lg:w-72">
                      <div className="glass-pane p-5 rounded-2xl border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-2xl relative overflow-hidden ring-1 ring-kovia-red/20">
                        <div className="absolute top-0 left-0 w-full h-0.5 bg-kovia-red" />
                        <div className="flex items-center gap-2 mb-4">
                          <div className="w-2 h-2 rounded-full bg-kovia-red animate-pulse" />
                          <span className="text-[10px] font-mono text-slate-400 uppercase tracking-[0.2em]">
                            Exec_Ph_{index + 1}
                          </span>
                        </div>
                        <ul className="space-y-2">
                          {step.items.map((item) => (
                            <li
                              key={item}
                              className="flex gap-2 text-xs text-slate-300 font-mono items-start group/item"
                            >
                              <span className="text-kovia-red opacity-50 shrink-0 mt-0.5">•</span>
                              <span className="leading-tight group-hover/item:text-white transition-colors">
                                {item}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          <motion.div {...fadeInMotion} className="flex items-center justify-center">
            <FugaScanner />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
