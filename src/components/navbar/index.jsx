import { useState, useEffect, cloneElement } from 'react';
import { Link, useLocation } from 'react-router-dom';
import useSound from 'use-sound';
import { useNavigate } from 'react-router-dom';

import useEmailAuth from '../../hooks/auth/useEmailAuth'
import ScrollProgressBar from '../progress-bar/ScrollProgress';
import CartModal from '../modal/cart'
import LazyLoadImg from '../lazy-loading/img/LazyLoadImage';

import { RxAvatar } from "react-icons/rx";
import { MdOutlineContacts, MdKeyboardArrowDown } from "react-icons/md";
import { IoPricetagsOutline, IoCaretDown, IoCaretUp } from "react-icons/io5";
import { FaRegBuilding, FaHome, FaRegLightbulb } from "react-icons/fa";
import { GrServices } from "react-icons/gr";

import PageFlipSound from '../../assests/sound/page-flip.mp3'
import Sidebar from './sidebar';

const Navbar = () => {
    const [isSticky, setSticky] = useState(false);
    const [hoverDropDown, setHoverDropDown] = useState(false)

    const location = useLocation();
    const navigate = useNavigate();

    const { currentUser, handleSignOut } = useEmailAuth()

    const [play] = useSound(PageFlipSound);

    const handleScroll = () => {
        const scrollPosition = window.scrollY;
        setSticky(scrollPosition > 200);
    };


    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const navbarClass = isSticky ?
        'navbar navbar-sticky z-50 bg-orange-2 transition-all duration-500 ease-in-out' :
        'navbar shadow-none z-50 bg-inherit transition-all duration-500 ease-in-out';

    const navLinks = [
        {
            path: '/',
            title: 'Home',
            icon: <FaHome />,
        },
        {
            path: '/plans',
            title: 'Plans',
            icon: <IoPricetagsOutline />,
        },
        // {
        //     path: '/our-portfolio',
        //     title: 'Portfolio',
        //     icon: <MdOutlineAddChart />,
        // },
        {
            path: '/our-innovation',
            title: 'Innovation',
            icon: <FaRegLightbulb />,
        },
        {
            path: '/services',
            title: 'Services',
            icon: <GrServices />,
        },
        // {
        //     title: 'Our Offering',
        //     dropdownItems: [
        //         {
        //             path: '/events',
        //             title: 'Events',
        //             icon: <MdOutlineEmojiEvents />,
        //         },
        //         {
        //             path: '/investment',
        //             title: 'Investment',
        //             icon: <MdOutlineContacts />,
        //         },
        //     ]
        // },
        // {
        //     path: '/insight',
        //     title: 'Insights',
        //     icon: <GrArticle />,
        // },
        {
            path: '/about',
            title: 'AboutUs',
            icon: <FaRegBuilding />,
        },
        {
            path: '/contact',
            title: 'ContactUs',
            icon: <MdOutlineContacts />,
        },
    ];

    const closeDrawer = async () => {
        play()
        document.getElementById('drawer-left').checked = false;
    };

    const handleLogout = async () => {
        try {
            await handleSignOut();
            navigate('/login')
        } catch (error) {
            console.error("Error while logout: ", error);
        }
    }

    return (
        <header className={navbarClass}>
            <ScrollProgressBar />
            <div className="navbar-start">
                <Link to="/" className="navbar-item max-w-40">
                    <LazyLoadImg
                        src="https://firebasestorage.googleapis.com/v0/b/brandladder-webapp.appspot.com/o/general%2Ffull-logo.png?alt=media&token=5a963339-c8d7-42f1-9b21-fc29358196e6"
                        alt="Brnadladder"
                        loading='lazy'
                    />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                {/* visible on large screens */}
                {
                    navLinks.map((data, index) => (
                        <div key={index}>
                            {data.dropdownItems ? (
                                <div className="dropdown-container justify-center dropdown-hover">
                                    <div className="dropdown" onMouseEnter={() => { setHoverDropDown(true) }} onMouseLeave={() => { setHoverDropDown(false) }}>
                                        <label className="my-auto flex space-x-4" tabIndex="0">
                                            {data.icon} {data.title}
                                            {
                                                hoverDropDown ? (<IoCaretUp className='my-auto' />) : (<IoCaretDown className='my-auto' />)
                                            }

                                        </label>
                                        <div className="dropdown-menu dropdown-menu-bottom-center bg-orange-2 z-50">
                                            {data.dropdownItems.map((item, idx) => (
                                                <Link
                                                    key={idx}
                                                    to={item.path}
                                                    className="dropdown-item my-auto flex flex-row items-center hover:bg-orange-4 hover:text-orange-1 space-x-10 z-50">

                                                    {item.icon && cloneElement(item.icon, { className: 'my-auto mx-2' })}
                                                    {/* {item.icon}  */}
                                                    {item.title}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <Link
                                    to={data.path}
                                    className={`navbar-item text-black items-center my-auto font-medium ${location.pathname === data.path ? 'text-orange-7' : ''} focus:text-orange-7 flex `}
                                    onClick={async () => {
                                        play();
                                        closeDrawer();
                                    }}
                                >
                                    {data.icon && cloneElement(data.icon, { className: 'my-auto mx-1' })}
                                    {data.title}
                                </Link>
                            )}
                        </div>
                    ))
                }
            </div>
            <div className="navbar-end">
                {
                    currentUser ? (
                        <div className="dropdown dropdown-hover">
                            <label className="" tabIndex="0">
                                <div className="border-2 border-none p-2 rounded-full hover:bg-orange-10 hover:text-orange-1 shadow-2xl transition-all duration-300 cursor-pointer flex">
                                    <RxAvatar className='text-2xl' />
                                    <MdKeyboardArrowDown className='my-auto text-xl' />
                                </div>
                            </label>
                            <div className="dropdown-menu bg-white text-orange-10 space-y-2">
                                <label className="cursor-pointer dropdown-item text-sm hover:bg-orange-1" htmlFor="cart-modal">My Bag</label>
                                <Link to='/services' className="dropdown-item text-sm hover:bg-orange-1">Services</Link>
                                {/* <div className="divider"></div> */}
                                <button className="btn btn-outline-error" onClick={handleLogout} >Logout</button>
                            </div>
                            <CartModal />
                        </div>
                    ) : (
                        <Link to='/login'>
                            <button className="cursor-pointer btn btn-outline text-orange-2 border-none bg-orange-6 shadow-xl transition duration-300 ease-in-out hover:shadow-2xl hover:bg-orange-2 hover:text-orange-6 focus:text-orange-7">
                                SignIn
                            </button>
                        </Link>
                    )
                }
            </div>

            {/* Responsive Menu */}
            <Sidebar />

        </header>
    );
};

export default Navbar;
