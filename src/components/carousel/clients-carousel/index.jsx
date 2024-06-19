import Slider from 'react-slick';
import LazyLoadImg from '../../lazy-loading/img/LazyLoadImage';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { clientsLogo } from '../../../.data/clients';

const ClientsCarousel = () => {

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        pauseOnHover: true,
        pauseOnFocus: true,
        lazyLoad: 'ondemand',
        arrows: false,
        draggable: true,
        focusOnSelect: true,
        useCSS: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    initialSlide: 2,
                    dots: false
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots: false
                }
            }
        ]
    };

    return (
        <div className="w-full py-3 md:py-4">
            <Slider {...settings}>
                {clientsLogo && clientsLogo?.map((slide, index) => (
                    <div key={index}>
                        <LazyLoadImg src={slide} alt='brandladder' loading='lazy' className="cursor-grab h-10 md:h-20 my-auto mx-auto" />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default ClientsCarousel;
