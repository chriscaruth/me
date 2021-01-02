import React, { FunctionComponent } from 'react';
import { motion } from 'framer-motion';

interface LetterScalerProps {
    width?: number;
    height?: string | number;
    viewBox?: string;
    x?: number;
    y?: number;
}

const LetterScaler : FunctionComponent<LetterScalerProps> = props => {
    return (
        <motion.svg 
            viewBox={props.viewBox || "0 0 150 150"}
            version="1.1" 
            xmlns="http://www.w3.org/2000/svg" 
            x={props.x ? `${props.x}px` : "0px"}  
            y={props.y ? `${props.y}px` : "0px"} 
            width={props.width ? `${props.width}px` : "100%"} 
            height={props.height ? `${props.height}px` : "100%"}
        >
            {props.children}
        </motion.svg>
    );
}

export default LetterScaler;
