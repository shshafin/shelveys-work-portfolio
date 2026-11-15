export type Service = {
  id: string
  icon: string
  title: string
  shortDesc: string
  description: string
  features: string[]
  tag: string
  highlighted?: boolean
  group?: 'core' | 'tech' | 'growth' | 'support'
}

/**
 * R03 — Preserve original services and ADD five highlighted categories.
 * Original Web Development retained; Website Development from reference
 * is treated as the same offering (no duplicate card).
 */
export const services: Service[] = [
  {
    id: 'web-development',
    icon: 'code',
    title: 'Web Development',
    shortDesc: 'Clean, fast, conversion-optimized websites built for business impact.',
    description:
      'From corporate landing pages to full business websites, I deliver web solutions that are visually compelling, technically sound, and built to convert visitors into clients.',
    features: ['Responsive Design', 'SEO-Ready Architecture', 'Fast Load Times', 'CMS Integration'],
    tag: 'Core Service',
    group: 'core',
  },
  {
    id: 'mobile-app-development',
    icon: 'smartphone',
    title: 'Mobile App Development',
    shortDesc: 'Android, iOS and cross-platform apps for customers, teams and operations.',
    description:
      'Practical mobile applications designed around real business workflows — from customer-facing apps to internal operational tools.',
    features: ['Android & iOS', 'Cross-Platform Options', 'User-Focused UX', 'API Integration'],
    tag: 'Highlighted',
    highlighted: true,
    group: 'tech',
  },
  {
    id: 'erp-business-systems',
    icon: 'layout-grid',
    title: 'ERP & Business Systems',
    shortDesc: 'Connect inventory, sales, purchasing, HR and reporting around your operation.',
    description:
      'Business systems that reduce manual work and give leadership clearer visibility across day-to-day operations.',
    features: ['Process Mapping', 'Module Integration', 'Reporting Workflows', 'Team Adoption Support'],
    tag: 'Highlighted',
    highlighted: true,
    group: 'tech',
  },
  {
    id: 'saas-custom-software',
    icon: 'cloud',
    title: 'SaaS & Custom Software',
    shortDesc: 'Cloud apps, portals and custom software built around a clear business need.',
    description:
      'Custom software and SaaS-style tools scoped to solve specific operational problems without unnecessary complexity.',
    features: ['Requirement Scoping', 'Portals & Dashboards', 'Cloud Delivery', 'Iterative Delivery'],
    tag: 'Highlighted',
    highlighted: true,
    group: 'tech',
  },
  {
    id: 'business-automation',
    icon: 'workflow',
    title: 'Business Automation',
    shortDesc: 'Reduce repetitive work with approvals, notifications and task flows.',
    description:
      'Automate repeatable processes so teams spend less time on manual follow-ups and more time on work that moves the business.',
    features: ['Approval Flows', 'Notifications', 'Task Automation', 'Ops Reporting'],
    tag: 'Highlighted',
    highlighted: true,
    group: 'tech',
  },
  {
    id: 'data-dashboards',
    icon: 'chart-column',
    title: 'Data & Dashboards',
    shortDesc: 'KPI dashboards and reports that support clearer business decisions.',
    description:
      'Turn scattered operational data into practical summaries and dashboards leaders can actually use.',
    features: ['KPI Design', 'Data Cleanup', 'Visual Dashboards', 'Decision Reports'],
    tag: 'Highlighted',
    highlighted: true,
    group: 'tech',
  },
  {
    id: 'lead-generation',
    icon: 'target',
    title: 'Lead Generation',
    shortDesc: 'Building systematic pipelines that bring qualified prospects to your door.',
    description:
      'Stop chasing cold leads. I build repeatable outreach systems using LinkedIn, email sequences, and multi-channel funnels that deliver warm, qualified leads consistently.',
    features: ['LinkedIn Outreach Systems', 'Email Sequence Strategy', 'Prospect Research', 'CRM Integration'],
    tag: 'High Impact',
    group: 'growth',
  },
  {
    id: 'digital-marketing-seo',
    icon: 'trending-up',
    title: 'Digital Marketing & SEO',
    shortDesc: 'Grow visibility with SEO, paid campaigns, content and performance marketing.',
    description:
      'Performance-focused digital marketing that combines search visibility, paid media and content strategy around measurable business goals.',
    features: ['SEO Foundations', 'Paid Campaigns', 'Content Strategy', 'Performance Reporting'],
    tag: 'Growth',
    group: 'growth',
  },
  {
    id: 'paid-ads',
    icon: 'megaphone',
    title: 'Paid Ads Management',
    shortDesc: 'Every dollar tracked. Every campaign optimized for maximum return.',
    description:
      'Data-driven paid advertising across Meta, Google, and LinkedIn with continuous testing and ROI-focused management.',
    features: ['Meta Ads (FB/IG)', 'Google Ads', 'LinkedIn Ads', 'ROI Reporting & Optimization'],
    tag: 'Performance',
    group: 'growth',
  },
  {
    id: 'brand-marketing',
    icon: 'star',
    title: 'Brand Marketing',
    shortDesc: 'Building brands that people remember, trust, and advocate for.',
    description:
      'Cohesive brand strategies that align visual identity, messaging, and market positioning into a unified presence.',
    features: ['Brand Strategy', 'Identity Development', 'Messaging Framework', 'Brand Guidelines'],
    tag: 'Strategy',
    group: 'growth',
  },
  {
    id: 'social-media',
    icon: 'share-2',
    title: 'Social Media & Creative',
    shortDesc: 'Consistent brand presence with content planning and audience engagement.',
    description:
      'End-to-end social media management and creative support so your brand shows up consistently and professionally.',
    features: ['Content Strategy', 'Platform Management', 'Campaign Creatives', 'Community Engagement'],
    tag: 'Growth',
    group: 'growth',
  },
  {
    id: 'email-marketing',
    icon: 'mail',
    title: 'Email Marketing',
    shortDesc: 'Sequences that nurture, engage, and convert — not just send.',
    description:
      'Strategic email marketing from welcome flows to re-engagement campaigns, designed for the right stage of the journey.',
    features: ['Sequence Design', 'List Segmentation', 'A/B Testing', 'Deliverability Optimization'],
    tag: 'Nurture',
    group: 'growth',
  },
  {
    id: 'research-data',
    icon: 'search',
    title: 'Online Research & Data Collection',
    shortDesc: 'Accurate, organized data that fuels smarter business decisions.',
    description:
      'Thorough online research and structured data collection for market analysis, competitor research, and lead lists.',
    features: ['Market Research', 'Competitor Analysis', 'Lead List Building', 'Data Cleaning & Formatting'],
    tag: 'Research',
    group: 'support',
  },
  {
    id: 'virtual-assistance',
    icon: 'headset',
    title: 'Virtual Assistance',
    shortDesc: 'Executive-level support so you focus on what actually moves the needle.',
    description:
      'Professional virtual assistance for busy executives and growing businesses — reliable, discreet, and detail-oriented.',
    features: ['Email & Calendar Management', 'Research & Reporting', 'Client Communication', 'Process Documentation'],
    tag: 'Support Service',
    group: 'support',
  },
  {
    id: 'website-management',
    icon: 'settings',
    title: 'Support & Improvement',
    shortDesc: 'Maintenance, enhancements and support so digital tools stay useful.',
    description:
      'Ongoing care including updates, security monitoring, performance optimization, feature improvements and practical support.',
    features: ['Regular Updates', 'Security Monitoring', 'Feature Enhancements', 'Training & Support'],
    tag: 'Maintenance',
    group: 'support',
  },
]

export const servicesSection = {
  title: 'What I Do',
  subtitle: 'Technology, marketing and operational support — combined with the solutions businesses ask for most.',
}
