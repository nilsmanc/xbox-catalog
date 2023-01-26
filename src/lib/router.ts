import NextRouter, { useRouter as useNextRouter } from 'next/router'

import { URL, TransitionOptions } from '../types'

export function useRouter() {
  const router = useNextRouter()
  const [pathname, queryString = ''] = router.asPath.split('?')
  const searchParams = new URLSearchParams(queryString)
  const params = { ...router.query }
  const query = {}

  searchParams.forEach((value, key) => {
    if (params[key]) {
      delete params[key]
    }
    if (Array.isArray(query[key])) {
      query[key].push(key)
      return
    }
    if (typeof query[key] === 'string') {
      query[key] = [query[key], value]
      return
    }
    query[key] = value
  })

  return Object.assign({}, router, { pathname, queryString, query, params })
}

function push(url: URL | string, opts: TransitionOptions) {
  return NextRouter.push(url, null, opts)
}

function replace(url: URL | string, opts: TransitionOptions) {
  return NextRouter.replace(url, null, opts)
}

const Router = {
  ...NextRouter,
  push,
  replace,
}

export default Router
