import { Project } from '@/types/Project';

export const projects: Project[] = [
  {
    id: 1,
    slug: 'car-hauler-platform',
    title: 'Car Hauler Platform',
    description: "I didn’t read about car hauling logistics — I drove it. 18-wheelers, 7–9 cars per load, tight turnarounds, and dispatch software that failed drivers daily. So I built my own. Took it to a hackathon with a team I’d never met, competed against experienced engineers, and finished 2nd place.",
    longDescription: 'My most significant project - a complete logistics platform that revolutionizes car transportation. Starting as a solo project where I invested hundreds of hours, it evolved during a hackathon where I was assigned a team of engineers. Together, we built an award-winning application that secured 2nd place in the competition. The platform handles complex logistics, user management, real-time tracking, and seamless booking experiences for both drivers and customers.',
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Authentication', 'Database Integration', 'Vercel'],
    category: 'fullstack',
    status: 'completed',
    featured: true,
    links: {
      demo: 'https://carhauler.vercel.app/',
      github: '#', // Add your GitHub repo URL here
      case_study: 'https://youtu.be/oV3YRHReBpc',
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
    slug: 'mill-creek-farm-feed',
    title: 'Mill Creek Farm & Feed',
    description: "A family-owned feed store in Brenham, TX needed an online presence before opening. I built them a website that tells their story — three generations of farming, custom feed mixing, and serving Washington County — without burying the practical info customers actually need.",
    longDescription: "Mill Creek Farm & Feed is a family-run agricultural supply business specializing in custom feed formulations for cattle, horses, and chickens. The site introduces the Pelkemeyer family's three-generation farming heritage, showcases their product lineup and services (custom mixing, local delivery, bulk orders), and gives customers a clear way to get in touch before the storefront opens. Built to work for working farmers — fast, mobile-friendly, and straight to the point.",
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Vercel'],
    category: 'business-website',
    status: 'completed',
    featured: false,
    links: {
      demo: 'https://mill-creek-ruddy.vercel.app/',
      github: '#',
    },
    images: {
      hero: '/projects/mill-creek-hero.jpg',
      thumbnail: '/projects/mill-creek-thumb.jpg',
      gallery: ['/projects/mill-creek-1.jpg', '/projects/mill-creek-2.jpg'],
    },
    metadata: {
      created_date: '2026-04',
      updated_date: '2026-04',
      duration: '2 weeks',
      team_size: 1,
    },
    highlights: [
      'Clean rural aesthetic that honors the family heritage without feeling dated',
      'Product and services sections built around how feed customers actually shop',
      'Contact form for pre-opening inquiries and custom feed consultations',
      'Mobile-first design for farmers checking from the field',
      'Built and deployed on Vercel before the physical storefront opened',
    ],
    challenges: [
      'Translating a family story across three generations into a tight, scannable narrative',
      'Designing for an audience that values function over flash',
      'Structuring product info for a custom-mix business (not a standard catalog)',
    ],
    lessons_learned: [
      'Local businesses convert better with a clear story than with a feature dump',
      'Rural/agricultural audiences need fast load times and zero friction on mobile',
      'Launching a site before opening day gives a business credibility and a head start on local SEO',
    ],
  },
  {
    id: 5,
    slug: 'height-table',
    title: 'Height Table',
    description: "Drivers log vehicle heights on Cottrell CX-09LS haulers. The dataset trains a model that predicts whether a load clears the 13'6\" federal limit. Built by someone who actually ran these loads.",
    longDescription: "Height Table is a purpose-built data collection platform for commercial auto transport. Drivers log measured vehicle heights for loads on Cottrell CX-09LS car haulers. The bulk dataset is used to train a compliance model that predicts whether a configured load will clear the 13'6\" federal height limit. Built with a modern full-stack using Neon Serverless PostgreSQL, daily-synced CarAPI vehicle data, and Google OAuth for secure multi-user access.",
    technologies: ['Next.js', 'TypeScript', 'React', 'Tailwind CSS', 'shadcn/ui', 'Neon', 'PostgreSQL', 'CarAPI', 'Vercel'],
    category: 'fullstack',
    status: 'in-progress',
    featured: false,
    links: {
      demo: 'https://height-table.vercel.app/',
      github: '#',
    },
    images: {
      hero: '/projects/height-table-hero.png',
      thumbnail: '/projects/height-table-thumb.png',
      gallery: ['/projects/height-table-1.png', '/projects/height-table-2.png'],
    },
    metadata: {
      created_date: '2025-01',
      updated_date: '2026-03',
      duration: 'Ongoing',
      team_size: 1,
    },
    highlights: [
      'Bulk vehicle height data collection optimized for auto transport drivers',
      'CarAPI integration synced daily via cron for up-to-date vehicle data',
      'Neon Auth with Google OAuth and email/password for secure multi-user access',
      'Neon Serverless PostgreSQL for scalable data storage',
      "Dataset designed to train a 13'6\" federal compliance prediction model",
    ],
    challenges: [
      'Designing a data entry UX fast enough for drivers to use in the field',
      'Keeping vehicle data fresh with daily CarAPI cron sync',
      'Structuring the dataset to be useful for downstream ML training',
      'Managing auth across multiple user types (drivers vs. admins)',
    ],
    lessons_learned: [
      'Domain-specific tools require deep understanding of the workflow they support',
      'Cron-based data syncing is a simple but effective pattern for keeping external data current',
      'Neon Auth dramatically reduces the time to implement secure, multi-provider authentication',
      'Collecting structured data with future ML use in mind requires thinking ahead about schema design',
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