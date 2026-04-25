# Nav Bar + Theme Toggle + About Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a sticky nav bar (with theme toggle + resume button + mobile hamburger), build a dedicated `/about` page, and replace the homepage's rich About component with a short teaser linking to `/about`.

**Architecture:** Four phases in dependency order. Phase 1 migrates the theme system from `prefers-color-scheme` to class-based `next-themes` and updates color tokens to oklch. Phase 2 builds the Navbar (mounted globally in root layout). Phase 3 builds the `/about` page split into 8 small section components. Phase 4 swaps the homepage About for a teaser.

**Tech Stack:** Next.js 16, React 19, TypeScript, Tailwind CSS v4, `next-themes` (already installed), `lucide-react` (already installed).

**Spec:** `docs/superpowers/specs/2026-04-25-nav-and-about-page-design.md`

**Note on testing:** This project has no test framework installed (no Jest, Vitest, Playwright). Verification is via `npm run lint`, `npm run build`, and manual visual inspection in `npm run dev`. Each task ends with the appropriate verification.

**Note on Resume PDF:** Tasks reference `/Corey_McNutt_Resume.pdf` in `/public`. The user will drop this file in. The links work without rebuild once the file exists. Don't block on it — implement the link, file presence is verified separately.

---

## File Map

### Phase 1 — Theme infrastructure
| File | Action | Responsibility |
|---|---|---|
| `src/app/globals.css` | Modify | Replace `@media (prefers-color-scheme)` with `.dark` class strategy; adopt oklch accent; add `--gold` and `--green` tokens |
| `src/app/layout.tsx` | Modify | Wrap children in `ThemeProvider`; add `suppressHydrationWarning` to `<html>` |

### Phase 2 — Nav Bar
| File | Action | Responsibility |
|---|---|---|
| `src/components/Navbar.tsx` | Create | Fixed nav with wordmark, links, scroll-blur state, theme toggle, resume button, mobile hamburger |
| `src/app/layout.tsx` | Modify | Mount `<Navbar />` inside `ThemeProvider` |

### Phase 3 — About page
| File | Action | Responsibility |
|---|---|---|
| `src/app/about/layout.tsx` | Create | Metadata for `/about` route |
| `src/app/about/page.tsx` | Create | Composes the 7 section components into one page |
| `src/components/about/SectionHeader.tsx` | Create | Shared icon-in-square + h2 header (used by 4 sections) |
| `src/components/about/IntroSection.tsx` | Create | Label, H1, bio, profile image + "Open to work" badge |
| `src/components/about/StatsRow.tsx` | Create | 3-cell stats grid |
| `src/components/about/BackstorySection.tsx` | Create | 🚛 backstory + accent callout |
| `src/components/about/TimelineSection.tsx` | Create | 📍 vertical timeline with 4 items |
| `src/components/about/BJJSection.tsx` | Create | 🥋 BJJ section with belt visual |
| `src/components/about/SkillsSection.tsx` | Create | ⚙️ skills section with tag chips |
| `src/components/about/AvailabilityCTA.tsx` | Create | Green availability bar + Resume / Projects CTA buttons |

### Phase 4 — Homepage teaser
| File | Action | Responsibility |
|---|---|---|
| `src/components/AboutTeaser.tsx` | Create | Short bio snippet + "Read the full story →" link |
| `src/app/page.tsx` | Modify | Replace `<About />` with `<AboutTeaser />` |
| `src/components/About.tsx` | Delete | Replaced by AboutTeaser; full story moves to `/about` |

---

# Phase 1 — Theme Infrastructure

## Task 1: Migrate `globals.css` to class-based dark mode + new tokens

**Files:**
- Modify: `src/app/globals.css`

- [ ] **Step 1: Replace the entire `:root` + `@theme inline` + `@media` blocks**

Open `src/app/globals.css`. Replace lines 3–39 (the `:root`, `@theme inline`, and `@media (prefers-color-scheme: dark)` blocks) with:

```css
:root {
  --background: #ffffff;
  --foreground: #171717;
  --accent: oklch(0.52 0.18 240);
  --accent-foreground: #ffffff;
  --gold: oklch(0.78 0.14 80);
  --green: oklch(0.72 0.14 145);

  /* Tech brand colors */
  --tech-typescript: #3178c6;
  --tech-javascript: #f7df1e;
  --tech-react: #61dafb;
  --tech-nodejs: #339933;
  --tech-mongodb: #47a248;
  --tech-supabase: #3ecf8e;
  --tech-claude: #d97757;
  --tech-nextjs: #000000;
}

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

.dark {
  --background: #0a0a0a;
  --foreground: #ededed;
  --accent: oklch(0.62 0.15 240);
  --accent-foreground: #1e40af;
  --tech-nextjs: #ffffff;
}
```

Leave everything below line 39 (the `body { ... }` and animation/accessibility blocks) **untouched**.

- [ ] **Step 2: Verify lint + build pass**

Run:
```bash
npm run lint
```
Expected: passes (no new errors).

Run:
```bash
npm run build
```
Expected: builds successfully. CSS compiles with new tokens.

- [ ] **Step 3: Commit**

```bash
git add src/app/globals.css
git commit -m "feat(theme): migrate to class-based dark mode with oklch tokens

Replaces prefers-color-scheme media query with .dark class strategy
so next-themes can drive the theme. Adopts handoff oklch accent
values and adds new --gold and --green tokens for the upcoming
nav bar + about page work."
```

---

## Task 2: Wire `ThemeProvider` in root layout

**Files:**
- Modify: `src/app/layout.tsx`

- [ ] **Step 1: Add the `ThemeProvider` wrapping**

Open `src/app/layout.tsx`. Make these three changes:

