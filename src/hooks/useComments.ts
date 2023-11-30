import axios, { AxiosError } from 'axios'
import { useState } from 'react'
import { BASE_URL } from '../configs/url'
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
      await axios.post<IReqComment>(`${BASE_URL}/solutions/solution/:solutionId/comments`, newContentBody, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      })
    } catch (err) {
      if (err instanceof AxiosError) throw new Error(err.response?.data.message)
    } finally {
      setIsLoading(false)
    }
  }

  return { isLoading, isSubmitting, createcomment }
}

export default useComments
