import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { caseStudies, portfolioSection } from '../../data/projects'
import { conceptProjects, conceptSection } from '../../data/conceptProjects'
import { SectionHeading } from '../ui/SectionHeading'
import { CreativeGallery } from './CreativeGallery'
import { useInView } from '../../hooks/useInView'

type ConceptFilter = 'All' | 'E-Commerce' | 'SaaS'

export function Portfolio() {
  const { ref, inView } = useInView<HTMLDivElement>()
  const [filter, setFilter] = useState<ConceptFilter>('All')

  const filteredConcepts = useMemo(() => {
    if (filter === 'All') return conceptProjects
    return conceptProjects.filter((p) => p.category === filter)
  }, [filter])

  return (
    <section id="portfolio" className="section-shell scroll-mt-24 bg-white">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8" ref={ref}>
        <SectionHeading
          title={
            <>
              Featured <span className="text-brand-blue">Case Studies</span>
            </>
          }
          subtitle={portfolioSection.subtitle}
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-2 lg:gap-8">
          {caseStudies.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-gold"
            >
              <div className="relative h-52 overflow-hidden bg-slate-50 sm:h-64">
                <img
                  src={project.image}
                  alt={`${project.title} preview`}
                  className="h-full w-full object-cover object-top transition duration-700 group-hover:scale-[1.04]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/55 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
                  <span className="rounded-full bg-white/95 px-3 py-1 font-body text-[11px] font-medium text-slate-700">
                    {project.industry}
                  </span>
                  <span className="rounded-full bg-brand-blue px-3 py-1 font-body text-[11px] font-medium text-white">
                    {project.duration}
                  </span>
                </div>
              </div>
              <div className="p-6 sm:p-8">
                <h3 className="font-display text-xl font-semibold tracking-tight text-slate-900 sm:text-[1.35rem]">
                  {project.title}
                </h3>
                <div className="mt-5 space-y-3.5 font-body text-[14px] leading-7 text-slate-700">
                  <p>
                    <span className="mr-2 font-semibold text-slate-900">Challenge</span>
                    {project.challenge}
                  </p>
                  <p>
                    <span className="mr-2 font-semibold text-brand-blue">Solution</span>
                    {project.solution}
                  </p>
                  <p>
                    <span className="mr-2 font-semibold text-emerald-700">Result</span>
                    {project.result}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-24">
          <SectionHeading
            title={
              <>
                E-Commerce & <span className="text-brand-blue">SaaS</span> Interfaces
              </>
            }
            subtitle={conceptSection.subtitle}
          />

          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {(['All', 'E-Commerce', 'SaaS'] as ConceptFilter[]).map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setFilter(item)}
                className={`cursor-pointer rounded-full px-4 py-2.5 font-body text-sm font-semibold transition ${
                  filter === item
                    ? 'bg-brand-blue text-white shadow-sm'
                    : 'border border-slate-200 bg-white text-slate-600 hover:border-blue-200 hover:text-brand-blue'
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {filteredConcepts.map((project, index) => (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.12 }}
                transition={{ delay: Math.min(index * 0.05, 0.35), duration: 0.45 }}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-gold"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                  <img
                    src={project.image}
                    alt={`${project.title} interface`}
                    className="h-full w-full object-cover object-top transition duration-700 group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                  <div className="absolute left-3 top-3 flex flex-wrap gap-2">
                    <span className="rounded-full bg-white/95 px-2.5 py-1 font-body text-[10px] font-semibold uppercase tracking-wide text-slate-700">
                      {project.category}
                    </span>
                    <span className="rounded-full bg-brand-blue px-2.5 py-1 font-body text-[10px] font-semibold text-white">
                      {project.industry}
                    </span>
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <h3 className="font-display text-lg font-semibold tracking-tight text-slate-900">
                    {project.title}
                  </h3>
                  <div className="mt-3.5 flex-1 space-y-2.5 font-body text-[13px] leading-6 text-slate-700 sm:text-[14px] sm:leading-7">
                    <p>
                      <span className="mr-1.5 font-semibold text-slate-900">Challenge</span>
                      {project.challenge}
                    </p>
                    <p>
                      <span className="mr-1.5 font-semibold text-brand-blue">Solution</span>
                      {project.solution}
                    </p>
                    <p>
                      <span className="mr-1.5 font-semibold text-emerald-700">Result</span>
                      {project.result}
                    </p>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-1.5 border-t border-slate-100 pt-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md bg-slate-50 px-2 py-1 font-body text-[11px] text-slate-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        <CreativeGallery />
      </div>
    </section>
  )
}
