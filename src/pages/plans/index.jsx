import React, { lazy, Suspense } from 'react';
import Snowfall from 'react-snowfall';
import { motion } from "framer-motion";

import HelmetComponent from '../../helmet'
import useBounceAnimation from '../../hooks/animations/useBounceAnimation';
import useSmoothScroll from '../../hooks/general/useSmoothScroll'

import Loader from '../../components/loader';
const Pricing = lazy(() => import('../../components/sections/pricing'));
const ContactForm = lazy(() => import('../../components/form/contact'));

const Plans = () => {
    useSmoothScroll();

    const bounceAnimationProps = useBounceAnimation();

    return (
        <Suspense fallback={<Loader />}>
            <HelmetComponent
                title='Exclusive Plans'
                desc='BrandLadder is the leading provider of integrated digital marketing services in Hyderabad. Our offerings encompass SEO, SEM, social media marketing, email marketing, CA services, CS, ROC, PAN/TAN, DSC, Payroll, MSME registrations, Auditing, FSSAI license, Labour License, and more. Elevate your online presence with our strategic solutions tailored to your business needs.'
                author='Anurag Kumar '
                page='pricing'
                keywords={['BrandLadder Services - Enhance Your Branding Efforts', 'Digital Marketing Agency in Hyderabad', ' brand ladder']}
                focusKeywords={['BrandLadder Services - Enhance Your Branding Efforts', 'Digital Marketing Agency in Hyderabad', ' brand ladder']}
            />
            <motion.section {...bounceAnimationProps} className='bg-gradient-to-br from-orange-1 from-15% via-orange-2 to-orange-1 to-65% relative'>
                <Pricing />
                <section>
                    <div className="bg-orange-3 px-4 py-8 md:px-16 md:py-12 shadow-2xl rounded-sm">
                        <ContactForm />
                    </div>
                </section>
                <Snowfall
                    color='#ffb8bb'
                    snowflakeCount={20}
                    radius={[0.5, 20]}
                    speed={[0.5, 3]}
                    wind={[-0.5, 0.5]}
                    className="absolute top-0 left-0 w-full h-full opacity-80 shadow-2xl"
                />
            </motion.section>
        </Suspense>
    )
}

export default Plans
