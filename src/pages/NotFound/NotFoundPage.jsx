import { Link } from 'react-router-dom'
import styles from './NotFoundPage.module.css'

function NotFoundPage() {
  return (
    <main className={styles.page}>
      <div className={styles.box}>
        <p className={styles.code}>404</p>
        <h1>Nie znaleziono strony</h1>
        <p>Ta ścieżka nie istnieje w aplikacji GymTrack.</p>
        <Link to="/dashboard">Wróć do dashboardu</Link>
      </div>
    </main>
  )
}

export default NotFoundPage
