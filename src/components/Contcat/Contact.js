import React from 'react';
import ScrollButton from '../ScrollButton/ScrollButton';
import './Contact.css'

const Contact = () => {
    return (
        <div className='polygon bg-gray-900 mt-10 pb-4'>
            <h1 className='text-4xl font-bold text-center pt-32 text-white '>Contact</h1>
            <div className='flex items-center justify-center mt-3 mb-10'>
                <div className='h-[2px] w-20 bg-white'></div>
            </div>
            <p className='text-center text-cyan-400'>Have any questions or want to work together?</p>

            <div>
                <form action="https://formsubmit.co/e52d73a50c7f12954cf5b60663db347c" method="POST" className='xl:w-2/6 mx-auto mt-10'>
                    <div class="flex justify-center">
                        <div class="mb-1 w-full">
                            <input
                                name='name'
                                type="text"
                                class="
                                form-control
                                block
                                w-full
                                px-3
                                py-1.5
                                text-base
                                font-normal
                                text-gray-300
                                bg-gray-700 bg-clip-padding
                                border border-solid border-gray-700
                                rounded
                                transition
                                ease-in-out
                                m-0 focus:bg-gray-700 focus:border-cyan-600 focus:outline-none
                                "
                                placeholder="Name"
                                required
                            />
                        </div>
                    </div>
                    <div class="flex justify-center">
                        <div class="w-full mb-1">
                            <input
                                name='email'
                                type="email"
                                class="
                                form-control
                                block
                                w-full
                                px-3
                                py-1.5
                                text-base
                                font-normal
                                text-gray-300
                                bg-gray-700 bg-clip-padding
                                border border-solid border-gray-700
                                rounded
                                transition
                                ease-in-out
                                m-0 focus:bg-gray-700 focus:border-cyan-600 focus:outline-none
                                "
                                placeholder="Enter Email"
                                required
                            />
                        </div>
                    </div>
                    <div class="flex justify-center">
                        <div class="mb-1 w-full">
                            <textarea
                                name='message'
                                class="
                                form-control
                                block
                                w-full
                                px-3
                                py-1.5
                                text-base
                                font-normal
                                text-gray-300
                                bg-gray-700 bg-clip-padding
                                border border-solid border-gray-700
                                rounded
                                transition
                                ease-in-out
                                m-0
                                focus:text-gray-300 focus:bg-gray-700 focus:border-cyan-600 focus:outline-none
                                "
                                id="exampleFormControlTextarea1"
                                rows="3"
                                placeholder="Your message"
                            ></textarea>
                        </div>
                    </div>
                    <div class="flex justify-end">
                        <div class="">
                            <button
                                data-mdb-ripple="true"
                                data-mdb-ripple-color="light"
                                data-mdb-ripple-duration="1000ms"
                                type="submit" class="rotate-btn flex items-center justify-center px-4 py-2 mt-1 border-2 border-gray-200 text-gray-200 font-medium text-sm leading-tight uppercase hover:bg-cyan-500 hover:border-cyan-500 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">SUBMIT
                            </button>
                        </div>
                    </div>
                </form>
            </div>
            <ScrollButton />
        </div>
    );
};

export default Contact;