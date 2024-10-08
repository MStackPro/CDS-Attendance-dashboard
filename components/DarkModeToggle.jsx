"use client"

import { useState, useEffect } from 'react';
import { FaMoon } from "react-icons/fa6";
import { MdLightMode } from "react-icons/md";
import { IoMdNotifications } from "react-icons/io";
import { Badge } from '@mui/material';


const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const handleToggle = () => {
    setDarkMode(!darkMode);
  };

  return (
    <main className='flex items-center gap-4'>
      <button
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 transition-colors duration-500"
      onClick={handleToggle}
    >
      {darkMode ? <MdLightMode className='text-lightGray' /> : <FaMoon />}
    </button>
    <Badge badgeContent={4} color="error">
      <IoMdNotifications className='dark:text-lightGray transition-colors duration-500'/>
    </Badge>
    </main>
  );
};

export default DarkModeToggle;
