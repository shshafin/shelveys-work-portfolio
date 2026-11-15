import { useEffect, useRef } from 'react'

/** Continuous horizontal marquee via rAF — works even when CSS reduced-motion kills keyframes. */
export function useMarquee(direction: 'left' | 'right', speedPxPerSec = 36) {
  const trackRef = useRef<HTMLDivElement>(null)
  const pausedRef = useRef(false)

  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    let offset = 0
    let raf = 0
    let last = performance.now()
    let ready = false

    const measure = () => track.scrollWidth / 2

    // Start right-row from halfway so both directions look continuous immediately
    const boot = () => {
      const half = measure()
      if (half > 0) {
        offset = direction === 'right' ? -half : 0
        track.style.transform = `translate3d(${offset}px, 0, 0)`
        ready = true
      }
    }

    boot()
    const ro = new ResizeObserver(boot)
    ro.observe(track)

    const tick = (now: number) => {
      const dt = Math.min((now - last) / 1000, 0.064)
      last = now

      if (ready && !pausedRef.current && !document.hidden) {
        const half = measure()
        if (half > 0) {
          if (direction === 'left') {
            offset -= speedPxPerSec * dt
            if (offset <= -half) offset += half
          } else {
            offset += speedPxPerSec * dt
            if (offset >= 0) offset -= half
          }
          track.style.transform = `translate3d(${offset}px, 0, 0)`
        }
      }

      raf = requestAnimationFrame(tick)
    }

    raf = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(raf)
      ro.disconnect()
    }
  }, [direction, speedPxPerSec])

  return {
    trackRef,
    pause: () => {
      pausedRef.current = true
    },
    resume: () => {
      pausedRef.current = false
    },
  }
}
