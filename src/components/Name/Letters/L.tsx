import React from 'react';
import { motion } from 'framer-motion';
import LetterScaler from './LetterScaler';
import { AlphaProps } from '../Letter';

const L = (props: AlphaProps) => {
    return (
        <LetterScaler width={props.width}>
            <motion.rect id="ee-background" x="0" y="0" width="150" height="150" style={{ fill: 'white', fillOpacity: 0, pointerEvents: 'none'}}/>
            <motion.path 
                d="M 548.900024 296 H 668.100021 V 348.200001 H 548.900024 V 296 Z"
                style={{ fill: 'rgb(241, 91, 64)'}} 
                transform="matrix(1, 0, 0, 1, -532.9617309570312, -212.83734130859375)"
            />
            <motion.path 
                d="M 548.900024 228.899994 H 608.500023 V 348.099991 H 548.900024 V 228.899994 Z"
                style={{ fill: 'rgb(244, 124, 94)'}} 
                transform="matrix(1, 0, 0, 1, -532.9617309570312, -212.83734130859375)"
            />
        </LetterScaler>
    );
}

export default L;
