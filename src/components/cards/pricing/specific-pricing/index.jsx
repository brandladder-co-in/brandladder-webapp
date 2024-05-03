import React, { useEffect, useState } from 'react';
import useUserLocation from '../../../../hooks/general/useUserLocation';
import fetchCurrency from '../../../../utils/currencyconvert';
import { currencySigns } from '../../../../.data/currency';

const SpecificPricing = ({ title, amount, featureList }) => {

    const [endAmount, setEndAmount] = useState();
    const [currencySign, setCurrencySign] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const userLocation = useUserLocation();

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const res = await fetchCurrency(userLocation);
                const intValue = parseInt(res, 10);
                // setCurrencyRate(intValue);

                const sign = await currencySigns[userLocation];
                setCurrencySign(sign);

                if (amount && intValue) {
                    setEndAmount(amount * intValue);
                }
            } catch (error) {
                console.error('Error fetching currency:', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, [amount, userLocation]);


    return (
        <div className='card bg-orange-1'>
            {
                isLoading ? (
                    <div className="skeleton-pulse h-full w-full" />
                ) : (
                    <div className='card-body'>
                        <div className="card-header flex flex-col justify-center items-center">
                            <div className='mb-4 space-y-1'>
                                <span>{title}</span>
                                <div className='border-2 rounded-xl border-orange-4 bg-orange-4' />
                            </div>
                            {
                                amount && (
                                    <h1 className='text-4xl'>{currencySign} {endAmount}</h1>
                                )
                            }
                        </div>
                        <div className="text-content2">
                            <ul className='flex flex-col items-center justify-center'>

                                {
                                    featureList?.map((data, index) => {
                                        return (
                                            <div className='h-full lg:h-10 w-full lg:w-fit flex space-x-2' key={index}>
                                                <span className="dot bg-orange-5 block lg:hidden my-auto" />
                                                <li className='my-1 text-black text-orange-7 text-sm lg:text-xl'>
                                                    {data}
                                                </li>
                                            </div>
                                        )
                                    })
                                }

                            </ul>
                        </div>
                    </div>

                )
            }
        </div>
    );
};

export default SpecificPricing;
