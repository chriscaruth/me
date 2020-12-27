import React from 'react';
import { motion } from 'framer-motion';

const R = () => {
    return (
        <motion.svg id="master-artboard" viewBox="0 0 150 150" version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="150px" height="150px">
           <motion.rect id="ee-background" x="0" y="0" width="150" height="150" style={{ fill: 'white', fillOpacity: 0, pointerEvents: 'none'}}/>
            <motion.g transform="matrix(1, 0, 0, 1, -189.24152804254663, -414.1890047723663)">
                <motion.path 
                    d="M294.6,490c16.5,0,29.8-13.3,29.8-29.8c0-16.5-13.3-29.8-29.8-29.8h-89.4V490H294.6z" 
                    style={{ fill: 'rgb(75, 143, 204)'}}
                />
		    </motion.g>
            <motion.path 
                d="M 205.1999969482422 430.3999938964844 L 205.1999969482422 549.5999755859375 L 324.3999938964844 549.5999755859375 Z" 
                fill="rgb(0, 114, 188)" 
                transform="matrix(1, 0, 0, 1, -189.24152804254663, -414.1890047723663)"/>
        </motion.svg>
    );
}

export default R;
