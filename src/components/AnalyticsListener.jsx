import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

function AnalyticsListener() {
  const location = useLocation()

  useEffect(() => {
    const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID
    if (!measurementId || !window.gtag) return

    window.gtag('config', measurementId, {
      page_path: location.pathname + location.search,
    })
  }, [location])

  return null
}

export default AnalyticsListener
