import { lazy, useState, useEffect, useCallback, useMemo } from 'react';
import { animated } from 'react-spring';

import { useFirestore } from '../../../../context/FirestoreContext';

const PortfolioGrid = lazy(() => import('../../../cards/project'));

const InnovationSection = () => {

    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const { getTeamData: fetchClientData } = useFirestore();

    const handleFetchClientData = useCallback(async () => {
        try {
            const res = await fetchClientData('innovations');
            setProducts(res);
        } catch (error) {
            console.error("Error fetching client data: ", error);
        } finally {
            setIsLoading(false);
        }
    }, [fetchClientData]);

    useEffect(() => {
        handleFetchClientData();

    }, [handleFetchClientData])

    const renderedProducts = useMemo(() => (
        products?.map((data, index) => (
            <animated.div key={index} className='mx-auto'>
                <PortfolioGrid
                    img={data.logo}
                    title={data.title}
                    desc={data.desc}
                    insta={data.insta}
                    subtitle={data.subtitle}
                    type={data.type}
                    website={data.website}
                />
            </animated.div>
        ))
    ), [products]);

    return (
        isLoading ? (
            <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-28 py-8 px-4 md:px-10 lg:px-18' >
                <div className="skeleton-pulse mx-auto h-80" />
                <div className="skeleton-pulse mx-auto h-80" />
                <div className="skeleton-pulse mx-auto h-80" />
            </section >
        ) : (
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 py-8 px-4 md:px-10 lg:px-18 ">
                {renderedProducts}
            </section>
        )

    )
}

export default InnovationSection
