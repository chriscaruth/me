import React from 'react';
import { motion } from 'framer-motion';
import LetterScaler from './LetterScaler';
import { AlphaProps } from '../Letter';

const U = (props: AlphaProps) => {
    return (
        <LetterScaler width={props.width}>
            <motion.rect id="ee-background" x="0" y="0" width="150" height="150" style={{ fill: 'white', fillOpacity: 0, pointerEvents: 'none'}}/>
            <motion.path 
                d="M 720.799988 430.399994 H 839.999985 V 489.999992 H 720.799988 V 430.399994 Z"
                transform="matrix(1, 0, 0, 1, -705.894775390625, -414.0526428222656)"
                fill="rgb(133, 141, 54)"
            />
            <motion.path 
                d="M840,490c0,32.9-26.7,59.6-59.6,59.6c-32.9,0-59.6-26.7-59.6-59.6H840z"
                style={{ fill: 'rgb(153, 158, 84)'}} 
                transform="matrix(1, 0, 0, 1, -705.894775390625, -414.0526428222656)"
            />
        </LetterScaler>
    );
}

export default U;
