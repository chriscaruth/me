import React from 'react';
import { motion } from 'framer-motion';

const L = () => {
    return (
        <motion.svg id="master-artboard" viewBox="0 0 150 150" version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="150px" height="150px">
            <motion.rect id="ee-background" x="0" y="0" width="150" height="150" style={{ fill: 'white', fillOpacity: 0, pointerEvents: 'none'}}/>
            <motion.path 
                d="M 548.900024 296 H 668.100021 V 348.200001 H 548.900024 V 296 Z"
                style={{ fill: 'rgb(241, 91, 64)'}} 
                transform="matrix(1, 0, 0, 1, -532.9617309570312, -212.83734130859375)"
            />
            <motion.path 
                d="M 548.900024 228.899994 H 608.500023 V 348.099991 H 548.900024 V 228.899994 Z"
                style={{ fill: 'rgb(244, 124, 94)'}} 
                transform="matrix(1, 0, 0, 1, -532.9617309570312, -212.83734130859375)"
            />
        </motion.svg>
    );
}

export default L;
