import React, { FunctionComponent, useRef } from 'react';
import { motion } from 'framer-motion';
import { Flex } from 'rebass';

interface EditorProps {
    onUpdate: (firstName: string, lastName: string, useDefaults: boolean) => void;
}

const Editor : FunctionComponent<EditorProps> = props => {
    const firstNameInput = useRef<HTMLInputElement>(null);
    const lastNameInput = useRef<HTMLInputElement>(null);

    const updateName = () => {
        let useDefaults = !(firstNameInput.current?.value || lastNameInput.current?.value);
        props.onUpdate(firstNameInput.current?.value || '', lastNameInput.current?.value || '', useDefaults);
    }
    
    return (
        <motion.div layout
            initial={{
                opacity: 0,
                y: 100
            }}
            animate={{
                opacity: [0, 1],
                y: [100, 0]
            }}
            exit={{
                opacity: 0,
                y: 100
            }}
            transition={{
                duration: .25,
                ease: 'easeIn'
            }}
        >
            <Flex justifyContent="center">
                <input ref={firstNameInput} type="text" />
                <input ref={lastNameInput} type="text" />
                <button onClick={updateName} >Update</button>
            </Flex>
        </motion.div>
    );
}

export default Editor;
