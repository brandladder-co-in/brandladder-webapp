import React from 'react';
// import PropTypes from 'prop-types';

import ServiceCard from '../../cards/service';
// import OutlineButton from '../../buttons/outline';

const ServiceSection = ({ serviceList, sectionTitle }) => {
    return (
        <>
            {
                serviceList !== null && (
                    <>
                        <div className="mx-auto md:mr-auto mt-28 mb-8">
                            <h2 className='text-black text-3xl font-semibold' >
                                {sectionTitle}
                            </h2>
                            {/* <div className='max-w-sm'>
                                <OutlineButton text='See all' />
                            </div> */}
                        </div>
                        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10">
                            {
                                serviceList.map((data, index) => {
                                    return (
                                        <ServiceCard
                                            key={index}
                                            image={data.img}
                                            title={data.title}
                                            desc={data.desc}
                                            pricing={data.price}
                                            trending={data.trending}
                                        />
                                    )
                                })
                            }
                        </div>
                    </>
                )
            }
        </>
    )
}

// ServiceSection.propTypes = {
//     serviceList: PropTypes.array.isRequired,
//     sectionTitle: PropTypes.string.isRequired
// }

export default ServiceSection
