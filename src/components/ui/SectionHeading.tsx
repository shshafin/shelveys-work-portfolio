import type { ReactNode } from 'react'
import { cn } from '../../lib/utils'

type Props = {
  title: ReactNode
  subtitle?: string
  className?: string
}

export function SectionHeading({ title, subtitle, className }: Props) {
  return (
    <div className={cn('mx-auto max-w-2xl text-center', className)}>
      <h2 className="font-display text-[1.85rem] font-semibold tracking-tight text-slate-900 sm:text-4xl sm:leading-[1.15]">
        {title}
      </h2>
      {subtitle ? (
        <p className="mx-auto mt-4 max-w-xl font-body text-[15px] leading-7 text-slate-700 sm:text-base">
          {subtitle}
        </p>
      ) : null}
      <div className="mx-auto mt-7 h-px w-12 bg-brand-blue" aria-hidden />
    </div>
  )
}
