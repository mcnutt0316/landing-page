# Projects Page — Carousel Crossfade & Featured Section Restyle

**Date:** 2026-04-24
**Source:** Design handoff bundle from Claude Design (`Corey_s Landing Page.zip` → `design_handoff_carousel_featured/`).

## Overview

Two focused improvements to the `/projects` page:

1. **Smooth crossfade carousel** — replace the hard image swap in `ProjectCarousel.tsx` with a CSS opacity crossfade and add hover-reveal arrow nav buttons.
2. **Featured project (Car Hauler) visual upgrade** — restyle the featured slot with a deep blue shell, gradient accent bar, trophy badge, stats row, and branded tech pills.

Fidelity is high — recreate the design pixel-faithfully using existing Tailwind v4 conventions and the codebase's component patterns.

## Files Touched

| File | Change |
|---|---|
| `package.json` | Add `lucide-react` dependency |
| `src/components/ProjectCarousel.tsx` | Rewrite — stacked images with opacity crossfade, hover-reveal arrows |
| `src/app/projects/page.tsx` | Restyle featured-project block only; other-projects grid and "Get In Touch" CTA unchanged |

No new files are created. No data-shape changes — all required fields already exist on the `Project` type.

## Dependency

- **`lucide-react`** — for `ChevronLeft`, `ChevronRight`, `ExternalLink`, `Video` icons. Tree-shakes per icon. Install via `npm install lucide-react`.

## Change 1 — ProjectCarousel.tsx (Crossfade)

### Behavior change

Current: a single `<Image>` whose `src` swaps on a 3000ms interval — produces a jarring hard cut.

New: all images render simultaneously, stacked with `position: absolute; inset: 0`. Only the active slide has `opacity: 1`; all others are `opacity: 0`. CSS handles the transition: `transition: opacity 600ms cubic-bezier(0.4, 0, 0.2, 1)`.

### Component contract (unchanged)

```ts
interface ProjectCarouselProps {
  images: string[];
  projectTitle: string;
}
```

This is a drop-in replacement. No callers in `projects/page.tsx` need to change.

### Implementation specifics

**Wrapper:**
- `group relative aspect-video overflow-hidden rounded-lg bg-foreground/10`
- `onMouseEnter` → pause autoplay; `onMouseLeave` → resume

**Each slide (rendered for every image):**
- `absolute inset-0`
- `transition-opacity duration-[600ms] ease-[cubic-bezier(0.4,0,0.2,1)]`
- Active: `opacity-100`. Inactive: `opacity-0`.
- Inside: existing `<Image fill className="object-cover" />` with `priority={i === 0}` so the first slide doesn't lazy-load and flash on first paint.

**Dot indicators (kept, with sizing tweak):**
- Inactive: `w-1.5 h-1.5 rounded-full bg-white/45`
- Active: `w-[22px] h-1.5 rounded-full bg-white` (pill shape, same height)
- `transition-[width,background] duration-300 ease`

**Arrow nav buttons (new):**
- Position: `absolute top-1/2 -translate-y-1/2`, `left-2.5` for prev, `right-2.5` for next
- Size/shape: `w-8 h-8 rounded-full grid place-items-center`
- Background: `bg-black/45 border border-white/15 text-white`
- Hover: `hover:bg-black/70`
- Visibility: `opacity-0 group-hover:opacity-100 transition-opacity duration-200`
- Icon: `<ChevronLeft />` / `<ChevronRight />` from `lucide-react`, `className="w-3.5 h-3.5"`, `strokeWidth={2.5}`
- Accessibility: `aria-label="Previous slide"` / `aria-label="Next slide"`

**Auto-advance:**
- Interval: **3500ms** (up from 3000ms)
- Paused while mouse is over the wrapper

## Change 2 — projects/page.tsx (Featured Section Restyle)

Only the featured-project block is restyled. The "Other Projects" grid and the "Interested in working together?" CTA stay as-is.

### Shell

Replace the current `bg-foreground/5 rounded-xl p-6 lg:p-8 hover:bg-foreground/[0.07] ...` wrapper with:

```tsx
<div className="relative overflow-hidden rounded-2xl border border-[oklch(0.30_0.10_240)] bg-[oklch(0.18_0.08_240)]">
  {/* Gradient accent bar across the top */}
  <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-[oklch(0.52_0.18_240)] to-[oklch(0.75_0.16_80)]" />

  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center p-10">
    {/* Left column: badges → title → description → stats → tech pills → CTAs */}
    {/* Right column: <ProjectCarousel /> */}
  </div>
</div>
```

No hover state on the shell — it's always prominent.

### Badge row

Three pills in a `flex flex-wrap gap-2` row. All share base classes:
`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-semibold uppercase tracking-[0.04em]`.

| Badge | Source | Background | Text | Border |
|---|---|---|---|---|
| ★ Featured | hardcoded | `bg-[oklch(0.42_0.18_240/0.3)]` | `text-[oklch(0.76_0.10_240)]` | `border border-[oklch(0.42_0.18_240/0.4)]` |
| 🏆 Hackathon 2nd Place | hardcoded (specific to featured slot) | `bg-[oklch(0.75_0.16_80/0.15)]` | `text-[oklch(0.80_0.14_80)]` | `border border-[oklch(0.75_0.16_80/0.35)]` |
| Completed | from `featuredProject.status` | `bg-[oklch(0.35_0.10_145/0.3)]` | `text-[oklch(0.75_0.14_145)]` | `border border-[oklch(0.35_0.10_145/0.4)]` |

