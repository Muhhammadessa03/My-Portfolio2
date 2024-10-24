

import React from 'react'


const Button= ({text,link}:{text: string,
    link:string,}) => {
  return (
    <a href={link} className='btn'>{text}</a>
  )
}

export default Button