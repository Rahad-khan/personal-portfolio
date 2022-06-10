import React from 'react';
import { ImRocket } from 'react-icons/im';
import { FaMobile } from 'react-icons/fa';
import { BsFillLightbulbFill } from 'react-icons/bs';
import { SiSpeedtest } from 'react-icons/si';
import './About.css'
import Services from './Services';



const About = () => {
    const aimData = [
        { id: 1, name: 'Responsive', description: "My layouts will work on any device, big or small.", icon: FaMobile },
        { id: 2, name: 'Dynamic', description: "Websites don't have to be static, I love making pages come to life.", icon: ImRocket },
        { id: 3, name: 'Intuitive', description: "Strong preference for easy to use, intuitive UX/UI.", icon: BsFillLightbulbFill },
        { id: 4, name: 'Fast', description: "Fast load times and lag free interaction, my highest priority.", icon: SiSpeedtest },
    ]
    return (
        <div>
            <h1 className='text-4xl font-bold text-center pt-32 '>ABOUT</h1>
            <div className='flex items-center justify-center mt-3 mb-10'>
                <div className='h-[4px] w-20 bg-black'></div>
            </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 w-5/6 mx-auto gap-4'>
                {
                    aimData.map(aim =>
                        <Services aim={aim} key={aim.id}></Services>)
                }
            </div>
        </div>
    );
};

export default About;