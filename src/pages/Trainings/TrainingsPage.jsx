import { useNavigate } from 'react-router-dom'
import AppShell from '../../components/AppShell'
import Button from '../../components/Button'
import Card from '../../components/Card'
import TrainingItem from '../../components/TrainingItem'
import TopBar from '../../components/TopBar'
import { useTrainings } from '../../hooks/useTrainings'
import styles from './TrainingsPage.module.css'

function TrainingsPage() {
  const navigate = useNavigate()

  const {
    trainings,
  } = useTrainings()

  return (
    <AppShell
      title="Treningi"
      rightSlot={
        <>
          <TopBar.IconButton>
            ⌕
          </TopBar.IconButton>
        </>
      }
    >
      <div className={styles.toolbar}>
        <button
          className={styles.filterButton}
          type="button"
        >
          ⏷ Filtruj
        </button>

        <button
          className={styles.filterButton}
          type="button"
        >
          ≣ Sortuj
        </button>
      </div>

      <Card className={styles.hero}>
        <p className={styles.heroCaption}>
          Nowa sesja
        </p>

        <h2>Dodaj trening</h2>

        <button
          className={styles.heroAction}
          type="button"
          onClick={() =>
            navigate('/treningi/new')
          }
        >
          +
        </button>
      </Card>

      <section className={styles.sectionTitle}>
        Ostatni plan
      </section>

      <Card>
        <div className={styles.planHeader}>
          <div>
            <h3>Split: Góra/Dół</h3>
            <p>Dzisiaj: Dół Ciała</p>
          </div>

          <span className={styles.bookmark}>
            ⌑
          </span>
        </div>

        <div className={styles.intensityWrap}>
          <span>Intensywność</span>

          <div className={styles.progressBar}>
            <span />
          </div>

          <Button className={styles.startButton}>
            Start
          </Button>
        </div>
      </Card>

      <section className={styles.sectionRow}>
        <p>Historia treningów</p>

        <button type="button">
          Zobacz wszystko
        </button>
      </section>

      <div className={styles.list}>
        {trainings.length > 0 ? (
          trainings.map(training => (
            <TrainingItem
              key={training.id}
              icon="🏋"
              title={training.title}
              meta={`${training.date} • ${training.durationMinutes} min`}
              value={`${training.exercises.length}`}
              subvalue="Ćwiczeń"
            />
          ))
        ) : (
          <>
            <TrainingItem
              icon="🏋"
              title="Klatka i Biceps"
              meta="Poniedziałek, 22 Paź • 65 min"
              value="2,450 kg"
              subvalue="Objętość"
            />

            <TrainingItem
              icon="🏃"
              title="Interwały HICT"
              meta="Sobota, 20 Paź • 40 min"
              value="540 kcal"
              subvalue="Spalono"
            />

            <TrainingItem
              icon="🧘"
              title="Mobility & Stretch"
              meta="Piątek, 19 Paź • 25 min"
              value="98%"
              subvalue="Ukończono"
            />
          </>
        )}
      </div>

      <div className={styles.kudos}>
        🏆
      </div>

      <div className={styles.motivation}>
        Brawo!
      </div>

      <p className={styles.description}>
        W tym tygodniu wykonałeś już 3 treningi.
        Twój cel to 4.
      </p>

      <button
        className={styles.playButton}
        type="button"
      >
        ▶
      </button>
    </AppShell>
  )
}

export default TrainingsPage
