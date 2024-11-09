"use client";
import React, { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { MdDashboard } from "react-icons/md";
import { FaCalendarAlt } from "react-icons/fa";
import { Earth, Scale, Sprout, TrafficCone } from "lucide-react";
import { HiOutlineLogout } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import { CiMenuFries } from "react-icons/ci";
import Image from "next/image";
import Logo from "/assets/nysc-seeklogo.svg";
import { ExpandLess, ExpandMore } from "@mui/icons-material";

const menuLinks = [
  { path: "/overview", title: "Overview", icon: <MdDashboard /> },
  {
    title: "Attendance",
    icon: <FaCalendarAlt />,
    nested: [
      {
        path: "/overview/anti-corruption",
        title: "Anti-Corruption",
        icon: <Scale />,
      },
      { path: "/overview/frsc", title: "FRSC", icon: <TrafficCone /> },
      { path: "/overview/sdgs", title: "SDGs", icon: <Earth /> },
      { path: "/overview/agro-allied", title: "Agro-allied", icon: <Sprout /> },
    ],
  },
];

export default function Sidebar() {
  const [open, setOpen] = useState(false); // State for opening/closing the sidebar
  const [openSubmenus, setOpenSubmenus] = useState({}); // State for submenus
  const router = useRouter(); // For navigation
  const pathname = usePathname()

  const handleDrawerToggle = () => {
    setOpen(!open); // Toggle sidebar open/close
  };

  const handleSubmenuToggle = (title) => {
    setOpenSubmenus((prevState) => ({
      ...prevState,
      [title]: !prevState[title], // Toggle specific submenu
    }));
  };

  const handleLinkClick = (path) => {
    if (path) {
      router.push(path); // Navigate to the clicked path
      setOpen(false); // Close the sidebar when a link is clicked
    }
  };

  const handleClickOutside = () => {
    setOpen(false); // Close the sidebar when the backdrop is clicked
  };

  return (
    <main>
      <button
        className="text-2xl focus:outline-none"
        onClick={handleDrawerToggle}
      >
        {open ? <IoMdClose /> : <CiMenuFries />}
      </button>

      {/* Backdrop (only show when the sidebar is open) */}
      {open && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={handleClickOutside}
        ></div>
      )}

      {/* Sidebar Drawer */}
      <section
        className={`fixed inset-y-0 left-0 bg-primary-green dark:bg-darkGray dark:text-white shadow-lg w-64 transform ${
          open ? "translate-x-0 z-50" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        {/* Sidebar Header */}
        <div className="flex items-center mt-4 justify-center gap-2">
          <figure className="w-12">
            <Image src={Logo} alt="logo" priority />
          </figure>
          <h2 className="text-[1.3rem] font-bold leading-5 text-white dark:text-white">
            CDS <br />
            Attendance
          </h2>
        </div>

        {/* Sidebar Links */}
        <div className="mt-8 flex flex-col justify-between h-full">
          <ul className="space-y-2">
            {menuLinks.map((link, index) => (
              <li key={index}>
                {link.nested ? (
                  <>
                    <button
                      className={`flex items-center gap-4 w-[91%] mb-1 px-4 py-3 text-left`}
                      onClick={() => handleSubmenuToggle(link.title)}
                    >
                      <span>{link.icon}</span>
                      <span>
                        {link.title}
                      </span>
                      <span className="ml-auto">
                        {openSubmenus[link.title] ? <ExpandLess/> : <ExpandMore/>}
                      </span>
                    </button>

                    {/* Submenu Links */}
                    <ul
                      className={`ml-6 overflow-hidden transition-all duration-300 ${
                        openSubmenus[link.title] ? "max-h-screen" : "max-h-0"
                      }`}
                    >
                      {link.nested.map((subLink, subIndex) => (
                        <li key={subIndex}>
                          <button
                            className={`flex items-center gap-4 w-[90%] px-4 py-2 text-left ${
                              subLink.path == pathname && "bg-lightGray rounded-lg"
                            }`}
                            onClick={() => handleLinkClick(subLink.path)}
                          >
                            <span className="">{subLink.icon}</span>
                            <span>{subLink.title}</span>
                          </button>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <button
                    className={`flex items-center gap-4 w-full px-4 py-3 text-left ${
                      link.path == pathname && "bg-lightGray rounded-lg"
                    }`}
                    onClick={() => handleLinkClick(link.path)}
                  >
                    <span>{link.icon}</span>
                    <span>{link.title}</span>
                  </button>
                )}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
