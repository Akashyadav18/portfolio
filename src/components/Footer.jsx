import React from 'react'
import { Instagram, Facebook, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <div className='h-16 flex flex-col md:flex-row justify-evenly items-center border shadow-md'>
      <div className='text-lg font-medium'>18akashyadav@gmail.com</div>
      <div className='flex gap-3 items-center'>
      <a href='' target='blank'><Instagram /></a>
      <a href='' target='blank'><Facebook /></a>
      <a href='' target='blank'><Twitter /></a>
      <a href='' target='blank'> <Linkedin /></a>
      </div>
    </div>
  )
}

export default Footer
