import { useEffect, useState } from "react";
import { Play } from "lucide-react";
import { KoviaBtn } from "../ui/KoviaBtn";
import type { NavigationLink } from "../../data/mockData";
import { NAVBAR_CTA_COPY } from "../../data/mockData";

const OPEN_FORM_EVENT = "kovia:open-lead-form";

interface LandingNavbarProps {
  readonly links: readonly NavigationLink[];
}

export function LandingNavbar({ links }: LandingNavbarProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;

    const updateScrolled = () => {
      setScrolled(window.scrollY > 50);
      ticking = false;
    };

    const onScroll = () => {
      if (ticking) {
        return;
      }
      ticking = true;
      window.requestAnimationFrame(updateScrolled);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const openQualificationForm = () => {
    window.dispatchEvent(
      new CustomEvent(OPEN_FORM_EVENT, {
        detail: {
          cta_location: "navbar",
          cta_text: NAVBAR_CTA_COPY.fullLabel,
        },
      })
    );
  };

  return (
    <nav
      className={`fixed left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl transition-all duration-500 ${
        scrolled ? "top-4" : "top-10"
      }`}
    >
      <div
        className={`glass-pane neon-border-red rounded-full px-6 py-4 flex justify-between items-center transition-all duration-500 ${
          scrolled ? "py-3 bg-kovia-dark/80 px-8" : ""
        }`}
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-kovia-red flex items-center justify-center font-bold text-white rounded-lg shadow-lg shadow-kovia-red/20 transition-transform duration-300 hover:rotate-90">
            K
          </div>
          <div className="flex flex-col">
            <span className="font-brand font-bold text-lg tracking-[0.1em] text-white leading-none">
              ESTUDIO KOVIA
            </span>
          </div>
        </div>

        <div className="hidden lg:flex items-center gap-10 text-[10px] font-mono font-bold uppercase tracking-widest text-slate-400">
          {links.map((link) => (
            <a key={link.id} href={`#${link.id}`} className="hover:text-kovia-red transition-colors">
              {link.label}
            </a>
          ))}
        </div>

        <KoviaBtn onClick={openQualificationForm} sm className="scale-90 sm:scale-100">
          <Play size={10} fill="currentColor" />
          <span className="hidden xs:inline">{NAVBAR_CTA_COPY.fullLabel}</span>
          <span className="xs:hidden">{NAVBAR_CTA_COPY.shortLabel}</span>
        </KoviaBtn>
      </div>
    </nav>
  );
}