The trophy badge is hardcoded inline rather than added to the `Project` type — it's a one-off and the existing `highlights[0]` already records the achievement narratively.

### Title and description

- Title: `text-3xl font-bold text-white` (white, not `text-foreground`, so it pops against the dark shell).
- Description: `text-[15px] leading-relaxed text-[oklch(0.72_0.02_240)]` (muted blue-white).

### Stats row (new)

Inset panel between description and tech pills:

```tsx
<div className="flex gap-6 px-4 py-3 rounded-lg border border-[oklch(0.28_0.06_240)] bg-[oklch(0.16_0.04_240)]">
  <Stat label="Duration"  value={featuredProject.metadata.duration} />
  <Stat label="Team Size" value={`${featuredProject.metadata.team_size} devs`} />
  <Stat label="Status"    value="Live" />
</div>
```

Per stat:
- Label: `text-[11px] uppercase tracking-[0.07em] text-[oklch(0.5_0.05_240)]`
- Value: `text-sm font-semibold font-mono text-white`

`Status` is hardcoded to `"Live"` per the design spec.

### Tech pills

Replace the current `bg-foreground/10 text-foreground rounded-full` pills with branded blue:

```
inline-flex items-center
bg-[oklch(0.28_0.06_240)] text-[oklch(0.76_0.10_240)] border border-[oklch(0.34_0.09_240)]
rounded-md px-3 py-1 text-xs font-mono whitespace-nowrap
```

### CTAs

- **Primary — "Live Demo"**: keep the existing accent button style. Add `<ExternalLink className="w-3.5 h-3.5" />` before the label. Target stays `featuredProject.links.demo`.
- **Secondary — "Case Study Video"**: ghost button. Add `<Video className="w-3.5 h-3.5" />` before the label. Target switches **from** `featuredProject.links.github` **to** `featuredProject.links.case_study` (already populated for Car Hauler).

Both keep `target="_blank" rel="noopener noreferrer"`.

### Image order in featured carousel

Switch the `images` prop passed to the featured `<ProjectCarousel>` from `[hero, thumbnail, ...gallery]` to **`[hero, ...gallery, thumbnail]`** (hero first, thumbnail last) so the best image shows on load.

The other-projects cards' carousel order stays as it currently is.

## Interactions Summary

| Interaction | Behavior |
|---|---|
| Carousel auto-advance | Every 3500ms; pauses while hovered |
| Carousel crossfade | 600ms `cubic-bezier(0.4, 0, 0.2, 1)` opacity transition |
| Arrow nav visibility | `opacity-0 → opacity-100` on wrapper hover, `duration-200` |
| Active dot expand | `width 6px → 22px`, `duration-300` |
| Featured shell | No hover state |
| Other project cards | Existing `hover:bg-foreground/[0.07]` kept |

## Design Tokens

These OKLCH values are used inline as Tailwind v4 arbitrary-value classes (e.g. `bg-[oklch(0.18_0.08_240)]`). They are not added to a global theme file — keeping them inline scopes the styling to the featured block only.

| Token | Value | Used for |
|---|---|---|
| Blue 900 | `oklch(0.18 0.08 240)` | Featured shell background |
| Blue 800 (border) | `oklch(0.30 0.10 240)` | Featured shell border |
| Blue 700 | `oklch(0.34 0.09 240)` | Tech pill border |
| Blue 600 | `oklch(0.42 0.18 240)` | Featured badge bg/border (with alpha) |
| Blue 500 | `oklch(0.52 0.18 240)` | Accent bar gradient start |
| Blue 300 | `oklch(0.76 0.10 240)` | Featured badge text, tech pill text |
| Blue 200 (muted) | `oklch(0.72 0.02 240)` | Description text |
| Blue dark inset | `oklch(0.16 0.04 240)` | Stats row background |
| Blue inset border | `oklch(0.28 0.06 240)` | Stats row border, tech pill bg |
| Stats label | `oklch(0.5 0.05 240)` | Stats row labels |
| Gold 500 | `oklch(0.75 0.16 80)` | Accent bar gradient end |
| Gold 400 | `oklch(0.80 0.14 80)` | Trophy badge text |
| Green | `oklch(0.75 0.14 145)` | Completed badge text |
| Green bg | `oklch(0.35 0.10 145)` | Completed badge bg/border (with alpha) |

## Out of Scope

- The other-projects grid styling (cards, status badges, links) — unchanged.
- The "Interested in working together?" CTA section — unchanged.
- Project data shape — no new fields added.
- Extracting the featured block into a `<FeaturedProject>` component — kept inline in `projects/page.tsx` to avoid premature abstraction. Can be revisited later if a second featured slot is ever added.

## Verification

After implementation:
1. `npm run lint` passes.
2. `npm run build` passes.
3. `npm run dev` and verify in a browser:
   - Featured block has the dark blue shell with gradient accent bar at the top.
   - All three badges render (Featured, 🏆 Hackathon 2nd Place, Completed).
   - Stats row shows Duration / Team Size / Status with mono-font values.
   - Tech pills are blue-toned, not grey.
   - Primary CTA opens the demo with an external-link icon.
   - Secondary CTA opens the YouTube case-study video with a video icon.
   - Carousel images crossfade smoothly (600ms) instead of hard-cutting.
   - Arrow buttons appear on hover and advance the carousel.
   - Auto-advance pauses while hovered.
   - Other-projects cards still look the same as before.

## Reference

`/tmp/corey-design/design_handoff_carousel_featured/` — extracted prototype HTML and README from the design bundle.
