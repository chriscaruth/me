import React, { FunctionComponent, useEffect, useState } from 'react';
import { motion, useTransform, useViewportScroll } from 'framer-motion';
import LetterScaler from './Letters/LetterScaler';
import useScreenDimensions from '../../hooks/useScreenDimensions';

interface EditProps {
    onClick: () => void;
    animationDelay: number;
    width: number;
}

const Edit: FunctionComponent<EditProps> = props => {
    const { scrollY } = useViewportScroll();
    const screen = useScreenDimensions();

    const opacityTransformer = useTransform(scrollY, [0, 50], [1, 0]);

    return (
        <motion.div
            style={{
                position: 'absolute',
                right: `-${props.width}px`,
                top: `-${props.width/2}px`,
                cursor: 'pointer'
            }}
            initial={{
                opacity: 0
            }}
            animate={{
                opacity: 1
            }}
            transition={{
                delay: .1 * props.animationDelay,
                duration: 1,
            }}
        >
            <motion.div
                onClick={props.onClick}
                style={{
                    opacity: opacityTransformer,
                }}
                initial={{
                    y: 0
                }}
                animate={{
                    y: [0, 25, 0],
                    scale: [.95, 1, .95]
                }}
                transition={{
                    repeat: Infinity,
                    delay: .1 * props.animationDelay,
                    duration: 3,
                }}
            >
                <LetterScaler viewBox="0 0 75 75" width={props.width}>
                    <defs>
                        <path d="M 0 0 H 1400 V 980 H 0 V 0 Z" id="SVGID_1_"/>
                    </defs>
                    <clipPath id="SVGID_2_">
                        <use style={{overflow: "visible" }} xlinkHref="#SVGID_1_"/>
                    </clipPath>
                    <g transform="matrix(0.30838266015052795, 0, 0, 0.30838266015052795, -28.60288429260254, -18.273269653320312)" style={{ clipPath: "url('#SVGID_2_')"}}>
                        <path d="M146.5,207.2c-0.1,0.2-0.2,0.3-0.3,0.5c0,0.1-0.1,0.1-0.1,0.2l-15.2,32c0,0,0,0,0,0c-0.1,0.1-0.1,0.3-0.2,0.5l-7.9,24.8&#10;&#9;&#9;&#9;&#9;c-0.4,1.3-0.1,2.8,0.9,3.8l1.6,1.6c1,1,2.5,1.4,3.8,0.9l24.8-7.9c0.2-0.1,0.3-0.1,0.5-0.2c0,0,0,0,0,0l32-15.2&#10;&#9;&#9;&#9;&#9;c0.1,0,0.1-0.1,0.2-0.1c0.2-0.1,0.3-0.2,0.5-0.3c0.1-0.1,0.2-0.1,0.2-0.2c0.1,0,0.1-0.1,0.2-0.1l93.3-93.3l16.3-16.3&#10;&#9;&#9;&#9;&#9;c7.5-7.5,7.5-19.6,0-27.1l-13.4-13.4c-7.5-7.5-19.6-7.5-27.1,0l-7.3,7.3l-8.9,8.9l-93.3,93.3c-0.1,0.1-0.1,0.1-0.1,0.2&#10;&#9;&#9;&#9;&#9;C146.6,207.1,146.5,207.2,146.5,207.2z M261.7,102.6c4.5-4.5,11.9-4.5,16.5,0l13.4,13.4c4.5,4.5,4.5,11.9,0,16.5l-4.7,4.7&#10;&#9;&#9;&#9;&#9;L257,107.3L261.7,102.6z M153.5,255.3l-14.6-14.6l11.8-24.8l7.3,7.3l20.3,20.3L153.5,255.3z M166,220.6l87.9-87.9l7,7l-87.9,87.9&#10;&#9;&#9;&#9;&#9;L166,220.6z M266.2,145l6.4,6.4l-87.9,87.9l-6.4-6.4L266.2,145z M242.8,121.6l5.8,5.8l-87.9,87.9l-5.8-5.8L242.8,121.6z&#10;&#9;&#9;&#9;&#9; M281.5,142.5l-3.6,3.6l-29.9-29.9l3.6-3.6L281.5,142.5z"/>
                    </g>
                </LetterScaler>
            </motion.div>
        </motion.div>
        
    );
}

export default Edit;
