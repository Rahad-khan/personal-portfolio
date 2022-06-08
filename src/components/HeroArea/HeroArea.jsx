import React from 'react';

const HeroArea = () => {
    return (
        <div className='h-screen w-full flex items-center justify-center bg-gray-900'>
            <div>
                <h1 className='text-4xl text-white'>Hello, I'm <span className='text-pink-600'>Rahad Khan</span>.</h1>
                <h1 className='text-4xl text-white'>I'm a full stack web developer</h1>
                <button
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                    data-mdb-ripple-duration="1000ms"
                    type="button" class="inline-block px-6 py-3 mt-2 border-2 border-gray-200 text-gray-200 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">View My Work </button>
            </div>
        </div>
    );
};

export default HeroArea;