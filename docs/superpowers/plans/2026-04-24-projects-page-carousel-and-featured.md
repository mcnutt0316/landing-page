# Projects Page — Carousel Crossfade & Featured Restyle Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the hard-cut carousel with a smooth crossfade + hover-reveal arrows, and restyle the featured project (Car Hauler) block with a dark-blue branded shell.

**Architecture:** Two-file change in the existing Next.js 15 / React 19 / Tailwind v4 codebase. `ProjectCarousel.tsx` is rewritten as a drop-in replacement (same props). The featured block in `projects/page.tsx` is restyled inline — kept in the same file rather than extracted to avoid premature abstraction. Adds one dependency (`lucide-react`) for icons.

**Tech Stack:** Next.js 15, React 19, TypeScript, Tailwind CSS v4, lucide-react.

**Spec:** `docs/superpowers/specs/2026-04-24-projects-page-carousel-and-featured-design.md`

**Note on testing:** This project has no test framework installed (no Jest, Vitest, Playwright). Verification is via `npm run lint`, `npm run build`, and manual visual inspection in `npm run dev`. Each task includes a manual verification checklist instead of automated assertions.

---

## File Map

| File | Action | Responsibility |
|---|---|---|
| `package.json` / `package-lock.json` | Modify | Add `lucide-react` dependency |
| `src/components/ProjectCarousel.tsx` | Rewrite (~50 lines) | Stacked-image crossfade carousel + hover-reveal nav arrows |
| `src/app/projects/page.tsx` | Modify featured block (~lines 15–85) | Apply dark-blue shell, accent bar, badges, stats, branded pills, icon CTAs to the featured project block. Other-projects grid + bottom CTA unchanged. |

---

## Task 1: Install lucide-react

**Files:**
- Modify: `package.json`, `package-lock.json`

- [ ] **Step 1: Install the package**

Run:
```bash
npm install lucide-react
```

Expected: `lucide-react` appears in `dependencies` in `package.json`. No errors. Should be a single small dep (~per-icon tree-shakeable).

- [ ] **Step 2: Verify install**

Run:
```bash
grep '"lucide-react"' package.json
```

Expected output: a line like `"lucide-react": "^0.x.x",` under `dependencies`.

- [ ] **Step 3: Sanity-check that imports resolve**

Run:
```bash
npx tsc --noEmit
```

