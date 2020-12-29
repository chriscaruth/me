import React from 'react';
import { motion } from 'framer-motion';

const J = () => {
    return (
        <motion.svg id="master-artboard" viewBox="0 0 150 150" version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="150px" height="150px">
            <motion.rect id="ee-background" x="0" y="0" width="150" height="150" style={{ fill: 'white', fillOpacity: 0, pointerEvents: 'none'}}/>
            <g transform="matrix(1, 0, 0, 1, -189.26846313476565, -214.43841552734378)">
                <g>
                    <motion.path 
                        d="M264.8,228.9v119.2c32.9,0,59.6-26.7,59.6-59.6v-59.6H264.8z"
                        style={{ fill: 'rgb(192, 103, 53)'}} 
                    />
                </g>
            </g>
            <motion.path 
                d="M 264.79998779296875 348.1000061035156 L 205.1999969482422 348.1000061035156 L 264.79998779296875 288.5 Z"
                style={{ fill: 'rgb(162, 86, 42)'}} 
                transform="matrix(1, 0, 0, 1, -189.26846313476565, -214.43841552734378)"
            />
        </motion.svg>
    );
}

export default J;
