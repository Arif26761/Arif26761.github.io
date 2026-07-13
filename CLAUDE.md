# CLAUDE.md — Operating Manual

**Read this file and the `docs/` folder before doing anything.** This portfolio is built by a
**Lead + Worker** team of Claude sessions. Know your role before you touch code.

## What this is
The official personal portfolio of **MD. Arif Rahman** — Data Scientist & ML Researcher moving
into frontend engineering. It must itself demonstrate technical depth, polish, and
maintainability. Public site: **https://arif26761.github.io**.

## Roles — know which one you are
- **Lead session (design/team lead):** owns architecture, design system, task breakdown,
  review, testing, merging. Writes issues and hands off to workers. Does **not** hand-code
  features. Only the Lead merges to `master`.
- **Worker session:** implements exactly **one** assigned issue on its own branch, opens a
  **PR**, and stops. Never merges. Never expands scope beyond the issue. If the brief is
  ambiguous, ask in the PR/issue — do not guess architecture.
- **Owner:** MD. Arif Rahman. Final authority.

If you were handed a specific task/issue, you are a **Worker**. Default to that.

## Source of truth (do not contradict these)
- `docs/ARCHITECTURE.md` — stack, folders, rendering/deploy model.
- `docs/DESIGN-SYSTEM.md` — tokens, type, spacing, motion, components. **Use tokens only.**
- `docs/SECTIONS.md` — the locked per-section creative direction.
- `docs/WORKFLOW.md` — branching, PRs, Definition of Done.
- `docs/ROADMAP.md` — milestones and the task backlog.

## Tech stack (locked — do not swap without Lead approval)
Next.js 15 (App Router) · React 19 · TypeScript strict · Tailwind CSS v4 · Motion ·
next-themes · lucide-react · pnpm · Vitest · Playwright · ESLint + Prettier ·
Cloudflare Worker (contact API) · static export → GitHub Pages via GitHub Actions.

## Commands
```bash
corepack enable            # first time — enables pnpm
pnpm install
pnpm dev                   # local dev
pnpm build                 # static export to ./out (must pass before PR)
pnpm lint                  # ESLint
pnpm typecheck             # tsc --noEmit
pnpm test                  # Vitest unit
pnpm test:e2e              # Playwright
pnpm format                # Prettier write
```
(If a script doesn't exist yet, task #1 creates it. Match `package.json` as it evolves.)

## Hard rules
1. **Design tokens only** — never hardcode colors/spacing/radii/shadows; pull from the tokens
   defined in `globals.css` / Tailwind theme. No magic numbers.
2. **Light AND dark mode** are both first-class. Test both every time.
3. **Accessibility is non-negotiable** — semantic HTML, keyboard nav, visible focus rings,
   `alt` text, AA contrast, and `prefers-reduced-motion` honored for every animation.
4. **Responsive** — verify 360 / 768 / 1024 / 1440px. Never allow horizontal scroll.
5. **Content is data** — copy/projects/skills live in `src/content/*`, typed. Components
   render data; they don't hardcode content.
6. **Type-safe** — no `any` leaks; `pnpm typecheck` clean.
7. **Minimize client JS** — prefer Server Components; add `"use client"` only where needed
   (interaction/animation). This is a static export — no server runtime at request time.
8. **Server-only secrets never touch the client.** The contact endpoint lives in `worker/`.
9. **Workers open PRs, never merge.** One issue → one branch → one PR.

## Definition of Done
See `docs/WORKFLOW.md`. Summary: design-accurate · both themes · responsive · accessible ·
typed · lint/format clean · tested · `pnpm build` passes.

## Git conventions
- Branches: `feat|fix|chore|docs|refactor|test/<short-desc>`, one per issue.
- Conventional Commits. PR body: what changed, **light + dark screenshots**, test notes,
  `Closes #<issue>`, and a Definition-of-Done self-check.
- End commit messages with the Co-Authored-By trailer for the authoring model.

## When unsure
Re-read `docs/`. If still ambiguous, ask the Lead/Owner in the issue or PR thread. Do not
silently change architecture, stack, or design direction.
