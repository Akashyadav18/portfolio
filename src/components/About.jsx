"use client"

import Image from 'next/image'
import React, { useContext } from 'react'
import { motion } from 'framer-motion'
import { ThemeContext } from '@/context/ThemeContext'

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
const formVariants = {
  initial: {
    x: 500,
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

const About = () => {

  const { mode } = useContext(ThemeContext)

  return (
    <div className={`h-screen xl:h-[calc(100vh-4rem)] m-4 lg:m-8 md:px-4 lg:px-10 ${mode === "light" ? "bg-red-100" : null} border shadow-lg`}>
      <h2 className='text-2xl md:text-4xl font-bold text-center mt-3  border-black'>About <span className='text-color3'>Me</span> </h2>
      <div className='flex flex-col md:flex-row gap-4 lg:gap-10 lg:mt-6'>
      <motion.div className='h-1/2 w-full lg:h-full lg:w-1/3 lg:mt-10 hidden lg:block'
          variants={textVariants} initial="initial" animate="animate"
        >
          <Image src='/about.jpg' alt='about' width={1000} height={1000} className='object-contain' />
        </motion.div>
        <motion.div className='w-full h-full lg:w-2/3 lg:mt-6 p-4 m-auto'
          variants={formVariants} initial="initial" animate="animate"
        >
          <h1 className={`py-1 p-3 md:px-5 md:py-2 border-2 ${mode === "light" ? "border-black" : "border-white"} w-32 md:w-[150px] mb-4 text-xl md:text-2xl font-semibold`}>Hi, There</h1>
          <p className=' text-sm md:text-lg'>I&apos;m <span className='text-color3'> Akash Yadav</span> - an IT graduate with a passion for web development and full stack development. 
          
          From the pretty stuff you see (frontend) to the behind-the-scenes magic (backend), I enjoy it all. I&apos;m your go-to person for HTML, CSS, JavaScript, Java, React.js, Node.js, Express js, Mongo DB, My SQL and more.

            When I&apos;m not coding, I&apos;m either climbing mountains or playing cricket – that&apos;s my happy place.

            I&apos;m always learning, currently diving into Next.js and Spring Boot. Back in school, I jumped into different events to show I can handle anything.

            Looking ahead, I&apos;m excited about Docker, AWS, and Bun. I want to use these cool things to make even cooler stuff.

            If you&apos;re into creating awesome things too, let&apos;s connect on LinkedIn or shoot me a message at 18akashyadav@email.com. Let&apos;s build something great!</p>
        </motion.div>
      </div>
    </div>
  )
}

export default About
