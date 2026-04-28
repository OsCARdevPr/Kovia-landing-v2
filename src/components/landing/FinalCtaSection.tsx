import { motion } from "motion/react";
import { Play } from "lucide-react";
import { KoviaBtn } from "../ui/KoviaBtn";
import { FINAL_CTA_COPY } from "../../data/mockData";
import { fadeInMotion } from "./animationPresets";

const OPEN_FORM_EVENT = "kovia:open-lead-form";

export function FinalCtaSection() {
  const openQualificationForm = () => {
    window.dispatchEvent(
      new CustomEvent(OPEN_FORM_EVENT, {
        detail: {
          cta_location: "final_cta",
          cta_text: FINAL_CTA_COPY.buttonLabel,
        },
      })
    );
  };

  return (
    <section id="agendar" className="py-16 px-6 relative overflow-hidden">
      <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-kovia-red/30 to-transparent top-0" />
      <div className="max-w-4xl mx-auto text-center">
        <motion.div {...fadeInMotion}>
          <h3 className="font-brand text-lg md:text-3xl font-bold text-white mb-8 leading-relaxed uppercase px-4 sm:px-0">
            "{FINAL_CTA_COPY.quoteLine1}" <br className="hidden sm:block" />
            <span className="text-slate-500">{FINAL_CTA_COPY.quoteLine2}</span>
          </h3>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <KoviaBtn onClick={openQualificationForm} className="mx-auto">
              <div className="flex items-center gap-3">
                <Play size={20} fill="currentColor" />
                <span>{FINAL_CTA_COPY.buttonLabel}</span>
              </div>
            </KoviaBtn>
          </motion.div>
        </motion.div>
      </div>
      <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-kovia-red/30 to-transparent bottom-0" />
    </section>
  );
}
