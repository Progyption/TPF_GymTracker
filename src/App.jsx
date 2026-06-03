import { Navigate, Route, Routes } from 'react-router-dom'
import DashboardPage from './pages/Dashboard/DashboardPage'
import TrainingsPage from './pages/Trainings/TrainingsPage'
import AnalyticsPage from './pages/Analytics/AnalyticsPage'
import ProfilePage from './pages/Profile/ProfilePage'
import LoginPage from './pages/Login/LoginPage'
import NotFoundPage from './pages/NotFound/NotFoundPage'
import ProtectedRoute from './components/ProtectedRoute'
import AnalyticsListener from './components/AnalyticsListener'
import HotjarInit from './components/HotjarInit'

function App() {
  return (
    <>
      <HotjarInit />
      <AnalyticsListener />
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DashboardPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/treningi"
          element={
            <ProtectedRoute>
              <TrainingsPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/analiza"
          element={
            <ProtectedRoute>
              <AnalyticsPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profil"
          element={
            <ProtectedRoute>
              <ProfilePage />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  )
}

export default App
