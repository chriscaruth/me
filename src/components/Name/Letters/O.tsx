import React from 'react';
import { motion } from 'framer-motion';
import LetterScaler from './LetterScaler';
import { AlphaProps } from '../Letter';

const O = (props: AlphaProps) => {
    return (
        <LetterScaler 
            width={props.width}
        >
            <motion.rect id="ee-background" x="0" y="0" width="150" height="150" style={{ fill: 'white', fillOpacity: 0, pointerEvents: 'none'}}/>
            <g transform="matrix(1, 0, 0, 1, -1047.3828125, -211.7368621826172)">
                <g>
                    <motion.path 
                        d="M1124.1,348.1c-32.9,0-59.6-26.7-59.6-59.6c0-32.9,26.7-59.6,59.6-59.6V348.1z"
                        style={{ fill: 'rgb(247, 148, 30)'}} 
                    />
                </g>
            </g>
            <motion.path 
                d="M1124.1,348.1c32.9,0,59.6-26.7,59.6-59.6c0-32.9-26.7-59.6-59.6-59.6V348.1z"
                style={{ fill: 'rgb(224, 134, 26)'}} 
                transform="matrix(1, 0, 0, 1, -1047.3828125, -211.7368621826172)"
            />
        </LetterScaler>
    );
}

export default O;
