import React from 'react'
import Navbar from './Navbar';
const Hero =()=> {
  return (
<div id="hero"className='min-h-screen bg-no-repeat bg-[url(/image.jpg)] bg-cover'
   
style={{backgroundSize:"30%", backgroundPosition:"left 100px top 100px"}}

>
    <Navbar/>
    <div className='container grid lg:grid-cols-2 h-[calc(100vh-60px)]'>
    <div className='hidden lg:block'></div>
    <div className='text-[80px] sm:text-[40px] font-normal leading-tight flex justify-center items-center'>
     <div>
      <h1 className='text-justify text-[250px]font-bold leading-tight flex justify-between items-center'>My Portfolio Website</h1><br></br>
        <p data-aos="zoom-in-left" >Hello!My Name is Sana Moin.Thanks for visiting my website.Kindly check my professional portfolio.</p>              
       
        </div>
     </div>
     </div>
     </div> 
  )
}
export  default Hero