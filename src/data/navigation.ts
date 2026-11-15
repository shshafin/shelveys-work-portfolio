export type NavLink = {
  label: string
  href: string
}

/** Clean single-line nav labels mapped to real sections */
export const navLinks: NavLink[] = [
  { label: 'Services', href: '#services' },
  { label: 'App Development', href: '#service-mobile-app-development' },
  { label: 'ERP Solutions', href: '#service-erp-business-systems' },
  { label: 'Digital Marketing', href: '#service-digital-marketing-seo' },
  { label: 'Our Work', href: '#portfolio' },
  { label: 'Contact', href: '#contact' },
]

export const headerCta = {
  label: 'Get a Free Consultation',
  href: '#contact',
} as const

export const brand = {
  nameLeft: 'SHELVEYS',
  nameRight: 'WORK',
  logoSrc: '/logo.png',
} as const
