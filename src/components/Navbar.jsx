"use client"

import React, { useContext, useState } from 'react'
import Menu from './Menu'
import DarkModeToggle from './DarkModeToggle/DarkModeToggle'
import { links } from '@/utils/data'
import { usePathname } from 'next/navigation'
import { ThemeContext } from '@/context/ThemeContext'

const Navbar = () => {

  const [activeIndex, setActiveIndex] = useState(0);
  const pathName = usePathname();
  const { mode } = useContext(ThemeContext);

  return (
    <div className=' h-20 md:h-16 flex justify-around items-center border-b shadow border-gray-400'>
      <div>
        <h1 className='text-3xl font-bold text-red-400'>Akash</h1>
      </div>
      <div className='hidden md:flex gap-10 text-lg items-center text-gray-600 font-semibold'>
        {links.map((item, index) => (
          <a href={`#${item}`} key={item} className={` ${mode === "light" ? "text-black hover:text-gray-700" : "text-white hover:text-gray-200"} ${pathName === index ? "border px-3 py-1 rounded-full bg-gray-100 text-black" : null} `}
            onClick={() => setActiveIndex(index)}
          >
            {item}
          </a>
        ))}
      </div>
      <div>
        <DarkModeToggle />
      </div>
      <div className='hidden md:flex'>
        <a href='mailto:18akashyadav@gmail.com'>
          <button className='px-8 py-1 hover:bg-black hover:text-white border-2 border-gray-500 text-lg font-medium'>Email</button>
        </a>
      </div>
      {/* MOBILE MENU */}
      <div className="md:hidden">
        <Menu />
      </div>
    </div>
  )
}

export default Navbar
