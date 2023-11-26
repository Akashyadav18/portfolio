import Image from 'next/image'
import React from 'react'

const ImageIcon = () => {
  return (
    <div className='h-full w-full ring-8 ring-color2 rounded-full shadow-lg'>
      <div className="bg-bg_image bg-no-repeat bg-center relative mx-auto w-[250px] h-[250px] md:w-[350px] md:h-[350px] xl:w-[400px] xl:h-[400px]">
        <Image src="/p1.png" alt='image' fill className='object-contain'/>
      </div>
    </div>
  )
}

export default ImageIcon
