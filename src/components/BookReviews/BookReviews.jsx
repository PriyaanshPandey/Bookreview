import { useState } from 'react'
import BookCard from './BookCard'
import { reviews } from '../../data/books'
import styles from './BookReviews.module.css'

const ALL_GENRES = ['All', ...Array.from(new Set(reviews.map(r => r.genre)))]
const VISIBLE = 2

export default function BookReviews() {
  const [activeGenre, setActiveGenre] = useState('All')
  const [sortBy, setSortBy] = useState('latest')
  const [index, setIndex] = useState(0)

  const filtered = reviews
    .filter(r => activeGenre === 'All' || r.genre === activeGenre)
    .sort((a, b) => sortBy === 'rating' ? b.rating - a.rating : b.id - a.id)

  const total = filtered.length
  const canPrev = index > 0
  const canNext = index + VISIBLE < total

  const handleGenre = (genre) => { setActiveGenre(genre); setIndex(0) }
  const handleSort  = (val)   => { setSortBy(val);        setIndex(0) }

  const visible = filtered.slice(index, index + VISIBLE)

  return (
    <section id="reviews" className={styles.section}>
      <div className={styles.inner}>

       
        <div className={styles.header}>
          <div>
            <h2 className="section-title">Book Reviews</h2>
            <div className="section-divider" />
            <p className={styles.subtitle}>Honest takes. No sponsorships. No mercy.</p>
          </div>
          <div className={styles.sortWrap}>
            <label className={styles.sortLabel}>Sort by</label>
            <select
              className={styles.sortSelect}
              value={sortBy}
              onChange={e => handleSort(e.target.value)}
            >
              <option value="latest">Latest</option>
              <option value="rating">Rating</option>
            </select>
          </div>
        </div>

       
        <div className={styles.filters}>
          {ALL_GENRES.map(genre => (
            <button
              key={genre}
              className={`${styles.filterBtn} ${activeGenre === genre ? styles.filterActive : ''}`}
              onClick={() => handleGenre(genre)}
            >{genre}</button>
          ))}
        </div>

       
        {filtered.length > 0 ? (
          <div className={styles.carouselWrap}>
            <div className={styles.stack}>
              {visible.map(book => <BookCard key={book.id} book={book} />)}
            </div>

            {total > VISIBLE && (
              <div className={styles.controls}>
                <button
                  className={styles.navBtn}
                  onClick={() => setIndex(i => Math.max(0, i - 1))}
                  disabled={!canPrev}
                  aria-label="Previous"
                >←</button>

                <span className={styles.counter}>
                  {index + 1}–{Math.min(index + VISIBLE, total)} of {total}
                </span>

                <button
                  className={styles.navBtn}
                  onClick={() => setIndex(i => Math.min(total - VISIBLE, i + 1))}
                  disabled={!canNext}
                  aria-label="Next"
                >→</button>
              </div>
            )}
          </div>
        ) : (
          <div className={styles.empty}>No reviews in this genre yet 🥀</div>
        )}

      </div>
    </section>
  )
}
