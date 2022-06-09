import React from 'react';
import { BsLinkedin, BsFacebook, BsTwitter, BsGithub } from 'react-icons/bs';

const Footer = () => {
    const year = new Date().getFullYear(); // This will get you the current year
    return (
        <footer className='bg-black py-10'>
            <div className='flex justify-center'>
                <ul className='flex items-center space-x-16'>
                    <li>
                        <a href="https://www.linkedin.com/in/kmrahad/" target={`_blank`}><BsLinkedin className='text-white text-3xl hover:text-pink-600 hover:rotate-[360deg] duration-500 '></BsLinkedin></a>
                    </li>
                    <li>
                        <a href="https://github.com/Rahad-khan" target={`_blank`}><BsGithub className='text-white text-3xl hover:text-pink-600 hover:rotate-[360deg] duration-500'></BsGithub></a>
                    </li>
                    <li>
                        <a href="https://www.facebook.com/bogura.rahad/" target={`_blank`}><BsFacebook className='text-white text-3xl hover:text-pink-600 hover:rotate-[360deg] duration-500'></BsFacebook></a>
                    </li>
                    <li>
                        <a href="https://twitter.com/km_rahad" target={`_blank`}><BsTwitter className='text-white text-3xl hover:text-pink-600 hover:rotate-[360deg] duration-500'></BsTwitter></a>
                    </li>
                </ul>
            </div>
            <p className='text-gray-300 text-center text-sm mt-10'>Rahad Khan &copy; <span className='text-pink-500'>{year}</span></p>
        </footer>
    );
};

export default Footer;