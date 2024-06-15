import React from 'react';
import { Link } from 'react-router-dom';
import { animated } from 'react-spring';

import useFadeInRightAnimation from '../../../../hooks/animations/useFadeInRightAnimation'
import useFadeInLeftAnimation from '../../../../hooks/animations/useFadeInLeftAnimation'

import OutlineButton from '../../../buttons/outline'

const HomeAboutSection = () => {

    const [fadeInRightRef1, fadeInRight1] = useFadeInRightAnimation();
    const [fadeInLeftRef1, fadeInLeft1] = useFadeInLeftAnimation();

    const [fadeInRightRef2, fadeInRight2] = useFadeInRightAnimation();
    const [fadeInLeftRef2, fadeInLeft2] = useFadeInLeftAnimation();

    const [fadeInRightRef3, fadeInRight3] = useFadeInRightAnimation();
    const [fadeInLeftRef3, fadeInLeft3] = useFadeInLeftAnimation();

    return (
        <section className='my-4'>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 md:mb-0">
                <h1 className='font-semibold md:font-bold text-black text-4xl md:text-5xl my-auto z-20'>
                    Prominent work of our Brandladder
                </h1>
                <img src="https://firebasestorage.googleapis.com/v0/b/brandladder-webapp.appspot.com/o/general%2Ftitle-bg.png?alt=media&token=ee5eb414-64f3-4471-8fdd-5004439b5cee" alt="Brandladder" className='max-h-52 relative right-56 z-10 hidden md:block' loading='lazy' />
            </div>

            <div className='flex flex-col-reverse md:flex-row justify-evenly'>
                <animated.div className='flex flex-col my-auto space-y-4 flex-grow'
                    ref={fadeInRightRef1}
                    style={{ ...fadeInRight1, flexBasis: 0 }}
                >
                    <h2 className='text-gray-600 text-3xl md:text-4xl font-normal md:font-semibold'>
                        Digital Services
                    </h2>
                    <p className='text-gray-500'>
                        We tailor services to fit your unique needs in today's saturated digital market. From social strategies to UI/UX and top-tier SEO, Brandladder is your all-in-one digital marketing solution. Our approach is simple: we elevate your business at every step, with experts in social media, content creation, lead generation, Google ads, and more. Join our family and experience unprecedented growth.
                    </p>
                    <Link to='/services'>
                        <OutlineButton text="Know More" />
                    </Link>
                </animated.div>

                <animated.div
                    ref={fadeInLeftRef1}
                    style={{ ...fadeInLeft1, flexBasis: 0 }}
                    className='flex-grow'
                >
                    <img
                        src="https://firebasestorage.googleapis.com/v0/b/brandladder-webapp.appspot.com/o/general%2Fabout-1.png?alt=media&token=5a7065b8-16ca-4670-a47d-44ad2642a9ac"
                        alt="BandLadder"
                        className='max-h-80 mx-auto '
                    />
                </animated.div>
            </div>

            <div className='flex flex-col md:flex-row justify-evenly my-5'>
                <animated.div
                    ref={fadeInRightRef2}
                    style={{ ...fadeInRight2, flexBasis: 0 }} // Add flexBasis: 0
                    className='flex-grow'
                >
                    <img
                        src="https://firebasestorage.googleapis.com/v0/b/brandladder-webapp.appspot.com/o/general%2Fabout-2.png?alt=media&token=1eecac6b-3fcd-480f-a8e5-28f434be48bb"
                        alt="BandLadder"
                        className='max-h-80 mx-auto'
                    />
                </animated.div>

                <animated.div className='flex flex-col my-auto space-y-4 flex-grow'
                    ref={fadeInLeftRef2}
                    style={{ ...fadeInLeft2, flexBasis: 0 }}
                >
                    <h2 className='text-gray-600 text-3xl md:text-4xl font-normal md:font-semibold'>
                        Software Solutions
                    </h2>
                    <p className='text-gray-500'>We offer expertly integrated solutions, tailored to your needs. From web development reflecting your brand's identity to user-friendly applications, Brandladder enhances your digital presence. Our AI/ML-driven innovations boost productivity, while cloud solutions aid growth. With a focus on page speed and maintenance services, stay ahead with Brandladder. Partner with us to expand your business's technical horizon.
                    </p>
                    <Link to='/services'>
                        <OutlineButton text="Know More" />
                    </Link>
                </animated.div>
            </div>

            <div className='flex flex-col-reverse md:flex-row justify-evenly'>
                <animated.div className='flex flex-col my-auto space-y-4 flex-grow'
                    ref={fadeInRightRef3}
                    style={{ ...fadeInRight3, flexBasis: 0 }}
                >
                    <h2 className='text-gray-600 text-3xl md:text-4xl font-normal md:font-semibold'>
                        CA And Finance Services
                    </h2>
                    <p className='text-gray-500'>
                        We've partnered with top Chartered Accountants in India to offer comprehensive CA services. Our expert team ensures accurate and transparent financial handling. From accounting to acquiring licenses and permits, net worth certificates, payroll management, and more, we've got you covered. Trust Brandladder for your financial needs, allowing you to focus on growing your business.
                    </p>
                    <Link to='/services'>
                        <OutlineButton text="Know More" />
                    </Link>
                </animated.div>

                <animated.div
                    ref={fadeInLeftRef3}
                    style={{ ...fadeInLeft3, flexBasis: 0 }}
                    className='flex-grow' // Use flex-grow to evenly divide space
                >
                    <img
                        src="https://firebasestorage.googleapis.com/v0/b/brandladder-webapp.appspot.com/o/general%2Fabout-3.png?alt=media&token=4aa187a6-6ed1-4eaf-af2f-63e5085741fb"
                        alt="BandLadder"
                        className='max-h-80 mx-auto '
                    />
                </animated.div>
            </div>

        </section>
    )
}

export default HomeAboutSection
