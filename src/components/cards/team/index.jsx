import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import { FaLinkedinIn } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa6';
import { TbBrandFacebook } from 'react-icons/tb';
import { MdOutlineMailOutline } from 'react-icons/md';
import { BsTwitterX } from 'react-icons/bs';

import useFadeInUpAnimation from '../../../hooks/animations/useFadeInUpAnimation';

const TeamCard = ({ image, name, designation, twitterLink, emailLink, instaLink, facebookLink, linkedinLink }) => {

    const [fadeInUpRef, fadeInUp] = useFadeInUpAnimation();

    const handleEmailClick = () => {
        window.location.href = `mailto:${emailLink}`;
    };

    return (
        <motion.div className="card p-6 bg-inherit shadow-none" style={fadeInUp} ref={fadeInUpRef} >
            <div className="card-content">
                <div className="grid grid-cols-5 gap-0">
                    <div className="w-full h-64 md:h-80 col-span-4 overflow-hidden image-container">
                        <img src={image} alt={name} loading="lazy" className="h-full w-full" />
                    </div>
                    <div className="col-span-1 flex flex-row">
                        <div className="flex flex-col justify-end items-end">
                            <div className="divider divider-vertical h-20 m-0"></div>
                        </div>
                        <div className="flex flex-col justify-end items-start space-y-4">
                            {twitterLink && (
                                <Link to={twitterLink} className="text-gray-500 shadow-2xl transition-all ease-in-out duration-300 hover:text-gray-800" target='_blank'>
                                    <BsTwitterX />
                                </Link>
                            )}
                            {emailLink && (
                                <button onClick={handleEmailClick} className="text-gray-500 shadow-2xl transition-all ease-in-out duration-300 hover:text-gray-800" target='_blank'>
                                    <MdOutlineMailOutline />
                                </button>
                            )}
                            {instaLink && (
                                <Link to={instaLink} className="text-gray-500 shadow-2xl transition-all ease-in-out duration-300 hover:text-gray-800" target='_blank'>
                                    <FaInstagram />
                                </Link>
                            )}
                            {facebookLink && (
                                <Link to={facebookLink} className="text-gray-500 shadow-2xl transition-all ease-in-out duration-300 hover:text-gray-800" target='_blank'>
                                    <TbBrandFacebook />
                                </Link>
                            )}
                            {linkedinLink && (
                                <Link to={linkedinLink} className="text-gray-500 shadow-2xl transition-all ease-in-out duration-300 hover:text-gray-800" target='_blank'>
                                    <FaLinkedinIn />
                                </Link>
                            )}
                        </div>
                    </div>
                </div>
                <div>
                    <p className="text-black">{name}</p>
                    <small className="text-black">{designation}</small>
                </div>
            </div>
        </motion.div>
    );
};

export default TeamCard;
