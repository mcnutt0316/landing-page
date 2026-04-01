# Portfolio Landing Page

A modern portfolio website built with Next.js 15, React 19, TypeScript, and Tailwind CSS v4. It tells my story as a software developer — from truck driver to builder — and showcases the projects I've shipped along the way.

## Tech Stack

- **Framework:** Next.js 15 (App Router, Turbopack)
- **Frontend:** React 19, TypeScript 5
- **Styling:** Tailwind CSS v4
- **Fonts:** Geist Sans & Geist Mono

## Project Structure

```
src/
├── app/                   # Next.js App Router pages
│   └── projects/[slug]/   # Dynamic project detail pages
├── components/
│   ├── Hero/              # Hero section with animated tech orbit
│   ├── About.tsx          # About section
│   ├── CallToAction.tsx   # CTA section
│   └── ui/                # Reusable UI components (Button, Badge, SocialLinks)
├── constants/             # Tech icons, social links config
├── data/                  # Project data and helper functions
└── types/                 # TypeScript type definitions
```

## Features

- Animated tech icon orbits around profile image
- Project showcase with dynamic routing and case study pages
- Responsive, mobile-first design
- Dark mode support via CSS custom properties
- SEO optimized with Open Graph metadata
- Type-safe project data structure

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Scripts

```bash
npm run dev      # Start dev server with Turbopack
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

## CI / Code Review

Pull requests are automatically reviewed by Claude via GitHub Actions. The workflow lives at `.github/workflows/claude-review.yml` and runs on every PR open and update. You can also trigger an on-demand review by commenting `@claude` in any PR.

**Required setup:**
- `ANTHROPIC_API_KEY` secret in repository settings
- [Claude GitHub App](https://github.com/apps/claude) installed on the repo
