import React from 'react';
import { Link } from 'react-router-dom';

import useEmailAuth from '../../../hooks/auth/useEmailAuth';

import { FaHome } from 'react-icons/fa'
import { GrServices } from 'react-icons/gr'
import { MdOutlineContacts } from 'react-icons/md'
import { IoMdMenu } from "react-icons/io";
import { PiArrowLineLeftBold } from "react-icons/pi";
import { IoPricetagsOutline } from "react-icons/io5";


const Sidebar = () => {

    const { currentUser } = useEmailAuth()

    const closeSidebar = () => {
        document.getElementById('drawer-left').checked = false;
    };

    return (
        <>
            <input type="checkbox" id="drawer-left" className="drawer-toggle lg:hidden" />

            <label htmlFor="drawer-left" className="lg:hidden mx-4">
                <IoMdMenu className='text-orange-6' />
            </label>
            <label className="overlay" htmlFor="drawer-left"></label>
            <div className="drawer bg-orange-2">
                <div className="drawer-content h-full min-w-100">
                    <div className="flex justify-between">
                        <img
                            src="https://firebasestorage.googleapis.com/v0/b/brandladder-webapp.appspot.com/o/general%2Ffull-logo.png?alt=media&token=5a963339-c8d7-42f1-9b21-fc29358196e6"
                            alt="BrandLadder"
                            className='max-w-48'
                            loading='lazy'
                        />
                        <label htmlFor="drawer-left" className="btn btn-xl btn-circle btn-ghost text-orange-7">
                            <PiArrowLineLeftBold />
                        </label>
                    </div>
                    <section className="sidebar-content h-fit overflow-visible">
                        <nav className="menu rounded-md">
                            <section className="menu-section px-4">
                                <span className="menu-title">Main menu</span>
                                <ul className="menu-items">
                                    <li className="menu-item text-orange-5 font-semibold text-[1rem]">
                                        <Link to='/' className='flex gap-3 w-full' onClick={closeSidebar}>
                                            <FaHome className='my-auto' />
                                            <span>Home</span>
                                        </Link>
                                    </li>

                                    {/* <li className="menu-item text-orange-5 font-semibold text-[1rem]">
                                        <Link to='/our-portfolio' className='flex gap-3 w-full' onClick={closeSidebar}>
                                            <FaHome className='my-auto' />
                                            <span>Portfolio</span>
                                        </Link>
                                    </li> */}

                                    <li className="menu-item text-orange-5 font-semibold text-[1rem]">
                                        <Link to='/our-innovation' className='flex gap-3 w-full' onClick={closeSidebar}>
                                            <FaHome className='my-auto' />
                                            <span>Our Innovations</span>
                                        </Link>
                                    </li>

                                    <li className="menu-item text-orange-5 font-semibold text-[1rem]">
                                        <Link to='/services' className='flex gap-3 w-full' onClick={closeSidebar}>
                                            <GrServices className='my-auto' />
                                            <p>Services</p>
                                        </Link>
                                    </li>

                                    {/* <li className="menu-item text-orange-5 font-semibold text-[1rem]">
                                        <Link to='/insight' className='flex gap-3 w-full' onClick={closeSidebar}>
                                            <GrArticle className='my-auto' />
                                            <span>Insights</span>
                                        </Link>
                                    </li> */}

                                    {/* <li>
                                        <input type="checkbox" id="menu-1" className="menu-toggle" />
                                        <label className="menu-item justify-between bg-orange-5" for="menu-1">
                                            <div className="flex gap-2 text-orange-1">
                                                <span>Our Offering</span>
                                            </div>

                                            <span className="menu-icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                                                </svg>
                                            </span>
                                        </label>

                                        <div className="menu-item-collapse">
                                            <div className="min-h-0">
                                                <label className="menu-item ml-6 text-orange-5">
                                                    <Link to='/services' className='flex gap-3 w-full' onClick={closeSidebar}>
                                                        <GrServices className='my-auto' />
                                                        <p>Services</p>
                                                    </Link>
                                                </label>
                                                <label className="menu-item ml-6 text-orange-5">
                                                    <Link to='/events' className='flex gap-3 w-full' onClick={closeSidebar}>
                                                        <MdOutlineEmojiEvents className='my-auto' />
                                                        <p>Events</p>
                                                    </Link>
                                                </label>
                                                <label className="menu-item ml-6 text-orange-5">
                                                    <Link to='/investment' className='flex gap-3 w-full' onClick={closeSidebar}>
                                                        <MdOutlineContacts className='my-auto' />
                                                        <p>Investments</p>
                                                    </Link>
                                                </label>
                                            </div>
                                        </div>
                                    </li> */}

                                    <li className="menu-item text-orange-5 font-semibold text-[1rem]">
                                        <Link to='/about' onCanPlay={closeSidebar} className='flex gap-3'>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 opacity-75" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                            </svg>
                                            <span>About Us</span>
                                        </Link>
                                    </li>

                                    {
                                        currentUser && (
                                            <li className="menu-item text-orange-5 font-semibold text-[1rem]">
                                                <Link to='/plans' className='flex gap-3 w-full' onClick={closeSidebar}>
                                                    <IoPricetagsOutline className='my-auto' />
                                                    <span>Plans And Offers</span>
                                                </Link>
                                            </li>
                                        )
                                    }


                                    <li className="menu-item text-orange-5 font-semibold text-[1rem]">
                                        <Link onClick={closeSidebar} className='flex gap-3 w-full' to='/contact'>
                                            <MdOutlineContacts className='my-auto' />
                                            <span>Contact Us</span>
                                        </Link>
                                    </li>

                                </ul>
                            </section>

                            {
                                !currentUser && (
                                    <section className="menu-section px-4">
                                        <span className="menu-title">Membership And Subscription</span>
                                        <ul className="menu-items">


                                            <li className="menu-item text-orange-5 font-semibold text-[1rem]">
                                                <Link onClick={closeSidebar} className='flex gap-3 w-full' to='/plans'>
                                                    <IoPricetagsOutline className='my-auto' />
                                                    <span>Plans And Offers</span>
                                                </Link>
                                            </li>

                                            <li className="menu-item text-orange-5 font-semibold text-[1rem]">
                                                <Link onClick={closeSidebar} className='flex gap-3 w-full' to='/login'>
                                                    <MdOutlineContacts className='my-auto' />
                                                    <span>Login</span>
                                                </Link>
                                            </li>

                                            <li className="menu-item text-orange-5 font-semibold text-[1rem]">
                                                <Link onClick={closeSidebar} className='flex gap-3 w-full' to='/signup'>
                                                    <MdOutlineContacts className='my-auto' />
                                                    <span>SignUp</span>
                                                </Link>
                                            </li>

                                        </ul>
                                    </section>
                                )
                            }

                        </nav>
                    </section>

                </div>
            </div>
        </>
    )
}

export default Sidebar