import type { ComponentType } from 'react'
import {
  Award,
  BarChart3,
  Briefcase,
  Clock3,
  Eye,
  Shield,
  TrendingUp,
  Users,
  Zap,
} from 'lucide-react'
import { motion } from 'framer-motion'
import { experienceBlocks, trustPoints, trustSection, trustStats } from '../../data/trust'
import { SectionHeading } from '../ui/SectionHeading'
import { useInView } from '../../hooks/useInView'

const statIcons = {
  award: Award,
  'trending-up': TrendingUp,
  briefcase: Briefcase,
  zap: Zap,
}

const pointIcons: Record<string, ComponentType<{ className?: string; size?: number }>> = {
  shield: Shield,
  'bar-chart': BarChart3,
  briefcase: Briefcase,
  eye: Eye,
  clock: Clock3,
  users: Users,
}

export function Trust() {
  const { ref, inView } = useInView<HTMLDivElement>()

  return (
    <section id="trust" className="section-shell bg-slate-50">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8" ref={ref}>
        <SectionHeading
          title={
            <>
              {trustSection.titlePrefix}{' '}
              <span className="text-brand-blue">{trustSection.titleHighlight}</span>{' '}
              {trustSection.titleSuffix}
            </>
          }
          subtitle={trustSection.subtitle}
        />

        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
          {trustStats.map((stat, i) => {
            const Icon = statIcons[stat.icon]
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 12 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.08 + i * 0.05 }}
                className="rounded-2xl border border-slate-200 bg-white p-5 text-center"
              >
                <Icon className="mx-auto mb-3 text-brand-blue" size={22} />
                <span className="block font-display text-2xl font-semibold text-slate-900">
                  {stat.value}
                </span>
                <span className="mt-1.5 block font-body text-xs text-slate-500 sm:text-sm">
                  {stat.label}
                </span>
              </motion.div>
            )
          })}
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {trustPoints.map((point, i) => {
            const Icon = pointIcons[point.icon] ?? Shield
            return (
              <motion.article
                key={point.title}
                initial={{ opacity: 0, y: 14 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 + i * 0.04 }}
                className="rounded-2xl border border-slate-200 bg-white p-6"
              >
                <Icon className="text-brand-blue" size={20} />
                <h4 className="mt-4 font-display text-base font-semibold tracking-tight text-slate-900">
                  {point.title}
                </h4>
                <p className="mt-2.5 font-body text-[14px] leading-7 text-slate-700">{point.body}</p>
              </motion.article>
            )
          })}
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {experienceBlocks.map((block) => (
            <article key={block.title} className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-7">
              <h3 className="font-display text-lg font-semibold tracking-tight text-slate-900">
                {block.title}
              </h3>
              <p className="mt-3 font-body text-[14px] leading-7 text-slate-700">{block.body}</p>
              <ul className="mt-4 space-y-2">
                {block.points.map((p) => (
                  <li key={p} className="flex items-start gap-2 font-body text-[13px] text-slate-600">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-brand-blue" />
                    {p}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
