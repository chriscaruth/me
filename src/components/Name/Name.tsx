import React, { FunctionComponent, useEffect, useRef, useState } from 'react';
import { Flex } from 'rebass';
import { AnimatePresence, motion, useTransform, useViewportScroll } from 'framer-motion';
import Letter from './Letter';
import Edit from './Edit';
import Editor from './Editor';

interface NameProps {
    first: string;
    last?: string;
    allowEdit?: boolean;
    width: number;
}

const Name : FunctionComponent<NameProps> = props => {
    const [ editMode, setEditMode ] = useState(false);
    
    const { scrollY } = useViewportScroll();
    const opacityTransformer = useTransform(scrollY, [0, 1000], [1, 0]);

    const [ firstName, setFirstName ] = useState(props.first);
    const [ lastName, setLastName ] = useState(props.last);

    const calculateLetterWidth = () : number => {
        const max = Math.max(firstName.length, lastName?.length || 0);
        const letterMultiplier = (props.width || 0) >= 1000 ? .66 : .78;
        return Math.min(((props.width || 0) / max) * letterMultiplier, 180);
    }

    const updateName = (firstName: string, lastName: string, useDefaults: boolean) => {
        setFirstName(useDefaults ? props.first : firstName);
        setLastName(useDefaults ? props.last : lastName);
        setEditMode(false);
    }

    const [ letterWidth, setLetterWidth ] = useState(168);

    useEffect(() => {
        setLetterWidth(calculateLetterWidth());
    }, [firstName, lastName, props.width])

    return (
        <>
            <AnimatePresence>
                {!editMode &&
                    <motion.div layout
                        initial={{
                            y: -100,
                            opacity: 1
                        }}
                        style={{
                            opacity: opacityTransformer
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
                                        key={`first-name-letter-${i}`}
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
                                    key={`last-name-letter-${i}`}
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
                    <Editor onUpdate={updateName} />
                }
            </AnimatePresence>
        </>
    );
}

export default Name;
