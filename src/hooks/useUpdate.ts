import axios from 'axios'
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'
import { useState } from 'react'
import { v4 } from 'uuid'
import { storage } from '../configs/firebase'
import { BASE_URL } from '../configs/url'
import { useAuth } from '../providers/Authprovider'
import { IReqSpecialistFormDTO, IReqUpdateUserDTO } from '../types'

const useUpdate = () => {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
  const { getBearerToken } = useAuth()

  const updateUser = async (Newgender: 'male' | 'female', Newage: number) => {
    const newData: IReqUpdateUserDTO = { gender: Newgender, age: Newage }
    setIsSubmitting(true)
    const token = await getBearerToken()
    if (!token) return
    await axios.patch(`${BASE_URL}/user/data`, newData, {
      headers: { Authorization: token },
    })
    setIsSubmitting(false)
    return
  }

  const updateProfile = async (Newpicture: string, Newname: string, Newgender: 'male' | 'female', Newage: number) => {
    const newData: IReqUpdateUserDTO = { picture: Newpicture, username: Newname, gender: Newgender, age: Newage }
    setIsSubmitting(true)
    const token = await getBearerToken()
    if (!token) return
    await axios.patch(`${BASE_URL}/user/data`, newData, {
      headers: { Authorization: token },
    })
    setIsSubmitting(false)
    return
  }

  const sendSpecialist = async (Newcertificate: string, Newdescription: string) => {
    if (Newdescription == undefined) return
    const newData: IReqSpecialistFormDTO = { certificate: Newcertificate, description: Newdescription }
    setIsSubmitting(true)
    await axios.post<IReqSpecialistFormDTO>(`${BASE_URL}/user/role/specialist`, newData, {
      headers: { Authorization: await getBearerToken() },
    })
    setIsSubmitting(false)
  }
  const uploadFile = async (image: File | null) => {
    if (!image) return
    const imageRef = ref(storage, `images/${image.name + v4()}`)
    const snapshot = await uploadBytes(imageRef, image)
    const url = await getDownloadURL(snapshot.ref)
    return url
  }
  const uploadFileProfile = async (image: File | null) => {
    if (!image) return
    const imageRef = ref(storage, `images/profile/${image.name + v4()}`)
    const snapshot = await uploadBytes(imageRef, image)
    const url = await getDownloadURL(snapshot.ref)
    return url
  }

  return { isSubmitting, updateUser, sendSpecialist, uploadFile, updateProfile, uploadFileProfile }
}

export default useUpdate
