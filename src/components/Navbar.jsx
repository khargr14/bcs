
import React, { useState } from 'react'
import { FaBars, FaFacebook, FaTimes, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillpersonLinesFill } from 'react-icons/bs'
import bcslogo2 from '../assets/bcslogo2.jpg'
import { Link } from 'react-scroll';


const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)


    return (
        <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0b2853] text-stone-400'>
            <div>
                    <img className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div' src={bcslogo2} alt='Bcslogo2 Image' />
                </div>

            {/* menu */}
            {/* <div className='hidden md:flex'> */}
            {/* anything above md:flex will display */}
            <ul className='hidden md:flex'>





                <li>
                    <Link to='home' smooth={true} duration={500}>
                        Home
                    </Link></li>


                <li>
                    <Link to='about' smooth={true} duration={500}>
                        About
                    </Link> </li>
                <li>
                    <Link to='Fs' smooth={true} duration={500}>
                        Facilities Served
                    </Link></li>
                <li>
                    <Link to='skills' smooth={true} duration={500}>
                        Commercial Cleaning
                    </Link>
                </li>

                <li>
                    <Link to='contact' smooth={true} duration={500}>
                        Contact
                    </Link>
                </li>
            </ul>
            {/* </div> */}

            {/* hamburger */}

            <div onClick={handleClick} className='md:hidden z-10'>
                {/* if it is true show bars if not show x */}
                {!nav ? <FaBars /> : <FaTimes />}
            </div>

            {/* moblie menu */}

            <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0b2853]  flex flex-col justify-center items-center'}>
                <li className='py-6 text-4xl'> Home </li>
                <li className='py-6 text-4xl'> About </li>
                <li className='py-6 text-4xl'> Commercial Cleaning </li>
                <li className='py-6 text-4xl'> Facities Served </li>
                <li className='py-6 text-4xl'> Contact </li>
            </ul>
            {/* social icons */}
            <div className='hiddenlg:flex fixed flex-col top-[35%] left-0'>
                <ul>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#0b2853] '>
                        <a className='flex justify-between items-center w-full text-white'
                            href='https://www.linkedin.com/in/keesha-bowden-7483b177/'>
                            Linkedin <FaLinkedin size={30} />
                        </a>
                    </li>

                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300  bg-[#565f69] '>
                        <a className='flex justify-between items-center w-full text-white'
                            href='https://www.facebook.com/Bowdens-cleaning-service-247008322041984/'>
                            Facebook <FaFacebook size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#0b2853] '>
                    <Link className='flex justify-between items-center w-full text-white' to='contact' smooth={true} duration={500}>
                        Email <HiOutlineMail size={30} />
                    </Link>

                        {/* <a className='flex justify-between items-center w-full text-white'
                            href='https://getform.io/f/a8cde2a8-d65d-4d9c-8661-41555ee2a233'>
                           
                            
                        </a> */}
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
