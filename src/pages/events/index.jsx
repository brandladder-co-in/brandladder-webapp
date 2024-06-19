import { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { animated } from 'react-spring';

import { useFirestore } from '../../context/FirestoreContext'
import useEmailAuth from '../../hooks/auth/useEmailAuth';
import useSmoothScroll from '../../hooks/general/useSmoothScroll';
import useBounceAnimation from '../../hooks/animations/useBounceAnimation';
import useFadeInLeftAnimation from '../../hooks/animations/useFadeInLeftAnimation';
import useFadeInRightAnimation from '../../hooks/animations/useFadeInRightAnimation'
import useFadeInUpAnimation from '../../hooks/animations/useFadeInUpAnimation'

import { FaGlobe } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";

import EventCarousel from '../../components/carousel/event-carousel';
import LazyLoadImg from '../../ components/lazy-loading/img/LazyLoadImage';

// import { eventsData, preEventsData } from '../../.data/event'
// import PreviousEvents from '../../components/cards/event/previous';
import { Link } from 'react-router-dom';

const Events = () => {
    useSmoothScroll();
    const [isAuth, setIsAuth] = useState(true);
    const [eventData, setEventData] = useState();
    // const [upcomming, setUpcomming] = useState(0);
    const [loadedImages, setLoadedImages] = useState(0);

    const { currentUser } = useEmailAuth()
    const { fetchAllDocumentIdsAndData: getAllDocumentIdsAndData } = useFirestore()
    const bounceAnimationProps = useBounceAnimation();
    const [fadeInLeftRef, fadeInLeft] = useFadeInLeftAnimation();
    const [fadeInRightRef, fadeInRight] = useFadeInRightAnimation();
    const [fadeInUpRef, fadeInUpAnimation] = useFadeInUpAnimation();

    const handleGetAllDocumentIdsAndData = async () => {
        try {
            const res = await getAllDocumentIdsAndData('events');
            setEventData(res)
        } catch (error) {
            console.error('Error while logging in: ', error);
        }
    }

    const teamImg = [
        'https://firebasestorage.googleapis.com/v0/b/brandladder-webapp.appspot.com/o/team%2F1706971961993.jpg?alt=media&token=905e09bf-d68a-4edb-833a-eb0ef235e3b6',
        'https://firebasestorage.googleapis.com/v0/b/brandladder-webapp.appspot.com/o/team%2FKbhargav.jpg?alt=media&token=a01cfd64-0b68-450d-82f3-7c7b7781e979',
        'https://firebasestorage.googleapis.com/v0/b/brandladder-webapp.appspot.com/o/team%2Fsurajpropicteam.jpg?alt=media&token=873e0108-aad1-445f-8c37-21b1df62066f',
        'https://firebasestorage.googleapis.com/v0/b/brandladder-webapp.appspot.com/o/team%2F1707362911480.jpg?alt=media&token=20fb203b-607a-4727-bc70-02b4e6f97d23',
        'https://firebasestorage.googleapis.com/v0/b/brandladder-webapp.appspot.com/o/team%2F4x6.png?alt=media&token=cc36d90b-9c73-44fb-97d2-eacaa2483542',
        'https://firebasestorage.googleapis.com/v0/b/brandladder-webapp.appspot.com/o/team%2Fpiyush.jpg?alt=media&token=103b901c-572d-4aa9-bf63-d712c1cd3f40',
        'https://firebasestorage.googleapis.com/v0/b/brandladder-webapp.appspot.com/o/team%2FIMG_20240208_140455.jpg?alt=media&token=9342d25a-900d-4524-b5c5-7f8c16463c8e',
        'https://firebasestorage.googleapis.com/v0/b/brandladder-webapp.appspot.com/o/team%2F1707157019443.jpg?alt=media&token=71c31984-5556-47a0-add3-0b03d81d5737',
        'https://firebasestorage.googleapis.com/v0/b/brandladder-webapp.appspot.com/o/team%2FIMG-20240207-WA0183.jpg?alt=media&token=317e9ce7-fcee-492c-b8ad-7329aa46f6e0',
        'https://firebasestorage.googleapis.com/v0/b/brandladder-webapp.appspot.com/o/team%2Frahul.jpg?alt=media&token=96facf43-2c6b-471a-84dc-365f3e36c05b',
        'https://firebasestorage.googleapis.com/v0/b/brandladder-webapp.appspot.com/o/team%2Fkhushi.jpg?alt=media&token=abd3ddb3-dfe2-4357-8644-48b5b09a8030',
        'https://firebasestorage.googleapis.com/v0/b/brandladder-webapp.appspot.com/o/team%2FIMG_20240207_223056.jpg?alt=media&token=b2ff1679-6ea1-4c6c-8dd1-ccc93fffc4dc',
        'https://firebasestorage.googleapis.com/v0/b/brandladder-webapp.appspot.com/o/team%2F1707410979839.jpg?alt=media&token=5f22836c-e0ca-48da-aef9-b58963f597b1',
        'https://firebasestorage.googleapis.com/v0/b/brandladder-webapp.appspot.com/o/team%2F1707371420547.jpg?alt=media&token=a42c17b6-b12e-4cbd-a589-e46f98c0ff4c',
    ]

    useEffect(() => {
        if (currentUser) {
            setIsAuth(true)
        } else {
            setIsAuth(false)
        }

        const imagesToLoad = teamImg.length;
        let loaded = 0;

        const onLoad = () => {
            loaded++;
            if (loaded === imagesToLoad) {
                setLoadedImages(imagesToLoad);
            }
        };

        const imageLoaders = teamImg.map(url => {
            const img = new Image();
            img.src = url;
            img.onload = onLoad;
            return img;
        });

        handleGetAllDocumentIdsAndData()

        return () => {
            imageLoaders.forEach(img => {
                img.onload = null;
            });
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [teamImg]);

    return (
        <motion.div {...bounceAnimationProps}>
            <section
                className="grid grid-cols-1 md:grid-cols-5 gap-4 bg-orange-2"
            >
                <animated.aside
                    className='col-span-3 p-6 space-y-8'
                    ref={fadeInRightRef}
                    style={fadeInRight}
                >
                    <p className="teext-orange-4">..... Events</p>
                    <div className='space-y-2 md:space-y-4'>
                        <h1 className="font-bold text-black text-3xl md:text-4xl lg:text-6xl">BrandLadder</h1>
                        <h4 className='flex text-black font-semibold my-auto text-base md:text-xl lg:text-3xl' >Event platfrom
                            <FaGlobe className='mx-2 my-auto text-xl md:text-2xl lg:text-4xl' /> for you</h4>
                    </div>
                    <LazyLoadImg src="https://firebasestorage.googleapis.com/v0/b/brandladder-webapp.appspot.com/o/general%2Ftitle-bg.png?alt=media&token=ee5eb414-64f3-4471-8fdd-5004439b5cee"
                        alt="Brandladder"
                        className='w-24 md:w-44 absolute top-20 right-12 block md:hidden'
                    />
                    <div className="flex flex-wrap">
                        {
                            loadedImages === teamImg.length ? (
                                teamImg.map((data, index) => (
                                    <LazyLoadImg
                                        key={index}
                                        src={data}
                                        className='h-10 w-8 md:h-12 md:w-10 m-1'
                                        alt="Brandladder"
                                    />
                                ))
                            ) : (
                                <div className='space-x-1 flex flex-wrap'>
                                    <div className="skeleton-pulse h-10 w-8"></div>
                                    <div className="skeleton-pulse h-10 w-8"></div>
                                    <div className="skeleton-pulse h-10 w-8"></div>
                                    <div className="skeleton-pulse h-10 w-8"></div>
                                    <div className="skeleton-pulse h-10 w-8"></div>
                                    <div className="skeleton-pulse h-10 w-8"></div>
                                    <div className="skeleton-pulse h-10 w-8"></div>
                                    <div className="skeleton-pulse h-10 w-8"></div>
                                    <div className="skeleton-pulse h-10 w-8"></div>
                                    <div className="skeleton-pulse h-10 w-8"></div>
                                    <div className="skeleton-pulse h-10 w-8"></div>
                                    <div className="skeleton-pulse h-10 w-8"></div>
                                    <div className="skeleton-pulse h-10 w-8"></div>
                                    <div className="skeleton-pulse h-10 w-8"></div>
                                    <div className="skeleton-pulse h-10 w-8"></div>
                                    <div className="skeleton-pulse h-10 w-8"></div>
                                </div>
                            )
                        }
                    </div>
                    {/* {loadedImages !== teamImg.length && <p className="text-black">Loading...</p>} */}
                    <p className="text-black text-sm md:text-base">
                        Unlock endless excitement! Dive into a realm of diverse events - conferences, workshops, parties, and more. Fuel your passion or simply unwind with us. Your gateway to unforgettable experiences awaits!
                    </p>
                    <div className="grid grid-cols-2 gap-4 w-full md:w-3/5 mx-auto md:mx-0">

                        {
                            isAuth ? (
                                <Link to='/blogs'>
                                    <button
                                        className="btn bg-orange-6 text-black shadow-md transition-all ease-in-out duration-500  hover:text-orange-1 hover:shadow-2xl hover:border-orange-6 w-full">
                                        Checkout Articles
                                    </button>
                                </Link>
                            ) : (
                                <Link to='/login' >
                                    <button
                                        className="btn bg-orange-6 text-black shadow-md transition-all ease-in-out duration-500  hover:text-orange-1 hover:shadow-2xl hover:border-orange-6 w-full">
                                        Join Now
                                    </button>
                                </Link>

                            )
                        }

                        <Link to='/about' >
                            <button
                                className="btn btn-outline bg-inherit border-orange-6 text-black shadow-md transition-all ease-in-out duration-500 hover:bg-orange-6 hover:text-orange-2 hover:shadow-2xl hover:border-orange-6 w-full">
                                Know Us <MdArrowOutward className='mx-2 text-xl' />
                            </button>
                        </Link>
                    </div>
                </animated.aside>
                <animated.aside
                    className="md:col-span-2 hidden md:block"
                    ref={fadeInLeftRef}
                    style={fadeInLeft}
                >
                    <LazyLoadImg
                        src="https://firebasestorage.googleapis.com/v0/b/brandladder-webapp.appspot.com/o/general%2Fevent-hero.png?alt=media&token=1fee5bf9-dfe3-4253-8293-8fc74fc4eee4"
                        alt="Brandladder"
                        loading='lazy'
                    />
                </animated.aside>
            </section>

            <section className='bg-orange-3 py-6 px-2 space-y-6'>
                <h1
                    className='text-2xl text-black font-semibold my-6 text-center'
                    ref={fadeInUpRef}
                    style={fadeInUpAnimation}
                >
                    UPCOMMING EVENTS
                </h1>
                {
                    eventData ? (
                        <EventCarousel eventList={eventData} />
                    ) : (
                        <div className='grid grid-cols-3 gap-8 px-10'>
                            <div className="skeleton-pulse h-64"></div>
                            <div className="skeleton-pulse h-64"></div>
                            <div className="skeleton-pulse h-64"></div>
                        </div>
                    )
                }
            </section>

            {/* <section className='space-y-12'>
                <LazyLoadImg src="https://firebasestorage.googleapis.com/v0/b/brandladder-webapp.appspot.com/o/general%2Ftitle-bg.png?alt=media&token=ee5eb414-64f3-4471-8fdd-5004439b5cee" alt=""
                    className='w-24 md:w-44 absolute z-0'
                />
                <h2 className='text-black font-semibold text-2xl text-center z-10'>Discover something for every interest: Explore our past events</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 px-6">
                    {
                        preEventsData.map((data, index) => {
                            return (
                                <PreviousEvents
                                    id={data.id}
                                    key={index}
                                    img={data.img}
                                    date={data.date}
                                    domain={data.domain}
                                    title={data.title}
                                    orgName={data.orgName} />
                            )
                        })
                    }
                </div>
            </section> */}
        </motion.div>
    )
}

export default Events
