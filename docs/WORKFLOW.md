# Team Workflow

This is a **lead + worker** model. Roles are strict.

## Roles

- **Team Lead / Design Lead (this session, "the Lead").** Owns architecture, the design
  system, task breakdown, code review, testing, merging, and fixing to fit the design.
  Does **not** hand-code features.
- **Worker session (one at a time, "the Worker").** Implements exactly one assigned task
  (one issue → one branch → one PR). Does not invent scope. Does not merge.
- **Owner (MD. Arif Rahman).** Final authority. The Lead answers only to the Owner.

## The loop (one task at a time)

```
Lead writes issue  →  Lead hands off brief  →  Worker branches + implements  →
Worker opens PR  →  Lead reviews (design + tests + a11y)  →  Lead fixes/requests changes  →
Lead merges to master  →  CI deploys  →  next task
```

Only **one** task is "in progress" at any moment. The board reflects reality.

## Branching

- `master` — always deployable. Protected by convention (PRs only, CI must pass).
- Feature branches: `feat/<area>-<short>` (e.g. `feat/hero-constellation`),
  `fix/…`, `chore/…`, `docs/…`.
- One branch per issue. Rebase on `master` before PR.

## Commits

Conventional Commits: `type(scope): summary`
(`feat`, `fix`, `chore`, `docs`, `refactor`, `test`, `style`, `perf`).
Every commit message ends with the Co-Authored-By trailer for the model that wrote it.

## Pull Requests

- Title = Conventional Commit summary. Body links the issue (`Closes #N`).
- Must include: what changed, screenshots/GIFs (light **and** dark), test notes, and a
  self-check against the **Definition of Done**.
- Small and focused — one section/feature per PR.

## Definition of Done (Lead will not merge unless ALL pass)

1. **Matches the design system** — tokens only, no magic values; matches `SECTIONS.md` intent.
2. **Light AND dark mode** both verified.
3. **Responsive** — 360px, 768px, 1024px, 1440px all clean; no horizontal scroll.
4. **Accessible** — keyboard nav, visible focus, semantic HTML, `alt` text, contrast AA,
   `prefers-reduced-motion` respected.
5. **Typed** — no `any` leaks; `tsc --noEmit` clean.
6. **Lint/format clean** — ESLint + Prettier pass.
7. **Tests** — unit tests for logic/hooks; e2e smoke for the section; all green.
8. **Build passes** — `pnpm build` (static export) succeeds.
9. **Performance** — no needless client JS; images sized; no CLS regressions.

## Lead review responsibilities

- Pull the branch, run `pnpm dev`, verify both themes + responsiveness by hand.
- Run `pnpm lint && pnpm typecheck && pnpm test && pnpm build`.
- Check against `DESIGN-SYSTEM.md` + `SECTIONS.md`. Fix small gaps directly; request changes
  for large ones. Then squash-merge.

## Worker handoff brief (Lead → Worker template)

Each task is handed off with:

- **Issue #** and title, **branch name** to create.
- **Goal** + the exact `SECTIONS.md` / `DESIGN-SYSTEM.md` references.
- **Files to create/touch**, **acceptance criteria**, **out-of-scope** notes.
- Reminder to read `CLAUDE.md` + `docs/` first, and to open a PR (never merge).
