import { useEffect, useState, lazy, Suspense, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { animated } from 'react-spring';

import { useFirestore } from '../../context/FirestoreContext';
import useFadeInRightAnimation from '../../hooks/animations/useFadeInRightAnimation';
import useFadeInLeftAnimation from '../../hooks/animations/useFadeInLeftAnimation';
import useBounceAnimation from '../../hooks/animations/useBounceAnimation'
import useSmoothScroll from '../../hooks/general/useSmoothScroll';

import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { TbBrandFacebook } from "react-icons/tb";
import { MdOutlineMailOutline } from "react-icons/md";

import ClientsCarousel from '../../components/carousel/clients-carousel';
import HelmetComponent from '../../helmet';
import LazyLoadImg from '../../components/lazy-loading/img/LazyLoadImage';
import PageHeader from '../../components/headers/page-header'
import Loader from '../../components/loader';

const { clientsLogo } = lazy(() => import('../../.data/clients'));
const TeamCard = lazy(() => import('../../components/cards/team'));
const ContactForm = lazy(() => import('../../components/form/contact'));

const About = () => {
    useSmoothScroll();
    const [teamData, setTeamData] = useState(null);

    const { getTeamData } = useFirestore();
    const bounceAnimationProps = useBounceAnimation();

    const [fadeInRightRef1, fadeInRight1] = useFadeInRightAnimation();
    const [fadeInLeftRef1, fadeInLeft1] = useFadeInLeftAnimation();

    const [fadeInRightRef2, fadeInRight2] = useFadeInRightAnimation();
    const [fadeInLeftRef2, fadeInLeft2] = useFadeInLeftAnimation();

    const fetchTeamData = useCallback(async () => {
        try {
            const res = await getTeamData('team');
            const sortedTeamData = res.sort((a, b) => a.rank - b.rank);
            setTeamData(sortedTeamData);
        } catch (error) {
            console.error('Error while getting team data: ', error);
        }
    }, [getTeamData])

    useEffect(() => {

        fetchTeamData()

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const renderTeamSection = useCallback(() => {
        return (
            <>
                <PageHeader title='Meet Our Team' section={true} />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {teamData && teamData?.map((member, index) => (
                        member.img && member.name && member.designation && (
                            <TeamCard
                                key={index}
                                image={member.img}
                                name={member.name}
                                designation={member.designation}
                                about={member.bio}
                                twitterLink={member.twitter}
                                emailLink={member.email}
                                instaLink={member.insta}
                                facebookLink={member.facebook}
                                linkedinLink={member.linkedin}
                            />
                        )
                    ))}
                </div>
            </>
        );
    }, [teamData]);

    return (
        <motion.section {...bounceAnimationProps}>
            <Suspense fallback={<Loader />}>
                <HelmetComponent
                    title='Our Team'
                    desc='Brand Ladder is your trusted partner for digital marketing solutions in Hyderabad, India. With a focus on excellence and innovation, we offer a wide range of services including SEO, PPC, social media marketing, web development, CA services, CS, ROC, PAN/TAN, DSC, Payroll, MSME registrations, Auditing, FSSAI license, Labour License, and more. Learn about our commitment to delivering unparalleled results for our clients.'
                    author='Anurag Kumar Teechnical Director BrandLadder'
                    page='about'
                    keywords={['About Brand Ladder Your Trusted Branding Partner', 'Digital Marketing Agency in Hyderabad, India', 'Anurag Kumar', 'anuragkmr45', 'Anurag Kumar Teechnical Director BrandLadder', 'brand ladder']}
                    focusKeywords={['About Brand Ladder Your Trusted Branding Partner', 'Digital Marketing Agency in Hyderabad, India', 'Anurag Kumar', 'anuragkmr45', 'Anurag Kumar Teechnical Director BrandLadder', 'brand ladder']}
                />
                <div className='bg-gradient-to-br from-orange-2 from-25% via-orange-1 to-orange-3 to-75% '>
                    <section className="grid grid-cols-1 lg:grid-cols-2 gap-4 px-5 ">
                        <animated.aside ref={fadeInRightRef1} style={fadeInRight1}>
                            <h1 className='text-black text-3xl md:text-5xl font-bold'>
                                We are here to make your journey flawless !
                            </h1>
                        </animated.aside>
                        <animated.aside className="mt-auto" ref={fadeInLeftRef1} style={fadeInLeft1}>
                            <p className='my-auto text-xs lg:text-sm text-gray-600'>
                                Brand ladder: where ambition meets creativity. Your trusted partner to help you overcome any obstacles in the digital landscape. Meet our committed founder and team, dedicated in establishing your success.
                            </p>
                        </animated.aside>
                    </section>

                    {/* about founder */}
                    <>
                        {/* <section className='bg-gradient-to-br from-orange-2 to-orange-1'> */}
                        <h1 className='text-center my-6 text-3xl md:text-5xl text-black font-semibold md:font-bold'>
                            Our Founder
                        </h1>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-2">
                            <animated.aside>
                                <LazyLoadImg
                                    src='https://firebasestorage.googleapis.com/v0/b/brandladder-webapp.appspot.com/o/team%2F1706971961993.jpg?alt=media&token=905e09bf-d68a-4edb-833a-eb0ef235e3b6'
                                    alt="Dr. Uday Kiran"
                                    loading='lazy'
                                    ref={fadeInRightRef2}
                                    style={fadeInRight2}
                                />
                            </animated.aside>
                            <animated.aside
                                className='text-black flex flex-col gap-10 my-auto'
                                ref={fadeInLeftRef2}
                                style={fadeInLeft2}
                            >
                                <div>
                                    <h1 className='text-black text-2xl md:text-4xl font-semibold'>
                                        Dr. Uday Kiran
                                    </h1>
                                    <h4 className='text-xl' >(MBBS ,MD psychiatry resident)</h4>
                                    <small>
                                        Founder - Brandladder , Udbha
                                    </small>
                                </div>
                                <p className='text-sm md:text-lg'>
                                    Meet Dr. Uday Kiran, the backbone and visionary of Brand ladder. Aceing both the fields as a doctor and as an entrepreneur, he began his journey at the age of 17. Over the past 7 years he has worked relentlessly on his skills, studying the market and gracing multiple successful ventures. With his keen observation skills he recognized the struggles of budding entrepreneurs. This lead to Brand Ladder, with the aim to drive businesses for growth and sustainability. At Brand Ladder each member is a bullet of the industry turned into working machines by him. The mission is clear and that is to empower business in every domain to achieve greater heights. With the devotion and dedication he possesses, Brand ladder is ready to make a profound impact.
                                </p>
                                {/* <LazyTypeAnimation /> */}
                                <div className='flex justify-between w-full md:w-2/3 border border-orange-10 rounded-3xl px-6 py-4'>
                                    <Link to='/' target='_blank' >
                                        <MdOutlineMailOutline className='text-3xl text-orange-10' />
                                    </Link>
                                    <Link to='https://www.instagram.com/doc_udaykiran/' target='_blank' >
                                        <FaInstagram className='text-3xl text-orange-10 font-semibold' />
                                    </Link>
                                    <Link to='https://www.facebook.com/profile.php?id=61556208665332&mibextid=ZbWKwL' target='_blank' >
                                        <TbBrandFacebook className='text-3xl text-orange-10 font-semibold' />
                                    </Link>
                                    <Link to='https://www.linkedin.com/in/dr-uday-kiran-472733192/' target='_blank' >
                                        <FaLinkedinIn className='text-3xl text-orange-10 font-semibold' />
                                    </Link>
                                </div>
                            </animated.aside>
                        </div>
                    </>

                    {/* clients */}
                    <section className="mx-auto my-auto grid grid-cols-1 md:grid-cols-3 px-1 md:px-4">
                        {/* <img
                    src="https://firebasestorage.googleapis.com/v0/b/brandladder-webapp.appspot.com/o/general%2Fabout-4.jpg?alt=media&token=3f0924f0-7f36-4522-8241-73f3afe42c26"
                    alt="BrandLadder"
                    className='min-w-full rounded'
                    loading='lazy'
                /> */}
                        <div className='hidden lg:block lg:col-span-1 space-y-4 text-center md:text-right px-2'>
                            <h1 className='text-black text-3xl font-semibold'>
                                Happy <span className='text-orange-8'> Clients !!</span>
                            </h1>
                            <p className='text-sm'>
                                Explore our client roster! From startups to industry leaders, our diverse clientele reflects our commitment to delivering tailored solutions.

                            </p>
                        </div>
                        <div className='col-span-3 lg:col-span-2 rounded-[40px] lg:rounded-r-full bg-orange-1 lg:bg-gradient-to-r from-orange-2 to-transparent overflow-hidden items-center justify-center h-fit'>
                            <ClientsCarousel slides={clientsLogo} />
                        </div>
                    </section>

                    {renderTeamSection()}
                </div>

                <section>
                    <div className="bg-orange-3 px-4 py-8 md:px-16 md:py-12 shadow-2xl rounded-sm">
                        <ContactForm />
                    </div>
                </section>
            </Suspense>
        </motion.section>
    )
}

export default About
