import ReadingCard from './ReadingCard'
import { currentlyReading } from '../../data/books'
import styles from './CurrentlyReading.module.css'

export default function CurrentlyReading() {
  return (
    <section id="reading" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <h2 className="section-title">Currently Reading</h2>
          <div className="section-divider" />
          <p className={styles.subtitle}>Live from the reading nook.</p>
        </div>
        <div className={styles.grid}>
          {currentlyReading.map(book => <ReadingCard key={book.id} book={book} />)}
        </div>
      </div>
    </section>
  )
}