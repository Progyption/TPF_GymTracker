import styles from './FloatingButton.module.css'

function FloatingButton({ children = '+' }) {
  return (
    <button className={styles.button} type="button" aria-label="Dodaj trening">
      {children}
    </button>
  )
}

export default FloatingButton
