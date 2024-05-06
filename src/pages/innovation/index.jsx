import React, { lazy, Suspense } from 'react';
import { motion } from "framer-motion";
// import { animated } from 'react-spring';

// import { useFirestore } from '../../context/FirestoreContext';
import HelmetComponent from '../../helmet';

import useBounceAnimation from '../../hooks/animations/useBounceAnimation';
// import useFadeInUpAnimation from '../../hooks/animations/useFadeInUpAnimation'
import useSmoothScroll from '../../hooks/general/useSmoothScroll';

import Loader from '../../components/loader';
const InnovationSection = lazy(() => import('../../components/sections/products/innovations'));
const ContactForm = lazy(() => import('../../components/form/contact'));
const PageHeader = lazy(() => import('../../components/headers/page-header'));
// const PortfolioGrid = lazy(() => import('../../components/cards/project'));

const Innovations = () => {
    useSmoothScroll();

    // const [products, setproducts] = useState([]);
    // const [isLoading, setIsLoading] = useState(true);

    // const { getTeamData: fetchClientData } = useFirestore();
    // const [fadeInUpRef, fadeInUp] = useFadeInUpAnimation()
    const bounceAnimationProps = useBounceAnimation();

    // useEffect(() => {
    //     const handleFetchClientData = async () => {
    //         try {
    //             const res = await fetchClientData('innovations');
    //             setproducts(res)
    //         } catch (error) {
    //             console.error("Error fetching client data: ", error);
    //         } finally {
    //             setIsLoading(false);
    //         }
    //     }

    //     handleFetchClientData();

    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [])

    return (
        <Suspense fallback={<Loader />} >
            <motion.div {...bounceAnimationProps}>
                <HelmetComponent
                    title='Innovations'
                    desc='BrandLadder is the leading provider of integrated digital marketing services in Hyderabad. Our offerings encompass SEO, SEM, social media marketing, email marketing, CA services, CS, ROC, PAN/TAN, DSC, Payroll, MSME registrations, Auditing, FSSAI license, Labour License, and more. Elevate your online presence with our strategic solutions tailored to your business needs.'
                    author='Anurag Kumar '
                    page='pricing'
                    keywords={['BrandLadder Services - Enhance Your Branding Efforts', 'Digital Marketing Agency in Hyderabad', ' brand ladder']}
                    focusKeywords={['BrandLadder Services - Enhance Your Branding Efforts', 'Digital Marketing Agency in Hyderabad', ' brand ladder']}
                />
                <PageHeader
                    title='Innovation'
                    subtitle='Lorem ipsum dolor sit amet consectetur. Amet tellus dolor est scelerisque duis blandit diam vitae. Sapien proin lobortis feugiat dui consectetur tempus. SemperLorem ipsum dolor sit amet consectetur.'
                />

                <InnovationSection />
                {/* {
                    isLoading ? (
                        <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-28 py-8 px-4 md:px-10 lg:px-18'>
                            <div className="skeleton-pulse mx-auto h-80" />
                            <div className="skeleton-pulse mx-auto h-80" />
                            <div className="skeleton-pulse mx-auto h-80" />
                        </section>
                    ) : (
                        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-8 px-4 md:px-10 lg:px-18 ">

                            {
                                products?.map((data, index) => {
                                    return (
                                        <animated.div key={index} className='mx-auto' >
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
                                    )
                                })
                            }

                        </section>
                    )
                } */}

                <section>
                    <div className="bg-orange-3 px-4 py-8 md:px-16 md:py-12 shadow-2xl rounded-sm">
                        <ContactForm />
                    </div>
                </section>
            </motion.div>

        </Suspense>
    )
}

export default Innovations
