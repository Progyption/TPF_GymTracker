// src/pages/Treningi/Treningi.jsx
import React from 'react';
import styles from './Treningi.module.css';

export default function Treningi() {
    const historyWorkouts = [
        { id: 1, title: 'Klatka i Biceps', time: 'Poniedziałek, 22 Paź • 65 min', value: '2,450 kg', label: 'OBJĘTOŚĆ', type: 'strength' },
        { id: 2, title: 'Interwały HICT', time: 'Sobota, 20 Paź • 40 min', value: '540 kcal', label: 'SPALONO', type: 'cardio' },
        { id: 3, title: 'Mobility & Stretch', time: 'Piątek, 19 Paź • 25 min', value: '98%', label: 'UKOŃCZONO', type: 'stretch' }
    ];

    return (
        <div className={styles.scrollContent}>
            {/* NAGŁÓWEK ZAKŁADKI + FILTRY */}
            <div className={styles.tabHeaderRow}>
                <h1 className={styles.mainTitle}>Treningi</h1>
                <div className={styles.filterGroup}>
                    <button className={styles.filterButton}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <line x1="4" y1="21" x2="4" y2="14"></line>
                            <line x1="4" y1="10" x2="4" y2="3"></line>
                            <line x1="12" y1="21" x2="12" y2="12"></line>
                            <line x1="12" y1="8" x2="12" y2="3"></line>
                            <line x1="20" y1="21" x2="20" y2="16"></line>
                            <line x1="20" y1="12" x2="20" y2="3"></line>
                            <line x1="1" y1="14" x2="7" y2="14"></line>
                            <line x1="9" y1="8" x2="15" y2="8"></line>
                            <line x1="17" y1="16" x2="23" y2="16"></line>
                        </svg>
                        Filtruj
                    </button>
                    <button className={styles.filterButton}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <line x1="17" y1="10" x2="17" y2="21"></line>
                            <line x1="17" y1="3" x2="17" y2="6"></line>
                            <line x1="7" y1="21" x2="7" y2="14"></line>
                            <line x1="7" y1="3" x2="7" y2="10"></line>
                            <path d="M3 14h8M13 6h8"></path>
                        </svg>
                        Sortuj
                    </button>
                </div>
            </div>

            {/* BANER: DODAJ TRENING */}
            <section className={styles.section}>
                <div className={styles.bannerCard}>
                    <div className={styles.bannerOverlay}></div>
                    <div className={styles.bannerContent}>
                        <span className={styles.bannerTag}>NOWA SESJA</span>
                        <h2 className={styles.bannerTitle}>Dodaj trening</h2>
                    </div>
                    <button className={styles.bannerPlusButton}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                            <line x1="12" y1="5" x2="12" y2="19"></line>
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                        </svg>
                    </button>
                </div>
            </section>

            {/* SEKCJA: OSTATNI PLAN */}
            <section className={styles.section}>
                <span className={styles.sectionSubLabel}>OSTATNI PLAN</span>
                <div className={styles.planCard}>
                    <div className={styles.planHeader}>
                        <div>
                            <h2 className={styles.planTitle}>Split: Góra/Dół</h2>
                            <p className={styles.planSubtitle}>Dzisiaj: Dół Ciała</p>
                        </div>
                        <button className={styles.bookmarkButton}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                            </svg>
                        </button>
                    </div>

                    <div className={styles.planFooter}>
                        <div className={styles.intensityArea}>
                            <span className={styles.intensityLabel}>Intensywność</span>
                            <div className={styles.progressTrack}>
                                <div className={styles.progressFill} style={{ width: '45%' }}></div>
                            </div>
                        </div>
                        <button className={styles.startButton}>START</button>
                    </div>
                </div>
            </section>

            {/* SEKCJA: HISTORIA TRENINGÓW */}
            <section className={styles.section}>
                <div className={styles.sectionHeaderRow}>
                    <span className={styles.sectionSubLabel}>HISTORIA TRENINGÓW</span>
                    <button className={styles.textLink}>Zobacz wszystko</button>
                </div>

                <div className={styles.historyList}>
                    {historyWorkouts.map((item) => (
                        <div key={item.id} className={styles.historyCard}>
                            <div className={styles.historyLeft}>
                                <div className={styles.historyIconBox}>
                                    {item.type === 'strength' && (
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="2">
                                            <path d="M6.5 6.5h11M6.5 17.5h11M3 12h18M3 9v6M21 9v6" />
                                        </svg>
                                    )}
                                    {item.type === 'cardio' && (
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#38bdf8" strokeWidth="2">
                                            <path d="M13 4v4M17 4v10M9 4v6M5 4v14M21 4v16" />
                                        </svg>
                                    )}
                                    {item.type === 'stretch' && (
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#f472b6" strokeWidth="2">
                                            <circle cx="12" cy="5" r="2"></circle>
                                            <path d="M12 7v6M9 21v-6l3-2 3 2v6" />
                                        </svg>
                                    )}
                                </div>
                                <div>
                                    <h3 className={styles.historyTitle}>{item.title}</h3>
                                    <p className={styles.historyTime}>{item.time}</p>
                                </div>
                            </div>

                            <div className={styles.historyRight}>
                                <div className={styles.metricBlock}>
                                    <span className={styles.metricValue}>{item.value}</span>
                                    <span className={styles.metricLabel}>{item.label}</span>
                                </div>
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-text-muted)" strokeWidth="2">
                                    <polyline points="9 18 15 12 9 6"></polyline>
                                </svg>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* SEKCJA PODSUMOWANIA: BRAWO */}
            <section className={styles.brawoSection}>
                <div className={styles.trophyIconContainer}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#38bdf8" strokeWidth="2">
                        <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6M18 9h1.5a2.5 2.5 0 0 0 0-5H18M4 22h16M10 14.66V17c0 .55-.45 1-1 1H4v2h16v-2h-5c-.55 0-1-.45-1-1v-2.34M12 2a5 5 0 0 0-5 5v3c0 3.5 3 6 5 6s5-2.5 5-6V7a5 5 0 0 0-5-5z"/>
                    </svg>
                </div>
                <h2 className={styles.brawoTitle}>Brawo!</h2>
                <p className={styles.brawoText}>W tym tygodniu wykonałeś już 3 treningi. Twój cel to 4.</p>
            </section>
        </div>
    );
}