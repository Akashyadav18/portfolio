// import Image from 'next/image'
// import React from 'react'
// import { motion } from 'framer-motion'

// const formVariants = {
//   initial: {
//     x: 500,
//     opacity: 0
//   },
//   whileInView: {
//     x: 0,
//     opacity: 1,
//   },
//   animate: {
//     x: 0,
//     opacity: 1,
//     transition: {
//       duration: 0.5,
//       staggerChildren: 0.1
//     }
//   }
// }

// const ImageIcon = () => {
//   return (
//     <div className='h-full w-full'>
//       <motion.div className=''
//         variants={formVariants} initial="initial" animate="animate">
//         <div className=" bg-no-repeat bg-center relative rounded-2xl mx-auto md:w-[350px] md:h-[450px] xl:w-[400px] xl:h-[400px]">
//           <Image src="/Gemini_photo.png" alt='image' fill className='object-contain rounded-xl border shadow border-gray-400' />
//         </div>
//       </motion.div>
//     </div>
//   )
// }

// export default ImageIcon


import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

const formVariants = {
  initial: { x: 100, opacity: 0 },
  animate: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut" }
  }
}

const ImageIcon = () => {
  return (
    <div className="flex justify-center items-center w-full h-full">
      <motion.div
        variants={formVariants}
        initial="initial"
        animate="animate"
        className="relative w-[300px] h-[370px] sm:w-[250px] sm:h-[280px] md:w-[350px] md:h-[450px] xl:w-[450px] xl:h-[550px]"
      >
        <Image
          src="/Gemini_photo.png"
          alt="profile"
          fill
          priority
          className="object-cover rounded-2xl shadow-lg border border-gray-400"
        />
      </motion.div>
    </div>
  )
}

export default ImageIcon
