import styles from './Navbar.module.css'

const NAV_LINKS = [
  { label: 'Reviews',   href: '#reviews' },
  { label: 'Reading',   href: '#reading' },
  { label: 'Mood Recs', href: '#mood'    },
]

export default function Navbar({ theme, onToggleTheme }) {
  return (
    <nav className={styles.nav}>
      <div className={styles.inner}>
        <a href="#" className={styles.logo}>
          <span className={styles.logoRose}>Rosé</span>
          <span className={styles.logoAmp}> &amp; </span>
          <span className={styles.logoRuins}>Ruins</span>
        </a>
        <ul className={styles.links}>
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href}>
              <a href={href} className={styles.link}>{label}</a>
            </li>
          ))}
        </ul>
        <button className={styles.themeBtn} onClick={onToggleTheme} aria-label="Toggle theme">
          <span className={styles.themeBtnInner}>
            {theme === 'light' ? '🌙 Dark' : '🌸 Light'}
          </span>
        </button>
      </div>
    </nav>
  )
}