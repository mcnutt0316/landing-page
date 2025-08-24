# Landing Page Portfolio Project

## Overview
A modern portfolio landing page built with Next.js 15, React 19, TypeScript, and Tailwind CSS v4. This is a minimal starter project that currently displays a simple "hello" message and is ready for customization into a personal portfolio website.

## Tech Stack
- **Framework:** Next.js 15.5.0 with Turbopack
- **Frontend:** React 19.1.0 with TypeScript 5
- **Styling:** Tailwind CSS v4 with PostCSS
- **Fonts:** Geist Sans & Geist Mono from Google Fonts
- **Development:** ESLint for code quality

## Project Structure
```
/
├── src/app/
│   ├── page.tsx          # Main landing page component
│   ├── layout.tsx        # Root layout with font configuration
│   ├── globals.css       # Global styles with Tailwind imports
│   └── favicon.ico       # Site favicon
├── public/               # Static assets (SVG icons)
├── package.json          # Dependencies and scripts
├── tsconfig.json         # TypeScript configuration
├── next.config.ts        # Next.js configuration
├── postcss.config.mjs    # PostCSS configuration
└── eslint.config.mjs     # ESLint configuration
```

## Key Features
- **Modern Stack:** Uses the latest versions of Next.js, React, and Tailwind CSS
- **TypeScript:** Full type safety throughout the application
- **Dark Mode:** Built-in dark mode support via CSS custom properties
- **Performance:** Turbopack for faster development builds
- **Responsive Design:** Ready for mobile-first responsive design
- **Font Optimization:** Automatic font loading optimization with next/font

## Development Commands
```bash
npm run dev      # Start development server with Turbopack
npm run build    # Build for production with Turbopack  
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Current State
The project is in its initial state with:
- Basic Next.js app structure
- Simple "hello" message on the homepage (src/app/page.tsx:5)
- Default styling and layout configuration
- Ready for portfolio content development

## Next Steps for Development
1. Replace the simple "hello" message with portfolio content
2. Add components for sections like About, Projects, Skills, Contact
3. Implement responsive navigation
4. Add portfolio projects and case studies
5. Integrate contact form functionality
6. Optimize for SEO with proper metadata

## Configuration Notes
- Uses App Router (Next.js 13+ directory structure)
- TypeScript strict mode enabled
- ESNext module resolution with bundler
- Path alias configured: `@/*` maps to `./src/*`
- Tailwind CSS v4 with inline theme configuration
- Custom CSS properties for theming with automatic dark mode