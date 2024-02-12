import React from 'react'
import { TiInputChecked } from 'react-icons/ti'

interface ItemsProps {
  key: number
  items: string
}

function Items({ key, items }: ItemsProps) {
  return (
    <div>
      <li key={key} className='flex text-xl'><span className='pr-2'><TiInputChecked size={25} /></span>{items}
      </li>
    </div>
  )
}

export default Items