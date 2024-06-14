import React, { useState, lazy, useEffect } from 'react';

import useFadeInUpAnimation from '../../../hooks/animations/useFadeInUpAnimation';
import useLocationPermission from '../../../hooks/general/useLocationPermission';
import useUserLocation from '../../../hooks/general/useUserLocation';
import fetchCurrency from '../../../utils/currencyconvert';

import { digitalMarketingServicesList, seoServicesList, appServicesList, featureListStartUp, featureListPlatinum, featureListElete } from '../../../.data/plan-features';
import { currencySigns } from '../../../.data/currency';

const ScrollableTabs = lazy(() => import('../../tabpanels/tabbutton/ScrollableTabs'));
const PageHeader = lazy(() => import('../../headers/page-header'));
const PricingTable = lazy(() => import('../../tables/pricing-table'));
const SpecificPricing = lazy(() => import('../../cards/pricing/specific-pricing'));

const Pricing = () => {
    const [selectedTab, setSelectedTab] = useState('web');

    const { askForLocationAccess } = useLocationPermission();
    const { userCountry, getUserLocation } = useUserLocation();
    const [fadeInUpRef1, fadeInUp1] = useFadeInUpAnimation();

    const handleTabChange = (tab) => {
        setSelectedTab(tab);
    };

    const tabs = [
        { key: 'web', label: 'Web App' },
        { key: 'seo', label: 'SEO' },
        { key: 'app', label: 'Mobile App' },
        { key: 'digital', label: 'Digital Marketing' }
    ];

    const getCurrencyData = async (amount) => {
        try {
            const res = await fetchCurrency(userCountry);
            const intValue = parseInt(res, 10);
            // setCurrencyRate(intValue);

            const sign = await currencySigns[userCountry];

            if (amount && intValue) {
                let endAmount = amount * intValue;

                return {
                    currencySigns: sign,
                    currencyRate: endAmount,
                }
            }
        } catch (error) {
            console.error('Error fetching currency:', error);
        }
    };

    useEffect(() => {
        const getLocationStatus = async () => {
            try {
                const result = await navigator.permissions.query({ name: 'geolocation' });
                if (result.state === 'denied' || result.state === 'prompt') {
                    // hear i want to use askForLocationAccess function
                    await askForLocationAccess();
                    if (result.state === 'granted') {
                        await getUserLocation();
                    }
                }

                if (result.state === 'granted') {
                    await getUserLocation();
                }

            } catch (error) {
                console.error('Error getting geolocation status:', error);
            }
        };

        getLocationStatus();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <section className='mb-10 py-10 lg:px-10 px-2 w-full'>
            <div className="my-4" ref={fadeInUpRef1} style={fadeInUp1}>
                <PageHeader title='Exclusive Plans' />
            </div>
            <div className='text-center mb-10' >
                <ScrollableTabs tabs={tabs} onSelect={handleTabChange} />
            </div>

            {
                selectedTab === 'web' && (
                    <>
                        <div>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <SpecificPricing
                                    title='STARTUP'
                                    currencyData={getCurrencyData}
                                    amount='499'
                                    featureList={featureListStartUp}
                                />
                                <SpecificPricing
                                    title='PLATINUM'
                                    currencyData={getCurrencyData}
                                    amount='799'
                                    featureList={featureListPlatinum} />
                                <SpecificPricing
                                    title='ELITE'
                                    currencyData={getCurrencyData}
                                    amount='999'
                                    featureList={featureListElete} />
                            </div>
                        </div>
                    </>
                )
            }

            {
                selectedTab === 'seo' && (
                    <PricingTable data={seoServicesList} />
                )
            }

            {
                selectedTab === 'app' && (
                    <PricingTable data={appServicesList} />
                )
            }

            {
                selectedTab === 'digital' && (
                    <PricingTable data={digitalMarketingServicesList} />
                )
            }
        </section>
    )
}

export default Pricing;
