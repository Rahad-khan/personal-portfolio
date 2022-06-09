import React from 'react';

const Project = ({ pro }) => {
    const { name, img, id } = pro;
    return (
        <div class="flex justify-center">
            <div class="rounded-lg shadow-lg h-80 bg-white max-w-md relative">
                <a href="#!">
                    <img class="rounded-t-lg" src={img} alt="" />
                </a>
                <div className='p-2'>
                    <h1 className='text-2xl font-medium my-2'>{name}</h1>
                    <button className='bg-pink-600 px-3 py-2 rounded-sm my-2 absolute bottom-0'>Details</button>
                </div>
            </div>

        </div>
    );
};

export default Project;