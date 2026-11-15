import { useEffect, useState } from 'react'
import { Expand, X } from 'lucide-react'
import { motion } from 'framer-motion'
import { creativeWork, portfolioSection } from '../../data/projects'
import { useMarquee } from '../../hooks/useMarquee'

type Item = (typeof creativeWork)[number]

function GalleryCard({
  item,
  onOpen,
}: {
  item: Item
  onOpen: (item: Item) => void
}) {
  return (
    <button
      type="button"
      onClick={() => onOpen(item)}
      className="group relative w-[15.5rem] shrink-0 cursor-pointer overflow-hidden rounded-2xl border border-slate-200 bg-white text-left shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-gold sm:w-[17.5rem]"
      aria-label={`View ${item.title}`}
    >
      <div className="relative flex h-52 items-center justify-center bg-slate-50 sm:h-56">
        <img
          src={item.image}
          alt={item.title}
          className="max-h-full max-w-full object-contain p-3 transition duration-500 group-hover:scale-[1.03]"
          loading="lazy"
          draggable={false}
        />
        <span className="absolute right-3 top-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/95 text-brand-blue opacity-0 shadow-sm transition group-hover:opacity-100">
          <Expand size={15} />
        </span>
      </div>
      <div className="border-t border-slate-100 px-4 py-3">
        <p className="font-display text-sm font-semibold tracking-tight text-slate-900">
          {item.title}
        </p>
        <p className="mt-0.5 font-body text-xs text-slate-500">Creative asset</p>
      </div>
    </button>
  )
}

function MarqueeRow({
  items,
  direction,
  speed,
  onOpen,
}: {
  items: Item[]
  direction: 'left' | 'right'
  speed: number
  onOpen: (item: Item) => void
}) {
  const { trackRef, pause, resume } = useMarquee(direction, speed)
  const loop = [...items, ...items]

  return (
    <div
      className="overflow-hidden"
      onMouseEnter={pause}
      onMouseLeave={resume}
      onFocusCapture={pause}
      onBlurCapture={resume}
    >
      <div ref={trackRef} className="flex w-max gap-5 will-change-transform">
        {loop.map((item, i) => (
          <GalleryCard key={`${direction}-${item.id}-${i}`} item={item} onOpen={onOpen} />
        ))}
      </div>
    </div>
  )
}

export function CreativeGallery() {
  const [active, setActive] = useState<Item | null>(null)
  const rowA = creativeWork
  const rowB = [...creativeWork].reverse()

  useEffect(() => {
    if (!active) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActive(null)
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [active])

  return (
    <div className="mt-24">
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.45 }}
        className="mx-auto max-w-2xl text-center"
      >
        <h3 className="font-display text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
          {portfolioSection.galleryTitle}
        </h3>
        <p className="mt-3 font-body text-[15px] leading-7 text-slate-700">
          {portfolioSection.gallerySubtitle}
        </p>
        <div className="mx-auto mt-6 h-px w-12 bg-brand-blue" aria-hidden />
      </motion.div>

      <div className="relative mt-12 space-y-5">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-white via-white/80 to-transparent sm:w-16" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-white via-white/80 to-transparent sm:w-16" />

        <MarqueeRow items={rowA} direction="left" speed={38} onOpen={setActive} />
        <MarqueeRow items={rowB} direction="right" speed={32} onOpen={setActive} />
      </div>

      {active ? (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-slate-950/80 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label={active.title}
          onClick={() => setActive(null)}
        >
          <button
            type="button"
            className="absolute right-4 top-4 cursor-pointer rounded-xl bg-white/10 p-2.5 text-white transition hover:bg-white/20"
            aria-label="Close preview"
            onClick={() => setActive(null)}
          >
            <X size={22} />
          </button>
          <figure
            className="max-h-[90vh] w-full max-w-4xl overflow-hidden rounded-2xl bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={active.image}
              alt={active.title}
              className="max-h-[78vh] w-full object-contain bg-slate-50"
            />
            <figcaption className="border-t border-slate-100 px-5 py-4">
              <p className="font-display text-lg font-semibold text-slate-900">{active.title}</p>
              <p className="mt-1 font-body text-sm text-slate-600">
                Visual branding & corporate creative
              </p>
            </figcaption>
          </figure>
        </div>
      ) : null}
    </div>
  )
}
