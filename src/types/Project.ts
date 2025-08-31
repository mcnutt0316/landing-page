export interface ProjectLinks {
  demo?: string;
  github?: string;
  case_study?: string;
}

export interface ProjectImages {
  hero: string;
  gallery?: string[];
  thumbnail: string;
}

export interface ProjectMetadata {
  created_date: string;
  updated_date: string;
  duration: string;
  team_size: number;
}

export type ProjectStatus = 'completed' | 'in-progress' | 'archived';
export type ProjectCategory = 'frontend' | 'fullstack' | 'mobile' | 'api' | 'business-website';

export interface Project {
  id: number;
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  category: ProjectCategory;
  status: ProjectStatus;
  featured: boolean;
  links: ProjectLinks;
  images: ProjectImages;
  metadata: ProjectMetadata;
  challenges?: string[];
  lessons_learned?: string[];
  highlights?: string[];
}