# Roadmap & Task Backlog

Milestones map to GitHub milestones; tasks map 1:1 to GitHub issues. Workers take them
**top to bottom, one at a time**. Dependencies noted.

## M0 — Foundation & Tooling
- **#1 Scaffold Next.js 15 + TS + Tailwind v4** — create-next-app, pnpm via corepack, strict
  tsconfig, ESLint/Prettier, Vitest + Playwright wired, `.nvmrc`, base `globals.css`, folder
  skeleton per `ARCHITECTURE.md`. Blank page builds + static-exports. _(no deps)_
- **#2 CI/CD pipelines** — `ci.yml` (lint+typecheck+test+build on PR) and `deploy.yml`
  (static export → GitHub Pages on master). _(deps: #1)_

## M1 — Design System & Shell
- **#3 Design tokens + theming** — encode all tokens from `DESIGN-SYSTEM.md` into
  `globals.css` (`:root`/`.dark`), Tailwind theme, fonts via `next/font`, `next-themes`
  provider + animated `ThemeToggle`, no-flash. _(deps: #1)_
- **#4 Layout shell** — `TopBar`, floating `NavRail` (scroll-spy), `MobileNav` bottom bar,
  `Footer`, skip-link, section landmarks. _(deps: #3)_
- **#5 UI primitives** — `Button`, `Card`, `Badge/Chip`, `SectionHeading`, `Marquee`,
  `Counter`, `SocialIcon`, motion primitives (`Reveal`, `Stagger`, `Magnetic`, `TiltCard`,
  `Spotlight`). _(deps: #3)_
- **#6 Content model + seed data** — typed files in `src/content/` with placeholder-but-real
  data (site, projects, skills, experience, education). _(deps: #1)_

## M2 — Sections
- **#7 Hero — Data Constellation** _(deps: #4,#5,#6)_
- **#8 About — Bento Board** _(deps: #5,#6)_
- **#9 Projects — Case-Study Cards** _(deps: #5,#6)_
- **#10 Skills — Proficiency Radar** _(deps: #5,#6)_
- **#11 Experience & Research — Scroll Timeline** _(deps: #5,#6)_
- **#12 Contact — Signal Sender (UI)** _(deps: #5,#6)_

## M3 — Backend
- **#13 Cloudflare Worker contact API** — validation, honeypot, rate-limit, email send,
  CORS, secrets, tests; wire the form to it with graceful fallback. _(deps: #12)_

## M4 — Polish
- **#14 SEO + metadata + OG + JSON-LD + sitemap/robots** _(deps: sections)_
- **#15 A11y + performance pass** — Lighthouse ≥ 95, reduced-motion audit, focus order,
  contrast, image optimization. _(deps: sections)_

## M5 — Testing & Launch
- **#16 Test suite hardening** — unit coverage for hooks/logic, Playwright e2e across
  sections + theme toggle + form. _(deps: sections, #13)_
- **#17 Real content population** — final copy, real projects + images, resume PDF, OG image,
  favicons. _(deps: sections)_ — Owner supplies assets; Lead integrates.
- **#18 Launch checklist** — custom domain (optional), analytics, final QA, announce.

## Suggested execution order
`#1 → #2 → #3 → #6 → #5 → #4 → #7 → #8 → #9 → #10 → #11 → #12 → #13 → #14 → #15 → #16 → #17 → #18`

> The board is the live truth; this file is the plan of record. When they disagree, the Lead
> reconciles them.
