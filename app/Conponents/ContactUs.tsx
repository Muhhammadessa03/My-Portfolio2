



import React from 'react'
import Heading from './Heading'

const ContactUs = () => {
  return (
    <section className='container mx-auto py-10 px-4'>
    <Heading title='Contact Us'/>
<form className='flex flex-col gap-8'> 
<div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
<input type='text' placeholder='Name' required className='inputStyle' />

<input type='text' placeholder='Email' required className='inputStyle' />
</div>
<input type='text' placeholder='Subject' required className='inputStyle' />
<textarea rows={6} placeholder='Message' className='inputStyle' required>
    </textarea>

        <div>
    <button type="submit" className='btn'> Send Message</button>
    </div>



 </form>
    </section>
  )
}

export default ContactUs