"use client"

import React, { useContext, useRef } from 'react'
import { projects } from '../utils/data'
import { motion, useScroll, useSpring, useTransform } from "framer-motion"
import Image from 'next/image';
import { ThemeContext } from '@/context/ThemeContext';
import { ArrowUpRightSquare, Github } from 'lucide-react';

const Single = ({ project }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({ target: ref, });
  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  if (project.id % 2 != 0) {
    return (
      <section ref={ref} >
        <div className='flex flex-col md:flex-row justify-center items-center md:p-4 max-w-[1200px] h-screen md:h-[calc(100vh-10rem)] m-auto rounded-md'>
          <div className='relative flex-1 w-[300px] h-[300px] lg:w-[90rem] lg:h-[22rem]'>
            <Image src={project.img} alt='projectImg' fill className='object-cover -z-10 px-2 rounded-md md:px-0 object-center md:object-center overflow-hidden shrink-0 my-auto' />
          </div>
          <motion.div className='flex-1 bg-white flex flex-col mb-4 gap-2 md:gap-3 p-4 text-black items-center rounded-md shadow-lg'>
            <h2 className='text-2xl md:4xl font-semibold'>{project.title}</h2>
            <div className='text-sm md:text-[16px]'>
              {project.desc1 && <p>{project.desc1}</p>}
              {project.desc2 && <p>{project.desc2}</p>}
              {project.desc3 && <p>{project.desc3}</p>}
            </div>
            <ul className='flex gap-1 md:gap-2 flex-wrap text-sm'>
              {project.tools && project.tools.map((tool, index) => (
                <button key={index} className='px-2 py-1 md:px-4 rounded-md md:py-1 border rounded-md'>
                  {tool}
                </button>
              ))}
            </ul>
            <div className='flex gap-4'>
              {project.github && <a href={project.github} target='blank'><button className='px-4 p-1 rounded-md flex items-center gap-2 text-md font-semibold border'>Github <Github size={20} /> </button></a>}
              {project.demo && <a href={project.demo} target='blank'><button className='px-4 p-1 rounded-md flex items-center gap-2 text-md font-semibold border'>Demo <ArrowUpRightSquare size={20} /> </button></a>}
            </div>
          </motion.div>
        </div>
      </section>
    )
  }
  else {
    return (
      <section ref={ref} >
        <div className='flex flex-col md:flex-row justify-center items-center md:p-4 max-w-[1200px] h-screen md:h-[calc(100vh-10rem)] m-auto'>
          <motion.div className='flex-1 bg-white flex flex-col justify-evenly items-center gap-2 md:gap-3 p-4 text-black items-center rounded-md shadow-lg'>
            <h2 className='text-2xl md:4xl font-semibold'>{project.title}</h2>
            <div className='text-sm md:text-[16px]'>
              {project.desc1 && <p>{project.desc1}</p>}
              {project.desc2 && <p>{project.desc2}</p>}
              {project.desc3 && <p>{project.desc3}</p>}
            </div>
            <ul className='flex gap-1 md:gap-2 flex-wrap text-sm'>
              {project.tools && project.tools.map((tool, index) => (
                <button key={index} className='px-2 py-1 rounded-md md:px-4 md:py-1 border rounded-md'>
                  {tool}
                </button>
              ))}
            </ul>
            <div className='flex gap-4'>
              {project.github && <a href={project.github} target='blank'><button className='px-4 p-1 rounded-md flex items-center gap-2 text-md font-semibold border'>Github <Github size={20} /> </button></a>}
              {project.demo && <a href={project.demo} target='blank'><button className='px-4 p-1 rounded-md flex items-center gap-2 text-md font-semibold border'>Demo <ArrowUpRightSquare size={20} /> </button></a>}
            </div>
          </motion.div>
          <div className='relative flex-1 w-[300px] h-[300px] lg:w-[90rem] lg:h-[22rem] mb-4'>
            <Image src={project.img} alt='projectImg' fill className='object-cover px-2 rounded-md md:px-0 -z-10 object-center md:object-center overflow-hidden shrink-0 my-auto' />
          </div>
        </div>
      </section>
    )
  }
};

const Mobile =({project}) => {
  return (
    <section>
        <div key={project.id} className='flex flex-col md:flex-row justify-center items-center max-w-[1200px] h-screen md:h-[calc(100vh-10rem)] m-auto rounded-md'>
          <div className='relative flex-1 w-[300px] h-[300px] md:w-[90rem] md:h-[22rem]'>
            <Image src={project.img} alt='projectImg' fill className='object-cover -z-10 rounded-md px-2 md:px-0 object-center md:object-center overflow-hidden shrink-0 my-auto' />
          </div>
          <motion.div className='flex-1 bg-white flex flex-col justify-evenly items-center mb-4 gap-2 md:gap-3 p-4 text-black rounded-md shadow-lg'>
            <h2 className='text-2xl md:4xl font-semibold'>{project.title}</h2>
            <div className='text-sm md:text-[16px]'>
              {project.desc1 && <p>{project.desc1}</p>}
              {project.desc2 && <p>{project.desc2}</p>}
              {project.desc3 && <p>{project.desc3}</p>}
            </div>
            <ul className='flex gap-1 md:gap-2 flex-wrap text-sm'>
              {project.tools && project.tools.map((tool, index) => (
                <button key={index} className='px-2 py-1 md:px-4 md:py-1 border rounded-md'>
                  {tool}
                </button>
              ))}
            </ul>
            <div className='flex gap-4'>
              {project.github && <a href={project.github} target='blank'><button className='px-4 p-1 rounded-md flex items-center gap-2 text-md font-semibold border'>Github <Github size={20} /> </button></a>}
              {project.demo && <a href={project.demo} target='blank'><button className='px-4 p-1 rounded-md flex items-center gap-2 text-md font-semibold border'>Demo <ArrowUpRightSquare size={20} /> </button></a>}
            </div>
          </motion.div>
        </div>
      </section>
  )
}

const Project = () => {

  const ref = useRef();
  const { mode } = useContext(ThemeContext);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["end end", "start start"] });
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 })

  return (
    // portfolio
    <div className={`relative z-10 pb-6 ${mode === "light" ? "bg-red-100" : null}`} ref={ref}>
      {/* progress */}
      <div className='sticky top-0 left-0 text-center text-2xl md:text-4xl font-bold'>
        <h1 className='bg-backdrop-blur-lg bg-white/30 p-2'><span className='text-color3'>My</span> Projects</h1>
        {/* progressBar */}
        <motion.div style={{ scaleX }} className='h-[10px] my-1 bg-color3'></motion.div>
      </div>
      {projects.map((project) => (
        <div key={project.id}>
          <div key={project.id} className={`h-screen md:h-[calc(100vh-10rem)] w-full p-2 pb-4 hidden md:block`}>
            <Single project={project} key={project.id} />
          </div>
          <div key={project.id} className={`h-screen md:h-[calc(100vh-10rem)] w-full p-2 pb-4 md:hidden`}>
            <Mobile project={project} key={project.id}/>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Project
