import React, { useEffect, useState } from 'react'

export const useFetch = (url) => {
  const [data, setData] = useState(null)
  const [loading, setloading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      setloading(true)
      try {
        const res = await fetch(url);
        if (!res.ok) {
          throw new Error(res.statusText)
        }
        const result = await res.json();
        setloading(false)
        setData(result)
        setError(null)
      } catch (error) {
        setError(error)
        setloading(false)
      }

    }
    fetchData()
  }, [url])

  return { data, loading, error }
}