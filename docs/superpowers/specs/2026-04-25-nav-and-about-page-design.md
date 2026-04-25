# Nav Bar + Theme Toggle + About Page — Design Spec

**Date:** 2026-04-25
**Status:** Approved (pending user spec review)
**Source:** `Corey_s Landing Page.zip` design handoff (`design_handoff_nav_about/`)

---

## Goal

Integrate two new features from the design handoff into the existing Next.js portfolio:

1. **Persistent Nav Bar** — sticky header with wordmark, nav links, theme toggle, and resume download button. Visible on every page.
2. **About Page** (`/about`) — dedicated page telling Corey's origin story (truck driver → self-taught developer → hackathon winner).

Plus two supporting changes:

3. **Theme infrastructure migration** — switch from `prefers-color-scheme` media query to class-based `next-themes` so the toggle works.
4. **Homepage About teaser** — replace the existing rich `<About />` component on the homepage with a short snippet that links to `/about`.

---

## Decisions Made During Brainstorming

| # | Question | Decision |
|---|---|---|
| Q1 | What happens to existing homepage `<About />`? | **Replace with short teaser + link** to `/about`. Old component file deleted. |
| Q2 | Mobile nav behavior? | **Hamburger menu** — wordmark left, theme toggle + hamburger right. Tap → slide-down panel. |
| Q3 | Color token scope? | **Update site-wide tokens** — adopt handoff's oklch accent value, add `--gold` and `--green` global tokens. |

---

## Workstreams (Dependency Order)

1. Theme infrastructure (foundation for nav toggle + token usage)
2. Nav Bar component
3. `/about` page
4. Homepage About teaser

---

## 1. Theme Infrastructure

### Dependencies
- `next-themes` — installed (`npm install next-themes`)
- `lucide-react` — already installed

### `globals.css` migration
Replace the existing `@media (prefers-color-scheme: dark)` block with a class-based `.dark` strategy. Adopt handoff's oklch accent values and add new `--gold` / `--green` tokens.

```css
:root {
  --background: #ffffff;
  --foreground: #171717;
  --accent: oklch(0.52 0.18 240);
  --accent-foreground: #ffffff;
  --gold: oklch(0.78 0.14 80);
  --green: oklch(0.72 0.14 145);
  /* tech brand colors stay as-is */
}

.dark {
  --background: #0a0a0a;
  --foreground: #ededed;
  --accent: oklch(0.62 0.15 240);
  --accent-foreground: #1e40af;
  --tech-nextjs: #ffffff;
}
```

Add to the `@theme inline` block so Tailwind utility classes resolve:

```css
@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-accent: var(--accent);
  --color-accent-foreground: var(--accent-foreground);
  --color-gold: var(--gold);
  --color-green: var(--green);
  --font-sans: var(--font-geist-sans);
  --font-mono: var(--font-geist-mono);
}
```

### `layout.tsx` wrapping
Wrap the body content in a `ThemeProvider`:

```tsx
import { ThemeProvider } from 'next-themes';

<html lang="en" suppressHydrationWarning>
  <body className={...}>
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <Navbar />
      {children}
    </ThemeProvider>
  </body>
</html>
```

`suppressHydrationWarning` on `<html>` is required to silence the unavoidable theme-class flash warning that `next-themes` triggers.

### Risk
Existing components (`Hero`, `Projects`, `CallToAction`) reference `bg-accent`, `text-accent`, etc. After the swap they will respond to the toggle, not the OS preference. The oklch values are perceptually close to current Tailwind blues, so the shift should be subtle. Spot-check after migration.

---

## 2. Nav Bar — `src/components/Navbar.tsx`

### Type
Client component (`'use client'`) — uses `useEffect` for scroll detection, `useTheme()`, `usePathname()`, and `useState` for hamburger.

### Layout
```
Desktop:  [corey.dev]    Home · Projects · About    [🌙] [⤓ resume.pdf]
Mobile:   [corey.dev]                                [🌙] [☰]
```

- Position: `fixed top-0 left-0 right-0 z-50`
- Height: `h-[60px]`
- Inner container: `max-w-[1100px] mx-auto px-8 flex items-center justify-between h-full`

### Two scroll states

**Top of page (transparent):**
- `background: transparent`
- `border-bottom: 1px solid transparent`

**Scrolled (`window.scrollY > 20`):**
- Dark: `background: rgba(10,10,10,0.85)`; Light: `background: rgba(255,255,255,0.88)`
- `backdrop-filter: blur(12px)`
- `border-bottom: 1px solid` — dark `rgba(237,237,237,0.08)` / light `rgba(23,23,23,0.1)`
- `box-shadow: 0 1px 24px rgba(0,0,0,0.15)`

Implementation: `useEffect` adds passive `scroll` listener; sets `scrolled` state when `window.scrollY > 20`. Cleanup on unmount.

