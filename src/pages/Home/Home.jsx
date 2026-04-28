import styles from './Home.module.css';

function Home() {
    return (
        <div className={styles.page}>

            {/* HEADER */}
            <header className={styles.header}>
                <div className={styles.logo}>Logo</div>
                <nav className={styles.nav}>
                    <button>Dashboard</button>
                    <button>Treningi</button>
                    <button>Analiza</button>
                    <button>Profil</button>
                </nav>
            </header>

            {/* MAIN */}
            <main className={styles.main}>
                <div className={styles.topRow}>
                    <div className={styles.card}>Zaplanowane treningi</div>
                    <div className={styles.card}>Wykonane treningi</div>
                    <div className={styles.card}>Alerty</div>
                </div>
                <div className={styles.bottomRow}>
                    <div className={styles.card}>Alerty o zmianach wyników</div>
                    <div className={styles.card}>Ostatnie treningi</div>
                </div>
            </main>

            {/* FOOTER */}
            <footer className={styles.footer}>
                <button className={styles.addButton}>Dodaj trening</button>
            </footer>

        </div>
    );
}

export default Home;