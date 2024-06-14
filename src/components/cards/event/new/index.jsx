import React, { useEffect } from 'react';
// import { Link } from 'react-router-dom';

import { FaArrowRight } from "react-icons/fa";

const NewEventCard = ({ date, title, img, orgDtls, eventType, desc }) => {


    const descWords = desc?.split(/\s+/);
    const shortenedDesc = descWords?.slice(0, 12).join(' ');

    return (
        <>
            <div className="card card-image-cover bg-inherit shadow-lg">
                {/* <small className='text-orange-10'>{date}</small> */}
                <aside className='bg-orange-1 rounded-2xl'>
                    <h2 className="card-header p-4 text-sm">{title}</h2>
                    <img src={img} alt={title} className='mx-auto' />
                    <div className="card-body">
                        <div className="flex justify-between">
                            <h3>By {orgDtls[0].name}</h3>
                            <p> <span className="dot dot-success"></span> {eventType} Session</p>
                        </div>
                        <small className="text-black">{shortenedDesc} ..... </small>
                        {/* <Link to={`/events/${title}`} > */}
                        <button
                            className="btn bg-orange-6 text-black shadow-md transition-all ease-in-out duration-500  hover:text-orange-1 hover:shadow-2xl hover:border-orange-6">
                            Enroll Now <FaArrowRight className='text-base mx-1' />
                        </button>
                        {/* </Link> */}
                    </div>
                </aside>
            </div>
        </>
    )
}

export default NewEventCard
