import type { ComponentType } from 'react'
import {
  BarChart3,
  CheckCircle2,
  ClipboardList,
  Map,
  Rocket,
  Search,
} from 'lucide-react'
import { motion } from 'framer-motion'
import { processSection, processSteps } from '../../data/process'
import { SectionHeading } from '../ui/SectionHeading'
import { useInView } from '../../hooks/useInView'

const icons: Record<string, ComponentType<{ className?: string; size?: number }>> = {
  search: Search,
  'bar-chart': BarChart3,
  clipboard: ClipboardList,
  map: Map,
  'check-circle': CheckCircle2,
  rocket: Rocket,
}

export function Process() {
  const { ref, inView } = useInView<HTMLDivElement>()

  return (
    <section id="process" className="section-shell bg-slate-50">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8" ref={ref}>
        <SectionHeading
          title={
            <>
              How I <span className="text-brand-blue">Work</span>
            </>
          }
          subtitle={processSection.subtitle}
        />

        <div className="mx-auto mt-14 grid max-w-4xl gap-4">
          {processSteps.map((step, index) => {
            const Icon = icons[step.icon] ?? Search
            return (
              <motion.article
                key={step.step}
                initial={{ opacity: 0, y: 14 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.05, duration: 0.4 }}
                className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-7"
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-brand-blue">
                    <Icon size={18} />
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                      <span className="font-display text-xs font-semibold tracking-[0.12em] text-brand-blue">
                        STEP {step.step}
                      </span>
                      <span className="font-body text-xs text-slate-500">{step.phase}</span>
                    </div>
                    <h3 className="mt-2 font-display text-lg font-semibold tracking-tight text-slate-900 sm:text-xl">
                      {step.title}
                    </h3>
                    <p className="mt-2 font-body text-[14px] leading-7 text-slate-700">
                      {step.description}
                    </p>
                    <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                      {step.activities.map((activity) => (
                        <li
                          key={activity}
                          className="flex items-start gap-2 font-body text-[13px] text-slate-600"
                        >
                          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-brand-blue" />
                          {activity}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
