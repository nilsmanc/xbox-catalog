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
