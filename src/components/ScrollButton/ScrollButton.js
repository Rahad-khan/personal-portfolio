import React from 'react';
import { TbArrowBigTop } from 'react-icons/tb';

const ScrollButton = () => {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
            /* you can also use 'auto' behaviour
                in place of 'smooth' */
        });
    };


    return (
        <div className='flex items-center justify-center'>
            <button className='bg-red-800 p-4 mt-10 rounded-md'>
                <TbArrowBigTop className='text-3xl text-white animate-bounce' onClick={scrollToTop} />
            </button>
        </div>
    );
}

export default ScrollButton;
