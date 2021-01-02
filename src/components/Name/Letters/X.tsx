import React from 'react';
import { motion } from 'framer-motion';
import LetterScaler from './LetterScaler';
import { AlphaProps } from '../Letter';

const X = (props: AlphaProps) => {
    return (
        <LetterScaler width={props.width}>
            <motion.rect id="ee-background" x="0" y="0" width="150" height="150" style={{ fill: 'white', fillOpacity: 0, pointerEvents: 'none'}}/>
            <motion.path 
                d="M 1225.800049 449.100006 H 1366.100052 V 508.700005 H 1225.800049 V 449.100006 Z"
                style={{ fill: 'rgb(255, 203, 5)'}} 
                transform="matrix(0.6094725131988524, -0.6094725131988524, 0.6094725131988524, 0.6094725131988524, -1006.2118530273436, 574.3870849609374)"
            />
            <motion.path 
                d="M 1225.800049 449.100006 H 1366.100052 V 508.700005 H 1225.800049 V 449.100006 Z"
                style={{ fill: 'rgb(255, 221, 0)'}} 
                transform="matrix(0.6094725131988524, 0.6094725131988524, -0.6094725131988524, 0.6094725131988524, -422.4155273437499, -1005.3177490234373)"
            />
        </LetterScaler>
    );
}

export default X;
