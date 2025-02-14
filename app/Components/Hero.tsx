import React from 'react'
import Header from '../../public/Header.png'
import Image from 'next/image'

const Hero = () => {
  return (
    <div className=' flex flex-col md:flex-row  items-center  content-center    lg:text-left bg-white text-black p-5 pt-0 pl-20 '>
        <div className=' text-center md:text-left justify-items-center md:justify-items-start pt-5 w-1/2'>
            <h3 className='pt-5  text-3xl '> Branding | Image Making</h3>
            <h1 className='font-extrabold text-6xl pt-10'> Visual Designer </h1>
            <p className='font-thin text-lg color-gray-100 pt-10  '> This is a tempelate figma file. Turnend into code as a website developer Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates  </p>

            <button className='button-lg bg-black text-white mt-10 p-5 pl-10 pr-10 font-bold text-lg'> Contact </button>
        </div>
        <div className=' pt-20 w-1/2 '>
            <Image 
            src={Header}
            width={600}
            height={600}
            layout='responsive'
            alt='header'/>

        </div>

    </div>
  )
}

export default Hero