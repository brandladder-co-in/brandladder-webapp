import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

import TestemonialCard from '../../cards/testimonial/index'

const TestemonialCarousel = ({ testemonialList }) => {
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
                            <TestemonialCard
                                image={data.image}
                                name={data.name}
                                designation={data.designation}
                                content={data.content}
                            />
                        </SwiperSlide>
                    )
                })
            }
        </Swiper>
    )
}

export default TestemonialCarousel
