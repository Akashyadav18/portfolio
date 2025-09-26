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
  const { mode } = useContext(ThemeContext)

  if (project.id % 2 != 0) {
    return (
      <section ref={ref} >
        <div className='flex flex-col md:flex-row justify-center items-center md:p-4 max-w-[1200px] h-screen md:h-[calc(100vh-10rem)] m-auto rounded-md'>
          <div className='relative flex-1 w-[300px] h-[300px] lg:w-[90rem] lg:h-[27rem]'>
            <Image src={project.img} alt='projectImg' fill className='object-cover -z-10 px-2 md:px-0 object-center md:object-center rounded-l-xl shadow-lg border border-gray-400 overflow-hidden shrink-0 my-auto' />
          </div>
          <motion.div className='flex-1 bg-zinc-200 flex flex-col mb-4 gap-2 md:gap-3 p-4 text-black items-center rounded-r-xl shadow-lg border border-gray-400'>
            <h2 className='text-2xl md:text-3xl font-bold text-black'>{project.title}</h2>
            <ul className='list-disc list-inside text-sm md:text-[14px] leading-relaxed'>
              {project.desc1 && <li>{project.desc1}</li>}
              {project.desc2 && <li>{project.desc2}</li>}
              {project.desc3 && <li>{project.desc3}</li>}
            </ul>
            <ul className='flex gap-2 flex-wrap'>
              {project.tools && project.tools.map((tool, index) => (
                <span
                  key={index}
                  className='px-3 py-1 rounded-full text-sm font-medium bg-[#286f6c]/10 text-black hover:bg-[#286f6c]/20 transition-colors'>
                  {tool}
                </span>
              ))}
            </ul>
            <div className='flex gap-4 mt-2'>
              {project.github && (
                <a href={project.github} target='blank'>
                  <button className={`px-5 py-2 flex items-center gap-2 text-md font-semibold ${mode === "light" ? "bg-black text-white" : "bg-black text-white hover:text-white"} hover:bg-btnHover hover:scale-105 transition-transform`}>
                    Github <Github size={18} />
                  </button>
                </a>
              )}
              {project.demo && (
                <a href={project.demo} target='blank'>
                  <button className={`px-5 py-2 flex shadow-lg border border-gray-400 items-center gap-2 text-md font-semibold ${mode === "light" ? "bg-black text-white" : "bg-black text-white hover:text-white"} hover:bg-btnHover hover:scale-105 transition-transform`}>
                    Demo <ArrowUpRightSquare size={18} />
                  </button>
                </a>
              )}
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
          <motion.div className='flex-1 bg-zinc-200 flex flex-col mb-4 gap-2 md:gap-3 p-4 text-black items-center rounded-l-xl shadow-lg border border-gray-400'>
            <h2 className='text-2xl md:text-3xl font-bold text-black'>{project.title}</h2>
            <ul className='list-disc list-inside text text-sm md:text-[14px] leading-relaxed'>
              {project.desc1 && <li>{project.desc1}</li>}
              {project.desc2 && <li>{project.desc2}</li>}
              {project.desc3 && <li>{project.desc3}</li>}
            </ul>
            <ul className='flex gap-2 flex-wrap'>
              {project.tools && project.tools.map((tool, index) => (
                <span
                  key={index}
                  className='px-3 py-1 rounded-full text-sm font-medium bg-[#286f6c]/10 text-black hover:bg-[#286f6c]/20 transition-colors'>
                  {tool}
                </span>
              ))}
            </ul>
            <div className='flex gap-4 mt-2'>
              {project.github && (
                <a href={project.github} target='blank'>
                  <button className={`px-5 py-2 flex items-center gap-2 text-md font-semibold ${mode === "light" ? "bg-black text-white" : "bg-black text-white hover:text-white"} hover:bg-btnHover hover:scale-105 transition-transform`}>
                    Github <Github size={18} />
                  </button>
                </a>
              )}
              {project.demo && (
                <a href={project.demo} target='blank'>
                  <button className={`px-5 py-2 flex items-center gap-2 text-md font-semibold ${mode === "light" ? "bg-black text-white" : "bg-black text-white hover:text-white"} hover:bg-btnHover hover:scale-105 transition-transform`}>
                    Demo <ArrowUpRightSquare size={18} />
                  </button>
                </a>
              )}
            </div>
          </motion.div>
          <div className='relative flex-1 w-[300px] h-[300px] lg:w-[90rem] lg:h-[27rem] mb-4'>
            <Image src={project.img} alt='projectImg' fill className='object-cover px-2 md:px-0 rounded-r-xl shadow-lg border border-gray-400 -z-10 object-center md:object-center overflow-hidden shrink-0 my-auto' />
          </div>
        </div>
      </section>
    )
  }
};

