import { useEffect, useRef } from 'react'
import _useSWR from 'swr'

import { Config } from '../types'

export default function useSWR(key: string, config = {} as Config) {
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
