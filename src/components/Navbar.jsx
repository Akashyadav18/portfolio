import Link from 'next/link'
import React from 'react'
import Menu from './Menu'

const Navbar = () => {
  return (
    <div className=' h-20 md:h-16 flex justify-around items-center border-b shadow border-gray-400'>
      <div>
        <h1 className='text-3xl font-bold india'>Akash</h1>
      </div>
      <div className='hidden md:flex gap-10 text-lg font-semibold'>
        <Link href="/">Home</Link>
        <Link href="#About">About us</Link>
        <Link href="/">Skills</Link>
        <Link href="/">Projects</Link>
        <Link href="/">Contact</Link>
      </div>
      <div className='hidden md:flex'>
        <a href='mailto:18akashyadav@gmail.com'>
          <button className='px-8 py-1 hover:bg-black hover:text-white border-2 border-black text-lg font-medium'>Email</button>
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
