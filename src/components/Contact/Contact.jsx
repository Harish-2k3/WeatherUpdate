import React from 'react';

export default function Contact() {
  return (
    <div className='md:max-w-[85rem] md:mx-auto md:py-36 bg-black'>
      <div className='grid grid-cols-1 bg-[#022d50] md:w-[30rem] pb-28 md:h-auto md:mx-auto rounded-md'>
        <div className='text-center'>
          <h1 className='text-2xl font-extrabold bg-gradient-to-r from-red-500 to-blue-700 bg-clip-text text-transparent py-10'>Contact us</h1>
        </div>
        <div className='flex flex-col'>
          <div className='relative mx-20 mb-6'>
            <i className="fa-regular fa-user absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500"></i>
            <input type="text" className='md:w-full pl-10 rounded-md py-2 w-full' placeholder='Enter Name' />
          </div>

          <div className='relative mx-20 mb-6'>
            <i className="fa-regular fa-envelope absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500"></i>
            <input type="text" className='md:w-full pl-10 rounded-md py-2 w-full' placeholder='Enter email' />
          </div>

          <div className='relative mx-20'>
            <i className="fa-regular fa-message absolute left-2 top-3 text-gray-500"></i>
            <textarea rows="4" className="md:w-full pl-10 w-full rounded-md py-2" placeholder="Message"></textarea>
          </div>

          <input
            type="button"
            className='mt-10 mx-auto rounded-[10px] p-2 bg-blue-700 text-white w-32 justify-center hover:bg-red-500 hover:text-white'
            value="Submit"
          />
        </div>
      </div>
    </div>
  );
}
