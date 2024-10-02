import Cards from '@/components/Cards'
import TopAttendants from '@/components/TopAttendants'
import React from 'react'


export default function Dashboard() {
  return (
    <main>
      <section className='flex gap-6'>
        <div className='flex flex-col gap-10 flex-[3]'>
          <Cards/>
          <TopAttendants/>
        </div>
        <div className='bg-white rounded-lg w-full flex-1 h-fit dark:bg-darkGray transition-colors duration-500'></div>
      </section>
    </main>
  )
}
