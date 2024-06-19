import { TypeAnimation } from 'react-type-animation';
// import useSound from 'use-sound';

const TextReplacementAnimation = () => {

    return (
        <TypeAnimation
            sequence={[
                `Build And Grow Your Business By Digital Marketing`,
                1000,
                'Build And Grow Your Business By Digital Advertising',
                1000,
                'Build And Grow Your Business By Software Solutions',
                1000,
                'Build And Grow Your Business By And Much More ...',
                1000,
            ]}
            speed={10}
            className='text-black text-3xl md:text-5xl font-medium md:font-bold my-8 leading-tight'
            repeat={Infinity}
        />
    );
};

export default TextReplacementAnimation;