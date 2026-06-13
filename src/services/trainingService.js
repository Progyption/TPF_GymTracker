const STORAGE_KEY = 'gymtrack-trainings'

function readTrainings() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)

    if (!stored) {
      return []
    }

    const parsed = JSON.parse(stored)

    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}

function writeTrainings(trainings) {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(trainings),
  )
}

export function getTrainings() {
  return readTrainings().sort(
    (a, b) => b.createdAt - a.createdAt,
  )
}

export function getTrainingById(trainingId) {
  const trainings = readTrainings()

  return trainings.find(
    training => training.id === trainingId,
  )
}

export function saveTraining(training) {
  const trainings = readTrainings()

  const newTraining = {
    ...training,
    id: crypto.randomUUID(),
    createdAt: Date.now(),
  }

  trainings.unshift(newTraining)

  writeTrainings(trainings)

  return newTraining
}

export function updateTraining(updatedTraining) {
  const trainings = readTrainings()

  const updatedTrainings = trainings.map(training =>
    training.id === updatedTraining.id
      ? updatedTraining
      : training,
  )

  writeTrainings(updatedTrainings)

  return updatedTraining
}

export function deleteTraining(trainingId) {
  const trainings = readTrainings()

  const filtered = trainings.filter(
    training => training.id !== trainingId,
  )

  writeTrainings(filtered)
}

export function clearTrainings() {
  localStorage.removeItem(STORAGE_KEY)
}