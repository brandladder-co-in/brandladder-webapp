import React, { lazy, Suspense, useState, useEffect } from 'react';
import { useFirestore } from '../../context/FirestoreContext';
import Loader from '../../components/loader';
import HelmetComponent from '../../helmet';

const ContactForm = lazy(() => import('../../components/form/contact'));
const PageHeader = lazy(() => import('../../components/headers/page-header'));
const PortfolioGrid = lazy(() => import('../../components/cards/project'));

const Portfolio = () => {

    const [Clients, setClients] = useState([]);
    console.log(Clients)
    const { getTeamData: fetchClientData } = useFirestore();

    useEffect(() => {
        const handleFetchClientData = async () => {
            try {
                const res = await fetchClientData('clients');
                setClients(res)
            } catch (error) {
                console.error("Error fetching client data: ", error);
            }
        }

        handleFetchClientData();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <Suspense fallback={<Loader />}>
            <HelmetComponent
                title='Portfolio'
                desc='BrandLadder is the leading provider of integrated digital marketing services in Hyderabad. Our offerings encompass SEO, SEM, social media marketing, email marketing, CA services, CS, ROC, PAN/TAN, DSC, Payroll, MSME registrations, Auditing, FSSAI license, Labour License, and more. Elevate your online presence with our strategic solutions tailored to your business needs.'
                author='Anurag Kumar '
                page='pricing'
                keywords={['BrandLadder Services - Enhance Your Branding Efforts', 'Digital Marketing Agency in Hyderabad', ' brand ladder']}
                focusKeywords={['BrandLadder Services - Enhance Your Branding Efforts', 'Digital Marketing Agency in Hyderabad', ' brand ladder']}
            />
            <PageHeader
                title='Our Clients'
                subtitle='Lorem ipsum dolor sit amet consectetur. Amet tellus dolor est scelerisque duis blandit diam vitae. Sapien proin lobortis feugiat dui consectetur tempus. SemperLorem ipsum dolor sit amet consectetur.'
            />
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-8 px-4 md:px-10 lg:px-18 ">
                <div className='mx-auto'>
                    <PortfolioGrid />
                </div>
                <div className='mx-auto'>
                    <PortfolioGrid />
                </div>
                <div className='mx-auto'>
                    <PortfolioGrid />
                </div>
            </section>

            <section>
                <div className="bg-orange-3 px-4 py-8 md:px-16 md:py-12 shadow-2xl rounded-sm">
                    <ContactForm />
                </div>
            </section>
        </Suspense>
    )
}

export default Portfolio