Expected: completes with no errors (no code uses lucide yet, but this confirms the install didn't break the type checker).

- [ ] **Step 4: Commit**

```bash
git add package.json package-lock.json
git commit -m "chore: install lucide-react for icon components"
```

---

## Task 2: Rewrite ProjectCarousel with crossfade and hover arrows

**Files:**
- Modify: `src/components/ProjectCarousel.tsx` (full rewrite)

- [ ] **Step 1: Replace the entire file contents**

Overwrite `src/components/ProjectCarousel.tsx` with:

```tsx
"use client";
import React, { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ProjectCarouselProps {
    images: string[];
    projectTitle: string;
}

export default function ProjectCarousel({ images, projectTitle }: ProjectCarouselProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    const goTo = useCallback(
        (next: number) => {
            setCurrentIndex(((next % images.length) + images.length) % images.length);
        },
        [images.length]
    );

    useEffect(() => {
        if (isPaused) return;
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, 3500);
        return () => clearInterval(interval);
    }, [isPaused, images.length]);

    return (
        <div
            className="group relative aspect-video overflow-hidden rounded-lg bg-foreground/10"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            {/* Stacked slides — only the active one is opaque */}
            {images.map((src, i) => (
                <div
                    key={src}
                    className={`absolute inset-0 transition-opacity duration-[600ms] ease-[cubic-bezier(0.4,0,0.2,1)] ${
                        i === currentIndex ? "opacity-100" : "opacity-0"
                    }`}
                >
                    <Image
                        src={src}
                        alt={projectTitle}
                        fill
                        className="object-cover"
                        priority={i === 0}
                    />
                </div>
            ))}

            {/* Hover-reveal nav arrows */}
            <button
                type="button"
                onClick={() => goTo(currentIndex - 1)}
                aria-label="Previous slide"
                className="absolute top-1/2 left-2.5 -translate-y-1/2 grid place-items-center w-8 h-8 rounded-full bg-black/45 border border-white/15 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-black/70 z-10"
            >
                <ChevronLeft className="w-3.5 h-3.5" strokeWidth={2.5} />
            </button>
            <button
                type="button"
                onClick={() => goTo(currentIndex + 1)}
                aria-label="Next slide"
                className="absolute top-1/2 right-2.5 -translate-y-1/2 grid place-items-center w-8 h-8 rounded-full bg-black/45 border border-white/15 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-black/70 z-10"
            >
                <ChevronRight className="w-3.5 h-3.5" strokeWidth={2.5} />
            </button>

            {/* Dot indicators (active is a wider pill) */}
            <div className="absolute bottom-3.5 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                {images.map((_, i) => (
                    <button
                        key={i}
                        type="button"
                        onClick={() => setCurrentIndex(i)}
                        aria-label={`Go to slide ${i + 1}`}
                        className={`h-1.5 rounded-full transition-[width,background-color] duration-300 ${
                            i === currentIndex ? "w-[22px] bg-white" : "w-1.5 bg-white/45 hover:bg-white/70"
                        }`}
                    />
                ))}
            </div>
        </div>
    );
}
```

- [ ] **Step 2: Type-check and lint**

Run:
```bash
npx tsc --noEmit && npm run lint
```

Expected: both complete with no errors.

- [ ] **Step 3: Manual visual verification**

Run:
```bash
npm run dev
```

Then open `http://localhost:3000/projects` and verify:
- [ ] Images crossfade smoothly (no hard cut) every ~3.5 seconds.
- [ ] Hovering the carousel pauses the auto-advance.
- [ ] Hovering the carousel reveals left/right arrow buttons; clicking them advances/rewinds the slide.
- [ ] Dot indicators: inactive dots are small circles, the active one is a wider white pill.
- [ ] Clicking a dot jumps to that slide.
- [ ] No console errors in the browser devtools.

Stop the dev server (`Ctrl+C`) when done.

- [ ] **Step 4: Commit**

```bash
git add src/components/ProjectCarousel.tsx
git commit -m "feat(carousel): crossfade transition and hover-reveal nav arrows"
```

---

## Task 3: Restyle the featured project block

**Files:**
- Modify: `src/app/projects/page.tsx` (replace the featured-project `<section>` only — lines covering `{featuredProject && (... )}`)

- [ ] **Step 1: Add the lucide imports at the top of the file**

In `src/app/projects/page.tsx`, find the existing import block at the top:

```tsx
"use client";

import { projects } from "@/data/projects";
import ProjectCarousel from "@/components/ProjectCarousel";
import { useContactModal } from "@/store/useContactModal";
```

Replace it with:

```tsx
"use client";

import { ExternalLink, Video } from "lucide-react";
import { projects } from "@/data/projects";
import ProjectCarousel from "@/components/ProjectCarousel";
import { useContactModal } from "@/store/useContactModal";
```

- [ ] **Step 2: Replace the entire featured-project section**

In the same file, find the block:

```tsx
      {/* Featured Project */}
      {featuredProject && (
        <section>
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-foreground mb-2">Featured Project</h2>
            <p className="text-foreground/70">My latest and most comprehensive work</p>
          </div>
          
          <div className="bg-foreground/5 rounded-xl p-6 lg:p-8 hover:bg-foreground/[0.07] transition-colors duration-200">
            ...
          </div>
        </section>
      )}
```

Replace the **entire** `{featuredProject && ( ... )}` block (everything from `{/* Featured Project */}` through its closing `)}`) with:

```tsx
      {/* Featured Project */}
      {featuredProject && (
        <section>
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-foreground mb-2">Featured Project</h2>
            <p className="text-foreground/70">My latest and most comprehensive work</p>
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-[oklch(0.30_0.10_240)] bg-[oklch(0.18_0.08_240)]">
            {/* Gradient accent bar across the top */}
            <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-[oklch(0.52_0.18_240)] to-[oklch(0.75_0.16_80)]" />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center p-10">
              <div className="space-y-5">
                {/* Badge row */}
                <div className="flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-semibold uppercase tracking-[0.04em] bg-[oklch(0.42_0.18_240/0.3)] text-[oklch(0.76_0.10_240)] border border-[oklch(0.42_0.18_240/0.4)]">
                    ★ Featured
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-semibold uppercase tracking-[0.04em] bg-[oklch(0.75_0.16_80/0.15)] text-[oklch(0.80_0.14_80)] border border-[oklch(0.75_0.16_80/0.35)]">
                    🏆 Hackathon 2nd Place
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-semibold uppercase tracking-[0.04em] bg-[oklch(0.35_0.10_145/0.3)] text-[oklch(0.75_0.14_145)] border border-[oklch(0.35_0.10_145/0.4)]">
                    {featuredProject.status === "completed" ? "Completed" : "In Progress"}
                  </span>
                </div>

                {/* Title + description */}
                <div className="space-y-3">
                  <h3 className="text-3xl font-bold text-white leading-tight">
                    {featuredProject.title}
                  </h3>
                  <p className="text-[15px] leading-relaxed text-[oklch(0.72_0.02_240)]">
                    {featuredProject.description}
                  </p>
                </div>

                {/* Stats row */}
                <div className="flex gap-6 px-4 py-3 rounded-lg border border-[oklch(0.28_0.06_240)] bg-[oklch(0.16_0.04_240)]">
                  <div>
                    <div className="text-[11px] uppercase tracking-[0.07em] text-[oklch(0.5_0.05_240)] mb-0.5">Duration</div>
                    <div className="text-sm font-semibold font-mono text-white">{featuredProject.metadata.duration}</div>
                  </div>
                  <div>
                    <div className="text-[11px] uppercase tracking-[0.07em] text-[oklch(0.5_0.05_240)] mb-0.5">Team Size</div>
                    <div className="text-sm font-semibold font-mono text-white">{featuredProject.metadata.team_size} devs</div>
                  </div>
                  <div>
                    <div className="text-[11px] uppercase tracking-[0.07em] text-[oklch(0.5_0.05_240)] mb-0.5">Status</div>
                    <div className="text-sm font-semibold font-mono text-white">Live</div>
                  </div>
                </div>

                {/* Tech pills */}
                <div className="flex flex-wrap gap-1.5">
                  {featuredProject.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="inline-flex items-center rounded-md px-3 py-1 text-xs font-mono whitespace-nowrap bg-[oklch(0.28_0.06_240)] text-[oklch(0.76_0.10_240)] border border-[oklch(0.34_0.09_240)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  {featuredProject.links.demo && (
                    <a
                      href={featuredProject.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-6 py-2 text-sm font-semibold rounded-lg bg-accent text-accent-foreground hover:bg-accent/90 transition-colors duration-200"
                    >
                      <ExternalLink className="w-3.5 h-3.5" strokeWidth={2.5} />
                      Live Demo
                    </a>
                  )}
                  {featuredProject.links.case_study && (
                    <a
                      href={featuredProject.links.case_study}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-6 py-2 text-sm font-medium rounded-lg border border-white/20 text-white hover:bg-white/5 transition-colors duration-200"
                    >
                      <Video className="w-3.5 h-3.5" strokeWidth={2} />
                      Case Study Video
                    </a>
                  )}
                </div>
              </div>

              <ProjectCarousel
                images={[
                  featuredProject.images.hero,
                  ...featuredProject.images.gallery,
                  featuredProject.images.thumbnail,
                ]}
                projectTitle={featuredProject.title}
              />
            </div>
          </div>
        </section>
      )}
```

Note three things this change does compared to the old code:
1. Image order for the featured carousel switched from `[hero, thumbnail, ...gallery]` to `[hero, ...gallery, thumbnail]` (per spec).
2. The secondary CTA now uses `links.case_study` instead of `links.github` — and only renders when present.
3. The "🏆 Hackathon 2nd Place" badge is hardcoded inline (it's specific to the featured slot — see spec rationale).

- [ ] **Step 3: Type-check and lint**

Run:
```bash
npx tsc --noEmit && npm run lint
```

Expected: both complete with no errors.

- [ ] **Step 4: Production build sanity check**

Run:
```bash
npm run build
```

Expected: build succeeds with no errors. (Warnings about image dimensions or similar are okay; errors are not.)

- [ ] **Step 5: Manual visual verification**

Run:
```bash
npm run dev
```

Open `http://localhost:3000/projects` and verify the featured Car Hauler block:
- [ ] Has a deep navy/blue shell with rounded corners and a thin gradient accent bar (blue → gold) at the very top.
- [ ] Shows three badges in a row: blue "★ Featured", gold "🏆 Hackathon 2nd Place", green "Completed".
- [ ] Title is large and white. Description is muted blue-white.
- [ ] Stats row appears as an inset darker panel showing **Duration: 3 months+ · Team Size: 4 devs · Status: Live** with mono-font values.
- [ ] Tech pills are blue-tinted (not grey) with mono font.
- [ ] Primary "Live Demo" button has an external-link icon and opens the demo URL in a new tab.
- [ ] Secondary "Case Study Video" button has a video icon and opens the YouTube URL (`youtube.com/watch?v=dP5cNC95Ejk`) in a new tab.
- [ ] Carousel on the right shows the hero image first, crossfades smoothly, and reveals nav arrows on hover.
- [ ] Other-project cards below are unchanged.
- [ ] The "Interested in working together?" CTA at the bottom is unchanged.
- [ ] No console errors.
- [ ] Resize browser to ~700px wide: featured layout collapses to single column, badges wrap nicely.

Stop the dev server (`Ctrl+C`) when done.

- [ ] **Step 6: Commit**

```bash
git add src/app/projects/page.tsx
git commit -m "feat(projects): restyle featured project with branded blue shell"
```

---

## Task 4: Final verification pass

**Files:** none (verification only)

- [ ] **Step 1: Full lint and build**

Run:
```bash
npm run lint && npm run build
```

Expected: both pass clean. If build fails, fix the underlying issue and re-stage/re-commit before continuing.

- [ ] **Step 2: Final visual review**

Run:
```bash
npm run dev
```

Open `http://localhost:3000/projects` one more time and confirm both changes work together end-to-end:
- [ ] Featured block: dark blue shell, gradient bar, badges, stats, branded pills, icon-bearing CTAs all render as designed.
- [ ] Featured carousel: crossfades, hover arrows, hover-pause auto-advance.
- [ ] Other-project cards: unchanged but their carousels also crossfade and have hover arrows now (since they share the same component).
- [ ] No layout shift or flash on initial load.
- [ ] No console errors anywhere on the page.

Stop the dev server when done.

- [ ] **Step 3: Confirm no other files were unintentionally changed**

Run:
```bash
git status
```

Expected: working tree clean. If anything is uncommitted, review and either commit it (if intentional) or discard it (if accidental).

---

## Done

Both deliverables from the design handoff are now in `main`:

1. ✅ `ProjectCarousel.tsx` — opacity crossfade + hover-reveal nav arrows + slower 3.5s auto-advance.
2. ✅ Featured project block in `projects/page.tsx` — deep blue shell, gradient accent bar, three-badge row, stats panel, branded blue tech pills, icon-bearing CTAs (with the secondary now linking to the case-study video).

No data-shape changes, no new files, one new dependency (`lucide-react`).
