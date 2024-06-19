import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

import EventCard from '../../cards/event/new'

const EventCarousel = ({ eventList }) => {
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
            {eventList?.map((item, index) => (
                <SwiperSlide key={index}>
                    <EventCard
                        key={index}
                        title={item.data.eventTitle}
                        // date={item.data.date }
                        img={item.data.eventImage}
                        orgDtls={item.data.orgDtls}
                        eventType={item.data.eventType}
                        desc={item.data.eventDesc}
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default EventCarousel;
