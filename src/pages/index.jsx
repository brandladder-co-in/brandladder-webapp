import { useEffect, lazy, Suspense, useMemo, useCallback } from 'react';
import { motion } from "framer-motion";

import useBounceAnimation from '../hooks/animations/useBounceAnimation';
import useSmoothScroll from '../hooks/general/useSmoothScroll';
import { useFirestore } from '../context/FirestoreContext';
import { useAuth } from '../context/AuthContext';

import Loader from '../components/loader';
import HelmetComponent from '../helmet';
import HomeHeroSection from '../components/sections/home/home-hero';
import HomeAboutSection from '../components/sections/home/about';

const PageHeader = lazy(() => import('../components/headers/page-header'));
const Pricing = lazy(() => import('../components/sections/pricing'));
const InnovationSection = lazy(() => import('../components/sections/products/innovations'));
const ContactForm = lazy(() => import('../components/form/contact'));

const Home = () => {
    useSmoothScroll();

    const { currentUser } = useAuth()
    const { uploadUserData } = useFirestore()
    const bounceAnimationProps = useBounceAnimation();

    const userData = useMemo(() => JSON.parse(localStorage.getItem('userData')), []);

    const handleUploadUserData = useCallback(async () => {
        if (userData && currentUser !== null) {
            try {
                await uploadUserData('users', currentUser.uid, userData);
                localStorage.removeItem('userData');
            } catch (error) {
                console.error("error while uploading user data: ", error);
            }
        }
    }, [currentUser, uploadUserData, userData]);

    useEffect(() => {

        handleUploadUserData();

    }, [handleUploadUserData])

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

                <section className="bg-gradient-to-br from-orange-2 from-15% via-orange-1 to-white to-75% p-4 md:p-10">
                    <HomeHeroSection currentUser={currentUser} />
                </section>

                <section className='px-2 md:px-14 pt-10 bg-orange-1'>
                    <HomeAboutSection />
                </section>

                <section className='bg-gradient-to-br from-orange-1 from-5% via-orange-2 to-orange-2 to-75% rounded-tl-3xl'>
                    {/* <div className="w-full h-20 md:h-32 bg-orange-2 rounded-tl-full rounded-tr-lg" /> */}
                    <Pricing />
                </section>

                <section>
                    <PageHeader title="Brandladder's Innovative Solutions" section={true} />
                    <InnovationSection />
                </section>

                <section>
                    <div className="bg-gradient-to-b from-orange-1 via-orange-2 to-orange-3 px-4 py-8 md:px-16 md:py-12 shadow-2xl rounded-sm">
                        <ContactForm />
                    </div>
                </section>
            </motion.div >
        </Suspense>
    )
}

export default Home
