
import React, {useState} from 'react'
 import {FaBars, FaTimes } from 'react-icons/fa'
import bcslogo2 from '../assets/bcslogo2.jpg'


const Navbar = () => {
    const[nav, setNav] = useState(false)
    const handleClick = () =>setNav(!nav)


    return (
        <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0b2853] text-gray-300'>
            <div>
                <img src={bcslogo2} alt='Bcslogo2 Image' />
            </div>

                    {/* menu */}
            {/* <div className='hidden md:flex'> */}
            {/* anything above md:flex will display */}
                <ul className='hidden md:flex'>
                    <li> Home </li>
                    <li> About </li>
                    <li> Commercial Cleaning </li>
                    <li> Facities Served </li>
                    <li> Contact </li>
                </ul>
            {/* </div> */}

               {/* hamburger */}

            <div onClick={handleClick} className='md:hidden z-10'>
                {/* if it is true show bars if not show x */}
               {!nav ? <FaBars /> : <FaTimes />}
            </div>

                     {/* moblie menu */}

            <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0b2853]  flex flex-col justify-center items-center' }>
                    <li className='py-6 text-4xl'> Home </li>
                    <li className='py-6 text-4xl'> About </li>
                    <li className='py-6 text-4xl'> Commercial Cleaning </li>
                    <li className='py-6 text-4xl'> Facities Served </li>
                    <li className='py-6 text-4xl'> Contact </li>
            </ul>
                    {/* social icons */}
            <div className='hidden'></div>
        </div>
    )
}

export default Navbar
