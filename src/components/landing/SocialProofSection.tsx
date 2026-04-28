import { motion } from "motion/react";
import { Quote } from "lucide-react";
import { SOCIAL_PROOF_COPY, TESTIMONIALS } from "../../data/mockData";
import { fadeInMotion } from "./animationPresets";

interface SocialProofSectionProps {}

export function SocialProofSection({}: Readonly<SocialProofSectionProps>) {
  return (
    <section id="social" className="py-24 px-6 bg-white/[0.01]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <motion.div {...fadeInMotion}>
            <h2 className="font-brand text-4xl md:text-5xl font-black text-white uppercase tracking-tighter">
              {SOCIAL_PROOF_COPY.title}
            </h2>
            <p className="text-slate-500 font-mono mt-2">{SOCIAL_PROOF_COPY.subtitle}</p>
          </motion.div>
          <div className="flex gap-4">
            <div className="h-1 w-20 bg-kovia-red" />
            <div className="h-1 w-8 bg-slate-800" />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              {...fadeInMotion}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass-pane p-10 rounded-3xl flex flex-col border-white/5 hover:neon-border-red transition-all duration-500"
            >
              <div className="text-kovia-red mb-8">
                <Quote size={40} className="fill-kovia-red/10" />
              </div>
              <p className="text-white text-base font-light font-mono leading-relaxed mb-10 italic">
                "{testimonial.text}"
              </p>
              <div className="mt-auto pt-8 border-t border-white/5 flex items-center justify-between">
                <div>
                  <h5 className="text-white font-brand font-bold text-sm uppercase tracking-widest">
                    {testimonial.name}
                  </h5>
                  <span className="text-slate-600 text-[10px] font-mono font-bold uppercase mt-1 block">
                    {testimonial.role}
                  </span>
                </div>
                <div className="text-kovia-red text-xs font-mono font-black border border-kovia-red/20 px-3 py-1 rounded bg-kovia-red/5">
                  {testimonial.metric}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
