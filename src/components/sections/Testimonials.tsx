import { Star } from 'lucide-react'
import { motion } from 'framer-motion'
import { testimonials, testimonialsSection } from '../../data/testimonials'
import { SectionHeading } from '../ui/SectionHeading'

function initials(name: string) {
  return name
    .split(' ')
    .map((p) => p[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()
}

export function Testimonials() {
  return (
    <section id="testimonials" className="section-shell bg-white">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <SectionHeading
          title={
            <>
              Client <span className="text-brand-blue">Testimonials</span>
            </>
          }
          subtitle={testimonialsSection.subtitle}
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {testimonials.map((t, i) => (
            <motion.article
              key={t.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.06, duration: 0.45 }}
              className="flex h-full flex-col rounded-2xl border border-slate-200 bg-slate-50/70 p-6 sm:p-7 transition hover:-translate-y-0.5 hover:shadow-gold"
            >
              <div className="mb-4 flex gap-1">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="fill-brand-blue text-brand-blue" size={14} />
                ))}
              </div>
              <p className="flex-1 font-body text-[14px] leading-7 text-slate-700">“{t.text}”</p>
              <div className="mt-6 flex items-center gap-3 border-t border-slate-200 pt-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 font-display text-xs font-semibold text-brand-blue">
                  {initials(t.name)}
                </div>
                <div>
                  <p className="font-display text-sm font-semibold text-slate-900">{t.name}</p>
                  <p className="font-body text-xs text-slate-500">
                    {t.title} @ {t.company}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
