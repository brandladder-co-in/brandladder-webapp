import React from 'react'
import { motion } from "framer-motion";

import useBounceAnimation from '../../hooks/animations/useBounceAnimation';
import useSmoothScroll from '../../hooks/general/useSmoothScroll'

import { MdOutlinePhone } from "react-icons/md";
import { IoMailOutline } from "react-icons/io5";

import HelmetComponent from '../../helmet';
import ContactForm from '../../components/form/contact';

const Contact = () => {
    useSmoothScroll();

    const bounceAnimationProps = useBounceAnimation();

    return (
        <motion.section {...bounceAnimationProps} className='bg-gradient-to-b from-orange-2 to-orange-1 py-4 p-2 md:p-10'>

            <HelmetComponent
                title='Contact Us'
                desc='Contact Brand Ladder, the expert digital marketing agency in Hyderabad, India, for all your branding needs. Whether you require SEO, social media management, Google Ads, or assistance with CA services, CS, ROC, PAN/TAN, DSC, Payroll, MSME registrations, Auditing, FSSAI license, Labour License, our dedicated team is here to assist you. Reach out to us today and take your brand to new heights.'
                page='contact'
                keywords={['Contact BrandLadder - Get in Touch for Branding Solutions', 'Digital Marketing Agency', 'Anurag Kumar Technical Director At BrandLadder', 'anuragkmr45']}
                focusKeywords={['Contact BrandLadder - Get in Touch for Branding Solutions', 'Digital Marketing Agency', 'Anurag Kumar Technical Director At BrandLadder', 'anuragkmr45', 'Contact Brand Ladder ', 'brand ladder']}
            />

            <h2 className='my-4'>..... Get In Touch</h2>
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
                {/* <div className="flex flex-col-reverse md:flex-col lg:flex-row justify-evenly space-y-6"> */}
                <aside className='mx-auto col-span-2 w-full'>

                    <img
                        src="https://firebasestorage.googleapis.com/v0/b/brandladder-webapp.appspot.com/o/gifs%2FMap%20GIF.gif?alt=media&token=6b076312-8f89-448b-9f16-c05899b22b0c"
                        alt="BrandLadder"
                        className='mb-5 rounded-lg hidden w-0 lg:block lg:w-full'
                        loading='lazy'
                    />
                    <div className="flex flex-col space-y-4 justify-between rounded-xl p-10 bg-orange-2 shadow-md">
                        <aside className='grid grid-cols-5 gap-4'>
                            <IoMailOutline className='text-5xl col-span-2 text-center mx-auto' />
                            <div className="flex flex-col text-black col-span-3">
                                <h3 className='text-xl font-medium'>Email</h3>
                                <small>info@brandladder.co.in</small>
                            </div>
                        </aside>
                        <aside className='grid grid-cols-5 gap-4'>
                            <MdOutlinePhone className='text-5xl col-span-2 mx-auto' />
                            <div className="flex flex-col text-black col-span-3">
                                <h3 className='text-xl font-medium'>Contact No.</h3>
                                <small>+91 9391523930</small>
                            </div>
                        </aside>
                    </div>
                </aside>
                <aside className='bg-orange-2 shadow-md p-4 md:p-10 rounded-xl mx-auto col-span-3 space-y-10'>
                    <ContactForm />
                </aside>
            </div>
        </motion.section>
    )
}

export default Contact
