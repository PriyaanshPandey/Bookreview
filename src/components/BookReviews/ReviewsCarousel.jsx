import { useState, useRef } from 'react'
import BookCard from './BookCard'
import styles from './ReviewsCarousel.module.css'

export default function ReviewsCarousel({ books }) {
  const [index, setIndex] = useState(0)
  const total = books.length
  const VISIBLE = 2 // cards shown at once

  const canPrev = index > 0
  const canNext = index + VISIBLE < total

  return (
    <div className={styles.wrapper}>

      <div className={styles.stack}>
        {books.slice(index, index + VISIBLE).map(book => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>

      <div className={styles.controls}>
        <button
          className={`neo-card ${styles.btn}`}
          onClick={() => setIndex(i => Math.max(0, i - 1))}
          disabled={!canPrev}
          aria-label="Previous"
        >
          ←
        </button>

        <span className={styles.counter}>
          {index + 1}–{Math.min(index + VISIBLE, total)} / {total}
        </span>

        <button
          className={`neo-card ${styles.btn}`}
          onClick={() => setIndex(i => Math.min(total - VISIBLE, i + 1))}
          disabled={!canNext}
          aria-label="Next"
        >
          →
        </button>
      </div>

    </div>
  )
}