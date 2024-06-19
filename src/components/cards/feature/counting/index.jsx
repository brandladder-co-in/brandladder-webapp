import { lazy } from 'react';
import { useInView } from 'react-intersection-observer';

import LazyLoadImg from '../../../../components/lazy-loading/img/LazyLoadImage';
const CountUp = lazy(() => import('react-countup'));

const FeatureCard = ({ icon, count, text }) => {

    const [ref, inView] = useInView({
        triggerOnce: true,
    });

    return (
        <div className={`card bg-orange-3 rounded text-black mx-auto group transform ease-in-out transition-transform duration-500 hover:scale-105 hover:bg-orange-4 cursor-pointer ${inView ? 'in-view' : ''}`} ref={ref}>
            <div className="card-body px-2 py-4 text-center">
                <div className='mx-auto '>
                    <span className="badge badge-xl bg-orange-2 border-none text-black text-3xl">
                        <LazyLoadImg
                            src={icon}
                            alt="brandladder"
                            className='rounded-lg w-10 h-10 md:w-16 md:h-16 mx-auto'
                        />
                    </span>
                </div>
                <h2 className="card-header mx-auto font-bold text-orange-9">
                    {inView && <CountUp start={0} end={count} duration={4} />}
                    {' +'}
                </h2>
                <p className="text-black font-semibold">{text}</p>
            </div>
        </div>
    );
};

export default FeatureCard;
