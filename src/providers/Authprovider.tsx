import axios from 'axios'
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from 'firebase/auth'
import { ReactNode, createContext, useContext, useEffect, useState } from 'react'
import { auth } from '../configs/firebase'
import { BASE_URL } from '../configs/url'
import { IUserDTO } from '../types'

interface IAuthProvider {
  children: ReactNode
}

type IAUthContext = {
  user: IUserDTO | null
  signUpWithEmail: (email: string, password: string) => Promise<void>
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
  const [user, setUser] = useState<IUserDTO | null>(null)

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
    const expression: RegExp = /^[A-Z0-9._%+-]+@(apple|gmail|outlook|yahoo|hey|superhuman)+\.[A-Z]{2,}$/i

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
    user,
    signUpWithEmail,
    signInWithGoogle,
    signOutAuth,
  }

  return <AuthContext.Provider value={store}>{children}</AuthContext.Provider>
}
export default AuthProvider
