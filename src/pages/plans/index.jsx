import React, { lazy, Suspense } from 'react';
import Snowfall from 'react-snowfall';
import { motion } from "framer-motion";

import useBounceAnimation from '../../hooks/animations/useBounceAnimation';
import useSmoothScroll from '../../hooks/general/useSmoothScroll'

import { digitalEssential, growthAcceleratr, dominanceSuit } from '../../.data/plan-features'

import Loader from '../../components/loader';
const Pricing = lazy(() => import('../../components/sections/pricing'));

const Plans = () => {
    useSmoothScroll();

    const bounceAnimationProps = useBounceAnimation();

    return (
        <Suspense fallback={<Loader />}>
            <motion.section {...bounceAnimationProps} className='bg-orange-2 relative'>
                <Pricing featureList1={digitalEssential} featureList2={growthAcceleratr} featureList3={dominanceSuit} />
                <Snowfall
                    color='#ffb8bb'
                    snowflakeCount={20}
                    radius={[0.5, 20]}
                    speed={[0.5, 3]}
                    wind={[-0.5, 0.5]}
                    className="absolute top-0 left-0 w-full h-full opacity-80 shadow-2xl"
                />
            </motion.section>
        </Suspense>
    )
}

export default Plans
