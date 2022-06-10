import React from 'react';
import { BsArrowRightShort } from 'react-icons/bs';
import './HeroArea.css';
import Particles from "react-tsparticles";
import { loadFull } from 'tsparticles'

const HeroArea = () => {
    const particlesInit = async (main) => {
        console.log(main);

        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(main);
    };

    const particlesLoaded = (container) => {
        console.log(container);
    };

    return (
        <section>
            <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={{
                    fpsLimit: 120,
                    interactivity: {
                        events: {
                            onClick: {
                                enable: false,
                                mode: "push",
                            },
                            onHover: {
                                enable: true,
                                mode: "repulse",
                            },
                            resize: true,
                        },
                        modes: {
                            push: {
                                quantity: 4,
                            },
                            repulse: {
                                distance: 100,
                                duration: 1.2,
                            },
                        },
                    },
                    particles: {
                        color: {
                            value: "#ffffff",
                        },
                        links: {
                            color: "#ffffff",
                            distance: 50,
                            enable: true,
                            opacity: 0.5,
                            width: 1,
                        },
                        collisions: {
                            enable: true,
                        },
                        move: {
                            direction: "none",
                            enable: true,
                            outModes: {
                                default: "bounce",
                            },
                            random: false,
                            speed: 1,
                            straight: false,
                        },
                        number: {
                            density: {
                                enable: true,
                                area: 700,
                            },
                            value: 80,
                        },
                        opacity: {
                            value: 0.5,
                        },
                        shape: {
                            type: ["circle", "line"],
                        },
                        size: {
                            value: { min: 1, max: 5 },
                        },
                    },
                    detectRetina: true,
                }}
            />
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
        </section>
    );
};

export default HeroArea;