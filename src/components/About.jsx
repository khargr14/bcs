import React from 'react'

const About = () => {
    return (
        <div name='about' className='w-full h-screen bg-[#0a192f] text-stone-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
          <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
            <div className='sm:text-right pb-8 pl-4'>
              <p className='text-4xl font-bold inline border-b-4 border-stone-600'>
                About
              </p>
            </div>
            <div></div>
            </div>
            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
              <div className='sm:text-right text-4xl font-bold'>
                <p>Here at Bowdens Cleaning Service.</p>
              </div>
              <div>
                <p>Maintaining your facility's cleanliness and maintenance is a priority. We provide a full line of expert commercial janitorial services, 
                    ensuring that you stay clean, green, and compliant, whether you operate one site or many.</p>  
              </div>
            </div>
        </div>
      </div>
    )
};

export default About
