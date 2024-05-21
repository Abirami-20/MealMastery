import React, { useState } from 'react'
import logo from '../images/logo.png'
import {HiMenuAlt3} from 'react-icons/hi'
import { AiOutlineClose } from 'react-icons/ai'
const Navbar = () => {
    const [open,setopen]=useState(false)
  return (
    <header className='w-full fixed z-10 bg-black opacity-90'>
        <nav className='flex w-full py-2 md:py-3 md:px-20 items-center justify-between'>
            <a href='/' className='flex items-center justify-center text-white text-lg cursor-pointer' >
                <img src={logo} className='hidden md:block w-8 h-8 lg:w-14 lg:h-14'/>
                Meal <span>Mastery</span>
            </a>
            <ul className='hidden md:flex text-white gap-6'>
                <li><a href='/'/>Home</li>
                <li><a href='#recipes'/>Explore</li>
                <li><a href='/favorites'/>Favorites</li>
            </ul>
           
            <button className='block md:hidden text-white text-xl'
                    onClick={() => setopen(prev => !prev)}>
                    {open ? <AiOutlineClose /> : <HiMenuAlt3 />}
                </button> 
        </nav>
        <div className={`${open ? "flex" : "hidden"} bg-black flex-col w-full px-4 py-8 text-white gap-6 text-[14px]`}>
                <a href="/">Home</a>
                <a href="#recipes">Recipes</a>
                <a href="/">Favorites</a>
            </div>
    </header>
  )
}

export default Navbar
