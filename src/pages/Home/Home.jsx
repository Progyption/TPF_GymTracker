import styles from './Home.module.css'

function Home() {
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Welcome to TPF</h1>
      <p className={styles.subtitle}>A collaborative React project by Kamil, Jakub & Mykola</p>
    </main>
  )
}

export default Home
