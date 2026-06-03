import styles from './AlertCard.module.css'

function AlertCard({ title, description, time, tone = 'success' }) {
  return (
    <article className={`${styles.card} ${styles[tone]}`}>
      <div className={styles.iconWrap}>{tone === 'danger' ? '⌁' : tone === 'neutral' ? '=' : '↗'}</div>
      <div className={styles.content}>
        <p className={styles.title}>{title}</p>
        <p className={styles.description}>{description}</p>
        <p className={styles.time}>{time}</p>
      </div>
    </article>
  )
}

export default AlertCard
