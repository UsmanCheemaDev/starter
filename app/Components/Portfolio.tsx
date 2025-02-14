import React from 'react'
import image1 from '../../public/Image1.png'
import image2 from '../../public/Image2.png'
import image3 from '../../public/Image3.png'
import image4 from '../../public/Image4.png'
import image5 from '../../public/Image5.png'
import image6 from '../../public/Image6.png'
import Image from 'next/image'

const Portfolio = () => {
  return (
    <div className='bg-white text-black p-5 pt-20 ' >
        <h1 className='font-bold text-3xl tracking-widest text-center'> Portfolio </h1>
    <div className='bg-white text-black flex flex-col lg:flex-row text-center lg:text-left justify-evenly pt-10 '>
        <div className=' pt-10'>
            <Image
            src={image1}
            width={550}
            height={300}
            layout='responsive'
            alt='image'/>
            <h1 className='font-bold pt-5'> Graphic design </h1>
            <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt, sapiente. </p>
        </div>
        <div className='pt-10'>
            <Image
            src={image2}
            width={550}
            height={300}
            layout='responsive'
            alt='image'/>
            <h1 className='font-bold pt-5'> Graphic design </h1>
            <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas, aliquid! </p>
        </div>
        <div className='pt-10'>
            <Image
            src={image3}
            width={550}
            height={300}
            layout='responsive'
            alt='image'/>
            <h1 className='font-bold pt-5'> Graphic design </h1>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, aspernatur? </p>
        </div>

    </div>

    <div className='bg-white text-black flex flex-col md:flex-row text-center lg:text-left justify-evenly pt-20 '>
        <div className=' pt-10'>
            <Image
            src={image4}
            width={550}
            height={300}
            layout='responsive'
            alt='image'/>
            <h1 className='font-bold pt-5'> Graphic design </h1>
            <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt, sapiente. </p>
        </div>
        <div className='pt-10'>
            <Image
            src={image5}
            width={550}
            height={300}
            layout='responsive'
            alt='image'/>
            <h1 className='font-bold pt-5'> Graphic design </h1>
            <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas, aliquid! </p>
        </div>
        <div className='pt-10'>
            <Image
            src={image6}
            width={550}
            height={300}
            layout='responsive'
            alt='image'/>
            <h1 className='font-bold pt-5'> Graphic design </h1>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, aspernatur? </p>
        </div>

    </div>

    </div>
  )
}

export default Portfolio