import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import { FaLinkedinIn } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa6';
import { TbBrandFacebook } from 'react-icons/tb';
import { MdOutlineMailOutline } from 'react-icons/md';
import { BsTwitterX } from 'react-icons/bs';

import LazyLoadImg from '../../lazy-loading/img/LazyLoadImage';
import useFadeInUpAnimation from '../../../hooks/animations/useFadeInUpAnimation';

const TeamCard = ({ image, name, designation, about, twitterLink, emailLink, instaLink, facebookLink, linkedinLink }) => {

    const [fadeInUpRef, fadeInUp] = useFadeInUpAnimation();

    const handleEmailClick = () => {
        window.location.href = `mailto:${emailLink}`;
    };

    return (
        <motion.div className="card p-6 bg-inherit shadow-none" style={fadeInUp} ref={fadeInUpRef} >
            <div className="card-content">
                <div className="w-full h-64 md:h-80 px-6 overflow-hidden relative top-8 image-container">
                    <LazyLoadImg src={image} alt={name} className="h-full w-full rounded-lg " />
                </div>
                <div className='flex flex-col bg-orange-5 items-center space-y-4 pt-10 p-4 shadow rounded-lg justify-center'>
                    <div>
                        <p className="text-gray-950 font-medium">{name}</p>
                        <small className="text-gray-700">{designation}</small>
                    </div>
                    <div className="flex space-x-4 justify-center items-center w-full">
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
        </motion.div>
    );
};

export default TeamCard;
