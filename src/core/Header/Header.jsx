import React from 'react'

export default function Header() {
    return (
        <div className='bg-[#022d50] md:w-[85rem] md:mx-auto py-5 sticky top-0 z-10'>
            <div className="flex justify-between mx-2 md:mx-7 items-center ">
                <h1 className='text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 ... md:pl-5 bg-clip-text text-transparent'>Logo</h1>
                <nav className='space-x-3 md:space-x-8 text-md font-medium font-sans text-white h-full'>
                    <a href="/" className=' hover:text-sky-300'>Weather</a>
                    <a href="/visual" className=' hover:text-sky-300'>Visualization</a>
                    <a href="/contact" className=' hover:text-sky-300'>Contact</a>
                </nav>
            </div>
        </div>
    )
}
