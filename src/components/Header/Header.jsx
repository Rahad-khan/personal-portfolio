import React from 'react';
import { Link, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
const Header = () => {
    const navItem = <>
        <li class="nav-item p-2">
            <Link
                className='nav-link text-white uppercase text-sm hover:text-pink-600 hover:duration-500'
                activeClass="text-pink-600" to="about" spy={true} smooth={true} duration={500} offset={10}
            >
                About
            </Link>
        </li>
        <li class="nav-item p-2">
            <Link
                className='nav-link text-white uppercase text-sm hover:text-pink-600 hover:duration-500'
                activeClass="text-pink-600" to="projects" spy={true} smooth={true} duration={500} offset={10}
            >
                Projects
            </Link>
        </li>
        <li class="nav-item p-2">
            <Link
                className='nav-link text-white uppercase text-sm hover:text-pink-600 hover:duration-500'
                activeClass="text-pink-600" to="blog" spy={true} smooth={true} duration={500} offset={14}
            >
                Blog
            </Link>

        </li>
        <li class="nav-item p-2">
            <Link
                className='nav-link text-white uppercase text-sm hover:text-pink-600 hover:duration-500'
                activeClass="text-pink-600" to="contact" spy={true} smooth={true} duration={500}
            >
                Contact
            </Link>
        </li>
        <li class="nav-item p-2">
            <a target={`_blank`} class="nav-link text-white uppercase text-sm hover:text-pink-600 hover:duration-500" href="https://drive.google.com/file/d/1Ja4FEE-PMv_0XCf-_BA0deyy63NS0jMX/view?usp=sharing">Resume</a>
        </li>
    </>
    return (
        <nav

            class="w-full flex flex-wrap items-center justify-between py-3 bg-gray-900 text-gray-200 shadow-lg navbar navbar-expand-lg navbar-light sticky top-0 z-50"
        >
            <div class="container-fluid w-full flex flex-wrap items-center justify-between px-6">
                <button
                    class="navbar-toggler text-gray-200 border-0 hover:shadow-none hover:no-underline py-2 px-2.5 bg-transparent focus:outline-none focus:ring-0 focus:shadow-none focus:no-underline"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent1"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="bars"
                        class="w-6"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                    >
                        <path
                            fill="currentColor"
                            d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
                        ></path>
                    </svg>
                </button>
                <div class="collapse navbar-collapse flex-grow items-center" id="navbarSupportedContent1">
                    <Link
                        className='text-3xl text-pink-600 pr-2 font-semibold'
                        activeClass="text-pink-600" to="hero" spy={true} smooth={true} duration={500}
                    >
                        RK
                    </Link>
                    {/* <!-- Left links --> */}
                    <ul class="navbar-nav flex flex-col pl-0 list-style-none mr-auto">
                        {navItem}
                    </ul>
                    {/* <!-- Left links --> */}
                </div>
                {/* <!-- Collapsible wrapper --> */}

                {/* <!-- Right elements --> */}
                <div class="flex items-center relative">
                    {/* <!-- Icon --> */}
                    <div class="dropdown relative">
                        <a
                            class="dropdown-toggle flex items-center hidden-arrow"
                            href="!#"
                            id="dropdownMenuButton2"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            <img
                                src="https://mdbootstrap.com/img/new/avatars/2.jpg"
                                class="rounded-full"
                                style={{ height: "25px", width: "25px" }}
                                alt=""
                                loading="lazy"
                            />
                        </a>

                    </div>
                </div>
                {/* <!-- Right elements --> */}
            </div>
        </nav>
    );
};

export default Header;