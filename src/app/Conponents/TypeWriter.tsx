import React from 'react'
import { useTypewriter } from 'react-simple-typewriter'

const MyComponent = () => {
  const [text] = useTypewriter({
    words: ['Certified Cloud Applied Generative','Generative Artificial Intelligence (AI)',' Engineer (GenEng)'],
    loop: 0
  })

  return (
    <div className='text-xl sm:text-2xl font-semibold'>
      <span>{text}</span>
    </div>
  )
}


export default  MyComponent;