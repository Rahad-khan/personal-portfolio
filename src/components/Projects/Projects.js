import React from 'react';
import Project from './Project';
import project1 from '../../assets/images/project1.png';
import project2 from '../../assets/images/project2.png';
import project3 from '../../assets/images/project3.png';
import project4 from '../../assets/images/project4.png';
import project5 from '../../assets/images/project5.png';
import project6 from '../../assets/images/project6.png';

const Projects = () => {

    const projects = [
        { id: 1, name: "Electrix", img: project1 },
        { id: 2, name: "Auto Cars", img: project2 },
        { id: 3, name: "Doctors Portal", img: project3 },
        { id: 4, name: "Medi Line", img: project4 },
        { id: 5, name: "PhoneMore", img: project5 },
        { id: 6, name: "Panda Shop", img: project6 }
    ]
    return (
        <div className='bg-slate-50 pt-24' id='projects'>
            <h1 className='text-3xl font-bold text-center'>PROJECTS</h1>
            <div className='flex items-center justify-center mt-3 mb-10'>
                <div className='h-[3px] w-16 bg-black'></div>
            </div>

            <div className='grid md:grid-cols-2 lg:grid-cols-3 w-5/6 mx-auto gap-4'>
                {
                    projects.map(pro => <Project key={pro.id} pro={pro}></Project>)
                }
            </div>
        </div>
    );
};

export default Projects;