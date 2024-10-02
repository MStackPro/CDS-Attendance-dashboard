"use client"

import React from 'react'
import { IoMdNotifications } from "react-icons/io";
import { Badge } from '@mui/material';
import SearchBox from './SearchBox';
import DarkModeToggle from './DarkModeToggle';
import Profile from './Profile';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname()
  return (
    <main>
        <section className='h-24 border-b border-slate-400 py-4 mb-4'>
          <nav className='flex justify-between items-center py-2 px-4 rounded-lg transition-colors duration-500 mb-5 bg-white dark:bg-darkGray'>
            <div className='text-2xl font-semibold capitalize text-primary dark:text-lightGray'>
              {pathname.split('/').pop()}
            </div>
              <SearchBox/>
              <div className='flex items-center gap-8'>
                <div className='flex items-center text-[1.3rem] gap-8'>
                    <DarkModeToggle/>
                    <Badge badgeContent={4} color="error">
                      <IoMdNotifications className='dark:text-lightGray transition-colors duration-500'/>
                    </Badge>
                </div>
                <Profile/>
              </div>
          </nav>
        </section>
    </main>
  )
}
