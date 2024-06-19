import { useRef, useEffect, useState, useCallback } from 'react';
import ServiceCard from '../../cards/service';

const ServiceSection = ({ serviceList, sectionTitle }) => {
    const containerRef = useRef(null);
    const [visibleItems, setVisibleItems] = useState(10); // Initial number of items to display

    const handleScroll = useCallback(() => {
        const containerHeight = containerRef.current.clientHeight;
        const scrollTop = containerRef.current.scrollTop;
        const scrollHeight = containerRef.current.scrollHeight;

        if (scrollTop + containerHeight >= scrollHeight) {
            setVisibleItems(prevVisibleItems => Math.min(prevVisibleItems + 10, serviceList.length));
        }
    }, [serviceList]);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            {sectionTitle && (
                <div className="mx-auto md:mr-auto mt-28 mb-8">
                    <h2 className="text-black text-3xl font-semibold">{sectionTitle}</h2>
                </div>
            )}
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10" ref={containerRef}>
                {serviceList?.slice(0, visibleItems)?.map((data, index) => (
                    <ServiceCard
                        key={index}
                        image={data.img}
                        title={data.title}
                        desc={data.desc}
                        pricing={data.price}
                        trending={data.trending}
                    />
                ))}
            </div>
        </>
    );
};

export default ServiceSection;
