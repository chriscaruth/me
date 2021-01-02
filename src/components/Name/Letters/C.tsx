import React from 'react';
import { motion } from 'framer-motion';
import LetterScaler from './LetterScaler';
import { AlphaProps } from '../Letter';

const C = (props: AlphaProps) => {
    return (
        <LetterScaler width={props.width}>
            <motion.rect id="ee-background" x="0" y="0" width="150" height="150" style={{ fill: 'white', fillOpacity: 0, pointerEvents: 'none'}}/>
            <motion.path d="M436.7,27.4c-32.9,0-59.6,26.7-59.6,59.6h59.6h59.6V27.4H436.7z" style={{ fill: 'rgb(227, 151, 76)'}} transform="matrix(1, 0, 0, 1, -364.6300964355469, -12.472578048706055)"/>
            <motion.path d="M436.7,146.7c-32.9,0-59.6-26.7-59.6-59.6h59.6h59.6v59.6H436.7z" style={{ fill: 'rgb(221, 131, 40)'}} transform="matrix(1, 0, 0, 1, -364.6300964355469, -12.472578048706055)"/>
        </LetterScaler>
    );
}

export default C;
