# Lestramk Portfolio — Source

Personal portfolio for **Lee Muriithi Kingori** (lestramk.org).
Built under a 7-category agent methodology. 9.5/10 quality bar.

## Stack

- Next.js 16 (App Router, Turbopack)
- TypeScript 5 (strict)
- Tailwind CSS 4 + shadcn/ui
- matter-js (physics)
- framer-motion (reveals)
- GSAP + @gsap/react (timelines)

## Run locally

```bash
bun install
bun run dev    # http://localhost:3000
```

Or with npm:

```bash
npm install
npm run dev
```

## Build

```bash
bun run build
bun run start
```

## Structure

```
src/
  app/
    layout.tsx          # Fraunces + Inter + JetBrains Mono, dark theme
    page.tsx            # Section composition
    globals.css         # Design tokens, physics layer, cursor, bg video
  data/
    profile.ts          # All of Lee's data — projects, OSS, languages, contributions
  components/
    icons/
      BrandIcons.tsx    # GitHub, Instagram, Mail, Globe, Linux, Android, Zygisk, etc.
      LanguageIcons.tsx # Kotlin, C, C++, TS, Python, Shell, Rust, Go, ASM, Java, Node, etc.
    effects/
      LanguageField.tsx       # matter-js floating language icons
      BackgroundVideo.tsx     # Self-hosted code-rain MP4
      CursorGlow.tsx          # Custom dot + ring cursor
    sections/
      Topbar.tsx
      Hero.tsx
      Projects.tsx            # Only 4: Rox, LestraOS, aamt, Browser Automation
      OpenSource.tsx          # scottjn, Zygisk, Linux, Root/Magisk
      TwoHalves.tsx           # Engineer + Nurse/Anaesthesia
      Timeline.tsx
      ContributionsChart.tsx  # 52w x 7d grid + real crawler
      AgentConsensus.tsx      # 7-category methodology
      Contact.tsx
      Footer.tsx
public/
  videos/
    code-rain.mp4    # Background (Pixabay, CC0)
    network.mp4      # Backup background
worklog.md           # Full 7-category agent worklog
```

## Editing content

All content lives in `src/data/profile.ts`. Edit there — no other files need
to change for normal content updates. The contributions grid uses a
deterministic seed so SSR and client render identically.

## Quality bar

- ESLint: clean
- TypeScript: strict, no `any`
- Console: clean
- Mobile: 375px legible
- Sticky footer: verified
- prefers-reduced-motion: respected on all effects
- No emoji — only real SVG icons (simple-icons CC0/MIT + hand-traced)

## License

Code: MIT.
Background videos: Pixabay Content License (free commercial use, no attribution).
Brand icons: respective owners, used for identification only.

© Lee Muriithi Kingori · lestramk.org
