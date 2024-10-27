import React from 'react'
import cloudy1 from '../../assets/cloudy (1).png'; 
import cloudy2 from '../../assets/cloudy (2).png'; 
import cloudy from '../../assets/cloudy.png'; 
import snow from '../../assets/snow.png';

export default function Footer() {
  return (
    <div className='max-w-[85rem] mx-auto bg-[#022d50] py-2'>
      <div className='flex w-full justify-center gap-9 pt-2'>
      <img src={cloudy1} className='h-10 w-10 ' alt="Cloudy Icon 1" />
        <img src={cloudy2} className='h-10 w-10 ' alt="Cloudy Icon 2" />
        <img src={cloudy} className='h-10 w-10 ' alt="Cloudy Icon" />
        <img src={snow} className='h-10 w-10 ' alt="Snow Icon" />
      </div>
      <p className='text-center mt-3 text-white'>Copyright © 2024</p>
    </div>
  )
}
