import React from 'react';
import { motion, useTransform, useViewportScroll } from 'framer-motion';
import A from './Letters/A';
import B from './Letters/B';
import C from './Letters/C';
import D from './Letters/D';
import E from './Letters/E';
import F from './Letters/F';
import G from './Letters/G';
import H from './Letters/H';
import I from './Letters/I';
import J from './Letters/J';
import K from './Letters/K';
import L from './Letters/L';
import M from './Letters/M';
import N from './Letters/N';
import O from './Letters/O';
import P from './Letters/P';
import Q from './Letters/Q';
import R from './Letters/R';
import S from './Letters/S';
import T from './Letters/T';
import U from './Letters/U';
import V from './Letters/V';
import W from './Letters/W';
import X from './Letters/X';
import Y from './Letters/Y';
import Z from './Letters/Z';

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
            case 'f':
                return <F />
            case 'g':
                return <G />
            case 'h':
                return <H />
            case 'i':
                return <I />
            case 'j':
                return <J />
            case 'k':
                return <K />
            case 'l':
                return <L />
            case 'm':
                return <M />
            case 'n':
                return <N />
            case 'o':
                return <O />
            case 'p':
                return <P />
            case 'q':
                return <Q />
            case 'r':
                return <R />
            case 's':
                return <S />
            case 't':
                return <T />
            case 'u':
                return <U />
            case 'v':
                return <V />
            case 'w':
                return <W />
            case 'x':
                return <X />
            case 'y':
                return <Y />
            case 'z':
                return <Z />
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
            initial={{
                opacity: 0
            }}
            animate={{
                opacity: 1
            }}
            transition={{
                delay: .1 * props.index,
                duration: 1,
            }}
        >
            <motion.div
                initial={{
                    y: 0
                }}
                animate={{
                    y: [0, 25, 0],
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
