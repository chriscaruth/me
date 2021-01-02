import React from 'react';
import { motion } from 'framer-motion';
import LetterScaler from './LetterScaler';
import { AlphaProps } from '../Letter';

const S = (props: AlphaProps) => {
    return (
        <LetterScaler width={props.width}>
           <motion.rect id="ee-background" x="0" y="0" width="150" height="150" style={{ fill: 'white', fillOpacity: 0, pointerEvents: 'none'}}/>
            <motion.g transform="matrix(1, 0, 0, 1, -360.9282531738281, -415.0526428222656)">
                <motion.path 
                    d="M468,549.6c16.5,0,29.8-13.3,29.8-29.8c0-16.5-13.3-29.8-29.8-29.8h-89.4v59.6H468z" 
                    style={{ fill: ' rgb(133, 31, 131)'}}
                />
		    </motion.g>
            <motion.path 
                d="M405.4,490c-16.5,0-29.8-13.3-29.8-29.8c0-16.5,13.3-29.8,29.8-29.8h89.4V490H405.4z" 
                fill="rgb(153, 63, 152)" 
                transform="matrix(1, 0, 0, 1, -360.9282531738281, -415.0526428222656)"/>
        </LetterScaler>
    );
}

export default S;
