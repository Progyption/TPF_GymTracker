// src/pages/Home/Home.jsx
import React, { useState } from 'react';
import styles from './Home.module.css';
import Treningi from '../Treningi/Treningi';
import Analiza from '../Analiza/Analiza'; // 1. KROK: Import nowego komponentu
import Profil from '../Profil/Profil';

export default function Home() {
    const [activeTab, setActiveTab] = useState('treningi');

    // Dane dla zakładki Dashboard (zostają w Home)
    const stats = { planned: 3, completed: 12, alertsCount: 2 };
    const recentWorkouts = [
        { id: 1, title: 'Trening Siłowy: Klatka', time: 'Wczoraj, 18:30 • 65 min', image: '🏋️' },
        { id: 2, title: 'Cardio: Interwały', time: 'Poniedziałek, 07:15 • 45 min', image: '🏃' }
    ];

    return (
        <div className={styles.phoneContainer}>
            {/* HEADER */}
            <header className={styles.header}>
                <div className={styles.logo}>
                    <span className={styles.logoIcon}>📊</span> GYMTRACKER
                </div>
                {activeTab === 'dashboard' ? (
                    <button className={styles.iconButton} aria-label="Powiadomienia">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 0 1-3.46 0" />
                        </svg>
                    </button>
                ) : (
                    <button className={styles.iconButton} aria-label="Szukaj">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <circle cx="11" cy="11" r="8"></circle>
                            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                        </svg>
                    </button>
                )}
            </header>

            {/* WIDOK: DASHBOARD */}
            {activeTab === 'dashboard' && (
                <main className={styles.scrollContent}>
                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>Statystyki</h2>
                        <div className={styles.statsGrid}>
                            <div className={styles.statCard}>
                                <svg className={styles.statIcon} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#38bdf8" strokeWidth="2">
                                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                                    <line x1="16" y1="2" x2="16" y2="6"></line>
                                    <line x1="8" y1="2" x2="8" y2="6"></line>
                                    <line x1="3" y1="10" x2="21" y2="10"></line>
                                </svg>
                                <div className={styles.statNumber}>{stats.planned}</div>
                                <div className={styles.statLabel}>Zaplanowane treningi</div>
                            </div>
                            <div className={styles.statCard}>
                                <svg className={styles.statIcon} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="2">
                                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                                </svg>
                                <div className={styles.statNumber}>{stats.completed}</div>
                                <div className={styles.statLabel}>Wykonane treningi</div>
                            </div>
                        </div>
                        <div className={styles.alertBarCard}>
                            <div className={styles.alertBarLeft}>
                                <div className={styles.alertBadgeIcon}>
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-alert-icon-red)" strokeWidth="2">
                                        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                                    </svg>
                                </div>
                                <div>
                                    <span className={styles.alertBarNumber}>{stats.alertsCount}</span>
                                    <span className={styles.alertBarLabel}>Alerty</span>
                                </div>
                            </div>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-text-muted)" strokeWidth="2">
                                <polyline points="9 18 15 12 9 6"></polyline>
                            </svg>
                        </div>
                    </section>

                    <section className={styles.section}>
                        <div className={styles.sectionHeaderRow}>
                            <h2 className={styles.sectionTitle}>Alerty o zmianach</h2>
                            <button className={styles.textLink}>Zobacz wszystko</button>
                        </div>
                        <div className={styles.insightCard}>
                            <div className={styles.insightHeader}>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-text-green)" strokeWidth="2">
                                    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
                                </svg>
                                <span className={styles.insightTag}>WZROST SIŁY</span>
                            </div>
                            <p className={styles.insightBody}>
                                Twój wynik w Wyciskaniu Leżąc wzrósł o <strong className={styles.highlightText}>5kg</strong> w ciągu ostatnich 7 dni.
                            </p>
                            <span className={styles.insightFooter}>2 godziny temu</span>
                        </div>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>Ostatnie treningi</h2>
                        <div className={styles.workoutList}>
                            {recentWorkouts.map((workout) => (
                                <div key={workout.id} className={styles.workoutCard}>
                                    <div className={styles.workoutMain}>
                                        <div className={styles.workoutImagePlaceholder}>{workout.image}</div>
                                        <div>
                                            <h3 className={styles.workoutTitle}>{workout.title}</h3>
                                            <p className={styles.workoutTime}>{workout.time}</p>
                                        </div>
                                    </div>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="2">
                                        <polyline points="9 18 15 12 9 6"></polyline>
                                    </svg>
                                </div>
                            ))}
                        </div>
                    </section>
                </main>
            )}

            {/* WIDOK: TRENINGI */}
            {activeTab === 'treningi' && <Treningi />}

            {/* 2. KROK: WIDOK: ANALIZA */}
            {activeTab === 'analiza' && <Analiza />}

            {/* WIDOK: PROFIL*/}

            {activeTab === 'profil' && <Profil />}

            {/* DYNAMICZNY PRZYCISK FAB */}
            {activeTab === 'dashboard' && (
                <button className={styles.fab} aria-label="Dodaj trening">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="3">
                        <line x1="12" y1="5" x2="12" y2="19"></line>
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                    </svg>
                </button>
            )}

            {/* 3. KROK: Dedykowany FAB dla podstrony analizy (opcjonalnie ukrycie lub nowa akcja) */}
            {activeTab === 'analiza' && (
                <button className={styles.fab} aria-label="Generuj raport">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2.5">
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/>
                    </svg>
                </button>
            )}

            {/* BOTTOM NAVIGATION BAR */}
            <nav className={styles.bottomNav}>
                <button className={`${styles.navItem} ${activeTab === 'dashboard' ? styles.navItemActive : ''}`} onClick={() => setActiveTab('dashboard')}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="3" y="3" width="7" height="9"></rect>
                        <rect x="14" y="3" width="7" height="5"></rect>
                        <rect x="14" y="12" width="7" height="9"></rect>
                        <rect x="3" y="16" width="7" height="5"></rect>
                    </svg>
                    <span>DASHBOARD</span>
                </button>
                <button className={`${styles.navItem} ${activeTab === 'treningi' ? styles.navItemActive : ''}`} onClick={() => setActiveTab('treningi')}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <line x1="6" y1="3" x2="6" y2="21"></line>
                        <line x1="18" y1="3" x2="18" y2="21"></line>
                        <line x1="6" y1="12" x2="18" y2="12"></line>
                    </svg>
                    <span>TRENINGI</span>
                </button>
                <button className={`${styles.navItem} ${activeTab === 'analiza' ? styles.navItemActive : ''}`} onClick={() => setActiveTab('analiza')}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <line x1="18" y1="20" x2="18" y2="10"></line>
                        <line x1="12" y1="20" x2="12" y2="4"></line>
                        <line x1="6" y1="20" x2="6" y2="14"></line>
                    </svg>
                    <span>ANALIZA</span>
                </button>
                <button className={`${styles.navItem} ${activeTab === 'profil' ? styles.navItemActive : ''}`} onClick={() => setActiveTab('profil')}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                    <span>PROFIL</span>
                </button>
            </nav>
        </div>
    );
}