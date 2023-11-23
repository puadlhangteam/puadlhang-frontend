import { FormEvent, useEffect, useState } from 'react'
import { useAuth } from '../providers/Authprovider'

const useLogin = () => {
  const { user, signInWithGoogle, signUpWithEmail } = useAuth()
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  useEffect(() => {
    if (user) console.log(user)
  }, [user])

  const handleSubmitemail = async (e: FormEvent) => {
    e.preventDefault()
    try {
      await signUpWithEmail(email, password)
    } catch (err) {
      console.log(err)
    }
  }

  const handleSubmitgmail = async (e: FormEvent) => {
    e.preventDefault()
    try {
      await signInWithGoogle()
    } catch (err) {
      console.log(err)
    }
  }

  return { handleSubmitemail, handleSubmitgmail, setEmail, setPassword }
}

export default useLogin
