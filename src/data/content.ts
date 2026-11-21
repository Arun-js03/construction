import type {
  NavItem,
  FeatureCard,
  ServiceItem,
  ProcessStep,
  ProjectItem,
  TestimonialItem,
  ClientLogo,
} from '../types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Process', href: '#process' },
  { label: 'Projects', href: '#projects' },
  {
    label: 'Pages',
    href: '#',
    children: [
      { label: 'FAQ', href: '#faq' },
      { label: 'Our Team', href: '#team' },
      { label: 'Pricing Plans', href: '#pricing' },
      { label: 'Client Reviews', href: '#testimonials' },
    ],
  },
  { label: 'Contact', href: '#quote' },
];

export const HERO_SLIDES = [
  {
    id: 1,
    badge: 'Why choose us?',
    titleLine1: 'START',
    titleLine2: 'NEW',
    titleHighlight: 'PROJECTS',
    description: 'Don’t get framed by the competition, trust our solid reputation.',
    videoLink: 'https://www.youtube.com/watch?v=FyS_zcvmUr4',
    bgType: 'modern',
    modelImage: 'https://xtratheme.com/elementor/construction-2/wp-content/uploads/sites/41/2020/01/man-model.png',
  },
  {
    id: 2,
    badge: 'Building Excellence',
    titleLine1: 'SUPERIOR',
    titleLine2: 'QUALITY &',
    titleHighlight: 'RESULTS',
    description: "We'll get it done, like us there are none. Committed to superior quality and lasting structures.",
    videoLink: 'https://www.youtube.com/watch?v=FyS_zcvmUr4',
    bgType: 'full',
    bgImage: 'https://xtratheme.com/elementor/construction-2/wp-content/uploads/sites/41/2020/01/slide-2.jpg',
  },
];

export const FEATURES: FeatureCard[] = [
  {
    id: 'building-engineering',
    title: 'Building Engineering',
    subtitle: 'Building Engineering',
    description:
      'A Building Engineer is recognised as being expert in the use of technology for the design, construction, assessment and maintenance of the built environment.',
    iconName: 'Building2',
    link: '#services',
    bgNumber: '01',
  },
  {
    id: 'safety-first',
    title: 'Safety First',
    subtitle: 'Safety First',
    description:
      'Safety First explores the challenges at the heart of needlestick and sharps safety and highlights promising efforts to ensure patient and health care worker safety in hospitals.',
    iconName: 'ShieldAlert',
    link: '#services',
    bgNumber: '02',
  },
  {
    id: 'road-construction',
    title: 'Road Construction',
    subtitle: 'Road Construction',
    description:
      'The construction of a new road whether from asphalt or concrete requires the production of an bonded pavement structure, beginning with a stable base.',
    iconName: 'Truck',
    link: '#services',
    bgNumber: '03',
  },
];

export const ABOUT_STATS = [
  { value: '25+', label: 'Years Experience' },
  { value: '450+', label: 'Projects Completed' },
  { value: '98%', label: 'Happy Clients' },
  { value: '60+', label: 'Field Engineers' },
];

export const ABOUT_BULLETS = [
  'Excellent engineering standards & modern practices',
  'Modern & up to date heavy equipment fleet',
  'Grade #1 certified construction materials',
  'Structures built with maximum durability and long life',
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'building',
    title: 'Building',
    description: 'A building, or edifice, is a structure with a roof and walls standing with stability, architectural beauty, and precision engineering.',
    image: 'https://xtratheme.com/elementor/construction-2/wp-content/uploads/sites/41/2020/01/service-1.jpg',
    icon: 'Building',
    link: '#services',
  },
  {
    id: 'road-construction',
    title: 'Road Construction',
    description:
      'Road construction involves the use of asphalt, liquid asphalt, concrete, soil stabilization, rebar, paving and pavement recycling machines, and other road repair materials.',
    image: 'https://xtratheme.com/elementor/construction-2/wp-content/uploads/sites/41/2020/01/service-2.jpg',
    icon: 'Layers',
    link: '#services',
  },
  {
    id: 'maintenance',
    title: 'Maintenance',
    description: 'All are assigned responsibilities relate to the maintenance mode, industrial upkeep, preventative checks, and facility renovations.',
    image: 'https://xtratheme.com/elementor/construction-2/wp-content/uploads/sites/41/2020/01/service-3.jpg',
    icon: 'Wrench',
    link: '#services',
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: '01',
    title: 'Agency / Bidding',
    description: 'Ensure design documents are reviewed, planned and permitted with exact compliance.',
  },
  {
    step: '02',
    title: 'Construction',
    description: 'Helps to coordinate furnishings, structural execution and move-in process efficiently.',
  },
  {
    step: '03',
    title: 'Project Execution',
    description: 'Client directs move in of equipment, operations & staff with turnkey readiness.',
  },
];

export const PROJECT_CATEGORIES = ['All', 'Architecture', 'Building', 'Construction', 'Maintenance', 'Road Construction'];

