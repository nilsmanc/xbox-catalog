import clsx from 'clsx'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'lib/router'

const ActiveLink = ({ children, ...props }) => {
  const { pathname } = useRouter()
  const active = pathname === props.href
  return (
    <li>
      <Link {...props} className=''>
        <a className={clsx('block p-2 text-sm hover:underline', active && 'text-green-800')}>
          {children}
        </a>
      </Link>
    </li>
  )
}

export default function Home() {
  return (
    <>
      <Head>
        <title>Xbox Catalog</title>
      </Head>
      <main className='flex mx-6 my-8'>
        <aside className='w-60 flex-shrink-0'>
          <h3 className='text-2xl font-bold'>Collections</h3>
          <hr className='border-gray-300 nt-8 mb-4' />
          <ul className='ml-2 space-y-2'>
            <li>
              <ActiveLink href='/' shallow>
                All Xbox Games
              </ActiveLink>
            </li>
            <li>
              <ActiveLink href='/new-releases' shallow>
                New Releases
              </ActiveLink>
            </li>
            <li>
              <ActiveLink href='/most-played' shallow>
                Most Played
              </ActiveLink>
            </li>
          </ul>
          <form>
            <h3 className='text-2xl font-bold mb-4'>Filters</h3>
            <button className='uppercase font-extrabold text-green-700'>Clear Filters</button>
            <hr className='border-gray-300 mt-4 mb-2' />
            <details className='bg-gray-50'>
              <summary
                className='cursor-pointer p-3 mb-1 bg-gray-100 hover:bg-gray-300 hover:shadow'
                id='available-on'>
                <svg
                  className='arrow-icon w-7 h-7 mr-1 inline-block transform transition-transform -rotate-90'
                  viewBox='0 0 128 128'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path d='M91.9,46.9L64,74.8L36.1,46.9c-1.2-1.2-3.1-1.2-4.2,0c-1.2,1.2-1.2,3.1,0,4.2l30,30c0.6,0.6,1.4,0.9,2.1,0.9 s1.5-0.3,2.1-0.9l30-30c1.2-1.2,1.2-3.1,0-4.2C94.9,45.7,93.1,45.7,91.9,46.9z'></path>
                </svg>
                Available on
              </summary>
              <fieldset className=''>
                <div className='relative'>
                  <input
                    id='xbox-series-x-s'
                    name='available-on'
                    type='radio'
                    className='availability-radio absolute invisible h-0 w-0'
                  />
                  <label
                    htmlFor='xbox-series-x-s'
                    className='availability-label block p-4 cursor-pointer hover:bg-gray-300'>
                    Xbox Series X|S
                  </label>
                </div>
                <div className='relative'>
                  <input
                    id='xbox-one'
                    name='available-on'
                    type='radio'
                    className='availability-radio absolute invisible h-0 w-0'
                  />
                  <label
                    htmlFor='xbox-one'
                    className='availability-label block p-4 cursor-pointer hover:bg-gray-300'>
                    Xbox One
                  </label>
                </div>
                <div className='relative'>
                  <input
                    id='xbox-360'
                    name='available-on'
                    type='radio'
                    className='availability-radio absolute invisible h-0 w-0'
                  />
                  <label
                    htmlFor='xbox-360'
                    className='availability-label block p-4 cursor-pointer hover:bg-gray-300'>
                    Xbox 360
                  </label>
                </div>
                <div className='relative'>
                  <input
                    id='pc'
                    name='available-on'
                    type='radio'
                    className='availability-radio absolute invisible h-0 w-0'
                  />
                  <label
                    htmlFor='pc'
                    className='availability-label block p-4 cursor-pointer hover:bg-gray-300'>
                    PC
                  </label>
                </div>
              </fieldset>
            </details>
          </form>
        </aside>
      </main>
    </>
  )
}
