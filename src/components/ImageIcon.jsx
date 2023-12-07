import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

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

const ImageIcon = () => {
  return (
    <div className=''>
      <motion.div className='h-full w-full ring-8 ring-color2 rounded-full shadow-lg'
        variants={formVariants} initial="initial" animate="animate">
        <div className="bg-bg_image bg-no-repeat bg-center relative mx-auto w-[250px] h-[250px] md:w-[350px] md:h-[350px] xl:w-[400px] xl:h-[400px]">
          <Image src="/p1.png" alt='image' fill className='object-contain' />
        </div>
      </motion.div>
    </div>
  )
}

export default ImageIcon
