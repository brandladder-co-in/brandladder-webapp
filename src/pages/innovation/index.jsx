import React, { lazy, Suspense } from 'react';
import { motion } from "framer-motion";

import HelmetComponent from '../../helmet';

import useBounceAnimation from '../../hooks/animations/useBounceAnimation';
import useSmoothScroll from '../../hooks/general/useSmoothScroll';

import Loader from '../../components/loader';
const InnovationSection = lazy(() => import('../../components/sections/products/innovations'));
const ContactForm = lazy(() => import('../../components/form/contact'));
const PageHeader = lazy(() => import('../../components/headers/page-header'));

const Innovations = () => {
    useSmoothScroll();

    const bounceAnimationProps = useBounceAnimation();

    return (
        <Suspense fallback={<Loader />} >
            <motion.div {...bounceAnimationProps}>
                <HelmetComponent
                    title='Innovations'
                    desc='BrandLadder is the leading provider of integrated digital marketing services in Hyderabad. Our offerings encompass SEO, SEM, social media marketing, email marketing, CA services, CS, ROC, PAN/TAN, DSC, Payroll, MSME registrations, Auditing, FSSAI license, Labour License, and more. Elevate your online presence with our strategic solutions tailored to your business needs.'
                    author='Anurag Kumar '
                    page='pricing'
                    keywords={['BrandLadder Services - Enhance Your Branding Efforts', 'Digital Marketing Agency in Hyderabad', ' brand ladder']}
                    focusKeywords={['BrandLadder Services - Enhance Your Branding Efforts', 'Digital Marketing Agency in Hyderabad', ' brand ladder']}
                />
                <PageHeader
                    title='Innovation'
                    subtitle='Team Brandladder not only delivers exceptional services in tech and marketing but also innovates unique products that benefit humanity.'
                />

                <InnovationSection />

                <section>
                    <div className="bg-orange-3 px-4 py-8 md:px-16 md:py-12 shadow-2xl rounded-sm">
                        <ContactForm />
                    </div>
                </section>
            </motion.div>

        </Suspense>
    )
}

export default Innovations
