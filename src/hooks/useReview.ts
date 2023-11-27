import { useEffect, useState } from 'react'

import axios, { AxiosError } from 'axios'
import { ICommentsDTO, IReqComment } from '../types'

const useReviews = () => {
  const [reviews, setReview] = useState<ICommentsDTO | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState(null)
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      try {
        const res = await axios.get<ICommentsDTO>('http://52.63.27.28:8080/solutions/solution/:solutionId')

        console.log(res.data)
        setReview(res.data)
      } catch (err) {
        if (err instanceof AxiosError) setError(err.response?.data.message)
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [])

  const createcomment = async (newComment: string, newRating: number) => {
    const token = localStorage.getItem('token')
    const newContentBody: IReqComment = {
      text: newComment,
      rating: newRating,
    }

    setIsSubmitting(true)
    try {
      const res = await axios.post<IReqComment>(
        'http://52.63.27.28:8080/solutions/solution/:solutionId',
        newContentBody,
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        },
      )

      console.log(res.data)
    } catch (err) {
      if (err instanceof AxiosError) throw new Error(err.response?.data.message)
    } finally {
      setIsLoading(false)
    }
  }

  return { reviews, isLoading, error, isSubmitting, createcomment }
}

export default useReviews
