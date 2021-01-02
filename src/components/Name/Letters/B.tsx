import React from 'react';
import { motion } from 'framer-motion';
import LetterScaler from './LetterScaler';
import { AlphaProps } from '../Letter';

const B = (props: AlphaProps) => {
    return (
        <LetterScaler width={props.width}>
            <motion.rect id="ee-background" x="0" y="0" width="150" height="150" style={{ fill: 'white', fillOpacity: 0, pointerEvents: 'none'}}/>
            <motion.path 
                d="M294.6,146.7c16.5,0,29.8-13.3,29.8-29.8c0-16.5-13.3-29.8-29.8-29.8h-89.4v59.6H294.6z" 
                style={{ fill: 'rgb(255, 203, 5)'}} 
                transform="matrix(1, 0, 0, 1, -188.33494567871094, -12.76076602935791)"
            />
            <motion.path 
                d="M294.6,87c16.5,0,29.8-13.3,29.8-29.8c0-16.5-13.3-29.8-29.8-29.8h-89.4V87H294.6z" 
                style={{ fill: 'rgb(255, 221, 0)'}} 
                transform="matrix(1, 0, 0, 1, -188.33494567871094, -12.76076602935791)"
            />
        </LetterScaler>
    );
}

export default B;
