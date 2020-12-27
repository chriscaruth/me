import React from 'react';
import { motion } from 'framer-motion';

const I = () => {
    return (
        <motion.svg id="master-artboard" viewBox="0 0 100 150" version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100px" height="150px">
           <motion.rect id="ee-background" x="0" y="0" width="100" height="150" style={{ fill: 'white', fillOpacity: 0, pointerEvents: 'none'}}/>
            <motion.g transform="matrix(1, 0, 0, 1, -42.18182373046875, -212.9569549560547)">
                <motion.path 
                    d="M 63.200001 228.899994 H 122.799999 V 348.099991 H 63.200001 V 228.899994 Z" 
                    style={{ fill: 'rgb(231, 193, 87)'}}
                />
		    </motion.g>
        </motion.svg>
    );
}

export default I;
