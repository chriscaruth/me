import React from 'react';
import { motion } from 'framer-motion';
import LetterScaler from './LetterScaler';
import { AlphaProps } from '../Letter';

const V = (props: AlphaProps) => {
    return (
        <LetterScaler width={props.width}>
            <motion.rect id="ee-background" x="0" y="0" width="150" height="150" style={{ fill: 'white', fillOpacity: 0, pointerEvents: 'none'}}/>
            <motion.path 
                d="M 1011.9000244140625 430.3999938964844 L 952.2000122070312 549.5999755859375 L 892.5999755859375 430.3999938964844 Z"
                style={{ fill: 'rgb(192, 103, 53)'}} 
                transform="matrix(1, 0, 0, 1, -875.6890258789062, -413.8325500488281)"
            />
            <motion.path 
                d="M 952.5999755859375 430.3999938964844 L 892.5999755859375 430.3999938964844 L 922.5999755859375 490.3999938964844 Z"
                style={{ fill: 'rgb(162, 86, 42)'}} 
                transform="matrix(1, 0, 0, 1, -875.6890258789062, -413.8325500488281)"
            />
        </LetterScaler>
    );
}

export default V;
