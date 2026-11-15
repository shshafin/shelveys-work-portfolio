import { MessageCircle } from 'lucide-react'
import { brand, navLinks } from '../../data/navigation'
import { profile } from '../../data/profile'
import { scrollToId } from '../../lib/utils'

const COPYRIGHT_YEAR = 2026

function LinkedInIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8.5h4V23h-4V8.5zM8.5 8.5h3.8v2h.05c.53-1 1.84-2.05 3.79-2.05 4.05 0 4.8 2.67 4.8 6.14V23h-4v-6.6c0-1.57-.03-3.59-2.19-3.59-2.19 0-2.53 1.71-2.53 3.48V23h-4V8.5z" />
    </svg>
  )
}

function FacebookIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M22 12.07C22 6.48 17.52 2 11.93 2S1.86 6.48 1.86 12.07c0 5.02 3.66 9.18 8.44 9.93v-7.02H7.9v-2.91h2.4V9.84c0-2.37 1.41-3.68 3.57-3.68 1.03 0 2.12.18 2.12.18v2.33h-1.2c-1.18 0-1.55.73-1.55 1.48v1.78h2.64l-.42 2.91h-2.22V22c4.78-.75 8.44-4.91 8.44-9.93z" />
    </svg>
  )
}

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white py-14">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-6 md:grid-cols-3 lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <img src={brand.logoSrc} alt="" className="h-11 w-11 rounded-lg object-contain" />
            <span className="font-display text-lg font-semibold tracking-tight">
              <span className="text-slate-900">SHELVEYS</span>
              <span className="text-brand-blue">WORK</span>
            </span>
          </div>
          <p className="mt-3 max-w-xs font-body text-sm leading-6 text-slate-500">{profile.tagline}</p>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-[0.08em] text-slate-900">
            Navigation
          </h4>
          <div className="mt-4 flex flex-col items-start gap-2.5">
            {navLinks.map((link) => (
              <button
                key={link.label}
                type="button"
                onClick={() => scrollToId(link.href)}
                className="font-body text-sm text-slate-500 transition hover:text-brand-blue"
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-[0.08em] text-slate-900">
            Connect
          </h4>
          <div className="mt-4 flex gap-3">
            <a
              href={profile.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="rounded-lg border border-slate-200 p-2 text-brand-blue transition hover:bg-blue-50"
            >
              <LinkedInIcon />
            </a>
            <a
              href={profile.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="rounded-lg border border-slate-200 p-2 text-brand-blue transition hover:bg-blue-50"
            >
              <FacebookIcon />
            </a>
            <a
              href={profile.social.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="rounded-lg border border-slate-200 p-2 text-brand-blue transition hover:bg-blue-50"
            >
              <MessageCircle size={18} />
            </a>
          </div>
          <p className="mt-4 font-body text-sm leading-6 text-slate-500">{profile.contact.address}</p>
          <a
            href={`mailto:${profile.contact.email}`}
            className="mt-2 inline-block font-body text-sm font-medium text-brand-blue hover:text-blue-700"
          >
            {profile.contact.email}
          </a>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-7xl border-t border-slate-200 px-5 pt-6 sm:px-6 lg:px-8">
        <p className="text-center font-body text-xs text-slate-500">
          © {COPYRIGHT_YEAR} {profile.name}. All rights reserved.
        </p>
        <p className="mt-1 text-center font-body text-xs text-slate-400">
          Built with precision. Delivered with integrity.
        </p>
      </div>
    </footer>
  )
}
