# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm install          # Install dependencies
npm run dev          # Dev server on port 3002 (0.0.0.0)
npm run build        # Production build to dist/
npm run preview      # Preview production build
npm run lint         # Type-check only (tsc --noEmit), no eslint
npm run clean        # Remove dist/
```

## Environment

Create `.env.local` with:
```
VITE_API_URL=http://localhost:3000
VITE_FORM_SLUG=lead-qualificator
```

These are consumed by `LeadQualificationForm` to POST lead data to an external API.

## Architecture

**Stack:** React 19 + Vite 6 + Tailwind CSS v4 + TypeScript. No router — single-page app, all content on one scroll page.

**Performance pattern in `App.tsx`:** Above-the-fold sections (`HeroSection`, `LandingBackground`, `LandingNavbar`, `TopTicker`) are eagerly imported. All below-fold sections are `React.lazy` and rendered only after `requestIdleCallback` fires (with a 700ms fallback). This prevents hydration-blocking JS for content the user hasn't scrolled to.

**Section layout** (top to bottom):
1. `TopTicker` — animated marquee strip
2. `LandingNavbar` — sticky nav, goes glassy after 50px scroll (tracked by `useLandingPageState`)
3. `HeroSection` — two-column: copy+CTA left, mascot image with floating trigger cards right
4. `ChaosSection` — pain-point presentation
5. `SocialProofSection` — testimonials
6. `MethodSection` — 4-step methodology cards
7. `FinalCtaSection` — closing CTA
8. `SiteFooter`
9. `LeadQualificationForm` — modal overlay, shown via `showQualifyForm` state

**Data:** All copy, links, and content live in `src/data/mockData.ts` as typed `as const` exports. Components import named constants from there — never hardcode strings in components.

**Design system:**
- Colors defined in `src/index.css` `@theme`: `kovia-dark` (#090a0e), `kovia-red` (#b12b24), `kovia-gold` (#FFD700)
- Fonts: `font-brand` → Space Grotesk, `font-mono` → JetBrains Mono
- Utility classes: `.glass-pane` (glassmorphism card), `.neon-border-red`, `.text-glow-red`
- Custom button: `KoviaBtn` (`src/components/ui/KoviaBtn.tsx`) — renders as `<a>` or `<button>` depending on `href` prop, uses `.kovia-btn-wrapper/.kovia-btn-shadow/.kovia-btn-content` CSS classes for the neo-brutalist press effect
- CSS animations are declared in `src/index.css` under class names like `kv-fade-in-left`, `kv-fade-in-up`, `kv-float-y-tilt`, `kv-rotate-orbit`, `kv-trigger-float`

**Tailwind v4 note:** Config is code-free — everything lives in `index.css` `@theme` block. The `@tailwindcss/vite` plugin handles the build pipeline; there is no `tailwind.config.ts`.

**Build chunks** (`vite.config.ts`): `vendor-react`, `vendor-motion` (`motion/react`), `vendor-icons` (`lucide-react`) are split manually to maximize long-term caching.

**Path alias:** `@/` resolves to the project root (not `src/`). Internal imports use relative paths.
