export interface NavItem {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
}

export interface FeatureCard {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  link: string;
  bgNumber: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  image: string;
  icon: string;
  link: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  categories: string[];
  image: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  rating: number;
  avatar: string;
}

export interface ClientLogo {
  id: string;
  name: string;
  logo: string;
}
