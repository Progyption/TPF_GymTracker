import Button from './Button'
import Card from './Card'
import styles from './LoginCard.module.css'

function LoginCard({ email, password, error, loading, onChange, onSubmit }) {
  return (
    <Card className={styles.card}>
      <div className={styles.header}>
        <div className={styles.logo}>▥</div>
        <div>
          <p className={styles.caption}>GymTrack</p>
          <h1 className={styles.title}>Zaloguj się</h1>
        </div>
      </div>
      <p className={styles.help}>Użyj konta Firebase albo demo: demo@gymtrack.pl / demo1234</p>
      <form className={styles.form} onSubmit={onSubmit}>
        <label className={styles.label}>
          Email
          <input className={styles.input} name="email" type="email" value={email} onChange={onChange} />
        </label>
        <label className={styles.label}>
          Hasło
          <input className={styles.input} name="password" type="password" value={password} onChange={onChange} />
        </label>
        {error ? <p className={styles.error}>{error}</p> : null}
        <Button disabled={loading} type="submit">
          {loading ? 'Logowanie...' : 'Zaloguj'}
        </Button>
      </form>
    </Card>
  )
}

export default LoginCard
