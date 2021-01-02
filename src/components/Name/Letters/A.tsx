import React from 'react';
import { motion } from 'framer-motion';
import LetterScaler from './LetterScaler';
import { AlphaProps } from '../Letter';


const A = (props: AlphaProps) => {
    return (
        <LetterScaler width={props.width}>
            <motion.rect id="ee-background" x="0" y="0" width="150" height="150" style={{ fill: 'white', fillOpacity: 0, pointerEvents: 'none'}}/>
            <motion.path 
                d="M 33.400001525878906 146.6999969482422 L 93 27.399999618530273 L 152.60000610351562 146.6999969482422 Z"
                transform="matrix(1, 0, 0, 1, -18.942569732666016, -13.741611480712905)"
                animate={{                    
                    fill: ['rgb(120, 207, 225)', 'rgb(50, 107, 125)', 'rgb(120, 207, 225)'],
                    transition: {
                        duration: 8,
                        ease: 'easeInOut',
                        repeat: Infinity
                    }
                }}
            />
            <motion.path 
                d="M 92.5999984741211 146.6999969482422 L 152.60000610351562 146.6999969482422 L 122.5999984741211 86.69999694824219 Z"
                style={{ fill: 'rgb(3, 191, 215)'}} 
                transform="matrix(1, 0, 0, 1, -18.942569732666016, -13.741611480712905)"
            />
        </LetterScaler>
    );
}

export default A;
