# Projects Pipeline

How portfolio **project pieces** are sourced, modernized, reviewed, and integrated. This applies
to both portfolios (Arif's and Eitu's) and defines when the two admins act **solo** vs. as a
**joint unit**.

## Principle
Projects are **not added to the portfolio raw**. The owner provides a **link** (repo / live demo
/ paper). The admin commissions a dedicated **Project Lead session** to **modernize the project
for 2026** — refresh it, fix it, and add whatever features are needed to make it a strong,
functional portfolio piece — and then the admin **integrates** the finished project into the site.

## Where the work happens (two repos)
- **The project's own repo** — created by the Project Lead session. **All build, unit testing,
  design-satisfaction review, change requests, and merges happen here.** The admins do their
  review/testing/merge work in this repo, not in the portfolio repo.
- **The portfolio repo** — only receives the final **integration** (a content entry / case-study
  that links to the finished project), following the portfolio's normal branch→PR→merge flow.

## The two admins
- **Lighthouse** — Arif's portfolio admin (this session).
- **Blossom** — Eitu's portfolio admin (the counterpart session).

## Ownership: solo vs. joint
- **Solo projects** — handled by the respective admin alone.
  - Arif's own projects → **Lighthouse**.
  - Eitu's own projects → **Blossom**.
- **Joint projects** — projects Arif & Eitu built together, and **all future joint projects** →
  **Lighthouse + Blossom operate as one unit** (see "Joint-project roles" below).

## The pipeline (per project)
1. **Intake — with consent.** Owner shares the link + raw notes. **Each admin writes up the
   project record for their own portfolio only** — Lighthouse writes/curates what goes into
   Arif's portfolio; Blossom writes what goes into Eitu's (she designs Eitu's sections). Done
   with the owner's consent at each step, covering:
   - Name · What it is / the problem it solves · Owner's role & contribution · Tools/tech or
     methods · Outcome / result (numbers if any) · Links (live/repo/paper/case study) · Images?
2. **Appointment brief.** The admin generates a **prompt + md brief** to appoint the Project Lead
   session. The brief defines: **goal & demands**, the **theme** to follow (aligned to the
   portfolio's design system), the **deliverables**, the **modernization scope** (2026 features),
   and the quality bar (typed, tested, accessible, responsive, both themes, performant).
3. **Build (in the project repo).** The Project Lead session creates the project's own repo and
   modernizes/builds there.
4. **Review & acceptance (in the project repo).** Scan design and workflow; request changes until
   satisfied. **Unit testing + design-satisfaction** are the acceptance gates (see roles below).
5. **Merge (in the project repo).** Merge the accepted project in that repo (see roles below).
6. **Integration (in the portfolio repo).** Each admin integrates the finished project into
   **their own** portfolio — a typed entry in `src/content/projects.ts`, a case-study,
   screenshots/links to the project — **as that admin sees fit, with owner consent**, via the
   portfolio's normal PR flow. For a joint project, Lighthouse integrates into Arif's site and
   Blossom into Eitu's site, independently.

## Joint-project roles (Lighthouse + Blossom as a unit)
- **Appointment brief:** co-authored by **Lighthouse + Blossom**.
- **Unit testing + design satisfaction:** performed **jointly** by **Lighthouse + Blossom**,
  **in the project's repo** — both must be pleased with the design and workflow before acceptance.
- **Merge:** done by **Lighthouse** for joint projects, **in the project's repo**.
- **Integration & write-up:** **always per-portfolio, never shared** — Lighthouse writes and
  integrates the record into Arif's site; Blossom does the same for Eitu's. Only the **shared
  build** (brief, acceptance, merge) is joint; how each portfolio *presents* the project is each
  admin's own call, with their owner's consent.

## Consent gates (always)
Owner consent is required at: the **intake write-up**, the **appointment brief / theme /
deliverables**, **acceptance**, and **final integration**. Nothing ships without it.

## Coordination reality (async, honest)
Lighthouse and Blossom are **separate sessions and don't share live context**. "Working as a
unit" happens **asynchronously via shared written artifacts** — the co-authored appointment brief
and written review/acceptance notes — relayed between the two sessions by the owners. Keep these
in a **shared, agreed location** both admins and owners can access (to be confirmed by the owners).

> Solo vs. joint is decided at intake. When in doubt, ask the owner.
