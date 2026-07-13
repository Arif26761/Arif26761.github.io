# Architecture

## Stack (locked)

| Layer | Choice | Version target |
|---|---|---|
| Framework | Next.js (App Router) | 15.x |
| UI runtime | React | 19.x |
| Language | TypeScript (strict) | 5.x |
| Styling | Tailwind CSS | v4 |
| Animation | Motion (Framer Motion) | latest |
| Theming | next-themes | latest |
| Icons | lucide-react (+ simple-icons for brands) | latest |
| Package manager | **pnpm** (via `corepack enable`) | 9.x |
| Unit tests | Vitest + Testing Library | latest |
| E2E tests | Playwright | latest |
| Lint / format | ESLint (next/core-web-vitals) + Prettier | latest |
| Backend (contact) | Cloudflare Worker | wrangler 3.x |
| Hosting | GitHub Pages (static export) | — |
| CI/CD | GitHub Actions | — |

**Node:** 20.17+ (repo pins via `.nvmrc` / `engines`).

## Rendering & deployment model
- `next.config.ts` → `output: 'export'` (fully static). `images.unoptimized = true`.
- **User site** (`arif26761.github.io`) serves from root → **no `basePath`** needed.
- GitHub Actions builds `out/` and deploys to Pages on push to `master`.
- The Cloudflare Worker is a **separate deploy** (its own `wrangler deploy`); the frontend
  calls it via `NEXT_PUBLIC_CONTACT_ENDPOINT`.

## Directory structure (target)
```
portfolio/
├─ .github/workflows/
│  ├─ ci.yml                # lint + typecheck + unit + build on PR
│  └─ deploy.yml            # build static export → deploy to Pages on master
├─ public/                  # /assets (portrait, resume PDF, og image, favicons, project imgs)
├─ src/
│  ├─ app/
│  │  ├─ layout.tsx         # fonts, ThemeProvider, metadata, skip-link
│  │  ├─ page.tsx           # composes all sections
│  │  ├─ sitemap.ts · robots.ts · not-found.tsx
│  ├─ components/
│  │  ├─ layout/            # TopBar, NavRail, MobileNav, Footer, ThemeToggle
│  │  ├─ sections/          # Hero, About, Projects, Skills, Experience, Contact
│  │  ├─ ui/                # Button, Card, Badge, Marquee, Counter, SocialIcon, ...
│  │  └─ motion/            # Reveal, Stagger, Magnetic, TiltCard, Spotlight
│  ├─ content/              # TYPED DATA — the portfolio's "CMS"
│  │  ├─ site.ts            # name, roles, socials, meta
│  │  ├─ projects.ts · skills.ts · experience.ts · education.ts
│  ├─ hooks/                # useScrollSpy, useReducedMotion, useMagnetic, useCountUp
│  ├─ lib/                  # cn(), constants, seo helpers, validation schema (zod)
│  └─ styles/globals.css    # Tailwind v4 + design tokens (:root / .dark)
├─ worker/                  # Cloudflare Worker (contact API) — self-contained
│  ├─ src/index.ts · wrangler.toml · README.md
├─ tests/
│  ├─ unit/  ·  e2e/
├─ docs/                    # this folder (design + process source of truth)
├─ CLAUDE.md · README.md · package.json · tsconfig.json · next.config.ts
└─ .nvmrc · .prettierrc · eslint.config.mjs · .gitignore
```

## Content-driven principle
All copy, projects, skills, and experience live in **typed files under `src/content/`**.
Updating the portfolio = editing data, not JSX. This is the core maintainability guarantee —
components render data, they don't hardcode it.

## Contact backend (Cloudflare Worker)
- `POST /contact` → validates (name/email/message, zod-style), checks honeypot, rate-limits
  by IP, sends email (Resend/MailChannels), returns typed JSON `{ ok, error? }`.
- CORS locked to the site origin. Secrets via `wrangler secret` (never committed).
- Frontend fetches it; graceful degradation if the endpoint is unset (mailto fallback).

## Performance & SEO budget
- Lighthouse ≥ 95 (Perf / A11y / Best-practices / SEO). LCP < 2.0s, CLS < 0.05.
- Per-page metadata, Open Graph image, JSON-LD `Person` schema, sitemap + robots.
- Fonts self-hosted via `next/font`; images sized + lazy; zero layout shift.
