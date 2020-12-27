import React from 'react';
import { motion } from 'framer-motion';

const T = () => {
    return (
        <motion.svg id="master-artboard" viewBox="0 0 150 150" version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="150px" height="150px">
           <motion.rect id="ee-background" x="0" y="0" width="150" height="150" style={{ fill: 'white', fillOpacity: 0, pointerEvents: 'none'}}/>
            <motion.g transform="matrix(1, 0, 0, 1, -533.5215454101562, -414.1722717285156)">
                <motion.path 
                    d="M 578.700012 430.399994 H 638.300011 V 549.599991 H 578.700012 V 430.399994 Z" 
                    style={{ fill: 'rgb(120, 207, 225)'}}
                />
		    </motion.g>
            <motion.path 
                d="M 548.900024 430.399994 H 668.100021 V 482.599995 H 548.900024 V 430.399994 Z" 
                fill="rgb(3, 191, 215)" 
                transform="matrix(1, 0, 0, 1, -533.5215454101562, -414.1722717285156)"/>
        </motion.svg>
    );
}

export default T;
