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
│   │   ├── page.tsx                # Main landing page with integrated sections
│   │   ├── layout.tsx              # Root layout with SEO optimization
│   │   ├── globals.css             # Global styles with Tailwind imports
│   │   ├── favicon.ico             # Site favicon
│   │   └── projects/
│   │       ├── layout.tsx          # Projects section layout
│   │       ├── page.tsx            # Projects listing page
│   │       ├── loading.tsx         # Loading state for projects
│   │       ├── error.tsx           # Error handling for projects
│   │       └── [slug]/
│   │           └── page.tsx        # Individual project detail pages
│   ├── components/
│   │   ├── Hero/
│   │   │   ├── index.tsx           # Main hero component
│   │   │   ├── HeroContent.tsx     # Hero text content
│   │   │   ├── HeroImage.tsx       # Profile image with animations
│   │   │   └── TechOrbit.tsx       # Animated tech icon orbits
│   │   ├── ui/
│   │   │   ├── Button.tsx          # Reusable button component
│   │   │   ├── Badge.tsx           # Badge component for tags
│   │   │   └── SocialLinks.tsx     # Social media links component
│   │   ├── About.tsx               # About section with personal story
│   │   ├── CallToAction.tsx        # CTA section with contact encouragement
│   │   └── TechIcon.tsx            # Individual tech icon component
│   ├── constants/
│   │   ├── technologies.ts         # Technology icons and metadata
│   │   └── socialLinks.tsx         # Social media links configuration
│   ├── data/
│   │   └── projects.ts             # Project data and helper functions
│   └── types/
│       ├── Project.ts              # Project type definitions
│       └── index.ts                # Type exports
├── public/                         # Static assets (SVG icons, images)
├── requirements.txt                # Portfolio content outline and requirements
├── package.json                    # Dependencies and scripts
├── tsconfig.json                   # TypeScript configuration
├── next.config.ts                  # Next.js configuration
├── postcss.config.mjs              # PostCSS configuration
└── eslint.config.mjs               # ESLint configuration
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
- **Animated UI:** Tech icon orbits with CSS animations around profile image
- **Project Showcase:** Dynamic project pages with detailed case studies
- **Type-Safe Data:** Strongly typed project data with helper functions
- **Reusable Components:** UI component library (Button, Badge, SocialLinks)

## Development Commands
```bash
npm run dev      # Start development server with Turbopack
npm run build    # Build for production with Turbopack  
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Current State
The project is now a complete portfolio website with:
- Professional hero section with animated tech icons orbiting profile image
- Comprehensive about section highlighting technical skills and background
- Call-to-action section encouraging collaboration
- Complete projects showcase section with 4 featured projects:
  - Car Hauler Platform (Hackathon 2nd place winner)
  - Stoic Quote Generator (AI-powered educational app)
  - Premier Barbershop Website (Business website)
  - Portfolio Landing Page (Meta project)
- Dynamic project detail pages with case studies and lessons learned
- Modular component architecture with reusable UI components
- Type-safe project data structure with helper functions
- SEO optimization with proper metadata and Open Graph tags
- Production-ready build with zero errors
- Responsive design for all device sizes
- Social media integration (GitHub, LinkedIn, Email)

## Portfolio Content
The portfolio tells Corey's unique story:
- **Professional Identity:** Software Developer & Creator
- **Technical Focus:** TypeScript, JavaScript, Next.js, React, Node.js, MongoDB, Supabase
- **Career Transition:** From truck driver to software developer
- **AI Integration:** Leveraging AI tools for faster development
- **Personal Background:** Brazilian Jiu-Jitsu black belt (discipline and problem-solving)
- **Philosophy:** Continuous learning and creating meaningful digital solutions

## Completed Enhancements
- ✅ Portfolio projects showcase section with dynamic routing
- ✅ Project case studies with detailed highlights, challenges, and lessons learned
- ✅ Animated tech icons with orbital animations
- ✅ Reusable UI component library
- ✅ Type-safe project data structure
- ✅ Social media integration

## Next Steps for Enhancement
1. Add project images and screenshots to /public/projects/
2. Implement functional contact form with email integration
3. Add navigation menu/header for better site navigation
4. Integrate blog functionality
5. Add customer testimonials section
6. Implement analytics tracking (Google Analytics or Vercel Analytics)
7. Add GitHub API integration to show live repository stats
8. Create an interactive skills visualization
9. Add project filtering and search functionality
10. Implement carousel/slider for project images

## Data Structure
The project uses a comprehensive type-safe data structure for projects:

### Project Type Interface
- **id**: Unique identifier
- **slug**: URL-friendly identifier for routing
- **title**: Project name
- **description**: Short summary
- **longDescription**: Detailed project overview
- **technologies**: Array of tech stack used
- **category**: Project type (fullstack, business-website, etc.)
- **status**: Current state (completed, in-progress)
- **featured**: Boolean for homepage highlighting
- **links**: Demo, GitHub, case study URLs
- **images**: Hero, thumbnail, and gallery images
- **metadata**: Creation date, duration, team size
- **highlights**: Key achievements and features
- **challenges**: Technical obstacles overcome
- **lessons_learned**: Insights gained from the project

### Helper Functions
- `getFeaturedProjects()`: Returns featured projects
- `getProjectsByCategory(category)`: Filters by category
- `getProjectBySlug(slug)`: Retrieves single project by slug
- `getCompletedProjects()`: Returns completed projects
- `getInProgressProjects()`: Returns in-progress projects

## Configuration Notes
- Uses App Router (Next.js 13+ directory structure)
- TypeScript strict mode enabled
- ESNext module resolution with bundler
- Path alias configured: `@/*` maps to `./src/*`
- Tailwind CSS v4 with inline theme configuration
- Custom CSS properties for theming with automatic dark mode
- Dynamic routing with [slug] for individual project pages
- Error boundaries and loading states implemented