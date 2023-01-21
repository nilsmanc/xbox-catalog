import React from 'react'

const Details = ({ label, children }) => {
  return (
    <details className='bg-gray-50'>
      <summary
        className='flex items-center p-4 pl-2 cursor-pointer bg-gray-100 hover:bg-gray-300 hover:shadow'
        id='available-on'>
        <svg
          className='arrow-icon w-7 h-7 mr-1 inline-block transform transition-transform -rotate-90'
          viewBox='0 0 128 128'
          xmlns='http://www.w3.org/2000/svg'>
          <path d='M91.9,46.9L64,74.8L36.1,46.9c-1.2-1.2-3.1-1.2-4.2,0c-1.2,1.2-1.2,3.1,0,4.2l30,30c0.6,0.6,1.4,0.9,2.1,0.9 s1.5-0.3,2.1-0.9l30-30c1.2-1.2,1.2-3.1,0-4.2C94.9,45.7,93.1,45.7,91.9,46.9z'></path>
        </svg>
        {label}
      </summary>
      {children}
    </details>
  )
}

export default Details
