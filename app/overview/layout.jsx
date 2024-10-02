import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import React from 'react'

export default function LayoutPage({children}) {
  return (
    <main className='flex text-textColor dark:text-textColor transition-colors duration-500'>
      <section className='flex-1 bg-primary dark:bg-darkGray transition-colors duration-500 min-h-screen p-[10px] fixed z-40 w-[16rem]'>
        <Sidebar/>
      </section>

      <section className='flex-[4] px-6 ml-[16rem]'>
        <div className=''>
          <Navbar/>
        </div>
        {children}
      </section>
    </main>
  )
}
