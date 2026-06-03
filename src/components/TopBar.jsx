import styles from './TopBar.module.css'

function IconButton({ children }) {
  return <button className={styles.iconButton} type="button">{children}</button>
}

function TopBar({ rightSlot }) {
  return (
    <header className={styles.header}>
      <div className={styles.brand}>
        <span className={styles.logo}>▥</span>
        <span className={styles.name}>GYMTRACKER</span>
      </div>
      <div className={styles.actions}>{rightSlot || <IconButton>◔</IconButton>}</div>
    </header>
  )
}

TopBar.IconButton = IconButton

export default TopBar
