import { NavLink } from 'react-router-dom'
import styles from './BottomNav.module.css'

const items = [
  { to: '/dashboard', label: 'Dashboard', icon: '▦' },
  { to: '/treningi', label: 'Treningi', icon: '⛏' },
  { to: '/analiza', label: 'Analiza', icon: '▥' },
  { to: '/profil', label: 'Profil', icon: '◔' },
]

function BottomNav() {
  return (
    <nav className={styles.nav}>
      {items.map((item) => (
        <NavLink
          key={item.to}
          to={item.to}
          className={({ isActive }) => `${styles.item} ${isActive ? styles.active : ''}`}
        >
          <span className={styles.icon}>{item.icon}</span>
          <span className={styles.label}>{item.label}</span>
        </NavLink>
      ))}
    </nav>
  )
}

export default BottomNav
