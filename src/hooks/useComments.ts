import { useState } from 'react'
import axios, { AxiosError } from 'axios'
import { IReqComment } from '../types'

const useComments = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)

  const createcomment = async (newComment: string, newRating: number) => {
    const token = localStorage.getItem('token')
    const newContentBody: IReqComment = {
      text: newComment,
      rating: newRating,
    }

    setIsSubmitting(true)
    try {
      const res = await axios.post<IReqComment>(
        'http://52.63.27.28:8080/solutions/solution/:solutionId/comments',
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

  return { isLoading, isSubmitting, createcomment }
}

export default useComments