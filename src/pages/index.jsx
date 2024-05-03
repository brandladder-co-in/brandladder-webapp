import React, { useEffect, lazy, Suspense } from 'react';
import { motion } from "framer-motion";

import useBounceAnimation from '../hooks/animations/useBounceAnimation';
import useSmoothScroll from '../hooks/general/useSmoothScroll';
import { useFirestore } from '../context/FirestoreContext';
import { useAuth } from '../context/AuthContext'
// import { clientsLogo } from '../.data/clients';

import Loader from '../components/loader';
import HelmetComponent from '../helmet';

const HomeHeroSection = lazy(() => import('../components/sections/hero/home'));
// const ClientsCarousel = lazy(() => import('../components/carousel/clients-carousel'));
const Pricing = lazy(() => import('../components/sections/pricing'));
const HomeAboutSection = lazy(() => import('../components/sections/about/home'));
const ContactForm = lazy(() => import('../components/form/contact'));


const Home = () => {
    useSmoothScroll();

    const { currentUser } = useAuth()
    const { uploadUserData } = useFirestore()
    const bounceAnimationProps = useBounceAnimation();

    // const testemonialList = [
    //     {
    //         image: Img,
    //         name: 'BrandLadder',
    //         designation: 'CEO and Founder',
    //         content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum exercitationem ipsa in orem ipsum dolor sit amet consectetur adipisicing elit. Eum exercitationem ipsa in orem ipsum dolor sit amet consectetur adipisicing elit. Eum exercitationem ipsa in tempora. Tenetur corrupti autem modi labore dolor. Debitis, nesciunt'
    //     },
    //     {
    //         image: Img,
    //         name: 'BrandLadder',
    //         designation: 'CEO and Founder',
    //         content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum exercitationem ipsa in tempora. Tenetur corrupti autem modi labore dolor. Debitis, nesciunorem ipsum dolor sit amet consectetur adipisicing elit. Eum exercitationem ipsa in orem ipsum dolor sit amet consectetur adipisicing elit. Eum exercitationem ipsa in t'
    //     },
    //     {
    //         image: Img,
    //         name: 'BrandLadder',
    //         designation: 'CEO and Founder',
    //         content: 'Loreorem ipsum dolor sit amet consectetur adipisicing elit. Eum exercitationem ipsa in orem ipsum dolor sit amet consectetur adipisicing elit. Eum exercitationem ipsa in m ipsum dolor sit amet consectetur adipisicing elit. Eum exercitationem ipsa in tempora. Tenetur corrupti autem modi labore dolor. Debitis, nesciunt'
    //     },
    //     {
    //         image: Img,
    //         name: 'BrandLadder',
    //         designation: 'CEO and Founder',
    //         content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum exercorem ipsum dolor sit amet consectetur adipisicing elit. Eum exercitationem ipsa in orem ipsum dolor sit amet consectetur adipisicing elit. Eum exercitationem ipsa in itationem ipsa in tempora. Tenetur corrupti autem modi labore dolor. Debitis, nesciunt'
    //     },
    //     {
    //         image: Img,
    //         name: 'BrandLadder',
    //         designation: 'CEO and Founder',
    //         content: 'orem ipsum dolor sit amet consectetur adipisicing elit. Eum exercitationem ipsa in orem ipsum dolor sit amet consectetur adipisicing elit. Eum exercitationem ipsa in Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum exercitationem ipsa in tempora. Tenetur corrupti autem modi labore dolor. Debitis, nesciunt'
    //     },
    //     {
    //         image: Img,
    //         name: 'BrandLadder',
    //         designation: 'CEO and Founder',
    //         content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eorem ipsum dolor sit amet consectetur adipisicing elit. Eum exercitationem ipsa in orem ipsum dolor sit amet consectetur adipisicing elit. Eum exercitationem ipsa in um exercitationem ipsa in tempora. Tenetur corrupti autem modi labore dolor. Debitis, nesciunt'
    //     },
    // ]

    useEffect(() => {
        const userData = JSON.parse(localStorage.getItem('userData'));

        const handleUplaodUserData = async () => {
            if (userData && currentUser !== null) {
                try {
                    await uploadUserData('users', currentUser.uid, userData);
                    localStorage.removeItem('userData');
                } catch (error) {
                    console.error("error while uploading user data: ", error)
                }
            }
        }

        handleUplaodUserData();

    }, [currentUser, uploadUserData])

    return (
        <Suspense fallback={<Loader />}>
            <HelmetComponent
                title='Home'
                desc=' Brand Ladder is a globally recognized digital marketing agency in Hyderabad, India, offering a comprehensive suite of services including SEO, PPC, social media marketing, UI/UX design, web development, CA services, CS, ROC, PAN/TAN, DSC, Payroll, MSME registrations, Auditing, FSSAI license, Labour License, and more. Partner with us to drive exceptional results for your business.'
                author='Anurag Kumar'
                keywords={['Brand Ladder', 'BrandLadder - Elevate Your Branding Strategy', 'Digital Marketing Agency', 'IT Servics and Consultancy', 'CA Services', 'Brandladder']}
                focusKeywords={['Brand Ladder', 'BrandLadder - Elevate Your Branding Strategy', 'Digital Marketing Agency', 'IT Servics and Consultancy', 'CA Services', 'Brandladder']}
            />
            <motion.div {...bounceAnimationProps} >

                <section className="bg-orange-2 p-4 md:p-10">
                    <HomeHeroSection currentUser={currentUser} />
                </section>

                {/* <section className='border-2 bg-white shadow rounded-full overflow-hidden my-10'>
                    <ClientsCarousel slides={clientsLogo} />
                </section> */}

                <section className='px-2 md:px-14 pt-10 bg-orange-1'>
                    <HomeAboutSection />
                </section>

                <section className=''>
                    <div className="w-full h-20 md:h-32 bg-orange-2 rounded-tl-full rounded-tr-lg"></div>
                    <Pricing />
                </section>

                <section>
                    <div className="bg-orange-3 px-4 py-8 md:px-16 md:py-12 shadow-2xl rounded-sm">
                        <ContactForm />
                    </div>
                </section>

                {/* <section className='my-5'>
                <PageHeader
                    title='Trusted by all'
                    subtitle='Trusted by 21 million customer around the world'
                    section={true}
                />
                <div className="my-5">
                    <TestemonialCarousel testemonialList={testemonialList} />
                    </div>
                    </section>
                    
                    <section className='my-10 px-10'>
                    <PageHeader
                    title='Blogs'
                    section={true}
                />
                <div className="my-5">
                    <div className="grid lg:grid-cols-4 gap-4">
                        <div>
                            <BlogCard
                                image={Img}
                                domain='Test Blog'
                                topic='Text Blog'
                                content='Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum exercitationem ipsa in tempora. Tenetur corrupti autem modi labore dolor.'
                                link='/insight'
                            />
                        </div>
                        <div>
                            <BlogCard
                                image={Img}
                                domain='Test Blog'
                                topic='Text Blog'
                                content='Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum exercitationem ipsa in tempora. Tenetur corrupti autem modi labore dolor.'
                                link='/insight'
                            />
                        </div>
                    </div>
                </div>
            </section> */}
            </motion.div >
        </Suspense>
    )
}

export default Home