1. Add import at the top (after other imports):
   ```tsx
   import { ThemeProvider } from 'next-themes';
   ```

2. Add `suppressHydrationWarning` to the `<html>` tag:
   ```tsx
   <html lang="en" suppressHydrationWarning>
   ```

3. Wrap `{children}` in `ThemeProvider`:
   ```tsx
   <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
     <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
       {children}
     </ThemeProvider>
   </body>
   ```

The full updated `RootLayout` function should look like:

```tsx
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
```

- [ ] **Step 2: Verify build passes**

Run:
```bash
npm run build
```
Expected: builds successfully.

- [ ] **Step 3: Manual smoke test in dev**

Run:
```bash
npm run dev
```

Open http://localhost:3000 in browser. Verify:
- Page loads without errors
- No hydration warnings in browser console
- Visual appearance matches before (dark or light depending on OS, since `enableSystem` is on)

Stop the dev server (Ctrl+C) when done.

- [ ] **Step 4: Commit**

```bash
git add src/app/layout.tsx
git commit -m "feat(theme): wire next-themes ThemeProvider in root layout

Wraps children in ThemeProvider with class strategy + dark default +
system preference detection. Adds suppressHydrationWarning to <html>
to silence the unavoidable theme-class flash warning."
```

---

# Phase 2 — Nav Bar

## Task 3: Create Navbar shell with wordmark + nav links

**Files:**
- Create: `src/components/Navbar.tsx`

- [ ] **Step 1: Create the file with the basic shell**

Create `src/components/Navbar.tsx` with this exact content:

```tsx
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Projects' },
  { href: '/about', label: 'About' },
];

function isActive(pathname: string, href: string): boolean {
  if (href === '/') return pathname === '/';
  return pathname.startsWith(href);
}

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-[60px] transition-colors duration-200">
      <div className="max-w-[1100px] mx-auto px-8 h-full flex items-center justify-between">
        {/* Wordmark */}
        <Link
          href="/"
          className="font-mono text-[15px] font-medium text-foreground"
        >
          <span className="text-accent">[</span>
          corey.dev
          <span className="text-accent">]</span>
        </Link>

        {/* Center nav links (desktop) */}
        <nav className="hidden sm:flex items-center gap-1">
          {NAV_LINKS.map(({ href, label }) => {
            const active = isActive(pathname, href);
            return (
              <Link
                key={href}
                href={href}
                className={`px-3.5 py-1.5 rounded-md text-sm font-medium transition-colors ${
                  active
                    ? 'text-foreground'
                    : 'text-foreground/50 hover:text-foreground hover:bg-foreground/5'
                }`}
              >
                {label}
              </Link>
            );
          })}
        </nav>

        {/* Right side — placeholder for theme toggle + resume (added in later tasks) */}
        <div className="w-[120px]" />
      </div>
    </header>
  );
}
```

- [ ] **Step 2: Verify lint + build pass**

Run:
```bash
npm run lint && npm run build
```
Expected: both pass.

- [ ] **Step 3: Commit**

```bash
git add src/components/Navbar.tsx
git commit -m "feat(nav): add Navbar shell with wordmark and route links

Fixed-position header at top with corey.dev wordmark and centered
Home/Projects/About nav links. Active route is highlighted via
usePathname. Right-side placeholder reserved for theme toggle and
resume button in following tasks."
```

---

## Task 4: Add scroll-blur state to Navbar

**Files:**
- Modify: `src/components/Navbar.tsx`

- [ ] **Step 1: Add scroll detection + scrolled styling**

In `src/components/Navbar.tsx`:

1. Add `useEffect` and `useState` to the React imports at the top:
   ```tsx
   'use client';

   import { useEffect, useState } from 'react';
   import Link from 'next/link';
   import { usePathname } from 'next/navigation';
   ```

2. Inside the `Navbar` function (after `const pathname = usePathname();`), add:
   ```tsx
   const [scrolled, setScrolled] = useState(false);

   useEffect(() => {
     const onScroll = () => setScrolled(window.scrollY > 20);
     onScroll(); // initialize
     window.addEventListener('scroll', onScroll, { passive: true });
     return () => window.removeEventListener('scroll', onScroll);
   }, []);
   ```

3. Replace the `<header>` opening tag with a conditional className:
   ```tsx
   <header
     className={`fixed top-0 left-0 right-0 z-50 h-[60px] transition-colors duration-200 ${
       scrolled
         ? 'bg-[rgba(255,255,255,0.88)] dark:bg-[rgba(10,10,10,0.85)] backdrop-blur-[12px] border-b border-[rgba(23,23,23,0.1)] dark:border-[rgba(237,237,237,0.08)] shadow-[0_1px_24px_rgba(0,0,0,0.15)]'
         : 'bg-transparent border-b border-transparent'
     }`}
   >
   ```

- [ ] **Step 2: Verify lint + build pass**

Run:
```bash
npm run lint && npm run build
```
Expected: both pass.

- [ ] **Step 3: Commit**

```bash
git add src/components/Navbar.tsx
git commit -m "feat(nav): add scroll-blur state to Navbar

Header is transparent at top, switches to blurred-glass background
with subtle border + shadow when scrolled past 20px. Uses passive
scroll listener for performance."
```

---

## Task 5: Add theme toggle button to Navbar

**Files:**
- Modify: `src/components/Navbar.tsx`

- [ ] **Step 1: Add theme toggle**

In `src/components/Navbar.tsx`:

1. Add imports:
   ```tsx
   import { useTheme } from 'next-themes';
   import { Sun, Moon } from 'lucide-react';
   ```

