"use client"

import Image from 'next/image'
import React, { useContext } from 'react'
import { motion } from 'framer-motion'
import { Send } from 'lucide-react';
import { ThemeContext } from '@/context/ThemeContext';
import { SendEmail } from '@/actions/SendEmail';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';

const Contact = () => {
  const { mode } = useContext(ThemeContext)
  const router = useRouter();

  return (
    <div className={`${mode === "light" ? "bg-red-100" : null}`}>
      <h2 className='text-2xl md:text-4xl font-bold text-center py-2'>Contact <span className='text-color3'>Me</span></h2>
      <div className='h-[calc(100vh-7rem)] flex flex-col md:flex-row justify-evenly items-center'>
        <motion.div className='relative w-full h-1/2 md:h-full md:w-1/2'
          initial={{ x: "-100%", opacity: 0 }} whileInView={{ x: 0, opacity: 1, }} transition={{ delay: 0.1 }}
        >
          <Image src='/vg.png' alt='contact' fill className='object-contain object-center overflow-hidden shrink-0 max-w-full my-auto' />
        </motion.div>
        <motion.div className='h-2/3 w-full md:h-full md:w-2/3 md:pt-32 xl:pt-46' initial={{ x: "-100%", opacity: 0 }} whileInView={{ x: 0, opacity: 1, }} transition={{ delay: 0.1 }}>
          <form action={async (formData) => {
            const { data, error } = await SendEmail(formData);
            if (error) {
              toast.error(error.message);
              return
            }
            if (data) {
              toast.success("Email sent successfully");
              return router.refresh();
            }
          }}
            className='flex flex-col flex-wrap gap-2 md:gap-[20px] max-w-[250px] sm:max-w-[300px] md:max-w-[400px] lg:max-w-[500px] mx-auto'>
            <input type='text' name='name' className='p-2 md:p-3 border-2 border-gray-400 shadow outline-none' required placeholder='Name' />
            <input type='email' name='email' className='p-2 md:p-3 border-2 border-gray-400 shadow outline-none' placeholder='Email' />
            <textarea rows={5} name='message' className='p-1 border-2 border-gray-400 shadow outline-none' placeholder='Message' />
            <button type='submit' className='px-4 py-2 border-2 shadow bg-white outline-none max-w-[200px] mx-auto border-gray-400 flex items-center gap-2 text-lg font-medium text-black'>Send Message  <Send size={18} /> </button>
          </form>
        </motion.div>
      </div>
    </div>
  )
}

export default Contact
