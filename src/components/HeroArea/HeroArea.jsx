import React from 'react';
import { BsArrowRightShort } from 'react-icons/bs';
import './HeroArea.css'

const HeroArea = () => {
    return (
        <div className='h-screen w-full flex items-center justify-center bg-gray-900'>
            <div>
                <h1 className='text-4xl text-white text-center md:text-left'>Hello, I'm <span className='text-pink-600'>Rahad Khan</span>.</h1>
                <h1 className='text-4xl text-white text-center'>I'm a full stack web developer</h1>
                <div className='flex justify-center md:justify-start'>
                    <button
                        data-mdb-ripple="true"
                        data-mdb-ripple-color="light"
                        data-mdb-ripple-duration="1000ms"
                        type="button" class="rotate-btn flex items-center justify-center px-2 py-1 mt-4 border-2 border-gray-200 text-gray-200 font-medium text-sm leading-tight uppercase rounded hover:bg-cyan-500 hover:border-cyan-500 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">View My Work <BsArrowRightShort className='ml-2 w-8 h-8'></BsArrowRightShort>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HeroArea;