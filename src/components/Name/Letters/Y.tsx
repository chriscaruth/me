import React from 'react';
import { motion } from 'framer-motion';

const Y = () => {
    return (
        <motion.svg id="master-artboard" viewBox="0 0 150 150" version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="150px" height="150px">
            <motion.rect id="ee-background" x="0" y="0" width="150" height="150" style={{ fill: 'white', fillOpacity: 0, pointerEvents: 'none'}}/>
            <motion.path 
                d="M 63.200001 631.900024 H 122.799999 V 751.100021 H 63.200001 V 631.900024 Z"
                style={{ fill: 'rgb(221, 131, 40)'}} 
                transform="matrix(1, 0, 0, 1, -17.181819915771484, -615.0287475585938)"
            />
            <motion.path 
                d="M 152.60000610351562 631.9000244140625 L 93 735.0999755859375 L 33.400001525878906 631.9000244140625 Z"
                style={{ fill: 'rgb(227, 151, 76)'}} 
                transform="matrix(1, 0, 0, 1, -17.181819915771484, -615.0287475585938)"
            />
        </motion.svg>
    );
}

export default Y;
