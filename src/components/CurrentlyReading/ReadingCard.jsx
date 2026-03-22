import styles from './ReadingCard.module.css'

export default function ReadingCard({ book }) {
  const { title, author, coverImage, progress, startedDate, hyped, firstImpression, genre } = book
  return (
    <article className={`neo-card ${styles.card}`}>
      <div className={styles.top}>
        <div className={styles.cover}>
          {coverImage
            ? <img src={coverImage} alt={title} className={styles.coverImg} />
            : <div className={styles.coverPlaceholder}><span>📖</span><span className={styles.genreLabel}>{genre}</span></div>
          }
        </div>
        <div className={styles.info}>
          {hyped && <span className={`neo-tag ${styles.hypedTag}`}>🔥 Hyped</span>}
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.author}>by {author}</p>
          <p className={styles.started}>Started {startedDate}</p>
        </div>
      </div>
      <div className={styles.progressSection}>
        <div className={styles.progressHeader}>
          <span className={styles.progressLabel}>Progress</span>
          <span className={styles.progressPct}>{progress}%</span>
        </div>
        <div className={styles.progressTrack}>
          <div className={styles.progressFill} style={{ width: `${progress}%` }} />
        </div>
      </div>
      <div className={styles.impressionSection}>
        <span className={styles.impressionLabel}>Mid-read thoughts</span>
        <p className={styles.impression}>{firstImpression}</p>
      </div>
    </article>
  )
}