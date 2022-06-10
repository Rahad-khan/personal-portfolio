import React from 'react';
import { ImRocket } from 'react-icons/im';
import { FaMobile } from 'react-icons/fa';
import { BsFillLightbulbFill } from 'react-icons/bs';
import { SiSpeedtest } from 'react-icons/si';
import './About.css'
import Services from './Services';
import rahad from '../../assets/images/IMG20220115131630-min.jpg'



const About = () => {
    const aimData = [
        { id: 1, name: 'Responsive', description: "My layouts will work on any device, big or small.", icon: FaMobile },
        { id: 2, name: 'Dynamic', description: "Websites don't have to be static, I love making pages come to life.", icon: ImRocket },
        { id: 3, name: 'Intuitive', description: "Strong preference for easy to use, intuitive UX/UI.", icon: BsFillLightbulbFill },
        { id: 4, name: 'Fast', description: "Fast load times and lag free interaction, my highest priority.", icon: SiSpeedtest },
    ]
    return (
        <div id='about'>
            <h1 className='text-4xl font-bold text-center pt-24 '>ABOUT</h1>
            <div className='flex items-center justify-center mt-3 mb-10'>
                <div className='h-[3px] w-20 bg-black'></div>
            </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 md:w-5/6 mx-auto p-2 md:p-0 md:gap-4'>
                {
                    aimData.map(aim =>
                        <Services aim={aim} key={aim.id}></Services>)
                }
            </div>

            <div class="flex flex-col md:flex-row items-center md:w-5/6 mx-auto px-2 md:p-0 mt-10 md:space-x-4">
                <div className='flex-1'>
                    <img
                        src={rahad}
                        class="rounded-full w-1/2 mb-4 mx-auto"
                        alt="Rahad"
                    />
                    <h5 class="text-2xl font-medium leading-tight">Rahad Khan</h5>
                    <p class="text-cyan-500 font-semibold mb-2">Web Developer</p>
                    <p class="text-gray-500 text-justify">
                        Hi, I'm Rahad Khan, a web developer, coder, learner. who specializes in front-end development.
                        My mission is to translate user-focussed designs into pixel-perfect websites or web applications that run blazing fast. I am always determined on learning new technologies. There I'm proficient in HTML, CSS, JavaScript, and MERN Stack Technology. My ultimate goal is to become a full-stack web developer who can handle the front-end and back-end smoothly.
                    </p>
                    <small className='text-cyan-500'>Let's make something special.</small>

                </div>
                <div class="flex flex-col w-full flex-1 mt-6 md:mt-0 space-y-2 md:space-y-4">
                    <div class="w-full bg-gray-200 flex">
                        <span class="bg-cyan-500 pl-2 w-[150px] font-semibold text-md text-blue-100 uppercase">HTML</span>
                        <div className='w-full'>
                            <div class="bg-cyan-700 text-md text-blue-100 text-start   leading-none " style={{ width: "90%", padding: '12px' }}>
                            </div>
                        </div>
                        <span className='mr-2 text-md'>90%</span>
                    </div>
                    <div class="w-full bg-gray-200 flex">
                        <span class="bg-cyan-500 pl-2 w-[150px] font-semibold text-md text-blue-100 uppercase">CSS</span>
                        <div className='w-full'>
                            <div class="bg-cyan-700 text-md text-blue-100 text-start   leading-none " style={{ width: "90%", padding: '12px' }}>
                            </div>
                        </div>
                        <span className='mr-2 text-md'>90%</span>
                    </div>
                    <div class="w-full bg-gray-200 flex">
                        <span class="bg-cyan-500 pl-2 w-[150px] font-semibold text-md text-blue-100 uppercase">Javascript</span>
                        <div className='w-full'>
                            <div class="bg-cyan-700 text-md text-blue-100 text-start   leading-none " style={{ width: "80%", padding: '12px' }}>
                            </div>
                        </div>
                        <span className='mr-2 text-md'>80%</span>
                    </div>
                    <div class="w-full bg-gray-200 flex">
                        <span class="bg-cyan-500 pl-2 w-[150px] font-semibold text-md text-blue-100 uppercase">React</span>
                        <div className='w-full'>
                            <div class="bg-cyan-700 text-md text-blue-100 text-start   leading-none " style={{ width: "78%", padding: '12px' }}>
                            </div>
                        </div>
                        <span className='mr-2 text-md'>78%</span>
                    </div>
                    <div class="w-full bg-gray-200 flex">
                        <span class="bg-cyan-500 pl-2 w-[150px] font-semibold text-md text-blue-100 uppercase">Tailwind</span>
                        <div className='w-full'>
                            <div class="bg-cyan-700 text-md text-blue-100 text-start   leading-none " style={{ width: "90%", padding: '12px' }}>
                            </div>
                        </div>
                        <span className='mr-2 text-md'>90%</span>
                    </div>
                    <div class="w-full bg-gray-200 flex">
                        <span class="bg-cyan-500 pl-2 w-[150px] font-semibold text-md text-blue-100 uppercase">Node</span>
                        <div className='w-full'>
                            <div class="bg-cyan-700 text-md text-blue-100 text-start   leading-none " style={{ width: "70%", padding: '12px' }}>
                            </div>
                        </div>
                        <span className='mr-2 text-md'>70%</span>
                    </div>
                    <div class="w-full bg-gray-200 flex">
                        <span class="bg-cyan-500 pl-2 w-[150px] font-semibold text-md text-blue-100 uppercase">Express</span>
                        <div className='w-full'>
                            <div class="bg-cyan-700 text-md text-blue-100 text-start   leading-none " style={{ width: "60%", padding: '12px' }}>
                            </div>
                        </div>
                        <span className='mr-2 text-md'>60%</span>
                    </div>
                    <div class="w-full bg-gray-200 flex">
                        <span class="bg-cyan-500 pl-2 w-[150px] font-semibold text-md text-blue-100 uppercase">Mongodb</span>
                        <div className='w-full'>
                            <div class="bg-cyan-700 text-md text-blue-100 text-start   leading-none " style={{ width: "70%", padding: '12px' }}>
                            </div>
                        </div>
                        <span className='mr-2 text-md'>70%</span>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default About;