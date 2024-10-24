
"use client"


import Link from 'next/link';
import  { useState } from 'react';



        export default function NavBar() {
        
         const [isOpen, setIsOpen] = useState(false);
        

       
         return (
          <main className="flex items-center justify-between flex-wrap py-4 text-white bg-gray-700 sticky top-0 z-10">
          
     
                  <div className='text-2xl  font-bold    px-6'> Portfolio</div>
     
          <div className="block lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400"
            >
              <svg
                className={`fill-current h-3 w-3 ${isOpen ? "hidden" : "block"}`}
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
              <svg
                className={`fill-current h-3 w-3 ${isOpen ? "block" : "hidden"}`}
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
              </svg>
            </button>
          </div>
          
     
          <nav className={`w-full block flex-grow lg:flex  lg:items-center lg:w-auto   ${isOpen ? "block" : "hidden"}`}>
                    <ul className="absolute inset-x-0 z-20 flex-1 text-center mr-4 text-black  xl:text-white  w-full px-6 py-4 transition-all duration-300 ease-in-out text-xs sm:text-xl bg-white lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center lg:justify-end gap-x-4">
                    <Link href="/"> <li className=' hover:font-bold text-lg'> Home</li></Link>
                    <Link href="/About"> <li className=' hover:font-bold text-lg'> About</li></Link>
                    <Link href="/Skills"> <li className=' hover:font-bold text-lg'> Skills</li></Link>  
                    <Link href="/Contact"> <li className=' hover:font-bold text-lg'> Contact</li></Link> 
                    </ul>
       
                  </nav>
     
     
        </main>
           
         );
        }
      