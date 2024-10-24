


import React from 'react'
import Heading from './Heading'
import { AiOutlineGift } from 'react-icons/ai'
import { FiBookOpen } from 'react-icons/fi'
import { BsGlobe2 } from 'react-icons/bs'
import { TbPacman } from 'react-icons/tb'
import { IoLocation } from 'react-icons/io5'
import Button from './Button'


const AboutSection = () => {
  return (

 <section className='container mx-auto py-10 px-4'> 
<Heading title="About Me"/>




<div className='flex flex-col sm:flex-row gap-20 '>

{/* Left Side  */}

    <div>
<img src="/M Essa.jpg" className='w-[400px] ' alt='Avater'/>
     </div>


{/* Right Side  */}

<div className='flex flex-col gap-6  '> 


                            
<div className='flex gap-4 items-center font-medium'> 
    <AiOutlineGift className='text-red-700 text-[22px]'/>
    Birthday
    <div> :</div>
    <div > 01.12.2002 </div>
</div>



<div className='flex gap-4 items-center font-medium'> 
    <FiBookOpen className='text-red-700 text-[22px]'/>
    Study          
    <div> :</div>   
    <div className=''> Governor Sindhi IT Initiative Karachi </div>                   
</div>




<div className='flex gap-4 items-center font-medium'>
    <BsGlobe2 className='text-red-700 text-[22px]'/>
    Website
    <div> :</div>
    <div> www.essagadani.com </div>

</div>


<div className='flex gap-4 items-center font-medium'> 
    <TbPacman className='text-red-700 text-[22px]'/>
Interest
<div> :</div>
<div> Web Development </div>
</div>


<div className='flex gap-4 items-center font-medium'> 
    <IoLocation className='text-red-700 text-[22px]'/>
Location
<div> :</div>
<div> Mirpur Mathelo, District Ghotki</div>
</div>

<div className='max-w-[800px] '> 
<h2 className='font-bold mt-16 mb-10'>This is Certified Cloud Applied Generative Artificial Intelligence (AI) Engineer (GenEng) Muhammad Essa Gadani</h2>
<p className='text-gray-600'>Hi! My name is Muhammad Essa Gadani. As a visionary Certified Cloud Applied Generative Artificial Intelligence (AI) Engineer (GenEng), I bridge the gap between technology and innovation. With a passion for harnessing AI's transformative power, I design, develop, and deploy cutting-edge cloud-based generative AI Web development.
</p>
    

    <Button link=" https://mailto:essagadaani036@gmail.com" text="Hair Me"/>
    
</div>
</div>                  
</div>        
      
             

 </section>
  )
}

export default AboutSection