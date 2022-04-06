import React from 'react'

import skill1 from '../assets/skill1.jpg';
import skill2 from '../assets/skill2.jpg';
import skill3 from '../assets/skill3.jpg';
import skill4 from '../assets/skill4.jpg';
import skill5 from '../assets/skill5.jpg';
import skill6 from '../assets/skill6.jpg';


const Skills = () => {
    return (
        <div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300'>
            {/* Container */}
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div>
                    <p className='text-4xl font-bold inline border-b-4 border-stone-600 '>Commerical Cleaning</p>
                    <p className='py-4'>Designed specifically to meet your business's needs</p>
                </div>

                <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-150 mx-auto' src={skill1} alt="skill1 icon" />
                        <p className='my-4'>Skill1</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-100 mx-auto' src={skill2} alt="skill2 icon" />
                        <p className='my-4'>Skill2</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-100 mx-auto' src={skill3} alt="skill icon" />
                        <p className='my-4'>skill3T</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-100 mx-auto' src={skill4} alt="skill icon" />
                        <p className='my-4'>skill4</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-100 mx-auto' src={skill5} alt="skill icon" />
                        <p className='my-4'>skill5</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-100 mx-auto' src={skill6} alt="skill icon" />
                        <p className='my-4'>skill6</p>
                    </div>
                </div>
                </div>
            </div>
            );
  };

            export default Skills
