import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import SelectPlan from '../../../components/modal/selectPlan'
import useEmailAuth from '../../../hooks/auth/useEmailAuth'
import useUserDocIDSearch from '../../../hooks/general/useUserDocIDSearch'

const ServiceCard = ({ image, title, desc, pricing, trending = false }) => {

  const { currentUser } = useEmailAuth();
  const { isPresent } = useUserDocIDSearch();

  const descWords = desc.split(' ');
  const truncatedDesc = descWords.slice(0, 20).join(' ');

  return (
    <div className={`card py-8 px-3 ${trending ? 'bg-orange-4' : 'bg-orange-3'}`}>
      <div className="overflow-hidden w-full h-80" >
        <img src={image} alt={title} loading='lazy' className='h-full w-full my-auto mx-auto' />
      </div>
      <div className="card-body p-0">
        <h2 className="card-header text-gray-600 text-sm">
          {title}
          {
            trending && (
              <span className="badge badge-outline border-orange-10 text-orange-10">
                Trending
              </span>
            )
          }

        </h2>
        <p className="text-black text-xs">
          {truncatedDesc}
          {/* <span className='link link-primary text-xs'>Read More ... </span> */}
        </p>
        <h3>{pricing}</h3>
        <div className="card-footer">
          {
            currentUser ? (
              <label
                htmlFor={`modal-${title}`}
                className="btn btn-outline bg-inherit border-orange-6 text-black shadow-md transition-all ease-in-out duration-500 hover:bg-orange-6 hover:text-orange-2 hover:shadow-2xl hover:border-orange-6 w-full">
                Get Plan
              </label>
            ) : (
              <Link to='/signup' className='w-full'>
                <button
                  className="btn btn-outline bg-inherit border-orange-6 text-black shadow-md transition-all ease-in-out duration-500 hover:bg-orange-6 hover:text-orange-2 hover:shadow-2xl hover:border-orange-6 w-full">
                  SignIn To Select Plan
                </button>
              </Link>
            )
          }
          <SelectPlan title={title} isPresent={isPresent} />
        </div>
      </div>
    </div>
  )
}

ServiceCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  pricing: PropTypes.number,
}

export default ServiceCard;