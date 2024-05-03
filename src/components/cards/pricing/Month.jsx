import React from 'react';
// import PropTypes from 'prop-types';

import SelectPlanModal from '../../modal/selectPlan';
import useEmailAuth from '../../../hooks/auth/useEmailAuth';
import useUserDocIDSearch from '../../../hooks/general/useUserDocIDSearch.js';

import { GoDotFill } from "react-icons/go";
import { FaRegDotCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';

export const PricingCard = ({ planType, monthlyPrice, usdPrice, featureList, prime = false }) => {

    const { currentUser } = useEmailAuth();

    const { isPresent } = useUserDocIDSearch();

    return (
        <div className="mx-auto">
            <div className={`divide-y rounded-2xl shadow-xl border transition duration-500 ease-in-out  hover:border-none hover:shadow-2xl p-6 ${prime ? 'bg-orange-4 border-orange-3' : 'bg-orange-2 border-orange-3'}`}>
                <div className="my-2">
                    <h2 className="text-xl font-semibold flex">
                        <FaRegDotCircle className='my-auto mx-1' />
                        {planType}
                    </h2>
                    <p className="my-2 text-2xl">
                        <strong className=""> Rs {monthlyPrice} </strong>
                        <span className="text-sm font-medium text-gray-700">/month</span>
                    </p>
                    <p className="my-2 text-xl">
                        <strong className=""> $ {usdPrice} </strong>
                        <span className="text-sm font-medium text-gray-700">/month</span>
                    </p>

                    <div className="w-full">
                        {currentUser ? (
                            <label
                                className="btn w-full rounded-3xl bg-orange-5 px-12 py-3 text-center font-semibold text-black transition duration-300 ease-in-out hover:shadow-lg hover:bg-orange-8 hover:text-black my-3"
                                htmlFor={`modal-${planType}`}
                            >
                                Get Plan
                            </label>
                        ) : (
                            <Link to='/login'>
                                <button
                                    className="w-full rounded-3xl bg-orange-5 px-12 py-3 text-center font-semibold text-black transition duration-300 ease-in-out hover:shadow-lg hover:bg-orange-8 hover:text-black my-3"
                                >
                                    Sign in To Get Plan
                                </button>
                            </Link>
                        )}
                    </div>

                </div>
                <SelectPlanModal title={planType} isPresent={isPresent} />

                <div className="my-2">
                    <p className="text-lg font-medium  sm:text-xl">What's included:</p>

                    <ul className="space-y-2">
                        {
                            featureList?.map((data, index) => {
                                return (
                                    <li className="flex items-center gap-1" key={index}>
                                        <GoDotFill />
                                        <span className={prime ? 'text-black' : 'text-gray-700'}> {data} </span>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </div >
    );
};

// PricingCard.propTypes = {
//     planType: PropTypes.string.isRequired,
//     monthlyPrice: PropTypes.string.isRequired,
//     featureList: PropTypes.array.isRequired,
//     prime: PropTypes.bool.isRequired,
// }

export default PricingCard;