const Mobile = ({ project }) => {
  const { mode } = useContext(ThemeContext)
  return (
    <section className="px-2 sm:px-4">
      <div
        key={project.id}
        className="relative w-full max-w-[420px] mx-auto my-6 rounded-lg overflow-hidden shadow-lg"
      >
        {/* Background Image */}
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center rounded-lg"
          style={{ backgroundImage: `url(${project.img})` }}
        />
        
        {/* Content Container - this drives the height */}
        <div className="relative bg-white/60 backdrop-blur-sm p-4 sm:p-6 rounded-lg min-h-[400px] sm:min-h-[450px] flex flex-col justify-center gap-3 sm:gap-4">
          {/* Title */}
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 leading-tight">
            {project.title}
          </h2>
          
          {/* Bullet Points */}
          <ul className="list-disc list-inside text-xs sm:text-sm md:text-base text-gray-800 space-y-2 sm:space-y-3">
            {project.desc1 && (
              <li className="leading-relaxed pl-1">{project.desc1}</li>
            )}
            {project.desc2 && (
              <li className="leading-relaxed pl-1">{project.desc2}</li>
            )}
            {project.desc3 && (
              <li className="leading-relaxed pl-1">{project.desc3}</li>
            )}
          </ul>
          
          {/* Tools */}
          <div className="flex gap-2 flex-wrap">
            {project.tools && project.tools.map((tool, index) => (
              <span
                key={index}
                className="px-2 py-1 sm:px-3 sm:py-1.5 rounded-full text-xs sm:text-sm font-medium bg-[#286f6c]/10 text-gray-900 border border-[#286f6c]/20"
              >
                {tool}
              </span>
            ))}
          </div>
          
          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-2 sm:mt-4">
            {project.github && (
              <a 
                href={project.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex-1 sm:flex-none"
              >
                <button className="w-full sm:w-auto px-4 py-2.5 flex items-center justify-center gap-2 text-xs sm:text-sm font-semibold bg-[#286f6c] text-white hover:bg-[#1f5552] hover:scale-105 transition-all duration-200 rounded-md shadow-sm">
                  Github <Github size={14} className="sm:w-4 sm:h-4" />
                </button>
              </a>
            )}
            {project.demo && (
              <a 
                href={project.demo} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex-1 sm:flex-none"
              >
                <button className="w-full sm:w-auto px-4 py-2.5 flex items-center justify-center gap-2 text-xs sm:text-sm font-semibold bg-gray-800 text-white hover:bg-gray-900 hover:scale-105 transition-all duration-200 rounded-md shadow-sm">
                  Demo <ArrowUpRightSquare size={14} className="sm:w-4 sm:h-4" />
                </button>
              </a>
            )}
          </div>
        </div>
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
    <div className={`relative z-10 pb-6 ${mode === "light" ? "bg-bgColor2" : null}`} ref={ref}>
      {/* progress */}
      <div className='sticky top-0 left-0 text-center text-2xl z-50 md:text-4xl font-bold'>
        <h1 className='bg-backdrop-blur-lg bg-white/70 p-2'><span className='text-color3'>My</span> Projects</h1>
        {/* progressBar */}
        <motion.div style={{ scaleX }} className='h-[10px] my-1 bg-color3'></motion.div>
      </div>
      {projects.map((project) => (
        <div key={project.id}>
          <div key={project.id} className={`h-screen md:h-[calc(100vh-10rem)] w-full p-2 pb-4 hidden md:block`}>
            <Single project={project} key={project.id} />
          </div>
          <div key={project.id} className="w-full p-2 mb-6 md:hidden">
            <Mobile project={project} key={project.id} />
          </div>
        </div>
      ))}
    </div>
  )
}

export default Project
