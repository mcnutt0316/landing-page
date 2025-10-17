import { Project } from '@/types/Project';

export const projects: Project[] = [
  {
    id: 1,
    slug: 'car-hauler-platform',
    title: 'Car Hauler Platform',
    description: 'A comprehensive logistics platform for car transportation, connecting drivers and customers. Hackathon winner (2nd place) with full-featured web application.',
    longDescription: 'My most significant project - a complete logistics platform that revolutionizes car transportation. Starting as a solo project where I invested hundreds of hours, it evolved during a hackathon where I was assigned a team of engineers. Together, we built an award-winning application that secured 2nd place in the competition. The platform handles complex logistics, user management, real-time tracking, and seamless booking experiences for both drivers and customers.',
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Authentication', 'Database Integration', 'Vercel'],
    category: 'fullstack',
    status: 'completed',
    featured: true,
    links: {
      demo: 'https://carhauler.vercel.app/',
      github: '#', // Add your GitHub repo URL here
      case_study: 'https://www.youtube.com/watch?v=dP5cNC95Ejk',
    },
    images: {
      hero: '/projects/car-hauler-hero.jpg',
      thumbnail: '/projects/car-hauler-thumb.jpg',
      gallery: ['/projects/car-hauler-1.jpg', '/projects/car-hauler-2.jpg'],
    },
    metadata: {
      created_date: '2024-06',
      updated_date: '2024-08',
      duration: '3 months+',
      team_size: 4, // Solo initially, then team of 4 for hackathon
    },
    highlights: [
      '🏆 2nd place winner in competitive hackathon',
      'Complete logistics platform with driver and customer portals',
      'Real-time booking and tracking system',
      'Advanced authentication and user management',
      'Scalable architecture supporting multiple user roles',
      'Team collaboration - led solo project to successful team integration'
    ],
    challenges: [
      'Integrating complex logistics workflows and business logic',
      'Building scalable user authentication and role management',
      'Coordinating team development during hackathon timeline',
      'Optimizing performance for real-time data updates',
      'Creating intuitive UX for complex multi-sided marketplace'
    ],
    lessons_learned: [
      'Large-scale applications require careful architecture planning',
      'Team collaboration amplifies individual contributions significantly',
      'Hackathon pressure drives innovative problem-solving approaches',
      'User experience is critical for logistics platforms success',
      'Persistence and iteration lead to breakthrough results'
    ],
  },
  {
    id: 2,
    slug: 'stoic-quote-generator',
    title: 'Stoic Quote Generator',
    description: 'An interactive web application that generates stoic philosophy quotes with AI-powered explanations using Grok integration.',
    longDescription: 'A thoughtful application that combines ancient wisdom with modern AI technology. Users can generate inspiring stoic quotes and, when they need deeper understanding, get intelligent explanations powered by Grok AI. This project showcases API integration, modern React patterns, and thoughtful UX design for educational content.',
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Grok API', 'Vercel'],
    category: 'fullstack',
    status: 'completed',
    featured: false,
    links: {
      demo: 'https://stoic-quote-gen.vercel.app/',
      github: '#', // Add your GitHub repo URL here
    },
    images: {
      hero: '/projects/stoic-quotes-hero.jpg',
      thumbnail: '/projects/stoic-quotes-thumb.jpg',
      gallery: ['/projects/stoic-quotes-1.jpg', '/projects/stoic-quotes-2.jpg'],
    },
    metadata: {
      created_date: '2024-01',
      updated_date: '2024-01',
      duration: '2 weeks',
      team_size: 1,
    },
    highlights: [
      'AI integration with Grok for intelligent quote explanations',
      'Responsive design with smooth user interactions',
      'Educational focus combining philosophy with modern technology',
      'Clean, minimalist interface prioritizing content readability'
    ],
    challenges: [
      'Integrating Grok AI API for contextual explanations',
      'Balancing philosophical depth with accessible explanations',
      'Creating engaging UX for educational content'
    ],
    lessons_learned: [
      'AI integration requires thoughtful prompt engineering',
      'Educational apps benefit from progressive disclosure design',
      'Philosophy content needs careful typography and readability considerations'
    ],
  },
  {
    id: 3,
    slug: 'premier-barbershop-website',
    title: 'Premier Barbershop Website',
    description: 'A professional business website for a local barbershop featuring services, pricing, team profiles, and customer testimonials.',
    longDescription: 'A clean, professional website designed to establish online presence for Premier Barbershop. The site emphasizes transparency with clear pricing, team introductions, and a straightforward walk-in policy. Built with accessibility and local SEO in mind to help the business connect with their community.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Responsive Design', 'Netlify'],
    category: 'business-website',
    status: 'completed',
    featured: false,
    links: {
      demo: 'https://teal-alpaca-933e8d.netlify.app/#contact',
      github: '#', // Add your GitHub repo URL here
    },
    images: {
      hero: '/projects/barbershop-hero.jpg',
      thumbnail: '/projects/barbershop-thumb.jpg',
      gallery: ['/projects/barbershop-1.jpg', '/projects/barbershop-2.jpg'],
    },
    metadata: {
      created_date: '2023-12',
      updated_date: '2024-01',
      duration: '1 week',
      team_size: 1,
    },
    highlights: [
      'Clean, professional design that builds trust',
      'Clear service pricing and team member profiles',
      'Mobile-responsive design for on-the-go customers',
      'Fast loading times and local SEO optimization'
    ],
    challenges: [
      'Balancing professional appearance with approachable feel',
      'Organizing service information for easy scanning',
      'Creating effective calls-to-action for a walk-in business'
    ],
    lessons_learned: [
      'Local businesses need clear, transparent communication',
      'Simple designs often convert better than complex ones',
      'Mobile optimization is crucial for service businesses'
    ],
  },
  {
    id: 4,
    slug: 'portfolio-landing-page',
    title: 'Portfolio Landing Page',
    description: 'This very portfolio you\'re viewing! A modern, responsive portfolio built with Next.js 15, showcasing my journey and projects.',
    longDescription: 'A comprehensive portfolio website that tells my unique story as a software developer. Built with the latest web technologies and featuring a complete project showcase system, animated tech icons, and responsive design. This meta-project demonstrates modern React patterns, TypeScript integration, and thoughtful UX design.',
    technologies: ['Next.js 15', 'React 19', 'TypeScript', 'Tailwind CSS v4', 'Vercel'],
    category: 'fullstack',
    status: 'in-progress',
    featured: false,
    links: {
      demo: '#', // Current site
      github: 'https://github.com/mcnutt0316/landing-page',
    },
    images: {
      hero: '/projects/portfolio-hero.jpg',
      thumbnail: '/projects/portfolio-thumb.jpg',
      gallery: ['/projects/portfolio-1.jpg', '/projects/portfolio-2.jpg'],
    },
    metadata: {
      created_date: '2024-08',
      updated_date: '2024-08',
      duration: '2 weeks',
      team_size: 1,
    },
    highlights: [
      'Modern Next.js 15 App Router architecture',
      'Animated tech icon orbits and interactive elements',
      'Complete project showcase system with dynamic routing',
      'SEO optimized with comprehensive metadata'
    ],
    challenges: [
      'Implementing complex CSS animations for tech orbits',
      'Creating scalable project showcase architecture',
      'Balancing personality with professionalism'
    ],
    lessons_learned: [
      'Next.js 15 App Router provides excellent developer experience',
      'Animations should enhance, not distract from content',
      'Portfolio sites need to tell a story, not just showcase skills'
    ],
  },
  {
    id: 5,
    slug: 'net-worth-tracker',
    title: 'Net Worth Tracker',
    description: 'A financial tracking application for monitoring assets, liabilities, and net worth over time with data visualization and insights.',
    longDescription: 'A comprehensive financial management tool that helps users track their net worth by monitoring assets and liabilities. Built with modern web technologies, the application provides intuitive data visualization, transaction tracking, and financial insights to help users understand their financial health and make informed decisions.',
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Supabase'],
    category: 'fullstack',
    status: 'in-progress',
    featured: false,
    links: {
      demo: 'https://net-worth-tracker-one.vercel.app/',
      github: '#', // Add your GitHub repo URL here
    },
    images: {
      hero: '/projects/net-worth-tracker-hero.jpg',
      thumbnail: '/projects/net-worth-tracker-thumb.jpg',
      gallery: ['/projects/net-worth-tracker-1.jpg', '/projects/net-worth-tracker-2.jpg'],
    },
    metadata: {
      created_date: '2024-08',
      updated_date: '2024-10',
      duration: '2 months',
      team_size: 1,
    },
    highlights: [
      'Real-time net worth calculation and tracking',
      'Secure user authentication with Supabase',
      'Interactive data visualization for financial insights',
      'Asset and liability management system',
      'Responsive design for mobile and desktop use'
    ],
    challenges: [
      'Implementing secure financial data storage and retrieval',
      'Creating intuitive UX for complex financial data entry',
      'Building real-time calculations and updates',
      'Designing effective data visualizations for financial trends'
    ],
    lessons_learned: [
      'Financial applications require careful attention to data accuracy',
      'Supabase provides powerful backend capabilities with minimal setup',
      'User privacy and security are paramount for financial tools',
      'Clear data visualization helps users understand complex financial information'
    ],
  },
];

// Helper functions for filtering projects
export const getFeaturedProjects = (): Project[] => 
  projects.filter(project => project.featured);

export const getProjectsByCategory = (category: string): Project[] => 
  projects.filter(project => project.category === category);

export const getProjectBySlug = (slug: string): Project | undefined => 
  projects.find(project => project.slug === slug);

export const getCompletedProjects = (): Project[] => 
  projects.filter(project => project.status === 'completed');

export const getInProgressProjects = (): Project[] => 
  projects.filter(project => project.status === 'in-progress');