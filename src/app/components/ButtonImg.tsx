import Link from 'next/link'
import React from 'react'

interface ImageComponent {
  url: string
  Titulo: string
}

function ImgComponent({ url, Titulo }: ImageComponent) {
  return (
    <div>
      <div className='text-center pt-4'>
        <p className='text-xl pb-4'>{Titulo}</p>
        <Link href={url}>
          <button className='w-72 bg-blue-900 text-gray-50 px-4 py-4 rounded-md'>
            Mais Info
          </button>
        </Link>
      </div>
    </div>
  )
}

export default ImgComponent