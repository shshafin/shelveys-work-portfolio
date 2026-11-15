import type { ComponentType } from 'react'
import {
  ChartColumn,
  Cloud,
  Code2,
  Headset,
  LayoutGrid,
  Mail,
  Megaphone,
  Search,
  Settings,
  Share2,
  Smartphone,
  Star,
  Target,
  TrendingUp,
  Workflow,
} from 'lucide-react'
import { motion } from 'framer-motion'
import { services, servicesSection } from '../../data/services'
import { SectionHeading } from '../ui/SectionHeading'
import { scrollToId } from '../../lib/utils'
import { useInView } from '../../hooks/useInView'

const icons: Record<string, ComponentType<{ className?: string; size?: number }>> = {
  code: Code2,
  smartphone: Smartphone,
  'layout-grid': LayoutGrid,
  cloud: Cloud,
  workflow: Workflow,
  'chart-column': ChartColumn,
  target: Target,
  'trending-up': TrendingUp,
  megaphone: Megaphone,
  star: Star,
  'share-2': Share2,
  mail: Mail,
  search: Search,
  headset: Headset,
  settings: Settings,
}

export function Services() {
  const { ref, inView } = useInView<HTMLDivElement>()

  return (
    <section id="services" className="section-shell bg-white">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8" ref={ref}>
        <SectionHeading
          title={
            <>
              What I <span className="text-brand-blue">Do</span>
            </>
          }
          subtitle={servicesSection.subtitle}
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {services.map((service, index) => {
            const Icon = icons[service.icon] ?? Code2
            return (
              <motion.article
                key={service.id}
                id={`service-${service.id}`}
                initial={{ opacity: 0, y: 22 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: Math.min(index * 0.04, 0.4), duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="group scroll-mt-28 rounded-2xl border border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-gold sm:p-7"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-brand-blue">
                  <Icon size={20} />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold tracking-tight text-slate-900">
                  {service.title}
                </h3>
                <p className="mt-2.5 font-body text-[14px] leading-7 text-slate-700">
                  {service.shortDesc}
                </p>
                <ul className="mt-5 space-y-2">
                  {service.features.slice(0, 3).map((feature) => (
                    <li key={feature} className="flex items-start gap-2 font-body text-[13px] text-slate-600">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand-blue" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button
                  type="button"
                  onClick={() => scrollToId('#contact')}
                  className="mt-6 inline-flex items-center gap-1 font-body text-sm font-semibold text-brand-blue transition hover:text-blue-700"
                >
                  Discuss this service →
                </button>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
