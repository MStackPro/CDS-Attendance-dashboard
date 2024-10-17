"use client"

import Cards from '../../components/Cards'
import TopAttendants from '../../components/TopAttendants'
import React from 'react'
import useSWR from 'swr'

const fetcher = (...args) => fetch(...args).then(res => res.json())


export default function Dashboard() {

  const { data: corperData, error: corperError, isLoading: corperIsLoading } = useSWR('/api/getCorpers', fetcher)

  return (
    <main className=''>
      <section className='pb-4'>
        <div className='flex flex-col gap-10 flex-[3] w-full'>
          <Cards corperData={corperData} corperIsLoading={corperIsLoading} corperError={corperError}/>
          <TopAttendants corperData={corperData} corperIsLoading={corperIsLoading} corperError={corperError}/>
        </div>
      </section>
    </main>
  )
}
