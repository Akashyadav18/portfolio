import React from 'react'
import { Instagram, Facebook, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <div className='h-16 flex flex-col md:flex-row justify-evenly items-center border shadow-md'>
      <div href='mailto:18akashyadav@gmail.com' className='text-lg font-medium'>18akashyadav@gmail.com</div>
      <div className='flex gap-3 items-center'>
      <a href='' target='blank'><Instagram /></a>
      <a href='' target='blank'><Facebook /></a>
      <a href='' target='blank'><Twitter /></a>
      <a href='https://www.linkedin.com/in/akash-yadav-683701262/ ' target='blank'> <Linkedin /></a>
      </div>
    </div>
  )
}

export default Footer
