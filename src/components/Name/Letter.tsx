import React, { useEffect, useRef, useState } from 'react';
import useScrollPosition from '@react-hook/window-scroll';
import { motion, useElementScroll, useMotionValue, useTransform, useViewportScroll } from 'framer-motion';
import A from './Letters/A';
import B from './Letters/B';
import C from './Letters/C';
import D from './Letters/D';
import E from './Letters/E';

import H from './Letters/H';
import I from './Letters/I';

import R from './Letters/R';
import S from './Letters/S';
import T from './Letters/T';

import U from './Letters/U';

interface LetterProps {
    letter: string;
    index: number;
}

const Letter = (props: LetterProps) => {
    const random = Math.random();
    const negative = Math.random() >= .5;
    const { scrollY } = useViewportScroll();    
    const randomTransformer = useTransform(scrollY, value => value * random * (negative ? -.5 : .5));
    const scaler = negative ? random : random + 1;
    const scaleTransformer = useTransform(scrollY, [0, 2000], [1, scaler]);
    const opacityTransformer = useTransform(scrollY, [0, 2000], [1, 0]);

    const letter = (letter: string) => {
        switch (letter.toLowerCase()) {
            case 'a':
                return <A />
            case 'b':
                return <B />
            case 'c':
                return <C />
            case 'd':
                return <D />
            case 'e':
                return <E />


            case 'h':
                return <H />
            case 'i':
                return <I />

            case 'r':
                return <R />
            case 's':
                return <S />
            case 't':
                return <T />

            case 'u':
                return <U />
        }
    }

    return (
        <motion.div
            style={{
                x: randomTransformer,
                y: randomTransformer,
                rotateZ: randomTransformer,
                scale: scaleTransformer,
                opacity: opacityTransformer
            }}
        >
            <motion.div
                initial={{
                    y: 0,
                    opacity: 0
                }}
                animate={{
                    y: [0, 25, 0],
                    opacity: [1, 1, 1],
                    scale: [.95, 1, .95]
                }}
                transition={{
                    loop: Infinity,
                    delay: .1 * props.index,
                    duration: 3,
                }}
            >
                {letter(props.letter)}
            </motion.div>
        </motion.div>
    );
}

export default Letter;
