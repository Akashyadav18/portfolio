"use client"

import { skillsData } from '../utils/data'
import Image from 'next/image'
import React, { useContext } from 'react'
import { motion } from 'framer-motion'
import { ThemeContext } from '@/context/ThemeContext'

const animation = {
    initial: {
        opacity: 0,
        y: 100,
    },
    animate: (index) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.05 * index,
        },
    }),
};


const Skill = () => {
    const {mode} = useContext(ThemeContext)

    return (
        <div className={`min-h-screen md:h-screen xl:h-[calc(100vh-4rem)] m-4 lg:m-8 md:px-4 lg:px-10 ${mode === "light" ? "bg-bgColor2" : null} overflow-hidden border shadow-lg flex flex-col`}>
            <h2 className='text-2xl md:text-4xl font-bold text-center mb-10 py-4 md:p-6'> 
                <span className='text-color3'>My</span> Skills
            </h2>

            <div className='flex overflow-hidden space-x-16 group flex-shrink-0'>
                <div className='flex justify-center items-center space-x-16 animate-loop-scroll group-hover:Paused'>
                    <div className='relative w-[150px] h-[150px] lg:w-[200px] lg:h-[200px]'>
                        <Image src='/html.png' alt='html' fill className='object-contain object-center overflow-hidden shrink-0 max-w-full my-auto' />
                    </div>
                    <div className='relative w-[150px] h-[150px] md:w-[200px] md:h-[200px]'>
                        <Image src='/css.png' alt='css' fill className='object-contain object-center overflow-hidden shrink-0 max-w-full my-auto' />
                    </div>
                    <div className='relative w-[150px] h-[150px] md:w-[200px] md:h-[200px]'>
                        <Image src='/js.png' alt='js' fill className='object-contain object-center overflow-hidden shrink-0 max-w-full my-auto' />
                    </div>
                    <div className='relative w-[150px] h-[150px] md:w-[200px] md:h-[200px]'>
                        <Image src='/react1.png' alt='react' fill className='object-contain object-center overflow-hidden shrink-0 max-w-full my-auto' />
                    </div>
                    <div className='relative w-[150px] h-[150px] md:w-[200px] md:h-[200px]'>
                        <Image src='/node_js.png' alt='node' fill className='object-contain object-center overflow-hidden shrink-0 max-w-full my-auto' />
                    </div>
                    <div className='relative w-[150px] h-[150px] md:w-[200px] md:h-[200px]'>
                        <Image src='/express.png' alt='express' fill className='object-contain object-center overflow-hidden shrink-0 max-w-full my-auto' />
                    </div>
                    <div className='relative w-[150px] h-[150px] md:w-[200px] md:h-[200px]'>
                        <Image src='/mongo.png' alt='mongo' fill className='object-contain object-center overflow-hidden shrink-0 max-w-full my-auto' />
                    </div>
                    <div className='relative w-[150px] h-[150px] md:w-[200px] md:h-[200px]'>
                        <Image src='/my_sql.png' alt='mySql' fill className='object-contain object-center overflow-hidden shrink-0 max-w-full my-auto' />
                    </div>
                    <div className='relative w-[150px] h-[150px] md:w-[200px] md:h-[200px]'>
                        <Image src='/next.png' alt='next' fill className='object-contain object-center overflow-hidden shrink-0 max-w-full my-auto' />
                    </div>
                    <div className='relative w-[150px] h-[150px] md:w-[200px] md:h-[200px]'>
                        <Image src='/Spring.png' alt='graphql' fill className='object-contain object-center overflow-hidden shrink-0 max-w-full my-auto' />
                    </div>
                    <div className='relative w-[150px] h-[150px] md:w-[200px] md:h-[200px]'>
                        <Image src='/java.svg' alt='java' fill className='object-contain object-center overflow-hidden shrink-0 max-w-full my-auto' />
                    </div>
                </div>

                <div className='flex space-x-16 animate-loop-scroll group-hover:Paused' aria-hidden="true">
                    <div className='relative w-[150px] h-[150px] lg:w-[200px] lg:h-[200px]'>
                        <Image src='/html.png' alt='html' fill className='object-contain object-center overflow-hidden shrink-0 max-w-full my-auto' />
                    </div>
                    <div className='relative w-[150px] h-[150px] md:w-[200px] md:h-[200px]'>
                        <Image src='/css.png' alt='css' fill className='object-contain object-center overflow-hidden shrink-0 max-w-full my-auto' />
                    </div>
                    <div className='relative w-[150px] h-[150px] md:w-[200px] md:h-[200px]'>
                        <Image src='/js.png' alt='js' fill className='object-contain object-center overflow-hidden shrink-0 max-w-full my-auto' />
                    </div>
                    <div className='relative w-[150px] h-[150px] md:w-[200px] md:h-[200px]'>
                        <Image src='/react1.png' alt='react' fill className='object-contain object-center overflow-hidden shrink-0 max-w-full my-auto' />
                    </div>
                    <div className='relative w-[150px] h-[150px] md:w-[200px] md:h-[200px]'>
                        <Image src='/node_js.png' alt='node' fill className='object-contain object-center overflow-hidden shrink-0 max-w-full my-auto' />
                    </div>
                    <div className='relative w-[150px] h-[150px] md:w-[200px] md:h-[200px]'>
                        <Image src='/express.png' alt='express' fill className='object-contain object-center overflow-hidden shrink-0 max-w-full my-auto' />
                    </div>
                    <div className='relative w-[150px] h-[150px] md:w-[200px] md:h-[200px]'>
                        <Image src='/mongo.png' alt='mongo' fill className='object-contain object-center overflow-hidden shrink-0 max-w-full my-auto' />
                    </div>
                    <div className='relative w-[150px] h-[150px] md:w-[200px] md:h-[200px]'>
                        <Image src='/my_sql.png' alt='mySql' fill className='object-contain object-center overflow-hidden shrink-0 max-w-full my-auto' />
                    </div>
                    <div className='relative w-[150px] h-[150px] md:w-[200px] md:h-[200px]'>
                        <Image src='/next.png' alt='next' fill className='object-contain object-center overflow-hidden shrink-0 max-w-full my-auto' />
                    </div>
                    <div className='relative w-[150px] h-[150px] md:w-[200px] md:h-[200px]'>
                        <Image src='/Spring.png' alt='graphql' fill className='object-contain object-center overflow-hidden shrink-0 max-w-full my-auto' />
                    </div>
                    <div className='relative w-[150px] h-[150px] md:w-[200px] md:h-[200px]'>
                        <Image src='/java.svg' alt='java' fill className='object-contain object-center overflow-hidden shrink-0 max-w-full my-auto' />
                    </div>
                </div>
            </div>

            {/* buttons */}
            <div className='flex-grow flex items-center justify-center'>
                <ul className='flex flex-wrap justify-center items-center gap-2 text-md sm:text-lg py-6 sm:py-8 xl:w-[700px] mx-auto'>
                    {skillsData.map((skill, index) => (
                        <motion.li
                            className={` border-2 ${mode === "light" ? "border-black bg-white" : "border-black bg-white text-black"} hover:scale-[1.05] transition shadow-md px-3 py-1 md:px-5 md:py-2`}
                            key={index}
                            variants={animation}
                            initial="initial"
                            whileInView="animate"
                            viewport={{
                                once: true,
                            }}
                            custom={index}
                        >
                            {skill}
                        </motion.li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Skill
