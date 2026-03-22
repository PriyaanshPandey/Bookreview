import { useEffect, useRef } from 'react'
import { useCountUp } from '../../hooks/useCountUp'
import styles from './Hero.module.css'

const FLOATING_BOOKS = [
  { emoji: '📕', x: '72%', y: '12%', size: 52, delay: 0,    duration: 6   },
  { emoji: '📗', x: '85%', y: '55%', size: 38, delay: 1.2,  duration: 8   },
  { emoji: '📘', x: '78%', y: '78%', size: 44, delay: 0.6,  duration: 7   },
  { emoji: '📙', x: '65%', y: '38%', size: 30, delay: 2,    duration: 9   },
  { emoji: '📚', x: '90%', y: '25%', size: 28, delay: 0.3,  duration: 5.5 },
]


function AnimatedStat({ target, suffix = '', label, duration = 1800 }) {
  const { count, ref } = useCountUp(target, duration)
  return (
    <div ref={ref} className={styles.stat}>
      <span className={styles.statValue}>
        {count}{suffix}
      </span>
      <span className={styles.statLabel}>{label}</span>
    </div>
  )
}

export default function Hero() {
  const glowRef = useRef(null)

  useEffect(() => {
    const hero = document.getElementById('hero-section')
    if (!hero || !glowRef.current) return

    function onMove(e) {
      const rect = hero.getBoundingClientRect()
      const x = e.clientX - rect.left - 160
      const y = e.clientY - rect.top  - 160
      glowRef.current.style.transform = `translate(${x}px, ${y}px)`
      glowRef.current.style.opacity   = '1'
    }
    function onLeave() {
      glowRef.current.style.opacity = '0'
    }

    hero.addEventListener('mousemove', onMove)
    hero.addEventListener('mouseleave', onLeave)
    return () => {
      hero.removeEventListener('mousemove', onMove)
      hero.removeEventListener('mouseleave', onLeave)
    }
  }, [])

  return (
    <section id="hero-section" className={styles.hero}>

      <div className={styles.grain} aria-hidden="true" />
      <div ref={glowRef} className={styles.cursorGlow} aria-hidden="true" />

      <div className={styles.floatingLayer} aria-hidden="true">
        {FLOATING_BOOKS.map((book, i) => (
          <span
            key={i}
            className={styles.floatingBook}
            style={{
              left:              book.x,
              top:               book.y,
              fontSize:          `${book.size}px`,
              animationDelay:    `${book.delay}s`,
              animationDuration: `${book.duration}s`,
            }}
          >
            {book.emoji}
          </span>
        ))}
      </div>

      <div className={styles.inner}>
        <div className={styles.badge}>🌹 indie book reviews</div>

        <h1 className={styles.title}>Rosé & Ruins</h1>

        <p className={styles.tagline}>Sipping tea while the plot burns down.</p>

        <div className={styles.actions}>
          <a href="#reviews" className="neo-btn neo-btn-primary">📖 Browse Reviews</a>
          <a href="#mood"    className="neo-btn neo-btn-secondary">🌙 Find by Mood</a>
        </div>

        <div className={styles.stats}>
          <AnimatedStat target={10}  suffix="+"  label="Reviews"  duration={1600} />
          <AnimatedStat target={5}  suffix=""   label="Genres"   duration={1200} />
          <AnimatedStat target={100} suffix="%"  label="Honest"   duration={2000} />
        </div>

        <div className={styles.stamp} aria-hidden="true">
          <span>est.<br />2026</span>
        </div>
      </div>

    </section>
  )
}
