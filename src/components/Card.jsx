import styles from './Card.module.css'

function Card({ children, className = '' }) {
  return <section className={`${styles.card} ${className}`.trim()}>{children}</section>
}

export default Card
