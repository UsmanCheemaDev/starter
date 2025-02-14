import React from 'react'


const Contact = () => {
  return (
    <div className=' flex flex-col md:flex-row justify-between bg-white text-black p-10 pt-20'>
         <div className=' text-center lg:text-left pl-10 pr-10'>
          <h1 className='font-bold text-2xl '> Lets Work Together </h1>
          <p className='pt-10'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem aspernatur qui exercitationem consectetur quaerat deserunt mollitia maiores blanditiis tempore illum?</p>
         </div>

         <div className='text-center lg:text-left  '>
          <form className='pt-10'>
           <input type='text' className='bg-gray-300 mt-3 p-2 pr-40 ' placeholder='Name'/>
           <br/>
           <input type='mail' className='bg-gray-300 mt-3 p-2 pr-40 ' placeholder='Email'/> 
           </form>
           <button className='bg-black text-white p-5 pl-10 pr-10 mt-3'> Submit </button>

           
           
         </div>
    
      
    </div>
  )
}

export default Contact