### Wordmark (left)
```tsx
<Link href="/" className="font-mono text-[15px] font-medium text-foreground">
  <span className="text-accent">[</span>corey.dev<span className="text-accent">]</span>
</Link>
```

### Nav links (center, desktop only)
- Routes: `Home → /`, `Projects → /projects`, `About → /about`
- Each: `px-3.5 py-1.5 rounded-md text-sm font-medium`
- Default: `text-foreground/50 hover:text-foreground hover:bg-foreground/5`
- Active (matched via `usePathname()`): `text-foreground`
- Active rules: `pathname === '/'` → Home; `pathname.startsWith('/projects')` → Projects; `pathname.startsWith('/about')` → About

### Theme toggle (right, before resume)
- `w-[34px] h-[34px] rounded-lg border border-foreground/20 bg-transparent`
- `hover:border-foreground hover:text-foreground hover:bg-foreground/5`
- Icon: `Sun` shown when `theme === 'dark'` (clicking → light); `Moon` shown when light
- Toggle: `setTheme(theme === 'dark' ? 'light' : 'dark')`

**Hydration guard:**
```tsx
const [mounted, setMounted] = useState(false);
useEffect(() => setMounted(true), []);
if (!mounted) return <div className="w-[34px] h-[34px]" />; // matches button footprint
```

### Resume button (rightmost, desktop)
```tsx
<a
  href="/Corey_McNutt_Resume.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-md text-[13px] font-semibold font-mono border border-foreground/20 hover:border-accent hover:text-accent transition-colors duration-150"
>
  <Download className="w-3 h-3" />
  resume.pdf
</a>
```

### Mobile hamburger (below `sm:`, 640px)
- Hide center nav links and resume text label
- Show hamburger icon button (`Menu` from lucide; swap to `X` when open)
- Tapping opens a slide-down panel:
  - Anchored at `top-[60px]`, full-width, same blurred-glass background as scrolled nav
  - Animate via Tailwind: `transition-transform translate-y-[-100%]` → `translate-y-0`
  - Stacked: `Home / Projects / About / Resume PDF`, larger tap targets (`py-4`)
  - Closes on outside tap, Escape key, or selecting a link
  - Body scroll-lock while open

### Asset
- `public/Corey_McNutt_Resume.pdf` — provided by user, drop into `/public`. Link references it directly; no rebuild needed once placed.

### Page padding implication
Nav is `fixed`, so page content can render under it. Hero is fine (nav is transparent at top). For other pages where the first section starts content immediately, add `pt-[60px]` (or larger) on the first section.

---

## 3. `/about` Page

### Files
- `src/app/about/layout.tsx` — exports `metadata` and renders `{children}` as a pass-through:
  ```tsx
  export const metadata = {
    title: "About | Corey – Software Developer",
    description: "From the open road to the terminal — the story of a truck driver turned self-taught developer.",
  };
  export default function AboutLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
  }
  ```
- `src/app/about/page.tsx` — server component composing the section components below. Owns the `<main>` wrapper.
- Page container: `<main className="max-w-3xl mx-auto px-6 pt-[100px] pb-20">` (clears nav + breathing room)

### Component split (in `src/components/about/`)

| File | Purpose |
|---|---|
| `IntroSection.tsx` | `// about me` label, H1, bio paragraph, profile image + "Open to work" badge |
| `StatsRow.tsx` | 3-cell grid (3+ years, 2nd hackathon, 5+ projects) |
| `BackstorySection.tsx` | 🚛 icon, 2 paragraphs, accent callout block |
| `TimelineSection.tsx` | 📍 icon, 4 timeline items with colored dots |
| `BJJSection.tsx` | 🥋 icon, belt visual, 2 paragraphs |
| `SkillsSection.tsx` | ⚙️ icon, intro, tag chips |
| `AvailabilityCTA.tsx` | green availability bar + Resume / Projects buttons |
| `SectionHeader.tsx` | Shared icon-in-square + h2 component (used by sections 3-6) |

Reason for split: each section is independently legible/testable, page file becomes a clean compositional list, `SectionHeader` deduplicates a 4× repeated pattern.

### Section detail summary

All visual specs (class names, copy, colors) come verbatim from the handoff README §"Page structure" — implementer should reference that file directly during implementation rather than duplicating it here. Key notes:

