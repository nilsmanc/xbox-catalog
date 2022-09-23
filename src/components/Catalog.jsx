import Image from 'next/image'
import useSWR from 'lib/swr'
import Router, { useRouter } from 'lib/router'
import ActiveLink from './ActiveLink'
import Details from './Details'

function getUrl(params, query) {
  let url = '/api/products'
  const searchParams = new URLSearchParams()

  if (params.path?.[0]) {
    searchParams.append('filter', params.path[0])
  }

  if (query.available) {
    searchParams.append('available', query.available)
  }

  const searchString = searchParams.toString()

  return `${url}${searchString.length !== 0 ? '?' + searchString : ''}`
}

export default function Catalog({ products }) {
  const { pathname, params, query } = useRouter()
  const url = getUrl(params, query)
  const { data, isValidating } = useSWR(url, {
    initialData: products,
    revalidateOnFocus: false,
  })

  function handleChangeDevice(evt) {
    console.log({ available: evt.currentTarget.value })
    Router.replace(
      {
        pathname,
        query: {
          ...query,
          available: evt.currentTarget.value,
        },
      },
      { shallow: true },
    )
  }

  function handleClearFiltersClick() {
    Router.replace('/', { shallow: true })
  }

  return (
    <main className='flex mx-6 my-8 min-w-[768px]'>
      <aside className='w-60 mr-12 flex-shrink-0'>
        <section className='mb-6'>
          <h3 className='text-2xl font-bold'>Collections</h3>
          <hr className='border-gray-300 mt-8 mb-4' />
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
        </section>
        <section>
          <form>
            <h3 className='text-2xl font-bold mb-4'>Filters</h3>
            <button
              type='reset'
              className='uppercase font-extrabold text-green-700'
              onClick={handleClearFiltersClick}>
              Clear Filters
            </button>
            <hr className='border-gray-300 mt-4 mb-2' />
            <Details label='Available on'>
              <fieldset className='space-y-2 mt-1' aria-labelledby='available-on'>
                <div className='relative'>
                  <input
                    onChange={handleChangeDevice}
                    id='xbox-series-x-s'
                    name='available-on'
                    value='xbox-one'
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
                    onChange={handleChangeDevice}
                    id='xbox-360'
                    name='available-on'
                    value='xbox-360'
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
                    onChange={handleChangeDevice}
                    id='pc'
                    name='available-on'
                    value='xbox-pc'
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
            </Details>
            <hr className='border-gray-300 my-3' />
            <Details label='Genre' />
            <hr className='border-gray-300 my-3' />
            <Details label='Features' />
            <hr className='border-gray-300 my-3' />
            <Details label='Maturity Rating' />
          </form>
        </section>
      </aside>
      <section className='w-full mt-4'>
        <div className='text-xs my-3'>Viewing 1-20 of 554 results</div>
        <button type='reset' className='uppercase font-extrabold text-green-700 mb-8'>
          Clear Filters
        </button>
        <div className='flex flex-wrap gap-5'>
          {data.map(({ id, title, img, price, msrp }) => {
            if (isValidating) {
              return (
                <article className='relative flex flex-col items-start w-[150px] mb-6' key={id}>
                  <div className='mb-2 transform transition h-[225px] w-[150px] bg-gray-200 animate-pulse rounded-md'></div>
                  <span className='bg-gray-200 inline-block px-1 uppercase text-xs leading-relaxed tracking-widest mb-2 animate-pulse rounded w-12'>
                    &nbsp;
                  </span>
                  <div className='block w-full mb-2'>
                    <span className='bg-gray-200 animate-pulse rounded-t inline-block w-full'>
                      &nbsp;
                    </span>
                    <br />
                    <span className='bg-gray-200 animate-pulse rounded-b inline-block w-20'>
                      &nbsp;
                    </span>
                  </div>
                  <div className='text-lg w-20 bg-gray-200 animate-pulse rounded'>&nbsp;</div>
                </article>
              )
            }

            return (
              <article
                className='product relative flex flex-col items-start w-[150px] mb-6'
                key={id}>
                <div className='product-image mb-2 transform transition h-[225px] bg-gray-50'>
                  <Image src={img} width='150' height='225' alt={title} />
                </div>
                <span className='bg-gray-200 inline-block px-1 uppercase text-xs leading-relaxed tracking-widest mb-2'>
                  40% off
                </span>
                <h3>
                  <a
                    className='game-link inline-block leading-tight text-sm hover:underline mb-2'
                    href='#'
                    title={title}>
                    {title}
                  </a>
                </h3>
                <div className='text-lg'>
                  <span className='line-through text-gray-600'>${msrp}</span>{' '}
                  <span className=''>${price}</span>
                </div>
              </article>
            )
          })}
        </div>
      </section>
    </main>
  )
}
