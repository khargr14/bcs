import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'


const Home = () => {
    return (
        <div name='Home' className='w-full h-screen bg-[#e2edfd]'>

            {/* Container */}
            <div className='max-w[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
                <p className='text-4xl- sm:text-4xl text-[#565f69]'>What We Do</p>
                <h2 className='text-4xl- sm:text-7xl font-bold text-[#565f69] '> Commercial Janitorial Services</h2>
                <p className='text-4xl- sm:text-3xl  text-[#565f69]'> Cleanliness is appreciated by everyone, and by providing a safe and healthy workplace during this challenging time, our commercial cleaning services are helpful to your business and employees. In addition to being healthier, efficient janitorial cleaning keeps facilities'
                    assets secure, employees productive, and customers coming back.  </p>

                <div>
                    <button> VIEW FACILITIES SERVED <HiArrowNarrowRight /></button>
                </div>
            </div>
        </div>
    )
}

export default Home
