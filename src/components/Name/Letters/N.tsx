import React from 'react';
import { motion } from 'framer-motion';

const N = () => {
    return (
        <motion.svg id="master-artboard" viewBox="0 0 150 150" version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="150px" height="150px">
            <motion.rect id="ee-background" x="0" y="0" width="150" height="150" style={{ fill: 'white', fillOpacity: 0, pointerEvents: 'none'}}/>
            <motion.path 
                d="M 952.200012 228.899994 H 1011.800011 V 348.099991 H 952.200012 V 228.899994 Z"
                style={{ fill: 'rgb(93, 55, 36)'}} 
                transform="matrix(1, 0, 0, 1, -876.0287475585938, -211.85647583007812)"
            />
            <motion.path 
                d="M 892.5999755859375 228.89999389648438 L 892.5999755859375 348.1000061035156 L 1011.9000244140625 348.1000061035156 Z"
                style={{ fill: 'rgb(135, 84, 60)'}} 
                transform="matrix(1, 0, 0, 1, -876.0287475585938, -211.85647583007812)"
            />
        </motion.svg>
    );
}

export default N;
