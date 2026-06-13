import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import AppShell from '../../components/AppShell'
import Card from '../../components/Card'
import ExerciseForm from '../../components/ExerciseForm'
import { useTrainings } from '../../hooks/useTrainings'
import styles from './CreateTrainingPage.module.css'

function getTodayDate() {
  return new Date()
    .toISOString()
    .split('T')[0]
}

function createDefaultSet() {
  return {
    id: crypto.randomUUID(),
    reps: '',
    weight: '',
  }
}

function createDefaultExercise() {
  return {
    id: crypto.randomUUID(),
    name: '',
    restSeconds: '',
    sets: [createDefaultSet()],
  }
}

function CreateTrainingPage() {
  const navigate =
    useNavigate()

  const { addTraining } =
    useTrainings()

  const [title, setTitle] =
    useState('')

  const [
    durationMinutes,
    setDurationMinutes,
  ] = useState('')

  const [date, setDate] =
    useState('')

  const [validationErrors,
    setValidationErrors,
  ] = useState({})

  const [exercises,
    setExercises,
  ] = useState([
    createDefaultExercise(),
  ])

  const addExercise = () => {
    setExercises(current => [
      ...current,
      createDefaultExercise(),
    ])
  }

  const removeExercise =
    exerciseId => {
      setExercises(current =>
        current.filter(
          exercise =>
            exercise.id !==
            exerciseId,
        ),
      )
    }

  const moveExerciseUp =
    index => {
      if (index === 0) {
        return
      }

      const updated = [
        ...exercises,
      ]

      ;[
        updated[index - 1],
        updated[index],
      ] = [
        updated[index],
        updated[index - 1],
      ]

      setExercises(updated)
    }

  const moveExerciseDown =
    index => {
      if (
        index ===
        exercises.length - 1
      ) {
        return
      }

      const updated = [
        ...exercises,
      ]

      ;[
        updated[index],
        updated[index + 1],
      ] = [
        updated[index + 1],
        updated[index],
      ]

      setExercises(updated)
    }

  const updateExercise = (
    exerciseId,
    field,
    value,
  ) => {
    setExercises(current =>
      current.map(exercise =>
        exercise.id ===
        exerciseId
          ? {
              ...exercise,
              [field]:
                value,
            }
          : exercise,
      ),
    )
  }

  const addSet =
    exerciseId => {
      setExercises(current =>
        current.map(
          exercise =>
            exercise.id ===
            exerciseId
              ? {
                  ...exercise,
                  sets: [
                    ...exercise.sets,
                    createDefaultSet(),
                  ],
                }
              : exercise,
        ),
      )
    }

  const removeSet = (
    exerciseId,
    setId,
  ) => {
    setExercises(current =>
      current.map(
        exercise =>
          exercise.id ===
          exerciseId
            ? {
                ...exercise,
                sets:
                  exercise.sets.filter(
                    set =>
                      set.id !==
                      setId,
                  ),
              }
            : exercise,
      ),
    )
  }

  const updateSet = (
    exerciseId,
    setId,
    field,
    value,
  ) => {
    setExercises(current =>
      current.map(
        exercise =>
          exercise.id ===
          exerciseId
            ? {
                ...exercise,
                sets:
                  exercise.sets.map(
                    set =>
                      set.id ===
                      setId
                        ? {
                            ...set,
                            [field]:
                              value,
                          }
                        : set,
                  ),
              }
            : exercise,
      ),
    )
  }

  const validate =
    () => {
      const errors = {}

      if (!title.trim()) {
        errors.title = true
      }

      if (!date.trim()) {
        errors.date = true
      }

      if (
        !durationMinutes
      ) {
        errors.duration =
          true
      }

      exercises.forEach(
        exercise => {
          errors[
            exercise.id
          ] = {}

          if (
            !exercise.name.trim()
          ) {
            errors[
              exercise.id
            ].name = true
          }

          if (
            !exercise.restSeconds
          ) {
            errors[
              exercise.id
            ].rest = true
          }

          errors[
            exercise.id
          ].sets = {}

          exercise.sets.forEach(
            set => {
              errors[
                exercise.id
              ].sets[
                set.id
              ] = {}

              if (
                !set.weight
              ) {
                errors[
                  exercise.id
                ].sets[
                  set.id
                ].weight = true
              }

              if (
                !set.reps
              ) {
                errors[
                  exercise.id
                ].sets[
                  set.id
                ].reps = true
              }
            },
          )
        },
      )

      setValidationErrors(
        errors,
      )

      return (
        Object.keys(errors)
          .length === 0
      )
    }

  const handleSave =
    () => {
      if (
        !validate()
      ) {
        return
      }

      addTraining({
        title:
          title ||
          `Session: ${getTodayDate()}`,
        durationMinutes:
          Number(
            durationMinutes ||
              120,
          ),
        date:
          date ||
          getTodayDate(),
        exercises:
          exercises.map(
            exercise => ({
              ...exercise,
              restSeconds:
                Number(
                  exercise.restSeconds ||
                    120,
                ),
              sets:
                exercise.sets.map(
                  set => ({
                    ...set,
                    reps:
                      Number(
                        set.reps,
                      ),
                    weight:
                      Number(
                        set.weight,
                      ),
                  }),
                ),
            }),
          ),
      })

      navigate('/treningi')
    }

  return (
    <AppShell title="New workout">
      <div
        className={
          styles.container
        }
      >
        <Card
          className={
            styles.formCard
          }
        >
          <input
            type="text"
            placeholder="Training name"
            value={title}
            onChange={event =>
              setTitle(
                event.target
                  .value,
              )
            }
            className={`${styles.input} ${
              validationErrors.title
                ? styles.errorInput
                : ''
            }`}
          />

          <input
  type="text"
  placeholder="Date (YYYY-MM-DD)"
  value={date}
  onChange={event =>
    setDate(
      event.target.value,
    )
  }
  className={`${styles.input} ${
    validationErrors.date
      ? styles.errorInput
      : ''
  }`}
/>

          <input
            type="number"
            placeholder="Duration time (min)"
            value={
              durationMinutes
            }
            onChange={event =>
              setDurationMinutes(
                event.target
                  .value,
              )
            }
            className={`${styles.input} ${
              validationErrors.duration
                ? styles.errorInput
                : ''
            }`}
          />
        </Card>

        {exercises.map(
          (
            exercise,
            index,
          ) => (
            <ExerciseForm
              key={
                exercise.id
              }
              exercise={
                exercise
              }
              index={index}
              validationErrors={
                validationErrors
              }
              onChangeName={value =>
                updateExercise(
                  exercise.id,
                  'name',
                  value,
                )
              }
              onChangeRest={value =>
                updateExercise(
                  exercise.id,
                  'restSeconds',
                  value,
                )
              }
              onAddSet={() =>
                addSet(
                  exercise.id,
                )
              }
              onRemoveSet={setId =>
                removeSet(
                  exercise.id,
                  setId,
                )
              }
              onRemoveExercise={() =>
                removeExercise(
                  exercise.id,
                )
              }
              onMoveUp={() =>
                moveExerciseUp(
                  index,
                )
              }
              onMoveDown={() =>
                moveExerciseDown(
                  index,
                )
              }
              onChangeSet={(
                setId,
                field,
                value,
              ) =>
                updateSet(
                  exercise.id,
                  setId,
                  field,
                  value,
                )
              }
            />
          ),
        )}

        <button
          className={
            styles.addExerciseButton
          }
          onClick={
            addExercise
          }
        >
          + Add Exercise
        </button>

        <div
          className={
            styles.actions
          }
        >
          <button
            className={
              styles.cancelButton
            }
            onClick={() =>
              navigate(
                '/treningi',
              )
            }
          >
            Cancel
          </button>

          <button
            className={
              styles.saveButton
            }
            onClick={
              handleSave
            }
          >
            Save
          </button>
        </div>
      </div>
    </AppShell>
  )
}

export default CreateTrainingPage