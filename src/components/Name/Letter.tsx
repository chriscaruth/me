import React, { useEffect, useState } from 'react';
import useScrollPosition from '@react-hook/window-scroll';
import { motion } from 'framer-motion';
import A from './Letters/A';
import B from './Letters/B';
import C from './Letters/C';

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
    const scrollY = useScrollPosition();
    const [rotation, setRotation] = useState(0);

    useEffect(() => {
        setRotation(scrollY / 15)
    }, [scrollY])

    const letter = (letter: string) => {
        switch (letter.toLowerCase()) {
            case 'a':
                return <A />
            case 'b':
                return <B />
            case 'c':
                return <C />

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
            animate={{
                y: [0, 25, 0],
                opacity: [1, 1, 1],
                scale: [.95, 1, .95],
                rotateZ:  [rotation, rotation, rotation]
            }}
            transition={{
                loop: Infinity,
                delay: scrollY === 0 ? .1 * props.index : 0,
                duration: scrollY === 0 ? 2 : 2,
                ease: scrollY === 0 ? 'easeInOut' : 'linear'
            }}
        >
            {letter(props.letter)}
        </motion.div>
    );
}

export default Letter;
