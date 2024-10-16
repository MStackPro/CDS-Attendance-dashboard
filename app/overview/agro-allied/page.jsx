"use client"

import { Button } from '@/components/ui/button'
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

export default function AgroAllied() {
  const [ corpers, setCorpers ] = useState()
  const pathname = usePathname()
  const [selectedCorper, setSelectedCorper] = useState()

  useEffect(() => {
    setCorpers((prevState) => ({
      ...prevState, cds: 'agro'
  }))
  },[])

  const { data: corperData, error: corperError, isLoading: corperIsLoading, mutate: corperMutate } = useSWR('/api/getCorpers', fetcher)

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
    corperMutate()
     return toast.success("Corper created successfully!")
  }
  }

  return (
    <main className='flex flex-col space-y-4'>
      <Toaster />
      <section className='flex items-center justify-between bg-white dark:bg-darkGray py-6 px-4 rounded-lg'>
        <div className='xl:text-2xl font-semibold capitalize text-primary dark:text-lightGray'>
          {pathname.split('/').pop()}
        </div>
        <div className='flex items-center justify-end '>
          {/* <Input type="date" className=""/> */}
          <div>
          <AlertDialog>
            <AlertDialogTrigger className='bg-primary-green dark:bg-lightGray dark:text-darkGray text-white py-2 px-5 rounded-md'>Add New</AlertDialogTrigger>
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
                <AlertDialogCancel className="hover:bg-red-500 hover:text-white border-red-500 text-red-500">Cancel</AlertDialogCancel>
                <AlertDialogAction className="text-white bg-primary-green border-[1px] hover:bg-white hover:text-primary-green hover:border-primary-green" onClick={handleAdd}>Continue</AlertDialogAction>
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
              <TableHead>PPA</TableHead>
              <TableHead>Attendance</TableHead>
              {/* <TableHead>Absent</TableHead> */}
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
            {corperData && corperData?.filter(data => data.cds == "agro").map((item) => (
              <TableRow key={item.parent_id}>
                <TableCell className='flex items-center gap-2 '>
                  <Avatar src='' alt={item.full_name}/>
                  <p className=''>{item.full_name}</p>
                </TableCell>
                <TableCell>{item.state_code}</TableCell>
                <TableCell>{item.ppa}</TableCell>
                <TableCell className="flex items-center gap-3">
                  <div className='flex items-center gap-2'>
                    Present<input type="radio" name={`attend-${item.parent_id}`} className='w-4 h-4 accent-primary' />
                  </div>
                  <div className='flex items-center gap-2'>
                    Absent<input type="radio" name={`attend-${item.parent_id}`} className='w-4 h-4 accent-primary' />
                  </div>
                </TableCell>
                <TableCell className='flex gap-4'>
                  <AlertDialog>
                    <AlertDialogTrigger className='bg-primary-green text-white py-2 px-5 rounded-md dark:bg-lightGray dark:text-darkGray' onClick={() => setSelectedCorper(item.parent_id)}>View</AlertDialogTrigger>
                    <AlertDialogContent className="bg-white">
                      <AlertDialogHeader>
                        <AlertDialogTitle>{item.full_name}</AlertDialogTitle>
                        <fieldset className='flex flex-col gap-2'>
                          <label htmlFor="">Name</label>
                          <input
                            onChange={(e) => {
                              setCorpers((prevState) => ({
                                    ...prevState, full_name: e.target.value
                                }))
                            }}
                            type="text" value={item.full_name} disabled className='border-[1px] p-2 rounded-md outline-none' />
                        </fieldset>
                        <fieldset className='flex flex-col gap-2'>
                          <label htmlFor="">State Code</label>
                          <input
                            onChange={(e) => {
                              setCorpers((prevState) => ({
                                    ...prevState, state_code: e.target.value
                                }))
                            }}
                            type="text" value={item.state_code} disabled className='border-[1px] p-2 rounded-md outline-none' />
                        </fieldset>
                        <fieldset className='flex flex-col gap-2'>
                          <label htmlFor="">PPA</label>
                          <input
                            onChange={(e) => {
                              setCorpers((prevState) => ({
                                    ...prevState, ppa: e.target.value
                                }))
                            }}
                            type="text" value={item.ppa} disabled className='border-[1px] p-2 rounded-md outline-none' />
                        </fieldset>
                        <fieldset className='flex flex-col gap-2'>
                          <label htmlFor="">State of Origin</label>
                          <input
                            onChange={(e) => {
                                setCorpers((prevState) => ({
                                    ...prevState, state: e.target.value
                                }))
                            }}
                            type="text" value={item.state} disabled className='border-[1px] p-2 rounded-md outline-none' />
                        </fieldset>
                        <fieldset className='flex flex-col gap-2'>
                          <label htmlFor="">Phone Number</label>
                          <input
                            onChange={(e) => {
                              setCorpers((prevState) => ({
                                    ...prevState, phone_number: e.target.value
                                }))
                            }}
                            type="text" value={item.phone_number} disabled className='border-[1px] p-2 rounded-md outline-none' />
                        </fieldset>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel className="hover:bg-red-500 hover:text-white border-red-500 text-red-500">Close</AlertDialogCancel>
                        <AlertDialogAction className="text-white bg-primary-green border-[1px] hover:bg-white hover:text-primary-green hover:border-primary-green">Edit</AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                  <Button variant="destructive" size="sm" className="hover:bg-red-500 hover:text-white border-red-500 text-red-500 dark:bg-red-300 dark:text-darkGray">Delete</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>}
        </Table>

        <div className='flex items-center justify-between'>
          {/* <small className='dark:text-lightGray transition-colors duration-500'>Showing 1 to 5 of 30 enteries</small> */}
          <div className='flex items-center gap-8'>
            <Button variant="secondary" className="text-white">Previous</Button>
            <Button className="text-white">Next</Button>
          </div>
        </div>
        <div className='mx-auto'>
          <Button onClick={() => toast.success("Attendance Submitted!")} className="text-white bg-primary-green text-lg border-[1px] hover:bg-white hover:text-primary-green hover:border-primary-green dark:bg-lightGray dark:text-darkGray">Save attendance</Button>
        </div>
      </section>
    </main>
  )
}
