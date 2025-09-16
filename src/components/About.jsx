"use client"

import Image from 'next/image'
import React, { useContext } from 'react'
import { motion } from 'framer-motion'
import { ThemeContext } from '@/context/ThemeContext'

const textVariants = {
  initial: { x: -100, opacity: 0 },
  animate: {
    x: 0, opacity: 1,
    transition: { duration: 0.6 }
  }
}

const imgVariants = {
  initial: { x: 100, opacity: 0 },
  animate: {
    x: 0, opacity: 1,
    transition: { duration: 0.6 }
  }
}

const About = () => {
  const { mode } = useContext(ThemeContext)

  return (
    <div className={`min-h-screen xl:h-[calc(100vh-4rem)] m-4 lg:m-8 md:px-4 lg:px-10 
      ${mode === "light" ? "bg-bgColor" : ""} border shadow-lg flex flex-col`}>
      
      <h2 className="text-2xl md:text-4xl font-bold text-center mt-6">
        About <span className="text-color3">Me</span>
      </h2>

      <div className="flex flex-col lg:flex-row items-center justify-center lg:gap-12 flex-1">
        
        {/* Image Section (left side on lg) */}
        <motion.div 
          className="hidden lg:flex w-full lg:w-1/3 justify-center items-center"
          variants={imgVariants} initial="initial" whileInView="animate"
        >
          <Image 
            src="/about.jpg" 
            alt="about"
            width={1200} 
            height={800} 
            className="w-full h-[400px] lg:h-[500px] object-cover rounded-lg shadow-md"
            priority
          />
        </motion.div>

        {/* Text Section (right side on lg) */}
        <motion.div 
          className="w-full lg:w-2/3 text-left lg:text-left p-6"
          variants={textVariants} initial="initial" whileInView="animate"
        >
          <h1 className={`inline-block px-2 border-b-2 text-left
            ${mode === "light" ? "border-black" : "border-white"} 
            text-lg md:text-xl font-semibold mb-1`}>
            Hi, There
          </h1>
          
          <p className="text-sm md:text-lg leading-relaxed">
            I&apos;m <span className="text-color3 font-semibold">Akash Yadav</span> – 
            a passionate developer with a strong interest in building scalable and efficient software solutions. 
            I enjoy working across both <b>frontend and backend</b> applying modern technologies to solve real-world problems.
          </p>

          <ul className="mt-3 text-sm md:text-lg space-y-1">
            <li><b>Languages:</b> Java, JavaScript, HTML, CSS</li>
            <li><b>Frameworks:</b> React.js, Node.js, Express.js, Tailwind CSS, shadcn/ui, Next.js, Spring Boot</li>
            <li><b>Databases:</b> MySQL, MongoDB</li>
            <li><b>Tools:</b> Docker, Git, REST APIs</li>
          </ul>

          <p className="mt-3 text-sm md:text-lg leading-relaxed">
            I love tackling challenging projects where I can apply my skills to solve real-world problems, 
            and I&apos;m continuously expanding my knowledge-currently exploring Spring Security, Kafka, 
            and Microservices. <br /><br />
            Outside of tech, I&apos;m an avid mountain trekker and enjoy watching movies, 
            which keep me balanced and inspired.
          </p>
        </motion.div>
      </div>
    </div>
  )
}

export default About
