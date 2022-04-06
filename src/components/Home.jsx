import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'


const Home = () => {
    return (
        <div name='home' className='w-full h-screen bg-[#e2edfd]'>

            {/* Container */}
            <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full  '>
                <p className='  text-stone-300]> '>What We Do</p>
                <h1 className='text-4xl- sm:text-4xl font-bold text-[#565f69] py-4 max-w-[700] '> Commercial Janitorial Services</h1>
                <p className='text-4xl- sm:text-xl font-bold text-[#565f69] py-4 max-w-[700]'> Cleanliness is appreciated by everyone, and by providing a safe and healthy workplace during this challenging time, our commercial cleaning services are helpful to your business and employees. In addition to being healthier, efficient janitorial cleaning keeps facilities'
                    assets secure, employees productive, and customers coming back.  </p>

                <div>
                    <button className='text-blue group border-2 px-6 py-3 my-2 flex items-center hover:bg-slate-300 hover:border-slate-300'> VIEW FACILITIES SERVED 
                    <span className='group-hover:rotate-90 duration-300'>
                    <HiArrowNarrowRight className='ml-3' />
                    </span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Home
