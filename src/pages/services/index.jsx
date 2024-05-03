import React, { useState, useEffect, Suspense, lazy } from 'react';
import { motion } from "framer-motion";
import { animated } from 'react-spring';

import useBounceAnimation from '../../hooks/animations/useBounceAnimation';
import useFadeInDownAnimation from '../../hooks/animations/useFadeInDownAnimation'
import useSmoothScroll from '../../hooks/general/useSmoothScroll';

import Loader from '../../components/loader';
import HelmetComponent from '../../helmet';

import { techServices, digitalServices, caServices } from '../../.data/servicelist';

const ContactForm = lazy(() => import('../../components/form/contact'));
const ServiceSection = lazy(() => import('../../components/sections/service'));

const Services = () => {
    useSmoothScroll();

    const [searchQuery, setSearchQuery] = useState('');
    const [selectedOption, setSelectedOption] = useState('All');
    const [maxWidth, setMaxWidth] = useState('max-w-xl');

    const [fadeInDownRef, fadeInDown] = useFadeInDownAnimation()
    const bounceAnimationProps = useBounceAnimation();

    const handleInputChange = (event) => {
        setSearchQuery(event.target.value);
    };

    let serviceList;
    let sectionTitle;
    switch (selectedOption) {
        case 'Technical':
            serviceList = techServices;
            sectionTitle = 'Technical Services';
            break;
        case 'Digital':
            serviceList = digitalServices;
            sectionTitle = 'Digital Services';
            break;
        case 'CA & Registration':
            serviceList = caServices;
            sectionTitle = 'CA & Registration Services';
            break;
        default:
            serviceList = [...techServices, ...digitalServices, ...caServices];
            sectionTitle = '';
            break;
    }

    const filteredServices = serviceList.filter(service =>
        service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.desc.toLowerCase().includes(searchQuery.toLowerCase())
    );

    useEffect(() => {
        const handleScroll = () => {
            if (window.pageYOffset > 100) {
                setMaxWidth('max-w-4xl');
            } else {
                setMaxWidth('max-w-xl');
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <Suspense fallback={<Loader />}>
            <motion.div {...bounceAnimationProps} className='p-5 bg-orange-2'>
                <HelmetComponent
                    title='Services'
                    desc='Brand Ladder is the leading provider of integrated digital marketing services in Hyderabad. Our offerings encompass SEO, SEM, social media marketing, email marketing, CA services, CS, ROC, PAN/TAN, DSC, Payroll, MSME registrations, Auditing, FSSAI license, Labour License, and more. Elevate your online presence with our strategic solutions tailored to your business needs.'
                    author='anuragkmr45, Anurag Kumar Technical Direector'
                    page='services'
                    keywords={['BrandLadder Services - Enhance Your Branding Efforts', 'Digital Marketing Agency in Hyderabad', ' brand ladder']}
                    focusKeywords={['BrandLadder Services - Enhance Your Branding Efforts', 'Digital Marketing Agency in Hyderabad', ' brand ladder']}
                />
                {/* searchbar */}
                <animated.section className='my-5 navbar-floating z-20 top-14' ref={fadeInDownRef} style={fadeInDown}>
                    <div className={`py-1 px-2 border-2 mx-auto border-orange-6 bg-orange-2 ${maxWidth} flex flex-col md:flex-row justify-center items-center rounded-3xl transition-all duration-500`}>
                        <select
                            className="select border-none max-w-56 text-orange-6 bg-inherit mx-auto text-center"
                            value={selectedOption}
                            onChange={(e) => setSelectedOption(e.target.value)}
                        >
                            <option value="All">All</option>
                            <option value="Technical">Technical</option>
                            <option value="Digital">Digital</option>
                            <option value="CA & Registration">CA & Registration</option>
                        </select>
                        <div className="text-orange-6 hidden md:block text-2xl">|</div>
                        <input
                            type="text"
                            placeholder="Type here service you are looking for..."
                            value={searchQuery}
                            onChange={handleInputChange}
                            className="px-4 py-2 rounded-l-md border-none focus:outline-none focus:ring bg-inherit w-full text-orange-8"
                        />
                    </div>
                </animated.section>

                <div className="my-16">
                    <ServiceSection serviceList={filteredServices} sectionTitle={sectionTitle} />
                </div>

                <section>
                    <div className="bg-orange-3 px-4 py-8 md:px-16 md:py-12 shadow-2xl rounded-sm">
                        <ContactForm />
                    </div>
                </section>
            </motion.div>
        </Suspense>
    )
}

export default Services;
