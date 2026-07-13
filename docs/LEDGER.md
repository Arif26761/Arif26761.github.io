# Project Ledger

A running, dated log of progress on the MD. Arif Rahman portfolio. Newest entry on top.
Each session ends by appending a dated entry so the next session resumes cleanly.

- **Live site:** https://arif26761.github.io
- **Project board:** https://github.com/users/Arif26761/projects/3
- **Roadmap / backlog:** [ROADMAP.md](./ROADMAP.md)

---

## Day 1 — 2026-07-14

### Shipped (merged to `master`, live)

| PR | Issue | What |
| --- | --- | --- |
| #19 | #1 | Scaffold: **Next.js 16** (App Router) + React 19 + TS + Tailwind v4, static export, Vitest + Playwright, folder skeleton |
| #20 | #2 | CI/CD: PR checks (`lint · typecheck · test · build`) + auto-deploy to GitHub Pages |
| #21 | #3 | Design system: light/dark tokens, font trio (Space Grotesk / Inter / JetBrains Mono), `next-themes` + animated ThemeToggle |
| #22 | #6 | Typed content model + seed data |
| #23 | — | **Repositioning fix**: rebuilt all content from the real CVs (Telecom Engineer & Full-Stack Dev) |

### Current state of the live site
Placeholder/preview page showing: `Arif.` wordmark, real title + tagline, color-token swatches,
typography specimen, and a working light/dark toggle. No real sections yet.

### Key decisions
- Stack: **Next.js 16** static-export → GitHub Pages; **pnpm**; Cloudflare Worker planned for contact (#13).
- **Identity corrected**: portfolio is **Telecommunication Engineer & Full-Stack Developer (CCNA)** —
  NOT the old "Data Scientist / ML Researcher" framing. Source of truth = owner's current CVs.
- Hero concept reframed "Data Constellation" → **"Network Topology"**.
- Workflow: Lead (this session) builds everything directly — no worker subagents (owner's call).
  One branch + PR per issue; CI green before merge.

### Progress: 5 of 18 issues done
Done: #1, #2, #3, #6 (+ repositioning). Ready/queued: #4, #5, #7–#18.

### ▶ Next up (resume here)
1. **#5 — UI + motion primitives** (Button, Card, Badge/Chip, SectionHeading, Marquee, Counter,
   SocialIcon + motion: Reveal, Stagger, Magnetic, TiltCard, Spotlight).
2. **#4 — Layout shell** (TopBar, vertical NavRail w/ scroll-spy, MobileNav, Footer).
3. **#7–#12 — Sections** (Hero → About → Projects → Skills → Experience → Contact).
4. **#13 — Cloudflare Worker** contact API, then **#14–#18** polish/tests/launch.

### ⛔ Waiting on the owner (Arif) — needed for #17, not blocking build
- [ ] Primary CV PDF saved to `public/assets/MD_Arif_Rahman_CV.pdf` (Download-CV button target).
- [ ] Portrait image for the hero (transparent PNG preferred) → `public/assets/hero.png`.
- [ ] Real project repo links / screenshots.
- [ ] Confirm headline stat numbers (currently 4+ yrs · 3 roles · 2 research) and skill levels.

---

<!-- Append the next day's entry ABOVE this line, newest on top. -->
