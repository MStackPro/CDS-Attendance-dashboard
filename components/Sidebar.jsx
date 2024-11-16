"use client"
import React, { useState } from 'react'
import Logo from "/assets/nysc-seeklogo.svg"


import { MdDashboard } from "react-icons/md";
import { Box} from '@mui/material';
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { FaCalendarAlt } from "react-icons/fa";
import { HiOutlineLogout } from "react-icons/hi";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Earth, Scale, Sprout, TrafficCone } from 'lucide-react';


const menuLinks = [
  { path: '/overview', title: 'Overview', icon: <MdDashboard /> },
  {
    path: '',
    title: 'Attendance',
    icon: <FaCalendarAlt />,
    nested: [
      { path: '/overview/anti-corruption', title: 'Anti-Corruption', icon: <Scale/>},
      { path: '/overview/frsc', title: 'FRSC', icon: <TrafficCone/>},
      { path: '/overview/sdgs', title: 'SDGs', icon: <Earth/>},
      { path: '/overview/agro-allied', title: 'Agro-allied', icon: <Sprout/>},
    ],
  },

];

function Sidebar() {
    const pathname = usePathname();
    const [activePath, setActivePath] = useState('overview');
    const [expanded, setExpanded] = useState(false);

    const router = useRouter()

    const handleNavigation = (path) => {
        setActivePath(path);
    };

    const toggleExpand = () => {
        setExpanded((prev) => !prev);
    };

    return (
        <main className="">
            <div className='flex items-center mt-2 justify-center gap-2'>
                <figure className='w-12'>
                    <Image src={Logo} alt='logo' priority/>
                </figure>
                <h2 className="text-[1.3rem] text-white font-bold leading-5">CDS <br />Attendance</h2>
            </div>

            <section className='mt-8 flex flex-col justify-between h-[33rem]'>
                <Box className="flex flex-col gap-2 transition-all duration-500 ease-in-out">
                    {menuLinks.map((link) => (
                        <Box key={link.path}>
                            <Link href={link.path}
                                className={`flex items-center font-semibold gap-3 p-3 dark:text-white cursor-pointer hover:bg-lightGray/60 dark:hover:bg-lightGray/60 rounded-lg transition-all duration-500 ease-in-out ${
                                    link.path === pathname && "bg-white dark:bg-lightGray dark:text-black/90"
                                }`}
                                onClick={() => {
                                    handleNavigation(link.path);
                                    if (link.nested) toggleExpand();
                                }}
                                >
                                <div>{link.icon}</div>
                                {link.title}
                                {link.nested && (
                                    <Box className="ml-auto">
                                        {expanded ? <IoIosArrowUp /> : <IoIosArrowDown />}
                                    </Box>
                                )}
                            </Link>

                            {/* Display nested items if expanded */}
                            {link.nested && expanded && (
                                <div className="ml-8 mt-1 transition-all flex flex-col gap-1 duration-500 ease-in-out">
                                    {link.nested.map((subItem) => (
                                        <Link href={subItem.path}
                                            key={subItem.path}
                                            className={`flex items-center gap-3 p-2 hover:bg-lightGray/60 cursor-pointer dark:text-white hover:bg-white dark:hover:bg-lightGray/60 rounded-lg transition-all duration-500 ease-in-out ${
                                            subItem.path === pathname && "bg-white dark:bg-lightGray dark:text-black/90"
                                            }`}
                                            onClick={() => handleNavigation(subItem.path)}
                                        >
                                            <div className='text-sm'>{subItem.icon}</div>
                                            {subItem.title}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </Box>
                    ))}
                </Box>
                <div onClick={() => router.push('/')} className='flex items-center font-semibold gap-3 p-3 cursor-pointer dark:text-white hover:text-black hover:bg-lightGray/60 dark:hover:bg-lightGray/60 rounded-lg transition-all duration-500 ease-in-out'>
                    <HiOutlineLogout color='' className='text-[17px]'/>
                    <p className=''>Logout</p>
                </div>
            </section>
        </main>
    );
}

export default Sidebar;
