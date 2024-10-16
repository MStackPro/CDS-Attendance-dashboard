"use client"

import React from 'react'
import SearchBox from './SearchBox';
import DarkModeToggle from './DarkModeToggle';
import Profile from './Profile';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname()
  return (
    <main>
        <section className='h-24 border-b border-slate-400 py-4'>
          <nav className='flex justify-between items-center py-2 px-4 rounded-lg transition-colors duration-500 mb-5 bg-white'>
              <SearchBox/>
              <div className='flex items-center gap-8'>
                <div className='flex items-center text-[1.3rem] gap-8'>
                    <DarkModeToggle/>
                </div>
                <Profile/>
              </div>
          </nav>
        </section>
    </main>
  )
}
