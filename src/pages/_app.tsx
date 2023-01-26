import { NextPage } from 'next'
import Head from 'next/head'

import { Product } from '../types'

import './../styles/globals.css'

type MyAppProps = {
  Component: React.ElementType
  pageProps: Product[]
}

const MyApp: NextPage<MyAppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Clone of Xbox Games Catalog</title>
        <meta
          name='description'
          content='Clone of Xbox Game Catalog. Implemented with Next.js and Tailwind'
        />
        <meta name='keywords' content='HTML, CSS, JavaScript'></meta>
        <meta name='author' content='Pavel Mineev' />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
