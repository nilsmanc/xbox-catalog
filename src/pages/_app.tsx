import Head from 'next/head'
import './../styles/globals.css'

const MyApp = ({ Component, pageProps }) => {
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
