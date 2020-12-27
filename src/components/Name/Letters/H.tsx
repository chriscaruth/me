import React from 'react';
import { motion } from 'framer-motion';

const H = () => {
    return (
        <motion.svg id="master-artboard" viewBox="0 0 150 150" version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="150px" height="150px">
            <motion.rect id="ee-background" x="0" y="0" width="150" height="150" style={{ fill: 'white', fillOpacity: 0, pointerEvents: 'none'}}/>
            <motion.path 
                d="M 1236.300049 27.4 H 1295.900047 V 146.599997 H 1236.300049 V 27.4 Z"
                transform="matrix(1, 0, 0, 1, -1220.655517578125, -12.081340789794922)"
                animate={{
                    fill: ['fill: rgb(130, 202, 156)', 'rgb(118, 184, 143)', 'rgb(130, 202, 156)'],
                    transition: {
                        duration: 8,
                        ease: 'easeInOut',
                        loop: Infinity
                    }
                }}
            />
            <motion.path 
                d="M 1296 27.4 H 1355.599998 V 146.599997 H 1296 V 27.4 Z"
                transform="matrix(1, 0, 0, 1, -1220.655517578125, -12.081340789794922)"
                animate={{
                    fill: ['fill: rgb(118, 184, 143)', 'rgb(130, 202, 156)', 'rgb(118, 184, 143)'],
                    transition: {
                        duration: 2,
                        ease: 'easeInOut',
                        loop: Infinity
                    }
                }}
            />
        </motion.svg>
    );
}

export default H;
