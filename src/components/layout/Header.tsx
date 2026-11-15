import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { brand, headerCta, navLinks } from '../../data/navigation'
import { scrollToId } from '../../lib/utils'

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const go = (href: string) => {
    setOpen(false)
    scrollToId(href)
  }

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-shadow ${scrolled ? 'shadow-sm' : ''}`}>
      <div className="border-b border-slate-200/90 bg-white/95 backdrop-blur-md">
        <nav
          className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 px-5 sm:h-[4.25rem] sm:px-6 lg:px-8"
          aria-label="Primary"
        >
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex shrink-0 items-center gap-2.5 rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue"
            aria-label="ShelveysWork home"
          >
            <img src={brand.logoSrc} alt="" className="h-8 w-8 rounded-md object-contain" />
            <span className="font-display text-[1.05rem] font-semibold tracking-tight sm:text-lg">
              <span className="text-slate-900">{brand.nameLeft}</span>
              <span className="text-brand-blue">{brand.nameRight}</span>
            </span>
          </button>

          <div className="hidden items-center gap-1 lg:flex xl:gap-1.5">
            {navLinks.map((link) => (
              <button
                key={link.href + link.label}
                type="button"
                onClick={() => go(link.href)}
                className="rounded-md px-2.5 py-2 font-body text-[13px] font-medium text-slate-600 transition hover:bg-slate-50 hover:text-slate-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue xl:px-3"
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => go(headerCta.href)}
              className="hidden rounded-full bg-brand-blue px-4 py-2.5 font-body text-[13px] font-semibold text-white transition hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue sm:inline-flex"
            >
              {headerCta.label}
            </button>
            <button
              type="button"
              className="inline-flex rounded-md p-2 text-slate-800 hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue lg:hidden"
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? 'Close menu' : 'Open menu'}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </nav>
      </div>

      {open ? (
        <div
          id="mobile-nav"
          className="border-b border-slate-200 bg-white lg:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          <div className="mx-auto flex max-w-7xl flex-col gap-0.5 px-4 py-3 sm:px-6">
            {navLinks.map((link) => (
              <button
                key={`m-${link.label}`}
                type="button"
                onClick={() => go(link.href)}
                className="rounded-lg px-3 py-3 text-left font-body text-[15px] font-medium text-slate-700 hover:bg-slate-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue"
              >
                {link.label}
              </button>
            ))}
            <button
              type="button"
              onClick={() => go(headerCta.href)}
              className="mt-2 rounded-full bg-brand-blue px-4 py-3 font-body text-sm font-semibold text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue"
            >
              {headerCta.label}
            </button>
          </div>
        </div>
      ) : null}
    </header>
  )
}
