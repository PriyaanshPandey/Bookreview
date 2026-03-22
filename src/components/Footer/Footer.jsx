import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <span className={styles.logo}>
            <span style={{ color: 'var(--pink-hot)' }}>Rosé</span>{' & '}
            <span style={{ color: 'var(--text-primary)' }}>Ruins</span>
          </span>
          <p className={styles.tagline}>Sipping tea while the plot burns down.</p>
        </div>
        <div className={styles.meta}>
          <span className={styles.metaText}>Open source. No ads. No algorithms.</span>
          <span className={styles.metaText}>Just books & honest opinions.</span>
        </div>
      </div>
      <div className={styles.bar}>protecting the literary frontier 🌹</div>
    </footer>
  )
}