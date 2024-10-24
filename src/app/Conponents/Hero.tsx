"use client"

import React from 'react';

import Button from './Button';
import Image from "./Image";
import MyComponent from './TypeWriter';


const Hero = () => {
  return (
            <section className="flex flex-col-reverse sm:flex-row bg-white h-screen bg-cover bg-center bg-fixed  items-center mt-4">

    <div className='container mx-auto px-4 flex-1'>
    <div className='max-w-[450px] text-white flex flex-col gap-[40px]'> </div>
        <div>
            <h1 className='text-2xl sm:text-5xl font-bold'>MUHMMAD ESSA GADANI  </h1>
            <h4 className='text-2xl mt-3'>  
                <MyComponent/>

                 </h4>
        </div>


        <div className='bg-red-700 h-[2px] w-auto mt-6'></div>
        
         <div className='mt-4'> 
            <p className='text-sm md:text-xl '> Certified expert in designing, developing, and deploying cloud-based generative AI solutions, driving innovation and transformation</p>
                    <Button link='https://www.facebook.com/gadani.baloch.98' text="Learn More" />
         </div>

    </div>


<div className='flex-1'> 
<Image/>

</div>

    </section>
  )
}

export default Hero