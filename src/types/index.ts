export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
  username: string;
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  companyUrl?: string;
  location: string;
  startDate: string;
  endDate: string | null;
  current: boolean;
  description: string;
  technologies: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  image?: string;
}

export interface Profile {
  name: string;
  title: string;
  bio: string;
  location: string;
  email: string;
  avatarUrl: string;
  resumeUrl?: string;
}
