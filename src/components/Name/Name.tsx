import React, { FunctionComponent, useEffect, useRef, useState } from 'react';
import { Flex } from 'rebass';
import { AnimatePresence, motion } from 'framer-motion';
import useScreenDimensions from '../../hooks/useScreenDimensions';
import Letter from './Letter';
import Edit from './Edit';

interface NameProps {
    first: string;
    last?: string;
    allowEdit?: boolean;
}

const Name : FunctionComponent<NameProps> = props => {
    const [ editMode, setEditMode ] = useState(false);
    const screen = useScreenDimensions();

    const [ firstName, setFirstName ] = useState(props.first);
    const [ lastName, setLastName ] = useState(props.last);
    const firstNameInput = useRef<HTMLInputElement>(null);
    const lastNameInput = useRef<HTMLInputElement>(null);

    const [ letterWidth, setLetterWidth ] = useState(0);

    const updateName = () => {
        let useDefaults = !(firstNameInput.current?.value || lastNameInput.current?.value);
        setFirstName(firstNameInput.current?.value || (useDefaults ? props.first : ''));
        setLastName(lastNameInput.current?.value ||  (useDefaults ? props.last : ''));
        setEditMode(false);
    }

    useEffect(() => {
        const max = Math.max(firstName.length, lastName?.length || 0);
        const letterMultiplier = (screen.width || 0) >= 1000 ? .66 : .78;
        setLetterWidth(Math.min(((screen.width || 0) / max) * letterMultiplier, 175));
    }, [firstName, lastName, screen])

    return (
        <>
            <AnimatePresence>
                {!editMode &&
                    <motion.div layout
                        initial={{
                            y: -100,
                            opacity: 1
                        }}
                        transition={{
                            duration: .25,
                            ease: 'easeIn'
                        }}
                        animate={{
                            y: [-100, 0]
                        }}
                        exit={{
                            opacity: 0,
                            y: -100
                        }}
                    >
                        <Flex justifyContent="center">
                            <Flex style={{ position: 'relative' }}>
                                {[...firstName].map((x, i) => 
                                    <Letter
                                        width={letterWidth}
                                        letter={x} 
                                        index={i}
                                    />
                                )}
                                {props.allowEdit &&
                                    <Edit
                                        width={Math.max(letterWidth/3.2, 30)}
                                        onClick={() => setEditMode(!editMode)} 
                                        animationDelay={firstName.length} 
                                    />
                                }
                            </Flex>
                        </Flex>
                        <Flex justifyContent="center">
                            {[...lastName || []].map((x, i) => 
                                <Letter
                                    width={letterWidth}
                                    letter={x} 
                                    index={i}
                                />
                            )}
                        </Flex>
                    </motion.div>
                }
            </AnimatePresence>
            <AnimatePresence>
                {editMode &&
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
                }
            </AnimatePresence>
        </>
    );
}

export default Name;
