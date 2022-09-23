import { useEffect, useRef } from 'react'
import _useSWR from 'swr'

export default function useSWR(key, config = {}) {
  const hasMounted = useRef(false)
  const swr = _useSWR(key, {
    ...config,
    initialData: hasMounted.current ? undefined : config.initialData,
  })

  useEffect(() => {
    hasMounted.current = true
  }, [])

  return {
    ...swr,
    data: hasMounted.current && swr.data ? swr.data : config.initialData,
  }
}
