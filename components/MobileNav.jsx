import React from 'react'
import DarkModeToggle from './DarkModeToggle'
import Profile from './Profile'
import { MdMenu } from 'react-icons/md'

export default function MobileNav() {
  return (
    <main className='bg-white dark:bg-darkGray h-20 grid place-items-center fixed w-screen top-0 left-0 z-50 shadow-md'>
        <nav className='container flex justify-between items-center'>
            <div>
                <MdMenu/>
            </div>
            <div className='flex items-center gap-2'>
                <DarkModeToggle/>
                <Profile/>
            </div>
        </nav>
    </main>
  )
}
