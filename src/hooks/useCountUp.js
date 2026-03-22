import { useState, useEffect, useRef } from 'react'

export function useCountUp(target, duration = 1800, startOnView = true) {
  const [count, setCount]     = useState(0)
  const [started, setStarted] = useState(!startOnView)
  const ref                   = useRef(null)

  // Intersection Observer — starts count only when stat scrolls into view
  useEffect(() => {
    if (!startOnView) return
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true) },
      { threshold: 0.5 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [startOnView])

  // Count up animation
  useEffect(() => {
    if (!started) return

    let startTime = null
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)

      // Ease out cubic — fast start, slows to a stop
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * target))

      if (progress < 1) requestAnimationFrame(step)
      else setCount(target) // land exactly on target
    }

    requestAnimationFrame(step)
  }, [started, target, duration])

  return { count, ref }
}