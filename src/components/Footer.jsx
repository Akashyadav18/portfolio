import React from 'react'
import { Instagram, Facebook, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <div className='h-16 flex flex-col md:flex-row justify-evenly items-center border shadow-md'>
      <div className='text-sm text-gray-400'>© Design And Develop by @Akash Yadav</div>
      <div className='flex gap-3 items-center'>
      <h1 className='text-md text-gray-400'>Lets catch up - </h1>
      <a href='https://www.instagram.com/a_k_a_s_h___18/' target='blank' className='text-gray-500 hover:text-black hover:scale-[1.05] transition'><Instagram /></a>
      <a href='' target='blank' className='text-gray-500 hover:text-black hover:scale-[1.05] transition'><Facebook /></a>
      <a href='https://twitter.com/Vyom_00' target='blank' className='text-gray-500 hover:text-black hover:scale-[1.05] transition'><Twitter /></a>
      <a href='https://www.linkedin.com/in/akash-yadav-683701262/ ' target='blank' className='text-gray-500 hover:text-black hover:scale-[1.05] transition'> <Linkedin /></a>
      </div>
    </div>
  )
}

export default Footer
