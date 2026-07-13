# Design System — MD. Arif Rahman Portfolio

> The single source of truth for all visual decisions. Every worker session **must**
> pull tokens and primitives from here. No magic numbers, no ad-hoc colors.

---

## 1. Brand Identity

| Attribute | Value |
|---|---|
| Name | **MD. Arif Rahman** |
| Wordmark | `Arif.` — the `A` filled with the primary→accent gradient |
| Positioning | Data Scientist & ML Researcher, now building scalable frontend products |
| Rotating roles (hero) | `Data Scientist` · `Frontend Developer` · `ML Researcher` · `Problem Solver` |
| Voice | Confident, precise, technical-but-human. Short sentences. No buzzword soup. |
| Location | Dhaka, Bangladesh (GMT+6) |

**Design north star:** _"A researcher's precision meets a frontend engineer's polish."_
Clean, data-inspired, subtly animated. Never noisy. Every motion has a reason.

---

## 2. Color System

We evolve the original `#1363df` blue into a refined **blue → indigo** primary with a
**cyan** accent for a modern, technical feel. Tokens are semantic (never reference raw
hex in components — use the CSS variable / Tailwind token).

### Brand ramp (raw)
```
--blue-50:  #eef4ff   --blue-400: #4d8bff   --blue-700: #1b4fd1
--blue-100: #dbe6ff   --blue-500: #2f6bf0   --blue-800: #1a41a8
--blue-200: #bcd0ff   --blue-600: #1363df   --blue-900: #172f7a   (600 = legacy anchor)
--accent:   #22d3ee (cyan)   --violet: #7c6bff (gradient partner)
```

### Semantic tokens (the ones components use)

| Token | Light | Dark | Use |
|---|---|---|---|
| `--background` | `#f6f9ff` | `#0a0e1a` | Page base |
| `--surface` | `#ffffff` | `#111726` | Cards, nav |
| `--surface-2` | `#eef3fc` | `#182036` | Elevated / hover |
| `--border` | `#e2e9f5` | `#232c44` | Hairlines |
| `--text` | `#0f1b2d` | `#eaf0fb` | Primary text |
| `--text-muted` | `#5c6169` | `#9aa6bd` | Secondary text |
| `--text-subtle` | `#90979f` | `#66708a` | Captions, meta |
| `--primary` | `#1363df` | `#4d8bff` | Brand actions |
| `--primary-fg` | `#ffffff` | `#0a0e1a` | Text on primary |
| `--accent` | `#0891b2` | `#22d3ee` | Highlights, focus |
| `--ring` | `#2f6bf0` | `#4d8bff` | Focus outline |

### Signature gradients
```
--grad-brand:   linear-gradient(135deg, #1363df 0%, #4d8bff 55%, #22d3ee 100%);
--grad-title:   linear-gradient(155deg, var(--text) 0%, var(--primary) 90%);
--grad-surface: linear-gradient(98deg, var(--surface-2) 0%, var(--surface) 100%);
--glow:         radial-gradient(circle, rgba(77,139,255,.20) 0%, rgba(19,99,223,.0) 70%);
```

**Rule:** the brand gradient appears **once per section max** as an accent — never as large
fills. Dark mode is the design's "hero" surface; both modes ship first-class, tested equally.

---

## 3. Typography

Modernizes the old Poppins/Asap pairing into a technical, distinctive trio (all self-hosted
via `next/font` — no runtime CDN).

| Role | Family | Notes |
|---|---|---|
| Display / headings | **Space Grotesk** | Geometric, technical, distinctive |
| Body / UI | **Inter** | Clean, highly legible at all sizes |
| Mono / labels / code | **JetBrains Mono** | Signals "engineer"; used for eyebrows, stats, tags |

### Type scale (fluid, `clamp()`)
```
--fs-display: clamp(2.75rem, 6vw, 4.5rem)   /* hero H1 */
--fs-h1:      clamp(2rem, 4vw, 3rem)
--fs-h2:      clamp(1.6rem, 3vw, 2.25rem)   /* section headings */
--fs-h3:      clamp(1.15rem, 2vw, 1.4rem)
--fs-body:    1rem  (line-height 1.65)
--fs-sm:      0.875rem
--fs-eyebrow: 0.8rem (mono, uppercase, letter-spacing .12em)
```

---

## 4. Spacing, Radius, Elevation

- **Spacing:** 4px base grid — `4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 96 / 128`.
- **Section padding:** `clamp(4rem, 10vh, 7rem)` block, `clamp(1.25rem, 6vw, 6rem)` inline.
- **Radius:** `--r-sm:8px  --r-md:14px  --r-lg:22px  --r-xl:30px  --r-full:9999px`.
- **Elevation (soft, evolves the original neumorphic feel — kept subtle):**
  ```
  --shadow-sm: 0 1px 2px rgba(15,27,45,.06), 0 2px 6px rgba(148,161,170,.10);
  --shadow-md: 0 6px 24px rgba(15,27,45,.10);
  --shadow-glow: 0 8px 32px rgba(19,99,223,.28);   /* brand-tinted, hover only */
  ```
  Dark mode uses lighter borders + inner highlights instead of heavy shadows.

---

## 5. Motion

**Library:** Motion (Framer Motion). **Principle:** _entrance once, feedback always._

| Token | Value |
|---|---|
| `--ease-out` | `cubic-bezier(0.16, 1, 0.3, 1)` |
| `--ease-inout` | `cubic-bezier(0.65, 0, 0.35, 1)` |
| duration-fast | `0.18s` (hover/press) |
| duration-base | `0.4s` (entrances) |
| duration-slow | `0.7s` (hero, scroll reveals) |

- Scroll reveals: fade + 16px rise, stagger children by `0.06s`.
- **`prefers-reduced-motion` is mandatory** — all non-essential motion disabled, no parallax,
  no autoplay. This is an accessibility requirement, not optional.
- Interactive feedback: magnetic buttons, tilt cards, spotlight hover — all ≤ `duration-base`.

---

## 6. Core Components (in `src/components/ui`)

`Button` (primary / ghost / magnetic) · `Card` (glass / solid) · `Badge`/`Chip` ·
`SectionHeading` (eyebrow + title + subtitle) · `Marquee` (logo scroller, from old expertise slider) ·
`Counter` (count-up on view) · `ThemeToggle` (animated sun/moon) · `SocialIcon` (evolves old
`.bg-icon` hover) · `TiltCard` · `Spotlight`.

**Accessibility baseline (non-negotiable):** WCAG 2.1 AA contrast, visible `:focus-visible`
rings using `--ring`, full keyboard nav, semantic landmarks, `alt` on all imagery,
respects reduced motion. Target Lighthouse ≥ 95 across all four categories.
