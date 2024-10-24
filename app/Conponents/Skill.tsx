





import React from 'react'
import Heading from './Heading'

const Skill = () => {
  return (
    <section className='container mx-auto py-10 px-4'>
    <Heading title='Skills'/>
        <p className='text-gray-600 -mt-10 mb-10  '> I am Full Stack Application Developer such Typescript, Next.js, Node.js, React.js, Custom CSS, Tailwind CSS, Shadcn, HTML, and Python  </p>



        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>

        
            < div> 
                <p>HTML</p>
                <div className='relative bg-gray-400 h-[4px] mt-2'>
                <div className='bg-[#ff4041] absolute h-[4px] w-[90%]'></div>
            </div>
            </div>




            < div> 
                <p>Custom CSS</p>
                <div className='relative bg-gray-400 h-[4px] mt-2'>
                <div className='bg-[#ff4041] absolute h-[4px] w-[50%]'></div>
            </div>
            </div>




            < div> 
                <p> Typescrpt</p>
                <div className='relative bg-gray-400 h-[4px] mt-2'>
                <div className='bg-[#ff4041] absolute h-[4px] w-[70%]'></div>
            </div>
            </div>




            < div> 
                <p>Next.js</p>
                <div className='relative bg-gray-400 h-[4px] mt-2'>
                <div className='bg-[#ff4041] absolute h-[4px] w-[50%]'></div>
            </div>
            </div>


            < div> 
                <p>Tailwind CSS</p>
                <div className='relative bg-gray-400 h-[4px] mt-2'>
                <div className='bg-[#ff4041] absolute h-[4px] w-[50%]'></div>
            </div>
            </div>

            < div> 
                <p>React.js</p>
                <div className='relative bg-gray-400 h-[4px] mt-2'>
                <div className='bg-[#ff4041] absolute h-[4px] w-[30%]'></div>
            </div>
            </div>

          




            

        </div>


    </section>
  )
}

export default Skill