export type Product = {
  id: string
  img: string
  msrp: number
  price: number
  title: string
}

export type Config = {
  initialData: Product[]
  revalidateOnFocus: boolean
}

export type Params = {
  path?: string
}

export type Query = {
  available?: string
}

export type URL = {
  pathname: string
  query: {
    available: string
  }
}

export type TransitionOptions = {
  shallow?: boolean
  locale?: string | false
  scroll?: boolean
}
