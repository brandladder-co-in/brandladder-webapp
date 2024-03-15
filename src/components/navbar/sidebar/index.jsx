import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import useEmailAuth from '../../../hooks/auth/useEmailAuth';

import { GrServices, GrArticle } from 'react-icons/gr'
import { MdOutlineEmojiEvents, MdOutlineContacts } from 'react-icons/md'
import { IoMdMenu } from "react-icons/io";
import { PiArrowLineLeftBold } from "react-icons/pi";
import { IoPricetagsOutline } from "react-icons/io5";


const Sidebar = () => {

    const { currentUser, handleSignOut } = useEmailAuth()
    const navigate = useNavigate();

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
                            className='max-w-52'
                            loading='lazy'
                        />
                        <label htmlFor="drawer-left" className="btn btn-xl btn-circle btn-ghost text-orange-7">
                            <PiArrowLineLeftBold />
                        </label>
                    </div>
                    <section class="sidebar-content h-fit overflow-visible">
                        <nav class="menu rounded-md">
                            <section class="menu-section px-4">
                                <span class="menu-title">Main menu</span>
                                <ul class="menu-items">
                                    <li class="menu-item text-orange-5 font-semibold text-[1rem]">
                                        <GrArticle />
                                        <span>Insights</span>
                                    </li>

                                    <li>
                                        <input type="checkbox" id="menu-1" class="menu-toggle" />
                                        <label class="menu-item justify-between bg-orange-5" for="menu-1">
                                            <div class="flex gap-2 text-orange-1">
                                                <span>Our Offering</span>
                                            </div>

                                            <span class="menu-icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                                                </svg>
                                            </span>
                                        </label>

                                        <div class="menu-item-collapse">
                                            <div class="min-h-0">
                                                <label class="menu-item ml-6 text-orange-5">
                                                    <GrServices />
                                                    Services
                                                </label>
                                                <label class="menu-item ml-6 text-orange-5">
                                                    <MdOutlineEmojiEvents />
                                                    Events
                                                </label>
                                                <label class="menu-item ml-6 text-orange-5">
                                                    <MdOutlineContacts />
                                                    Investments
                                                </label>
                                            </div>
                                        </div>
                                    </li>

                                    <li class="menu-item text-orange-5 font-semibold text-[1rem]">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 opacity-75" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                        </svg>
                                        <span>About Us</span>
                                    </li>

                                    {
                                        currentUser && (
                                            <li class="menu-item text-orange-5 font-semibold text-[1rem]">
                                                <IoPricetagsOutline />
                                                <span>Pricing</span>
                                            </li>
                                        )
                                    }


                                    <li class="menu-item text-orange-5 font-semibold text-[1rem]">
                                        <MdOutlineContacts />
                                        <span>Contact Us</span>
                                    </li>

                                </ul>
                            </section>

                            {
                                !currentUser && (
                                    <section class="menu-section px-4">
                                        <span class="menu-title">Membership And Subscription</span>
                                        <ul class="menu-items">


                                            <li class="menu-item text-orange-5 font-semibold text-[1rem]">
                                                <IoPricetagsOutline />
                                                <span>Pricing</span>
                                            </li>

                                            <li class="menu-item text-orange-5 font-semibold text-[1rem]">
                                                <MdOutlineContacts />
                                                <span>Login</span>
                                            </li>

                                            <li class="menu-item text-orange-5 font-semibold text-[1rem]">
                                                <MdOutlineContacts />
                                                <span>SignUp</span>
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