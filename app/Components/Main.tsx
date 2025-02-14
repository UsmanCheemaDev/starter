import Image from 'next/image'
import React from 'react'
import logo from '../../public/logo.jpg'


const Main = () => {
  return (
    <div className='bg-white text-black'>
       
        <nav className='flex flex-col md:flex-row justify-between justify-items-center items-center p-5 pl-20 pr-10'>
          <div>
             <Image className='rounded-full w-20 h-20'
             src={logo}
             width={30}
             height={30}
             alt='logo'
             />
             
             </div>
             <div className=''>
             <ul className='flex '>
              <li className=' p-10  font-bold'> <a href='#'> Contact </a> </li>
              <li className=' p-10 font-bold'> <a href='#'> Home </a> </li>
              <li className='p-10 pr-10 font-bold'> <a href='#'> About </a> </li>
             </ul>
             </div>
        </nav>
    </div>
  )
}

export default Main