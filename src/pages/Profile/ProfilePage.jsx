import { Navigate } from 'react-router-dom'
import AppShell from '../../components/AppShell'
import Card from '../../components/Card'
import { useAuth } from '../../context/AuthContext'
import styles from './ProfilePage.module.css'

function Row({ label, value, icon = '•' }) {
  return (
    <div className={styles.row}>
      <span className={styles.rowIcon}>{icon}</span>
      <div>
        <p className={styles.rowLabel}>{label}</p>
        <p className={styles.rowValue}>{value}</p>
      </div>
      <span className={styles.arrow}>›</span>
    </div>
  )
}

function ProfilePage() {
  const { user, logout } = useAuth()

  if (!user) return <Navigate to="/login" replace />

  return (
    <AppShell>
      <Card className={styles.profileCard}>
        <div className={styles.avatar}>🏋</div>
        <div>
          <h1 className={styles.name}>{user.name}</h1>
          <p className={styles.level}>Poziom: Elitarny • 124 treningi</p>
        </div>
        <button className={styles.editButton} type="button">✎</button>
      </Card>

      <h2 className={styles.sectionTitle}>Dane użytkownika</h2>
      <Card className={styles.stack}>
        <Row label="Email" value={user.email} icon="✉" />
        <Row label="Wzrost" value="185 cm" icon="↕" />
        <Row label="Waga" value="88.5 kg" icon="⌛" />
      </Card>

      <h2 className={styles.sectionTitle}>Ustawienia aplikacji</h2>
      <Card className={styles.stack}>
        <Row label="Zmiana hasła" value="" icon="◔" />
        <Row label="Powiadomienia" value="Włączone" icon="🔔" />
        <Row label="Jednostki" value="Metryczne (kg/cm)" icon="⌗" />
      </Card>

      <Card className={styles.stack}>
        <Row label="Centrum pomocy" value="" icon="?" />
        <Row label="Polityka prywatności" value="" icon="@" />
      </Card>

      <button className={styles.logoutButton} type="button" onClick={logout}>
        ⎋ Wyloguj
      </button>
    </AppShell>
  )
}

export default ProfilePage
