import { Link } from 'react-router-dom'
import AlertCard from '../../components/AlertCard'
import AppShell from '../../components/AppShell'
import Button from '../../components/Button'
import Card from '../../components/Card'
import FloatingButton from '../../components/FloatingButton'
import StatCard from '../../components/StatCard'
import TrainingItem from '../../components/TrainingItem'
import styles from './DashboardPage.module.css'

function DashboardPage() {
  return (
    <AppShell title="Statystyki" bottomCta={<FloatingButton />}>
      <section className={styles.statsGrid}>
        <StatCard icon="🗓" value="3" label="Zaplanowane treningi" />
        <StatCard icon="◉" value="12" label="Wykonane treningi" />
      </section>

      <Link className={styles.alertSummary} to="/analiza">
        <span className={styles.alertBadge}>△</span>
        <span>
          <strong>2</strong>
          <span> Alerty</span>
        </span>
        <span className={styles.chevron}>›</span>
      </Link>

      <section className={styles.sectionHeader}>
        <h2>Alerty o zmianach</h2>
        <Link to="/analiza">Zobacz wszystko</Link>
      </section>

      <AlertCard
        title="Wzrost siły"
        description="Twój wynik w Wyciskaniu Leżąc wzrósł o 5 kg w ciągu ostatnich 7 dni."
        time="2 godziny temu"
      />

      <section className={styles.sectionHeader}>
        <h2>Ostatnie treningi</h2>
      </section>

      <div className={styles.list}>
        <TrainingItem icon="🏋" title="Trening Siłowy: Klatka" meta="Wczoraj, 18:30 • 65 min" />
        <TrainingItem icon="🏃" title="Cardio: Interwały" meta="Poniedziałek, 07:15 • 45 min" />
      </div>
    </AppShell>
  )
}

export default DashboardPage
