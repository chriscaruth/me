import React from 'react';
import { motion } from 'framer-motion';
import LetterScaler from './LetterScaler';
import { AlphaProps } from '../Letter';

const F = (props: AlphaProps) => {
    return (
        <LetterScaler width={props.width}>
            <motion.rect id="ee-background" x="0" y="0" width="150" height="150" style={{ fill: 'white', fillOpacity: 0, pointerEvents: 'none'}}/>
            <motion.path 
                d="M 892.599976 27.4 H 1011.799973 V 72.1 H 892.599976 V 27.4 Z"
                transform="matrix(1, 0, 0, 1, -877.3173217773438, -12.043172836303711)"
                style={{ fill: 'rgb(161, 84, 161)'}} 
            />
            <motion.path 
                d="M 892.599976 72.099998 H 981.999977 V 116.799999 H 892.599976 V 72.099998 Z"
                style={{ fill: 'rgb(161, 84, 161)'}} 
                transform="matrix(1, 0, 0, 1, -877.3173217773438, -12.043172836303711)"
            />
            <motion.path 
                d="M 892.599976 27.4 H 952.199974 V 146.599997 H 892.599976 V 27.4 Z"
                style={{ fill: 'rgb(111, 44, 145)'}} 
                transform="matrix(1, 0, 0, 1, -877.3173217773438, -12.043172836303711)"
            />
        </LetterScaler>
    );
}

export default F;
