import React from 'react';
import { motion } from 'framer-motion';

const P = () => {
    return (
        <motion.svg id="master-artboard" viewBox="0 0 150 150" version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="150px" height="150px">
            <motion.rect id="ee-background" x="0" y="0" width="150" height="150" style={{ fill: 'white', fillOpacity: 0, pointerEvents: 'none'}}/>
            <motion.path 
                d="M 1236.300049 228.899994 H 1295.900047 V 348.099991 H 1236.300049 V 228.899994 Z"
                style={{ fill: 'rgb(176, 223, 219)'}} 
                transform="matrix(1, 0, 0, 1, -1219.9761962890625, -212.6172332763672)"
            />
            <motion.path 
                d="M1325.8,288.5c16.5,0,29.8-13.3,29.8-29.8c0-16.5-13.3-29.8-29.8-29.8h-89.4v59.6H1325.8z"
                style={{ fill: 'rgb(153, 194, 192)'}} 
                transform="matrix(1, 0, 0, 1, -1219.9761962890625, -212.6172332763672)"
            />
        </motion.svg>
    );
}

export default P;
