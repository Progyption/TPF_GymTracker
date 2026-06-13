import { Navigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import AppShell from '../../components/AppShell'
import Card from '../../components/Card'
import EditProfileModal from '../../components/EditProfileModal'
import { useAuth } from '../../context/AuthContext'
import styles from './ProfilePage.module.css'

function Row({
  label,
  value,
  icon = '•',
  onClick,
}) {
  return (
    <button
      type="button"
      className={styles.rowButton}
      onClick={onClick}
    >
      <div className={styles.row}>
        <span className={styles.rowIcon}>
          {icon}
        </span>

        <div>
          <p className={styles.rowLabel}>
            {label}
          </p>

          <p className={styles.rowValue}>
            {value}
          </p>
        </div>

        <span className={styles.arrow}>
          ›
        </span>
      </div>
    </button>
  )
}

function ProfilePage() {
  const { user, logout } =
    useAuth()

  const [modalType, setModalType] =
    useState(null)

  const [formValues, setFormValues] =
    useState({})

  const [
    validationErrors,
    setValidationErrors,
  ] = useState({})

  const [profileData, setProfileData] =
    useState({
      name: user?.name || '',
      email: user?.email || '',
      level: '',
      height: '',
      weight: '',
    })

  useEffect(() => {
    const stored =
      localStorage.getItem(
        'gymtrack-profile',
      )

    if (stored) {
      setProfileData(
        JSON.parse(stored),
      )
    }
  }, [])

  const saveProfile = data => {
    localStorage.setItem(
      'gymtrack-profile',
      JSON.stringify(data),
    )

    setProfileData(data)
  }

  const openModal = type => {
    setValidationErrors({})
    setModalType(type)

    if (type === 'profile') {
      setFormValues({
        name:
          profileData.name ||
          '',
        level:
          profileData.level ||
          '',
      })
    }

    if (type === 'email') {
      setFormValues({
        email:
          profileData.email ||
          '',
      })
    }

    if (type === 'height') {
      setFormValues({
        height:
          profileData.height ||
          '',
      })
    }

    if (type === 'weight') {
      setFormValues({
        weight:
          profileData.weight ||
          '',
      })
    }
  }

  const closeModal = () => {
    setModalType(null)
    setFormValues({})
    setValidationErrors({})
  }

  const handleChange = (
    key,
    value,
  ) => {
    setFormValues(prev => ({
      ...prev,
      [key]: value,
    }))
  }

  const handleSave = () => {
    const errors = {}

    if (modalType === 'profile') {
      if (!formValues.name?.trim())
        errors.name = 'Podaj imię'

      if (!formValues.level)
        errors.level = 'Wybierz poziom'
    }

    if (modalType === 'email') {
      const email = formValues.email?.trim()

      if (!email) {
        errors.email = 'Pole email jest wymagane.'
      } else if (
          !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
      ) {
        errors.email =
            'Wprowadź poprawny adres email.'
      }
    }

    if (modalType === 'height') {
      const height = Number(formValues.height)

      if (!formValues.height?.trim()) {
        errors.height =
            'Podaj swój wzrost.'
      } else if (
          Number.isNaN(height) ||
          height < 100 ||
          height > 250
      ) {
        errors.height =
            'Wzrost musi mieścić się w zakresie 100-250 cm.'
      }
    }

    if (modalType === 'weight') {
      const weight = Number(formValues.weight)

      if (!formValues.weight?.trim()) {
        errors.weight =
            'Podaj swoją wagę.'
      } else if (
          Number.isNaN(weight) ||
          weight < 30 ||
          weight > 300
      ) {
        errors.weight =
            'Waga musi mieścić się w zakresie 30-300 kg.'
      }
    }

    if (Object.keys(errors).length > 0) {
      setValidationErrors(errors)
      return
    }

    const updated = {
      ...profileData,
      ...formValues,
    }

    saveProfile(updated)
    closeModal()
  }

  if (!user)
    return (
      <Navigate
        to="/login"
        replace
      />
    )

  return (
    <AppShell>
      <Card
        className={
          styles.profileCard
        }
      >
        <div
          className={styles.avatar}
        >
          🏋
        </div>

        <div>
          <h1
            className={styles.name}
          >
            {profileData.name}
          </h1>

          <p
            className={styles.level}
          >
            Poziom:{' '}
            {profileData.level ||
              'Brak'}{' '}
            • 124 treningi
          </p>
        </div>

        <button
          className={
            styles.editButton
          }
          type="button"
          onClick={() =>
            openModal(
              'profile',
            )
          }
        >
          ✎
        </button>
      </Card>

      <h2
        className={
          styles.sectionTitle
        }
      >
        Dane użytkownika
      </h2>

      <Card
        className={styles.stack}
      >
        <Row
          label="Email"
          value={
            profileData.email
          }
          icon="✉"
          onClick={() =>
            openModal(
              'email',
            )
          }
        />

        <Row
          label="Wzrost"
          value={
            profileData.height
              ? `${profileData.height} cm`
              : 'Brak'
          }
          icon="↕"
          onClick={() =>
            openModal(
              'height',
            )
          }
        />

        <Row
          label="Waga"
          value={
            profileData.weight
              ? `${profileData.weight} kg`
              : 'Brak'
          }
          icon="⌛"
          onClick={() =>
            openModal(
              'weight',
            )
          }
        />
      </Card>

      <h2
        className={
          styles.sectionTitle
        }
      >
        Ustawienia aplikacji
      </h2>

      <Card
        className={styles.stack}
      >
        <Row
          label="Zmiana hasła"
          value=""
          icon="◔"
        />

        <Row
          label="Powiadomienia"
          value="Włączone"
          icon="🔔"
        />

        <Row
          label="Jednostki"
          value="Metryczne (kg/cm)"
          icon="⌗"
        />
      </Card>

      <Card
        className={styles.stack}
      >
        <Row
          label="Centrum pomocy"
          value=""
          icon="?"
        />

        <Row
          label="Polityka prywatności"
          value=""
          icon="@"
        />
      </Card>

      <button
        className={
          styles.logoutButton
        }
        type="button"
        onClick={logout}
      >
        ⎋ Wyloguj
      </button>

      <EditProfileModal
        isOpen={
          !!modalType
        }
        title={
          modalType ===
          'profile'
            ? 'Edytuj profil'
            : modalType ===
              'email'
            ? 'Edytuj email'
            : modalType ===
              'height'
            ? 'Edytuj wzrost'
            : 'Edytuj wagę'
        }
        values={formValues}
        validationErrors={
          validationErrors
        }
        onChange={
          handleChange
        }
        onCancel={
          closeModal
        }
        onSave={handleSave}
        fields={
          modalType ===
          'profile'
            ? [
                {
                  key: 'name',
                  placeholder:
                    'Nowe imię',
                },
                {
                  key: 'level',
                  type:
                    'select',
                  placeholder:
                    'Wybierz poziom',
                  options:
                    [
                      'Początkujący',
                      'Zaawansowany',
                      'Elitarny',
                    ],
                },
              ]
            : modalType ===
              'email'
            ? [
                {
                  key: 'email',
                  type: 'email',
                  placeholder:
                    'Nowy email',
                },
              ]
            : modalType ===
              'height'
            ? [
                {
                  key: 'height',
                  type: 'number',
                  placeholder:
                    'Nowy wzrost',
                },
              ]
            : [
                {
                  key: 'weight',
                  type: 'number',
                  placeholder:
                    'Nowa waga',
                },
              ]
        }
      />
    </AppShell>
  )
}

export default ProfilePage