2. Inside the `Navbar` function (after the scroll `useEffect`), add the theme hook + mounted guard:
   ```tsx
   const { theme, resolvedTheme, setTheme } = useTheme();
   const [mounted, setMounted] = useState(false);
   useEffect(() => setMounted(true), []);
   ```

3. Replace the `<div className="w-[120px]" />` placeholder on the right side with:
   ```tsx
   <div className="flex items-center gap-2">
     {mounted ? (
       <button
         type="button"
         aria-label="Toggle theme"
         onClick={() => setTheme((resolvedTheme ?? theme) === 'dark' ? 'light' : 'dark')}
         className="w-[34px] h-[34px] rounded-lg border border-foreground/20 bg-transparent flex items-center justify-center text-foreground/70 hover:border-foreground hover:text-foreground hover:bg-foreground/5 transition-colors duration-150"
       >
         {(resolvedTheme ?? theme) === 'dark' ? (
           <Sun className="w-4 h-4" />
         ) : (
           <Moon className="w-4 h-4" />
         )}
       </button>
     ) : (
       <div className="w-[34px] h-[34px]" aria-hidden />
     )}
   </div>
   ```

The `mounted` guard prevents hydration mismatch — server can't know the client theme, so render a sized placeholder until the client mounts.

`resolvedTheme` is preferred over `theme` because when the user is on `system`, `theme === 'system'` but `resolvedTheme` is the actual `'dark'` or `'light'` being shown.

- [ ] **Step 2: Verify lint + build pass**

Run:
```bash
npm run lint && npm run build
```
Expected: both pass.

- [ ] **Step 3: Commit**

```bash
git add src/components/Navbar.tsx
git commit -m "feat(nav): add theme toggle button with hydration guard

Sun/Moon button toggles between dark and light themes via next-themes.
Uses resolvedTheme so 'system' resolves to actual displayed theme.
Mounted guard prevents SSR hydration mismatch — renders sized
placeholder until client mounts."
```

---

## Task 6: Add resume download button to Navbar (desktop)

**Files:**
- Modify: `src/components/Navbar.tsx`

- [ ] **Step 1: Add resume button**

In `src/components/Navbar.tsx`:

1. Add `Download` to the lucide imports:
   ```tsx
   import { Sun, Moon, Download } from 'lucide-react';
   ```

2. Inside the right-side `<div className="flex items-center gap-2">`, add the resume link **after** the theme toggle (so order is `theme · resume`):

   The right-side container should now look like:
   ```tsx
   <div className="flex items-center gap-2">
     {mounted ? (
       <button
         type="button"
         aria-label="Toggle theme"
         onClick={() => setTheme((resolvedTheme ?? theme) === 'dark' ? 'light' : 'dark')}
         className="w-[34px] h-[34px] rounded-lg border border-foreground/20 bg-transparent flex items-center justify-center text-foreground/70 hover:border-foreground hover:text-foreground hover:bg-foreground/5 transition-colors duration-150"
       >
         {(resolvedTheme ?? theme) === 'dark' ? (
           <Sun className="w-4 h-4" />
         ) : (
           <Moon className="w-4 h-4" />
         )}
       </button>
     ) : (
       <div className="w-[34px] h-[34px]" aria-hidden />
     )}

     <a
       href="/Corey_McNutt_Resume.pdf"
       target="_blank"
       rel="noopener noreferrer"
       className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-md text-[13px] font-semibold font-mono border border-foreground/20 hover:border-accent hover:text-accent transition-colors duration-150"
     >
       <Download className="w-3 h-3" />
       resume.pdf
     </a>
   </div>
   ```

The `hidden sm:inline-flex` keeps the resume button off mobile (where the hamburger handles it).

- [ ] **Step 2: Verify lint + build pass**

Run:
```bash
npm run lint && npm run build
```
Expected: both pass.

- [ ] **Step 3: Commit**

```bash
git add src/components/Navbar.tsx
git commit -m "feat(nav): add resume download button (desktop)

resume.pdf button on the right side, opens /Corey_McNutt_Resume.pdf
in a new tab. Hidden on mobile where the hamburger menu handles it."
```

---

## Task 7: Add mobile hamburger menu

**Files:**
- Modify: `src/components/Navbar.tsx`

- [ ] **Step 1: Add hamburger button + slide-down panel**

In `src/components/Navbar.tsx`:

1. Add `Menu` and `X` to the lucide imports:
   ```tsx
   import { Sun, Moon, Download, Menu, X } from 'lucide-react';
   ```

2. Add menu open state inside the function:
   ```tsx
   const [menuOpen, setMenuOpen] = useState(false);
   ```

3. Close the menu when the route changes (add this useEffect):
   ```tsx
   useEffect(() => {
     setMenuOpen(false);
   }, [pathname]);
   ```

4. Add Escape-to-close + body scroll lock:
   ```tsx
   useEffect(() => {
     if (!menuOpen) return;
     const onKey = (e: KeyboardEvent) => {
       if (e.key === 'Escape') setMenuOpen(false);
     };
     document.addEventListener('keydown', onKey);
     document.body.style.overflow = 'hidden';
     return () => {
       document.removeEventListener('keydown', onKey);
       document.body.style.overflow = '';
     };
   }, [menuOpen]);
   ```

5. Add the hamburger button **inside** the right-side `<div className="flex items-center gap-2">`, **after** the resume `<a>`:
   ```tsx
   <button
     type="button"
     aria-label={menuOpen ? 'Close menu' : 'Open menu'}
     aria-expanded={menuOpen}
     onClick={() => setMenuOpen((v) => !v)}
     className="sm:hidden w-[34px] h-[34px] rounded-lg border border-foreground/20 bg-transparent flex items-center justify-center text-foreground/70 hover:border-foreground hover:text-foreground hover:bg-foreground/5 transition-colors duration-150"
   >
     {menuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
   </button>
   ```

