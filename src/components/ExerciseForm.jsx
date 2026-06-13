import Card from './Card'
import styles from './ExerciseForm.module.css'

function ExerciseForm({
  exercise,
  index,
  validationErrors,
  onChangeName,
  onChangeRest,
  onAddSet,
  onRemoveSet,
  onRemoveExercise,
  onMoveUp,
  onMoveDown,
  onChangeSet,
}) {
  const exerciseErrors =
    validationErrors?.[
      exercise.id
    ] || {}

  return (
    <Card className={styles.card}>
      <div className={styles.header}>
        <h3>
          Exercise #{index + 1}
        </h3>

        <div className={styles.controls}>
          <button
            type="button"
            onClick={onMoveUp}
          >
            ↑
          </button>

          <button
            type="button"
            onClick={onMoveDown}
          >
            ↓
          </button>

          <button
            type="button"
            onClick={
              onRemoveExercise
            }
          >
            ✕
          </button>
        </div>
      </div>

      <input
        type="text"
        placeholder="Exercise Name"
        value={exercise.name}
        onChange={event =>
          onChangeName(
            event.target.value,
          )
        }
        className={`${styles.input} ${
          exerciseErrors.name
            ? styles.errorInput
            : ''
        }`}
      />

      <input
        type="number"
        min="0"
        placeholder="Rest Time (sec)"
        value={
          exercise.restSeconds
        }
        onChange={event =>
          onChangeRest(
            event.target.value,
          )
        }
        className={`${styles.input} ${
          exerciseErrors.rest
            ? styles.errorInput
            : ''
        }`}
      />

      <div className={styles.sets}>
        {exercise.sets.map(
          (set, setIndex) => (
            <div
              key={set.id}
              className={
                styles.setBlock
              }
            >
              <div
                className={
                  styles.setRow
                }
              >
                <span
                  className={
                    styles.setLabel
                  }
                >
                  Set{' '}
                  {setIndex + 1}
                </span>

                <input
                  type="number"
                  min="0"
                  step="0.1"
                  placeholder="kg"
                  value={
                    set.weight
                  }
                  onChange={event =>
                    onChangeSet(
                      set.id,
                      'weight',
                      event.target
                        .value,
                    )
                  }
                  className={`${styles.smallInput} ${
                    exerciseErrors
                      .sets?.[
                      set.id
                    ]?.weight
                      ? styles.errorInput
                      : ''
                  }`}
                />

                <input
                  type="number"
                  min="0"
                  placeholder="reps"
                  value={set.reps}
                  onChange={event =>
                    onChangeSet(
                      set.id,
                      'reps',
                      event.target
                        .value,
                    )
                  }
                  className={`${styles.smallInput} ${
                    exerciseErrors
                      .sets?.[
                      set.id
                    ]?.reps
                      ? styles.errorInput
                      : ''
                  }`}
                />

                <button
                  type="button"
                  className={
                    styles.removeSetButton
                  }
                  onClick={() =>
                    onRemoveSet(
                      set.id,
                    )
                  }
                >
                  ✕
                </button>
              </div>

              {setIndex ===
                exercise.sets
                  .length -
                  1 && (
                <div
                  className={
                    styles.addSetRow
                  }
                >
                  <button
                    type="button"
                    className={
                      styles.addSetButton
                    }
                    onClick={
                      onAddSet
                    }
                  >
                    +
                  </button>
                </div>
              )}
            </div>
          ),
        )}
      </div>
    </Card>
  )
}

export default ExerciseForm