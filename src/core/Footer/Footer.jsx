import React from 'react'


export default function Footer() {
  return (
    <div className='max-w-[85rem] mx-auto bg-[#022d50] py-2'>
      <div className='flex w-full justify-center gap-9 pt-2'>
        {/* <img src="public/cloudy.png" className='h-10 w-10 ' alt="" />
        <img src="public/cloudy1.png" className='h-10 w-10 ' alt="" />
        <img src="public/cloudy2.png" className='h-10 w-10 ' alt="" />
        <img src="public/snow.png" className='h-10 w-10 ' alt="" /> */}
        <img src="public/Crypto.png" className='h-20 w-20' alt="loading..." />
      </div>
      <p className='text-center mt-3 text-white'>Copyright © 2024</p>
    </div>
  )
}
