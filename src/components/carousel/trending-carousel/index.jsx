import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

import ServiceCard from '../../cards/service'
import Img from '../../../assests/images/logo1.png'

const TestemonialCarousel = () => {

    const testemonialList = [
        {
            image: Img,
            title: 'Technical Services',
            desc: 'we make a perfect premium business card from here at a cheap rate',
            pricing: '17',
            link: '/services',
            trending: true,
        },
        {
            image: Img,
            title: 'Technical Services',
            desc: 'we make a perfect premium business card from here at a cheap rate',
            pricing: '17',
            link: '/services',
            trending: true,
        },
        {
            image: Img,
            title: 'Technical Services',
            desc: 'we make a perfect premium business card from here at a cheap rate',
            pricing: '17',
            link: '/services',
            trending: true,
        },
        {
            image: Img,
            title: 'Technical Services',
            desc: 'we make a perfect premium business card from here at a cheap rate',
            pricing: '17',
            link: '/services',
            trending: true,
        },
        {
            image: Img,
            title: 'Technical Services',
            desc: 'we make a perfect premium business card from here at a cheap rate',
            pricing: '17',
            link: '/services',
            trending: true,
        },
        {
            image: Img,
            title: 'Technical Services',
            desc: 'we make a perfect premium business card from here at a cheap rate',
            pricing: '17',
            link: '/services',
            trending: true,
        },
    ]

    return (
        <Swiper
            slidesPerView={1}
            spaceBetween={15}
            pagination={{
                clickable: true,
            }}
            breakpoints={{
                640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 3,
                    spaceBetween: 40,
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 50,
                },
            }}
            autoplay={{
                delay: 2500,
                disableOnInteraction: true,
            }}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper cursor-grab"
        >
            {
                testemonialList.map((data, index) => {
                    return (
                        <SwiperSlide key={index} >
                            <ServiceCard
                                image={data.image}
                                title={data.title}
                                desc={data.desc}
                                pricing={data.pricing}
                                link={data.link}
                                trending={data.trending}
                            />
                        </SwiperSlide>
                    )
                })
            }
        </Swiper>
    )
}

export default TestemonialCarousel
