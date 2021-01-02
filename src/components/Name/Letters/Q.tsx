import React from 'react';
import { motion } from 'framer-motion';
import LetterScaler from './LetterScaler';
import { AlphaProps } from '../Letter';

const Q = (props: AlphaProps) => {
    return (
        <LetterScaler width={props.width}>
            <motion.rect id="ee-background" x="0" y="0" width="150" height="150" style={{ fill: 'white', fillOpacity: 0, pointerEvents: 'none'}}/>
            <motion.path 
                d="M 152.599998 490 A 59.599998 59.599998 0 0 1 93 549.599998 A 59.599998 59.599998 0 0 1 33.400002 490 A 59.599998 59.599998 0 0 1 93 430.400002 A 59.599998 59.599998 0 0 1 152.599998 490 Z"
                style={{ fill: 'rgb(197, 65, 104)'}} 
                transform="matrix(1, 0, 0, 1, -17.06220245361328, -413.3923645019531)"
            />
            <motion.path 
                d="M 152.60000610351562 549.5999755859375 L 93 549.5999755859375 L 93 490 Z"
                style={{ fill: 'rgb(143, 17, 68)'}} 
                transform="matrix(1, 0, 0, 1, -17.06220245361328, -413.3923645019531)"
            />
        </LetterScaler>
    );
}

export default Q;
