import { Link } from 'react-router-dom';
import { FaArrowRightLong } from "react-icons/fa6";

import LazyLoadImg from '../../lazy-loading/img/LazyLoadImage';

const ImageCard = ({ imageSrc, date, domain, title, link, largecard = false }) => {

    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'short', day: 'numeric' };
        return new Date(dateString).toLocaleDateString('en-US', options);
    };

    const truncatedTitle = title.length > 64 ? title.substring(0, 64) + '...' : title;

    return (
        <div className="relative overflow-hidden shadow-lg rounded-3xl bg-orange-1 w-full">
            <div className={`overflow-hidden ${largecard && ('md:h-[32rem]')}`}>
                <LazyLoadImg src={imageSrc} alt={title} className="h-80 md:h-full w-full" />
            </div>

            <div className="absolute top-0 left-0 p-4 text-white">
                <span className={`badge badge-sm my-0 md:my-2 border-orange-4  bg-white text-orange-7 shadow-2xl ${largecard && ('md:badge-xl ')}`}>
                    {formatDate(date)}
                </span> <br />
                <span className={`badge badge-xs my-2 bg-inherit border-orange-4 text-orange-7 shadow-2xl ${largecard && ('md:badge-lg')} `}>
                    {domain}
                </span>
            </div>

            <div className="absolute bottom-0 w-full p-4 ">
                <div className="flex justify-between space-y-2">
                    <p className={` bg-white text-orange-9 rounded-3xl px-2 md:px-3 py-2 md:py-2 mx-auto shadow-2xl text-center ${largecard ? ('text-xs md:text-lg font-normal md:font-semibold') : ('text-xs')}`}>
                        {truncatedTitle}
                    </p>
                    <Link to={link}>
                        <p className='bg-white font-bold text-orange-9 rounded-full p-4 transform duration-300 -rotate-45 hover:rotate-0 transition-transform hover:bg-orange-5 hover:text-white hover:shadow-2xl'>
                            <FaArrowRightLong />
                        </p>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ImageCard;
