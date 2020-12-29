import React from 'react';
import { motion } from 'framer-motion';

const G = () => {
    return (
        <motion.svg id="master-artboard" viewBox="0 0 150 150" version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="150px" height="150px">
            <motion.rect id="ee-background" x="0" y="0" width="150" height="150" style={{ fill: 'white', fillOpacity: 0, pointerEvents: 'none'}}/>
            <motion.path 
                d="M1124.1,27.4c-32.9,0-59.6,26.7-59.6,59.6h59.6l0,0l59.6-59.6H1124.1z"
                style={{ fill: 'rgb(0, 85, 110)'}} 
                transform="matrix(1, 0, 0, 1, -1048.3828125, -10.641149520874023)"
            />
            <motion.path 
                d="M1124.1,146.7c-32.9,0-59.6-26.7-59.6-59.6h59.6h59.6v59.6H1124.1z"
                style={{ fill: 'rgb(0, 44, 65)'}} 
                transform="matrix(1, 0, 0, 1, -1048.3828125, -10.641149520874023)"
            />
        </motion.svg>
    );
}

export default G;
