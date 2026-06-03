import TopBar from './TopBar'
import BottomNav from './BottomNav'
import styles from './AppShell.module.css'

function AppShell({ title, rightSlot, children, bottomCta }) {
  return (
    <div className={styles.viewport}>
      <div className={styles.phone}>
        <TopBar rightSlot={rightSlot} />
        <main className={styles.content}>
          {title ? <h1 className={styles.title}>{title}</h1> : null}
          {children}
        </main>
        {bottomCta ? <div className={styles.ctaWrap}>{bottomCta}</div> : null}
        <BottomNav />
      </div>
    </div>
  )
}

export default AppShell