- **Intro:** Two-column grid `grid grid-cols-1 lg:grid-cols-[1fr_160px] gap-10 items-start`. Profile image stacks under bio below `lg`.
- **Stats:** `grid-cols-3 gap-px bg-foreground/10 rounded-xl overflow-hidden` — uses background gap trick for hairline dividers.
- **Backstory callout:** `bg-accent/15 border border-accent/35 rounded-xl` block with the "domain expertise is real" pull-quote.
- **Timeline:** `relative pl-7 before:absolute before:left-[7px] before:top-2 before:bottom-2 before:w-px before:bg-foreground/10` for the vertical line. Four items with dots in different colors (plain / accent / accent / gold).
- **BJJ belt:** Inline-styled div (`background: '#1a0a00'` + gold tip `#d4af37`) — handoff prescribes exact hex here, not tokens.
- **Skills tags:** 15 plain text chips in `flex-wrap gap-2`. **Lighter than the homepage Hero's TechIcon orbit — intentional for skim-ability.**
- **Availability bar:** Uses new `--color-green` token. Animated pulse dot.
- **CTAs:** Reuses existing `<Button>` component from `src/components/ui/Button.tsx` (`variant="primary"` for Resume, `variant="secondary"` for View Projects).

### Mobile behavior
Handoff specifies `lg:` breakpoint only for the intro grid. All other sections are single-column responsive by default — no extra mobile rules needed.

---

## 4. Homepage About Teaser — `src/components/AboutTeaser.tsx`

### Replaces
The current `src/components/About.tsx` (rich version with Core Technologies + Databases & Tools TechIcon grids). Old file deleted; git history preserves it.

### Why
- Bio narrative moves to `/about` in expanded form
- Skill icon grids are redundant with Hero's `TechOrbit`
- Homepage stays focused; `/about` becomes the canonical bio destination

### Layout
```
        // about me
   From the open road to the terminal.
 ────────────────────────────────────────
   I'm Corey — a self-taught software developer who spent
   years driving auto haulers before teaching myself to code.
   Now I build the kind of software I wished existed when
   I was out on the road.

           [ Read the full story → ]
```

### Styling
- Container: `max-w-3xl mx-auto px-6 py-16` — narrower than current About, lighter visual weight
- `// about me` label: same mono accent label as `/about` page (visual hand-off cue)
- H2: `text-3xl sm:text-4xl font-bold tracking-tight` — slightly smaller than `/about`'s H1 so the full page still feels like a step up
- Bio paragraph: ~40 words, `text-foreground/70 leading-[1.75]`
- CTA: existing `<Button variant="secondary" href="/about">Read the full story →</Button>`
- Centered text alignment (teaser, not section deep-dive)

### Page composition after change
```tsx
// src/app/page.tsx
<main>
  <Hero />
  <AboutTeaser />
  <CallToAction />
  <ContactModal />
</main>
```

---

## Design Tokens Reference

| Token | Light value | Dark value |
|---|---|---|
| `--background` | `#ffffff` | `#0a0a0a` |
| `--foreground` | `#171717` | `#ededed` |
| `--accent` | `oklch(0.52 0.18 240)` | `oklch(0.62 0.15 240)` |
| `--gold` | `oklch(0.78 0.14 80)` | `oklch(0.78 0.14 80)` |
| `--green` | `oklch(0.72 0.14 145)` | `oklch(0.72 0.14 145)` |

---

## Files Touched

### New
- `src/components/Navbar.tsx`
- `src/components/AboutTeaser.tsx`
- `src/app/about/layout.tsx`
- `src/app/about/page.tsx`
- `src/components/about/IntroSection.tsx`
- `src/components/about/StatsRow.tsx`
- `src/components/about/BackstorySection.tsx`
- `src/components/about/TimelineSection.tsx`
- `src/components/about/BJJSection.tsx`
- `src/components/about/SkillsSection.tsx`
- `src/components/about/AvailabilityCTA.tsx`
- `src/components/about/SectionHeader.tsx`
- `public/Corey_McNutt_Resume.pdf` (user-supplied)

### Modified
- `src/app/layout.tsx` — wrap in `ThemeProvider`, mount `<Navbar />`, add `suppressHydrationWarning`
- `src/app/page.tsx` — swap `<About />` for `<AboutTeaser />`
- `src/app/globals.css` — class-based dark mode + new oklch tokens + gold/green
- `package.json` — `next-themes` added (already done)

### Deleted
- `src/components/About.tsx`

---

## Verification After Implementation

1. **Visual smoke test in browser** at all three routes (`/`, `/projects`, `/about`):
   - Nav visible, transparent at top, blurred when scrolled past 20px
   - Theme toggle flips colors site-wide; persists across reloads
   - Resume button opens PDF in new tab (once PDF dropped in `/public`)
   - Mobile (≤640px): hamburger appears, panel opens/closes correctly
2. **No hydration warnings** in console (the `next-themes` flash warning suppressed by `suppressHydrationWarning`)
3. **Active link highlighting** — current route's nav link is `text-foreground`
4. **Spot-check existing pages** — Hero, Projects gallery still look right with new oklch accent
5. **Lighthouse / a11y quick check** — nav links keyboard-navigable, hamburger has proper `aria-label` and `aria-expanded`

---

## Out of Scope

- Functional contact form / email integration
- Search / filtering on /about content
- Animated section reveals on scroll
- Blog functionality
- Skills visualization beyond the spec'd tag chips
