import MobileNav from '@/components/MobileNav'
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import React from 'react'

export default function LayoutPage({children}) {
  return (
    <main className='flex text-textColor dark:text-textColor transition-colors duration-500'>
      <section className='xl:flex-1 bg-primary hidden xl:block dark:bg-darkGray transition-colors duration-500 min-h-screen p-[10px] fixed z-40 w-[16rem]'>
        <Sidebar/>
      </section>

      <section className='xl:flex-[4] container w-full xl:ml-[16rem]'>
        <div className='hidden xl:block'>
          <Navbar/>
        </div>
        <div className='xl:hidden'>
          <MobileNav/>
        </div>
        <div className='mt-24 xl:mt-4'>
          {children}
        </div>
      </section>
    </main>
  )
}
