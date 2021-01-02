import React from 'react';
import { motion } from 'framer-motion';
import LetterScaler from './LetterScaler';
import { AlphaProps } from '../Letter';

const Z = (props: AlphaProps) => {
    return (
        <LetterScaler width={props.width}>
            <motion.rect id="ee-background" x="0" y="0" width="150" height="150" style={{ fill: 'white', fillOpacity: 0, pointerEvents: 'none'}}/>
            <motion.path 
                d="M 205.1999969482422 631.9000244140625 L 324.3999938964844 631.9000244140625 L 264.79998779296875 691.5 L 205.1999969482422 691.5 Z"
                style={{ fill: 'rgb(191, 215, 48)'}} 
                transform="matrix(1, 0, 0, 1, -188.33494567871094, -615.3684692382812)"
            />
            <motion.path 
                d="M 205.1999969482422 751.0999755859375 L 324.3999938964844 751.0999755859375 L 324.3999938964844 691.5 L 264.79998779296875 691.5 Z"
                style={{ fill: 'rgb(141, 198, 63)'}} 
                transform="matrix(1, 0, 0, 1, -188.33494567871094, -615.3684692382812)"
            />
        </LetterScaler>
    );
}

export default Z;