6. Add the slide-down mobile panel as a sibling **after** the inner `<div className="max-w-[1100px] ...">` div, but **inside** the `<header>`:
   ```tsx
   {/* Mobile slide-down panel */}
   <div
     className={`sm:hidden absolute top-[60px] left-0 right-0 origin-top transition-transform duration-200 ease-out ${
       menuOpen ? 'translate-y-0' : '-translate-y-[120%]'
     } bg-[rgba(255,255,255,0.95)] dark:bg-[rgba(10,10,10,0.95)] backdrop-blur-[12px] border-b border-[rgba(23,23,23,0.1)] dark:border-[rgba(237,237,237,0.08)] shadow-[0_8px_24px_rgba(0,0,0,0.2)]`}
   >
     <nav className="flex flex-col px-8 py-2">
       {NAV_LINKS.map(({ href, label }) => {
         const active = isActive(pathname, href);
         return (
           <Link
             key={href}
             href={href}
             className={`py-4 text-base font-medium border-b border-foreground/5 last:border-b-0 ${
               active ? 'text-foreground' : 'text-foreground/70'
             }`}
           >
             {label}
           </Link>
         );
       })}
       <a
         href="/Corey_McNutt_Resume.pdf"
         target="_blank"
         rel="noopener noreferrer"
         className="py-4 text-base font-medium font-mono text-foreground/70 inline-flex items-center gap-2"
       >
         <Download className="w-4 h-4" />
         resume.pdf
       </a>
     </nav>
   </div>
   ```

The panel is `absolute` and anchored under the 60px header. It uses `translate-y` for the slide animation. The route-change `useEffect` (added above) closes the panel when a link is selected.

- [ ] **Step 2: Verify lint + build pass**

Run:
```bash
npm run lint && npm run build
```
Expected: both pass.

- [ ] **Step 3: Commit**

```bash
git add src/components/Navbar.tsx
git commit -m "feat(nav): add mobile hamburger menu

Below sm: breakpoint, shows a hamburger button on the right that
opens a slide-down panel with stacked nav links + resume. Closes on
route change, Escape key, or selecting a link. Body scroll locks
while open."
```

---

## Task 8: Mount Navbar in root layout

**Files:**
- Modify: `src/app/layout.tsx`

- [ ] **Step 1: Import and render Navbar**

In `src/app/layout.tsx`:

1. Add import after the other imports:
   ```tsx
   import Navbar from '@/components/Navbar';
   ```

2. Render `<Navbar />` inside `ThemeProvider`, **before** `{children}`:
   ```tsx
   <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
     <Navbar />
     {children}
   </ThemeProvider>
   ```

- [ ] **Step 2: Verify build passes**

Run:
```bash
npm run lint && npm run build
```
Expected: both pass.

- [ ] **Step 3: Visual smoke test**

Run:
```bash
npm run dev
```

Open http://localhost:3000. Verify:
- Nav bar visible at top of homepage, transparent over the hero
- Scrolling past ~20px → blurred-glass background appears
- Theme toggle button visible on the right; clicking it flips dark ↔ light
- Resume button visible on desktop (hidden on mobile)
- Resize browser to <640px width → hamburger appears, center links hide
- Click hamburger → slide-down panel; click a link → panel closes, route changes
- Navigate to `/projects` → "Projects" link is highlighted
- No console errors or hydration warnings

Stop dev server when done.

- [ ] **Step 4: Commit**

```bash
git add src/app/layout.tsx
git commit -m "feat(nav): mount Navbar globally in root layout

Renders Navbar inside ThemeProvider so the theme toggle has access
to the theme context. Now appears on every route."
```

---

# Phase 3 — `/about` Page

## Task 9: Create `/about` route layout + page skeleton

**Files:**
- Create: `src/app/about/layout.tsx`
- Create: `src/app/about/page.tsx`

- [ ] **Step 1: Create the layout file**

Create `src/app/about/layout.tsx` with:

```tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About | Corey – Software Developer',
  description:
    'From the open road to the terminal — the story of a truck driver turned self-taught developer.',
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
```

- [ ] **Step 2: Create the page skeleton**

Create `src/app/about/page.tsx` with:

```tsx
export default function AboutPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 pt-[100px] pb-20">
      <p className="text-foreground/50">About page — sections coming.</p>
    </main>
  );
}
```

This is a placeholder that ensures routing works before we add sections.

- [ ] **Step 3: Verify build passes + route is reachable**

Run:
```bash
npm run build
```
Expected: builds successfully. Output should show `/about` as a route.

Run:
```bash
npm run dev
```
Visit http://localhost:3000/about → see the placeholder text under the nav bar. Stop dev server.

- [ ] **Step 4: Commit**

```bash
git add src/app/about/layout.tsx src/app/about/page.tsx
git commit -m "feat(about): scaffold /about route with metadata

Adds layout.tsx for metadata and page.tsx placeholder. Route resolves
correctly under the nav. Section components added in following tasks."
```

---

## Task 10: Build `SectionHeader` shared component

**Files:**
- Create: `src/components/about/SectionHeader.tsx`

- [ ] **Step 1: Create the file**

Create `src/components/about/SectionHeader.tsx` with:

```tsx
type Props = {
  icon: string;
  title: string;
};

export default function SectionHeader({ icon, title }: Props) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <div className="w-9 h-9 rounded-lg bg-accent/15 border border-accent/35 flex items-center justify-center text-base flex-shrink-0">
        {icon}
      </div>
      <h2 className="text-lg font-semibold">{title}</h2>
    </div>
  );
}
```

