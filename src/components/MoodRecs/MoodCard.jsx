import styles from './MoodCard.module.css'

function MiniBook({ book, index }) {
  return (
    <div className={styles.miniBook} style={{ animationDelay: `${0.3 + index * 0.08}s` }}>
      {book.coverImage
        ? <img src={book.coverImage} alt={book.title} className={styles.miniCoverImg} />
        : <div className={styles.miniCoverPlaceholder}>📚</div>
      }
      <div className={styles.miniInfo}>
        <span className={styles.miniTitle}>{book.title}</span>
        <span className={styles.miniAuthor}>{book.author}</span>
      </div>
    </div>
  )
}

export default function MoodCard({ mood, animIndex = 0 }) {
  const { mood: label, emoji, color, description, books } = mood

  return (
    <article
      className={`neo-card ${styles.card}`}
      style={{ animationDelay: `${animIndex * 0.1}s` }}
    >
      <div className={styles.cardHeader} style={{ background: color }}>
        <span className={styles.emoji}>{emoji}</span>
        <div>
          <h3 className={styles.moodLabel}>{label}</h3>
          <p className={styles.description}>{description}</p>
        </div>
      </div>

      <div className={styles.bookList}>
        {books.map((book, i) => (
          <MiniBook key={i} book={book} index={i} />
        ))}
      </div>
    </article>
  )
}