import Card from './Card'
import styles from './StatCard.module.css'

function StatCard({ icon, value, label }) {
  return (
    <Card className={styles.card}>
      <div className={styles.icon}>{icon}</div>
      <div className={styles.value}>{value}</div>
      <div className={styles.label}>{label}</div>
    </Card>
  )
}

export default StatCard