export const PROJECTS: ProjectItem[] = [
  {
    id: '1',
    title: 'Riverview Green Building',
    category: 'Building, Road Construction',
    categories: ['Building', 'Road Construction'],
    image: 'https://xtratheme.com/elementor/construction-2/wp-content/uploads/sites/41/2020/01/portfolio7-1.jpg',
  },
  {
    id: '2',
    title: 'The Langham Hotel',
    category: 'Building, Construction',
    categories: ['Building', 'Construction'],
    image: 'https://xtratheme.com/elementor/construction-2/wp-content/uploads/sites/41/2020/01/portfolio10-1.jpg',
  },
  {
    id: '3',
    title: 'Villa Rustica Renovation',
    category: 'Construction, Road Construction',
    categories: ['Construction', 'Road Construction'],
    image: 'https://xtratheme.com/elementor/construction-2/wp-content/uploads/sites/41/2020/01/portfolio3-1.jpg',
  },
  {
    id: '4',
    title: 'Land Rustica Renovation',
    category: 'Building, Maintenance',
    categories: ['Building', 'Maintenance'],
    image: 'https://xtratheme.com/elementor/construction-2/wp-content/uploads/sites/41/2020/01/portfolio6-1.jpg',
  },
  {
    id: '5',
    title: 'Kitchen And Living Room',
    category: 'Architecture, Building',
    categories: ['Architecture', 'Building'],
    image: 'https://xtratheme.com/elementor/construction-2/wp-content/uploads/sites/41/2020/01/personal_gift-1.jpg',
  },
  {
    id: '6',
    title: 'House Under The Palms',
    category: 'Construction, Road Construction',
    categories: ['Construction', 'Road Construction'],
    image: 'https://xtratheme.com/elementor/construction-2/wp-content/uploads/sites/41/2020/01/tick_tock-1-1.jpg',
  },
  {
    id: '7',
    title: 'Green House',
    category: 'Construction, Road Construction',
    categories: ['Construction', 'Road Construction'],
    image: 'https://xtratheme.com/elementor/construction-2/wp-content/uploads/sites/41/2020/01/portfolio9-1.jpg',
  },
  {
    id: '8',
    title: 'Inside Renovation',
    category: 'Construction, Road Construction',
    categories: ['Construction', 'Road Construction'],
    image: 'https://xtratheme.com/elementor/construction-2/wp-content/uploads/sites/41/2020/01/portfolio2-1.jpg',
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: '1',
    quote:
      'Great Experience!! Michael has made the whole process easy from the planning stage to the final plant going in. Steve & his crew did a great job. I felt like Lavish Gardens really listened to what I wanted, gave me ideas, and helped me decide how to make my backyard a place to relax and enjoy the view.',
    author: 'Richard Dowson',
    role: 'Commercial Developer',
    company: 'Dowson Realty Group',
    rating: 5,
    avatar: 'https://xtratheme.com/elementor/construction-2/wp-content/uploads/sites/41/2020/01/team1.jpg',
  },
  {
    id: '2',
    quote:
      'I just wanted to say thank you to all of you for being so fun to work with and being rock stars with the best attitudes EVER on this 16th floor build for SPS. It means a great deal to me that you all come to the table every week with smiles on your faces and ready to solve whatever issue.',
    author: 'Lisa Jordan',
    role: 'Operations Director',
    company: 'SPS International',
    rating: 5,
    avatar: 'https://xtratheme.com/elementor/construction-2/wp-content/uploads/sites/41/2020/01/team2.jpg',
  },
  {
    id: '3',
    quote:
      "Greiner has been a critical partner to us on the redevelopment of West End Center Office Park. The team of project managers, supervisors, and their support teams can't be rivaled by any other contractor I have worked with over the past 15 years.",
    author: 'Michael Anderson',
    role: 'Managing Partner',
    company: 'West End Properties',
    rating: 5,
    avatar: 'https://xtratheme.com/elementor/construction-2/wp-content/uploads/sites/41/2020/01/team3.jpg',
  },
];

export const CLIENT_LOGOS: ClientLogo[] = [
  { id: '1', name: 'Partner 1', logo: 'https://xtratheme.com/elementor/construction-2/wp-content/uploads/sites/41/2021/02/logo-1.png' },
  { id: '2', name: 'Partner 2', logo: 'https://xtratheme.com/elementor/construction-2/wp-content/uploads/sites/41/2021/02/logo-2.png' },
  { id: '3', name: 'Partner 3', logo: 'https://xtratheme.com/elementor/construction-2/wp-content/uploads/sites/41/2021/02/logo-3.png' },
  { id: '4', name: 'Partner 4', logo: 'https://xtratheme.com/elementor/construction-2/wp-content/uploads/sites/41/2021/02/logo-4.png' },
  { id: '5', name: 'Partner 5', logo: 'https://xtratheme.com/elementor/construction-2/wp-content/uploads/sites/41/2021/02/logo-5.png' },
];
