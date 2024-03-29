import { fetchProducts } from '../lib/products'
import Catalog from '../components/Catalog'

type ServerSidePropsCtx = {
  params?: {
    path: string
  }
  query: {
    available: boolean
  }
}

export async function getServerSideProps(ctx: ServerSidePropsCtx) {
  const products = await fetchProducts({
    filter: ctx.params.path?.[0],
    available: ctx.query.available,
  })

  return {
    props: {
      products,
    },
  }
}

const Index = ({ products }) => {
  return (
    <>
      <Catalog products={products} />
      <footer className='mt-4 p-6 text-center leading-tight space-y-2'>
        <p>
          Powered by{' '}
          <a
            href='https://nextjs.org'
            className='inline-block border-b border-sky-200 text-sky-600'>
            Next.js
          </a>{' '}
          and{' '}
          <a
            href='https://tailwindcss.com'
            className='inline-block border-b border-sky-200 text-sky-600'>
            Tailwind CSS
          </a>
          . Hosted on ▲
          <a
            href='https://vercel.com'
            className='inline-block border-b border-sky-200 text-sky-600'>
            Vercel
          </a>
        </p>
      </footer>
    </>
  )
}

export default Index
