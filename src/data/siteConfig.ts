/**
 * Feature flags for reversible section visibility.
 * Data/components remain in the codebase; only rendering is gated.
 */
export const siteConfig = {
  sections: {
    process: true,
    skills: false, // R08 — likely removal per client X mark; reversible
    trust: true,
    testimonials: true,
    certificates: false, // R08 — clearly marked for removal
    portfolio: true,
    services: true,
    contact: true,
    chat: true,
  },
} as const
