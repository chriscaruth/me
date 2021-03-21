import { motion, useTransform, useViewportScroll } from 'framer-motion';
import React, { FunctionComponent } from 'react';

const ComingSoon : FunctionComponent = () => {
    const { scrollY } = useViewportScroll();
    const opacityTransformer = useTransform(scrollY, [250, 1250], [0, 1]);
    
    return (
        <motion.div className="c-coming-soon" style={{
            opacity: opacityTransformer
        }}>
            <h1>Coming Soon</h1>
        </motion.div>
    );
}

export default ComingSoon;