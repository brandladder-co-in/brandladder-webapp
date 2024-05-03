import React from 'react';
import { FaArrowRightLong } from "react-icons/fa6";
import PreojectModal from '../../modal/project';

const ProjectCard = ({ img, title, desc, subtitle, type, insta, website }) => {
    return (

        img && (
            <div className="card card-image-cover bg-inherit h-96  hover:relative hover:bottom-2 transition-all duration-700">
                <div className='rounded-md h-56 w-full overflow-y-hidden flex justify-center items-center'>
                    <img
                        src={img}
                        className='w-full h-full'
                        loading='lazy' alt={title} />
                </div>
                <div className="card-body grid grid-cols-3">
                    <div className='col-span-2'>
                        <h2 className="card-header text-lg">{title}</h2>
                        {
                            subtitle && (
                                <p className="text-content2 text-sm">{subtitle}</p>
                            )
                        }
                        <span className="badge badge-outline border-orange-5 text-orange-5">{type}</span>
                    </div>
                    <div className="col-span-1 flex justify-center items-center">
                        <label className="btn bg-inherit text-orange-5 text-2xl font-bold rounded-full p-4 transform duration-300 -rotate-45 hover:rotate-0 transition-transform" htmlFor={`productModal-${title}`}>
                            <FaArrowRightLong />
                        </label>
                    </div>
                </div>
                <PreojectModal title={title} logo={img} desc={desc} subtitle={subtitle} type={type} insta={insta} website={website} />
            </div>
        )
    )
}

export default ProjectCard
