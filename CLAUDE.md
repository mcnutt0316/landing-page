# Landing Page Portfolio Project

## Overview
A modern portfolio landing page built with Next.js 15, React 19, TypeScript, and Tailwind CSS v4. The project showcases Corey's professional story as a software developer, featuring a comprehensive hero section, detailed about section, and call-to-action components.

## Tech Stack
- **Framework:** Next.js 15.5.0 with Turbopack
- **Frontend:** React 19.1.0 with TypeScript 5
- **Styling:** Tailwind CSS v4 with PostCSS
- **Fonts:** Geist Sans & Geist Mono from Google Fonts
- **Development:** ESLint for code quality

## Project Structure
```
/
├── src/
│   ├── app/
│   │   ├── page.tsx          # Main landing page with integrated sections
│   │   ├── layout.tsx        # Root layout with SEO optimization
│   │   ├── globals.css       # Global styles with Tailwind imports
│   │   └── favicon.ico       # Site favicon
│   └── components/
│       ├── Hero.tsx          # Hero section with headline and subheadline
│       ├── About.tsx         # About section with personal story
│       └── CallToAction.tsx  # CTA section with contact encouragement
├── public/               # Static assets (SVG icons)
├── requirements.txt      # Portfolio content outline and requirements
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
- **Responsive Design:** Mobile-first responsive design implemented
- **Font Optimization:** Automatic font loading optimization with next/font
- **SEO Optimized:** Comprehensive metadata and Open Graph tags
- **Component Architecture:** Modular component structure for maintainability
- **Professional Portfolio:** Complete developer story showcasing technical expertise

## Development Commands
```bash
npm run dev      # Start development server with Turbopack
npm run build    # Build for production with Turbopack  
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Current State
The project is now a complete portfolio landing page with:
- Professional hero section with Corey's developer story
- Comprehensive about section highlighting technical skills and background
- Call-to-action section encouraging collaboration
- Modular component architecture (Hero, About, CallToAction)
- SEO optimization with proper metadata and Open Graph tags
- Production-ready build with zero errors
- Responsive design for all device sizes

## Portfolio Content
The portfolio tells Corey's unique story:
- **Professional Identity:** Software Developer & Creator
- **Technical Focus:** TypeScript, JavaScript, Next.js, React, Node.js, MongoDB, Supabase
- **Career Transition:** From truck driver to software developer
- **AI Integration:** Leveraging AI tools for faster development
- **Personal Background:** Brazilian Jiu-Jitsu black belt (discipline and problem-solving)
- **Philosophy:** Continuous learning and creating meaningful digital solutions

## Next Steps for Enhancement
1. Add portfolio projects showcase section
2. Implement functional contact form
3. Add navigation menu for larger content
4. Integrate blog functionality
5. Add project case studies and testimonials
6. Implement analytics tracking

## Configuration Notes
- Uses App Router (Next.js 13+ directory structure)
- TypeScript strict mode enabled
- ESNext module resolution with bundler
- Path alias configured: `@/*` maps to `./src/*`
- Tailwind CSS v4 with inline theme configuration
- Custom CSS properties for theming with automatic dark mode