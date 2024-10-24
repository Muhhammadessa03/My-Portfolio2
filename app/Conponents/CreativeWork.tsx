

import React from 'react'
import Heading from './Heading'

const CreativeWork = () => {
  return (
    <section className='container mx-auto py-10 px-4'>
    <Heading title='Creative Works'/>

            <div className='grid grid-cols-3 gap-4'> 

            <div className='row-span-2 relative group'> 
                <img src="M Essa.jpg" alt=''/>
                <div className='bg-black absolute w-[100% ] h-[100%] top-0 opacity-0 transition duration-500 group:hover:opacity-100 grid place-items-center text-white  '> 
                </div>
                </div>


                <div className='relative group'> 
                <img src="M Essa.jpg" alt=''/>
                <div className='bg-black absolute w-[100% ] h-[100%] top-0 opacity-0 transition duration-500 group-hover:opacity-100 grid place-items-center text-white  '> 
                </div>
                </div>


                <div className=' relative group'> 
                <img src="M Essa.jpg" alt=''/>
                <div className='bg-black absolute w-[100% ] h-[100%] top-0 opacity-0 transition duration-500 group-hover:opacity-100 grid place-items-center text-white  '> 
                </div>
                </div>


                <div className=' relative group'> 
                <img src="M Essa.jpg" alt=''/>
                <div className='bg-black absolute w-[100% ] h-[100%] top-0 opacity-0 transition duration-500 group-hover:opacity-100 grid place-items-center text-white  '> 
                </div>
                </div>





                

                

            </div>




    </section>
  )
}

export default CreativeWork