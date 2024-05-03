import React from 'react';

const ContentCard = ({ featureList }) => {
    return (
        <div className='card bg-orange-3'>
            <div className='card-body'>
                <div className="card-header flex flex-col justify-center items-center">
                    <div className='mb-4'>
                        <span>Packages</span>
                        <div className='border-2 rounded-xl border-orange-4 bg-orange-4' />
                    </div>
                    <h1 className='text-4xl'>Cost</h1>
                </div>
                <div className="text-content2">
                    <ul className='flex flex-col items-center justify-center'>
                        {
                            featureList?.map((data, index) => {
                                return (
                                    <li className='my-2 text-black' key={index}>
                                        {data}
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ContentCard
