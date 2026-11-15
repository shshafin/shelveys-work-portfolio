export const profile = {
  name: 'Shelvey Dias',
  /** R06 */
  tagline: 'Digital Solutions Strategist & Technology Growth Architect',
  eyebrow: 'Digital Solutions Strategist',
  intro: "Hi, I'm Shelvey Dias",
  /** R06 */
  description:
    'I help businesses grow, innovate and operate smarter through technology and digital strategy. From website and mobile app development to ERP, SaaS solutions, business automation and performance-driven digital marketing, I turn business challenges into practical digital solutions.',
  shortBio:
    'I help businesses grow, innovate and operate smarter through technology and digital strategy.',
  longBio:
    'With hands-on experience across corporate environments, branding agencies, and independent consulting, I bridge the gap between strategic thinking and tactical execution. Every client engagement begins with deep research and ends with trackable outcomes.',
  /** Optimized delivery derivative; original PNG kept at /shelvey-portrait-updated.png */
  image: '/shelvey-portrait-hero.jpg',
  imageAlt: 'Professional portrait of Shelvey Dias, Digital Solutions Strategist',
  cvLink: '/files/shelvey-dias-cv.pdf',
  availableForWork: true,
  contact: {
    email: 'shelveyedias@gmail.com',
    phone: ['01835412133', '01515221032'],
    /** R05 */
    address: 'Chattogram, Bangladesh',
  },
  social: {
    linkedin: 'https://www.linkedin.com/in/shelvey-elmo-dias-449422b1',
    facebook: 'https://www.facebook.com/profile.php?id=61586559831140',
    whatsapp: 'https://wa.me/8801835412133',
    viber: 'viber://add?number=8801835412133',
  },
} as const

/** R07 — experience metric updated to 10 Years; other stats preserved */
export const heroStats = [
  { value: '10', label: 'Years of Experience', icon: 'calendar' as const },
  { value: '100%', label: 'Client Satisfaction Rate', icon: 'star' as const },
  { value: '50+', label: 'Projects Delivered', icon: 'briefcase' as const },
]
