import { FOOTER_COPY, SOCIAL_LINKS } from "../../data/mockData";

interface SiteFooterProps {}

interface SocialLinkIconProps {
  readonly id: string;
}

function SocialLinkIcon({ id }: Readonly<SocialLinkIconProps>) {
  if (id === "whatsapp") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        stroke="none"
        className="w-[14px] h-[14px] group-hover:text-kovia-red transition-colors"
        aria-hidden="true"
      >
        <path d="M20.52 3.48A11.77 11.77 0 0 0 12.05 0C5.45 0 .1 5.33.1 11.9c0 2.1.55 4.15 1.59 5.96L0 24l6.34-1.66a11.97 11.97 0 0 0 5.71 1.45h.01c6.6 0 11.95-5.33 11.95-11.9 0-3.18-1.24-6.17-3.49-8.41zM12.06 21.8a9.97 9.97 0 0 1-5.08-1.39l-.36-.21-3.76.99 1-3.66-.23-.38A9.86 9.86 0 0 1 2.1 11.9C2.1 6.45 6.57 2 12.05 2a9.9 9.9 0 0 1 7.03 2.91A9.83 9.83 0 0 1 22 11.9c0 5.45-4.47 9.9-9.94 9.9zm5.43-7.43c-.3-.15-1.78-.87-2.06-.97-.28-.1-.48-.15-.69.15-.2.3-.78.97-.95 1.16-.17.2-.35.22-.65.08-.3-.15-1.28-.47-2.43-1.5-.9-.8-1.51-1.8-1.69-2.1-.18-.3-.02-.46.13-.61.14-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.08-.15-.69-1.65-.95-2.26-.25-.6-.51-.52-.69-.53h-.59c-.2 0-.52.08-.8.37-.28.3-1.05 1.02-1.05 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.1 4.48.71.3 1.26.49 1.7.63.71.23 1.35.2 1.86.12.57-.08 1.78-.73 2.03-1.43.25-.7.25-1.3.17-1.43-.08-.13-.27-.2-.57-.35z" />
      </svg>
    );
  }

  if (id === "instagram") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        stroke="none"
        className="w-[14px] h-[14px] group-hover:text-kovia-red transition-colors"
        aria-hidden="true"
      >
        <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.8A3.95 3.95 0 0 0 3.8 7.75v8.5a3.95 3.95 0 0 0 3.95 3.95h8.5a3.95 3.95 0 0 0 3.95-3.95v-8.5a3.95 3.95 0 0 0-3.95-3.95h-8.5z" />
        <path d="M12 7.2A4.8 4.8 0 1 1 7.2 12 4.8 4.8 0 0 1 12 7.2zm0 1.8A3 3 0 1 0 15 12a3 3 0 0 0-3-3z" />
        <circle cx="17.5" cy="6.5" r="1.1" />
      </svg>
    );
  }

  if (id === "facebook") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        stroke="none"
        className="w-[14px] h-[14px] group-hover:text-kovia-red transition-colors"
        aria-hidden="true"
      >
        <path d="M13.9 21v-8.2h2.76l.42-3.18H13.9V7.58c0-.92.27-1.54 1.62-1.54h1.73V3.2A23.9 23.9 0 0 0 14.7 3c-2.53 0-4.27 1.5-4.27 4.25V9.6H7.56v3.18h2.87V21h3.47z" />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="none"
      className="w-[14px] h-[14px] group-hover:text-kovia-red transition-colors"
      aria-hidden="true"
    >
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.04-.1z" />
    </svg>
  );
}

export function SiteFooter({}: Readonly<SiteFooterProps>) {
  return (
    <footer className="py-12 px-6 border-t border-white/5 bg-black/40 relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-kovia-red/10 border border-kovia-red/20 rounded-xl flex items-center justify-center font-bold text-kovia-red text-xl">
              K
            </div>
            <div>
              <span className="font-brand font-bold text-xl text-white tracking-widest block leading-none">
                {FOOTER_COPY.brand}
              </span>
              <span className="text-[8px] font-mono text-slate-600 uppercase tracking-widest mt-1 block">
                {FOOTER_COPY.slogan}
              </span>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4 sm:gap-8">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.id}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 text-slate-500 hover:text-white transition-colors"
              >
                <SocialLinkIcon id={link.id} />
                <span className="text-[8px] sm:text-[9px] font-mono font-bold uppercase tracking-widest">
                  {link.label}
                </span>
              </a>
            ))}
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <span className="text-[8px] font-mono text-slate-800 uppercase tracking-[0.3em]">
            {FOOTER_COPY.copyright}
          </span>
          <div className="flex items-center gap-2">
            <span className="w-1 h-1 rounded-full bg-kovia-red animate-pulse" />
            <span className="text-[8px] font-mono text-kovia-red/40 uppercase tracking-widest">
              {FOOTER_COPY.systemVersion}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
