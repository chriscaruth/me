import React from 'react';
import { motion } from 'framer-motion';
import { Box } from 'rebass';
import A from './Letters/A';

interface LetterProps {
    letter: string;
    index: number;
}

const Letter = (props: LetterProps) => {
    const letter = (letter: string) => {
        switch (letter.toLowerCase()) {
            case 'a':
                return <A />
        }
    }
    return (        
        <motion.div
            initial={{
                y: 0,
                opacity: 0
            }}
            animate={{
                y: [0, 20, 0],
                opacity: [1, 1, 1],
                scale: [1, 1.025, 1]
            }}
            transition={{
                loop: Infinity,
                delay: .05 * props.index,
                duration: 2.5
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
