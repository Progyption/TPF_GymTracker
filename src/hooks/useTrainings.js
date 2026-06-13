import { useCallback, useEffect, useState } from 'react'
import {
  deleteTraining,
  getTrainings,
  saveTraining,
  updateTraining,
} from '../services/trainingService'

export function useTrainings() {
  const [trainings, setTrainings] = useState([])
  const [loading, setLoading] = useState(true)

  const loadTrainings = useCallback(() => {
    const data = getTrainings()
    setTrainings(data)
  }, [])

  useEffect(() => {
    loadTrainings()
    setLoading(false)
  }, [loadTrainings])

  const addTraining = useCallback(training => {
    const savedTraining = saveTraining(training)

    setTrainings(current => [
      savedTraining,
      ...current,
    ])

    return savedTraining
  }, [])

  const removeTraining = useCallback(trainingId => {
    deleteTraining(trainingId)

    setTrainings(current =>
      current.filter(
        training => training.id !== trainingId,
      ),
    )
  }, [])

  const editTraining = useCallback(training => {
    const updated = updateTraining(training)

    setTrainings(current =>
      current.map(item =>
        item.id === updated.id
          ? updated
          : item,
      ),
    )

    return updated
  }, [])

  const refreshTrainings = useCallback(() => {
    loadTrainings()
  }, [loadTrainings])

  return {
    trainings,
    loading,
    addTraining,
    removeTraining,
    editTraining,
    refreshTrainings,
  }
}