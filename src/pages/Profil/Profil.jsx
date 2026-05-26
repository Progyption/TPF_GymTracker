import React from 'react';
import styles from './Profil.module.css';

export default function Profil() {
    const user = {
        name: 'Marek Kowalski',
        level: 'Elitarny',
        workoutsCount: 124,
        email: 'm.kowalski@email.com',
        height: '185 cm',
        weight: '88.5 kg'
    };

    return (
        <div className={styles.scrollContent}>
            {/* KARTA PROFILU (AVATAR + STATYSTYKI) */}
            <div className={styles.profileCard}>
                <div className={styles.avatarContainer}>
                    <div className={styles.avatarWrapper}>
                        {/* Tutaj możesz wstawić rzeczywisty tag img, używamy placeholderu z CSS */}
                        <div className={styles.avatarPlaceholder}></div>
                        <button className={styles.editAvatarBtn} aria-label="Edytuj zdjęcie">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="3">
                                <path d="M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
                            </svg>
                        </button>
                    </div>
                </div>
                <div className={styles.userInfo}>
                    <h1 className={styles.userName}>{user.name}</h1>
                    <p className={styles.userMeta}>
                        Poziom: <span className={styles.highlightText}>{user.level}</span> • {user.workoutsCount} treningi
                    </p>
                </div>
            </div>

            {/* SEKCJA: DANE UŻYTKOWNIKA */}
            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>DANE UŻYTKOWNIKA</h2>
                <div className={styles.optionsGroup}>
                    {/* Email */}
                    <div className={styles.optionItemStatic}>
                        <div className={styles.optionLeft}>
                            <svg className={styles.optionIconBlue} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#38bdf8" strokeWidth="2">
                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                                <polyline points="22,6 12,13 2,6"/>
                            </svg>
                            <div>
                                <span className={styles.optionLabel}>Email</span>
                                <p className={styles.optionValue}>{user.email}</p>
                            </div>
                        </div>
                    </div>

                    {/* Wzrost */}
                    <button className={styles.optionItem}>
                        <div className={styles.optionLeft}>
                            <svg className={styles.optionIconBlue} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#38bdf8" strokeWidth="2">
                                <polyline points="17 11 12 6 7 11"/>
                                <polyline points="17 13 12 18 7 13"/>
                            </svg>
                            <div>
                                <span className={styles.optionLabel}>Wzrost</span>
                                <p className={styles.optionValue}>{user.height}</p>
                            </div>
                        </div>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-text-muted)" strokeWidth="2">
                            <polyline points="9 18 15 12 9 6"/>
                        </svg>
                    </button>

                    {/* Waga */}
                    <button className={styles.optionItem}>
                        <div className={styles.optionLeft}>
                            <svg className={styles.optionIconBlue} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#38bdf8" strokeWidth="2">
                                <path d="M5 2h14M5 22h14M17 2l-3.5 10 3.5 10M7 2l3.5 10L7 22"/>
                            </svg>
                            <div>
                                <span className={styles.optionLabel}>Waga</span>
                                <p className={styles.optionValue}>{user.weight}</p>
                            </div>
                        </div>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-text-muted)" strokeWidth="2">
                            <polyline points="9 18 15 12 9 6"/>
                        </svg>
                    </button>
                </div>
            </section>

            {/* SEKCJA: USTAWIENIA APLIKACJI */}
            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>USTAWIENIA APLIKACJI</h2>
                <div className={styles.optionsGroup}>
                    {/* Zmiana hasła */}
                    <button className={styles.optionItem}>
                        <div className={styles.optionLeft}>
                            <svg className={styles.optionIconMuted} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67"/>
                            </svg>
                            <span className={styles.settingText}>Zmiana hasła</span>
                        </div>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-text-muted)" strokeWidth="2">
                            <polyline points="9 18 15 12 9 6"/>
                        </svg>
                    </button>

                    {/* Powiadomienia */}
                    <button className={styles.optionItem}>
                        <div className={styles.optionLeft}>
                            <svg className={styles.optionIconMuted} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 0 1-3.46 0"/>
                            </svg>
                            <span className={styles.settingText}>Powiadomienia</span>
                        </div>
                        <div className={styles.optionRight}>
                            <span className={styles.badgeActive}>WŁĄCZONE</span>
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-text-muted)" strokeWidth="2">
                                <polyline points="9 18 15 12 9 6"/>
                            </svg>
                        </div>
                    </button>

                    {/* Jednostki */}
                    <button className={styles.optionItem}>
                        <div className={styles.optionLeft}>
                            <svg className={styles.optionIconMuted} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <rect x="2" y="7" width="20" height="10" rx="2" ry="2"/>
                                <line x1="6" y1="7" x2="6" y2="11"/>
                                <line x1="10" y1="7" x2="10" y2="11"/>
                                <line x1="14" y1="7" x2="14" y2="11"/>
                                <line x1="18" y1="7" x2="18" y2="11"/>
                            </svg>
                            <span className={styles.settingText}>Jednostki</span>
                        </div>
                        <div className={styles.optionRight}>
                            <span className={styles.settingValueInline}>METRYCZNE (kg/cm)</span>
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-text-muted)" strokeWidth="2">
                                <polyline points="9 18 15 12 9 6"/>
                            </svg>
                        </div>
                    </button>

                    {/* Centrum pomocy */}
                    <button className={styles.optionItem}>
                        <div className={styles.optionLeft}>
                            <svg className={styles.optionIconMuted} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <circle cx="12" cy="12" r="10"/>
                                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3M12 17h.01"/>
                            </svg>
                            <span className={styles.settingText}>Centrum pomocy</span>
                        </div>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-text-muted)" strokeWidth="2">
                            <polyline points="9 18 15 12 9 6"/>
                        </svg>
                    </button>

                    {/* Polityka prywatności */}
                    <button className={styles.optionItem}>
                        <div className={styles.optionLeft}>
                            <svg className={styles.optionIconMuted} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                            </svg>
                            <span className={styles.settingText}>Polityka prywatności</span>
                        </div>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-text-muted)" strokeWidth="2">
                            <polyline points="9 18 15 12 9 6"/>
                        </svg>
                    </button>
                </div>
            </section>

            {/* PRZYCISK WYLOGUJ */}
            <button className={styles.logoutButton}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#f87171" strokeWidth="2">
                    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9"/>
                </svg>
                Wyloguj
            </button>
        </div>
    );
}