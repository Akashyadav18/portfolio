"use client"

import React, { useContext, useRef } from 'react'
import { projects } from '../utils/data'
import { motion, useScroll, useSpring, useTransform } from "framer-motion"
import Image from 'next/image';
import { ThemeContext } from '@/context/ThemeContext';
import { ArrowUpRightSquare, Github } from 'lucide-react';

const Single = ({ project }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({ target: ref,  });
  const y = useTransform(scrollYProgress, [0,1], [-300, 300])
  return (
    <section ref={ref} >
    <div className='flex flex-col md:flex-row justify-center items-center max-w-[1200px] h-screen m-auto'>
      <div className='relative flex-1 w-[300px] h-[300px] md:w-[90rem] md:h-[25rem] mt-4 shadow-lg'>
        <Image src={project.img} alt='projectImg' fill className='object-cover object-center md:object-center rounded-md overflow-hidden shrink-0 my-auto'/>
      </div>
      <motion.div className='flex-1 bg-white flex flex-col gap-2 md:gap-4 p-4 text-black items-center rounded-md shadow-lg'>
        <h2 className='text-2xl md:4xl font-semibold'>{project.title}</h2>
        <p className='md:text-lg'>{project.desc}</p>
        <div className='flex gap-4'>
          <button className='px-4 p-1 flex items-center gap-2 text-lg font-semibold border shadow-md'>Github <Github size={20}/> </button>
          <button className='px-4 p-1 flex items-center gap-2 text-lg font-semibold border shadow-md'>Demo <ArrowUpRightSquare size={20} /></button>
        </div>
      </motion.div>
    </div>
    </section>
  )
};

const Project = () => {

  const ref = useRef();
  const {mode} = useContext(ThemeContext);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["end end", "start start"] });
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 })

  return (
    // portfolio
    <div className='relative z-10' ref={ref}>
      {/* progress */}
      <div className='sticky top-0 left-0 text-center text-2xl md:text-4xl font-bold'>
        <h1>Projects</h1>
        {/* progressBar */}
        <motion.div style={{ scaleX }} className='h-[10px] my-1 bg-color3'></motion.div>
      </div>
      {projects.map((project) => (
        <div key={project.id} className={`h-screen md:h-[calc(100vh-5rem)] w-full ${mode === "light" ? "bg-red-100" : null} p-2`}>
          <Single project={project} key={project.id} />
        </div>
      ))}
    </div>
  )
}

export default Project
