import { ReactNode, createContext, useContext, useEffect, useState } from 'react'
import { GoogleAuthProvider, getAuth, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'

interface IAuthProvider {
  children: ReactNode
}

type IAUthContext = {
  token: string | null
  signUpWithEmail: (email: string | null, password: string | null) => Promise<void>
  signInWithGoogle: () => Promise<void>
  signOutAuth: () => Promise<void>
}

const AuthContext = createContext<IAUthContext | null>(null)

const clearFirebaseLocalStorage = () => {
  localStorage.removeItem('firebase:authUser')
  localStorage.removeItem('firebase:authState')
  localStorage.removeItem('firebaseLocalStorageDb')
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) throw new Error()
  return context
}

const AuthProvider = ({ children }: IAuthProvider) => {
  const [token, setToken] = useState<string | null>(null)
  const auth = getAuth()

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        setToken(await user.getIdToken())
      } else {
        setToken(null)
      }
    })
  }, [auth])

  const signUpWithEmail = async (email: string | null, password: string | null) => {
    if (
      typeof email !== 'string' ||
      typeof password !== 'string' ||
      !email ||
      !password ||
      email.length < 5 ||
      password.length < 8
    ) {
      alert('..')
      return
    }
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        console.log(userCredential.user)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  const signInWithGoogle = async () => {
    signInWithPopup(auth, new GoogleAuthProvider())
      .then((userCredential) => {
        console.log(userCredential)
      })
      .catch((error) => {
        console.log(error)
      })
  }
  const signOutAuth = async () => {
    signOut(auth)
    clearFirebaseLocalStorage()
  }

  const store: IAUthContext = {
    token,
    signUpWithEmail,
    signInWithGoogle,
    signOutAuth,
  }
  return <AuthContext.Provider value={store}>{children}</AuthContext.Provider>
}
export default AuthProvider
