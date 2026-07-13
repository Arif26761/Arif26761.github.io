# Section Design Brief

> Requirement: **every section must have a signature element unique to itself** so viewers
> keep discovering something fresh while scrolling. Below is the locked creative direction.
> Each section carries forward DNA from the original portfolio, modernized.

Global rule: one **signature interaction** per section, one **brand-gradient accent** per
section, consistent rhythm via `SectionHeading`. All signatures degrade gracefully under
`prefers-reduced-motion` (static, still beautiful).

---

## Navigation (global)
**Carried from original:** the floating **vertical icon rail** on the right — this is a
signature of the brand, kept and refined.
- Desktop: glass vertical rail, icons for each section, **scroll-spy** active state with a
  sliding indicator + tooltip labels on hover.
- Top bar: `Arif.` wordmark (gradient A) · animated **theme toggle** · `Let's talk` CTA.
- Mobile: rail collapses into a **bottom tab bar** (thumb-friendly) with the same scroll-spy.

---

## 1. Hero — "Data Constellation"
**DNA kept:** greeting → name → animated role banner → dual CTAs (See My Work / Download CV)
→ social row → circular framed portrait.
**Signature:** an interactive **constellation / neural-network canvas** behind the content —
points connected by faint lines that drift and subtly react to the cursor (a nod to his
ML/data-science work). The circular portrait frame becomes an **animated gradient ring**.
- Rotating role via typewriter/flip (`Space Grotesk`).
- **Magnetic** primary CTA. Portrait uses the transparent `Hero-image.png`.
- Reduced-motion: constellation freezes to a static elegant dot field.

## 2. About — "Bento Board"
**DNA kept:** the **bento grid** (the original's best idea) — bio, stat counters
(150+ / 3+), profile blurb, education timeline (expand-in-place), expertise logo marquee.
**Signature:** glassmorphic bento cards with a **cursor-following spotlight**; stat cards
**count up** on scroll into view; the **education card expands in place** (evolves the old
`:focus` accordion) with a mini timeline. A live **"Dhaka · local time"** card adds a human touch.

## 3. Projects — "Case-Study Cards"
**DNA kept:** filterable gallery (replaces the old MixItUp plan with React state).
**Signature:** category filter chips (`ML / Research` · `Web` · `Data`); each card **expands
into a full case-study panel** via Motion shared-layout animation (no page nav). Cards
**tilt** on hover with a brand glow. Empty-filter and loading states handled.

## 4. Skills — "Proficiency Radar"
**DNA kept:** the auto-scrolling **tech-logo marquee** from the old expertise slider.
**Signature:** a **radar/spider chart** (a data-scientist's signature visual) summarizing
skill domains, paired with categorized chips that have **animated proficiency meters**.
Toggle between "Radar" and "Grid" views. Follows the `dataviz` skill for the chart.
Reduced-motion: meters render at final value instantly; radar is static SVG.

## 5. Experience & Research — "Scroll Timeline"  *(new section — showcases his research depth)*
**Rationale:** his positioning leans on research (NLP, WiFi-localization, smart-city) +
publications. This section is what sets him apart for technical roles.
**Signature:** a vertical **scroll-driven timeline** whose progress line **fills as you scroll**;
nodes reveal role/research cards with tags and links (incl. ResearchGate). Alternating
left/right on desktop, single-column on mobile.

## 6. Contact — "Signal Sender"
**DNA kept:** the social-icon hover treatment (`.bg-icon`) reimagined; `Let's talk` CTA target.
**Signature:** split layout — a **validated contact form** (posts to the Cloudflare Worker
API) with inline errors, honeypot spam trap, and a **success micro-animation**; beside it,
**magnetic social icons** and a "Based in Dhaka" touch. Loading / success / error states all
designed.

## 7. Footer
Minimal: wordmark, quick links, `Built with Next.js · Tailwind · Motion` badge (quiet flex),
back-to-top, © year. Nothing flashy — lets the sections breathe.

---

### Section order (single-page scroll)
`Hero → About → Projects → Skills → Experience & Research → Contact → Footer`

Each `<section>` gets a stable `id` for the nav scroll-spy: `home about projects skills
experience contact`.
