import React from 'react'
import card1 from '../../public/Card1.png'
import card2 from '../../public/Card2.png'
import card3 from '../../public/Card3.png'
import Image from 'next/image'


const Cards = () => {
  return (
    <div className='bg-white text-black  p-10 pl-20 pr-10'>
            <div className='flex flex-col lg:flex-row justify-evenly  text-center'>
                <div className='justify-items-center pt-20'>
                <Image
                src={card1}
                width={200}
                height={100}
                alt='card'/>
                <h1 className='font-bold text-xl p-5'> Web Designing </h1>
                <p> 
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Sit voluptas asperiores quisquam explicabo adipisci neque!
                     </p>
                </div>

                <div className='justify-items-center pt-20'>
                <Image
                src={card2}
                width={200}
                height={100}
                alt='card'/>
                <h1 className='font-bold text-xl p-5'> Visual Designing </h1>
                <p> 
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Sit voluptas asperiores quisquam explicabo adipisci neque!
                     </p>
                </div>

                <div className='justify-items-center align-center pt-20'>
                <Image
                src={card3}
                width={200}
                height={100}
                alt='card'/>
                <h1 className='font-bold text-xl p-5'> Graphic Designing </h1>
                    <p> 
                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Sit voluptas asperiores quisquam explicabo adipisci neque!
                     </p>
                </div>
                

            
        </div>

    </div>
  )
}

export default Cards