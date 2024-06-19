import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const LazyLoadImg = ({ src, alt, className }) => {

    return (
        src && (
            <LazyLoadImage
                src={src}
                alt={alt}
                className={className}
                effect="blur"
                wrapperProps={{
                    style: { transitionDelay: "0.3s" },
                }}
            />
        )
    );
};

export default LazyLoadImg;
