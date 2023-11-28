import { useEffect, useState } from 'react'
import { IResSolutionsDTO } from '../types'
import axios from 'axios'
import { BASE_URL } from '../configs/url'

const useContentbymuscle = (muscle: string) => {
  const [contents, setContentsDetail] = useState<IResSolutionsDTO[] | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<string>('')
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      try {
        const res = await axios.get<IResSolutionsDTO[]>(`${BASE_URL}/solutions/${muscle}`)

        setContentsDetail(res.data)
      } catch (err) {
        setError(error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [muscle])
  return { contents, isLoading }
}

export default useContentbymuscle
