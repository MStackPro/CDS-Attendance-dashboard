import React from 'react'
import { Input } from './ui/input'
import { IoSearchOutline } from "react-icons/io5";

export default function SearchBox() {
  return (
    <article className='flex items-center py-1 px-3 gap-2 bg-lightGray dark:bg-lightGray/30 dark:text-white rounded-lg'>
      <IoSearchOutline className='cursor-pointer'/>
      <input placeholder='Search...' className='border-none bg-transparent outline-none'/>
    </article>
  )
}
