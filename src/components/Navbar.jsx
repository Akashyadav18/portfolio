import Link from 'next/link'
import React from 'react'
import Menu from './Menu'

const Navbar = () => {
  return (
    <div className=' h-20 md:h-16 flex justify-around items-center border-b-2 border-gray-400'>
      <div>
        <h1 className='text-3xl font-bold'>Portfolio</h1>
      </div>
      <div className='hidden md:flex gap-10 text-lg font-medium'>
        <Link href="/">Home</Link>
        <Link href="/">About us</Link>
        <Link href="/">Skills</Link>
        <Link href="/">Projects</Link>
        <Link href="/">Contact</Link>
      </div>
      <div className='hidden md:flex'>
        <h1 className='text-2xl'>Email</h1>
      </div>
      {/* MOBILE MENU */}
      <div className="md:hidden">
        <Menu />
      </div>
    </div>
  )
}

export default Navbar
