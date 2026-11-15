import { motion } from 'framer-motion'
import { skillCategories, skillsSection } from '../../data/skills'
import { SectionHeading } from '../ui/SectionHeading'
import { useInView } from '../../hooks/useInView'

/** Hidden by default via siteConfig; retained for reversible restore (R08). */
export function Skills() {
  const { ref, inView } = useInView<HTMLDivElement>()

  return (
    <section id="skills" className="section-shell bg-slate-50">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8" ref={ref}>
        <SectionHeading title={skillsSection.title} subtitle={skillsSection.subtitle} />
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {skillCategories.map((cat, i) => (
            <div key={cat.category} className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
              <h3 className="font-display text-base font-semibold tracking-tight text-slate-900">
                {cat.category}
              </h3>
              <div className="mt-4 space-y-4">
                {cat.skills.map((skill, j) => (
                  <div key={skill.name}>
                    <div className="mb-1.5 flex justify-between gap-2 font-body text-xs text-slate-700 sm:text-sm">
                      <span>{skill.name}</span>
                      <span className="font-display text-xs font-semibold text-brand-blue">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-1.5 overflow-hidden rounded-full bg-slate-100">
                      <motion.div
                        className="h-full rounded-full bg-brand-blue"
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 0.9, delay: i * 0.04 + j * 0.04 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
