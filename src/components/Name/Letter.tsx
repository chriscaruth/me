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

export interface AlphaProps {
    width: number
}

interface LetterProps {
    letter: string;
    index: number;
    width: number;
}

const Letter = (props: LetterProps) => {
    const { scrollY } = useViewportScroll();
    
    const speed = .9;

    const xRandom = Math.random();
    const xDirectional = xRandom >= .5;
    const xTransformer = useTransform(scrollY, value => value * xRandom * (xDirectional ? -speed : speed));

    const yRandom = Math.random();
    const yDirectional = yRandom >= .5;
    const yTransformer = useTransform(scrollY, value => value * yRandom * (yDirectional ? -speed : speed));

    const zRandom = Math.random();
    const zDirectional = zRandom >= .5;
    const zTransformer = useTransform(scrollY, value => value * zRandom * (zDirectional ? -speed : speed));

    const scalerRandom = Math.random();
    const scaler = scalerRandom >= .5 ? scalerRandom : scalerRandom + 1;
    const scaleTransformer = useTransform(scrollY, [0, 1000], [1, scaler]);

    const letter = (letter: string) => {
        switch (letter.toLowerCase()) {
            case 'a':
                return <A width={props.width} />
            case 'b':
                return <B width={props.width} />
            case 'c':
                return <C width={props.width} />
            case 'd':
                return <D width={props.width} />
            case 'e':
                return <E width={props.width} />
            case 'f':
                return <F width={props.width} />
            case 'g':
                return <G width={props.width} />
            case 'h':
                return <H width={props.width} />
            case 'i':
                return <I width={props.width} />
            case 'j':
                return <J width={props.width} />
            case 'k':
                return <K width={props.width} />
            case 'l':
                return <L width={props.width} />
            case 'm':
                return <M width={props.width} />
            case 'n':
                return <N width={props.width} />
            case 'o':
                return <O width={props.width} />
            case 'p':
                return <P width={props.width} />
            case 'q':
                return <Q width={props.width} />
            case 'r':
                return <R width={props.width} />
            case 's':
                return <S width={props.width} />
            case 't':
                return <T width={props.width} />
            case 'u':
                return <U width={props.width} />
            case 'v':
                return <V width={props.width} />
            case 'w':
                return <W width={props.width} />
            case 'x':
                return <X width={props.width} />
            case 'y':
                return <Y width={props.width} />
            case 'z':
                return <Z width={props.width} />
        }
    }

    return (
        <motion.div
            style={{
                x: xTransformer,
                y: yTransformer,
                rotateZ: zTransformer,
                scale: scaleTransformer
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
                ease: 'easeIn'
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
                    repeat: Infinity,
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
