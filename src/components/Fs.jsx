import React from 'react'
import ec from '../assets/ec.jpg'
import gc from '../assets/gc.jpg'
import mc from '../assets/mc.jpg'
import oc from '../assets/oc.jpg'
import other from '../assets/other.jpg'
import rc from '../assets/rc.jpg'
import { Link } from 'react-scroll';

const Fs = () => {
    return (
      <div name='Fs' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 text-stone-600 border-stone-600'>
            Facilities Served
            </p>
            <p className='py-6'>Check out some of our recent work</p>
          </div>
  
  {/* Container */}
          <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
  
              {/* Grid Item */}
            <div
              style={{ backgroundImage: `url(${ec})` }}
              className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
            >
              {/* Hover Effects */}
              <div className='opacity-0 group-hover:opacity-100'>
                <span className='text-2xl font-bold text-black tracking-wider'>
                  Educational Facilites
                </span>
                <div className='pt-8 text-center'>
                < Link to='contact'>
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                      Contact
                    </button>
                    </Link>
                </div>
              </div>
            </div>
            <div
              style={{ backgroundImage: `url(${gc})` }}
              className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
            >
              {/* Hover Effects */}
              <div className='opacity-0 group-hover:opacity-100'>
                <span className='text-2xl font-bold text-black tracking-wider'>
                  Government Buildings
                </span>
                <div className='pt-8 text-center'>
                < Link to='contact'>
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                      Contact
                    </button>
                    </Link>
                </div>
              </div>
            </div>
              {/* Grid Item */}
            <div
              style={{ backgroundImage: `url(${mc})` }}
              className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
            >
              {/* Hover Effects */}
              <div className='opacity-0 group-hover:opacity-100'>
                <span className='text-2xl font-bold text-black
                 tracking-wider'>
                  Medical Facilities
                </span>
                <div className='pt-8 text-center'>
                < Link to='contact'>
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                      Contact
                    </button>
                    </Link>
                </div>
              </div>
            </div>
            <div
              style={{ backgroundImage: `url(${oc})` }}
              className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
            >
              {/* Hover Effects */}
              <div className='opacity-0 group-hover:opacity-100'>
                <span className='text-2xl font-bold text-black tracking-wider'>
                  Office Cleaning
                </span>
                <div className='pt-8 text-center'>
                < Link to='contact'>
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                      Contact
                    </button>
                    </Link>
                </div>
              </div>
            </div>
              {/* Grid Item */}
            <div
              style={{ backgroundImage: `url(${rc})` }}
              className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
            >
              {/* Hover Effects */}
              <div className='opacity-0 group-hover:opacity-100'>
                <span className='text-2xl font-bold text-black tracking-wider'>
                  Religious Facilities
                </span>
                <div className='pt-8 text-center'>
                < Link to='contact'>
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                      Contact
                    </button>
                    </Link>
                </div>
              </div>
            </div>
            <div
              style={{ backgroundImage: `url(${other})` }}
              className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
            >
              {/* Hover Effects */}
              <div className='opacity-0 group-hover:opacity-100'>
                <span className='text-2xl font-bold text-black tracking-wider'>
                  Other type of facilities
                </span>
                <div className='pt-8 text-center'>
                < Link to='contact'>
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                      Contact
                    </button>
                  {/* </a> */}
                  {/* <a href='/'>
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                      Contact
                    </button> */}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  

export default Fs
