import 'styles/globals.css'

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <link
        href='https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;700;800&display=swap'
        rel='stylesheet'
      />
      <Component {...pageProps} />
    </>
  )
}
