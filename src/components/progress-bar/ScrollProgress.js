// ScrollProgressBar.js

import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";

const ScrollProgressBar = () => {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <motion.div className="h-2 rounded-full bg-orange-5 fixed top-0 left-0 w-full z-50" style={{ scaleX }} />
    );
};

export default ScrollProgressBar;
