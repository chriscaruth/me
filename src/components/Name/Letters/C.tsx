import React from 'react';
import { motion } from 'framer-motion';

const C = () => {
    return (
        <motion.svg id="master-artboard" viewBox="0 0 150 150" version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="150px" height="150px">
            <motion.rect id="ee-background" x="0" y="0" width="150" height="150" style={{ fill: 'white', fillOpacity: 0, pointerEvents: 'none'}}/>
            <motion.path d="M436.7,27.4c-32.9,0-59.6,26.7-59.6,59.6h59.6h59.6V27.4H436.7z" style={{ fill: 'rgb(227, 151, 76)'}} transform="matrix(1, 0, 0, 1, -364.6300964355469, -12.472578048706055)"/>
            <motion.path d="M436.7,146.7c-32.9,0-59.6-26.7-59.6-59.6h59.6h59.6v59.6H436.7z" style={{ fill: 'rgb(221, 131, 40)'}} transform="matrix(1, 0, 0, 1, -364.6300964355469, -12.472578048706055)"/>
        </motion.svg>
    );
}

export default C;
