import styles from './TrainingItem.module.css'

function TrainingItem({ icon, title, meta, value, subvalue }) {
  return (
    <article className={styles.item}>
      <div className={styles.icon}>{icon}</div>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.meta}>{meta}</p>
      </div>
      <div className={styles.side}>
        {value ? <div className={styles.value}>{value}</div> : null}
        {subvalue ? <div className={styles.subvalue}>{subvalue}</div> : null}
        <span className={styles.arrow}>›</span>
      </div>
    </article>
  )
}

export default TrainingItem
