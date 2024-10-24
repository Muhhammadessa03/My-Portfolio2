


import React from 'react'
import Heading from './Heading'
import { RiLightbulbFlashFill } from 'react-icons/ri'
import { FaTrain } from 'react-icons/fa'

const WhatIDo = () => {
  return (
   <section className='container mx-auto py-10 px-4'>
    <Heading title='What I Do'/>
    <div className='grid grid-cols-1 md:grid-cols-3 gap-3'> 

<div className='shadow-lg flex flex-col gap-4 px-8 py-10 bg-[#ff4041] text-white '>
  <RiLightbulbFlashFill className='text-[26px]'/>
  <h2 className='font-medium text-xl'>Creative Designs</h2>
  <p> ___________________________________________________________</p>
</div>







<div className='shadow-lg flex flex-col gap-4 px-8 py-10 bg-[#ff4041] text-white '>
  <FaTrain  className='text-[26px]'/>
  <h2 className='font-medium text-xl'>Web Development</h2>
  <p> ___________________________________________________________</p>
</div>










<div className='shadow-lg flex flex-col gap-4 px-8 py-10 bg-[#ff4041] text-white '>
  <RiLightbulbFlashFill className='text-[26px]'/>
  <h2 className='font-medium text-xl'>Marketing</h2>
  <p></p>___________________________________________________________
</div>










    </div>



   </section>
  )
}

export default WhatIDo 