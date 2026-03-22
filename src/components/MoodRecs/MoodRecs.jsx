import { useState, useEffect } from 'react'
import MoodCard from './MoodCard'
import { moodRecs } from '../../data/books'
import styles from './MoodRecs.module.css'

// Floating emojis per mood
const MOOD_FLOATERS = {
  1: ['🥀', '💧', '📖', '🌧️', '🫀'],
  2: ['🖤', '🗡️', '🌑', '💜', '🐍'],
  3: ['🌪️', '⚡', '🎲', '🔥', '💥'],
  4: ['🌙', '⭐', '🦉', '✨', '🌌'],
  5: ['🌹', '🍵', '🧸', '🕯️', '🌸'],
}

const MOOD_TINTS = {
  1: 'rgba(255, 111, 168, 0.07)',
  2: 'rgba(180, 79, 255, 0.07)',
  3: 'rgba(255, 217, 102, 0.07)',
  4: 'rgba(62, 207, 168, 0.07)',
  5: 'rgba(255, 194, 217, 0.1)',
}

function FloatingEmoji({ emoji, index }) {
  const style = {
    left: `${10 + (index * 19) % 80}%`,
    animationDelay: `${index * 0.15}s`,
    animationDuration: `${2.5 + index * 0.4}s`,
    fontSize: `${16 + (index % 3) * 6}px`,
  }
  return (
    <span className={styles.floater} style={style} aria-hidden="true">
      {emoji}
    </span>
  )
}

export default function MoodRecs() {
  const [active, setActive]       = useState(null)
  const [floaters, setFloaters]   = useState([])
  const [tint, setTint]           = useState('transparent')
  const [cardKey, setCardKey]     = useState(0)  // forces re-mount → re-animation

  const displayed = active ? moodRecs.filter(m => m.id === active) : moodRecs

  function handleMoodClick(id) {
    const next = active === id ? null : id
    setActive(next)
    setCardKey(k => k + 1)

    if (next) {
      setTint(MOOD_TINTS[next] || 'transparent')
      setFloaters(MOOD_FLOATERS[next] || [])
      // clear floaters after animation
      setTimeout(() => setFloaters([]), 3000)
    } else {
      setTint('transparent')
      setFloaters([])
    }
  }

  return (
    <section
      id="mood"
      className={styles.section}
      style={{ '--tint': tint }}
    >
      {/* Floating emoji layer */}
      <div className={styles.floaterLayer} aria-hidden="true">
        {floaters.map((emoji, i) => (
          <FloatingEmoji key={`${emoji}-${i}-${cardKey}`} emoji={emoji} index={i} />
        ))}
      </div>

      <div className={styles.inner}>
        <div className={styles.header}>
          <h2 className="section-title">Bookish Recs<br />by Mood</h2>
          <div className="section-divider" />
          <p className={styles.subtitle}>Don't know what to read? Start with how you feel.</p>
        </div>

        {/* Mood pill filters */}
        <div className={styles.moodPills}>
          <button
            className={`${styles.pill} ${active === null ? styles.pillActive : ''}`}
            onClick={() => handleMoodClick(null)}
          >All moods</button>

          {moodRecs.map(m => (
            <button
              key={m.id}
              className={`${styles.pill} ${active === m.id ? styles.pillActive : ''}`}
              style={active === m.id ? { background: m.color, borderColor: '#111', color: '#111' } : {}}
              onClick={() => handleMoodClick(m.id)}
            >
              {m.emoji} {m.mood}
            </button>
          ))}
        </div>

        {/* Cards — key forces remount on mood change = re-triggers animation */}
        <div className={styles.grid}>
          {displayed.map((mood, i) => (
            <MoodCard
              key={`${mood.id}-${cardKey}`}
              mood={mood}
              animIndex={i}
            />
          ))}
        </div>
      </div>
    </section>
  )
}