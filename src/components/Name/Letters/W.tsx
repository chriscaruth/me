import React from 'react';
import { motion } from 'framer-motion';
import LetterScaler from './LetterScaler';
import { AlphaProps } from '../Letter';

const W = (props: AlphaProps) => {
    return (
        <LetterScaler width={props.width}>
            <motion.rect id="ee-background" x="0" y="0" width="150" height="150" style={{ fill: 'white', fillOpacity: 0, pointerEvents: 'none'}}/>
            <motion.path 
                d="M1064.5,519.8c0,16.5,13.3,29.8,29.8,29.8c16.5,0,29.8-13.3,29.8-29.8v-89.4h-59.6V519.8z"
                style={{ fill: 'rgb(87, 193, 165)'}} 
                transform="matrix(1, 0, 0, 1, -1047.8421630859375, -413.71295166015625)"
            />
            <motion.path 
                d="M1124.1,519.8c0,16.5,13.3,29.8,29.8,29.8s29.8-13.3,29.8-29.8v-89.4h-59.6V519.8z"
                style={{ fill: 'rgb(54, 178, 149)'}} 
                transform="matrix(1, 0, 0, 1, -1047.8421630859375, -413.71295166015625)"
            />
        </LetterScaler>
    );
}

export default W;
