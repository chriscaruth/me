import React from 'react';
import { motion } from 'framer-motion';
import LetterScaler from './LetterScaler';
import { AlphaProps } from '../Letter';

const H = (props: AlphaProps) => {
    return (
        <LetterScaler width={props.width}>
            <motion.rect id="ee-background" x="0" y="0" width="150" height="150" style={{ fill: 'white', fillOpacity: 0, pointerEvents: 'none'}}/>
            <motion.path 
                d="M 1236.300049 27.4 H 1295.900047 V 146.599997 H 1236.300049 V 27.4 Z"
                transform="matrix(1, 0, 0, 1, -1220.655517578125, -12.081340789794922)"
                animate={{
                    fill: ['fill: rgb(130, 202, 156)', 'rgb(118, 184, 143)', 'rgb(130, 202, 156)'],
                    transition: {
                        duration: 8,
                        ease: 'easeInOut',
                        repeat: Infinity
                    }
                }}
            />
            <motion.path 
                d="M 1296 27.4 H 1355.599998 V 146.599997 H 1296 V 27.4 Z"
                transform="matrix(1, 0, 0, 1, -1220.655517578125, -12.081340789794922)"
                animate={{
                    fill: ['fill: rgb(118, 184, 143)', 'rgb(130, 202, 156)', 'rgb(118, 184, 143)'],
                    transition: {
                        duration: 2,
                        ease: 'easeInOut',
                        repeat: Infinity
                    }
                }}
            />
        </LetterScaler>
    );
}

export default H;
