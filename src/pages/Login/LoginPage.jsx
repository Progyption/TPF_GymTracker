import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import LoginCard from '../../components/LoginCard'
import { useAuth } from '../../context/AuthContext'
import styles from './LoginPage.module.css'

function LoginPage() {
  const navigate = useNavigate()
  const location = useLocation()
  const { login, loginWithGoogle, authError, loading } = useAuth()
  const [form, setForm] = useState({
    email: 'demo@gymtrack.pl',
    password: 'demo1234',
  })

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const result = await login(form.email, form.password)
    if (result.ok) {
      navigate(location.state?.from || '/dashboard', { replace: true })
    }
  }

  const handleGoogleSubmit = async () => {
    console.log('kliknięto Google')
    const result = await loginWithGoogle()
    console.log('wynik:', result)
    if (result.ok) {
      navigate(location.state?.from || '/dashboard', { replace: true })
    }
  }

  return (
    <div className={styles.page}>
      <div className={styles.phone}>
        <LoginCard
          email={form.email}
          password={form.password}
          error={authError}
          loading={loading}
          onChange={handleChange}
          onSubmit={handleSubmit}
          onGoogleSubmit={handleGoogleSubmit}
        />
      </div>
    </div>
  )
}

export default LoginPage
