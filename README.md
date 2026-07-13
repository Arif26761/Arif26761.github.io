# MD. Arif Rahman — Portfolio

The official personal portfolio of **MD. Arif Rahman** — Data Scientist & ML Researcher
building scalable, polished frontend products.

🌐 **Live:** https://arif26761.github.io

---

## Tech stack
Next.js 15 (App Router) · React 19 · TypeScript (strict) · Tailwind CSS v4 · Motion ·
next-themes · pnpm · Vitest + Playwright · Cloudflare Worker (contact API) ·
static export → GitHub Pages via GitHub Actions.

## Highlights
- Light **and** dark mode, system-aware, no flash.
- Every section has a signature interaction (see `docs/SECTIONS.md`).
- Content-driven: portfolio data lives in typed files under `src/content/`.
- Accessibility-first (WCAG 2.1 AA) and Lighthouse ≥ 95 target.

## Getting started
```bash
corepack enable
pnpm install
pnpm dev        # http://localhost:3000
pnpm build      # static export → ./out
```

## Project docs
| Doc | Purpose |
|---|---|
| [`CLAUDE.md`](./CLAUDE.md) | Operating manual for contributor sessions |
| [`docs/ARCHITECTURE.md`](./docs/ARCHITECTURE.md) | Stack, folders, deploy model |
| [`docs/DESIGN-SYSTEM.md`](./docs/DESIGN-SYSTEM.md) | Tokens, type, motion, components |
| [`docs/SECTIONS.md`](./docs/SECTIONS.md) | Per-section creative direction |
| [`docs/WORKFLOW.md`](./docs/WORKFLOW.md) | Branching, PRs, Definition of Done |
| [`docs/ROADMAP.md`](./docs/ROADMAP.md) | Milestones & task backlog |

## How this project is built
A **Lead + Worker** model: a lead session owns architecture, design, review, and merging;
worker sessions each implement one issue via a PR. Progress is tracked on the GitHub
Project board and issues. See `docs/WORKFLOW.md`.

---
© MD. Arif Rahman. Built with Next.js, Tailwind & Motion.
