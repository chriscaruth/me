import React from 'react';
import { motion } from 'framer-motion';
import LetterScaler from './LetterScaler';
import { AlphaProps } from '../Letter';

const M = (props: AlphaProps) => {
    return (
        <LetterScaler width={props.width}>
            <motion.rect id="ee-background" x="0" y="0" width="150" height="150" style={{ fill: 'white', fillOpacity: 0, pointerEvents: 'none'}}/>
            <g transform="matrix(1, 0, 0, 1, -704.655517578125, -211.9569549560547)">
                <g>
                    <motion.path 
                        d="M 720.7999877929688 228.89999389648438 L 720.7999877929688 348.1000061035156 L 840 348.1000061035156 Z"
                        style={{ fill: 'rgb(240, 91, 137)'}} 
                    />
                </g>
            </g>
            <motion.path 
                d="M 840 228.89999389648438 L 840 348.1000061035156 L 720.7999877929688 348.1000061035156 Z"
                style={{ fill: 'rgb(237, 9, 115)'}} 
                transform="matrix(1, 0, 0, 1, -704.655517578125, -211.9569549560547)"
            />
        </LetterScaler>
    );
}

export default M;
