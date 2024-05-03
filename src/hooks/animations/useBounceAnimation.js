import { useState } from "react";

const useBounceAnimation = () => {
    const [animationProps] = useState({
        initial: { opacity: 0, scale: 0.9 },
        animate: { opacity: 1, scale: 1 },
        transition: {
            duration: 1,
            ease: [0, 0.71, 0.2, 1],
            type: "spring",
            damping: 10,
            // stiffness: 100,
            // restDelta: 0.1,
        },
    });

    return animationProps;
};

export default useBounceAnimation;
