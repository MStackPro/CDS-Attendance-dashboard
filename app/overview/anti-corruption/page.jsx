"use client"

import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Avatar } from '@mui/material'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'
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

export default function AntiCorruption() {
  const [ corpers, setCorpers ] = useState([])
  const pathname = usePathname()

  useEffect(() => {
    const fetchCorpers = async () => {
      try {
        const res = await fetch("http://localhost:5000/corpers")
        if (!res.ok) {
          throw new Error('Failed to fetch corpers')
        }
        const data = await res.json()
        setCorpers(data)
        console.log(data)

      } catch (error) {
        console.error('Check your internet connection:', error)
      }
    }

    fetchCorpers()
  },[])


  return (
    <main className='flex flex-col space-y-4'>
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
                  <input type="text" className='border-[1px] p-2 rounded-md outline-none' />
                </fieldset>
                <fieldset className='flex flex-col gap-2'>
                  <label htmlFor="">State Code</label>
                  <input type="text" className='border-[1px] p-2 rounded-md outline-none' />
                </fieldset>
                <fieldset className='flex flex-col gap-2'>
                  <label htmlFor="">PPA</label>
                  <input type="text" className='border-[1px] p-2 rounded-md outline-none' />
                </fieldset>
                <fieldset className='flex flex-col gap-2'>
                  <label htmlFor="">State or Origin</label>
                  <input type="text" className='border-[1px] p-2 rounded-md outline-none' />
                </fieldset>
                <fieldset className='flex flex-col gap-2'>
                  <label htmlFor="">Phone Number</label>
                  <input type="text" className='border-[1px] p-2 rounded-md outline-none' />
                </fieldset>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction className="text-white">Continue</AlertDialogAction>
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

          <TableBody>
            {corpers && corpers.map((item) => (
              <TableRow key={item.id}>
                <TableCell className='flex items-center gap-2 '>
                  <Avatar src='' alt={item.name}/>
                  <p className=''>{item.name}</p>
                </TableCell>
                <TableCell>{item.code}</TableCell>
                <TableCell><Checkbox/></TableCell>
                <TableCell><Checkbox/></TableCell>
                <TableCell className='flex gap-4'>
                  <Button size="sm">View</Button>
                  <Button variant="destructive" size="sm">Delete</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
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
