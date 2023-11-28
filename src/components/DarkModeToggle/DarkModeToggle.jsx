"use client"

import { ThemeContext } from '@/context/ThemeContext'
import React, { useContext } from 'react'

const DarkModeToggle = () => {

    const {toggle, mode} = useContext(ThemeContext)

  return (
    <div className='w-[60px] h-[30px] ring-1 ring-gray-500 shadow rounded-2xl flex justify-between items-center gap-2 m-1 relative cursor-pointer'
    onClick={toggle}
    >
      <div className='text-lg'>🌙</div>
      <div className='text-lg'>🌞</div>
      <div className='w-[25px] h-[25px] bg-color3 rounded-full absolute' style={mode === "light" ? {left: "4px"} : {right: "4px"}}></div>
    </div>
  )
}

export default DarkModeToggle
