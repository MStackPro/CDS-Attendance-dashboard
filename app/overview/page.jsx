"use client"

import Cards from '../../components/Cards'
import TopAttendants from '../../components/TopAttendants'
import React from 'react'
import useSWR from 'swr'

const fetcher = (...args) => fetch(...args).then(res => res.json())


export default function Dashboard() {

  const { data: corperData, error: corperError, isLoading: corperIsLoading } = useSWR('/api/getCorpers', fetcher)

  return (
    <main>
      <section className='flex gap-6'>
        <div className='flex flex-col gap-10 flex-[3]'>
          <Cards corperData={corperData} corperIsLoading={corperIsLoading} corperError={corperError}/>
          <TopAttendants/>
        </div>
        <div className='bg-white rounded-lg w-full flex-1 h-fit dark:bg-darkGray transition-colors duration-500'></div>
      </section>
    </main>
  )
}
