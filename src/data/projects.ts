export type CaseStudy = {
  id: string
  title: string
  category: string
  tags: string[]
  challenge: string
  solution: string
  result: string
  image: string
  industry: string
  duration: string
  services: string[]
  url?: string
}

export type CreativeWork = {
  id: number
  image: string
  title: string
}

/** Verified client case studies. Concept e-commerce/SaaS mockups live in conceptProjects.ts. */
export const caseStudies: CaseStudy[] = [
  {
    id: 'rnb-shipping-transformation',
    title: 'RNB Shipping — Digital Presence for Freight Leaders',
    category: 'Web Development + Lead Generation',
    tags: ['Web Dev', 'CNF', 'Logistics'],
    challenge:
      'Chittagong-based CNF & Freight company RNB Shipping had zero online presence. Corporate clients couldn\'t verify them digitally.',
    solution:
      'Built a high-end corporate website featuring service modules and a direct inquiry funnel.',
    result: 'Established a professional digital identity for the brand. 100% Client satisfaction.',
    image: '/rnb.webp',
    industry: 'Logistics & C&F',
    duration: '2 Weeks',
    services: ['Web Development', 'Lead Generation', 'Brand Marketing'],
  },
  {
    id: 'gsl-export-global',
    title: 'GSL Export LTD — Bridging Bangladesh & Taiwan',
    category: 'Web Development + Brand Marketing',
    tags: ['Export', 'Manufacturing', 'Web Dev'],
    challenge:
      'GSL Export LTD, a toy manufacturer, lacked a centralized platform to showcase their global manufacturing standards.',
    solution:
      'Designed and developed a premium product showcase website with multi-region business highlights.',
    result: 'Streamlined the international buyer inquiry process. Increased brand trust globally.',
    image: '/gsl.webp',
    industry: 'Manufacturing & Export',
    duration: '3 Weeks',
    services: ['Web Development', 'Brand Marketing', 'Online Research'],
  },
]

export const creativeWork: CreativeWork[] = [
  { id: 1, image: '/img1.jpeg', title: 'Corporate Brand Identity' },
  { id: 2, image: '/img2.jpeg', title: 'Digital Growth Strategy' },
  { id: 3, image: '/img3.jpeg', title: 'Business Milestone Visual' },
  { id: 4, image: '/img4.jpeg', title: 'Strategic Marketing Poster' },
  { id: 5, image: '/img5.jpeg', title: 'B2B Outreach Campaign' },
  { id: 6, image: '/img6.jpeg', title: 'Executive Presentation Design' },
  { id: 7, image: '/img7.jpeg', title: 'Global Logistics Showcase' },
  { id: 8, image: '/img8.jpeg', title: 'Corporate Event Branding' },
  { id: 9, image: '/img9.jpeg', title: 'Client Success Infographic' },
  { id: 10, image: '/img10.jpeg', title: 'Service Excellence Poster' },
  { id: 11, image: '/img11.jpeg', title: 'Data-Driven Insights Visual' },
  { id: 12, image: '/img12.jpeg', title: 'Modern Business Architecture' },
  { id: 13, image: '/img13.jpeg', title: 'Market Expansion Strategy' },
  { id: 14, image: '/img14.jpeg', title: 'Professional Services Flyer' },
  { id: 15, image: '/img15.jpeg', title: 'Brand Visionary Concept' },
]

export const portfolioSection = {
  title: 'Featured Case Studies',
  subtitle: 'Strategic web solutions that drive measurable business growth.',
  galleryTitle: 'Creative Gallery',
  gallerySubtitle: 'Visual Branding & Corporate Assets',
}
