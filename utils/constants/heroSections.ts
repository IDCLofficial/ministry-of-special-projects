export interface HeroConfig {
  title: string;
  subtitle?: string;
  description?: string;
  backgroundImage?: string;
  backgroundGradient?: string;
  height?: 'small' | 'medium' | 'large' | 'extra-large';
  alignment?: 'left' | 'center';
  overlay?: boolean;
  className?: string;
}

export const HERO_CONFIGS = {
  HOME: {
    title: "A leading catalyst for sustainable development",
    description: "The Imo State Ministry of Special Projects drives critical infrastructure and development initiatives across diverse sectors to improve lives and grow communities in Imo State.",
    height: 'extra-large' as const,
    alignment: 'left' as const
  },
  
  PROJECTS: {
    title: "Driving Development Through Strategic Projects",
    description: "Discover our key initiatives and development projects transforming communities across Imo State",
    height: 'medium' as const,
    alignment: 'left' as const
  },
  
  TEAM: {
    title: "Our Leadership Team",
    description: "Meet the dedicated professionals driving Imo State's special projects and development initiatives",
    height: 'medium' as const,
    alignment: 'left' as const,
    className: "py-16 md:py-24"
  },
  
  SERVICES: {
    title: "Our Project Portfolio",
    description: "Explore our diverse range of development projects and initiatives transforming communities across Imo State",
    backgroundGradient: "bg-gradient-to-r from-blue-600 to-blue-500",
    height: 'medium' as const,
    alignment: 'center' as const,
    overlay: false
  },
  
  NEWS: {
    title: "Latest Project Updates & Announcements",
    description: "Stay informed about our ongoing and upcoming development projects across Imo State",
    height: 'medium' as const,
    alignment: 'left' as const
  },
  
  MEDIA: {
    title: "Project Showcase & Success Stories",
    description: "Explore our visual journey of development projects transforming communities across Imo State",
    height: 'medium' as const,
    alignment: 'left' as const
  },
  
  EVENTS: {
    title: "Project Launches & Community Engagements",
    description: "Join us in celebrating milestones and engaging with communities across our project locations",
    height: 'medium' as const,
    alignment: 'left' as const
  },
  
  ABOUT: {
    title: "About the Ministry of Special Projects",
    description: "Leading the charge in planning and managing special projects that drive development and improve lives across Imo State through strategic initiatives and partnerships.",
    height: 'medium' as const,
    alignment: 'left' as const
  }
} as const;
