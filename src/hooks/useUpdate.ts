import axios from 'axios'
import { useEffect, useState } from 'react'
import { ISpecialistFormDTO, IUpdateUserDTO, IUserDTO } from '../types'
import { useAuth } from '../providers/Authprovider'
import { BASE_URL } from '../configs/url'

const useUpdate = () => {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
  const [user, setUser] = useState<IUserDTO | null>(null)
  const [update, setUpdate] = useState<IUpdateUserDTO | null>(null)
  const [special, setSpecial] = useState<ISpecialistFormDTO | null>(null)
  const { token, auth, setToken } = useAuth()

  useEffect(() => {
    auth.onAuthStateChanged(async (userCredential) => {
      if (userCredential) {
        setToken(await userCredential.getIdToken())
        const result = await axios.get<IUserDTO>(`${BASE_URL}/user/me`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        const userData = result.data
        setUser(userData)
      } else {
        setUser(null)
      }
    })
  }, [auth])

  const updateUserform = async (Newgender: 'male' | 'female', Newage: number) => {
    const newData: IUpdateUserDTO = { gender: Newgender, age: Newage }
    setIsSubmitting(true)
    try {
      const res = await axios.patch<IUpdateUserDTO>('http://localhost:8080/user/', newData, {
        headers: { Authorization: `Bearer ${token}` },
      })
      setUpdate(res.data)
    } catch (error) {
      console.log(error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const createSpecialistForm = async (Newcertificate: string, Newdescription: string) => {
    const newData: ISpecialistFormDTO = { certificate: Newcertificate, description: Newdescription }
    setIsSubmitting(true)
    try {
      const res = await axios.post<ISpecialistFormDTO>('http://localhost:8080/user/role/specialist', newData, {
        headers: { Authorization: `Bearer ${token}` },
      })
      setSpecial(res.data)
      console.log(res.data)
    } catch (error) {
      console.log(error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return { isSubmitting, updateUserform, update, user, createSpecialistForm, special }
}

export default useUpdate
