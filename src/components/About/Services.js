import React from 'react';
import './About.css'

const Services = ({ aim }) => {
    return (
        <div key={aim.id} class="flex justify-center">
            <div class="block rounded-lg max-w-sm text-center">
                <div class="px-6">
                    <div className='flex items-center justify-center mb-2 bg-teal-500  icon-clip p-5 mx-auto'>
                        <aim.icon size={53} className='text-white' />
                    </div>
                    <h5 class="text-gray-700 text-2xl font-semibold mb-2">{aim.name}</h5>
                    <p class="text-gray-700 text-base mb-4">
                        {aim.description}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Services;