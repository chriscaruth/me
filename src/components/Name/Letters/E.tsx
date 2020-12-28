import React from 'react';
import { motion } from 'framer-motion';

const E = () => {
    return (
        <motion.svg id="master-artboard" viewBox="0 0 150 150" version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100%" height="auto">
            <motion.rect id="ee-background" x="0" y="0" width="150" height="150" style={{ fill: 'white', fillOpacity: 0, pointerEvents: 'none'}}/>
            <motion.path 
                d="M 720.799988 102 H 839.999985 V 146.700001 H 720.799988 V 102 Z"
                transform="matrix(1, 0, 0, 1, -705.7382202148438, -11.66276741027832)"
                fill="rgb(186, 151, 101)"
            />
            <motion.path 
                d="M 720.799988 57.200001 H 810.199989 V 101.900002 H 720.799988 V 57.200001 Z"
                style={{ fill: 'rgb(186, 151, 101)'}} 
                transform="matrix(1, 0, 0, 1, -705.7382202148438, -11.66276741027832)"
            />
            <motion.path 
                d="M 720.799988 27.4 H 780.399986 V 146.599997 H 720.799988 V 27.4 Z"
                style={{ fill: 'rgb(151, 115, 72)'}} 
                transform="matrix(1, 0, 0, 1, -705.7382202148438, -11.66276741027832)"
            />
        </motion.svg>
    );
}

export default E;
