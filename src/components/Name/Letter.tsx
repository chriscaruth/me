import React from 'react';
import { motion } from 'framer-motion';
import { Box } from 'rebass';
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
            initial={{
                y: 0,
                opacity: 0
            }}
            animate={{
                y: [0, 25, 0],
                opacity: [1, 1, 1],
                scale: [1, 1.025, 1]
            }}
            transition={{
                loop: Infinity,
                delay: .1 * props.index,
                duration: 3
            }}
        >
            <Box
                p={1}
            >
                {letter(props.letter)}
            </Box>
        </motion.div>
    );
}

export default Letter;
