import React from 'react';
import { motion } from 'framer-motion';
import LetterScaler from './LetterScaler';
import { AlphaProps } from '../Letter';

const I = (props: AlphaProps) => {
    return (
        <LetterScaler width={props.width * .66} viewBox="0 0 100 150">
           <motion.rect id="ee-background" x="0" y="0" width="100" height="150" style={{ fill: 'white', fillOpacity: 0, pointerEvents: 'none'}}/>
            <motion.g transform="matrix(1, 0, 0, 1, -42.18182373046875, -212.9569549560547)">
                <motion.path 
                    d="M 63.200001 228.899994 H 122.799999 V 348.099991 H 63.200001 V 228.899994 Z" 
                    style={{ fill: 'rgb(231, 193, 87)'}}
                    animate={{
                        x: [-10, 10, -10],
                        transition: {
                            duration: 5,
                            repeat: Infinity
                        }
                    }}
                />
		    </motion.g>
        </LetterScaler>
    );
}

export default I;
