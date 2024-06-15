import React, { useState } from 'react'
import Wave from 'react-wavify'
import { Link } from 'react-router-dom';

import { useFirestore } from '../../context/FirestoreContext'
import { showSuccessToast, showErrorToast } from '../../components/tosters'

import { VscSignIn } from "react-icons/vsc";
import { IoPricetagsOutline, IoLocationOutline } from "react-icons/io5";
import { FaRegBuilding, FaLinkedinIn, FaInstagram, FaWhatsapp, FaFacebook } from "react-icons/fa";
import { GrServices, GrContactInfo } from "react-icons/gr";
import { AiTwotoneMail } from "react-icons/ai";
import { FiPhone } from "react-icons/fi";

const Footer = () => {

    const [email, setEmail] = useState('');

    const { uploadEmptyDocument } = useFirestore();

    const handleNewsLetter = async () => {
        try {
            if (email === '') {
                showErrorToast("Email Is Required !!")
            }
            if (email !== '') {
                await uploadEmptyDocument('newsletter', email)
                showSuccessToast("You Have Subscribed To Our News Leetter !!")
                setEmail('')
            }
        } catch (error) {
            console.error('error handling news letter data : ', error)
        }
    }

    const socials = [
        {
            link: 'https://www.linkedin.com/in/brand-ladder-3455952a7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
            icon: <FaLinkedinIn />,
        },
        {
            link: 'https://www.instagram.com/brand_ladder.co.in?igsh=cm9nbGU5OHVmYzAy',
            icon: <FaInstagram />,
        },
        {
            link: 'whatsapp://send?phone=+919391523930',
            icon: <FaWhatsapp />,
        },
        {
            link: 'https://www.facebook.com/profile.php?id=61556460775848&mibextid=ZbWKwL',
            icon: <FaFacebook />,
        },
    ]

    return (
        <footer className='mt-5' >
            <div className="max-h-10 overflow-hidden">
                <Wave
                    fill='#ff969b'
                    paused={false}
                    style={{
                        display: 'flex'
                    }}
                    options={{
                        height: -1,
                        amplitude: 25,
                        speed: 0.25,
                        points: 3
                    }}
                />
            </div>
            <div className="px-5 py-10 mx-auto w-full md:px-24 lg:px-8 bg-orange-4">
                <div className="grid gap-10 row-gap-6 sm:grid-cols-2 lg:grid-cols-5">
                    <div className="sm:col-span-2">
                        <Link
                            to='/'
                            aria-label="Go home"
                            title="Company"
                            className="inline-flex items-center"
                        >
                            <img src="https://firebasestorage.googleapis.com/v0/b/brandladder-webapp.appspot.com/o/general%2Ffull-logo.png?alt=media&token=5a963339-c8d7-42f1-9b21-fc29358196e6" alt="brandladder" />
                        </Link>
                        <div className="mt-6 space-y-2">
                            <div className="grid grid-cols-3 gap-0">
                                <input
                                    className="input max-w-full text-orange-10 bg-orange-1 border-orange-5 col-span-2 h-14"
                                    placeholder="Email"
                                    type='email'
                                    value={email}
                                    onChange={(value) => { setEmail(value.target.value) }}
                                    required
                                />
                                <button className="btn bg-orange-7 col-span-1 h-14" onClick={handleNewsLetter}>
                                    Subscribe
                                </button>
                            </div>
                            <h4 className="text-gray-800 font-semibold text-xl">
                                Get weekly offers delivered to your inbox directly
                            </h4>
                            <small className="mt-4 text-xs text-gray-800">
                                Brandladder is a leading tech and marketing company dedicated to providing a wide range of innovative services. Our expertise spans across cutting-edge technology solutions and comprehensive marketing strategies, designed to elevate your brand and drive business growth. We specialize in digital marketing, web development, app development, SEO, social media management, and data analytics.
                            </small>
                        </div>
                    </div>

                    <div className='my-auto hidden lg:block' >
                        <span className="text-base font-bold tracking-wide text-gray-900">
                            Quick Links
                        </span>
                        <div className="flex flex-col mt-1 space-x-3">
                            <ul>
                                {/* <Link to='/insight' className='my-2 flex link text-orange-10 transition-all ease-in-out duration-300 hover:text-orange-7'>
                                    <GrArticle className='my-auto mx-2' />
                                    <li>Insight</li>
                                </Link> */}
                                <Link to='/about' className='my-2 flex link text-orange-10 transition-all ease-in-out duration-300 hover:text-orange-7'>
                                    <FaRegBuilding className='my-auto mx-2' />
                                    <li>About us</li>
                                </Link>
                                <Link to='/plans' className='my-2 flex link text-orange-10 transition-all ease-in-out duration-300 hover:text-orange-7'>
                                    <IoPricetagsOutline className='my-auto mx-2' />
                                    <li>Our Plans</li>
                                </Link>
                                <Link to='/services' className='my-2 flex link text-orange-10 transition-all ease-in-out duration-300 hover:text-orange-7'>
                                    <GrServices className='my-auto mx-2' />
                                    <li>Our Services</li>
                                </Link>
                                <Link to='/contact' className='my-2 flex link text-orange-10 transition-all ease-in-out duration-300 hover:text-orange-7'>
                                    <GrContactInfo className='my-auto mx-2' />
                                    <li>Contact Us</li>
                                </Link>
                                <Link to='/signup' className='my-2 flex link text-orange-10 transition-all ease-in-out duration-300 hover:text-orange-7'>
                                    <VscSignIn className='my-auto mx-2' />
                                    <li>Join Us</li>
                                </Link>
                            </ul>
                        </div>
                    </div>
                    <div className="my-auto space-y-2 text-sm sm:col-span-2 mx-auto">
                        <div className='flex justify-evenly lg:justify-end' >
                            <small className='my-auto font-medium text-lg text-black hidden lg:block' >
                                Connect With Our <span className='text-orange-10'> Social Apps</span>
                            </small>
                            <div className="flex justify-around mx-3">
                                {
                                    socials.map((data, index) => {
                                        return (
                                            <div
                                                key={index}
                                                className='border-2 text-xl border-orange-3 border-solid rounded-full p-1 text-orange-10 mx-1 shadow-2xl transition duration-500 ease-in-out hover:text-orange-1 hover:bg-orange-5'
                                                target='_blank'
                                            >
                                                <Link to={data.link}>
                                                    {data.icon}
                                                </Link>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        {/* <p className="text-base font-bold tracking-wide text-gray-900">
                            Made with love in India
                        </p> */}
                        <div className="flex">
                            <a
                                href="+91 9391523930"
                                aria-label="Our phone"
                                title="Our phone"
                                className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800 flex"
                            >
                                <FiPhone className='my-auto mx-2' /> +91 9391523930
                            </a>
                        </div>
                        <div className="flex">
                            <a
                                href="mailto:info@lorem.mail"
                                aria-label="Our email"
                                title="Our email"
                                className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800 flex"
                            >
                                <AiTwotoneMail className='my-auto mx-2' /> info@brandladder.co.in
                            </a>
                        </div>
                        <section className='flex'>
                            <aside>
                                <IoLocationOutline className='h-full my-auto mx-2' />
                            </aside>
                            <aside className='space-y-4'>
                                <div>
                                    <b>Head Office: </b>10603 Porto CtSan Diego,
                                    CA 92124, USA
                                </div>
                                <div>
                                    <a
                                        href="https://www.google.com/maps"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="Our address"
                                        title="Our address"
                                        className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
                                    >
                                        <b>Sales Office: </b> High line Complex,
                                        Banjarahills Hyderabad, 500034, Telangana,
                                        INDIA
                                    </a>
                                </div>
                            </aside>
                        </section>
                        {/* <div className="flex">
                            <aside>
                                <a
                                    href="https://www.google.com/maps"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Our address"
                                    title="Our address"
                                    className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800 flex"
                                >
                                    <IoLocationOutline className='my-auto mx-2' />
                                    10603 Porto CtSan Diego,
                                    CA 92124, USA
                                </a>
                                <a
                                    href="https://www.google.com/maps"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Our address"
                                    title="Our address"
                                    className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800 flex"
                                >
                                    <IoLocationOutline className='my-auto mx-2' /> High line Complex,
                                    Banjarahills Hyderabad, 500034, Telangana,
                                    INDIA
                                </a>
                            </aside>
                        </div> */}
                    </div>
                </div>
            </div>
            <div className='bg-orange-3 py-3 mx-auto text-center'>
                <h4 className='font-semibold text-sm' >© 2024 Brandladder Technologies Pvt Ltd.</h4>
            </div>
        </footer>
    )
}

export default Footer
