"use client"

import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Avatar, Radio } from '@mui/material'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import useSWR from 'swr'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import toast, {Toaster} from 'react-hot-toast'

const fetcher = (...args) => fetch(...args).then(res => res.json())

export default function FRSC() {
  const [ corpers, setCorpers ] = useState()
  const pathname = usePathname()

  useEffect(() => {
    setCorpers((prevState) => ({
      ...prevState, cds: 'frsc'
  }))
  },[])

  const { data: corperData, error: corperError, isLoading: corperIsLoading } = useSWR('/api/getCorpers', fetcher)

  const handleAdd = async () => {
    const response = await fetch('/api/createCorper', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(corpers)
  })
  const content = await response.json()
  console.log(content)
  if(content.message === "Something went wrong") {
    return toast.error("Something went wrong")
  } else {
     return toast.success("Corper created successfully!")
  }
  }

  return (
    <main className='flex flex-col space-y-4'>
      <Toaster />
      <section className='flex flex-col gap-3 bg-white dark:bg-darkGray py-2 px-4 rounded-lg'>
        <div className='xl:text-2xl font-semibold capitalize text-primary dark:text-lightGray'>
          {pathname.split('/').pop()}
        </div>
        <div className='flex items-center justify-between'>
          <Input type="date" className=""/>
          <div>
          <AlertDialog>
            <AlertDialogTrigger className='bg-[#13c55a] text-white py-2 px-5 rounded-md'>Add New</AlertDialogTrigger>
            <AlertDialogContent className="bg-white">
              <AlertDialogHeader>
                <AlertDialogTitle>Add New Corps Member</AlertDialogTitle>
                <fieldset className='flex flex-col gap-2'>
                  <label htmlFor="">Name</label>
                  <input
                    onChange={(e) => {
                      setCorpers((prevState) => ({
                            ...prevState, full_name: e.target.value
                        }))
                    }}
                    type="text" className='border-[1px] p-2 rounded-md outline-none' />
                </fieldset>
                <fieldset className='flex flex-col gap-2'>
                  <label htmlFor="">State Code</label>
                  <input
                    onChange={(e) => {
                      setCorpers((prevState) => ({
                            ...prevState, state_code: e.target.value
                        }))
                    }}
                    type="text" className='border-[1px] p-2 rounded-md outline-none' />
                </fieldset>
                <fieldset className='flex flex-col gap-2'>
                  <label htmlFor="">PPA</label>
                  <input
                    onChange={(e) => {
                      setCorpers((prevState) => ({
                            ...prevState, ppa: e.target.value
                        }))
                    }}
                    type="text" className='border-[1px] p-2 rounded-md outline-none' />
                </fieldset>
                <fieldset className='flex flex-col gap-2'>
                  <label htmlFor="">State or Origin</label>
                  <input
                    onChange={(e) => {
                        setCorpers((prevState) => ({
                            ...prevState, state: e.target.value
                        }))
                    }}
                    type="text" className='border-[1px] p-2 rounded-md outline-none' />
                </fieldset>
                <fieldset className='flex flex-col gap-2'>
                  <label htmlFor="">Phone Number</label>
                  <input
                    onChange={(e) => {
                      setCorpers((prevState) => ({
                            ...prevState, phone_number: e.target.value
                        }))
                    }}
                    type="text" className='border-[1px] p-2 rounded-md outline-none' />
                </fieldset>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction className="text-white" onClick={handleAdd}>Continue</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
          </div>
      </div>
      </section>
      

      <section className='bg-white dark:bg-darkGray h-fit p-4 rounded-lg flex flex-col gap-10'>
        <Table>
          <TableHeader className=''>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>State code</TableHead>
              <TableHead>Present</TableHead>
              <TableHead>Absent</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>

          {corperIsLoading && <div>
            <p>Loading...</p>
            </div>}

            {corperError && <div>
            <p>Error Loading Pagw</p>
            </div>}

          {corperData && <TableBody>
            {corperData.filter(data => data.cds == "frsc").map((item) => (
              <TableRow key={item.parent_id}>
                <TableCell className='flex items-center gap-2 '>
                  <Avatar src='' alt={item.full_name}/>
                  <p className=''>{item.full_name}</p>
                </TableCell>
                <TableCell>{item.state_code}</TableCell>
                <TableCell className="flex items-center gap-3">Present<input type="radio" name="attend" className='w-4 h-4 accent-primary' /></TableCell>
                <TableCell className="flex items-center gap-3">Absent<input type="radio" name="attend" className='w-4 h-4 accent-primary' /></TableCell>
                <TableCell className='flex gap-4'>
                  <Button size="sm">View</Button>
                  <Button variant="destructive" size="sm">Delete</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>}
        </Table>

        <div className='flex items-center justify-between'>
          <small className='dark:text-lightGray transition-colors duration-500'>Showing 1 to 5 of 30 enteries</small>
          <div className='flex items-center gap-8'>
            <Button variant="secondary" className="text-white">Previous</Button>
            <Button className="text-white">Next</Button>
          </div>
        </div>
        <div className='mx-auto'>
          <Button>Save attendance</Button>
        </div>
      </section>
    </main>
  )
}
