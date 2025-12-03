// Type definitions for content JSON files

export interface Project {
  id: number;
  name: string;
  slug: string;
  description: string;
  technologies: string[];
  year: number;
  region?: string;
  country?: string;
  isCaseStudy?: boolean;
  isCurrent?: boolean;
  contribution?: string;
  image?: string;
}

export interface Certificate {
  id: number;
  title: string;
  issuer: string;
  date: string;
  description: string;
  credentialId?: string;
  image?: string;
}

export interface Experience {
  period: string;
  title: string;
  company: string;
  location: string;
  description: string;
  achievements: string[];
  technologies: string[];
  isCurrent?: boolean;
}

