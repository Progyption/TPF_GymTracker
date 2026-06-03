let firebaseAuth = null

async function getFirebaseAuth() {
  const apiKey = import.meta.env.VITE_FIREBASE_API_KEY
  const authDomain = import.meta.env.VITE_FIREBASE_AUTH_DOMAIN
  const projectId = import.meta.env.VITE_FIREBASE_PROJECT_ID
  const appId = import.meta.env.VITE_FIREBASE_APP_ID

  if (!apiKey || !authDomain || !projectId || !appId) {
    throw new Error('Firebase is not configured. Using demo login instead.')
  }

  if (firebaseAuth) return firebaseAuth

  const [{ initializeApp }, { getAuth, signInWithEmailAndPassword: firebaseSignIn, signOut: firebaseSignOut }] =
    await Promise.all([import('firebase/app'), import('firebase/auth')])

  const app = initializeApp({
    apiKey,
    authDomain,
    projectId,
    appId,
  })

  const auth = getAuth(app)
  firebaseAuth = { auth, firebaseSignIn, firebaseSignOut }
  return firebaseAuth
}

export async function signInWithEmailAndPassword(email, password) {
  const { auth, firebaseSignIn } = await getFirebaseAuth()
  const credentials = await firebaseSignIn(auth, email, password)
  return credentials.user
}

export async function signOut() {
  const { auth, firebaseSignOut } = await getFirebaseAuth()
  await firebaseSignOut(auth)
}
