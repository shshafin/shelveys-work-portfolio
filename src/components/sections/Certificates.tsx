import { useState } from 'react'
import { X } from 'lucide-react'
import { certificates, certificatesSection } from '../../data/certificates'
import { SectionHeading } from '../ui/SectionHeading'

/** Hidden by default via siteConfig; retained for reversible restore (R08). */
export function Certificates() {
  const [active, setActive] = useState<string | null>(null)

  return (
    <section id="certificates" className="section-shell bg-white">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <SectionHeading
          title={certificatesSection.title}
          subtitle={certificatesSection.subtitle}
        />
        <p className="mt-3 text-center font-body text-xs text-slate-500">
          Click to view credential details
        </p>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {certificates.map((cert) => (
            <button
              key={cert.id}
              type="button"
              onClick={() => setActive(cert.image)}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white text-left transition hover:border-blue-200 hover:shadow-gold"
            >
              <img
                src={cert.image}
                alt={cert.title}
                className="aspect-[4/3] w-full object-cover"
                loading="lazy"
              />
              <div className="p-4">
                <h3 className="font-display text-base font-semibold tracking-tight text-slate-900">
                  {cert.title}
                </h3>
                <p className="mt-1 font-body text-xs text-slate-500">{cert.issuer}</p>
                <p className="mt-2 font-display text-xs font-semibold text-brand-blue">{cert.year}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {active ? (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-slate-900/80 p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Certificate preview"
          onClick={() => setActive(null)}
        >
          <button
            type="button"
            className="absolute right-4 top-4 rounded-lg bg-white/10 p-2 text-white"
            aria-label="Close certificate preview"
            onClick={() => setActive(null)}
          >
            <X />
          </button>
          <img
            src={active}
            alt="Certificate detail"
            className="max-h-[90vh] max-w-full rounded-lg object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      ) : null}
    </section>
  )
}
