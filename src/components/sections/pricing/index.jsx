import React, { useState, lazy } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';

import useFadeInUpAnimation from '../../../hooks/animations/useFadeInUpAnimation';
// import useFadeInLeftAnimation from '../../../hooks/animations/useFadeInLeftAnimation';
// import useFadeInRightAnimation from '../../../hooks/animations/useFadeInRightAnimation';
import { featureList, startupFeatureList, platinumFeatureList, eliteFeatureList, seoServicesList, appServicesList, featureListStartUp, featureListPlatinum, featureListElete } from '../../../.data/plan-features'

const PageHeader = lazy(() => import('../../headers/page-header'));
const PricingTable = lazy(() => import('../../tables/pricing-table'));
const PricingContent = lazy(() => import('../../cards/pricing/content'));
const SpecificPricing = lazy(() => import('../../cards/pricing/specific-pricing'));

const Pricing = () => {
    const [selectedTab, setSelectedTab] = useState('web');

    const [fadeInUpRef1, fadeInUp1] = useFadeInUpAnimation();
    // const [fadeInUpRef2, fadeInUp2] = useFadeInUpAnimation();
    // const [fadeInUpRef3, fadeInUp3] = useFadeInUpAnimation();

    // const [fadeInLeftRef1, fadeInLeft1] = useFadeInLeftAnimation();
    // const [fadeInLeftRef2, fadeInLeft2] = useFadeInLeftAnimation();

    // const [fadeInRightRef1, fadeInRight1] = useFadeInRightAnimation();
    // const [fadeInRightRef2, fadeInRight2] = useFadeInRightAnimation();

    const handleTabChange = (tab) => {
        setSelectedTab(tab);
    };

    return (
        <section className='bg-orange-2 mb-10 py-10 lg:px-10 px-2 w-full'>
            <div className="my-4" ref={fadeInUpRef1} style={fadeInUp1}>
                <PageHeader title='Exclusive Plans' />
            </div>
            <div className='text-center mb-10' >
                <div className="inline-flex rounded-lg border border-gray-100 bg-orange-4 p-2 shadow-xl">
                    <button
                        className={`transition duration-500 ease-in-out inline-flex items-center gap-2 rounded-md px-4 py-2 ${selectedTab === 'web' ? 'text-black font-semibold bg-orange-2' : 'text-gray-500 hover:text-gray-900 focus:bg-orange-2 focus:text-black focus:font-semibold focus:shadow-2xl'}`}
                        onClick={() => handleTabChange('web')}
                    >
                        Web App
                    </button>
                    <button
                        className={`transition duration-500 ease-in-out inline-flex items-center gap-2 rounded-md px-4 py-2 ${selectedTab === 'seo' ? 'text-black font-semibold bg-orange-2' : 'text-gray-500 hover:text-gray-900 focus:bg-orange-2 focus:text-black focus:font-semibold focus:shadow-2xl'}`}
                        onClick={() => handleTabChange('seo')}
                    >
                        SEO
                    </button>
                    <button
                        className={`transition duration-500 ease-in-out inline-flex items-center gap-2 rounded-md px-4 py-2 ${selectedTab === 'app' ? 'text-black font-semibold bg-orange-2' : 'text-gray-500 hover:text-gray-900 focus:bg-orange-2 focus:text-black focus:font-semibold focus:shadow-2xl'}`}
                        onClick={() => handleTabChange('app')}
                    >
                        Mobile App
                    </button>
                </div>
            </div>

            {
                selectedTab === 'web' && (
                    <>
                        <div className='block lg:hidden'>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <SpecificPricing title='STARTUP' amount='499' featureList={featureListStartUp} />
                                <SpecificPricing title='ELITE' amount='999' featureList={featureListElete} />
                                <SpecificPricing title='PLATINUM' amount='799' featureList={featureListPlatinum} />
                            </div>
                        </div>
                        <div className='hidden lg:block'>
                            <div className="grid grid-cols-4 gap-4">
                                <PricingContent featureList={featureList} />
                                <SpecificPricing title='STARTUP' amount='499' featureList={startupFeatureList} />
                                <SpecificPricing title='PLATINUM' amount='799' featureList={platinumFeatureList} />
                                <SpecificPricing title='ELITE' amount='999' featureList={eliteFeatureList} />
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

        </section>
    )
}

export default Pricing;
