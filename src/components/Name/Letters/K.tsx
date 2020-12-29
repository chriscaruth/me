import React from 'react';
import { motion } from 'framer-motion';

const K = () => {
    return (
        <motion.svg id="master-artboard" viewBox="0 0 150 150" version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="150px" height="150px">
            <motion.rect id="ee-background" x="0" y="0" width="150" height="150" style={{ fill: 'white', fillOpacity: 0, pointerEvents: 'none'}}/>
            <motion.path 
                d="M 381.100006 228.899994 H 440.700005 V 348.099991 H 381.100006 V 228.899994 Z"
                style={{ fill: 'rgb(67, 151, 141)'}} 
                transform="matrix(1, 0, 0, 1, -362.0104675292969, -211.3768768310547)"
            />
            <motion.path 
                d="M 492.29998779296875 348.1000061035156 L 389 288.5 L 492.29998779296875 228.89999389648438 Z"
                style={{ fill: 'rgb(47, 115, 106)'}} 
                transform="matrix(1, 0, 0, 1, -362.0104675292969, -211.3768768310547)"
            />
        </motion.svg>
    );
}

export default K;
