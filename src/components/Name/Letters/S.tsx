import React from 'react';
import { motion } from 'framer-motion';

const S = () => {
    return (
        <motion.svg id="master-artboard" viewBox="0 0 150 150" version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="150px" height="150px">
           <motion.rect id="ee-background" x="0" y="0" width="150" height="150" style={{ fill: 'white', fillOpacity: 0, pointerEvents: 'none'}}/>
            <motion.g transform="matrix(1, 0, 0, 1, -360.9282531738281, -415.0526428222656)">
                <motion.path 
                    d="M468,549.6c16.5,0,29.8-13.3,29.8-29.8c0-16.5-13.3-29.8-29.8-29.8h-89.4v59.6H468z" 
                    style={{ fill: ' rgb(133, 31, 131)'}}
                />
		    </motion.g>
            <motion.path 
                d="M405.4,490c-16.5,0-29.8-13.3-29.8-29.8c0-16.5,13.3-29.8,29.8-29.8h89.4V490H405.4z" 
                fill="rgb(153, 63, 152)" 
                transform="matrix(1, 0, 0, 1, -360.9282531738281, -415.0526428222656)"/>
        </motion.svg>
    );
}

export default S;
