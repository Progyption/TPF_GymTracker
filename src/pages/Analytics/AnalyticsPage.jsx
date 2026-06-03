import AppShell from '../../components/AppShell'
import Card from '../../components/Card'
import TopBar from '../../components/TopBar'
import styles from './AnalyticsPage.module.css'

function AnalyticsPage() {
  return (
    <AppShell
      title="Analiza"
      rightSlot={
        <>
          <TopBar.IconButton>◔</TopBar.IconButton>
          <TopBar.IconButton>⚙</TopBar.IconButton>
        </>
      }
    >
      <p className={styles.subtitle}>Twój progres w ostatnim miesiącu.</p>
      <Card className={styles.chartCard}>
        <p className={styles.overline}>Progres w czasie</p>
        <div className={styles.bigStat}>+12.4%</div>
        <div className={styles.chart}>
          {[35, 52, 44, 70, 58, 84, 100].map((value, index) => (
            <div key={value} className={styles.barWrap}>
              <div className={styles.bar} style={{ height: `${value}%` }} />
              <span>{['Pon', 'Wto', 'Śro', 'Czw', 'Pią', 'Sob', 'Nie'][index]}</span>
            </div>
          ))}
        </div>
      </Card>

      <div className={styles.miniGrid}>
        <Card>
          <p className={styles.miniTitle}>Tydzień / Tydzień</p>
          <div className={styles.miniValue}>4.2 h</div>
          <div className={styles.progressBar}><span style={{ width: '58%' }} /></div>
          <p className={styles.miniCaption}>+15% vs ost. tydz.</p>
        </Card>
        <Card>
          <p className={styles.miniTitle}>Objętość (kg)</p>
          <div className={styles.miniValue}>14.8 k</div>
          <div className={styles.progressBar}><span style={{ width: '84%' }} /></div>
          <p className={styles.miniCaption}>Nowy rekord</p>
        </Card>
      </div>

      <div className={styles.sectionHeading}>◉ Inteligentne wnioski</div>
      <div className={styles.insights}>
        <Card className={styles.insightCard}>
          <div className={styles.insightIcon}>🚀</div>
          <div>
            <p className={styles.insightLabel}>Największe progresy</p>
            <p>Martwy ciąg: +15kg w 14 dni</p>
          </div>
          <span>›</span>
        </Card>
        <Card className={styles.insightCard}>
          <div className={`${styles.insightIcon} ${styles.alertIcon}`}>⌁</div>
          <div>
            <p className={styles.insightLabel}>Wykryte spadki</p>
            <p>Podciąganie: -2 powt. w serii</p>
          </div>
          <span>›</span>
        </Card>
        <Card className={styles.bodyMap}>
          <p className={styles.insightLabel}>Aktywność Mięśniowa</p>
          <p>Klatka piersiowa i plecy dominują w tym tygodniu.</p>
          <button type="button">Zobacz mapę ciała</button>
        </Card>
      </div>
    </AppShell>
  )
}

export default AnalyticsPage
