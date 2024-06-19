import { useState, lazy, useMemo, useCallback } from 'react';

import useFadeInUpAnimation from '../../../hooks/animations/useFadeInUpAnimation';

import { digitalMarketingServicesList, seoServicesList, appServicesList, featureListStartUp, featureListPlatinum, featureListElete } from '../../../.data/plan-features';
import ScrollableTabs from '../../tabpanels/tabbutton/ScrollableTabs';
import PageHeader from '../../headers/page-header';

const PricingTable = lazy(() => import('../../tables/pricing-table'));
const SpecificPricing = lazy(() => import('../../cards/pricing/specific-pricing'));

const Pricing = () => {
    const [selectedTab, setSelectedTab] = useState('web');

    const [fadeInUpRef1, fadeInUp1] = useFadeInUpAnimation();

    const handleTabChange = useCallback((tab) => {
        setSelectedTab(tab);
    }, []);

    const tabs = useMemo(() => [
        { key: 'web', label: 'Web App' },
        { key: 'seo', label: 'SEO' },
        { key: 'app', label: 'Mobile App' },
        { key: 'digital', label: 'Digital Marketing' }
    ], []);

    const renderPricingContent = useMemo(() => {
        switch (selectedTab) {
            case 'web':
                return (
                    <div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <SpecificPricing
                                title='STARTUP'
                                amount='499'
                                featureList={featureListStartUp}
                            />
                            <SpecificPricing
                                title='PLATINUM'
                                amount='799'
                                featureList={featureListPlatinum}
                            />
                            <SpecificPricing
                                title='ELITE'
                                amount='999'
                                featureList={featureListElete}
                            />
                        </div>
                    </div>
                );
            case 'seo':
                return <PricingTable data={seoServicesList} />;
            case 'app':
                return <PricingTable data={appServicesList} />;
            case 'digital':
                return <PricingTable data={digitalMarketingServicesList} />;
            default:
                return null;
        }
    }, [selectedTab]);

    return (
        <section className='mb-10 py-10 lg:px-10 px-2 w-full'>
            <div className="my-4" ref={fadeInUpRef1} style={fadeInUp1}>
                <PageHeader title='Exclusive Plans' section={true} />
            </div>
            <div className='text-center mb-10' >
                <ScrollableTabs tabs={tabs} onSelect={handleTabChange} />
            </div>
            {renderPricingContent}
        </section>
    )
}

export default Pricing;