The `icon` prop is a string so callers pass emoji directly. Used by Backstory, Timeline, BJJ, and Skills sections.

- [ ] **Step 2: Verify lint + build pass**

Run:
```bash
npm run lint && npm run build
```
Expected: both pass.

- [ ] **Step 3: Commit**

```bash
git add src/components/about/SectionHeader.tsx
git commit -m "feat(about): add SectionHeader shared component

Reusable icon-in-square + h2 pattern used across the /about page
sections. Removes 4× repetition."
```

---

## Task 11: Build `IntroSection`

**Files:**
- Create: `src/components/about/IntroSection.tsx`

- [ ] **Step 1: Create the file**

Create `src/components/about/IntroSection.tsx` with:

```tsx
import Image from 'next/image';

export default function IntroSection() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-[1fr_160px] gap-10 items-start border-b border-foreground/10 pb-14 mb-14">
      {/* Left column */}
      <div>
        <p className="font-mono text-[11px] font-medium tracking-[0.1em] uppercase text-accent mb-4">
          // about me
        </p>
        <h1 className="text-4xl lg:text-5xl font-bold tracking-tight leading-[1.15] mb-5">
          From the open road to the terminal.
        </h1>
        <p className="text-[17px] leading-[1.75] text-foreground/70">
          I&apos;m <span className="font-semibold text-foreground">Corey</span>{' '}
          — a self-taught software developer based in the US. I spent years
          driving commercial auto haulers before teaching myself to code. Now I
          build the kind of software I wished existed when I was out on the
          road.
        </p>
      </div>

      {/* Right column — profile image with badge */}
      <div className="relative w-[160px] h-[160px] justify-self-start lg:justify-self-end">
        <Image
          src="/profile-picture.jpg"
          alt="Corey"
          width={160}
          height={160}
          className="w-[160px] h-[160px] rounded-2xl object-cover border border-foreground/20"
        />
        <span className="absolute bottom-[-10px] right-[-10px] bg-[oklch(0.18_0.08_240)] border border-[oklch(0.34_0.12_240)] rounded-[10px] px-2.5 py-1.5 font-mono text-[11px] font-medium text-[oklch(0.76_0.10_240)]">
          🟢 Open to work
        </span>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Verify lint + build pass**

Run:
```bash
npm run lint && npm run build
```
Expected: both pass.

- [ ] **Step 3: Commit**

```bash
git add src/components/about/IntroSection.tsx
git commit -m "feat(about): add IntroSection component

Two-column intro with bio on the left and profile image + Open-to-work
badge on the right. Stacks below lg breakpoint."
```

---

## Task 12: Build `StatsRow`

**Files:**
- Create: `src/components/about/StatsRow.tsx`

- [ ] **Step 1: Create the file**

Create `src/components/about/StatsRow.tsx` with:

```tsx
const STATS = [
  { value: '3', suffix: '+', label: 'years on the road' },
  { value: '2', suffix: 'nd', label: 'hackathon finish' },
  { value: '5', suffix: '+', label: 'shipped projects' },
];

export default function StatsRow() {
  return (
    <section className="grid grid-cols-3 gap-px bg-foreground/10 rounded-xl overflow-hidden mb-14">
      {STATS.map(({ value, suffix, label }) => (
        <div
          key={label}
          className="bg-background px-6 py-5 text-center"
        >
          <div className="text-[28px] font-bold font-mono">
            {value}
            <span className="text-accent">{suffix}</span>
          </div>
          <div className="text-[12px] font-mono tracking-[0.04em] text-foreground/50 mt-1">
            {label}
          </div>
        </div>
      ))}
    </section>
  );
}
```

The `gap-px` + parent background trick draws hairline dividers between cells.

- [ ] **Step 2: Verify lint + build pass**

Run:
```bash
npm run lint && npm run build
```
Expected: both pass.

- [ ] **Step 3: Commit**

```bash
git add src/components/about/StatsRow.tsx
git commit -m "feat(about): add StatsRow component

3-cell stats grid: years on road, hackathon finish, shipped projects.
Uses gap-px + parent bg trick for hairline dividers between cells."
```

---

## Task 13: Build `BackstorySection`

**Files:**
- Create: `src/components/about/BackstorySection.tsx`

- [ ] **Step 1: Create the file**

Create `src/components/about/BackstorySection.tsx` with:

```tsx
import SectionHeader from './SectionHeader';

