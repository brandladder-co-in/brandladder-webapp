import React, { useState } from 'react';
import { motion } from "framer-motion";
import { animated } from 'react-spring';

import useBounceAnimation from '../../hooks/animations/useBounceAnimation';
import useFadeInDownAnimation from '../../hooks/animations/useFadeInDownAnimation'
import useSmoothScroll from '../../hooks/general/useSmoothScroll';

import ServiceSection from '../../components/sections/service'

import { techServices, digitalServices, caServices } from '../../.data/servicelist';

const Services = () => {
    useSmoothScroll();

    const [searchQuery, setSearchQuery] = useState('');
    const [selectedOption, setSelectedOption] = useState('All');

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

    return (
        <motion.div {...bounceAnimationProps} className='p-5 bg-orange-2'>
            {/* searchbar */}
            <animated.section className='my-5 navbar-floating z-30 top-14' ref={fadeInDownRef} style={fadeInDown}>
                <div className='py-1 px-2 border-2 mx-auto border-orange-6 bg-orange-2 max-w-xl flex flex-col md:flex-row justify-center items-center rounded-3xl'>
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
        </motion.div>
    )
}

export default Services;
