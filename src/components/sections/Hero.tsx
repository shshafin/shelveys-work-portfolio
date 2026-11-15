import { ArrowRight, Briefcase, Calendar, Download, Star } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'
import { heroStats, profile } from '../../data/profile'
import { scrollToId } from '../../lib/utils'

const iconMap = {
  calendar: Calendar,
  star: Star,
  briefcase: Briefcase,
}

export function Hero() {
  const reduceMotion = useReducedMotion()

  return (
    <section id="hero" className="relative overflow-hidden pt-24 sm:pt-28">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[12%] top-24 h-56 w-56 rounded-full bg-blue-100/70 blur-[90px]" />
        <div className="absolute bottom-10 right-[8%] h-64 w-64 rounded-full bg-slate-200/60 blur-[100px]" />
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 pb-20 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:px-8 lg:pb-28 lg:pt-6">
        <div className="order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex rounded-full border border-blue-100 bg-blue-50 px-3.5 py-1.5 font-display text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-blue">
              {profile.eyebrow}
            </span>

            <h1 className="mt-6 max-w-xl font-display text-[2.35rem] font-semibold tracking-tight text-slate-900 sm:text-5xl lg:text-[3.4rem] lg:leading-[1.08]">
              {profile.intro.split('Shelvey Dias')[0]}
              <span className="text-brand-blue">Shelvey Dias</span>
            </h1>

            <p className="mt-5 max-w-xl font-display text-lg font-medium leading-snug text-slate-700 sm:text-xl">
              {profile.tagline}
            </p>

            <p className="mt-5 max-w-xl font-body text-[15px] leading-7 text-slate-700 sm:text-base sm:leading-8">
              {profile.description}
            </p>
          </motion.div>

          <div className="mt-9 grid grid-cols-3 gap-3">
            {heroStats.map((stat, i) => {
              const Icon = iconMap[stat.icon]
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 + i * 0.06 }}
                  className="rounded-2xl border border-slate-200/90 bg-white px-3 py-4 shadow-sm sm:px-4"
                >
                  <Icon className="mb-3 text-brand-blue" size={18} />
                  <span className="block font-display text-xl font-semibold text-slate-900 sm:text-2xl">
                    {stat.value}
                  </span>
                  <span className="mt-1.5 block font-body text-[11px] leading-snug text-slate-500 sm:text-xs">
                    {stat.label}
                  </span>
                </motion.div>
              )
            })}
          </div>

          <div className="mt-9 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => scrollToId('#portfolio')}
              className="inline-flex items-center gap-2 rounded-full bg-brand-blue px-6 py-3 font-body text-sm font-semibold text-white transition hover:bg-blue-700"
            >
              Works <ArrowRight size={16} />
            </button>
            <a
              href={profile.cvLink}
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3 font-body text-sm font-semibold text-slate-800 transition hover:border-brand-blue hover:text-brand-blue"
            >
              <Download size={16} /> CV
            </a>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.55 }}
          className="order-1 mx-auto w-full max-w-md lg:order-2 lg:max-w-lg"
        >
          <motion.div
            animate={reduceMotion ? undefined : { y: [0, -8, 0] }}
            transition={{ duration: 6.5, repeat: Infinity, ease: 'easeInOut' }}
            className="overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-gold"
          >
            <picture>
              <source srcSet="/shelvey-portrait-updated.webp" type="image/webp" />
              <img
                src={profile.image}
                alt={profile.imageAlt}
                width={1254}
                height={1254}
                className="aspect-[4/5] w-full object-cover object-[center_18%]"
                decoding="async"
                fetchPriority="high"
              />
            </picture>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
