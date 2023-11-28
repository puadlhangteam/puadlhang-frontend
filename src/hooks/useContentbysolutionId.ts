import { useEffect, useState } from 'react'
import { IResSolutionsDTO } from '../types'
import axios from 'axios'
import { BASE_URL } from '../configs/url'

const useContentbysolutionId = (id: string | undefined) => {
  const [content, setContentDetail] = useState<IResSolutionsDTO | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<string>('')
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      try {
        const res = await axios.get<IResSolutionsDTO>(`${BASE_URL}/solutions/solution/${id}`)

        setContentDetail(res.data)
      } catch (err) {
        setError(error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [id])
  return { content, isLoading }
}

export default useContentbysolutionId
