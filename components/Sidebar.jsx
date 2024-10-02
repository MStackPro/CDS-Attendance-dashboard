"use client"
import React, { useState } from 'react'
import Logo from "/assets/nysc-seeklogo.svg"


import { MdDashboard } from "react-icons/md";
import { Box} from '@mui/material';
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { GoDotFill } from "react-icons/go";
import { FaCalendarAlt } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import { HiOutlineLogout } from "react-icons/hi";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';


const menuLinks = [
  { path: '/overview', title: 'Overview', icon: <MdDashboard /> },
  {
    path: '',
    title: 'Attendance',
    icon: <FaCalendarAlt />,
    nested: [
      { path: '/overview/anti-corruption', title: 'Anti-Corruption', icon: <GoDotFill/>},
      { path: '/overview/frsc', title: 'FRSC', icon: <GoDotFill/>},
      { path: '/overview/sdgs', title: 'SDGs', icon: <GoDotFill/>},
      { path: '/overview/agro-allied', title: 'Agro-allied', icon: <GoDotFill/>},
    ],
  },
  { path: '/overview/settings', title: 'Settings', icon: <IoSettingsSharp /> },

];

function Sidebar() {
    const pathname = usePathname();
    const [activePath, setActivePath] = useState('overview');
    const [expanded, setExpanded] = useState(false);

    const handleNavigation = (path) => {
        setActivePath(path);
    };

    const toggleExpand = () => {
        setExpanded((prev) => !prev);
    };

    return (
        <main className="text-white">
            <div className='flex items-center mt-2 justify-center gap-2'>
                <figure className='w-12'>
                    <Image src={Logo} alt='logo' priority/>
                </figure>
                <h2 className="text-[1.3rem] font-bold leading-5">CDS <br />Attendance</h2>
            </div>

            <section className='mt-8 flex flex-col justify-between h-[33rem]'>
                <Box className="flex flex-col gap-2 transition-all duration-500 ease-in-out">
                    {menuLinks.map((link) => (
                        <Box key={link.path}>
                            <Link href={link.path}
                                className={`flex items-center font-semibold gap-3 p-3 cursor-pointer hover:bg-hover dark:hover:bg-secondary rounded-lg transition-all duration-500 ease-in-out ${
                                    link.path === pathname && "bg-hover dark:bg-secondary"
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
                                            className={`flex items-center gap-3 p-2 text-[14px] cursor-pointer hover:bg-hover dark:hover:bg-secondary rounded-lg transition-all duration-500 ease-in-out ${
                                            subItem.path === pathname && "bg-hover dark:bg-secondary"
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
                <div className='flex items-center font-semibold gap-3 p-3 hover:bg-hover dark:hover:bg-secondary rounded-lg cursor-pointer'>
                    <HiOutlineLogout className='text-[17px]'/>
                    <p>Logout</p>
                </div>
            </section>
        </main>
    );
}

export default Sidebar;
