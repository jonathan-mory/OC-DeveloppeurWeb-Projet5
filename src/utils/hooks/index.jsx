import { useState, useEffect } from 'react'

export function useFetch(url) {
  const [data, setData] = useState(null)
  const [isLoading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    if (!url) return

    async function fetchData() {
      try {
        const response = await fetch(url)
        if (!response.ok) {
          throw new Error(`Erreur HTTP ! status : ${response.status}`)
        }
        const data = await response.json()
        setData(data)
      } catch (error) {
        console.log(error)
        setError(true)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [url])

  return { isLoading, data, error }
}
