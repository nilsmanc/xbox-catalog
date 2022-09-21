import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Head>
        <title>Xbox Catalog</title>
      </Head>
      <main>
        <aside>
          <h3 className='text-2xl font-bold'>Collections</h3>
        </aside>
      </main>
    </>
  )
}
