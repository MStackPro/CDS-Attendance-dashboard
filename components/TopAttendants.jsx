import React from 'react'
import {BarCds} from './charts/BarCds'

export default function TopAttendants({corperData, corperError, corperIsLoading}) {
  return (
    <main className='w-full flex justify-center'>
      <BarCds corperData={corperData} corperIsLoading={corperIsLoading} corperError={corperError} />
    </main>
  )
}
