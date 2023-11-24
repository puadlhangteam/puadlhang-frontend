import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'
import { v4 } from 'uuid'
import { storage } from '../configs/firebase.config'
import { useState } from 'react'
import { ISpecialistFormDTO } from '../types'

const useUpload = () => {
  const [imageUpload, setImageUpload] = useState<File | null>(null)
  const [form, setForm] = useState<ISpecialistFormDTO>({
    certificate: '',
    description: '',
  })
  const uploadFile = () => {
    if (imageUpload == null) return
    const imageRef = ref(storage, `images/${imageUpload.name + v4()}`)
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setForm({ ...form, certificate: url })
      })
    })
    return form
  }

  return { setImageUpload, setForm, form, uploadFile }
}

export default useUpload