export default function BackstorySection() {
  return (
    <section className="mb-14">
      <SectionHeader icon="🚛" title="The backstory" />

      <div className="space-y-5 text-[15px] leading-[1.75] text-foreground/70">
        <p>
          I drove car haulers locally — 18-wheelers loaded with 7–9 cars,
          running routes in and around my area. More loads per day, tighter
          turnarounds, and logistics problems that nobody had built good
          software for. I started teaching myself to code because I wanted to
          solve those problems myself.
        </p>
        <p>
          What started as curiosity turned into obsession. I spent nights and
          weekends learning TypeScript, React, and Next.js. I built my first
          real project —{' '}
          <span className="font-semibold text-foreground">
            Car Hauler Platform
          </span>{' '}
          — to prove I could ship something real. Then I took it to a
          hackathon, got assigned a team, and we won 2nd place.
        </p>
      </div>

      <div className="bg-accent/15 border border-accent/35 rounded-xl px-6 py-5 text-[15px] leading-[1.7] text-[oklch(0.82_0.06_240)] mt-6">
        <span className="font-semibold text-foreground">
          The domain expertise is real.
        </span>{' '}
        I didn&apos;t build a generic logistics app from a tutorial. I built
        software I understood from the inside — the kind of load planning,
        safety compliance, and operational constraints that don&apos;t show up
        in any spec doc unless you&apos;ve lived them. That&apos;s a different
        kind of developer.
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Verify lint + build pass**

Run:
```bash
npm run lint && npm run build
```
Expected: both pass.

- [ ] **Step 3: Commit**

```bash
git add src/components/about/BackstorySection.tsx
git commit -m "feat(about): add BackstorySection component

Two paragraphs of origin story + accent callout block emphasizing
domain expertise."
```

---

## Task 14: Build `TimelineSection`

**Files:**
- Create: `src/components/about/TimelineSection.tsx`

- [ ] **Step 1: Create the file**

Create `src/components/about/TimelineSection.tsx` with:

```tsx
import SectionHeader from './SectionHeader';

type DotColor = 'plain' | 'accent' | 'gold';

const TIMELINE: Array<{
  year: string;
  dot: DotColor;
  title: string;
  desc: string;
}> = [
  {
    year: '2021',
    dot: 'plain',
    title: 'Commercial truck driver',
    desc: 'Started running local auto hauling routes. Learned discipline, logistics, and how to stay calm when everything goes sideways.',
  },
  {
    year: '2023',
    dot: 'accent',
    title: 'Started teaching myself to code',
    desc: 'TypeScript, React, Next.js — learning in the margins. Built small projects to understand the fundamentals.',
  },
  {
    year: '2024',
    dot: 'accent',
    title: 'Shipped Car Hauler Platform',
    desc: 'Full-stack logistics app. Solo project that evolved into a hackathon entry — and won 2nd place competing against experienced teams.',
  },
  {
    year: '2025–now',
    dot: 'gold',
    title: 'Building in public, looking for a team',
    desc: 'Shipping Height Table, iterating on the portfolio, and actively looking for my first professional dev role.',
  },
];

function dotClasses(color: DotColor): { ring: string; fill: string | null } {
  switch (color) {
    case 'plain':
      return { ring: 'border-foreground/20', fill: null };
    case 'accent':
      return { ring: 'border-accent', fill: 'bg-accent' };
    case 'gold':
      return { ring: 'border-gold', fill: 'bg-gold' };
  }
}

export default function TimelineSection() {
  return (
    <section className="mb-14">
      <SectionHeader icon="📍" title="How I got here" />

      <ol className="relative pl-7 before:absolute before:left-[7px] before:top-2 before:bottom-2 before:w-px before:bg-foreground/10 space-y-7">
        {TIMELINE.map(({ year, dot, title, desc }) => {
          const { ring, fill } = dotClasses(dot);
          return (
            <li key={year} className="relative">
              <div
                className={`w-3.5 h-3.5 rounded-full bg-background border-2 ${ring} absolute left-[-24px] top-1 flex items-center justify-center`}
              >
                {fill && (
                  <div className={`w-1.5 h-1.5 rounded-full ${fill}`} />
                )}
              </div>
              <div className="font-mono text-[11px] text-foreground/50 tracking-[0.06em] mb-1">
                {year}
              </div>
              <div className="text-[15px] font-semibold mb-1">{title}</div>
              <div className="text-sm text-foreground/50 leading-relaxed">
                {desc}
              </div>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
```

- [ ] **Step 2: Verify lint + build pass**

Run:
```bash
npm run lint && npm run build
```
Expected: both pass.

- [ ] **Step 3: Commit**

```bash
git add src/components/about/TimelineSection.tsx
git commit -m "feat(about): add TimelineSection component

Four-item vertical timeline: 2021 truck driver, 2023 self-teaching,
2024 Car Hauler hackathon, 2025-now job hunt. Uses CSS pseudo-element
for the vertical line and ring/fill dot styles per timeline phase."
```

---

## Task 15: Build `BJJSection`

**Files:**
- Create: `src/components/about/BJJSection.tsx`

- [ ] **Step 1: Create the file**

Create `src/components/about/BJJSection.tsx` with:

```tsx
import SectionHeader from './SectionHeader';

export default function BJJSection() {
  return (
    <section className="mb-14">
      <SectionHeader icon="🥋" title="Off the mat, on the keyboard" />

      <div className="flex items-center gap-4 px-5 py-4 bg-foreground/5 border border-foreground/10 rounded-xl my-5">
        {/* Belt */}
        <div
          className="relative w-20 h-[18px] rounded-sm overflow-hidden flex-shrink-0"
          style={{ background: '#1a0a00' }}
        >
          <div
            className="absolute right-0 top-0 bottom-0 w-3.5"
            style={{ background: '#d4af37' }}
          />
        </div>
        <div>
          <div className="text-sm font-semibold font-mono">
            Brazilian Jiu-Jitsu — Black Belt
          </div>
          <div className="text-xs text-foreground/50">10+ years training</div>
        </div>
      </div>

      <div className="space-y-5 text-[15px] leading-[1.75] text-foreground/70">
        <p>
          BJJ has a saying:{' '}
          <em>&ldquo;A black belt is a white belt who never quit.&rdquo;</em> I
          think about that a lot when I&apos;m debugging something I don&apos;t
          understand yet. The mat taught me that patience isn&apos;t passive —
          it&apos;s the discipline to keep showing up and grinding through
          problems that don&apos;t have quick answers.
        </p>
        <p>
          Rolling with higher belts when you&apos;re a beginner is humbling in
          exactly the right way. You learn to be comfortable not knowing, to
          fail fast, and to always ask <em>why</em> something didn&apos;t work.
          That&apos;s the same mindset I bring to code.
        </p>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Verify lint + build pass**

Run:
```bash
npm run lint && npm run build
```
Expected: both pass.

- [ ] **Step 3: Commit**

```bash
git add src/components/about/BJJSection.tsx
git commit -m "feat(about): add BJJSection component

Belt visual (black with gold tip) + black-belt label + 2 paragraphs
on how BJJ mindset translates to coding."
```

---

## Task 16: Build `SkillsSection`

**Files:**
- Create: `src/components/about/SkillsSection.tsx`

- [ ] **Step 1: Create the file**

Create `src/components/about/SkillsSection.tsx` with:

```tsx
import SectionHeader from './SectionHeader';

const SKILLS = [
  'TypeScript',
  'JavaScript',
  'C#',
  'ASP.NET Core',
  'React',
  'Next.js',
  'Node.js',
  'Tailwind CSS',
  'PostgreSQL',
  'MongoDB',
  'Supabase',
  'Neon',
  'Claude AI',
  'Git',
  'GitHub',
];

export default function SkillsSection() {
  return (
    <section className="mb-14">
      <SectionHeader icon="⚙️" title="What I work with" />

      <p className="text-[15px] leading-[1.75] text-foreground/70">
        I lean into{' '}
        <span className="font-semibold text-foreground">AI tools</span> to move
        faster — Claude, Cursor, and whatever helps me ship better work.
        It&apos;s changed how I prototype and debug.
      </p>

      <div className="flex flex-wrap gap-2 mt-4">
        {SKILLS.map((skill) => (
          <span
            key={skill}
            className="px-3 py-1.5 rounded-md text-xs font-mono bg-[oklch(0.16_0.03_240)] text-[oklch(0.72_0.08_240)] border border-[oklch(0.26_0.05_240)]"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Verify lint + build pass**

Run:
```bash
npm run lint && npm run build
```
Expected: both pass.

- [ ] **Step 3: Commit**

```bash
git add src/components/about/SkillsSection.tsx
git commit -m "feat(about): add SkillsSection component

AI tools intro + 15 skill tag chips (TypeScript through GitHub) in
flex-wrap layout."
```

---

## Task 17: Build `AvailabilityCTA`

**Files:**
- Create: `src/components/about/AvailabilityCTA.tsx`

- [ ] **Step 1: Create the file**

Create `src/components/about/AvailabilityCTA.tsx` with:

```tsx
import { Download } from 'lucide-react';
import Button from '@/components/ui/Button';

export default function AvailabilityCTA() {
  return (
    <section className="mt-12">
      <div className="flex items-start gap-3 px-5 py-4 bg-[oklch(0.13_0.04_145/0.3)] border border-[oklch(0.35_0.10_145/0.4)] rounded-xl">
        <span className="inline-flex items-center gap-2 text-sm font-semibold text-foreground">
          <span className="w-2 h-2 rounded-full bg-green animate-pulse inline-block flex-shrink-0" />
          Available for new opportunities.
        </span>
        <span className="text-sm text-[oklch(0.80_0.10_145)]">
          Looking for a team that builds real things and isn&apos;t afraid of
          someone who came up a different way.
        </span>
      </div>

      <div className="flex gap-3 flex-wrap mt-5">
        <Button href="/Corey_McNutt_Resume.pdf" variant="primary">
          <Download className="w-4 h-4 mr-2" />
          Download Resume
        </Button>
        <Button href="/projects" variant="secondary">
          View My Projects →
        </Button>
      </div>
    </section>
  );
}
```

Note: the existing `<Button>` component (`src/components/ui/Button.tsx`) supports `href` and renders a `Link`. The Resume button renders as a `Link` to a PDF, which Next.js will treat as an internal navigation. If we need it to open in a new tab, we'd have to extend the Button component — for now this matches the spec, and the user can refine later if desired.

- [ ] **Step 2: Verify lint + build pass**

Run:
```bash
npm run lint && npm run build
```
Expected: both pass.

- [ ] **Step 3: Commit**

```bash
git add src/components/about/AvailabilityCTA.tsx
git commit -m "feat(about): add AvailabilityCTA component

Green availability bar with pulsing dot + Resume / View Projects
buttons using existing Button component."
```

---

## Task 18: Compose all sections in `/about` page

**Files:**
- Modify: `src/app/about/page.tsx`

- [ ] **Step 1: Replace placeholder with full page composition**

Replace the contents of `src/app/about/page.tsx` with:

```tsx
import IntroSection from '@/components/about/IntroSection';
import StatsRow from '@/components/about/StatsRow';
import BackstorySection from '@/components/about/BackstorySection';
import TimelineSection from '@/components/about/TimelineSection';
import BJJSection from '@/components/about/BJJSection';
import SkillsSection from '@/components/about/SkillsSection';
import AvailabilityCTA from '@/components/about/AvailabilityCTA';

export default function AboutPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 pt-[100px] pb-20">
      <IntroSection />
      <StatsRow />
      <BackstorySection />
      <TimelineSection />
      <hr className="border-t border-foreground/10 my-14" />
      <BJJSection />
      <hr className="border-t border-foreground/10 my-14" />
      <SkillsSection />
      <AvailabilityCTA />
    </main>
  );
}
```

- [ ] **Step 2: Verify build passes**

Run:
```bash
npm run lint && npm run build
```
Expected: both pass.

- [ ] **Step 3: Visual smoke test**

Run:
```bash
npm run dev
```

Visit http://localhost:3000/about. Verify:
- Page loads, all 7 sections render in order
- Intro: profile image + Open-to-work badge visible to the right (or stacked on mobile)
- Stats: 3 cells with hairline dividers between them
- Backstory: 2 paragraphs + accent callout
- Timeline: 4 items, vertical line on the left, dots in plain/accent/accent/gold
- BJJ: black belt visual with gold tip + 2 paragraphs
- Skills: 15 tag chips in flex-wrap
- Availability bar at the bottom + 2 CTA buttons
- Toggling theme dark ↔ light still looks correct
- No console errors

Stop dev server when done.

- [ ] **Step 4: Commit**

```bash
git add src/app/about/page.tsx
git commit -m "feat(about): compose all section components in /about page

Replaces the placeholder page with the full About story:
Intro → Stats → Backstory → Timeline → BJJ → Skills → Availability."
```

---

# Phase 4 — Homepage About Teaser

## Task 19: Create `AboutTeaser` component

**Files:**
- Create: `src/components/AboutTeaser.tsx`

- [ ] **Step 1: Create the file**

Create `src/components/AboutTeaser.tsx` with:

```tsx
import Button from './ui/Button';

export default function AboutTeaser() {
  return (
    <section className="max-w-3xl mx-auto px-6 py-16 text-center">
      <p className="font-mono text-[11px] font-medium tracking-[0.1em] uppercase text-accent mb-4">
        // about me
      </p>
      <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-5">
        From the open road to the terminal.
      </h2>
      <p className="text-[17px] leading-[1.75] text-foreground/70 max-w-xl mx-auto mb-8">
        I&apos;m Corey — a self-taught software developer who spent years
        driving auto haulers before teaching myself to code. Now I build the
        kind of software I wished existed when I was out on the road.
      </p>
      <Button href="/about" variant="secondary">
        Read the full story →
      </Button>
    </section>
  );
}
```

- [ ] **Step 2: Verify lint + build pass**

Run:
```bash
npm run lint && npm run build
```
Expected: both pass.

- [ ] **Step 3: Commit**

```bash
git add src/components/AboutTeaser.tsx
git commit -m "feat(home): add AboutTeaser component

Short bio snippet + Read-the-full-story link to /about. Replaces the
rich About component on the homepage. Uses the same // about me label
and headline as /about for visual handoff."
```

---

## Task 20: Swap `<About />` for `<AboutTeaser />` on homepage; delete old `About.tsx`

**Files:**
- Modify: `src/app/page.tsx`
- Delete: `src/components/About.tsx`

- [ ] **Step 1: Update homepage import + render**

Replace the contents of `src/app/page.tsx` with:

```tsx
import Hero from '@/components/Hero';
import AboutTeaser from '@/components/AboutTeaser';
import CallToAction from '@/components/CallToAction';
import ContactModal from '@/components/ContactModal';

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutTeaser />
      <CallToAction />
      <ContactModal />
    </main>
  );
}
```

- [ ] **Step 2: Delete the old `About.tsx` file**

Run:
```bash
rm src/components/About.tsx
```

- [ ] **Step 3: Verify lint + build pass**

Run:
```bash
npm run lint && npm run build
```
Expected: both pass. No references to the old `About` component remain.

If build complains about missing `About` import, search for stray references:
```bash
grep -rn "from '@/components/About'" src
```
Expected: no output.

- [ ] **Step 4: Visual smoke test**

Run:
```bash
npm run dev
```

Visit http://localhost:3000. Verify:
- Homepage shows Hero → AboutTeaser → CallToAction → ContactModal
- AboutTeaser is centered, narrower than the old About
- "Read the full story →" button navigates to `/about`
- Nav bar still works on home

Stop dev server when done.

- [ ] **Step 5: Commit**

```bash
git add src/app/page.tsx src/components/About.tsx
git commit -m "feat(home): replace About with AboutTeaser; delete old About

Homepage now shows a short bio teaser linking to /about, where the
full origin story lives. Removes the rich About component file —
git history preserves it if needed."
```

---

## Task 21: Final cross-page verification

**Files:** none (verification only)

- [ ] **Step 1: Build clean from scratch**

Run:
```bash
rm -rf .next
npm run build
```
Expected: clean build with no errors. Output should list the routes:
- `/` (Home)
- `/about` (About)
- `/projects` (Projects index)
- `/projects/[slug]` (project detail)

- [ ] **Step 2: Run dev and walk through every route**

Run:
```bash
npm run dev
```

Visit each in order, checking the items below:

**`/` (homepage):**
- Nav transparent at top, blurs when scrolled past hero
- AboutTeaser shows, "Read the full story →" link works
- Theme toggle works; preference persists on reload

**`/projects`:**
- Nav active link highlights "Projects"
- Page renders with no theme-related visual regressions
- Carousel + featured project still look right with new oklch accent

**`/about`:**
- Nav active link highlights "About"
- All 7 sections render in order
- Theme toggle still works
- Mobile (resize <640px): hamburger appears; tap → slide panel; tapping a link closes panel and navigates

**`/projects/[slug]` (visit any individual project):**
- Page renders, accent color present where expected
- No regressions

- [ ] **Step 3: Console check**

Open DevTools console on `/`, `/about`, `/projects`. Expected: no errors, no hydration warnings.

- [ ] **Step 4: Mobile DevTools simulation**

In Chrome DevTools, toggle device toolbar → iPhone size. Verify:
- Hamburger appears on all pages
- Slide-down panel works
- About page sections stack correctly
- Stats row still readable

Stop dev server.

- [ ] **Step 5: Commit (if any tweaks were needed)**

If you made any adjustments during verification, commit them with a focused message. If everything checks out clean, no commit needed for this task.

---

## Done Criteria

- ✅ `npm run lint && npm run build` both pass with zero errors
- ✅ Nav bar visible on every route, with working scroll-blur, theme toggle, resume link, and mobile hamburger
- ✅ `/about` page renders all 7 sections in order
- ✅ Homepage shows AboutTeaser instead of the old About; old `About.tsx` is deleted
- ✅ Theme toggle persists across reloads and works site-wide
- ✅ No console errors or hydration warnings on any page
- ✅ Mobile (≤640px) layout works on all pages
