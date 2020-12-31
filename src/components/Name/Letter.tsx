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
    const { scrollY } = useViewportScroll();

    //should have seperate random transformers for x and y
    const xRandom = Math.random();
    const xDirectional = xRandom >= .5;
    const xTransformer = useTransform(scrollY, value => value * xRandom * (xDirectional ? -.5 : .5));

    const yRandom = Math.random();
    const yDirectional = yRandom >= .5;
    const yTransformer = useTransform(scrollY, value => value * yRandom * (yDirectional ? -.5 : .5));

    const zRandom = Math.random();
    const zDirectional = zRandom >= .5;
    const zTransformer = useTransform(scrollY, value => value * zRandom * (zDirectional ? -.5 : .5));

    //should be random to letter
    const scalerRandom = Math.random();
    const scaler = scalerRandom >= .5 ? scalerRandom : scalerRandom + 1;
    const scaleTransformer = useTransform(scrollY, [0, 1000], [1, scaler]);

    //standard for all
    const opacityTransformer = useTransform(scrollY, [0, 1000], [1, 0]);

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
                x: xTransformer,
                y: yTransformer,
                rotateZ: zTransformer,
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
