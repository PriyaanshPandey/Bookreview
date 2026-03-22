import styles from './BookCard.module.css'

function StarRating({ rating, max = 5 }) {
  return (
    <span className={styles.stars} aria-label={`${rating} out of ${max} stars`}>
      {Array.from({ length: max }, (_, i) => (i < rating ? '★' : '☆')).join('')}
    </span>
  )
}

function BookCover({ image, title, genre }) {
  if (image) return <img src={image} alt={`Cover of ${title}`} className={styles.coverImg} />
  return (
    <div className={styles.coverPlaceholder}>
      <span className={styles.coverIcon}>📖</span>
      <span className={styles.coverGenre}>{genre}</span>
    </div>
  )
}

export default function BookCard({ book }) {
  const { title, author, coverImage, rating, genre, tags, verdict, excerpt, readDate, pages } = book
  return (
    <article className={`neo-card ${styles.card}`}>

      {/* LEFT — cover */}
      <div className={styles.cover}>
        <BookCover image={coverImage} title={title} genre={genre} />
      </div>

      {/* RIGHT — content */}
      <div className={styles.body}>

        {/* Top row: rating + read date */}
        <div className={styles.topRow}>
          <StarRating rating={rating} />
          <span className={styles.readDate}>Read: {readDate}</span>
        </div>

        {/* Title + author */}
        <div className={styles.titleBlock}>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.author}>by {author}</p>
        </div>

        {/* Genre tag */}
        <span className={`neo-tag ${styles.genreTag}`}>{genre}</span>

        <hr className={styles.divider} />

        {/* Verdict */}
        <div className={styles.verdictBlock}>
          <span className={styles.verdictLabel}>VERDICT</span>
          <p className={styles.verdict}>"{verdict}"</p>
        </div>

        {/* Excerpt */}
        <p className={styles.excerpt}>{excerpt}</p>

        {/* Tags */}
        <div className={styles.tagRow}>
          {tags.map(tag => (
            <span key={tag} className={`neo-tag ${styles.tag}`}>#{tag}</span>
          ))}
        </div>

        {/* Footer */}
        <div className={styles.footer}>
          <span className={styles.footerMeta}>{pages} pages</span>
        </div>

      </div>
    </article>
  )
}