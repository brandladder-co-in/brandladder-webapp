import { lazy } from 'react';
import { animated } from 'react-spring';
import { Link } from 'react-router-dom';

import useFadeInLeftAnimation from '../../../../hooks/animations/useFadeInLeftAnimation';
import useFadeInRightAnimation from '../../../../hooks/animations/useFadeInRightAnimation';
import useFadeInUpAnimation from '../../../../hooks/animations/useFadeInUpAnimation';

import { FaRegPlayCircle } from "react-icons/fa";
import { FaArrowDownLong } from "react-icons/fa6";

import LazyLoadImg from '../../../lazy-loading/img/LazyLoadImage';
const VidModal = lazy(() => import('../../../modal/vid-modal'));
const FeatureCard = lazy(() => import('../../../cards/feature/counting'));
const TextReplacementAnimation = lazy(() => import('../../../../assests/animation/typeing'));

const HomeHeroSection = ({ currentUser }) => {
    const [fadeInLeftRef, fadeInLeft] = useFadeInLeftAnimation();
    const [fadeInRightRef, fadeInRight] = useFadeInRightAnimation();
    const [fadeInUpRef, fadeInUpAnimation] = useFadeInUpAnimation();

    return (
        <>
            <section className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-2">
                <animated.aside
                    className='flex flex-col my-auto'
                    ref={fadeInRightRef}
                    style={fadeInRight}
                >
                    <div>
                        <small>........ IT and Marketing Company</small>
                    </div>
                    <TextReplacementAnimation />
                    <div className="flex">
                        <label className="btn btn-outline-secondary text-orange-6 border-orange-6 shadow-xl hover:text-orange-2 hover:bg-orange-6 space-x-2"
                            htmlFor='vid-modal-intro-vid'>
                            <FaRegPlayCircle className='m-auto' />
                            <p>Play Intro</p>
                        </label>
                        {
                            !currentUser && (
                                <Link to='/signup' >
                                    <button className="btn btn-secondary bg-orange-6 shadow-xl hover:bg-orange-2 hover:text-orange-6 mx-2">
                                        Join Us
                                    </button>
                                </Link>
                            )
                        }
                    </div>
                    <div className="flex mt-10 items-end">
                        <div className='my-auto p-2 animate-bounce border-2 border-orange-5 rounded-full'>
                            <FaArrowDownLong className='mx-auto' />
                        </div>
                        <small className='my-auto mx-2'>Scroll down to Explore</small>
                    </div>
                </animated.aside>
                <animated.aside
                    className='mx-auto h-full w-full'
                    ref={fadeInLeftRef}
                    style={fadeInLeft}
                >
                    <LazyLoadImg
                        src="https://firebasestorage.googleapis.com/v0/b/brandladder-webapp.appspot.com/o/general%2Fhero-main-min.png?alt=media&token=40a3640f-6f65-415d-88af-4722bab64ce7"
                        alt="BrnadLadder"
                        className='max-h-dvh'
                    />
                </animated.aside>
            </section>
            <animated.div
                className='grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 px-0 md:px-5'
                ref={fadeInUpRef}
                style={fadeInUpAnimation}
            >
                <FeatureCard icon="https://firebasestorage.googleapis.com/v0/b/brandladder-webapp.appspot.com/o/gifs%2Fbrandladder-project-done.gif?alt=media&token=08a187d6-aeef-4ec4-935e-86fd39ff54fe"
                    count='60 '
                    text='Projects Done' />
                <FeatureCard icon="https://firebasestorage.googleapis.com/v0/b/brandladder-webapp.appspot.com/o/gifs%2Fbrandladder-ongoing-project.gif?alt=media&token=ed65ace9-6091-443c-9595-05c6b42a6b09"
                    count='25 '
                    text='Projects Running' />
                <FeatureCard icon="https://firebasestorage.googleapis.com/v0/b/brandladder-webapp.appspot.com/o/gifs%2Fbrandladder-clients.gif?alt=media&token=2eb3babc-f020-4f0e-a6c9-71beb655c685"
                    count='50 '
                    text='Happy Brands' />
                <FeatureCard icon="https://firebasestorage.googleapis.com/v0/b/brandladder-webapp.appspot.com/o/gifs%2Fbrandladder-services.gif?alt=media&token=a8109fce-4bfd-42e8-94cc-31d0f5391006"
                    count='40 '
                    text='Services' />
            </animated.div>
            <VidModal id='intro-vid' />
        </>
    )
}

export default HomeHeroSection
