# Plan: Auto-Cycling Image Carousel for Project Screenshots

## Goal
Create an automatic image carousel that cycles through all 4 screenshots for each project (hero, thumb, gallery-1, gallery-2).

## What We'll Build
- **Auto-cycling carousel**: Images transition automatically every 3-4 seconds
- **Navigation dots**: Show which image is active + allow manual navigation
- **Smooth transitions**: Fade or slide effect between images
- **Works for both**: Featured project (large) and other projects (cards)

## Progress Status

### ✅ COMPLETED: Step 1 - Create New Component: `src/components/ProjectCarousel.tsx`
**Status: COMPLETE**

Successfully built with all features:
- ✅ TypeScript interface with `images: string[]` and `projectTitle: string` props
- ✅ State management with `currentIndex` and `isPaused` useState hooks
- ✅ Auto-cycling with `useEffect` + `setInterval` (3 second intervals)
- ✅ Index wrapping using modulo operator: `(prevIndex + 1) % images.length`
- ✅ Pause on hover with `onMouseEnter` and `onMouseLeave` handlers
- ✅ Navigation dots with visual indicators (active dot is wider and white)
- ✅ Click-to-navigate functionality on dots
- ✅ Next.js Image component with `fill` and `object-cover`
- ✅ Proper cleanup with `clearInterval` in useEffect return
- ✅ Dependency array includes `[isPaused, images.length]`

**Learning Concepts Covered:**
- IRCRD pattern: Interval, Ring, Clean up, Return, Dependencies
- Functional updater pattern: `setCurrentIndex(prevIndex => ...)`
- Event handlers with arrow functions: `() => setIsPaused(true)`
- Array mapping with unused parameter: `images.map((_, index) => ...)`
- Conditional className styling with template literals

---

### 🔄 IN PROGRESS: Step 2 - Update `src/app/projects/page.tsx`
**Status: NOT STARTED**

Remaining tasks:
- [ ] Import the `ProjectCarousel` component
- [ ] Convert `featuredProject.images` object to array format
- [ ] Replace featured project placeholder (line 71-73) with `<ProjectCarousel />`
- [ ] Convert `project.images` objects to array format for other projects
- [ ] Replace other projects placeholders (line 93-95) with `<ProjectCarousel />`

**Implementation hints:**
```typescript
// Convert images object to array:
const imageArray = [
  featuredProject.images.hero,
  featuredProject.images.thumbnail,
  ...featuredProject.images.gallery
];
```

---

### ⏳ PENDING: Step 3 - Update `src/data/projects.ts`
**Status: NOT STARTED**

Tasks:
- [ ] Verify all projects have complete image paths
- [ ] Ensure each project has: `hero`, `thumbnail`, and `gallery` array with 2 items

---

## Files to Create/Modify

### 1. ✅ Create New Component: `src/components/ProjectCarousel.tsx`
- ✅ Accept props: `images` array and `projectTitle` for alt text
- ✅ State to track current image index
- ✅ `useEffect` with `setInterval` to auto-advance every 3 seconds
- ✅ Navigation dots at bottom to show progress and allow manual clicks
- ✅ Smooth transitions using CSS (Tailwind transition classes)
- ✅ Pause auto-cycling on hover (better UX)

### 2. 🔄 Update: `src/app/projects/page.tsx`
- [ ] Import the new `ProjectCarousel` component
- [ ] Replace placeholder divs with `<ProjectCarousel />` component
- [ ] **Featured project** (line 71-73): Pass all 4 images from `featuredProject.images`
- [ ] **Other projects** (line 93-95): Pass all 4 images from `project.images`

### 3. ⏳ Update: `src/data/projects.ts` (if needed)
- [ ] Verify all projects have complete image paths in their `images` object
- [ ] Ensure each project has: `hero`, `thumbnail`, and `gallery` array with 2 items

## Technical Approach
- Use Next.js `Image` component for optimization
- CSS transitions for smooth image changes
- Array of images: `[hero, thumbnail, ...gallery]`
- Auto-advance timer resets on manual navigation
- Responsive design: works on mobile and desktop

## User Experience
- **Auto-cycling**: Images change every 3-4 seconds automatically
- **Manual control**: Click dots to jump to specific image
- **Hover pause**: Carousel pauses when user hovers (prevents jarring transitions)
- **Accessibility**: Proper alt text and keyboard navigation

## Available Screenshots
Each project has 4 images in `public/projects/`:
- Car Hauler: car-hauler-hero.jpg, car-hauler-thumb.jpg, car-hauler-1.jpg, car-hauler-2.jpg
- Stoic Quotes: stoic-quotes-hero.jpg, stoic-quotes-thumb.jpg, stoic-quotes-1.jpg, stoic-quotes-2.jpg
- Barbershop: barbershop-hero.jpg, barbershop-thumb.jpg, barbershop-1.jpg, barbershop-2.jpg
- Portfolio: portfolio-hero.jpg, portfolio-thumb.jpg, portfolio-1.jpg, portfolio-2.jpg
