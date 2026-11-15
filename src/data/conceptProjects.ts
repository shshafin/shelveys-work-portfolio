export type ConceptProject = {
  id: string
  title: string
  category: 'E-Commerce' | 'SaaS'
  industry: string
  duration: string
  challenge: string
  solution: string
  result: string
  image: string
  tags: string[]
}

/** Product interface concepts / mockups for portfolio storytelling — replace with live client work when available. */
export const conceptProjects: ConceptProject[] = [
  {
    id: 'nilathread-storefront',
    title: 'NilaThread — Premium Fashion Commerce',
    category: 'E-Commerce',
    industry: 'Fashion Retail',
    duration: 'Concept UI',
    challenge:
      'A Dhaka-based apparel label needed a storefront that feels editorial — not like a generic template — while still converting first-time buyers on mobile.',
    solution:
      'Designed a navy-and-gold shopping experience with curated collections, size guidance, and a clean checkout path built for BDT pricing and local delivery cues.',
    result:
      'A polished fashion commerce interface ready for catalog integration, campaigns, and seasonal drops.',
    image: '/concepts/concept-ecommerce-nilathread.jpg',
    tags: ['Storefront', 'Mobile UX', 'Checkout'],
  },
  {
    id: 'freshharvest-mart',
    title: 'FreshHarvest Mart — Grocery Delivery Store',
    category: 'E-Commerce',
    industry: 'Grocery & Delivery',
    duration: 'Concept UI',
    challenge:
      'Neighborhood grocery brands struggle to show freshness, delivery windows, and category speed without cluttering the shopper journey.',
    solution:
      'Mapped a green, high-clarity mart UI with ETA badges, aisle-style categories, and product cards optimized for repeat weekly orders.',
    result:
      'A delivery-ready grocery commerce layout that balances trust, speed, and everyday usability.',
    image: '/concepts/concept-ecommerce-freshharvest.jpg',
    tags: ['Grocery', 'Delivery UX', 'Catalog'],
  },
  {
    id: 'craftednest-home',
    title: 'CraftedNest — Furniture & Home Commerce',
    category: 'E-Commerce',
    industry: 'Home & Lifestyle',
    duration: 'Concept UI',
    challenge:
      'Furniture buyers need space inspiration and confidence before committing to higher-ticket products online.',
    solution:
      'Built a warm Scandinavian-inspired storefront with room scenes, material filters, and product storytelling that supports longer purchase cycles.',
    result:
      'An elegant home commerce concept designed to lift average order value through visual confidence.',
    image: '/concepts/concept-ecommerce-craftednest.jpg',
    tags: ['Furniture', 'Visual Merch', 'Filters'],
  },
  {
    id: 'apexstride-athletics',
    title: 'ApexStride — Performance Apparel Shop',
    category: 'E-Commerce',
    industry: 'Sportswear',
    duration: 'Concept UI',
    challenge:
      'Athletic brands need energy and clarity — bold visuals without slowing browse or size selection.',
    solution:
      'Created a high-contrast black-and-blue commerce UI with sport-focused collections, quick filters, and product cards built for conversion.',
    result:
      'A performance-retail interface that feels campaign-ready and shop-ready at the same time.',
    image: '/concepts/concept-ecommerce-apexstride.jpg',
    tags: ['Sportswear', 'Campaign UI', 'Conversion'],
  },
  {
    id: 'bengalspice-pantry',
    title: 'BengalSpice Co — Specialty Pantry Store',
    category: 'E-Commerce',
    industry: 'Specialty Food',
    duration: 'Concept UI',
    challenge:
      'Specialty spice and pantry brands need heritage warmth online without looking dated or hard to buy from.',
    solution:
      'Designed a terracotta-cream store experience with product storytelling, recipe content strips, and clear BDT pricing for local and diaspora buyers.',
    result:
      'A culturally rooted specialty commerce concept that still shops like a modern D2C brand.',
    image: '/concepts/concept-ecommerce-bengalspice.jpg',
    tags: ['D2C Food', 'Brand Story', 'Catalog'],
  },
  {
    id: 'flowledger-finance',
    title: 'FlowLedger — Finance & Invoicing SaaS',
    category: 'SaaS',
    industry: 'FinTech Ops',
    duration: 'Concept UI',
    challenge:
      'SMEs need accounting clarity — invoices, cashflow, and revenue trends — without enterprise software overwhelm.',
    solution:
      'Designed a calm navy-blue finance dashboard with invoice tables, KPI cards, and chart modules built for daily operators.',
    result:
      'A SaaS finance shell that communicates trust, speed, and decision-ready reporting.',
    image: '/concepts/concept-saas-flowledger.jpg',
    tags: ['Dashboard', 'Invoicing', 'Analytics'],
  },
  {
    id: 'hirepulse-talent',
    title: 'HirePulse — Recruiting Pipeline SaaS',
    category: 'SaaS',
    industry: 'HR Tech',
    duration: 'Concept UI',
    challenge:
      'Hiring teams lose candidates when pipeline stages, interviews, and role status live in scattered tools.',
    solution:
      'Mapped a teal recruiting workspace with kanban stages, open roles, and interview scheduling in one operational view.',
    result:
      'A talent SaaS concept focused on pipeline visibility and faster hiring decisions.',
    image: '/concepts/concept-saas-hirepulse.jpg',
    tags: ['Kanban', 'HR', 'Scheduling'],
  },
  {
    id: 'shipsense-logistics',
    title: 'ShipSense — Logistics Control SaaS',
    category: 'SaaS',
    industry: 'Logistics Tech',
    duration: 'Concept UI',
    challenge:
      'Freight operators need live shipment status, warehouse KPIs, and exception handling without opening five systems.',
    solution:
      'Designed an operations console with tracking tables, map context, and warehouse performance modules in a navy-orange system UI.',
    result:
      'A logistics SaaS concept built for dispatchers who need signal over noise.',
    image: '/concepts/concept-saas-shipsense.jpg',
    tags: ['Tracking', 'Ops', 'Warehouse'],
  },
  {
    id: 'clinicdesk-care',
    title: 'ClinicDesk — Clinic Operations SaaS',
    category: 'SaaS',
    industry: 'HealthTech',
    duration: 'Concept UI',
    challenge:
      'Clinics need appointment flow, doctor availability, and patient context in a calm interface staff can trust under pressure.',
    solution:
      'Created a soft teal clinic admin UI with schedule boards, patient cards, and availability cues designed for front-desk speed.',
    result:
      'A healthcare operations concept that feels clear, careful, and staff-friendly.',
    image: '/concepts/concept-saas-clinicdesk.jpg',
    tags: ['Appointments', 'Admin', 'Care Ops'],
  },
  {
    id: 'campaignforge-growth',
    title: 'CampaignForge — Marketing Automation SaaS',
    category: 'SaaS',
    industry: 'MarTech',
    duration: 'Concept UI',
    challenge:
      'Growth teams need campaign performance, audience segments, and automation flows without drowning in charts.',
    solution:
      'Designed a marketing automation workspace with performance widgets, segment lists, and a readable automation canvas.',
    result:
      'A martech SaaS concept that makes campaign systems feel understandable and actionable.',
    image: '/concepts/concept-saas-campaignforge.jpg',
    tags: ['Automation', 'Campaigns', 'Segments'],
  },
]

export const conceptSection = {
  title: 'E-Commerce & SaaS Interfaces',
  subtitle:
    'Product interface concepts across commerce and software — polished mockups with clear storytelling, ready to replace with live client work.',
}
