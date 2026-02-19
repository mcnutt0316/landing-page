# Car Hauler Mega-Project Enhancement Plan

## Overview
Transform the Car Hauler project into a showcase "mega-project" that displays all 3 related apps as sub-sections within one expanded project, telling the story of its evolution from prototype to hackathon winner to learning project.

## The 3 Sub-Projects

| Version | Stack | Status | Assets |
|---------|-------|--------|--------|
| **1. Next.js Prototype** | Next.js, React, TypeScript, Supabase | Deployed | Demo URL, images |
| **2. Hackathon Submission** | Team collaboration, presentation | 2nd Place Winner | Promo video (YouTube) |
| **3. React Native + ASP.NET** | React Native, C#, ASP.NET Core | Learning/Sandbox | Images, description only |

---

## Implementation Steps

### 1. Extend Type System
**File:** `src/types/Project.ts`

Add new interfaces:
- `SubProject` - individual version with its own title, description, technologies, links, images, status, role, team size
- `SubProjectStatus` - 'prototype' | 'hackathon-winner' | 'in-development' | 'learning'
- Add to `Project`: `isMegaProject`, `subProjects[]`, `projectStory`, `totalHoursInvested`

### 2. Update Car Hauler Data
**File:** `src/data/projects.ts`

Transform Car Hauler entry to include:
- `isMegaProject: true`
- `totalHoursInvested: "100-1000"`
- `projectStory` with journey narrative
- `subProjects` array with all 3 versions

### 3. Create MegaProject Components
**New directory:** `src/components/MegaProject/`

| Component | Purpose |
|-----------|---------|
| `MegaProjectHero.tsx` | Gradient hero with "Flagship Project" badge, hours invested, journey summary |
| `ProjectTimeline.tsx` | Vertical timeline showing evolution (Prototype → Hackathon → Mobile) |
| `SubProjectCard.tsx` | Card for each version with status badge, tech stack, description |
| `VideoEmbed.tsx` | YouTube embed for hackathon promo video |
| `StatusBadge.tsx` | Visual badges (Hackathon Winner, Learning, Deployed) |

### 4. Update Project Detail Page
**File:** `src/app/projects/[slug]/page.tsx`

Add conditional rendering:
```
if (project.isMegaProject) → render MegaProject layout
else → render standard layout
```

**MegaProject Layout:**
1. MegaProjectHero with gradient background
2. Project story/narrative section
3. Timeline showing project evolution
4. Sub-project cards in a grid
5. Embedded hackathon promo video
6. Combined highlights/challenges/lessons

### 5. Enhance Featured Section on Projects Page
**File:** `src/app/projects/page.tsx`

Make Car Hauler stand out:
- Full-width "Flagship Project" treatment
- Gradient border/background
- Mini-timeline preview
- "100-1000 Hours Invested" badge
- Multiple CTAs (View Full Story, Watch Demo, etc.)

### 6. Add Styling
**File:** `src/app/globals.css`

- Mega-project gradient theme (Carvana blue/navy)
- Timeline animation (line fills on scroll)
- Trophy shine effect for hackathon badge
- Sub-project card hover effects

---

## Visual Design

**Color Theme for Car Hauler (Carvana-inspired):**
- Primary Blue: #2F7BEB (Carvana Blue)
- Navy: #0D3C61 (Carvana Navy - text/dark elements)
- Gold Accent: #C9A227 (Carvana Gold - highlights/badges)
- Gradient: Blue (#2F7BEB) to Navy (#0D3C61)
- Hackathon badge: Gold (#C9A227) with trophy icon

**Status Badge Styles:**
- Hackathon Winner - Gold (#C9A227) background with trophy icon
- Deployed - Carvana Blue (#2F7BEB)
- Learning - Navy (#0D3C61)
- In Development - Light Blue (#5A9CF0)

---

## Files to Modify

| File | Change |
|------|--------|
| `src/types/Project.ts` | Add SubProject interface, mega-project fields |
| `src/types/index.ts` | Export new types |
| `src/data/projects.ts` | Transform Car Hauler to mega-project with 3 sub-projects |
| `src/app/projects/[slug]/page.tsx` | Add MegaProject conditional rendering |
| `src/app/projects/page.tsx` | Enhanced featured section for mega-projects |
| `src/app/globals.css` | New animations and gradient styles |

**New Files:**
- `src/components/MegaProject/index.tsx`
- `src/components/MegaProject/MegaProjectHero.tsx`
- `src/components/MegaProject/ProjectTimeline.tsx`
- `src/components/MegaProject/SubProjectCard.tsx`
- `src/components/ui/VideoEmbed.tsx`
- `src/components/ui/StatusBadge.tsx`

---

## Content Needed Before Implementation

1. Screenshots/images for each sub-project (add to `/public/projects/car-hauler/`)
2. Brief descriptions for hackathon and React Native versions
3. Tech stack details for each version
4. Any specific achievements/highlights for each

---

## Verification

1. Run `npm run dev` and navigate to `/projects`
2. Verify Car Hauler displays with enhanced "Flagship" treatment
3. Click into detail page, verify all 3 sub-projects render
4. Test YouTube video embed plays correctly
5. Check responsive design on mobile (timeline vertical, cards stack)
6. Run `npm run build` to ensure no type errors
7. Test keyboard navigation on timeline and cards
