import axios, { AxiosError } from 'axios'
import { useEffect, useState } from 'react'

const useFetchData = <T>(url: string, defaultvalue: T | null = null) => {
  const [data, setData] = useState<T | null>(defaultvalue)
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState<AxiosError | null>(null)
  const [isSuccess, setIsSuccess] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      await axios
        .get<T>(url)
        .then((res) => setData(res.data))
        .catch((err: AxiosError) => {
          setIsError(err)
        })
      setIsSuccess(true)
      setIsLoading(false)
    }
    fetchData()
  }, [url])

  const onCreateData = async (newData: T) => {
    setIsLoading(true)
    await axios.post<T>(url, newData).catch((err: AxiosError) => {
      setIsError(err)
    })
    setIsSuccess(true)
    setIsLoading(false)
  }

  return { data, isSuccess, isLoading, isError, onCreateData }
}
export default useFetchData
