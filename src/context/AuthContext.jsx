import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { signInWithEmailAndPassword, signOut } from '../services/firebase'

const AuthContext = createContext(null)

const MOCK_USER = {
  name: 'Marek Kowalski',
  email: 'm.kowalski@email.com',
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const stored = localStorage.getItem('gymtrack-user')
    return stored ? JSON.parse(stored) : null
  })
  const [loading, setLoading] = useState(false)
  const [authError, setAuthError] = useState('')

  useEffect(() => {
    if (user) {
      localStorage.setItem('gymtrack-user', JSON.stringify(user))
    } else {
      localStorage.removeItem('gymtrack-user')
    }
  }, [user])

  const login = async (email, password) => {
    setLoading(true)
    setAuthError('')

    try {
      const firebaseUser = await signInWithEmailAndPassword(email, password)
      setUser({
        name: firebaseUser.displayName || MOCK_USER.name,
        email: firebaseUser.email || email,
      })
      return { ok: true }
    } catch (error) {
      if (email === 'demo@gymtrack.pl' && password === 'demo1234') {
        setUser({ ...MOCK_USER, email })
        setLoading(false)
        return { ok: true, demo: true }
      }

      setAuthError(error.message || 'Nie udało się zalogować.')
      return { ok: false }
    } finally {
      setLoading(false)
    }
  }

  const logout = async () => {
    try {
      await signOut()
    } catch {
      // fallback local logout only
    }
    setUser(null)
  }

  const value = useMemo(
    () => ({ user, loading, authError, login, logout }),
    [user, loading, authError],
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider')
  }
  return context
}
