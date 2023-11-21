import { ReactNode, createContext, useContext, useEffect, useState } from 'react'
import { GoogleAuthProvider, getAuth, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'

interface IAuthProvider {
  children: ReactNode
}

type IAUthContext = {
  token: string | null
  signUpWithEmail: (email: string, password: string) => Promise<boolean>
  signInWithGoogle: () => Promise<void>
  signOutAuth: () => Promise<void>
}

const AuthContext = createContext<IAUthContext | null>(null)

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) throw new Error('can not use useAuth outside AuthProvider')
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

  const signUpWithEmail = async (email: string, password: string) => {
    const expression: RegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
    if (typeof email !== 'string') {
      alert('please enter an email')
      return false
    }
    if (typeof password !== 'string') {
      alert('please enter an password')
      return false
    }
    if (!email) {
      alert('please enter an email')
      return false
    }
    if (!password) {
      alert('please enter an password')
      return false
    }
    if (!expression.test(email)) {
      alert('Please enter correct email.')
      return false
    }
    if (password.length < 8) {
      alert('Please enter correct password.')
      return false
    } else {
      signInWithEmailAndPassword(auth, email, password).catch((error) => {
        if (error instanceof Error) alert('Failed to log in')
      })
      return true
    }
  }

  const signInWithGoogle = async () => {
    signInWithPopup(auth, new GoogleAuthProvider()).catch((error) => {
      if (error instanceof Error) alert('Failed to log in')
    })
  }
  const signOutAuth = async () => {
    signOut(auth)
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
