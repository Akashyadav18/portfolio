"use client"

import Image from 'next/image'
import React, { useContext, useRef } from 'react'
import { motion } from 'framer-motion'
import { Send } from 'lucide-react';
import { ThemeContext } from '@/context/ThemeContext';
import { SendEmail } from '@/actions/SendEmail';
import toast, { Toaster } from 'react-hot-toast';

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

const Contact = () => {
  const { mode } = useContext(ThemeContext);
  const formRef = useRef();

  return (
    <div className={`${mode === "light" ? "bg-red-100" : null} border-t`}>
      <Toaster position="top-right" />
      <h2 className='text-2xl md:text-4xl font-bold text-center py-2'>Contact <span className='text-color3'>Me</span></h2>
      <div className='h-[calc(100vh-7rem)] w-full flex flex-col md:flex-row justify-evenly items-center'>
        <motion.div className='relative w-full h-1/2 md:h-full md:w-1/2'
          variants={textVariants} initial="initial" animate="animate"
        >
          <Image src='/vg.png' alt='contact' fill className='object-contain object-center overflow-hidden shrink-0 my-auto' />
        </motion.div>
        <motion.div className='h-2/3 w-full md:h-full md:w-2/3 md:pt-32 xl:pt-46'
          variants={formVariants} initial="initial" animate="animate">
          <form ref={formRef} action={async (formData) => {
            const { data, error } = await SendEmail(formData);
            if (error) {
              toast.error("Some went wrong please try again!");
              return
            }
            if (data) {
              console.log(data);
              toast.success("Email sent successfully");
              formRef.current.reset();
            }
          }}
            className='flex flex-col flex-wrap gap-2 lg:gap-[20px] w-[250px] sm:w-[300px] md:w-[400px] lg:w-[500px] mx-auto'>
            <input type='text' name='name' className='p-2 md:p-3 border-2 text-black border-gray-400 shadow outline-none' required placeholder='Name' />
            <input type='email' name='email' className='p-2 md:p-3 border-2 text-black border-gray-400 shadow outline-none' placeholder='Email' />
            <textarea rows={5} name='message' className='p-1 border-2 text-black border-gray-400 shadow outline-none' placeholder='Message' />
            <button type='submit' className='px-4 py-2 border-2 shadow bg-white outline-none max-w-[200px] mx-auto border-gray-400 flex items-center gap-2 text-lg font-medium text-gray-400 hover:text-black hover:scale-[1.05] transition'>Send Message  
            <Send size={18} className='text-black'/> </button>
          </form>
        </motion.div>
      </div>
    </div>
  )
}

export default Contact
