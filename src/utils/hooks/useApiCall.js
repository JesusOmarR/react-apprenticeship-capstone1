import { useEffect, useState, useDebugValue } from 'react'
import axiosClient from '../axiosClient'

function useApiCall(url) {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    const controller = new AbortController()
    const fecthAPI = async () => {
      setLoading(false)
      try {
        setLoading(true)
        const {
          data: { items },
        } = await axiosClient.get(url, {
          signal: controller.signal,
        })

        setData(items)
        setLoading(false)
      } catch (error) {
        setLoading(false)
        setError(error)
      }
    }

    fecthAPI()

    return () => {
      controller.abort()
      setData([])
      setLoading(false)
    }
  }, [url])

  useDebugValue(data ? data : error)
  return { data, error, loading }
}

export default useApiCall
