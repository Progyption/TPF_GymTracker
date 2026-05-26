// src/pages/Analiza/Analiza.jsx
import React from 'react';
import styles from './Analiza.module.css';

export default function Analiza() {
    const days = [
        { label: 'PON', height: '35%' },
        { label: 'WTO', height: '50%' },
        { label: 'ŚRO', height: '45%' },
        { label: 'CZW', height: '65%' },
        { label: 'PIĄ', height: '60%' },
        { label: 'SOB', height: '80%' },
        { label: 'NIE', height: '100%', highlighted: true }
    ];

    return (
        <div className={styles.scrollContent}>
            {/* NAGŁÓWEK */}
            <div className={styles.headerRow}>
                <h1 className={styles.mainTitle}>Analiza</h1>
                <p className={styles.mainSubtitle}>Twój progres w ostatnim miesiącu.</p>
            </div>

            {/* KARTA: PROGRES W CZASIE */}
            <div className={styles.chartCard}>
                <div className={styles.chartHeader}>
                    <div>
                        <span className={styles.cardSubLabel}>PROGRES W CZASIE</span>
                        <h2 className={styles.chartValue}>+12.4%</h2>
                    </div>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="2">
                        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
                        <polyline points="17 6 23 6 23 12"></polyline>
                    </svg>
                </div>

                {/* WYKRES SŁUPKOWY */}
                <div className={styles.barChart}>
                    {days.map((day, index) => (
                        <div key={index} className={styles.chartColumn}>
                            <div className={styles.barTrack}>
                                <div
                                    className={`${styles.barFill} ${day.highlighted ? styles.barHighlight : ''}`}
                                    style={{ height: day.height }}
                                ></div>
                            </div>
                            <span className={styles.barLabel}>{day.label}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* GRID Z MINI STATYSTYKAMI */}
            <div className={styles.statsGrid}>
                <div className={styles.miniCard}>
                    <span className={styles.cardSubLabel}>Tydzień / Tydzień</span>
                    <h3 className={styles.miniValue}>4.2 <span className={styles.miniUnit}>h</span></h3>
                    <div className={styles.progressTrack}>
                        <div className={styles.progressFillBlue} style={{ width: '65%' }}></div>
                    </div>
                    <span className={styles.miniFooterBlue}>+15% VS OST. TYDZ.</span>
                </div>

                <div className={styles.miniCard}>
                    <span className={styles.cardSubLabel}>Objętość (kg)</span>
                    <h3 className={styles.miniValue}>14.8 <span className={styles.miniUnit}>k</span></h3>
                    <div className={styles.progressTrack}>
                        <div className={styles.progressFillAccent} style={{ width: '80%' }}></div>
                    </div>
                    <span className={styles.miniFooterAccent}>NOWY REKORD</span>
                </div>
            </div>

            {/* SEKCJA: INTELIGENTNE WNIOSKI */}
            <section className={styles.section}>
                <div className={styles.sectionHeader}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="2">
                        <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .6 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5M9 18h6M10 22h4" />
                    </svg>
                    <h2 className={styles.sectionTitle}>Inteligentne wnioski</h2>
                </div>

                <div className={styles.insightsList}>
                    {/* WNIOSEK 1: WZROST */}
                    <div className={styles.insightCard}>
                        <div className={styles.insightLeft}>
                            <div className={`${styles.iconBox} ${styles.iconBoxGreen}`}>
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#4ade80" strokeWidth="2">
                                    <path d="M12 2s4 2 4 8c0 3-1.5 6-4 9-2.5-3-4-6-4-8 0-6 4-8 4-8zM9 12h6" />
                                </svg>
                            </div>
                            <div>
                                <span className={styles.insightTagGreen}>NAJWIĘKSZE PROGRESY</span>
                                <p className={styles.insightText}>Martwy ciąg: <strong className={styles.highlightText}>+15kg</strong> w 14 dni</p>
                            </div>
                        </div>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-text-muted)" strokeWidth="2">
                            <polyline points="9 18 15 12 9 6"></polyline>
                        </svg>
                    </div>

                    {/* WNIOSEK 2: SPADEK */}
                    <div className={styles.insightCard}>
                        <div className={styles.insightLeft}>
                            <div className={`${styles.iconBox} ${styles.iconBoxRed}`}>
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#f87171" strokeWidth="2">
                                    <polyline points="23 18 13.5 8.5 8.5 13.5 1 6"></polyline>
                                    <polyline points="17 18 23 18 23 12"></polyline>
                                </svg>
                            </div>
                            <div>
                                <span className={styles.insightTagRed}>WYKRYTE SPADKI</span>
                                <p className={styles.insightText}>Podciąganie: <strong className={styles.highlightTextRed}>-2 powt.</strong> w serii</p>
                            </div>
                        </div>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-text-muted)" strokeWidth="2">
                            <polyline points="9 18 15 12 9 6"></polyline>
                        </svg>
                    </div>

                    {/* KARTA: AKTYWNOŚĆ MIĘŚNIOWA */}
                    <div className={styles.muscleCard}>
                        <div className={styles.muscleOverlay}></div>
                        <div className={styles.muscleContent}>
                            <h3 className={styles.muscleTitle}>Aktywność Mięśniowa</h3>
                            <p className={styles.muscleText}>Klatka piersiowa i plecy dominują w tym tygodniu.</p>
                            <button className={styles.muscleButton}>ZOBACZ MAPĘ CIAŁA</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}