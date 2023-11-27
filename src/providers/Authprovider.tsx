import axios from 'axios'
import {
  Auth,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from 'firebase/auth'
import { ReactNode, createContext, useContext, useEffect, useState } from 'react'
import { BASE_URL } from '../configs/url'
import { IUserDTO } from '../types'
import { auth } from '../configs/firebase'

interface IAuthProvider {
  children: ReactNode
}

type IAUthContext = {
  user: IUserDTO | null
  signUpWithEmail: (email: string, password: string) => Promise<IUserDTO | undefined>
  signInWithGoogle: () => Promise<IUserDTO | undefined>
  signOutAuth: () => Promise<void>
  token: string | null
  auth: Auth
  setToken: (value: string | null) => void
}

const AuthContext = createContext<IAUthContext | null>(null)

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) throw new Error('can not use useAuth outside AuthProvider')
  return context
}

const AuthProvider = ({ children }: IAuthProvider) => {
  const [user, setUser] = useState<IUserDTO | null>(null)
  const [token, setToken] = useState<string | null>(null)

  useEffect(() => {
    auth.onAuthStateChanged(async (userCredential) => {
      if (userCredential) {
        const token = await userCredential.getIdToken()
        const result = await axios.get<IUserDTO>(`${BASE_URL}/user/data`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        const userData = result.data
        setUser(userData)
      } else {
        setUser(null)
      }
    })
  }, [])

  const signUpWithEmail = async (email: string, password: string) => {
    const expression: RegExp = /^[A-Z0-9._%+-]+@(apple|gmail|outlook|yahoo|hey|superhuman|hotmail)+\.[A-Z]{2,}$/i

    if (!email || typeof email !== 'string') {
      alert('please enter an email')
      return
    }
    if (!password || typeof password !== 'string') {
      alert('please enter an password')
      return
    }
    if (!expression.test(email)) {
      alert('Please enter correct email.')
      return
    }
    if (password.length < 8) {
      alert('Please enter correct password.')
      return
    }

    signInWithEmailAndPassword(auth, email, password).catch(() => {
      createUserWithEmailAndPassword(auth, email, password).catch((error) => {
        if (error instanceof Error) alert('Email already in use')
      })
    })

    const result = await axios.get<IUserDTO>(`${BASE_URL}/user/me`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    setUser(result.data)
    return result.data
  }

  const signInWithGoogle = async () => {
    await signInWithPopup(auth, new GoogleAuthProvider()).catch((error) => {
      if (error instanceof Error) alert('Failed to log in')
    })

    const result = await axios.get(`${BASE_URL}/user/me`, { headers: { Authorization: `Bearer ${token}` } })
    setUser(result.data)
    return result.data
  }
  const signOutAuth = async () => {
    signOut(auth)
  }

  const store: IAUthContext = {
    user,
    signUpWithEmail,
    signInWithGoogle,
    signOutAuth,
    token,
    auth,
    setToken,
  }

  return <AuthContext.Provider value={store}>{children}</AuthContext.Provider>
}
export default AuthProvider
