"use client"

import React, { useContext } from 'react'
import { Typewriter } from 'react-simple-typewriter'
import { ArrowDownToLine, ArrowUpRight, ChevronDown, Github, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion'
import ImageIcon from './ImageIcon';
import { ThemeContext } from '@/context/ThemeContext';

const textVariants = {
  initial: {
    x: -500,
    opacity: 0
  },
  whileInView: {
    x: 0, 
    opacity: 1,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1
    }
  }
}

const Header = () => {

  const {mode} = useContext(ThemeContext)

  return (
    <div className={`h-[calc(100vh-5rem)] md:h-[calc(100vh-4rem)] w-full ${mode === "light" ? "bg-bgColor2" : null} overflow-hidden border-b shadow border-gray-400 flex flex-col-reverse md:flex-row`}>
      <div className='flex-1 py-2 flex flex-col justify-center items-center gap-5'>
        <motion.div className='flex flex-col justify-center gap-2 sm:gap-4 md:gap-8 md:w-2/3' variants={textVariants} initial="initial" animate="animate">
          <h3 className='text-3xl md:text-5xl md:ml-14 font-bold'>Hi,</h3>
          <h2 className='text-3xl md:text-5xl md:ml-14 font-bold'>I&apos;m Akash Yadav </h2>
          <h2 className='text-xl md:text-4xl md:ml-14 font-semibold'>
            A {' '}
            <span>
              <Typewriter
                words={['Frontend Developer', 'Backend Developer', 'Web Developer', 'MERN Stack Developer' ,'Full Stack Developer', 'Java Developer', 'SpringBoot Developer']}
                loop={'true'}
                cursor
                cursorStyle=''
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </h2>
        </motion.div>
      
        <motion.div className='flex gap-4 md:gap-10 md:my-8' initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
          <a href='#Contact'>
            <button className={`px-2 md:px-4 py-2 ${mode === "light"  ? "bg-black text-white" : "bg-bgColor2 text-black hover:text-white"} hover:bg-btnHover shadow md:text-lg text-sm  hover:scale-[1.05] transition`}>Hire Me</button>
          </a>
          <h4 className='flex'>
            <a href='#Project' className='pt-2 text-sm sm:text-lg' >Projects</a>
            <ArrowUpRight size={20} />
          </h4>
        </motion.div>
        <motion.div className='flex gap-2 md:gap-8' initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
          <a className={`${mode === "light"  ? "bg-black text-white" : "bg-bgColor2 text-black hover:text-white"} hover:bg-btnHover p-2 md:px-7 md:py-3 flex justify-center items-center text-center cursor-pointer gap-2 shadow-md text-sm font-medium md:text-lg md:w-[230px] hover:scale-[1.05] transition`} 
            href='/Akash_Web.pdf' download>
            <span className='hidden md:block'>Download CV</span>
            <ArrowDownToLine className='chevron ml-5 text-center' />
          </a>
          <a className={`${mode === "light"  ? "bg-black text-white" : "bg-bgColor2 text-black hover:text-white"} hover:bg-btnHover p-3 md:p-4 flex justify-center items-center cursor-pointer shadow-md hover:scale-[1.05] transition`} href='https://www.linkedin.com/in/akash-yadav-683701262/' target='blank'><Linkedin /></a>
          <a className={`${mode === "light"  ? "bg-black text-white" : "bg-bgColor2 text-black hover:text-white"} hover:bg-btnHover p-3 md:p-4 flex justify-center items-center cursor-pointer shadow-md hover:scale-[1.05] transition`} href='https://github.com/Akashyadav18' target='blank'><Github /></a>
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
