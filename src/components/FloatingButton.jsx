import { useNavigate } from 'react-router-dom'
import styles from './FloatingButton.module.css'

function FloatingButton({ children = '+' }) {
  const navigate = useNavigate()

  return (
      <button
          className={styles.button}
          type="button"
          aria-label="Dodaj trening"
          onClick={() => navigate('/treningi/new')}
      >
        {children}
      </button>
  )
}

export default FloatingButton