import React from 'react';
// import PropTypes from 'prop-types';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const FeatureCard = ({ icon, count, text }) => {
    const [ref, inView] = useInView({
        triggerOnce: true,
    });

    return (
        <div className={`card bg-orange-3 rounded text-black mx-auto group transform ease-in-out transition-transform duration-500 hover:scale-105 hover:bg-orange-4 cursor-pointer ${inView ? 'in-view' : ''}`} ref={ref}>
            <div className="card-body px-2 py-4 text-center">
                <div>
                    <span className="badge badge-xl bg-orange-2 border-none text-black text-3xl">
                        {icon}
                    </span>
                </div>
                <h2 className="card-header mx-auto font-bold text-orange-9">
                    {inView && <CountUp start={0} end={count} duration={4} />}
                    {' +'}
                </h2>
                <p className="text-black font-normal md:font-semibold text-orange-7">{text}</p>
            </div>
        </div>
    );
};

// FeatureCard.propTypes = {
//     count: PropTypes.number.isRequired,
//     text: PropTypes.string.isRequired,
// };

export default FeatureCard;
