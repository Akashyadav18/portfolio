"use client"

import React, { useContext } from 'react'
import { Typewriter } from 'react-simple-typewriter'
import Link from 'next/link'
import { ArrowDownToLine, ArrowUpRight, ChevronDown, Github, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion'
import ImageIcon from './ImageIcon';
import { ThemeContext } from '@/context/ThemeContext';

const Header = () => {

  const {mode} = useContext(ThemeContext)

  return (
    <div className={`h-[calc(100vh-5rem)] md:h-[calc(100vh-4rem)] w-full ${mode === "light" ? "bg-red-100" : null} flex flex-col-reverse md:flex-row`}>
      <div className='flex-1 py-2 flex flex-col justify-center items-center gap-5'>
        <motion.div className='flex flex-col gap-2 sm:gap-4 md:gap-8' initial={{ x: "-100%", opacity: 0}} whileInView={{ x: 0, opacity: 1,}} transition={{ delay: 0.1 }}>
          <h3 className='text-2xl md:text-5xl font-bold'>Hi,</h3>
          <h2 className='text-2xl md:text-5xl font-bold'>I&apos;m Akash Yadav</h2>
          <h2 className='text-xl md:text-4xl font-semibold'>
            A {' '}
            <span>
              <Typewriter
                words={['Developer', 'Designer', 'Creator']}
                loop={'true'}
                cursor
                cursorStyle='_'
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </h2>
        </motion.div>
        <motion.div className='flex gap-4 md:gap-10 md:my-8' initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
          <Link href='#'>
            <button className='px-2 md:px-4 py-2 bg-red-400 shadow md:text-lg text-sm text-white hover:scale-[1.05] transition'>Hire Me</button>
          </Link>
          <h4 className='flex'>
            <Link href='#' className='pt-2 text-sm sm:text-lg' >Projects</Link>
            <ArrowUpRight size={20} />
          </h4>
        </motion.div>
        <motion.div className='flex gap-2 md:gap-8' initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
          <a className='bg-white text-black p-3 md:px-7 md:py-3 flex justify-center items-center text-center cursor-pointer gap-2 border shadow-md text-sm font-medium md:text-lg md:w-[230px] hover:scale-[1.05] transition' 
            href='/Akash_Web.pdf' download>
            <span className='hidden md:block'>Download CV</span>
            <ArrowDownToLine className='chevron ml-3 text-black' />
          </a>
          <a className='bg-white text-black p-3 md:p-4 flex justify-center items-center cursor-pointer border shadow-md hover:scale-[1.05] transition' href='https://www.linkedin.com/in/akash-yadav-683701262/' target='blank'><Linkedin /></a>
          <a className='bg-white text-black p-3 md:p-4 flex justify-center items-center cursor-pointer border shadow-md hover:scale-[1.05] transition' href='https://github.com/Akashyadav18' target='blank'><Github /></a>
        </motion.div>
      </div>

      <div className='relative'>
      <ChevronDown size={50} className='absolute bottom-4 chevron hidden md:block' />
      </div>

      <div className='flex-1 pt-2 grid place-content-center'>
        <ImageIcon/>
      </div>
    </div>
  )
}

export default Header
