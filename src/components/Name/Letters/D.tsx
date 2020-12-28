import React from 'react';
import { motion } from 'framer-motion';

const D = () => {
    return (
        <motion.svg id="master-artboard" viewBox="0 0 150 150" version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100%" height="auto">
            <motion.rect id="ee-background" x="0" y="0" width="150" height="150" style={{ fill: 'white', fillOpacity: 0, pointerEvents: 'none'}}/>
            <motion.path 
                d="M 548.900024 27.4 H 608.500023 V 146.599997 H 548.900024 V 27.4 Z"
                transform="matrix(1, 0, 0, 1, -533.2088012695312, -11.711784362792969)"
                fill="rgb(191, 215, 48)"
            />
            <motion.path 
                d="M608.5,27.4c32.9,0,59.6,26.7,59.6,59.6s-26.7,59.6-59.6,59.6V27.4z"
                style={{ fill: 'rgb(141, 198, 63)'}} 
                transform="matrix(1, 0, 0, 1, -533.2088012695312, -11.711784362792969)"
            />
        </motion.svg>
    );
}

export default D;
